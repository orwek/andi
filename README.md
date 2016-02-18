andi
====

A super light framework for developing web apps on mobile devices.

I started developing andi while I was on vacation. I was writing a web app on my Android phone and didn't have jQuery or other libraries or frameworks available to me, so I started writing my own. I started with a simple id selector, and an error console, and it grew from there.

JavaScript API
====

a.get(id)
----
Executes getElementsById(), can be used to select DOM elements. Similar to jQuery's $.("#id"), but uses standard Javascript.

a.apnd(id,x)
----
Append x to the given id.

a.ppnd(id,x)
Prepend x to the given id.

a.log(msg)
----
Acts as a console, similar to "console.log();" which doesn't currently exist for mobile devices. Include a div with id="log" at the bottom of your app to see logged items.

a.css(id,{"key":"value"})
----
Makes changing css attributes easier. Will loop through the object and change all given styles on the given id. (ie- css("main",{"color":"#ffffff"}); )

a.show(id)
----
Makes the given id visible.

a.hide(id)
----
Hides the given id.

a.save(key,value)
----
Assigns the given value to the given key in localStorage

a.read(key)
----
Returns the value of the given key from localStorage

a.clear(key)
----
Removes the given key from localStorage

a.menu_toggle
----
Controls the phone navigation open/close functionality


CSS API
====

.center
----
Centers page elements via margin: auto;

.row
----
Makes hard rows between page sections.

.btn
----
Simple button style that can be used on links <a href="" class="btn"></a>.

.drop_light
----
Adds a light colored border to the bottom and right of an element creating "drop shadow."

.drop_dark
----
Adds a dark colored border to the bottom and right of an element creating "drop shadow."

.round
----
Rounds the corners of divs with a 10px radius.

.circle
----
Makes square elements like divs and images into circles.

.hide_phone
----
Hides the given element in phone view and makes it visible in Screen view.

.show_phone
----
Makes the given element visible in phone view and hidden in Screen view.

.right
----
Makes the given element float: right;

.cell
----
Applies the float: left; and padding: 3%; styles, leaving the width up to the user. Width changes to auto on screens smaller than 450px wide.

.cell25, .cell30, .cell50, .cell60, .cell75
----
Used in conjuction with .cell to specify a percentage width.(ie- .cell25 = width: 25%;)

.log
----
Styles for the log div.

