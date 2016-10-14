# Small selector  home page
A small and modern library for manipulating Dom. It has all common functions of jQuery but its size is only 3 KB(minified) . This library uses document query selector.It can be used instead of jQuery beacuse of their similarity in their syntax.

**It looks like this:**

``` js
$(elements)
  .hide()
  .addClass('foo')
  .css({
    color: '#ff0000',
    'background-color': '#ffffff'
  })
  .show()
```
### Installation

Download smallSelector:

- With Bower:

```sh
$ bower install smallSelector
```

- With Git:

```sh
$ git clone https://github.com/yasharAyari/smallSelector.git
```

- Or manually downloading the [latest release](https://github.com/yasharAyari/smallSelector/archive/master.zip).

### Usages
This can then be used:
1. In AMD (e.g. with requireJS):

```js
requirejs(['$'], function($) {
    $('#myID').addClass('test');
});
```
2. In commonJS (e.g. nodeJS):

```js
var $ = require('./$');
$('#myID').addClass('test');
```

3. Globally (e.g. in HTML):

```js
<script src="smallSelector.js"></script>
<script>$("#myID").addClass("test")</script>
```
------------------------------------------------
<a name="instance"></a>
### Methods

  * <a href="#api-html"><code>$().<b>html()</b></code></a>
  * <a href="#api-addClass"><code>$().<b>addClass()</b></code></a>
  * <a href="#api-removeClass"><code>$().<b>removeClass()</b></code></a>
  * <a href="#api-toggleClass"><code>$().<b>toggleClass()</b></code></a>
  * <a href="#api-show"><code>$().<b>show()</b></code></a>
  * <a href="#api-hide"><code>$().<b>hide()</b></code></a>
  * <a href="#api-css"><code>$().<b>css()</b></code></a>
  * <a href="#api-find"><code>$().<b>find()</b></code></a>
  * <a href="#api-attr"><code>$().<b>attr()</b></code></a>
  * <a href="#api-remove"><code>$().<b>remove()</b></code></a>
  
  Add and remove Events

  * <a href="#api-on"><code>$().<b>on()</b></code></a>
  * <a href="#api-off"><code>$().<b>off()</b></code></a>

------------------------------------------------

<a name="api-html"></a>
### $().html([content])

`$.html()` either sets or gets the elements' `innerHTML` to `content`.

#### Examples

```js
$(element).html('<p>foo</p>');
$(element).html(); // <p>foo</p>
```------------------------------------------------
<a name="api-addClass"></a>
### $().addClass(class | classList)

`$.addClass(class | classList)` adds the specified `class` to the given element. It returns a `$` object.

* `class` is a *required* argument. It is the name of the class you wish to add to the given element.

  * If you'd like to add multiple classes at once, simply use a
space-separated string, a `classList` (i.e. "classOne classTwo").

#### Examples

``` js
$("h1").addClass('big')
  // the html is now <h1 class="big">hello, world</h1>
  // →  returns a $ object

$(".h1").addClass()
  //  throws an error, since the argument is required

$("p").addClass("one two three")
  // the html is now <p class="one two three">i want lots of classes</p>
  // →  returns a $ object
```
------------------------------------------------
<a name="api-removeClass"></a>
### $().removeClass(class | classList)

`$.removeClass(class)` removes the specified `class` from the given element. It returns a `$` object.

* `class` is a *required* argument. It is the name of the class you wish to remove from the given element.

  * If you'd like to remove multiple classes at once, simply use a
space-separated string, a `classList` (i.e. "classOne classTwo").

#### Examples

``` js
$("h1").removeClass('small')
  // the html is now <h1 class>hello, world</h1>
  // →  returns a $ object

$(".h1").removeClass()
  //  throws an error, since the argument is required

$("p").removeClass("one two three")
  // the html is now <p>i have lots of classes</p>
  // →  returns a $ object
```
------------------------------------------------
<a name="api-toggleClass"></a>
### $().toggleClass(class | classList)

`$.toggleClass(class)` either adds or removes a specified `class` to the given element, depending on whether or not the given element already has a class with that `class` or not.

* `class` is a *required* argument. It is the name of the class you wish to toggle.

  * If you'd like to toggle multiple classes at once, simply use a
space-separated string, a `classList` (i.e. "classOne classTwo").


#### Examples

``` js

$("p.class").toggleClass('alert')
  // the html is now <p class>something went wrong</p>
  // →  returns a $ object

$("p.alert").toggleClass('different')
  // the html is now <p class="alert different">something went wrong</p>
  // →  returns a $ object

$("p.one").toggleClass('three two one')
  // the html is now <p class="three two">something went wrong</p>
  // →  returns a $ object

$("p#large").toggleClass('small tiny')
  // the html is now <p id="large" class="small tiny large">something went wrong</p>
  // →  returns a $ object

```
------------------------------------------------
<a name="api-show"></a>
### $().show([type])

`$.show()` sets a given element or set of elements' `display` style property. By passing in an optional `type` argument, you can specify the attribute of the `display` property $ gives the element(s).

* `type` is an *optional* argument. It is the display type you wish to
utilize.

If you specify an unsupported `type` (i.e. something other than `block`, `compact`, `inline-block`, `inline`, `inline-table`, `list-item`, `run-in`, `table`, `table-caption`, `table-cell`, `table-column`, `table-column-group`, `table-footer-group`, `table-header-group`, `table-row`, or `table-row-group`), $ will ignore the invalid `type`.

#### Examples

``` js

$("p.test").show()
  // html is now <p class="test" style>I was hidden</p>
  // →  returns a $ object

$("p#test").show('inline-block')
  // html is now <p  id="test"style="display: inline-block;">I was hidden</p>
  // →  returns a $ object

```

------------------------------------------------
<a name="api-hide"></a>
### $().hide()

`$.hide()` adds a `display: none;` to the specified element.

#### Examples

``` js

$("p").hide()
  // html is now <p style="display: none;">Hello, world</p>
  // →  returns a $ object

```
------------------------------------------------
<a name="api-css"></a>
### $().css(hash)
Sets CSS properties of the element. If a single hash argument is passed, then the CSS property corresponding to each property is set to the value designated by the hash property's value.
```js
$(elem).css({
  background: 'blue',
  color: green;
}); // "green"
```
------------------------------------------------
<a name="api-find"></a>
### $().find(Dom element | selector)
Find given Dom object inside the target element and return array of finded Dom object.


```js
<ul id="myId">
  <li>item 1</li>
  <li>item 2</li>
</ul>
$('#myId').fin('li'); 
// →  returns list of to li elements
```
------------------------------------------------
<a name="api-attr"></a>
### $().attr(key[, value] | hash)
Sets or returns attributes of the element. If the first argument is a hash, then each property of the hash is read and the corresponding attribute of the element is set to the hash property's value. If the first argument is a string and no second argument is provided, the value of the element's attribute with the same name is returned. If a second argument *is* supplied, then the element's attribute of the same name as the first argument is set to the value of the second argument.
```js
$('p').attr('id', 'myId'); 
//  html is now <p id="myId">Hello, world</p>
// →  returns a $ object
$(p).attr('id'); // 
// →  returns a value of id attribute
```
------------------------------------------------
<a name="api-remove"></a>
### $().remove()
`$.remove()` removes the initial supplied collection from the DOM

#### Examples
``` js
$(document.querySelectorAll('p')).remove()
```
------------------------------------------------
<a name="api-on"></a>
### $().on([event],[handler])
`$.on()` Attach an event handler function for one or more events to the selected elements.

#### Examples
``` js
function handler() {
  console.log('handler');
}
 
$('#test').on('click', handler);

$("h3").on('click',function(event){
  $(this).addClass('active');
})
```
------------------------------------------------
<a name="api-off"></a>
### $().on([event],[handler])
`$.on()` Attach an event handler function for one or more events to the selected elements.

#### Examples
``` js
function handler() {
  console.log('handler');
}
 
$('#test').on('click', handler);
$('#test').off('click', handler);
```
