andi
====

A super light framework for developing web apps on mobile devices.

JavaScript API
====

get(id)
----
Executes getElementsById(), can be used to select DOM elements. Similar to jQuery's $.("#id"), but uses standard Javascript .

log(msg)
----
Acts as a console, which doesn't currently exist for mobile devices. Include a <div id="log"></div> at the bottom of your app to see logged items.

css(id,{"key":"value"})
----
Makes changing css attributes easier. Will loop through the object and change all given styles on the given id. (ie- css("main",{"color":"#ffffff"}); )

show(id)
----
Makes the given id visible.

hide(id)
----
Hides the given id.


CSS API
====

.row
----
Makes hard rows between page sections.

.btn
----
Simple button style.
