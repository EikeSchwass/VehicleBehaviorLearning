function createPhotoIcon(iconImageUrl) {

	var iconWidth = 32;
	var iconHeight = 32;

	var iconWidthHalf = parseInt(iconWidth / 2);
	var iconHeightHalf = parseInt(iconHeight / 2);
	
	return new L.Icon({
	    iconUrl: iconImageUrl,
	    // shadowUrl: imagesUrl + 'marker-shadow.png',
	    iconSize: new L.Point(iconWidth, iconHeight),
	    // shadowSize: new L.Point(65, 32),
	    popupAnchor: new L.Point(0, iconHeight*-1),
		iconAnchor: new L.Point(iconWidthHalf, iconHeight),
		className: 'map_icon'
	});	
	
};

function createWikipediaIcon() {

	var iconWidth = 32;
	var iconHeight = 32;
	
	var iconWidthHalf = parseInt(iconWidth / 2);
	var iconHeightHalf = parseInt(iconHeight / 2);
	
	return new L.Icon({
		iconUrl: imagesUrl + 'wikipedia_32.png',
		iconSize: new L.Point(iconWidth, iconHeight),
		shadowSize: new L.Point(32, 16),
		popupAnchor: new L.Point(0, iconHeight*-1),
		iconAnchor: new L.Point(iconWidthHalf, iconHeight)
	});
	
};

function createQypeIcon() {

	var iconWidth = 16;
	var iconHeight = 16;
	
	var iconWidthHalf = parseInt(iconWidth / 2);
	var iconHeightHalf = parseInt(iconHeight / 2);
	
	return new L.Icon({
		iconUrl: imagesUrl + 'qype.png',
		iconSize: new L.Point(iconWidth, iconHeight),
		shadowSize: new L.Point(32, 16),
		popupAnchor: new L.Point(0, iconHeight*-1),
		iconAnchor: new L.Point(iconWidthHalf, iconHeight)
	});
	
};

function createSpecialIcon(iconName) {

	var iconWidth = 32;
	var iconHeight = 32;

	var iconWidthHalf = parseInt(iconWidth / 2);
	var iconHeightHalf = parseInt(iconHeight / 2);
	
	return new L.Icon({
		iconUrl: imagesUrl + iconName + '.png',
		shadowUrl: imagesUrl + 'marker-shadow.png',
		iconSize: new L.Point(iconWidth, iconHeight),
		shadowSize: new L.Point(65, 32),
		popupAnchor: new L.Point(0, iconHeight*-1),
		iconAnchor: new L.Point(iconWidthHalf, iconHeight)
	});

};

function createIcon(iconName, iconColor, iconType) {

	var iconWidth = 33;
	var iconHeight = 38;

	var iconWidthHalf = parseInt(iconWidth / 2);
	var iconHeightHalf = parseInt(iconHeight / 2);
	
	var imgUrl = imagesUrl;

	if (iconType == '2') {
		imgUrl = symbolsUrl;
		if (!iconName || iconName == '') {
			iconName = 'waypoint';
			iconWidth = 25;
			iconHeight = 35;
		}
		else {
			iconWidth = 22;
			iconHeight = 22;
		}
	}
	
	iconName = iconName+(iconColor!=null&&iconColor.length>0?'_'+iconColor+'_'+locale:'');

	return new L.Icon({
	    iconUrl: imgUrl + iconName + '.png',
	    shadowUrl: imgUrl + 'shadow.png',
	    iconSize: new L.Point(iconWidth, iconHeight),
	    shadowSize: new L.Point(51, iconHeight),
		popupAnchor: new L.Point(0, iconHeight*-1),
		iconAnchor: new L.Point(iconWidthHalf, iconHeight)
	});

};

function createMarkerIcon() {

	var iconWidth = 52;
	var iconHeight = 58;
	
	var iconWidthHalf = parseInt(iconWidth / 2);
	var iconHeightHalf = parseInt(iconHeight / 2);
	
	return new L.Icon({
	    iconUrl: imagesUrl + 'markerGroup.png',
	    shadowUrl: imagesUrl + 'markerGroupShadow.png',
	    iconSize: new L.Point(iconWidth, iconHeight),
	    shadowSize: new L.Point(68, 59),
		popupAnchor: new L.Point(0, iconHeight*-1),
		iconAnchor: new L.Point(iconWidthHalf, iconHeight)
	});
	
};

function createTrackIcon(what) {

	var iconWidth = 32;
	var iconHeight = 32;
	
	var iconWidthHalf = parseInt(iconWidth / 2);
	var iconHeightHalf = parseInt(iconHeight / 2);
	
	var iconUri;
	
	if (what == 'start') {
		iconUri = imagesUrl + 'flag_green_special.png';
	}
	else {
		iconUri = imagesUrl + 'flag_red_special.png';
	}

	return new L.Icon({
		    iconUrl: iconUri,
		    shadowUrl: imagesUrl + 'marker-shadow.png',
		    iconSize: new L.Point(iconWidth, iconHeight),
		    shadowSize: new L.Point(65, 32),
		    popupAnchor: new L.Point(0, iconHeight*-1),
			iconAnchor: new L.Point(iconWidthHalf, iconHeight)
	});

}

function createCrossIcon(iconName) {
	
	var iconWidth = 9;
	var iconHeight = 9;
	
	var iconWidthHalf = parseInt(iconWidth / 2);
	var iconHeightHalf = parseInt(iconHeight / 2);
	
	return new L.Icon({
		iconUrl: imagesUrl + iconName + '.png',
		iconSize: new L.Point(iconWidth, iconHeight),
		iconAnchor: new L.Point(iconWidthHalf, iconHeightHalf)
	});
	
};

function createPointIcon(iconName) {

	return new L.Icon({
		iconUrl: imagesUrl + 'point'+iconName+'.png',
		iconSize: new L.Point(12, 12),
		iconAnchor: new L.Point(6, 6)
	});
	
};

function createMilestoneIcon(label) {

	var iconWidth = 12;
	var iconHeight = 12;

	var iconWidthHalf = parseInt(iconWidth / 2);
	var iconHeightHalf = parseInt(iconHeight / 2);
	
	if (label) {
		return new L.Icon.Label.Default({
			labelText: label,
			iconUrl: imagesUrl + 'milestone.png',
			// shadowUrl: imagesUrl + 'milestoneshadow.png',
			shadowUrl: null,
			labelClassName: 'leaflet-marker-iconlabel-milestone',
			iconSize: new L.Point(iconWidth, iconHeight),
			// shadowSize: new L.Point(25, 12),
			iconAnchor: new L.Point(0, iconHeightHalf*-1),
			popupAnchor: new L.Point(0, iconHeight*-1),
			labelAnchor: new L.Point(iconWidth, iconHeightHalf*-1),
			wrapperAnchor: new L.Point(iconWidthHalf, iconHeightHalf)
		});	
	}
	else {
		return new L.Icon({
			iconUrl: imagesUrl + 'milestone.png',
			// shadowUrl: imagesUrl + 'milestoneshadow.png',
			shadowUrl: null,
			iconSize: new L.Point(iconWidth, iconHeight),
			// shadowSize: new L.Point(25, 12),
			popupAnchor: new L.Point(0, iconHeight*-1),
			iconAnchor: new L.Point(iconWidthHalf, iconHeight)
		});			
	}
	
};

function createMilestoneSmallIcon(label) {

	var iconWidth = 6;
	var iconHeight = 6;

	var iconWidthHalf = parseInt(iconWidth / 2);
	var iconHeightHalf = parseInt(iconHeight / 2);
	
	if (label) {
		return new L.Icon.Label.Default({
			labelText: label,
			iconUrl: imagesUrl + 'milestoneSmall.png',
			shadowUrl: imagesUrl + 'milestoneshadow.png',
			shadowUrl: null,
			labelClassName: 'leaflet-marker-iconlabel-milestone',
			iconSize: new L.Point(iconWidth, iconHeight),
			// shadowSize: new L.Point(25, 12),
			iconAnchor: new L.Point(0, iconHeightHalf*-1),
			popupAnchor: new L.Point(0, iconHeight*-1),
			labelAnchor: new L.Point(iconWidth, iconHeightHalf*-1),
			wrapperAnchor: new L.Point(iconWidthHalf, iconHeightHalf)
		});	
	}
	else {
		return new L.Icon({
			iconUrl: imagesUrl + 'milestoneSmall.png',
			shadowUrl: imagesUrl + 'milestoneshadow.png',
			shadowUrl: null,
			iconSize: new L.Point(iconWidth, iconHeight),
			// shadowSize: new L.Point(25, 12),
			popupAnchor: new L.Point(0, iconHeight*-1),
			iconAnchor: new L.Point(iconWidthHalf, iconHeight)
		});			
	}
	
};

function createWeatherIcon(iconName, label) {

	var iconWidth = 82;
	var iconHeight = 41;
	
	var iconWidthHalf = parseInt(iconWidth / 2);
	var iconHeightHalf = parseInt(iconHeight / 2);

	if (label) {
		return new L.Icon.Label.Default({
			labelText: label,
			iconUrl: imagesUrl + 'weather/' + iconName,
			// shadowUrl: imagesUrl + 'marker-shadow.png',
			shadowUrl: null,
			labelClassName: 'leaflet-marker-iconlabel-waypoint',
		    iconSize: new L.Point(iconWidth, iconHeight),
		    // shadowSize: new L.Point(65, 32),
		    iconAnchor: new L.Point(0, iconHeightHalf*-1),
		    popupAnchor: new L.Point(0, iconHeight*-1),
			labelAnchor: new L.Point(iconWidth, iconHeightHalf*-1),
			wrapperAnchor: new L.Point(iconWidthHalf, iconHeightHalf)
		});		
	}
	else {
		return new L.Icon({
			labelText: label,
			iconUrl: imagesUrl + 'weather/' + iconName,
			// shadowUrl: imagesUrl + 'marker-shadow.png',
			shadowUrl: null,
		    iconSize: new L.Point(iconWidth, iconHeight),
		    // shadowSize: new L.Point(65, 32),
		    popupAnchor: new L.Point(0, iconHeight*-1),
		    iconAnchor: new L.Point(iconWidthHalf, iconHeight)
		});		
	}
	
}

function createWaypointIcon() {

	var iconWidth = 25;
	var iconHeight = 35;

	var iconWidthHalf = parseInt(iconWidth / 2);
	var iconHeightHalf = parseInt(iconHeight / 2);
	
	return new L.Icon({
		iconUrl: imagesUrl + 'waypoint.png',
		// shadowUrl: imagesUrl + 'marker-shadow.png',
		shadowUrl: null,
		iconSize: new L.Point(iconWidth, iconHeight),
	    // shadowSize: new L.Point(25, 18),
		popupAnchor: new L.Point(0, iconHeight*-1),
		iconAnchor: new L.Point(iconWidthHalf, iconHeight)
	});

}

function createNewWaypointIcon(symbol, label, styleClass) {

	var iconWidth = 32;
	var iconHeight = 37;
	
	var iconWidthHalf = parseInt(iconWidth / 2);
	var iconHeightHalf = parseInt(iconHeight / 2);
	
	var labelClassName = 'leaflet-marker-iconlabel-waypoint';
	if (styleClass) {
		labelClassName = styleClass;
	}

	if (label) {
		return new L.Icon.Label.Default({
			labelText: label,
			iconUrl: imagesUrl + 'waypointIcons/32x37/' + symbol + '.png',
			// shadowUrl: imagesUrl + 'marker-shadow.png',
			shadowUrl: null,
			labelClassName: labelClassName,
			iconSize: new L.Point(iconWidth, iconHeight),
		    // shadowSize: new L.Point(25, 18),
		    iconAnchor: new L.Point(0, iconHeightHalf*-1),
		    popupAnchor: new L.Point(0, iconHeight*-1),
			labelAnchor: new L.Point(iconWidth, -15),
			wrapperAnchor: new L.Point(iconWidthHalf, iconHeightHalf)
		});		
	}
	else {
		return new L.Icon({
			labelText: label,
			iconUrl: imagesUrl + 'waypointIcons/32x37/' + symbol + '.png',
			// shadowUrl: imagesUrl + 'marker-shadow.png',
			shadowUrl: null,
			iconSize: new L.Point(iconWidth, iconHeight),
		    // shadowSize: new L.Point(25, 18),
			popupAnchor: new L.Point(0, iconHeight*-1),
			iconAnchor: new L.Point(iconWidthHalf, iconHeight)
		});		
	}

}

function createSpecialIcon(iconName, label) {

	var iconWidth = 32;
	var iconHeight = 32;

	var iconWidthHalf = parseInt(iconWidth / 2);
	var iconHeightHalf = parseInt(iconHeight / 2);
	
	if (label) {
		return new L.Icon.Label.Default({
			labelText: label,
			iconUrl: imagesUrl + iconName + '.png',
			// shadowUrl: imagesUrl + 'marker-shadow.png',
			shadowUrl: null,
			labelClassName: 'leaflet-marker-iconlabel-special',
			iconSize: new L.Point(iconWidth, iconHeight),
			// shadowSize: new L.Point(65, 32),		
			iconAnchor: new L.Point(0, iconHeightHalf*-1),
			popupAnchor: new L.Point(0, iconHeight*-1),
			labelAnchor: new L.Point(iconWidth, iconHeightHalf*-1),
			wrapperAnchor: new L.Point(iconWidthHalf, iconHeightHalf)
		});		
	}
	else {
		return new L.Icon({
			labelText: label,
			iconUrl: imagesUrl + iconName + '.png',
			// shadowUrl: imagesUrl + 'marker-shadow.png',
			shadowUrl: null,
			iconSize: new L.Point(iconWidth, iconHeight),
			// shadowSize: new L.Point(65, 32),		
			popupAnchor: new L.Point(0, iconHeight*-1),
			iconAnchor: new L.Point(iconWidthHalf, iconHeight)
		});		
	}

};

function createAvatarIcon(data) {

	if (data == null) {
		return createNewWaypointIcon('generic');
	}
	
	var iconWidth = 48;
	var iconHeight = 48;
	
	var iconWidthHalf = parseInt(iconWidth / 2);
	var iconHeightHalf = parseInt(iconHeight / 2);
	
	return new L.Icon({
		iconUrl: avatarsUrl + data.userId + '_thumb.png',
	    // shadowUrl: imagesUrl + 'marker-shadow.png',
	    iconSize: new L.Point(iconWidth, iconHeight),
	    // shadowSize: new L.Point(65, 32),
	    popupAnchor: new L.Point(0, iconHeight*-1),
		iconAnchor: new L.Point(iconWidthHalf, iconHeight),
		className: 'map_icon' + ' ' + getColorNameById(data.userId)
	});	
	
}

// Generated by CoffeeScript 1.3.1
(function() {
  var Icon, Layer;

  Icon = L.Icon.extend({
    options: {
      popupAnchor: new L.Point(0, -25)
    },
    initialize: function(options) {
      return L.Util.setOptions(this, options);
    },
    createIcon: function() {
      var div, span;
      div = document.createElement('div');
      div.className = 'leaflet-marker-icon weather-icon';
      div.style['margin'] = '-30px 0px 0px -30px';
      div.style['width'] = '60px';
      div.style['height'] = '20px';
      div.style['padding'] = "" + this.options.textOffset + "px 0px 0px 0px";
      div.style['background'] = "url(" + this.options.image + ") no-repeat center top";
      div.style['textAlign'] = 'center';
      span = document.createElement('span');
      span.innerHTML = this.options.text;
      div.appendChild(span);
      return div;
    },
    createShadow: function() {
      return null;
    }
  });

  Layer = L.Class.extend({
    defaultI18n: {
      en: {
        currentTemperature: "Temperature",
        maximumTemperature: "Max. temp",
        minimumTemperature: "Min. temp",
        humidity: "Humidity",
        wind: "Wind",
        show: "Snow",
        snow_possible: "Snow possible",
        rain: "Rain",
        rain_possible: "Rain possible",
        icerain: "Ice rain",
        rime: "Hoarfrost",
        rime_possible: "Hoarfrost possible",
        clear: "Clear"
      },
      de: {
          currentTemperature: "Temperatur",
          maximumTemperature: "Max. temp",
          minimumTemperature: "Min. temp",
          humidity: "Luftfeuchtigkeit",
          wind: "Wind",
          show: "Schnee",
          snow_possible: "Schnee m&ouml;glich",
          rain: "Regen",
          rain_possible: "Regen m&ouml;glich",
          icerain: "Eisregen",
          rime: "Raureif",
          rime_possible: "Raureif",
          clear: "Klar"
        }      
    },
    includes: L.Mixin.Events,
    initialize: function(options) {
      this.options = options != null ? options : {};
      this.layer = new L.LayerGroup();
      this.sourceUrl = "http://openweathermap.org/data/getrect?APPID=0fc93b32cb1cac1f56b5c9a7ad5efd72&type={type}&lat1={minlat}&lat2={maxlat}&lng1={minlon}&lng2={maxlon}";
      this.sourceRequests = {};
      this.clusterWidth = this.options.clusterWidth || 150;
      this.clusterHeight = this.options.clusterHeight || 150;
      this.type = this.options.type || 'city';
      this.i18n = this.options.i18n || this.defaultI18n[this.options.lang || 'en'];
      this.temperatureDigits = this.options.temperatureDigits;
      if (this.temperatureDigits == null) {
        this.temperatureDigits = 2;
      }
      return Layer.Utils.checkSunCal();
    },
    onAdd: function(map) {
      this.map = map;
      this.map.addLayer(this.layer);
      this.map.on('moveend', this.update, this);
      return this.update();
    },
    onRemove: function(map) {
      if (this.map !== map) {
        return;
      }
      this.map.off('moveend', this.update, this);
      this.map.removeLayer(this.layer);
      return this.map = void 0;
    },
    getAttribution: function() {
      return 'Weather data provided by <a href="http://openweathermap.org/">OpenWeatherMap</a>.';
    },
    update: function() {
      var req, url, _ref;
      _ref = this.sourceRequests;
      for (url in _ref) {
        req = _ref[url];
        req.abort();
      }
      this.sourceRequests = {};
      return this.updateType(this.type);
    },
    updateType: function(type) {
      var bounds, ne, sw, url,
        _this = this;
      bounds = this.map.getBounds();
      sw = bounds.getSouthWest();
      ne = bounds.getNorthEast();
      url = this.sourceUrl.replace('{type}', type).replace('{minlat}', sw.lat).replace('{maxlat}', ne.lat).replace('{minlon}', sw.lng).replace('{maxlon}', ne.lng);
      return this.sourceRequests[type] = Layer.Utils.requestJsonp(url, function(data) {
        var cells, key, ll, p, st, _i, _len, _ref;
        delete _this.sourceRequests[type];
        _this.map.removeLayer(_this.layer);
        _this.layer.clearLayers();
        cells = {};
        _ref = data.list;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          st = _ref[_i];
          ll = new L.LatLng(st.lat, st.lng);
          p = _this.map.latLngToLayerPoint(ll);
          key = "" + (Math.round(p.x / _this.clusterWidth)) + "_" + (Math.round(p.y / _this.clusterHeight));
          if (!cells[key] || parseInt(cells[key].rang) < parseInt(st.rang)) {
            cells[key] = st;
          }
        }
        for (key in cells) {
          st = cells[key];
          _this.layer.addLayer(_this.buildMarker(st, new L.LatLng(st.lat, st.lng)));
        }
        return _this.map.addLayer(_this.layer);
      });
    },
    buildMarker: function(st, ll) {
      var marker, markerIcon, popupContent, typeIcon, weatherIcon, weatherText;
      weatherText = this.weatherText(st);
      weatherIcon = this.weatherIcon(st);
      popupContent = "<div class=\"weather-place\">";
      popupContent += "<img height=\"38\" width=\"45\" style=\"border: none; float: right;\" alt=\"" + weatherText + "\" src=\"" + weatherIcon + "\" />";
      popupContent += "<h3>" + st.name + "</h3>";
      popupContent += "<p>" + weatherText + "</p>";
      popupContent += "<p>";
      popupContent += "" + this.i18n.currentTemperature + ":&nbsp;" + (this.toCelc(st.temp)) + "\u00B0C | " + (this.toFahrenheit(st.temp)) + "F <br />";
      if (st.temp_max) {
        popupContent += "" + this.i18n.maximumTemperature + ":&nbsp;" + (this.toCelc(st.temp_max)) + "\u00B0C | " + (this.toFahrenheit(st.temp_max)) + "F <br />";
      }
      if (st.temp_min) {
        popupContent += "" + this.i18n.minimumTemperature + ":&nbsp;" + (this.toCelc(st.temp_min)) + "\u00B0C | " + (this.toFahrenheit(st.temp_min)) + "F <br />";
      }
      popupContent += "" + this.i18n.humidity + ":&nbsp;" + st.humidity + "<br />";
      popupContent += "" + this.i18n.wind + ":&nbsp;" + st.wind_ms + "&nbsp;m/s<br />";
      popupContent += "</p>";
      popupContent += "<p>";
      popupContent += "Weather data provided<br />by <a href=\"http://openweathermap.org/\">OpenWeatherMap</a>.";
      popupContent += "</p>";
      popupContent += "</div>";
      typeIcon = this.typeIcon(st);
      markerIcon = typeIcon ? new Icon({
        image: typeIcon,
        text: "" + (this.toCelc(st.temp)) + "\u00B0C | " + (this.toFahrenheit(st.temp)) + "F ",
        textOffset: 30
      }) : new Icon({
        image: weatherIcon,
        text: "" + (this.toCelc(st.temp)) + "\u00B0C | " + (this.toFahrenheit(st.temp)) + "F ",
        textOffset: 45
      });
      marker = new L.Marker(ll, {
        icon: markerIcon
      });
      marker.bindPopup(popupContent);
      return marker;
    },
    weatherIcon: function(st) {
      var cl, day, i, img, _i, _len, _ref;
      day = this.dayTime(st);
      cl = st.cloud;
      img = 'transparent';
      if (cl < 25 && cl >= 0) {
        img = '01' + day;
      }
      if (cl < 50 && cl >= 25) {
        img = '02' + day;
      }
      if (cl < 75 && cl >= 50) {
        img = '03' + day;
      }
      if (cl >= 75) {
        img = '04';
      }
      if (st.prsp_type === '1' && st.prcp > 0) {
        img = '13';
      }
      if (st.prsp_type === '4' && st.prcp > 0) {
        img = '09';
      }
      _ref = ['23', '24', '26', '27', '28', '29', '33', '38', '42'];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        i = _ref[_i];
        if (st.prsp_type === i) {
          img = '09';
        }
      }
      return "images/weather/" + img + ".png";
    },
    typeIcon: function(st) {
      if (st.datatype === 'station') {
        if (st.type === '1') {
          return "images/weather/list-icon-3.png";
        } else if (st.type === '2') {
          return "images/weather/list-icon-2.png";
        }
      }
    },
    weatherText: function(st) {
      if (st.prsp_type === '1') {
        if (st.prcp !== 0 && st.prcp > 0) {
          return "" + this.i18n.snow + "&nbsp;(" + st.prcp + "&nbsp;mm)";
        } else {
          return this.i18n.snow_possible;
        }
      } else if (st.prsp_type === '2') {
        if (st.prcp !== 0 && st.prcp > 0) {
          return "" + this.i18n.rime + "&nbsp;(" + st.prcp + "&nbsp;mm)";
        } else {
          return this.i18n.rime_possible;
        }
      } else if (st.prsp_type === '3') {
        return this.i18n.icerain;
      } else if (st.prsp_type === '4') {
        if (st.prcp !== 0 && st.prcp > 0) {
          return "" + this.i18n.rain + "&nbsp;(" + st.prcp + "&nbsp;mm)";
        } else {
          return this.i18n.rain_possible;
        }
      } else {
        return this.i18n.clear;
      }
    },
    dayTime: function(st) {
      var dt, times;
      if (typeof SunCalc === "undefined" || SunCalc === null) {
        return 'd';
      }
      dt = new Date();
      times = SunCalc.getTimes(dt, st.lat, st.lng);
      if (dt > times.sunrise && dt < times.sunset) {
        return 'd';
      } else {
        return 'n';
      }
    },
    toCelc: function(t) {
      var p = Math.pow(10, this.temperatureDigits);
      return Math.round(((t - 273.15) * p) / p);
    },
    toFahrenheit: function(t) {
        var p = Math.pow(10, this.temperatureDigits);
        return Math.round((((t - 273.15) * p) / p)*1.8+32);
    }
  });

  Layer.Utils = {
    callbacks: {},
    callbackCounter: 0,
    checkSunCal: function() {
    	return;
    /*
      var el;
      if (typeof SunCalc !== "undefined" && SunCalc !== null) {
        return;
      }
      el = document.createElement('script');
      el.src = 'https://raw.github.com/mourner/suncalc/master/suncalc-min.js';
      el.type = 'text/javascript';
      return document.getElementsByTagName('body')[0].appendChild(el);
    */
    },
    requestJsonp: function(url, cb) {
      var abort, callback, counter, delim, el,
        _this = this;
      el = document.createElement('script');
      counter = (this.callbackCounter += 1);
      callback = "OsmJs.Weather.LeafletLayer.Utils.callbacks[" + counter + "]";
      abort = function() {
        if (el.parentNode) {
          return el.parentNode.removeChild(el);
        }
      };
      this.callbacks[counter] = function(data) {
        delete _this.callbacks[counter];
        return cb(data);
      };
      delim = url.indexOf('?') >= 0 ? '&' : '?';
      el.src = "" + url + delim + "callback=" + callback;
      el.type = 'text/javascript';
      document.getElementsByTagName('body')[0].appendChild(el);
      return {
        abort: abort
      };
    }
  };

  if (!this.OsmJs) {
    this.OsmJs = {};
  }

  if (!this.OsmJs.Weather) {
    this.OsmJs.Weather = {};
  }

  this.OsmJs.Weather.LeafletLayer = Layer;

}).call(this);

L.Icon.Label = L.Icon.extend({
	options: {
		/*
		labelAnchor: (Point) (top left position of the label within the wrapper, default is right)
		wrapperAnchor: (Point) (position of icon and label relative to Lat/Lng)
		iconAnchor: (Point) (top left position of icon within wrapper)
		labelText: (String) (label's text component, if this is null the element will not be created)
		*/
		/* Icon options:
		iconUrl: (String) (required)
		iconSize: (Point) (can be set through CSS)
		iconAnchor: (Point) (centered by default if size is specified, can be set in CSS with negative margins)
		popupAnchor: (Point) (if not specified, popup opens in the anchor point)
		shadowUrl: (Point) (no shadow by default)
		shadowSize: (Point)
		*/
		labelClassName: ''
	},
	
	initialize: function (options) {
		L.Util.setOptions(this, options);
		L.Icon.prototype.initialize.call(this, this.options);
	},

	createIcon: function () {
		return this._createLabel(L.Icon.prototype.createIcon.call(this));
	},
	
	createShadow: function () {
		if (!this.options.shadowUrl) {
			return null;
		}
		var shadow = L.Icon.prototype.createShadow.call(this);
		//need to reposition the shadow
		if (shadow) {
			shadow.style.marginLeft = (-this.options.wrapperAnchor.x) + 'px';
			shadow.style.marginTop = (-this.options.wrapperAnchor.y) + 'px';
		}
		return shadow;
	},

	_createLabel: function (img) {
		if (!this.options.labelText) {
			return img;
		}

		var wrapper = document.createElement('div'),
			label = document.createElement('span');

		label.className = 'leaflet-marker-iconlabel ' + this.options.labelClassName;

		label.innerHTML = this.options.labelText;

		//set up label's styles
		label.style.marginLeft = this.options.labelAnchor.x + 'px';
		label.style.marginTop = this.options.labelAnchor.y + 'px';
		
		//set up wrapper anchor
		wrapper.style.marginLeft = (-this.options.wrapperAnchor.x) + 'px';
		wrapper.style.marginTop = (-this.options.wrapperAnchor.y) + 'px';

		wrapper.className = 'leaflet-marker-icon-wrapper leaflet-zoom-animated';
		
		//reset icons margins (as super makes them -ve)
		img.style.marginLeft = this.options.iconAnchor.x + 'px';
		img.style.marginTop = this.options.iconAnchor.y + 'px';
		
		wrapper.appendChild(img);
		wrapper.appendChild(label);

		return wrapper;
	}
});

L.Icon.Label.Default = L.Icon.Label.extend({
	options: {
		//This is the top left position of the label within the wrapper. By default it will display at the right
		//middle position of the default icon. x = width of icon + padding
		//If the icon height is greater than the label height you will need to set the y value.
		//y = (icon height - label height) / 2
		labelAnchor: new L.Point(29, 8),
		
		//This is the position of the wrapper div. Use this to position icon + label relative to the Lat/Lng.
		//By default the point of the default icon is anchor
		wrapperAnchor: new L.Point(13, 41),
		
		//This is now the top left position of the icon within the wrapper.
		//If the label height is greater than the icon you will need to set the y value.
		//y = (label height - icon height) / 2
		iconAnchor: new L.Point(0, 0),
		
		//label's text component, if this is null the element will not be created
		labelText: null,
		
		/* From L.Icon.Default */
		iconUrl: L.Icon.Default.imagePath + '/marker-icon.png',
		iconSize: new L.Point(25, 41),
		popupAnchor: new L.Point(0, -33),

		shadowUrl: L.Icon.Default.imagePath + '/marker-shadow.png',
		shadowSize: new L.Point(41, 41)
	}
});
L.Control.Map = L.Control.extend({

	options: {
		position: 'topright'
	},
	
	onAdd: function(map) {
		
		this._map = map;
		this._container = L.DomUtil.create('div', 'leaflet-control-map');

		L.DomEvent.addListener(this._container, 'mousedown', L.DomEvent.stopPropagation);
		L.DomEvent.addListener(this._container, 'dblclick', L.DomEvent.stopPropagation);
		L.DomEvent.addListener(this._container, 'dblclick', L.DomEvent.preventDefault);
		
		var container = Builder.node('div');

		// var isHasFullscreen = !isRelaunch;
		var isHasFullscreen = true;
		
		if (!isMobile && !isFacebookApp) {
			
			if (isHasFullscreen && (isMap || isMapUser || isMapFolder || isWelcome || isViewTracks || (isMapOnly && isFullScreenLeave) || (isMapFolderOnly && isFullScreenLeave) || (isMapUserOnly && isFullScreenLeave) || (isWelcomeOnly && isFullScreenLeave) || (isViewTracksOnly && isFullScreenLeave))) {
				
				var fullScreenEl = Builder.node('span', {style: 'float: left;', id: 'fullScreenEl', className:'leaflet-control-map-content'});
				fullScreenEl.appendChild(document.createTextNode((isMapOnly || isMapFolderOnly || isMapUserOnly || isNotepadListOnly || isWelcomeOnly || isViewTracksOnly)?fullScreenLeave:fullScreenEnter));
				container.appendChild(fullScreenEl);
				L.DomEvent.addListener(fullScreenEl, 'click', function(event) {
				
					var anchor = '';
					var href = window.location.href;
					if (href.indexOf('#') > -1) {
						anchor = href.substring(href.indexOf('#'), href.length);
					}

					if (isMap) {
						if (mapOnlyAction.indexOf('?url') > -1) {
							mapOnlyAction = mapOnlyAction.substring(0, mapOnlyAction.indexOf('?url')) + '?isFullScreenLeave=true&' + mapOnlyAction.substring(mapOnlyAction.indexOf('?url')+1, mapOnlyAction.length);
							window.location.href = mapOnlyAction + anchor;
						}
						else {
							window.location.href = mapOnlyAction + '&isFullScreenLeave=true' + anchor;
						}
					}
					else if (isMapOnly) {
						window.location.href = mapAction + anchor;
					}
					else if (isWelcome) {
						var thisCity;
						
						var whichCountry = $('countrySelect');
						if ($('countrySelect')) {
							var thisCountry = whichCountry.options[whichCountry.options.selectedIndex].value;
							if (thisCountry != '') {
								window.location.href = welcomeOnlyAction + '?isFullScreenLeave=true&country=' + thisCountry + (thisCity && thisCity != '' ? '&city=' + thisCity : '') + anchor;
							}
						}
					}
					else if (isWelcomeOnly) {
						window.location.href = welcomeAction + anchor;
					}
					else if (isMapUser) {
						window.location.href = mapUserOnlyAction + '&isFullScreenLeave=true' + anchor;
					}
					else if (isMapUserOnly) {
						window.location.href = mapUserAction + anchor;
					}
					else if (isMapFolder) {
						window.location.href = mapFolderOnlyAction + '&isFullScreenLeave=true' + anchor;
					}
					else if (isMapFolderOnly) {
						window.location.href = mapFolderAction + anchor;
					}
					else if (isNotepadList) {
						window.location.href = notepadListOnlyAction + '&isFullScreenLeave=true' + anchor;
					}
					else if (isNotepadListOnly) {
						window.location.href = notepadListAction + anchor;
					}			
					else if (isViewTracks) {
						window.location.href = (isViewStages ? viewStagesOnlyAction : viewTracksOnlyAction) + window.location.search + '&isFullScreenLeave=true' + anchor;
					}
					else if (isViewTracksOnly) {
						var locationSearch = window.location.search;
						locationSearch = locationSearch.substring(0, locationSearch.indexOf('&isFullScreenLeave=true'));
						window.location.href = (isViewStages ? viewStagesAction : viewTracksAction) + locationSearch + anchor;
					}			
				});
			}

			if (isMapOnly && !isFullScreenLeave && !isLayer) {
				var labelText = isInternalUsage ? labelClose : labelDetails;
				var moreInfoEl = Builder.node('span', {style: 'float: left;', title: labelText, className:'leaflet-control-map-content'});
				moreInfoEl.appendChild(document.createTextNode(labelText));
				container.appendChild(moreInfoEl);
				L.DomEvent.addListener(moreInfoEl, 'click', function(event) {
					if (isInternalUsage) {
						window.close();
					}
					else {
						var actionReplacement = mapAction;
						actionReplacement = actionReplacement.substring(1, actionReplacement.length);
						window.open(serverUrl + actionReplacement, 'viewTrackWindow');						
					}
				});
			}
			if (isCreateTrack || isCreateTrackOnly) {
				var fullScreenEl = Builder.node('span', {style: 'float: left;', id: 'fullScreenEl', className:'leaflet-control-map-content'});
				fullScreenEl.appendChild(document.createTextNode(isCreateTrackOnly?fullScreenLeave:fullScreenEnter));
				container.appendChild(fullScreenEl);
				L.DomEvent.addListener(fullScreenEl, 'click', L.DomEvent.stopPropagation);
				L.DomEvent.addListener(fullScreenEl, 'click', L.DomEvent.preventDefault);
				L.DomEvent.addListener(fullScreenEl, 'click', function(event) {
					toggleFullscreen();
				});
			}

			if (isSmallIframe) {
				var lengthEl = Builder.node('span', {style: 'float: left;', id: 'trackLengthId', className:'leaflet-control-map-content'});
				lengthEl.appendChild(document.createTextNode('Loading...'));
				container.appendChild(lengthEl);	
			}

			if (isCreateTrack || isCreateTrackOnly) {
				var moreContainerCreateTrack = getMoreContainerCreateTrack();
				L.DomEvent.addListener(moreContainerCreateTrack, 'click', L.DomEvent.stopPropagation);
				L.DomEvent.addListener(moreContainerCreateTrack, 'click', L.DomEvent.preventDefault);
				container.appendChild(moreContainerCreateTrack);
			}
			else {
				container.appendChild(getMoreContainer());
			}
			
		}
		else if (isMobile) {
			/*
			var locateMeEl = Builder.node('span', {style: 'float: left;', id: 'locateMeEl', className:'leaflet-control-map-content'});
			locateMeEl.appendChild(document.createTextNode(locateMeTxt));
			container.appendChild(locateMeEl);
			L.DomEvent.addListener(locateMeEl, 'click', function(event) {
				locateMe();
			});
			*/
			if (isHasFullscreen && isMap || isMapOnly) {
				var fullScreenEl = Builder.node('span', {style: 'float: left;', id: 'fullScreenEl', className:'leaflet-control-map-content'});
				fullScreenEl.appendChild(document.createTextNode(isMapOnly?fullScreenLeave:fullScreenEnter));
				container.appendChild(fullScreenEl);
				L.DomEvent.addListener(fullScreenEl, 'click', function(event) {
				
					var anchor = '';
					var href = window.location.href;
					if (href.indexOf('#') > -1) {
						anchor = href.substring(href.indexOf('#'), href.length);
					}

					if (isMap) {
						if (mapOnlyAction.indexOf('?url') > -1) {
							mapOnlyAction = mapOnlyAction.substring(0, mapOnlyAction.indexOf('?url')) + '?isFullScreenLeave=true&' + mapOnlyAction.substring(mapOnlyAction.indexOf('?url')+1, mapOnlyAction.length);
							location.href = mapOnlyAction + anchor;
						}
						else {
							location.href = mapOnlyAction + '&isFullScreenLeave=true' + anchor;
						}
					}
					else if (isMapOnly) {
						location.href = mapAction + anchor;
					}
							
				});
			}
			
		}
		
		this._container.appendChild(container);

		return this._container;
		
	}

});

L.Control.MapThumb = L.Control.extend({

	options: {
		position: 'topright'
	},
	
	onAdd: function(map) {
		
		this._map = map;
		this._container = L.DomUtil.create('div', 'leaflet-control-mapthumb');

		L.DomEvent.addListener(this._container, 'mousedown', L.DomEvent.stopPropagation);
		L.DomEvent.addListener(this._container, 'dblclick', L.DomEvent.stopPropagation);
		L.DomEvent.addListener(this._container, 'dblclick', L.DomEvent.preventDefault);
		
		var container = Builder.node('div');
		
		var showButtonEl = Builder.node('span', {style: 'float: left;', id: 'mapThumbEl', className:'leaflet-control-map-content'});
		showButtonEl.appendChild(document.createTextNode(trackView));
		container.appendChild(showButtonEl);
		showButtonEl.fileId = this.options.fileId;
		L.DomEvent.addListener(showButtonEl, 'click', function(event) {
			location.href = mapAction+showButtonEl.fileId;
		});
		
		this._container.appendChild(container);
		
		return this._container;
		
	}

});

L.Control.Elevation = L.Control.extend({

	options: {
		position: 'topleft'
	},
	
	onAdd: function(map) {
		
		this._map = map;
		this._container = L.DomUtil.create('div', 'leaflet-control-elevation');

		L.DomEvent.addListener(this._container, 'mousedown', L.DomEvent.stopPropagation);
		L.DomEvent.addListener(this._container, 'dblclick', L.DomEvent.stopPropagation);
		L.DomEvent.addListener(this._container, 'dblclick', L.DomEvent.preventDefault);
		
		if (dataType != 2 && (shortCutTrack || isShortCutTrackFromGeoJson)) {

			var containerChartMarker = Builder.node('div', {id: 'chartMarkerMap', style: 'position: absolute; top: 1px; z-index: 999; height: 75px; width: 2px; background-color: #4b4b4b; display: none;'});
			
			L.DomEvent.addListener(containerChartMarker, 'mouseover', function(event) {
				disableHideChartMarker();
			});

			var flotrContainer = Builder.node('div', {id: 'flotrContainer', style: 'position: absolute; width:120px;height:80px;'});
			
			L.DomEvent.addListener(flotrContainer, 'mouseout', function(event) {
				hideChartMarker('chartMarkerMap');
			});

			L.DomEvent.addListener(flotrContainer, 'mousemove', function(event) {
				showChartMarker(event, maxHeight, 'chartMarkerMap', 'map');
			});
			
			this._container.appendChild(containerChartMarker);
			this._container.appendChild(flotrContainer);
			
		}
		
		return this._container;
		
	}

});

L.Control.Track = L.Control.extend({

	options: {
		position: 'topright'
	},
	
	onAdd: function(map) {
		
		this._map = map;
		this._container = L.DomUtil.create('div', 'leaflet-control-track');

		L.DomEvent.addListener(this._container, 'mousedown', L.DomEvent.stopPropagation);
		L.DomEvent.addListener(this._container, 'dblclick', L.DomEvent.stopPropagation);
		L.DomEvent.addListener(this._container, 'dblclick', L.DomEvent.preventDefault);
		
		var container = Builder.node('div', {style: 'margin-top: 3px; width: 100px;', className:'leaflet-control-map-content', id:'trackControl'});
	
		getMilesKilometer(container);

		container.appendChild(Builder.node('br'));
		
		container.appendChild(Builder.node('div', {className:'separator'}));

		// result
		var showResultEl0 = Builder.node('div', {className: 'trackTextControlElement'});
		var showResultEl1 = Builder.node('span', {id: 'distance2'});
		var showResultEl2 = Builder.node('span', {id: 'trackStatisticsTime'});

		showResultEl0.appendChild(showResultEl1);
		showResultEl0.appendChild(showResultEl2);
		
		container.appendChild(showResultEl0);
		
		container.appendChild(Builder.node('div', {className:'separator'}));

		var calculatorForm = Builder.node('form', {action: '#', id: 'calculatorForm', name: 'calculatorForm'});

		var unit = isMetric ? 'km/h ' : 'mph ';
		
		// speed
		var showSpeedEl = Builder.node('div', {title: labelSpeed});
		showSpeedEl.appendChild(document.createTextNode(unit));
		calculatorForm.appendChild(showSpeedEl);
		
		var showSpeedTextEl = Builder.node('input', {id: 'speed', type: 'text', title: labelSpeed, className:'smaller'});
		showSpeedTextEl.name = 'speed';
		showSpeedTextEl.value = DEFAULT_SPEED + '';
		calculatorForm.appendChild(showSpeedTextEl);
		/*
		L.DomEvent.addListener(showSpeedTextEl, 'focus', function(event) {
			console.log(event);
		});
		*/
		L.DomEvent.addListener(showSpeedTextEl, 'change', function(event) {
			calculateTrack('speed');
		});

		unit = isMetric ? 'min/km' : 'min/mi';
		
		// pace
		var showPaceEl = Builder.node('div', {title: labelPace});
		showPaceEl.appendChild(document.createTextNode(unit + ' (' + labelPace + ')'));
		calculatorForm.appendChild(showPaceEl);
		
		var showPaceTextEl = Builder.node('input', {id: 'pace', type: 'text', title: labelPace, className:'smaller'});
		showPaceTextEl.name = 'pace';
		showPaceTextEl.value = DEFAULT_PACE;
		calculatorForm.appendChild(showPaceTextEl);
		L.DomEvent.addListener(showPaceTextEl, 'change', function(event) {
			calculateTrack('pace');
		});

		var showButtonEl = Builder.node('span', {style: 'cursor: pointer; font-weight: bold;', title: showCalculate});
		showButtonEl.appendChild(document.createTextNode(' Go!'));

		calculatorForm.appendChild(showButtonEl);
		
		container.appendChild(calculatorForm);

		this._container.appendChild(container);

		return this._container;
		
	}

});

L.Control.TrackSmall = L.Control.extend({

	options: {
		position: 'topright'
	},
	
	onAdd: function(map) {
		
		this._map = map;
		this._container = L.DomUtil.create('div', 'leaflet-control-trackSmall');

		L.DomEvent.addListener(this._container, 'mousedown', L.DomEvent.stopPropagation);
		L.DomEvent.addListener(this._container, 'dblclick', L.DomEvent.stopPropagation);
		L.DomEvent.addListener(this._container, 'dblclick', L.DomEvent.preventDefault);
		
		var container = Builder.node('div', {style: 'margin-top: 3px; width: 82px;', className:'leaflet-control-map-content'});

		if (isMap || isMapOnly) {
			var lengthEl = Builder.node('div', {id: 'trackLengthId', className:'trackTextControlElement'});
			lengthEl.appendChild(document.createTextNode('Loading...'));
			container.appendChild(lengthEl);	
		}

		getMilesKilometer(container);		

		this._container.appendChild(container);

		return this._container;
		
	}

});

L.Control.LiveTrackingPosition = L.Control.extend({

	options: {
		position: 'topright'
	},
	
	onAdd: function(map) {
		
		this._map = map;
		this._container = L.DomUtil.create('div', 'leaflet-control-trackSmall');

		L.DomEvent.addListener(this._container, 'mousedown', L.DomEvent.stopPropagation);
		L.DomEvent.addListener(this._container, 'dblclick', L.DomEvent.stopPropagation);
		L.DomEvent.addListener(this._container, 'dblclick', L.DomEvent.preventDefault);
		
		var container = Builder.node('div', {style: 'margin-top: 3px; width: 82px;', className:'leaflet-control-map-content'});

		var followPositionCheckboxEl = Builder.node('input', {id: 'followPosition', name: 'followPosition', type: 'checkbox', title: label_followLiveTracking});
		followPositionCheckboxEl.checked = true;
		container.appendChild(followPositionCheckboxEl);
		var followPositionEl = Builder.node('label', {title: label_followLiveTracking, style: 'vertical-align: text-bottom; margin-left: 4px;'});
		followPositionEl.setAttribute('for', 'followPosition');
		followPositionEl.appendChild(document.createTextNode(label_followLiveTracking));
		container.appendChild(followPositionEl);

		this._container.appendChild(container);

		return this._container;
		
	}

});

L.Control.PoweredBy = L.Control.extend({

	options: {
		position: 'bottomright'
	},
	
	onAdd: function(map) {
		
		this._map = map;
		this._container = L.DomUtil.create('div', 'leaflet-control-poweredBy');

		L.DomEvent.addListener(this._container, 'mousedown', L.DomEvent.stopPropagation);
		L.DomEvent.addListener(this._container, 'dblclick', L.DomEvent.stopPropagation);
		L.DomEvent.addListener(this._container, 'dblclick', L.DomEvent.preventDefault);
		
		var container = Builder.node('div', {style: 'margin-top: 3px;'});

		var imgPoweredByEl = Builder.node('img', {src: 'images/poweredBy.png'});

		var actionReplacement = mapAction;
		if (isMapUserOnly) {
			actionReplacement = mapUserAction;
		}
		else if (isMapFolderOnly) {
			actionReplacement = mapFolderAction;
		}
		
		if (actionReplacement.indexOf('?url') > -1) {
			actionReplacement = actionReplacement.substring(0, actionReplacement.indexOf('?url')) + '?isFullScreenLeave=true&' + actionReplacement.substring(actionReplacement.indexOf('?url')+1, actionReplacement.length);
		}
		
		actionReplacement = actionReplacement.substring(1, actionReplacement.length);
		
		var linkPoweredByEl = Builder.node('a', {href: serverUrl + actionReplacement, title: 'Powered by GPSies.com', target: 'viewTrackWindow'});
		linkPoweredByEl.appendChild(imgPoweredByEl);
		
		var headlinePoweredByEl = Builder.node('div', {style: 'text-align: center;'});
		headlinePoweredByEl.appendChild(linkPoweredByEl);
		
		container.appendChild(headlinePoweredByEl);		

		this._container.appendChild(container);

		return this._container;
		
	}
	
});

function getMilesKilometer(container) {
	
	if (dataType == '1' || isLiveTrackingTrack) {	
		// km
		var showKilometerRadioEl = Builder.node('input', {id: 'radioKm', name: 'showMilesStones2', type: 'checkbox', title: showKilometer});
		container.appendChild(showKilometerRadioEl);
		L.DomEvent.addListener(showKilometerRadioEl, 'click', function(event) {
			removeAllMarkers(markersMilestone);
			$('radioMiles').checked = false;
			if ($('radioKm').checked) {
				isMetric = true;
				pointsAtDistance();
			}			
		});
		var showKilometerEl = Builder.node('label', {title: showKilometer, style: 'vertical-align: text-bottom; margin-left: 4px;'});
		showKilometerEl.setAttribute('for', 'radioKm');
		showKilometerEl.appendChild(document.createTextNode(showKilometer));
		container.appendChild(showKilometerEl);
	
		container.appendChild(Builder.node('br'));
	
		// miles
		var showMilesRadioEl = Builder.node('input', {id: 'radioMiles', name: 'showMilesStones3', type: 'checkbox', title: showMiles});
		container.appendChild(showMilesRadioEl);
		L.DomEvent.addListener(showMilesRadioEl, 'click', function(event) {
			removeAllMarkers(markersMilestone);
			$('radioKm').checked = false;
			if ($('radioMiles').checked) {
				isMetric = false;
				pointsAtDistance();
			}
		});
		var showMilesEl = Builder.node('label', {title: showMiles, style: 'vertical-align: text-bottom; margin-left: 4px;'});
		showMilesEl.setAttribute('for', 'radioMiles');
		showMilesEl.appendChild(document.createTextNode(showMiles));
		container.appendChild(showMilesEl);	
	}
	
}

function getTracksBBoxNodes() {

	var containerTracksBBoxEl = Builder.node('div', {title: labelTracks + ' ' + labelNearby + ' - GPSies.com'});

	var checkboxEl = Builder.node('input', {type: 'checkbox', name: 'tracksBBoxToggle', id: 'tracksBBoxToggle'});
	L.DomEvent.addListener(checkboxEl, 'click', function(event) {
		showTracksBBox(this.checked);
	});

	var tracksBBoxEl = Builder.node('div');
	tracksBBoxEl.appendChild(document.createTextNode(labelNearby));	

	var labelEl = Builder.node('label', {style: 'vertical-align: text-bottom; margin-left: 4px;'});
	labelEl.setAttribute('for', 'tracksBBoxToggle');
	labelEl.appendChild(document.createTextNode(labelTracks + ' '));
	labelEl.appendChild(Builder.node('br'));
	labelEl.appendChild(tracksBBoxEl);
	
	containerTracksBBoxEl.appendChild(checkboxEl);
	containerTracksBBoxEl.appendChild(labelEl);

	return containerTracksBBoxEl;
	
}

function getMoreContainer() {

	var mainContainer = Builder.node('span', {style:'float: left; width: 100px;', className:'leaflet-control-map-content', id:'navMore'});
	mainContainer.appendChild(document.createTextNode(labelMapMore));
	
	L.DomEvent.addListener(mainContainer, 'click', function(event) {
		if ($('navMoreUl').style.display == 'block') {
			$('navMoreUl').style.display = 'none';
		}
		else {
			$('navMoreUl').style.display = 'block';
		}
	});

	L.DomEvent.addListener(mainContainer, 'mouseout', function(event) {
		$('navMoreUl').style.display = 'none';
	});
	
	L.DomEvent.addListener(mainContainer, 'mouseover', function(event) {
		$('navMoreUl').style.display = 'block';
	});

	var ulSubContainer = Builder.node('ul', {id:'navMoreUl', style:'display: none;'});

	L.DomEvent.addListener(ulSubContainer, 'mouseover', function(event) {
		$('navMoreUl').style.display = 'block';
	});
	
	L.DomEvent.addListener(ulSubContainer, 'mouseout', function(event) {
		$('navMoreUl').style.display = 'none';
	});

	var liSubContainer0 = Builder.node('li');	
	liSubContainer0.appendChild(Builder.node('div', {className:'separator'}));
	
	var liSubContainer1 = Builder.node('li');
	liSubContainer1.appendChild(getPhotoNodes());
	
	// var liSubContainer2 = Builder.node('li');
	// liSubContainer2.appendChild(getWeatherNodes());
	
	var liSubContainer3 = Builder.node('li');	
	liSubContainer3.appendChild(getWikipediaNodes());

	var liSubContainer14 = Builder.node('li');	
	liSubContainer14.appendChild(getScrollWheelZoomNodes());
	
	/*
	var liSubContainer13 = Builder.node('li');	
	liSubContainer13.appendChild(getQypeNodes());
	
	var liSubContainer10 = Builder.node('li');	
	liSubContainer10.appendChild(getYouTubeNodes());

	var liSubContainer11 = Builder.node('li');	
	liSubContainer11.appendChild(getWebcamNodes());
	*/
	
	ulSubContainer.appendChild(liSubContainer0);
	ulSubContainer.appendChild(liSubContainer1);
	// ulSubContainer.appendChild(liSubContainer2);
	ulSubContainer.appendChild(liSubContainer3);	
	ulSubContainer.appendChild(liSubContainer14);
	
	// ulSubContainer.appendChild(liSubContainer13);
	// ulSubContainer.appendChild(liSubContainer10);
	// ulSubContainer.appendChild(liSubContainer11);

	if (isMap || isMapOnly) {
		
		if ($('z') == null) {
			var liSubContainer4 = Builder.node('li');	
			liSubContainer4.appendChild(getTracksBBoxNodes());
			ulSubContainer.appendChild(liSubContainer4);		
		} 
		if (isWaypoints()) {
			var liSubContainer6 = Builder.node('li');	
			liSubContainer6.appendChild(getWaypointNodes());
			ulSubContainer.appendChild(liSubContainer6);
		}		
		if (isPicasaImages) {
			var liSubContainer5 = Builder.node('li');	
			liSubContainer5.appendChild(getPicasaNodes());
			ulSubContainer.appendChild(liSubContainer5);
		}

	}

	var liSubContainer8 = Builder.node('li');	
	liSubContainer8.appendChild(Builder.node('div', {className:'separator'}));
	ulSubContainer.appendChild(liSubContainer8);
	
	// not longer working, Gooogle has stopped it
	if (false && (isMap || isMapOnly)) {
		var liSubContainer9 = Builder.node('li', {className:'liSpace'});	
		liSubContainer9.appendChild(getGoogleMapsNodes());
		ulSubContainer.appendChild(liSubContainer9);
	}

	/*
	var liSubContainer12 = Builder.node('li', {className:'liSpace'});	
	liSubContainer12.appendChild(getLocateMeNodes());
	ulSubContainer.appendChild(liSubContainer12);
	*/
	
	var liSubContainer10 = Builder.node('li', {className:'liSpace'});	
	liSubContainer10.appendChild(getGeocachingNodes());
	ulSubContainer.appendChild(liSubContainer10);

	mainContainer.appendChild(ulSubContainer);

	return mainContainer;
	
}

function getMoreContainerCreateTrack() {

	var mainContainer = Builder.node('span', {style:'float: left; width: 100px;', className:'leaflet-control-map-content', id:'navMore'});
	mainContainer.appendChild(document.createTextNode(labelMapMore));
	
	L.DomEvent.addListener(mainContainer, 'click', function(event) {
		if ($('navMoreUl').style.display == 'block') {
			$('navMoreUl').style.display = 'none';
		}
		else {
			$('navMoreUl').style.display = 'block';
		}
	});

	L.DomEvent.addListener(mainContainer, 'mouseout', function(event) {
		$('navMoreUl').style.display = 'none';
	});
	
	L.DomEvent.addListener(mainContainer, 'mouseover', function(event) {
		$('navMoreUl').style.display = 'block';
	});

	var ulSubContainer = Builder.node('ul', {id:'navMoreUl', style:'display: none;'});

	L.DomEvent.addListener(ulSubContainer, 'mouseover', function(event) {
		$('navMoreUl').style.display = 'block';
	});
	
	L.DomEvent.addListener(ulSubContainer, 'mouseout', function(event) {
		$('navMoreUl').style.display = 'none';
	});

	var liSubContainer0 = Builder.node('li');	
	liSubContainer0.appendChild(Builder.node('div', {className:'separator'}));
	
	var liSubContainer1 = Builder.node('li');
	liSubContainer1.appendChild(getPhotoNodes());
	
	var liSubContainer3 = Builder.node('li');	
	liSubContainer3.appendChild(getWikipediaNodes());

	ulSubContainer.appendChild(liSubContainer0);
	ulSubContainer.appendChild(liSubContainer1);
	ulSubContainer.appendChild(liSubContainer3);	

	mainContainer.appendChild(ulSubContainer);

	return mainContainer;
	
}

function getWaypointNodes() {

	var containerWaypointEl = Builder.node('div', {title: labelWaypoints});

	var checkboxEl = Builder.node('input', {type: 'checkbox', name: 'waypointToggle', id: 'waypointToggle'});
	checkboxEl.checked = isWaypointToggle;
	L.DomEvent.addListener(checkboxEl, 'click', function(event) {
		if (isWaypoints()) {
			if (checkboxEl.checked) {
				isWaypointToggle = true;
				for (var i = 0, j = waypointsArray.length; i < j; i++) {
					if (!map.hasLayer(waypointsArray[i].marker)) {
						map.addLayer(waypointsArray[i].marker);
					}
					// waypointsArray[i].marker.show();
				}
			}
			else {
				for (var i = 0, j = waypointsArray.length; i < j; i++) {
					if (map.hasLayer(waypointsArray[i].marker)) {
						map.removeLayer(waypointsArray[i].marker);
					}
					// waypointsArray[i].marker.hide();
				}
			}
		}
	});

	var waypointEl = Builder.node('div', {style: 'margin-top: 5px;'});

	var labelEl = Builder.node('label', {style: 'vertical-align: text-bottom; margin-left: 4px;'});
	labelEl.setAttribute('for', 'waypointToggle');
	labelEl.appendChild(document.createTextNode(labelWaypoints));
	labelEl.appendChild(Builder.node('br'));
	labelEl.appendChild(waypointEl);
	
	containerWaypointEl.appendChild(checkboxEl);
	containerWaypointEl.appendChild(labelEl);

	return containerWaypointEl;
	
}

function getPicasaNodes() {

	var containerPicasaEl = Builder.node('div', {title: 'Powered by Picasa.com'});

	var checkboxEl = Builder.node('input', {type: 'checkbox', name: 'picasaToggle', id: 'picasaToggle'});
	checkboxEl.checked = isPicasaToggle;
	L.DomEvent.addListener(checkboxEl, 'click', function(event) {
		if (picasaArray && picasaArray.length > 0) {
			if (checkboxEl.checked) {
				for (var i = 0, j = picasaArray.length; i < j; i++) {
					if (!map.hasLayer(picasaArray[i])) {
						map.addLayer(picasaArray[i]);
					}					
					// picasaArray[i].show();
				}
			}
			else {
				for (var i = 0, j = picasaArray.length; i < j; i++) {
					if (map.hasLayer(picasaArray[i])) {
						map.removeLayer(picasaArray[i]);
					}					
					// picasaArray[i].hide();
				}
			}
		}
	});

	var picasaEl = Builder.node('div', {style: 'margin-top: 5px; height: 17px;'});
	picasaEl.appendChild(Builder.node('img', {src: 'images/picasaLogoSmall.gif'}));	

	var labelEl = Builder.node('label', {style: 'vertical-align: text-bottom; margin-left: 4px;'});
	labelEl.setAttribute('for', 'picasaToggle');
	labelEl.appendChild(document.createTextNode(panoramio1));
	labelEl.appendChild(picasaEl);
	
	containerPicasaEl.appendChild(checkboxEl);
	containerPicasaEl.appendChild(labelEl);

	return containerPicasaEl;
	
}

function getPhotoNodes() {

	var containerPanoramioEl = Builder.node('div', {title: 'Powered by Panoramio.com'});

	var checkboxEl = Builder.node('input', {type: 'checkbox', name: 'panoramioToggle', id: 'panoramioToggle'});
	L.DomEvent.addListener(checkboxEl, 'click', function(event) {
		showPanoramio();
	});

	var panoramioEl = Builder.node('div', {style: 'margin-top: 5px;'});
	panoramioEl.appendChild(Builder.node('img', {src: 'images/panoramioLogoSmall.gif'}));	

	var labelEl = Builder.node('label', {style: 'vertical-align: text-bottom; margin-left: 4px;'});
	labelEl.setAttribute('for', 'panoramioToggle');
	labelEl.appendChild(document.createTextNode(labelMapPhotos));
	
	containerPanoramioEl.appendChild(checkboxEl);
	containerPanoramioEl.appendChild(labelEl);

	return containerPanoramioEl;
	
}

function getWikipediaNodes() {

	var containerWikipediaEl = Builder.node('div', {title: 'Powered by Wikipedia.com'});

	var checkboxEl = Builder.node('input', {type: 'checkbox', name: 'wikipediaToggle', id: 'wikipediaToggle'});
	L.DomEvent.addListener(checkboxEl, 'click', function(event) {
		showWikipedia();
	});

	var labelEl = Builder.node('label', {style: 'vertical-align: text-bottom; margin-left: 4px;'});
	labelEl.setAttribute('for', 'wikipediaToggle');
	labelEl.appendChild(document.createTextNode('Wikipedia'));
	
	containerWikipediaEl.appendChild(checkboxEl);
	containerWikipediaEl.appendChild(labelEl);

	return containerWikipediaEl;
	
}

function getQypeNodes() {

	var containerQypeEl = Builder.node('div', {title: 'Powered by Qype.com'});

	var checkboxEl = Builder.node('input', {type: 'checkbox', name: 'qypeToggle', id: 'qypeToggle'});
	L.DomEvent.addListener(checkboxEl, 'click', function(event) {
		showQype();
	});

	var labelEl = Builder.node('label', {style: 'vertical-align: text-bottom; margin-left: 4px;'});
	labelEl.setAttribute('for', 'qypeToggle');
	labelEl.appendChild(document.createTextNode('Qype'));
	
	containerQypeEl.appendChild(checkboxEl);
	containerQypeEl.appendChild(labelEl);

	return containerQypeEl;
	
}

function getScrollWheelZoomNodes() {

	var containerScrollWheelZoomEl = Builder.node('div', {title: 'Scrollwheel zoom'});

	var checkboxEl = Builder.node('input', {type: 'checkbox', name: 'scrollWheelZoomToggle', id: 'scrollWheelZoomToggle', checked: 'checked'});

	L.DomEvent.addListener(checkboxEl, 'click', function(event) {
		if (map) {
			if ($('scrollWheelZoomToggle').checked) {
				map.scrollWheelZoom.enable();
				toggleScrollWheelZoom(true);
			}
			else {
				map.scrollWheelZoom.disable();
				toggleScrollWheelZoom(false);
			}
		}
	});

	var labelEl = Builder.node('label', {style: 'vertical-align: text-bottom; margin-left: 4px;'});
	labelEl.setAttribute('for', 'scrollWheelZoomToggle');
	labelEl.appendChild(document.createTextNode('Scrollzoom'));
	
	containerScrollWheelZoomEl.appendChild(checkboxEl);
	containerScrollWheelZoomEl.appendChild(labelEl);
	
	return containerScrollWheelZoomEl;

}

function getWebcamNodes() {

	var containerWebcamEl = Builder.node('div', {title: 'Powered by Webcams.travel'});

	var checkboxEl = Builder.node('input', {type: 'checkbox', name: 'webcamToggle', id: 'webcamToggle'});
	L.DomEvent.addListener(checkboxEl, 'click', function(event) {
		showWebcam();
	});

	var labelEl = Builder.node('label', {style: 'vertical-align: text-bottom; margin-left: 4px;'});
	labelEl.setAttribute('for', 'webcamToggle');
	labelEl.appendChild(document.createTextNode('Webcams'));
	
	containerWebcamEl.appendChild(checkboxEl);
	containerWebcamEl.appendChild(labelEl);

	return containerWebcamEl;
	
}

function getYouTubeNodes() {

	var containerYouTubeEl = Builder.node('div', {title: 'Powered by YouTube'});

	var checkboxEl = Builder.node('input', {type: 'checkbox', name: 'youTubeToggle', id: 'youTubeToggle'});
	L.DomEvent.addListener(checkboxEl, 'click', function(event) {
		showYouTube();
	});

	var labelEl = Builder.node('label', {style: 'vertical-align: text-bottom; margin-left: 4px;'});
	labelEl.setAttribute('for', 'youTubeToggle');
	labelEl.appendChild(document.createTextNode('YouTube'));
	
	containerYouTubeEl.appendChild(checkboxEl);
	containerYouTubeEl.appendChild(labelEl);

	return containerYouTubeEl;
	
}

function getLocateMeNodes() {
	
	var containerLocateMeEl = Builder.node('div', {title: locateMeTxt});

	var linkEl = Builder.node('a', {href: 'javascript:locateMe()', title: locateMeTxt});
	linkEl.appendChild(document.createTextNode(locateMeTxt));
	
	containerLocateMeEl.appendChild(linkEl);

	return containerLocateMeEl;
	
}

function getGoogleMapsNodes() {
	
	var fileId = $('fileId');
	
	if (fileId) {

		var containerGoogleMapsEl = Builder.node('div', {title: 'Powered by Google Maps'});

		var linkEl = Builder.node('a', {href: 'http://maps.google.com/maps?t=h&q=' + getKmzUrl(fileId.value), title: 'Google Maps', target: 'googleMaps'});
		linkEl.appendChild(document.createTextNode('Google Maps'));
		
		containerGoogleMapsEl.appendChild(linkEl);
	
		return containerGoogleMapsEl;	
	}

	return null;
	
}

function getGeocachingNodes() {
	
	if (map) {
		
		var centerPoint = map.getCenter();
		
		if (centerPoint) {

			var containerGeocachingEl = Builder.node('div', {title: 'Powered by Geocaching.com'});

			var linkEl = Builder.node('a', {href: 'http://www.geocaching.com/map/default.aspx?lat='+centerPoint.lat+'&lng='+centerPoint.lng+'&zm='+map.getZoom(), title: 'Geocaching', target: 'geoCaching'});
			linkEl.appendChild(document.createTextNode('Geocaching'));
			
			containerGeocachingEl.appendChild(linkEl);
		
			return containerGeocachingEl;	
		}	
		
	}

	return null;
	
}

function getWeatherNodes() {

	var containerWeatherEl = Builder.node('div', {title: weather});

	var checkboxEl = Builder.node('input', {type: 'checkbox', name: 'weatherToggle', id: 'weatherToggle'});
	L.DomEvent.addListener(checkboxEl, 'click', function(event) {
		showWeather();
	});

	var labelEl = Builder.node('label', {style: 'vertical-align: text-bottom; margin-left: 4px;'});
	labelEl.setAttribute('for', 'weatherToggle');
	labelEl.appendChild(document.createTextNode(weather));
	
	containerWeatherEl.appendChild(checkboxEl);
	containerWeatherEl.appendChild(labelEl);

	return containerWeatherEl;
	
}

function toggleRoutingMode(isRoutingMode) {
	if (isRoutingMode) {
		$('routingProviderContainer').style.color = '#4B4B4B';
	}
	else {
		$('routingProviderContainer').style.color = '#bbb';
	}
}

L.Control.TrackCreator = L.Control.extend({

	options: {
		position: 'topright'
	},
	
	onAdd: function(GPSiesMap) {
		
		this._container = L.DomUtil.create('div', 'leaflet-control-track-creator');
		
		L.DomEvent.addListener(this._container, 'mousedown', L.DomEvent.stopPropagation);
		L.DomEvent.addListener(this._container, 'dblclick', L.DomEvent.stopPropagation);
		L.DomEvent.addListener(this._container, 'click', L.DomEvent.stopPropagation);
		L.DomEvent.addListener(this._container, 'dblclick', L.DomEvent.preventDefault);
		
		var container = Builder.node('div');

		var controlsEl = Builder.node('div', {style: 'margin-top: 5px; width: 130px;', className:'mapControl'});

		// var headlineEl = Builder.node('div', {style: 'text-align: center;', title: settings});
		// headlineEl.appendChild(document.createTextNode(settings));
		
		var checkboxEl1 = Builder.node('input', {type: 'checkbox', name: 'isAutoRouteToggle', id: 'isAutoRouteToggle'});
		L.DomEvent.addListener(checkboxEl1, 'click', function(event) {
			var routingProviderContainer = $('routingProviderContainer');
			if (routingProviderContainer) {
				if ($('isAutoRouteToggle').checked) {
					toggleRoutingMode(true);
				}
				else {
					toggleRoutingMode(false);
				}
			}
		});
		
		var helpEl1 = Builder.node('span');
		helpEl1.appendChild(Builder.node('img', {title: help_title + '? Click...', src: 'images/blank.gif', className:'helpIconInline'}));
		
		var labelEl1 = Builder.node('label', {style: 'vertical-align: text-bottom; margin-left: 4px;', id: 'followRoadsLabel'});
		labelEl1.setAttribute('for', 'isAutoRouteToggle');
		labelEl1.appendChild(document.createTextNode(' ' + followRoads));
		labelEl1.appendChild(document.createTextNode(' '));
		labelEl1.appendChild(helpEl1);
		L.DomEvent.addListener(helpEl1, 'click', function(event) {
			var popup = L.popup()
			    .setLatLng(GPSiesMap.getCenter())
			    .setContent(help_followRoads)
			    .openOn(map);
		});
		labelEl1.appendChild(Builder.node('br'));

		var routingProviderContainer = Builder.node('div', {id: 'routingProviderContainer', style: 'color: #bbb;'});

		L.DomEvent.addListener(routingProviderContainer, 'click', function(event) {
			var checkboxEl1 = $('isAutoRouteToggle');
			if (!checkboxEl1.checked) {
				toggleRoutingMode(true);
				checkboxEl1.checked = 'checked';
			}
		});
		
		var btnCycleEl = Builder.node('span', {id: 'btnCycleEl', title: label_tracktype_biking, className: 'btnCycleElActive'});
		var btnMountainbikingEl = Builder.node('span', {id: 'btnMountainbikingEl', title: label_tracktype_mountainbiking + ' (beta)', className: 'btnMountainbikingElInactive'});
		var btnRacingbikeEl = Builder.node('span', {id: 'btnRacingbikeEl', title: label_tracktype_racingbike + ' (beta)', className: 'btnRacingbikeElInactive'});
		var btnWalkEl = Builder.node('span', {id: 'btnWalkEl', title: label_tracktype_trekking + ' / ' + label_tracktype_running, className: 'btnWalkElInactive'});
		var btnCarEl = Builder.node('span', {id: 'btnCarEl', title: label_tracktype_car, className: 'btnCarElInactive'});
		var btnMotorbikingEl = Builder.node('span', {id: 'btnMotorbikingEl', title: label_tracktype_motorbiking + ' (beta)', className: 'btnMotorbikingElInactive'});
		
		L.DomEvent.addListener(btnCarEl, 'click', function(event) {
			routingMode = 'Car';
			btnCarEl.className = 'btnCarElActive';
			btnCycleEl.className = 'btnCycleElInactive';
			btnWalkEl.className = 'btnWalkElInactive';
			btnMotorbikingEl.className = 'btnMotorbikingElInactive';
			btnMountainbikingEl.className = 'btnMountainbikingElInactive';
			btnRacingbikeEl.className = 'btnRacingbikeElInactive';
		});
		L.DomEvent.addListener(btnCycleEl, 'click', function(event) {
			routingMode = 'Cycle';
			btnCarEl.className = 'btnCarElInactive';
			btnCycleEl.className = 'btnCycleElActive';
			btnWalkEl.className = 'btnWalkElInactive';
			btnMotorbikingEl.className = 'btnMotorbikingElInactive';
			btnMountainbikingEl.className = 'btnMountainbikingElInactive';
			btnRacingbikeEl.className = 'btnRacingbikeElInactive';			
		});
		L.DomEvent.addListener(btnWalkEl, 'click', function(event) {
			routingMode = 'Walking';
			btnCarEl.className = 'btnCarElInactive';
			btnCycleEl.className = 'btnCycleElInactive';
			btnWalkEl.className = 'btnWalkElActive';
			btnMotorbikingEl.className = 'btnMotorbikingElInactive';
			btnMountainbikingEl.className = 'btnMountainbikingElInactive';
			btnRacingbikeEl.className = 'btnRacingbikeElInactive';			
		});
		L.DomEvent.addListener(btnMotorbikingEl, 'click', function(event) {
			routingMode = 'Motorbiking';
			btnCarEl.className = 'btnCarElInactive';
			btnCycleEl.className = 'btnCycleElInactive';
			btnWalkEl.className = 'btnWalkElInactive';
			btnMotorbikingEl.className = 'btnMotorbikingElActive';
			btnMountainbikingEl.className = 'btnMountainbikingElInactive';
			btnRacingbikeEl.className = 'btnRacingbikeElInactive';			
		});
		L.DomEvent.addListener(btnMountainbikingEl, 'click', function(event) {
			routingMode = 'Mountainbiking';
			btnCarEl.className = 'btnCarElInactive';
			btnCycleEl.className = 'btnCycleElInactive';
			btnWalkEl.className = 'btnWalkElInactive';
			btnMotorbikingEl.className = 'btnMotorbikingElInactive';
			btnMountainbikingEl.className = 'btnMountainbikingElActive';
			btnRacingbikeEl.className = 'btnRacingbikeElInactive';			
		});
		L.DomEvent.addListener(btnRacingbikeEl, 'click', function(event) {
			routingMode = 'Racingbike';
			btnCarEl.className = 'btnCarElInactive';
			btnCycleEl.className = 'btnCycleElInactive';
			btnWalkEl.className = 'btnWalkElInactive';
			btnMotorbikingEl.className = 'btnMotorbikingElInactive';
			btnMountainbikingEl.className = 'btnMountainbikingElInactive';
			btnRacingbikeEl.className = 'btnRacingbikeElActive';			
		});
		
		routingProviderContainer.appendChild(btnCycleEl);
		routingProviderContainer.appendChild(btnMountainbikingEl);
		routingProviderContainer.appendChild(btnRacingbikeEl);
		
		routingProviderContainer.appendChild(btnWalkEl);
		routingProviderContainer.appendChild(btnCarEl);
		routingProviderContainer.appendChild(btnMotorbikingEl);
		
		routingProviderContainer.appendChild(Builder.node('br', {className: 'clear'}));
		
		var radioEl_Mode_1 = Builder.node('input', {type: 'radio', name: 'routingProvider', value: 'GraphHopper', id: 'GraphHopperRadio'});
		if (clientName != 'wingsforlife') {
			radioEl_Mode_1.setAttribute('checked', 'checked');
		}
		var labelEl_Mode_1 = Builder.node('label', {style: 'vertical-align: text-bottom; font-weight: bold;', id: 'GraphHopperLabel'});
		labelEl_Mode_1.setAttribute('for', 'GraphHopperRadio');
		labelEl_Mode_1.appendChild(document.createTextNode('GraphHopper'));

		var linkGraphHopperEl = Builder.node('a', {href: 'http://graphhopper.com/', title: 'More information about GraphHopper...', target: 'routingInfo'});
		linkGraphHopperEl.appendChild(Builder.node('img', {src: 'images/icons/information.png', style: 'padding-left: 5px;'}));
		
		labelEl_Mode_1.appendChild(linkGraphHopperEl);
		labelEl_Mode_1.appendChild(Builder.node('br'));
		
		var radioEl_Mode_4 = Builder.node('input', {type: 'radio', name: 'routingProvider', value: 'Google', id: 'GoogleRadio'});
		if (clientName == 'wingsforlife') {
			radioEl_Mode_4.setAttribute('checked', 'checked');
		}
		var labelEl_Mode_4 = Builder.node('label', {style: 'vertical-align: text-bottom;', id: 'GoogleLabel'});
		labelEl_Mode_4.setAttribute('for', 'GoogleRadio');
		labelEl_Mode_4.appendChild(document.createTextNode('Google'));
		
		if (!isRelaunch) {
			labelEl_Mode_4.appendChild(Builder.node('br'));
		}

		var radioEl_Mode_7 = Builder.node('input', {type: 'radio', name: 'routingProvider', value: 'OpenRouteService', id: 'OpenRouteServiceRadio'});
		var labelEl_Mode_7 = Builder.node('label', {style: 'vertical-align: text-bottom;', id: 'OpenRouteServiceFastestLabel'});
		labelEl_Mode_7.setAttribute('for', 'OpenRouteServiceRadio');
		labelEl_Mode_7.appendChild(document.createTextNode('OpenRouteService'));
		labelEl_Mode_7.appendChild(Builder.node('br'));

		var radioEl_Mode_10 = Builder.node('input', {type: 'radio', name: 'routingProvider', value: 'Cloudmade', id: 'CloudmadeRadio'});
		var labelEl_Mode_10 = Builder.node('label', {style: 'vertical-align: text-bottom;', id: 'CloudmadeLabel'});
		labelEl_Mode_10.setAttribute('for', 'CloudmadeRadio');
		labelEl_Mode_10.appendChild(document.createTextNode('Cloudmade'));
		labelEl_Mode_10.appendChild(Builder.node('br'));
		
		routingProviderContainer.appendChild(radioEl_Mode_1);
		routingProviderContainer.appendChild(labelEl_Mode_1);

		if (isEnableRouting) {
			
			routingProviderContainer.appendChild(radioEl_Mode_4);
			routingProviderContainer.appendChild(labelEl_Mode_4);

			// routingProviderContainer.appendChild(radioEl_Mode_7);
			// routingProviderContainer.appendChild(labelEl_Mode_7);
			
			// routingProviderContainer.appendChild(radioEl_Mode_10);
			// routingProviderContainer.appendChild(labelEl_Mode_10);	
			
		}
		
		routingProviderContainer.appendChild(Builder.node('br'));
		
		var checkboxEl2 = Builder.node('input', {type: 'checkbox', name: 'isPanToToggle', id: 'isPanToToggle'});
		var labelEl2 = Builder.node('label', {style: 'vertical-align: text-bottom; margin-left: 4px;'});
		labelEl2.setAttribute('for', 'isPanToToggle');
		labelEl2.appendChild(document.createTextNode(' ' + autoCenter));
		labelEl2.appendChild(Builder.node('br'));
		
		var checkboxEl5 = Builder.node('input', {type: 'checkbox', name: 'isScrollWheelZoomEditorToggle', id: 'isScrollWheelZoomEditorToggle', checked: 'checked'});
		L.DomEvent.addListener(checkboxEl5, 'click', function(event) {
			if ($('isScrollWheelZoomEditorToggle').checked) {
				map.scrollWheelZoom.enable();
			}
			else {
				map.scrollWheelZoom.disable();
			}
		});	
		var labelEl5 = Builder.node('label', {style: 'vertical-align: text-bottom; margin-left: 4px;'});
		labelEl5.setAttribute('for', 'isScrollWheelZoomEditorToggle');
		labelEl5.appendChild(document.createTextNode(' Scrollzoom'));
		labelEl5.appendChild(Builder.node('br'));
		
		var checkboxEl3 = Builder.node('input', {type: 'checkbox', name: 'isWaypointToggle', id: 'isWaypointToggle'});
		
		L.DomEvent.addListener(checkboxEl3, 'click', function(event) {
			if ($('trkWptField').value == 0) {
				$('trkWptField').value = 1;
				$('btnTrk').className = 'btnTrkActive';
				$('btnWpt').className = 'btnWptInactive';
			}
			else {
				$('trkWptField').value = 0;
				$('btnTrk').className = 'btnTrkInactive';
				$('btnWpt').className = 'btnWptActive';
			}
		});	
		
		var labelEl3 = Builder.node('label', {style: 'vertical-align: text-bottom; margin-left: 4px;'});
		labelEl3.setAttribute('for', 'isWaypointToggle');
		labelEl3.appendChild(document.createTextNode(' ' + labelWaypoints));
		
		labelEl3.appendChild(Builder.node('br'));
		
		var checkboxEl4 = Builder.node('input', {type: 'checkbox', name: 'isMilestonesToggle', id: 'isMilestonesToggle'});
		var labelEl4 = Builder.node('label', {style: 'vertical-align: text-bottom; margin-left: 4px;'});
		labelEl4.setAttribute('for', 'isMilestonesToggle');
		
		labelEl4.appendChild(document.createTextNode(isMetric ? ' '+label_metric : ' '+label_metric ));
		labelEl4.appendChild(Builder.node('br'));

		L.DomEvent.addListener(checkboxEl4, 'click', function(event) {
			if ($('isMilestonesToggle').checked) {
				pointsAtDistance();
			}
			else {
				deleteMilestones();
			}
		});
		
		var helpEl2 = Builder.node('span');
		helpEl2.appendChild(Builder.node('img', {title: help_title + '? Click...', src: 'images/blank.gif', className:'helpIconInline'}));
		
		var checkboxEl6 = Builder.node('input', {type: 'checkbox', name: 'isDrawRectangleToggle', id: 'isDrawRectangleToggle'});
		var labelEl6 = Builder.node('label', {style: 'vertical-align: text-bottom; margin-left: 4px;'});
		labelEl6.setAttribute('for', 'isDrawRectangleToggle');
		
		labelEl6.appendChild(document.createTextNode(' '+labelSelectAndRemovePoints));
		labelEl6.appendChild(document.createTextNode(' '));
		labelEl6.appendChild(helpEl2);
		L.DomEvent.addListener(helpEl2, 'click', function(event) {
			var popup = L.popup()
			    .setLatLng(GPSiesMap.getCenter())
			    .setContent(help_selectAndRemovePoints)
			    .openOn(map);
		});		
		
		if (!isRelaunch) {
			labelEl6.appendChild(Builder.node('br'));
		}
		
		L.DomEvent.addListener(checkboxEl6, 'click', function(event) {
			if ($('isDrawRectangleToggle').checked) {
				setRectangleSelect(true);
			}
			else {
				setRectangleSelect(false);
			}
		});
		
		// controlsEl.appendChild(headlineEl);

		controlsEl.appendChild(checkboxEl1);
		controlsEl.appendChild(labelEl1);
		
		controlsEl.appendChild(routingProviderContainer);
		
		controlsEl.appendChild(checkboxEl5);
		controlsEl.appendChild(labelEl5);
		
		controlsEl.appendChild(checkboxEl2);
		controlsEl.appendChild(labelEl2);

		controlsEl.appendChild(checkboxEl3);
		controlsEl.appendChild(labelEl3);

		controlsEl.appendChild(checkboxEl4);
		controlsEl.appendChild(labelEl4);

		controlsEl.appendChild(checkboxEl6);
		controlsEl.appendChild(labelEl6);
		
		controlsEl.appendChild(Builder.node('br'));
		
		var unit = isMetric ? '0 km' : '0 miles';
		
		// result
		var showResultElDistanceDiv = Builder.node('div', {className: 'trackTextControlElement', id: 'resultElDistanceDiv'});
		var showResultElDistance = Builder.node('span', {style: 'color: #4b4b4b;', id: 'distance'});
		showResultElDistance.appendChild(document.createTextNode(unit));
		showResultElDistanceDiv.appendChild(showResultElDistance);
			
		var showResultElStatisticsPointsDiv = Builder.node('div', {className: 'trackTextControlElement', id: 'resultElStatisticsPointsDiv'});
		var showResultElStatisticsPoints = Builder.node('span', {style: 'color: #4b4b4b;', id: 'trackStatisticsPoints'});
		showResultElStatisticsPoints.appendChild(document.createTextNode('0 PT | 0 WPT'));
		showResultElStatisticsPointsDiv.appendChild(showResultElStatisticsPoints);
		
		var showResultElStatisticsTimeDiv = Builder.node('div', {className: 'trackTextControlElement', id: 'resultElStatisticsTimeDiv'});
		var showResultElStatisticsTime = Builder.node('span', {style: 'color: #4b4b4b;', id: 'trackStatisticsTime'});
		showResultElStatisticsTime.appendChild(document.createTextNode('0h 0m 0s'));
		showResultElStatisticsTimeDiv.appendChild(showResultElStatisticsTime);

		unit = isMetric ? ': 0 m' : ': 0 ft';
		
		var showResultElEleDiv = Builder.node('div', {className: 'trackTextControlElement', id: 'resultElEleDiv'});
		var showResultElEle = Builder.node('span', {style: 'color: #4b4b4b;', id: 'eleBubble'});
		showResultElEle.appendChild(document.createTextNode(labelTrackpointElevation + unit));
		showResultElEleDiv.appendChild(showResultElEle);

		controlsEl.appendChild(showResultElStatisticsPointsDiv);
		controlsEl.appendChild(showResultElDistanceDiv);
		if (!isRelaunch) {
			controlsEl.appendChild(showResultElStatisticsTimeDiv);
		}
		controlsEl.appendChild(showResultElEleDiv);	

		controlsEl.appendChild(Builder.node('br'));
		
		var helpEl = Builder.node('button', {title: help_createTrack_short, className:'controlButton'});
		helpEl.appendChild(document.createTextNode(help_title));
		controlsEl.appendChild(helpEl);
		L.DomEvent.addListener(helpEl, 'click', function(event) {

			var popup = L.popup()
			    .setLatLng(GPSiesMap.getCenter())
			    .setContent(help_createTrack)
			    .openOn(map);			

			/*
			var Cookies = new CookieHandler();
			var isDisableEditorHelp = Cookies.getCookie('y');
			if ($('helpCookie')) {
				$('helpCookie').checked = isDisableEditorHelp != null && isDisableEditorHelp == 'true';
			}
			*/	
			
		});

		controlsEl.appendChild(Builder.node('br'));

		// var isHasFullscreen = !isRelaunch;
		var isHasFullscreen = true;
		
		if (isHasFullscreen && !isCreateTrack && !isCreateTrackOnly) {
			var fullScreenEl = Builder.node('button', {id: 'fullScreenEl', className:'controlButton'});
			fullScreenEl.appendChild(document.createTextNode(isCreateTrackOnly?fullScreenLeave:fullScreenEnter));
			controlsEl.appendChild(fullScreenEl);
			L.DomEvent.addListener(fullScreenEl, 'click', function(event) {
				toggleFullscreen();
			});
			
			controlsEl.appendChild(Builder.node('br'));	
		}

		var undoEl = Builder.node('button', {title: undo_title, className:'controlButton'});
		undoEl.appendChild(document.createTextNode(undo_text));
		var undoCounterEl = Builder.node('span', {id: 'undoCounter'});
		undoEl.appendChild(undoCounterEl);
		
		controlsEl.appendChild(undoEl);
		
		L.DomEvent.addListener(undoEl, 'click', function(event) {
			undo();
		});
		
		container.appendChild(controlsEl);

		this._container.appendChild(container);

		return this._container;
		
	}

});

L.Control.TrackCreatorToggle = L.Control.extend({

	options: {
		position: 'topleft'
	},
	
	onAdd: function(map) {
		
		this._map = map;
		GPSiesMap = map;
		
		this._container = L.DomUtil.create('div', 'leaflet-control-track-creator-toggle');
		
		L.DomEvent.addListener(this._container, 'mousedown', L.DomEvent.stopPropagation);
		L.DomEvent.addListener(this._container, 'dblclick', L.DomEvent.stopPropagation);
		L.DomEvent.addListener(this._container, 'dblclick', L.DomEvent.preventDefault);
		
		L.DomEvent.addListener(this._container, 'click', L.DomEvent.stopPropagation);
		L.DomEvent.addListener(this._container, 'click', L.DomEvent.preventDefault);
		
		var container = Builder.node('div');
		
		var btnTrkEl = Builder.node('div', {id: 'btnTrk', title: _mTrk, className:'btnTrkActive'});
		var btnWptEl = Builder.node('div', {id: 'btnWpt', title: _mWpt, className:'btnWptInactive'});

		var hiddenEl = Builder.node('input', {type: 'hidden', value: 1, name: 'trkWptField', id: 'trkWptField'});

		L.DomEvent.addListener(btnTrkEl, 'click', function(event) {
			if ($('trkWptField').value == 0) {
				$('trkWptField').value = 1;
				$('btnTrk').className = 'btnTrkActive';
				$('btnWpt').className = 'btnWptInactive';
				$('isWaypointToggle').checked = false;
			}
		});	

		L.DomEvent.addListener(btnWptEl, 'click', function(event) {
			if ($('trkWptField').value == 1) {
				$('trkWptField').value = 0;
				$('btnTrk').className = 'btnTrkInactive';
				$('btnWpt').className = 'btnWptActive';
				$('isWaypointToggle').checked = true;
			}		
		});	

		container.appendChild(hiddenEl);
		container.appendChild(btnTrkEl);
		container.appendChild(btnWptEl);
		
		this._container.appendChild(container);

		return this._container;
		
	}
	
});

/*
L.Control.Test = L.Control.extend({
	options: {
		position: 'topleft'
	},

	onAdd: function (map) {
		var className = 'leaflet-control-zoom',
		    container = L.DomUtil.create('div', className);

		L.DomEvent.addListener(container, 'dblclick', L.DomEvent.stopPropagation);
		L.DomEvent.addListener(container, 'dblclick', L.DomEvent.preventDefault);
		
		this._createButton('Test in', className + '-in', container, map.zoomIn, map);
		this._createButton('Test out', className + '-out', container, map.zoomOut, map);

		return container;
	},

	_createButton: function (title, className, container, fn, context) {
		var link = L.DomUtil.create('a', className, container);
		link.href = '#';
		link.title = title;

		L.DomEvent
			.addListener(context, 'click', L.DomEvent.stopPropagation)
			.addListener(context, 'click', L.DomEvent.preventDefault)		
			.addListener(link, 'click', L.DomEvent.stopPropagation)
			.addListener(link, 'click', L.DomEvent.preventDefault);

		return link;
	}
});

L.Map.mergeOptions({
	testControl: true
});

L.Map.addInitHook(function () {
	if (this.options.testControl) {
		this.testControl = new L.Control.Test();
		this.addControl(this.testControl);
	}
});
*/
function getDynamicGeoJsonUrl(fId) {
	
	var url = serverUrl + 'download.do;jsessionid='+sessionId+'?filetype=geoJsonTrk&gGeoXml=true&fileId=' + fId;
	if (document.URL.indexOf('8080/gpsies') > -1) {
		if (document.URL.indexOf('dyndns') > -1) {
			url = 'http://kbechtold.dyndns.org:8080/gpsies/download.do;jsessionid='+sessionId+'?filetype=geoJsonTrk&gGeoXml=true&fileId=' + fId;
		}
		else {
			url = 'http://localhost:8080/gpsies/download.do;jsessionid='+sessionId+'?filetype=geoJsonTrk&gGeoXml=true&fileId=' + fId;
		}
	}
	return url;
	
}

function getRandomTiles(chars) {
	var rnum = Math.floor(Math.random() * chars.length);
	return chars.substring(rnum, rnum+1);
}

function getTileLayer(layer) {
	
	// http://wiki.openstreetmap.org/wiki/Slippy_map_tilenames
	// http://wiki.openstreetmap.org/wiki/Tileserver
	
	var tile;
	var tileUrl;
	var tileAttribution;
	var maxZoom = 18;
	var subdomains = 'abc';
	var isOverlay = false;
	
	var osmAttribution = 'Map data <a href="http://www.openstreetmap.org/" target="_blank">OpenStreetMap</a> and contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/" target="_blank">CC-BY-SA</a>';
	var legendInfo = ' <a href="page.do;jsessionid='+sessionId+'?page=mapLegend">Legende</a>';
	
	var useGoogleMaps = isCreateTrack || clientName == 'wingsforlife';
	
	// deactivate mapQuest
	if (layer == 'mapQuest' || layer == 'mapQuestOpenAerial') {
		layer = 'hikebike';
	}
	
	// basemaps
	if (layer == 'mapnik') {
		tileUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
		tileAttribution = 'Mapnik imagery <a href="http://www.openstreetmap.org/" target="_blank">OpenStreetMap</a> ' + osmAttribution + legendInfo;
	}
	else if (layer == 'sigmaCycle') {
		tileUrl = 'http://tiles1.sigma-dc-control.com/layer8/{z}/{x}/{y}.png';
		tileAttribution = '<a href="http://www.sigmasport.com/" target="_blank"><img src="images/sigma_logo_signet-links.png" /></a> <a href="http://www.sigmasport.com/" target="_blank">SIGMA Sport &reg;</a> ' + osmAttribution + legendInfo;
	}
	else if (layer == 'sigmaNormal') {
		tileUrl = 'http://tiles1.sigma-dc-control.com/layer5/{z}/{x}/{y}.png';
		tileAttribution = '<a href="http://www.sigmasport.com/" target="_blank"><img src="images/sigma_logo_signet-links.png" /></a> <a href="http://www.sigmasport.com/" target="_blank">SIGMA Sport &reg;</a> ' + osmAttribution + legendInfo;
	}	
	else if (layer == 'cycle') {
		// tileUrl = 'http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png';
		tileUrl = 'http://{s}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png';
		tileAttribution = '<a href="http://www.opencyclemap.org/docs/" target="_blank">OpenCycleMap.org</a> ' + osmAttribution + legendInfo;
	}
	else if (layer == 'hikebike') {
		// tileUrl = 'http://{s}.hikebike.gpsies.com/{z}/{x}/{y}.png';
		// tileUrl = 'http://{s}.hikebike.gpsies.com/tiles/hikebike/{z}/{x}/{y}.png';
		// tileUrl = 'http://{s}.www.toolserver.org/tiles/hikebike/{z}/{x}/{y}.png';
		// check, if map is present
		if (isUseSquidMapServer) {
			// tileUrl = 'http://hikebike.gpsies.com/{z}/{x}/{y}.png';
			tileUrl = 'http://map1.gpsies.com/{z}/{x}/{y}.png';
			tileAttribution = '<a href="http://hikebikemap.org/" target="_blank">HikeBikeMap.org</a> ' + osmAttribution + legendInfo;
		}
		else {
			tileUrl = 'http://tiles1.sigma-dc-control.com/layer5/{z}/{x}/{y}.png';
			tileAttribution = '<a href="http://www.sigmasport.com/" target="_blank"><img src="images/sigma_logo_signet-links.png" /></a> <a href="http://www.sigmasport.com/" target="_blank">SIGMA Sport &reg;</a> ' + osmAttribution + legendInfo;			
		}
	}		
	else if (layer == 'esri') {
		maxZoom = 18;
		tileUrl = scheme + '://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}';
		tileAttribution = 'Tiles: &copy; <a href="http://www.esri.com/" target="_blank">Esri</a>' + legendInfo;
	}	
	else if (layer == 'esriTopo') {
		tileUrl = scheme + '://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}';
		tileAttribution = 'Tiles: &copy; <a href="http://www.esri.com/" target="_blank">Esri World Topo</a>' + legendInfo;
	}		
	else if (layer == 'GPSies') {
		tileUrl = 'http://automatix.gpsies.com/osm/{z}/{x}/{y}.png';
		tileAttribution = 'GPSies<a href="http://www.gpsies.com/" target="_blank">GPSies</a> ' + osmAttribution + legendInfo;
	}
	else if (layer == 'wanderreitkarte') {
		tileUrl = 'http://base.wanderreitkarte.de/base/{z}/{x}/{y}.png';
		tileAttribution = 'Nop\'s Reit- und <a href="http://www.wanderreitkarte.de/" target="_blank">Wanderkarte</a> ' + osmAttribution + legendInfo;
	}
	else if (layer == 'hereMapNormal') {
		subdomains = '1234';
		tileUrl = 'https://{s}.base.maps.api.here.com/maptile/2.1/maptile/newest/normal.day/{z}/{x}/{y}/256/png8?app_id=Ue6lWMZCnWAv8SwEkgl6&app_code=o1_VfiW5_ZXH4bFXtbsP_g';
		tileAttribution = 'Map data &copy; 2016 <a href="http://www.here.com">HERE</a>';
	}
	else if (layer == 'basemapAt') {
		subdomains = '1234';
		tileUrl = 'http://maps{s}.wien.gv.at/basemap/bmapgrau/normal/google3857/{z}/{y}/{x}.png';
		tileAttribution = 'Tiles © <a href="https://www.basemap.at/">basemap.at</a> (Grau)';
	}
	// http://maps4.wien.gv.at/basemap/bmaporthofoto30cm/normal/google3857/15/11391/17756.jpeg
	else if (layer == 'basemapAtSat') {
		subdomains = '1234';
		tileUrl = 'http://maps{s}.wien.gv.at/basemap/bmaporthofoto30cm/normal/google3857/{z}/{y}/{x}.jpeg';
		tileAttribution = 'Tiles © <a href="https://www.basemap.at/">basemap.at</a> (Orthofoto)';
	}
	else if (layer == 'noMap') {
		tileUrl = 'images/white.png';
		tileAttribution = '';
	}
	// Overlays
	else if (layer == 'wanderreitkarteHills') {
		isOverlay = true;
		tileUrl = 'http://www.wanderreitkarte.de/hills/{z}/{x}/{y}.png';
		tileAttribution = 'Nop\'s Reit- und <a href="http://www.wanderreitkarte.de/" target="_blank">Wanderreitkarte.de</a>';
	}
	else if (layer == 'wanderreitkarteTopo') {
		isOverlay = true;
		tileUrl = 'http://www.wanderreitkarte.de/topo/{z}/{x}/{y}.png';
		tileAttribution = 'Nop\'s Reit- und <a href="http://www.wanderreitkarte.de/" target="_blank">Wanderreitkarte.de</a>';
	}		
	else if (layer == 'hillShading') {
		isOverlay = true;
		maxZoom = 16;
		// tileUrl = 'http://a.hikebikehill.gpsies.com/hill/{z}/{x}/{y}.png';
		tileUrl = 'http://hills.gpsies.com/{z}/{x}/{y}.png';
		// tileUrl = 'http://n096h051.rs.de.inter.net/{z}/{x}/{y}.png';
		if (useGoogleMaps) {
			tileAttribution = '';
		}
		else {
			tileAttribution = '<a href="http://hikebikemap.org/" target="_blank">HikeBikeMap.org HillShading</a>';
		}
	}
	else if (layer == 'openSeaMap') {
		isOverlay = true;
		tileUrl = 'http://tiles.openseamap.org/seamark/{z}/{x}/{y}.png';
		tileAttribution = '<a href="http://www.openseamap.org/" target="_blank">OpenSeaMap.org</a>';
	}
	else if (layer == 'waymarkedHiking') {
		isOverlay = true;
		tileUrl = 'http://tile.waymarkedtrails.org/hiking/{z}/{x}/{y}.png';
		tileAttribution = '<a href="http://hiking.waymarkedtrails.org/" target="_blank">Waymarked Trails: Wanderwege</a>';
	}
	else if (layer == 'waymarkedCycling') {
		isOverlay = true;
		tileUrl = 'http://tile.waymarkedtrails.org/cycling/{z}/{x}/{y}.png';
		tileAttribution = '<a href="http://cycling.waymarkedtrails.org/" target="_blank">Waymarked Trails: Radwege</a>';
	}
	else if (layer == 'waymarkedRiding') {
		isOverlay = true;
		tileUrl = 'http://tile.waymarkedtrails.org/riding/{z}/{x}/{y}.png';
		tileAttribution = '<a href="http://riding.waymarkedtrails.org/" target="_blank">Waymarked Trails: Reitwege</a>';
	}
	
	if (useGoogleMaps && layer == 'googleMap') {
		tile = new L.Google('ROADMAP');
	}
	else if (useGoogleMaps && layer == 'googleMapHybrid') {
		tile = new L.Google('HYBRID');
	}
	else if (useGoogleMaps && layer == 'googleMapTerrain') {
		tile = new L.Google('TERRAIN');
	}
	else if (useGoogleMaps && layer == 'googleMapSat') {
		tile = new L.Google('SATELLITE');
	}
	else {
		tile = new L.TileLayer(tileUrl, {maxZoom: maxZoom, attribution: tileAttribution + (isOverlay ? '<a id="mapTypeOverlay" name="'+layer+'"></a>' : '<a id="mapTypeLayer" name="'+layer+'"></a>'), subdomains: subdomains});	
	}
	
	return tile;
	
}

function createMap(whichMapId, whichCenter, whichZoom, whichMapType, isScrollWheelZoom) {

	// MapTypes
	/*
	var esriTopo = getTileLayer('esriTopo');	
	var fineline = getTileLayer('fineline');
	var minimal = getTileLayer('minimal');
	var midnightCommander = getTileLayer('midnightCommander');
	var wanderreitkarte = getTileLayer('wanderreitkarte');
	var GPSies = getTileLayer('GPSies');
	var landscape = getTileLayer('landscape');
	*/
	
	var cycle = getTileLayer('cycle');
	var hikebike = getTileLayer('hikebike');
	var esri = getTileLayer('esri');
	var mapnik = getTileLayer('mapnik');
	var basemapAt = getTileLayer('basemapAt');
	var basemapAtSat = getTileLayer('basemapAtSat');
	var hereMapNormal = getTileLayer('hereMapNormal');
	var sigmaCycle = getTileLayer('sigmaCycle');
	var sigmaNormal = getTileLayer('sigmaNormal');
	var googleMap = getTileLayer('googleMap');
	var googleMapHybrid = getTileLayer('googleMapHybrid');
	var googleMapTerrain = getTileLayer('googleMapTerrain');
	var googleMapSat = getTileLayer('googleMapSat');
	var noMap = getTileLayer('noMap');
	
	// Overlays
	/*
	var wanderreitkarteTopo = getTileLayer('wanderreitkarteTopo');
	var wanderreitkarteHills = getTileLayer('wanderreitkarteHills');
	*/
	var hillShading = getTileLayer('hillShading');
	var openSeaMap = getTileLayer('openSeaMap');
	var waymarkedHiking = getTileLayer('waymarkedHiking');
	var waymarkedCycling = getTileLayer('waymarkedCycling');
	var waymarkedRiding = getTileLayer('waymarkedRiding');
	
	var mapType = hikebike;
	
	if (whichMapType) {
		if (whichMapType == 'cycle') {
			mapType = cycle;
		}
		else if (whichMapType == 'hikebike') {
			mapType = hikebike;
		}
		else if (whichMapType == 'esri') {
			mapType = esri;
		}
		else if (whichMapType == 'mapnik') {
			mapType = mapnik;
		}
		else if (whichMapType == 'basemapAt') {
			mapType = basemapAt;
		}
		else if (whichMapType == 'basemapAtSat') {
			mapType = basemapAtSat;
		}
		else if (whichMapType == 'hereMapNormal') {
			mapType = hereMapNormal;
		}
		else if (whichMapType == 'sigmaCycle') {
			mapType = sigmaCycle;
		}
		else if (whichMapType == 'sigmaNormal') {
			mapType = sigmaNormal;
		}
		else if (whichMapType == 'landscape') {
			mapType = landscape;
		}
		else if (whichMapType == 'noMap') {
			mapType = noMap;
		}
		else if (whichMapType == 'googleMap') {
			mapType = googleMap;
		}
		else if (whichMapType == 'googleMapHybrid') {
			mapType = googleMapHybrid;
		}
		else if (whichMapType == 'googleMapSat') {
			mapType = googleMapSat;
		}
		else if (whichMapType == 'googleMapTerrain') {
			mapType = googleMapTerrain;
		}
		
	}
	
	var mapId = 'map';
	if (whichMapId && whichMapId != '') {
		mapId = whichMapId;
	}
	
	var mapTypeOverLayers = new Array();
	mapTypeOverLayers.push(mapType);

	if (initialMapOverlay && initialMapOverlay.length > 0) {
		for (i = 0; i < initialMapOverlay.length; i++) {
			mapTypeOverLayers.push(eval(initialMapOverlay[i]));
		}
	}
	
	var mOpts = new Object();
	mOpts.layers = mapTypeOverLayers;
	mOpts.zoomControl = false;
	mOpts.keyboard = false;
	mOpts.minZoom = 2;
	mOpts.scrollWheelZoom = isScrollWheelZoom;
	// mOpts.zoomAnimation = false;
	
	if (whichCenter) {
		mOpts.center = whichCenter;
	}
	
	if (whichZoom) {
		mOpts.zoom = whichZoom;
	}

	var m = new L.Map(mapId, mOpts);
	
	L.DomEvent.addListener(m, 'layeradd', function(event) {
		if (L.TileLayer && (event.layer instanceof L.TileLayer)) {
			var html = event.layer.options.attribution;
			// console.log(html);
			var mapTypeLayer = '';
			if (html.indexOf('id="mapTypeLayer" name="') > -1) {
				mapTypeLayer = html.substr(html.indexOf('id="mapTypeLayer" name="') + 'id="mapTypeLayer" name="'.length);
				mapTypeLayer = mapTypeLayer.substr(0, mapTypeLayer.indexOf('"'));
				updateAfterMotion(m, mapTypeLayer);
				updateMapType(mapTypeLayer);
			}
			if (mapTypeLayer == 'sigmaCycle') {
				// try to deactivate hillshading
			}
			if (html.indexOf('id="mapTypeOverlay" name="') > -1) {
				var mapTypeOverlay = html.substr(html.indexOf('id="mapTypeOverlay" name="') + 'id="mapTypeOverlay" name="'.length);
				mapTypeOverlay = mapTypeOverlay.substr(0, mapTypeOverlay.indexOf('"'));
				updateMapOverlay(mapTypeOverlay, true);
			}
		}
		else if (L.TileLayer && (event.layer instanceof L.Google)) {
			// console.log(event.layer._type);
			if (event.layer._type == 'ROADMAP') {
				updateAfterMotion(m, 'googleMap');
				updateMapType('googleMap');
			}
			else if (event.layer._type == 'HYBRID') {
				updateAfterMotion(m, 'googleMapHybrid');
				updateMapType('googleMapHybrid');
			}
			else if (event.layer._type == 'TERRAIN') {
				updateAfterMotion(m, 'googleMapSat');
				updateMapType('googleMapSat');
			}
			else if (event.layer._type == 'SATELLITE') {
				updateAfterMotion(m, 'googleMapTerrain');
				updateMapType('googleMapTerrain');
			}
		}
	});

	L.DomEvent.addListener(m, 'layerremove', function(event) {
		if (L.TileLayer && (event.layer instanceof L.TileLayer)) {
			var html = event.layer.options.attribution;
			if (html.indexOf('id="mapTypeOverlay" name="') > -1) {
				var mapTypeOverlay = html.substr(html.indexOf('id="mapTypeOverlay" name="') + 'id="mapTypeOverlay" name="'.length);
				mapTypeOverlay = mapTypeOverlay.substr(0, mapTypeOverlay.indexOf('"'));
				updateMapOverlay(mapTypeOverlay, false);
			}
		}
	});
	
	var isIframe = !isFullScreenLeave && (isMapOnly || isMapFolderOnly || isMapUserOnly || isNotepadListOnly || isRecommendationListOnly);
	
	
	
	if (isMapThumb || isFacebookApp) {
	}
	else if (isMobile || isIframe) {

		if (isThunderforestUsage) {
			baseMaps = {"Open Cycle Map": cycle, "Sigma Topo": sigmaNormal, "Hike Bike Map": hikebike };
		}
		else {
			baseMaps = {"Sigma Topo": sigmaNormal, "Hike Bike Map": hikebike };
		}
		
		overlayMaps = {
				"Hikebike Hills": hillShading,
				"Waymarked Trails": waymarkedHiking,
				"Waymarked Cycles": waymarkedCycling,
				"Open Sea Map": openSeaMap,
		};
		
	}
	else {

		if (clientName == 'wingsforlife') {
			baseMaps = {
				"Sigma Cycle": sigmaCycle,
				"Sigma Topo": sigmaNormal,
				"Hike Bike Map": hikebike,
				"OpenStreetMap": mapnik, 
				"Google Maps Satellit": googleMapSat,
				"Google Maps Hybrid": googleMapHybrid,
				"Google Maps Terrain": googleMapTerrain,
				"Google Maps Road": googleMap,
				"Here Map": hereMapNormal, 
				"Esri": esri, 
				"Empty map": noMap
			};			
		}
		else if (isCreateTrack) {
			
			if (isThunderforestUsage) {
				if (countryCode == 'AT') {
					baseMaps = {
						"Basemap.at": basemapAt, 
						"Basemap.at Sat": basemapAtSat, 
						"Open Cycle Map": cycle,
						"Sigma Cycle": sigmaCycle,
						"Sigma Topo": sigmaNormal,
						"Hike Bike Map": hikebike,
						"OpenStreetMap": mapnik, 
						"Google Maps Satellit": googleMapSat,
						"Google Maps Hybrid": googleMapHybrid,
						"Google Maps Terrain": googleMapTerrain,
						"Google Maps Road": googleMap,
						"Esri": esri, 
						"Empty map": noMap
					};
				}
				else {
					baseMaps = {
						"Open Cycle Map": cycle,
						"Sigma Cycle": sigmaCycle,
						"Sigma Topo": sigmaNormal,
						"Hike Bike Map": hikebike,
						"OpenStreetMap": mapnik, 
						"Google Maps Satellit": googleMapSat,
						"Google Maps Hybrid": googleMapHybrid,
						"Google Maps Terrain": googleMapTerrain,
						"Google Maps Road": googleMap,
						"Esri": esri, 
						"Empty map": noMap
					};				
				}
			}
			else {
				if (countryCode == 'AT') {
					baseMaps = {
						"Basemap.at": basemapAt, 
						"Basemap.at Sat": basemapAtSat, 
						"Sigma Cycle": sigmaCycle,
						"Sigma Topo": sigmaNormal,
						"Hike Bike Map": hikebike,
						"OpenStreetMap": mapnik, 
						"Google Maps Satellit": googleMapSat,
						"Google Maps Hybrid": googleMapHybrid,
						"Google Maps Terrain": googleMapTerrain,
						"Google Maps Road": googleMap,
						"Esri": esri, 
						"Empty map": noMap
					};
				}
				else {
					baseMaps = {
						"Sigma Cycle": sigmaCycle,
						"Sigma Topo": sigmaNormal,
						"Hike Bike Map": hikebike,
						"OpenStreetMap": mapnik, 
						"Google Maps Satellit": googleMapSat,
						"Google Maps Hybrid": googleMapHybrid,
						"Google Maps Terrain": googleMapTerrain,
						"Google Maps Road": googleMap,
						"Esri": esri, 
						"Empty map": noMap
					};				
				}
			}
			
		}
		else {

			if (isThunderforestUsage) {
				if (countryCode == 'AT') {
					baseMaps = {
						"Basemap.at": basemapAt, 
						"Basemap.at Sat": basemapAtSat,
						"Open Cycle Map": cycle, 
						"Sigma Cycle": sigmaCycle,
						"Sigma Topo": sigmaNormal,
						"Hike Bike Map": hikebike,
						"OpenStreetMap": mapnik,
						"Esri": esri, 
						"Empty map": noMap
					};
				}
				else {
					baseMaps = {
						"Open Cycle Map": cycle, 
						"Sigma Cycle": sigmaCycle,
						"Sigma Topo": sigmaNormal,
						"Hike Bike Map": hikebike,
						"OpenStreetMap": mapnik,
						"Esri": esri, 
						"Empty map": noMap
					};
				}
			}
			else {
				if (countryCode == 'AT') {
					baseMaps = {
						"Basemap.at": basemapAt, 
						"Basemap.at Sat": basemapAtSat,
						"Sigma Cycle": sigmaCycle,
						"Sigma Topo": sigmaNormal,
						"Hike Bike Map": hikebike,
						"OpenStreetMap": mapnik,
						"Esri": esri, 
						"Empty map": noMap
					};
				}
				else {
					baseMaps = {
						"Sigma Cycle": sigmaCycle,
						"Sigma Topo": sigmaNormal,
						"Hike Bike Map": hikebike,
						"OpenStreetMap": mapnik,
						"Esri": esri, 
						"Empty map": noMap
					};
				}
			}
			
		}

		if (clientName == 'vfdnet') {
			overlayMaps = {
				"Open Sea Map": openSeaMap,
				"Hike Bike Hills": hillShading,
				"Waymarked Trails": waymarkedHiking,
				"Waymarked Cycles": waymarkedCycling,
				"Waymarked Horseriding": waymarkedRiding,
			};
		}
		else {
			overlayMaps = {
				"Open Sea Map": openSeaMap,
				"Hike Bike Hills": hillShading,
				"Waymarked Trails": waymarkedHiking,
				"Waymarked Cycles": waymarkedCycling
			};			
		}
		
		/*
		"Wanderreitkarte Hills": wanderreitkarteHills,
		"Wanderreitkarte Topo": wanderreitkarteTopo
		*/
		
	}
	
	return m;
	
}

function addMapControl(m) {
	
	var isIframe = !isFullScreenLeave && (isMapOnly || isMapFolderOnly || isMapUserOnly || isNotepadListOnly || isRecommendationListOnly);
	
	if (!isMobile) {
		m.addControl(new L.Control.Map());
	}
	
	if (isIframe) {
		m.addControl(new L.Control.Scale({maxWidth: 80, position: "bottomleft"}));
	}
	else {
		m.addControl(new L.Control.Scale({maxWidth: 80, position: "bottomright"}));
	}
	
	if (!isMobile && (isMapOnly || isMapUser || isMapFolder || isMapFolderOnly || isMapUserOnly || isNotepadListOnly || isRecommendationListOnly || isLiveTrackingTrack)) {
		if (!isMapUser && !isFullScreenLeave && !isLiveTrackingTrack) {
			m.addControl(new L.Control.PoweredBy());
		}
		if (!isSmallIframe && (isMapOnly || isLiveTrackingTrack)) {
			m.addControl(new L.Control.TrackSmall());
		}
	}
	/*
	else if (!isMap) {
		if (!overviewMapControl) {
			overviewMapControl = new GOverviewMapControl();
		}
		map.addControl(overviewMapControl);
	}
	*/
	if (isMapOnly || isMap) {
		m.addControl(new L.Control.Elevation());
	}

	m.addControl(new L.Control.geocoder({collapsed: isMobile, maxWidth: 60, position: 'topleft', placeholder: label_zipCity}));

	if ($('liveTrackingUserList')) {
		m.addControl(new L.Control.LiveTrackingPosition());
	}
	
	if (!isFacebookApp && !isMobile && isMap && !isMapOnly && !isMapPrint) {
		m.addControl(new L.Control.Track());
	}
	
	if (isFacebookApp) {
		// no control
	}
	else if (isMapThumb) {
		// control see loadPointInfoThumb()
	}
	else if (isMobile) {
		m.addControl(new L.Control.Layers(baseMaps, overlayMaps));
	}
	else {
		m.addControl(new L.Control.Layers(baseMaps, overlayMaps));
	}
	
	m.addControl(new L.Control.Zoom());
	if (!isSafari()) {
		L.control.fullscreen().addTo(m);
	}
	L.control.locate().addTo(m);
	
	if ($('scrollWheelZoomToggle')) {

		var Cookies = new CookieHandler();
		var isScrollWheelZoom = Cookies.getCookie('swz');
		
		if (isScrollWheelZoom) {
			if (isScrollWheelZoom == 'true') {
				map.scrollWheelZoom.enable();
				$('scrollWheelZoomToggle').checked = true;
			}
			else if (isScrollWheelZoom == 'false') {
				map.scrollWheelZoom.disable();
				$('scrollWheelZoomToggle').checked = false;
			}
		}
		// set default to enabled
		else {
			map.scrollWheelZoom.enable();
		}
		
	}
	
}

function getGeoJsonUrl(fid) {
	if (fid && fid != '' && fid.length > 1) {
		return 'files/geojson/' + fid.substr(0, 1) + '/' + fid.substr(1, 1) + '/' + fid.substr(2, 1) + '/' + fid + '.js' + '?cacheId=' + randomString();
	}	
}

function showTrackOnMap(tempMap, fId, isGotoDefaultViewport, isLineColorRandom) {
	
	var isDynamic = isFetchTrack;
	
	var geoJsonUrl;
	if (isDynamic) {
		geoJsonUrl = getDynamicGeoJsonUrl(fId);
	}
	else {
		geoJsonUrl = getGeoJsonUrl(fId);
	}

	new Ajax.Request(geoJsonUrl, {
		method: 'get',
			onComplete: function(transport) {
				var json = eval('(' + transport.responseText + ')');
				if (json) {
					var startPoint;
					var endPoint;
					if (json.features) {
						var feature;
						var myStyle;
						var geometry;
						var bbox;
						var p1;
						var p2;
						
						var trackLineColor = lineColor;
						if (templateFileId != '') {
							trackLineColor = '#f0f';
					    }
						
						for (i=0; i<json.features.length; i++) {
							
							feature = json.features[i];

							myStyle = {
								    'color': (isLineColorRandom ? randomColorName() : trackLineColor),
								    'weight': 5,
								    'opacity': lineOpacity,
								    'clickable': false
								};							
							
							myStyleBorder = {
								    'color': '#fff',
								    'weight': 10,
								    'opacity': lineOpacity,
								    'clickable': false
								};
							
							// corrected and valid GeoJSON format
							if (feature && feature.type == 'Feature') {
								if (feature.geometry) {
									geometry = feature.geometry;
									if (geometry && geometry.bbox && geometry.type == 'MultiLineString') {
										bbox = geometry.bbox;
									}
								}
							}
							// legagy invalid GeoJSON format
							else if (feature && feature.type == 'MultiLineString') {
								geometry = feature;	
								if (feature.bbox) {
									bbox = feature.bbox;
								}
							}
							
							if (geometry && geometry.type == 'MultiLineString') {

								if (!isViewTracks && !isViewTracksOnly && geoXml && map.hasLayer(geoXml)) {
									tempMap.removeLayer(geoXml);
								}

								if (!isViewTracks && !isViewTracksOnly && geoXmlBorder && map.hasLayer(geoXmlBorder)) {
									tempMap.removeLayer(geoXmlBorder);
								}
								
								geoXmlBorder = L.geoJson(geometry, {
								    style: myStyleBorder
								}).addTo(tempMap);
								
								geoXml = L.geoJson(geometry, {
								    style: myStyle
								}).addTo(tempMap);
								
								geoXml.fileId = fId;
								geoXmlBorder.fileId = fId;
								
								if (isViewTracks || isViewTracksOnly || isShortCutTrackFromGeoJson) {
									/*
									geoXml.on('mouseover', function(e) {
										// console.log(fId);
									});
									*/
									geoXmlArray.push(geoXml);
									geoXmlBorderArray.push(geoXmlBorder);
								}

								if ((isGotoDefaultViewport && bbox) || isShortCutTrackFromGeoJson) {
									p1 = new L.LatLng(parseFloat(bbox[1]), parseFloat(bbox[0]));
									p2 = new L.LatLng(parseFloat(bbox[3]), parseFloat(bbox[2]));
									if (bounds) {
										bounds.extend(p1);
										bounds.extend(p2);
									}
									else {
										bounds = new L.LatLngBounds(p1, p2);
									}
								}
								
							}
							
							geometry = null;
							bbox = null;
							
						}
						
						if (!isMapPrint && isShortCutTrackFromGeoJson && geoXmlArray && (!$('tracksBBoxToggle') || ($('tracksBBoxToggle') && !$('tracksBBoxToggle').checked))) {
							if (bounds) {
								map.fitBounds(bounds);
							}
							polyline = setAllPolylineByGeoJson(geoXmlArray);
							initFlotrChart();
						}
						
						if (isGotoDefaultViewport && bounds) {
							map.fitBounds(bounds);
						}
					}						
				}
				if(jQuery && jQuery.PubSub){
                    jQuery.PubSub('geojson loaded').publish({
                        json: JSON.parse(transport.responseText),
                        id: tempMap._container.id
                    });
                }
			}
		}
	);
	
	return false;

}

function locateMe() {
	if (map) {
		map.locate({setView: true});
		map.on('locationfound', onLocationFound);
	}
}

function onLocationFound(e) {
	
    var radius = e.accuracy / 2;
    var marker = new L.Marker(e.latlng);
    map.addLayer(marker);
    // marker.bindPopup("You are within " + radius + " meters from this point").openPopup();
    var circle = new L.Circle(e.latlng, radius);
    map.addLayer(circle);

    if ($('lat') && $('lon')) {
    	$('lat').value = e.latlng.lat;
    	$('lon').value = e.latlng.lng;
    	/*
		var yahooGeocode = function(data) {
			if (data != null) {
				console.log(data);
			}
		}					
		Gpsies.getYahooGeocode(e.latlng.lat, e.latlng.lng, yahooGeocode);    
		*/	
    }
    
}

function loadMapViewTracks() {

	map = createMap('map', new L.LatLng(51.165691, 10.451526), 2, initialMapType, false);
	addMapControl(map);
	
	if (tracks) {
	
		var point;
		var marker;
		
		for (var i=0; i<tracks.length; i++) {
		
			point = new L.LatLng(parseFloat(tracks[i].lat), parseFloat(tracks[i].lon));
			
			var opts = new Object();
				opts.icon = createMilestoneIcon(tracks[i].filename);
				opts.clickable = false;
				opts.title = tracks[i].filename;	
					
		  	var m = new L.Marker(point, opts);
		  	
			markersArray.push(m);
			
		  	/*
			map.addLayer(m);

			if (map.hasLayer(m)) {
				map.removeLayer(m);
			}
			*/
		  	
			// marker.hide();
			
		}

		for (var i = 0; i < tracks.length; i++) {
			showTrackOnMap(map, tracks[i].fileId, true, true);
		}

		if (isWaypoints()) {
			var waypointMarkerArr;
			for (var i=0; i<waypointsArray.length; i++) {
				waypointMarkerArr = createReadonlyWaypointMarker(waypointsArray[i]);
				waypointsArray[i].marker = waypointMarkerArr[0];
			}
		}
		
	}

}

function loadMapTrackList(zoomIn) {

	var isNewTarget = (isWelcomeOnly || isMapUserOnly || isNotepadListOnly || isMapFolderOnly) && !isFullScreenLeave;

	map = createMap('map', null, null, initialMapType, false);

	if (markersArray) {

		bounds = null;
		var point;
		var iconName;
		var title;
		var mapUrl = 'map.do' + addSessionId() + '?fileId='
	
		for (var i=0; i<markersArray.length; i++) {

			if (markersArray[i].dataType == 1) {
				
				point = new L.LatLng(parseFloat(markersArray[i].startpointLat), parseFloat(markersArray[i].startpointLon));
				
				if (bounds == null) {
					bounds = new L.LatLngBounds();
				}
				
				bounds.extend(point);
				
				// iconName = 'flag_green_special'; // changed, because nobody does understand difference
				iconName = 'flag_red_special';
				title = getMarkerNumberInList(markersArray[i].fileId);
				
				if (title != null) {
					if (markersArray[i].index) {
						title = '# ' + markersArray[i].index;	
					}
					else {
						title = '# ' + title;	
					}
					// iconName = 'flag_red_special';
				}
				else if (isMapFolderOnly || isMapUserOnly || isNotepadListOnly) {
					// iconName = 'flag_red_special';
					if (markersArray.length <= 5) {
						title = abbreviateText(markersArray[i].filename, 20);
					}
				}
				else if (markersArray[i].index) {
					// bad performance!
					// title = '# ' + markersArray[i].index;
				}
				
				map.addLayer(createTrackMarker(point, markersArray[i], mapUrl + markersArray[i].fileId, isNewTarget, title, iconName, i));
				
			}
		}

		if (bounds != null && bounds.isValid()) {
			map.fitBounds(bounds);
			if (zoomIn) {
				map.zoomIn();
			}
		}
		else {
			map.setView(new L.LatLng(51.165691, 10.451526), 2);
		}
		
		updateAfterMotion(map);
					
	}
	
	addMapControl(map);

}

function loadMapTrackListFacebook() {

	map = createMap('map', null, null, 'esri', false);

	if (markersArray) {

		bounds = null;
		var point;
		var iconName = 'flag_red_special';
		var title;
		var mapUrl = 'map.do' + addSessionId() + '?fileId='
	
		for (var i=0; i<markersArray.length; i++) {
			if (markersArray[i].dataType == 1) {
				point = new L.LatLng(parseFloat(markersArray[i].startpointLat), parseFloat(markersArray[i].startpointLon));
				if (bounds == null) {
					bounds = new L.LatLngBounds();
				}
				bounds.extend(point);
				if (markersArray.length < 50) {
					title = abbreviateText(markersArray[i].filename, 10);
				}
				map.addLayer(createTrackMarker(point, markersArray[i], mapUrl + markersArray[i].fileId, true, title, iconName, i));
			}
		}

		if (bounds != null) {
			map.fitBounds(bounds);
		}
		else {
			map.setView(new L.LatLng(51.165691, 10.451526), 2);
		}
		
		updateAfterMotion(map);
					
	}

	addMapControl(map);
	
}

function loadPointInfoThumb(zoomLevel, mapType, tracksCount) {

	if (tracks) {
	
		var point;
		var marker;
		var mapTemp;
		
		if (!tracksCount) {
			tracksCount = tracks.length;
		}
		else if (tracksCount && tracksCount > tracks.length) {
			tracksCount = tracks.length;
		}
		
		for (var i=0; i<tracksCount; i++) {
		
			point = new L.LatLng(parseFloat(tracks[i].lat), parseFloat(tracks[i].lon));
			
			// marker = createMarker(point, null, createIcon(tracks[i].trackType, null, 1), tracks[i].filename, i, 'map.do?fileId='+tracks[i].fileId, null);
			marker = new L.Marker(point, {icon: createIcon(tracks[i].trackType, null, 1), title: tracks[i].filename});
			
			mapTemp = createMap('map'+i, point, zoomLevel, mapType, false);
			mapTemp.addControl(new L.Control.Zoom());
			// mapTemp.addControl(new L.Control.Scale({width: 50, position: "bottomright"}));
			mapTemp.addControl(new L.Control.MapThumb({fileId: tracks[i].fileId}));
			
			marker.fileId = tracks[i].fileId;
			
			mapTemp.addLayer(marker);

			marker.addEventListener('click', function(e) {
				window.location.href = mapAction + e.target.fileId;
		  	});
			
			// showTrackOnMap(mapTemp, tracks[i].fileId, true, false);

		}
		
	}
		
}

function loadTrackData(fileId, zoomLevel, mapType, picasaUsername, picasaAlbumname, picasaAuthkey) {

	var trackData = function(data) {

		if (data != null && typeof data == 'object') {

			var isWaypointsDataType = (dataType == '2');

			if (data.bounds) {
				bounds = new L.LatLngBounds(
					new L.LatLng(parseFloat(data.bounds.startpointLat), parseFloat(data.bounds.startpointLon)), 
					new L.LatLng(parseFloat(data.bounds.endpointLat), parseFloat(data.bounds.endpointLon)));
			}
			else if (data.marker) {
				bounds = new L.LatLngBounds(
					new L.LatLng(parseFloat(data.marker.startpointLat), parseFloat(data.marker.startpointLon)), 
					new L.LatLng(parseFloat(data.marker.endpointLat), parseFloat(data.marker.endpointLon)));
			}

			if (!isMobile && !isShortCutTrackFromGeoJson) {
				
				shortCutTrack = data.shortCutTrack;
				
				if (shortCutTrack) {

					var pointsArray = new Array();

					var pt;
					for (var i=0; i<shortCutTrack.length; i++) {
						pt = new L.LatLng(parseFloat(shortCutTrack[i].lat), parseFloat(shortCutTrack[i].lon));
						shortCutTrack[i].pt = pt; 
						pointsArray.push(pt);
					}

					polyline = new L.Polyline(pointsArray); // for editor and plotter
					polylineBorder = new L.Polyline(pointsArray); // for editor
				
				}
				
			}

			map = createMap('map', null, null, mapType, false);

			if (bounds && bounds.isValid()) {
				map.fitBounds(bounds);
			}
			
			addMapControl(map);

			map.addEventListener('moveend', function(e) {
				markerTimeout = window.setTimeout(showMoreMarkers, 500);
			});
			
			if (isWaypointsDataType) {
				
				var fileWaypoints = data.fileWaypoints;
				var newWaypointIcon = createNewWaypointIcon('generic');
				
				var point;
				var marker;
				var eleTxt;

				for (var i=0; i<fileWaypoints.length; i++) {
					
					point = new L.LatLng(parseFloat(fileWaypoints[i].lat), parseFloat(fileWaypoints[i].lon));
					marker = new L.Marker(point, {icon: newWaypointIcon, title: fileWaypoints[i].name});

					if (fileWaypoints[i].ele && fileWaypoints[i].ele != '') {
						if (isMetricSystem()) {
							eleTxt = labelTrackpointElevation + ': ' + Math.round(fileWaypoints[i].ele) + ' m';
						}
						else {
							eleTxt = labelTrackpointElevation + ': ' + Math.round(fileWaypoints[i].ele * 3.2808399) + ' ft';
						}
					}
					else {
						eleTxt = '';
					}
					
					marker.bindPopup(
							'<h3 style=\"text-align: left;\"><img style=\"margin-right: 10px;\" src=\"images/waypointIcons/generic.png\" /> '+fileWaypoints[i].name+'</h3>'+
							'<p style=\"text-align: left;\"><em>'+eleTxt+'</em></p>');
					
					map.addLayer(marker);
					
				}
				
			}
			else {
				showTrackOnMap(map, fileId, (bounds && !bounds.isValid()), false);
			}

			if (polyline && !isMobile && !isMapPrint && !isShortCutTrackFromGeoJson) {
				initFlotrChart();
			}
			
			if (isWaypoints()) {
				setTimeout(addWaypointsToMap, 2000);
			}

			if (picasaUsername && picasaAlbumname) {
				getPicasaPhotoEntries(picasaUsername, picasaAlbumname, picasaAuthkey);
			}
			
			if (!isWaypointsDataType) {
				
				var startPoint = new L.LatLng(parseFloat(data.marker.startpointLat), parseFloat(data.marker.startpointLon));
				var endPoint = new L.LatLng(parseFloat(data.marker.endpointLat), parseFloat(data.marker.endpointLon));

				if (startPoint) {
					var markerStart = new L.Marker(startPoint, {icon: createTrackIcon('start'), title: 'Start'});
					map.addLayer(markerStart);
				}
				if (endPoint) {
					var markerEnd = new L.Marker(endPoint, {icon: createTrackIcon('end'), title: 'End'});
					map.addLayer(markerEnd);
				}				
				
				if (!isMobile) {
					trackDistance = parseFloat(data.trackLengthKm) * 1000;
					
					if (isMapOnly) {
						initTrackLength();
					}
					else {
						calculateTrack('pace');
					}
				}
				
			}
			
		}

	}
	
	Gpsies.loadTrackData(fileId, 1000, isAlternativeDb, isShortCutTrackFromGeoJson, trackData);	
	
}

function showMoreMarkers() {
	if ($('panoramioToggle')) {
		showPanoramio();
	}
	if ($('wikipediaToggle')) {
		showWikipedia();
	}
	if ($('qypeToggle')) {
		showQype();
	}			
	if ($('youtubeToggle')) {
		// showYouTube();
	}
}

function addWaypointsToMap() {
	var waypointMarkerArr;
	for (var i=0; i<waypointsArray.length; i++) {
		waypointMarkerArr = createReadonlyWaypointMarker(waypointsArray[i]);
		waypointsArray[i].marker = waypointMarkerArr[0];
		if (!isWaypointToggle) {
			if (map.hasLayer(waypointsArray[i].marker)) {
				map.removeLayer(waypointsArray[i].marker);
			}
		}
		bounds.extend(new L.LatLng(parseFloat(waypointsArray[i].lat), parseFloat(waypointsArray[i].lon)));
	}
	map.fitBounds(bounds);
}

function createTrackMarker(pt, trackpointData, linkUrl, isNewTarget, markerText, iconName, index) {

	var title = (Math.round(getTrackDistanceUnitSystem(trackpointData.trackLength) * 10) / 10) + (isImperialSystem() ? ' miles' : ' km') + ' ('+(trackpointData.property == 1 ? roundTrip : oneWayTrip )+')';

	var filename = trackpointData.filename;
	filename = filename.replace('&#039;', '\'');
	
	var opts = new Object();
	opts.icon = createSpecialIcon(iconName, markerText);
	opts.clickable = true;
	if (isMapUserOnly || isNotepadListOnly || isMapFolderOnly) {
		opts.title = title + ': ' + filename;
	}
	else {
		opts.title = (index ? '# ' + (index + 1) + ' | ' : '' ) + title + ': ' + filename;	
	}
			
  	var marker = new L.Marker(pt, opts);
  	
	if (marker) {
		var websiteLink = '';
		if (trackpointData.websiteUrl && trackpointData.websiteUrl.length != '' && trackpointData.websiteUrl != 'http://') {
			var websiteTarget = 'target="external"';
			if (isPortalIntegration || window.location.href.indexOf('target=parent') > -1) {
				websiteTarget = 'target="_parent"';
			}
			websiteLink = '<br /><a '+websiteTarget+' href="'+trackpointData.websiteUrl+'" class="button4">'+(isPortalIntegration?labelTrackView:trackpointData.websiteUrlShort+'...')+'</a>';
		}
		var trackLink = '<br /><a'+(isNewTarget?' target="external"':'')+' href="'+linkUrl+'" class="button4">'+labelShowTrack+'</a>';
		if (isPortalIntegration && websiteLink != '') {
			trackLink = websiteLink;
			websiteLink = '';
		}
    	marker.bindPopup('<h3>'+trackpointData.filename+'</h3><p>'+title+'<br />'+trackLink+'<br /><a href="#" onclick="bounds = null; return showTrackOnMap(map, \''+trackpointData.fileId+'\', true, false);" class="button4">'+labelFadeInTrack+'</a>'+websiteLink+'<p>');
	}	

	marker.addEventListener('mouseover', function(e) {
	  	showTrackOnMap(map, trackpointData.fileId, false, false);
  	});

  	return marker;
  	
}

function createReadonlyWaypointMarker(waypoint) {

	// alert(DWRUtil.toDescriptiveString(waypoint, 2));
	
	var isClickable = (waypoint.desc && waypoint.desc != '') || (waypoint.url && waypoint.url != '') || (waypoint.imageUrl && waypoint.imageUrl != '') ? true : false;
	var latlng = new L.LatLng(parseFloat(waypoint.lat), parseFloat(waypoint.lon));
	var waypointText = getWaypointNameByType(waypoint.type);
	
	if (waypoint.ele && waypoint.ele != '') {
		waypointText += ' (' + labelTrackpointElevation + ': ' + waypoint.ele + ' m)'; 
	}
	
	var symbol = waypoint.sym;
	if (!symbol || symbol == '') {
		symbol = 'generic';
	}
	
	var _icon = null;
	if (waypoint.imageUrl && waypoint.imageUrl != '' && waypoint.image.length == 4) {
		_icon = createPhotoIcon(waypoint.imageUrl);
	}
	else {
		_icon = createNewWaypointIcon(symbol, waypoint.name);
	}
	
	var opts = {
		'icon': _icon,
		'title': waypointText + (isClickable?' ['+labelMore+'...]':'')
	};

	var marker = new L.Marker(latlng, opts);

	if (isClickable) {

		var websiteTarget = '';
		
		if (isMapOnly) {
			if (isPortalIntegration || window.location.href.indexOf('target=parent') > -1) {
				websiteTarget = 'target=\"_parent\"';
			}
			else {
				websiteTarget = 'target=\"_blank\"';
			}			
		}
		
		marker.bindPopup(
				'<h3 style=\"text-align: left;\"><img style=\"margin-right: 10px;\" src=\"images/waypointIcons/' + waypoint.sym + '.png\" /> '+waypoint.name+'</h3>'+
				'<p style=\"text-align: left;\"><em>'+waypointText+'</em></p>'+
				(waypoint.imageUrl && waypoint.imageUrl != '' ? '<p style=\"text-align: left;\"><img class="map_img" width="200" src="' + replaceAll(waypoint.imageUrl, 'mini', 'large') + '" alt="" /><br />&copy; <a '+websiteTarget+' href="'+(isPortalIntegration?mapUserOnlyAction:mapUserAction)+'">'+trackUserName+'</a></p>' : '')+
				(waypoint.url && waypoint.url != '' ? '<p style=\"text-align: left;\"><a class=\"button4\" target=\"_blank\" href=\"'+waypoint.url+'\">'+waypoint.url.substring(0, 30)+'</a></p>' : '')+
				(waypoint.desc && waypoint.desc != '' ? '<div class=\"infoWindowTab\"><p>'+changeCrLf(waypoint.desc)+'</p></div>' : '')
				, {'minWidth': 200});
	}

	map.addLayer(marker);
	
	return new Array(marker);

}

function initFlotrChart() {

	if (polyline) {
		
		var dist = 0;
		var thisdist = 0;

		var flotrArr = new Array();
		var ele = -99999;
		
		var tempArr;
		var chartDataArr = new Array();
		
		var minVal = 99999;
		var maxVal = -99999;
		
		var polylineVertex = polyline.getLatLngs();
		
		for (var i = 1, j = polylineVertex.length; i < j; i++) {
			
			var p1 = polylineVertex[i-1];
			var p2 = polylineVertex[i];
			
			thisdist = getDistanceMeter(p1.lat, p1.lng, p2.lat, p2.lng);
			
			if (isShortCutTrackFromGeoJson) {
				ele = polylineVertex[i].alt;
			}
			else {
				ele = getPointElevation(polylineVertex[i]);
			}

			if (ele > -99999) {
				
				tempArr = new Array();
				tempArr.push(parseInt(dist+thisdist));
				tempArr.push(ele);
				flotrArr.push(tempArr);
				if (false && isImperialSystem()) {
					ele = Math.round(ele * 3.2808);
					chartDataArr.push(ele);
					if (minVal >= ele) {
						minVal = ele;
					}
					if (maxVal <= ele) {
						maxVal = ele;
					}
				}
			}

			dist += thisdist;
			
		}

		if (getWindowHeight() > 0) {
			// http://solutoire.com/flotr/docs/quickstart/
			if ($('flotrContainer')) {
				var f = Flotr.draw(
					$('flotrContainer'),
					[
						{data: flotrArr, color: '#EE1B00'}
					], {
						lines: {show: true, lineWidth: 1},
						legend: {show: false},
						grid: {color: '#EFEFEF'},
						xaxis: {noTicks: 0},
						yaxis: {noTicks: 0}
					}
				);
			}

		}
		
		if (false && chartDataArr.length > 0 && isImperialSystem()) {
			var chartImage = $('chartImage');
			if (chartImage) {
				var chartImageUrl = 
					scheme + '://chart.googleapis.com/chart?'+
					'cht=lc&'+
					'chd=s:'+simpleEncodeChart(chartDataArr, maxVal, false)+'&'+
					'chs=500x200&'+
					'chco=FF0000,EE1B00&'+
					'chf=bg,s,FFFFFF|c,s,DEF5FF&'+
					'chm=B,DEF5FF,0,0,0';	

				chartImage.src = chartImageUrl;
				
			}
		}
			
	}

}

function getTrackDistance(ptsArr) {
	var trDist = 0;
	var p1, p2;
	for (var i=0; i < ptsArr.length; i++) {			
		if (i < ptsArr.length - 1) {
			if (ptsArr[i] && ptsArr[i+1]) {
				p1 = ptsArr[i];
				p2 = ptsArr[i+1];
				trDist += getDistanceMeter(p1.lat, p1.lng, p2.lat, p2.lng);
			}
		}
	}	
	return trDist;
}

function getDistancePolyline(poly) {
	var dist = 0;
	var p1;
	var p2;
	if (poly) {
		var polylineVertex = poly.getLatLngs();
		for (var i = 1, j = polylineVertex.length; i < j; i++) {		
			p1 = polylineVertex[i-1];
			p2 = polylineVertex[i];
			dist += getDistanceMeter(p1.lat, p1.lng, p2.lat, p2.lng);
		}	
	}
	return dist;
}

function getDistance(startPoint, endPoint) {
	var radiusLatStart = Math.PI * startPoint.lat/180;
	var radiusLatEnd = Math.PI * endPoint.lat/180;
	var theta = startPoint.lng-endPoint.lng;
	var radiusTheta = Math.PI * theta/180;
	var distance = Math.acos(Math.sin(radiusLatStart) * Math.sin(radiusLatEnd) + Math.cos(radiusLatStart) * Math.cos(radiusLatEnd) * Math.cos(radiusTheta));
	return (distance * 180/Math.PI) * 60 * 1.1515;
}

function getDistanceMeter(lat1, lon1, lat2, lon2) {
	var R = 6371; // km
	var dLat = (lat2-lat1)*Math.PI/180;
	var dLon = (lon2-lon1)*Math.PI/180;
	var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
	        Math.cos(lat1*Math.PI/180) * Math.cos(lat2*Math.PI/180) * 
	        Math.sin(dLon/2) * Math.sin(dLon/2); 
	var c = 2 * Math.asin(Math.sqrt(a)); 
	var d = R * c * 1000;
	return d;
}

function setTrackStatistics() {

	if (validateCreateTrack('statistics') && $('speed') && $('trackStatisticsPoints') && $('trackStatisticsTime')) {

		var speed = $('speed').value;
		if ($('calculatorForm')) {
			speed = document.calculatorForm.speed.value;
		}

		if (speed != null) {
			
			var trDistance = isMetric ? trackDistance : trackDistance * 0.621371;

			var secs = Math.round(trDistance / speed * 3.6);
			var hours = (secs - (secs % 3600))/3600;
			secs -= hours * 3600;
			var mins = (secs - (secs % 60))/60;
			secs -= mins * 60;

			var pointsCount = segmentList.length;
			if (polyline) {
				pointsCount = polyline.getLatLngs().length;
			}

			var waypointsCount = waypointsArray ? waypointsArray.length : 0;
			
			writeInnerHtml('trackStatisticsPoints', pointsCount + ' PT | ' + waypointsCount + ' WPT');
			
			if (isRelaunch && $('trackStatisticsTime')) {
				$('trackStatisticsTime').value = hours + 'h ' + mins + 'm ' + secs + 's';
			}
			else {
				writeInnerHtml('trackStatisticsTime', hours + 'h ' + mins + 'm ' + secs + 's');	
			}
			
		}
	}
	else if ($('trackStatisticsPoints') && $('trackStatisticsTime')) {
		writeInnerHtml('trackStatisticsPoints', '0 PT | 0 WPT');
		writeInnerHtml('trackStatisticsTime', '0h 0m 0s');
	}

}

function showMarkerByMeter(metres, chartMarker) {

	if (polyline) {

		_hideChartMarker(chartMarker);

		var ele = -99999;
		var dist = 0;
		var thisdist = 0;

		var lastEle = -99999;
		var diffEle = -99999;
		var incline = -99999;
		
		var polylineVertex = polyline.getLatLngs();
		
		for (var i = 1, j = polylineVertex.length; i < j; i++) {
			
			var p1 = polylineVertex[i-1];
			var p2 = polylineVertex[i];
			
			thisdist = getDistanceMeter(p1.lat, p1.lng, p2.lat, p2.lng);
			
			if (dist+thisdist >= metres) {

				var labelText = null;
				
				if (isShortCutTrackFromGeoJson) {
					ele = polylineVertex[i].alt;
				}
				else {
					ele = getPointElevation(polylineVertex[i]);
				}
				
				// lastEle = getPointElevation(polylineVertex[i-1]);
					
				if (ele > -99999) {

					/*
					if (lastEle > -99999) {
					
						diffEle = ele - lastEle;
						incline = parseInt((diffEle * 100) / thisdist);
						console.log('incline: ' + incline + ' %');
						
					}
					*/
					
					if (isImperialSystem()) {
						labelText = labelTrackpointElevation + ': ' + Math.round(ele * 3.2808399) + ' ft @ ' + (Math.round(metres / 1.609344 / 100) / 10) + ' mi';
					}
					else {
						labelText = labelTrackpointElevation + ': ' + ele + ' m @ ' + (Math.round(metres / 100) / 10) + ' km';
					}
					writeInnerHtml('resultMeter', labelText);
					if (isImperialSystem()) {
						labelText = labelTrackpointElevation + ': ' + Math.round(ele * 3.2808399) + ' ft @ ' + (Math.round(metres / 1.609344 / 100) / 10) + ' mi';
					}
					else {
						labelText = labelTrackpointElevation + ': ' + ele + ' m @ ' + (Math.round(metres / 100) / 10) + ' km';
					}
				}
	
				var opts = {
					'icon': createMilestoneIcon(labelText),
					'title': labelText
				};

				tempMarker = new L.Marker(polylineVertex[i], opts);
				map.addLayer(tempMarker);				
				
				break;
				
			}

			dist += thisdist;
			
		}
	
	}

}

function getPointElevation(p) {

	if (shortCutTrack) {
		
		for (var i = 0; i < shortCutTrack.length; i++) {

			if (shortCutTrack[i].pt.lat == p.lat && shortCutTrack[i].pt.lng == p.lng) {
				var ele = parseInt(shortCutTrack[i].ele);
				if (ele && ele != NaN) {
					return ele;
				}
				break;
			}
			
		}
		
	}
	
	return -99999;
	
}

function _hideChartMarker(cm) {

	var chartMarkerTemp = $(cm);
	if (chartMarkerTemp && chartMarkerTemp.style) {
		chartMarkerTemp.style.display = 'none';
	}

	if (tempMarker) {
		map.removeLayer(tempMarker);
		writeInnerHtml('resultMeter', '');
	}

}

function removeAllMarkers(arr) {
	if (arr != null && arr.length > 0) {
		for (var i = 0; i < arr.length; i++) {
			if (map.hasLayer(arr[i])) {
				map.removeLayer(arr[i]);
			}
		}
	}
	arr = new Array();
}

function addPhotosToMap(photo, countPhoto) {
	if (photo && photo.lat && photo.lon && photo.lat != '' && photo.lon != '') {
		var picasaMarker = createPhotoMarker(new L.LatLng(parseFloat(photo.lat), parseFloat(photo.lon)), createPhotoIcon(photo.thumbUrl), photo, countPhoto);
		picasaArray.push(picasaMarker);
		map.addLayer(picasaMarker);
		if (!isPicasaToggle) {
			if (map.hasLayer(picasaMarker)) {
				map.removeLayer(picasaMarker);
			}
			// picasaMarker.hide();
		}
	}
}

function createPhotoMarker(photoPoint, photoIcon, photo, countPhoto) {
	
	var opts = new Object();
		opts.icon = photoIcon;
		opts.title = photo.description;
		
  	var marker = new L.Marker(photoPoint, opts);
  	var imgWidth = isMapOnly && !isFullScreenLeave ? 195 : 255;
	marker.bindPopup('<div style="width: ' + imgWidth + 'px;"><img src="images/picasaweblogo.gif" alt="" /><br /><img class="map_img" width="' + imgWidth + '" src="'+photo.largeUrl+'" alt="" /><br />'+(photo.description && photo.description != '' ? photo.description : '')+countPhoto+'<br /></div>');
	
	return marker;
  
}

function showHideLabel(index, isShow) {
	if (markersArray && markersArray.length > 0) {
		var viewTracksCheckbox = $('viewTracksCheckbox_'+index);
		var m = markersArray[index];
		var fId = '';
		if (tracks && tracks.length == markersArray.length) {
			fId = tracks[index].fileId;
		}
		if (isShow) {
			// marker.show();
			if (!map.hasLayer(m)) {
				map.addLayer(m);
			}
			if (viewTracksCheckbox && !viewTracksCheckbox.checked) {
				toggleViewTracks(fId, true);
			}
		}
		else {
			// marker.hide();
			if (map.hasLayer(m)) {
				map.removeLayer(m);
			}
			if (viewTracksCheckbox && !viewTracksCheckbox.checked) {
				toggleViewTracks(fId, false);
			}			
		}
	}
}

function toggleViewTracks(fId, isChecked) {
	
	geoXml = null;
	geoXmlBorder = null;
	
	if (geoXmlArray && geoXmlArray.length > 0) {
		for (var i = 0; i < geoXmlArray.length; i++) {
			if (fId == geoXmlArray[i].fileId) {
				geoXml = geoXmlArray[i];
				break;
			}
		}
	}

	if (geoXmlBorderArray && geoXmlBorderArray.length > 0) {
		for (var i = 0; i < geoXmlBorderArray.length; i++) {
			if (fId == geoXmlBorderArray[i].fileId) {
				geoXmlBorder = geoXmlBorderArray[i];
				break;
			}
		}
	}
	
	if (geoXml != null) {
		if (isChecked) {
			if (!map.hasLayer(geoXml)) {
				map.addLayer(geoXml);
			}
		}
		else {
			if (map.hasLayer(geoXml)) {
				map.removeLayer(geoXml);
			}			
		}
	}
	
	if (geoXmlBorder != null) {
		if (isChecked) {
			if (!map.hasLayer(geoXmlBorder)) {
				map.addLayer(geoXmlBorder);
			}
		}
		else {
			if (map.hasLayer(geoXmlBorder)) {
				map.removeLayer(geoXmlBorder);
			}			
		}
	}
	
}

function searchLocation() {

	var isSearchViewportSearch = $('map') && $('bbox') && $('searchViewport') && $('searchViewport').checked;

	if (isSearchViewportSearch) {
		
		bounds = map.getBounds();

		var southWest = bounds.getSouthWest();
		var northEast = bounds.getNorthEast();
		
		var southEastLon = southWest.lng;
		var southEastLat = southWest.lat;
		var northWestLon = northEast.lng;
		var northWestLat = northEast.lat;

		$('bbox').value = southEastLon + ',' + southEastLat + ',' + northWestLon + ',' + northWestLat;
		
	}
	
	$('tracksForm').submit();

}

function refreshMapButton() {
	
	isPerformSearch = true;
	
	if (map) {
		currentZoomLevel = map.getZoom();
		// currentMapType = getMapTypeKey(map.getCurrentMapType());
		tempPoint = map.getCenter();
		/*
		if ($('wikipediaToggle') && wikipediaLayer) {
			map.removeOverlay(wikipediaLayer);
		}
		if ($('panoramioToggle') && panoramioLayer) {
			map.removeOverlay(panoramioLayer);
		}
		if ($('youTubeToggle') && youTubeLayer) {
			map.removeOverlay(youTubeLayer);
		}		
		map.clearOverlays();
		if (geoXml) {
			map.addLayer(geoXml);
		}
		*/
	}
	markerCounter = 0;
	// window.location.hash = '#';
	if ($('lat')) {
		$('lat').value = '';
	}
	if ($('lon')) {
		$('lon').value = '';
	}
	prepareShowCountry();
}

function refreshMap() {
	
	if (!isPerformSearch) {

		if (map) {
			currentZoomLevel = map.getZoom();
			// currentMapType = getMapTypeKey(map.getCurrentMapType());
			tempPoint = map.getCenter();
			/*
			if ($('wikipediaToggle') && wikipediaLayer) {
				map.removeOverlay(wikipediaLayer);
			}
			if ($('panoramioToggle') && panoramioLayer) {
				map.removeOverlay(panoramioLayer);
			}
			if ($('youTubeToggle') && youTubeLayer) {
				map.removeOverlay(youTubeLayer);
			}		
			map.clearOverlays();
			if (geoXml) {
				map.addLayer(geoXml);
			}
			*/
		}
		markerCounter = 0;
		// window.location.hash = '#';
		if ($('lat')) {
			$('lat').value = '';
		}
		if ($('lon')) {
			$('lon').value = '';
		}
		prepareShowCountry();
		
	}
	
	isPerformSearch = false;
	
}

function getMapTypeKey(mapType) {
	if (mapType) {
		// TODO implement	
		return mapType;
	}
	return '';
}

function showCountry(country, city) {

	var search = country;

	if (selectedCountry) {
		search = selectedCountry;
	}

	var zoom = initialZoomLevel;
	if (currentZoomLevel != -1) {
		zoom = currentZoomLevel;
	}

	var mapType = initialMapType;
	if (currentMapType) {
		mapType = currentMapType;
	}

	if (!tempPoint && $('lat') && $('lon') && $('lat').value && $('lon').value) {
		tempPoint = new L.LatLng(parseFloat($('lat').value), parseFloat($('lon').value));
	}
	else {
		zoom = null;
	}
	
	if (city == '' || city.length < 1) {
		city = '';
	}
	else {
		if (currentZoomLevel == -1) {
			zoom = initialZoomLevel;
		}
		search = city + ',' + selectedCountry;
		if (!tempPoint) {
			isPerformSearch = true;
		}
	}
	
	var hash = trim(window.location.hash);
	if (hash != null && hash.length > 0 && (hash.indexOf('|') > -1 || hash.indexOf('_') > -1)) {
		hash = hash.replace('#', '');		
		if (!hashSeperator) {		
			hashSeperator = '_';
			if (hash.indexOf('|') > -1) {
				hashSeperator = '|';
			}
		}		
		var hashArr = hash.split(hashSeperator);
		zoom = parseInt(hashArr[0]);
		$('lat').value = hashArr[1];
		$('lon').value = hashArr[2];
		currentMapType = hashArr[3];
		hashPoint = new L.LatLng(parseFloat($('lat').value), parseFloat($('lon').value));
		hashZoom = zoom;
		hashMapType = currentMapType;
	}
	else {
		hashPoint = null;
		hashZoom = null;
		hashMapType = null;		
	}

	if (country == 'US') {
		country = 'United States';
	}

	if (isPerformSearch) {

		var callback1 = function(data) {
			
			var point = null;
			
			if (data != null && typeof data == 'object') {
				point = new L.LatLng(parseFloat(data.lat), parseFloat(data.lon));
			}

			tempPoint = point;
			
			if (point) {
				if (country == 'United States') {
					country = 'US';
				}
				$('lat').value = point.lat;
				$('lon').value = point.lng;
				if (map) {
					map.setView(point, initialZoomLevel);
				}
				loadMarker(zoom, point, country, city, mapType, true);
			}
			else {

				var callback2 = function(data) {
					
					var point = null;
					
					if (data != null && typeof data == 'object') {
						point = new L.LatLng(parseFloat(data.lat), parseFloat(data.lon));
					}

					if (point) {
						if (country == 'United States') {
							country = 'US';
						}
						$('lat').value = point.lat;
						$('lon').value = point.lng;
						if (map) {
							map.setView(point, initialZoomLevel);
						}					
						loadMarker(zoom, point, country, city, mapType, true);
					}
					
				}
				
				if (search != '') {
					Gpsies.getGeocoderLatLng(search, callback2);
				}
				
			}			
			
		}
		
		if (search != '') {
			Gpsies.getGeocoderLatLng(search, callback1);
		}
		
	}
	else {
		loadMarker(zoom, null, country, city, mapType, true);
	}
	
}

function loadMarker(zoomLevel, point, country, city, mapType, isOverviewMode) {

	if (hashMapType && hashMapType != '') {
		mapType = hashMapType;
	}

	var zoom = zoomLevel;
	if (isPerformSearch) {
		zoom = zoomLevel;
	}
	else if (hashZoom && hashZoom != NaN) {
		zoom = hashZoom;
	}

	var centerPoint = point;
	if (isPerformSearch) {
		centerPoint = point;
	}
	else if (hashPoint) {
		centerPoint = hashPoint;
	}
	else if ($('lat') && $('lon') && $('lat').value != '' && $('lon').value != '' && $('lat').value != '0.0' && $('lon').value != '0.0') {
		centerPoint = new L.LatLng(parseFloat($('lat').value), parseFloat($('lon').value));
	}	

	if (country == 'United States') {
		country = 'US';
	}
	
	// new map instance
	if (!map) {
		
		if (centerPoint && zoom) {
			map = createMap('map', centerPoint, zoom, mapType, false);
		}
		else {
			map = createMap('map', null, null, mapType, false);
			var countryBounds = getCountryBounds();
			map.fitBounds(countryBounds);
		}
		
		/*
		var countryBounds = getCountryBounds();

		if (countryBounds && (!city || city == '')) {
			zoomLevel = map.getBoundsZoomLevel(countryBounds);
			point = countryBounds.getCenter();
		}
		
		if (zoomLevel && zoomLevel <= 2) {
			zoomLevel = 6;
		}
		
		if (map.getZoom() == 0) {
			map.setZoom(zoomLevel);
		}
		*/
		
		addMapControl(map);

		map.addEventListener('moveend', function(e) {
			// console.log('moveend: ' + isRefreshMarkerInfoTab);
			// if (!isRefreshMarkerInfoTab) {
			markerTimeout = window.setTimeout(refreshMap, 100);
			// }
			isRefreshMarkerInfoTab = false;
		});
		
		clusterer = new Clusterer(map);
		clusterer.SetMaxVisibleMarkers(95);
		clusterer.SetMinMarkersPerCluster(1);

	}
	
	resetClusters();

	var markers = function(data) {

		if (data != null && typeof data == 'object') {

			var marker;
			var markerFound = false;
			var markerPoint;

			markerCounter = data.length;

			/*
			if (markerCounter < 100) {
				clusterer.SetMaxVisibleMarkers(25);
			}
			*/

			// store bounds
			var rectBounds = map.getBounds();

			var northEast = rectBounds.getNorthEast();
			var southWest = rectBounds.getSouthWest();

			var resultList;
			var countTracksOnMap = $('countTracksOnMap');
			
			if ($('resultListContainer')) {
				if (markerCounter > 0 && markerCounter < 100) {
					$('resultListContainer').style.display = '';
				}
				else {
					$('resultListContainer').style.display = 'none';
				}	
				resultList = $('resultList');
				deleteAllChildNodes($('resultList'));
				deleteAllChildNodes($('countTracksOnMap'));
			}

			var ulContainer = Builder.node('ul');
			var liContainer;
			var linkContainer;
			var fileId;
			var filename;
			var addressShort;
			var lTitle;
			
			var usedIds = new HashMap();

			for (var i = 0; i < markerCounter; i++) {
				
				fileId = data[i].fileId;
				filename = data[i].filename;
				addressShort = defaultString(data[i].addressShort);
				
				lTitle = addressShort + (addressShort.length > 0 ? '| ' : '' ) + (data[i].trackLength == 0?'1':Math.round(getTrackDistanceUnitSystem(data[i].trackLength))) + (isImperialSystem() ? ' miles' : ' km')+' ('+(data[i].property == 1?roundTrip:oneWayTrip)+'): ' + filename;
				
				marker = new L.Marker(new L.LatLng(parseFloat(data[i].startpointLat), parseFloat(data[i].startpointLon)), {icon: createIcon(data[i].iconName, null, data[i].iconType), title: lTitle});

				marker.fileId = fileId;
				marker.index = i;
				
				marker.addEventListener('mouseover', function(e) {
					// highlightCurrentMarker(point);
					showTrackOnMap(map, e.target.fileId , false, false);
			  	});

				marker.addEventListener('click', function(e) {
					tempMarker = e.target;
					if (isGoogleEarthIntegration) {
						window.location.href = downloadAction + '?fileId='+e.target.fileId+'&filetype=kml';
					}
					else if (isShowMapOnlyDirecly) {
						window.location.href = mapOnlyAction + e.target.fileId + '&isShowMapOnlyDirecly=true';
					}
					else {
						window.location.href = 'javascript:refreshMarkerInfoTab('+e.target.index+', \''+e.target.fileId+'\', '+isOverviewMode+');';
					}
			  	});
				
				/*
				marker = createMarker(new L.LatLng(parseFloat(data[i].startpointLat), parseFloat(data[i].startpointLon)),
					null,
					createIcon(data[i].iconName, null, data[i].iconType),
					title,
					data[i].index,
					clickLink,
					fileId);
				 */
				
				if (marker != null) {
				
					if (!markerFound) {
						markerPoint = marker.getLatLng;
						if ((markerPoint.lat < northEast.lat && markerPoint.lng < northEast.lng && markerPoint.lat > southWest.lat && markerPoint.lng > southWest.lng)) {
							markerFound = true;
						}
					}

					if (markerCounter < 100) {

						if (!usedIds.containsKey(fileId)) {
							linkContainer = Builder.node('a', {href: 'javascript:void(0)', style: 'white-space: nowrap;', title: 'Click me!'});				
							linkContainer.appendChild(document.createTextNode(lTitle));
							linkContainer.marker = marker;

							L.DomEvent.addListener(linkContainer, 'click', function(event) {
								this.marker.fireEvent('click');
							});
							
							liContainer = Builder.node('li');
							liContainer.appendChild(linkContainer);				
							ulContainer.appendChild(liContainer);
							
						}
						
						usedIds.put(fileId, marker);

					}
					
					clusterer.AddMarker(marker, filename);
					
				}

			}

			if (resultList && markerCounter > 0 && markerCounter < 100) {
				resultList.appendChild(ulContainer);
				if (countTracksOnMap) {
					countTracksOnMap.appendChild(document.createTextNode(': ' + markerCounter));
				}
			}
			
			if (isOverviewMode) {
				initCounter();
			}

			if ($('panoramioToggle')) {
				showPanoramio();
			}
			if ($('wikipediaToggle')) {
				showWikipedia();
			}
			if ($('qypeToggle')) {
				showQype();
			}			
			if ($('youtubeToggle')) {
				// showYouTube();
			}
			
			if (!isExternalContentloaded) {
				if ($('facebookLikebox')) {
					if ($('facebookLikebox').innerHTML == '' || $('facebookLikebox').innerHTML.length < 50) {
						loadFacebookLikebox();
					}
				}				
				isExternalContentloaded = true;
			}
			
		}

    }
	
	var rectBounds = map.getBounds();

	var northEast = rectBounds.getNorthEast();
	var southWest = rectBounds.getSouthWest();

	var northWest = new L.LatLng(northEast.lat, southWest.lng);
	var southEast = new L.LatLng(southWest.lat, northEast.lng);
	
	var serializeTracksForm = null;
	var serializeGroupBySelections = null;

	if ($('tracksForm')) {
		serializeTracksForm = serializeValues($('tracksForm').trackTypes);
	}

	if (document.getElementsByName('groupBySelections')) {
		serializeGroupBySelections = serializeValues(document.getElementsByName('groupBySelections'));
	}

	var mapLat = null;
	var mapLon = null;
	if (centerPoint) {
		mapLat = centerPoint.lat;
		mapLon = centerPoint.lng;
	}

	if (map) {
		// deactivated 02.4.2016, I don't remember what it is for ;-)
		if (false && !isUseMarkerHomepage && map.getZoom() <= initialZoomLevel) {
			if (clientName != 'wingsforlife') {
				addRandomMarker(map, clusterer, map.getZoom());
			}
			isUseMarkerHomepage = true;
		}
		else if (map.getZoom() <= 8 && clientName != 'wingsforlife') {
			addRandomMarker(map, clusterer, map.getZoom());
		}
		else {
			Gpsies.findMarkers(country, city, mapLat, mapLon, northWest.toString(), southEast.toString(), serializeTracksForm, serializeGroupBySelections, isOverviewMode, markers);
		}
		
	}
	
	updateAfterMotion(map);

}

function initCounter() {
	if (currentGPSiesTrackCounterControl) {
		// map.removeControl(currentGPSiesTrackCounterControl);
	}
	if (markerCounter > 0 && markerCounter < 100) {
		// currentGPSiesTrackCounterControl = new GPSiesTrackCounterControl();
		// currentGPSiesSmallMapControl = new currentGPSiesSmallMapControl();
		// map.addControl(currentGPSiesTrackCounterControl);
		// writeInnerHtml('markerCounterId', markerCounter + ' ' + tracksSelected);
	}
}

function addRandomMarker(map, clusterer, count) {
	if (map && clusterer) {
		var bounds = map.getBounds();
		var southWest = bounds.getSouthWest();
		var northEast = bounds.getNorthEast();
		var lngSpan = northEast.lng - southWest.lng;
		var latSpan = northEast.lat - southWest.lat;
		var point;
		var marker;
		for (var i = 0; i < count; i++) {
			point = new L.LatLng(southWest.lat + latSpan * Math.random(), southWest.lng + lngSpan * Math.random());
			marker = new L.Marker(point, {icon: createMarkerIcon(), title: textGroup});
			marker.on('click', function(e){
				map.setView(e.target._latlng, map.getZoom() + 1);
			});
			clusterer.AddMarker(marker, null);
		}
		if (!isExternalContentloaded) {
			if ($('facebookLikebox')) {
				if ($('facebookLikebox').innerHTML == '' || $('facebookLikebox').innerHTML.length < 50) {
					loadFacebookLikebox();
				}
			}				
			isExternalContentloaded = true;
		}
	}
}

function updateAfterMotion(thisMap, mapTypeLayer) {
	
	if (thisMap) {
		if (addHashUrl && thisMap.getCenter()) {
			if (!hashSeperator) {
				hashSeperator = '_';
			}
			if ((!mapTypeLayer || mapTypeLayer == '') && $('mapTypeLayer')) {
				mapTypeLayer = $('mapTypeLayer').name;
			}
			
			var _lat = thisMap.getCenter().lat;
			var _lng = thisMap.getCenter().lng;
			
			if (_lng <= -180) {
				_lng = _lng + 180;
				thisMap.setView(new L.LatLng(_lat, _lng), thisMap.getZoom());
			}
			else if (_lng >= 180) {
				_lng = _lng - 180;
				thisMap.setView(new L.LatLng(_lat, _lng), thisMap.getZoom());
			}
			
			window.location.hash = thisMap.getZoom()+hashSeperator+_lat+hashSeperator+_lng+hashSeperator+getMapTypeKey(mapTypeLayer);
			
		}
		showPanoramio();
		showWikipedia();
		showQype();
		showWeather();
		// showYouTube();
	}
}

function resetClusters() {
	
	// reset clusterer
	if (clusterer) {

		if (clusterer.markers && clusterer.markers.length > 0) {
			for (i = 0, j = clusterer.markers.length; i<j; i++) {
				if (clusterer.markers[i]) {
					if (!tempMarker) {
						map.removeLayer(clusterer.markers[i]);
					}
					else if (tempMarker.getLatLng() == clusterer.markers[i].getLatLng()) {
						// marker should be open and not removed
						// console.log(tempMarker.getLatLng() + ' ' + clusterer.markers[i].getLatLng())
					}
					else {
						map.removeLayer(clusterer.markers[i]);
					}
				}
			}
		}
		if (clusterer.clusters && clusterer.clusters.length > 0) {
			for (i = 0, j = clusterer.clusters.length; i<j; i++) {
				if (clusterer.clusters[i]) {
					map.removeLayer(clusterer.clusters[i].marker);					
				}
			}
		}		
		clusterer.markers = [];
	    clusterer.clusters = [];
	    clusterer.timeout = null;
	    if (map) {
		    clusterer.currentZoomLevel = map.getZoom();
	    }

	}
}

function showAddress() {

	dblclickZoom = false;

	var address = $('address').value;
	var city = $('city').value;
	var country = $('country').value;

	if (country == 'US') {
		country = 'United States';
	}

	var search = '';

	if (address.length > 0) {
		search += address + ',';
	}
	if (city.length > 0) {
		search += city + ',';
	}
	
	if (country && country != '') {
		search += country;	
	}

	var callback = function(data) {
		
		var point = null;
		
		if (data != null && typeof data == 'object') {
			point = new L.LatLng(parseFloat(data.lat), parseFloat(data.lon));
		}
		
		if (!point) {
			writeInnerHtml('searchResult', 'Adresse nicht gefunden.');
		}
		else {
			writeInnerHtml('searchResult', '');
			if (country == 'United States') {
				country = 'US';
			}
			loadPoint(initialZoomLevel, point, initialMapType);
		}
		
	}
	
	if (search != '') {
		Gpsies.getGeocoderLatLng(search, callback);	
	}
	
	return false;

}

function loadPoint(zoomLevel, point, mapType) {

	if (!map) {
		map = createMap('map', point, zoomLevel, mapType, false);
		addMapControl(map);
	}
	
	readCoordinate(getDownloadUrl('gpsiesXml=coordinate&coordinate=' + point.lat + ',' + point.lng), point);

	map.addEventListener('click', function(e) {
		
		var point = e.latlng;
		
		if (point) {
			
			// just for showGeonames() testing
			tempPoint = point;
			
			if (tempMarker) {
				map.removeLayer(tempMarker);
			}
			
			readCoordinate(getDownloadUrl('gpsiesXml=coordinate&coordinate=' + point.lat + ',' + point.lng), point);

			if (false && console) {
				
				var geoNamesAllCountry = function(data) {
					if (data != null && typeof data == 'object') {
						console.log(data.name + ', ' + data.countryCode);
					}
				}
				Gpsies.getBestCountryByGeoCoordinate(point.lat, point.lng, geoNamesAllCountry);

				var googleGeocode = function(data) {
					if (data != null) {
						console.log(data);
					}
				}					
				Gpsies.getGoogleGeocode(point.lat, point.lng, googleGeocode);

				var nominatimGeocode = function(data) {
					if (data != null) {
						console.log(data);
					}
				}					
				Gpsies.getNominatimGeocode(point.lat, point.lng, nominatimGeocode);
				
			}
			
		}
    });

}

function readCoordinate(downloadUrl, point) {

	if (!isXmlLoad) {
		new Ajax.Request(downloadUrl, {
			method: 'get',
				onSuccess: function(transport) {
					xml = transport.responseXML;
					isXmlLoad = true;
					readCoordinate(downloadUrl, point);				
				}
			}
		);	
	}
	
	if (xml) {

		var asJson = XMLObjectifier.xmlToJSON(xml);

		if (asJson) {

			if (asJson.ll && asJson.dms && asJson.dm) {
				
				var ll = asJson.ll[0];
				var dms = asJson.dms[0];
				var dm = asJson.dm[0];

				if (ll && dms && dm) {

					var info = '<div style="width: 250px;">';
					info += '<p>';
					info += dms.lat+'<br />';
					info += dms.lon+'<br /><br />';
					info += dm.lat+'<br />';
					info += dm.lon;
					info += '</p>';

					$('lat').value = ll.lat;
					$('lon').value = ll.lon;

					point = new L.LatLng(parseFloat($('lat').value), parseFloat($('lon').value));

					info = '<div style="height: 320px;"><h3 id="cityBubble">Address</h3><p id="metaBubble">Address not found.<br /><br /><br /></p><p id="eleBubble">0 Meter</p>' + info + '<p><a href="http://www.geocaching.com/seek/nearest.aspx?origin_lat='+$('lat').value+'&origin_long='+$('lon').value+'&dist=50" target="external">Geocaches ...</a></p><br /></div>';

					tempMarker = new L.Marker(point, {icon: createMilestoneIcon()});				
					
					map.addLayer(tempMarker);
					tempMarker.bindPopup(info).openPopup();
					
					updateGeoNames(point);

				}				
			}
		}
		
		isXmlLoad = false;
		xml = null;
		
	}

}

function updateGeoNames(point) {

	if (map) {

		if (!point) {
			point = map.getCenter();
		}

		var lat = point.lat;
		var lon = point.lng;

		var geoNamesList = function(data) {
			if (data != null) {
				var dataObj = eval('(' + data + ')');
				var postalCodes = dataObj.postalCodes;
				if (postalCodes && postalCodes.length > 0) {
					if ($('city') && $('country') && $('name')) {
						$('city').value = postalCodes[0].postalCode + ' ' + postalCodes[0].placeName;
						$('country').value = postalCodes[0].countryCode;
						$('name').value = postalCodes[0].placeName;
					}
					if ($('cityBubble') && $('metaBubble')) {
						writeInnerHtml('cityBubble', postalCodes[0].postalCode + ' ' + postalCodes[0].placeName);
						var metaText = '';
						var countryText = $('country').options[$('country').options.selectedIndex].text;
						if (postalCodes[0].adminName1 && postalCodes[0].adminName1 != '') {
							metaText += postalCodes[0].adminName1 + '<br />';
						}
						if (postalCodes[0].adminName2 && postalCodes[0].adminName2 != '') {
							metaText += postalCodes[0].adminName2 + '<br />';
						}
						if (postalCodes[0].adminName3 && postalCodes[0].adminName3 != '') {
							metaText += postalCodes[0].adminName3 + '<br />';
						}
						metaText += '<strong>' + countryText + '</strong>';

						writeInnerHtml('metaBubble', metaText);

					}
				}
				else {
					$('city').value = '';
					$('country').value = '';
					$('name').value = '';
				}
				updateDescription();
				updateElevation(point);
				updateReverseGeo(point);
			}
		}

		Gpsies.getGeoNames(lat, lon, geoNamesList);

	}

}

function updateElevation(point) {

	if (map) {

		if (!point) {
			point = map.getCenter();
		}

		var lat = point.lat;
		var lon = point.lng;

		var elevation = function(data) {
			if (data != null) {
				var dataObj = eval('(' + data + ')');
				var srtm3 = parseInt(dataObj);
				if (srtm3 && srtm3 > -30000 && srtm3 < 30000) {
					if ($('ele')) {
						$('ele').value = srtm3;
					}
					if ($('eleBubble')) {
						new Effect.Highlight($('eleBubble').parentNode, {startcolor: '#ffff99', endcolor: '#fffffff'});
						var heightsValue = srtm3 + ' m';
						if (!isMetricSystem()) {
							heightsValue = Math.round(srtm3 * 3.2808399) + ' ft';
						}
						writeInnerHtml('eleBubble', labelTrackpointElevation + ': ' + heightsValue);
					}
				}
			}
		}

		Gpsies.getElevation(lat, lon, elevation);

	}

}

function updateReverseGeo(point) {

	if (map) {

		if (!point) {
			point = map.getCenter();
		}

		var callback = function(data) {

			if (data != null) {
				var myHtml = data;
				if ($('reverseGeoBubble')) {
					new Effect.Highlight($('reverseGeoBubble').parentNode, {startcolor: '#ffff99', endcolor: '#fffffff'});
					writeInnerHtml('reverseGeoBubble', myHtml);
				}
				else if ($('metaBubble')) {
					new Effect.Highlight($('metaBubble').parentNode, {startcolor: '#ffff99', endcolor: '#fffffff'});
					writeInnerHtml('metaBubble', myHtml);
				}
			}
			
		}
		
		Gpsies.getGeocoderLocations(point.lat, point.lng, callback);

	}

}

function showCalibration() {

	$('content-wrapper').style.visibility = 'hidden';
	$('content-wrapper').style.width = '1%';

	$('map-wrapper').style.width = '98%';

	$('lat').value = '';
	$('lon').value = '';

	var lastPoint = map.getCenter();
	var lastZoom = map.getZoom();
	
	// map.clearOverlays();
	map.invalidateSize();
	map.setView(lastPoint, lastZoom, true);
	
	var polyPoints = Array();

	var mapZoom = map.getZoom();
	var clickedPixel = map.project(map.getCenter(), mapZoom);

	var rectBounds = map.getBounds();

	var northEast = rectBounds.getNorthEast();
	var southWest = rectBounds.getSouthWest();

	var lngDelta = (northEast.lng - southWest.lng) / 8;
	var latDelta = (northEast.lat - southWest.lat) / 8;

	northEast = new L.LatLng(northEast.lat - latDelta, northEast.lng - lngDelta);
	southWest = new L.LatLng(southWest.lat + latDelta, southWest.lng + lngDelta);

	var northWest = new L.LatLng(northEast.lat, southWest.lng);
	var southEast = new L.LatLng(southWest.lat, northEast.lng);

	polyPoints.push(northEast);
	polyPoints.push(northWest);
	polyPoints.push(southWest);
	polyPoints.push(southEast);
	polyPoints.push(northEast);

	var lngDeltaMarker = (northEast.lng - southWest.lng) / 24;
	var latDeltaMarker = (northEast.lat - southWest.lat) / 24;

	var northEastMarker = new L.LatLng(northEast.lat - latDeltaMarker, northEast.lng - lngDeltaMarker);
	var southWestMarker = new L.LatLng(southWest.lat + latDeltaMarker, southWest.lng + lngDeltaMarker);
	var northWestMarker = new L.LatLng(northEastMarker.lat, southWestMarker.lng);
	var southEastMarker = new L.LatLng(southWestMarker.lat, northEastMarker.lng);

	var color = '#000000';
	var icon = createCrossIcon('crossBlack');
	/*
	if (map.getCurrentMapType() == G_NORMAL_MAP) {
		color = '#000000';
		icon = createCrossIcon('crossBlack');
	}
	*/

	map.addLayer(new L.Marker(northEastMarker, icon));
	map.addLayer(new L.Marker(southWestMarker, icon));
	map.addLayer(new L.Marker(northWestMarker, icon));
	map.addLayer(new L.Marker(southEastMarker, icon));

	var opts = {
		color: color,
		weight: 3,
		opacity: 1
	}
	
	var polygon = new L.Polygon(polyPoints, opts);
	map.addLayer(polygon);

	var htmlOut =
		'<table border=\'0\'>'+
		'<tr><td><a class=\'button3\' href=\'javascript:void(downloadWaypoints())\'>Download GPX</a></td><td class=\'tableCell\'><strong>Latitude</strong></td><td class=\'tableCell\'><strong>Longitude</strong></td></tr>'+
		'<tr><td class=\'tableCell\'><strong>North West</strong></td><td><input onclick=\'this.select();\' id=\'northWestMarkerLat\' type=\'text\' value=\'' + northWestMarker.lat + '\' /></td><td class=\'tableCell\'><input onclick=\'this.select();\' id=\'northWestMarkerLon\' type=\'text\' value=\'' + northWestMarker.lng + '\' /></td></tr>'+
		'<tr class=\'tableRow\'><td class=\'tableCell\'><strong>North East</strong></td><td><input onclick=\'this.select();\' id=\'northEastMarkerLat\' type=\'text\' value=\'' + northEastMarker.lat + '\' /></td><td class=\'tableCell\'><input onclick=\'this.select();\' id=\'northEastMarkerLon\' type=\'text\' value=\'' + northEastMarker.lng + '\' /></td></tr>'+
		'<tr><td class=\'tableCell\'><strong>South West</strong></td><td><input onclick=\'this.select();\' id=\'southWestMarkerLat\' type=\'text\' value=\'' + southWestMarker.lat + '\' /></td><td class=\'tableCell\'><input onclick=\'this.select();\' id=\'southWestMarkerLon\' type=\'text\' value=\'' + southWestMarker.lng + '\' /></td></tr>'+
		'<tr class=\'tableRow\'><td class=\'tableCell\'><strong>South East</strong></td><td><input onclick=\'this.select();\' id=\'southEastMarkerLat\' type=\'text\' value=\'' + southEastMarker.lat + '\' /></td><td class=\'tableCell\'><input onclick=\'this.select();\' id=\'southEastMarkerLon\' type=\'text\' value=\'' + southEastMarker.lng + '\' /></td></tr>'+
		'</table>'

	writeInnerHtml('calibrate', htmlOut);

}

function toggleFullscreen() {
	if (isRelaunch) {
		if (map) {
			if (isFullscreen) {
				jQuery('#body-wrapper').show();
				jQuery('.mini-navbar').show();
				jQuery('.sticky-wrapper').show();
				jQuery('#banner').show();
				jQuery('footer').show();
				jQuery('#fullScreenEl').html(fullScreenEnter);
				jQuery('#map').appendTo('#mapContainer');
				resizeMap(true);		
			}
			else {
				jQuery('#body-wrapper').hide();
				jQuery('.mini-navbar').hide();
				jQuery('.sticky-wrapper').hide();
				jQuery('#banner').hide();
				jQuery('footer').hide();
				jQuery('#map').prependTo('body');
				jQuery('#fullScreenEl').html(fullScreenLeave);
				resizeMap(true);
			}
			map.invalidateSize();
			if (polyline) {
				var bounds = polyline.getBounds();
				if (bounds) {
					map.fitBounds(bounds);
				}
			}
		}		
	}
	else {
		if (map) {
			if (isFullscreen) {
				$('body-wrapper').style.display = 'block';
				if ($('headerTop')) {
					$('headerTop').style.display = 'block';
				}
				if ($('headerSub')) {
					$('headerSub').style.display = 'block';
				}
				if ($('banner')) {
					$('banner').style.display = 'block';
				}
				if ($('banner_wall')) {
					$('banner_wall').style.display = 'block';
				}
				if ($('skyscraper')) {
					$('skyscraper').style.display = 'block';
				}
				if ($('skyscraper_wall')) {
					$('skyscraper_wall').style.display = 'block';
				}
				if ($('footerBottom')) {
					$('footerBottom').style.display = 'block';
				}
				$('mapWrapper').appendChild($('map'));
				if ($('fade')) {
					$('mainBox').appendChild($('fade'));
				}
				if ($('modal')) {
					$('mainBox').appendChild($('modal'));
				}
				writeInnerHtml($('fullScreenEl'), fullScreenEnter);
				resizeMap(true);		
			}
			else {
				$('body-wrapper').style.display = 'none';
				if ($('headerTop')) {
					$('headerTop').style.display = 'none';
				}
				if ($('headerSub')) {
					$('headerSub').style.display = 'none';
				}
				if ($('banner')) {
					$('banner').style.display = 'none';
				}
				if ($('banner_wall')) {
					$('banner_wall').style.display = 'none';
				}
				if ($('skyscraper')) {
					$('skyscraper').style.display = 'none';
				}
				if ($('skyscraper_wall')) {
					$('skyscraper_wall').style.display = 'none';
				}
				if ($('footerBottom')) {
					$('footerBottom').style.display = 'none';
				}
				if ($('fade')) {
					$('map').appendChild($('fade'));
				}
				if ($('modal')) {
					$('map').appendChild($('modal'));
				}
				document.getElementsByTagName('body')[0].insertBefore($('map'), $('body-wrapper'));
				writeInnerHtml($('fullScreenEl'), fullScreenLeave);			
				resizeMap(true);
			}
			map.invalidateSize();
			if (polyline) {
				var bounds = polyline.getBounds();
				if (bounds) {
					map.fitBounds(bounds);
				}
			}
		}		
	}
	isFullscreen = !isFullscreen;
}

function refreshMarkerInfoTab(id, fileId, isOverviewMode) {

	isRefreshMarkerInfoTab = true;

	bounds = map.getBounds();

	var southWest = bounds.getSouthWest();
	var northEast = bounds.getNorthEast();
	
	var southEastLon = southWest.lng;
	var southEastLat = southWest.lat;
	var northWestLon = northEast.lng;
	var northWestLat = northEast.lat;

	var whatMapAction = isMapOnly ? 'mapOnly' : 'map';  

	if (browserTarget == '' && isWelcomeOnly && !isFullScreenLeave) {
		browserTarget = 'external';
	}

	var downloadUrl = getDownloadUrl('gpsiesXml=markerTab&fileId=' + fileId + '&mapAction=' + whatMapAction + '&markerDetail=' + id + '&BBOX=' + southEastLon + ',' + southEastLat + ',' + northWestLon + ',' + northWestLat + '&browserTarget=' + browserTarget);

	new Ajax.Request(downloadUrl, {
		method: 'get',
			onSuccess: function(transport) {
				
				xml = transport.responseXML;

				var rootNode = xml.childNodes;
				
				for (var i = 0; i < rootNode.length; i++) {
					if (rootNode[i].nodeType == 1){
						var rootChildNode = rootNode[i].childNodes;
						for (var j = 0; j < rootChildNode.length; j++) {
							if (rootChildNode[j].nodeType == 1 && rootChildNode[j].nodeName == 'm') {

								var infoTabs = getXmlInfoWinTab(rootChildNode[j]);
								
								// tempMarker.openInfoWindowTabsHtml(infoTabs);
								tempMarker.bindPopup(infoTabs[0]).openPopup();
								
								if (isOverviewMode) {
									showTrackOnMap(map, fileId, false, false);
								}

							}
						}
					}
				}
				
			}
		}
	);
	
}

function getTabText(childNodes) {

	var infoTabs;

	if (childNodes) {

		infoTabs = new Array();

		var tabNode = childNodes.childNodes;

		var tabHtmlHeadline;
		var tabHtmlText;
		var htmlNode;

		for (var l = 0; l < tabNode.length; l++) {
			if (tabNode[l].nodeType == 1) {
				var tabHtmlHeadline = tabNode[l].getAttribute('h');
				var htmlNode = tabNode[l].childNodes;
				for (var m = 0; m < htmlNode.length; m++) {
					if (htmlNode[m].nodeType == 3) {
						if (tabHtmlText == null) {
							tabHtmlText = '';
						}
						tabHtmlText += htmlNode[m].nodeValue;
					}
				}
				if (tabHtmlHeadline && tabHtmlHeadline.length > 0 && tabHtmlText && tabHtmlText.length > 0) {
					// infoTabs.push(new GInfoWindowTab(tabHtmlHeadline, tabHtmlText));
					infoTabs.push(tabHtmlText);
				}
				tabHtmlText = null;
			}
		}
	}

	return infoTabs;

}

function getCountryBounds() {
	var countryBounds = null;
	if (bBoxSouth != 0 && bBoxWest != 0 && bBoxNorth != 0 && bBoxEast != 0) {
		countryBounds = new L.LatLngBounds(new L.LatLng(bBoxSouth, bBoxWest), new L.LatLng(bBoxNorth, bBoxEast));
	}
	return countryBounds;
}

function showWeather() {

	if ($('weatherToggle') && map) {

		if ($('weatherToggle').checked) {
			if (!weatherLayer) {
				var lang = (applicationLanguage = 'de') ? 'de' : 'en'; 
				weatherLayer = new OsmJs.Weather.LeafletLayer({lang: lang});
			}
			map.addLayer(weatherLayer);
		}
		else {
			if (weatherLayer) {
				map.removeLayer(weatherLayer);
			}
		}
	}
}

function findPoint() {

	var downloadUrl = getDownloadUrl('gpsiesXml=coordinate&coordinate=' + escape($('lat').value) + ',' + escape($('lon').value));

	if (downloadUrl.indexOf('%B0') > -1) {
		downloadUrl = replaceAll(downloadUrl, '%B0', 'DEGREE');
	}

	if (!isXmlLoad) {
		new Ajax.Request(downloadUrl, {
			method: 'get',
				onSuccess: function(transport) {
					xml = transport.responseXML;
					isXmlLoad = true;
					readCoordinate(downloadUrl, point);				
				}
			}
		);	
	}
	
	if (xml) {

		var asJson = XMLObjectifier.xmlToJSON(xml);

		if (asJson) {

			if (asJson.ll && asJson.dms && asJson.dm) {
				
				var ll = asJson.ll[0];
				var dms = asJson.dms[0];
				var dm = asJson.dm[0];

				if (ll && dms && dm) {
					
					var info = '<div style="width: 250px;">';
					info += '<p>';
					info += dms.lat+'<br />';
					info += dms.lon+'<br /><br />';
					info += dm.lat+'<br />';
					info += dm.lon;
					info += '</p>';

					$('lat').value = ll.lat;
					$('lon').value = ll.lon;

					point = new L.LatLng(parseFloat($('lat').value), parseFloat($('lon').value));

					if (map) {
						map.setView(point, map.getZoom());
					}
					else {
						map = createMap('map', point, initialZoomLevel, mapType, false);
						addMapControl(map);
					}
					
					info = '<div style="height: 320px;"><h3 id="cityBubble">Address</h3><p id="metaBubble">Address not found.<br /><br /></p><p id="reverseGeoBubble"></p><p id="eleBubble">0 Meter</p>' + info + '<p><a href="http://www.geocaching.com/seek/nearest.aspx?origin_lat='+$('lat').value+'&origin_long='+$('lon').value+'&dist=50" target="external">Geocaches ...</a></p><br /></div>';

					tempMarker = new L.Marker(point, {icon: createMilestoneIcon()});				
					
					map.addLayer(tempMarker);
					tempMarker.bindPopup(info).openPopup();
					
					updateGeoNames(point);
					
					/*
					var infoTabs = new Array();
					infoTabs.push(new GInfoWindowTab('Koordinaten', info));

					var mkr = createMarker(point, infoTabs, createMilestoneIcon(), null, null, null, null);
					map.addOverlay(mkr);

					GEvent.addListener(mkr, 'infowindowopen', function() {
						updateGeoNames(point);
				    });

					mkr.openInfoWindowTabsHtml(infoTabs);

				    GEvent.addListener(map, 'click', function(marker, point) {
				    	if (point) {
							map.clearOverlays();
							readCoordinate(getDownloadUrl('gpsiesXml=coordinate&coordinate=' + point.lat() + ',' + point.lng()), point);
						}
				    });
				    */
				}				
			}
		}

		isXmlLoad = false;
		xml = null;

	}

}

function getKmzUrl(fid) {
	if (fid && fid != '' && fid.length > 1) {
		return serverUrl + 'files/kmz/' + fid.substr(0, 1) + '/' + fid + '.kmz';
	}	
}

function updateMapType(mt) {
	if (mt && mt != initialMapType) {
		var callback = function(data) {}
		Gpsies.setMapType(mt, (isCreateTrack || isCreateTrackOnly), callback);
	}
}

function updateMapOverlay(mo, isAdd) {
	if (mo) {
		var callback = function(data) {}
		Gpsies.setMapOverlay(mo, isAdd, callback);
	}
}

function showTracksBBox(isLoad) {
	if (isLoad) {
		var mapType = initialMapType;
		if (currentMapType) {
			mapType = currentMapType;
		}
		if (!clusterer) {
			
			/*
			map.addEventListener('moveend', function(e) {
				if (!isRefreshMarkerInfoTab) {
					markerTimeout = window.setTimeout(refreshMap, 100);
				}
				isRefreshMarkerInfoTab = false;
			});
			*/
			
			clusterer = new Clusterer(map);
			// clusterer.SetMaxVisibleMarkers(100);
			// clusterer.SetMinMarkersPerCluster(1);
			
		}
		loadMarker(map.getZoom(), map.getCenter(), countryCode, null, mapType, false);
	}				
	else {
		if (clusterer) {
			// console.log(clusterer);
			var markersArr = clusterer.markers;
			for (i = 0; i < markersArr.length; ++i ) {
				clusterer.RemoveMarker(markersArr[i]);
			}
		}
	}
}

function showQype() {

	if ($('qypeToggle')) {
		
		isRefreshMarkerInfoTab = true;

		removeAllMarkers(qypesArray);

		if (!$('qypeToggle').checked) {
			return;
		}

		if (isQypeProcess) {
			return;
		}

		isQypeProcess = true;

		var rectBounds = map.getBounds();

		var northEast = rectBounds.getNorthEast();
		var southWest = rectBounds.getSouthWest();

		var qypeList = function(data) {

			if (data != null) {

				var dataObj = eval('(' + data + ')');
				
				if (dataObj && dataObj.results) {
					
					var qypeResults = dataObj.results;
					var dataCounter = qypeResults.length;

					var qypeMarker;
					var qypeIcon = createQypeIcon();
					for (var i = 0; i < dataCounter; i++) {
						if (qypeResults[i] && qypeResults[i].place && qypeResults[i].place.point) {
							var pointStr = qypeResults[i].place.point;
							var qypePoint = new L.LatLng(parseFloat(pointStr.substr(0, pointStr.indexOf(','))), parseFloat(pointStr.substr(pointStr.indexOf(',') + 1, pointStr.length)));
							qypeMarker = createQypeMarker(qypePoint, qypeIcon, qypeResults[i].place);
							qypesArray.push(qypeMarker);
							map.addLayer(qypeMarker);
						}
					}
				}
				
			}

			isQypeProcess = false;

		}

		Gpsies.getQypeByGeoBound(southWest.lng, southWest.lat, northEast.lng, northEast.lat, qypeList);

	}
}

function createQypeMarker(qypePoint, qypeIcon, qype) {
	
	var opts = new Object();
		opts.icon = qypeIcon;
		opts.title = qype.title;
		
  	var marker = new L.Marker(qypePoint, opts);
  	  	
	marker.bindPopup('<div style="min-width: 250px;"><h3>' + qype.title + '</h3><a class="button3" href="javascript:zoomIn(new L.LatLng(parseFloat('+qypePoint.lat+'), parseFloat('+qypePoint.lng+')))"> '+labelShowTrack+'</a></div>');
  
	return marker;
  
}

function showWikipedia() {

	if ($('wikipediaToggle')) {
		
		isRefreshMarkerInfoTab = true;

		removeAllMarkers(wikipediasArray);

		if (!$('wikipediaToggle').checked) {
			return;
		}

		if (isWikipediaProcess) {
			return;
		}

		isWikipediaProcess = true;

		var rectBounds = map.getBounds();

		var northEast = rectBounds.getNorthEast();
		var southWest = rectBounds.getSouthWest();

		var wikipediaList = function(data) {

			if (data != null) {
				
				var dataObj = eval('(' + data + ')');
				
				if (dataObj && dataObj.geonames) {
					var wikipediaArticles = dataObj.geonames;
					var dataCounter = wikipediaArticles.length;

					var wikipediaMarker;
					var wikipediaIcon = createWikipediaIcon();
					for (var i = 0; i < dataCounter; i++) {
						wikipediaMarker = createWikipediaMarker(new L.LatLng(parseFloat(wikipediaArticles[i].lat), parseFloat(wikipediaArticles[i].lng)), wikipediaIcon, wikipediaArticles[i]);
						wikipediasArray.push(wikipediaMarker);
						map.addLayer(wikipediaMarker);
					}
				}
				
			}

			isWikipediaProcess = false;

		}

		Gpsies.getWikipediaByGeoBound(southWest.lng, southWest.lat, northEast.lng, northEast.lat, 100, wikipediaList);

	}
}

function createWikipediaMarker(wikipediaPoint, wikipediaIcon, wikipedia) {
	
	var opts = new Object();
		opts.icon = wikipediaIcon;
		opts.title = wikipedia.title;
		
  	var marker = new L.Marker(wikipediaPoint, opts);
  	  	
	marker.bindPopup('<div style="min-width: 250px;"><h3><img style="vertical-align: bottom;" src="images/wikipedia_32.png" alt="Wikipedia" /> ' + wikipedia.title + '</h3><br />' + wikipedia.summary + '<br /><br /><a class="button3" target="_blank" href="http://' + wikipedia.wikipediaUrl + '"> ' + labelMapMore + '</a><br /><br />Powered by <a href="http://www.wikipedia.org/" target="_blank">wikipedia.org</a></div>');
  
	return marker;
  
}

function showPanoramio() {

	if ($('panoramioToggle')) {
		
		isRefreshMarkerInfoTab = true;

		removeAllMarkers(panoramiosArray);

		if (!$('panoramioToggle').checked) {
			return;
		}

		if (isPanoramioProcess) {
			return;
		}

		isPanoramioProcess = true;

		var rectBounds = map.getBounds();

		var northEast = rectBounds.getNorthEast();
		var southWest = rectBounds.getSouthWest();

		var panoramioList = function(data) {

			if (data != null) {

				var sep = '#####|#####';
				var dataArr = new Array();
				var sepIndex = data.indexOf(sep);
				
				if (sepIndex > -1) {
					dataArr.push(data.substring(0, sepIndex));
					dataArr.push(data.substring(sepIndex + sep.length, data.length));
				}
				else {
					dataArr.push(data);
				}
				
				for (var j = 0; j < dataArr.length; j++) {

					var dataObj = eval('(' + dataArr[j] + ')');

					var clickLink;
	
					var photos = dataObj.photos;
	
					var infoTabs;
					var marker;
					var panoramioCounter = photos.length;
	
					for (var i = 0; i < panoramioCounter; i++) {
						// clickLink = 'javascript:refreshPanoramioInfoTab('+photos[i].photo_id+', '+photos[i].width+', '+photos[i].height+', \''+escapeQuotes(photos[i].photo_title)+'\', \''+escapeQuotes(photos[i].owner_name)+'\', \''+photos[i].owner_id+'\', \''+photos[i].upload_date+'\');';
						addPanoramioPhotosToMap(photos[i]);
					}

				}

			}

			isPanoramioProcess = false;

		}

		Gpsies.getPanoramioByGeoBound(southWest.lng, southWest.lat, northEast.lng, northEast.lat, panoramioOwnerId, panoramioList);

	}
}

function addPanoramioPhotosToMap(photo) {
	if (photo && photo.latitude && photo.longitude && photo.latitude != '' && photo.longitude != '') {
		var panoramioMarker = createPanoramioPhotoMarker(new L.LatLng(parseFloat(photo.latitude), parseFloat(photo.longitude)), createPhotoIcon(replaceAll(photo.photo_file_url, 'medium', 'mini_square')), photo);
		panoramiosArray.push(panoramioMarker);
		map.addLayer(panoramioMarker);
		/*
		var panoramioToggle = $('panoramioToggle') && $('panoramioToggle').checked;
		if (!panoramioToggle) {
			if (map.hasLayer(panoramioMarker)) {
				map.removeLayer(panoramioMarker);
			}
		}
		*/
	}
}

function createPanoramioPhotoMarker(photoPoint, photoIcon, photo) {
	
	var opts = new Object();
		opts.icon = photoIcon;
		opts.title = photo.description;
		
  	var marker = new L.Marker(photoPoint, opts);
  	  	
	marker.bindPopup('<div style="min-width: 250px;"><a href="http://www.panoramio.com/" target="panoramio"><img src="images/panoramioLogoSmall.gif" alt="Panoramio" /></a><br /><a href="'+photo.photo_url+'" target="panoramio"><img class="map_img" src="'+replaceAll(photo.photo_file_url, 'medium', 'small')+'" alt="" /></a><br />&copy; <a href="'+photo.owner_url+'" target="panoramio">'+photo.owner_name+'</a>: '+(photo.photo_title && photo.photo_title != '' ? photo.photo_title : '')+'<br /><a class="button3" href="javascript:zoomIn(new L.LatLng(parseFloat('+photo.latitude+'), parseFloat('+photo.longitude+')))"> '+labelShowTrack+'</a></div>');
  
	return marker;
  
}

function zoomIn(pt) {
	if (pt) {
		map.setView(pt, 16);
	}
}

function deleteMilestones() {
	if (markersMilestone != null) {
		for (var i = 0; i < markersMilestone.length; i++) {
			map.removeLayer(markersMilestone[i]);
		}
		markersMilestone = [];
	}
}

function setAllPolylineByGeoJson(geoXmlArray) {
	var _polyline = null;
	if (geoXmlArray) {
		for (i=0; i<geoXmlArray.length; i++) {
			_polyline = setPolylineByGeoJson(geoXmlArray[i].getLayers(), _polyline);
		}
	}
	return _polyline;
}
		
function setPolylineByGeoJson(geoJsonLayers, _polyline) {
	var geoJsonLayer;
	if (_polyline === undefined) {
		_polyline = null;
	}
	for (var i=0; (i < geoJsonLayers.length); i++) {
		geoJsonLayer = geoJsonLayers[i].getLatLngs();
		for (var j=0; (j < geoJsonLayer.length); j++) {
			if (!_polyline) {
				_polyline = new L.Polyline(geoJsonLayer[j]);
			}
			else {
				for (var k=0; (k < geoJsonLayer[j].length); k++) {
					_polyline.addLatLng(geoJsonLayer[j][k]);
				}
			}
		}
	}
	return _polyline;
}

function pointsAtDistance() {

	var polylineForDistance = null;
	
	if (geoXml) {
		polylineForDistance = setPolylineByGeoJson(geoXml.getLayers());
		if (polylineForDistance) {
			trackDistance = getDistancePolyline(polylineForDistance);
		}
	}
	else if (polyline) {
		// maybe usefull, if no geoXml exists
		polylineForDistance = polyline;
	}
	
	if (polylineForDistance && trackDistance) {

		var unitLength = '';
		
		if (isImperialSystem()) {
			metres = 1609.344;
			unitLength = 'mi';
		}
		else {
			metres = 1000;
			unitLength = 'km';
		}
		
		var trDistance = (isImperialSystem() ? trackDistance * 0.621371 : trackDistance) / metres;
		
    	var factor = 1;
    	if (trDistance > 200 && trDistance <= 500) {
    		factor = 5;
    	}
    	else if (trDistance > 500 && trDistance <= 1000) {
    		factor = 10;
    	}            	
    	else if (trDistance > 1000 && trDistance <= 5000) {
    		factor = 50;
    	}
    	else if (trDistance > 5000 && trDistance <= 10000) {
    		factor = 100;
    	}            	
    	else if (trDistance > 10000) {
    		factor = 1000;
    	}

    	if (map.getZoom() > 15) {
    		factor = factor / 10;
    	}
    	
		metres *= factor;
		
		var next = metres;
		var distancePoints = [];
		
		if (metres <= 0) return distancePoints;
		
		var dist=0;
		var olddist=0;
		var p1;		
		var p2;		
		var m;
		
		var polylineVertex = polylineForDistance.getLatLngs();	
		
		for (var i=1; (i < polylineVertex.length); i++) {
			
			p1 = polylineVertex[i-1];
			p2 = polylineVertex[i];
			
			olddist = dist;
			dist += getDistanceMeter(p1.lat, p1.lng, p2.lat, p2.lng);
			
			while (dist > next) {
				
				p1 = polylineVertex[i-1];
				p2 = polylineVertex[i];
				
				m = (next-olddist)/(dist-olddist);
				
				distancePoints.push(new L.LatLng( p1.lat + (p2.lat-p1.lat)*m, p1.lng + (p2.lng-p1.lng)*m));
				next += metres;  
				
			}
		}
		
		deleteMilestones();

		var distMarker = 0;
		for (var i=0; i<distancePoints.length; i++) {

			distMarker = Math.round(((i+1) * factor) * 100) / 100;
			
			var opts = {
					'icon': createMilestoneSmallIcon(distMarker + ' ' + unitLength),
					'title': distMarker + ' ' + unitLength
				};

			kmMarker = new L.Marker(distancePoints[i], opts);

			map.addLayer(kmMarker);
			markersMilestone.push(kmMarker);

		}
	    
	}
	
}

function setDistance() {

	trackDistance = 0;

	if (validateCreateTrack('statistics')) {

		var tmpArr = new Array();
	
		for (var i=0; i<segmentList.length; i++) {
			var segment = segmentList[i];
			var pt = segment.segmentPoint;
			var polyArr = getSegmentRouteById(segment.segmentRoute);
			if (polyArr) {
				for (var j=0; j < polyArr.length; j++) {
					tmpArr.push(polyArr[j]);
				}
			}
			else {
				tmpArr.push(pt);
			}
		}

		trackDistance = getTrackDistance(tmpArr);

		writeDistance('distance');
		setTrackStatistics();

	}
	else {
		writeInnerHtml('trackStatisticsPoints', '0 PT | 0 WPT');
		writeInnerHtml('trackStatisticsTime', '0h 0m 0s');
		writeInnerHtml('distance', '0 ' + (isMetricSystem() ? 'km' : 'miles'));
	}

}

/*
function createLiveTrackingTableRow(data) {

	var html = '';
	
  	if (data) {

  		if (polyline) {
  			html += 'Total amount of tracking points: ' + polyline.getLatLngs().length + '<br />';
  		}
  		html += 'Last browser update: ' + new Date().toLocaleString() + '<br /><br />';

  		html += '<strong>Last update point</strong><br />';
  		html += 'Latitude: ' + data.lat + '<br />';
  		html += 'Longitude: : ' + data.lon + '<br />';
  		html += 'Accuracy: ' + data.accuracy + '<br />';
  		html += 'Speed: ' + data.speed + '<br />';
  		html += 'Timezone offset: ' + data.timezoneOffset + '<br />';
  		
  		if (data.timestampLocation && data.timestampLocation != '') {
  			html += 'Timestamp last location update: ' + new Date(data.timestampLocation).toLocaleString() + '<br />';
  		}
  		if (data.timestampRequest && data.timestampRequest != '') {
  			html += 'Timestamp last device request: ' + new Date(data.timestampRequest).toLocaleString() + '<br />';
  		}
  		if (data.createdDate && data.createdDate != '') {
  			html += 'Timestamp last server update: ' + new Date(data.createdDate).toLocaleString() + '<br />';
  		}
  		
  	}
	
	return html;
  
}

function toggleLiveTrackingGeoJson() {
	if ($('liveTrackingGeoJson') && $('toggleLiveTrackingGeoJson') && polyline) {
		var html = '';
		var isShow = $('toggleLiveTrackingGeoJson').firstChild.data == 'Show GeoJson';
		console.log($('toggleLiveTrackingGeoJson').firstChild.data);
		if (isShow) {
			html = '<br /><strong>GeoJson</strong><br /><textarea>' + JSON.stringify(polyline.toGeoJSON()) + '</textarea>';
			$('toggleLiveTrackingGeoJson').firstChild.data = 'Hide GeoJson';
		}
		else {
			$('toggleLiveTrackingGeoJson').firstChild.data = 'Show GeoJson';
		}
		writeInnerHtml('liveTrackingGeoJson', html);
	}
}
*/

function createLiveTrackingAvatarMarker(cacheKey, liveTrackingPoint, data) {

	var cacheKeyUsername = cacheKey;
	if (cacheKey.indexOf('|') > -1) {
		var cacheKeySpilt = cacheKey.split('|');
		cacheKeyUsername = cacheKeySpilt[0];
	}
	
	var isMapPositionDetected = (isMap || isMapOnly) && data.bestPositionOnRouteLat && data.bestPositionOnRouteLon && data.bestPositionOnRouteLat != '' && data.bestPositionOnRouteLon != '';
	
	if (isMapPositionDetected) {
		liveTrackingPoint = new L.LatLng(parseFloat(data.bestPositionOnRouteLat), parseFloat(data.bestPositionOnRouteLon));
	}
	
	var trackingType = !data.trackingType || data.trackingType == '' ? 'livetracking' : data.trackingType;
	
	var iconLabel = '<div onmouseover="showElement(\'liveTrackingLabelContent_' + cacheKeyUsername + '\')" onmouseout="hideElement(\'liveTrackingLabelContent_' + cacheKeyUsername + '\')" style="margin: 3px;">';
	
	// username
	iconLabel += '<span style="color: #ccc; font-weight: bold;">' + cacheKeyUsername + '</span>';

	iconLabel += '<div id="liveTrackingLabelContent_' + cacheKeyUsername + '" style="margin: 5px 0; display: none;">';
	
	var showOutdated = false;
	
	iconLabel += '<table style="border-collapse: collapse;">';
	
	var bestPositionMeter = -1;
	if (data.bestPositionOnRouteLength && data.bestPositionOnRouteLength) {
		bestPositionMeter = data.bestPositionOnRouteLength;
		iconLabel += '<tr><td style="padding-right: 10px;">' + label_positionLiveTracking + '</td><td>' + bestPositionMeter / 1000 + ' km</td></tr>';
	}
	else if (data.bestPositionOnRouteIndex && data.bestPositionOnRouteIndex) {
		bestPositionMeter = data.bestPositionOnRouteIndex * 5;
		iconLabel += '<tr><td style="padding-right: 10px;">' + label_positionLiveTracking + '</td><td>' + bestPositionMeter / 1000 + ' km *</td></tr>';
		showOutdated = true;
	}
	else if (data.distanceMeter > 0) {
		bestPositionMeter = data.distanceMeter;
		iconLabel += '<tr><td style="padding-right: 10px;">' + label_positionLiveTracking + '</td><td>' + (Math.round(bestPositionMeter / 1000 * 100) / 100) + ' km</td></tr>';
	}
	
	var timestamp = data.timestampLocation ? data.timestampLocation : data.timestampRequest;
	
	if (clientName == 'wingsforlife') {
		iconLabel += '<tr><td style="padding-right: 10px;">' + label_timeLiveTracking + '</td><td>' +  convertDateToUTC(timestamp).toLocaleTimeString() + ' (UTC)</td></tr>';
	}
	else {
		/*
		console.log('timestamp 1', timestamp);
		console.log('timestamp 2', convertDateToUTC(timestamp));
		console.log('timestamp 3', convertUTCToLocalTime(timestamp));
		console.log('timestamp 4', convertDateToUTC(timestamp).toLocaleString());
		console.log('timestamp 5', convertUTCToLocalDate(timestamp).toLocaleString());
		*/
		iconLabel += '<tr><td style="padding-right: 10px;">' + label_timeLiveTracking + '</td><td>' +  convertUTCToLocalTime(timestamp).toLocaleTimeString() + '</td></tr>';
	}
	
	if (data.speed > 0) {
		iconLabel += '<tr><td style="padding-right: 10px;">Speed&empty;</td><td>' + (Math.round(data.speed/1000*36000) / 10) + ' km/h</td></tr>';
		iconLabel += '<tr><td style="padding-right: 10px;">Pace&empty;</td><td>' + data.avgPace + ' min/km</td></tr>';
	}
	
	if (data.elapsedSeconds > 0) {
		
		var secs = data.elapsedSeconds;
		var hours = (secs - (secs % 3600))/3600;
		secs -= hours * 3600;
		var mins = (secs - (secs % 60))/60;
		secs -= mins * 60;
		
		iconLabel += '<tr><td style="padding-right: 10px;">' + label_durationLiveTracking + '</td><td>' + (hours > 0 ? hours + 'h ' : '') + mins + 'm ' + secs + 's</td></tr>';
		iconLabel += '</table>';
		iconLabel += '</div>';
		
		/*
		// WR 10000 m = 1 m in 0.1604 sek
		if (isMapPositionDetected && bestPositionMeter > 0) {
			var wrSecs = Math.round(bestPositionMeter * 0.1604);
			var diffWr = wrSecs - data.elapsedSeconds;
			if (diffWr != 0) {
				var isFaster = diffWr > 0;
				if (diffWr < 0) {
					diffWr = diffWr * -1;
				}
				secs = diffWr;
				hours = (secs - (secs % 3600))/3600;
				secs -= hours * 3600;
				mins = (secs - (secs % 60))/60;
				secs -= mins * 60;
				if (isFaster) {
					iconLabel += '<span style="color: green; font-weight: bold;">Weltrekord<br />besser: ' + (hours > 0 ? hours + 'h ' : '') + mins + 'm ' + secs + 's</span>';	
				}
				else {
					iconLabel += '<span style="color: red; font-weight: bold;">Kein Weltrekord<br />langsamer: ' + (hours > 0 ? hours + 'h ' : '') + mins + 'm ' + secs + 's</span>';	
				}
			}
			else {
				iconLabel += '<span style="color: green; font-weight: bold;">Weltrekord!</span>';
			}
		}
		*/
		
	}
	else {
		iconLabel += '</table>';
		iconLabel += '</div>';
	}
	
	if (showOutdated) {
		iconLabel += '<br />* = ' + label_outdatedLiveTracking;
	}
		
	var opts = new Object();
		opts.icon = createNewWaypointIcon(trackingType, iconLabel, 'leaflet-marker-iconlabel-livetracking');
		// opts.title = cacheKeyUsername;
		
  	var marker = new L.Marker(liveTrackingPoint, opts);

  	var isShowAll = getRequestParameter('showAll', window.location.search);
  	
	var fileId = getFormValue($('fileId'));
	if (!isMobile && fileId) {
		marker.bindPopup('<div id="closestLiveTrackingTrackpointList" style="width: 300px; height: 200px; overflow: auto;"></div>');
  		marker.addEventListener('popupopen', function(e) {
			if ($('closestLiveTrackingTrackpointList') && fileId && fileId != '') {
				var callback = function(data) {
					if (data != null) {
						var windowContent = '<h3>' + cacheKeyUsername + '</h3></br><strong>fileId: ' + fileId + '</strong></br></br>';
						for (var i=0; i < data.length; i++) {
							windowContent += '<a class="button3" href="#" onclick="correctClosestLiveTrackingTrackpoint(\''+cacheKeyUsername+'\', \''+fileId+'\', '+data[i].bestPositionOnRouteIndex+', '+data[i].trackpoint.lat+', '+data[i].trackpoint.lon+');">' + ((data[i].bestPositionOnRouteIndex * 5) / 1000) + ' km</a> ';
						}
						writeInnerHtml('closestLiveTrackingTrackpointList', windowContent);
					}
					else {
						marker.closePopup();
					}
				}
				Gpsies.getClosestLiveTrackingTrackpointList(fileId, marker.getLatLng().lat, marker.getLatLng().lng, 0.05, callback);
			}
	  	});
	}
	else if (isShowAll) {
		marker.addEventListener('click', function(e) {
			window.location.href = liveTrackingAction + '?username=' + cacheKeyUsername;
	  	});
	}
	else if (isMobile) {
		marker.addEventListener('click', function(e) {
			showElement('liveTrackingLabelContent_' + cacheKeyUsername);
	  	});
	}
  	
	return marker;

}

function correctClosestLiveTrackingTrackpoint(username, fileId, bestPositionOnRouteIndex, lat, lon) {
	var callback = function(data) {
		if (data != null) {
			writeInnerHtml('closestLiveTrackingTrackpointList', '<h3>' + data + '</h3>');
		}
	}
	Gpsies.correctClosestLiveTrackingTrackpoint(username, fileId, bestPositionOnRouteIndex, lat, lon, callback);
}

function allowDisallowLiveTrackingUpdates(cacheKey) {
	var callback = function(data) {
		if (data != null) {
			console.log(data);
		}
	}
	Gpsies.allowDisallowLiveTrackingUpdates(cacheKey);
}

function initLiveTrackingArchive(archiveId) {

	if (!map) {
		map = createMap('map', new L.LatLng(0, 0), 12, (currentMapType ? currentMapType : initialMapType), false);
		addMapControl(map);
	}
	
	var archiveId = getFormValue($('archiveId'));
	var username = getFormValue($('username'));
	var fileId = getFormValue($('fileId'));
	
	if (archiveId && archiveId) {
	
		var liveTrackingCallback = function(data) {
			
			if (data != null && typeof data == 'object') {
					
				bounds = new L.LatLngBounds();
				
				var liveTrackingPoint;
				var radius = 5;

				// show hole track
				for (var j=0; j<data.length; j++) {

					liveTrackingPoint = new L.LatLng(parseFloat(data[j].lat), parseFloat(data[j].lon));
					
					bounds.extend(liveTrackingPoint);

					// segmentList.push(new Segment(liveTrackingPoint));

					if (!isMap && !isMapOnly) {
						
						if (data[j].accuracy && data[j].accuracy != '' && isNumber(data[j].accuracy)) {
							radius = parseFloat(data[j].accuracy) / 2;
							// set max radius to avoid very large circles
							if (radius > 25) {
								radius = 25;
							}
						}
						
						L.circle(liveTrackingPoint, radius, {'color': getColorNameById(data[j].userId)}).addTo(map);
						
					}
					
				}
				
				if (bounds.isValid()) {
					map.fitBounds(bounds);
					map.setMaxBounds(bounds);
					map.setMaxBounds(null);
				}

				var fileId = getFormValue($('fileId'));
				if (fileId) {
					lineColor = '#f0f';
					lineOpacity = 0.6;
					showTrackOnMap(map, fileId, false, false);
				}
				
			}
			
		}
		
		Gpsies.getLiveTrackingArchiveEntry(archiveId, username, fileId, liveTrackingCallback);
		
	}
	
}

function initLiveTrackingOnMap() {

	getLiveTrackingUserListByFileId();
	
	if (!liveTrackingMarkerMap) {
		liveTrackingMarkerMap = new HashMap();
	}
	
}

function initLiveTracking() {

	if (!map) {
		map = createMap('map', new L.LatLng(0, 0), 12, (currentMapType ? currentMapType : initialMapType), false);
		addMapControl(map);
	}
	
	if ($('username')) {
		$('username').value = getRequestParameter('username', window.location.search);
	}
	
	var fileId = getFormValue($('fileId'));
	if (fileId) {
		showTrackOnMap(map, fileId, false, false);
		getLiveTrackingUserListByFileId();
	}
	else {
		getLiveTrackingUserList();
	}

	if (!liveTrackingMarkerMap) {
		liveTrackingMarkerMap = new HashMap();
	}
	
}

function toggleUserMarker(checkbox, username) {
	
	if (!checkbox.checked && liveTrackingMarkerMap) {
		map.removeLayer(liveTrackingMarkerMap.get(username));
		liveTrackingMarkerMap.remove(username);
	}
	
}

function deleteLiveTracking(cacheKey) {

	var cacheKeyUsername = null;
	var cacheKeyFileId = null;
	
	if (cacheKey) {
		if (cacheKey.indexOf('|') > -1) {
			var cacheKeySpilt = cacheKey.split('|');
			cacheKeyUsername = cacheKeySpilt[0];
			cacheKeyFileId = cacheKeySpilt[1];;
		}
		else {
			cacheKeyUsername = cacheKey;
		}
	}
	
	var _username = cacheKeyUsername ? cacheKeyUsername : getFormValue($('username'));
	var _fileId = cacheKeyFileId ? cacheKeyFileId : getFormValue($('fileId'));
	
	if (_username) {
		var liveTrackingCallback = function(data) {
			if (data != null) {
				var reloadAddress = window.location.href;
				reloadAddress = reloadAddress.substr(0, reloadAddress.indexOf('?'));
				window.location.href = reloadAddress;
			}
		}
		
		Gpsies.deleteLiveTracking(_username, _fileId, liveTrackingCallback);		
	}
	
}

function completeLiveTracking(cacheKey, isDelete) {

	var cacheKeyUsername = null;
	var cacheKeyFileId = null;
	
	if (cacheKey) {
		if (cacheKey.indexOf('|') > -1) {
			var cacheKeySpilt = cacheKey.split('|');
			cacheKeyUsername = cacheKeySpilt[0];
			cacheKeyFileId = cacheKeySpilt[1];;
		}
		else {
			cacheKeyUsername = cacheKey;
		}
	}
	
	var _username = cacheKeyUsername ? cacheKeyUsername : getFormValue($('username'));
	var _fileId = cacheKeyFileId ? cacheKeyFileId : getFormValue($('fileId'));
	
	if (_username) {
		var liveTrackingCallback = function(data) {
			if (data != null) {
				var reloadAddress = window.location.href;
				reloadAddress = reloadAddress.substr(0, reloadAddress.indexOf('?'));
				window.location.href = reloadAddress;
			}
		}
		
		Gpsies.completeLiveTracking(_username, _fileId, isDelete, liveTrackingCallback);		
	}
	
}

function getLiveTrackingUserListByFileId() {

	var fileId = getFormValue($('fileId'));
	
	if (fileId && fileId != '') {
		var liveTrackingUserListCallback = function(data) {
			var html = '';
			if (data != null && typeof data == 'object') {
				currentLiveTrackings = data;
				if (data && data.length > 0 && $('liveTrackingUserList')) {
					html += '<form name="liveTrackingUserListForm" id="liveTrackingUserListForm" action="#" onsubmit="return false;">';
					for (var i=0; i<data.length; i++) {
						html += '<input id="usernameCheckbox'+[i]+'" type="checkbox" checked="checked" name="usernameCheckbox" value="'+data[i].username+'" onclick="toggleUserMarker(this, \'' + data[i].username + '\')" /> <label for="usernameCheckbox'+[i]+'">' + data[i].username + '</label><br />';
					}
					html += '</form>';
				}
			}
			writeInnerHtml('liveTrackingUserList', html);
			showLiveTracking();
		}
		Gpsies.getLiveTrackingUserListByFileId(fileId, liveTrackingUserListCallback);
	}
	
}

function getLiveTrackingUserList() {

	var liveTrackingUserListCallback = function(data) {
		var html = '';
		if (data != null && typeof data == 'object') {
			currentLiveTrackings = data;
			if (data && data.length > 0 && $('liveTrackingUserList')) {
				html += '<form name="liveTrackingUserListForm" id="liveTrackingUserListForm">';
				for (var i=0; i<data.length; i++) {
					html += '<input id="usernameCheckbox'+[i]+'" type="checkbox" checked="checked" name="usernameCheckbox" value="'+data[i].username+'" onclick="toggleUserMarker(this, \'' + data[i].username + '\')" /> <label for="usernameCheckbox'+[i]+'">' + data[i].username + '</label><br />';
				}
				html += '</form>';
			}
		}
		writeInnerHtml('liveTrackingUserList', html);
		showLiveTracking();
	}

	var isShowAll = getRequestParameter('showAll', window.location.search);
	
	Gpsies.getLiveTrackingUserList(getLiveTrackingUsernamesByUrl(), isShowAll, liveTrackingUserListCallback);

}

function getLiveTrackingUsernamesByUrl() {

    var usernames = new Array();
    var keyValuePairs = location.search.slice(1).split('&');

	var keyValuePair;
	for (var i=0; i<keyValuePairs.length; i++) {
		keyValuePair = keyValuePairs[i].split('=');
        if (keyValuePair.length == 2 && keyValuePair[0] == 'username' && keyValuePair[1] != '') {
			usernames.push(keyValuePair[1]);
			
		}
	}
		
	if (usernames.length == 0) {
		return null;
	}
	
	return usernames;
	
}

function showLiveTracking() {
	
	if ($('liveTrackingUserListForm') && $('liveTrackingUserListForm').usernameCheckbox) {
		
		var usernames = getCheckboxValuesArray('usernameCheckbox');
		
		if (usernames && usernames.length > 0) {

			var isShowAll = getRequestParameter('showAll', window.location.search);
			
			if (isShowAll) {
				
				showLastLiveTracking();
				
				// update tracking every 30 seconds
				var refreshIntervalValue = 30
				
				liveTrackingRefreshInterval = setInterval(function(){showLastLiveTracking()}, (refreshIntervalValue * 1000));	
				
			}
			else {
				
				var liveTrackingCallback = function(dataMap) {
					
					if (dataMap != null && typeof dataMap == 'object') {
					
						for (var i=0; i<usernames.length; i++) {
							
							var cacheKey = usernames[i];
							var fileId = getFormValue($('fileId'));
							if (fileId) {
								cacheKey = cacheKey + '|' + fileId;
							}
							
							var data = dataMap[cacheKey];

							if (data != null) {
								
								var liveTrackingPoint;
								var radius = 5;

								if (!isMap && !isMapOnly) {
									
									// show hole track
									for (var j=0; j<data.length; j++) {

										liveTrackingPoint = new L.LatLng(parseFloat(data[j].lat), parseFloat(data[j].lon));
										
										// segmentList.push(new Segment(liveTrackingPoint));

										if (data[j].accuracy && data[j].accuracy != '' && isNumber(data[j].accuracy)) {
											radius = parseFloat(data[j].accuracy) / 2;
											// set max radius to avoid very large circles
											if (radius > 25) {
												radius = 25;
											}
										}
										
										L.circle(liveTrackingPoint, radius, {'color': getColorNameById(data[j].userId)}).addTo(map);
										
									}
									
								}

							}
							
						}
						
						showLastLiveTracking();
						
						// update tracking every 5 seconds
						var refreshIntervalValue = 5
						
						liveTrackingRefreshInterval = setInterval(function(){showLastLiveTracking()}, (refreshIntervalValue * 1000));	
						
					}
					
				}
				
				Gpsies.getLiveTrackingMap(usernames, getFormValue($('fileId')), liveTrackingCallback);
				
			}
			
		}
		else {

			// update tracking every 5 seconds
			var refreshIntervalValue = 5;
			
			liveTrackingRefreshInterval = setInterval(function(){showLastLiveTracking()}, (refreshIntervalValue * 1000));
			
		}
		
	}
	
}

function showLastLiveTracking() {

	var usernames = getCheckboxValuesArray('usernameCheckbox');

	if (usernames && usernames.length > 0) {

		var lastLiveTrackingCallback = function(dataMap) {
			
			if (dataMap != null && typeof dataMap == 'object') {

				bounds = new L.LatLngBounds();
				
				var marker;
				var lastLiveTrackingPoint;
				var liveTrackingPoint;
				
				var followPositionChecked = $('followPosition') && $('followPosition').checked;
				
				for (var i=0; i<usernames.length; i++) {

					var cacheKey = usernames[i];
					var fileId = getFormValue($('fileId'));
					if (fileId) {
						cacheKey = cacheKey + '|' + fileId;
					}
					
					var data = dataMap[cacheKey];

					if (data != null) {

						marker = liveTrackingMarkerMap.get(cacheKey);
						lastLiveTrackingPoint = marker ? marker.getLatLng() : null;
						
						liveTrackingPoint = new L.LatLng(parseFloat(data.lat), parseFloat(data.lon));
						
						if (followPositionChecked) {
							bounds.extend(liveTrackingPoint);
						}

						if (marker) {
							map.removeLayer(marker);
						}

						// create new point 
						marker = createLiveTrackingAvatarMarker(cacheKey, liveTrackingPoint, data);
						map.addLayer(marker);
						liveTrackingMarkerMap.put(cacheKey, marker);
						
						if (!isMap && !isMapOnly) {
							
							if (lastLiveTrackingPoint && (lastLiveTrackingPoint.lat != liveTrackingPoint.lat && lastLiveTrackingPoint.lng != liveTrackingPoint.lng)) {
	
								var radius = 5;
								if (data.accuracy && data.accuracy != '' && isNumber(data.accuracy)) {
									radius = parseFloat(data.accuracy) / 2;
									// set max radius to avoid very large circles
									if (radius > 25) {
										radius = 25;
									}
								}				
	
								L.circle(liveTrackingPoint, radius, {'color': getColorNameById(data.userId)}).addTo(map);
								
							}
							
						}
						
					}
					
				}

				if (followPositionChecked) {
					if (bounds.isValid()) {
						if (!map.getBounds().contains(bounds)) {
							var isShowAll = getRequestParameter('showAll', window.location.search);
							if (isShowAll) {
								map.fitBounds(bounds);
							}
							else {
								map.setView(bounds.getCenter(), map.getZoom());
							}
						}
						else {
							// map.setView(bounds.getCenter(), map.getZoom());
						}
					}
					else if (liveTrackingPoint) {
						if (!map.getBounds().contains(liveTrackingPoint)) {
							map.setView(liveTrackingPoint, map.getZoom());
						}
					}
				}
				
			}
			
		}
		
		Gpsies.getLastLiveTrackingEntryMap(usernames, getFormValue($('fileId')), lastLiveTrackingCallback);
		
	}
	
}

function updateLiveTrackingRefreshInterval() {
	
	var refreshIntervalValue = 0;
	
	var followPositionCheckbox = $('followPosition');
	if (followPositionCheckbox && followPositionCheckbox.checked) {
		refreshIntervalValue = 5;
	}
	
	if (refreshIntervalValue == 0) {
		clearInterval(liveTrackingRefreshInterval);
	}
	else {
		clearInterval(liveTrackingRefreshInterval);
		liveTrackingRefreshInterval = setInterval(function(){showLastLiveTracking()}, (refreshIntervalValue * 1000));
	}
	
}

function updateRecommendationMapCenter() {
	if (map) {
		map.addEventListener('moveend', function(e) {
			var point = map.getCenter();
			if (point && $('lat') && $('lon')) {
				$('lat').value = point.lat;
				$('lon').value = point.lng;
			}
		});
	}
}

function loadRecommendationMapEmpty(lat, lon, zoom) {
	map = createMap('map', null, null, initialMapType, false);
	map.setView(new L.LatLng(lat, lon), zoom);
	addMapControl(map);
}

function getGeoAds() {
	if (map) {
		bounds = map.getBounds();
		if (bounds) {
			var southWest = bounds.getSouthWest();
			var northEast = bounds.getNorthEast();
			var east = southWest.lng;
			var south = southWest.lat;
			var west = northEast.lng;
			var north = northEast.lat;
			var geoAdsUrl = 'http://maptoolkit.net/geoads.json?partner=XXX&pretty=1&callback=getGeoAdsCallback&bbox='+north + ',' + east + ',' + south + ',' + west+'&profile=';
			console.log(geoAdsUrl);
			jsonp(geoAdsUrl);
		}
	}
}

function getGeoAdsCallback(data) {
	if (data != null && data != '' && data.items) {
		var debug = 'Gefundene Ergebnisse: ' + data.items.length + '\n';
		for (var i = 0; i < data.items.length; i++) {
			var book = data.items[i];
			debug += '\n';
			debug += book.name + '\n';
			debug += book.description + '\n';
			debug += (book.image == '' ? 'kein Bild vorhanden' : book.image) + '\n';
			debug += book.href + '\n';
		}
		alert(debug);
	}
}

// Clusterer.js - marker clustering routines for Google Maps apps
//
// Using these routines is very easy.
//
// 1) Load the routines into your code:
//
//        <script src="http://www.acme.com/javascript/Clusterer.js" type="text/javascript"></script>
//
// 2) Create a Clusterer object, passing it your map object:
//
//        var clusterer = new Clusterer( map );
//
// 3) Wherever you now do map.addOverlay( marker ), instead call
//    clusterer.AddMarker( marker, title ).  The title is just a
//    short descriptive string to use in the cluster info-boxes.
//
// 4) If you are doing any map.removeLayer( marker ) calls, change those
//    to clusterer.RemoveMarker( marker ).
//
// That's it!  Everything else happens automatically.
//
//
// The current version of this code is always available at:
// http://www.acme.com/javascript/
//
//
// Copyright ? 2005,2006 by Jef Poskanzer <jef@mail.acme.com>.
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions
// are met:
// 1. Redistributions of source code must retain the above copyright
//    notice, this list of conditions and the following disclaimer.
// 2. Redistributions in binary form must reproduce the above copyright
//    notice, this list of conditions and the following disclaimer in the
//    documentation and/or other materials provided with the distribution.
//
// THIS SOFTWARE IS PROVIDED BY THE AUTHOR AND CONTRIBUTORS ``AS IS'' AND
// ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
// ARE DISCLAIMED.  IN NO EVENT SHALL THE AUTHOR OR CONTRIBUTORS BE LIABLE
// FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
// DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS
// OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
// HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT
// LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY
// OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF
// SUCH DAMAGE.
//
// For commentary on this license please see http://www.acme.com/license.html

// modified by GPSies.com, Klaus Bechtold

// Constructor.
Clusterer = function ( map )
    {
    this.map = map;
    this.markers = [];
    this.clusters = [];
    this.timeout = null;
    this.currentZoomLevel = map.getZoom();

    this.maxVisibleMarkers = Clusterer.defaultMaxVisibleMarkers;
    this.gridSize = Clusterer.defaultGridSize;
    this.minMarkersPerCluster = Clusterer.defaultMinMarkersPerCluster;
    this.maxLinesPerInfoBox = Clusterer.defaultMaxLinesPerInfoBox;
    this.icon = Clusterer.defaultIcon;

    map.on('zoomend', function(e) {
    	Clusterer.MakeCaller( Clusterer.Display, this ) 
    });
    map.on('moveend', function(e) {
    	Clusterer.MakeCaller( Clusterer.Display, this ) 
    });
    map.on('infowindowclose', function(e) {
    	Clusterer.MakeCaller( Clusterer.PopDown, this ) 
    });

};


Clusterer.defaultMaxVisibleMarkers = 150;
Clusterer.defaultGridSize = 5;
Clusterer.defaultMinMarkersPerCluster = 5;
Clusterer.defaultMaxLinesPerInfoBox = 10;

Clusterer.defaultIcon = createMarkerIcon();

// Call this to change the cluster icon.
Clusterer.prototype.SetIcon = function ( icon )
    {
    this.icon = icon;
    };


// Changes the maximum number of visible markers before clustering kicks in.
Clusterer.prototype.SetMaxVisibleMarkers = function ( n )
    {
    this.maxVisibleMarkers = n;
    };


// Sets the minumum number of markers for a cluster.
Clusterer.prototype.SetMinMarkersPerCluster = function ( n )
    {
    this.minMarkersPerCluster = n;
    };


// Sets the maximum number of lines in an info box.
Clusterer.prototype.SetMaxLinesPerInfoBox = function ( n )
    {
    this.maxLinesPerInfoBox = n;
    };

Clusterer.prototype.ClearAll = function ( ) {
	for (var i=0, j=this.markers.length; i<j; i++) {
		this.RemoveMarker(this.markers[i]);
	}
	this.markers = [];
	this.DisplayLater();
};    

// Call this to add a marker.
Clusterer.prototype.AddMarker = function ( marker, title ) {
	
	if (marker) {
	    if ( marker.setMap != null )
	    	marker.setMap( this.map );

        marker.title = title;
        marker.onMap = false;
        this.markers.push( marker );
        
        this.DisplayLater();		
        
	}

};

// Call this to remove a marker.
Clusterer.prototype.RemoveMarker = function ( marker )
    {
    for ( var i = 0; i < this.markers.length; ++i )
	if ( this.markers[i] == marker ) {
		if (marker) {
			if ( marker.onMap )
		    	this.map.removeLayer( marker );
		    for ( var j = 0; j < this.clusters.length; ++j ) {
		    	var cluster = this.clusters[j];
				if ( cluster != null )
				    {
				    for ( var k = 0; k < cluster.markers.length; ++k )
					if ( cluster.markers[k] == marker )
					    {
					    cluster.markers[k] = null;
					    --cluster.markerCount;
					    break;
					    }
				    if ( cluster.markerCount == 0 )
					{
					this.ClearCluster( cluster );
					this.clusters[j] = null;
					}
				    else if ( cluster == this.poppedUpCluster )
					Clusterer.RePop( this );
				    }
				}
			    this.markers[i] = null;
			    break;
		    }
		}
    this.DisplayLater();
    };

// Call this to change a marker.
Clusterer.prototype.ChangeMarkerPoint = function (oldPt, newPt) {
    for ( var i = 0; i < this.markers.length; ++i ) {
		if (this.markers[i] && this.markers[i].getLatLng().equals(oldPt) ) {
		    this.markers[i].setLatLng(newPt);
		    break;
	    }
    }	
};

//Call this to remove a marker.
Clusterer.prototype.RemoveMarkerByPoint = function (pt) {
    for ( var i = 0; i < this.markers.length; ++i ) {
		if (this.markers[i] && this.markers[i].getLatLng().equals(pt) ) {
			if (clusterer.map.hasLayer(this.markers[i])) {
				clusterer.map.removeLayer(this.markers[i])
				this.markers.splice(i, 1);
			    break;
			}
	    }
    }
};

Clusterer.prototype.ChangeMarkerCoordinates = function (oldPt, newPt) {
    for (var i=0; i < this.markers.length; ++i ) {
		if (this.markers[i] && this.markers[i].getLatLng().lat == oldPt.lat && this.markers[i].getLatLng().lng == oldPt.lng) {
		    this.markers[i].setLatLng(newPt);
		    break;
	    }
    }
};

Clusterer.prototype.DisplayLater = function ()
    {
    if ( this.timeout != null )
	clearTimeout( this.timeout );
    this.timeout = setTimeout( Clusterer.MakeCaller( Clusterer.Display, this ), 50 );
    };


Clusterer.Display = function ( clusterer )
    {
    var i, j, marker, cluster;

    clearTimeout( clusterer.timeout );

    var newZoomLevel = clusterer.map.getZoom();

    if ( newZoomLevel != clusterer.currentZoomLevel )
	{
	// When the zoom level changes, we have to remove all the clusters.
	for ( i = 0; i < clusterer.clusters.length; ++i )
	    if ( clusterer.clusters[i] != null )
		{
		clusterer.ClearCluster( clusterer.clusters[i] );
		clusterer.clusters[i] = null;
		}
	clusterer.clusters.length = 0;
	clusterer.currentZoomLevel = newZoomLevel;
	}

    // Get the current bounds of the visible area.
    var bounds = clusterer.map.getBounds();

    // Expand the bounds a little, so things look smoother when scrolling
    // by small amounts.
    var sw = bounds.getSouthWest();
    var ne = bounds.getNorthEast();
    var dx = ne.lng - sw.lng;
    var dy = ne.lat - sw.lat;
    dx *= 0.10;
    dy *= 0.10;
    bounds = new L.LatLngBounds(
      new L.LatLng( sw.lat - dy, sw.lng - dx ),
      new L.LatLng( ne.lat + dy, ne.lng + dx ) );

    // Partition the markers into visible and non-visible lists.
    var visibleMarkers = [];
    var nonvisibleMarkers = [];
    
    for ( i = 0; i < clusterer.markers.length; ++i ) {
    	
		marker = clusterer.markers[i];
		
		if (marker != null) {
		    if (bounds.contains(marker.getLatLng())) {
		    	visibleMarkers.push( marker );
		    }
		    else {
		    	nonvisibleMarkers.push( marker );
		    }
		}
		
	}

    // Take down the non-visible markers.
    for ( i = 0; i < nonvisibleMarkers.length; ++i ) {
    	marker = nonvisibleMarkers[i];
		if (marker.onMap){
		    clusterer.map.removeLayer( marker );
		    marker.onMap = false;
	    }
	}

    // Take down the non-visible clusters.
    for ( i = 0; i < clusterer.clusters.length; ++i ) {
	cluster = clusterer.clusters[i];
	if ( cluster != null && ! bounds.contains( cluster.marker.getLatLng() ) && cluster.onMap )
	    {
	    clusterer.map.removeLayer( cluster.marker );
	    cluster.onMap = false;
	    }
	}

    // Clustering!  This is some complicated stuff.  We have three goals
    // here.  One, limit the number of markers & clusters displayed, so the
    // maps code doesn't slow to a crawl.  Two, when possible keep existing
    // clusters instead of replacing them with new ones, so that the app pans
    // better.  And three, of course, be CPU and memory efficient.
    if ( visibleMarkers.length > clusterer.maxVisibleMarkers )
	{
	// Add to the list of clusters by splitting up the current bounds
	// into a grid.
	var latRange = bounds.getNorthEast().lat - bounds.getSouthWest().lat;
	var latInc = latRange / clusterer.gridSize;
	var lngInc = latInc / Math.cos( ( bounds.getNorthEast().lat + bounds.getSouthWest().lat ) / 2.0 * Math.PI / 180.0 );
	for ( var lat = bounds.getSouthWest().lat; lat <= bounds.getNorthEast().lat; lat += latInc )
	    for ( var lng = bounds.getSouthWest().lng; lng <= bounds.getNorthEast().lng; lng += lngInc )
		{
		cluster = new Object();
		cluster.clusterer = clusterer;
		cluster.bounds = new L.LatLngBounds( new L.LatLng( lat, lng ), new L.LatLng( lat + latInc, lng + lngInc ) );
		cluster.markers = [];
		cluster.markerCount = 0;
		cluster.onMap = false;
		cluster.marker = null;
		clusterer.clusters.push( cluster );
		}

	// Put all the unclustered visible markers into a cluster - the first
	// one it fits in, which favors pre-existing clusters.
	for ( i = 0; i < visibleMarkers.length; ++i )
	    {
	    marker = visibleMarkers[i];
	    if ( marker != null && ! marker.inCluster )
		{
		for ( j = 0; j < clusterer.clusters.length; ++j )
		    {
		    cluster = clusterer.clusters[j];
		    if ( cluster != null && cluster.bounds.contains( marker.getLatLng() ) )
			{
			cluster.markers.push( marker );
			++cluster.markerCount;
			marker.inCluster = true;
			}
		    }
		}
	    }

	// Get rid of any clusters containing only a few markers.
	for ( i = 0; i < clusterer.clusters.length; ++i )
	    if ( clusterer.clusters[i] != null && clusterer.clusters[i].markerCount < clusterer.minMarkersPerCluster )
		{
		clusterer.ClearCluster( clusterer.clusters[i] );
		clusterer.clusters[i] = null;
		}

	// Shrink the clusters list.
	for ( i = clusterer.clusters.length - 1; i >= 0; --i )
	    if ( clusterer.clusters[i] != null )
		break;
	    else
		--clusterer.clusters.length;

	// Ok, we have our clusters.  Go through the markers in each
	// cluster and remove them from the map if they are currently up.
	for ( i = 0; i < clusterer.clusters.length; ++i )
	    {
	    cluster = clusterer.clusters[i];
	    if ( cluster != null )
		{
		for ( j = 0; j < cluster.markers.length; ++j )
		    {
		    marker = cluster.markers[j];
		    if ( marker != null && marker.onMap )
			{
			clusterer.map.removeLayer( marker );
			marker.onMap = false;
			}
		    }
		}
	}

	// Now make cluster-markers for any clusters that need one.
	for ( i = 0; i < clusterer.clusters.length; ++i )
	    {
	    cluster = clusterer.clusters[i];
	    if ( cluster != null && cluster.marker == null )
		{
		// Figure out the average coordinates of the markers in this
		// cluster.
		var xTotal = 0.0, yTotal = 0.0;
		for ( j = 0; j < cluster.markers.length; ++j )
		    {
		    marker = cluster.markers[j];
		    if ( marker != null )
			{
			xTotal += ( + marker.getLatLng().lng );
			yTotal += ( + marker.getLatLng().lat );
			}
		    }
		var location = new L.LatLng( yTotal / cluster.markerCount, xTotal / cluster.markerCount );
		marker = new L.Marker( location, { icon: clusterer.icon, title: textGroup} );
		marker.location = location;
		cluster.marker = marker;
		marker.on('click', function(e){
				// Clusterer.MakeCaller(Clusterer.PopUp, cluster);

				var zoom = clusterer.map.getZoom();
				clusterer.map.setView(e.target.location, zoom + 1);
				
				// clusterer.map.panTo(e.target.location);
				// clusterer.map.zoomIn();
				// this is not the right marker!
				// clusterer.map.setView(cluster.marker.getLatLng(), clusterer.map.getZoom()+1);
			});
		}
	    }
	}

    // Display the visible markers not already up and not in clusters.
    for ( i = 0; i < visibleMarkers.length; ++i )
	{
	marker = visibleMarkers[i];
	if ( marker != null && ! marker.onMap && ! marker.inCluster )
	    {
	    clusterer.map.addLayer( marker );
	    if ( marker.addedToMap != null )
		marker.addedToMap();
	    marker.onMap = true;
	    }
	}

    // Display the visible clusters not already up.
    for ( i = 0; i < clusterer.clusters.length; ++i )
	{
	cluster = clusterer.clusters[i];
	if ( cluster != null && ! cluster.onMap && bounds.contains( cluster.marker.getLatLng() ) )
	    {
	    clusterer.map.addLayer( cluster.marker );
	    cluster.onMap = true;
	    }
	}

    // In case a cluster is currently popped-up, re-pop to get any new
    // markers into the infobox.
    Clusterer.RePop( clusterer );
    };


Clusterer.PopUp = function ( cluster )
    {

	// map.setView(cluster.marker.getLatLng(), map.getZoom()+1);
    
/*
    var clusterer = cluster.clusterer;
    var html = '<p><a onclick=\'map.zoomIn()\' class=\'button3\'>'+textGroupZoom+'</a></p>';
    var n = 0;
    for ( var i = 0; i < cluster.markers.length; ++i )
	{
	var marker = cluster.markers[i];
	if ( marker != null )
	    {
	    ++n;
	    html += '<div>';
	    if ( marker.getIcon().smallImage != null )
		html += '<img src="' + marker.getIcon().smallImage + '" />';
	    else
		html += '<img src="' + marker.getIcon().image + '" width="' + ( marker.getIcon().iconSize.width / 2 ) + '" height="' + ( marker.getIcon().iconSize.height / 2 ) + '" />';
	    html+=' '+marker.title+'</div>';
	    if ( n == clusterer.maxLinesPerInfoBox - 1 && cluster.markerCount > clusterer.maxLinesPerInfoBox  )
		{
		html += '<br /><p><a onclick=\'map.zoomIn()\' class=\'button3\'>... '+(cluster.markerCount-n)+' '+textGroupMore+'</a></p>';
		break;
		}
	    }
	}
    clusterer.map.closeInfoWindow();
    cluster.marker.openInfoWindowHtml( html );
    clusterer.poppedUpCluster = cluster;
*/    
    };


Clusterer.RePop = function ( clusterer )
    {
    if ( clusterer.poppedUpCluster != null )
	Clusterer.PopUp( clusterer.poppedUpCluster );
    };


Clusterer.PopDown = function ( clusterer )
    {
    clusterer.poppedUpCluster = null;
    };
    
Clusterer.prototype.ClearCluster = function ( cluster )
    {
    var i, marker;

    for ( i = 0; i < cluster.markers.length; ++i )
	if ( cluster.markers[i] != null )
	    {
	    cluster.markers[i].inCluster = false;
	    cluster.markers[i] = null;
	    }
    cluster.markers.length = 0;
    cluster.markerCount = 0;
    /*
    if ( cluster == this.poppedUpCluster )
	this.map.closeInfoWindow();
    */
    if ( cluster.onMap )
	{
	this.map.removeLayer( cluster.marker );
	cluster.onMap = false;
	}
    };


// This returns a function closure that calls the given routine with the
// specified arg.
Clusterer.MakeCaller = function ( func, arg )
    {
    return function () { func( arg ); };
    };


// Augment L.Marker so it handles markers that have been created but
// not yet addOverlayed.

L.Marker.prototype.setMap = function ( map )
    {
    this.map = map;
    };

L.Marker.prototype.addedToMap = function ()
    {
    this.map = null;
    };

L.Marker.prototype.origOpenInfoWindow = L.Marker.prototype.openInfoWindow;
L.Marker.prototype.openInfoWindow = function ( node, opts )
    {
    if ( this.map != null )
	return this.map.openInfoWindow( this.getLatLng(), node, opts );
    else
	return this.origOpenInfoWindow( node, opts );
    };

L.Marker.prototype.origOpenInfoWindowHtml = L.Marker.prototype.openInfoWindowHtml;
L.Marker.prototype.openInfoWindowHtml = function ( html, opts )
    {
    if ( this.map != null )
	return this.map.openInfoWindowHtml( this.getLatLng(), html, opts );
    else
	return this.origOpenInfoWindowHtml( html, opts );
    };

L.Marker.prototype.origOpenInfoWindowTabs = L.Marker.prototype.openInfoWindowTabs;
L.Marker.prototype.openInfoWindowTabs = function ( tabNodes, opts )
    {
    if ( this.map != null )
	return this.map.openInfoWindowTabs( this.getLatLng(), tabNodes, opts );
    else
	return this.origOpenInfoWindowTabs( tabNodes, opts );
    };

L.Marker.prototype.origOpenInfoWindowTabsHtml = L.Marker.prototype.openInfoWindowTabsHtml;
L.Marker.prototype.openInfoWindowTabsHtml = function ( tabHtmls, opts )
    {
    if ( this.map != null )
	return this.map.openInfoWindowTabsHtml( this.getLatLng(), tabHtmls, opts );
    else
	return this.origOpenInfoWindowTabsHtml( tabHtmls, opts );
    };

L.Marker.prototype.origShowMapBlowup = L.Marker.prototype.showMapBlowup;
L.Marker.prototype.showMapBlowup = function ( opts )
    {
    if ( this.map != null )
	return this.map.showMapBlowup( this.getLatLng(), opts );
    else
	return this.origShowMapBlowup( opts );
    };

function changeMarkerPoint(oldPt, newPt) {
	changePoint(oldPt, newPt);
	clusterer.ChangeMarkerPoint(oldPt, newPt);
}   

function changePoint(oldPt, newPt) {
	var index = 0;
	for (var i=0; i<segmentList.length; i++) {
		if (segmentList[i].segmentPoint == oldPt) {
			segmentList[i].segmentPoint = newPt;
			index = i;
			break;
		}
	}
	return index;
}

/*
Copyright (c) 2014 Dominik Moritz

This file is part of the leaflet locate control. It is licensed under the MIT license.
You can find the project at: https://github.com/domoritz/leaflet-locatecontrol
*/
L.Control.Locate = L.Control.extend({
    options: {
        position: 'topleft',
        drawCircle: true,
        follow: false,  // follow with zoom and pan the user's location
        stopFollowingOnDrag: false, // if follow is true, stop following when map is dragged (deprecated)
        // range circle
        circleStyle: {
            color: '#136AEC',
            fillColor: '#136AEC',
            fillOpacity: 0.15,
            weight: 2,
            opacity: 0.5
        },
        // inner marker
        markerStyle: {
            color: '#136AEC',
            fillColor: '#2A93EE',
            fillOpacity: 0.7,
            weight: 2,
            opacity: 0.9,
            radius: 5
        },
        // changes to range circle and inner marker while following
        // it is only necessary to provide the things that should change
        followCircleStyle: {},
        followMarkerStyle: {
            //color: '#FFA500',
            //fillColor: '#FFB000'
        },
        circlePadding: [0, 0],
        metric: true,
        onLocationError: function(err) {
            // this event is called in case of any location error
            // that is not a time out error.
            alert(err.message);
        },
        onLocationOutsideMapBounds: function(control) {
            // this event is repeatedly called when the location changes
            control.stopLocate();
            alert(context.options.strings.outsideMapBoundsMsg);
        },
        setView: true, // automatically sets the map view to the user's location
        strings: {
            title: "Show me where I am",
            popup: "You are within {distance} {unit} from this point",
            outsideMapBoundsMsg: "You seem located outside the boundaries of the map"
        },
        locateOptions: {
            maxZoom: Infinity,
            watch: true  // if you overwrite this, visualization cannot be updated
        }
    },

    onAdd: function (map) {
        var container = L.DomUtil.create('div',
            'leaflet-control-locate leaflet-bar leaflet-control');

        var self = this;
        this._layer = new L.LayerGroup();
        this._layer.addTo(map);
        this._event = undefined;

        this._locateOptions = this.options.locateOptions;
        L.extend(this._locateOptions, this.options.locateOptions);
        L.extend(this._locateOptions, {
            setView: false // have to set this to false because we have to
                           // do setView manually
        });

        // extend the follow marker style and circle from the normal style
        var tmp = {};
        L.extend(tmp, this.options.markerStyle, this.options.followMarkerStyle);
        this.options.followMarkerStyle = tmp;
        tmp = {};
        L.extend(tmp, this.options.circleStyle, this.options.followCircleStyle);
        this.options.followCircleStyle = tmp;

        var link = L.DomUtil.create('a', 'leaflet-bar-part leaflet-bar-part-single', container);
        link.href = '#';
        link.title = this.options.strings.title;

        L.DomEvent
            .on(link, 'click', L.DomEvent.stopPropagation)
            .on(link, 'click', L.DomEvent.preventDefault)
            .on(link, 'click', function() {
                if (self._active && (self._event === undefined || map.getBounds().contains(self._event.latlng) || !self.options.setView ||
                    isOutsideMapBounds())) {
                    stopLocate();
                } else {
                    locate();
                }
            })
            .on(link, 'dblclick', L.DomEvent.stopPropagation);

        var locate = function () {
            if (self.options.setView) {
                self._locateOnNextLocationFound = true;
            }
            if(!self._active) {
                map.locate(self._locateOptions);
            }
            self._active = true;
            if (self.options.follow) {
                startFollowing();
            }
            if (!self._event) {
                L.DomUtil.addClass(self._container, "requesting");
                L.DomUtil.removeClass(self._container, "active");
                L.DomUtil.removeClass(self._container, "following");
            } else {
                visualizeLocation();
            }
        };

        var onLocationFound = function (e) {
            // no need to do anything if the location has not changed
            if (self._event &&
                (self._event.latlng.lat === e.latlng.lat &&
                 self._event.latlng.lng === e.latlng.lng &&
                 self._event.accuracy === e.accuracy)) {
                return;
            }

            if (!self._active) {
                return;
            }

            self._event = e;

            if (self.options.follow && self._following) {
                self._locateOnNextLocationFound = true;
            }

            visualizeLocation();
        };

        var startFollowing = function() {
            map.fire('startfollowing', self);
            self._following = true;
            if (self.options.stopFollowingOnDrag) {
                map.on('dragstart', stopFollowing);
            }
        };

        var stopFollowing = function() {
            map.fire('stopfollowing', self);
            self._following = false;
            if (self.options.stopFollowingOnDrag) {
                map.off('dragstart', stopFollowing);
            }
            visualizeLocation();
        };

        var isOutsideMapBounds = function () {
            if (self._event === undefined)
                return false;
            return map.options.maxBounds &&
                !map.options.maxBounds.contains(self._event.latlng);
        };

        var visualizeLocation = function() {
            if (self._event.accuracy === undefined)
                self._event.accuracy = 0;

            var radius = self._event.accuracy;
            if (self._locateOnNextLocationFound) {
                if (isOutsideMapBounds()) {
                    self.options.onLocationOutsideMapBounds(self);
                } else {
                    map.fitBounds(self._event.bounds, {
                        padding: self.options.circlePadding,
                        maxZoom: self._locateOptions.maxZoom
                    });
                }
                self._locateOnNextLocationFound = false;
            }

            // circle with the radius of the location's accuracy
            var style, o;
            if (self.options.drawCircle) {
                if (self._following) {
                    style = self.options.followCircleStyle;
                } else {
                    style = self.options.circleStyle;
                }

                if (!self._circle) {
                    self._circle = L.circle(self._event.latlng, radius, style)
                        .addTo(self._layer);
                } else {
                    self._circle.setLatLng(self._event.latlng).setRadius(radius);
                    for (o in style) {
                        self._circle.options[o] = style[o];
                    }
                }
            }

            var distance, unit;
            if (self.options.metric) {
                distance = radius.toFixed(0);
                unit = "meters";
            } else {
                distance = (radius * 3.2808399).toFixed(0);
                unit = "feet";
            }

            // small inner marker
            var mStyle;
            if (self._following) {
                mStyle = self.options.followMarkerStyle;
            } else {
                mStyle = self.options.markerStyle;
            }

            var t = self.options.strings.popup;
            if (!self._circleMarker) {
                self._circleMarker = L.circleMarker(self._event.latlng, mStyle)
                    .bindPopup(L.Util.template(t, {distance: distance, unit: unit}))
                    .addTo(self._layer);
            } else {
                self._circleMarker.setLatLng(self._event.latlng)
                    .bindPopup(L.Util.template(t, {distance: distance, unit: unit}))
                    ._popup.setLatLng(self._event.latlng);
                for (o in mStyle) {
                    self._circleMarker.options[o] = mStyle[o];
                }
            }

            if (!self._container)
                return;
            if (self._following) {
                L.DomUtil.removeClass(self._container, "requesting");
                L.DomUtil.addClass(self._container, "active");
                L.DomUtil.addClass(self._container, "following");
            } else {
                L.DomUtil.removeClass(self._container, "requesting");
                L.DomUtil.addClass(self._container, "active");
                L.DomUtil.removeClass(self._container, "following");
            }
        };

        var resetVariables = function() {
            self._active = false;
            self._locateOnNextLocationFound = self.options.setView;
            self._following = false;
        };

        resetVariables();

        var stopLocate = function() {
            map.stopLocate();
            map.off('dragstart', stopFollowing);

            L.DomUtil.removeClass(self._container, "requesting");
            L.DomUtil.removeClass(self._container, "active");
            L.DomUtil.removeClass(self._container, "following");
            resetVariables();

            self._layer.clearLayers();
            self._circleMarker = undefined;
            self._circle = undefined;
        };

        var onLocationError = function (err) {
            // ignore time out error if the location is watched
            if (err.code == 3 && this._locateOptions.watch) {
                return;
            }

            stopLocate();
            self.options.onLocationError(err);
        };

        // event hooks
        map.on('locationfound', onLocationFound, self);
        map.on('locationerror', onLocationError, self);

        // make locate functions available to outside world
        this.locate = locate;
        this.stopLocate = stopLocate;
        this.stopFollowing = stopFollowing;

        return container;
    }
});

L.Map.addInitHook(function () {
    if (this.options.locateControl) {
        this.locateControl = L.control.locate();
        this.addControl(this.locateControl);
    }
});

L.control.locate = function (options) {
    return new L.Control.Locate(options);
};

(function (factory) {
	// Packaging/modules magic dance
	var L;
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(['leaflet'], factory);
	} else if (typeof module !== 'undefined') {
		// Node/CommonJS
		L = require('leaflet');
		module.exports = factory(L);
	} else {
		// Browser globals
		if (typeof window.L === 'undefined')
			throw 'Leaflet must be loaded first';
		factory(window.L);
	}
}(function (L) {
	'use strict';
	L.Control.Geocoder = L.Control.extend({
		options: {
			showResultIcons: false,
			collapsed: true,
			expand: 'click',
			position: 'topright',
			placeholder: 'Search...',
			errorMessage: 'Nothing found.'
		},

		_callbackId: 0,

		initialize: function (options) {
			L.Util.setOptions(this, options);
			if (!this.options.geocoder) {
				this.options.geocoder = new L.Control.Geocoder.Nominatim();
			}
		},

		onAdd: function (map) {
			var className = 'leaflet-control-geocoder',
			    container = L.DomUtil.create('div', className + ' leaflet-bar'),
			    icon = L.DomUtil.create('a', 'leaflet-control-geocoder-icon', container),
			    form = this._form = L.DomUtil.create('form', className + '-form', container),
			    input;

			icon.innerHTML = '&nbsp;';
			icon.href = 'javascript:void(0);';
			this._map = map;
			this._container = container;
			input = this._input = L.DomUtil.create('input');
			input.type = 'text';
			input.placeholder = this.options.placeholder;

			L.DomEvent.addListener(input, 'keydown', this._keydown, this);
			//L.DomEvent.addListener(input, 'onpaste', this._clearResults, this);
			//L.DomEvent.addListener(input, 'oninput', this._clearResults, this);

			this._errorElement = document.createElement('div');
			this._errorElement.className = className + '-form-no-error';
			this._errorElement.innerHTML = this.options.errorMessage;

			this._alts = L.DomUtil.create('ul', className + '-alternatives leaflet-control-geocoder-alternatives-minimized');

			form.appendChild(input);
			this._container.appendChild(this._errorElement);
			container.appendChild(this._alts);

			L.DomEvent.addListener(form, 'submit', this._geocode, this);

			if (this.options.collapsed) {
				if (this.options.expand === 'click') {
					L.DomEvent.addListener(icon, 'click', function(e) {
						// TODO: touch
						if (e.button === 0 && e.detail !== 2) {
							this._toggle();
						}
					}, this);
				} else {
					L.DomEvent.addListener(icon, 'mouseover', this._expand, this);
					L.DomEvent.addListener(icon, 'mouseout', this._collapse, this);
					this._map.on('movestart', this._collapse, this);
				}
			} else {
				this._expand();
			}

			L.DomEvent.disableClickPropagation(container);

			return container;
		},

		_geocodeResult: function (results) {
			L.DomUtil.removeClass(this._container, 'leaflet-control-geocoder-throbber');
			if (results.length === 1) {
				this._geocodeResultSelected(results[0]);
			} else if (results.length > 0) {
				this._alts.innerHTML = '';
				this._results = results;
				L.DomUtil.removeClass(this._alts, 'leaflet-control-geocoder-alternatives-minimized');
				for (var i = 0; i < results.length; i++) {
					this._alts.appendChild(this._createAlt(results[i], i));
				}
			} else {
				L.DomUtil.addClass(this._errorElement, 'leaflet-control-geocoder-error');
			}
		},

		markGeocode: function(result) {
			this._map.fitBounds(result.bbox);

			if (this._geocodeMarker) {
				this._map.removeLayer(this._geocodeMarker);
			}

			this._geocodeMarker = new L.Marker(result.center)
				.bindPopup(result.html || result.name)
				.addTo(this._map)
				.openPopup();

			return this;
		},

		_geocode: function(event) {
			L.DomEvent.preventDefault(event);

			L.DomUtil.addClass(this._container, 'leaflet-control-geocoder-throbber');
			this._clearResults();
			this.options.geocoder.geocode(this._input.value, this._geocodeResult, this);

			return false;
		},

		_geocodeResultSelected: function(result) {
			if (this.options.collapsed) {
				this._collapse();
			} else {
				this._clearResults();
			}
			this.markGeocode(result);
		},

		_toggle: function() {
			if (this._container.className.indexOf('leaflet-control-geocoder-expanded') >= 0) {
				this._collapse();
			} else {
				this._expand();
			}
		},

		_expand: function () {
			L.DomUtil.addClass(this._container, 'leaflet-control-geocoder-expanded');
			this._input.select();
		},

		_collapse: function () {
			this._container.className = this._container.className.replace(' leaflet-control-geocoder-expanded', '');
			L.DomUtil.addClass(this._alts, 'leaflet-control-geocoder-alternatives-minimized');
			L.DomUtil.removeClass(this._errorElement, 'leaflet-control-geocoder-error');
		},

		_clearResults: function () {
			L.DomUtil.addClass(this._alts, 'leaflet-control-geocoder-alternatives-minimized');
			this._selection = null;
			L.DomUtil.removeClass(this._errorElement, 'leaflet-control-geocoder-error');
		},

		_createAlt: function(result, index) {
			var li = L.DomUtil.create('li'),
				a = L.DomUtil.create('a', '', li),
			    icon = this.options.showResultIcons && result.icon ? L.DomUtil.create('img', '', a) : null,
			    text = result.html ? undefined : document.createTextNode(result.name),
			    clickHandler = function clickHandler(e) {
					L.DomEvent.preventDefault(e);
					this._geocodeResultSelected(result);
				};

			if (icon) {
				icon.src = result.icon;
			}

			li.setAttribute('data-result-index', index);

			if (result.html) {
				a.innerHTML = result.html;
			} else {
				a.appendChild(text);
			}

			L.DomEvent.addListener(a, 'click', clickHandler, this);
			L.DomEvent.addListener(li, 'click', clickHandler, this);

			return li;
		},

		_keydown: function(e) {
			var _this = this,
			    select = function select(dir) {
					if (_this._selection) {
						L.DomUtil.removeClass(_this._selection, 'leaflet-control-geocoder-selected');
						_this._selection = _this._selection[dir > 0 ? 'nextSibling' : 'previousSibling'];
					}
					if (!_this._selection) {
						_this._selection = _this._alts[dir > 0 ? 'firstChild' : 'lastChild'];
					}

					if (_this._selection) {
						L.DomUtil.addClass(_this._selection, 'leaflet-control-geocoder-selected');
					}
				};

			switch (e.keyCode) {
			// Escape
			case 27:
				if (this.options.collapsed) {
					this._collapse();
				}
				break;
			// Up
			case 38:
				select(-1);
				L.DomEvent.preventDefault(e);
				break;
			// Up
			case 40:
				select(1);
				L.DomEvent.preventDefault(e);
				break;
			// Enter
			case 13:
				if (this._selection) {
					var index = parseInt(this._selection.getAttribute('data-result-index'), 10);
					this._geocodeResultSelected(this._results[index]);
					this._clearResults();
					L.DomEvent.preventDefault(e);
				}
			}
			return true;
		}
	});

	L.Control.geocoder = function(options) {
		return new L.Control.Geocoder(options);
	};

	L.Control.Geocoder.callbackId = 0;
	L.Control.Geocoder.jsonp = function(url, params, callback, context, jsonpParam) {
		var callbackId = '_l_geocoder_' + (L.Control.Geocoder.callbackId++);
		params[jsonpParam || 'callback'] = callbackId;
		window[callbackId] = L.Util.bind(callback, context);
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = url + L.Util.getParamString(params);
		script.id = callbackId;
		document.getElementsByTagName('head')[0].appendChild(script);
	};
	L.Control.Geocoder.getJSON = function(url, params, callback) {
		var xmlHttp = new XMLHttpRequest();
		xmlHttp.onreadystatechange = function () {
			if (xmlHttp.readyState != 4){
				return;
			}
			if (xmlHttp.status != 200 && xmlHttp.status != 304){
				callback('');
				return;
			}
			callback(JSON.parse(xmlHttp.response));
		};
		xmlHttp.open( "GET", url + L.Util.getParamString(params), true);
		xmlHttp.setRequestHeader("Accept", "application/json");
		xmlHttp.send(null);
	};

	L.Control.Geocoder.template = function (str, data, htmlEscape) {
		return str.replace(/\{ *([\w_]+) *\}/g, function (str, key) {
			var value = data[key];
			if (value === undefined) {
				value = '';
			} else if (typeof value === 'function') {
				value = value(data);
			}
			return L.Control.Geocoder.htmlEscape(value);
		});
	};

	// Adapted from handlebars.js
	// https://github.com/wycats/handlebars.js/
	L.Control.Geocoder.htmlEscape = (function() {
		var badChars = /[&<>"'`]/g;
		var possible = /[&<>"'`]/;
		var escape = {
		  '&': '&amp;',
		  '<': '&lt;',
		  '>': '&gt;',
		  '"': '&quot;',
		  '\'': '&#x27;',
		  '`': '&#x60;'
		};

		function escapeChar(chr) {
		  return escape[chr];
		}

		return function(string) {
			if (string == null) {
				return '';
			} else if (!string) {
				return string + '';
			}

			// Force a string conversion as this will be done by the append regardless and
			// the regex test will do this transparently behind the scenes, causing issues if
			// an object's to string has escaped characters in it.
			string = '' + string;

			if (!possible.test(string)) {
				return string;
			}
			return string.replace(badChars, escapeChar);
		};
	})();

	L.Control.Geocoder.Nominatim = L.Class.extend({
		options: {
			serviceUrl: '//nominatim.openstreetmap.org/',
			geocodingQueryParams: {},
			reverseQueryParams: {},
			htmlTemplate: function(r) {
				var a = r.address,
					parts = [];
				if (a.road || a.building) {
					parts.push('{building} {road} {house_number}');
				}

				if (a.city || a.town || a.village) {
					parts.push('<span class="' + (parts.length > 0 ? 'leaflet-control-geocoder-address-detail' : '') +
						'">{postcode} {city} {town} {village}</span>');
				}

				if (a.state || a.country) {
					parts.push('<span class="' + (parts.length > 0 ? 'leaflet-control-geocoder-address-context' : '') +
						'">{state} {country}</span>');
				}

				return L.Control.Geocoder.template(parts.join('<br/>'), a, true);
			}
		},

		initialize: function(options) {
			L.Util.setOptions(this, options);
		},

		geocode: function(query, cb, context) {
			L.Control.Geocoder.jsonp(this.options.serviceUrl + 'search/', L.extend({
				q: query,
				limit: 5,
				format: 'json',
				addressdetails: 1
			}, this.options.geocodingQueryParams),
			function(data) {
				var results = [];
				for (var i = data.length - 1; i >= 0; i--) {
					var bbox = data[i].boundingbox;
					for (var j = 0; j < 4; j++) bbox[j] = parseFloat(bbox[j]);
					results[i] = {
						icon: data[i].icon,
						name: data[i].display_name,
						html: this.options.htmlTemplate ?
							this.options.htmlTemplate(data[i])
							: undefined,
						bbox: L.latLngBounds([bbox[0], bbox[2]], [bbox[1], bbox[3]]),
						center: L.latLng(data[i].lat, data[i].lon),
						properties: data[i]
					};
				}
				cb.call(context, results);
			}, this, 'json_callback');
		},

		reverse: function(location, scale, cb, context) {
			L.Control.Geocoder.jsonp(this.options.serviceUrl + 'reverse/', L.extend({
				lat: location.lat,
				lon: location.lng,
				zoom: Math.round(Math.log(scale / 256) / Math.log(2)),
				addressdetails: 1,
				format: 'json'
			}, this.options.reverseQueryParams), function(data) {
				var result = [],
				    loc;

				if (data && data.lat && data.lon) {
					loc = L.latLng(data.lat, data.lon);
					result.push({
						name: data.display_name,
						html: this.options.htmlTemplate ?
							this.options.htmlTemplate(data)
							: undefined,
						center: loc,
						bounds: L.latLngBounds(loc, loc),
						properties: data
					});
				}

				cb.call(context, result);
			}, this, 'json_callback');
		}
	});

	L.Control.Geocoder.nominatim = function(options) {
		return new L.Control.Geocoder.Nominatim(options);
	};

	L.Control.Geocoder.Bing = L.Class.extend({
		initialize: function(key) {
			this.key = key;
		},

		geocode : function (query, cb, context) {
			L.Control.Geocoder.jsonp('//dev.virtualearth.net/REST/v1/Locations', {
				query: query,
				key : this.key
			}, function(data) {
				var results = [];
				if( data.resourceSets.length > 0 ){
					for (var i = data.resourceSets[0].resources.length - 1; i >= 0; i--) {
						var resource = data.resourceSets[0].resources[i],
							bbox = resource.bbox;
						results[i] = {
							name: resource.name,
							bbox: L.latLngBounds([bbox[0], bbox[1]], [bbox[2], bbox[3]]),
							center: L.latLng(resource.point.coordinates)
						};
					}
				}
				cb.call(context, results);
			}, this, 'jsonp');
		},

		reverse: function(location, scale, cb, context) {
			L.Control.Geocoder.jsonp('//dev.virtualearth.net/REST/v1/Locations/' + location.lat + ',' + location.lng, {
				key : this.key
			}, function(data) {
				var results = [];
				for (var i = data.resourceSets[0].resources.length - 1; i >= 0; i--) {
					var resource = data.resourceSets[0].resources[i],
						bbox = resource.bbox;
					results[i] = {
						name: resource.name,
						bbox: L.latLngBounds([bbox[0], bbox[1]], [bbox[2], bbox[3]]),
						center: L.latLng(resource.point.coordinates)
					};
				}
				cb.call(context, results);
			}, this, 'jsonp');
		}
	});

	L.Control.Geocoder.bing = function(key) {
		return new L.Control.Geocoder.Bing(key);
	};

	L.Control.Geocoder.RaveGeo = L.Class.extend({
		options: {
			querySuffix: '',
			deepSearch: true,
			wordBased: false
		},

		jsonp: function(params, callback, context) {
			var callbackId = '_l_geocoder_' + (L.Control.Geocoder.callbackId++),
				paramParts = [];
			params.prepend = callbackId + '(';
			params.append = ')';
			for (var p in params) {
				paramParts.push(p + '=' + escape(params[p]));
			}

			window[callbackId] = L.Util.bind(callback, context);
			var script = document.createElement('script');
			script.type = 'text/javascript';
			script.src = this._serviceUrl + '?' + paramParts.join('&');
			script.id = callbackId;
			document.getElementsByTagName('head')[0].appendChild(script);
		},

		initialize: function(serviceUrl, scheme, options) {
			L.Util.setOptions(this, options);

			this._serviceUrl = serviceUrl;
			this._scheme = scheme;
		},

		geocode: function(query, cb, context) {
			L.Control.Geocoder.jsonp(this._serviceUrl, {
				address: query + this.options.querySuffix,
				scheme: this._scheme,
				outputFormat: 'jsonp',
				deepSearch: this.options.deepSearch,
				wordBased: this.options.wordBased
			}, function(data) {
				var results = [];
				for (var i = data.length - 1; i >= 0; i--) {
					var r = data[i],
						c = L.latLng(r.y, r.x);
					results[i] = {
						name: r.address,
						bbox: L.latLngBounds([c]),
						center: c
					};
				}
				cb.call(context, results);
			}, this);
		}
	});

	L.Control.Geocoder.raveGeo = function(serviceUrl, scheme, options) {
		return new L.Control.Geocoder.RaveGeo(serviceUrl, scheme, options);
	};

	L.Control.Geocoder.MapQuest = L.Class.extend({
		options: {
			serviceUrl: '//www.mapquestapi.com/geocoding/v1'
		},

		initialize: function(key, options) {
			// MapQuest seems to provide URI encoded API keys,
			// so to avoid encoding them twice, we decode them here
			this._key = decodeURIComponent(key);

			L.Util.setOptions(this, options);
		},

		_formatName: function() {
			var r = [],
				i;
			for (i = 0; i < arguments.length; i++) {
				if (arguments[i]) {
					r.push(arguments[i]);
				}
			}

			return r.join(', ');
		},

		geocode: function(query, cb, context) {
			L.Control.Geocoder.jsonp(this.options.serviceUrl + '/address', {
				key: this._key,
				location: query,
				limit: 5,
				outFormat: 'json'
			}, function(data) {
				var results = [],
					loc,
					latLng;
				if (data.results && data.results[0].locations) {
					for (var i = data.results[0].locations.length - 1; i >= 0; i--) {
						loc = data.results[0].locations[i];
						latLng = L.latLng(loc.latLng);
						results[i] = {
							name: this._formatName(loc.street, loc.adminArea4, loc.adminArea3, loc.adminArea1),
							bbox: L.latLngBounds(latLng, latLng),
							center: latLng
						};
					}
				}

				cb.call(context, results);
			}, this);
		},

		reverse: function(location, scale, cb, context) {
			L.Control.Geocoder.jsonp(this.options.serviceUrl + '/reverse', {
				key: this._key,
				location: location.lat + ',' + location.lng,
				outputFormat: 'json'
			}, function(data) {
				var results = [],
					loc,
					latLng;
				if (data.results && data.results[0].locations) {
					for (var i = data.results[0].locations.length - 1; i >= 0; i--) {
						loc = data.results[0].locations[i];
						latLng = L.latLng(loc.latLng);
						results[i] = {
							name: this._formatName(loc.street, loc.adminArea4, loc.adminArea3, loc.adminArea1),
							bbox: L.latLngBounds(latLng, latLng),
							center: latLng
						};
					}
				}

				cb.call(context, results);
			}, this);
		}
	});

	L.Control.Geocoder.mapQuest = function(key, options) {
		return new L.Control.Geocoder.MapQuest(key, options);
	};

	L.Control.Geocoder.Mapbox = L.Class.extend({
		options: {
			service_url: 'https://api.tiles.mapbox.com/v4/geocode/mapbox.places-v1/'
		},

		initialize: function(access_token) {
			this._access_token = access_token;
		},

		geocode: function(query, cb, context) {
			L.Control.Geocoder.getJSON(this.options.service_url + encodeURIComponent(query) + '.json', {
				access_token: this._access_token,
			}, function(data) {
				var results = [],
				loc,
				latLng,
				latLngBounds;
				if (data.features && data.features.length) {
					for (var i = 0; i <= data.features.length - 1; i++) {
						loc = data.features[i];
						latLng = L.latLng(loc.center.reverse());
						if(loc.hasOwnProperty('bbox'))
						{
							latLngBounds = L.latLngBounds(L.latLng(loc.bbox.slice(0, 2).reverse()), L.latLng(loc.bbox.slice(2, 4).reverse()));
						}
						else
						{
							latLngBounds = L.latLngBounds(latLng, latLng);
						}
						results[i] = {
							name: loc.place_name,
							bbox: latLngBounds,
							center: latLng
						};
					}
				}

				cb.call(context, results);
			});
		},

		suggest: function(query, cb, context) {
			return this.geocode(query, cb, context);
		},

		reverse: function(location, scale, cb, context) {
			L.Control.Geocoder.getJSON(this.options.service_url + encodeURIComponent(location.lng) + ',' + encodeURIComponent(location.lat) + '.json', {
				access_token: this._access_token,
			}, function(data) {
				var results = [],
				loc,
				latLng,
				latLngBounds;
				if (data.features && data.features.length) {
					for (var i = 0; i <= data.features.length - 1; i++) {
						loc = data.features[i];
						latLng = L.latLng(loc.center.reverse());
						if(loc.hasOwnProperty('bbox'))
						{
							latLngBounds = L.latLngBounds(L.latLng(loc.bbox.slice(0, 2).reverse()), L.latLng(loc.bbox.slice(2, 4).reverse()));
						}
						else
						{
							latLngBounds = L.latLngBounds(latLng, latLng);
						}
						results[i] = {
							name: loc.place_name,
							bbox: latLngBounds,
							center: latLng
						};
					}
				}

				cb.call(context, results);
			});
		}
	});

	L.Control.Geocoder.mapbox = function(access_token) {
			return new L.Control.Geocoder.Mapbox(access_token);
	};
	
	
	L.Control.Geocoder.What3Words = L.Class.extend({
		options: {
			serviceUrl: 'http://api.what3words.com/'
		},

		initialize: function(accessToken) {
			this._accessToken = accessToken;
		},

		geocode: function(query, cb, context) {
			//get three words and make a dot based string
			L.Control.Geocoder.getJSON(this.options.serviceUrl +'w3w', {
				key: this._accessToken,
				string: query.split(/\s+/).join('.'),
			}, function(data) {
				var results = [], loc, latLng, latLngBounds;
				if (data.position && data.position.length) {
					loc = data.words;
					latLng = L.latLng(data.position[0],data.position[1]);
					latLngBounds = L.latLngBounds(latLng, latLng);
					results[0] = {
						name: loc.join('.'),
						bbox: latLngBounds,
						center: latLng
					};
				}

				cb.call(context, results);
			});
		},

		suggest: function(query, cb, context) {
			return this.geocode(query, cb, context);
		},

		reverse: function(location, scale, cb, context) {
			L.Control.Geocoder.getJSON(this.options.serviceUrl +'position', {
				key: this._accessToken,
				position: [location.lat,location.lng].join(',')
			}, function(data) {
				var results = [],loc,latLng,latLngBounds;
				if (data.position && data.position.length) {
					loc = data.words;
					latLng = L.latLng(data.position[0],data.position[1]);
					latLngBounds = L.latLngBounds(latLng, latLng);
					results[0] = {
						name: loc.join('.'),
						bbox: latLngBounds,
						center: latLng
					};
				}
				cb.call(context, results);
			});
		}
	});

	L.Control.Geocoder.what3words = function(access_token) {
		return new L.Control.Geocoder.What3Words(access_token);
	};

	L.Control.Geocoder.Google = L.Class.extend({
		options: {
			service_url: 'https://maps.googleapis.com/maps/api/geocode/json'
		},

		initialize: function(key) {
				this._key = key;
		},

		geocode: function(query, cb, context) {
			var params = {
				address: query,
			};
			if(this._key && this._key.length)
			{
				params['key'] = this._key
			}

			L.Control.Geocoder.getJSON(this.options.service_url, params, function(data) {
					var results = [],
							loc,
							latLng,
							latLngBounds;
					if (data.results && data.results.length) {
						for (var i = 0; i <= data.results.length - 1; i++) {
							loc = data.results[i];
							latLng = L.latLng(loc.geometry.location);
							latLngBounds = L.latLngBounds(L.latLng(loc.geometry.viewport.northeast), L.latLng(loc.geometry.viewport.southwest));
							results[i] = {
									name: loc.formatted_address,
									bbox: latLngBounds,
									center: latLng
							};
						}
					}

					cb.call(context, results);
			});
		},

		reverse: function(location, scale, cb, context) {
			var params = {
				latlng: encodeURIComponent(location.lat) + ',' + encodeURIComponent(location.lng)
			};
			if(this._key && this._key.length)
			{
				params['key'] = this._key
			}
			L.Control.Geocoder.getJSON(this.options.service_url, params, function(data) {
				var results = [],
						loc,
						latLng,
						latLngBounds;
				if (data.results && data.results.length) {
					for (var i = 0; i <= data.results.length - 1; i++) {
						loc = data.results[i];
						latLng = L.latLng(loc.geometry.location);
						latLngBounds = L.latLngBounds(L.latLng(loc.geometry.viewport.northeast), L.latLng(loc.geometry.viewport.southwest));
						results[i] = {
							name: loc.formatted_address,
							bbox: latLngBounds,
							center: latLng
						};
					}
				}

				cb.call(context, results);
			});
		}
	});

	L.Control.Geocoder.google = function(key) {
		return new L.Control.Geocoder.Google(key);
	};

	L.Control.Geocoder.Photon = L.Class.extend({
		options: {
			serviceUrl: '//photon.komoot.de/api/'
		},

		initialize: function(options) {
			L.setOptions(this, options);
		},

		geocode: function(query, cb, context) {
			var params = L.extend({
				q: query,
			}, this.options.geocodingQueryParams);

			L.Control.Geocoder.getJSON(this.options.serviceUrl, params, function(data) {
				var results = [],
					i,
					f,
					c,
					latLng,
					extent,
					bbox;
				if (data && data.features) {
					for (i = 0; i < data.features.length; i++) {
						f = data.features[i];
						c = f.geometry.coordinates;
						latLng = L.latLng(c[1], c[0]);
						extent = f.properties.extent;

						if (extent) {
							bbox = L.latLngBounds([extent[1], extent[0]], [extent[3], extent[2]]);
						} else {
							bbox = L.latLngBounds(latLng, latLng);
						}

						results.push({
							name: f.properties.name,
							center: latLng,
							bbox: bbox
						});
					}
				}

				cb.call(context, results);
			});
		},

		suggest: function(query, cb, context) {
			return this.geocode(query, cb, context);
		},

		reverse: function(latLng, cb, context) {
			// Not yet implemented in Photon
			// https://github.com/komoot/photon/issues/19
			cb.call(context, []);
		}
	});

	L.Control.Geocoder.photon = function(options) {
		return new L.Control.Geocoder.Photon(options);
	};

	return L.Control.Geocoder;
}));

L.Control.Fullscreen = L.Control.extend({
    options: {
        position: 'topleft',
        title: {
            'false': 'View Fullscreen',
            'true': 'Exit Fullscreen'
        }
    },

    onAdd: function (map) {
        var container = L.DomUtil.create('div', 'leaflet-control-fullscreen leaflet-bar leaflet-control');

        this.link = L.DomUtil.create('a', 'leaflet-control-fullscreen-button leaflet-bar-part', container);
        this.link.href = '#';

        this._map = map;
        this._map.on('fullscreenchange', this._toggleTitle, this);
        this._toggleTitle();

        L.DomEvent.on(this.link, 'click', this._click, this);

        return container;
    },

    _click: function (e) {
        L.DomEvent.stopPropagation(e);
        L.DomEvent.preventDefault(e);
        this._map.toggleFullscreen();
    },

    _toggleTitle: function() {
        this.link.title = this.options.title[this._map.isFullscreen()];
    }
});

L.Map.include({
    isFullscreen: function () {
        return this._isFullscreen || false;
    },

    toggleFullscreen: function () {
        var container = this.getContainer();
        if (this.isFullscreen()) {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            } else {
                L.DomUtil.removeClass(container, 'leaflet-pseudo-fullscreen');
                this._setFullscreen(false);
                this.invalidateSize();
                this.fire('fullscreenchange');
            }
        } else {
            if (container.requestFullscreen) {
                container.requestFullscreen();
            } else if (container.mozRequestFullScreen) {
                container.mozRequestFullScreen();
            } else if (container.webkitRequestFullscreen) {
                container.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
            } else if (container.msRequestFullscreen) {
                container.msRequestFullscreen();
            } else {
                L.DomUtil.addClass(container, 'leaflet-pseudo-fullscreen');
                this._setFullscreen(true);
                this.invalidateSize();
                this.fire('fullscreenchange');
            }
        }
    },

    _setFullscreen: function(fullscreen) {
        this._isFullscreen = fullscreen;
        var container = this.getContainer();
        if (fullscreen) {
            L.DomUtil.addClass(container, 'leaflet-fullscreen-on');
        } else {
            L.DomUtil.removeClass(container, 'leaflet-fullscreen-on');
        }
    },

    _onFullscreenChange: function (e) {
        var fullscreenElement =
            document.fullscreenElement ||
            document.mozFullScreenElement ||
            document.webkitFullscreenElement ||
            document.msFullscreenElement;

        if (fullscreenElement === this.getContainer() && !this._isFullscreen) {
            this._setFullscreen(true);
            this.fire('fullscreenchange');
        } else if (fullscreenElement !== this.getContainer() && this._isFullscreen) {
            this._setFullscreen(false);
            this.fire('fullscreenchange');
        }
    }
});

L.Map.mergeOptions({
    fullscreenControl: false
});

L.Map.addInitHook(function () {
    if (this.options.fullscreenControl) {
        this.fullscreenControl = new L.Control.Fullscreen();
        this.addControl(this.fullscreenControl);
    }

    var fullscreenchange;

    if ('onfullscreenchange' in document) {
        fullscreenchange = 'fullscreenchange';
    } else if ('onmozfullscreenchange' in document) {
        fullscreenchange = 'mozfullscreenchange';
    } else if ('onwebkitfullscreenchange' in document) {
        fullscreenchange = 'webkitfullscreenchange';
    } else if ('onmsfullscreenchange' in document) {
        fullscreenchange = 'MSFullscreenChange';
    }

    if (fullscreenchange) {
        var onFullscreenChange = L.bind(this._onFullscreenChange, this);

        this.whenReady(function () {
            L.DomEvent.on(document, fullscreenchange, onFullscreenChange);
        });

        this.on('unload', function () {
            L.DomEvent.off(document, fullscreenchange, onFullscreenChange);
        });
    }
});

L.control.fullscreen = function (options) {
    return new L.Control.Fullscreen(options);
};

/*
 * Google layer using Google Maps API
 */
//(function (google, L) {

L.Google = L.Class.extend({
	includes: L.Mixin.Events,

	options: {
		minZoom: 0,
		maxZoom: 18,
		tileSize: 256,
		subdomains: 'abc',
		errorTileUrl: '',
		attribution: '',
		opacity: 1,
		continuousWorld: false,
		noWrap: false,
		mapOptions: {
			backgroundColor: '#dddddd'
		}
	},

	// Possible types: SATELLITE, ROADMAP, HYBRID, TERRAIN
	initialize: function(type, options) {
		L.Util.setOptions(this, options);

		this._ready = google.maps.Map != undefined;
		if (!this._ready) L.Google.asyncWait.push(this);

		this._type = type || 'SATELLITE';
	},

	onAdd: function(map, insertAtTheBottom) {
		this._map = map;
		this._insertAtTheBottom = insertAtTheBottom;

		// create a container div for tiles
		this._initContainer();
		this._initMapObject();

		// set up events
		map.on('viewreset', this._resetCallback, this);

		this._limitedUpdate = L.Util.limitExecByInterval(this._update, 150, this);
		map.on('move', this._update, this);

		map.on('zoomanim', this._handleZoomAnim, this);

		//20px instead of 1em to avoid a slight overlap with google's attribution
		map._controlCorners['bottomright'].style.marginBottom = "20px";

		this._reset();
		this._update();
	},

	onRemove: function(map) {
		this._map._container.removeChild(this._container);
		//this._container = null;

		this._map.off('viewreset', this._resetCallback, this);

		this._map.off('move', this._update, this);

		this._map.off('zoomanim', this._handleZoomAnim, this);

		map._controlCorners['bottomright'].style.marginBottom = "0em";
		//this._map.off('moveend', this._update, this);
	},

	getAttribution: function() {
		return this.options.attribution;
	},

	setOpacity: function(opacity) {
		this.options.opacity = opacity;
		if (opacity < 1) {
			L.DomUtil.setOpacity(this._container, opacity);
		}
	},

	setElementSize: function(e, size) {
		e.style.width = size.x + "px";
		e.style.height = size.y + "px";
	},

	_initContainer: function() {
		var tilePane = this._map._container,
			first = tilePane.firstChild;

		if (!this._container) {
			this._container = L.DomUtil.create('div', 'leaflet-google-layer leaflet-top leaflet-left');
			this._container.id = "_GMapContainer_" + L.Util.stamp(this);
			this._container.style.zIndex = "auto";
		}

		tilePane.insertBefore(this._container, first);

		this.setOpacity(this.options.opacity);
		this.setElementSize(this._container, this._map.getSize());
	},

	_initMapObject: function() {
		if (!this._ready) return;
		this._google_center = new google.maps.LatLng(0, 0);
		var map = new google.maps.Map(this._container, {
		    center: this._google_center,
		    zoom: 0,
		    tilt: 0,
		    mapTypeId: google.maps.MapTypeId[this._type],
		    disableDefaultUI: true,
		    keyboardShortcuts: false,
		    draggable: false,
		    disableDoubleClickZoom: true,
		    scrollwheel: false,
		    streetViewControl: false,
		    styles: this.options.mapOptions.styles,
		    backgroundColor: this.options.mapOptions.backgroundColor
		});

		var _this = this;
		this._reposition = google.maps.event.addListenerOnce(map, "center_changed",
			function() { _this.onReposition(); });
		this._google = map;

		google.maps.event.addListenerOnce(map, "idle",
			function() { _this._checkZoomLevels(); });
	},

	_checkZoomLevels: function() {
		//setting the zoom level on the Google map may result in a different zoom level than the one requested
		//(it won't go beyond the level for which they have data).
		// verify and make sure the zoom levels on both Leaflet and Google maps are consistent
		if (this._google.getZoom() !== this._map.getZoom()) {
			//zoom levels are out of sync. Set the leaflet zoom level to match the google one
			this._map.setZoom( this._google.getZoom() );
		}
	},

	_resetCallback: function(e) {
		this._reset(e.hard);
	},

	_reset: function(clearOldContainer) {
		this._initContainer();
	},

	_update: function(e) {
		if (!this._google) return;
		this._resize();

		var center = e && e.latlng ? e.latlng : this._map.getCenter();
		var _center = new google.maps.LatLng(center.lat, center.lng);

		this._google.setCenter(_center);
		this._google.setZoom(this._map.getZoom());

		this._checkZoomLevels();
		//this._google.fitBounds(google_bounds);
	},

	_resize: function() {
		var size = this._map.getSize();
		if (this._container.style.width == size.x &&
		    this._container.style.height == size.y)
			return;
		this.setElementSize(this._container, size);
		this.onReposition();
	},


	_handleZoomAnim: function (e) {
		var center = e.center;
		var _center = new google.maps.LatLng(center.lat, center.lng);

		this._google.setCenter(_center);
		this._google.setZoom(e.zoom);
	},


	onReposition: function() {
		if (!this._google) return;
		google.maps.event.trigger(this._google, "resize");
	}
});

L.Google.asyncWait = [];
L.Google.asyncInitialize = function() {
	var i;
	for (i = 0; i < L.Google.asyncWait.length; i++) {
		var o = L.Google.asyncWait[i];
		o._ready = true;
		if (o._container) {
			o._initMapObject();
			o._update();
		}
	}
	L.Google.asyncWait = [];
};
//})(window.google, L)

function createTrack(isSearchButton) {

	var zoomLevel = 13;
	
	var northWestTrackpoint;
	var southEastTrackpoint;
	
	if (northWestTrackpointLat != 99999 && northWestTrackpointLon != 99999 && southEastTrackpointLat != 99999 && southEastTrackpointLon != 99999) {
		northWestTrackpoint = new L.LatLng(northWestTrackpointLat, northWestTrackpointLon);
		southEastTrackpoint = new L.LatLng(southEastTrackpointLat, southEastTrackpointLon);
	}

	if (!isSearchButton && northWestTrackpoint && southEastTrackpoint) {
		bounds = new L.LatLngBounds();
		bounds.extend(northWestTrackpoint);
		bounds.extend(southEastTrackpoint);		
		loadCreateMap(zoomLevel, bounds.getCenter(), initialMapType, isSearchButton);
	}
	else {
		
		var city = $('searchField').value;
	
		var search = '';
	
		if (city != '') {
			search += city;		
		}
	
		var callback = function(data) {
			
			var point = null;
			
			if (data != null && typeof data == 'object') {
				point = new L.LatLng(parseFloat(data.lat), parseFloat(data.lon));
			}
			
			if (!point) {
	
				if ($('coordinateLat') && $('coordinateLon') && $('coordinateLat').value != '' && $('coordinateLon').value != '') {
					point = new L.LatLng(parseFloat($('coordinateLat').value),parseFloat($('coordinateLon').value));
				}
				
				if (point && point.lat != 0 && point.lng != 0) {
					loadCreateMap(initialZoomLevel, point, initialMapType, isSearchButton);
				}
				else {
					loadCreateMap(initialZoomLevel, point, initialMapType, isSearchButton);
				}
				
			}
			else {
				loadCreateMap(zoomLevel, point, initialMapType, isSearchButton);
			}	
			
		}
		
		Gpsies.getGeocoderLatLng(search, callback);

	}
	
	return false;
	
}

function loadCreateTrack() {

	var city = $('searchField').value;

	var fileId = $('fileId').value;
	
	if (fileId) {
		
		var callback = function(data) {

			if (data) {
				
				var json = eval('(' + data + ')');

				if (json.features) {
					
					var feature;
					var geometry;
					var coordinates;
					var bbox;
					
					for (i=0; i<json.features.length; i++) {
						
						feature = json.features[i];
						
						// corrected and valid GeoJSON format
						if (feature && feature.type == 'Feature') {
							if (feature.geometry) {
								geometry = feature.geometry;
								if (geometry && geometry.coordinates && geometry.bbox && geometry.type == 'MultiLineString') {
									bbox = geometry.bbox;
									coordinates = geometry.coordinates;
								}
							}
						}
						// legagy invalid GeoJSON format
						else if (feature && feature.coordinates && feature.bbox && feature.type == 'MultiLineString') {
							bbox = feature.bbox;
							coordinates = feature.coordinates;						
						}
						
						loadCreateTrackProcess(coordinates, bbox);
						
						coordinates = null;
						bbox = null;
						
					}
					
				}
			}
			
			if (bounds && bounds.toBBoxString() == '-Infinity,-Infinity,Infinity,Infinity' && waypointsArray && waypointsArray.length > 0) {
				bounds = new L.LatLngBounds();
				for (var i = 0; i < waypointsArray.length; i++) {
					bounds.extend(new L.LatLng(parseFloat(waypointsArray[i].lat), parseFloat(waypointsArray[i].lon)));
				}
			}

			if (segmentList.length > 0 && segmentList[0] && typeof segmentList[0] == 'object') {
				loadCreateMap(10, segmentList[0].segmentPoint, initialMapType, false);
			}
			else if (waypointsArray.length > 0) {
				loadCreateMap(10, new L.LatLng(parseFloat(waypointsArray[0].lat), parseFloat(waypointsArray[0].lon)), initialMapType, false);
			}
			else {
				createTrack(false);
			}
			
		}
		
		TrackEditor.getEditorTracks(fileId, callback);
		
	}

}

function loadCreateTrackProcess(coordinates, bbox) {
	
	if (coordinates) {
		for (var i = 0; i < coordinates.length; i++) {
			for (var j = 0; j < coordinates[i].length; j++) {
				segmentList.push(new Segment(new L.LatLng(coordinates[i][j][1], coordinates[i][j][0])));
			}
		}
	}
	
	if (bbox) {
		var p1 = new L.LatLng(parseFloat(bbox[1]), parseFloat(bbox[0]));
		var p2 = new L.LatLng(parseFloat(bbox[3]), parseFloat(bbox[2]));
		if (bounds) {
			bounds.extend(p1);
			bounds.extend(p2);
		}
		else {
			bounds = new L.LatLngBounds(p1, p2);
		}
	}	
	
}

function loadCreateMap(zoomLevel, pt, mapType, isSearchButton) {

	if (!pt || (pt.lat == 0 && pt.lng == 0)) {
		pt = new L.LatLng(51.37178, 10.744629);
	}

	dblclickZoom = false;

	var isMapAlreadyExist = (typeof(map) != 'undefined');
	
	if (isMapAlreadyExist) {
		map.panTo(pt);
	}
	else {
		map = createMap('map', null, null, mapType, true);
	}

	map.addEventListener('moveend', function(e) {
		markerTimeout = window.setTimeout(showMoreMarkers, 500);
	});
	
    if (templateFileId != '') {
    	// lineColor = '#f0f';
    	bounds = null;
    	showTrackOnMap(map, templateFileId, true, false);
    }
    else {
        if (bounds && typeof bounds == 'object' && pt && bounds.contains(pt) && !isSearchButton) {
    		map.fitBounds(bounds);
    	}
        else {
        	bounds = null;
        }
    }

	textGroup = textGroupPoints;
	clusterer = new Clusterer(map);
	clusterer.SetMaxVisibleMarkers(300);
	clusterer.SetMinMarkersPerCluster(20);
	
	redrawPolyline();
	
	if (isWaypoints()) {
		var sym;
		for (var i=0, j=waypointsArray.length; i<j; i++) {
			if (waypointsArray[i].sym) {
				sym = waypointsArray[i].sym;
			}
			else {
				sym = 'generic';
			}
			waypointsArray[i].marker = createWaypointMarker(new L.LatLng(parseFloat(waypointsArray[i].lat), parseFloat(waypointsArray[i].lon)), true, sym, waypointsArray[i].name);
			waypointsArray[i].markerId = waypointsArray[i].marker._leaflet_id;
			
			waypointsArray[i].marker.bindPopup(generateWaypointHtml(waypointsArray[i]), {'maxWidth': 500});
			
		}
	}
	
	if (polyline && !bounds) {
		bounds = polyline.getBounds();
		if (bounds && !isSearchButton) {
			map.fitBounds(bounds);
		}
	}

	// workaround, if bounds are not set (map.fitBounds() / controls problem)
	try {
		if (bounds) {
			map.getCenter();
		}
		else {
			map.setView(map.getCenter(), zoomLevel)
		}
	}
	catch (e) {
		map.setView(pt, zoomLevel)
	}
	
	if (segmentList) {
		var title;
		for (var i=0; i<segmentList.length; i++) {
			if (i == 0) {
				title = 'Start';
			}
			else {
				title = '';
			}
			getCreateMarker(segmentList[i].segmentPoint, title);
		}
	}

	if (!isMapAlreadyExist) {
		
		map.on('moveend', function(e) {
			if (!draggingRectangle) {
				clusterer.DisplayLater();
			}
		});
		
		// add mouseover for elevation
		map.on('mousemove', function(e) {
			if (!draggingRectangle) {
				var point = e.latlng;
		    	if (point) {
		    		if (markerTimeout) {
		    			clearTimeout(markerTimeout);
		    		}
		    		markerTimeout = setTimeout(function() {
						updateElevation(point);
		    		}, 1000);
		    	}				
			}
	    });
	
		map.on('contextmenu', function(e) {
			undo();
		});
		
		// add click
		map.on('click', function(e) {
			if (!isDrawRectangleToggle()) {
		    	var point = e.latlng;
		    	if (point) {
		    		if (isPanTo()) {
				        map.panTo(point);
		    		}
		    		if (isWaypointMode()) {
						createWaypointMarker(point, false);
		    		}
		    		else {
		    			
						if (segmentList.length > 0 && isAutoRoute()) {
							
							// do the routing
							routeToPoint(segmentList[segmentList.length-1].segmentPoint, null, point, 'add', segmentList.length-1);

						}
						else {
							
							segmentList.push(new Segment(point));
							toggleDownloadDropdowns();
							var mrk = getCreateMarker(point, segmentList.length == 1 ? 'Start' : '');
							addUndo('add');				
							redrawPolyline();
							
						}        		
		    		}
		
		    	}
			}
	    });
	
		map.on('popupopen', function(e) {
			if (!isDrawRectangleToggle()) {
				var markerPopup = e.popup._source;
				if (markerPopup) {
					var waypoint = getWaypointById(markerPopup._leaflet_id);
					openedMarkerId = markerPopup._leaflet_id;
					if (waypoint) {
						markerPopup._waypointType = waypoint.type;
						buildWaypointSelect(markerPopup);
					}					
				}
			}
	    });
		
		map.on('preclick', function(e) {
			if (!isDrawRectangleToggle()) {
				if (openedMarkerId) {
					saveWaypointForm(openedMarkerId);
					openedMarkerId = null;
				}
			}
		});
		

		addMapControl(map, mapType);
		map.addControl(new L.Control.TrackCreator());
		map.addControl(new L.Control.TrackCreatorToggle());
		
	}
	
	toggleDownloadDropdowns();
	setTrackStatistics();
	setDistance();
	addUndo('loadCreateMap');
	
}

function routeToPoint(fromPoint, viaPoint, toPoint, action, segmentUpdateIndex) {

	/*
	console.log('segmentUpdateIndex', segmentUpdateIndex);
	console.log('fromPoint', fromPoint);
	console.log('viaPoint', viaPoint);
	console.log('toPoint', toPoint);
	*/
	
	var routingData = new RoutingData(getCheckedRadioValue('routingProvider'), routingMode, action);
	
	routingData.fromPoint = new MapCoordinate(fromPoint.lat, fromPoint.lng);
	routingData.toPoint = new MapCoordinate(toPoint.lat, toPoint.lng);
	routingData.segmentUpdateIndex = segmentUpdateIndex;
	
	var callback = function(routingData) {
		
		if (routingData != null && typeof routingData == 'object') {
			
			if (routingData.validRoute) {
				
				var _toPointJustified = new L.LatLng(parseFloat(routingData.toPointJustified.coordLat), parseFloat(routingData.toPointJustified.coordLon));
				
				var segmentRoute = new Array();
				for (var i=0, j=routingData.route.length; i < j; i++) {
					segmentRoute.push(new L.LatLng(routingData.route[i].lat, routingData.route[i].lon));
				}
				
				var segmentRouteId = generateSegmentRouteId(segmentRoute);
				putSegmentRouteById(segmentRouteId, segmentRoute);
				
				if (routingData.action == 'add') {
					
					segmentList.push(new Segment(_toPointJustified, segmentRouteId));

					toggleDownloadDropdowns();
					var mrk = getCreateMarker(_toPointJustified, segmentList.length == 1 ? 'Start' : '');
					addUndo('add routing');				
					redrawPolyline();
					
				}
				else if (routingData.action == 'remove') {
					
					if (segmentUpdateIndex > 0 && segmentList.length > segmentUpdateIndex) {
						
						var nextSegment = segmentList[segmentUpdateIndex + 1];
						
						if (nextSegment != null) {
							
							// console.log('nextSegment', nextSegment);
							
							nextSegment.segmentPoint = _toPointJustified;
							nextSegment.segmentRoute = segmentRouteId;
							
							// remove segment from segmentList
							var tmpArr = new Array();
							var index = 0;
							for (var i=0; i<segmentList.length; i++) {
								if (i != segmentUpdateIndex) {
									tmpArr.push(segmentList[i]);
								}
							}
							segmentList = tmpArr;
							
						}							
					}
					
					addUndo('remove routing');
					redrawPolyline();
					
				}
				else if (routingData.action == 'update' && routingData.segmentUpdateIndex > -1) {

					var _toPoint = new L.LatLng(parseFloat(routingData.toPoint.coordLat), parseFloat(routingData.toPoint.coordLon));
					
					segmentList[routingData.segmentUpdateIndex].segmentPoint = _toPointJustified;
					segmentList[routingData.segmentUpdateIndex].segmentRoute = segmentRouteId;
					
					// console.log('callback _toPoint', _toPoint);
					// console.log('callback _toPointJustified', _toPointJustified);
					
					toggleDownloadDropdowns();
					
					routingData.toPoint = new MapCoordinate(_toPointJustified.lat, _toPointJustified.lng);

					clusterer.ChangeMarkerCoordinates(_toPoint, _toPointJustified);
					
					addUndo('update routing');	
					redrawPolyline();
					
				}
				
			}
		
		}
		
		closeModalSpinner();
		
	}
	
	if ($('modalSpinner') && $('fadeSpinner')) {
		openModalSpinner();
	}
	
	TrackEditor.getRouting(routingData, callback);						

}

function openModalSpinner() {
	$('modalSpinner').style.display = 'block';
	$('fadeSpinner').style.display = 'block';
}

function closeModalSpinner() {
	$('modalSpinner').style.display = 'none';
	$('fadeSpinner').style.display = 'none';
}

function redrawPolyline() {

	if (map) {
		
		if (polyline != null && map.hasLayer(polyline)) {
			map.removeLayer(polyline);
		}

		if (polylineBorder != null && map.hasLayer(polylineBorder)) {
			map.removeLayer(polylineBorder);
		}
		
		if (segmentList && segmentList.length > 0) {
			
			var tmpArr = new Array();
		
			var segment;
			var pt;
			var polyArr;
			
			for (var i=0; i<segmentList.length; i++) {
				segment = segmentList[i];
				pt = segment.segmentPoint;
				polyArr = getSegmentRouteById(segment.segmentRoute);
				if (polyArr) {
					for (var j=0; j < polyArr.length; j++) {
						tmpArr.push(polyArr[j]);
					}
				}
				else if (pt) {
					tmpArr.push(pt);
				}
			}
			
			try {
				polylineBorder = L.polyline(tmpArr, {color: '#fff', opacity: lineOpacity, weight: 10}).addTo(map);
				polyline = L.polyline(tmpArr, {color: lineColor, opacity: lineOpacity}).addTo(map);
			}
			catch(e){
				console.log('Exception' + e);			
			}
			
		}	
		
		setDistance();

		if ($('isMilestonesToggle') && $('isMilestonesToggle').checked && segmentList && segmentList.length > 0) {
			pointsAtDistance();
		}
		
	}
	
}

function getSegmentRouteById(segmentRouteId) {
	if (segmentRouteId && routeSegmentMap.containsKey(segmentRouteId)) {
		return routeSegmentMap.get(segmentRouteId);
	}
}

function putSegmentRouteById(segmentRouteId, segmentRoute) {
	if (segmentRoute && segmentRoute.length > 1) {
		routeSegmentMap.put(segmentRouteId, segmentRoute);
	}
}

function generateSegmentRouteId(segmentRoute) {
	if (segmentRoute && segmentRoute.length > 1) {
		return JSON.stringify(segmentRoute[0]) + '_' + JSON.stringify(segmentRoute[segmentRoute.length-1]) + '_' + segmentRoute.length;	
	}
	else {
		return null;
	}
}

function isWaypointMode() {
	if ($('isWaypointToggle') && $('isWaypointToggle').checked) {
		return true;
	}
	return false;
}

function isPanTo() {
	if ($('isPanToToggle') && $('isPanToToggle').checked) {
		return true;
	}
	return false;
}

function isAutoRoute() {
	if ($('isAutoRouteToggle') && $('isAutoRouteToggle').checked) {
		return true;
	}
	return false;
}

function addUndo(what) {
	
	var maxUndo = 20;
	
	// max limit of points for undo functionality to avoid browser freeze
	if (segmentList.length > 4000) {
		maxUndo = 0;
		undoArray = new Array();
	}
	else {
		if (undoArray.length > maxUndo) {
			undoArray.shift();
		}
		undoArray.push(new UndoAction(JSON.stringify(segmentList)));		
	}
	
	if (undoArray.length > 1) {
		writeInnerHtml('undoCounter', ' ('+(undoArray.length - 1)+'/'+maxUndo+')');
	}
	else {
		writeInnerHtml('undoCounter', '');
	}
	
}

function undo() {
	
	resetMidPoint();
	
	if (undoArray != null && undoArray.length > 1) {

		clusterer.ClearAll();
		
		undoArray.pop();
		
		var undoAction = undoArray[undoArray.length - 1];
		
		if (undoAction) {
			
			// var _segmentList = JSON.parse(JSON.parse(undoAction.segmentList));
			var _segmentList = JSON.parse(undoAction.segmentList);

			segmentList = new Array();
			
			var _segmentRoute;
			var segmentRoute;
			var ptSegment;
			var ptRoute;
			
			for (var i=0; i <_segmentList.length; i++) {
				ptSegment = new L.LatLng(parseFloat(_segmentList[i].segmentPoint.lat), parseFloat(_segmentList[i].segmentPoint.lng));
				getCreateMarker(ptSegment, _segmentList.length == 1 ? 'Start' : '');							
				if (_segmentList[i].segmentRoute && _segmentList[i].segmentRoute != '') {
					
					segmentRoute = new Array();
					_segmentRoute = getSegmentRouteById(_segmentList[i].segmentRoute);
					
					if (_segmentRoute) {
						for (var j=0; j < _segmentRoute.length; j++) {
							ptRoute = new L.LatLng(parseFloat(_segmentRoute[j].lat), parseFloat(_segmentRoute[j].lng));
							segmentRoute.push(ptRoute);
						}
					}
					
					if (segmentRoute.length > 0) {

						var segmentRouteId = generateSegmentRouteId(segmentRoute);
						putSegmentRouteById(segmentRouteId, segmentRoute);
						
						segmentList.push(new Segment(ptSegment, segmentRouteId));
						
					}
					else {
						segmentList.push(new Segment(ptSegment));
					}
					
				}
				else {
					segmentList.push(new Segment(ptSegment));	
				}
			}
			
		}
		
	}

	redrawPolyline();
	
	var maxUndo = 20;
	// max limit of points for undo functionality to avoid browser freeze
	if (segmentList.length > 4000) {
		maxUndo = 0;
		undoArray = new Array();
	}			
	if (undoArray.length > 1) {
		writeInnerHtml('undoCounter', ' ('+(undoArray.length - 1)+'/'+maxUndo+')');
	}
	else {
		writeInnerHtml('undoCounter', '');
	}
	
}

function validateCreateTrack(what) {
	
	var isValidSegmentList = segmentList && segmentList.length > 1;
	
	var isAllowed = false;
	
	if (isValidSegmentList) {
		if (what == 'editor') {
			showProgressbar('progressbarElement1');
			buildCreatedTrackGeoJson('trackAsJsonEditor');
			buildCreatedWaypointJson('waypointAsJsonEditor');
		}
		else if (isValidSegmentList && what == 'simplifyMinimum' || what == 'simplifyAverage' || what == 'simplifyMaximum' || what == 'simplifyRouteStreet' || what == 'simplifyRouteCycle') {
			showProgressbar('progressbarElement2');
			sendCreatedTrackToServer(what);
		}
		else if (isValidSegmentList && what == 'addCueSheetToEditor' || what == 'removeCueSheetFromEditor') {
			showProgressbar('progressbarElement2');
			sendCreatedTrackToServer(what);
		}		
		else if (what == 'download') {
			buildCreatedTrackGeoJson('trackAsJsonDownload');
			buildCreatedWaypointJson('waypointAsJsonDownload');
		}
		isAllowed = true;
	}
	else if (isCreateTrack && waypointsArray != null && what == 'download') {
		buildCreatedWaypointJson('waypointAsJsonDownload');
		isAllowed = true;
	}
	else if (isCreateTrack && waypointsArray != null && waypointsArray.length > 0 && what == 'statistics') {
		isAllowed = true;
	}
	
	if (!isAllowed) {
		toggleDownloadDropdowns();
	}
	
	return isAllowed;
	
}

function buildCreatedWaypointJson(inputField) {
	
	if (waypointsArray) {
		
		if ($('waypointAsJsonEditor')) {
			
			var waypoint;

			var waypointAsJsonEditor = '{\"data": {\"waypointData": [';
			
			for (var i=0, j=waypointsArray.length; i<j; i++) {
				
				waypoint = waypointsArray[i];
				
				waypoint.pointOrder = i + 1;
				
				waypointAsJsonEditor += '{';
                waypointAsJsonEditor += '\"lat\": ' + prepareForJson(waypoint.lat) + ',';
                waypointAsJsonEditor += '\"lon\": ' + prepareForJson(waypoint.lon) + ',';
                waypointAsJsonEditor += '\"pointOrder\": ' + prepareForJson(waypoint.pointOrder) + ',';
                waypointAsJsonEditor += '\"name\": \"' + prepareForJson(defaultString(waypoint.name)) + '\",';
                waypointAsJsonEditor += '\"sym\": \"' + prepareForJson(defaultString(waypoint.sym)) + '\",';
                waypointAsJsonEditor += '\"desc\": \"' + prepareForJson(defaultString(waypoint.desc)) + '\",';
                waypointAsJsonEditor += '\"url\": \"' + prepareForJson(defaultString(waypoint.url)) + '\",';
                waypointAsJsonEditor += '\"urlname\": \"' + prepareForJson(defaultString(waypoint.urlname)) + '\",';
                waypointAsJsonEditor += '\"image\": \"' + prepareForJson(defaultString(waypoint.image)) + '\",';
                waypointAsJsonEditor += '\"type\": \"' + prepareForJson(defaultString(waypoint.type)) + '\"';
                
                if ((i+1) < j) {
                	waypointAsJsonEditor += '},';
                }
                else {
                	waypointAsJsonEditor += '}';
                }
                
			}
			
			waypointAsJsonEditor += ']}}';
			
			if ($(inputField)) {
				$(inputField).value = waypointAsJsonEditor;
			}
			
		}				
	}	
	
}

function prepareForJson(str) {
	str += '';
	str = replaceAll(str, '"', '\'');
	str = replaceAll(str, '\'', '\\\'');
	str = replaceAll(str, '\r\n', '<br />');
	str = replaceAll(str, '\n', '<br />');
	return str;
}

function buildCreatedTrackGeoJson(inputField) {

	if (segmentList && segmentList.length > 0) {

		var trackAsJsonEditor = '{\"type\": \"FeatureCollection\", \"features\": [{ \"type\": \"Feature\", \"geometry\": {\"type\": \"MultiLineString\", \"coordinates\": [[';
		
		var createdTrackArray = new Array();
		
		for (var i=0; i<segmentList.length; i++) {
			var segment = segmentList[i];
			var pt = segment.segmentPoint;
			var polyArr = getSegmentRouteById(segment.segmentRoute);
			if (polyArr) {
				for (var j=0; j < polyArr.length; j++) {
					if (polyArr[j]) {
						createdTrackArray.push(new MapPoint(polyArr[j].lat, polyArr[j].lng));
					}
				}
			}
			else if (pt) {
				createdTrackArray.push(new MapPoint(pt.lat, pt.lng));
			}
		}

		for (var i=0; i<createdTrackArray.length; i++) {
			trackAsJsonEditor += getSampleAsString(createdTrackArray[i]);
			if (i < createdTrackArray.length - 1) {
				trackAsJsonEditor += ',';
			}
		}
		
		trackAsJsonEditor += ']]}}]}';
		
		if ($(inputField)) {
			$(inputField).value = trackAsJsonEditor;
		}
		
	}
	
}

function getSampleAsString(sample) {
	return '[' + sample.lon + ', ' + sample.lat + ']';
}

function sendCreatedTrackToServer(what){
	var createdTrackArray = new Array();
	var createdWaypointArray = new Array();
	for (var i=0; i<segmentList.length; i++) {
		var segment = segmentList[i];
		var pt = segment.segmentPoint;
		var polyArr = getSegmentRouteById(segment.segmentRoute);
		if (polyArr) {
			for (var j=0; j < polyArr.length; j++) {
				if (polyArr[j]) {
					createdTrackArray.push(new MapPoint(polyArr[j].lat, polyArr[j].lng));
				}
			}
		}
		else if (pt) {
			createdTrackArray.push(new MapPoint(pt.lat, pt.lng));
		}
	}
	if (waypointsArray != null) {
		var waypoint;
		for (var i=0, j=waypointsArray.length; i<j; i++) {
			waypoint = waypointsArray[i];
			waypoint.pointOrder = i + 1;
			createdWaypointArray.push(getStorableWaypoint(waypoint));
		}
	}
	if (createdTrackArray.length > 0 || what == 'keepAlive') {
		var callback = function(data) {
			if (what == 'garmin' || what == 'falk') {
				exportToDevice(what);
			}
			else if (what == 'chart') {
				generateFlyoutChartHtml();
			}
			else if (what == 'simplifyMinimum' || what == 'simplifyAverage' || what == 'simplifyMaximum' || what == 'simplifyRouteStreet' || what == 'simplifyRouteCycle') {
				var redirectLink = createTrackAction;
				if (what == 'simplifyMinimum') {
					redirectLink += '?trackSimplification=minimum';
				}
				else if (what == 'simplifyAverage') {
					redirectLink += '?trackSimplification=average';
				}
				else if (what == 'simplifyMaximum') {
					redirectLink += '?trackSimplification=maximum';
				}
				else if (what == 'simplifyRouteStreet') {
					redirectLink += '?trackSimplification=routeStreet';
				}
				else if (what == 'simplifyRouteCycle') {
					redirectLink += '?trackSimplification=routeCycle';
				}
				window.location.href = redirectLink;
			}
			else if (what == 'addCueSheetToEditor' || what == 'removeCueSheetFromEditor') {
				var redirectLink = createTrackAction;
				if (what == 'addCueSheetToEditor' && $('maxCueSheetSize')) {
					redirectLink += '?cueSheetOnEditor=add&maxCueSheetSize=' + $('maxCueSheetSize').value;
					if ($('cueSheetBefore') && $('cueSheetBefore') != '' && $('cueSheetBefore') != '0') {
						redirectLink += '&cueSheetBefore=' + $('cueSheetBefore').value;
					}
				}
				else if (what == 'removeCueSheetFromEditor') {
					redirectLink += '?cueSheetOnEditor=remove';
				}
				window.location.href = redirectLink;
			}
		}
		TrackEditor.storeCreatedTrack(createdTrackArray, createdWaypointArray, callback);
	}
}

function createWaypointMarker(point, isRestoreMarker, waypointSym, waypointName) {
	
	var _iconName = waypointTypesArray[0].sym;
	var _iconText = 'WP ' + (waypointsArray.length + 1);
	
	if (isRestoreMarker && waypointSym && waypointName) {
		_iconName = waypointSym;
		_iconText = waypointName;		
	}
	
	var waypointIcon = createNewWaypointIcon(_iconName, _iconText);
	
	var opts = {
		'icon': waypointIcon,
		'clickable': true,
		'draggable': true
	};
	
	var marker = new L.Marker(point, opts);
	
  	// open waypoint
	marker.on('click', function(e) {
		if (marker) {
	  		var waypoint = getWaypointById(marker._leaflet_id);
			if (waypoint) {
				waypoint.marker.setPopupContent(generateWaypointHtml(waypoint), {'maxWidth': 500});
				// waypoint.marker.openPopup();
				setTrackStatistics();
			}
	  	}
  	});

	// dragstart
	marker.on('dragstart', function(e) {
		isDragging = true;
		if (marker) {
	  		marker.closePopup();	  		
		}
	});

	// dragend
	marker.on('dragend', function(e) {
		isDragging = false;
		if (marker) {
			var waypoint = getWaypointById(marker._leaflet_id);
			if (waypoint) {
				waypoint.marker = marker;
				waypoint.lat = marker.getLatLng().lat;
				waypoint.lon = marker.getLatLng().lng;
			}
		}
	});
	
  	map.addLayer(marker);

	if (!isRestoreMarker) {
		var waypoint = new Waypoint(marker._leaflet_id, marker.getLatLng().lat, marker.getLatLng().lng, waypointsArray.length + 1, 'WP ' + (waypointsArray.length + 1), waypointTypesArray[0].sym, '', '', '', '', waypointTypesArray[0].type, marker);
		waypointsArray.push(waypoint);		
		checkWaypointName(waypoint.name, waypoint.markerId);
		marker.bindPopup(generateWaypointHtml(waypoint), {'maxWidth': 500});
		marker.openPopup();
		toggleDownloadDropdowns();
		setTrackStatistics();
	}
  	
	return marker;

}

function getWaypointById(id) {
	if (id && isWaypoints()) {
		for (var i=0, j=waypointsArray.length; i<j; i++) {
			if (waypointsArray[i].markerId == id) {
				return waypointsArray[i];
			}
		}
	}
	return null;
}

function removeWaypoint(markerId) {

	if (isWaypoints()) {
		
		var tempArr = new Array();		
		var waypoint = getWaypointById(markerId);
		
		if (waypoint && waypoint.marker) {	
			
			for (var i=0, j=waypointsArray.length; i<j; i++) {
				if (waypointsArray[i].marker != waypoint.marker) {
					tempArr.push(waypointsArray[i]);
				}
			}
			
		}
		
		waypoint.marker.closePopup();
		map.removeLayer(waypoint.marker);
		waypointsArray = tempArr;		
		
		setTrackStatistics();
		
	}
	
}

function closeWaypoint(markerId) {
	
	if (isWaypoints()) {
		
		var waypoint = getWaypointById(markerId);
		
		if (waypoint && waypoint.marker) {
			// saveWaypointForm(markerId);
			waypoint.marker.closePopup();
		}
		
	}
	
}

function gotoWaypoint(markerId) {

	var latWpt = parseFloat($('latWpt').value);
	var lonWpt = parseFloat($('lonWpt').value);

	if (latWpt != NaN && lonWpt != NaN && latWpt >= -90 && latWpt <= 90 && lonWpt >= -180 && lonWpt <= 180 && latWpt != 0 && lonWpt != 0) {

		var waypoint = getWaypointById(markerId);
		
		if (waypoint) {
			
			var marker = waypoint.marker;
			marker.setLatLng(new L.LatLng(latWpt, lonWpt));
			marker.update();
			
			waypoint.marker = marker;
			waypoint.lat = latWpt;
			waypoint.lon = lonWpt;
			
			waypoint.marker.setPopupContent(generateWaypointHtml(waypoint), {'maxWidth': 500});
			buildWaypointSelect(marker);
			
		}
		
	}

}

function generateWaypointHtml(waypoint) {
	
	var name = defaultString(waypoint.name); 
	var desc = defaultString(waypoint.desc); 
	var lat = round(waypoint.marker.getLatLng().lat, 6);
	var lon = round(waypoint.marker.getLatLng().lng, 6);
	var url = defaultString(waypoint.url);
	var imageUrl = defaultString(waypoint.imageUrl);
	var markerId = defaultString(waypoint.markerId);
	
	deleteAllChildNodes($('waypointTypes'));	

	var htmlWp = '<div id="waypointDiv"><form oninput="saveWaypointForm('+markerId+')" action="javascript:void(1);" name="waypointForm" id="waypointForm"><table><tr>';
	htmlWp += '<td style="padding-right: 20px;"><label for="name">'+labelWaypointTitle+'</label><br /><input class="small" type="text" id="name" value="'+name+'" /><br /><br /><div id="waypointSelect"></div><br /><label for="desc" class="newLine">'+labelWaypointDescription+'</label><br /><textarea style="width: 200px;" id="desc">'+desc+'</textarea>';
	
	if (imagesArray) {
		htmlWp += '<br /><br /><label for="url">http:// ('+labelWebsiteUrl+')</label><br /><input class="small" type="text" id="url" value="'+url+'" />';
	}
	
	htmlWp += '<br /><br /></td><td>';

	if (imagesArray) {
		if (imageUrl == '') {
			imageUrl = 'images/no_image.png';
		}
		htmlWp += labelSelectPhoto+' <br /><img id="waypointEditorImage" src="'+imageUrl+'" class="map_img bubble_img" /><br /><span class="marginLeft"><img src="images/prev.png" onclick="changeEditorImage('+markerId+', \'prev\')" />&nbsp;&nbsp;&nbsp;<img src="images/next.png" onclick="changeEditorImage('+markerId+', \'next\')" /></span>';		
	}
	else {
		htmlWp += '<label for="url">http:// ('+labelWebsiteUrl+')</label><br /><input class="small" type="text" id="url" value="'+url+'" />';
	}
	
	htmlWp += '<br /><br /><table><tr><td><label for="latWpt">'+labelLat+'</label><br /><input class="tiny small" type="text" id="latWpt" value="'+lat+'" /></td><td></td></tr><tr><td><label for="lonWpt">'+labelLon+'</label><br /><input class="tiny small" type="text" id="lonWpt" value="'+lon+'" /></td><td><br /> <button onclick="gotoWaypoint('+markerId+')" class="' + (isRelaunch ? 'btn btn-xs' : 'controlButtonSmall') + '">Go!</button></td></tr></table><br /><br />';
	
	htmlWp += '<button onclick="closeWaypoint('+markerId+')" class="' + (isRelaunch ? 'btn btn-color btn-xs' : 'controlButtonSmall') + '">'+labelSave+'</button> <button onclick="removeWaypoint('+markerId+')" class="' + (isRelaunch ? 'btn btn-color btn-xs' : 'controlButtonSmall') + '">'+labelDelete+'</button>';
	htmlWp += '</td>';
	htmlWp += '</tr></table></form></div>';
	
	return htmlWp;
	
}

function checkWaypointName(waypointName, markerId) {
	var doReorg = false;
	for (var i=0, j=waypointsArray.length; i<j; i++) {
		if (waypointsArray[i].name == waypointName && waypointsArray[i].markerId != markerId) {
			doReorg = true;
		}
	}
	if (doReorg) {
		for (var i=0, j=waypointsArray.length; i<j; i++) {
			waypointsArray[i].pointOrder = i + 1;
			if (waypointsArray[i].name == null || waypointsArray[i].name == '' || waypointsArray[i].name.indexOf('WP ') == 0) {
				waypointsArray[i].name = 'WP ' + waypointsArray[i].pointOrder;
			}
		}
	}
}

function saveWaypointForm(markerId) {
	
	if ($('waypointForm')) {
		
		var waypoint = getWaypointById(markerId);
		
		if (waypoint) {
			
		  	if ($('name') && $('name').value != '') {
		  		waypoint.name = $('name').value;
		  	}
		  	else {
		  		waypoint.name = 'WP ' + waypoint.pointOrder;
		  	}
		  	
		  	if ($('desc')) {
		  		waypoint.desc = $('desc').value;
		  	}
		  	if ($('waypointTypes')) {
		  		var waypointTypes = $('waypointTypes');
		  		waypoint.type = waypointTypes.options[waypointTypes.options.selectedIndex].value;
			  	waypoint.sym = waypointTypes.options[waypointTypes.options.selectedIndex].id;
		  	}
		  	if ($('latWpt')) {
		  		waypoint.lat = waypoint.marker.getLatLng().lat;
		  	}
		  	if ($('lonWpt')) {
		  		waypoint.lon = waypoint.marker.getLatLng().lng;
		  	}
		  	if ($('url')) {
		  		waypoint.url = $('url').value;
		  	}
		  	
		  	checkWaypointName(waypoint.name, markerId);
		  	waypoint = getWaypointById(markerId);
		  	
		  	waypoint.marker.setIcon(createNewWaypointIcon(waypoint.sym, waypoint.name));
		  	
		}	
		
	}
	
}

function buildWaypointSelect(markerPopup) {
	
	var waypointSelect = $('waypointSelect');

	if (waypointSelect) {
	
		var type = null;
		if (markerPopup) {
			type = markerPopup._waypointType;
		}
		
		var waypointTypes = $('waypointTypes');
		
		if (waypointTypes && type) {
			
			var selectedIndex = 0;
		    for (i=0; i < waypointTypes.options.length; i++) {
		        if (waypointTypes.options[i].value == type) {
		        	selectedIndex = i;
		            break;
		        }
		    }
		    
		    waypointTypes.options.selectedIndex = selectedIndex;
		    setWaypointIcon(waypointTypes.options[waypointTypes.options.selectedIndex].id);
		    if (markerPopup) {
		    	var waypoint = getWaypointById(markerPopup._leaflet_id);
				if (waypoint) {
					waypoint.sym = waypointTypes.options[waypointTypes.options.selectedIndex].id;
				}
		    	// markerPopup.setIcon(createNewWaypointIcon(waypointTypes.options[waypointTypes.options.selectedIndex].id, $('name').value));
		    }
		    
		}
		else if (!waypointTypes) {
			
			var selectedWaypointIcon = Builder.node('img', {id: 'selectedWaypointIcon', src:'images/waypointIcons/'+waypointTypesArray[0].sym+'.png'});
			waypointSelect.appendChild(selectedWaypointIcon);
			
			var select = Builder.node('select', {id: 'waypointTypes', name:'waypointTypes', className: 'small icon-menu', style: 'width: 180px;'});		

			L.DomEvent.addListener(select, 'change', function(event) {
				setWaypointIcon(this.options[this.options.selectedIndex].id);
				if (markerPopup) {
					markerPopup.setIcon(createNewWaypointIcon(this.options[this.options.selectedIndex].id, $('name').value));
					saveWaypointForm(markerPopup._leaflet_id);
				}
			});
			
			var option;
			var selectedIndex = 0;
			var iconName;
			
			for (var i = 0, j = waypointTypesArray.length; i < j; ++i) {
				if (document.all) {
					option = Builder.node('option', {id: waypointTypesArray[i].sym, value: waypointTypesArray[i].type});
				}
				else {
					option = Builder.node('option', {style: 'background: url(images/waypointIcons/'+waypointTypesArray[i].sym+'.png) no-repeat 100% 0 transparent;', id: waypointTypesArray[i].sym, value: waypointTypesArray[i].type});
				}		
				option.appendChild(document.createTextNode(waypointTypesArray[i].text));
				
				if (type && waypointTypesArray[i].type == type) {
					selectedIndex = i;
					iconName = waypointTypesArray[i].sym;
				}
				
				select.appendChild(option);
				
			}	
			
			select.selectedIndex = selectedIndex;
			
			if (iconName) {
				setWaypointIcon(iconName);
			}
			
			waypointSelect.appendChild(selectedWaypointIcon);
			waypointSelect.appendChild(document.createTextNode(' '));
			waypointSelect.appendChild(select);
			
		}
		
	}
	
}

function setWaypointIcon(iconName) {
	if ($('selectedWaypointIcon')) {
		$('selectedWaypointIcon').src = 'images/waypointIcons/' + iconName + '.png';
	}
}

function getStorableWaypoint(waypoint) {
	return new Waypoint(waypoint.markerId, waypoint.lat, waypoint.lon, waypoint.pointOrder, waypoint.name, waypoint.sym, waypoint.desc, waypoint.url, waypoint.urlname, waypoint.image, waypoint.type);
}

function getCreateMarker(pt, title) {

	var newMarker = new L.Marker(pt, getOpts(title));

	if (segmentList != null && segmentList.length > 0) {
	
		// add mouseover
		newMarker.on('mouseover', function(e) {
		// GEvent.addListener(newMarker, 'mouseover', function() {

			if (!isWaypointMode()) {

				var thisSegment = getSegmentInArray(newMarker.getLatLng(), 'this');
				var prevSegment = getSegmentInArray(newMarker.getLatLng(), 'prev');
				var nextSegment = getSegmentInArray(newMarker.getLatLng(), 'next');
				
				var prevPoint = prevSegment && prevSegment.segmentPoint ? prevSegment.segmentPoint : null;
				var nextPoint = nextSegment && nextSegment.segmentPoint ? nextSegment.segmentPoint : null;
				
				resetMidPoint();
	
				if (prevPoint && !thisSegment.segmentRoute) {
					var midPoint = getMidPoint(prevPoint, newMarker.getLatLng());
					if (midPoint) {
						midPointMarkerPrev = new L.Marker(midPoint, getOpts(insertPointLabel));
						map.addLayer(midPointMarkerPrev);
						// dragend
						midPointMarkerPrev.on('dragend', function(e) {
							var insertPoint = midPointMarkerPrev.getLatLng();
							if (insertPoint) {
								if (isPanTo()) {
							        map.panTo(insertPoint);
				        		}
				        		insertIntoSegmentList(insertPoint, newMarker.getLatLng(), 'prev');
				        		toggleDownloadDropdowns();
								var mrk = getCreateMarker(insertPoint, segmentList.length == 1 ? 'Start' : '');
								addUndo('insert');
								resetMidPoint();
								redrawPolyline();
							}
						});
					}
				}
				
				if (nextPoint && !nextSegment.segmentRoute) {
					var midPoint = getMidPoint(newMarker.getLatLng(), nextPoint);
					if (midPoint) {
						midPointMarkerNext = new L.Marker(midPoint, getOpts(insertPointLabel));
						map.addLayer(midPointMarkerNext);
						// dragend
						midPointMarkerNext.on('dragend', function(e) {
							var insertPoint = midPointMarkerNext.getLatLng();
							if (insertPoint) {
								if (isPanTo()) {
							        map.panTo(insertPoint);
				        		}
								insertIntoSegmentList(insertPoint, newMarker.getLatLng(), 'next');
								toggleDownloadDropdowns();
								var mrk = getCreateMarker(insertPoint, segmentList.length == 1 ? 'Start' : '');
								addUndo('insert');
								resetMidPoint();
								redrawPolyline();
							}
						});
					}
				}
				
			}
		});

	}
	
	// remove click
	newMarker.on('click', function(e) {
	// GEvent.addListener(newMarker, 'click', function() {
			if (!isWaypointMode() && newMarker && !isPointOnIndex(0, newMarker.getLatLng())) {
				resetMidPoint();
				toggleDownloadDropdowns();
				var beforeRemovedPoint = removePoint(newMarker.getLatLng());
				if (beforeRemovedPoint != null) {
					addUndo('remove');
				}
				clusterer.RemoveMarker(newMarker);
				redrawPolyline();
			}
		});

	// dragstart
	newMarker.on('dragstart', function(e) {
	// GEvent.addListener(newMarker, 'dragstart', function() {
			tempPoint = newMarker.getLatLng();
		});

	// dragend
	newMarker.on('dragend', function(e) {
	// GEvent.addListener(newMarker, 'dragend', function() {
			resetMidPoint();
			if (newMarker) {
				var thisSegment = getSegmentInArray(tempPoint, 'this');
				if (thisSegment) {

					// is only one point (no routing)
					var isOneSegment = segmentList.length == 1;
					
					var isFirstSegment = !isOneSegment && segmentList[0].segmentPoint.equals(tempPoint);
					var isLastSegment = !isOneSegment && segmentList[segmentList.length - 1].segmentPoint.equals(tempPoint);
					var isInnerSegment = !isOneSegment && !isFirstSegment && !isLastSegment;
					
					// update only allowd, if both ways are implemented. This is to avoid errors.
					if (isFirstSegment || isLastSegment || !thisSegment.segmentRoute) {
						updatePoint(tempPoint, newMarker.getLatLng(), newMarker);
					}
					// restore old point
					else {
						newMarker.setLatLng(tempPoint);
					}
					
				}
				tempPoint = null;
			}
		});

	newMarker.on('contextmenu', function(e) {
		undo();
	});
	
	clusterer.AddMarker(newMarker, '');

	return newMarker;

}

function resetMidPoint() {
	if (midPointMarkerNext) {
		map.removeLayer(midPointMarkerNext);
	}
	if (midPointMarkerPrev) {
		map.removeLayer(midPointMarkerPrev);
	}
}

/*
 * calculate midpoint of great circle line between p1 & p2.
 *   see http://mathforum.org/library/drmath/view/51822.html for derivation
 */
function getMidPoint(startPoint, endPoint) {

	var lat1 = startPoint.lat;
	var lon1 = startPoint.lng;
	var lat2 = endPoint.lat;
	var lon2 = endPoint.lng;

	lat1 = lat1.toRad();
	lat2 = lat2.toRad();

	var dLon = (lon2-lon1).toRad();

	var Bx = Math.cos(lat2) * Math.cos(dLon);
	var By = Math.cos(lat2) * Math.sin(dLon);

	var lat3 = Math.atan2(Math.sin(lat1)+Math.sin(lat2), Math.sqrt((Math.cos(lat1)+Bx)*(Math.cos(lat1)+Bx) + By*By ) );
	var lon3 = lon1.toRad() + Math.atan2(By, Math.cos(lat1) + Bx);

	if (isNaN(lat3) || isNaN(lon3)) {
		return null;
	}

	return new L.LatLng(lat3.toDeg(), lon3.toDeg());

}

// extend Number object with methods for converting degrees/radians
Number.prototype.toRad = function() {  // convert degrees to radians
  return this * Math.PI / 180;
}

Number.prototype.toDeg = function() {  // convert radians to degrees (signed)
  return this * 180 / Math.PI;
}

Number.prototype.toBrng = function() {  // convert radians to degrees (as bearing: 0...360)
  return (this.toDeg()+360) % 360;
}

function getSegmentInArray(pt, which) {
	if (pt && segmentList && segmentList.length > 0) {
		for (var i=0; i<segmentList.length; i++) {
			if (segmentList[i].segmentPoint == pt) {
				if (which && which == 'prev' && i > 0) {
					return segmentList[i-1];
				}
				else if (which && which == 'next' && i < (segmentList.length - 1)) {
					return segmentList[i+1];
				}
				else if (which && which == 'this') {
					return segmentList[i];
				}
			}
		}
	}
	return null;
}

function isPointOnIndex(index, pt) {
	if (pt) {
		if (index <= segmentList.length) {
			if (segmentList[index].segmentPoint == pt) {
				return true;
			}
		}
	}
	return false;
}

function findIndexPoint(pt) {
	var index = 0;
	for (var i=0; i<segmentList.length; i++) {
		if (segmentList[i].segmentPoint == pt) {
			index = i;
			break;
		}
	}
	return index;
}

function getOpts(title) {

	var opts = new Object();
		opts.clickable = true;
		opts.draggable = true;

	if (title == '') {
		opts.icon = createPointIcon('');
	}
	else if (title == insertPointLabel) {
		opts.title = insertPointLabel;
		opts.icon = createPointIcon('Insert');
	}
	else if (title == 'Start') {
		opts.title = 'Start';
		opts.icon = createPointIcon('Start');
	}
	else if (title == 'End') {
		opts.title = 'End';
		opts.icon = createPointIcon('');
	}

	return opts;

}

function updatePoint(moveStartPt, moveEndPt, newMarker) {

	// console.log('moveStartPt', moveStartPt);
	// console.log('moveEndPt', moveEndPt);
	
	if (segmentList.length > 0 && moveEndPt && moveStartPt) {
		
		// is only one point (no routing)
		var isOneSegment = segmentList.length == 1;
		
		var isFirstSegment = !isOneSegment && segmentList[0].segmentPoint.equals(moveStartPt);
		var isLastSegment = !isOneSegment && segmentList[segmentList.length - 1].segmentPoint.equals(moveStartPt);
		var isInnerSegment = !isOneSegment && !isFirstSegment && !isLastSegment;
		
		var prevSegment = null;
		var thisSegment = null;
		var nextSegment = null;

		var segmentUpdateIndex = -1;
		
		if (!isOneSegment) {
			if (isFirstSegment) {
				thisSegment = segmentList[0];
				nextSegment = segmentList[1];
				segmentUpdateIndex = 0;
			}
			else if (isLastSegment) {
				prevSegment = segmentList[segmentList.length - 2];
				thisSegment = segmentList[segmentList.length - 1];
				segmentUpdateIndex = segmentList.length - 1;
			}
			else {
				// isInnerSegment
				segmentUpdateIndex = findIndexPoint(moveStartPt);
				if (segmentUpdateIndex > 0) {
					prevSegment = segmentList[segmentUpdateIndex - 1];
					thisSegment = segmentList[segmentUpdateIndex];
					nextSegment = segmentList[segmentUpdateIndex + 1];
				}
			}
		}
		
		var thisSegmentRouting = thisSegment != null && thisSegment.segmentRoute != null && thisSegment.segmentRoute != '';
		var nextSegmentRouting = nextSegment != null && nextSegment.segmentRoute != null && nextSegment.segmentRoute != '';
		
		/*
		// for debugging
		if (isOneSegment) {
			console.log('isOneSegment', isOneSegment);
		}
		else if (isFirstSegment) {
			console.log('isFirstSegment', isFirstSegment);
		}
		else if (isLastSegment) {
			console.log('isLastSegment', isLastSegment);
		}
		else if (isInnerSegment) {
			console.log('isInnerSegment', isInnerSegment);
		}
		
		console.log('prevSegment', prevSegment);
		console.log('thisSegment', thisSegment);
		console.log('nextSegment', nextSegment);
		*/
		
		// advantage update (routing)
		if (thisSegmentRouting || nextSegmentRouting) {

			var _fromPoint = null;
			var _viaPoint = null;
			var _toPoint = null;
			
			// update this and next routing
			if (thisSegmentRouting && nextSegmentRouting) {
				_fromPoint = prevSegment.segmentPoint;
				_viaPoint = moveEndPt;
				_toPoint = nextSegment.segmentPoint;						
			}
			else if (true) {
				_fromPoint = prevSegment.segmentPoint;
				_toPoint = moveEndPt;
			}
			else if (isUpdateMoveStartPt) {
				_fromPoint = moveEndPt;
				_toPoint = nextSegment.segmentPoint;
			}

			// do the routing
			routeToPoint(_fromPoint, _viaPoint, _toPoint, 'update', segmentUpdateIndex);
				
		}
		// simple update
		else {
			
			changePoint(moveStartPt, moveEndPt);
			
			toggleDownloadDropdowns();
			addUndo('update');
			redrawPolyline();
			
		}
		
	}
	
}

function removePoint(pt) {

	var beforePoint;
	
	if (pt) {
	
		// is only one point (no routing)
		var isOneSegment = segmentList.length == 1;
		
		var isFirstSegment = !isOneSegment && segmentList[0].segmentPoint.equals(pt);
		var isLastSegment = !isOneSegment && segmentList[segmentList.length - 1].segmentPoint.equals(pt);
		var isInnerSegment = !isOneSegment && !isFirstSegment && !isLastSegment;
		
		var prevSegment = null;
		var thisSegment = null;
		var nextSegment = null;

		var segmentRemoveIndex = -1;
		
		if (!isOneSegment) {
			if (isFirstSegment) {
				thisSegment = segmentList[0];
				nextSegment = segmentList[1];
				segmentRemoveIndex = 0;
			}
			else if (isLastSegment) {
				prevSegment = segmentList[segmentList.length - 2];
				thisSegment = segmentList[segmentList.length - 1];
				segmentRemoveIndex = segmentList.length - 1;
			}
			else {
				// isInnerSegment
				segmentRemoveIndex = findIndexPoint(pt);
				if (segmentRemoveIndex > 0 && segmentList.length > segmentRemoveIndex) {
					prevSegment = segmentList[segmentRemoveIndex - 1];
					thisSegment = segmentList[segmentRemoveIndex];
					nextSegment = segmentList[segmentRemoveIndex + 1];
				}
			}
		}
		
		// only, when this (removed point) and next point was already routed
		var doRouting = isInnerSegment && thisSegment != null && thisSegment.segmentRoute != null  && thisSegment.segmentRoute != '' && nextSegment != null && nextSegment.segmentRoute != null && nextSegment.segmentRoute != '';
		
		if (doRouting && segmentList.length > 0) {
			// do the routing
			routeToPoint(prevSegment.segmentPoint, null, nextSegment.segmentPoint, 'remove', segmentRemoveIndex);
		}
		else {
			var tmpArr = new Array();
			var index = 0;
			for (var i=0; i<segmentList.length; i++) {
				if (segmentList[i].segmentPoint != pt) {
					tmpArr.push(segmentList[i]);
				}
				else if (i > 0) {
					// save beforePoint of removed point
					beforePoint = segmentList[i-1].segmentPoint;
					index = i;
				}
			}
			segmentList = tmpArr;
			redrawPolyline();
		}

	}
	
	return beforePoint;
	
}

function insertIntoSegmentList(midPoint, orientationPoint, dir) {
	if (segmentList) {
		for (var i=0; i<segmentList.length; i++) {
			if (segmentList[i].segmentPoint == orientationPoint) {
				var index = i;
				if (dir == 'next') {
					index++;
				}
				var first = segmentList.slice(0, index);
				var last = segmentList.slice(index, segmentList.length);
				first.push(new Segment(midPoint));
				segmentList = first.concat(last);
				break;
			}
		}
	}
}

function changeEditorImage(markerId, direction) {

	var waypoint = getWaypointById(markerId);
	
	if (waypoint && imagesArray) {
		
		var imageFound = null;
		
		imageNumber = waypoint.image;
		
		if (imageNumber != null && imageNumber != '') {
			for (var i=0, j=imagesArray.length; i<j; ++i) {
				if (imageNumber == imagesArray[i].image) {
					if (direction == 'next' && (i+1 < j)) {
						imageFound = imagesArray[i+1];
						break;
					}
					else if (direction == 'prev' && (i-1 > -1)) {
						imageFound = imagesArray[i-1];
						break;
					}
				}
			}
			
			if (!imageFound) {
				if (imageNumber == imagesArray[imagesArray.length - 1].image) {
					imageFound = imagesArray[0];
				}
			}
		}
		else if (waypoint.imageUrl == '' || waypoint.imageUrl == 'images/no_image.png') {
			if (direction == 'next') {
				imageFound = imagesArray[1];
			}
			else if (direction == 'prev') {
				imageFound = imagesArray[imagesArray.length-1];
			}			
		}

		if (imageFound) {

			if (imageFound.imageUrl == 'images/no_image.png') {
				imageFound.image = '';
			}
			
			waypoint.image = imageFound.image;
			waypoint.imageUrl = imageFound.imageUrl;

			if ($('waypointEditorImage')) {
				$('waypointEditorImage').src = waypoint.imageUrl;
			}
			
		}
		else {

			// should not be possible!
			waypoint.image = null;
			waypoint.imageUrl = 'images/no_image.png';

			if ($('waypointEditorImage')) {
				$('waypointEditorImage').src = waypoint.imageUrl;
			}
			
		}
		
	}
	
}

function resetCreateTrackConfirm(text) {
	var checkCreateTrack = confirm(text);
	if (checkCreateTrack) {
		resetCreateTrack();
	}	
}

function resetCreateTrack() {

	TrackEditor.resetTrack(function(data) {});

	$('fileId').value = 'createTrack';
	$('filename').value = '';
	$('trackAsJsonEditor').value = '';
	$('waypointAsJsonEditor').value = '';
	$('trackAsJson').value = '';	
	$('speed').value = DEFAULT_SPEED;
	$('pace').value = DEFAULT_PACE;

	if (polyline != null && map.hasLayer(polyline)) {
		map.removeLayer(polyline);
	}
	
	if (polylineBorder != null && map.hasLayer(polylineBorder)) {
		map.removeLayer(polylineBorder);
	}

	if (waypointsArray && waypointsArray.length > 0) {
		for (var i=0, j=waypointsArray.length; i<j; i++) {
			if (waypointsArray[i].marker && map.hasLayer(waypointsArray[i].marker)) {
				map.removeLayer(waypointsArray[i].marker);
			}
		}
	}

	// templateFileId
	if (geoXml) {
		if (map.hasLayer(geoXml)) {
			map.removeLayer(geoXml);
		}
	}
	
	if (geoXmlBorder) {
		if (map.hasLayer(geoXmlBorder)) {
			map.removeLayer(geoXmlBorder);
		}
	}
	
	resetMidPoint();
	resetClusters();
	deleteMilestones();
	
	bounds = null;
	polyline = null;
	polylineBorder = null;
	tempPoint = null;
	tempMarker = null;
	tempWaypoint = null;
	trackDistance = 0;
	lastUpdateCounterSegmentList = 0;
	segmentList = new Array();
	markersArray = new Array();
	waypointsArray = new Array();
	undoArray = new Array();
	addUndo('resetCreateTrack');
	writeInnerHtml('undoCounter', '');
	isDragging = false;	
	routeSegmentMap = new HashMap();
	setDistance();
	toggleDownloadDropdowns();
	$('flyoutChart').innerHTML = '';
	if ($('eleBubble')) {
		writeInnerHtml('eleBubble', labelTrackpointElevation + ': 0 ' + (isMetricSystem() ? 'm' : 'ft'));
	}
	if ($('trackStatisticsTime')) {
		if (isRelaunch) {
			$('trackStatisticsTime').value = '0h 0m 0s';
		}
		else {
			writeInnerHtml('trackStatisticsTime', hours + 'h ' + mins + 'm ' + secs + 's');	
		}		
	}
	
	return false;
	
}

//http://www.frankjconry.com/?p=66
function setRectangleSelect(set) {
	
    if (set) {
    	
    	draggingRectangle = false;
        dragStart = false;
        map.dragging.disable();

        map.on('mousedown', selectMouseDown);

        map.on('mousemove', function(e) {
            if (draggingRectangle) {
                var _bounds = new L.LatLngBounds(e.latlng, dragStart);
                if (map.hasLayer(dragRectangle)) {
                	map.removeLayer(dragRectangle);
                }
                dragRectangle = L.rectangle(_bounds, {color: "#03f", weight: 1});
                map.addLayer(dragRectangle);
            }
        });

        map.on('mouseup', function(e) {
            if (draggingRectangle) {
                draggingRectangle = false;
                setRectangleSelect(false); //turn it off after one rectangle
                window.setTimeout(function(){dragRectangleCallback()}, 250);
            }
        });
        
    }
    else {
        map.off('mousedown', selectMouseDown);
        map.dragging.enable();
    }

}

function isDrawRectangleToggle() {
	return ($('isDrawRectangleToggle') && $('isDrawRectangleToggle').checked);
}

function selectMouseDown(e) {
    draggingRectangle = true;
    dragStart = e.latlng;
}

function dragRectangleCallback() {
	
	if (dragRectangle && dragRectangle.getBounds()) {
		
		var counter = 0;
		var deleteInBounds = dragRectangle.getBounds();
		
		if (isWaypoints() && isWaypointMode()) {
			if (waypointsArray && waypointsArray.length > 0) {
				for (var i=0; i<waypointsArray.length; i++) {
					if (deleteInBounds.contains(waypointsArray[i].marker.getLatLng())) {
						counter++;
					}
				}
			}
		}
		else {
			if (segmentList && segmentList.length > 0) {
				for (var i=0; i<segmentList.length; i++) {
					if (deleteInBounds.contains(segmentList[i].segmentPoint)) {
						counter++;
					}
				}
			}
		}
		
		
		var html;
		
		if (counter == 0) {
			html = '<p>'+labelSelectAndRemoveNoPointsHint+'</p>';
			html += '<p><a class="' + (isRelaunch ? 'btn btn-color btn-xs' : 'button4') + '" href="javascript:void(dragRectangle.closePopup());">'+labelCancel+'</a></p>';
		}
		else {
			html = '<p>' + replaceAll(labelSelectAndRemovePointsHint, '###', counter) + '</p>';
			html += '<p><a class="' + (isRelaunch ? 'btn btn-color btn-xs' : 'button4') + '" href="javascript:void(deletePoints());">OK</a> <a class="' + (isRelaunch ? 'btn btn-color btn-xs' : 'button3') + '" href="javascript:void(dragRectangle.closePopup());">'+labelCancel+'</a></p>';
		}
		
		dragRectangle.bindPopup(html, {'maxWidth': 500}).openPopup();
		dragRectangle.on('popupclose', function(e) {
            if ($('isDrawRectangleToggle')) {
            	$('isDrawRectangleToggle').checked = false;
            }			
			map.removeLayer(dragRectangle);
	    });	
		
	}
	
}

function deletePoints() {
	if (isWaypoints() && isWaypointMode() && waypointsArray && waypointsArray.length > 0 && dragRectangle && dragRectangle.getBounds()) {
		var deleteInBounds = dragRectangle.getBounds();
		var _waypointsArray = new Array();
		for (var i=0; i<waypointsArray.length; i++) {
			if (deleteInBounds.contains(waypointsArray[i].marker.getLatLng())) {
				map.removeLayer(waypointsArray[i].marker);
			}
			else {
				_waypointsArray.push(waypointsArray[i]);
			}
		}
		waypointsArray = _waypointsArray;
		dragRectangle.closePopup();
		addUndo('deleteWaypoints');
		setTrackStatistics();
	}
	else if (segmentList && segmentList.length > 0 && dragRectangle && dragRectangle.getBounds()) {
		var deleteInBounds = dragRectangle.getBounds();
		var _segmentList = new Array();
		for (var i=0; i<segmentList.length; i++) {
			if (deleteInBounds.contains(segmentList[i].segmentPoint)) {
				clusterer.RemoveMarkerByPoint(segmentList[i].segmentPoint);
			}
			else {
				_segmentList.push(segmentList[i]);
			}
		}
		segmentList = _segmentList;
		dragRectangle.closePopup();
		resetMidPoint();
		addUndo('deleteSegmentPoints');
		redrawPolyline();
	}
	return false;
}

function UndoAction(_segmentList) {
	this.segmentList = _segmentList;
}

function Waypoint(markerId, lat, lon, pointOrder, name, sym, desc, url, urlname, image, type, marker) {
	this.lat = lat;
    this.lon = lon;
    this.pointOrder = pointOrder;
    this.name = name;
    this.sym = sym;
    this.desc = desc;
    this.url = url;
    this.urlname = urlname;
    this.image = image;
    this.imageUrl = '';
    this.type = type;
    this.marker = marker;
    this.markerId = markerId;
}

function MapCoordinate(coordLat, coordLon, coordWorkLat, coordWorkLon, insertDir) {
	this.coordLat = coordLat;
    this.coordLon = coordLon;
    this.coordWorkLat = coordWorkLat;
    this.coordWorkLon = coordWorkLon;
    this.insertDir = insertDir;
}

function MapPoint(lat, lon) {
	this.lat = lat;
    this.lon = lon;
}

function Segment(_segmentPoint, _segmentRoute) {
	this.segmentPoint = _segmentPoint;
    this.segmentRoute = _segmentRoute;
}

function RoutingData(_routingProvider, _routingMode, _action) {
	this.routingProvider = _routingProvider;
	this.routingMode = _routingMode;
	this.action = _action;
	this.fromPoint;
	this.toPoint;
	this.segmentPoint;
	this.fromPointJustified;
	this.toPointJustified;
	this.segmentPointJustified;
	this.route;
	this.segmentUpdateIndex;
}

