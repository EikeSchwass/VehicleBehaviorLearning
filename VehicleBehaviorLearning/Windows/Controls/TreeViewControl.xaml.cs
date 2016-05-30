using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;
using VehicleBehaviorLearning.Engine.Vehicles.Behavior;

namespace VehicleBehaviorLearning.Windows.Controls
{
    /// <summary>
    /// Interaktionslogik für TreeViewControl.xaml
    /// </summary>
    public partial class TreeViewControl : UserControl
    {
        private List<Edge> Edges { get; } = new List<Edge>();
        private List<List<ITreeNode>> AnalyzedTreeNodes { get; } = new List<List<ITreeNode>>();

        public static readonly DependencyProperty TreeNodesProperty = DependencyProperty.Register(
                                                        "TreeNodes", typeof(IEnumerable<ITreeNode>), typeof(TreeViewControl), new PropertyMetadata(default(IEnumerable<ITreeNode>), TreeNodesPropertyChanged));

        public static readonly DependencyProperty LineStrokeProperty = DependencyProperty.Register(
                                                        "LineStroke", typeof(Brush), typeof(TreeViewControl), new PropertyMetadata(new SolidColorBrush(Colors.YellowGreen)));

        public static readonly DependencyProperty LineThicknessProperty = DependencyProperty.Register(
                                                        "LineThickness", typeof(double), typeof(TreeViewControl), new PropertyMetadata(2.0));

        public static readonly DependencyProperty IsReadonlyProperty = DependencyProperty.Register(
                                                        "IsReadonly", typeof(bool), typeof(TreeViewControl), new PropertyMetadata(false));

        public static readonly DependencyProperty HighlightBrushParentEdgesProperty = DependencyProperty.Register(
                                                        "HighlightBrushParentEdges", typeof(Brush), typeof(TreeViewControl), new PropertyMetadata(Brushes.Green));

        public static readonly DependencyProperty HighlightBrushChildEdgesProperty = DependencyProperty.Register(
                                                        "HighlightBrushChildEdges", typeof(Brush), typeof(TreeViewControl), new PropertyMetadata(Brushes.IndianRed));

        public static readonly DependencyProperty HighlightParentEdgeThicknessProperty = DependencyProperty.Register(
                                                        "HighlightParentEdgeThickness", typeof(double), typeof(TreeViewControl), new PropertyMetadata(4.0));

        public static readonly DependencyProperty HighlightChildEdgeThicknessProperty = DependencyProperty.Register(
                                                        "HighlightChildEdgeThickness", typeof(double), typeof(TreeViewControl), new PropertyMetadata(4.0));

        public static readonly DependencyProperty NodeRadiusProperty = DependencyProperty.Register(
                                                        "NodeRadius", typeof(double), typeof(TreeViewControl), new PropertyMetadata(8.0));

        public static readonly DependencyProperty EllipsesProperty = DependencyProperty.Register(
                                                        "Ellipses", typeof(IReadOnlyList<Ellipse>), typeof(TreeViewControl), new PropertyMetadata(new List<Ellipse>().AsReadOnly()));

        public IReadOnlyList<Ellipse> Ellipses
        {
            get { return (IReadOnlyList<Ellipse>)GetValue(EllipsesProperty); }
            private set { SetValue(EllipsesProperty, value); }
        }

        public double NodeRadius
        {
            get { return (double)GetValue(NodeRadiusProperty); }
            set { SetValue(NodeRadiusProperty, value); }
        }

        public double HighlightChildEdgeThickness
        {
            get { return (double)GetValue(HighlightChildEdgeThicknessProperty); }
            set { SetValue(HighlightChildEdgeThicknessProperty, value); }
        }

        public double HighlightParentEdgeThickness
        {
            get { return (double)GetValue(HighlightParentEdgeThicknessProperty); }
            set { SetValue(HighlightParentEdgeThicknessProperty, value); }
        }

        public Brush HighlightBrushChildEdges
        {
            get { return (Brush)GetValue(HighlightBrushChildEdgesProperty); }
            set { SetValue(HighlightBrushChildEdgesProperty, value); }
        }

        public Brush HighlightBrushParentEdges
        {
            get { return (Brush)GetValue(HighlightBrushParentEdgesProperty); }
            set { SetValue(HighlightBrushParentEdgesProperty, value); }
        }

        public bool IsReadonly
        {
            get { return (bool)GetValue(IsReadonlyProperty); }
            set { SetValue(IsReadonlyProperty, value); }
        }

        public double LineThickness
        {
            get { return (double)GetValue(LineThicknessProperty); }
            set { SetValue(LineThicknessProperty, value); }
        }

