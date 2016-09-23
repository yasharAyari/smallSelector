/**
 * @name selector
 * @public
 * @namespace app
 * @param  {query} element - DOM element query 
*/
function selector (query){
  this.target = query;
}

/**
 * @name addClass
 * @private
 * @param  {string} className - remove class element 
*/
function _removeClass (className){
  if (!this.target || !className){
        return;
  }else{
      for (var i = this.target.length - 1; i >= 0; i--) {
        this.target[i].className = this.target[i].className.replace(className,'');
      };
  }
}

/**
 * @name addClass
 * @private
 * @param  {string} className - add class element 
*/
function _addClass (className){
  if (!this.target || !className){
        return;
  }else{
      for (var i = this.target.length - 1; i >= 0; i--) {
        var classString = this.target[i].className, nameIndex = classString.indexOf(className);
        classString = classString.trim();
        if (nameIndex < 0) {
            classString += ' ' + className;
        }
        this.target[i].className = classString;
      };
  }
}

/**
 * @name toggleClass
 * @private
 * @param  {string} className - toggle class element 
*/
function _toggleClass (className){
    for (var i = this.target.length - 1; i >= 0; i--) {
        var classString = this.target[i].className, nameIndex = classString.indexOf(className);
        classString = classString.trim();
        if (nameIndex < 0) {
            classString += ' ' + className;
        }
        else {
            classString = classString.substr(0, nameIndex) + classString.substr(nameIndex+className.length);
        }
        this.target[i].className = classString;
      };
}

/**
 * @name find
 * @private
 * @param  {string} className - DOM element query that will be find
*/
function _find(query){
  var _target = this.target;
  this.target = [];

  for (var i = _target.length - 1; i >= 0; i--) {
    var current = _target[i];
        current = current.querySelectorAll(query);
    for(var i = current.length - 1; i>= 0 ; i--){
      this.target.push(current[i]);
    }
  };

}

/**
 * @name addListener
 * @private
 * @param  {string} type - DOM event that must be add to target
 * @param  {function} expression - event added function
*/
function _addListener(type, expression){
  var bubbling = false;
  for (var i = this.target.length - 1; i >= 0; i--) {
    if(window.addEventListener) { // Standard
      this.target[i].addEventListener(type, expression, bubbling);
    } else if(window.attachEvent) { // IE
      this.target[i].attachEvent('on' + type, expression);
    } else return false;
  };
}

/**
 * @name removeListene
 * @private
 * @param  {string} type - DOM event that must be add to target
 * @param  {function} expression - event remove function
*/
function _removeListener(type, expression){
  var bubbling = false;
  for (var i = this.target.length - 1; i >= 0; i--) {
    if(window.addEventListener) { // Standard
      this.target[i].removeEventListener(type, expression, bubbling);
    }
  };
}

/**
 * @name remove
 * @private
 * @action  remove selected element form DOM
*/
function _remove(){
  for (var i = this.target.length - 1; i >= 0; i--) {
    this.target[i].remove();
  }
}
/**
 * @name hide
 * @private
 * @action  hide selected element
*/
function _hide(){
  for (var i = this.target.length - 1; i >= 0; i--) {
    this.target[i].style.display = 'none';
  }
}
/**
 * @name show
 * @private
 * @action  show selected element
*/
function _show(display){
  var visible = display || 'block';
  for (var i = this.target.length - 1; i >= 0; i--) {
    this.target[i].style.display = visible;
  }
}

/**
 * @name html
 * @private
 * @action change html of selected DOM element
*/
function _html(html){
    for (var i = this.target.length - 1; i >= 0; i--) {
      this.target[i].innerHTML = html;
    }
}

/**
 * @name css
 * @private
 * @action change style of selected DOM element
*/
function _css(css){
  var cssKeys = Object.keys(css);console.log(cssKeys)
    for (var i = this.target.length - 1; i >= 0; i--) {
      for (var j = cssKeys.length - 1; j >= 0; j--) {
        if(typeof(css[cssKeys[j]]) === 'number'){
          css[cssKeys[j]] = css[cssKeys[j]] + 'px';
        }
        this.target[i].style[cssKeys[j]] = css[cssKeys[j]];
      }
    }
}
/**
 * create instance of selcetor function
*/
var _ = function (query){
  var targetElementDOM = null;
  if (typeof (query) === 'string') {
      //if given parameter is a css query selector
      targetElementDOM = document.querySelectorAll(query);
    } else if (typeof (query) === 'object') {
      //if given parameter is a DOM object
      targetElementDOM = []
      targetElementDOM.push(query);
    } 
    if (targetElementDOM != null) {
      return new selector(targetElementDOM);
    }
}

_.fn = selector.prototype = {
  addClass: function(className){
    _addClass.call(this, className);
    return this;
  },
  removeClass: function(className){
    _removeClass.call(this, className);
    return this;
  },
  toggleClass: function(className){
    _toggleClass.call(this, className);
    return this;
  },
  find : function (query){
    _find.call(this, query);
    return this;
  }, 
  on: function(type, expression){
    _addListener.call(this, type, expression);
    return this;
  }, 
  off: function(type, expression){
    _removeListener.call(this, type, expression);
    return this;
  },
  remove: function(){
    _remove.call(this);
    return this;
  },
  hide: function(){
    _hide.call(this);
    return this;
  },
  show: function(display){
    _show.call(this,display);
    return this;
  },
  css: function(css){
    _css.call(this,css);
    return this;
  },
  html: function(html){
    if(html){
      _html.call(this, html);
    }else{
      if(this.target.length == 1){
        return this.target[0].innerHTML;
      }else{
        var temp;
        for (var i = this.target.length - 1; i >= 0; i--) {
          temp = temp + this.target[i].innerHTML+"\n";
        }
        return temp;
      }
    }
  }
}

