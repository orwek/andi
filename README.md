andi
====

A super light framework for developing web apps on mobile devices.

I started developing andi while I was on vacation. I was writing a web app on my Android phone and didn't have jQuery or other libraries or frameworks available to me, so I started writing my own. I started with a simple id selector, and an error console, and it grew from there.

JavaScript API
====

get(id)
----
Executes getElementsById(), can be used to select DOM elements. Similar to jQuery's $.("#id"), but uses standard Javascript .

log(msg)
----
Acts as a console, similar to "console.log();" which doesn't currently exist for mobile devices. Include a div with id="log" at the bottom of your app to see logged items.

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