        public Brush LineStroke
        {
            get { return (Brush)GetValue(LineStrokeProperty); }
            set { SetValue(LineStrokeProperty, value); }
        }

        public IEnumerable<ITreeNode> TreeNodes
        {
            get { return (IEnumerable<ITreeNode>)GetValue(TreeNodesProperty); }
            set { SetValue(TreeNodesProperty, value); }
        }

        public Func<ITreeNode, ITreeNode, Line> GenerateEdge { get; set; }

        public event Action<object, ITreeNode> TreeNodeClicked;
        public event Action<object, ITreeNode> TreeNodeMouseEnter;
        public event Action<object, ITreeNode> TreeNodeMouseLeave;

        private static void TreeNodesPropertyChanged(DependencyObject dp, DependencyPropertyChangedEventArgs e)
        {
            TreeViewControl treeViewControl = (TreeViewControl)dp;
            var oldCollection = e.OldValue as INotifyCollectionChanged;
            var newCollection = e.NewValue as INotifyCollectionChanged;
            if (oldCollection != null)
                oldCollection.CollectionChanged -= treeViewControl.TreeNodesChanged;
            if (newCollection != null)
                newCollection.CollectionChanged += treeViewControl.TreeNodesChanged;
            treeViewControl.Redraw();
        }

        public TreeViewControl()
        {
            InitializeComponent();
        }

        private void TreeNodesChanged(object sender, NotifyCollectionChangedEventArgs e)
        {
            Redraw();
        }

        private void Redraw()
        {
            List<Ellipse> ellipses = new List<Ellipse>();
            RootCanvas.Children.Clear();
            AnalyzedTreeNodes.Clear();
            Edges.Clear();

            if (TreeNodes == null)
                return;

            var treeNodes = TreeNodes.ToList();

            if (treeNodes.Count == 0)
                return;

            foreach (var root in treeNodes.Where(t => t.ParentNode == null))
            {
                AddNodeRecursive(root, treeNodes);
            }

            double distanceX = RootCanvas.ActualWidth / AnalyzedTreeNodes.Count;
            double offsetX = distanceX / 2;

            for (int x = 0; x < AnalyzedTreeNodes.Count; x++)
            {
                double distanceY = RootCanvas.ActualHeight / AnalyzedTreeNodes[x].Count;
                double offsetY = distanceY / 2;

                for (int y = 0; y < AnalyzedTreeNodes[x].Count; y++)
                {
                    ITreeNode currentNode = AnalyzedTreeNodes[x][y];
                    double posX = x * distanceX + offsetX;
                    double posY = y * distanceY + offsetY;
                    var contentControl = new Ellipse { Width = NodeRadius * 2, Height = NodeRadius * 2, Tag = currentNode, Fill = new SolidColorBrush(Color.FromArgb(180, 180, 180, 180)), Stroke = Brushes.Black, StrokeThickness = 1 };
                    contentControl.MouseEnter += NodeMouseEnter;
                    contentControl.MouseLeave += NodeMouseLeave;
                    contentControl.MouseDown += (o, e) => TreeNodeClicked?.Invoke(this, currentNode);
                    ellipses.Add(contentControl);
                    RootCanvas.Children.Add(contentControl);
                    UpdateLayout();
                    Canvas.SetLeft(contentControl, posX - contentControl.ActualWidth / 2);
                    Canvas.SetTop(contentControl, posY - contentControl.ActualHeight / 2);

                    if (x > 0)
                    {
                        foreach (var treeNodeFrom in AnalyzedTreeNodes[x - 1].Where(node => currentNode.ParentNode == node))
                        {
                            var fromControl = new List<FrameworkElement>(RootCanvas.Children.Cast<FrameworkElement>()).First(c => c.Tag == treeNodeFrom);
                            double toX = Canvas.GetLeft(contentControl) + contentControl.ActualWidth / 2;
                            double toY = Canvas.GetTop(contentControl) + contentControl.ActualHeight / 2;
                            double fromX = Canvas.GetLeft(fromControl) + fromControl.ActualWidth / 2;
                            double fromY = Canvas.GetTop(fromControl) + fromControl.ActualHeight / 2;
                            Line line = null;
                            if (GenerateEdge != null)
                                line = GenerateEdge(treeNodeFrom, currentNode);
                            else
                                line = new Line { Stroke = LineStroke, StrokeThickness = LineThickness, X1 = fromX, X2 = toX, Y1 = fromY, Y2 = toY };
                            Edges.Add(new Edge(treeNodeFrom, currentNode, line, fromControl, contentControl));
                            RootCanvas.Children.Add(line);
                            Panel.SetZIndex(line, -1);

                        }
                    }
                }
            }
            Ellipses = ellipses.AsReadOnly();
        }

