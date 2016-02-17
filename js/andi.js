// andi 0.2 - mobile dev toolkit
// Written by Kendall Purser
// 2015.03.04

	// ***catch browser errors and log them
	window.onerror = function (msg, url, num, col, obj) {
		a.log("ERR(" + num + ", " + col + ") " + msg + "<br />" + url + " " + obj);
	};
	
	// ***JavaScript API***
	var a = {
		get : function (id) {
			var temp_id = document.getElementById(id);
			return temp_id;
		},
		apnd : function (id, x) {
			a.get(id).innerHTML = get(id).innerHTML + x;
		},
		ppnd : function (id, x) {
			a.get(id).innerHTML = x + get(id).innerHTML;
		},
		log : function (msg) {
			a.show("log");
			var temp = get("log").innerHTML;
			a.get("log").innerHTML = temp + "<br /> " + msg;
		},
		css : function (id,key_val) {
			for (i in key_val) {
				a.get(id).style[i] = key_val[i];
			}
		},
		show : function (id) {
			a.css(id, {"display":"block"});
		},
		hide : function (id) {
			a.css(id, {"display":"none"});
		},

		// localStorage functions
		save : function (key, value) {
			localStorage.setItem(key) = value;
		},
		read : function (key) {
			return localStorage.getItem(key);
		},
		clear : function (key) {
			localStorage.removeItem(key);
		},

		// responsive navigation
		nav_state : 0,
		menu_toggle : function () {
				if (a.nav_state === 0) {
					a.show("links");
					a.nav_state = 1;
				} else {
					a.hide("links");
					a.nav_state = 0;
				}
		}
	};