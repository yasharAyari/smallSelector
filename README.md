# Small selector  home page
this is a small and modern library for manipulating Dom. it has all common functions of jQuery but its size is only 3 KB(minified) . this library uses document query selector. you can use it like jQuery beacuse it syntax is as same as jquery.

**It looks like this:**

``` js
$(elements)
  .hide()
  .addClass('foo')
  .css({
    color: 'red',
    'background-color': 'white'
  })
  .show()
```
<a name="instance"></a>
### Instance methods


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

<a name="static"></a>
```------------------------------------------------

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