        private void NodeMouseLeave(object sender, MouseEventArgs e)
        {
            Ellipse ellipse = (Ellipse)sender;
            UnMarkEllipse(ellipse);
            TreeNodeMouseLeave?.Invoke(this, (ITreeNode)ellipse.Tag);
        }

        private void NodeMouseEnter(object sender, MouseEventArgs e)
        {
            if (IsReadonly)
                return;
            Ellipse ellipse = (Ellipse)sender;
            MarkEllipse(ellipse);
            TreeNodeMouseEnter?.Invoke(this, (ITreeNode)ellipse.Tag);
        }

        public void MarkEllipse(Ellipse ellipse)
        {
            ellipse.Stroke = Brushes.White;
            {
                var previousEllipses = GetPreviousEllipses(ellipse).Concat(Enumerable.Repeat(ellipse, 1)).ToArray();
                foreach (var previousEllipse in previousEllipses)
                {
                    foreach (var source in Edges.Where(edge => Equals(edge.FromFrameworkElement, previousEllipse) && previousEllipses.Contains(edge.ToFrameworkElement)))
                    {
                        source.Line.StrokeThickness = HighlightParentEdgeThickness;
                        source.Line.Stroke = HighlightBrushParentEdges;
                    }
                }
            }
            {
                var nextEllipses = GetNextEllipses(ellipse).Concat(Enumerable.Repeat(ellipse, 1)).ToArray();
                foreach (var nextEllipse in nextEllipses)
                {
                    foreach (var source in Edges.Where(edge => Equals(edge.ToFrameworkElement, nextEllipse) && nextEllipses.Contains(edge.FromFrameworkElement)))
                    {
                        source.Line.StrokeThickness = HighlightChildEdgeThickness;
                        source.Line.Stroke = HighlightBrushChildEdges;
                    }
                }
            }
        }

        public void UnMarkEllipse(Ellipse ellipse)
        {
            ellipse.Stroke = Brushes.Black;
            var previousEllipses = GetPreviousEllipses(ellipse).Concat(Enumerable.Repeat(ellipse, 1)).Concat(GetNextEllipses(ellipse)).ToArray();
            foreach (var previousEllipse in previousEllipses)
            {
                foreach (var source in Edges.Where(edge => Equals(edge.FromFrameworkElement, previousEllipse) && previousEllipses.Contains(edge.ToFrameworkElement)))
                {
                    if (GenerateEdge != null)
                    {
                        var tempLine = GenerateEdge(source.From, source.To);
                        source.Line.StrokeThickness = tempLine.StrokeThickness;
                        source.Line.Stroke = tempLine.Stroke;
                    }
                    else
                    {
                        source.Line.StrokeThickness = LineThickness;
                        source.Line.Stroke = LineStroke;
                    }
                }
            }
        }

        private IEnumerable<Ellipse> GetPreviousEllipses(Ellipse start)
        {
            foreach (var ellipse in Edges.Where(edge => Equals(edge.ToFrameworkElement, start)))
            {
                yield return (Ellipse)ellipse.FromFrameworkElement;
                foreach (var ellipse2 in GetPreviousEllipses((Ellipse)ellipse.FromFrameworkElement))
                {
                    yield return ellipse2;
                }
            }
        }

        private IEnumerable<Ellipse> GetNextEllipses(Ellipse start)
        {
            foreach (var ellipse in Edges.Where(edge => Equals(edge.FromFrameworkElement, start)))
            {
                yield return (Ellipse)ellipse.ToFrameworkElement;
                foreach (var ellipse2 in GetNextEllipses((Ellipse)ellipse.ToFrameworkElement))
                {
                    yield return ellipse2;
                }
            }
        }

        private void AddNodeRecursive(ITreeNode currentNode, List<ITreeNode> treeNodes, int currentDepth = 0)
        {
            if (AnalyzedTreeNodes.Count <= currentDepth)
            {
                AnalyzedTreeNodes.Add(new List<ITreeNode>());
            }
            AnalyzedTreeNodes[currentDepth].Add(currentNode);

            foreach (var nextNode in treeNodes.Where(t =>
                                                     {
                                                         if (t == currentNode)
                                                             return false;
                                                         int d = currentDepth;
                                                         bool? value = t.ParentNode?.Equals(currentNode);
                                                         return value == true;
                                                     }))
            {
                AddNodeRecursive(nextNode, treeNodes, currentDepth + 1);
            }
        }

        private void TreeViewControl_OnSizeChanged(object sender, SizeChangedEventArgs e)
        {
            Redraw();
        }
    }
}
