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
$

<a name="static"></a>

### $().html([content])

`$.html()` either sets or gets the elements' `innerHTML` to `content`, depending if the optional `content` argument is pased in. If called without the argument, `.html()` returns the element's `innerHTML`.

* `content` is an *optional* argument. If it is passed in, it will **set** the `innerHTML` of a given element and return a `Bonzo` object.

#### Examples

```js
$(element).html('<p>foo</p>');
$(element).html(); // <p>foo</p>
```