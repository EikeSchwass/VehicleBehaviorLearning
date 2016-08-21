function getSolrSuggestString(t,sugg)
{
  searchStr = sugg.toLowerCase();
  searchStr = searchStr.split(/\s/g);
  if(searchStr[searchStr.length-1])
  {
     var theSearchString=searchStr[searchStr.length-1];
     theSearchString=theSearchString.replace(/ä/g,"%C3%A4");
     theSearchString=theSearchString.replace(/ö/g,"%C3%B6");
     theSearchString=theSearchString.replace(/ü/g,"%C3%BC");
     theSearchString=theSearchString.replace(/ß/g,"%C3%9F");
     var solrSearchURL = "/solr/"+t+"/" + theSearchString;
     return solrSearchURL;
  }
  return "";
}
jQuery(document).ready(function (){
  // Hover-Effekt für Sprachumschalter
  if($("#langSwitch").length) {
    $("#langSwitch ul li").not(".active").hover(
      function() { $(this).toggleClass("active"); }
    );
  }
  // .noJS: CSS = display:none;
  $(".noJS").removeClass("noJS");
  // scrollButtons (interaktive Anwendungen)
  if($(".interaktiveAnwendungen.x1").length)
    $(".interaktiveAnwendungen.x1 .alleAnwendungen").scrollButtons( { elementsVisible : 1 } );
  if($(".interaktiveAnwendungen.x2").length)
    $(".interaktiveAnwendungen.x2 .alleAnwendungen").scrollButtons( { elementsVisible : 2 } );
  if($(".interaktiveAnwendungen.x3").length)
    $(".interaktiveAnwendungen.x3 .alleAnwendungen").scrollButtons( { elementsVisible : 3 } );
  if($(".schiebebuehne").length)
    $(".schiebebuehne .schiebebuehneWrapper").scrollButtons( { elementsVisible : 1, elementClass : 'teaserOneCol' } );
  if($(".weitereStatistiken").length)
    $(".weitereStatistiken .alleStatistiken").scrollButtons( { elementsVisible : 2, elementClass : 'eintrag' } );
  if($(".aktuellePublikationen.x1").length)
    $(".aktuellePublikationen.x1 .allePublikationen").scrollButtons( { elementsVisible : 1, elementClass : 'eintrag' } );
  if($(".aktuellePublikationen.x2").length)
    $(".aktuellePublikationen.x2 .allePublikationen").scrollButtons( { elementsVisible : 2, elementClass : 'eintrag' } );
  if($(".aktuellePublikationen.x3").length)
    $(".aktuellePublikationen.x3 .allePublikationen").scrollButtons( { elementsVisible : 3, elementClass : 'eintrag' } );
var ua = $.browser;
if ( ua.msie && (parseInt(ua.version) < 8) ) {
 $(".eintrag a").click(function(){
  location.href = this.href;
 });
}
  // Overlay
  if($(".overlay").length) {
    $(".overlay ul.menu li a").attr("href", "javascript:void(0);");
    $(".overlay ul.menu li a, .overlay ul.menu li strong").click(function() {
      //$(".overlay ul.menu li").removeClass("active");
      $(this).parents("ul.menu").find("li").removeClass("active");
      $(this).parent().addClass("active");
    });
  }
  //tabbedSliderTeaser
  if($(".tabbedSliderTeaser").length) {
    $(".tabbedSliderTeaser").each(function() {
      var obj = $(this);
      obj.css("height", "auto");
      if(obj.find("div.tab").length > 0) {
        obj.find("div.tab").not(":first").addClass("hidden");
        obj.find(".menu li.level1:first").addClass("current");
        obj.find(".menu li.level1 a").attr("href", "javascript:void(0);");
        obj.find(".menu li.level1 a").click(function() {
          var showTabNum = $(this).parents("li.level1").index();
          $(this).parents("ul.menu").find("li.level1").removeClass("current");
          $(this).parents("li.level1").addClass("current");
          obj.find("div.tab").not(".hidden").addClass("hidden");
          obj.find("div.tab:eq(" + showTabNum + ")").removeClass("hidden");
        });
      }
    });
  }
  // scrollTabs
  if($(".tabbedSliderTeaser ul.menu").length)
    $(".tabbedSliderTeaser ul.menu").scrollTabs();
  if($(".tabbedX3 ul.menu").length)
    $(".tabbedX3 ul.menu").scrollTabs();
  // embed Links anzeigen
  if($(".embedFrame").length) {
    var obj = $(".embedFrame");
    obj.find(".content").hide();
    obj.find(".headline").addClass("jsON");
    if(isIE())
      obj.find("input").focus(function() { this.select(); } );
    else {
      obj.find("input").live('focus mouseup', function(e) {
        if(e.type == 'focusin') this.select();
        if(e.type == 'mouseup') return false;
      });
    }
    obj.find(".headline").click(function() {
      $(this).parent().find(".content").slideToggle("slow").click();
      $(this).toggleClass("active");
    });
  }
  var buttonsAddedToFancybox = false;
 if($(".illustration a.lupe").length) {
    $(".illustration a.lupe").fancybox({
      'titlePosition' : 'inside',
      'transitionIn' : 'none',
      'transitionOut' : 'fade',
      'showCloseButton' : false,
      'titleFormat'  : function(title, currentArray, currentIndex, currentOpts) {
        var caption = $(currentArray[currentIndex]).parents(".illustration").find(".caption").html();
        var source = $(currentArray[currentIndex]).parents(".illustration").find(".source").html();
        if(caption) caption = '<p class="fbCaption">' + caption + '</p>';
        else caption = ' ';
        if(source) source = '<p class="fbSource">' + source + '</p>';
        else source = ' ';
        return caption + source;
      }
    });
    if (!buttonsAddedToFancybox) {
      var btnFBPrint = '<span class="formHandle"><span><a href="javascript:printElement();" class="fbPrint">Drucken</a></span></span>';
      $(btnFBPrint).insertBefore('#fancybox-content');
      var btnFBClose = '<a href="javascript:jQuery.fancybox.close();" class="fbClose">Schließen</a>';
      $(btnFBClose).insertBefore('#fancybox-content');
      buttonsAddedToFancybox = true;
    }
  }
 if($(".teaserImage a.lupe").length) {
    $(".teaserImage a.lupe").fancybox({
      'titlePosition' : 'inside',
      'transitionIn' : 'none',
      'transitionOut' : 'fade',
      'showCloseButton' : false,
      'titleFormat'  : function(title, currentArray, currentIndex, currentOpts) {
        var caption = $(currentArray[currentIndex]).parents(".teaserImage").find(".caption").html();
        var source = $(currentArray[currentIndex]).parents(".teaserImage").find(".source").html();
        if(caption) caption = '<p class="fbCaption">' + caption + '</p>';
        else caption = ' ';
        if(source) source = '<p class="fbSource">' + source + '</p>';
        else source = ' ';
        return caption + source;
      }
    });
    if (!buttonsAddedToFancybox) {
      var btnFBPrint = '<span class="formHandle"><span><a href="javascript:printElement();" class="fbPrint">Drucken</a></span></span>';
      $(btnFBPrint).insertBefore('#fancybox-content');
      var btnFBClose = '<a href="javascript:jQuery.fancybox.close();" class="fbClose">Schließen</a>';
      $(btnFBClose).insertBefore('#fancybox-content');
      buttonsAddedToFancybox = true;
    }
  }
     if($("a.RichTextGlossarLink").length) {
    $("a.RichTextGlossarLink").each(function() {
      var newUrl = $(this).attr("href") + "?view=getColorboxEntry";
      $(this).attr("href", newUrl);
    });
    $("a.RichTextGlossarLink").fancybox({
      'padding' : 0,
   'titleShow' : false,
      'transitionIn' : 'none',
      'transitionOut' : 'fade',
      'onComplete' : function() {
        $("#fancybox-content #cbox-wrapper").addClass("singleview");
        $("#fancybox-outer").addClass("glossar");
      }
    });
    if (!buttonsAddedToFancybox) {
      var btnFBPrint = '';
      var btnFBClose = '<div class="glossarClose cf"><a href="javascript:jQuery.fancybox.close();" class="fbClose">Schließen</a></div>';
      $(btnFBClose).insertBefore('#fancybox-content');
      buttonsAddedToFancybox = true;
    }
  }
  //autocomplete
  var searchStr, solrSearchURL, suggestions, selected, temp, i;
  $("#wrapperHeader #search form input.suchtext, #wrapperContent p.suchEingabe input").autocomplete({
    source: function(request, response) {
      var solrSearchURL=getSolrSuggestString("suggest",request.term);
      $.ajax({
        type: "GET",
        url: solrSearchURL,
        success: function(result) {
          suggestions = [];
          $(result).find("arr[name=suggestion] str").each(function(index) { 
            suggestions.push($(this).text());
          });
          if(suggestions.length > 0)
            response(suggestions);
          else {
            response(["-"]);
            $(".ui-autocomplete li").remove();
            $(".ui-autocomplete").append("<li><span>Keine Suchvorschläge...</span></li>");
          }
        }
      });
    },
    autoFocus: false,
    minLength: 1,
    select: function(event, ui) {
      selected = ui.item.value;
    },
    close: function() {
      if(selected) {
        temp = "";
        for(i = 0; i < searchStr.length-1; i++)
          temp += searchStr[i] + " ";
        $(this).val(temp + selected);
      }
    }
  });
  // workaround für IE (absenden mit Enter)
  $("#wrapperContent div.searchform form p.suchEingabe input[type='text']").keypress(function(e){
    if(e.which == 13) {
      e.preventDefault();
      $(e.currentTarget).parents("p.suchEingabe").find("input[type='submit']").click();
    }
  });
  // clear default value from searchbox input on focus
  $("input[value='Suchbegriff']").clearValue();
  // Erweiterte Suche: Filteroptionen
  if($("#suchfilter").length) {
    $("#suchfilter fieldset .btnExpand").each(function() {
      $(this).nextAll(".options").hide();
      $(this).click(function() {
        $(this).toggleClass("open");
        $(this).nextAll(".options").toggle();
      });
      $(this).click();
    });
  if($("#suchfilter fieldset.zeitraumBereich select").val() != 'benutzerdefiniert')
   $("#suchfilter fieldset.zeitraumBereich .customDate").hide();
  $("#suchfilter fieldset.zeitraumBereich select").change(function() {
      if($(this).val() == 'benutzerdefiniert')
    $(this).parents(".options").find(".customDate").show();
   else
    $(this).parents(".options").find(".customDate").hide();
  });
  }
  // Datepicker
  if("#suchfilter .zeitraumBereich") {
    $("#suchfilter .zeitraumBereich .customDate .formField input").datepicker();
  $.datepicker.regional['de'] = {
   closeText: 'schließen',
   prevText: 'zurück',
   nextText: 'vor',
   currentText: 'heute',
   monthNames: ['Januar','Februar','März','April','Mai','Juni',
   'Juli','August','September','Oktober','November','Dezember'],
   monthNamesShort: ['Jan','Feb','Mär','Apr','Mai','Jun',
   'Jul','Aug','Sep','Okt','Nov','Dez'],
   dayNames: ['Sonntag','Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag'],
   dayNamesShort: ['So','Mo','Di','Mi','Do','Fr','Sa'],
   dayNamesMin: ['So','Mo','Di','Mi','Do','Fr','Sa'],
   weekHeader: 'Wo',
   dateFormat: 'dd.mm.yy',
   firstDay: 1,
   isRTL: false,
   showMonthAfterYear: false,
   yearSuffix: ''
  };
  $.datepicker.setDefaults($.datepicker.regional['de']);
 }
  function isIE() {
    return /msie/i.test(navigator.userAgent) && !/opera/i.test(navigator.userAgent);
  }
  // Fix for IE7 buttons
  var ie7 = (document.all && !window.opera && window.XMLHttpRequest) ? true : false;
  if(ie7) {
    $("form .ieSpecialButtons").on("click", "button", function(e) {
      e.preventDefault();
      var $thisForm = ($(this).parents("form"));
      $thisForm.append('<input type="hidden" name="'+this.name+'" value="'+this.attributes.value.value+'"/>');
      $thisForm.append('<input type="submit" value="" style="display:none;" class="jsSubmit">');
      var bla = $thisForm.find(".jsSubmit");
      bla.click();
    });
  }
});
$.fn.clearValue = function() {
  return this.focus(function() {
    if( this.value == this.defaultValue ) {
      this.value = "";
    }
  }).blur(function() {
    if( !this.value.length ) {
      this.value = this.defaultValue;
    }
  });
};
printElement = function() {
  var contents = $("#fancybox-content").html();
  var win = window.open();
  self.focus();
  win.document.open();
  win.document.write('<'+'html'+'><'+'head'+'><'+'style'+'>');
  win.document.write('body, td { font-family: Verdana; font-size: 10pt;}');
  win.document.write('<'+'/'+'style'+'><'+'/'+'head'+'><'+'body'+'>');
  win.document.write(contents);
  win.document.write('<'+'/'+'body'+'><'+'/'+'html'+'>');
  win.document.close();
  win.print();
  win.close();
};