using System;
using System.Collections.Generic;
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
    /// Interaktionslogik für NeuronalNetDisplayControl.xaml
    /// </summary>
    public partial class NeuronalNetDisplayControl : UserControl
    {

        public static readonly DependencyProperty NeuronalNetProperty = DependencyProperty.Register(
                                                        "NeuronalNet", typeof(NeuronalVehicleBehavior), typeof(NeuronalNetDisplayControl), new PropertyMetadata(default(NeuronalVehicleBehavior)));

        public static readonly DependencyProperty NodeRadiusProperty = DependencyProperty.Register(
                                                        "NodeRadius", typeof(double), typeof(NeuronalNetDisplayControl), new PropertyMetadata(8.0));

        public double NodeRadius
        {
            get { return (double)GetValue(NodeRadiusProperty); }
            set { SetValue(NodeRadiusProperty, value); }
        }

        public NeuronalVehicleBehavior NeuronalNet
        {
            get { return (NeuronalVehicleBehavior)GetValue(NeuronalNetProperty); }
            set
            {
                SetValue(NeuronalNetProperty, value);
                UpdateView();
            }
        }

        public NeuronalNetDisplayControl()
        {
            InitializeComponent();
        }


        private void UpdateView()
        {
            RootCanvas.Children.Clear();
            if (NeuronalNet == null)
            {
                RootCanvas.Children.Clear();
                return;
            }

            int layers = NeuronalNet.Neurons.Length;
            int maxHeight = NeuronalNet.Neurons.Max(n => n.Length);

            double distanceX = RootCanvas.ActualWidth / layers;
            double offsetX = distanceX / 2;

            for (int layer = 0; layer < layers; layer++)
            {
                var neuronLayer = NeuronalNet.Neurons[layer];
                double distanceY = RootCanvas.ActualHeight / neuronLayer.Length;
                double offsetY = distanceY / 2;
                for (int index = 0; index < neuronLayer.Length; index++)
                {
                    var position = new Point(layer * distanceX + offsetX - NodeRadius, index * distanceY + offsetY - NodeRadius);
                    var ellipse = new Ellipse { Width = NodeRadius * 2, Height = NodeRadius * 2, Fill = index == 0 && layer < layers - 1 ? Brushes.Yellow : new SolidColorBrush(Color.FromArgb(180, 180, 180, 180)), StrokeThickness = 1, Stroke = Brushes.Black };
                    RootCanvas.Children.Add(ellipse);
                    Canvas.SetLeft(ellipse, position.X);
                    Canvas.SetTop(ellipse, position.Y);
                    Panel.SetZIndex(ellipse, 1);
                    if (layer < layers - 1)
                    {
                        double distanceYTo = RootCanvas.ActualHeight / NeuronalNet.Neurons[layer + 1].Length;
                        double offsetYTo = distanceYTo / 2;
                        for (int toIndex = (layer == layers - 2 ? 0 : 1); toIndex < NeuronalNet.Neurons[layer + 1].Length; toIndex++)
                        {
                            var toPosition = new Point((layer + 1) * distanceX + offsetX - NodeRadius, toIndex * distanceYTo + offsetYTo - NodeRadius);
                            var weight = NeuronalNet.GetWeight(layer, index, toIndex);
                            Line line = new Line
                            {
                                Stroke = weight >= 0 ? Brushes.Green : Brushes.Red,
                                StrokeThickness = Math.Sqrt(Math.Abs(weight) + 1),
                                X1 = position.X + NodeRadius,
                                Y1 = position.Y + NodeRadius,
                                X2 = toPosition.X + NodeRadius,
                                Y2 = toPosition.Y + NodeRadius,
                                ToolTip = weight
                            };
                            RootCanvas.Children.Add(line);
                            Panel.SetZIndex(line, 0);
                        }
                    }
                }
            }


        }

        private void NeuronalNetDisplayControl_OnSizeChanged(object sender, SizeChangedEventArgs e)
        {
            UpdateView();
        }
    }
}
