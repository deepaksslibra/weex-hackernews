(this.nativeLog || function(s) {console.log(s)})('START WEEX HTML5: 0.5.0 Build 2016-12-21 11:02');
(this.getJSFMVersion = function(){return "0.17.0-beta.2"});var global = this, process = { env: {} };var setTimeout = global.setTimeout;

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global.weex = factory());
}(this, (function () { 'use strict';

function __$styleInject(css, returnValue) {
  if (typeof document === 'undefined') {
    return returnValue;
  }
  css = css || '';
  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';
  if (style.styleSheet){
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
  head.appendChild(style);
  return returnValue;
}
__$styleInject("* {\n  margin: 0;\n  padding: 0;\n  text-size-adjust: none;\n}\n\nul, ol {\n  list-style: none;\n}\n\n.weex-container {\n  box-sizing: border-box;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-flex-direction: column;\n  flex-direction: column;\n  flex-shrink: 0;\n  align-items: stretch;\n  box-align: stretch;\n  align-content: flex-start;\n  position: relative;\n  border: 0 solid black;\n  margin: 0;\n  padding: 0;\n  min-width: 0;\n}\n\n.weex-element {\n  box-sizing: border-box;\n  position: relative;\n  flex-shrink: 0;\n  border: 0 solid black;\n  margin: 0;\n  padding: 0;\n  min-width: 0;\n}\n",undefined);

var subversion = {"browser":"0.5.0","framework":"0.17.0-beta.2","transformer":">=0.1.5 <0.4"};

/* eslint-disable */

// Production steps of ECMA-262, Edition 6, 22.1.2.1
// Reference: https://people.mozilla.org/~jorendorff/es6-draft.html#sec-array.from

/* istanbul ignore if */
if (!Array.from) {
  Array.from = (function() {
    var toStr = Object.prototype.toString;
    var isCallable = function(fn) {
      return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
    };
    var toInteger = function(value) {
      var number = Number(value);
      if (isNaN(number)) {
        return 0;
      }
      if (number === 0 || !isFinite(number)) {
        return number;
      }
      return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
    };
    var maxSafeInteger = Math.pow(2, 53) - 1;
    var toLength = function(value) {
      var len = toInteger(value);
      return Math.min(Math.max(len, 0), maxSafeInteger);
    };

    // The length property of the from method is 1.
    return function from(arrayLike/*, mapFn, thisArg */) {
      // 1. Let C be the this value.
      var C = this;

      // 2. Let items be ToObject(arrayLike).
      var items = Object(arrayLike);

      // 3. ReturnIfAbrupt(items).
      if (arrayLike == null) {
        throw new TypeError('Array.from requires an array-like object - not null or undefined');
      }

      // 4. If mapfn is undefined, then let mapping be false.
      var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
      var T;
      if (typeof mapFn !== 'undefined') {
        // 5. else
        // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
        if (!isCallable(mapFn)) {
          throw new TypeError('Array.from: when provided, the second argument must be a function');
        }

        // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.
        if (arguments.length > 2) {
          T = arguments[2];
        }
      }

      // 10. Let lenValue be Get(items, "length").
      // 11. Let len be ToLength(lenValue).
      var len = toLength(items.length);

      // 13. If IsConstructor(C) is true, then
      // 13. a. Let A be the result of calling the [[Construct]] internal method of C with an argument list containing the single item len.
      // 14. a. Else, Let A be ArrayCreate(len).
      var A = isCallable(C) ? Object(new C(len)) : new Array(len);

      // 16. Let k be 0.
      var k = 0;
      // 17. Repeat, while k < len… (also steps a - h)
      var kValue;
      while (k < len) {
        kValue = items[k];
        if (mapFn) {
          A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
        } else {
          A[k] = kValue;
        }
        k += 1;
      }
      // 18. Let putStatus be Put(A, "length", len, true).
      A.length = len;
      // 20. Return A.
      return A;
    };
  }());
}

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};



function unwrapExports (x) {
	return x && x.__esModule ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var _global = createCommonjsModule(function (module) {
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number'){ __g = global; } // eslint-disable-line no-undef
});

var _core = createCommonjsModule(function (module) {
var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number'){ __e = core; } // eslint-disable-line no-undef
});

var _isObject = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

var isObject = _isObject;
var _anObject = function(it){
  if(!isObject(it)){ throw TypeError(it + ' is not an object!'); }
  return it;
};

var _fails = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

// Thank's IE8 for his funny defineProperty
var _descriptors = !_fails(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

var isObject$1 = _isObject;
var document$1 = _global.document;
var is = isObject$1(document$1) && isObject$1(document$1.createElement);
var _domCreate = function(it){
  return is ? document$1.createElement(it) : {};
};

var _ie8DomDefine = !_descriptors && !_fails(function(){
  return Object.defineProperty(_domCreate('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject$2 = _isObject;
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
var _toPrimitive = function(it, S){
  if(!isObject$2(it)){ return it; }
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject$2(val = fn.call(it))){ return val; }
  if(typeof (fn = it.valueOf) == 'function' && !isObject$2(val = fn.call(it))){ return val; }
  if(!S && typeof (fn = it.toString) == 'function' && !isObject$2(val = fn.call(it))){ return val; }
  throw TypeError("Can't convert object to primitive value");
};

var anObject       = _anObject;
var IE8_DOM_DEFINE = _ie8DomDefine;
var toPrimitive    = _toPrimitive;
var dP$1             = Object.defineProperty;

var f$1 = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE){ try {
    return dP$1(O, P, Attributes);
  } catch(e){ /* empty */ } }
  if('get' in Attributes || 'set' in Attributes){ throw TypeError('Accessors not supported!'); }
  if('value' in Attributes){ O[P] = Attributes.value; }
  return O;
};

var _objectDp = {
	f: f$1
};

var _propertyDesc = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

var dP         = _objectDp;
var createDesc = _propertyDesc;
var _hide = _descriptors ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

var hasOwnProperty = {}.hasOwnProperty;
var _has = function(it, key){
  return hasOwnProperty.call(it, key);
};

var id = 0;
var px = Math.random();
var _uid = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

var _redefine = createCommonjsModule(function (module) {
var global    = _global
  , hide      = _hide
  , has       = _has
  , SRC       = _uid('src')
  , TO_STRING = 'toString'
  , $toString = Function[TO_STRING]
  , TPL       = ('' + $toString).split(TO_STRING);

_core.inspectSource = function(it){
  return $toString.call(it);
};

(module.exports = function(O, key, val, safe){
  var isFunction = typeof val == 'function';
  if(isFunction){ has(val, 'name') || hide(val, 'name', key); }
  if(O[key] === val){ return; }
  if(isFunction){ has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key))); }
  if(O === global){
    O[key] = val;
  } else {
    if(!safe){
      delete O[key];
      hide(O, key, val);
    } else {
      if(O[key]){ O[key] = val; }
      else { hide(O, key, val); }
    }
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString(){
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});
});

var _aFunction = function(it){
  if(typeof it != 'function'){ throw TypeError(it + ' is not a function!'); }
  return it;
};

// optional / simple context binding
var aFunction = _aFunction;
var _ctx = function(fn, that, length){
  aFunction(fn);
  if(that === undefined){ return fn; }
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};

var global$1    = _global;
var core      = _core;
var hide      = _hide;
var redefine  = _redefine;
var ctx       = _ctx;
var PROTOTYPE = 'prototype';

var $export$1 = function(type, name, source){
  var IS_FORCED = type & $export$1.F
    , IS_GLOBAL = type & $export$1.G
    , IS_STATIC = type & $export$1.S
    , IS_PROTO  = type & $export$1.P
    , IS_BIND   = type & $export$1.B
    , target    = IS_GLOBAL ? global$1 : IS_STATIC ? global$1[name] || (global$1[name] = {}) : (global$1[name] || {})[PROTOTYPE]
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE] || (exports[PROTOTYPE] = {})
    , key, own, out, exp;
  if(IS_GLOBAL){ source = name; }
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global$1) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if(target){ redefine(target, key, out, type & $export$1.U); }
    // export
    if(exports[key] != out){ hide(exports, key, exp); }
    if(IS_PROTO && expProto[key] != out){ expProto[key] = out; }
  }
};
global$1.core = core;
// type bitmap
$export$1.F = 1;   // forced
$export$1.G = 2;   // global
$export$1.S = 4;   // static
$export$1.P = 8;   // proto
$export$1.B = 16;  // bind
$export$1.W = 32;  // wrap
$export$1.U = 64;  // safe
$export$1.R = 128; // real proto method for `library` 
var _export = $export$1;

var toString$1 = {}.toString;

var _cof = function(it){
  return toString$1.call(it).slice(8, -1);
};

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = _cof;
var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

// 7.2.1 RequireObjectCoercible(argument)
var _defined = function(it){
  if(it == undefined){ throw TypeError("Can't call method on  " + it); }
  return it;
};

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject$1 = _iobject;
var defined = _defined;
var _toIobject = function(it){
  return IObject$1(defined(it));
};

// 7.1.4 ToInteger
var ceil  = Math.ceil;
var floor = Math.floor;
var _toInteger = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

// 7.1.15 ToLength
var toInteger = _toInteger;
var min       = Math.min;
var _toLength = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

var toInteger$1 = _toInteger;
var max       = Math.max;
var min$1       = Math.min;
var _toIndex = function(index, length){
  index = toInteger$1(index);
  return index < 0 ? max(index + length, 0) : min$1(index, length);
};

// false -> Array#indexOf
// true  -> Array#includes
var toIObject$1 = _toIobject;
var toLength  = _toLength;
var toIndex   = _toIndex;
var _arrayIncludes = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject$1($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el){ while(length > index){
      value = O[index++];
      if(value != value){ return true; }
    // Array#toIndex ignores holes, Array#includes - not
    } } else { for(;length > index; index++){ if(IS_INCLUDES || index in O){
      if(O[index] === el){ return IS_INCLUDES || index || 0; }
    } } } return !IS_INCLUDES && -1;
  };
};

var global$2 = _global;
var SHARED = '__core-js_shared__';
var store  = global$2[SHARED] || (global$2[SHARED] = {});
var _shared = function(key){
  return store[key] || (store[key] = {});
};

var shared = _shared('keys');
var uid    = _uid;
var _sharedKey = function(key){
  return shared[key] || (shared[key] = uid(key));
};

var has$1          = _has;
var toIObject    = _toIobject;
var arrayIndexOf = _arrayIncludes(false);
var IE_PROTO     = _sharedKey('IE_PROTO');

var _objectKeysInternal = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O){ if(key != IE_PROTO){ has$1(O, key) && result.push(key); } }
  // Don't enum bug & hidden keys
  while(names.length > i){ if(has$1(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  } }
  return result;
};

// IE 8- don't enum bug keys
var _enumBugKeys = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = _objectKeysInternal;
var enumBugKeys = _enumBugKeys;

var _objectKeys = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};

var f$2 = Object.getOwnPropertySymbols;

var _objectGops = {
	f: f$2
};

var f$3 = {}.propertyIsEnumerable;

var _objectPie = {
	f: f$3
};

// 7.1.13 ToObject(argument)
var defined$1 = _defined;
var _toObject = function(it){
  return Object(defined$1(it));
};

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys  = _objectKeys;
var gOPS     = _objectGops;
var pIE      = _objectPie;
var toObject = _toObject;
var IObject  = _iobject;
var $assign  = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
var _objectAssign = !$assign || _fails(function(){
  var A = {}
    , B = {}
    , S = Symbol()
    , K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function(k){ B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source){
  var arguments$1 = arguments;
 // eslint-disable-line no-unused-vars
  var T     = toObject(target)
    , aLen  = arguments.length
    , index = 1
    , getSymbols = gOPS.f
    , isEnum     = pIE.f;
  while(aLen > index){
    var S      = IObject(arguments$1[index++])
      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j){ if(isEnum.call(S, key = keys[j++])){ T[key] = S[key]; } }
  } return T;
} : $assign;

// 19.1.3.1 Object.assign(target, source)
var $export = _export;

$export($export.S + $export.F, 'Object', {assign: _objectAssign});

/* eslint-disable */

// https://gist.github.com/WebReflection/5593554

/* istanbul ignore if */
if (!Object.setPrototypeOf) {
  Object.setPrototypeOf = (function(Object, magic) {
    var set;
    function setPrototypeOf(O, proto) {
      set.call(O, proto);
      return O;
    }
    try {
      // this works already in Firefox and Safari
      set = Object.getOwnPropertyDescriptor(Object.prototype, magic).set;
      set.call({}, null);
    } catch (e) {
      if (
        // IE < 11 cannot be shimmed
        Object.prototype !== {}[magic] ||
        // neither can any browser that actually
        // implemented __proto__ correctly
        // (all but old V8 will return here)
        {__proto__: null}.__proto__ === void 0
        // this case means null objects cannot be passed
        // through setPrototypeOf in a reliable way
        // which means here a **Sham** is needed instead
      ) {
        return;
      }
      // nodejs 0.8 and 0.10 are (buggy and..) fine here
      // probably Chrome or some old Mobile stock browser
      set = function(proto) {
        this[magic] = proto;
      };
      // please note that this will **not** work
      // in those browsers that do not inherit
      // __proto__ by mistake from Object.prototype
      // in these cases we should probably throw an error
      // or at least be informed about the issue
      setPrototypeOf.polyfill = setPrototypeOf(
        setPrototypeOf({}, null),
        Object.prototype
      ) instanceof Object;
      // setPrototypeOf.polyfill === true means it works as meant
      // setPrototypeOf.polyfill === false means it's not 100% reliable
      // setPrototypeOf.polyfill === undefined
      // or
      // setPrototypeOf.polyfill ==  null means it's not a polyfill
      // which means it works as expected
      // we can even delete Object.prototype.__proto__;
    }
    return setPrototypeOf;
  }(Object, '__proto__'));
}

// fix Promise Problem on JSContext of iOS7~8
// @see https://bugs.webkit.org/show_bug.cgi?id=135866
var ref = commonjsGlobal;
var WXEnvironment = ref.WXEnvironment;

/* istanbul ignore next */
if (WXEnvironment && WXEnvironment.platform === 'iOS') {
  commonjsGlobal.Promise = undefined;
}

var _wks = createCommonjsModule(function (module) {
var store      = _shared('wks')
  , uid        = _uid
  , Symbol     = _global.Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;
});

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof$1 = _cof;
var TAG = _wks('toStringTag');
var ARG = cof$1(function(){ return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function(it, key){
  try {
    return it[key];
  } catch(e){ /* empty */ }
};

var _classof = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof$1(O)
    // ES3 arguments fallback
    : (B = cof$1(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

// 19.1.3.6 Object.prototype.toString()
var classof = _classof;
var test    = {};
test[_wks('toStringTag')] = 'z';
if(test + '' != '[object z]'){
  _redefine(Object.prototype, 'toString', function toString(){
    return '[object ' + classof(this) + ']';
  }, true);
}

var toInteger$2 = _toInteger;
var defined$2   = _defined;
// true  -> String#at
// false -> String#codePointAt
var _stringAt = function(TO_STRING){
  return function(that, pos){
    var s = String(defined$2(that))
      , i = toInteger$2(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l){ return TO_STRING ? '' : undefined; }
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

var _library = false;

var _iterators = {};

var dP$2       = _objectDp;
var anObject$2 = _anObject;
var getKeys$1  = _objectKeys;

var _objectDps = _descriptors ? Object.defineProperties : function defineProperties(O, Properties){
  anObject$2(O);
  var keys   = getKeys$1(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i){ dP$2.f(O, P = keys[i++], Properties[P]); }
  return O;
};

var _html = _global.document && document.documentElement;

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject$1    = _anObject;
var dPs         = _objectDps;
var enumBugKeys$1 = _enumBugKeys;
var IE_PROTO$1    = _sharedKey('IE_PROTO');
var Empty       = function(){ /* empty */ };
var PROTOTYPE$1   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = _domCreate('iframe')
    , i      = enumBugKeys$1.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  _html.appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--){ delete createDict[PROTOTYPE$1][enumBugKeys$1[i]]; }
  return createDict();
};

var _objectCreate = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE$1] = anObject$1(O);
    result = new Empty;
    Empty[PROTOTYPE$1] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO$1] = O;
  } else { result = createDict(); }
  return Properties === undefined ? result : dPs(result, Properties);
};

var def = _objectDp.f;
var has$3 = _has;
var TAG$1 = _wks('toStringTag');

var _setToStringTag = function(it, tag, stat){
  if(it && !has$3(it = stat ? it : it.prototype, TAG$1)){ def(it, TAG$1, {configurable: true, value: tag}); }
};

var create$1         = _objectCreate;
var descriptor     = _propertyDesc;
var setToStringTag$1 = _setToStringTag;
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
_hide(IteratorPrototype, _wks('iterator'), function(){ return this; });

var _iterCreate = function(Constructor, NAME, next){
  Constructor.prototype = create$1(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag$1(Constructor, NAME + ' Iterator');
};

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has$4         = _has;
var toObject$1    = _toObject;
var IE_PROTO$2    = _sharedKey('IE_PROTO');
var ObjectProto = Object.prototype;

var _objectGpo = Object.getPrototypeOf || function(O){
  O = toObject$1(O);
  if(has$4(O, IE_PROTO$2)){ return O[IE_PROTO$2]; }
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

var LIBRARY        = _library;
var $export$2        = _export;
var redefine$1       = _redefine;
var hide$1           = _hide;
var has$2            = _has;
var Iterators      = _iterators;
var $iterCreate    = _iterCreate;
var setToStringTag = _setToStringTag;
var getPrototypeOf = _objectGpo;
var ITERATOR       = _wks('iterator');
var BUGGY          = !([].keys && 'next' in [].keys());
var FF_ITERATOR    = '@@iterator';
var KEYS           = 'keys';
var VALUES         = 'values';

var returnThis = function(){ return this; };

var _iterDefine = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto){ return proto[kind]; }
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!LIBRARY && !has$2(IteratorPrototype, ITERATOR)){ hide$1(IteratorPrototype, ITERATOR, returnThis); }
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide$1(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED){ for(key in methods){
      if(!(key in proto)){ redefine$1(proto, key, methods[key]); }
    } } else { $export$2($export$2.P + $export$2.F * (BUGGY || VALUES_BUG), NAME, methods); }
  }
  return methods;
};

var $at  = _stringAt(true);

// 21.1.3.27 String.prototype[@@iterator]()
_iterDefine(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length){ return {value: undefined, done: true}; }
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = _wks('unscopables');
var ArrayProto  = Array.prototype;
if(ArrayProto[UNSCOPABLES] == undefined){ _hide(ArrayProto, UNSCOPABLES, {}); }
var _addToUnscopables = function(key){
  ArrayProto[UNSCOPABLES][key] = true;
};

var _iterStep = function(done, value){
  return {value: value, done: !!done};
};

var addToUnscopables = _addToUnscopables;
var step             = _iterStep;
var Iterators$2        = _iterators;
var toIObject$2        = _toIobject;

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
var es6_array_iterator = _iterDefine(Array, 'Array', function(iterated, kind){
  this._t = toIObject$2(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  ){ return step(0, index); }
  if(kind == 'values'){ return step(0, O[index]); }
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators$2.Arguments = Iterators$2.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

var $iterators    = es6_array_iterator;
var redefine$2      = _redefine;
var global$3        = _global;
var hide$2          = _hide;
var Iterators$1     = _iterators;
var wks           = _wks;
var ITERATOR$1      = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues   = Iterators$1.Array;

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global$3[NAME]
    , proto      = Collection && Collection.prototype
    , key;
  if(proto){
    if(!proto[ITERATOR$1]){ hide$2(proto, ITERATOR$1, ArrayValues); }
    if(!proto[TO_STRING_TAG]){ hide$2(proto, TO_STRING_TAG, NAME); }
    Iterators$1[NAME] = ArrayValues;
    for(key in $iterators){ if(!proto[key]){ redefine$2(proto, key, $iterators[key], true); } }
  }
}

var _anInstance = function(it, Constructor, name, forbiddenField){
  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};

// call something on iterator step with safe closing on error
var anObject$3 = _anObject;
var _iterCall = function(iterator, fn, value, entries){
  try {
    return entries ? fn(anObject$3(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch(e){
    var ret = iterator['return'];
    if(ret !== undefined){ anObject$3(ret.call(iterator)); }
    throw e;
  }
};

// check on default Array iterator
var Iterators$3  = _iterators;
var ITERATOR$2   = _wks('iterator');
var ArrayProto$1 = Array.prototype;

var _isArrayIter = function(it){
  return it !== undefined && (Iterators$3.Array === it || ArrayProto$1[ITERATOR$2] === it);
};

var classof$2   = _classof;
var ITERATOR$3  = _wks('iterator');
var Iterators$4 = _iterators;
var core_getIteratorMethod = _core.getIteratorMethod = function(it){
  if(it != undefined){ return it[ITERATOR$3]
    || it['@@iterator']
    || Iterators$4[classof$2(it)]; }
};

var _forOf = createCommonjsModule(function (module) {
var ctx         = _ctx
  , call        = _iterCall
  , isArrayIter = _isArrayIter
  , anObject    = _anObject
  , toLength    = _toLength
  , getIterFn   = core_getIteratorMethod
  , BREAK       = {}
  , RETURN      = {};
var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
    , f      = ctx(fn, that, entries ? 2 : 1)
    , index  = 0
    , length, step, iterator, result;
  if(typeof iterFn != 'function'){ throw TypeError(iterable + ' is not iterable!'); }
  // fast case for arrays with default iterator
  if(isArrayIter(iterFn)){ for(length = toLength(iterable.length); length > index; index++){
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if(result === BREAK || result === RETURN){ return result; }
  } } else { for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
    result = call(iterator, f, step.value, entries);
    if(result === BREAK || result === RETURN){ return result; }
  } }
};
exports.BREAK  = BREAK;
exports.RETURN = RETURN;
});

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject$4  = _anObject;
var aFunction$2 = _aFunction;
var SPECIES   = _wks('species');
var _speciesConstructor = function(O, D){
  var C = anObject$4(O).constructor, S;
  return C === undefined || (S = anObject$4(C)[SPECIES]) == undefined ? D : aFunction$2(S);
};

// fast apply, http://jsperf.lnkit.com/fast-apply/5
var _invoke = function(fn, args, that){
  var un = that === undefined;
  switch(args.length){
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return              fn.apply(that, args);
};

var ctx$2                = _ctx;
var invoke             = _invoke;
var html               = _html;
var cel                = _domCreate;
var global$5             = _global;
var process$2            = global$5.process;
var setTask            = global$5.setImmediate;
var clearTask          = global$5.clearImmediate;
var MessageChannel     = global$5.MessageChannel;
var counter            = 0;
var queue              = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer;
var channel;
var port;
var run$1 = function(){
  var id = +this;
  if(queue.hasOwnProperty(id)){
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function(event){
  run$1.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if(!setTask || !clearTask){
  setTask = function setImmediate(fn){
    var arguments$1 = arguments;

    var args = [], i = 1;
    while(arguments.length > i){ args.push(arguments$1[i++]); }
    queue[++counter] = function(){
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id){
    delete queue[id];
  };
  // Node.js 0.8-
  if(_cof(process$2) == 'process'){
    defer = function(id){
      process$2.nextTick(ctx$2(run$1, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if(MessageChannel){
    channel = new MessageChannel;
    port    = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx$2(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if(global$5.addEventListener && typeof postMessage == 'function' && !global$5.importScripts){
    defer = function(id){
      global$5.postMessage(id + '', '*');
    };
    global$5.addEventListener('message', listener, false);
  // IE8-
  } else if(ONREADYSTATECHANGE in cel('script')){
    defer = function(id){
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
        html.removeChild(this);
        run$1.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function(id){
      setTimeout(ctx$2(run$1, id, 1), 0);
    };
  }
}
var _task = {
  set:   setTask,
  clear: clearTask
};

var global$6    = _global;
var macrotask = _task.set;
var Observer  = global$6.MutationObserver || global$6.WebKitMutationObserver;
var process$3   = global$6.process;
var Promise$1   = global$6.Promise;
var isNode$1    = _cof(process$3) == 'process';

var _microtask = function(){
  var head, last, notify;

  var flush = function(){
    var parent, fn;
    if(isNode$1 && (parent = process$3.domain)){ parent.exit(); }
    while(head){
      fn   = head.fn;
      head = head.next;
      try {
        fn();
      } catch(e){
        if(head){ notify(); }
        else { last = undefined; }
        throw e;
      }
    } last = undefined;
    if(parent){ parent.enter(); }
  };

  // Node.js
  if(isNode$1){
    notify = function(){
      process$3.nextTick(flush);
    };
  // browsers with MutationObserver
  } else if(Observer){
    var toggle = true
      , node   = document.createTextNode('');
    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
    notify = function(){
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if(Promise$1 && Promise$1.resolve){
    var promise = Promise$1.resolve();
    notify = function(){
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function(){
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global$6, flush);
    };
  }

  return function(fn){
    var task = {fn: fn, next: undefined};
    if(last){ last.next = task; }
    if(!head){
      head = task;
      notify();
    } last = task;
  };
};

var redefine$3 = _redefine;
var _redefineAll = function(target, src, safe){
  for(var key in src){ redefine$3(target, key, src[key], safe); }
  return target;
};

var global$7      = _global;
var dP$3          = _objectDp;
var DESCRIPTORS = _descriptors;
var SPECIES$1     = _wks('species');

var _setSpecies = function(KEY){
  var C = global$7[KEY];
  if(DESCRIPTORS && C && !C[SPECIES$1]){ dP$3.f(C, SPECIES$1, {
    configurable: true,
    get: function(){ return this; }
  }); }
};

var ITERATOR$4     = _wks('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR$4]();
  riter['return'] = function(){ SAFE_CLOSING = true; };
  Array.from(riter, function(){ throw 2; });
} catch(e){ /* empty */ }

var _iterDetect = function(exec, skipClosing){
  if(!skipClosing && !SAFE_CLOSING){ return false; }
  var safe = false;
  try {
    var arr  = [7]
      , iter = arr[ITERATOR$4]();
    iter.next = function(){ return {done: safe = true}; };
    arr[ITERATOR$4] = function(){ return iter; };
    exec(arr);
  } catch(e){ /* empty */ }
  return safe;
};

var LIBRARY$1            = _library;
var global$4             = _global;
var ctx$1                = _ctx;
var classof$1            = _classof;
var $export$3            = _export;
var isObject$3           = _isObject;
var aFunction$1          = _aFunction;
var anInstance         = _anInstance;
var forOf              = _forOf;
var speciesConstructor = _speciesConstructor;
var task               = _task.set;
var microtask          = _microtask();
var PROMISE            = 'Promise';
var TypeError$1          = global$4.TypeError;
var process$1            = global$4.process;
var $Promise           = global$4[PROMISE];
var process$1            = global$4.process;
var isNode             = classof$1(process$1) == 'process';
var empty              = function(){ /* empty */ };
var Internal;
var GenericPromiseCapability;
var Wrapper;

var USE_NATIVE = !!function(){
  try {
    // correct subclassing with @@species support
    var promise     = $Promise.resolve(1)
      , FakePromise = (promise.constructor = {})[_wks('species')] = function(exec){ exec(empty, empty); };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch(e){ /* empty */ }
}();

// helpers
var sameConstructor = function(a, b){
  // with library wrapper special case
  return a === b || a === $Promise && b === Wrapper;
};
var isThenable = function(it){
  var then;
  return isObject$3(it) && typeof (then = it.then) == 'function' ? then : false;
};
var newPromiseCapability = function(C){
  return sameConstructor($Promise, C)
    ? new PromiseCapability(C)
    : new GenericPromiseCapability(C);
};
var PromiseCapability = GenericPromiseCapability = function(C){
  var resolve, reject;
  this.promise = new C(function($$resolve, $$reject){
    if(resolve !== undefined || reject !== undefined){ throw TypeError$1('Bad Promise constructor'); }
    resolve = $$resolve;
    reject  = $$reject;
  });
  this.resolve = aFunction$1(resolve);
  this.reject  = aFunction$1(reject);
};
var perform = function(exec){
  try {
    exec();
  } catch(e){
    return {error: e};
  }
};
var notify$1 = function(promise, isReject){
  if(promise._n){ return; }
  promise._n = true;
  var chain = promise._c;
  microtask(function(){
    var value = promise._v
      , ok    = promise._s == 1
      , i     = 0;
    var run = function(reaction){
      var handler = ok ? reaction.ok : reaction.fail
        , resolve = reaction.resolve
        , reject  = reaction.reject
        , domain  = reaction.domain
        , result, then;
      try {
        if(handler){
          if(!ok){
            if(promise._h == 2){ onHandleUnhandled(promise); }
            promise._h = 1;
          }
          if(handler === true){ result = value; }
          else {
            if(domain){ domain.enter(); }
            result = handler(value);
            if(domain){ domain.exit(); }
          }
          if(result === reaction.promise){
            reject(TypeError$1('Promise-chain cycle'));
          } else if(then = isThenable(result)){
            then.call(result, resolve, reject);
          } else { resolve(result); }
        } else { reject(value); }
      } catch(e){
        reject(e);
      }
    };
    while(chain.length > i){ run(chain[i++]); } // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if(isReject && !promise._h){ onUnhandled(promise); }
  });
};
var onUnhandled = function(promise){
  task.call(global$4, function(){
    var value = promise._v
      , abrupt, handler, console;
    if(isUnhandled(promise)){
      abrupt = perform(function(){
        if(isNode){
          process$1.emit('unhandledRejection', value, promise);
        } else if(handler = global$4.onunhandledrejection){
          handler({promise: promise, reason: value});
        } else if((console = global$4.console) && console.error){
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if(abrupt){ throw abrupt.error; }
  });
};
var isUnhandled = function(promise){
  if(promise._h == 1){ return false; }
  var chain = promise._a || promise._c
    , i     = 0
    , reaction;
  while(chain.length > i){
    reaction = chain[i++];
    if(reaction.fail || !isUnhandled(reaction.promise)){ return false; }
  } return true;
};
var onHandleUnhandled = function(promise){
  task.call(global$4, function(){
    var handler;
    if(isNode){
      process$1.emit('rejectionHandled', promise);
    } else if(handler = global$4.onrejectionhandled){
      handler({promise: promise, reason: promise._v});
    }
  });
};
var $reject = function(value){
  var promise = this;
  if(promise._d){ return; }
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if(!promise._a){ promise._a = promise._c.slice(); }
  notify$1(promise, true);
};
var $resolve = function(value){
  var promise = this
    , then;
  if(promise._d){ return; }
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if(promise === value){ throw TypeError$1("Promise can't be resolved itself"); }
    if(then = isThenable(value)){
      microtask(function(){
        var wrapper = {_w: promise, _d: false}; // wrap
        try {
          then.call(value, ctx$1($resolve, wrapper, 1), ctx$1($reject, wrapper, 1));
        } catch(e){
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify$1(promise, false);
    }
  } catch(e){
    $reject.call({_w: promise, _d: false}, e); // wrap
  }
};

// constructor polyfill
if(!USE_NATIVE){
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor){
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction$1(executor);
    Internal.call(this);
    try {
      executor(ctx$1($resolve, this, 1), ctx$1($reject, this, 1));
    } catch(err){
      $reject.call(this, err);
    }
  };
  Internal = function Promise(executor){
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = _redefineAll($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected){
      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail   = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process$1.domain : undefined;
      this._c.push(reaction);
      if(this._a){ this._a.push(reaction); }
      if(this._s){ notify$1(this, false); }
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function(onRejected){
      return this.then(undefined, onRejected);
    }
  });
  PromiseCapability = function(){
    var promise  = new Internal;
    this.promise = promise;
    this.resolve = ctx$1($resolve, promise, 1);
    this.reject  = ctx$1($reject, promise, 1);
  };
}

$export$3($export$3.G + $export$3.W + $export$3.F * !USE_NATIVE, {Promise: $Promise});
_setToStringTag($Promise, PROMISE);
_setSpecies(PROMISE);
Wrapper = _core[PROMISE];

// statics
$export$3($export$3.S + $export$3.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r){
    var capability = newPromiseCapability(this)
      , $$reject   = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export$3($export$3.S + $export$3.F * (LIBRARY$1 || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x){
    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
    if(x instanceof $Promise && sameConstructor(x.constructor, this)){ return x; }
    var capability = newPromiseCapability(this)
      , $$resolve  = capability.resolve;
    $$resolve(x);
    return capability.promise;
  }
});
$export$3($export$3.S + $export$3.F * !(USE_NATIVE && _iterDetect(function(iter){
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , resolve    = capability.resolve
      , reject     = capability.reject;
    var abrupt = perform(function(){
      var values    = []
        , index     = 0
        , remaining = 1;
      forOf(iterable, false, function(promise){
        var $index        = index++
          , alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function(value){
          if(alreadyCalled){ return; }
          alreadyCalled  = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if(abrupt){ reject(abrupt.error); }
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , reject     = capability.reject;
    var abrupt = perform(function(){
      forOf(iterable, false, function(promise){
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if(abrupt){ reject(abrupt.error); }
    return capability.promise;
  }
});

/**
 * @fileOverview
 * This file will hack `console` methods by `WXEnvironment.logLevel`.
 * So we can control how many and which messages will be sent by change the log level.
 * Additionally in native platform the message content must be primitive values and
 * using `nativeLog(...args, logLevelMark)` so we create a new `console` object in
 * global add a format process for its methods.
 */

var LEVELS = ['off', 'error', 'warn', 'info', 'log', 'debug'];
var levelMap = {};

var originalConsole = global.console;

/**
 * Hack console for native environment.
 */
function setNativeConsole () {
  generateLevelMap();

  /* istanbul ignore next */
  if (
    typeof global.console === 'undefined' || // Android
    (global.WXEnvironment && global.WXEnvironment.platform === 'iOS') // iOS
  ) {
    global.console = {
      debug: function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        if (checkLevel('debug')) { global.nativeLog.apply(global, format(args).concat( ['__DEBUG'] )); }
      },
      log: function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        if (checkLevel('log')) { global.nativeLog.apply(global, format(args).concat( ['__LOG'] )); }
      },
      info: function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        if (checkLevel('info')) { global.nativeLog.apply(global, format(args).concat( ['__INFO'] )); }
      },
      warn: function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        if (checkLevel('warn')) { global.nativeLog.apply(global, format(args).concat( ['__WARN'] )); }
      },
      error: function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        if (checkLevel('error')) { global.nativeLog.apply(global, format(args).concat( ['__ERROR'] )); }
      }
    };
  }
  else { // HTML5 or Node
    var debug = console.debug;
    var log = console.log;
    var info = console.info;
    var warn = console.warn;
    var error = console.error;
    console.__ori__ = { debug: debug, log: log, info: info, warn: warn, error: error };
    console.debug = function () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      if (checkLevel('debug')) { console.__ori__.debug.apply(console, args); }
    };
    console.log = function () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      if (checkLevel('log')) { console.__ori__.log.apply(console, args); }
    };
    console.info = function () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      if (checkLevel('info')) { console.__ori__.info.apply(console, args); }
    };
    console.warn = function () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      if (checkLevel('warn')) { console.__ori__.warn.apply(console, args); }
    };
    console.error = function () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      if (checkLevel('error')) { console.__ori__.error.apply(console, args); }
    };
  }
}

/**
 * Reset hacked console to original.
 */
/* istanbul ignore next */
function resetNativeConsole () {
  levelMap = {};
  global.console = originalConsole;
}

/**
 * Generate map for which types of message will be sent in a certain message level
 * as the order of LEVELS.
 */
function generateLevelMap () {
  LEVELS.forEach(function (level) {
    var levelIndex = LEVELS.indexOf(level);
    levelMap[level] = {};
    LEVELS.forEach(function (type) {
      var typeIndex = LEVELS.indexOf(type);
      if (typeIndex <= levelIndex) {
        levelMap[level][type] = true;
      }
    });
  });
}

/**
 * Check if a certain type of message will be sent in current log level of env.
 * @param  {string} type
 * @return {boolean}
 */
function checkLevel (type) {
  var logLevel = (global.WXEnvironment && global.WXEnvironment.logLevel) || 'log';
  return levelMap[logLevel] && levelMap[logLevel][type]
}

/**
 * Convert all log arguments into primitive values.
 * @param  {array} args
 * @return {array}
 */
/* istanbul ignore next */
function format (args) {
  return args.map(function (v) {
    var type = Object.prototype.toString.call(v);
    if (type.toLowerCase() === '[object object]') {
      v = JSON.stringify(v);
    }
    else {
      v = String(v);
    }
    return v
  })
}

/**
 * @fileOverview
 * Polyfill `setTimeout` on Android V8 using native method
 * `setTimeoutNative(callbackId, time)` and JS method
 * `setTimeoutCallback(callbackId)`.
 * This polyfill is only used in virtual-DOM diff & flush agorithm. Not
 * accessed by JS Bundle code (The timer APIs polyfill for JS Bundle is in
 * `html5/default/app/ctrl.js`).
 */

var originalSetTimeout = global.setTimeout;
var setTimeoutNative = global.setTimeoutNative;

/**
 * Set up native timer
 */
/* istanbul ignore next */
function setNativeTimer () {
  if (typeof setTimeout === 'undefined' &&
  typeof setTimeoutNative === 'function') {
    var timeoutMap = {};
    var timeoutId = 0;

    global.setTimeout = function (cb, time) {
      timeoutMap[++timeoutId] = cb;
      setTimeoutNative(timeoutId.toString(), time);
    };

    global.setTimeoutCallback = function (id) {
      if (typeof timeoutMap[id] === 'function') {
        timeoutMap[id]();
        delete timeoutMap[id];
      }
    };
  }
}

/* istanbul ignore next */
function resetNativeTimer () {
  global.setTimeout = originalSetTimeout;
  global.setTimeoutCallback = null;
}

/**
 * Freeze the prototype of javascript build-in objects.
 */
/* istanbul ignore next */
function freezePrototype$1 () {
  Object.freeze(Object);
  Object.freeze(Array);

  Object.freeze(Object.prototype);
  Object.freeze(Array.prototype);
  Object.freeze(String.prototype);
  Object.freeze(Number.prototype);
  Object.freeze(Boolean.prototype);

  Object.freeze(Error.prototype);
  Object.freeze(Date.prototype);
  Object.freeze(RegExp.prototype);
}

// import promise hack and polyfills

var docMap = {};

/**
 * Add a document object into docMap.
 * @param {string} id
 * @param {object} document
 */
function addDoc (id, doc) {
  if (id) {
    docMap[id] = doc;
  }
}

/**
 * Get the document object by id.
 * @param {string} id
 */
function getDoc (id) {
  return docMap[id]
}

/**
 * Remove the document from docMap by id.
 * @param {string} id
 */
function removeDoc (id) {
  delete docMap[id];
}

/**
 * Get listener by document id.
 * @param {string} id
 * @return {object} listener
 */
function getListener (id) {
  var doc = docMap[id];
  if (doc && doc.listener) {
    return doc.listener
  }
  return null
}

/**
 * Get a unique id.
 */
var nextNodeRef = 1;
function uniqueId () {
  return (nextNodeRef++).toString()
}

/**
 * Append body node to documentElement.
 * @param {object} document
 * @param {object} node
 * @param {object} before
 */
function appendBody (doc, node, before) {
  var documentElement = doc.documentElement;

  if (documentElement.pureChildren.length > 0 || node.parentNode) {
    return
  }
  var children = documentElement.children;
  var beforeIndex = children.indexOf(before);
  if (beforeIndex < 0) {
    children.push(node);
  }
  else {
    children.splice(beforeIndex, 0, node);
  }

  if (node.nodeType === 1) {
    if (node.role === 'body') {
      node.docId = doc.id;
      node.ownerDocument = doc;
      node.parentNode = documentElement;
      linkParent(node, documentElement);
    }
    else {
      node.children.forEach(function (child) {
        child.parentNode = node;
      });
      setBody(doc, node);
      node.docId = doc.id;
      node.ownerDocument = doc;
      linkParent(node, documentElement);
      delete doc.nodeMap[node.nodeId];
    }
    documentElement.pureChildren.push(node);
    doc.listener.createBody(node);
  }
  else {
    node.parentNode = documentElement;
    doc.nodeMap[node.ref] = node;
  }
}

/**
 * Set up body node.
 * @param {object} document
 * @param {object} element
 */
function setBody (doc, el) {
  el.role = 'body';
  el.depth = 1;
  delete doc.nodeMap[el.nodeId];
  el.ref = '_root';
  doc.nodeMap._root = el;
  doc.body = el;
}

/**
 * Establish the connection between parent and child node.
 * @param {object} child node
 * @param {object} parent node
 */
function linkParent (node, parent) {
  node.parentNode = parent;
  if (parent.docId) {
    node.docId = parent.docId;
    node.ownerDocument = parent.ownerDocument;
    node.ownerDocument.nodeMap[node.nodeId] = node;
    node.depth = parent.depth + 1;
  }
  node.children.forEach(function (child) {
    linkParent(child, node);
  });
}

/**
 * Get the next sibling element.
 * @param {object} node
 */
function nextElement (node) {
  while (node) {
    if (node.nodeType === 1) {
      return node
    }
    node = node.nextSibling;
  }
}

/**
 * Get the previous sibling element.
 * @param {object} node
 */
function previousElement (node) {
  while (node) {
    if (node.nodeType === 1) {
      return node
    }
    node = node.previousSibling;
  }
}

/**
 * Insert a node into list at the specified index.
 * @param {object} target node
 * @param {array} list
 * @param {number} newIndex
 * @param {boolean} changeSibling
 * @return {number} newIndex
 */
function insertIndex (target, list, newIndex, changeSibling) {
  /* istanbul ignore next */
  if (newIndex < 0) {
    newIndex = 0;
  }
  var before = list[newIndex - 1];
  var after = list[newIndex];
  list.splice(newIndex, 0, target);
  if (changeSibling) {
    before && (before.nextSibling = target);
    target.previousSibling = before;
    target.nextSibling = after;
    after && (after.previousSibling = target);
  }
  return newIndex
}

/**
 * Move the node to a new index in list.
 * @param {object} target node
 * @param {array} list
 * @param {number} newIndex
 * @param {boolean} changeSibling
 * @return {number} newIndex
 */
function moveIndex (target, list, newIndex, changeSibling) {
  var index = list.indexOf(target);
  /* istanbul ignore next */
  if (index < 0) {
    return -1
  }
  if (changeSibling) {
    var before = list[index - 1];
    var after = list[index + 1];
    before && (before.nextSibling = after);
    after && (after.previousSibling = before);
  }
  list.splice(index, 1);
  var newIndexAfter = newIndex;
  if (index <= newIndex) {
    newIndexAfter = newIndex - 1;
  }
  var beforeNew = list[newIndexAfter - 1];
  var afterNew = list[newIndexAfter];
  list.splice(newIndexAfter, 0, target);
  if (changeSibling) {
    beforeNew && (beforeNew.nextSibling = target);
    target.previousSibling = beforeNew;
    target.nextSibling = afterNew;
    afterNew && (afterNew.previousSibling = target);
  }
  if (index === newIndexAfter) {
    return -1
  }
  return newIndex
}

/**
 * Remove the node from list.
 * @param {object} target node
 * @param {array} list
 * @param {boolean} changeSibling
 */
function removeIndex (target, list, changeSibling) {
  var index = list.indexOf(target);
  /* istanbul ignore next */
  if (index < 0) {
    return
  }
  if (changeSibling) {
    var before = list[index - 1];
    var after = list[index + 1];
    before && (before.nextSibling = after);
    after && (after.previousSibling = before);
  }
  list.splice(index, 1);
}

/**
 * @fileOverview
 * Virtual-DOM Node. It's the supper class of Element and Comment.
 */

function Node () {
  this.nodeId = uniqueId();
  this.ref = this.nodeId;
  this.children = [];
  this.pureChildren = [];
  this.parentNode = null;
  this.nextSibling = null;
  this.previousSibling = null;
}

/**
 * Destroy current node, and remove itself form nodeMap.
 */
Node.prototype.destroy = function () {
  var doc = getDoc(this.docId);
  if (doc) {
    delete this.docId;
    delete doc.nodeMap[this.nodeId];
  }
  this.children.forEach(function (child) {
    child.destroy();
  });
};

var Element$1;

function setElement (El) {
  Element$1 = El;
}

/**
 * A map which stores all type of elements.
 * @type {Object}
 */
var elementTypes = {};

/**
 * Register an extended element type with component methods.
 * @param  {string} type    component type
 * @param  {array}  methods a list of method names
 */
function registerElement (type, methods) {
  // Skip when no special component methods.
  if (!methods || !methods.length) {
    return
  }

  // Init constructor.
  var XElement = function (props) {
    Element$1.call(this, type, props, true);
  };

  // Init prototype.
  XElement.prototype = Object.create(Element$1.prototype);
  Object.defineProperty(XElement.prototype, 'constructor', {
    configurable: false,
    enumerable: false,
    writable: false,
    value: Element$1
  });

  // Add methods to prototype.
  methods.forEach(function (methodName) {
    XElement.prototype[methodName] = function () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      var listener = getListener(this.docId);
      if (listener) {
        listener.callComponentMethod(this.ref, type, methodName, args);
      }
    };
  });

  // Add to element type map.
  elementTypes[type] = XElement;
}

/**
 * Clear all element types. Only for testing.
 */

/**
 * @fileOverview
 * Virtual-DOM Element.
 */

var DEFAULT_TAG_NAME = 'div';

function Element (type, props, isExtended) {
  if ( type === void 0 ) type = DEFAULT_TAG_NAME;

  var XElement = elementTypes[type];
  if (XElement && !isExtended) {
    return new XElement(props)
  }
  props = props || {};
  this.nodeType = 1;
  this.nodeId = uniqueId();
  this.ref = this.nodeId;
  this.type = type;
  this.attr = props.attr || {};
  this.style = props.style || {};
  this.classStyle = props.classStyle || {};
  this.event = {};
  this.children = [];
  this.pureChildren = [];
}

Element.prototype = Object.create(Node.prototype);
Element.prototype.constructor = Element;

function registerNode (docId, node) {
  var doc = getDoc(docId);
  doc.nodeMap[node.nodeId] = node;
}

setElement(Element);

Object.assign(Element.prototype, {
  /**
   * Append a child node.
   * @param {object} node
   * @return {undefined | number} the signal sent by native
   */
  appendChild: function appendChild (node) {
    if (node.parentNode && node.parentNode !== this) {
      return
    }
    /* istanbul ignore else */
    if (!node.parentNode) {
      linkParent(node, this);
      insertIndex(node, this.children, this.children.length, true);
      if (this.docId) {
        registerNode(this.docId, node);
      }
      if (node.nodeType === 1) {
        insertIndex(node, this.pureChildren, this.pureChildren.length);
        var listener = getListener(this.docId);
        if (listener) {
          return listener.addElement(node, this.ref, -1)
        }
      }
    }
    else {
      moveIndex(node, this.children, this.children.length, true);
      if (node.nodeType === 1) {
        var index = moveIndex(node, this.pureChildren, this.pureChildren.length);
        var listener$1 = getListener(this.docId);
        if (listener$1 && index >= 0) {
          return listener$1.moveElement(node.ref, this.ref, index)
        }
      }
    }
  },

  /**
   * Insert a node before specified node.
   * @param {object} node
   * @param {object} before
   * @return {undefined | number} the signal sent by native
   */
  insertBefore: function insertBefore (node, before) {
    if (node.parentNode && node.parentNode !== this) {
      return
    }
    if (node === before || (node.nextSibling && node.nextSibling === before)) {
      return
    }
    if (!node.parentNode) {
      linkParent(node, this);
      insertIndex(node, this.children, this.children.indexOf(before), true);
      if (this.docId) {
        registerNode(this.docId, node);
      }
      if (node.nodeType === 1) {
        var pureBefore = nextElement(before);
        var index = insertIndex(
          node,
          this.pureChildren,
          pureBefore
          ? this.pureChildren.indexOf(pureBefore)
          : this.pureChildren.length
        );
        var listener = getListener(this.docId);
        if (listener) {
          return listener.addElement(node, this.ref, index)
        }
      }
    }
    else {
      moveIndex(node, this.children, this.children.indexOf(before), true);
      if (node.nodeType === 1) {
        var pureBefore$1 = nextElement(before);
        /* istanbul ignore next */
        var index$1 = moveIndex(
          node,
          this.pureChildren,
          pureBefore$1
          ? this.pureChildren.indexOf(pureBefore$1)
          : this.pureChildren.length
        );
        var listener$1 = getListener(this.docId);
        if (listener$1 && index$1 >= 0) {
          return listener$1.moveElement(node.ref, this.ref, index$1)
        }
      }
    }
  },

  /**
   * Insert a node after specified node.
   * @param {object} node
   * @param {object} after
   * @return {undefined | number} the signal sent by native
   */
  insertAfter: function insertAfter (node, after) {
    if (node.parentNode && node.parentNode !== this) {
      return
    }
    if (node === after || (node.previousSibling && node.previousSibling === after)) {
      return
    }
    if (!node.parentNode) {
      linkParent(node, this);
      insertIndex(node, this.children, this.children.indexOf(after) + 1, true);
      /* istanbul ignore else */
      if (this.docId) {
        registerNode(this.docId, node);
      }
      if (node.nodeType === 1) {
        var index = insertIndex(
          node,
          this.pureChildren,
          this.pureChildren.indexOf(previousElement(after)) + 1
        );
        var listener = getListener(this.docId);
        /* istanbul ignore else */
        if (listener) {
          return listener.addElement(node, this.ref, index)
        }
      }
    }
    else {
      moveIndex(node, this.children, this.children.indexOf(after) + 1, true);
      if (node.nodeType === 1) {
        var index$1 = moveIndex(
          node,
          this.pureChildren,
          this.pureChildren.indexOf(previousElement(after)) + 1
        );
        var listener$1 = getListener(this.docId);
        if (listener$1 && index$1 >= 0) {
          return listener$1.moveElement(node.ref, this.ref, index$1)
        }
      }
    }
  },

  /**
   * Remove a child node, and decide whether it should be destroyed.
   * @param {object} node
   * @param {boolean} preserved
   */
  removeChild: function removeChild (node, preserved) {
    if (node.parentNode) {
      removeIndex(node, this.children, true);
      if (node.nodeType === 1) {
        removeIndex(node, this.pureChildren);
        var listener = getListener(this.docId);
        if (listener) {
          listener.removeElement(node.ref);
        }
      }
    }
    if (!preserved) {
      node.destroy();
    }
  },

  /**
   * Clear all child nodes.
   */
  clear: function clear () {
    var listener = getListener(this.docId);
    /* istanbul ignore else */
    if (listener) {
      this.pureChildren.forEach(function (node) {
        listener.removeElement(node.ref);
      });
    }
    this.children.forEach(function (node) {
      node.destroy();
    });
    this.children.length = 0;
    this.pureChildren.length = 0;
  },

  /**
   * Set an attribute, and decide whether the task should be send to native.
   * @param {string} key
   * @param {string | number} value
   * @param {boolean} silent
   */
  setAttr: function setAttr (key, value, silent) {
    if (this.attr[key] === value && silent !== false) {
      return
    }
    this.attr[key] = value;
    var listener = getListener(this.docId);
    if (!silent && listener) {
      listener.setAttr(this.ref, key, value);
    }
  },

  /**
   * Set a style property, and decide whether the task should be send to native.
   * @param {string} key
   * @param {string | number} value
   * @param {boolean} silent
   */
  setStyle: function setStyle (key, value, silent) {
    if (this.style[key] === value && silent !== false) {
      return
    }
    this.style[key] = value;
    var listener = getListener(this.docId);
    if (!silent && listener) {
      listener.setStyle(this.ref, key, value);
    }
  },

  /**
   * Set style properties from class.
   * @param {object} classStyle
   */
  setClassStyle: function setClassStyle (classStyle) {
    var this$1 = this;

    // reset previous class style to empty string
    for (var key in this.classStyle) {
      this$1.classStyle[key] = '';
    }

    Object.assign(this.classStyle, classStyle);
    var listener = getListener(this.docId);
    if (listener) {
      listener.setStyles(this.ref, this.toStyle());
    }
  },

  /**
   * Add an event handler.
   * @param {string} event type
   * @param {function} event handler
   */
  addEvent: function addEvent (type, handler) {
    if (!this.event[type]) {
      this.event[type] = handler;
      var listener = getListener(this.docId);
      if (listener) {
        listener.addEvent(this.ref, type);
      }
    }
  },

  /**
   * Remove an event handler.
   * @param {string} event type
   */
  removeEvent: function removeEvent (type) {
    if (this.event[type]) {
      delete this.event[type];
      var listener = getListener(this.docId);
      if (listener) {
        listener.removeEvent(this.ref, type);
      }
    }
  },

  /**
   * Fire an event manually.
   * @param {string} event type
   * @param {function} event handler
   * @return {} anything returned by handler function
   */
  fireEvent: function fireEvent (type, e) {
    var handler = this.event[type];
    if (handler) {
      return handler.call(this, e)
    }
  },

  /**
   * Get all styles of current element.
   * @return {object} style
   */
  toStyle: function toStyle () {
    return Object.assign({}, this.classStyle, this.style)
  },

  /**
   * Convert current element to JSON like object.
   * @return {object} element
   */
  toJSON: function toJSON () {
    var result = {
      ref: this.ref.toString(),
      type: this.type,
      attr: this.attr,
      style: this.toStyle()
    };
    var event = Object.keys(this.event);
    if (event.length) {
      result.event = event;
    }
    if (this.pureChildren.length) {
      result.children = this.pureChildren.map(function (child) { return child.toJSON(); });
    }
    return result
  },

  /**
   * Convert to HTML element tag string.
   * @return {stirng} html
   */
  toString: function toString () {
    return '<' + this.type +
    ' attr=' + JSON.stringify(this.attr) +
    ' style=' + JSON.stringify(this.toStyle()) + '>' +
    this.pureChildren.map(function (child) { return child.toString(); }).join('') +
    '</' + this.type + '>'
  }
});

/**
 * @fileOverview
 * Virtual-DOM Comment.
 */

function Comment (value) {
  this.nodeType = 8;
  this.nodeId = uniqueId();
  this.ref = this.nodeId;
  this.type = 'comment';
  this.value = value;
  this.children = [];
  this.pureChildren = [];
}

Comment.prototype = Object.create(Node.prototype);
Comment.prototype.constructor = Comment;

/**
 * Convert to HTML comment string.
 * @return {stirng} html
 */
Comment.prototype.toString = function () {
  return '<!-- ' + this.value + ' -->'
};

/**
 * @fileOverview
 * Listen virtual-dom operations and create corresponding actions.
 */

function Listener (id, handler) {
  this.id = id;
  this.batched = false;
  this.updates = [];
  if (typeof handler === 'function') {
    Object.defineProperty(this, 'handler', {
      configurable: true,
      enumerable: true,
      writable: true,
      value: handler
    });
  }
  else {
    console.error('[JS Runtime] invalid parameter, handler must be a function');
  }
}

/**
 * Create the action object.
 * @param {string} name
 * @param {array} arguments
 * @return {object} action
 */
function createAction (name, args) {
  if ( args === void 0 ) args = [];

  return { module: 'dom', method: name, args: args }
}

Object.assign(Listener.prototype, {
  /**
   * Send the "createFinish" signal.
   * @param {function} callback
   * @return {undefined | number} the signal sent by native
   */
  createFinish: function createFinish (callback) {
    var handler = this.handler;
    return handler([createAction('createFinish')], callback)
  },

  /**
   * Send the "updateFinish" signal.
   * @param {function} callback
   * @return {undefined | number} the signal sent by native
   */
  updateFinish: function updateFinish (callback) {
    var handler = this.handler;
    return handler([createAction('updateFinish')], callback)
  },

  /**
   * Send the "refreshFinish" signal.
   * @param {function} callback
   * @return {undefined | number} the signal sent by native
   */
  refreshFinish: function refreshFinish (callback) {
    var handler = this.handler;
    return handler([createAction('refreshFinish')], callback)
  },

  /**
   * Send the "createBody" signal.
   * @param {object} element
   * @return {undefined | number} the signal sent by native
   */
  createBody: function createBody (element) {
    var body = element.toJSON();
    var children = body.children;
    delete body.children;
    var actions = [createAction('createBody', [body])];
    if (children) {
      actions.push.apply(actions, children.map(function (child) {
        return createAction('addElement', [body.ref, child, -1])
      }));
    }
    return this.addActions(actions)
  },

  /**
   * Send the "addElement" signal.
   * @param {object} element
   * @param {stirng} reference id
   * @param {number} index
   * @return {undefined | number} the signal sent by native
   */
  addElement: function addElement (element, ref, index) {
    if (!(index >= 0)) {
      index = -1;
    }
    return this.addActions(createAction('addElement', [ref, element.toJSON(), index]))
  },

  /**
   * Send the "removeElement" signal.
   * @param {stirng} reference id
   * @return {undefined | number} the signal sent by native
   */
  removeElement: function removeElement (ref) {
    if (Array.isArray(ref)) {
      var actions = ref.map(function (r) { return createAction('removeElement', [r]); });
      return this.addActions(actions)
    }
    return this.addActions(createAction('removeElement', [ref]))
  },

  /**
   * Send the "moveElement" signal.
   * @param {stirng} target reference id
   * @param {stirng} parent reference id
   * @param {number} index
   * @return {undefined | number} the signal sent by native
   */
  moveElement: function moveElement (targetRef, parentRef, index) {
    return this.addActions(createAction('moveElement', [targetRef, parentRef, index]))
  },

  /**
   * Send the "updateAttrs" signal.
   * @param {stirng} reference id
   * @param {stirng} key
   * @param {stirng} value
   * @return {undefined | number} the signal sent by native
   */
  setAttr: function setAttr (ref, key, value) {
    var result = {};
    result[key] = value;
    return this.addActions(createAction('updateAttrs', [ref, result]))
  },

  /**
   * Send the "updateStyle" signal, update a sole style.
   * @param {stirng} reference id
   * @param {stirng} key
   * @param {stirng} value
   * @return {undefined | number} the signal sent by native
   */
  setStyle: function setStyle (ref, key, value) {
    var result = {};
    result[key] = value;
    return this.addActions(createAction('updateStyle', [ref, result]))
  },

  /**
   * Send the "updateStyle" signal.
   * @param {stirng} reference id
   * @param {object} style
   * @return {undefined | number} the signal sent by native
   */
  setStyles: function setStyles (ref, style) {
    return this.addActions(createAction('updateStyle', [ref, style]))
  },

  /**
   * Send the "addEvent" signal.
   * @param {stirng} reference id
   * @param {string} event type
   * @return {undefined | number} the signal sent by native
   */
  addEvent: function addEvent (ref, type) {
    return this.addActions(createAction('addEvent', [ref, type]))
  },

  /**
   * Send the "removeEvent" signal.
   * @param {stirng} reference id
   * @param {string} event type
   * @return {undefined | number} the signal sent by native
   */
  removeEvent: function removeEvent (ref, type) {
    return this.addActions(createAction('removeEvent', [ref, type]))
  },

  /**
   * Call a component method with args.
   * @param  {string} ref
   * @param  {string} type
   * @param  {string} method
   * @param  {array}  args
   * @return {undefined | number} the signal sent by native
   */
  callComponentMethod: function callComponentMethod (ref, type, method, args) {
    return this.addActions({
      component: type,
      method: method,
      ref: ref,
      args: [].concat( args )
    })
  },

  /**
   * Default handler.
   * @param {object | array} actions
   * @param {function} callback
   * @return {} anything returned by callback function
   */
  handler: function handler (actions, cb) {
    return cb && cb()
  },

  /**
   * Add actions into updates.
   * @param {object | array} actions
   * @return {undefined | number} the signal sent by native
   */
  addActions: function addActions (actions) {
    var updates = this.updates;
    var handler = this.handler;

    if (!Array.isArray(actions)) {
      actions = [actions];
    }

    if (this.batched) {
      updates.push.apply(updates, actions);
    }
    else {
      return handler(actions)
    }
  }
});

/**
 * @fileOverview
 * Task handler for communication between javascript and native.
 */

var handlerMap = {
  createBody: 'callCreateBody',
  addElement: 'callAddElement',
  removeElement: 'callRemoveElement',
  moveElement: 'callMoveElement',
  updateAttrs: 'callUpdateAttrs',
  updateStyle: 'callUpdateStyle',
  addEvent: 'callAddEvent',
  removeEvent: 'callRemoveEvent'
};

/**
 * Create a task handler.
 * @param {string} id
 * @param {function} handler
 * @return {function} taskHandler
 */
function createHandler (id, handler) {
  var defaultHandler = handler || callNative;

  /* istanbul ignore if */
  if (typeof defaultHandler !== 'function') {
    console.error('[JS Runtime] no default handler');
  }

  return function taskHandler (tasks) {
    /* istanbul ignore if */
    if (!Array.isArray(tasks)) {
      tasks = [tasks];
    }
    for (var i = 0; i < tasks.length; i++) {
      var returnValue = dispatchTask(id, tasks[i], defaultHandler);
      if (returnValue === -1) {
        return returnValue
      }
    }
  }
}

/**
 * Check if there is a corresponding available handler in the environment.
 * @param {string} module
 * @param {string} method
 * @return {boolean}
 */
function hasAvailableHandler (module, method) {
  return module === 'dom'
    && handlerMap[method]
    && typeof global[handlerMap[method]] === 'function'
}

/**
 * Dispatch the task to the specified handler.
 * @param {string} id
 * @param {object} task
 * @param {function} defaultHandler
 * @return {number} signal returned from native
 */
function dispatchTask (id, task, defaultHandler) {
  var module = task.module;
  var method = task.method;
  var args = task.args;

  if (hasAvailableHandler(module, method)) {
    return global[handlerMap[method]].apply(global, [ id ].concat( args, ['-1'] ))
  }

  return defaultHandler(id, [task], '-1')
}

/**
 * @fileOverview
 * Virtual-DOM Document.
 */

function Document (id, url, handler) {
  id = id ? id.toString() : '';
  this.id = id;
  this.URL = url;

  addDoc(id, this);
  this.nodeMap = {};
  var L = Document.Listener || Listener;
  this.listener = new L(id, handler || createHandler(id, Document.handler));
  this.createDocumentElement();
}

// default task handler
Document.handler = null;

/**
 * Update all changes for an element.
 * @param {object} element
 * @param {object} changes
 */
function updateElement (el, changes) {
  var attrs = changes.attrs || {};
  for (var name in attrs) {
    el.setAttr(name, attrs[name], true);
  }
  var style = changes.style || {};
  for (var name$1 in style) {
    el.setStyle(name$1, style[name$1], true);
  }
}

Object.assign(Document.prototype, {
  /**
   * Get the node from nodeMap.
   * @param {string} reference id
   * @return {object} node
   */
  getRef: function getRef (ref) {
    return this.nodeMap[ref]
  },

  /**
   * Turn on batched updates.
   */
  open: function open () {
    this.listener.batched = false;
  },

  /**
   * Turn off batched updates.
   */
  close: function close () {
    this.listener.batched = true;
  },

  /**
   * Create the document element.
   * @return {object} documentElement
   */
  createDocumentElement: function createDocumentElement () {
    var this$1 = this;

    if (!this.documentElement) {
      var el = new Element('document');
      el.docId = this.id;
      el.ownerDocument = this;
      el.role = 'documentElement';
      el.depth = 0;
      el.ref = '_documentElement';
      this.nodeMap._documentElement = el;
      this.documentElement = el;

      Object.defineProperty(el, 'appendChild', {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function (node) {
          appendBody(this$1, node);
        }
      });

      Object.defineProperty(el, 'insertBefore', {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function (node, before) {
          appendBody(this$1, node, before);
        }
      });
    }

    return this.documentElement
  },

  /**
   * Create the body element.
   * @param {string} type
   * @param {objct} props
   * @return {object} body element
   */
  createBody: function createBody (type, props) {
    if (!this.body) {
      var el = new Element(type, props);
      setBody(this, el);
    }

    return this.body
  },

  /**
   * Create an element.
   * @param {string} tagName
   * @param {objct} props
   * @return {object} element
   */
  createElement: function createElement (tagName, props) {
    return new Element(tagName, props)
  },

  /**
   * Create an comment.
   * @param {string} text
   * @return {object} comment
   */
  createComment: function createComment (text) {
    return new Comment(text)
  },

  /**
   * Fire an event on specified element manually.
   * @param {object} element
   * @param {string} event type
   * @param {object} event object
   * @param {object} dom changes
   * @return {} anything returned by handler function
   */
  fireEvent: function fireEvent (el, type, e, domChanges) {
    if (!el) {
      return
    }
    e = e || {};
    e.type = type;
    e.target = el;
    e.timestamp = Date.now();
    if (domChanges) {
      updateElement(el, domChanges);
    }
    return el.fireEvent(type, e)
  },

  /**
   * Destroy current document, and remove itself form docMap.
   */
  destroy: function destroy () {
    delete this.listener;
    delete this.nodeMap;
    removeDoc(this.id);
  }
});

var frameworks;

var versionRegExp = /^\s*\/\/ *(\{[^}]*\}) *\r?\n/;

/**
 * Detect a JS Bundle code and make sure which framework it's based to. Each JS
 * Bundle should make sure that it starts with a line of JSON comment and is
 * more that one line.
 * @param  {string} code
 * @return {object}
 */
function checkVersion (code) {
  var info;
  var result = versionRegExp.exec(code);
  if (result) {
    try {
      info = JSON.parse(result[1]);
    }
    catch (e) {}
  }
  return info
}

var instanceMap = {};

/**
 * Check which framework a certain JS Bundle code based to. And create instance
 * by this framework.
 * @param {string} id
 * @param {string} code
 * @param {object} config
 * @param {object} data
 */
function createInstance (id, code, config, data) {
  var info = instanceMap[id];
  if (!info) {
    info = checkVersion(code) || {};
    if (!frameworks[info.framework]) {
      info.framework = 'Weex';
    }
    info.created = Date.now();
    instanceMap[id] = info;
    config = JSON.parse(JSON.stringify(config || {}));
    config.bundleVersion = info.version;
    config.env = JSON.parse(JSON.stringify(global.WXEnvironment || {}));
    console.debug(("[JS Framework] create an " + (info.framework) + "@" + (config.bundleVersion) + " instance from " + (config.bundleVersion)));
    return frameworks[info.framework].createInstance(id, code, config, data)
  }
  return new Error(("invalid instance id \"" + id + "\""))
}

var methods = {
  createInstance: createInstance
};

/**
 * Register methods which init each frameworks.
 * @param {string} methodName
 */
function genInit (methodName) {
  methods[methodName] = function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    if (methodName === 'registerComponents') {
      checkComponentMethods(args[0]);
    }
    for (var name in frameworks) {
      var framework = frameworks[name];
      if (framework && framework[methodName]) {
        framework[methodName].apply(framework, args);
      }
    }
  };
}

function checkComponentMethods (components) {
  if (Array.isArray(components)) {
    components.forEach(function (name) {
      if (name && name.type && name.methods) {
        registerElement(name.type, name.methods);
      }
    });
  }
}

/**
 * Register methods which will be called for each instance.
 * @param {string} methodName
 */
function genInstance (methodName) {
  methods[methodName] = function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var id = args[0];
    var info = instanceMap[id];
    if (info && frameworks[info.framework]) {
      var result = (ref = frameworks[info.framework])[methodName].apply(ref, args);
      if (methodName === 'destroyInstance') {
        delete instanceMap[id];
      }
      return result
    }
    return new Error(("invalid instance id \"" + id + "\""))
    var ref;
  };
}

/**
 * Adapt some legacy method(s) which will be called for each instance. These
 * methods should be deprecated and removed later.
 * @param {string} methodName
 * @param {string} nativeMethodName
 */
function adaptInstance (methodName, nativeMethodName) {
  methods[nativeMethodName] = function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var id = args[0];
    var info = instanceMap[id];
    if (info && frameworks[info.framework]) {
      return (ref = frameworks[info.framework])[methodName].apply(ref, args)
    }
    return new Error(("invalid instance id \"" + id + "\""))
    var ref;
  };
}

function init$1 (config) {
  frameworks = config.frameworks || {};

  // Init each framework by `init` method and `config` which contains three
  // virtual-DOM Class: `Document`, `Element` & `Comment`, and a JS bridge method:
  // `sendTasks(...args)`.
  for (var name in frameworks) {
    var framework = frameworks[name];
    framework.init(config);
  }

  // @todo: The method `registerMethods` will be re-designed or removed later.
   ['registerComponents', 'registerModules', 'registerMethods'].forEach(genInit)

  ; ['destroyInstance', 'refreshInstance', 'receiveTasks', 'getRoot'].forEach(genInstance);

  adaptInstance('receiveTasks', 'callJS');

  return methods
}

/**
 * @fileOverview
 * Register framework(s) in JS runtime. Weex supply two layers for 3rd-party
 * framework(s): one is the instance management layer, another is the
 * virtual-DOM layer.
 */

var config = {
  Document: Document, Element: Element, Comment: Comment, Listener: Listener,
  sendTasks: function sendTasks () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    return global.callNative.apply(global, args)
  }
};

Document.handler = config.sendTasks;

/* istanbul ignore next */
function freezePrototype$$1 () {
  freezePrototype$1();

  Object.freeze(Element);
  Object.freeze(Comment);
  Object.freeze(Listener);
  Object.freeze(Document.prototype);
  Object.freeze(Element.prototype);
  Object.freeze(Comment.prototype);
  Object.freeze(Listener.prototype);
}

var runtime = {
  setNativeConsole: setNativeConsole,
  resetNativeConsole: resetNativeConsole,
  setNativeTimer: setNativeTimer,
  resetNativeTimer: resetNativeTimer,
  freezePrototype: freezePrototype$$1,
  init: init$1,
  config: config
};

var config$1 = {};

var instanceMap$1 = {};

function init$2 (cfg) {
  config$1.Document = cfg.Document;
  config$1.Element = cfg.Element;
  config$1.Comment = cfg.Comment;
  config$1.sendTasks = cfg.sendTasks;
}

function registerComponents (components) {}

function registerModules (modules) {}

function registerMethods (apis) {}

function prepareInstance (id, options, data) {}

function createInstance$1 (id, code, options, data) {
  var document = new config$1.Document(id, options.bundleUrl);
  var callbacks = {};
  var lastCallbackId = 0;
  document.addCallback = function (func) {
    lastCallbackId++;
    callbacks[lastCallbackId] = func;
    return lastCallbackId
  };
  document.handleCallback = function (funcId, data, ifLast) {
    var callback = callbacks[funcId];
    if (ifLast) {
      delete callbacks[funcId];
    }
    return callback(data)
  };
  instanceMap$1[id] = document;
  var result = new Function(
    'Document',
    'Element',
    'Comment',
    'sendTasks',
    'id',
    'options',
    'data',
    'document',
    code
  );
  return result(
    config$1.Document,
    config$1.Element,
    config$1.Comment,
    config$1.sendTasks,
    id,
    options,
    data,
    document
  )
}

function refreshInstance (id, data) {}

function destroyInstance (id) {
  delete instanceMap$1[id];
}

function getRoot (id) {
  return instanceMap$1[id].body.toJSON()
}

function receiveTasks (id, tasks) {
  var jsHandlers = {
    fireEvent: function (id, ref, type, data, domChanges) {
      var document = instanceMap$1[id];
      var el = document.getRef(ref);
      return document.fireEvent(el, type, data, domChanges)
    },

    callback: function (id, funcId, data, ifLast) {
      var document = instanceMap$1[id];
      return document.handleCallback(funcId, data, ifLast)
    }
  };

  var document = instanceMap$1[id];
  if (document && Array.isArray(tasks)) {
    var results = [];
    tasks.forEach(function (task) {
      var handler = jsHandlers[task.method];
      var args = [].concat( task.args );
      if (typeof handler === 'function') {
        args.unshift(id);
        results.push(handler.apply(void 0, args));
      }
    });
    return results
  }
}

var init_1 = init$2;
var registerComponents_1 = registerComponents;
var registerModules_1 = registerModules;
var registerMethods_1 = registerMethods;
var prepareInstance_1 = prepareInstance;
var createInstance_1 = createInstance$1;
var refreshInstance_1 = refreshInstance;
var destroyInstance_1 = destroyInstance;
var getRoot_1 = getRoot;
var receiveTasks_1 = receiveTasks;

var index = {
	init: init_1,
	registerComponents: registerComponents_1,
	registerModules: registerModules_1,
	registerMethods: registerMethods_1,
	prepareInstance: prepareInstance_1,
	createInstance: createInstance_1,
	refreshInstance: refreshInstance_1,
	destroyInstance: destroyInstance_1,
	getRoot: getRoot_1,
	receiveTasks: receiveTasks_1
};



var Vanilla = Object.freeze({
	default: index,
	__moduleExports: index,
	init: init_1,
	registerComponents: registerComponents_1,
	registerModules: registerModules_1,
	registerMethods: registerMethods_1,
	prepareInstance: prepareInstance_1,
	createInstance: createInstance_1,
	refreshInstance: refreshInstance_1,
	destroyInstance: destroyInstance_1,
	getRoot: getRoot_1,
	receiveTasks: receiveTasks_1
});

var index_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/*  */

/**
 * Convert a value to a string that is actually rendered.
 */
function _toString (val) {
  return val == null
    ? ''
    : typeof val === 'object'
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert a input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val, 10);
  return (n || n === 0) ? n : val
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Remove an item from an array
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether the object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Check if value is primitive
 */
function isPrimitive (value) {
  return typeof value === 'string' || typeof value === 'number'
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  }
}

/**
 * Camelize a hyphen-delmited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /([^-])([A-Z])/g;
var hyphenate = cached(function (str) {
  return str
    .replace(hyphenateRE, '$1-$2')
    .replace(hyphenateRE, '$1-$2')
    .toLowerCase()
});

/**
 * Simple bind, faster than native
 */
function bind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }
  // record original fn length
  boundFn._length = fn.length;
  return boundFn
}

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
var toString = Object.prototype.toString;
var OBJECT_STRING = '[object Object]';
function isPlainObject (obj) {
  return toString.call(obj) === OBJECT_STRING
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/**
 * Perform no operation.
 */
function noop () {}

/**
 * Always return false.
 */
var no = function () { return false; };

/**
 * Generate a static keys string from compiler modules.
 */
function genStaticKeys (modules) {
  return modules.reduce(function (keys, m) {
    return keys.concat(m.staticKeys || [])
  }, []).join(',')
}

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  /* eslint-disable eqeqeq */
  return a == b || (
    isObject(a) && isObject(b)
      ? JSON.stringify(a) === JSON.stringify(b)
      : false
  )
  /* eslint-enable eqeqeq */
}

function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/*  */

var config = {
  /**
   * Option merge strategies (used in core/util/options)
   */
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: null,

  /**
   * Custom user key aliases for v-on
   */
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * List of asset types that a component can own.
   */
  _assetTypes: [
    'component',
    'directive',
    'filter'
  ],

  /**
   * List of lifecycle hooks.
   */
  _lifecycleHooks: [
    'beforeCreate',
    'created',
    'beforeMount',
    'mounted',
    'beforeUpdate',
    'updated',
    'beforeDestroy',
    'destroyed',
    'activated',
    'deactivated'
  ],

  /**
   * Max circular updates allowed in a scheduler flush cycle.
   */
  _maxUpdateCount: 100,

  /**
   * Server rendering?
   */
  _isServer: "weex" === 'server'
};

/*  */

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = /[^\w.$]/;
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  } else {
    var segments = path.split('.');
    return function (obj) {
      for (var i = 0; i < segments.length; i++) {
        if (!obj) { return }
        obj = obj[segments[i]];
      }
      return obj
    }
  }
}

/*  */
/* globals MutationObserver */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser =
  typeof window !== 'undefined' &&
  Object.prototype.toString.call(window) !== '[object Object]';

var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = UA && UA.indexOf('android') > 0;
var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA);

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return /native code/.test(Ctor.toString())
}

/**
 * Defer a task to execute it asynchronously.
 */
var nextTick = (function () {
  var callbacks = [];
  var pending = false;
  var timerFunc;

  function nextTickHandler () {
    pending = false;
    var copies = callbacks.slice(0);
    callbacks.length = 0;
    for (var i = 0; i < copies.length; i++) {
      copies[i]();
    }
  }

  // the nextTick behavior leverages the microtask queue, which can be accessed
  // via either native Promise.then or MutationObserver.
  // MutationObserver has wider support, however it is seriously bugged in
  // UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
  // completely stops working after triggering a few times... so, if native
  // Promise is available, we will use it:
  /* istanbul ignore if */
  if (typeof Promise !== 'undefined' && isNative(Promise)) {
    var p = Promise.resolve();
    timerFunc = function () {
      p.then(nextTickHandler);
      // in problematic UIWebViews, Promise.then doesn't completely break, but
      // it can get stuck in a weird state where callbacks are pushed into the
      // microtask queue but the queue isn't being flushed, until the browser
      // needs to do some other work, e.g. handle a timer. Therefore we can
      // "force" the microtask queue to be flushed by adding an empty timer.
      if (isIOS) { setTimeout(noop); }
    };
  } else if (typeof MutationObserver !== 'undefined' && (
    isNative(MutationObserver) ||
    // PhantomJS and iOS 7.x
    MutationObserver.toString() === '[object MutationObserverConstructor]'
  )) {
    // use MutationObserver where native Promise is not available,
    // e.g. PhantomJS IE11, iOS7, Android 4.4
    var counter = 1;
    var observer = new MutationObserver(nextTickHandler);
    var textNode = document.createTextNode(String(counter));
    observer.observe(textNode, {
      characterData: true
    });
    timerFunc = function () {
      counter = (counter + 1) % 2;
      textNode.data = String(counter);
    };
  } else {
    // fallback to setTimeout
    /* istanbul ignore next */
    timerFunc = function () {
      setTimeout(nextTickHandler, 0);
    };
  }

  return function queueNextTick (cb, ctx) {
    var func = ctx
      ? function () { cb.call(ctx); }
      : cb;
    callbacks.push(func);
    if (!pending) {
      pending = true;
      timerFunc();
    }
  }
})();

var _Set;
/* istanbul ignore if */
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = (function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] !== undefined
    };
    Set.prototype.add = function add (key) {
      this.set[key] = 1;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/* not type checking this file because flow doesn't play well with Proxy */

var hasProxy;
var proxyHandlers;
var initProxy;

{
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  hasProxy =
    typeof Proxy !== 'undefined' &&
    Proxy.toString().match(/native code/);

  proxyHandlers = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
      if (!has && !isAllowed) {
        warn(
          "Property or method \"" + key + "\" is not defined on the instance but " +
          "referenced during render. Make sure to declare reactive data " +
          "properties in the data option.",
          target
        );
      }
      return has || !isAllowed
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      vm._renderProxy = new Proxy(vm, proxyHandlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */


var uid$2 = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid$2++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stablize the subscriber list first
  var subs = this.subs.slice();
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// the current target watcher being evaluated.
// this is globally unique because there could be only one
// watcher being evaluated at any time.
Dep.target = null;
var targetStack = [];

function pushTarget (_target) {
  if (Dep.target) { targetStack.push(Dep.target); }
  Dep.target = _target;
}

function popTarget () {
  Dep.target = targetStack.pop();
}

/*  */


var queue = [];
var has$1 = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  queue.length = 0;
  has$1 = {};
  {
    circular = {};
  }
  waiting = flushing = false;
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  flushing = true;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    var watcher = queue[index];
    var id = watcher.id;
    has$1[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ("development" !== 'production' && has$1[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > config._maxUpdateCount) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }

  resetSchedulerState();
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has$1[id] == null) {
    has$1[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i >= 0 && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(Math.max(i, index) + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */

var uid$1 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options
) {
  if ( options === void 0 ) { options = {}; }

  this.vm = vm;
  vm._watchers.push(this);
  // options
  this.deep = !!options.deep;
  this.user = !!options.user;
  this.lazy = !!options.lazy;
  this.sync = !!options.sync;
  this.expression = expOrFn.toString();
  this.cb = cb;
  this.id = ++uid$1; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = function () {};
      "development" !== 'production' && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value = this.getter.call(this.vm, this.vm);
  // "touch" every property so they are all tracked as
  // dependencies for deep watching
  if (this.deep) {
    traverse(value);
  }
  popTarget();
  this.cleanupDeps();
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    var dep = this$1.deps[i];
    if (!this$1.newDepIds.has(dep.id)) {
      dep.removeSub(this$1);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
      if (
        value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          "development" !== 'production' && warn(
            ("Error in watcher \"" + (this.expression) + "\""),
            this.vm
          );
          /* istanbul ignore else */
          if (config.errorHandler) {
            config.errorHandler.call(null, e, this.vm);
          } else {
            throw e
          }
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    this$1.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
    var this$1 = this;

  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed or is performing a v-for
    // re-render (the watcher list is then filtered by v-for).
    if (!this.vm._isBeingDestroyed && !this.vm._vForRemoving) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this$1.deps[i].removeSub(this$1);
    }
    this.active = false;
  }
};

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
var seenObjects = new _Set();
function traverse (val) {
  seenObjects.clear();
  _traverse(val, seenObjects);
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || !Object.isExtensible(val)) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);[
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
]
.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var arguments$1 = arguments;

    // avoid leaking arguments:
    // http://jsperf.com/closure-with-arguments
    var i = arguments.length;
    var args = new Array(i);
    while (i--) {
      args[i] = arguments$1[i];
    }
    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
        inserted = args;
        break
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * By default, when a reactive property is set, the new value is
 * also converted to become reactive. However when passing down props,
 * we don't want to force conversion because the value may be a nested value
 * under a frozen data structure. Converting it would defeat the optimization.
 */
var observerState = {
  shouldConvert: true,
  isSettingProps: false
};

/**
 * Observer class that are attached to each observed
 * object. Once attached, the observer converts target
 * object's property keys into getter/setters that
 * collect dependencies and dispatches updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    var augment = hasProto
      ? protoAugment
      : copyAugment;
    augment(value, arrayMethods, arrayKeys);
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through each property and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i], obj[keys[i]]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment an target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment an target Object or Array by defining
 * hidden properties.
 *
 * istanbul ignore next
 */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value) {
  if (!isObject(value)) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    observerState.shouldConvert &&
    !config._isServer &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;

  var childOb = observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
        }
        if (Array.isArray(value)) {
          dependArray(value);
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      if (newVal === value) {
        return
      }
      if ("development" !== 'production' && customSetter) {
        customSetter();
      }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (obj, key, val) {
  if (Array.isArray(obj)) {
    obj.length = Math.max(obj.length, key);
    obj.splice(key, 1, val);
    return val
  }
  if (hasOwn(obj, key)) {
    obj[key] = val;
    return
  }
  var ob = obj.__ob__;
  if (obj._isVue || (ob && ob.vmCount)) {
    "development" !== 'production' && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return
  }
  if (!ob) {
    obj[key] = val;
    return
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (obj, key) {
  var ob = obj.__ob__;
  if (obj._isVue || (ob && ob.vmCount)) {
    "development" !== 'production' && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(obj, key)) {
    return
  }
  delete obj[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

function initState (vm) {
  vm._watchers = [];
  initProps(vm);
  initData(vm);
  initComputed(vm);
  initMethods(vm);
  initWatch(vm);
}

function initProps (vm) {
  var props = vm.$options.props;
  if (props) {
    var propsData = vm.$options.propsData || {};
    var keys = vm.$options._propKeys = Object.keys(props);
    var isRoot = !vm.$parent;
    // root instance props should be converted
    observerState.shouldConvert = isRoot;
    var loop = function ( i ) {
      var key = keys[i];
      /* istanbul ignore else */
      {
        defineReactive$$1(vm, key, validateProp(key, props, propsData, vm), function () {
          if (vm.$parent && !observerState.isSettingProps) {
            warn(
              "Avoid mutating a prop directly since the value will be " +
              "overwritten whenever the parent component re-renders. " +
              "Instead, use a data or computed property based on the prop's " +
              "value. Prop being mutated: \"" + key + "\"",
              vm
            );
          }
        });
      }
    };

    for (var i = 0; i < keys.length; i++) { loop( i ); }
    observerState.shouldConvert = true;
  }
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? data.call(vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
    "development" !== 'production' && warn(
      'data functions should return an object.',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var i = keys.length;
  while (i--) {
    if (props && hasOwn(props, keys[i])) {
      "development" !== 'production' && warn(
        "The data property \"" + (keys[i]) + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else {
      proxy(vm, keys[i]);
    }
  }
  // observe data
  observe(data);
  data.__ob__ && data.__ob__.vmCount++;
}

var computedSharedDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function initComputed (vm) {
  var computed = vm.$options.computed;
  if (computed) {
    for (var key in computed) {
      var userDef = computed[key];
      if (typeof userDef === 'function') {
        computedSharedDefinition.get = makeComputedGetter(userDef, vm);
        computedSharedDefinition.set = noop;
      } else {
        computedSharedDefinition.get = userDef.get
          ? userDef.cache !== false
            ? makeComputedGetter(userDef.get, vm)
            : bind(userDef.get, vm)
          : noop;
        computedSharedDefinition.set = userDef.set
          ? bind(userDef.set, vm)
          : noop;
      }
      Object.defineProperty(vm, key, computedSharedDefinition);
    }
  }
}

function makeComputedGetter (getter, owner) {
  var watcher = new Watcher(owner, getter, noop, {
    lazy: true
  });
  return function computedGetter () {
    if (watcher.dirty) {
      watcher.evaluate();
    }
    if (Dep.target) {
      watcher.depend();
    }
    return watcher.value
  }
}

function initMethods (vm) {
  var methods = vm.$options.methods;
  if (methods) {
    for (var key in methods) {
      vm[key] = methods[key] == null ? noop : bind(methods[key], vm);
      if ("development" !== 'production' && methods[key] == null) {
        warn(
          "method \"" + key + "\" has an undefined value in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
    }
  }
}

function initWatch (vm) {
  var watch = vm.$options.watch;
  if (watch) {
    for (var key in watch) {
      var handler = watch[key];
      if (Array.isArray(handler)) {
        for (var i = 0; i < handler.length; i++) {
          createWatcher(vm, key, handler[i]);
        }
      } else {
        createWatcher(vm, key, handler);
      }
    }
  }
}

function createWatcher (vm, key, handler) {
  var options;
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  vm.$watch(key, handler, options);
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () {
    return this._data
  };
  {
    dataDef.set = function (newData) {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      cb.call(vm, watcher.value);
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

function proxy (vm, key) {
  if (!isReserved(key)) {
    Object.defineProperty(vm, key, {
      configurable: true,
      enumerable: true,
      get: function proxyGetter () {
        return vm._data[key]
      },
      set: function proxySetter (val) {
        vm._data[key] = val;
      }
    });
  }
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  ns,
  context,
  componentOptions
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = ns;
  this.context = context;
  this.functionalContext = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.child = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
};

var emptyVNode = function () {
  var node = new VNode();
  node.text = '';
  node.isComment = true;
  return node
};

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    vnode.children,
    vnode.text,
    vnode.elm,
    vnode.ns,
    vnode.context,
    vnode.componentOptions
  );
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isCloned = true;
  return cloned
}

function cloneVNodes (vnodes) {
  var res = new Array(vnodes.length);
  for (var i = 0; i < vnodes.length; i++) {
    res[i] = cloneVNode(vnodes[i]);
  }
  return res
}

/*  */

function mergeVNodeHook (def, hookKey, hook, key) {
  key = key + hookKey;
  var injectedHash = def.__injected || (def.__injected = {});
  if (!injectedHash[key]) {
    injectedHash[key] = true;
    var oldHook = def[hookKey];
    if (oldHook) {
      def[hookKey] = function () {
        oldHook.apply(this, arguments);
        hook.apply(this, arguments);
      };
    } else {
      def[hookKey] = hook;
    }
  }
}

/*  */

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  vm
) {
  var name, cur, old, fn, event, capture;
  for (name in on) {
    cur = on[name];
    old = oldOn[name];
    if (!cur) {
      "development" !== 'production' && warn(
        "Invalid handler for event \"" + name + "\": got " + String(cur),
        vm
      );
    } else if (!old) {
      capture = name.charAt(0) === '!';
      event = capture ? name.slice(1) : name;
      if (Array.isArray(cur)) {
        add(event, (cur.invoker = arrInvoker(cur)), capture);
      } else {
        if (!cur.invoker) {
          fn = cur;
          cur = on[name] = {};
          cur.fn = fn;
          cur.invoker = fnInvoker(cur);
        }
        add(event, cur.invoker, capture);
      }
    } else if (cur !== old) {
      if (Array.isArray(old)) {
        old.length = cur.length;
        for (var i = 0; i < old.length; i++) { old[i] = cur[i]; }
        on[name] = old;
      } else {
        old.fn = cur;
        on[name] = old;
      }
    }
  }
  for (name in oldOn) {
    if (!on[name]) {
      event = name.charAt(0) === '!' ? name.slice(1) : name;
      remove$$1(event, oldOn[name].invoker);
    }
  }
}

function arrInvoker (arr) {
  return function (ev) {
    var arguments$1 = arguments;

    var single = arguments.length === 1;
    for (var i = 0; i < arr.length; i++) {
      single ? arr[i](ev) : arr[i].apply(null, arguments$1);
    }
  }
}

function fnInvoker (o) {
  return function (ev) {
    var single = arguments.length === 1;
    single ? o.fn(ev) : o.fn.apply(null, arguments);
  }
}

/*  */

function normalizeChildren (
  children,
  ns,
  nestedIndex
) {
  if (isPrimitive(children)) {
    return [createTextVNode(children)]
  }
  if (Array.isArray(children)) {
    var res = [];
    for (var i = 0, l = children.length; i < l; i++) {
      var c = children[i];
      var last = res[res.length - 1];
      //  nested
      if (Array.isArray(c)) {
        res.push.apply(res, normalizeChildren(c, ns, ((nestedIndex || '') + "_" + i)));
      } else if (isPrimitive(c)) {
        if (last && last.text) {
          last.text += String(c);
        } else if (c !== '') {
          // convert primitive to vnode
          res.push(createTextVNode(c));
        }
      } else if (c instanceof VNode) {
        if (c.text && last && last.text) {
          last.text += c.text;
        } else {
          // inherit parent namespace
          if (ns) {
            applyNS(c, ns);
          }
          // default key for nested array children (likely generated by v-for)
          if (c.tag && c.key == null && nestedIndex != null) {
            c.key = "__vlist" + nestedIndex + "_" + i + "__";
          }
          res.push(c);
        }
      }
    }
    return res
  }
}

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

function applyNS (vnode, ns) {
  if (vnode.tag && !vnode.ns) {
    vnode.ns = ns;
    if (vnode.children) {
      for (var i = 0, l = vnode.children.length; i < l; i++) {
        applyNS(vnode.children[i], ns);
      }
    }
  }
}

/*  */

function getFirstComponentChild (children) {
  return children && children.filter(function (c) { return c && c.componentOptions; })[0]
}

/*  */

var activeInstance = null;

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._mount = function (
    el,
    hydrating
  ) {
    var vm = this;
    vm.$el = el;
    if (!vm.$options.render) {
      vm.$options.render = emptyVNode;
      {
        /* istanbul ignore if */
        if (vm.$options.template && vm.$options.template.charAt(0) !== '#') {
          warn(
            'You are using the runtime-only build of Vue where the template ' +
            'option is not available. Either pre-compile the templates into ' +
            'render functions, or use the compiler-included build.',
            vm
          );
        } else {
          warn(
            'Failed to mount component: template or render function not defined.',
            vm
          );
        }
      }
    }
    callHook(vm, 'beforeMount');
    vm._watcher = new Watcher(vm, function () {
      vm._update(vm._render(), hydrating);
    }, noop);
    hydrating = false;
    // manually mounted instance, call mounted on self
    // mounted is called for render-created child components in its inserted hook
    if (vm.$vnode == null) {
      vm._isMounted = true;
      callHook(vm, 'mounted');
    }
    return vm
  };

  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    if (vm._isMounted) {
      callHook(vm, 'beforeUpdate');
    }
    var prevEl = vm.$el;
    var prevActiveInstance = activeInstance;
    activeInstance = vm;
    var prevVnode = vm._vnode;
    vm._vnode = vnode;
    if (!prevVnode) {
      // Vue.prototype.__patch__ is injected in entry points
      // based on the rendering backend used.
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating);
    } else {
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    activeInstance = prevActiveInstance;
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    if (vm._isMounted) {
      callHook(vm, 'updated');
    }
  };

  Vue.prototype._updateFromParent = function (
    propsData,
    listeners,
    parentVnode,
    renderChildren
  ) {
    var vm = this;
    var hasChildren = !!(vm.$options._renderChildren || renderChildren);
    vm.$options._parentVnode = parentVnode;
    vm.$options._renderChildren = renderChildren;
    // update props
    if (propsData && vm.$options.props) {
      observerState.shouldConvert = false;
      {
        observerState.isSettingProps = true;
      }
      var propKeys = vm.$options._propKeys || [];
      for (var i = 0; i < propKeys.length; i++) {
        var key = propKeys[i];
        vm[key] = validateProp(key, vm.$options.props, propsData, vm);
      }
      observerState.shouldConvert = true;
      {
        observerState.isSettingProps = false;
      }
      vm.$options.propsData = propsData;
    }
    // update listeners
    if (listeners) {
      var oldListeners = vm.$options._parentListeners;
      vm.$options._parentListeners = listeners;
      vm._updateListeners(listeners, oldListeners);
    }
    // resolve slots + force update if has children
    if (hasChildren) {
      vm.$slots = resolveSlots(renderChildren, vm._renderContext);
      vm.$forceUpdate();
    }
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
  };
}

function callHook (vm, hook) {
  var handlers = vm.$options[hook];
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      handlers[i].call(vm);
    }
  }
  vm.$emit('hook:' + hook);
}

/*  */

var hooks = { init: init$1, prepatch: prepatch, insert: insert, destroy: destroy$1 };
var hooksToMerge = Object.keys(hooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (!Ctor) {
    return
  }

  var baseCtor = context.$options._base;
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  if (typeof Ctor !== 'function') {
    {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  if (!Ctor.cid) {
    if (Ctor.resolved) {
      Ctor = Ctor.resolved;
    } else {
      Ctor = resolveAsyncComponent(Ctor, baseCtor, function () {
        // it's ok to queue this on every render because
        // $forceUpdate is buffered by the scheduler.
        context.$forceUpdate();
      });
      if (!Ctor) {
        // return nothing if this is indeed an async component
        // wait for the callback to trigger parent update.
        return
      }
    }
  }

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  data = data || {};

  // extract props
  var propsData = extractProps(data, Ctor);

  // functional component
  if (Ctor.options.functional) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  data.on = data.nativeOn;

  if (Ctor.options.abstract) {
    // abstract components do not keep anything
    // other than props & listeners
    data = {};
  }

  // merge component management hooks onto the placeholder node
  mergeHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children }
  );
  return vnode
}

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  context,
  children
) {
  var props = {};
  var propOptions = Ctor.options.props;
  if (propOptions) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData);
    }
  }
  var vnode = Ctor.options.render.call(
    null,
    // ensure the createElement function in functional components
    // gets a unique context - this is necessary for correct named slot check
    bind(createElement, { _self: Object.create(context) }),
    {
      props: props,
      data: data,
      parent: context,
      children: normalizeChildren(children),
      slots: function () { return resolveSlots(children, context); }
    }
  );
  if (vnode instanceof VNode) {
    vnode.functionalContext = context;
    if (data.slot) {
      (vnode.data || (vnode.data = {})).slot = data.slot;
    }
  }
  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var vnodeComponentOptions = vnode.componentOptions;
  var options = {
    _isComponent: true,
    parent: parent,
    propsData: vnodeComponentOptions.propsData,
    _componentTag: vnodeComponentOptions.tag,
    _parentVnode: vnode,
    _parentListeners: vnodeComponentOptions.listeners,
    _renderChildren: vnodeComponentOptions.children
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (inlineTemplate) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnodeComponentOptions.Ctor(options)
}

function init$1 (vnode, hydrating) {
  if (!vnode.child || vnode.child._isDestroyed) {
    var child = vnode.child = createComponentInstanceForVnode(vnode, activeInstance);
    child.$mount(hydrating ? vnode.elm : undefined, hydrating);
  }
}

function prepatch (
  oldVnode,
  vnode
) {
  var options = vnode.componentOptions;
  var child = vnode.child = oldVnode.child;
  child._updateFromParent(
    options.propsData, // updated props
    options.listeners, // updated listeners
    vnode, // new parent vnode
    options.children // new children
  );
}

function insert (vnode) {
  if (!vnode.child._isMounted) {
    vnode.child._isMounted = true;
    callHook(vnode.child, 'mounted');
  }
  if (vnode.data.keepAlive) {
    vnode.child._inactive = false;
    callHook(vnode.child, 'activated');
  }
}

function destroy$1 (vnode) {
  if (!vnode.child._isDestroyed) {
    if (!vnode.data.keepAlive) {
      vnode.child.$destroy();
    } else {
      vnode.child._inactive = true;
      callHook(vnode.child, 'deactivated');
    }
  }
}

function resolveAsyncComponent (
  factory,
  baseCtor,
  cb
) {
  if (factory.requested) {
    // pool callbacks
    factory.pendingCallbacks.push(cb);
  } else {
    factory.requested = true;
    var cbs = factory.pendingCallbacks = [cb];
    var sync = true;

    var resolve = function (res) {
      if (isObject(res)) {
        res = baseCtor.extend(res);
      }
      // cache resolved
      factory.resolved = res;
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        for (var i = 0, l = cbs.length; i < l; i++) {
          cbs[i](res);
        }
      }
    };

    var reject = function (reason) {
      "development" !== 'production' && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
    };

    var res = factory(resolve, reject);

    // handle promise
    if (res && typeof res.then === 'function' && !factory.resolved) {
      res.then(resolve, reject);
    }

    sync = false;
    // return in case resolved synchronously
    return factory.resolved
  }
}

function extractProps (data, Ctor) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (!propOptions) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  var domProps = data.domProps;
  if (attrs || props || domProps) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey) ||
      checkProp(res, domProps, key, altKey);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (hash) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

function mergeHooks (data) {
  if (!data.hook) {
    data.hook = {};
  }
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var fromParent = data.hook[key];
    var ours = hooks[key];
    data.hook[key] = fromParent ? mergeHook$1(ours, fromParent) : ours;
  }
}

function mergeHook$1 (a, b) {
  // since all hooks have at most two args, use fixed args
  // to avoid having to use fn.apply().
  return function (_, __) {
    a(_, __);
    b(_, __);
  }
}

/*  */

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  tag,
  data,
  children
) {
  if (data && (Array.isArray(data) || typeof data !== 'object')) {
    children = data;
    data = undefined;
  }
  // make sure to use real instance instead of proxy as context
  return _createElement(this._self, tag, data, children)
}

function _createElement (
  context,
  tag,
  data,
  children
) {
  if (data && data.__ob__) {
    "development" !== 'production' && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return emptyVNode()
  }
  if (typeof tag === 'string') {
    var Ctor;
    var ns = config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      return new VNode(
        tag, data, normalizeChildren(children, ns),
        undefined, undefined, ns, context
      )
    } else if ((Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      return createComponent(Ctor, data, context, children, tag)
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      var childNs = tag === 'foreignObject' ? 'xhtml' : ns;
      return new VNode(
        tag, data, normalizeChildren(children, childNs),
        undefined, undefined, ns, context
      )
    }
  } else {
    // direct component options / constructor
    return createComponent(tag, data, context, children)
  }
}

/*  */

function initRender (vm) {
  vm.$vnode = null; // the placeholder node in parent tree
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null;
  vm._renderContext = vm.$options._parentVnode && vm.$options._parentVnode.context;
  vm.$slots = resolveSlots(vm.$options._renderChildren, vm._renderContext);
  // bind the public createElement fn to this instance
  // so that we get proper render context inside it.
  vm.$createElement = bind(createElement, vm);
  if (vm.$options.el) {
    vm.$mount(vm.$options.el);
  }
}

function renderMixin (Vue) {
  Vue.prototype.$nextTick = function (fn) {
    nextTick(fn, this);
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var staticRenderFns = ref.staticRenderFns;
    var _parentVnode = ref._parentVnode;

    if (vm._isMounted) {
      // clone slot nodes on re-renders
      for (var key in vm.$slots) {
        vm.$slots[key] = cloneVNodes(vm.$slots[key]);
      }
    }

    if (staticRenderFns && !vm._staticTrees) {
      vm._staticTrees = [];
    }
    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      {
        warn(("Error when rendering " + (formatComponentName(vm)) + ":"));
      }
      /* istanbul ignore else */
      if (config.errorHandler) {
        config.errorHandler.call(null, e, vm);
      } else {
        if (config._isServer) {
          throw e
        } else {
          console.error(e);
        }
      }
      // return previous vnode to prevent render error causing blank component
      vnode = vm._vnode;
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ("development" !== 'production' && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = emptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };

  // shorthands used in render functions
  Vue.prototype._h = createElement;
  // toString for mustaches
  Vue.prototype._s = _toString;
  // number conversion
  Vue.prototype._n = toNumber;
  // empty vnode
  Vue.prototype._e = emptyVNode;
  // loose equal
  Vue.prototype._q = looseEqual;
  // loose indexOf
  Vue.prototype._i = looseIndexOf;

  // render static tree by index
  Vue.prototype._m = function renderStatic (
    index,
    isInFor
  ) {
    var tree = this._staticTrees[index];
    // if has already-rendered static tree and not inside v-for,
    // we can reuse the same tree by doing a shallow clone.
    if (tree && !isInFor) {
      return Array.isArray(tree)
        ? cloneVNodes(tree)
        : cloneVNode(tree)
    }
    // otherwise, render a fresh tree.
    tree = this._staticTrees[index] = this.$options.staticRenderFns[index].call(this._renderProxy);
    markStatic(tree, ("__static__" + index), false);
    return tree
  };

  // mark node as static (v-once)
  Vue.prototype._o = function markOnce (
    tree,
    index,
    key
  ) {
    markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
    return tree
  };

  function markStatic (tree, key, isOnce) {
    if (Array.isArray(tree)) {
      for (var i = 0; i < tree.length; i++) {
        if (tree[i] && typeof tree[i] !== 'string') {
          markStaticNode(tree[i], (key + "_" + i), isOnce);
        }
      }
    } else {
      markStaticNode(tree, key, isOnce);
    }
  }

  function markStaticNode (node, key, isOnce) {
    node.isStatic = true;
    node.key = key;
    node.isOnce = isOnce;
  }

  // filter resolution helper
  var identity = function (_) { return _; };
  Vue.prototype._f = function resolveFilter (id) {
    return resolveAsset(this.$options, 'filters', id, true) || identity
  };

  // render v-for
  Vue.prototype._l = function renderList (
    val,
    render
  ) {
    var ret, i, l, keys, key;
    if (Array.isArray(val)) {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = render(val[i], i);
      }
    } else if (typeof val === 'number') {
      ret = new Array(val);
      for (i = 0; i < val; i++) {
        ret[i] = render(i + 1, i);
      }
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i);
      }
    }
    return ret
  };

  // renderSlot
  Vue.prototype._t = function (
    name,
    fallback
  ) {
    var slotNodes = this.$slots[name];
    // warn duplicate slot usage
    if (slotNodes && "development" !== 'production') {
      slotNodes._rendered && warn(
        "Duplicate presence of slot \"" + name + "\" found in the same render tree " +
        "- this will likely cause render errors.",
        this
      );
      slotNodes._rendered = true;
    }
    return slotNodes || fallback
  };

  // apply v-bind object
  Vue.prototype._b = function bindProps (
    data,
    value,
    asProp
  ) {
    if (value) {
      if (!isObject(value)) {
        "development" !== 'production' && warn(
          'v-bind without argument expects an Object or Array value',
          this
        );
      } else {
        if (Array.isArray(value)) {
          value = toObject(value);
        }
        for (var key in value) {
          if (key === 'class' || key === 'style') {
            data[key] = value[key];
          } else {
            var hash = asProp || config.mustUseProp(key)
              ? data.domProps || (data.domProps = {})
              : data.attrs || (data.attrs = {});
            hash[key] = value[key];
          }
        }
      }
    }
    return data
  };

  // expose v-on keyCodes
  Vue.prototype._k = function getKeyCodes (key) {
    return config.keyCodes[key]
  };
}

function resolveSlots (
  renderChildren,
  context
) {
  var slots = {};
  if (!renderChildren) {
    return slots
  }
  var children = normalizeChildren(renderChildren) || [];
  var defaultSlot = [];
  var name, child;
  for (var i = 0, l = children.length; i < l; i++) {
    child = children[i];
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.functionalContext === context) &&
        child.data && (name = child.data.slot)) {
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children);
      } else {
        slot.push(child);
      }
    } else {
      defaultSlot.push(child);
    }
  }
  // ignore single whitespace
  if (defaultSlot.length && !(
    defaultSlot.length === 1 &&
    (defaultSlot[0].text === ' ' || defaultSlot[0].isComment)
  )) {
    slots.default = defaultSlot;
  }
  return slots
}

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  var on = bind(vm.$on, vm);
  var off = bind(vm.$off, vm);
  vm._updateListeners = function (listeners, oldListeners) {
    updateListeners(listeners, oldListeners || {}, on, off, vm);
  };
  if (listeners) {
    vm._updateListeners(listeners);
  }
}

function eventsMixin (Vue) {
  Vue.prototype.$on = function (event, fn) {
    var vm = this;(vm._events[event] || (vm._events[event] = [])).push(fn);
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (arguments.length === 1) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      for (var i = 0, l = cbs.length; i < l; i++) {
        cbs[i].apply(vm, args);
      }
    }
    return vm
  };
}

/*  */

var uid = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid++;
    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    {
      initProxy(vm);
    }
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    callHook(vm, 'beforeCreate');
    initState(vm);
    callHook(vm, 'created');
    initRender(vm);
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  opts.parent = options.parent;
  opts.propsData = options.propsData;
  opts._parentVnode = options._parentVnode;
  opts._parentListeners = options._parentListeners;
  opts._renderChildren = options._renderChildren;
  opts._componentTag = options._componentTag;
  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = Ctor.super.options;
    var cachedSuperOptions = Ctor.superOptions;
    var extendOptions = Ctor.extendOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed
      Ctor.superOptions = superOptions;
      extendOptions.render = options.render;
      extendOptions.staticRenderFns = options.staticRenderFns;
      options = Ctor.options = mergeOptions(superOptions, extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function Vue$2 (options) {
  if ("development" !== 'production' &&
    !(this instanceof Vue$2)) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue$2);
stateMixin(Vue$2);
eventsMixin(Vue$2);
lifecycleMixin(Vue$2);
renderMixin(Vue$2);

var warn = noop;
var formatComponentName;

{
  var hasConsole = typeof console !== 'undefined';

  warn = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.error("[Vue warn]: " + msg + " " + (
        vm ? formatLocation(formatComponentName(vm)) : ''
      ));
    }
  };

  formatComponentName = function (vm) {
    if (vm.$root === vm) {
      return 'root instance'
    }
    var name = vm._isVue
      ? vm.$options.name || vm.$options._componentTag
      : vm.name;
    return (
      (name ? ("component <" + name + ">") : "anonymous component") +
      (vm._isVue && vm.$options.__file ? (" at " + (vm.$options.__file)) : '')
    )
  };

  var formatLocation = function (str) {
    if (str === 'anonymous component') {
      str += " - use the \"name\" option for better debugging messages.";
    }
    return ("\n(found in " + str + ")")
  };
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
{
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;
  var keys = Object.keys(from);
  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (typeof childVal !== 'function') {
      "development" !== 'production' && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        childVal.call(this),
        parentVal.call(this)
      )
    }
  } else if (parentVal || childVal) {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm)
        : undefined;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
};

/**
 * Hooks and param attributes are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  return childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal
}

config._lifecycleHooks.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (parentVal, childVal) {
  var res = Object.create(parentVal || null);
  return childVal
    ? extend(res, childVal)
    : res
}

config._assetTypes.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (parentVal, childVal) {
  /* istanbul ignore if */
  if (!childVal) { return parentVal }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key in childVal) {
    var parent = ret[key];
    var child = childVal[key];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key] = parent
      ? parent.concat(child)
      : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.computed = function (parentVal, childVal) {
  if (!childVal) { return parentVal }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  extend(ret, childVal);
  return ret
};

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    var lower = key.toLowerCase();
    if (isBuiltInTag(lower) || config.isReservedTag(lower)) {
      warn(
        'Do not use built-in or reserved HTML elements as component ' +
        'id: ' + key
      );
    }
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  }
  options.props = res;
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def = dirs[key];
      if (typeof def === 'function') {
        dirs[key] = { bind: def, update: def };
      }
    }
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  {
    checkComponents(child);
  }
  normalizeProps(child);
  normalizeDirectives(child);
  var extendsFrom = child.extends;
  if (extendsFrom) {
    parent = typeof extendsFrom === 'function'
      ? mergeOptions(parent, extendsFrom.options, vm)
      : mergeOptions(parent, extendsFrom, vm);
  }
  if (child.mixins) {
    for (var i = 0, l = child.mixins.length; i < l; i++) {
      var mixin = child.mixins[i];
      if (mixin.prototype instanceof Vue$2) {
        mixin = mixin.options;
      }
      parent = mergeOptions(parent, mixin, vm);
    }
  }
  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  var res = assets[id] ||
    // camelCase ID
    assets[camelize(id)] ||
    // Pascal Case ID
    assets[capitalize(camelize(id))];
  if ("development" !== 'production' && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */

function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // handle boolean props
  if (isBooleanType(prop.type)) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      value = true;
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldConvert = observerState.shouldConvert;
    observerState.shouldConvert = true;
    observe(value);
    observerState.shouldConvert = prevShouldConvert;
  }
  {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if (isObject(def)) {
    "development" !== 'production' && warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm[key] !== undefined) {
    return vm[key]
  }
  // call factory function for non-Function types
  return typeof def === 'function' && prop.type !== Function
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType);
      valid = assertedType.valid;
    }
  }
  if (!valid) {
    warn(
      'Invalid prop: type check failed for prop "' + name + '".' +
      ' Expected ' + expectedTypes.map(capitalize).join(', ') +
      ', got ' + Object.prototype.toString.call(value).slice(8, -1) + '.',
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

/**
 * Assert the type of a value
 */
function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (expectedType === 'String') {
    valid = typeof value === (expectedType = 'string');
  } else if (expectedType === 'Number') {
    valid = typeof value === (expectedType = 'number');
  } else if (expectedType === 'Boolean') {
    valid = typeof value === (expectedType = 'boolean');
  } else if (expectedType === 'Function') {
    valid = typeof value === (expectedType = 'function');
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match && match[1]
}

function isBooleanType (fn) {
  if (!Array.isArray(fn)) {
    return getType(fn) === 'Boolean'
  }
  for (var i = 0, len = fn.length; i < len; i++) {
    if (getType(fn[i]) === 'Boolean') {
      return true
    }
  }
  /* istanbul ignore next */
  return false
}



var util = Object.freeze({
	defineReactive: defineReactive$$1,
	_toString: _toString,
	toNumber: toNumber,
	makeMap: makeMap,
	isBuiltInTag: isBuiltInTag,
	remove: remove,
	hasOwn: hasOwn,
	isPrimitive: isPrimitive,
	cached: cached,
	camelize: camelize,
	capitalize: capitalize,
	hyphenate: hyphenate,
	bind: bind,
	toArray: toArray,
	extend: extend,
	isObject: isObject,
	isPlainObject: isPlainObject,
	toObject: toObject,
	noop: noop,
	no: no,
	genStaticKeys: genStaticKeys,
	looseEqual: looseEqual,
	looseIndexOf: looseIndexOf,
	isReserved: isReserved,
	def: def,
	parsePath: parsePath,
	hasProto: hasProto,
	inBrowser: inBrowser,
	UA: UA,
	isIE: isIE,
	isIE9: isIE9,
	isEdge: isEdge,
	isAndroid: isAndroid,
	isIOS: isIOS,
	devtools: devtools,
	nextTick: nextTick,
	get _Set () { return _Set; },
	mergeOptions: mergeOptions,
	resolveAsset: resolveAsset,
	get warn () { return warn; },
	get formatComponentName () { return formatComponentName; },
	validateProp: validateProp
});

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    /* istanbul ignore if */
    if (plugin.installed) {
      return
    }
    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else {
      plugin.apply(null, args);
    }
    plugin.installed = true;
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }
    var name = extendOptions.name || Super.options.name;
    {
      if (!/^[a-zA-Z][\w-]*$/.test(name)) {
        warn(
          'Invalid component name: "' + name + '". Component names ' +
          'can only contain alphanumeric characaters and the hyphen.'
        );
      }
    }
    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;
    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;
    // create asset registers, so extended classes
    // can have their private assets too.
    config._assetTypes.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }
    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  config._assetTypes.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        {
          if (type === 'component' && config.isReservedTag(id)) {
            warn(
              'Do not use built-in or reserved HTML elements as component ' +
              'id: ' + id
            );
          }
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,
  created: function created () {
    this.cache = Object.create(null);
  },
  render: function render () {
    var vnode = getFirstComponentChild(this.$slots.default);
    if (vnode && vnode.componentOptions) {
      var opts = vnode.componentOptions;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? opts.Ctor.cid + '::' + opts.tag
        : vnode.key;
      if (this.cache[key]) {
        vnode.child = this.cache[key].child;
      } else {
        this.cache[key] = vnode;
      }
      vnode.data.keepAlive = true;
    }
    return vnode
  },
  destroyed: function destroyed () {
    var this$1 = this;

    for (var key in this.cache) {
      var vnode = this$1.cache[key];
      callHook(vnode.child, 'deactivated');
      vnode.child.$destroy();
    }
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);
  Vue.util = util;
  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  Vue.options = Object.create(null);
  config._assetTypes.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue$2);

Object.defineProperty(Vue$2.prototype, '$isServer', {
  get: function () { return config._isServer; }
});

Vue$2.version = '2.0.6';

var latestNodeId = 1;

function TextNode (text) {
  this.instanceId = '';
  this.nodeId = latestNodeId++;
  this.parentNode = null;
  this.nodeType = 3;
  this.text = text;
}

var renderer = {
  TextNode: TextNode,
  instances: {},
  modules: {},
  components: {}
};

var namespaceMap = {};

function createElement$1 (tagName) {
  return new renderer.Element(tagName)
}

function createElementNS (namespace, tagName) {
  return new renderer.Element(namespace + ':' + tagName)
}

function createTextNode (text) {
  return new renderer.TextNode(text)
}

function createComment (text) {
  return new renderer.Comment(text)
}

function insertBefore (node, target, before) {
  if (target.nodeType === 3) {
    if (node.type === 'text') {
      node.setAttr('value', target.text);
      target.parentNode = node;
    } else {
      var text = createElement$1('text');
      text.setAttr('value', target.text);
      node.insertBefore(text, before);
    }
    return
  }
  node.insertBefore(target, before);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  if (child.nodeType === 3) {
    if (node.type === 'text') {
      node.setAttr('value', child.text);
      child.parentNode = node;
    } else {
      var text = createElement$1('text');
      text.setAttr('value', child.text);
      node.appendChild(text);
    }
    return
  }

  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.type
}

function setTextContent (node, text) {
  node.parentNode.setAttr('value', text);
}

function childNodes (node) {
  return node.pureChildren
}

function setAttribute (node, key, val) {
  node.setAttr(key, val);
}


var nodeOps = Object.freeze({
	namespaceMap: namespaceMap,
	createElement: createElement$1,
	createElementNS: createElementNS,
	createTextNode: createTextNode,
	createComment: createComment,
	insertBefore: insertBefore,
	removeChild: removeChild,
	appendChild: appendChild,
	parentNode: parentNode,
	nextSibling: nextSibling,
	tagName: tagName,
	setTextContent: setTextContent,
	childNodes: childNodes,
	setAttribute: setAttribute
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
};

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!key) { return }

  var vm = vnode.context;
  var ref = vnode.child || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (Array.isArray(refs[key])) {
        refs[key].push(ref);
      } else {
        refs[key] = [ref];
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *

/*
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks$1 = ['create', 'update', 'remove', 'destroy'];

function isUndef (s) {
  return s == null
}

function isDef (s) {
  return s != null
}

function sameVnode (vnode1, vnode2) {
  return (
    vnode1.key === vnode2.key &&
    vnode1.tag === vnode2.tag &&
    vnode1.isComment === vnode2.isComment &&
    !vnode1.data === !vnode2.data
  )
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks$1.length; ++i) {
    cbs[hooks$1[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (modules[j][hooks$1[i]] !== undefined) { cbs[hooks$1[i]].push(modules[j][hooks$1[i]]); }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove$$1 () {
      if (--remove$$1.listeners === 0) {
        removeElement(childElm);
      }
    }
    remove$$1.listeners = listeners;
    return remove$$1
  }

  function removeElement (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html
    if (parent) {
      nodeOps.removeChild(parent, el);
    }
  }

  function createElm (vnode, insertedVnodeQueue, nested) {
    var i;
    var data = vnode.data;
    vnode.isRootInsert = !nested;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode); }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(i = vnode.child)) {
        initComponent(vnode, insertedVnodeQueue);
        return vnode.elm
      }
    }
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      {
        if (
          !vnode.ns &&
          !(config.ignoredElements && config.ignoredElements.indexOf(tag) > -1) &&
          config.isUnknownElement(tag)
        ) {
          warn(
            'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly? For recursive components, ' +
            'make sure to provide the "name" option.',
            vnode.context
          );
        }
      }
      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);
      createChildren(vnode, children, insertedVnodeQueue);
      if (isDef(data)) {
        invokeCreateHooks(vnode, insertedVnodeQueue);
      }
    } else if (vnode.isComment) {
      vnode.elm = nodeOps.createComment(vnode.text);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
    }
    return vnode.elm
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      for (var i = 0; i < children.length; ++i) {
        nodeOps.appendChild(vnode.elm, createElm(children[i], insertedVnodeQueue, true));
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(vnode.text));
    }
  }

  function isPatchable (vnode) {
    while (vnode.child) {
      vnode = vnode.child._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (i.create) { i.create(emptyNode, vnode); }
      if (i.insert) { insertedVnodeQueue.push(vnode); }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (vnode.data.pendingInsert) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
    }
    vnode.elm = vnode.child.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    if (isDef(i = vnode.context) && isDef(i = i.$options._scopeId)) {
      nodeOps.setAttribute(vnode.elm, i, '');
    }
    if (isDef(i = activeInstance) &&
        i !== vnode.context &&
        isDef(i = i.$options._scopeId)) {
      nodeOps.setAttribute(vnode.elm, i, '');
    }
  }

  function addVnodes (parentElm, before, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      nodeOps.insertBefore(parentElm, createElm(vnodes[startIdx], insertedVnodeQueue), before);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          nodeOps.removeChild(parentElm, ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (rm || isDef(vnode.data)) {
      var listeners = cbs.remove.length + 1;
      if (!rm) {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      } else {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.child) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeElement(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, elmToMove, before;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : null;
        if (isUndef(idxInOld)) { // New element
          nodeOps.insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm);
          newStartVnode = newCh[++newStartIdx];
        } else {
          elmToMove = oldCh[idxInOld];
          /* istanbul ignore if */
          if ("development" !== 'production' && !elmToMove) {
            warn(
              'It seems there are duplicate keys that is causing an update error. ' +
              'Make sure each v-for item has a unique key.'
            );
          }
          if (elmToMove.tag !== newStartVnode.tag) {
            // same key but different element. treat as new element
            nodeOps.insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm);
            newStartVnode = newCh[++newStartIdx];
          } else {
            patchVnode(elmToMove, newStartVnode, insertedVnodeQueue);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, newStartVnode.elm, oldStartVnode.elm);
            newStartVnode = newCh[++newStartIdx];
          }
        }
      }
    }
    if (oldStartIdx > oldEndIdx) {
      before = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, before, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function patchVnode (oldVnode, vnode, insertedVnodeQueue, removeOnly) {
    if (oldVnode === vnode) {
      return
    }
    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (vnode.isStatic &&
        oldVnode.isStatic &&
        vnode.key === oldVnode.key &&
        (vnode.isCloned || vnode.isOnce)) {
      vnode.elm = oldVnode.elm;
      return
    }
    var i;
    var data = vnode.data;
    var hasData = isDef(data);
    if (hasData && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }
    var elm = vnode.elm = oldVnode.elm;
    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (hasData && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (hasData) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (initial && vnode.parent) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var bailed = false;
  function hydrate (elm, vnode, insertedVnodeQueue) {
    {
      if (!assertNodeMatch(elm, vnode)) {
        return false
      }
    }
    vnode.elm = elm;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.child)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        var childNodes = nodeOps.childNodes(elm);
        // empty element, allow client to pick up and populate children
        if (!childNodes.length) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          var childrenMatch = true;
          if (childNodes.length !== children.length) {
            childrenMatch = false;
          } else {
            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!hydrate(childNodes[i$1], children[i$1], insertedVnodeQueue)) {
                childrenMatch = false;
                break
              }
            }
          }
          if (!childrenMatch) {
            if ("development" !== 'production' &&
                typeof console !== 'undefined' &&
                !bailed) {
              bailed = true;
              console.warn('Parent: ', elm);
              console.warn('Mismatching childNodes vs. VNodes: ', childNodes, children);
            }
            return false
          }
        }
      }
      if (isDef(data)) {
        invokeCreateHooks(vnode, insertedVnodeQueue);
      }
    }
    return true
  }

  function assertNodeMatch (node, vnode) {
    if (vnode.tag) {
      return (
        vnode.tag.indexOf('vue-component') === 0 ||
        vnode.tag.toLowerCase() === nodeOps.tagName(node).toLowerCase()
      )
    } else {
      return _toString(vnode.text) === node.data
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly) {
    if (!vnode) {
      if (oldVnode) { invokeDestroyHook(oldVnode); }
      return
    }

    var elm, parent;
    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (!oldVnode) {
      // empty mount, create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute('server-rendered')) {
            oldVnode.removeAttribute('server-rendered');
            hydrating = true;
          }
          if (hydrating) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else {
              warn(
                'The client-side rendered virtual DOM tree is not matching ' +
                'server-rendered content. This is likely caused by incorrect ' +
                'HTML markup, for example nesting block-level elements inside ' +
                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                'full client-side render.'
              );
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }
        elm = oldVnode.elm;
        parent = nodeOps.parentNode(elm);

        createElm(vnode, insertedVnodeQueue);

        // component root element replaced.
        // update parent placeholder node element.
        if (vnode.parent) {
          vnode.parent.elm = vnode.elm;
          if (isPatchable(vnode)) {
            for (var i = 0; i < cbs.create.length; ++i) {
              cbs.create[i](emptyNode, vnode.parent);
            }
          }
        }

        if (parent !== null) {
          nodeOps.insertBefore(parent, vnode.elm, nodeOps.nextSibling(elm));
          removeVnodes(parent, [oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
};

function updateDirectives (
  oldVnode,
  vnode
) {
  if (!oldVnode.data.directives && !vnode.data.directives) {
    return
  }
  var isCreate = oldVnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      dirsWithInsert.forEach(function (dir) {
        callHook$1(dir, 'inserted', vnode, oldVnode);
      });
    };
    if (isCreate) {
      mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', callInsert, 'dir-insert');
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'postpatch', function () {
      dirsWithPostpatch.forEach(function (dir) {
        callHook$1(dir, 'componentUpdated', vnode, oldVnode);
      });
    }, 'dir-postpatch');
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    fn(vnode.elm, dir, vnode, oldVnode);
  }
}

var baseModules = [
  ref,
  directives
];

/*  */

function updateAttrs (oldVnode, vnode) {
  if (!oldVnode.data.attrs && !vnode.data.attrs) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (attrs.__ob__) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      elm.setAttr(key, cur);
    }
  }
  for (key in oldAttrs) {
    if (attrs[key] == null) {
      elm.setAttr(key);
    }
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
};

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var ctx = vnode.context;

  var data = vnode.data;
  var oldData = oldVnode.data;
  if (!data.staticClass && !data.class &&
      (!oldData || (!oldData.staticClass && !oldData.class))) {
    return
  }

  var oldClassList = [];
  // unlike web, weex vnode staticClass is an Array
  var oldStaticClass = oldData.staticClass;
  if (oldStaticClass) {
    oldClassList.push.apply(oldClassList, oldStaticClass);
  }
  if (oldData.class) {
    oldClassList.push.apply(oldClassList, oldData.class);
  }

  var classList = [];
  // unlike web, weex vnode staticClass is an Array
  var staticClass = data.staticClass;
  if (staticClass) {
    classList.push.apply(classList, staticClass);
  }
  if (data.class) {
    classList.push.apply(classList, data.class);
  }

  var style = getStyle(oldClassList, classList, ctx);
  for (var key in style) {
    el.setStyle(key, style[key]);
  }
}

function getStyle (oldClassList, classList, ctx) {
  // style is a weex-only injected object
  // compiled from <style> tags in weex files
  var stylesheet = ctx.$options.style || {};
  var result = {};
  classList.forEach(function (name) {
    var style = stylesheet[name];
    extend(result, style);
  });
  oldClassList.forEach(function (name) {
    var style = stylesheet[name];
    for (var key in style) {
      if (!result.hasOwnProperty(key)) {
        result[key] = '';
      }
    }
  });
  return result
}

var klass = {
  create: updateClass,
  update: updateClass
};

/*  */

function updateDOMListeners (oldVnode, vnode) {
  if (!oldVnode.data.on && !vnode.data.on) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  updateListeners(on, oldOn, function (event, handler, capture) {
    if (capture) {
      console.log('Weex do not support event in bubble phase.');
      return
    }
    vnode.elm.addEvent(event, handler.bind(vnode.context));
  }, function (event) {
    vnode.elm.removeEvent(event);
  }, vnode.context);
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
};

/*  */

var normalize$1 = cached(camelize);

function createStyle (oldVnode, vnode) {
  if (!vnode.data.staticStyle) {
    updateStyle(oldVnode, vnode);
    return
  }
  var elm = vnode.elm;
  var staticStyle = vnode.data.staticStyle;
  for (var name in staticStyle) {
    if (staticStyle[name]) {
      elm.setStyle(normalize$1(name), staticStyle[name]);
    }
  }
  updateStyle(oldVnode, vnode);
}

function updateStyle (oldVnode, vnode) {
  if (!oldVnode.data.style && !vnode.data.style) {
    return
  }
  var cur, name;
  var elm = vnode.elm;
  var oldStyle = oldVnode.data.style || {};
  var style = vnode.data.style || {};

  var needClone = style.__ob__;

  // handle array syntax
  if (Array.isArray(style)) {
    style = vnode.data.style = toObject$1(style);
  }

  // clone the style for future updates,
  // in case the user mutates the style object in-place.
  if (needClone) {
    style = vnode.data.style = extend({}, style);
  }

  for (name in oldStyle) {
    if (!style[name]) {
      elm.setStyle(normalize$1(name), '');
    }
  }
  for (name in style) {
    cur = style[name];
    elm.setStyle(normalize$1(name), cur);
  }
}

function toObject$1 (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

var style = {
  create: createStyle,
  update: updateStyle
};

var platformModules = [
  attrs,
  klass,
  events,
  style
];

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules$1 = platformModules.concat(baseModules);

var patch$1 = createPatchFunction({ nodeOps: nodeOps, modules: modules$1 });

var platformDirectives = {
};

var isReservedTag = makeMap(
  'div,img,image,input,switch,indicator,list,scroller,cell,template,text,slider,image'
);

function mustUseProp () { /* console.log('mustUseProp') */ }

function isUnknownElement () { /* console.log('isUnknownElement') */ }
function query (el, document) {
  var placeholder = new renderer.Comment('root');
  placeholder.hasAttribute = placeholder.removeAttribute = function () {}; // hack for patch
  document.documentElement.appendChild(placeholder);
  return placeholder
}

/*  */

// install platform specific utils
Vue$2.config.isUnknownElement = isUnknownElement;
Vue$2.config.isReservedTag = isReservedTag;
Vue$2.config.mustUseProp = mustUseProp;

// install platform runtime directives
Vue$2.options.directives = platformDirectives;

// install platform patch function
Vue$2.prototype.__patch__ = config._isServer ? noop : patch$1;

// wrap mount
Vue$2.prototype.$mount = function (
  el,
  hydrating
) {
  return this._mount(el && query(el, this.$document), hydrating)
};

Vue$2.weexVersion = '2.0.5-weex.1';
var instances = renderer.instances;
var modules = renderer.modules;
var components = renderer.components;

var activeId;
var oriIsReservedTag = (Vue$2 && Vue$2.config && typeof Vue$2.config.isReservedTag === 'function') ? Vue$2.config.isReservedTag : function () {};

/**
 * Prepare framework config, basically about the virtual-DOM and JS bridge.
 * @param {object} cfg
 */
function init (cfg) {
  renderer.Document = cfg.Document;
  renderer.Element = cfg.Element;
  renderer.Comment = cfg.Comment;
  renderer.sendTasks = cfg.sendTasks;
}

/**
 * Reset framework config and clear all registrations.
 */
function reset () {
  clear$1(instances);
  clear$1(modules);
  clear$1(components);
  delete renderer.Document;
  delete renderer.Element;
  delete renderer.Comment;
  delete renderer.sendTasks;
  Vue$2.config.isReservedTag = oriIsReservedTag;
}

/**
 * Delete all keys of an object.
 * @param {object} obj
 */
function clear$1 (obj) {
  for (var key in obj) {
    delete obj[key];
  }
}

/**
 * Create an instance with id, code, config and external data.
 * @param {string} instanceId
 * @param {string} appCode
 * @param {object} config
 * @param {object} data
 */
function createInstance (
  instanceId, appCode, config /* {bundleUrl, debug} */, data) {
  if ( appCode === void 0 ) { appCode = ''; }
  if ( config === void 0 ) { config = {}; }

  // Set active instance id and put some information into `instances` map.
  activeId = instanceId;
  instances[instanceId] = {
    instanceId: instanceId, config: config, data: data,
    // Virtual-DOM object.
    document: new renderer.Document(instanceId, config.bundleUrl),
    // All function/callback of parameters before sent to native
    // will be converted as an id. So `callbacks` is used to store
    // these real functions. When a callback invoked and won't be
    // called again, it should be removed from here automatically.
    callbacks: [],
    // The latest callback id, incremental.
    callbackId: 1
  };

  // The function which create a closure the JS Bundle will run in.
  // It will declare some global variables like `Vue`, HTML5 Timer APIs,
  // and native module getter.
  var start = new Function(
    'Vue',
    '__weex_require_module__',
    'setTimeout',
    'setInterval',
    'clearTimeout',
    'clearInterval',
    appCode);

  // Each instance has a independent `Vue` object and it should have
  // all top-level public APIs.
  var subVue = Vue$2.extend({});
  // ensure plain-object components are extended from the subVue
  subVue.options._base = subVue
  // expose global utility
  ;['util', 'set', 'delete', 'nextTick'].forEach(function (name) {
    subVue[name] = Vue$2[name];
  });

  // Prepare native module getter and HTML5 Timer APIs.
  var moduleGetter = genModuleGetter(instanceId);
  var timerAPIs = getInstanceTimer(instanceId, moduleGetter);

  // Run the JS Bundle and send `createFinish` signal to native.
  start(
    subVue, moduleGetter,
    timerAPIs.setTimeout,
    timerAPIs.setInterval,
    timerAPIs.clearTimeout,
    timerAPIs.clearInterval);
  renderer.sendTasks(instanceId + '', [{ module: 'dom', method: 'createFinish', args: [] }], -1);
}

/**
 * Destroy an instance with id. It will make sure all memory of
 * this instance released and no more leaks.
 * @param {string} instanceId
 */
function destroyInstance (instanceId) {
  var instance = instances[instanceId] || {};
  if (instance.app instanceof Vue$2) {
    instance.app.$destroy();
  }
  delete instances[instanceId];
}

/**
 * Refresh an instance with id and new top-level component data.
 * It will use `Vue.set` on all keys of the new data. So it's better
 * define all possible meaningful keys when instance created.
 * @param {string} instanceId
 * @param {object} data
 */
function refreshInstance (instanceId, data) {
  var instance = instances[instanceId] || {};
  if (!(instance.app instanceof Vue$2)) {
    return new Error(("refreshInstance: instance " + instanceId + " not found!"))
  }
  for (var key in data) {
    Vue$2.set(instance.app, key, data[key]);
  }
  // Finally `refreshFinish` signal needed.
  renderer.sendTasks(instanceId + '', [{ module: 'dom', method: 'refreshFinish', args: [] }], -1);
}

/**
 * Get the JSON object of the root element.
 * @param {string} instanceId
 */
function getRoot (instanceId) {
  var instance = instances[instanceId] || {};
  if (!(instance.app instanceof Vue$2)) {
    return new Error(("getRoot: instance " + instanceId + " not found!"))
  }
  return instance.app.$el.toJSON()
}

/**
 * Receive tasks from native. Generally there are two types of tasks:
 * 1. `fireEvent`: an device actions or user actions from native.
 * 2. `callback`: invoke function which sent to native as a parameter before.
 * @param {string} instanceId
 * @param {array}  tasks
 */
function receiveTasks (instanceId, tasks) {
  var instance = instances[instanceId] || {};
  if (!(instance.app instanceof Vue$2)) {
    return new Error(("receiveTasks: instance " + instanceId + " not found!"))
  }
  var callbacks = instance.callbacks;
  var document = instance.document;
  tasks.forEach(function (task) {
    // `fireEvent` case: find the event target and fire.
    if (task.method === 'fireEvent') {
      var ref = task.args;
      var nodeId = ref[0];
      var type = ref[1];
      var e = ref[2];
      var domChanges = ref[3];
      var el = document.getRef(nodeId);
      document.fireEvent(el, type, e, domChanges);
    }
    // `callback` case: find the callback by id and call it.
    if (task.method === 'callback') {
      var ref$1 = task.args;
      var callbackId = ref$1[0];
      var data = ref$1[1];
      var ifKeepAlive = ref$1[2];
      var callback = callbacks[callbackId];
      if (typeof callback === 'function') {
        callback(data);
        // Remove the callback from `callbacks` if it won't called again.
        if (typeof ifKeepAlive === 'undefined' || ifKeepAlive === false) {
          callbacks[callbackId] = undefined;
        }
      }
    }
  });
  // Finally `updateFinish` signal needed.
  renderer.sendTasks(instanceId + '', [{ module: 'dom', method: 'updateFinish', args: [] }], -1);
}

/**
 * Register native modules information.
 * @param {object} newModules
 */
function registerModules (newModules) {
  var loop = function ( name ) {
    if (!modules[name]) {
      modules[name] = {};
    }
    newModules[name].forEach(function (method) {
      if (typeof method === 'string') {
        modules[name][method] = true;
      } else {
        modules[name][method.name] = method.args;
      }
    });
  };

  for (var name in newModules) { loop( name ); }
}

/**
 * Register native components information.
 * @param {array} newComponents
 */
function registerComponents (newComponents) {
  var config = Vue$2.config;
  var newConfig = {};
  if (Array.isArray(newComponents)) {
    newComponents.forEach(function (component) {
      if (!component) {
        return
      }
      if (typeof component === 'string') {
        components[component] = true;
        newConfig[component] = true;
      } else if (typeof component === 'object' && typeof component.type === 'string') {
        components[component.type] = component;
        newConfig[component.type] = true;
      }
    });
    var oldIsReservedTag = config.isReservedTag;
    config.isReservedTag = function (name) {
      return newConfig[name] || oldIsReservedTag(name)
    };
  }
}

// Hack `Vue` behavior to handle instance information and data
// before root component created.
Vue$2.mixin({
  beforeCreate: function beforeCreate () {
    var options = this.$options;
    var parentOptions = (options.parent && options.parent.$options) || {};

    // root component (vm)
    if (options.el) {
      // record instance info
      var instance = instances[activeId] || {};
      this.$instanceId = activeId;
      options.instanceId = activeId;
      this.$document = instance.document;

      // set external data of instance
      var dataOption = options.data;
      var internalData = (typeof dataOption === 'function' ? dataOption() : dataOption) || {};
      options.data = Object.assign(internalData, instance.data);

      // record instance by id
      instance.app = this;

      activeId = undefined;
    } else {
      this.$instanceId = options.instanceId = parentOptions.instanceId;
    }
  }
});

/**
 * Get instance config.
 * @return {object}
 */
Vue$2.prototype.$getConfig = function () {
  var instance = instances[this.$instanceId] || {};
  if (instance.app instanceof Vue$2) {
    return instance.config
  }
};

/**
 * Generate native module getter. Each native module has several
 * methods to call. And all the hebaviors is instance-related. So
 * this getter will return a set of methods which additionally
 * send current instance id to native when called. Also the args
 * will be normalized into "safe" value. For example function arg
 * will be converted into a callback id.
 * @param  {string}  instanceId
 * @return {function}
 */
function genModuleGetter (instanceId) {
  var instance = instances[instanceId];
  return function (name) {
    var nativeModule = modules[name] || [];
    var output = {};
    var loop = function ( methodName ) {
      output[methodName] = function () {
        var arguments$1 = arguments;

        var args = [], len = arguments.length;
        while ( len-- ) { args[ len ] = arguments$1[ len ]; }

        var finalArgs = args.map(function (value) {
          return normalize(value, instance)
        });
        renderer.sendTasks(instanceId + '', [{ module: name, method: methodName, args: finalArgs }], -1);
      };
    };

    for (var methodName in nativeModule) { loop( methodName ); }
    return output
  }
}

/**
 * Generate HTML5 Timer APIs. An important point is that the callback
 * will be converted into callback id when sent to native. So the
 * framework can make sure no side effect of the callabck happened after
 * an instance destroyed.
 * @param  {[type]} instanceId   [description]
 * @param  {[type]} moduleGetter [description]
 * @return {[type]}              [description]
 */
function getInstanceTimer (instanceId, moduleGetter) {
  var instance = instances[instanceId];
  var timer = moduleGetter('timer');
  var timerAPIs = {
    setTimeout: function () {
      var arguments$1 = arguments;

      var args = [], len = arguments.length;
      while ( len-- ) { args[ len ] = arguments$1[ len ]; }

      var handler = function () {
        args[0].apply(args, args.slice(2));
      };
      timer.setTimeout(handler, args[1]);
      return instance.callbackId.toString()
    },
    setInterval: function () {
      var arguments$1 = arguments;

      var args = [], len = arguments.length;
      while ( len-- ) { args[ len ] = arguments$1[ len ]; }

      var handler = function () {
        args[0].apply(args, args.slice(2));
      };
      timer.setInterval(handler, args[1]);
      return instance.callbackId.toString()
    },
    clearTimeout: function (n) {
      timer.clearTimeout(n);
    },
    clearInterval: function (n) {
      timer.clearInterval(n);
    }
  };
  return timerAPIs
}

/**
 * Convert all type of values into "safe" format to send to native.
 * 1. A `function` will be converted into callback id.
 * 2. An `Element` object will be converted into `ref`.
 * The `instance` param is used to generate callback id and store
 * function if necessary.
 * @param  {any}    v
 * @param  {object} instance
 * @return {any}
 */
function normalize (v, instance) {
  var type = typof(v);

  switch (type) {
    case 'undefined':
    case 'null':
      return ''
    case 'regexp':
      return v.toString()
    case 'date':
      return v.toISOString()
    case 'number':
    case 'string':
    case 'boolean':
    case 'array':
    case 'object':
      if (v instanceof renderer.Element) {
        return v.ref
      }
      return v
    case 'function':
      instance.callbacks[++instance.callbackId] = v;
      return instance.callbackId.toString()
    default:
      return JSON.stringify(v)
  }
}

/**
 * Get the exact type of an object by `toString()`. For example call
 * `toString()` on an array will be returned `[object Array]`.
 * @param  {any}    v
 * @return {string}
 */
function typof (v) {
  var s = Object.prototype.toString.call(v);
  return s.substring(8, s.length - 1).toLowerCase()
}

exports.Vue = Vue$2;
exports.init = init;
exports.reset = reset;
exports.createInstance = createInstance;
exports.destroyInstance = destroyInstance;
exports.refreshInstance = refreshInstance;
exports.getRoot = getRoot;
exports.receiveTasks = receiveTasks;
exports.registerModules = registerModules;
exports.registerComponents = registerComponents;
});

var index$2 = unwrapExports(index_1);
var registerComponents$1 = index_1.registerComponents;
var registerModules$1 = index_1.registerModules;
var receiveTasks$1 = index_1.receiveTasks;
var getRoot$1 = index_1.getRoot;
var refreshInstance$1 = index_1.refreshInstance;
var destroyInstance$1 = index_1.destroyInstance;
var createInstance$2 = index_1.createInstance;
var reset = index_1.reset;
var init$3 = index_1.init;
var Vue = index_1.Vue;

var Vue$1 = Object.freeze({
	default: index$2,
	__moduleExports: index_1,
	registerComponents: registerComponents$1,
	registerModules: registerModules$1,
	receiveTasks: receiveTasks$1,
	getRoot: getRoot$1,
	refreshInstance: refreshInstance$1,
	destroyInstance: destroyInstance$1,
	createInstance: createInstance$2,
	reset: reset,
	init: init$3,
	Vue: Vue
});

/**
 * @fileOverview The api for invoking with "$" prefix
 */

/**
 * @deprecated use $vm instead
 * find the vm by id
 * Note: there is only one id in whole component
 * @param  {string} id
 * @return {Vm}
 */
function $ (id) {
  console.warn('[JS Framework] Vm#$ is deprecated, please use Vm#$vm instead');
  var info = this._ids[id];
  if (info) {
    return info.vm
  }
}

/**
 * find the element by id
 * Note: there is only one id in whole component
 * @param  {string} id
 * @return {Element}
 */
function $el (id) {
  var info = this._ids[id];
  if (info) {
    return info.el
  }
}

/**
 * find the vm of the custom component by id
 * Note: there is only one id in whole component
 * @param  {string} id
 * @return {Vm}
 */
function $vm (id) {
  var info = this._ids[id];
  if (info) {
    return info.vm
  }
}

/**
 * Fire when differ rendering finished
 *
 * @param  {Function} fn
 */
function $renderThen (fn) {
  var app = this._app;
  var differ = app.differ;
  return differ.then(function () {
    fn();
  })
}

/**
 * scroll an element specified by id into view,
 * moreover specify a number of offset optionally
 * @param  {string} id
 * @param  {number} offset
 */
function $scrollTo (id, offset) {
  console.warn('[JS Framework] Vm#$scrollTo is deprecated, ' +
          'please use "require(\'@weex-module/dom\')' +
          '.scrollTo(el, options)" instead');
  var el = this.$el(id);
  if (el) {
    var dom = this._app.requireModule('dom');
    dom.scrollToElement(el.ref, { offset: offset });
  }
}

/**
 * perform transition animation on an element specified by id
 * @param  {string}   id
 * @param  {object}   options
 * @param  {object}   options.styles
 * @param  {object}   options.duration(ms)
 * @param  {object}   [options.timingFunction]
 * @param  {object}   [options.delay=0(ms)]
 * @param  {Function} callback
 */
function $transition (id, options, callback) {
  var this$1 = this;

  var el = this.$el(id);
  if (el && options && options.styles) {
    var animation = this._app.requireModule('animation');
    animation.transition(el.ref, options, function () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      this$1._setStyle(el, options.styles);
      callback && callback.apply(void 0, args);
    });
  }
}

/**
 * get some config
 * @return {object} some config for app instance
 * @property {string} bundleUrl
 * @property {boolean} debug
 * @property {object} env
 * @property {string} env.weexVersion(ex. 1.0.0)
 * @property {string} env.appName(ex. TB/TM)
 * @property {string} env.appVersion(ex. 5.0.0)
 * @property {string} env.platform(ex. iOS/Android)
 * @property {string} env.osVersion(ex. 7.0.0)
 * @property {string} env.deviceModel **native only**
 * @property {number} env.[deviceWidth=750]
 * @property {number} env.deviceHeight
 */
function $getConfig (callback) {
  var config = this._app.options;
  if (typeof callback === 'function') {
    console.warn('[JS Framework] the callback of Vm#$getConfig(callback) is deprecated, ' +
      'this api now can directly RETURN config info.');
    callback(config);
  }
  return config
}

/**
 * @deprecated
 * request network via http protocol
 * @param  {object}   params
 * @param  {Function} callback
 */
function $sendHttp (params, callback) {
  console.warn('[JS Framework] Vm#$sendHttp is deprecated, ' +
          'please use "require(\'@weex-module/stream\')' +
          '.sendHttp(params, callback)" instead');
  var stream = this._app.requireModule('stream');
  stream.sendHttp(params, callback);
}

/**
 * @deprecated
 * open a url
 * @param  {string} url
 */
function $openURL (url) {
  console.warn('[JS Framework] Vm#$openURL is deprecated, ' +
          'please use "require(\'@weex-module/event\')' +
          '.openURL(url)" instead');
  var event = this._app.requireModule('event');
  event.openURL(url);
}

/**
 * @deprecated
 * set a title for page
 * @param  {string} title
 */
function $setTitle (title) {
  console.warn('[JS Framework] Vm#$setTitle is deprecated, ' +
          'please use "require(\'@weex-module/pageInfo\')' +
          '.setTitle(title)" instead');
  var pageInfo = this._app.requireModule('pageInfo');
  pageInfo.setTitle(title);
}

/**
 * @deprecated use "require('@weex-module/moduleName') instead"
 * invoke a native method by specifing the name of module and method
 * @param  {string} moduleName
 * @param  {string} methodName
 * @param  {...*} the rest arguments
 */
function $call (moduleName, methodName) {
  var args = [], len = arguments.length - 2;
  while ( len-- > 0 ) args[ len ] = arguments[ len + 2 ];

  console.warn('[JS Framework] Vm#$call is deprecated, ' +
    'please use "require(\'@weex-module/moduleName\')" instead');
  var module = this._app.requireModule(moduleName);
  if (module && module[methodName]) {
    module[methodName].apply(module, args);
  }
}


var methods$1 = Object.freeze({
	$: $,
	$el: $el,
	$vm: $vm,
	$renderThen: $renderThen,
	$scrollTo: $scrollTo,
	$transition: $transition,
	$getConfig: $getConfig,
	$sendHttp: $sendHttp,
	$openURL: $openURL,
	$setTitle: $setTitle,
	$call: $call
});

/**
 * Mix properties into target object.
 *
 * @param {Object} to
 * @param {Object} from
 */

function extend (target) {
  var src = [], len = arguments.length - 1;
  while ( len-- > 0 ) src[ len ] = arguments[ len + 1 ];

  /* istanbul ignore else */
  if (typeof Object.assign === 'function') {
    Object.assign.apply(Object, [ target ].concat( src ));
  }
  else {
    var first = src.shift();
    for (var key in first) {
      target[key] = first[key];
    }
    if (src.length) {
      extend.apply(void 0, [ target ].concat( src ));
    }
  }
  return target
}

/**
 * Define a property.
 *
 * @param {Object} obj
 * @param {String} key
 * @param {*} val
 * @param {Boolean} [enumerable]
 */

function def$1 (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Remove an item from an array
 *
 * @param {Array} arr
 * @param {*} item
 */

function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether the object has the property.
 *
 * @param {Object} obj
 * @param {String} key
 * @return {Boolean}
 */
var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty$1.call(obj, key)
}

/**
 * Simple bind, faster than native
 *
 * @param {Function} fn
 * @param {Object} ctx
 * @return {Function}
 */

function bind (fn, ctx) {
  return function (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }
}

/**
 * Convert an Array-like object to a real Array.
 *
 * @param {Array-like} list
 * @param {Number} [start] - start index
 * @return {Array}
 */

function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 *
 * @param {*} obj
 * @return {Boolean}
 */

function isObject$4 (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 *
 * @param {*} obj
 * @return {Boolean}
 */

var toString$2 = Object.prototype.toString;
var OBJECT_STRING = '[object Object]';
function isPlainObject (obj) {
  return toString$2.call(obj) === OBJECT_STRING
}

/**
 * Check if a string starts with $ or _
 *
 * @param {String} str
 * @return {Boolean}
 */

function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

// can we use __proto__?
var hasProto = '__proto__' in {};

var _Set;
/* istanbul ignore next */
if (typeof Set !== 'undefined' && Set.toString().match(/native code/)) {
  // use native Set when available.
  _Set = Set;
}
else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = function () {
    this.set = Object.create(null);
  };
  _Set.prototype.has = function (key) {
    return this.set[key] !== undefined
  };
  _Set.prototype.add = function (key) {
    if (key == null || this.set[key]) {
      return
    }
    this.set[key] = 1;
  };
  _Set.prototype.clear = function () {
    this.set = Object.create(null);
  };
}

/**
 * Polyfill in iOS7 by native because the JavaScript polyfill has memory problem.
 * @return {object}
 */

function createNewSet () {
  /* istanbul ignore next */
  /* eslint-disable */
  if (typeof nativeSet === 'object') {
    return nativeSet.create()
  }
  /* eslint-enable */
  return new _Set()
}

/**
 * Create a cached version of a pure function.
 *
 * @param {Function} fn
 * @return {Function}
 */



/**
 * Camelize a hyphen-delmited string.
 *
 * @param {String} str
 * @return {String}
 */

var camelizeRE = /-(\w)/g;


function toUpper (_, c) {
  return c ? c.toUpperCase() : ''
}

/**
 * Hyphenate a camelCase string.
 *
 * @param {String} str
 * @return {String}
 */

var hyphenateRE = /([a-z\d])([A-Z])/g;


function typof (v) {
  var s = Object.prototype.toString.call(v);
  return s.substring(8, s.length - 1).toLowerCase()
}

// weex name rules

var WEEX_COMPONENT_REG = /^@weex-component\//;
var WEEX_MODULE_REG = /^@weex-module\//;
var NORMAL_MODULE_REG = /^\.{1,2}\//;
var JS_SURFIX_REG = /\.js$/;

var isWeexComponent = function (name) { return !!name.match(WEEX_COMPONENT_REG); };
var isWeexModule = function (name) { return !!name.match(WEEX_MODULE_REG); };
var isNormalModule = function (name) { return !!name.match(NORMAL_MODULE_REG); };
var isNpmModule = function (name) { return !isWeexComponent(name) && !isWeexModule(name) && !isNormalModule(name); };

function removeWeexPrefix (str) {
  var result = str.replace(WEEX_COMPONENT_REG, '').replace(WEEX_MODULE_REG, '');
  return result
}

function removeJSSurfix (str) {
  return str.replace(JS_SURFIX_REG, '')
}

/* eslint-disable */

var uid$2 = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 *
 * @constructor
 */

function Dep () {
  this.id = uid$2++;
  this.subs = [];
}

// the current target watcher being evaluated.
// this is globally unique because there could be only one
// watcher being evaluated at any time.
Dep.target = null;
var targetStack = [];

function pushTarget (_target) {
  if (Dep.target) { targetStack.push(Dep.target); }
  Dep.target = _target;
}

function popTarget () {
  Dep.target = targetStack.pop();
}

function resetTarget () {
  Dep.target = null;
  targetStack = [];
}

/**
 * Add a directive subscriber.
 *
 * @param {Directive} sub
 */

Dep.prototype.addSub = function (sub) {
  this.subs.push(sub);
};

/**
 * Remove a directive subscriber.
 *
 * @param {Directive} sub
 */

Dep.prototype.removeSub = function (sub) {
  remove(this.subs, sub);
};

/**
 * Add self as a dependency to the target watcher.
 */

Dep.prototype.depend = function () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

/**
 * Notify all subscribers of a new value.
 */

Dep.prototype.notify = function () {
  // stablize the subscriber list first
  var subs = this.subs.slice();
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

/* eslint-disable */

// import { pushWatcher } from './batcher'
var uid$1 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 *
 * @param {Vue} vm
 * @param {String|Function} expOrFn
 * @param {Function} cb
 * @param {Object} options
 *                 - {Array} filters
 *                 - {Boolean} twoWay
 *                 - {Boolean} deep
 *                 - {Boolean} user
 *                 - {Boolean} sync
 *                 - {Boolean} lazy
 *                 - {Function} [preProcess]
 *                 - {Function} [postProcess]
 * @constructor
 */

function Watcher (vm, expOrFn, cb, options) {
  // mix in options
  if (options) {
    extend(this, options);
  }
  var isFn = typeof expOrFn === 'function';
  this.vm = vm;
  vm._watchers.push(this);
  this.expression = expOrFn;
  this.cb = cb;
  this.id = ++uid$1; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = createNewSet(); // new Set()
  this.newDepIds = createNewSet(); // new Set()
  // parse expression for getter
  if (isFn) {
    this.getter = expOrFn;
  }
  this.value = this.lazy
    ? undefined
    : this.get();
  // state for avoiding false triggers for deep and Array
  // watchers during vm._digest()
  this.queued = this.shallow = false;
}

/**
 * Evaluate the getter, and re-collect dependencies.
 */

Watcher.prototype.get = function () {
  pushTarget(this);
  var value = this.getter.call(this.vm, this.vm);
  // "touch" every property so they are all tracked as
  // dependencies for deep watching
  if (this.deep) {
    traverse(value);
  }
  popTarget();
  this.cleanupDeps();
  return value
};

/**
 * Add a dependency to this directive.
 *
 * @param {Dep} dep
 */

Watcher.prototype.addDep = function (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */

Watcher.prototype.cleanupDeps = function () {
  var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    var dep = this$1.deps[i];
    if (!this$1.newDepIds.has(dep.id)) {
      dep.removeSub(this$1);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 *
 * @param {Boolean} shallow
 */

Watcher.prototype.update = function (shallow) {
  if (this.lazy) {
    this.dirty = true;
  } else {
    this.run();
  }
  // } else if (this.sync) {
  //   this.run()
  // } else {
  //   // if queued, only overwrite shallow with non-shallow,
  //   // but not the other way around.
  //   this.shallow = this.queued
  //     ? shallow
  //       ? this.shallow
  //       : false
  //     : !!shallow
  //   this.queued = true
  //   pushWatcher(this)
  // }
};

/**
 * Batcher job interface.
 * Will be called by the batcher.
 */

Watcher.prototype.run = function () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated; but only do so if this is a
      // non-shallow update (caused by a vm digest).
      ((isObject$4(value) || this.deep) && !this.shallow)
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      this.cb.call(this.vm, value, oldValue);
    }
    this.queued = this.shallow = false;
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */

Watcher.prototype.evaluate = function () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */

Watcher.prototype.depend = function () {
  var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    this$1.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subcriber list.
 */

Watcher.prototype.teardown = function () {
  var this$1 = this;

  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed or is performing a v-for
    // re-render (the watcher list is then filtered by v-for).
    if (!this.vm._isBeingDestroyed && !this.vm._vForRemoving) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this$1.deps[i].removeSub(this$1);
    }
    this.active = false;
    this.vm = this.cb = this.value = null;
  }
};

/**
 * Recrusively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 *
 * @param {*} val
 * @param {Set} seen
 */

var seenObjects = createNewSet(); // new Set()
/* istanbul ignore next */
function traverse (val, seen) {
  var i, keys, isA, isO;
  if (!seen) {
    seen = seenObjects;
    seen.clear();
  }
  isA = Array.isArray(val);
  isO = isObject$4(val);
  if (isA || isO) {
    if (val.__ob__) {
      var depId = val.__ob__.dep.id;
      if (seen.has(depId)) {
        return
      } else {
        seen.add(depId);
      }
    }
    if (isA) {
      i = val.length;
      while (i--) { traverse(val[i], seen); }
    } else if (isO) {
      keys = Object.keys(val);
      i = keys.length;
      while (i--) { traverse(val[keys[i]], seen); }
    }
  }
}

/* eslint-disable */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);[
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
]
.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def$1(arrayMethods, method, function mutator () {
    var arguments$1 = arguments;

    // avoid leaking arguments:
    // http://jsperf.com/closure-with-arguments
    var i = arguments.length;
    var args = new Array(i);
    while (i--) {
      args[i] = arguments$1[i];
    }
    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
        inserted = args;
        break
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/**
 * Swap the element at the given index with a new value
 * and emits corresponding event.
 *
 * @param {Number} index
 * @param {*} val
 * @return {*} - replaced element
 */

def$1(
  arrayProto,
  '$set',
  function $set (index, val) {
    if (index >= this.length) {
      this.length = index + 1;
    }
    return this.splice(index, 1, val)[0]
  }
);

/**
 * Convenience method to remove the element at given index.
 *
 * @param {Number} index
 * @param {*} val
 */

def$1(
  arrayProto,
  '$remove',
  function $remove (index) {
    /* istanbul ignore if */
    if (!this.length) { return }
    /* istanbul ignore else */
    if (typeof index !== 'number') {
      index = this.indexOf(index);
    }
    /* istanbul ignore else */
    if (index > -1) {
      this.splice(index, 1);
    }
  }
);

/* eslint-disable */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * Observer class that are attached to each observed
 * object. Once attached, the observer converts target
 * object's property keys into getter/setters that
 * collect dependencies and dispatches updates.
 *
 * @param {Array|Object} value
 * @constructor
 */

function Observer$1 (value) {
  this.value = value;
  this.dep = new Dep();
  def$1(value, '__ob__', this);
  if (Array.isArray(value)) {
    var augment = hasProto
      ? protoAugment
      : copyAugment;
    augment(value, arrayMethods, arrayKeys);
    this.observeArray(value);
  } else {
    this.walk(value);
  }
}

// Instance methods

/**
 * Walk through each property and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 *
 * @param {Object} obj
 */

Observer$1.prototype.walk = function (obj) {
  var this$1 = this;

  for (var key in obj) {
    this$1.convert(key, obj[key]);
  }
};

/**
 * Observe a list of Array items.
 *
 * @param {Array} items
 */

Observer$1.prototype.observeArray = function (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

/**
 * Convert a property into getter/setter so we can emit
 * the events when the property is accessed/changed.
 *
 * @param {String} key
 * @param {*} val
 */

Observer$1.prototype.convert = function (key, val) {
  defineReactive(this.value, key, val);
};

/**
 * Add an owner vm, so that when $set/$delete mutations
 * happen we can notify owner vms to proxy the keys and
 * digest the watchers. This is only called when the object
 * is observed as an instance's root $data.
 *
 * @param {Vue} vm
 */

Observer$1.prototype.addVm = function (vm) {
  (this.vms || (this.vms = [])).push(vm);
};

/**
 * Remove an owner vm. This is called when the object is
 * swapped out as an instance's $data object.
 *
 * @param {Vue} vm
 */

/* istanbul ignore next */
Observer$1.prototype.removeVm = function (vm) {
  remove(this.vms, vm);
};

// helpers

/**
 * Augment an target Object or Array by intercepting
 * the prototype chain using __proto__
 *
 * @param {Object|Array} target
 * @param {Object} src
 */

function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment an target Object or Array by defining
 * hidden properties.
 *
 * @param {Object|Array} target
 * @param {Object} proto
 */

/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def$1(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 *
 * @param {*} value
 * @param {Vue} [vm]
 * @return {Observer|undefined}
 * @static
 */

function observe (value, vm) {
  if (!isObject$4(value)) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer$1) {
    ob = value.__ob__;
  } else if (
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer$1(value);
  }
  if (ob && vm) {
    ob.addVm(vm);
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 *
 * @param {Object} obj
 * @param {String} key
 * @param {*} val
 */

function defineReactive (obj, key, val) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;

  var childOb = observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
        }
        if (Array.isArray(value)) {
          for (var e = void 0, i = 0, l = value.length; i < l; i++) {
            e = value[i];
            e && e.__ob__ && e.__ob__.dep.depend();
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      if (newVal === value) {
        return
      }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 *
 * @param {Object} obj
 * @param {String} key
 * @param {*} val
 * @public
 */

/* istanbul ignore next */
function set (obj, key, val) {
  if (Array.isArray(obj)) {
    return obj.splice(key, 1, val)
  }
  if (hasOwn(obj, key)) {
    obj[key] = val;
    return
  }
  if (obj._isVue) {
    set(obj._data, key, val);
    return
  }
  var ob = obj.__ob__;
  if (!ob) {
    obj[key] = val;
    return
  }
  ob.convert(key, val);
  ob.dep.notify();
  if (ob.vms) {
    var i = ob.vms.length;
    while (i--) {
      var vm = ob.vms[i];
      proxy(vm, key);
      // vm.$forceUpdate()
    }
  }
  return val
}

/**
 * Delete a property and trigger change if necessary.
 *
 * @param {Object} obj
 * @param {String} key
 */

/* istanbul ignore next */
function del (obj, key) {
  if (!hasOwn(obj, key)) {
    return
  }
  delete obj[key];
  var ob = obj.__ob__;

  if (!ob) {
    if (obj._isVue) {
      delete obj._data[key];
      // obj.$forceUpdate()
    }
    return
  }
  ob.dep.notify();
  if (ob.vms) {
    var i = ob.vms.length;
    while (i--) {
      var vm = ob.vms[i];
      unproxy(vm, key);
      // vm.$forceUpdate()
    }
  }
}

var KEY_WORDS = ['$index', '$value', '$event'];
function proxy (vm, key) {
  if (KEY_WORDS.indexOf(key) > -1 || !isReserved(key)) {
    Object.defineProperty(vm, key, {
      configurable: true,
      enumerable: true,
      get: function proxyGetter () {
        return vm._data[key]
      },
      set: function proxySetter (val) {
        vm._data[key] = val;
      }
    });
  }
}

/* istanbul ignore next */
function unproxy (vm, key) {
  if (!isReserved(key)) {
    delete vm[key];
  }
}

/* eslint-disable */

function initState (vm) {
  vm._watchers = [];
  initData(vm);
  initComputed(vm);
  initMethods(vm);
}

function initData (vm) {
  var data = vm._data;

  if (!isPlainObject(data)) {
    data = {};
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var i = keys.length;
  while (i--) {
    proxy(vm, keys[i]);
  }
  // observe data
  observe(data, vm);
}

/* istanbul ignore next */
function noop$1 () {
}

function initComputed (vm) {
  var computed = vm._computed;
  if (computed) {
    for (var key in computed) {
      var userDef = computed[key];
      var def$$1 = {
        enumerable: true,
        configurable: true
      };
      if (typeof userDef === 'function') {
        def$$1.get = makeComputedGetter(userDef, vm);
        def$$1.set = noop$1;
      } else {
        def$$1.get = userDef.get
          ? userDef.cache !== false
            ? makeComputedGetter(userDef.get, vm)
            : bind(userDef.get, vm)
          : noop$1;
        def$$1.set = userDef.set
          ? bind(userDef.set, vm)
          : noop$1;
      }
      Object.defineProperty(vm, key, def$$1);
    }
  }
}

function makeComputedGetter (getter, owner) {
  var watcher = new Watcher(owner, getter, null, {
    lazy: true
  });
  return function computedGetter () {
    if (watcher.dirty) {
      watcher.evaluate();
    }
    if (Dep.target) {
      watcher.depend();
    }
    return watcher.value
  }
}

function initMethods (vm) {
  var methods = vm._methods;
  if (methods) {
    for (var key in methods) {
      vm[key] = methods[key];
    }
  }
}

// @todo: It should be registered by native from `registerComponents()`.
var config$2 = {
  nativeComponentMap: {
    text: true,
    image: true,
    container: true,
    slider: {
      type: 'slider',
      append: 'tree'
    },
    cell: {
      type: 'cell',
      append: 'tree'
    }
  }
};

/**
 * @fileOverview
 * Directive Parser
 */

var nativeComponentMap = config$2.nativeComponentMap;

var SETTERS = {
  attr: 'setAttr',
  style: 'setStyle',
  event: 'addEvent'
};

/**
 * apply the native component's options(specified by template.type)
 * to the template
 */
function applyNaitveComponentOptions (template) {
  var type = template.type;
  var options = nativeComponentMap[type];

  if (typeof options === 'object') {
    for (var key in options) {
      if (template[key] == null) {
        template[key] = options[key];
      }
      else if (typof(template[key]) === 'object' &&
        typof(options[key]) === 'object') {
        for (var subkey in options[key]) {
          if (template[key][subkey] == null) {
            template[key][subkey] = options[key][subkey];
          }
        }
      }
    }
  }
}

/**
 * bind all id, attr, classnames, style, events to an element
 */
function bindElement (vm, el, template) {
  setId(vm, el, template.id, vm);
  setAttr$1(vm, el, template.attr);
  setClass(vm, el, template.classList);
  setStyle$1(vm, el, template.style);
  bindEvents$1(vm, el, template.events);
}

/**
 * bind all props to sub vm and bind all style, events to the root element
 * of the sub vm if it doesn't have a replaced multi-node fragment
 */
function bindSubVm (vm, subVm, template, repeatItem) {
  subVm = subVm || {};
  template = template || {};

  var options = subVm._options || {};

  // bind props
  var props = options.props;

  if (Array.isArray(props)) {
    props = props.reduce(function (result, value) {
      result[value] = true;
      return result
    }, {});
  }

  mergeProps(repeatItem, props, vm, subVm);
  mergeProps(template.attr, props, vm, subVm);
}

/**
 * merge class and styles from vm to sub vm.
 */
function bindSubVmAfterInitialized (vm, subVm, template, target) {
  if ( target === void 0 ) target = {};

  mergeClassStyle(template.classList, vm, subVm);
  mergeStyle(template.style, vm, subVm);

  // bind subVm to the target element
  if (target.children) {
    target.children[target.children.length - 1]._vm = subVm;
  }
  else {
    target._vm = subVm;
  }
}

/**
 * Bind props from vm to sub vm and watch their updates.
 */
function mergeProps (target, props, vm, subVm) {
  if (!target) {
    return
  }
  var loop = function ( key ) {
    if (!props || props[key]) {
      var value = target[key];
      if (typeof value === 'function') {
        var returnValue = watch(vm, value, function (v) {
          subVm[key] = v;
        });
        subVm[key] = returnValue;
      }
      else {
        subVm[key] = value;
      }
    }
  };

  for (var key in target) loop( key );
}

/**
 * Bind style from vm to sub vm and watch their updates.
 */
function mergeStyle (target, vm, subVm) {
  var loop = function ( key ) {
    var value = target[key];
    if (typeof value === 'function') {
      var returnValue = watch(vm, value, function (v) {
        if (subVm._rootEl) {
          subVm._rootEl.setStyle(key, v);
        }
      });
      subVm._rootEl.setStyle(key, returnValue);
    }
    else {
      if (subVm._rootEl) {
        subVm._rootEl.setStyle(key, value);
      }
    }
  };

  for (var key in target) loop( key );
}

/**
 * Bind class & style from vm to sub vm and watch their updates.
 */
function mergeClassStyle (target, vm, subVm) {
  var css = vm._options && vm._options.style || {};

  /* istanbul ignore if */
  if (!subVm._rootEl) {
    return
  }

  var className = '@originalRootEl';
  css[className] = subVm._rootEl.classStyle;

  function addClassName (list, name) {
    if (typof(list) === 'array') {
      list.unshift(name);
    }
  }

  if (typeof target === 'function') {
    var value = watch(vm, target, function (v) {
      addClassName(v, className);
      setClassStyle$1(subVm._rootEl, css, v);
    });
    addClassName(value, className);
    setClassStyle$1(subVm._rootEl, css, value);
  }
  else if (target != null) {
    addClassName(target, className);
    setClassStyle$1(subVm._rootEl, css, target);
  }
}

/**
 * bind id to an element
 * each id is unique in a whole vm
 */
function setId (vm, el, id, target) {
  var map = Object.create(null);

  Object.defineProperties(map, {
    vm: {
      value: target,
      writable: false,
      configurable: false
    },
    el: {
      get: function () { return el || target._rootEl; },
      configurable: false
    }
  });

  if (typeof id === 'function') {
    var handler = id;
    id = handler.call(vm);
    if (id || id === 0) {
      vm._ids[id] = map;
    }
    watch(vm, handler, function (newId) {
      if (newId) {
        vm._ids[newId] = map;
      }
    });
  }
  else if (id && typeof id === 'string') {
    vm._ids[id] = map;
  }
}

/**
 * bind attr to an element
 */
function setAttr$1 (vm, el, attr) {
  bindDir(vm, el, 'attr', attr);
}

function setClassStyle$1 (el, css, classList) {
  var classStyle = {};
  var length = classList.length;

  var loop = function ( i ) {
    var style = css[classList[i]];
    if (style) {
      Object.keys(style).forEach(function (key) {
        classStyle[key] = style[key];
      });
    }
  };

  for (var i = 0; i < length; i++) loop( i );
  el.setClassStyle(classStyle);
}

/**
 * bind classnames to an element
 */
function setClass (vm, el, classList) {
  if (typeof classList !== 'function' && !Array.isArray(classList)) {
    return
  }
  if (Array.isArray(classList) && !classList.length) {
    el.setClassStyle({});
    return
  }

  var style = vm._options && vm._options.style || {};
  if (typeof classList === 'function') {
    var value = watch(vm, classList, function (v) {
      setClassStyle$1(el, style, v);
    });
    setClassStyle$1(el, style, value);
  }
  else {
    setClassStyle$1(el, style, classList);
  }
}

/**
 * bind style to an element
 */
function setStyle$1 (vm, el, style) {
  bindDir(vm, el, 'style', style);
}

/**
 * add an event type and handler to an element and generate a dom update
 */
function setEvent (vm, el, type, handler) {
  el.addEvent(type, bind(handler, vm));
}

/**
 * add all events of an element
 */
function bindEvents$1 (vm, el, events) {
  if (!events) {
    return
  }
  var keys = Object.keys(events);
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    var handler = events[key];
    if (typeof handler === 'string') {
      handler = vm[handler];
      /* istanbul ignore if */
      if (!handler) {
        console.warn(("[JS Framework] The event handler \"" + handler + "\" is not defined."));
      }
    }
    setEvent(vm, el, key, handler);
  }
}

/**
 * set a series of members as a kind of an element
 * for example: style, attr, ...
 * if the value is a function then bind the data changes
 */
function bindDir (vm, el, name, data) {
  if (!data) {
    return
  }
  var keys = Object.keys(data);
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    var value = data[key];
    if (typeof value === 'function') {
      bindKey(vm, el, name, key, value);
    }
    else {
      el[SETTERS[name]](key, value);
    }
  }
}

/**
 * bind data changes to a certain key to a name series in an element
 */
function bindKey (vm, el, name, key, calc) {
  var methodName = SETTERS[name];
  // watch the calc, and returns a value by calc.call()
  var value = watch(vm, calc, function (value) {
    function handler () {
      el[methodName](key, value);
    }
    var differ = vm && vm._app && vm._app.differ;
    if (differ) {
      differ.append('element', el.depth, el.ref, handler);
    }
    else {
      handler();
    }
  });

  el[methodName](key, value);
}

/**
 * watch a calc function and callback if the calc value changes
 */
function watch (vm, calc, callback) {
  if (vm._static) {
    return calc.call(vm, vm)
  }
  var watcher = new Watcher(vm, calc, function (value, oldValue) {
    /* istanbul ignore if */
    if (typeof value !== 'object' && value === oldValue) {
      return
    }
    callback(value);
  });

  return watcher.value
}

/**
 * @fileOverview Document & Element Helpers.
 *
 * required:
 * Document#: createElement, createComment, getRef
 * Element#: appendChild, insertBefore, removeChild, nextSibling
 */

/**
 * Create a body by type
 * Using this._app.doc
 *
 * @param  {string} type
 */
function createBody$1 (vm, type) {
  var doc = vm._app.doc;
  return doc.createBody(type)
}

/**
 * Create an element by type
 * Using this._app.doc
 *
 * @param  {string} type
 */
function createElement$1 (vm, type) {
  var doc = vm._app.doc;
  return doc.createElement(type)
}

/**
 * Create and return a frag block for an element.
 * The frag block has a starter, ender and the element itself.
 *
 * @param  {object} element
 */
function createBlock (vm, element) {
  var start = createBlockStart(vm);
  var end = createBlockEnd(vm);
  var blockId = lastestBlockId++;
  if (element.element) {
    var updateMark = element.updateMark;
    if (updateMark) {
      if (updateMark.element) {
        updateMark = updateMark.end;
      }
      element.element.insertAfter(end, updateMark);
      element.element.insertAfter(start, updateMark);
      element.updateMark = end;
    }
    else {
      element.element.insertBefore(start, element.end);
      element.element.insertBefore(end, element.end);
    }
    element = element.element;
  }
  else {
    element.appendChild(start);
    element.appendChild(end);
  }
  return { start: start, end: end, element: element, blockId: blockId }
}

var lastestBlockId = 1;

/**
 * Create and return a block starter.
 * Using this._app.doc
 */
function createBlockStart (vm) {
  var doc = vm._app.doc;
  var anchor = doc.createComment('start');
  return anchor
}

/**
 * Create and return a block ender.
 * Using this._app.doc
 */
function createBlockEnd (vm) {
  var doc = vm._app.doc;
  var anchor = doc.createComment('end');
  return anchor
}

/**
 * Attach target to a certain dest using appendChild by default.
 * If the dest is a frag block then insert before the ender.
 * If the target is a frag block then attach the starter and ender in order.
 *
 * @param  {object} target
 * @param  {object} dest
 */
function attachTarget (vm, target, dest) {
  if (dest.element) {
    var before = dest.end;
    var after = dest.updateMark;
    // push new target for watch list update later
    if (dest.children) {
      dest.children.push(target);
    }
    // for check repeat case
    if (after) {
      var signal = moveTarget(vm, target, after);
      dest.updateMark = target.element ? target.end : target;
      return signal
    }
    else if (target.element) {
      dest.element.insertBefore(target.start, before);
      dest.element.insertBefore(target.end, before);
    }
    else {
      return dest.element.insertBefore(target, before)
    }
  }
  else {
    if (target.element) {
      dest.appendChild(target.start);
      dest.appendChild(target.end);
    }
    else {
      return dest.appendChild(target)
    }
  }
}

/**
 * Move target before a certain element. The target maybe block or element.
 *
 * @param  {object} target
 * @param  {object} before
 */
function moveTarget (vm, target, after) {
  if (target.element) {
    return moveBlock(target, after)
  }
  return moveElement$1(target, after)
}

/**
 * Move element before a certain element.
 *
 * @param  {object} element
 * @param  {object} before
 */
function moveElement$1 (element, after) {
  var parent = after.parentNode;
  if (parent) {
    return parent.insertAfter(element, after)
  }
}

/**
 * Move all elements of the block before a certain element.
 *
 * @param  {object} fragBlock
 * @param  {object} before
 */
function moveBlock (fragBlock, after) {
  var parent = after.parentNode;

  if (parent) {
    var el = fragBlock.start;
    var signal;
    var group = [el];

    while (el && el !== fragBlock.end) {
      el = el.nextSibling;
      group.push(el);
    }

    var temp = after;
    group.every(function (el) {
      signal = parent.insertAfter(el, temp);
      temp = el;
      return signal !== -1
    });

    return signal
  }
}

/**
 * Remove target from DOM tree.
 * If the target is a frag block then call _removeBlock
 *
 * @param  {object} target
 */
function removeTarget (vm, target, preserveBlock) {
  if ( preserveBlock === void 0 ) preserveBlock = false;

  if (target.element) {
    removeBlock(target, preserveBlock);
  }
  else {
    removeElement$1(target);
  }
  if (target._vm) {
    target._vm.$emit('hook:destroyed');
  }
}

/**
 * Remove a certain element.
 * Using this._app.doc
 *
 * @param  {object} target
 */
function removeElement$1 (target) {
  var parent = target.parentNode;

  if (parent) {
    parent.removeChild(target);
  }
}

/**
 * Remove a frag block.
 * The second param decides whether the block self should be removed too.
 *
 * @param  {object}  fragBlock
 * @param  {Boolean} preserveBlock=false
 */
function removeBlock (fragBlock, preserveBlock) {
  if ( preserveBlock === void 0 ) preserveBlock = false;

  var result = [];
  var el = fragBlock.start.nextSibling;

  while (el && el !== fragBlock.end) {
    result.push(el);
    el = el.nextSibling;
  }

  if (!preserveBlock) {
    removeElement$1(fragBlock.start);
  }
  result.forEach(function (el) {
    removeElement$1(el);
  });
  if (!preserveBlock) {
    removeElement$1(fragBlock.end);
  }
}

/**
 * @fileOverview
 * ViewModel template parser & data-binding process
 */

/**
 * build()
 *   compile(template, parentNode)
 *     if (type is content) create contentNode
 *     else if (dirs have v-for) foreach -> create context
 *       -> compile(templateWithoutFor, parentNode): diff(list) onchange
 *     else if (dirs have v-if) assert
 *       -> compile(templateWithoutIf, parentNode): toggle(shown) onchange
 *     else if (type is dynamic)
 *       -> compile(templateWithoutDynamicType, parentNode): watch(type) onchange
 *     else if (type is custom)
 *       addChildVm(vm, parentVm)
 *       build(externalDirs)
 *       foreach childNodes -> compile(childNode, template)
 *     else if (type is native)
 *       set(dirs): update(id/attr/style/class) onchange
 *       append(template, parentNode)
 *       foreach childNodes -> compile(childNode, template)
 */
function build (vm) {
  var opt = vm._options || {};
  var template = opt.template || {};

  if (opt.replace) {
    if (template.children && template.children.length === 1) {
      compile(vm, template.children[0], vm._parentEl);
    }
    else {
      compile(vm, template.children, vm._parentEl);
    }
  }
  else {
    compile(vm, template, vm._parentEl);
  }

  console.debug(("[JS Framework] \"ready\" lifecycle in Vm(" + (vm._type) + ")"));
  vm.$emit('hook:ready');
  vm._ready = true;
}

/**
 * Generate elements by child or children and append to parent elements.
 * Root element info would be merged if has. The first argument may be an array
 * if the root element with options.replace has not only one child.
 *
 * @param {object|array} target
 * @param {object}       dest
 * @param {object}       meta
 */
function compile (vm, target, dest, meta) {
  var app = vm._app || {};

  if (app.lastSignal === -1) {
    return
  }

  if (target.attr && target.attr.hasOwnProperty('static')) {
    vm._static = true;
  }

  if (targetIsFragment(target)) {
    compileFragment(vm, target, dest, meta);
    return
  }
  meta = meta || {};
  if (targetIsContent(target)) {
    console.debug('[JS Framework] compile "content" block by', target);
    vm._content = createBlock(vm, dest);
    return
  }

  if (targetNeedCheckRepeat(target, meta)) {
    console.debug('[JS Framework] compile "repeat" logic by', target);
    if (dest.type === 'document') {
      console.warn('[JS Framework] The root element does\'t support `repeat` directive!');
    }
    else {
      compileRepeat(vm, target, dest);
    }
    return
  }
  if (targetNeedCheckShown(target, meta)) {
    console.debug('[JS Framework] compile "if" logic by', target);
    if (dest.type === 'document') {
      console.warn('[JS Framework] The root element does\'t support `if` directive!');
    }
    else {
      compileShown(vm, target, dest, meta);
    }
    return
  }
  var typeGetter = meta.type || target.type;
  if (targetNeedCheckType(typeGetter, meta)) {
    compileType(vm, target, dest, typeGetter, meta);
    return
  }
  var type = typeGetter;
  var component = targetIsComposed(vm, target, type);
  if (component) {
    console.debug('[JS Framework] compile composed component by', target);
    compileCustomComponent(vm, component, target, dest, type, meta);
    return
  }
  console.debug('[JS Framework] compile native component by', target);
  compileNativeComponent(vm, target, dest, type);
}

/**
 * Check if target is a fragment (an array).
 *
 * @param  {object}  target
 * @return {boolean}
 */
function targetIsFragment (target) {
  return Array.isArray(target)
}

/**
 * Check if target type is content/slot.
 *
 * @param  {object}  target
 * @return {boolean}
 */
function targetIsContent (target) {
  return target.type === 'content' || target.type === 'slot'
}

/**
 * Check if target need to compile by a list.
 *
 * @param  {object}  target
 * @param  {object}  meta
 * @return {boolean}
 */
function targetNeedCheckRepeat (target, meta) {
  return !meta.hasOwnProperty('repeat') && target.repeat
}

/**
 * Check if target need to compile by a boolean value.
 *
 * @param  {object}  target
 * @param  {object}  meta
 * @return {boolean}
 */
function targetNeedCheckShown (target, meta) {
  return !meta.hasOwnProperty('shown') && target.shown
}

/**
 * Check if target need to compile by a dynamic type.
 *
 * @param  {string|function} typeGetter
 * @param  {object}          meta
 * @return {boolean}
 */
function targetNeedCheckType (typeGetter, meta) {
  return (typeof typeGetter === 'function') && !meta.hasOwnProperty('type')
}

/**
 * Check if this kind of component is composed.
 *
 * @param  {string}  type
 * @return {boolean}
 */
function targetIsComposed (vm, target, type) {
  var component;
  if (vm._app && vm._app.customComponentMap) {
    component = vm._app.customComponentMap[type];
  }
  if (vm._options && vm._options.components) {
    component = vm._options.components[type];
  }
  if (target.component) {
    component = component || {};
  }
  return component
}

/**
 * Compile a list of targets.
 *
 * @param {object} target
 * @param {object} dest
 * @param {object} meta
 */
function compileFragment (vm, target, dest, meta) {
  var fragBlock = createBlock(vm, dest);
  target.forEach(function (child) {
    compile(vm, child, fragBlock, meta);
  });
}

/**
 * Compile a target with repeat directive.
 *
 * @param {object} target
 * @param {object} dest
 */
function compileRepeat (vm, target, dest) {
  var repeat = target.repeat;
  var oldStyle = typeof repeat === 'function';
  var getter = repeat.getter || repeat.expression || repeat;
  if (typeof getter !== 'function') {
    getter = function () { return [] };
  }
  var key = repeat.key || '$index';
  var value = repeat.value || '$value';
  var trackBy = repeat.trackBy || target.trackBy ||
    (target.attr && target.attr.trackBy);

  var fragBlock = createBlock(vm, dest);
  fragBlock.children = [];
  fragBlock.data = [];
  fragBlock.vms = [];

  bindRepeat(vm, target, fragBlock, { getter: getter, key: key, value: value, trackBy: trackBy, oldStyle: oldStyle });
}

/**
 * Compile a target with if directive.
 *
 * @param {object} target
 * @param {object} dest
 * @param {object} meta
 */
function compileShown (vm, target, dest, meta) {
  var newMeta = { shown: true };
  var fragBlock = createBlock(vm, dest);

  if (dest.element && dest.children) {
    dest.children.push(fragBlock);
  }

  if (meta.repeat) {
    newMeta.repeat = meta.repeat;
  }

  bindShown(vm, target, fragBlock, newMeta);
}

/**
 * Compile a target with dynamic component type.
 *
 * @param {object}   target
 * @param {object}   dest
 * @param {function} typeGetter
 */
function compileType (vm, target, dest, typeGetter, meta) {
  var type = typeGetter.call(vm);
  var newMeta = extend({ type: type }, meta);
  var fragBlock = createBlock(vm, dest);

  if (dest.element && dest.children) {
    dest.children.push(fragBlock);
  }

  watch(vm, typeGetter, function (value) {
    var newMeta = extend({ type: value }, meta);
    removeTarget(vm, fragBlock, true);
    compile(vm, target, fragBlock, newMeta);
  });

  compile(vm, target, fragBlock, newMeta);
}

/**
 * Compile a composed component.
 *
 * @param {object} target
 * @param {object} dest
 * @param {string} type
 */
function compileCustomComponent (vm, component, target, dest, type, meta) {
  var Ctor = vm.constructor;
  var subVm = new Ctor(type, component, vm, dest, undefined, {
    'hook:init': function () {
      if (vm._static) {
        this._static = vm._static;
      }
      setId(vm, null, target.id, this);
      // bind template earlier because of lifecycle issues
      this._externalBinding = {
        parent: vm,
        template: target
      };
    },
    'hook:created': function () {
      bindSubVm(vm, this, target, meta.repeat);
    },
    'hook:ready': function () {
      if (this._content) {
        compileChildren(vm, target, this._content);
      }
    }
  });
  bindSubVmAfterInitialized(vm, subVm, target, dest);
}

/**
 * Generate element from template and attach to the dest if needed.
 * The time to attach depends on whether the mode status is node or tree.
 *
 * @param {object} template
 * @param {object} dest
 * @param {string} type
 */
function compileNativeComponent (vm, template, dest, type) {
  applyNaitveComponentOptions(template);

  var element;
  if (dest.ref === '_documentElement') {
    // if its parent is documentElement then it's a body
    console.debug(("[JS Framework] compile to create body for " + type));
    element = createBody$1(vm, type);
  }
  else {
    console.debug(("[JS Framework] compile to create element for " + type));
    element = createElement$1(vm, type);
  }

  if (!vm._rootEl) {
    vm._rootEl = element;
    // bind event earlier because of lifecycle issues
    var binding = vm._externalBinding || {};
    var target = binding.template;
    var parentVm = binding.parent;
    if (target && target.events && parentVm && element) {
      for (var type$1 in target.events) {
        var handler = parentVm[target.events[type$1]];
        if (handler) {
          element.addEvent(type$1, bind(handler, parentVm));
        }
      }
    }
  }

  bindElement(vm, element, template);

  if (template.attr && template.attr.append) { // backward, append prop in attr
    template.append = template.attr.append;
  }

  if (template.append) { // give the append attribute for ios adaptation
    element.attr = element.attr || {};
    element.attr.append = template.append;
  }

  var treeMode = template.append === 'tree';
  var app = vm._app || {};
  if (app.lastSignal !== -1 && !treeMode) {
    console.debug('[JS Framework] compile to append single node for', element);
    app.lastSignal = attachTarget(vm, element, dest);
  }
  if (app.lastSignal !== -1) {
    compileChildren(vm, template, element);
  }
  if (app.lastSignal !== -1 && treeMode) {
    console.debug('[JS Framework] compile to append whole tree for', element);
    app.lastSignal = attachTarget(vm, element, dest);
  }
}

/**
 * Set all children to a certain parent element.
 *
 * @param {object} template
 * @param {object} dest
 */
function compileChildren (vm, template, dest) {
  var app = vm._app || {};
  var children = template.children;
  if (children && children.length) {
    children.every(function (child) {
      compile(vm, child, dest);
      return app.lastSignal !== -1
    });
  }
}

/**
 * Watch the list update and refresh the changes.
 *
 * @param {object} target
 * @param {object} fragBlock {vms, data, children}
 * @param {object} info      {getter, key, value, trackBy, oldStyle}
 */
function bindRepeat (vm, target, fragBlock, info) {
  var vms = fragBlock.vms;
  var children = fragBlock.children;
  var getter = info.getter;
  var trackBy = info.trackBy;
  var oldStyle = info.oldStyle;
  var keyName = info.key;
  var valueName = info.value;

  function compileItem (item, index, context) {
    var mergedData;
    if (oldStyle) {
      mergedData = item;
      if (isObject$4(item)) {
        mergedData[keyName] = index;
        if (!mergedData.hasOwnProperty('INDEX')) {
          Object.defineProperty(mergedData, 'INDEX', {
            value: function () {
              console.warn('[JS Framework] "INDEX" in repeat is deprecated, ' +
                'please use "$index" instead');
            }
          });
        }
      }
      else {
        console.warn('[JS Framework] Each list item must be an object in old-style repeat, '
          + 'please use `repeat={{v in list}}` instead.');
        mergedData = {};
        mergedData[keyName] = index;
        mergedData[valueName] = item;
      }
    }
    else {
      mergedData = {};
      mergedData[keyName] = index;
      mergedData[valueName] = item;
    }
    var newContext = mergeContext(context, mergedData);
    vms.push(newContext);
    compile(newContext, target, fragBlock, { repeat: item });
  }

  var list = watchBlock(vm, fragBlock, getter, 'repeat',
    function (data) {
      console.debug('[JS Framework] the "repeat" item has changed', data);
      if (!fragBlock || !data) {
        return
      }

      var oldChildren = children.slice();
      var oldVms = vms.slice();
      var oldData = fragBlock.data.slice();
      // 1. collect all new refs track by
      var trackMap = {};
      var reusedMap = {};
      data.forEach(function (item, index) {
        var key = trackBy ? item[trackBy] : (oldStyle ? item[keyName] : index);
        /* istanbul ignore if */
        if (key == null || key === '') {
          return
        }
        trackMap[key] = item;
      });

      // 2. remove unused element foreach old item
      var reusedList = [];
      oldData.forEach(function (item, index) {
        var key = trackBy ? item[trackBy] : (oldStyle ? item[keyName] : index);
        if (trackMap.hasOwnProperty(key)) {
          reusedMap[key] = {
            item: item, index: index, key: key,
            target: oldChildren[index],
            vm: oldVms[index]
          };
          reusedList.push(item);
        }
        else {
          removeTarget(vm, oldChildren[index]);
        }
      });

      // 3. create new element foreach new item
      children.length = 0;
      vms.length = 0;
      fragBlock.data = data.slice();
      fragBlock.updateMark = fragBlock.start;

      data.forEach(function (item, index) {
        var key = trackBy ? item[trackBy] : (oldStyle ? item[keyName] : index);
        var reused = reusedMap[key];
        if (reused) {
          if (reused.item === reusedList[0]) {
            reusedList.shift();
          }
          else {
            reusedList.$remove(reused.item);
            moveTarget(vm, reused.target, fragBlock.updateMark, true);
          }
          children.push(reused.target);
          vms.push(reused.vm);
          if (oldStyle) {
            reused.vm = item;
          }
          else {
            reused.vm[valueName] = item;
          }
          reused.vm[keyName] = index;
          fragBlock.updateMark = reused.target;
        }
        else {
          compileItem(item, index, vm);
        }
      });

      delete fragBlock.updateMark;
    }
  );

  fragBlock.data = list.slice(0);
  list.forEach(function (item, index) {
    compileItem(item, index, vm);
  });
}

/**
 * Watch the display update and add/remove the element.
 *
 * @param  {object} target
 * @param  {object} fragBlock
 * @param  {object} context
 */
function bindShown (vm, target, fragBlock, meta) {
  var display = watchBlock(vm, fragBlock, target.shown, 'shown',
    function (display) {
      console.debug('[JS Framework] the "if" item was changed', display);

      if (!fragBlock || !!fragBlock.display === !!display) {
        return
      }
      fragBlock.display = !!display;
      if (display) {
        compile(vm, target, fragBlock, meta);
      }
      else {
        removeTarget(vm, fragBlock, true);
      }
    }
  );

  fragBlock.display = !!display;
  if (display) {
    compile(vm, target, fragBlock, meta);
  }
}

/**
 * Watch calc value changes and append certain type action to differ.
 * It is used for if or repeat data-binding generator.
 *
 * @param  {object}   fragBlock
 * @param  {function} calc
 * @param  {string}   type
 * @param  {function} handler
 * @return {any}      init value of calc
 */
function watchBlock (vm, fragBlock, calc, type, handler) {
  var differ = vm && vm._app && vm._app.differ;
  var config = {};
  var depth = (fragBlock.element.depth || 0) + 1;

  return watch(vm, calc, function (value) {
    config.latestValue = value;
    if (differ && !config.recorded) {
      differ.append(type, depth, fragBlock.blockId, function () {
        var latestValue = config.latestValue;
        handler(latestValue);
        config.recorded = false;
        config.latestValue = undefined;
      });
    }
    config.recorded = true;
  })
}

/**
 * Clone a context and merge certain data.
 *
 * @param  {object} mergedData
 * @return {object}
 */
function mergeContext (context, mergedData) {
  var newContext = Object.create(context);
  newContext._data = mergedData;
  initData(newContext);
  initComputed(newContext);
  newContext._realParent = context;
  if (context._static) {
    newContext._static = context._static;
  }
  return newContext
}

/**
 * @fileOverview
 * Everything about component event which includes event object, event listener,
 * event emitter and lifecycle hooks.
 */

/**
 * Event object definition. An event object has `type`, `timestamp` and
 * `detail` from which a component emit. The event object could be dispatched to
 * parents or broadcasted to children except `this.stop()` is called.
 * @param {string} type
 * @param {any}    detail
 */
function Evt (type, detail) {
  if (detail instanceof Evt) {
    return detail
  }

  this.timestamp = Date.now();
  this.detail = detail;
  this.type = type;

  var shouldStop = false;

  /**
   * stop dispatch and broadcast
   */
  this.stop = function () {
    shouldStop = true;
  };

  /**
   * check if it can't be dispatched or broadcasted
   */
  this.hasStopped = function () {
    return shouldStop
  };
}

/**
 * Emit an event but not broadcast down or dispatch up.
 * @param  {string} type
 * @param  {any}    detail
 */
function $emit (type, detail) {
  var this$1 = this;

  var events = this._vmEvents;
  var handlerList = events[type];
  if (handlerList) {
    var evt = new Evt(type, detail);
    handlerList.forEach(function (handler) {
      handler.call(this$1, evt);
    });
  }
}

/**
 * Emit an event and dispatch it up.
 * @param  {string} type
 * @param  {any}    detail
 */
function $dispatch (type, detail) {
  var evt = new Evt(type, detail);
  this.$emit(type, evt);

  if (!evt.hasStopped() && this._parent && this._parent.$dispatch) {
    this._parent.$dispatch(type, evt);
  }
}

/**
 * Emit an event and broadcast it down.
 * @param  {string} type
 * @param  {any}    detail
 */
function $broadcast (type, detail) {
  var evt = new Evt(type, detail);
  this.$emit(type, evt);

  if (!evt.hasStopped() && this._childrenVms) {
    this._childrenVms.forEach(function (subVm) {
      subVm.$broadcast(type, evt);
    });
  }
}

/**
 * Add event listener.
 * @param  {string}   type
 * @param  {function} handler
 */
function $on (type, handler) {
  if (!type || typeof handler !== 'function') {
    return
  }
  var events = this._vmEvents;
  var handlerList = events[type] || [];
  handlerList.push(handler);
  events[type] = handlerList;

  // fixed old version lifecycle design
  /* istanbul ignore if */
  if (type === 'hook:ready' && this._ready) {
    this.$emit('hook:ready');
  }
}

/**
 * Remove event listener.
 * @param  {string}   type
 * @param  {function} handler
 */
function $off (type, handler) {
  if (!type) {
    return
  }
  var events = this._vmEvents;
  if (!handler) {
    delete events[type];
    return
  }
  var handlerList = events[type];
  if (!handlerList) {
    return
  }
  handlerList.$remove(handler);
}

var LIFE_CYCLE_TYPES = ['init', 'created', 'ready', 'destroyed'];

/**
 * Init events:
 * 1. listen `events` in component options & `externalEvents`.
 * 2. bind lifecycle hooks.
 * @param  {Vm}     vm
 * @param  {object} externalEvents
 */
function initEvents (vm, externalEvents) {
  var options = vm._options || {};
  var events = options.events || {};
  for (var type1 in events) {
    vm.$on(type1, events[type1]);
  }
  for (var type2 in externalEvents) {
    vm.$on(type2, externalEvents[type2]);
  }
  LIFE_CYCLE_TYPES.forEach(function (type) {
    vm.$on(("hook:" + type), options[type]);
  });
}

/**
 * Bind event related methods to ViewModel instance.
 * @param  {Vm} vm
 */
function mixinEvents (vm) {
  vm.$emit = $emit;
  vm.$dispatch = $dispatch;
  vm.$broadcast = $broadcast;
  vm.$on = $on;
  vm.$off = $off;
}

/**
 * @fileOverview
 * ViewModel Constructor & definition
 */

/**
 * ViewModel constructor
 *
 * @param {string} type
 * @param {object} options    component options
 * @param {object} parentVm   which contains _app
 * @param {object} parentEl   root element or frag block
 * @param {object} mergedData external data
 * @param {object} externalEvents external events
 */
function Vm (
  type,
  options,
  parentVm,
  parentEl,
  mergedData,
  externalEvents
) {
  parentVm = parentVm || {};
  this._parent = parentVm._realParent ? parentVm._realParent : parentVm;
  this._app = parentVm._app || {};
  parentVm._childrenVms && parentVm._childrenVms.push(this);

  if (!options && this._app.customComponentMap) {
    options = this._app.customComponentMap[type];
  }
  options = options || {};

  var data = options.data || {};

  this._options = options;
  this._methods = options.methods || {};
  this._computed = options.computed || {};
  this._css = options.style || {};
  this._ids = {};
  this._vmEvents = {};
  this._childrenVms = [];
  this._type = type;

  // bind events and lifecycles
  initEvents(this, externalEvents);

  console.debug(("[JS Framework] \"init\" lifecycle in Vm(" + (this._type) + ")"));
  this.$emit('hook:init');
  this._inited = true;

  // proxy data and methods
  // observe data and add this to vms
  this._data = typeof data === 'function' ? data() : data;
  if (mergedData) {
    extend(this._data, mergedData);
  }
  initState(this);

  console.debug(("[JS Framework] \"created\" lifecycle in Vm(" + (this._type) + ")"));
  this.$emit('hook:created');
  this._created = true;

  // backward old ready entry
  if (options.methods && options.methods.ready) {
    console.warn('"exports.methods.ready" is deprecated, ' +
      'please use "exports.created" instead');
    options.methods.ready.call(this);
  }

  if (!this._app.doc) {
    return
  }

  // if no parentElement then specify the documentElement
  this._parentEl = parentEl || this._app.doc.documentElement;
  build(this);
}

mixinEvents(Vm.prototype);

/**
 * Watch an function and bind all the data appeared in it. When the related
 * data changes, the callback will be called with new value as 1st param.
 *
 * @param {Function} fn
 * @param {Function} callback
 */
Vm.prototype.$watch = function (fn, callback) {
  watch(this, fn, callback);
};

Vm.set = set;
Vm.delete = del;

var nativeModules = {};

// for testing

/**
 * for testing
 */


/**
 * for testing
 */


// for framework

/**
 * init modules for an app instance
 * the second param determines whether to replace an existed method
 */
function initModules (modules, ifReplace) {
  var loop = function ( moduleName ) {
    // init `modules[moduleName][]`
    var methods = nativeModules[moduleName];
    if (!methods) {
      methods = {};
      nativeModules[moduleName] = methods;
    }

    // push each non-existed new method
    modules[moduleName].forEach(function (method) {
      if (typeof method === 'string') {
        method = {
          name: method
        };
      }

      if (!methods[method.name] || ifReplace) {
        methods[method.name] = method;
      }
    });
  };

  for (var moduleName in modules) loop( moduleName );
}

/**
 * init app methods
 */
function initMethods$1 (Vm, apis) {
  var p = Vm.prototype;

  for (var apiName in apis) {
    if (!p.hasOwnProperty(apiName)) {
      p[apiName] = apis[apiName];
    }
  }
}

// for app

/**
 * get a module of methods for an app instance
 */
function requireModule (app, name) {
  var methods = nativeModules[name];
  var target = {};
  var loop = function ( methodName ) {
    target[methodName] = function () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      return app.callTasks({
      module: name,
      method: methodName,
      args: args
    });
    };
  };

  for (var methodName in methods) loop( methodName );
  return target
}

/**
 * get a custom component options
 */
function requireCustomComponent (app, name) {
  var customComponentMap = app.customComponentMap;
  return customComponentMap[name]
}

/**
 * register a custom component options
 */
function registerCustomComponent (app, name, def) {
  var customComponentMap = app.customComponentMap;

  if (customComponentMap[name]) {
    console.error(("[JS Framework] define a component(" + name + ") that already exists"));
    return
  }

  customComponentMap[name] = def;
}

var semver = createCommonjsModule(function (module, exports) {
exports = module.exports = SemVer;

// The debug function is excluded entirely from the minified version.
/* nomin */ var debug;
/* nomin */ if (typeof process === 'object' &&
    /* nomin */ process.env &&
    /* nomin */ false &&
    /* nomin */ /\bsemver\b/i.test(false))
  /* nomin */ { debug = function() {
    /* nomin */ var args = Array.prototype.slice.call(arguments, 0);
    /* nomin */ args.unshift('SEMVER');
    /* nomin */ console.log.apply(console, args);
    /* nomin */ }; }
/* nomin */ else
  /* nomin */ { debug = function() {}; }

// Note: this is the semver.org version of the spec that it implements
// Not necessarily the package version of this code.
exports.SEMVER_SPEC_VERSION = '2.0.0';

var MAX_LENGTH = 256;
var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || 9007199254740991;

// The actual regexps go on exports.re
var re = exports.re = [];
var src = exports.src = [];
var R = 0;

// The following Regular Expressions can be used for tokenizing,
// validating, and parsing SemVer version strings.

// ## Numeric Identifier
// A single `0`, or a non-zero digit followed by zero or more digits.

var NUMERICIDENTIFIER = R++;
src[NUMERICIDENTIFIER] = '0|[1-9]\\d*';
var NUMERICIDENTIFIERLOOSE = R++;
src[NUMERICIDENTIFIERLOOSE] = '[0-9]+';


// ## Non-numeric Identifier
// Zero or more digits, followed by a letter or hyphen, and then zero or
// more letters, digits, or hyphens.

var NONNUMERICIDENTIFIER = R++;
src[NONNUMERICIDENTIFIER] = '\\d*[a-zA-Z-][a-zA-Z0-9-]*';


// ## Main Version
// Three dot-separated numeric identifiers.

var MAINVERSION = R++;
src[MAINVERSION] = '(' + src[NUMERICIDENTIFIER] + ')\\.' +
                   '(' + src[NUMERICIDENTIFIER] + ')\\.' +
                   '(' + src[NUMERICIDENTIFIER] + ')';

var MAINVERSIONLOOSE = R++;
src[MAINVERSIONLOOSE] = '(' + src[NUMERICIDENTIFIERLOOSE] + ')\\.' +
                        '(' + src[NUMERICIDENTIFIERLOOSE] + ')\\.' +
                        '(' + src[NUMERICIDENTIFIERLOOSE] + ')';

// ## Pre-release Version Identifier
// A numeric identifier, or a non-numeric identifier.

var PRERELEASEIDENTIFIER = R++;
src[PRERELEASEIDENTIFIER] = '(?:' + src[NUMERICIDENTIFIER] +
                            '|' + src[NONNUMERICIDENTIFIER] + ')';

var PRERELEASEIDENTIFIERLOOSE = R++;
src[PRERELEASEIDENTIFIERLOOSE] = '(?:' + src[NUMERICIDENTIFIERLOOSE] +
                                 '|' + src[NONNUMERICIDENTIFIER] + ')';


// ## Pre-release Version
// Hyphen, followed by one or more dot-separated pre-release version
// identifiers.

var PRERELEASE = R++;
src[PRERELEASE] = '(?:-(' + src[PRERELEASEIDENTIFIER] +
                  '(?:\\.' + src[PRERELEASEIDENTIFIER] + ')*))';

var PRERELEASELOOSE = R++;
src[PRERELEASELOOSE] = '(?:-?(' + src[PRERELEASEIDENTIFIERLOOSE] +
                       '(?:\\.' + src[PRERELEASEIDENTIFIERLOOSE] + ')*))';

// ## Build Metadata Identifier
// Any combination of digits, letters, or hyphens.

var BUILDIDENTIFIER = R++;
src[BUILDIDENTIFIER] = '[0-9A-Za-z-]+';

// ## Build Metadata
// Plus sign, followed by one or more period-separated build metadata
// identifiers.

var BUILD = R++;
src[BUILD] = '(?:\\+(' + src[BUILDIDENTIFIER] +
             '(?:\\.' + src[BUILDIDENTIFIER] + ')*))';


// ## Full Version String
// A main version, followed optionally by a pre-release version and
// build metadata.

// Note that the only major, minor, patch, and pre-release sections of
// the version string are capturing groups.  The build metadata is not a
// capturing group, because it should not ever be used in version
// comparison.

var FULL = R++;
var FULLPLAIN = 'v?' + src[MAINVERSION] +
                src[PRERELEASE] + '?' +
                src[BUILD] + '?';

src[FULL] = '^' + FULLPLAIN + '$';

// like full, but allows v1.2.3 and =1.2.3, which people do sometimes.
// also, 1.0.0alpha1 (prerelease without the hyphen) which is pretty
// common in the npm registry.
var LOOSEPLAIN = '[v=\\s]*' + src[MAINVERSIONLOOSE] +
                 src[PRERELEASELOOSE] + '?' +
                 src[BUILD] + '?';

var LOOSE = R++;
src[LOOSE] = '^' + LOOSEPLAIN + '$';

var GTLT = R++;
src[GTLT] = '((?:<|>)?=?)';

// Something like "2.*" or "1.2.x".
// Note that "x.x" is a valid xRange identifer, meaning "any version"
// Only the first item is strictly required.
var XRANGEIDENTIFIERLOOSE = R++;
src[XRANGEIDENTIFIERLOOSE] = src[NUMERICIDENTIFIERLOOSE] + '|x|X|\\*';
var XRANGEIDENTIFIER = R++;
src[XRANGEIDENTIFIER] = src[NUMERICIDENTIFIER] + '|x|X|\\*';

var XRANGEPLAIN = R++;
src[XRANGEPLAIN] = '[v=\\s]*(' + src[XRANGEIDENTIFIER] + ')' +
                   '(?:\\.(' + src[XRANGEIDENTIFIER] + ')' +
                   '(?:\\.(' + src[XRANGEIDENTIFIER] + ')' +
                   '(?:' + src[PRERELEASE] + ')?' +
                   src[BUILD] + '?' +
                   ')?)?';

var XRANGEPLAINLOOSE = R++;
src[XRANGEPLAINLOOSE] = '[v=\\s]*(' + src[XRANGEIDENTIFIERLOOSE] + ')' +
                        '(?:\\.(' + src[XRANGEIDENTIFIERLOOSE] + ')' +
                        '(?:\\.(' + src[XRANGEIDENTIFIERLOOSE] + ')' +
                        '(?:' + src[PRERELEASELOOSE] + ')?' +
                        src[BUILD] + '?' +
                        ')?)?';

var XRANGE = R++;
src[XRANGE] = '^' + src[GTLT] + '\\s*' + src[XRANGEPLAIN] + '$';
var XRANGELOOSE = R++;
src[XRANGELOOSE] = '^' + src[GTLT] + '\\s*' + src[XRANGEPLAINLOOSE] + '$';

// Tilde ranges.
// Meaning is "reasonably at or greater than"
var LONETILDE = R++;
src[LONETILDE] = '(?:~>?)';

var TILDETRIM = R++;
src[TILDETRIM] = '(\\s*)' + src[LONETILDE] + '\\s+';
re[TILDETRIM] = new RegExp(src[TILDETRIM], 'g');
var tildeTrimReplace = '$1~';

var TILDE = R++;
src[TILDE] = '^' + src[LONETILDE] + src[XRANGEPLAIN] + '$';
var TILDELOOSE = R++;
src[TILDELOOSE] = '^' + src[LONETILDE] + src[XRANGEPLAINLOOSE] + '$';

// Caret ranges.
// Meaning is "at least and backwards compatible with"
var LONECARET = R++;
src[LONECARET] = '(?:\\^)';

var CARETTRIM = R++;
src[CARETTRIM] = '(\\s*)' + src[LONECARET] + '\\s+';
re[CARETTRIM] = new RegExp(src[CARETTRIM], 'g');
var caretTrimReplace = '$1^';

var CARET = R++;
src[CARET] = '^' + src[LONECARET] + src[XRANGEPLAIN] + '$';
var CARETLOOSE = R++;
src[CARETLOOSE] = '^' + src[LONECARET] + src[XRANGEPLAINLOOSE] + '$';

// A simple gt/lt/eq thing, or just "" to indicate "any version"
var COMPARATORLOOSE = R++;
src[COMPARATORLOOSE] = '^' + src[GTLT] + '\\s*(' + LOOSEPLAIN + ')$|^$';
var COMPARATOR = R++;
src[COMPARATOR] = '^' + src[GTLT] + '\\s*(' + FULLPLAIN + ')$|^$';


// An expression to strip any whitespace between the gtlt and the thing
// it modifies, so that `> 1.2.3` ==> `>1.2.3`
var COMPARATORTRIM = R++;
src[COMPARATORTRIM] = '(\\s*)' + src[GTLT] +
                      '\\s*(' + LOOSEPLAIN + '|' + src[XRANGEPLAIN] + ')';

// this one has to use the /g flag
re[COMPARATORTRIM] = new RegExp(src[COMPARATORTRIM], 'g');
var comparatorTrimReplace = '$1$2$3';


// Something like `1.2.3 - 1.2.4`
// Note that these all use the loose form, because they'll be
// checked against either the strict or loose comparator form
// later.
var HYPHENRANGE = R++;
src[HYPHENRANGE] = '^\\s*(' + src[XRANGEPLAIN] + ')' +
                   '\\s+-\\s+' +
                   '(' + src[XRANGEPLAIN] + ')' +
                   '\\s*$';

var HYPHENRANGELOOSE = R++;
src[HYPHENRANGELOOSE] = '^\\s*(' + src[XRANGEPLAINLOOSE] + ')' +
                        '\\s+-\\s+' +
                        '(' + src[XRANGEPLAINLOOSE] + ')' +
                        '\\s*$';

// Star ranges basically just allow anything at all.
var STAR = R++;
src[STAR] = '(<|>)?=?\\s*\\*';

// Compile to actual regexp objects.
// All are flag-free, unless they were created above with a flag.
for (var i = 0; i < R; i++) {
  debug(i, src[i]);
  if (!re[i])
    { re[i] = new RegExp(src[i]); }
}

exports.parse = parse;
function parse(version, loose) {
  if (version instanceof SemVer)
    { return version; }

  if (typeof version !== 'string')
    { return null; }

  if (version.length > MAX_LENGTH)
    { return null; }

  var r = loose ? re[LOOSE] : re[FULL];
  if (!r.test(version))
    { return null; }

  try {
    return new SemVer(version, loose);
  } catch (er) {
    return null;
  }
}

exports.valid = valid;
function valid(version, loose) {
  var v = parse(version, loose);
  return v ? v.version : null;
}


exports.clean = clean;
function clean(version, loose) {
  var s = parse(version.trim().replace(/^[=v]+/, ''), loose);
  return s ? s.version : null;
}

exports.SemVer = SemVer;

function SemVer(version, loose) {
  if (version instanceof SemVer) {
    if (version.loose === loose)
      { return version; }
    else
      { version = version.version; }
  } else if (typeof version !== 'string') {
    throw new TypeError('Invalid Version: ' + version);
  }

  if (version.length > MAX_LENGTH)
    { throw new TypeError('version is longer than ' + MAX_LENGTH + ' characters') }

  if (!(this instanceof SemVer))
    { return new SemVer(version, loose); }

  debug('SemVer', version, loose);
  this.loose = loose;
  var m = version.trim().match(loose ? re[LOOSE] : re[FULL]);

  if (!m)
    { throw new TypeError('Invalid Version: ' + version); }

  this.raw = version;

  // these are actually numbers
  this.major = +m[1];
  this.minor = +m[2];
  this.patch = +m[3];

  if (this.major > MAX_SAFE_INTEGER || this.major < 0)
    { throw new TypeError('Invalid major version') }

  if (this.minor > MAX_SAFE_INTEGER || this.minor < 0)
    { throw new TypeError('Invalid minor version') }

  if (this.patch > MAX_SAFE_INTEGER || this.patch < 0)
    { throw new TypeError('Invalid patch version') }

  // numberify any prerelease numeric ids
  if (!m[4])
    { this.prerelease = []; }
  else
    { this.prerelease = m[4].split('.').map(function(id) {
      if (/^[0-9]+$/.test(id)) {
        var num = +id;
        if (num >= 0 && num < MAX_SAFE_INTEGER)
          { return num; }
      }
      return id;
    }); }

  this.build = m[5] ? m[5].split('.') : [];
  this.format();
}

SemVer.prototype.format = function() {
  this.version = this.major + '.' + this.minor + '.' + this.patch;
  if (this.prerelease.length)
    { this.version += '-' + this.prerelease.join('.'); }
  return this.version;
};

SemVer.prototype.toString = function() {
  return this.version;
};

SemVer.prototype.compare = function(other) {
  debug('SemVer.compare', this.version, this.loose, other);
  if (!(other instanceof SemVer))
    { other = new SemVer(other, this.loose); }

  return this.compareMain(other) || this.comparePre(other);
};

SemVer.prototype.compareMain = function(other) {
  if (!(other instanceof SemVer))
    { other = new SemVer(other, this.loose); }

  return compareIdentifiers(this.major, other.major) ||
         compareIdentifiers(this.minor, other.minor) ||
         compareIdentifiers(this.patch, other.patch);
};

SemVer.prototype.comparePre = function(other) {
  var this$1 = this;

  if (!(other instanceof SemVer))
    { other = new SemVer(other, this.loose); }

  // NOT having a prerelease is > having one
  if (this.prerelease.length && !other.prerelease.length)
    { return -1; }
  else if (!this.prerelease.length && other.prerelease.length)
    { return 1; }
  else if (!this.prerelease.length && !other.prerelease.length)
    { return 0; }

  var i = 0;
  do {
    var a = this$1.prerelease[i];
    var b = other.prerelease[i];
    debug('prerelease compare', i, a, b);
    if (a === undefined && b === undefined)
      { return 0; }
    else if (b === undefined)
      { return 1; }
    else if (a === undefined)
      { return -1; }
    else if (a === b)
      { continue; }
    else
      { return compareIdentifiers(a, b); }
  } while (++i);
};

// preminor will bump the version up to the next minor release, and immediately
// down to pre-release. premajor and prepatch work the same way.
SemVer.prototype.inc = function(release, identifier) {
  var this$1 = this;

  switch (release) {
    case 'premajor':
      this.prerelease.length = 0;
      this.patch = 0;
      this.minor = 0;
      this.major++;
      this.inc('pre', identifier);
      break;
    case 'preminor':
      this.prerelease.length = 0;
      this.patch = 0;
      this.minor++;
      this.inc('pre', identifier);
      break;
    case 'prepatch':
      // If this is already a prerelease, it will bump to the next version
      // drop any prereleases that might already exist, since they are not
      // relevant at this point.
      this.prerelease.length = 0;
      this.inc('patch', identifier);
      this.inc('pre', identifier);
      break;
    // If the input is a non-prerelease version, this acts the same as
    // prepatch.
    case 'prerelease':
      if (this.prerelease.length === 0)
        { this.inc('patch', identifier); }
      this.inc('pre', identifier);
      break;

    case 'major':
      // If this is a pre-major version, bump up to the same major version.
      // Otherwise increment major.
      // 1.0.0-5 bumps to 1.0.0
      // 1.1.0 bumps to 2.0.0
      if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0)
        { this.major++; }
      this.minor = 0;
      this.patch = 0;
      this.prerelease = [];
      break;
    case 'minor':
      // If this is a pre-minor version, bump up to the same minor version.
      // Otherwise increment minor.
      // 1.2.0-5 bumps to 1.2.0
      // 1.2.1 bumps to 1.3.0
      if (this.patch !== 0 || this.prerelease.length === 0)
        { this.minor++; }
      this.patch = 0;
      this.prerelease = [];
      break;
    case 'patch':
      // If this is not a pre-release version, it will increment the patch.
      // If it is a pre-release it will bump up to the same patch version.
      // 1.2.0-5 patches to 1.2.0
      // 1.2.0 patches to 1.2.1
      if (this.prerelease.length === 0)
        { this.patch++; }
      this.prerelease = [];
      break;
    // This probably shouldn't be used publicly.
    // 1.0.0 "pre" would become 1.0.0-0 which is the wrong direction.
    case 'pre':
      if (this.prerelease.length === 0)
        { this.prerelease = [0]; }
      else {
        var i = this.prerelease.length;
        while (--i >= 0) {
          if (typeof this$1.prerelease[i] === 'number') {
            this$1.prerelease[i]++;
            i = -2;
          }
        }
        if (i === -1) // didn't increment anything
          { this.prerelease.push(0); }
      }
      if (identifier) {
        // 1.2.0-beta.1 bumps to 1.2.0-beta.2,
        // 1.2.0-beta.fooblz or 1.2.0-beta bumps to 1.2.0-beta.0
        if (this.prerelease[0] === identifier) {
          if (isNaN(this.prerelease[1]))
            { this.prerelease = [identifier, 0]; }
        } else
          { this.prerelease = [identifier, 0]; }
      }
      break;

    default:
      throw new Error('invalid increment argument: ' + release);
  }
  this.format();
  this.raw = this.version;
  return this;
};

exports.inc = inc;
function inc(version, release, loose, identifier) {
  if (typeof(loose) === 'string') {
    identifier = loose;
    loose = undefined;
  }

  try {
    return new SemVer(version, loose).inc(release, identifier).version;
  } catch (er) {
    return null;
  }
}

exports.diff = diff;
function diff(version1, version2) {
  if (eq(version1, version2)) {
    return null;
  } else {
    var v1 = parse(version1);
    var v2 = parse(version2);
    if (v1.prerelease.length || v2.prerelease.length) {
      for (var key in v1) {
        if (key === 'major' || key === 'minor' || key === 'patch') {
          if (v1[key] !== v2[key]) {
            return 'pre'+key;
          }
        }
      }
      return 'prerelease';
    }
    for (var key in v1) {
      if (key === 'major' || key === 'minor' || key === 'patch') {
        if (v1[key] !== v2[key]) {
          return key;
        }
      }
    }
  }
}

exports.compareIdentifiers = compareIdentifiers;

var numeric = /^[0-9]+$/;
function compareIdentifiers(a, b) {
  var anum = numeric.test(a);
  var bnum = numeric.test(b);

  if (anum && bnum) {
    a = +a;
    b = +b;
  }

  return (anum && !bnum) ? -1 :
         (bnum && !anum) ? 1 :
         a < b ? -1 :
         a > b ? 1 :
         0;
}

exports.rcompareIdentifiers = rcompareIdentifiers;
function rcompareIdentifiers(a, b) {
  return compareIdentifiers(b, a);
}

exports.major = major;
function major(a, loose) {
  return new SemVer(a, loose).major;
}

exports.minor = minor;
function minor(a, loose) {
  return new SemVer(a, loose).minor;
}

exports.patch = patch;
function patch(a, loose) {
  return new SemVer(a, loose).patch;
}

exports.compare = compare;
function compare(a, b, loose) {
  return new SemVer(a, loose).compare(b);
}

exports.compareLoose = compareLoose;
function compareLoose(a, b) {
  return compare(a, b, true);
}

exports.rcompare = rcompare;
function rcompare(a, b, loose) {
  return compare(b, a, loose);
}

exports.sort = sort;
function sort(list, loose) {
  return list.sort(function(a, b) {
    return exports.compare(a, b, loose);
  });
}

exports.rsort = rsort;
function rsort(list, loose) {
  return list.sort(function(a, b) {
    return exports.rcompare(a, b, loose);
  });
}

exports.gt = gt;
function gt(a, b, loose) {
  return compare(a, b, loose) > 0;
}

exports.lt = lt;
function lt(a, b, loose) {
  return compare(a, b, loose) < 0;
}

exports.eq = eq;
function eq(a, b, loose) {
  return compare(a, b, loose) === 0;
}

exports.neq = neq;
function neq(a, b, loose) {
  return compare(a, b, loose) !== 0;
}

exports.gte = gte;
function gte(a, b, loose) {
  return compare(a, b, loose) >= 0;
}

exports.lte = lte;
function lte(a, b, loose) {
  return compare(a, b, loose) <= 0;
}

exports.cmp = cmp;
function cmp(a, op, b, loose) {
  var ret;
  switch (op) {
    case '===':
      if (typeof a === 'object') { a = a.version; }
      if (typeof b === 'object') { b = b.version; }
      ret = a === b;
      break;
    case '!==':
      if (typeof a === 'object') { a = a.version; }
      if (typeof b === 'object') { b = b.version; }
      ret = a !== b;
      break;
    case '': case '=': case '==': ret = eq(a, b, loose); break;
    case '!=': ret = neq(a, b, loose); break;
    case '>': ret = gt(a, b, loose); break;
    case '>=': ret = gte(a, b, loose); break;
    case '<': ret = lt(a, b, loose); break;
    case '<=': ret = lte(a, b, loose); break;
    default: throw new TypeError('Invalid operator: ' + op);
  }
  return ret;
}

exports.Comparator = Comparator;
function Comparator(comp, loose) {
  if (comp instanceof Comparator) {
    if (comp.loose === loose)
      { return comp; }
    else
      { comp = comp.value; }
  }

  if (!(this instanceof Comparator))
    { return new Comparator(comp, loose); }

  debug('comparator', comp, loose);
  this.loose = loose;
  this.parse(comp);

  if (this.semver === ANY)
    { this.value = ''; }
  else
    { this.value = this.operator + this.semver.version; }

  debug('comp', this);
}

var ANY = {};
Comparator.prototype.parse = function(comp) {
  var r = this.loose ? re[COMPARATORLOOSE] : re[COMPARATOR];
  var m = comp.match(r);

  if (!m)
    { throw new TypeError('Invalid comparator: ' + comp); }

  this.operator = m[1];
  if (this.operator === '=')
    { this.operator = ''; }

  // if it literally is just '>' or '' then allow anything.
  if (!m[2])
    { this.semver = ANY; }
  else
    { this.semver = new SemVer(m[2], this.loose); }
};

Comparator.prototype.toString = function() {
  return this.value;
};

Comparator.prototype.test = function(version) {
  debug('Comparator.test', version, this.loose);

  if (this.semver === ANY)
    { return true; }

  if (typeof version === 'string')
    { version = new SemVer(version, this.loose); }

  return cmp(version, this.operator, this.semver, this.loose);
};


exports.Range = Range;
function Range(range, loose) {
  if ((range instanceof Range) && range.loose === loose)
    { return range; }

  if (!(this instanceof Range))
    { return new Range(range, loose); }

  this.loose = loose;

  // First, split based on boolean or ||
  this.raw = range;
  this.set = range.split(/\s*\|\|\s*/).map(function(range) {
    return this.parseRange(range.trim());
  }, this).filter(function(c) {
    // throw out any that are not relevant for whatever reason
    return c.length;
  });

  if (!this.set.length) {
    throw new TypeError('Invalid SemVer Range: ' + range);
  }

  this.format();
}

Range.prototype.format = function() {
  this.range = this.set.map(function(comps) {
    return comps.join(' ').trim();
  }).join('||').trim();
  return this.range;
};

Range.prototype.toString = function() {
  return this.range;
};

Range.prototype.parseRange = function(range) {
  var loose = this.loose;
  range = range.trim();
  debug('range', range, loose);
  // `1.2.3 - 1.2.4` => `>=1.2.3 <=1.2.4`
  var hr = loose ? re[HYPHENRANGELOOSE] : re[HYPHENRANGE];
  range = range.replace(hr, hyphenReplace);
  debug('hyphen replace', range);
  // `> 1.2.3 < 1.2.5` => `>1.2.3 <1.2.5`
  range = range.replace(re[COMPARATORTRIM], comparatorTrimReplace);
  debug('comparator trim', range, re[COMPARATORTRIM]);

  // `~ 1.2.3` => `~1.2.3`
  range = range.replace(re[TILDETRIM], tildeTrimReplace);

  // `^ 1.2.3` => `^1.2.3`
  range = range.replace(re[CARETTRIM], caretTrimReplace);

  // normalize spaces
  range = range.split(/\s+/).join(' ');

  // At this point, the range is completely trimmed and
  // ready to be split into comparators.

  var compRe = loose ? re[COMPARATORLOOSE] : re[COMPARATOR];
  var set = range.split(' ').map(function(comp) {
    return parseComparator(comp, loose);
  }).join(' ').split(/\s+/);
  if (this.loose) {
    // in loose mode, throw out any that are not valid comparators
    set = set.filter(function(comp) {
      return !!comp.match(compRe);
    });
  }
  set = set.map(function(comp) {
    return new Comparator(comp, loose);
  });

  return set;
};

// Mostly just for testing and legacy API reasons
exports.toComparators = toComparators;
function toComparators(range, loose) {
  return new Range(range, loose).set.map(function(comp) {
    return comp.map(function(c) {
      return c.value;
    }).join(' ').trim().split(' ');
  });
}

// comprised of xranges, tildes, stars, and gtlt's at this point.
// already replaced the hyphen ranges
// turn into a set of JUST comparators.
function parseComparator(comp, loose) {
  debug('comp', comp);
  comp = replaceCarets(comp, loose);
  debug('caret', comp);
  comp = replaceTildes(comp, loose);
  debug('tildes', comp);
  comp = replaceXRanges(comp, loose);
  debug('xrange', comp);
  comp = replaceStars(comp, loose);
  debug('stars', comp);
  return comp;
}

function isX(id) {
  return !id || id.toLowerCase() === 'x' || id === '*';
}

// ~, ~> --> * (any, kinda silly)
// ~2, ~2.x, ~2.x.x, ~>2, ~>2.x ~>2.x.x --> >=2.0.0 <3.0.0
// ~2.0, ~2.0.x, ~>2.0, ~>2.0.x --> >=2.0.0 <2.1.0
// ~1.2, ~1.2.x, ~>1.2, ~>1.2.x --> >=1.2.0 <1.3.0
// ~1.2.3, ~>1.2.3 --> >=1.2.3 <1.3.0
// ~1.2.0, ~>1.2.0 --> >=1.2.0 <1.3.0
function replaceTildes(comp, loose) {
  return comp.trim().split(/\s+/).map(function(comp) {
    return replaceTilde(comp, loose);
  }).join(' ');
}

function replaceTilde(comp, loose) {
  var r = loose ? re[TILDELOOSE] : re[TILDE];
  return comp.replace(r, function(_, M, m, p, pr) {
    debug('tilde', comp, _, M, m, p, pr);
    var ret;

    if (isX(M))
      { ret = ''; }
    else if (isX(m))
      { ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0'; }
    else if (isX(p))
      // ~1.2 == >=1.2.0 <1.3.0
      { ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0'; }
    else if (pr) {
      debug('replaceTilde pr', pr);
      if (pr.charAt(0) !== '-')
        { pr = '-' + pr; }
      ret = '>=' + M + '.' + m + '.' + p + pr +
            ' <' + M + '.' + (+m + 1) + '.0';
    } else
      // ~1.2.3 == >=1.2.3 <1.3.0
      { ret = '>=' + M + '.' + m + '.' + p +
            ' <' + M + '.' + (+m + 1) + '.0'; }

    debug('tilde return', ret);
    return ret;
  });
}

// ^ --> * (any, kinda silly)
// ^2, ^2.x, ^2.x.x --> >=2.0.0 <3.0.0
// ^2.0, ^2.0.x --> >=2.0.0 <3.0.0
// ^1.2, ^1.2.x --> >=1.2.0 <2.0.0
// ^1.2.3 --> >=1.2.3 <2.0.0
// ^1.2.0 --> >=1.2.0 <2.0.0
function replaceCarets(comp, loose) {
  return comp.trim().split(/\s+/).map(function(comp) {
    return replaceCaret(comp, loose);
  }).join(' ');
}

function replaceCaret(comp, loose) {
  debug('caret', comp, loose);
  var r = loose ? re[CARETLOOSE] : re[CARET];
  return comp.replace(r, function(_, M, m, p, pr) {
    debug('caret', comp, _, M, m, p, pr);
    var ret;

    if (isX(M))
      { ret = ''; }
    else if (isX(m))
      { ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0'; }
    else if (isX(p)) {
      if (M === '0')
        { ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0'; }
      else
        { ret = '>=' + M + '.' + m + '.0 <' + (+M + 1) + '.0.0'; }
    } else if (pr) {
      debug('replaceCaret pr', pr);
      if (pr.charAt(0) !== '-')
        { pr = '-' + pr; }
      if (M === '0') {
        if (m === '0')
          { ret = '>=' + M + '.' + m + '.' + p + pr +
                ' <' + M + '.' + m + '.' + (+p + 1); }
        else
          { ret = '>=' + M + '.' + m + '.' + p + pr +
                ' <' + M + '.' + (+m + 1) + '.0'; }
      } else
        { ret = '>=' + M + '.' + m + '.' + p + pr +
              ' <' + (+M + 1) + '.0.0'; }
    } else {
      debug('no pr');
      if (M === '0') {
        if (m === '0')
          { ret = '>=' + M + '.' + m + '.' + p +
                ' <' + M + '.' + m + '.' + (+p + 1); }
        else
          { ret = '>=' + M + '.' + m + '.' + p +
                ' <' + M + '.' + (+m + 1) + '.0'; }
      } else
        { ret = '>=' + M + '.' + m + '.' + p +
              ' <' + (+M + 1) + '.0.0'; }
    }

    debug('caret return', ret);
    return ret;
  });
}

function replaceXRanges(comp, loose) {
  debug('replaceXRanges', comp, loose);
  return comp.split(/\s+/).map(function(comp) {
    return replaceXRange(comp, loose);
  }).join(' ');
}

function replaceXRange(comp, loose) {
  comp = comp.trim();
  var r = loose ? re[XRANGELOOSE] : re[XRANGE];
  return comp.replace(r, function(ret, gtlt, M, m, p, pr) {
    debug('xRange', comp, ret, gtlt, M, m, p, pr);
    var xM = isX(M);
    var xm = xM || isX(m);
    var xp = xm || isX(p);
    var anyX = xp;

    if (gtlt === '=' && anyX)
      { gtlt = ''; }

    if (xM) {
      if (gtlt === '>' || gtlt === '<') {
        // nothing is allowed
        ret = '<0.0.0';
      } else {
        // nothing is forbidden
        ret = '*';
      }
    } else if (gtlt && anyX) {
      // replace X with 0
      if (xm)
        { m = 0; }
      if (xp)
        { p = 0; }

      if (gtlt === '>') {
        // >1 => >=2.0.0
        // >1.2 => >=1.3.0
        // >1.2.3 => >= 1.2.4
        gtlt = '>=';
        if (xm) {
          M = +M + 1;
          m = 0;
          p = 0;
        } else if (xp) {
          m = +m + 1;
          p = 0;
        }
      } else if (gtlt === '<=') {
        // <=0.7.x is actually <0.8.0, since any 0.7.x should
        // pass.  Similarly, <=7.x is actually <8.0.0, etc.
        gtlt = '<';
        if (xm)
          { M = +M + 1; }
        else
          { m = +m + 1; }
      }

      ret = gtlt + M + '.' + m + '.' + p;
    } else if (xm) {
      ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0';
    } else if (xp) {
      ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0';
    }

    debug('xRange return', ret);

    return ret;
  });
}

// Because * is AND-ed with everything else in the comparator,
// and '' means "any version", just remove the *s entirely.
function replaceStars(comp, loose) {
  debug('replaceStars', comp, loose);
  // Looseness is ignored here.  star is always as loose as it gets!
  return comp.trim().replace(re[STAR], '');
}

// This function is passed to string.replace(re[HYPHENRANGE])
// M, m, patch, prerelease, build
// 1.2 - 3.4.5 => >=1.2.0 <=3.4.5
// 1.2.3 - 3.4 => >=1.2.0 <3.5.0 Any 3.4.x will do
// 1.2 - 3.4 => >=1.2.0 <3.5.0
function hyphenReplace($0,
                       from, fM, fm, fp, fpr, fb,
                       to, tM, tm, tp, tpr, tb) {

  if (isX(fM))
    { from = ''; }
  else if (isX(fm))
    { from = '>=' + fM + '.0.0'; }
  else if (isX(fp))
    { from = '>=' + fM + '.' + fm + '.0'; }
  else
    { from = '>=' + from; }

  if (isX(tM))
    { to = ''; }
  else if (isX(tm))
    { to = '<' + (+tM + 1) + '.0.0'; }
  else if (isX(tp))
    { to = '<' + tM + '.' + (+tm + 1) + '.0'; }
  else if (tpr)
    { to = '<=' + tM + '.' + tm + '.' + tp + '-' + tpr; }
  else
    { to = '<=' + to; }

  return (from + ' ' + to).trim();
}


// if ANY of the sets match ALL of its comparators, then pass
Range.prototype.test = function(version) {
  var this$1 = this;

  if (!version)
    { return false; }

  if (typeof version === 'string')
    { version = new SemVer(version, this.loose); }

  for (var i = 0; i < this.set.length; i++) {
    if (testSet(this$1.set[i], version))
      { return true; }
  }
  return false;
};

function testSet(set, version) {
  for (var i = 0; i < set.length; i++) {
    if (!set[i].test(version))
      { return false; }
  }

  if (version.prerelease.length) {
    // Find the set of versions that are allowed to have prereleases
    // For example, ^1.2.3-pr.1 desugars to >=1.2.3-pr.1 <2.0.0
    // That should allow `1.2.3-pr.2` to pass.
    // However, `1.2.4-alpha.notready` should NOT be allowed,
    // even though it's within the range set by the comparators.
    for (var i = 0; i < set.length; i++) {
      debug(set[i].semver);
      if (set[i].semver === ANY)
        { continue; }

      if (set[i].semver.prerelease.length > 0) {
        var allowed = set[i].semver;
        if (allowed.major === version.major &&
            allowed.minor === version.minor &&
            allowed.patch === version.patch)
          { return true; }
      }
    }

    // Version has a -pre, but it's not one of the ones we like.
    return false;
  }

  return true;
}

exports.satisfies = satisfies;
function satisfies(version, range, loose) {
  try {
    range = new Range(range, loose);
  } catch (er) {
    return false;
  }
  return range.test(version);
}

exports.maxSatisfying = maxSatisfying;
function maxSatisfying(versions, range, loose) {
  return versions.filter(function(version) {
    return satisfies(version, range, loose);
  }).sort(function(a, b) {
    return rcompare(a, b, loose);
  })[0] || null;
}

exports.minSatisfying = minSatisfying;
function minSatisfying(versions, range, loose) {
  return versions.filter(function(version) {
    return satisfies(version, range, loose);
  }).sort(function(a, b) {
    return compare(a, b, loose);
  })[0] || null;
}

exports.validRange = validRange;
function validRange(range, loose) {
  try {
    // Return '*' instead of '' so that truthiness works.
    // This will throw if it's invalid anyway
    return new Range(range, loose).range || '*';
  } catch (er) {
    return null;
  }
}

// Determine if version is less than all the versions possible in the range
exports.ltr = ltr;
function ltr(version, range, loose) {
  return outside(version, range, '<', loose);
}

// Determine if version is greater than all the versions possible in the range.
exports.gtr = gtr;
function gtr(version, range, loose) {
  return outside(version, range, '>', loose);
}

exports.outside = outside;
function outside(version, range, hilo, loose) {
  version = new SemVer(version, loose);
  range = new Range(range, loose);

  var gtfn, ltefn, ltfn, comp, ecomp;
  switch (hilo) {
    case '>':
      gtfn = gt;
      ltefn = lte;
      ltfn = lt;
      comp = '>';
      ecomp = '>=';
      break;
    case '<':
      gtfn = lt;
      ltefn = gte;
      ltfn = gt;
      comp = '<';
      ecomp = '<=';
      break;
    default:
      throw new TypeError('Must provide a hilo val of "<" or ">"');
  }

  // If it satisifes the range it is not outside
  if (satisfies(version, range, loose)) {
    return false;
  }

  // From now on, variable terms are as if we're in "gtr" mode.
  // but note that everything is flipped for the "ltr" function.

  for (var i = 0; i < range.set.length; ++i) {
    var comparators = range.set[i];

    var high = null;
    var low = null;

    comparators.forEach(function(comparator) {
      if (comparator.semver === ANY) {
        comparator = new Comparator('>=0.0.0');
      }
      high = high || comparator;
      low = low || comparator;
      if (gtfn(comparator.semver, high.semver, loose)) {
        high = comparator;
      } else if (ltfn(comparator.semver, low.semver, loose)) {
        low = comparator;
      }
    });

    // If the edge version comparator has a operator then our version
    // isn't outside it
    if (high.operator === comp || high.operator === ecomp) {
      return false;
    }

    // If the lowest version comparator has an operator and our version
    // is less than it then it isn't higher than the range
    if ((!low.operator || low.operator === comp) &&
        ltefn(version, low.semver)) {
      return false;
    } else if (low.operator === ecomp && ltfn(version, low.semver)) {
      return false;
    }
  }
  return true;
}

exports.prerelease = prerelease;
function prerelease(version, loose) {
  var parsed = parse(version, loose);
  return (parsed && parsed.prerelease.length) ? parsed.prerelease : null;
}
});

/**
 * Normalize a version string.
 * @param  {String} Version. ie: 1, 1.0, 1.0.0
 * @return {String} Version
 */
function normalizeVersion (v) {
  var isValid = semver.valid(v);
  if (isValid) {
    return v
  }

  v = typeof (v) === 'string' ? v : '';
  var split = v.split('.');
  var i = 0;
  var result = [];

  while (i < 3) {
    var s = typeof (split[i]) === 'string' && split[i] ? split[i] : '0';
    result.push(s);
    i++;
  }

  return result.join('.')
}

/**
 * Get informations from different error key. Like:
 * - code
 * - errorMessage
 * - errorType
 * - isDowngrade
 * @param  {string} key
 * @param  {string} val
 * @param  {string} criteria
 * @return {object}
 */
function getError (key, val, criteria) {
  var result = {
    isDowngrade: true,
    errorType: 1,
    code: 1000
  };
  var getMsg = function (key, val, criteria) {
    return 'Downgrade[' + key + '] :: deviceInfo '
      + val + ' matched criteria ' + criteria
  };
  var _key = key.toLowerCase();

  result.errorMessage = getMsg(key, val, criteria);

  if (_key.indexOf('osversion') >= 0) {
    result.code = 1001;
  }
  else if (_key.indexOf('appversion') >= 0) {
    result.code = 1002;
  }
  else if (_key.indexOf('weexversion') >= 0) {
    result.code = 1003;
  }
  else if (_key.indexOf('devicemodel') >= 0) {
    result.code = 1004;
  }

  return result
}

/**
 * WEEX framework input(deviceInfo)
 * {
 *   platform: 'iOS' or 'android'
 *   osVersion: '1.0.0' or '1.0' or '1'
 *   appVersion: '1.0.0' or '1.0' or '1'
 *   weexVersion: '1.0.0' or '1.0' or '1'
 *   dDeviceModel: 'MODEL_NAME'
 * }
 *
 * downgrade config(config)
 * {
 *   ios: {
 *     osVersion: '>1.0.0' or '>=1.0.0' or '<1.0.0' or '<=1.0.0' or '1.0.0'
 *     appVersion: '>1.0.0' or '>=1.0.0' or '<1.0.0' or '<=1.0.0' or '1.0.0'
 *     weexVersion: '>1.0.0' or '>=1.0.0' or '<1.0.0' or '<=1.0.0' or '1.0.0'
 *     deviceModel: ['modelA', 'modelB', ...]
 *   },
 *   android: {
 *     osVersion: '>1.0.0' or '>=1.0.0' or '<1.0.0' or '<=1.0.0' or '1.0.0'
 *     appVersion: '>1.0.0' or '>=1.0.0' or '<1.0.0' or '<=1.0.0' or '1.0.0'
 *     weexVersion: '>1.0.0' or '>=1.0.0' or '<1.0.0' or '<=1.0.0' or '1.0.0'
 *     deviceModel: ['modelA', 'modelB', ...]
 *   }
 * }
 *
 *
 * @param  {object} deviceInfo Weex SDK framework input
 * @param  {object} config     user input
 * @return {Object}            { isDowngrade: true/false, errorMessage... }
 */
function check (config, deviceInfo) {
  deviceInfo = deviceInfo || global.WXEnvironment;
  deviceInfo = isPlainObject(deviceInfo) ? deviceInfo : {};

  var result = {
    isDowngrade: false // defautl is pass
  };

  if (typof(config) === 'function') {
    var customDowngrade = config.call(this, deviceInfo, {
      semver: semver,
      normalizeVersion: normalizeVersion
    });

    customDowngrade = !!customDowngrade;

    result = customDowngrade ? getError('custom', '', 'custom params') : result;
  }
  else {
    config = isPlainObject(config) ? config : {};

    var platform = deviceInfo.platform || 'unknow';
    var dPlatform = platform.toLowerCase();
    var cObj = config[dPlatform] || {};

    for (var i in deviceInfo) {
      var key = i;
      var keyLower = key.toLowerCase();
      var val = deviceInfo[i];
      var isVersion = keyLower.indexOf('version') >= 0;
      var isDeviceModel = keyLower.indexOf('devicemodel') >= 0;
      var criteria = cObj[i];

      if (criteria && isVersion) {
        var c = normalizeVersion(criteria);
        var d = normalizeVersion(deviceInfo[i]);

        if (semver.satisfies(d, c)) {
          result = getError(key, val, criteria);
          break
        }
      }
      else if (isDeviceModel) {
        var _criteria = typof(criteria) === 'array' ? criteria : [criteria];
        if (_criteria.indexOf(val) >= 0) {
          result = getError(key, val, criteria);
          break
        }
      }
    }
  }

  return result
}

/**
 * bootstrap app from a certain custom component with config & data
 */
function bootstrap (app, name, config, data) {
  console.debug(("[JS Framework] bootstrap for " + name));

  // 1. validate custom component name first
  var cleanName;
  if (isWeexComponent(name)) {
    cleanName = removeWeexPrefix(name);
  }
  else if (isNpmModule(name)) {
    cleanName = removeJSSurfix(name);
    // check if define by old 'define' method
    /* istanbul ignore if */
    if (!requireCustomComponent(app, cleanName)) {
      return new Error(("It's not a component: " + name))
    }
  }
  else {
    return new Error(("Wrong component name: " + name))
  }

  // 2. validate configuration
  config = isPlainObject(config) ? config : {};
  // 2.1 transformer version check
  if (typeof config.transformerVersion === 'string' &&
    typeof global.transformerVersion === 'string' &&
    !semver.satisfies(config.transformerVersion,
      global.transformerVersion)) {
    return new Error("JS Bundle version: " + (config.transformerVersion) + " " +
      "not compatible with " + (global.transformerVersion))
  }
  // 2.2 downgrade version check
  var downgradeResult = check(config.downgrade);
  /* istanbul ignore if */
  if (downgradeResult.isDowngrade) {
    app.callTasks([{
      module: 'instanceWrap',
      method: 'error',
      args: [
        downgradeResult.errorType,
        downgradeResult.code,
        downgradeResult.errorMessage
      ]
    }]);
    return new Error(("Downgrade[" + (downgradeResult.code) + "]: " + (downgradeResult.errorMessage)))
  }

  // 3. create a new Vm with custom component name and data
  app.vm = new Vm(cleanName, null, { _app: app }, null, data);
}

/**
 * define(name, factory) for primary usage
 * or
 * define(name, deps, factory) for compatibility
 * Notice: DO NOT use function define() {},
 * it will cause error after builded by webpack
 */
var defineFn = function (app, name) {
  var args = [], len = arguments.length - 2;
  while ( len-- > 0 ) args[ len ] = arguments[ len + 2 ];

  console.debug(("[JS Framework] define a component " + name));

  // adapt args:
  // 1. name, deps[], factory()
  // 2. name, factory()
  // 3. name, definition{}
  var factory, definition;
  if (args.length > 1) {
    definition = args[1];
  }
  else {
    definition = args[0];
  }
  if (typeof definition === 'function') {
    factory = definition;
    definition = null;
  }

  // resolve definition from factory
  if (factory) {
    var r = function (name) {
      if (isWeexComponent(name)) {
        var cleanName = removeWeexPrefix(name);
        return requireCustomComponent(app, cleanName)
      }
      if (isWeexModule(name)) {
        var cleanName$1 = removeWeexPrefix(name);
        return app.requireModule(cleanName$1)
      }
      if (isNormalModule(name) || isNpmModule(name)) {
        var cleanName$2 = removeJSSurfix(name);
        return app.commonModules[cleanName$2]
      }
    };
    var m = { exports: {}};
    factory(r, m.exports, m);
    definition = m.exports;
  }

  // apply definition
  if (isWeexComponent(name)) {
    var cleanName = removeWeexPrefix(name);
    registerCustomComponent(app, cleanName, definition);
  }
  else if (isWeexModule(name)) {
    var cleanName$1 = removeWeexPrefix(name);
    var obj;
    initModules(( obj = {}, obj[cleanName$1] = definition, obj ));
  }
  else if (isNormalModule(name)) {
    var cleanName$2 = removeJSSurfix(name);
    app.commonModules[cleanName$2] = definition;
  }
  else if (isNpmModule(name)) {
    var cleanName$3 = removeJSSurfix(name);
    if (definition.template ||
        definition.style ||
        definition.methods) {
      // downgrade to old define method (define('componentName', factory))
      // the exports contain one key of template, style or methods
      // but it has risk!!!
      registerCustomComponent(app, cleanName$3, definition);
    }
    else {
      app.commonModules[cleanName$3] = definition;
    }
  }
};

/**
 * @deprecated
 */
function register$1 (app, type, options) {
  console.warn('[JS Framework] Register is deprecated, please install lastest transformer.');
  registerCustomComponent(app, type, options);
}

/**
 * @fileOverview
 * api that invoked by js bundle code
 *
 * - define(name, factory): define a new composed component type
 * - bootstrap(type, config, data): require a certain type &
 *         render with (optional) data
 *
 * deprecated:
 * - register(type, options): register a new composed component type
 * - render(type, data): render by a certain type with (optional) data
 * - require(type)(data): require a type then render with data
 */

/**
 * @fileOverview
 * instance controls from native
 *
 * - fire event
 * - callback
 * - refresh
 * - destroy
 *
 * corresponded with the API of instance manager (framework.js)
 */
/**
 * Refresh an app with data to its root component options.
 * @param  {object} app
 * @param  {any}    data
 */
function refresh$1 (app, data) {
  console.debug("[JS Framework] Refresh with", data,
            ("in instance[" + (app.id) + "]"));
  var vm = app.vm;
  if (vm && data) {
    // app.doc.close()
    if (typeof vm.refreshData === 'function') {
      vm.refreshData(data);
    }
    else {
      extend(vm, data);
    }
    updateActions(app);
    app.doc.listener.refreshFinish();
    // app.doc.open()
    return
  }
  return new Error(("invalid data \"" + data + "\""))
}

/**
 * Destroy an app.
 * @param  {object} app
 */
function destroy$1 (app) {
  console.debug(("[JS Framework] Destory an instance(" + (app.id) + ")"));

  if (app.vm) {
    destroyVm(app.vm);
  }

  if (app.channels) {
    for (var key in app.channels) {
      app.channels[key].close();
    }
  }

  app.id = '';
  app.options = null;
  app.blocks = null;
  app.vm = null;
  app.doc.destroy();
  app.doc = null;
  app.customComponentMap = null;
  app.commonModules = null;
  app.callbacks = null;
  app.channels = null;
}

/**
 * Destroy an Vm.
 * @param {object} vm
 */
function destroyVm (vm) {
  delete vm._app;
  delete vm._computed;
  delete vm._css;
  delete vm._data;
  delete vm._ids;
  delete vm._methods;
  delete vm._options;
  delete vm._parent;
  delete vm._parentEl;
  delete vm._rootEl;

  // remove all watchers
  if (vm._watchers) {
    var watcherCount = vm._watchers.length;
    while (watcherCount--) {
      vm._watchers[watcherCount].teardown();
    }
    delete vm._watchers;
  }

  // destroy child vms recursively
  if (vm._childrenVms) {
    var vmCount = vm._childrenVms.length;
    while (vmCount--) {
      destroyVm(vm._childrenVms[vmCount]);
    }
    delete vm._childrenVms;
  }

  console.debug(("[JS Framework] \"destroyed\" lifecycle in Vm(" + (vm._type) + ")"));
  vm.$emit('hook:destroyed');

  delete vm._type;
  delete vm._vmEvents;
}

/**
 * Get a JSON object to describe the document body.
 * @param  {object} app
 * @return {object}
 */
function getRootElement (app) {
  var doc = app.doc || {};
  var body = doc.body || {};
  return body.toJSON ? body.toJSON() : {}
}

/**
 * Fire an event from renderer. The event has type, an event object and an
 * element ref. If the event comes with some virtual-DOM changes, it should
 * have one more parameter to describe the changes.
 * @param  {object} app
 * @param  {string} ref
 * @param  {type}   type
 * @param  {object} e
 * @param  {object} domChanges
 */
function fireEvent$1 (app, ref, type, e, domChanges) {
  console.debug(("[JS Framework] Fire a \"" + type + "\" event on an element(" + ref + ") in instance(" + (app.id) + ")"));
  if (Array.isArray(ref)) {
    ref.some(function (ref) {
      return fireEvent$1(app, ref, type, e) !== false
    });
    return
  }
  var el = app.doc.getRef(ref);
  if (el) {
    // app.doc.close()
    var result = app.doc.fireEvent(el, type, e, domChanges);
    updateActions(app);
    app.doc.listener.updateFinish();
    // app.doc.open()
    return result
  }
  return new Error(("invalid element reference \"" + ref + "\""))
}

/**
 * Make a callback for a certain app.
 * @param  {object}   app
 * @param  {number}   callbackId
 * @param  {any}      data
 * @param  {boolean}  ifKeepAlive
 */
function callback (app, callbackId, data, ifKeepAlive) {
  console.debug(("[JS Framework] Invoke a callback(" + callbackId + ") with"), data,
            ("in instance(" + (app.id) + ")"));
  var callback = app.callbacks[callbackId];
  if (typeof callback === 'function') {
    // app.doc.close()
    callback(data);
    if (typeof ifKeepAlive === 'undefined' || ifKeepAlive === false) {
      app.callbacks[callbackId] = undefined;
    }
    updateActions(app);
    app.doc.listener.updateFinish();
    // app.doc.open()
    return
  }
  return new Error(("invalid callback id \"" + callbackId + "\""))
}

/**
 * Collect all virtual-DOM mutations together and send them to renderer.
 * @param  {object} app
 */
function updateActions (app) {
  app.differ.flush();
  var tasks = [];
  if (app.doc && app.doc.listener && app.doc.listener.updates.length) {
    tasks.push.apply(tasks, app.doc.listener.updates);
    app.doc.listener.updates = [];
  }
  if (tasks.length) {
    return callTasks(app, tasks)
  }
}

/**
 * Call all tasks from an app to renderer (native).
 * @param  {object} app
 * @param  {array}  tasks
 */
function callTasks (app, tasks) {
  /* istanbul ignore next */
  if (typof(tasks) !== 'array') {
    tasks = [tasks];
  }

  tasks.forEach(function (task) {
    task.args = task.args.map(function (arg) { return normalize(arg, app); });
  });

  return config$2.sendTasks(app.id, tasks, '-1')
}

/**
 * Normalize a value. Specially, if the value is a function, then generate a function id
 * and save it to `app.callbacks`, at last return the function id.
 * @param  {any}        v
 * @param  {object}     app
 * @return {primitive}
 */
function normalize (v, app) {
  var type = typof(v);

  switch (type) {
    case 'undefined':
    case 'null':
      return ''
    case 'regexp':
      return v.toString()
    case 'date':
      return v.toISOString()
    case 'number':
    case 'string':
    case 'boolean':
    case 'array':
    case 'object':
      if (v instanceof config$2.Element) {
        return v.ref
      }
      return v
    case 'function':
      app.callbacks[++app.uid] = v;
      return app.uid.toString()
    /* istanbul ignore next */
    default:
      return JSON.stringify(v)
  }
}

/**
 * @fileOverview
 * The polyfill of BroadcastChannel API.
 * This api can be used to achieve inter-instance communications.
 *
 * https://html.spec.whatwg.org/multipage/comms.html#broadcasting-to-other-browsing-contexts
 */

var channels = {};

/**
 * Mock MessageEvent type
 * @param {string} type
 * @param {object} dict { data, origin, source, ports }
 *
 * This type has been simplified.
 * https://html.spec.whatwg.org/multipage/comms.html#messageevent
 * https://dom.spec.whatwg.org/#interface-event
 */
function MessageEvent (type, dict) {
  if ( dict === void 0 ) dict = {};

  this.type = type || 'message';

  this.data = dict.data || null;
  this.origin = dict.origin || '';
  this.source = dict.source || null;
  this.ports = dict.ports || [];

  // inherit properties
  this.target = null;
  this.timeStamp = Date.now();
}

/**
 * Returns a new BroadcastChannel object via which messages for the given
 * channel name can be sent and received.
 * @param {string} name
 */
function BroadcastChannel (name) {
  // the name property is readonly
  Object.defineProperty(this, 'name', {
    configurable: false,
    enumerable: true,
    writable: false,
    value: String(name)
  });

  this._closed = false;
  this.onmessage = null;

  if (!channels[this.name]) {
    channels[this.name] = [];
  }
  channels[this.name].push(this);
}

/**
 * Sends the given message to other BroadcastChannel objects set up for this channel.
 * @param {any} message
 */
BroadcastChannel.prototype.postMessage = function (message) {
  var this$1 = this;

  if (this._closed) {
    throw new Error(("BroadcastChannel \"" + (this.name) + "\" is closed."))
  }

  var subscribers = channels[this.name];
  if (subscribers && subscribers.length) {
    for (var i = 0; i < subscribers.length; ++i) {
      var member = subscribers[i];

      if (member._closed || member === this$1) { continue }

      if (typeof member.onmessage === 'function') {
        member.onmessage(new MessageEvent('message', { data: message }));
      }
    }
  }
};

/**
 * Closes the BroadcastChannel object, opening it up to garbage collection.
 */
BroadcastChannel.prototype.close = function () {
  var this$1 = this;

  this._closed = true;

  // remove itself from channels.
  if (channels[this.name]) {
    var subscribers = channels[this.name].filter(function (x) { return x !== this$1; });
    if (subscribers.length) {
      channels[this.name] = subscribers;
    }
    else {
      delete channels[this.name];
    }
  }
};

/**
 * @fileOverview
 * instance controls from native
 *
 * - init bundle
 *
 * corresponded with the API of instance manager (framework.js)
 */

/**
 * Init an app by run code witgh data
 * @param  {object} app
 * @param  {string} code
 * @param  {object} data
 */
function init$4 (app, code, data) {
  console.debug('[JS Framework] Intialize an instance with:\n', data);
  var result;

  // prepare app env methods
  var bundleDefine = function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    return defineFn.apply(void 0, [ app ].concat( args ));
  };
  var bundleBootstrap = function (name, config, _data) {
    result = bootstrap(app, name, config, _data || data);
    updateActions(app);
    app.doc.listener.createFinish();
    console.debug(("[JS Framework] After intialized an instance(" + (app.id) + ")"));
  };
  var bundleVm = Vm;
  /* istanbul ignore next */
  var bundleRegister = function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    return register$1.apply(void 0, [ app ].concat( args ));
  };
  /* istanbul ignore next */
  var bundleRender = function (name, _data) {
    result = bootstrap(app, name, {}, _data);
  };
  /* istanbul ignore next */
  var bundleRequire = function (name) { return function (_data) {
    result = bootstrap(app, name, {}, _data);
  }; };
  var bundleDocument = app.doc;
  /* istanbul ignore next */
  var bundleRequireModule = function (name) { return app.requireModule(removeWeexPrefix(name)); };

  var appBroadcastChannel = function (name) {
    var channel = new BroadcastChannel(name);
    if (app.channels) {
      app.channels[name] = channel;
    }
    return channel
  };

  var weexGlobalObject = {
    config: app.options,
    define: bundleDefine,
    bootstrap: bundleBootstrap,
    require: bundleDocument,
    document: bundleRequireModule,
    Vm: bundleVm
  };

  Object.freeze(weexGlobalObject);

  // prepare code
  var functionBody;
  /* istanbul ignore if */
  if (typeof code === 'function') {
    // `function () {...}` -> `{...}`
    // not very strict
    functionBody = code.toString().substr(12);
  }
  /* istanbul ignore next */
  else if (code) {
    functionBody = code.toString();
  }

  // wrap IFFE and use strict mode
  functionBody = "(function(global){\"use strict\"; " + functionBody + " })(Object.create(this))";

  // run code and get result
  var WXEnvironment = global.WXEnvironment;
  /* istanbul ignore if */
  if (WXEnvironment && WXEnvironment.platform !== 'Web') {
    // timer APIs polyfill in native
    var timer = app.requireModule('timer');
    var timerAPIs = {
      setTimeout: function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var handler = function () {
          args[0].apply(args, args.slice(2));
        };
        timer.setTimeout(handler, args[1]);
        return app.uid.toString()
      },
      setInterval: function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var handler = function () {
          args[0].apply(args, args.slice(2));
        };
        timer.setInterval(handler, args[1]);
        return app.uid.toString()
      },
      clearTimeout: function (n) {
        timer.clearTimeout(n);
      },
      clearInterval: function (n) {
        timer.clearInterval(n);
      }
    };

    var fn = new Function(
      'define',
      'require',
      'bootstrap',
      'register',
      'render',
      '__weex_define__', // alias for define
      '__weex_bootstrap__', // alias for bootstrap
      '__weex_document__', // alias for bootstrap
      '__weex_require__',
      '__weex_viewmodel__',
      'BroadcastChannel',
      'weex',
      'setTimeout',
      'setInterval',
      'clearTimeout',
      'clearInterval',
      functionBody
    );

    fn(
      bundleDefine,
      bundleRequire,
      bundleBootstrap,
      bundleRegister,
      bundleRender,
      bundleDefine,
      bundleBootstrap,
      bundleDocument,
      bundleRequireModule,
      bundleVm,
      appBroadcastChannel,
      weexGlobalObject,
      timerAPIs.setTimeout,
      timerAPIs.setInterval,
      timerAPIs.clearTimeout,
      timerAPIs.clearInterval);
  }
  else {
    var fn$1 = new Function(
      'define',
      'require',
      'bootstrap',
      'register',
      'render',
      '__weex_define__', // alias for define
      '__weex_bootstrap__', // alias for bootstrap
      '__weex_document__', // alias for bootstrap
      '__weex_require__',
      '__weex_viewmodel__',
      'BroadcastChannel',
      'weex',
      functionBody
    );

    fn$1(
      bundleDefine,
      bundleRequire,
      bundleBootstrap,
      bundleRegister,
      bundleRender,
      bundleDefine,
      bundleBootstrap,
      bundleDocument,
      bundleRequireModule,
      bundleVm,
      BroadcastChannel,
      weexGlobalObject);
  }

  return result
}

/**
 * @fileOverview
 * instance controls from native
 *
 * - init bundle
 * - fire event
 * - callback
 * - destroy
 *
 * corresponded with the API of instance manager (framework.js)
 */

var Differ = function Differ (id) {
  this.id = id;
  this.map = [];
  this.hooks = [];
};
Differ.prototype.isEmpty = function isEmpty () {
  return this.map.length === 0
};
Differ.prototype.append = function append (type, depth, ref, handler) {
    var this$1 = this;

  if (!this.hasTimer) {
    this.hasTimer = true;
    setTimeout(function () {
      this$1.hasTimer = false;
      this$1.flush(true);
    }, 0);
  }
  var map = this.map;
  if (!map[depth]) {
    map[depth] = {};
  }
  var group = map[depth];
  if (!group[type]) {
    group[type] = {};
  }
  if (type === 'element') {
    if (!group[type][ref]) {
      group[type][ref] = [];
    }
    group[type][ref].push(handler);
  }
  else {
    group[type][ref] = handler;
  }
};
Differ.prototype.flush = function flush (isTimeout) {
  var map = this.map.slice();
  this.map.length = 0;
  map.forEach(function (group) {
    callTypeMap(group, 'repeat');
    callTypeMap(group, 'shown');
    callTypeList(group, 'element');
  });

  var hooks = this.hooks.slice();
  this.hooks.length = 0;
  hooks.forEach(function (fn) {
    fn();
  });

  if (!this.isEmpty()) {
    this.flush();
  }
};
Differ.prototype.then = function then (fn) {
  this.hooks.push(fn);
};

function callTypeMap (group, type) {
  var map = group[type];
  for (var ref in map) {
    map[ref]();
  }
}

function callTypeList (group, type) {
  var map = group[type];
  for (var ref in map) {
    var list = map[ref];
    list.forEach(function (handler) { handler(); });
  }
}

/**
 * @fileOverview
 * Weex App constructor & definition
 */

/**
 * App constructor for Weex framework.
 * @param {string} id
 * @param {object} options
 */
function App$1 (id, options) {
  this.id = id;
  this.options = options || {};
  this.vm = null;
  this.customComponentMap = {};
  this.commonModules = {};
  this.callbacks = {};
  this.channels = {};
  this.doc = new config$2.Document(
    id,
    this.options.bundleUrl,
    null,
    config$2.Listener
  );
  this.differ = new Differ(id);
  this.uid = 0;
}

/**
 * @fileOverview
 * Weex instance constructor & definition
 */

/**
 * @deprecated
 */
App$1.prototype.requireModule = function (name) {
  return requireModule(this, name)
};

/**
 * @deprecated
 */
App$1.prototype.updateActions = function () {
  updateActions(this);
};

/**
 * @deprecated
 */
App$1.prototype.callTasks = function (tasks) {
  callTasks(this, tasks);
};

/**
 * Prevent modification of App and App.prototype
 */
Object.freeze(App$1);
Object.freeze(App$1.prototype);

var instanceMap$2 = {};

/**
 * Create a Weex instance.
 *
 * @param  {string} id
 * @param  {string} code
 * @param  {object} [options] option `HAS_LOG` enable print log
 * @param  {object} [data]
 */
function createInstance$3 (id, code, options, data) {
  resetTarget();
  var instance = instanceMap$2[id];
  /* istanbul ignore else */
  options = options || {};
  var result;
  /* istanbul ignore else */
  if (!instance) {
    instance = new App$1(id, options);
    instanceMap$2[id] = instance;
    result = init$4(instance, code, data);
  }
  else {
    result = new Error(("invalid instance id \"" + id + "\""));
  }
  return result
}

/**
 * Init config informations for Weex framework
 * @param  {object} cfg
 */
function init$5 (cfg) {
  config$2.Document = cfg.Document;
  config$2.Element = cfg.Element;
  config$2.Comment = cfg.Comment;
  config$2.sendTasks = cfg.sendTasks;
  config$2.Listener = cfg.Listener;
}

/**
 * Refresh a Weex instance with data.
 *
 * @param  {string} id
 * @param  {object} data
 */
function refreshInstance$2 (id, data) {
  var instance = instanceMap$2[id];
  var result;
  /* istanbul ignore else */
  if (instance) {
    result = refresh$1(instance, data);
  }
  else {
    result = new Error(("invalid instance id \"" + id + "\""));
  }
  return result
}

/**
 * Destroy a Weex instance.
 * @param  {string} id
 */
function destroyInstance$2 (id) {
  resetTarget();
  var instance = instanceMap$2[id];
  /* istanbul ignore else */
  if (!instance) {
    return new Error(("invalid instance id \"" + id + "\""))
  }
  destroy$1(instance);
  delete instanceMap$2[id];
  return instanceMap$2
}

var nativeComponentMap$1 = config$2.nativeComponentMap;

/**
 * Register the name of each native component.
 * @param  {array} components array of name
 */
function registerComponents$2 (components) {
  if (Array.isArray(components)) {
    components.forEach(function register (name) {
      /* istanbul ignore if */
      if (!name) {
        return
      }
      if (typeof name === 'string') {
        nativeComponentMap$1[name] = true;
      }
      /* istanbul ignore else */
      else if (typeof name === 'object' && typeof name.type === 'string') {
        nativeComponentMap$1[name.type] = name;
      }
    });
  }
}

/**
 * Register the name and methods of each module.
 * @param  {object} modules a object of modules
 */
function registerModules$2 (modules) {
  /* istanbul ignore else */
  if (typeof modules === 'object') {
    initModules(modules);
  }
}

/**
 * Register the name and methods of each api.
 * @param  {object} apis a object of apis
 */
function registerMethods$1 (methods) {
  /* istanbul ignore else */
  if (typeof methods === 'object') {
    initMethods$1(Vm, methods);
  }
}

// @todo: Hack for this framework only. Will be re-designed or removed later.
global.registerMethods = registerMethods$1;

var jsHandlers = {
  fireEvent: function (id) {
    var args = [], len = arguments.length - 1;
    while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

    return fireEvent$1.apply(void 0, [ instanceMap$2[id] ].concat( args ))
  },
  callback: function (id) {
    var args = [], len = arguments.length - 1;
    while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

    return callback.apply(void 0, [ instanceMap$2[id] ].concat( args ))
  }
};

/**
 * Accept calls from native (event or callback).
 *
 * @param  {string} id
 * @param  {array} tasks list with `method` and `args`
 */
function receiveTasks$2 (id, tasks) {
  var instance = instanceMap$2[id];
  if (instance && Array.isArray(tasks)) {
    var results = [];
    tasks.forEach(function (task) {
      var handler = jsHandlers[task.method];
      var args = [].concat( task.args );
      /* istanbul ignore else */
      if (typeof handler === 'function') {
        args.unshift(id);
        results.push(handler.apply(void 0, args));
      }
    });
    return results
  }
  return new Error(("invalid instance id \"" + id + "\" or tasks"))
}

/**
 * Get a whole element tree of an instance for debugging.
 * @param  {string} id
 * @return {object} a virtual dom tree
 */
function getRoot$2 (id) {
  var instance = instanceMap$2[id];
  var result;
  /* istanbul ignore else */
  if (instance) {
    result = getRootElement(instance);
  }
  else {
    result = new Error(("invalid instance id \"" + id + "\""));
  }
  return result
}

/**
 * @fileOverview Weex framework entry.
 */

// register special methods for Weex framework
registerMethods$1(methods$1);

/**
 * Prevent modification of Vm and Vm.prototype
 */
Object.freeze(Vm);




var Weex$2 = Object.freeze({
	registerComponents: registerComponents$2,
	registerModules: registerModules$2,
	registerMethods: registerMethods$1,
	createInstance: createInstance$3,
	init: init$5,
	refreshInstance: refreshInstance$2,
	destroyInstance: destroyInstance$2,
	receiveTasks: receiveTasks$2,
	getRoot: getRoot$2
});

var frameworks$1 = {
  Vanilla: Vanilla,
  Vue: Vue$1,
  Weex: Weex$2
};

var raf = window.requestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          function (calllback) {
            setTimeout(calllback, 16);
          };

var rafId;
var observers = [];
var paused = false;

var frameUpdater = {
  start: function () {
    if (rafId) {
      return
    }

    rafId = raf(function runLoop () {
      if (!paused) {
        for (var i = 0; i < observers.length; i++) {
          observers[i]();
        }
        raf(runLoop);
      }
    });
  },

  isActive: function () {
    return !paused
  },

  pause: function () {
    paused = true;
    rafId = undefined;
  },

  resume: function () {
    paused = false;
    this.start();
  },

  addUpdateObserver: function (observeMethod) {
    observers.push(observeMethod);
  }
};

function isArray (arr) {
  return Array.isArray
    ? Array.isArray(arr)
    : (Object.prototype.toString.call(arr) === '[object Array]')
}

function slice (arr, start, end) {
  if (isArray(arr)) {
    return arr.slice(start, end)
  }
  var slice = Array.prototype.slice;
  return slice.call(arr, start, end)
}

/* global Image */

// const WEAPP_STYLE_ID = 'weapp-style'

var vendors = ['ms', 'moz', 'webkit', 'o'];

var _isWebpSupported = false; (function isSupportWebp () {
  try {
    var webP = new Image();
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdA'
              + 'SoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
    webP.onload = function () {
      if (webP.height === 2) {
        _isWebpSupported = true;
      }
    };
  }
  catch (e) {
    // do nothing.
  }
})();

var _isStickySupported = false; (function isSupportSticky () {
  var element = document.createElement('div');
  var elementStyle = element.style;
  elementStyle.cssText = vendors.concat(['']).map(function (vendor) {
    return 'position:'
      + (vendor ? '-' + vendor + '-' : '')
      + 'sticky'
  }).join(';') + ';';
  _isStickySupported = elementStyle.position.indexOf('sticky') !== -1;
})();

// export function extend (to, from) {
//   for (const key in from) {
//     to[key] = from[key]
//   }
//   return to
// }

// export function isPlainObject (obj) {
//   return Object.prototype.toString.call(obj)
//     .slice(8, -1).toLowerCase() === 'object'
// }

function getType (obj) {
  return Object.prototype.toString.call(obj)
    .slice(8, -1).toLowerCase()
}

function appendStyle (css, styleId, replace) {
  var style = document.getElementById(styleId);
  if (style && replace) {
    style.parentNode.removeChild(style);
    style = null;
  }
  if (!style) {
    style = document.createElement('style');
    style.type = 'text/css';
    styleId && (style.id = styleId);
    document.getElementsByTagName('head')[0].appendChild(style);
  }
  style.appendChild(document.createTextNode(css));
}

function getUniqueFromArray (arr) {
  if (!isArray(arr)) {
    return []
  }
  var res = [];
  var unique = {};
  var val;
  for (var i = 0, l = arr.length; i < l; i++) {
    val = arr[i];
    if (unique[val]) {
      continue
    }
    unique[val] = true;
    res.push(val);
  }
  return res
}

function detectWebp () {
  return _isWebpSupported
}

function detectSticky () {
  return _isStickySupported
}

function getRandom (num) {
  var _defaultNum = 10;
  if (typeof num !== 'number' || num <= 0) {
    num = _defaultNum;
  }
  var _max = Math.pow(10, num);
  return Math.floor(Date.now() + Math.random() * _max) % _max
}

function getRgb (color) {
  var match;
  color = color + '';
  match = color.match(/#([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})/);
  if (match) {
    return {
      r: parseInt(match[1], 16),
      g: parseInt(match[2], 16),
      b: parseInt(match[3], 16)
    }
  }
  match = color.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
  if (match) {
    return {
      r: parseInt(match[1]),
      g: parseInt(match[2]),
      b: parseInt(match[3])
    }
  }
}

// direction: 'l' | 'r', default is 'r'
// num: how many times to loop, should be a positive integer
function loopArray (arr, num, direction) {
  if (!isArray(arr)) {
    return
  }
  var isLeft = (direction + '').toLowerCase() === 'l';
  var len = arr.length;
  num = num % len;
  if (num < 0) {
    num = -num;
    isLeft = !isLeft;
  }
  if (num === 0) {
    return arr
  }
  var lp, rp;
  if (isLeft) {
    lp = arr.slice(0, num);
    rp = arr.slice(num);
  }
  else {
    lp = arr.slice(0, len - num);
    rp = arr.slice(len - num);
  }
  return rp.concat(lp)
}

function throttle (func, wait) {
  var result;
  var timerId = null;
  var previous = 0;
  var context;
  var args;
  var later = function () {
    previous = Date.now();
    timerId = null;
    result = func.apply(context, args);
  };
  return function () {
    var now = Date.now();
    var remaining = wait - (now - previous);
    context = this;
    args = Array.prototype.slice.call(arguments);
    if (remaining <= 0) {
      clearTimeout(timerId);
      timerId = null;
      previous = now;
      result = func.apply(context, args);
    }
    else if (!timerId) {
      timerId = setTimeout(later, remaining);
    }
    return result
  }
}

function camelToKebab (name) {
  if (!name) { return '' }
  return name.replace(/([A-Z])/g, function (g, g1) {
    return ("-" + (g1.toLowerCase()))
  })
}

function kebabToCamel (name) {
  if (!name) { return '' }
  return name.replace(/-([a-z])/g, function (g, g1) {
    console.log(g1);
    return ("" + (g1.toUpperCase()))
  })
}


var utils = Object.freeze({
	frameUpdater: frameUpdater,
	isArray: isArray,
	slice: slice,
	vendors: vendors,
	getType: getType,
	appendStyle: appendStyle,
	getUniqueFromArray: getUniqueFromArray,
	detectWebp: detectWebp,
	detectSticky: detectSticky,
	getRandom: getRandom,
	getRgb: getRgb,
	loopArray: loopArray,
	throttle: throttle,
	camelToKebab: camelToKebab,
	kebabToCamel: kebabToCamel,
	extend: extend,
	def: def$1,
	remove: remove,
	hasOwn: hasOwn,
	bind: bind,
	toArray: toArray,
	isObject: isObject$4,
	isPlainObject: isPlainObject,
	typof: typof
});

var watchedComponents = [];
var listened = false;
var scrollY = 0;

function needWatch (component) {
  var events = component.data.event;
  if (events
      && (events.indexOf('appear') !== -1
        || events.indexOf('disappear') !== -1)) {
    return true
  }
  return false
}

function watchIfNeeded (component) {
  if (needWatch(component)) {
    watchedComponents.push(component);
    if (!listened) {
      listened = true;
      var handler = throttle(onScroll, 100);
      window.addEventListener('scroll', handler, false);
    }
  }
}

function isComponentInWindow (component) {
  var rect = component.node.getBoundingClientRect();
  return rect.right > 0 && rect.left < window.innerWidth &&
         rect.bottom > 0 && rect.top < window.innerHeight
}

function hasIntersection (rect, ctRect) {
  return (rect.left < ctRect.right && rect.right > ctRect.left)
    && (rect.top < ctRect.bottom && rect.bottom > ctRect.top)
}

function isComponentAppear (component) {
  // NOTE: no more support embeded scrollers.
  var parentScroller = component.getParentScroller();
  if (!parentScroller) {
    return isComponentInWindow(component)
  }
  return isComponentInWindow(component)
    && hasIntersection(
      component.node.getBoundingClientRect(),
      parentScroller.node.getBoundingClientRect())
}

function onScroll (e) {
  var direction;
  // NOTE: this condition strongly relies on the scroller's implementation.
  if (e.originalType === 'scrolling') {
    direction = e.direction;
  }
  else {
    // NOTE: only VERTICAL window scroll can be detected.
    var y = window.scrollY;
    direction = y >= scrollY ? 'up' : 'down';
    scrollY = y;
  }
  var len = watchedComponents.length;
  for (var i = 0; i < len; i++) {
    var component = watchedComponents[i];
    var appear = isComponentAppear(component);
    if (appear) {
      component.dispatchEvent('appear', { direction: direction });
    }
    else if (!appear) {
      component.dispatchEvent('disappear', { direction: direction });
    }
  }
}

/* global Event */

// const FrameUpdater = require('./frameUpdater')
// const lazyload = require('./lazyload')
// const animation = require('./animation')

var RENDERING_INDENT = 800;

var _instanceMap = {};
var typeMap = {};
var scrollableTypes = [
  'scroller',
  'hscroller',
  'vscroller',
  'list',
  'hlist',
  'vlist'
];

function ComponentManager (id) {
  this.id = id;
  this.batched = false;
  this.updates = [];
  this.componentMap = {};
  _instanceMap[this.id] = this;
}

ComponentManager.getInstance = function (instanceId) { return _instanceMap[instanceId]; };

ComponentManager.registerComponent = function (type, definition) {
  typeMap[type] = definition;
};

ComponentManager.getScrollableTypes = function () { return scrollableTypes; };

ComponentManager.prototype = {

  getWeexInstance: function getWeexInstance () {
    if (!this._weexInstance) {
      this._weexInstance = global.weex
        ? global.weex.getInstance(this.id)
        : null;
    }
    return this._weexInstance
  },

  // Fire a event 'renderbegin'/'renderend' on body element.
  rendering: function rendering () {
    function _renderingEnd () {
      // get weex instance root
      window.dispatchEvent(new Event('renderend'));
      this._renderingTimer = null;
    }
    if (this._renderingTimer) {
      clearTimeout(this._renderingTimer);
      this._renderingTimer = setTimeout(
        _renderingEnd.bind(this),
        RENDERING_INDENT
      );
    }
    else {
      window.dispatchEvent(new Event('renderbegin'));
      this._renderingTimer = setTimeout(
        _renderingEnd.bind(this),
        RENDERING_INDENT
      );
    }
  },

  getComponent: function getComponent (ref) {
    return this.componentMap[ref]
  },

  removeComponent: function removeComponent (ref) {
    var self = this;
    if (!ref || !this.componentMap[ref]) {
      return
    }
    // remove from this.componentMap cursively
    (function _removeCursively (_ref) {
      var child = self.componentMap[_ref];
      var listeners = child._listeners;
      var children = child.data.children;
      if (children && children.length) {
        for (var i = 0, l = children.length; i < l; i++) {
          _removeCursively(children[i].ref);
        }
      }
      // remove events from _ref component
      if (listeners) {
        for (var type in listeners) {
          child.node.removeEventListener(type, listeners[type]);
        }
      }
      delete child._listeners;
      delete child.node._listeners;
      // remove _ref component
      delete self.componentMap[_ref];
    })(ref);
  },

  createElement: function createElement (data, nodeType) {
    var ComponentType = typeMap[data.type];
    if (!ComponentType) {
      ComponentType = typeMap['div'];
    }

    data.instanceId = this.id;
    data.scale = this.getWeexInstance().scale;
    var component = new ComponentType(data, nodeType);
    var ref = data.ref;
    this.componentMap[ref] = component;
    component.node.setAttribute('data-ref', ref);

    return component
  },

  /**
   * createBody: generate root component
   * @param  {object} element
   */
  createBody: function createBody (element) {
    console.log('[h5-render] createBody', element);
    if (this.componentMap['_root']) {
      return
    }
    element = element.toJSON();

    var nodeType = element.type;
    element.type = 'root';
    element.rootId = this.getWeexInstance().rootId;
    element.ref = '_root';

    var root = this.createElement(element, nodeType);
    var body = document.querySelector('#' + this.getWeexInstance().rootId)
          || document.body;
    body.appendChild(root.node);
    root._appended = true;

    this.handleAppend(root);
  },

  appendChild: function appendChild (parentRef, data) {
    var parent = this.componentMap[parentRef];

    if (this.componentMap[data.ref] || !parent) {
      return
    }

    if (parentRef === '_root' && !parent) {
      parent = this.createElement({
        type: 'root',
        rootId: this.getWeexInstance().rootId,
        ref: '_root'
      });
      parent._appended = true;
    }

    var child = parent.appendChild(data);

    // In some parent component the implementation of method
    // appendChild didn't return the component at all, therefor
    // child maybe a undefined object.
    if (child) {
      child.parentRef = parentRef;
    }

    if (child && parent._appended) {
      this.handleAppend(child);
    }
  },

  // appendChildren (ref, elements) {
  //   for (let i = 0; i < elements.length; i++) {
  //     this.appendChild(ref, elements[i])
  //   }
  // },

  removeElement: function removeElement (ref) {
    var this$1 = this;

    if (isArray(ref)) {
      return ref.map(function (r) { return this$1.removeElement(r); })
    }
    var component = this.componentMap[ref];
    // fire event for rendering dom on body elment.
    this.rendering();

    if (component && component.parentRef) {
      var parent = this.componentMap[component.parentRef];
      component.onRemove && component.onRemove();
      parent.removeChild(component);
    }
    else if (!component) {
      console.error(("[h5-render] component of ref '" + ref + "' does not exist."));
    }
    else {
      console.error(("[h5-render] parent component '" + (component.parentRef) + "' does not exist."));
    }
  },

  moveElement: function moveElement (ref, parentRef, index) {
    var component = this.componentMap[ref];
    var newParent = this.componentMap[parentRef];
    var oldParentRef = component.parentRef;
    var children, before, i, l;
    if (!component) {
      return console.error(("[h5-render] component of ref '" + ref + "' does not exist."))
    }
    if (!newParent) {
      return console.error(
        ("[h5-render] parent component '" + parentRef + "' does not exist."))
    }

    if (index < -1) {
      index = -1;
      return console.error('[h5-render] index cannot be less than -1.')
    }

    // fire event for rendering.
    this.rendering();

    children = newParent.data.children;
    if (children
        && children.length
        && index !== -1
        && index < children.length) {
      before = this.componentMap[newParent.data.children[index].ref];
    }

    // remove from oldParent.data.children
    if (oldParentRef && this.componentMap[oldParentRef]) {
      children = this.componentMap[oldParentRef].data.children;
      if (children && children.length) {
        for (i = 0, l = children.length; i < l; i++) {
          if (children[i].ref === ref) {
            break
          }
        }
        if (l > i) {
          children.splice(i, 1);
        }
      }
    }

    newParent.insertBefore(component, before);

    component.onMove && component.onMove(parentRef, index);
  },

  insertBefore: function insertBefore (ref, data) {
    var child, parent;
    var before = this.componentMap[ref];
    child = this.componentMap[data.ref];
    before && (parent = this.componentMap[before.parentRef]);
    if (child || !parent || !before) {
      return
    }

    child = this.createElement(data);
    if (child) {
      child.parentRef = before.parentRef;
      parent.insertBefore(child, before);
    }
    else {
      return
    }

    if (this.componentMap[before.parentRef]._appended) {
      this.handleAppend(child);
    }
  },

  /**
   * addElement
   * If index is larget than any child's index, the
   * element will be appended behind.
   * @param {string} parentRef
   * @param {obj} element (data of the component)
   * @param {number} index
   */
  addElement: function addElement (element, parentRef, index) {
    // fire event for rendering dom on body elment.
    element = element.toJSON();
    this.rendering();

    var parent = this.componentMap[parentRef];
    if (!parent) {
      return
    }
    var children = parent.data.children;
    // -1 means append as the last.
    if (index < -1) {
      index = -1;
      return console.error('[h5-render] index cannot be less than -1.')
    }
    if (children && children.length
        && children.length > index
        && index !== -1) {
      this.insertBefore(children[index].ref, element);
    }
    else {
      this.appendChild(parentRef, element);
    }
  },

  addEvent: function addEvent (ref, type) {
    var component = this.componentMap[ref];
    if (!component) {
      return console.error(("[h5-render] component of ref '" + ref + "' does not exist."))
    }
    component.bindEvents([type]);
  },

  removeEvent: function removeEvent (ref, type) {
    var component = this.componentMap[ref];
    if (!component) {
      return console.error(("[h5-render] component of ref '" + ref + "' does not exist."))
    }
    component.unbindEvents([type]);
  },

  setAttr: function setAttr (ref, key, value) {
    var component = this.componentMap[ref];
    if (!component) {
      return console.error(("[h5-render] component of ref '" + ref + "' does not exist."))
    }
    var obj;
    component.updateAttrs(( obj = {}, obj[key] = value, obj ));
  },

  setStyle: function setStyle (ref, key, value) {
    var component = this.componentMap[ref];
    if (!component) {
      return console.error(("[h5-render] component of ref '" + ref + "' does not exist."))
    }
    var obj;
    component.updateStyle(( obj = {}, obj[key] = value, obj ));
  },

  setStyles: function setStyles (ref, style) {
    var component = this.componentMap[ref];
    if (!component) {
      return console.error(("[h5-render] component of ref '" + ref + "' does not exist."))
    }
    component.updateStyle(style);
  },

  handleAppend: function handleAppend (component) {
    var this$1 = this;

    component._appended = true;
    component.onAppend && component.onAppend();

    // invoke onAppend on children recursively
    var children = component.data.children;
    if (children) {
      for (var i = 0; i < children.length; i++) {
        var child = this$1.componentMap[children[i].ref];
        if (child) {
          this$1.handleAppend(child);
        }
      }
    }

    // watch appear/disappear of the component if needed
    watchIfNeeded(component);

    // do lazyload if needed
    component.fireLazyload();
    // lazyload.startIfNeeded(component);
  },

  createFinish: function createFinish (callback) {
    window.dispatchEvent(new Event('weex:createfinish'));
  },

  updateFinish: function updateFinish (callback) {
    window.dispatchEvent(new Event('weex:updatefinish'));
  },

  refreshFinish: function refreshFinish (callback) {
    window.dispatchEvent(new Event('weex:refreshfinish'));
  }

};

var config$3 = {
  weexVersion: '0.5.0',
  debug: false,
  validRoots: ['div', 'list', 'vlist', 'scroller'],
  downgrade: {
    // root: true
  }
};

/* global XMLHttpRequest */

function loadByXHR (config, callback) {
  if (!config.source) {
    callback(new Error('xhr loader: missing config.source.'));
  }
  var xhr = new XMLHttpRequest();
  xhr.open('GET', config.source);
  xhr.onload = function () {
    callback(null, this.responseText);
  };
  xhr.onerror = function (error) {
    callback(error);
  };
  xhr.send();
}

function loadByJsonp (config, callback) {
  if (!config.source) {
    callback(new Error('jsonp loader: missing config.source.'));
  }
  var callbackName = config.jsonpCallback || 'weexJsonpCallback';
  window[callbackName] = function (code) {
    if (code) {
      callback(null, code);
    }
    else {
      callback(new Error('load by jsonp error'));
    }
  };
  var script = document.createElement('script');
  script.src = decodeURIComponent(config.source);
  script.type = 'text/javascript';
  document.body.appendChild(script);
}

function loadBySourceCode (config, callback) {
  // src is the jsbundle.
  // no need to fetch from anywhere.
  if (config.source) {
    callback(null, config.source);
  }
  else {
    callback(new Error('source code laoder: missing config.source.'));
  }
}

var callbackMap = {
  xhr: loadByXHR,
  jsonp: loadByJsonp,
  source: loadBySourceCode
};

function load (options, callback) {
  var loadFn = callbackMap[options.loader];
  loadFn(options, callback);
}

function registerLoader (name, loaderFunc) {
  if (typeof loaderFunc === 'function') {
    callbackMap[name] = loaderFunc;
  }
}

var protocol = {

  // weex instances
  _instances: {},

  // api meta info
  _meta: {},

  // Weex.registerApiModule used this to register and access apiModules.
  apiModule: {},

  // get the api method meta info array for the module.
  getApiModuleMeta: function (moduleName) {
    var metaObj = {};
    metaObj[moduleName] = this._meta[moduleName];
    return metaObj
  },

  // Set meta info for a api module.
  // If there is a same named api, just replace it.
  // opts:
  // - metaObj: meta object like
  // {
  //    dom: [{
  //      name: 'addElement',
  //      args: ['string', 'object']
  //    }]
  // }
  setApiModuleMeta: function (metaObj) {
    var moduleName;
    for (var k in metaObj) {
      if (metaObj.hasOwnProperty(k)) {
        moduleName = k;
      }
    }
    var metaArray = this._meta[moduleName];
    if (!metaArray) {
      this._meta[moduleName] = metaObj[moduleName];
    }
    else {
      var nameObj = {};
      metaObj[moduleName].forEach(function (api) {
        nameObj[api.name] = api;
      });
      metaArray.forEach(function (api, i) {
        if (nameObj[api.name]) {
          metaArray[i] = nameObj[api.name];
          delete nameObj[api.name];
        }
      });
      for (var k$1 in metaObj) {
        if (metaObj.hasOwnProperty(k$1)) {
          metaArray.push(metaObj[k$1]);
        }
      }
    }
    this._meta[moduleName] = metaObj[moduleName];
  },

  // Set meta info for a single api.
  // opts:
  //  - moduleName: api module name.
  //  - meta: a meta object like:
  //  {
  //    name: 'addElement',
  //    args: ['string', 'object']
  //  }
  setApiMeta: function (moduleName, meta) {
    var metaArray = this._meta[moduleName];
    if (!metaArray) {
      this._meta[moduleName] = [meta];
    }
    else {
      var metaIdx = -1;
      metaArray.forEach(function (api, i) {
        var name; // todo
        if (meta.name === name) {
          metaIdx = i;
        }
      });
      if (metaIdx !== -1) {
        metaArray[metaIdx] = meta;
      }
      else {
        metaArray.push(meta);
      }
    }
  }
};

// _registerModules([{
//   modal: [{
//     name: 'toast',
//     args: ['object', 'function']
//   }, {
//     name: 'alert',
//     args: ['object', 'function']
//   }, {
//     name: 'confirm',
//     args: ['object', 'function']
//   }, {
//     name: 'prompt',
//     args: ['object', 'function']
//   }]
// }, {
//   animation: [{
//     name: 'transition',
//     args: ['string', 'object', 'function']
//   }]
// }])

var _senderMap = {};

function Sender (instance) {
  if (!(this instanceof Sender)) {
    return new Sender(instance)
  }
  this.instanceId = instance.instanceId;
  this.weexInstance = instance;
  _senderMap[this.instanceId] = this;
}

function _send (instanceId, msg) {
  callJS(instanceId, [msg]);
}

Sender.getSender = function (instanceId) {
  return _senderMap[instanceId]
};

Sender.prototype = {

  // perform a callback to jsframework.
  performCallback: function (callbackId, data, keepAlive) {
    var args = [callbackId];
    data && args.push(data);
    keepAlive && args.push(keepAlive);
    _send(this.instanceId, {
      method: 'callback',
      args: args
    });
  },

  fireEvent: function (ref, type, func, event) {
    func.extra && extend(event, func.extra());
    _send(this.instanceId, {
      method: 'fireEvent',
      args: [ref, type, event, func.updator && func.updator()]
    });
  }

};

var callQueue = [];
// Need a task counter?
// When frameUpdater is not activated, tasks will not be push
// into callQueue and there will be no trace for situation of
// execution of tasks.

// give 10ms for call handling, and rest 6ms for others
var MAX_TIME_FOR_EACH_FRAME = 10;

// callNative: jsFramework will call this method to talk to
// this renderer.
// params:
//  - instanceId: string.
//  - tasks: array of object.
//  - callbackId: number.
function callNative$1 (instanceId, tasks, callbackId) {
  var calls = [];
  if (typeof tasks === 'string') {
    try {
      calls = JSON.parse(tasks);
    }
    catch (e) {
      console.error('invalid tasks:', tasks);
    }
  }
  else if (isArray(tasks)) {
    calls = tasks;
  }
  var len = calls.length;
  calls[len - 1].callbackId = (!callbackId && callbackId !== 0)
                              ? -1
                              : callbackId;
  // To solve the problem of callapp, the two-way time loop rule must
  // be replaced by calling directly except the situation of page loading.
  // 2015-11-03
  for (var i = 0; i < len; i++) {
    if (frameUpdater.isActive()) {
      callQueue.push({
        instanceId: instanceId,
        call: calls[i]
      });
    }
    else {
      processCall(instanceId, calls[i]);
    }
  }
}

function processCallQueue () {
  var len = callQueue.length;
  if (len === 0) {
    return
  }
  var start = Date.now();
  var elapsed = 0;

  while (--len >= 0 && elapsed < MAX_TIME_FOR_EACH_FRAME) {
    var callObj = callQueue.shift();
    processCall(callObj.instanceId, callObj.call);
    elapsed = Date.now() - start;
  }
}

function processCall (instanceId, call) {
  var isComponent = typeof call.module === 'undefined';
  isComponent ? componentCall(instanceId, call) : moduleCall(instanceId, call);

  var callbackId = call.callbackId;
  if ((callbackId
    || callbackId === 0
    || callbackId === '0')
    && callbackId !== '-1'
    && callbackId !== -1) {
    performNextTick(instanceId, callbackId);
  }
}

function moduleCall (instanceId, call) {
  var moduleName = call.module;
  var methodName = call.method;
  var module, method;
  var args = call.args || call.arguments || [];

  if (!(module = protocol.apiModule[moduleName])) {
    return
  }
  if (!(method = module[methodName])) {
    return
  }

  method.apply(global.weex.getInstance(instanceId), args);
}

function componentCall (instanceId, call) {
  var componentName = call.component;
  var ref = call.ref;
  var methodName = call.method;
  var args = call.args || call.arguments || [];

  var elem = global.weex.getInstance(instanceId).getComponentManager().getComponent(ref);
  if (!elem) {
    return console.error(("[h5-render] component of ref " + ref + " doesn't exist."))
  }

  var method;

  if (!(method = elem[methodName])) {
    return console.error(("[h5-render] component " + componentName + " doesn't have a method named " + methodName + "."))
  }

  method.apply(elem, args);
}

function performNextTick (instanceId, callbackId) {
  Sender.getSender(instanceId).performCallback(callbackId);
}

function nativeLog () {
  if (config$3.debug) {
    if (arguments[0].match(/^perf/)) {
      console.info.apply(console, arguments);
      return
    }
    console.debug.apply(console, arguments);
  }
}

function exportsBridgeMethodsToGlobal () {
  global.callNative = callNative$1;
  global.nativeLog = nativeLog;
}

var receiver = {
  init: function () {
    // process callQueue every 16 milliseconds.
    frameUpdater.addUpdateObserver(processCallQueue);
    frameUpdater.start();

    // exports methods to global(window).
    exportsBridgeMethodsToGlobal();
  }
};

/**
 * @fileOverview
 * A simple virtual dom implementation
 */

var NOT_PX_NUMBER_PROPERTIES = ['flex', 'opacity', 'zIndex', 'fontWeight'];



function getFilters (key, config) {
  if (NOT_PX_NUMBER_PROPERTIES.indexOf(key) !== -1) {
    return {}
  }
  return {
    number: function (val) {
      return val * config.scale + 'px'
    },
    string: function (val) {
      // string of a pure number or a number suffixed with a 'px' unit
      if (val.match(/^-?\d*\.?\d+(?:px)?$/)) {
        return parseFloat(val) * config.scale + 'px'
      }
      if (key.match(/transform/) && val.match(/translate/)) {
        return val.replace(/\d*\.?\d+px/g, function (match) {
          return parseInt(parseFloat(match) * config.scale) + 'px'
        })
      }
      return val
    }
  }
}

function create$2 (nodeType) {
  return document.createElement(nodeType || 'div')
}

function createChildren$1 () {
  var this$1 = this;

  var children = this.data.children;
  var parentRef = this.data.ref;
  var componentManager = this.getComponentManager();
  if (children && children.length) {
    var fragment = document.createDocumentFragment();
    var isFlex = false;
    for (var i = 0; i < children.length; i++) {
      children[i].instanceId = this$1.data.instanceId;
      children[i].scale = this$1.data.scale;
      var child = componentManager.createElement(children[i]);
      fragment.appendChild(child.node);
      child.parentRef = parentRef;
      if (!isFlex
        && child.data.style
        && child.data.style.hasOwnProperty('flex')
      ) {
        isFlex = true;
      }
    }
    this.node.appendChild(fragment);
  }
}

function appendChild$1 (data) {
  var children = this.data.children;
  var componentManager = this.getComponentManager();
  var child = componentManager.createElement(data);
  this.node.appendChild(child.node);
  // update this.data.children
  if (!children || !children.length) {
    this.data.children = [data];
  }
  else {
    children.push(data);
  }
  return child
}

function insertBefore$1 (child, before) {
  var children = this.data.children;
  var i = 0;
  var l;
  var isAppend = false;

  // update this.data.children
  if (!children || !children.length || !before) {
    isAppend = true;
  }
  else {
    for (l = children.length; i < l; i++) {
      if (children[i].ref === before.data.ref) {
        break
      }
    }
    if (i === l) {
      isAppend = true;
    }
  }

  if (isAppend) {
    this.node.appendChild(child.node);
    children.push(child.data);
  }
  else {
    if (before.fixedPlaceholder) {
      this.node.insertBefore(child.node, before.fixedPlaceholder);
    }
    else if (before.stickyPlaceholder) {
      this.node.insertBefore(child.node, before.stickyPlaceholder);
    }
    else {
      this.node.insertBefore(child.node, before.node);
    }
    children.splice(i, 0, child.data);
  }
}

function removeChild$1 (child) {
  var children = this.data.children;
  // remove from this.data.children
  var i = 0;
  var componentManager = this.getComponentManager();
  if (children && children.length) {
    var l;
    for (l = children.length; i < l; i++) {
      if (children[i].ref === child.data.ref) {
        break
      }
    }
    if (i < l) {
      children.splice(i, 1);
    }
  }
  // remove from componentMap recursively
  componentManager.removeComponent(child.data.ref);
  child.unsetPosition();
  child.node.parentNode.removeChild(child.node);
}

function updateAttrs (attrs) {
  var this$1 = this;

  // Note：attr must be injected into the dom element because
  // it will be accessed from the outside developer by event.target.attr.
  if (!this.node.attr) {
    this.node.attr = {};
  }
  for (var key in attrs) {
    var value = attrs[key];
    var attrSetter = this$1.attr[key];
    if (typeof attrSetter === 'function') {
      attrSetter.call(this$1, value);
    }
    else {
      if (typeof value === 'boolean') {
        this$1.node[key] = value;
      }
      else {
        this$1.node.setAttribute(key, value);
      }
      this$1.node.attr[key] = value;
    }
  }
}

function updateStyle (style) {
  var this$1 = this;

  for (var key in style) {
    var value = style[key];
    var styleSetter = this$1.style[key];
    if (typeof styleSetter === 'function') {
      styleSetter.call(this$1, value);
      continue
    }
    var parser = getFilters(key,
      { scale: this$1.data.scale })[typeof value];
    if (typeof parser === 'function') {
      value = parser(value);
    }
    this$1.node.style[key] = value;
  }
}

function bindEvents$2 (evts) {
  var self = this;
  var weexInstance = this.getWeexInstance();
  evts.map(function (evt) {
    var func = self.event[evt] || {};
    var setter = func.setter;
    if (setter) {
      self.node.addEventListener(evt, setter);
      return
    }
    var sender = weexInstance.sender;
    var listener = function (e) {
      // do stop bubbling.
      // do not prevent default, otherwise the touchstart
      // event will no longer trigger a click event
      if (e._alreadyTriggered) {
        return
      }
      e._alreadyTriggered = true;
      var event = extend({}, e);
      event.target = self.data;
      sender.fireEvent(self.data.ref, evt, {
        extra: func.extra && func.extra.bind(self),
        updator: func.updator && func.updator.bind(self)
      }, event);
    };
    self.node.addEventListener(evt, listener, false, false);
    var listeners = self._listeners;
    if (!listeners) {
      listeners = self._listeners = {};
      self.node._listeners = {};
    }
    listeners[evt] = listener;
    self.node._listeners[evt] = listener;
  });
}

function unbindEvents (evts) {
  var self = this;
  evts.map(function (evt) {
    var listener = this._listeners;
    if (listener) {
      self.node.removeEventListener(evt, listener);
      self._listeners[evt] = null;
      self.node._listeners[evt] = null;
    }
  });
}


var operate = Object.freeze({
	create: create$2,
	createChildren: createChildren$1,
	appendChild: appendChild$1,
	insertBefore: insertBefore$1,
	removeChild: removeChild$1,
	updateAttrs: updateAttrs,
	updateStyle: updateStyle,
	bindEvents: bindEvents$2,
	unbindEvents: unbindEvents
});

/* global HTMLElement */

var ua = navigator.userAgent;
var isFirefox = !!ua.match(/Firefox/i);
var isIEMobile = !!ua.match(/IEMobile/i);
var cssPrefix = isFirefox ? '-moz-' : isIEMobile ? '-ms-' : '-webkit-';
var stylePrefix = isFirefox ? 'Moz' : isIEMobile ? 'ms' : 'webkit';

// even sticky, still not work. so...
// const supportSticky = detectSticky()

function bindParent (sticky) {
  if (!sticky instanceof Sticky) {
    return
  }
  var scroller = sticky.component.getParentScroller();
  var pt;
  if (scroller) {
    pt = sticky.parent = scroller;
    sticky.parentElement = pt.node;
  }
  else {
    pt = sticky.parent = sticky.component.getRootContainer();
    sticky.parentElement = pt;
  }
}

function setSticky$1 (sticky) {
  var comp = sticky.component;
  var element = sticky.element;
  comp.stickyPlaceholder = sticky.element.cloneNode(true);
  comp.stickyPlaceholder.removeAttribute('data-ref');
  comp.stickyPlaceholder.classList.add('weex-sticky-placeholder');
  element.classList.add('weex-sticky');
  sticky.preMarginTop = element.style.marginTop;
  sticky.preTop = element.style.top;
  element.style.marginTop = sticky.top || '0' + 'px';

  element.parentNode.insertBefore(
    comp.stickyPlaceholder, element);
  element.style.position = 'fixed';
  var top;
  if (sticky.parent instanceof HTMLElement) {
    top = 0;
  }
  else {
    top = sticky.parentElement.getBoundingClientRect().top;
  }
  element.style.top = top + 'px';
  sticky.parentElement.appendChild(element);
}

/**
 * unsetSticky
 * @param  {Sticky} sticky : a sticky instance.
 * @param  {string} position : position replacing with (default: 'relative').
 */
function unsetSticky$1 (sticky, position) {
  var comp = sticky.component;
  var element = sticky.element;
  position = position ? position + '' : sticky.prePosition;
  element.style.position = position;
  element.style.marginTop = sticky.preMarginTop || '';
  element.style.top = sticky.preTop || '';
  element.classList.remove('weex-sticky');
  if (comp.stickyPlaceholder) {
    var parent = comp.stickyPlaceholder.parentNode;
    parent.insertBefore(element, comp.stickyPlaceholder);
    parent.removeChild(comp.stickyPlaceholder);
    comp.stickyPlaceholder = null;
  }
}

/**
 * @class  Sticky
 * @param {Component} component: a weex component.
 * @param {object} options config options.
 *  - options.component (optional) incase the component param is missing, it can
 *    be specified in this options.
 *  - options.withinParent=false（optional，only for Android）the sticky effect is
 *    limited within the parent element only.
 */
function Sticky (component, options) {
  options = options || {};
  this.component = component;
  this.element = component.node;
  this.prePosition = this.element.style.position;
  this.withinParent = options.withinParent || false;
  this.parent = null;
  this.init();
}

Sticky.prototype = {

  constructor: Sticky,

  init: function init () {
    var elementStyle = this.element.style;
    elementStyle[stylePrefix + 'Transform'] = 'translateZ(0)'; // fix flickering
    elementStyle['transform'] = 'translateZ(0)';
    bindParent(this);
    // if (supportSticky) {
    //   elementStyle.position = cssPrefix + 'sticky'
    // }
    this._simulateSticky();
    this._bindResize();
  },

  _bindResize: function _bindResize () {
    var self = this;
    var isAndroid = (/android/gi).test(navigator.appVersion);
    var resizeEvent = self._resizeEvent = 'onorientationchange' in window
      ? 'orientationchange'
      : 'resize';
    var resizeHandler = self._resizeHandler = function () {
      setTimeout(function () {
        self.refresh();
      }, isAndroid ? 200 : 0);
    };
    window.addEventListener(resizeEvent, resizeHandler, false);
  },

  /**
   * Refresh a instance.
   * If withParent is true and the parent' height altered, this
   * method should be called.
   */
  refresh: function refresh () {
    // if (supportSticky) {
    //   return
    // }
    this._detach();
    this._simulateSticky();
  },

  _simulateSticky: function _simulateSticky () {
    var self = this;
    var isInScrollable = this.isInScrollable();
    // the initial y offset.
    this.offset = (isInScrollable
      ? this.getParentScroller().offset
      : window.pageYOffset)
      || 0;
    var rectTop = this.element.getBoundingClientRect().top;
    var wrapperTop = 0;
    if (isInScrollable) {
      wrapperTop = this.parentElement.getBoundingClientRect().top;
    }
    var withinParent = this.withinParent;
    var thresholdBase = rectTop - wrapperTop + this.offset;
    /**
     * curState:
     *   1 - normal
     *   2 - sticky
     *   3 - exceed parent
     * @type {Number}
     */
    this.curState = 1;
    var scrollHandler = this._scrollHandler = throttle(function (e) {
      var thresholdTop = thresholdBase;
      var ypos = self.isInScrollable() ? e.offset : window.pageYOffset;
      self.offset = ypos;
      if (ypos < thresholdTop) {
        if (self.curState !== 1) {
          unsetSticky$1(self);
          self.curState = 1;
        }
      }
      else if ((!withinParent && ypos >= thresholdTop) ||
        (withinParent && ypos >= thresholdTop/* && ypos < thresholdBottom*/)) {
        if (self.curState !== 2) {
          setSticky$1(self);
          self.curState = 2;
        }
      }
    }, 100);
    window.addEventListener('scroll', scrollHandler, false);

    // take effect once inited after a destroyment.
    if (this.offset >= thresholdBase) {
      var dummyEvent = document.createEvent('HTMLEvents');
      dummyEvent.initEvent('scroll', true, true);
      window.dispatchEvent(dummyEvent);
    }
  },

  _detach: function _detach (position) {
    position = position ? position + '' : 'relative';
    // if (supportSticky) {
    //   return
    // }
    if (this.curState === 2) {
      unsetSticky$1(this);
    }
    window.removeEventListener('scroll', this._scrollHandler, false);
  },

  isInScrollable: function isInScrollable () {
    if (!this._isInScrollable) {
      try {
        this._isInScrollable = this.component.isInScrollable();
      }
      catch (err) {
        // The parentRef is not in componentManager's componentMap yet, so
        // it's invalid to get the parent and test if it's scrollable.
        // This is most likely to happen in the case that the parent
        // component's 'append' attribute is set to 'tree'.
        console.error('isInScrollable is not yet available to call', err);
      }
    }
    return this._isInScrollable
  },

  getParentScroller: function getParentScroller () {
    return this.component.getParentScroller()
  },

  destroy: function destroy (position) {
    this._detach(position);
    var elementStyle = this.element.style;
    elementStyle.removeProperty(cssPrefix + 'transform');
    elementStyle.removeProperty('transform');
    // if (supportSticky) {
    //   return
    // }
    window.removeEventListener(this._resizeEvent, this._resizeHandler, false);
  }
};

// Set positon to fixed, with a placeholder if it's in a
// scrollable component.
function setFixed () {
  // delay processing in case the node is not appended yet.
  setTimeout(function () {
    this.node.style.position = 'fixed';
    if (!this.isInScrollable()) {
      return
    }
    var parent = this.node.parentNode;
    if (parent) {
      // For the elements who are fixed: this fixedPlaceholder
      // shoud be inserted, and the fixed element itself should
      // be moved to the root container.
      this.fixedPlaceholder = document.createElement('div');
      this.fixedPlaceholder.classList.add('weex-fixed-placeholder');
      this.fixedPlaceholder.style.cssText = [
        'display:none;',
        'width:0px;',
        'height:0px;'
      ].join('');
      parent.insertBefore(this.fixedPlaceholder, this.node);
      this.getRootContainer().appendChild(this.node);
    }
  }.bind(this), 0);
}

// unset a fixed node to the pecified 'position' or 'relative' by default.
function unsetFixed (position) {
  // For the elements who are fixed elements before, now
  // are not fixed: the fixedPlaceholder has to be replaced
  // by this element.
  position = position ? position + '' : 'relative';
  if (this.fixedPlaceholder) {
    var parent = this.fixedPlaceholder.parentNode;
    parent.insertBefore(this.node, this.fixedPlaceholder);
    parent.removeChild(this.fixedPlaceholder);
    this.fixedPlaceholder = null;
    this.node.style.position = position;
  }
}

function setSticky () {
  this.node.style.zIndex = 100;
  setTimeout(function () {
    this.sticky = new Sticky(this);
  }.bind(this), 0);
}

function unsetSticky () {
  if (this.sticky) {
    this.sticky.destroy();
    this.sticky = null;
  }
}

// usally used to unset sticky and fixed
function unsetPosition (position) {
  this.style.position.call(this, position);
}

var style = {
  position: function position (value) {
    // This is a peace of hacking to fix the problem about
    // mixing fixed and transform. See 'http://stackoverflo
    // w.com/questions/15194313/webkit-css-transform3d-posi
    // tion-fixed-issue' for more info.
    value !== 'fixed' && this.unsetFixed();
    value !== 'sticky' && this.unsetSticky();
    if (value === 'fixed') {
      return this.setFixed()
    }
    if (value === 'sticky') {
      return this.setSticky()
    }
    this.node.style.position = value;
  }
};


var position$1 = Object.freeze({
	setFixed: setFixed,
	unsetFixed: unsetFixed,
	setSticky: setSticky,
	unsetSticky: unsetSticky,
	unsetPosition: unsetPosition,
	style: style
});

var boxAlignMap = {
  stretch: 'stretch',
  'flex-start': 'start',
  'flex-end': 'end',
  center: 'center'
};

var boxOrientMap = {
  row: 'horizontal',
  column: 'vertical'
};

var boxPackMap = {
  'flex-start': 'start',
  'flex-end': 'end',
  center: 'center',
  'space-between': 'justify',
  'space-around': 'justify' // Just same as `space-between`
};

var flexbox = {
  style: {
    flex: function flex (value) {
      this.node.style.webkitBoxFlex = value;
      this.node.style.webkitFlex = value;
      this.node.style.flex = value;
    },

    alignItems: function alignItems (value) {
      this.node.style.webkitBoxAlign = boxAlignMap[value];
      this.node.style.webkitAlignItems = value;
      this.node.style.alignItems = value;
    },

    alignSelf: function alignSelf (value) {
      this.node.style.webkitAlignSelf = value;
      this.node.style.alignSelf = value;
    },

    flexDirection: function flexDirection (value) {
      this.node.style.webkitBoxOrient = boxOrientMap[value];
      this.node.style.webkitFlexDirection = value;
      this.node.style.flexDirection = value;
    },

    justifyContent: function justifyContent (value) {
      this.node.style.webkitBoxPack = boxPackMap[value];
      this.node.style.webkitJustifyContent = value;
      this.node.style.justifyContent = value;
    }
  }
}

/* eslint-disable */
;
/* eslint-enable */

(function (win, lib) {
  var doc = document;
  var appearEvt;
  var disappearEvt;

  function createEvent() {
    appearEvt = doc.createEvent("HTMLEvents");//创建自定义显示事件  
    disappearEvt = doc.createEvent("HTMLEvents");//创建自定义消失事件  
    appearEvt.initEvent('_appear', false, true);      
    disappearEvt.initEvent('_disappear', false, true);      
  }

  /**
   * [throttle 节流函数]
   * @param  {[function]} func [执行函数]
   * @param  {[int]} wait [等待时长]
   * @return {[type]}      [description]
   */
  function throttle(func, wait) {
    var latest = Date.now(),
      previous = 0,//上次执行的时间
      timeout = null,//setTimout任务
      context,//上下文
      args,//参数
      result;//结果
    var later = function () {
      previous = Date.now();
      timeout = null;//清空计时器
      func.apply(context, args);
    };
    return function () {
      var now = Date.now();
      context = this;
      args = arguments;

      var remaining = wait - (now - previous);
      if (remaining <= 0 || remaining >= wait) {
        //如果没有剩余时间，或者存在修改过系统时间导致剩余时间增大的情况，则执行
        clearTimeout(timeout);
        timeout = null;
        result = func.apply(context, args);
      } else if (timeout == null) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    }
  }

  /**
   * [getOffset 获取边距尺寸]
   * @param  {[type]} el   [description]
   * @param  {[type]} param [description]
   * @return {[type]}       [description]
   */
  function getOffset(el, param) {
    var el, l,  r, b, t;
    if (!el) {
      return;
    }
    if (!param) {
      param = {x: 0, y: 0};
    }

    if (el != window) {
      el = el.getBoundingClientRect();
      l = el.left;
      t = el.top;
      r = el.right;
      b = el.bottom;
    } else {
      l = 0;
      t = 0;
      r = l + el.innerWidth;
      b = t + el.innerHeight;
    }
    return {
      'left': l,
      'top': t,
      'right': r + param.x,
      'bottom': b + param.y
    };
  }
  //元素位置比较
  function compareOffset(d1, d2) {
    var left = d2.right > d1.left && d2.left < d1.right;
    var top = d2.bottom > d1.top && d2.top < d1.bottom;
    return left && top;
  }
  //获取移动方向
  function getDirection(beforeOffset, nowOffset) {
    var direction = 'none';
    var horizental = beforeOffset.left - nowOffset.left;
    var vertical = beforeOffset.top - nowOffset.top;
    if (vertical == 0) {
      if (horizental != 0) {
        direction = horizental > 0 ? 'left' : 'right';
      } else {
        direction = 'none';
      }
    }
    if (horizental == 0) {
      if (vertical != 0) {
        direction = vertical > 0 ? 'up' : 'down';
      } else {
        direction = 'none';
      }
    }
    return direction;
  }

  function extend(target, el) {
    for (var k in el) {
      if (el.hasOwnProperty(k)) {
        target[k] = el[k];
      }
    }
    return target;
  }

  /**
   * [__bindEvent 绑定事件，包括滚动、touchmove、transform、resize等]
   * @return {[type]}      [description]
   */
  function __bindEvent() {
    var self = this;
    var handle = throttle(function () {
      __fire.apply(self, arguments);
    }, this.options.wait);
    if (this.__handle) {
      //避免重复绑定
      this.container.removeEventListener('scroll', this.__handle);
      this.__handle = null;
    }
    this.__handle = handle;
    this.container.addEventListener('scroll', handle, false);
    this.container.addEventListener('resize', function(ev) {
      __fire.apply(self, arguments);
    }, false);
    this.container.addEventListener('animationEnd', function() {
      __fire.apply(self, arguments);
    }, false);
    // android4.0以下
    this.container.addEventListener('webkitAnimationEnd', function() {
      __fire.apply(self, arguments);
    }, false);
    this.container.addEventListener('transitionend', function() {
      __fire.apply(self, arguments);
    }, false);
  }

  //获取容器内所有的加载元素
  function __getElements(selector) {
    var self = this;
    //获取容器
    var container = this.options.container;
    if (typeof container == 'string') {
      //如果是字符串，则选择器
      this.container = doc.querySelector(container);
    } else {
      //对象传值
      this.container = container;
    }
    //获取容器内的所有目标元素
    if (this.container == window) {
      var appearWatchElements = doc.querySelectorAll(selector);            
    } else {
      var appearWatchElements = this.container.querySelectorAll(selector);
    }
    var appearWatchElements = [].slice.call(appearWatchElements, null);

    appearWatchElements = appearWatchElements.filter(function(ele) {
      // 如果已经绑定过，清除appear状态，不再加入到数组里
      if (ele.dataset['bind'] == '1') {
        delete ele._hasAppear;
        delete ele._hasDisAppear;
        delete ele._appear;      
        ele.classList.remove(self.options.cls);
        return false;
      } else {
        return true;
      }
    });

    return appearWatchElements;
  }

  function __initBoundingRect(elements) {
    var self = this;
    if (elements && elements.length > 0) {
      [].forEach.call(elements, function (ele) {
        ele._eleOffset = getOffset(ele); 
        //移除类名
        ele.classList.remove(self.options.cls);
        // 标志已经绑定
        ele.dataset['bind'] = 1;
      });
    }        
  }

  // 触发加载
  function __fire() {
    var container = this.container,
      elements = this.appearWatchElements,
      appearCallback = this.options.onAppear,//appear的执行函数
      disappearCallback = this.options.onDisappear,//disappear的执行函数
      containerOffset = getOffset(container, {
        x: this.options.x,
        y: this.options.y
      }),
      isOnce = this.options.once,//是否只执行一次
      ev = arguments[0] || {};
    if (elements && elements.length > 0) {
      [].forEach.call(elements, function (ele, i) {
        //获取左右距离
        var eleOffset = getOffset(ele);
        var direction = getDirection(ele._eleOffset, eleOffset);
        //保存上个时段的位置信息
        ele._eleOffset = eleOffset;
        //查看是否在可视区域范围内
        var isInView = compareOffset(containerOffset, eleOffset);
        var appear = ele._appear;
        var _hasAppear = ele._hasAppear;
        var _hasDisAppear = ele._hasDisAppear;
        appearEvt.data = {
          direction: direction
        };
        disappearEvt.data = {
          direction: direction
        };
        if (isInView && !appear) {
          if ((isOnce && !_hasAppear) || !isOnce) {
            //如果只触发一次并且没有触发过或者允许触发多次
            //如果在可视区域内，并且是从disppear进入appear，则执行回调
            appearCallback && appearCallback.call(ele, ev);
            //触发自定义事件
            ele.dispatchEvent(appearEvt);
            ele._hasAppear = true;
            ele._appear = true;
          }
        } else if (!isInView && appear) {
          if ((isOnce && !_hasDisAppear) || !isOnce) {
            //如果不在可视区域内，并且是从appear进入disappear，执行disappear回调
            disappearCallback && disappearCallback.call(ele, ev);
            //触发自定义事件
            ele.dispatchEvent(disappearEvt);
            ele._hasDisAppear = true;
            ele._appear = false;
          }
        }
      });
    }
  }

  // proto = extend(proto, listener);

  function __init(opts) {
    //扩展参数
    extend(this.options, opts || (opts = {}));
    //获取目标元素
    this.appearWatchElements = this.appearWatchElements || __getElements.call(this, '.' + this.options.cls);
    //初始化位置信息
    __initBoundingRect.call(this, this.appearWatchElements);
    //绑定事件
    __bindEvent.call(this);
  }
  
  var Appear = function () {
    __init.apply(this, arguments);
  };


  var appear = {
    instances: [],
    init: function (opts) {
      var proto = {
        //默认参数
        options: {
          container: window,
          wait: 100,
          x: 0,
          y: 0,
          cls: 'lib-appear',
          once: false,
          onReset: function () {},
          onAppear: function () {},
          onDisappear: function () {}
        },
        container: null,
        appearWatchElements: null,
        bind: function (node) {
          var cls = this.options.cls;
          // 添加需要绑定的appear元素
          if (typeof node == 'string') {
            var elements = __getElements.call(this, node);
            [].forEach.call(elements, function (ele, i) {
              if (!ele.classList.contains(cls)) {
                ele.classList.add(cls);
              }
            });
            
          } else if (node.nodeType == 1 && this.container.contains(node)) {
            //如果传入的是元素并且在包含在容器中，直接添加类名
            if (!node.classList.contains(cls)) {
              //添加类名
              node.classList.add(cls);
            }
          } else {
            return this;
          }
          //新增的子元素
          var newElements = __getElements.call(this, '.' + this.options.cls);
          //对缓存的子元素做增量
          this.appearWatchElements = this.appearWatchElements.concat(newElements);
          //初始化新子元素的位置信息
          __initBoundingRect.call(this, newElements);
          return this;
        },
        // 重置函数
        reset: function (opts) {
          __init.call(this, opts);
          this.appearWatchElements.forEach(function(ele) {
            delete ele._hasAppear;
            delete ele._hasDisAppear;
            delete ele._appear;
          });
          return this;
        },
        fire: function () {
          if (!this.appearWatchElements) {
            this.appearWatchElements = [];
          }
          var newElements = __getElements.call(this, '.' + this.options.cls);
          this.appearWatchElements = this.appearWatchElements.concat(newElements);
          //初始化位置信息
          __initBoundingRect.call(this, newElements);
          __fire.call(this);
          return this;
        }
      };
      Appear.prototype = proto;
      var instance = new Appear(opts);
      this.instances.push(instance);
      return instance;
    },
    fireAll: function () {
      var instances = this.instances;
      instances.forEach(function (instance) {
        instance.fire();
      });
    }
  };
  //注册事件
  createEvent();

  lib.appear = appear;

})(window, window.lib || (window.lib = {}));

var adapter = createCommonjsModule(function (module) {
/*
    lib-img-adpter 
    Author: kongshi.wl@alibaba-inc.com 
    Date:   Dec,2015
*/


(function (win, lib) {
    

    var adapter = {};
    var appearInstance;
    var runtimeFlags = {};

    var config = {
        'dataSrc': 'img-src', //指定图片地址的attribute名, 兼做lazy-class的作用
        'lazyHeight': 0, //以此高度提前触发懒加载
        'lazyWidth': 0 //以此宽度提前触发懒加载
    };

    function extendStrict(main, sub) {
        var ret = {};
        for (var k in main) {
            if (main.hasOwnProperty(k)) {
                ret[k] = sub.hasOwnProperty(k) ? sub[k] : main[k];
            }
        }
        return ret;
    }

    function applySrc(item, processedSrc, placeholderSrc) {
        if (!processedSrc) {
            return;
        }
        if (item.nodeName.toUpperCase() == 'IMG') {
            item.setAttribute('src', processedSrc);
            if (!placeholderSrc) {
                return
            }
            item.onerror = function () {
                this.onerror = null;
                this.src = placeholderSrc;
            };
        } else {
            var bgStr = 'url("' + processedSrc + '")';
            if (placeholderSrc) {
                bgStr += ',url("' + placeholderSrc + '")';
            }
            item.style.backgroundImage = bgStr;
        }
    }

    function init() {
        appearInstance = lib.appear.init({
            cls: 'imgtmp', //可选，需要遍历的元素
            once: true, //可选，是否只触发一次
            x: config.lazyWidth, //可选，容器右边距离x以内的元素加载，默认为0
            y: config.lazyHeight, //可选，容器底部距离y以内的元素加载，默认为0
            onAppear: function (evt) {
                var item = this;
                applySrc(item, item.getAttribute('i-lazy-src'), item.dataset.placeholder);
                item.removeAttribute('i-lazy-src');
            }
        });
    }

    adapter.logConfig = function () {
        console.log('lib-img Config\n', config);
    };

    adapter.fire = function () {

        if (!appearInstance) {
            init();
        }

        var label = 'i_' + Date.now() % 100000;
        var domList = document.querySelectorAll('[' + config.dataSrc + ']');

        [].forEach.call(domList, function (item) {
            if (item.dataset.lazy == 'false' && item.dataset.lazy != 'true') {
                applySrc(item, item.getAttribute(config.dataSrc), item.dataset.placeholder);
            } else {
                item.classList.add(label);
                item.setAttribute('i-lazy-src', item.getAttribute(config.dataSrc));
            }
            item.removeAttribute(config.dataSrc);
        });

        appearInstance.bind('.' + label);
        appearInstance.fire();
    };

    adapter.defaultSrc = 'data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==';

    lib.img = adapter;
    
    module.exports = adapter;

})(window, window['lib'] || (window['lib'] = {}));
});

/* global lib, HTMLElement */

var lazyloadTimer;

// fire lazyimg on images.
function fire () {
  setTimeout(function () { return lib.img.fire(); }, 0);
}

// we don't know when all images are appended
// just use setTimeout to do delay lazyload
//
// -- actually everytime we add a element or update styles,
// the component manager will call startIfNeed to fire
// lazyload once again in the handleAppend function. so there
// is no way that any image element can miss it. See source
// code in componentMangager.js.

// just for the image component to start lazyload.
function startIfNeeded (target) {
  if (!lazyloadTimer) {
    lazyloadTimer = setTimeout(function () {
      fire();
      clearTimeout(lazyloadTimer);
      lazyloadTimer = null;
    }, 16);
  }
}

// for a scope of element, not for a image.
function loadIfNeeded (elementScope) {
  var notPreProcessed = elementScope.querySelectorAll('[img-src]');
  // image elements which have attribute 'i-lazy-src' were elements
  // that had been preprocessed by lib-img-core, but not loaded yet, and
  // must be loaded when 'appear' events were fired. It turns out the
  // 'appear' event was not fired correctly in the css-translate-transition
  // situation, so 'i-lazy-src' must be checked and lazyload must be
  // fired manually.
  var preProcessed = elementScope.querySelectorAll('[i-lazy-src]');
  if (notPreProcessed.length > 0 || preProcessed.length > 0) {
    fire();
  }
}

function makeImageLazy (image, src) {
  image.removeAttribute('img-src');
  image.removeAttribute('i-lazy-src');
  image.removeAttribute('src');
  image.setAttribute('img-src', src);
  fire();
}

function fireLazyload (target) {
  if (typeof target === 'object' && !(target instanceof HTMLElement)) {
    target = target.node;
  }
  if (!target) {
    return
  }
  if (target.tagName.toLowerCase() === 'image') {
    return startIfNeeded(target)
  }
  return loadIfNeeded(target)
}

var appearEvts = ['appear', 'disappear'];

/**
 * check whether a event is valid to dispatch.
 * @param  {Component}      comp  the component that this event is to trigger on.
 * @param  {string}  type   the event type.
 * @return {Boolean}        is it valid to dispatch.
 */
function isEventValid (comp, type) {
  // if a component has aleary triggered 'appear' event, then
  // the 'appear' even† can't be triggered again utill the
  // 'disappear' event triggered.
  if (appearEvts.indexOf(type) <= -1) {
    return true
  }
  if (comp._appear === undefined && type === 'disappear') {
    return false
  }
  var res;
  if (comp._appear === undefined && type === 'appear') {
    res = true;
  }
  else {
    res = type !== comp._appear;
  }
  res && (comp._appear = type);
  return res
}

function Component (data, nodeType) {
  this.data = data;
  this.node = this.create(nodeType);
  this.createChildren();
  this.updateAttrs(this.data.attr || {});
  // issue: when add element to a list in lifetime hook 'ready', the
  // styles is set to the classStyle, not style. This is a issue
  // that jsframework should do something about.
  var classStyle = this.data.classStyle;
  classStyle && this.updateStyle(this.data.classStyle);
  this.updateStyle(this.data.style || {});
  this.bindEvents(this.data.event || []);
}

Component.prototype = {

  getComponentManager: function getComponentManager () {
    return ComponentManager.getInstance(this.data.instanceId)
  },

  getWeexInstance: function getWeexInstance () {
    return this.getComponentManager().getWeexInstance()
  },

  getParent: function getParent () {
    return this.getComponentManager().componentMap[this.parentRef]
  },

  getParentScroller: function getParentScroller () {
    if (this.isInScrollable()) {
      return this._parentScroller
    }
    return null
  },

  getRootScroller: function getRootScroller () {
    if (this.isInScrollable()) {
      var scroller = this._parentScroller;
      var parent = scroller._parentScroller;
      while (parent) {
        scroller = parent;
        parent = scroller._parentScroller;
      }
      return scroller
    }
    return null
  },

  getRootContainer: function getRootContainer () {
    var root = this.getWeexInstance().getRoot()
      || document.body;
    return root
  },

  isScrollable: function isScrollable () {
    var t = this.data.type;
    return ComponentManager.getScrollableTypes().indexOf(t) !== -1
  },

  isInScrollable: function isInScrollable () {
    if (typeof this._isInScrollable === 'boolean') {
      return this._isInScrollable
    }
    var parent = this.getParent();
    if (parent
        && (typeof parent._isInScrollable !== 'boolean')
        && !parent.isScrollable()) {
      if (parent.data.ref === '_root') {
        this._isInScrollable = false;
        return false
      }
      this._isInScrollable = parent.isInScrollable();
      this._parentScroller = parent._parentScroller;
      return this._isInScrollable
    }
    if (parent && typeof parent._isInScrollable === 'boolean') {
      this._isInScrollable = parent._isInScrollable;
      this._parentScroller = parent._parentScroller;
      return this._isInScrollable
    }
    if (parent && parent.isScrollable()) {
      this._isInScrollable = true;
      this._parentScroller = parent;
      return true
    }
  },

  // dispatch a specified event on this.node
  //  - type: event type
  //  - data: event data
  //  - config: event config object
  //     - bubbles
  //     - cancelable
  dispatchEvent: function dispatchEvent (type, data, config) {
    if (!isEventValid(this, type)) {
      return
    }
    var event = document.createEvent('HTMLEvents');
    config = config || {};
    event.initEvent(type, config.bubbles || false, config.cancelable || false);
    !data && (data = {});
    event.data = extend({}, data);
    extend(event, data);
    this.node.dispatchEvent(event);
  },

  onAppend: function () {
    var this$1 = this;

    var evts = this.data.event;
    if (!evts || !evts.length) { return }
    var flag = false;
    for (var i = 0, l = evts.length; i < l; i++) {
      if (evts[i] === 'appear') {
        flag = true;
        break
      }
    }
    if (!flag) {
      return
    }
    // trigger 'appear' event in the next tick.
    setTimeout(function () {
      if (isComponentAppear(this$1)) {
        this$1.dispatchEvent('appear', { direction: '' });
      }
    }, 0);
  },

  addAppendHandler: function addAppendHandler (cb) {
    var pre;
    if (this.onAppend) {
      pre = this.onAppend.bind(this);
    }
    this.onAppend = function () {
      pre && pre.call(this);
      cb && cb.call(this);
    }.bind(this);
  },

  // change src to img-src for lib.img to fire lazyload later.
  enableLazyload: function enableLazyload (src) {
    if (this.node) {
      makeImageLazy(this.node, src);
    }
    else {
      console.error('[h5-render] this.node does not exist.');
    }
  },

  // target can be both weex component and dom element.
  fireLazyload: function fireLazyload$1 (target) {
    !target && (target = this);
    fireLazyload(target);
  },

  attr: {}, // attr setters

  style: {}, // style setters

  // event funcs
  //  - 1. 'updator' for updating attrs or styles with out triggering messages.
  //  - 2. 'extra' for binding extra data.
  //  - 3. 'setter' set a specified event handler.
  // funcs should be functions like this: (take 'change' event as a example)
  // {
  //   change: {
  //     updator () {
  //       return {
  //         attrs: {
  //           checked: this.checked
  //         }
  //       }
  //     },
  //     extra () {
  //       return {
  //         value: this.checked
  //       }
  //     }
  //   }
  // }
  event: {},

  clearAttr: function clearAttr () {
  },

  clearStyle: function clearStyle () {
    this.node.cssText = '';
  }
};

// extend operations.
extend(Component.prototype, operate);

// extend attr and style setters from 'position' and 'flexbox'.
extend(Component.prototype, position$1);
extend(Component.prototype.style, flexbox.style);

// Component which can have no subcomponents.
// This component should not be instantiated directly, since
// it is designed to be used as a base class to extend from.
function Atomic (data) {
  Component.call(this, data);
}

Atomic.prototype = Object.create(Component.prototype);

Atomic.prototype.createChildren = function (data) {
  // do nonthing
  return
};

Atomic.prototype.appendChild = function (data) {
  // do nothing
  return
};

Atomic.prototype.insertBefore = function (child, before) {
  // do nothing
  return
};

Atomic.prototype.removeChild = function (child) {
  // do nothing
  return
};

var methods$2 = {
  // Register a new component with the specified name.
  registerComponent: function registerComponent (name, comp) {
    ComponentManager.registerComponent(name, comp);
  },

  // Register a new api module.
  // If the module already exists, just add methods from the
  // new module to the old one.
  registerApiModule: function registerApiModule (name, module, meta) {
    if (!protocol.apiModule[name]) {
      protocol.apiModule[name] = module;
    }
    else {
      for (var key in module) {
        if (module.hasOwnProperty(key)) {
          protocol.apiModule[name][key] = module[key];
        }
      }
    }
    // register API module's meta info to jsframework
    if (meta) {
      protocol.setApiModuleMeta(meta);
      global.registerModules(protocol.getApiModuleMeta(name), true);
    }
  },

  // Register a new api method for the specified module.
  // opts:
  //  - args: type of arguments the API method takes such
  //    as ['string', 'function']
  registerApi: function registerApi (moduleName, name, method, args) {
    if (typeof method !== 'function') {
      return
    }
    if (!protocol.apiModule[moduleName]) {
      protocol.apiModule[moduleName] = {};
      protocol._meta[moduleName] = [];
    }
    protocol.apiModule[moduleName][name] = method;
    if (!args) {
      return
    }
    // register API meta info to jsframework
    protocol.setApiMeta(moduleName, {
      name: name,
      args: args
    });
    global.registerModules(protocol.getApiModuleMeta(moduleName), true);
  },

  // Register a new weex-bundle-loader.
  registerLoader: function registerLoader$1 (name, loaderFunc) {
    registerLoader(name, loaderFunc);
  }

};

// To install components and plugins.
function install (mod) {
  mod.init(this);
}

function bind$1 (Weex) {
  Weex.install = install.bind(Weex);
  extend(Weex, methods$2);
}

(typeof window === 'undefined') && (window = {ctrl: {}, lib: {}});!window.ctrl && (window.ctrl = {});!window.lib && (window.lib = {});!function(a,b){function c(a){Object.defineProperty(this,"val",{value:a.toString(),enumerable:!0}),this.gt=function(a){return c.compare(this,a)>0},this.gte=function(a){return c.compare(this,a)>=0},this.lt=function(a){return c.compare(this,a)<0},this.lte=function(a){return c.compare(this,a)<=0},this.eq=function(a){return 0===c.compare(this,a)};}b.env=b.env||{},c.prototype.toString=function(){return this.val},c.prototype.valueOf=function(){for(var a=this.val.split("."),b=[],c=0;c<a.length;c++){var d=parseInt(a[c],10);isNaN(d)&&(d=0);var e=d.toString();e.length<5&&(e=Array(6-e.length).join("0")+e),b.push(e),1===b.length&&b.push(".");}return parseFloat(b.join(""))},c.compare=function(a,b){a=a.toString().split("."),b=b.toString().split(".");for(var c=0;c<a.length||c<b.length;c++){var d=parseInt(a[c],10),e=parseInt(b[c],10);if(window.isNaN(d)&&(d=0),window.isNaN(e)&&(e=0),e>d){ return-1; }if(d>e){ return 1 }}return 0},b.version=function(a){return new c(a)};}(window,window.lib||(window.lib={})),function(a,b){b.env=b.env||{};var c=a.location.search.replace(/^\?/,"");if(b.env.params={},c){ for(var d=c.split("&"),e=0;e<d.length;e++){d[e]=d[e].split("=");try{b.env.params[d[e][0]]=decodeURIComponent(d[e][1]);}catch(f){b.env.params[d[e][0]]=d[e][1];}} }}(window,window.lib||(window.lib={})),function(a,b){b.env=b.env||{};var c,d=a.navigator.userAgent;if(c=d.match(/Windows\sPhone\s(?:OS\s)?([\d\.]+)/)){ b.env.os={name:"Windows Phone",isWindowsPhone:!0,version:c[1]}; }else if(d.match(/Safari/)&&(c=d.match(/Android[\s\/]([\d\.]+)/))){ b.env.os={version:c[1]},d.match(/Mobile\s+Safari/)?(b.env.os.name="Android",b.env.os.isAndroid=!0):(b.env.os.name="AndroidPad",b.env.os.isAndroidPad=!0); }else if(c=d.match(/(iPhone|iPad|iPod)/)){var e=c[1];c=d.match(/OS ([\d_\.]+) like Mac OS X/),b.env.os={name:e,isIPhone:"iPhone"===e||"iPod"===e,isIPad:"iPad"===e,isIOS:!0,version:c[1].split("_").join(".")};}else { b.env.os={name:"unknown",version:"0.0.0"}; }b.version&&(b.env.os.version=b.version(b.env.os.version));}(window,window.lib||(window.lib={})),function(a,b){b.env=b.env||{};var c,d=a.navigator.userAgent;(c=d.match(/(?:UCWEB|UCBrowser\/)([\d\.]+)/))?b.env.browser={name:"UC",isUC:!0,version:c[1]}:(c=d.match(/MQQBrowser\/([\d\.]+)/))?b.env.browser={name:"QQ",isQQ:!0,version:c[1]}:(c=d.match(/Firefox\/([\d\.]+)/))?b.env.browser={name:"Firefox",isFirefox:!0,version:c[1]}:(c=d.match(/MSIE\s([\d\.]+)/))||(c=d.match(/IEMobile\/([\d\.]+)/))?(b.env.browser={version:c[1]},d.match(/IEMobile/)?(b.env.browser.name="IEMobile",b.env.browser.isIEMobile=!0):(b.env.browser.name="IE",b.env.browser.isIE=!0),d.match(/Android|iPhone/)&&(b.env.browser.isIELikeWebkit=!0)):(c=d.match(/(?:Chrome|CriOS)\/([\d\.]+)/))?(b.env.browser={name:"Chrome",isChrome:!0,version:c[1]},d.match(/Version\/[\d+\.]+\s*Chrome/)&&(b.env.browser.name="Chrome Webview",b.env.browser.isWebview=!0)):d.match(/Safari/)&&(c=d.match(/Android[\s\/]([\d\.]+)/))?b.env.browser={name:"Android",isAndroid:!0,version:c[1]}:d.match(/iPhone|iPad|iPod/)?d.match(/Safari/)?(c=d.match(/Version\/([\d\.]+)/),b.env.browser={name:"Safari",isSafari:!0,version:c[1]}):(c=d.match(/OS ([\d_\.]+) like Mac OS X/),b.env.browser={name:"iOS Webview",isWebview:!0,version:c[1].replace(/\_/g,".")}):b.env.browser={name:"unknown",version:"0.0.0"},b.version&&(b.env.browser.version=b.version(b.env.browser.version));}(window,window.lib||(window.lib={})),function(a,b){b.env=b.env||{};var c=a.navigator.userAgent;c.match(/Weibo/i)?b.env.thirdapp={appname:"Weibo",isWeibo:!0}:c.match(/MicroMessenger/i)?b.env.thirdapp={appname:"Weixin",isWeixin:!0}:b.env.thirdapp=!1;}(window,window.lib||(window.lib={})),function(a,b){b.env=b.env||{};var c,d,e=a.navigator.userAgent;(d=e.match(/WindVane[\/\s]([\d\.\_]+)/))&&(c=d[1]);var f=!1,g="",h="",i="";(d=e.match(/AliApp\(([A-Z\-]+)\/([\d\.]+)\)/i))&&(f=!0,g=d[1],i=d[2],h=g.indexOf("-PD")>0?b.env.os.isIOS?"iPad":b.env.os.isAndroid?"AndroidPad":b.env.os.name:b.env.os.name),!g&&e.indexOf("TBIOS")>0&&(g="TB"),f?b.env.aliapp={windvane:b.version(c||"0.0.0"),appname:g||"unkown",version:b.version(i||"0.0.0"),platform:h||b.env.os.name}:b.env.aliapp=!1,b.env.taobaoApp=b.env.aliapp;}(window,window.lib||(window.lib={}));

(typeof window === 'undefined') && (window = {ctrl: {}, lib: {}});!window.ctrl && (window.ctrl = {});!window.lib && (window.lib = {});!function(a,b){function c(a){var b={};Object.defineProperty(this,"params",{set:function(a){if("object"==typeof a){for(var c in b){ delete b[c]; }for(var c in a){ b[c]=a[c]; }}},get:function(){return b},enumerable:!0}),Object.defineProperty(this,"search",{set:function(a){if("string"==typeof a){0===a.indexOf("?")&&(a=a.substr(1));var c=a.split("&");for(var d in b){ delete b[d]; }for(var e=0;e<c.length;e++){var f=c[e].split("=");if(void 0!==f[1]&&(f[1]=f[1].toString()),f[0]){ try{b[decodeURIComponent(f[0])]=decodeURIComponent(f[1]);}catch(g){b[f[0]]=f[1];} }}}},get:function(){var a=[];for(var c in b){ if(void 0!==b[c]){ if(""!==b[c]){ try{a.push(encodeURIComponent(c)+"="+encodeURIComponent(b[c]));}catch(d){a.push(c+"="+b[c]);} }else { try{a.push(encodeURIComponent(c));}catch(d){a.push(c);} } } }return a.length?"?"+a.join("&"):""},enumerable:!0});var c;Object.defineProperty(this,"hash",{set:function(a){"string"==typeof a&&(a&&a.indexOf("#")<0&&(a="#"+a),c=a||"");},get:function(){return c},enumerable:!0}),this.set=function(a){a=a||"";var b;if(!(b=a.match(new RegExp("^([a-z0-9-]+:)?[/]{2}(?:([^@/:?]+)(?::([^@/:]+))?@)?([^:/?#]+)(?:[:]([0-9]+))?([/][^?#;]*)?(?:[?]([^#]*))?([#][^?]*)?$","i")))){ throw new Error("Wrong uri scheme."); }this.protocol=b[1]||("object"==typeof location?location.protocol:""),this.username=b[2]||"",this.password=b[3]||"",this.hostname=this.host=b[4],this.port=b[5]||"",this.pathname=b[6]||"/",this.search=b[7]||"",this.hash=b[8]||"",this.origin=this.protocol+"//"+this.hostname;},this.toString=function(){var a=this.protocol+"//";return this.username&&(a+=this.username,this.password&&(a+=":"+this.password),a+="@"),a+=this.host,this.port&&"80"!==this.port&&(a+=":"+this.port),this.pathname&&(a+=this.pathname),this.search&&(a+=this.search),this.hash&&(a+=this.hash),a},a&&this.set(a.toString());}b.httpurl=function(a){return new c(a)};}(window,window.lib||(window.lib={}));

/* eslint-disable */

var isInitialized = false;

// major events supported:
//   panstart
//   panmove
//   panend
//   swipe
//   longpress
// extra events supported:
//   dualtouchstart
//   dualtouch
//   dualtouchend
//   tap
//   doubletap
//   pressend

var doc = window.document;
var docEl = doc.documentElement;
var slice$1 = Array.prototype.slice;
var gestures = {};
var lastTap = null;

/**
 * find the closest common ancestor
 * if there's no one, return null
 *
 * @param  {Element} el1 first element
 * @param  {Element} el2 second element
 * @return {Element}     common ancestor
 */
function getCommonAncestor(el1, el2) {
  var el = el1;
  while (el) {
    if (el.contains(el2) || el == el2) {
      return el
    }
    el = el.parentNode;
  }
  return null
}

/**
 * fire a HTMLEvent
 *
 * @param  {Element} element which element to fire a event on
 * @param  {string}  type    type of event
 * @param  {object}  extra   extra data for the event object
 */
function fireEvent$2(element, type, extra) {
  var event = doc.createEvent('HTMLEvents');
  event.initEvent(type, true, true);

  if (typeof extra === 'object') {
    for (var p in extra) {
      event[p] = extra[p];
    }
  }

  element.dispatchEvent(event);
}

/**
 * calc the transform
 * assume 4 points ABCD on the coordinate system
 * > rotate：angle rotating from AB to CD
 * > scale：scale ratio from AB to CD
 * > translate：translate shift from A to C
 *
 * @param  {number} x1 abscissa of A
 * @param  {number} y1 ordinate of A
 * @param  {number} x2 abscissa of B
 * @param  {number} y2 ordinate of B
 * @param  {number} x3 abscissa of C
 * @param  {number} y3 ordinate of C
 * @param  {number} x4 abscissa of D
 * @param  {number} y4 ordinate of D
 * @return {object}    transform object like
 *   {rotate, scale, translate[2], matrix[3][3]}
 */
function calc(x1, y1, x2, y2, x3, y3, x4, y4) {
  var rotate = Math.atan2(y4 - y3, x4 - x3) - Math.atan2(y2 - y1, x2 - x1);
  var scale = Math.sqrt((Math.pow(y4 - y3, 2)
    + Math.pow(x4 - x3, 2)) / (Math.pow(y2 - y1, 2)
    + Math.pow(x2 - x1, 2)));
  var translate = [
    x3
    - scale * x1 * Math.cos(rotate)
    + scale * y1 * Math.sin(rotate),
    y3
    - scale * y1 * Math.cos(rotate)
    - scale * x1 * Math.sin(rotate)];

  return {
    rotate: rotate,
    scale: scale,
    translate: translate,
    matrix: [
      [scale * Math.cos(rotate), -scale * Math.sin(rotate), translate[0]],
      [scale * Math.sin(rotate), scale * Math.cos(rotate), translate[1]],
      [0, 0, 1]
    ]
  }
}

/**
 * take over the touchstart events. Add new touches to the gestures.
 * If there is no previous records, then bind touchmove, tochend
 * and touchcancel events.
 * new touches initialized with state 'tapping', and within 500 milliseconds
 * if the state is still tapping, then trigger gesture 'press'.
 * If there are two touche points, then the 'dualtouchstart' is triggerd. The
 * node of the touch gesture is their cloest common ancestor.
 *
 * @event
 * @param  {event} event
 */
function touchstartHandler(event) {

  if (Object.keys(gestures).length === 0) {
    docEl.addEventListener('touchmove', touchmoveHandler, false);
    docEl.addEventListener('touchend', touchendHandler, false);
    docEl.addEventListener('touchcancel', touchcancelHandler, false);
  }

  // record every touch
  for (var i = 0; i < event.changedTouches.length; i++) {
    var touch = event.changedTouches[i];
    var touchRecord = {};

    for (var p in touch) {
      touchRecord[p] = touch[p];
    }

    var gesture = {
      startTouch: touchRecord,
      startTime: Date.now(),
      status: 'tapping',
      element: event.srcElement || event.target,
      pressingHandler: setTimeout(function (element, touch) {
        return function () {
          if (gesture.status === 'tapping') {
            gesture.status = 'pressing';

            fireEvent$2(element, 'longpress', {
              // add touch data for weex
              touch: touch,
              touches: event.touches,
              changedTouches: event.changedTouches,
              touchEvent: event
            });
          }

          clearTimeout(gesture.pressingHandler);
          gesture.pressingHandler = null;
        }
      }(event.srcElement || event.target, event.changedTouches[i]), 500)
    };
    gestures[touch.identifier] = gesture;
  }

  if (Object.keys(gestures).length == 2) {
    var elements = [];

    for (var p in gestures) {
      elements.push(gestures[p].element);
    }

    fireEvent$2(getCommonAncestor(elements[0], elements[1]), 'dualtouchstart', {
      touches: slice$1.call(event.touches),
      touchEvent: event
    });
  }
}

/**
 * take over touchmove events, and handle pan and dual related gestures.
 *
 * 1. traverse every touch point：
 * > if 'tapping' and the shift is over 10 pixles, then it's a 'panning'.
 * 2. if there are two touch points, then calc the tranform and trigger
 *   'dualtouch'.
 *
 * @event
 * @param  {event} event
 */
function touchmoveHandler(event) {
  for (var i = 0; i < event.changedTouches.length; i++) {
    var touch = event.changedTouches[i];
    var gesture = gestures[touch.identifier];

    if (!gesture) {
      return
    }

    if (!gesture.lastTouch) {
      gesture.lastTouch = gesture.startTouch;
    }
    if (!gesture.lastTime) {
      gesture.lastTime = gesture.startTime;
    }
    if (!gesture.velocityX) {
      gesture.velocityX = 0;
    }
    if (!gesture.velocityY) {
      gesture.velocityY = 0;
    }
    if (!gesture.duration) {
      gesture.duration = 0;
    }

    var time =  Date.now() - gesture.lastTime;
    var vx = (touch.clientX - gesture.lastTouch.clientX) / time;
    var vy = (touch.clientY - gesture.lastTouch.clientY) / time;

    var RECORD_DURATION = 70;
    if (time > RECORD_DURATION) {
      time = RECORD_DURATION;
    }
    if (gesture.duration + time > RECORD_DURATION) {
      gesture.duration = RECORD_DURATION - time;
    }

    gesture.velocityX = (gesture.velocityX * gesture.duration + vx * time)
      / (gesture.duration + time);
    gesture.velocityY = (gesture.velocityY * gesture.duration + vy * time)
      / (gesture.duration + time);
    gesture.duration += time;

    gesture.lastTouch = {};

    for (var p in touch) {
      gesture.lastTouch[p] = touch[p];
    }
    gesture.lastTime = Date.now();

    var displacementX = touch.clientX - gesture.startTouch.clientX;
    var displacementY = touch.clientY - gesture.startTouch.clientY;
    var distance = Math.sqrt(Math.pow(displacementX, 2)
      + Math.pow(displacementY, 2));
    var isVertical = !(Math.abs(displacementX) > Math.abs(displacementY));
    var direction = isVertical
      ? displacementY >= 0 ? 'down' : 'up'
      : displacementX >= 0 ? 'right' : 'left';

    // magic number 10: moving 10px means pan, not tap
    if ((gesture.status === 'tapping' || gesture.status === 'pressing')
        && distance > 10) {
      gesture.status = 'panning';
      gesture.isVertical = isVertical;
      gesture.direction = direction;

      fireEvent$2(gesture.element, 'panstart', {
        touch: touch,
        touches: event.touches,
        changedTouches: event.changedTouches,
        touchEvent: event,
        isVertical: gesture.isVertical,
        direction: direction
      });
    }

    if (gesture.status === 'panning') {
      gesture.panTime = Date.now();

      fireEvent$2(gesture.element, 'panmove', {
        displacementX: displacementX,
        displacementY: displacementY,
        touch: touch,
        touches: event.touches,
        changedTouches: event.changedTouches,
        touchEvent: event,
        isVertical: gesture.isVertical,
        direction: direction
      });
    }
  }

  if (Object.keys(gestures).length == 2) {
    var position = [];
    var current = [];
    var elements = [];
    var transform;

    for (var i = 0; i < event.touches.length; i++) {
      var touch = event.touches[i];
      var gesture = gestures[touch.identifier];
      position.push([gesture.startTouch.clientX, gesture.startTouch.clientY]);
      current.push([touch.clientX, touch.clientY]);
    }

    for (var p in gestures) {
      elements.push(gestures[p].element);
    }

    transform = calc(
      position[0][0],
      position[0][1],
      position[1][0],
      position[1][1],
      current[0][0],
      current[0][1],
      current[1][0],
      current[1][1]
    );
    fireEvent$2(getCommonAncestor(elements[0], elements[1]), 'dualtouch', {
      transform: transform,
      touches: event.touches,
      touchEvent: event
    });
  }
}

/**
 * handle touchend event
 *
 * 1. if there are tow touch points, then trigger 'dualtouchend'如
 *
 * 2. traverse every touch piont：
 * > if tapping, then trigger 'tap'.
 * If there is a tap 300 milliseconds before, then it's a 'doubletap'.
 * > if padding, then decide to trigger 'panend' or 'swipe'
 * > if pressing, then trigger 'pressend'.
 *
 * 3. remove listeners.
 *
 * @event
 * @param  {event} event
 */
function touchendHandler(event) {

  if (Object.keys(gestures).length == 2) {
    var elements = [];
    for (var p in gestures) {
      elements.push(gestures[p].element);
    }
    fireEvent$2(getCommonAncestor(elements[0], elements[1]), 'dualtouchend', {
      touches: slice$1.call(event.touches),
      touchEvent: event
    });
  }

  for (var i = 0; i < event.changedTouches.length; i++) {
    var touch = event.changedTouches[i];
    var id = touch.identifier;
    var gesture = gestures[id];

    if (!gesture) {
      continue
    }

    if (gesture.pressingHandler) {
      clearTimeout(gesture.pressingHandler);
      gesture.pressingHandler = null;
    }

    if (gesture.status === 'tapping') {
      gesture.timestamp = Date.now();
      fireEvent$2(gesture.element, 'tap', {
        touch: touch,
        touchEvent: event
      });

      if (lastTap && gesture.timestamp - lastTap.timestamp < 300) {
        fireEvent$2(gesture.element, 'doubletap', {
          touch: touch,
          touchEvent: event
        });
      }

      lastTap = gesture;
    }

    if (gesture.status === 'panning') {
      var now = Date.now();
      var duration = now - gesture.startTime;
      var displacementX = touch.clientX - gesture.startTouch.clientX;
      var displacementY = touch.clientY - gesture.startTouch.clientY;

      var velocity = Math.sqrt(gesture.velocityY * gesture.velocityY
        + gesture.velocityX * gesture.velocityX);
      var isSwipe = velocity > 0.5 && (now - gesture.lastTime) < 100;
      var extra = {
        duration: duration,
        isSwipe: isSwipe,
        velocityX: gesture.velocityX,
        velocityY: gesture.velocityY,
        displacementX: displacementX,
        displacementY: displacementY,
        touch: touch,
        touches: event.touches,
        changedTouches: event.changedTouches,
        touchEvent: event,
        isVertical: gesture.isVertical,
        direction: gesture.direction
      };

      fireEvent$2(gesture.element, 'panend', extra);
      if (isSwipe) {
        fireEvent$2(gesture.element, 'swipe', extra);
      }
    }

    if (gesture.status === 'pressing') {
      fireEvent$2(gesture.element, 'pressend', {
        touch: touch,
        touchEvent: event
      });
    }

    delete gestures[id];
  }

  if (Object.keys(gestures).length === 0) {
    docEl.removeEventListener('touchmove', touchmoveHandler, false);
    docEl.removeEventListener('touchend', touchendHandler, false);
    docEl.removeEventListener('touchcancel', touchcancelHandler, false);
  }
}

/**
 * handle touchcancel
 *
 * 1. if there are two touch points, then trigger 'dualtouchend'
 *
 * 2. traverse everty touch point:
 * > if pannnig, then trigger 'panend'
 * > if pressing, then trigger 'pressend'
 *
 * 3. remove listeners
 *
 * @event
 * @param  {event} event
 */
function touchcancelHandler(event) {

  if (Object.keys(gestures).length == 2) {
    var elements = [];
    for (var p in gestures) {
      elements.push(gestures[p].element);
    }
    fireEvent$2(getCommonAncestor(elements[0], elements[1]), 'dualtouchend', {
      touches: slice$1.call(event.touches),
      touchEvent: event
    });
  }

  for (var i = 0; i < event.changedTouches.length; i++) {
    var touch = event.changedTouches[i];
    var id = touch.identifier;
    var gesture = gestures[id];

    if (!gesture) {
      continue
    }

    if (gesture.pressingHandler) {
      clearTimeout(gesture.pressingHandler);
      gesture.pressingHandler = null;
    }

    if (gesture.status === 'panning') {
      fireEvent$2(gesture.element, 'panend', {
        touch: touch,
        touches: event.touches,
        changedTouches: event.changedTouches,
        touchEvent: event
      });
    }
    if (gesture.status === 'pressing') {
      fireEvent$2(gesture.element, 'pressend', {
        touch: touch,
        touchEvent: event
      });
    }
    delete gestures[id];
  }

  if (Object.keys(gestures).length === 0) {
    docEl.removeEventListener('touchmove', touchmoveHandler, false);
    docEl.removeEventListener('touchend', touchendHandler, false);
    docEl.removeEventListener('touchcancel', touchcancelHandler, false);
  }
}

if (!isInitialized) {
  docEl.addEventListener('touchstart', touchstartHandler, false);
  isInitialized = true;
}

/* global lib, WebSocket */

runtime.config.frameworks = frameworks$1;
var framework = subversion.framework;
var transformer = subversion.transformer;

// register framework meta info
global.frameworkVersion = framework;
global.transformerVersion = transformer;

// init frameworks
runtime.config.Document.Listener = ComponentManager;
var globalMethods = runtime.init(runtime.config);

// set global methods
var loop$1 = function ( methodName ) {
  global[methodName] = function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var ret = globalMethods[methodName].apply(globalMethods, args);
    if (ret instanceof Error) {
      console.error(ret.toString());
    }
    return ret
  };
};

for (var methodName in globalMethods) loop$1( methodName );

// gesture
var DEFAULT_DESIGN_WIDTH = 750;
var DEFAULT_ROOT_ID = 'weex';
var DEFAULT_JSONP_CALLBACK_NAME = 'weexJsonpCallback';

global.WXEnvironment = {
  weexVersion: config$3.weexVersion,
  appName: lib.env.aliapp ? lib.env.aliapp.appname : null,
  appVersion: lib.env.aliapp ? lib.env.aliapp.version.val : null,
  platform: 'Web',
  osName: lib.env.browser ? lib.env.browser.name : null,
  osVersion: lib.env.browser ? lib.env.browser.version.val : null,
  deviceWidth: window.innerWidth,
  deviceHeight: window.innerHeight
};

var _weexInstance = {};

function noop () {}

 (function initializeWithUrlParams () {
  // in casperjs the protocol is file.
  if (location.protocol.match(/file/)) {
    return
  }

  var params = lib.httpurl(location.href).params;

  // set global 'debug' config to true if there's a debug flag in current url.
  var debug = params['debug'];
  config$3.debug = debug === true || debug === 'true';

  !config$3.debug && (console.debug = noop);

  // config for the 'downgrade'.
  for (var key in params) {
    if (params.hasOwnProperty(key)) {
      var match = key.match(/^downgrade_(\w+)$/);
      if (!match || !match[1]) {
        continue
      }
      var dk = match[1];
      // downgrade in the config file has the highest priority.
      if (typeof config$3.downgrade[dk] === 'boolean') {
        continue
      }
      var dr = params[("downgrade_" + dk)];
      config$3.downgrade[dk] = dr === true || dr === 'true';
    }
  }
})();

function Weex$1 (options) {
  if (!(this instanceof Weex$1)) {
    return new Weex$1(options)
  }

  // Width of the root container. Default is window.innerWidth.
  this.width = options.width || window.innerWidth;
  this.bundleUrl = options.bundleUrl || location.href;
  this.instanceId = options.appId;
  this.rootId = options.rootId || (DEFAULT_ROOT_ID + getRandom(10));
  this.designWidth = options.designWidth || DEFAULT_DESIGN_WIDTH;
  this.jsonpCallback = options.jsonpCallback || DEFAULT_JSONP_CALLBACK_NAME;
  this.source = options.source;
  this.loader = options.loader;
  this.embed = options.embed;

  // downgrade options.
  var dg = options.downgrade || [];
  dg.forEach(function (comp) {
    config$3.downgrade[comp] = true;
  });

  this.data = options.data;
  this.scale = this.width / this.designWidth;
  receiver.init(this);
  this.sender = new Sender(this);

  _weexInstance[this.instanceId] = this;

  // load bundle.
  load({
    jsonpCallback: this.jsonpCallback,
    source: this.source,
    loader: this.loader
  }, function (err, appCode) {
    if (!err) {
      this.createApp(config$3, appCode);
    }
    else {
      console.error('load bundle err:', err);
    }
  }.bind(this));
}

Weex$1.init = function (options) {
  if (isArray(options)) {
    options.forEach(function (config) {
      new Weex$1(config);
    });
  }
  else if (getType(options) === 'object') {
    new Weex$1(options);
  }
};

Weex$1.getInstance = function (instanceId) {
  return _weexInstance[instanceId]
};

Weex$1.prototype = {

  createApp: function (config, appCode) {
    var root = document.querySelector('#' + this.rootId);
    if (!root) {
      root = document.createElement('div');
      root.id = this.rootId;
      document.body.appendChild(root);
    }

    var instance = window.createInstance(
      this.instanceId,
      appCode,
      {
        bundleUrl: this.bundleUrl,
        debug: config.debug
      },
      this.data
    );

    if (instance instanceof Error) {
      return console.error('[h5-render]', instance)
    }

    // Do not destroy instance before unload, because in most browser
    // press back button to back to this page will not refresh
    // the window and the instance will not be recreated then.
    // window.addEventListener('beforeunload', function (e) {
    // })
  },

  getComponentManager: function () {
    if (!this._componentManager) {
      this._componentManager = ComponentManager.getInstance(this.instanceId);
    }
    return this._componentManager
  },

  getRoot: function () {
    return document.querySelector('#' + this.rootId)
  }
};

Weex$1.stopTheWorld = function (instanceId) {
  if (!instanceId) {
    return Object.keys(_weexInstance).map(function (instanceId) {
      Weex$1.stopTheWorld(instanceId);
    })
  }
  window.destroyInstance(instanceId);
}

// for weex-toolkit.
; (function startRefreshController () {
  if (location.protocol.match(/file/)) {
    return
  }
  if (location.search.indexOf('hot-reload_controller') === -1) {
    return
  }
  if (typeof WebSocket === 'undefined') {
    console.info('auto refresh need WebSocket support');
    return
  }
  var host = location.hostname;
  var port = 8082;
  var client = new WebSocket('ws://' + host + ':' + port + '/',
    'echo-protocol'
  );
  client.onerror = function () {
    console.log('refresh controller websocket connection error');
  };
  client.onmessage = function (e) {
    console.log('Received: \'' + e.data + '\'');
    if (e.data === 'refresh') {
      location.reload();
    }
  };
})();

bind$1(Weex$1);

extend(Weex$1, {
  Component: Component,
  Atomic: Atomic,
  ComponentManager: ComponentManager,
  utils: utils,
  config: config$3
});

global.weex = Weex$1;

function init$6 (Weex) {
  var Component = Weex.Component;

  function RootComponent (data, nodeType) {
    var id = data.rootId + '-root';
    var ct = document.querySelector(("#" + (data.rootId)));
    var cm = ComponentManager.getInstance(data.instanceId);

    this.data = data;

    ct.classList.add('weex-container');
    if (!data.style.height && !data.style.flex) {
      // if no specification on root's height, then
      // fill root container with the root element by full scale.
      data.style.flex = 1;
    }

    // The root component should be implemented as a div component, as the scrollable
    // components have performance issue compare to the original body scroll.
    if (!nodeType) {
      console.warn("[h5-render] no nodeType is specified, construct Root use 'droot' by default.");
      nodeType = 'droot';
    }
    else if (config$3.validRoots.indexOf(nodeType) === -1) {
      console.warn(("[h5-render] the root component type '" + nodeType + "' is not one of\nthe types in [" + (config$3.validRoots) + "] list. It is auto downgraded\nto 'droot'."));
      nodeType = 'droot';
    }
    else if (config$3.downgrade.root) {
      console.warn("[h5-render] the root is downgrade to 'droot' due to the downgrade\nconfiguration of weex.");
      nodeType = 'droot';
    }

    data.type = nodeType;
    var cmp = cm.createElement(data);
    cmp.node.id = id;
    return cmp
  }

  RootComponent.prototype = Object.create(Component.prototype);

  Weex.registerComponent('root', RootComponent);
}

var root = { init: init$6 };

function init$7 (Weex) {
  var Component = Weex.Component;

  function Div (data, nodeType) {
    Component.call(this, data, nodeType);
    this.node.classList.add('weex-container');
  }
  Div.prototype = Object.create(Component.prototype);

  Weex.registerComponent('div', Div);
  Weex.registerComponent('container', Div);
}

var div = { init: init$7 };

var DEFAULT_LOAD_MORE_OFFSET = 0;
var Component$1;

var proto$1 = {
  create: function create (nodeType) {
    var node = document.createElement(nodeType || 'div');
    node.classList.add('weex-droot');
    node.classList.add('weex-container');
    return node
  },

  bindEvents: function bindEvents (evts) {
    Component$1.prototype.bindEvents.call(this, evts);
    window.addEventListener('scroll', function (e) {
      // fire loadmore event.
      var body = document.body;
      var leftDist = body.scrollHeight - window.innerHeight - body.scrollTop;
      if (leftDist <= this.loadmoreoffset && this.isAvailableToFireloadmore) {
        this.isAvailableToFireloadmore = false;
        this.dispatchEvent('loadmore');
      }
      else if (leftDist > this.loadmoreoffset && !this.isAvailableToFireloadmore) {
        this.isAvailableToFireloadmore = true;
      }
    }.bind(this));
  }
};

var attr = {
  loadmoreoffset: function loadmoreoffset (val) {
    var value = parseFloat(val);
    if (value < 0 || isNaN(value)) {
      console.warn(("[h5-render] invalid loadmoreoffset: " + val));
      return
    }
    this.loadmoreoffset = value;
  }
};

function init$8 (Weex) {
  Component$1 = Weex.Component;
  var extend = Weex.utils.extend;

  function Droot (data, nodeType) {
    if (data.ref !== '_root') {
      return console.warn('[h5-render] droot can only be used as a downgraded root.')
    }
    this.loadmoreoffset = DEFAULT_LOAD_MORE_OFFSET;
    this.isAvailableToFireloadmore = true;
    Component$1.call(this, data, nodeType);
  }
  Droot.prototype = Object.create(Component$1.prototype);
  extend(Droot.prototype, proto$1);
  extend(Droot.prototype, { attr: attr });

  Weex.registerComponent('droot', Droot);
}

var droot = { init: init$8 };

__$styleInject(".weex-img {\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n  background-position: 50%;\n}",undefined);

/* global lib */

var DEFAULT_SIZE = 200;
var RESIZE_MODES = ['stretch', 'cover', 'contain'];
var DEFAULT_RESIZE_MODE = 'stretch';

/**
 * resize: 'cover' | 'contain' | 'stretch', default is 'stretch'
 * src: url
 * placeholder / place-holder: url
 */
var proto$2 = {
  create: function create () {
    var node = document.createElement('div');
    node.classList.add('weex-img');
    node.classList.add('weex-element');
    return node
  },

  clearAttr: function clearAttr () {
    this.src = '';
    this.node.style.backgroundImage = '';
  }
};

var attr$1 = {
  src: function (val) {
    if (!this.src) {
      this.src = lib.img.defaultSrc;
      this.node.style.backgroundImage = 'url(' + this.src + ')';
    }
    this.enableLazyload(val);
  },

  placeholder: function (val) {
    this.node.dataset.placeholder = val;
  },

  // alias for placeholder (place-holder)
  placeHolder: function (val) {
    return this.attr.placeholder.call(this, val)
  },

  resize: function (val) {
    if (RESIZE_MODES.indexOf(val) === -1) {
      val = 'stretch';
    }
    this.node.style.backgroundSize = val === 'stretch'
                                    ? '100% 100%'
                                    : val;
  }
};

var style$1 = {
  width: function (val) {
    val = parseFloat(val) * this.data.scale;
    if (val < 0 || isNaN(val)) {
      val = DEFAULT_SIZE;
    }
    this.node.style.width = val + 'px';
  },

  height: function (val) {
    val = parseFloat(val) * this.data.scale;
    if (val < 0 || isNaN(val)) {
      val = DEFAULT_SIZE;
    }
    this.node.style.height = val + 'px';
  }
};

function init$9 (Weex) {
  var Atomic = Weex.Atomic;
  var extend = Weex.utils.extend;

  function Image (data) {
    this.resize = DEFAULT_RESIZE_MODE;
    Atomic.call(this, data);
  }
  Image.prototype = Object.create(Atomic.prototype);
  extend(Image.prototype, proto$2);
  extend(Image.prototype, { attr: attr$1 });
  extend(Image.prototype, {
    style: extend(Object.create(Atomic.prototype.style), style$1)
  });

  Weex.registerComponent('image', Image);
}

var Image$1 = { init: init$9 };

var DEFAULT_FONT_SIZE = 32;
var DEFAULT_TEXT_OVERFLOW = 'ellipsis';

var proto$3 = {
  create: function create () {
    var node = document.createElement('div');
    node.classList.add('weex-container');
    node.style.fontSize = DEFAULT_FONT_SIZE * this.data.scale + 'px';
    this.textNode = document.createElement('span');
    // Give the developers the ability to control space
    // and line-breakers.
    this.textNode.style.whiteSpace = 'pre-wrap';
    this.textNode.style.wordWrap = 'break-word';
    this.textNode.style.display = '-webkit-box';
    this.textNode.style.webkitBoxOrient = 'vertical';
    this.style.lines.call(this, this.data.style.lines);
    node.appendChild(this.textNode);
    return node
  },

  clearAttr: function clearAttr () {
    this.node.firstChild.textContent = '';
  }
};

var attr$2 = {
  value: function (value) {
    var span = this.node.firstChild;
    span.innerHTML = '';
    if (value == null || value === '') {
      return
    }
    span.textContent = value;
    /**
     * Developers are supposed to have the ability to break text
     * lines manually. Using ``&nbsp;`` to replace text space is
     * not compatible with the ``-webkit-line-clamp``. Therefor
     * we use ``white-space: no-wrap`` instead (instead of the
     * code bellow).

      const frag = document.createDocumentFragment()
        text.split(' ').forEach(function(str) {
          const textNode = document.createTextNode(str)
          const space = document.createElement('i')
          space.innerHTML = '&nbsp;'
          frag.appendChild(space)
          frag.appendChild(textNode)
        })
        frag.removeChild(frag.firstChild)
        span.appendChild(document.createElement('br'))
        span.appendChild(frag)
      })
      span.removeChild(span.firstChild)
     */
  }
};

var style$2 = {
  lines: function (val) {
    val = parseInt(val);
    if (isNaN(val)) {
      return
    }
    if (val <= 0) {
      this.textNode.style.textOverflow = '';
      this.textNode.style.overflow = 'visible';
      this.textNode.style.webkitLineClamp = '';
    }
    else {
      var style = this.data ? this.data.style : null;
      this.textNode.style.overflow = 'hidden';
      this.textNode.style.textOverflow = style
        ? style.textOverflow
        : DEFAULT_TEXT_OVERFLOW;
      this.textNode.style.webkitLineClamp = val;
    }
  },

  textOverflow: function (val) {
    this.textNode.style.textOverflow = val;
  }
};

function init$10 (Weex) {
  var Atomic = Weex.Atomic;
  var extend = Weex.utils.extend;

  // attr
  //  - value: text content.
  // style
  //  - lines: maximum lines of the text.
  function Text (data) {
    Atomic.call(this, data);
  }
  Text.prototype = Object.create(Atomic.prototype);
  extend(Text.prototype, proto$3);
  extend(Text.prototype, { attr: attr$2 });
  extend(Text.prototype, {
    style: extend(Object.create(Atomic.prototype.style), style$2)
  });

  Weex.registerComponent('text', Text);
}

var Text = { init: init$10 };

__$styleInject(".scrollable-wrap {\n  display: block;\n  overflow: hidden;\n}\n\n.scrollable-element.horizontal {\n  -webkit-box-orient: horizontal;\n  -webkit-flex-direction: row;\n  flex-direction: row;\n}\n.scrollable-element.vertical {\n  -webkit-box-orient: vertical;\n  -webkit-flex-direction: column;\n  flex-direction: column;\n}\n",undefined);

/* global lib: true */

/**
 * transfer Quadratic Bezier Curve to Cubic Bezier Curve
 *
 * @param  {number} a abscissa of p1
 * @param  {number} b ordinate of p1
 * @return {Array} parameter matrix for cubic bezier curve
 *   like [[p1x, p1y], [p2x, p2y]]
 */
function quadratic2cubicBezier (a, b) {
  return [
    [
      (a / 3 + (a + b) / 3 - a) / (b - a),
      (a * a / 3 + a * b * 2 / 3 - a * a) / (b * b - a * a)
    ], [
      (b / 3 + (a + b) / 3 - a) / (b - a),
      (b * b / 3 + a * b * 2 / 3 - a * a) / (b * b - a * a)
    ]
  ]
}

/**
 * derive position data from knowing motion parameters
 * base on Newton's second law: s = vt + at^2/2
 *
 * @param {object} config object of { v, a, s, t }
 *   - v: initial velocity
 *   - a: accelerate speed
 *   - t: time
 *   - s: shifting
 */
function Motion (config) {
  this.v = config.v || 0;
  this.a = config.a || 0;

  if (typeof config.t !== 'undefined') {
    this.t = config.t;
  }

  if (typeof config.s !== 'undefined') {
    this.s = config.s;
  }

  // derive time from shifting
  if (typeof this.t === 'undefined') {
    if (typeof this.s === 'undefined') {
      this.t = -this.v / this.a;
    }
    else {
      var t1 = (Math.sqrt(this.v * this.v + 2 * this.a * this.s) - this.v)
        / this.a;
      var t2 = (-Math.sqrt(this.v * this.v + 2 * this.a * this.s) - this.v)
        / this.a;
      this.t = Math.min(t1, t2);
    }
  }

  // derive shifting from time
  if (typeof this.s === 'undefined') {
    this.s = this.a * this.t * this.t / 2 + this.v * this.t;
  }
}

/**
 * derive cubic bezier parameters from motion parameters
 * @return {Array} parameter matrix for cubic bezier curve
 *   like [[p1x, p1y], [p2x, p2y]]
 */
Motion.prototype.generateCubicBezier = function () {
  return quadratic2cubicBezier(
    this.v / this.a, this.t + this.v / this.a
  )
};

!lib && (lib = {});
lib.motion = Motion;

/* eslint-disable */

var doc$1 = window.document;
var ua$1 = window.navigator.userAgent;
var scrollObjs = {};
var plugins = {};
var dpr = window.dpr
  || (!!window.navigator.userAgent.match(/iPhone|iPad|iPod/)
    ? document.documentElement.clientWidth / window.screen.availWidth
    : 1);
var inertiaCoefficient = {
  normal: [2 * dpr, 0.0015 * dpr],
  slow: [1.5 * dpr, 0.003 * dpr],
  veryslow: [1.5 * dpr, 0.005 * dpr]
};
var Firefox = !!ua$1.match(/Firefox/i);
var IEMobile = !!ua$1.match(/IEMobile/i);
var cssPrefix$1 = Firefox ? '-moz-' : IEMobile ? '-ms-' : '-webkit-';
var stylePrefix$1 = Firefox ? 'Moz' : IEMobile ? 'ms' : 'webkit';

function debugLog() {
  if (lib.scroll.outputDebugLog) {
    console.log.apply(console, arguments);
  }
}

function getBoundingClientRect(el) {
  var rect = el.getBoundingClientRect();
  if (!rect) {
    rect = {};
    rect.width = el.offsetWidth;
    rect.height = el.offsetHeight;

    rect.left = el.offsetLeft;
    rect.top = el.offsetTop;
    var parent = el.offsetParent;
    while (parent) {
      rect.left += parent.offsetLeft;
      rect.top += parent.offsetTop;
      parent = parent.offsetParent;
    }

    rect.right = rect.left + rect.width;
    rect.bottom = rect.top + rect.height;
  }
  return rect
}

function getMinScrollOffset(scrollObj) {
  return 0 - scrollObj.options[scrollObj.axis + 'PaddingTop']
}

function getMaxScrollOffset(scrollObj) {
  var rect = getBoundingClientRect(scrollObj.element);
  var pRect = getBoundingClientRect(scrollObj.viewport);
  var min = getMinScrollOffset(scrollObj);
  if (scrollObj.axis === 'y') {
    var max = 0 - rect.height + pRect.height;
  } else {
    var max = 0 - rect.width + pRect.width;
  }
  return Math.min(
    max + scrollObj.options[scrollObj.axis + 'PaddingBottom'],
    min
  )
}

function getBoundaryOffset(scrollObj, offset) {
  if (offset > scrollObj.minScrollOffset) {
    return offset - scrollObj.minScrollOffset
  }
  if (offset < scrollObj.maxScrollOffset) {
    return offset - scrollObj.maxScrollOffset
  }
}

function touchBoundary(scrollObj, offset) {
  if (offset > scrollObj.minScrollOffset) {
    offset = scrollObj.minScrollOffset;
  } else if (offset < scrollObj.maxScrollOffset) {
    offset = scrollObj.maxScrollOffset;
  }
  return offset
}

function fireEvent$3(scrollObj, eventName, extra) {
  debugLog(scrollObj.element.scrollId, eventName, extra);
  var event = doc$1.createEvent('HTMLEvents');
  event.initEvent(eventName, false, true);
  event.scrollObj = scrollObj;
  if (extra) {
    for (var key in extra) {
      event[key] = extra[key];
    }
  }
  scrollObj.element.dispatchEvent(event);
  scrollObj.viewport.dispatchEvent(event);
}

function getTransformOffset(scrollObj) {
  var offset = {x: 0, y: 0};
  var transform = getComputedStyle(scrollObj.element)
    [stylePrefix$1 + 'Transform'];
  var matched;
  var reg1 = new RegExp('^matrix3d'
    + '\\((?:[-\\d.]+,\\s*){12}([-\\d.]+),'
    + '\\s*([-\\d.]+)(?:,\\s*[-\\d.]+){2}\\)');
  var reg2 = new RegExp('^matrix'
    + '\\((?:[-\\d.]+,\\s*){4}([-\\d.]+),\\s*([-\\d.]+)\\)$');
  if (transform !== 'none') {
    if ((matched = transform.match(reg1) ||
        transform.match(reg2))) {
      offset.x = parseFloat(matched[1]) || 0;
      offset.y = parseFloat(matched[2]) || 0;
    }
  }

  return offset
}

var CSSMatrix = IEMobile ? 'MSCSSMatrix' : 'WebKitCSSMatrix';
var has3d = !!Firefox
  || CSSMatrix in window
  && 'm11' in new window[CSSMatrix]();
function getTranslate(x, y) {
  x = parseFloat(x);
  y = parseFloat(y);

  if (x != 0) {
    x += 'px';
  }

  if (y != 0) {
    y += 'px';
  }

  if (has3d) {
    return 'translate3d(' + x + ', ' + y + ', 0)'
  }
  return 'translate(' + x + ', ' + y + ')'
}

function setTransitionStyle(scrollObj, duration, timingFunction) {
  if (duration === '' && timingFunction === '') {
    scrollObj.element.style[stylePrefix$1 + 'Transition'] = '';
  } else {
    scrollObj.element.style[stylePrefix$1 + 'Transition']
      = cssPrefix$1 + 'transform ' + duration + ' ' + timingFunction + ' 0s';
  }
}

function setTransformStyle(scrollObj, offset) {
  var x = 0;
  var y = 0;
  if (typeof offset === 'object') {
    x = offset.x;
    y = offset.y;
  } else {
    if (scrollObj.axis === 'y') {
      y = offset;
    } else {
      x = offset;
    }
  }
  scrollObj.element.style[stylePrefix$1 + 'Transform'] = getTranslate(x, y);
}

var panning = false;
doc$1.addEventListener('touchmove', function (e) {
  if (panning) {
    e.preventDefault();
    return false
  }
  return true
}, false);

function Scroll(element, options) {
  var this$1 = this;

  var that = this;

  options = options || {};
  options.noBounce = !!options.noBounce;
  options.padding = options.padding || {};

  if (options.isPrevent == null) {
    options.isPrevent = true;
  } else {
    options.isPrevent = !!options.isPrevent;
  }

  if (options.isFixScrollendClick == null) {
    options.isFixScrollendClick = true;
  } else {
    options.isFixScrollendClick = !!options.isFixScrollendClick;
  }

  if (options.padding) {
    options.yPaddingTop = -options.padding.top || 0;
    options.yPaddingBottom = -options.padding.bottom || 0;
    options.xPaddingTop = -options.padding.left || 0;
    options.xPaddingBottom = -options.padding.right || 0;
  } else {
    options.yPaddingTop = 0;
    options.yPaddingBottom = 0;
    options.xPaddingTop = 0;
    options.xPaddingBottom = 0;
  }

  options.direction = options.direction || 'y';
  options.inertia = options.inertia || 'normal';

  this.options = options;
  that.axis = options.direction;
  this.element = element;
  this.viewport = element.parentNode;
  this.plugins = {};

  this.element.scrollId = setTimeout(function () {
    scrollObjs[that.element.scrollId + ''] = that;
  }, 1);

  this.viewport.addEventListener('touchstart', touchstartHandler, false);
  this.viewport.addEventListener('touchend', touchendHandler, false);
  this.viewport.addEventListener('touchcancel', touchendHandler, false);
  this.viewport.addEventListener('panstart', panstartHandler, false);
  this.viewport.addEventListener('panmove', panHandler, false);
  this.viewport.addEventListener('panend', panendHandler, false);

  if (options.isPrevent) {
    this.viewport.addEventListener('touchstart', function (e) {
      panning = true;
    }, false);
    that.viewport.addEventListener('touchend', function (e) {
      panning = false;
    }, false);
  }

  // if (options.isPrevent) {
  //   var d = this.axis === 'y'?'vertical':'horizontal'
  //   this.viewport.addEventListener(d + 'panstart', function (e) {
  //     panning = true
  //   }, false)
  //   that.viewport.addEventListener('panend', function (e) {
  //     panning = false
  //   }, false)
  // }

  if (options.isFixScrollendClick) {
    var preventScrollendClick;
    var fixScrollendClickTimeoutId;

    this.viewport.addEventListener('scrolling', function () {
      preventScrollendClick = true;
      fixScrollendClickTimeoutId && clearTimeout(fixScrollendClickTimeoutId);
      fixScrollendClickTimeoutId = setTimeout(function (e) {
        preventScrollendClick = false;
      }, 400);
    }, false);

    function preventScrollendClickHandler(e) {
      if (preventScrollendClick || isScrolling) {
        e.preventDefault();
        e.stopPropagation();
        return false
      }
      return true
    }

    function fireNiceTapEventHandler(e) {
      if (!preventScrollendClick && !isScrolling) {
        setTimeout(function () {
          var niceTapEvent = document.createEvent('HTMLEvents');
          niceTapEvent.initEvent('niceclick', true, true);
          e.target.dispatchEvent(niceTapEvent);
        }, 300);
      }
    }

    this.viewport.addEventListener('click', preventScrollendClickHandler);
    this.viewport.addEventListener('tap', fireNiceTapEventHandler);
  }

  function setTransitionEndHandler(h, t) {
    if (options.useFrameAnimation) {
      return
    }
    transitionEndHandler = null;
    clearTimeout(transitionEndTimeoutId);

    transitionEndTimeoutId = setTimeout(function () {
      if (transitionEndHandler) {
        transitionEndHandler = null;
        lib.animation.requestFrame(h);
      }
    }, (t || 400));

    transitionEndHandler = h;
  }

  if (options.useFrameAnimation) {
    var scrollAnimation;

    Object.defineProperty(this, 'animation', {
      get: function () {
        return scrollAnimation
      }
    });
  } else {
    var transitionEndHandler;
    var transitionEndTimeoutId = 0;

    element.addEventListener(
        Firefox
          ? 'transitionend'
          : (stylePrefix$1 + 'TransitionEnd'), function (e) {
      if (transitionEndHandler) {
        var handler = transitionEndHandler;

        transitionEndHandler = null;
        clearTimeout(transitionEndTimeoutId);

        lib.animation.requestFrame(function () {
          handler(e);
        });
      }
    }, false);
  }

  var panFixRatio;
  var isScrolling;
  var isFlickScrolling;
  var cancelScrollEnd;

  Object.defineProperty(this, 'isScrolling', {
    get: function () {
      return !!isScrolling
    }
  });

  function isEnabled(e) {
    if (!that.enabled) {
      return false
    }

    if (typeof e.isVertical != 'undefined') {
      if (that.axis === 'y' && e.isVertical
          || that.axis === 'x' && !e.isVertical) {
        // gesture in same direction, stop bubbling up
        e.stopPropagation();
      } else {
        // gesture in different direction, bubbling up
        // to the top, without any other process
        return false
      }
    }

    return true
  }

  function touchstartHandler(e) {
    if (!isEnabled(e)) {
      return
    }

    if (isScrolling) {
      scrollEnd();
    }

    if (options.useFrameAnimation) {
      scrollAnimation && scrollAnimation.stop();
      scrollAnimation = null;
    } else {
      var transform = getTransformOffset(that);
      setTransformStyle(that, transform);
      setTransitionStyle(that, '', '');
      transitionEndHandler = null;
      clearTimeout(transitionEndTimeoutId);
    }
  }

  function touchendHandler(e) {
    if (!isEnabled(e)) {
      return
    }

    var s0 = getTransformOffset(that)[that.axis];
    var boundaryOffset = getBoundaryOffset(that, s0);

    if (boundaryOffset) {
      // dragging out of boundray, bounce is needed
      var s1 = touchBoundary(that, s0);

      if (options.useFrameAnimation) {
        // frame
        var _s = s1 - s0;
        scrollAnimation = new lib.animation(
            400,
            lib.cubicbezier.ease,
            0,
            function (i1, i2) {
          var offset = (s0 + _s * i2).toFixed(2);
          setTransformStyle(that, offset);
          fireEvent$3(that, 'scrolling');
        });
        scrollAnimation.onend(scrollEnd);
        scrollAnimation.play();
      } else {
        // css
        var offset =  s1.toFixed(0);
        setTransitionEndHandler(scrollEnd, 400);
        setTransitionStyle(that, '0.4s', 'ease');
        setTransformStyle(that, offset);

        lib.animation.requestFrame(function doScroll() {
          if (isScrolling && that.enabled) {
            fireEvent$3(that, 'scrolling');
            lib.animation.requestFrame(doScroll);
          }
        });
      }

      if (boundaryOffset > 0) {
        fireEvent$3(that, that.axis === 'y' ? 'pulldownend' : 'pullrightend');
      } else if (boundaryOffset < 0) {
        fireEvent$3(that, that.axis === 'y' ? 'pullupend' : 'pullleftend');
      }
    } else if (isScrolling) {
      // without exceeding the boundary, just end it
      scrollEnd();
    }
  }

  var lastDisplacement;
  function panstartHandler(e) {
    if (!isEnabled(e)) {
      return
    }

    that.transformOffset = getTransformOffset(that);
    that.minScrollOffset = getMinScrollOffset(that);
    that.maxScrollOffset = getMaxScrollOffset(that);
    panFixRatio = 2.5;
    cancelScrollEnd = true;
    isScrolling = true;
    isFlickScrolling = false;
    fireEvent$3(that, 'scrollstart');

    lastDisplacement = e['displacement' + that.axis.toUpperCase()];
  }


  function panHandler(e) {
    if (!isEnabled(e)) {
      return
    }

    // finger move less than 5 px. just ignore that.
    var displacement = e['displacement' + that.axis.toUpperCase()];
    if (Math.abs(displacement - lastDisplacement) < 5) {
      e.stopPropagation();
      return
    }
    lastDisplacement = displacement;

    var offset = that.transformOffset[that.axis] + displacement;
    if (offset > that.minScrollOffset) {
      offset = that.minScrollOffset
        + (offset - that.minScrollOffset) / panFixRatio;
      panFixRatio *= 1.003;
    } else if (offset < that.maxScrollOffset) {
      offset = that.maxScrollOffset
        - (that.maxScrollOffset - offset) / panFixRatio;
      panFixRatio *= 1.003;
    }
    if (panFixRatio > 4) {
      panFixRatio = 4;
    }

    // tell whether or not reach the fringe
    var boundaryOffset = getBoundaryOffset(that, offset);
    if (boundaryOffset) {
      fireEvent$3(
          that,
          boundaryOffset > 0
          ? (that.axis === 'y' ? 'pulldown' : 'pullright')
          : (that.axis === 'y' ? 'pullup' : 'pullleft'), {
        boundaryOffset: Math.abs(boundaryOffset)
      });
      if (that.options.noBounce) {
        offset = touchBoundary(that, offset);
      }
    }

    setTransformStyle(that, offset.toFixed(2));
    fireEvent$3(that, 'scrolling');
  }

  function panendHandler(e) {
    if (!isEnabled(e)) {
      return
    }

    if (e.isSwipe) {
      flickHandler(e);
    }
  }

  function flickHandler(e) {
    cancelScrollEnd = true;

    var v0, a0, t0, s0, s, motion0;
    var v1, a1, t1, s1, motion1,sign;
    var v2, a2, t2, s2, motion2, ft;

    s0 = getTransformOffset(that)[that.axis];
    var boundaryOffset0 = getBoundaryOffset(that, s0);
    if (!boundaryOffset0) {
      // when fingers left the range of screen, let touch end handler
      // to deal with it.
      // when fingers left the screen, but still in the range of
      // screen, calculate the intertia.
      v0 = e['velocity' + that.axis.toUpperCase()];

      var maxV = 2;
      var friction = 0.0015;
      if (options.inertia && inertiaCoefficient[options.inertia]) {
        maxV = inertiaCoefficient[options.inertia][0];
        friction = inertiaCoefficient[options.inertia][1];
      }

      if (v0 > maxV) {
        v0 = maxV;
      }
      if (v0 < -maxV) {
        v0 = -maxV;
      }
      a0 = friction * (v0 / Math.abs(v0));
      motion0 = new lib.motion({
        v: v0,
        a: -a0
      });
      t0 = motion0.t;
      s = s0 + motion0.s;

      var boundaryOffset1 = getBoundaryOffset(that, s);
      if (boundaryOffset1) {
        debugLog('inertial calculation has exceeded the boundary',
          boundaryOffset1);

        v1 = v0;
        a1 = a0;
        if (boundaryOffset1 > 0) {
          s1 = that.minScrollOffset;
          sign = 1;
        } else {
          s1 = that.maxScrollOffset;
          sign = -1;
        }
        motion1 = new lib.motion({
          v: sign * v1,
          a: -sign * a1,
          s: Math.abs(s1 - s0)
        });
        t1 = motion1.t;
        var timeFunction1 = motion1.generateCubicBezier();

        v2 = v1 - a1 * t1;
        a2 = 0.03 * (v2 / Math.abs(v2));
        motion2 = new lib.motion({
          v: v2,
          a: -a2
        });
        t2 = motion2.t;
        s2 = s1 + motion2.s;
        var timeFunction2 = motion2.generateCubicBezier();

        if (options.noBounce) {
          debugLog('no bounce effect');

          if (s0 !== s1) {
            if (options.useFrameAnimation) {
              // frame
              var _s = s1 - s0;
              var bezier = lib.cubicbezier(
                timeFunction1[0][0],
                timeFunction1[0][1],
                timeFunction1[1][0],
                timeFunction1[1][1]
              );
              scrollAnimation = new lib.animation(
                  t1.toFixed(0),
                  bezier,
                  0,
                  function (i1, i2) {
                var offset = (s0 + _s * i2);
                getTransformOffset(that, offset.toFixed(2));
                fireEvent$3(that, 'scrolling', {
                  afterFlick: true
                });
              });

              scrollAnimation.onend(scrollEnd);

              scrollAnimation.play();
            } else {
              // css
              var offset = s1.toFixed(0);
              setTransitionEndHandler(
                scrollEnd,
                (t1 / 1000).toFixed(2) * 1000
              );
              setTransitionStyle(
                that,
                (t1 / 1000).toFixed(2) + 's',
                'cubic-bezier(' + timeFunction1 + ')'
              );
              setTransformStyle(that, offset);
            }
          } else {
            scrollEnd();
          }
        } else if (s0 !== s2) {
          debugLog(
            'scroll for inertia',
            's=' + s2.toFixed(0),
            't=' + ((t1 + t2) / 1000).toFixed(2)
          );

          if (options.useFrameAnimation) {
            var _s = s2 - s0;
            var bezier = lib.cubicbezier.easeOut;
            scrollAnimation = new lib.animation(
                (t1 + t2).toFixed(0),
                bezier,
                0,
                function (i1, i2) {
              var offset = s0 + _s * i2;
              setTransformStyle(that, offset.toFixed(2));
              fireEvent$3(that, 'scrolling',{
                afterFlick: true
              });
            });

            scrollAnimation.onend(function () {
              if (!that.enabled) {
                return
              }

              var _s = s1 - s2;
              var bezier = lib.cubicbezier.ease;
              scrollAnimation = new lib.animation(
                  400,
                  bezier,
                  0,
                  function (i1, i2) {
                var offset = s2 + _s * i2;
                setTransformStyle(that, offset.toFixed(2));
                fireEvent$3(that, 'scrolling',{
                  afterFlick: true
                });
              });

              scrollAnimation.onend(scrollEnd);

              scrollAnimation.play();
            });

            scrollAnimation.play();
          } else {
            var offset = s2.toFixed(0);
            setTransitionEndHandler(function (e) {
              if (!that.enabled) {
                return
              }

              debugLog('inertial bounce',
                's=' + s1.toFixed(0),
                't=400'
              );

              if (s2 !== s1) {
                var offset = s1.toFixed(0);
                setTransitionStyle(that, '0.4s', 'ease');
                setTransformStyle(that, offset);
                setTransitionEndHandler(scrollEnd, 400);
              } else {
                scrollEnd();
              }
            }, ((t1 + t2) / 1000).toFixed(2) * 1000);

            setTransitionStyle(
              that,
              ((t1 + t2) / 1000).toFixed(2) + 's',
              'ease-out'
            );
            setTransformStyle(that, offset);
          }
        } else {
          scrollEnd();
        }
      } else {
        debugLog('inertial calculation hasn\'t exceeded the boundary');
        var timeFunction = motion0.generateCubicBezier();

        if (options.useFrameAnimation) {
          // frame
          var _s = s - s0;
          var bezier = lib.cubicbezier(
            timeFunction[0][0],
            timeFunction[0][1],
            timeFunction[1][0],
            timeFunction[1][1]
          );
          scrollAnimation = new lib.animation(
              t0.toFixed(0),
              bezier,
              0,
              function (i1, i2) {
            var offset = (s0 + _s * i2).toFixed(2);
            setTransformStyle(that, offset);
            fireEvent$3(that, 'scrolling',{
              afterFlick: true
            });
          });

          scrollAnimation.onend(scrollEnd);

          scrollAnimation.play();
        } else {
          // css
          var offset = s.toFixed(0);
          setTransitionEndHandler(scrollEnd, (t0 / 1000).toFixed(2) * 1000);
          setTransitionStyle(
            that,
            (t0 / 1000).toFixed(2) + 's',
            'cubic-bezier(' + timeFunction + ')'
          );
          setTransformStyle(that, offset);
        }
      }


      isFlickScrolling = true;
      if (!options.useFrameAnimation) {
        lib.animation.requestFrame(function doScroll() {
          if (isScrolling && isFlickScrolling && that.enabled) {
            fireEvent$3(that, 'scrolling', {
              afterFlick: true
            });
            lib.animation.requestFrame(doScroll);
          }
        });
      }
    }
  }

  function scrollEnd() {
    if (!that.enabled) {
      return
    }

    cancelScrollEnd = false;

    setTimeout(function () {
      if (!cancelScrollEnd && isScrolling) {
        isScrolling = false;
        isFlickScrolling = false;

        if (options.useFrameAnimation) {
          scrollAnimation && scrollAnimation.stop();
          scrollAnimation = null;
        } else {
          setTransitionStyle(that, '', '');
        }
        fireEvent$3(that, 'scrollend');
      }
    }, 50);
  }

  var proto = {
    init: function () {
      this.enable();
      this.refresh();
      this.scrollTo(0);
      return this
    },

    enable: function () {
      this.enabled = true;
      return this
    },

    disable: function () {
      var el = this.element;
      this.enabled = false;

      if (this.options.useFrameAnimation) {
        scrollAnimation && scrollAnimation.stop();
      } else {
        lib.animation.requestFrame(function () {
          el.style[stylePrefix$1 + 'Transform']
            = getComputedStyle(el)[stylePrefix$1 + 'Transform'];
        });
      }

      return this
    },

    getScrollWidth: function () {
      return getBoundingClientRect(this.element).width
    },

    getScrollHeight: function () {
      return getBoundingClientRect(this.element).height
    },

    getScrollLeft: function () {
      return -getTransformOffset(this).x - this.options.xPaddingTop
    },

    getScrollTop: function () {
      return -getTransformOffset(this).y - this.options.yPaddingTop
    },

    getMaxScrollLeft: function () {
      return -that.maxScrollOffset - this.options.xPaddingTop
    },

    getMaxScrollTop: function () {
      return -that.maxScrollOffset - this.options.yPaddingTop
    },

    getBoundaryOffset: function () {
      return Math.abs(
        getBoundaryOffset(this, getTransformOffset(this)[this.axis]) || 0
      )
    },

    refresh: function () {
      var el = this.element;
      var isVertical = (this.axis === 'y');
      var type = isVertical ? 'height' : 'width';
      var size, rect, extraSize;

      function getExtraSize(el, isVertical) {
        var extraType = isVertical ? ['top', 'bottom'] : ['left', 'right'];
        return parseFloat(
          getComputedStyle(el.firstElementChild)['margin-' + extraType[0]]
        ) + parseFloat(
          getComputedStyle(el.lastElementChild)['margin-' + extraType[1]]
        )
      }

      if (this.options[type] != null) {
        // use options
        size = this.options[type];
      } else if (el.childElementCount <= 0) {
        el.style[type] = 'auto';
        size = null;
      } else if (!!this.options.useElementRect) {
        el.style[type] = 'auto';
        rect = getBoundingClientRect(el);
        size = rect[type];
        size += getExtraSize(el, isVertical);
      } else {
        var range, rect;
        var firstEl = el.firstElementChild;
        var lastEl = el.lastElementChild;

        if (document.createRange && !this.options.ignoreOverflow) {
          // use range
          range = document.createRange();
          range.selectNodeContents(el);
          rect = getBoundingClientRect(range);
        }

        if (rect) {
          size = rect[type];
        } else {
          // use child offsets
          while (firstEl) {
            if (getBoundingClientRect(firstEl)[type] === 0
                && firstEl.nextElementSibling) {
              firstEl = firstEl.nextElementSibling;
            } else {
              break
            }
          }

          while (lastEl && lastEl !== firstEl) {
            if (getBoundingClientRect(lastEl)[type] === 0
                && lastEl.previousElementSibling) {
              lastEl = lastEl.previousElementSibling;
            } else {
              break
            }
          }

          size = getBoundingClientRect(lastEl)[
              isVertical ? 'bottom' : 'right']
            - getBoundingClientRect(firstEl)[
              isVertical ? 'top' : 'left'];
        }

        size += getExtraSize(el, isVertical);

      }

      el.style[type] = size ? size + 'px' : 'auto';

      this.transformOffset = getTransformOffset(this);
      this.minScrollOffset = getMinScrollOffset(this);
      this.maxScrollOffset = getMaxScrollOffset(this);

      this.scrollTo(
        -this.transformOffset[this.axis]
        - this.options[this.axis + 'PaddingTop']
      );
      fireEvent$3(this, 'contentrefresh');

      return this
    },

    offset: function (childEl) {
      var elRect = getBoundingClientRect(this.element);
      var childRect = getBoundingClientRect(childEl);
      if (this.axis === 'y') {
        var offsetRect = {
          top: childRect.top - elRect.top - this.options.yPaddingTop,
          left: childRect.left - elRect.left,
          right: elRect.right - childRect.right,
          width: childRect.width,
          height: childRect.height
        };

        offsetRect.bottom = offsetRect.top + offsetRect.height;
      } else {
        var offsetRect = {
          top: childRect.top - elRect.top,
          bottom: elRect.bottom - childRect.bottom,
          left: childRect.left - elRect.left - this.options.xPaddingTop,
          width: childRect.width,
          height: childRect.height
        };

        offsetRect.right = offsetRect.left + offsetRect.width;
      }
      return offsetRect
    },

    getRect: function (childEl) {
      var viewRect = getBoundingClientRect(this.viewport);
      var childRect = getBoundingClientRect(childEl);
      if (this.axis === 'y') {
        var offsetRect = {
          top: childRect.top - viewRect.top,
          left: childRect.left - viewRect.left,
          right: viewRect.right - childRect.right,
          width: childRect.width,
          height: childRect.height
        };

        offsetRect.bottom = offsetRect.top + offsetRect.height;
      } else {
        var offsetRect = {
          top: childRect.top - viewRect.top,
          bottom: viewRect.bottom - childRect.bottom,
          left: childRect.left - viewRect.left,
          width: childRect.width,
          height: childRect.height
        };

        offsetRect.right = offsetRect.left + offsetRect.width;
      }
      return offsetRect
    },

    isInView: function (childEl) {
      var viewRect = this.getRect(this.viewport);
      var childRect = this.getRect(childEl);
      if (this.axis === 'y') {
        return viewRect.top < childRect.bottom
          && viewRect.bottom > childRect.top
      }
      return viewRect.left < childRect.right
        && viewRect.right > childRect.left
    },

    scrollTo: function (offset, isSmooth) {
      var that = this;
      var element = this.element;

      offset = -offset - this.options[this.axis + 'PaddingTop'];
      offset = touchBoundary(this, offset);

      isScrolling = true;
      if (isSmooth === true) {
        if (this.options.useFrameAnimation) {
          var s0 = getTransformOffset(that)[this.axis];
          var _s = offset - s0;
          scrollAnimation = new lib.animation(
              400,
              lib.cubicbezier.easeInOut,
              0,
              function (i1, i2) {
            var offset = (s0 + _s * i2).toFixed(2);
            setTransformStyle(that, offset);
            fireEvent$3(that, 'scrolling');
          });

          scrollAnimation.onend(scrollEnd);

          scrollAnimation.play();
        } else {
          setTransitionEndHandler(scrollEnd, 400);
          setTransitionStyle(that, '0.4s', 'ease-in-out');
          setTransformStyle(that, offset);

          function _cancelScroll() {
            if (isScrolling && that.enabled) {
              fireEvent$3(that, 'scrolling');
              lib.animation.requestFrame(_cancelScroll);
            }
          }

          lib.animation.requestFrame(_cancelScroll);
        }
      } else {
        if (!this.options.useFrameAnimation) {
          setTransitionStyle(that, '', '');
        }
        setTransformStyle(that, offset);
        scrollEnd();
      }

      return this
    },

    scrollToElement: function (childEl, isSmooth, topOffset) {
      var offset = this.offset(childEl);
      offset = offset[this.axis === 'y'?'top':'left'];
      topOffset && (offset += topOffset);
      return this.scrollTo(offset, isSmooth)
    },

    getViewWidth: function () {
      return getBoundingClientRect(this.viewport).width
    },

    getViewHeight: function () {
      return getBoundingClientRect(this.viewport).height
    },

    addPulldownHandler: function (handler) {
      var that = this;
      this.element.addEventListener('pulldownend', function (e) {
        that.disable();
        handler.call(that, e, function () {
          that.scrollTo(0, true);
          that.refresh();
          that.enable();
        });
      }, false);

      return this
    },

    addPullupHandler: function (handler) {
      var that = this;

      this.element.addEventListener('pullupend', function (e) {
        that.disable();
        handler.call(that, e, function () {
          that.scrollTo(that.getScrollHeight(), true);
          that.refresh();
          that.enable();
        });
      }, false);

      return this
    },

    addScrollstartHandler: function (handler) {
      var that = this;
      this.element.addEventListener('scrollstart', function (e) {
        handler.call(that, e);
      }, false);

      return this
    },

    addScrollingHandler: function (handler) {
      var that = this;
      this.element.addEventListener('scrolling', function (e) {
        handler.call(that, e);
      }, false);

      return this
    },

    addScrollendHandler: function (handler) {
      var that = this;
      this.element.addEventListener('scrollend', function (e) {
        handler.call(that, e);
      }, false);

      return this
    },

    addContentrenfreshHandler: function (handler) {
      var that = this;
      this.element.addEventListener('contentrefresh', function (e) {
        handler.call(that, e);
      }, false);
    },

    addEventListener: function (name, handler, useCapture) {
      var that = this;
      this.element.addEventListener(name, function (e) {
        handler.call(that, e);
      }, !!useCapture);
    },

    removeEventListener: function (name, handler) {
      var that = this;
      this.element.removeEventListener(name, function (e) {
        handler.call(that, e);
      });
    },

    enablePlugin: function (name, options) {
      var plugin = plugins[name];
      if (plugin && !this.plugins[name]) {
        this.plugins[name] = true;
        options = options || {};
        plugin.call(this, name, options);
      }
      return this
    }
  };

  for (var k in proto) {
    this$1[k] = proto[k];
  }
  // delete proto
}

lib.scroll = function (el, options) {
  if (arguments.length === 1 && !(arguments[0] instanceof HTMLElement)) {
    options = arguments[0];
    if (options.scrollElement) {
      el = options.scrollElement;
    } else if (options.scrollWrap) {
      el = options.scrollWrap.firstElementChild;
    } else {
      throw new Error('no scroll element')
    }
  }

  if (!el.parentNode) {
    throw new Error('wrong dom tree')
  }
  if (options
      && options.direction
      && ['x', 'y'].indexOf(options.direction) < 0) {
    throw new Error('wrong direction')
  }

  var scroll;
  if (options.downgrade === true
      && lib.scroll.downgrade) {
    scroll = lib.scroll.downgrade(el, options);
  } else {
    if (el.scrollId) {
      scroll = scrollObjs[el.scrollId];
    } else {
      scroll = new Scroll(el, options);
    }
  }
  return scroll
};

lib.scroll.plugin = function (name, constructor) {
  if (constructor) {
    name = name.split(',');
    name.forEach(function (n) {
      plugins[n] = constructor;
    });
  } else {
    return plugins[name]
  }
};

/* global lib */

// lib.scroll events:
//  - scrollstart
//  - scrolling
//  - pulldownend
//  - pullupend
//  - pullleftend
//  - pullrightend
//  - pulldown
//  - pullup
//  - pullleft
//  - pullright
//  - contentrefresh

var directionMap = {
  h: ['row', 'horizontal', 'h', 'x'],
  v: ['column', 'vertical', 'v', 'y']
};

var DEFAULT_DIRECTION = 'column';
var DEFAULT_LOAD_MORE_OFFSET$1 = 0;

function refreshWhenDomRenderend (comp) {
  if (!comp.renderendHandler) {
    comp.renderendHandler = function () {
      comp.scroller.refresh();
    };
  }
  window.addEventListener('renderend', comp.renderendHandler);
}

function removeEvents (comp) {
  if (comp.renderendHandler) {
    window.removeEventListener('renderend', comp.renderendHandler);
  }
}

function getProto$1 (Weex) {
  var Component = Weex.Component;

  function create (nodeType) {
    var Scroll = lib.scroll;
    var node = Component.prototype.create.call(this, nodeType);
    node.classList.add('weex-container');
    node.classList.add('scrollable-wrap');
    this.scrollElement = document.createElement('div');
    this.scrollElement.classList.add('weex-container');
    this.scrollElement.classList.add('scrollable-element');
    this.scrollElement.classList.add('dir-' + this.direction);

    this.scrollElement.style.webkitBoxOrient = directionMap[this.direction][1];
    this.scrollElement.style.webkitFlexDirection = directionMap[this.direction][0];
    this.scrollElement.style.flexDirection = directionMap[this.direction][0];

    node.appendChild(this.scrollElement);
    this.scroller = new Scroll({
      // if the direction is x, then the bounding rect of the scroll element
      // should be got by the 'Range' API other than the 'getBoundingClientRect'
      // API, because the width outside the viewport won't be count in by
      // 'getBoundingClientRect'.
      // Otherwise should use the element rect in case there is a child scroller
      // or list in this scroller. If using 'Range', the whole scroll element
      // including the hiding part will be count in the rect.
      useElementRect: this.direction === 'v',
      scrollElement: this.scrollElement,
      direction: this.direction === 'h' ? 'x' : 'y'
    });
    this.scroller.init();
    this.offset = 0;
    return node
  }

  function createChildren () {
    var this$1 = this;

    var children = this.data.children;
    var parentRef = this.data.ref;
    var componentManager = this.getComponentManager();
    if (children && children.length) {
      var fragment = document.createDocumentFragment();
      var isFlex = false;
      for (var i = 0; i < children.length; i++) {
        children[i].instanceId = this$1.data.instanceId;
        children[i].scale = this$1.data.scale;
        var child = componentManager.createElement(children[i]);
        fragment.appendChild(child.node);
        child.parentRef = parentRef;
        if (!isFlex
            && child.data.style
            && child.data.style.hasOwnProperty('flex')
          ) {
          isFlex = true;
        }
      }
      this.scrollElement.appendChild(fragment);
    }
    // wait for fragment to appended on scrollElement on UI thread.
    setTimeout(function () {
      this.scroller.refresh();
    }.bind(this), 0);
  }

  function appendChild (data) {
    var children = this.data.children;
    var componentManager = this.getComponentManager();
    var child = componentManager.createElement(data);
    this.scrollElement.appendChild(child.node);

    // wait for UI thread to update.
    setTimeout(function () {
      this.scroller.refresh();
    }.bind(this), 0);

    // update this.data.children
    if (!children || !children.length) {
      this.data.children = [data];
    }
    else {
      children.push(data);
    }

    return child
  }

  function insertBefore (child, before) {
    var children = this.data.children;
    var i = 0;
    var isAppend = false;

    // update this.data.children
    if (!children || !children.length || !before) {
      isAppend = true;
    }
    else {
      var l;
      for (l = children.length; i < l; i++) {
        if (children[i].ref === before.data.ref) {
          break
        }
      }
      if (i === l) {
        isAppend = true;
      }
    }

    if (isAppend) {
      this.scrollElement.appendChild(child.node);
      children.push(child.data);
    }
    else {
      var refreshLoadingPlaceholder = before.refreshPlaceholder
        || before.loadingPlaceholder;
      if (refreshLoadingPlaceholder) {
        this.scrollElement.insertBefore(child.node, refreshLoadingPlaceholder);
      }
      else if (before.fixedPlaceholder) {
        this.scrollElement.insertBefore(child.node, before.fixedPlaceholder);
      }
      else if (before.stickyPlaceholder) {
        this.scrollElement.insertBefore(child.node, before.stickyPlaceholder);
      }
      else {
        this.scrollElement.insertBefore(child.node, before.node);
      }
      children.splice(i, 0, child.data);
    }

    // wait for UI thread to update.
    setTimeout(function () {
      this.scroller.refresh();
    }.bind(this), 0);
  }

  function removeChild (child) {
    var children = this.data.children;
    // remove from this.data.children
    var i = 0;
    var componentManager = this.getComponentManager();
    if (children && children.length) {
      var l;
      for (l = children.length; i < l; i++) {
        if (children[i].ref === child.data.ref) {
          break
        }
      }
      if (i < l) {
        children.splice(i, 1);
      }
    }
    // remove from componentMap recursively
    componentManager.removeComponent(child.data.ref);
    var refreshLoadingPlaceholder = child.refreshPlaceholder
      || child.loadingPlaceholder;
    child.unsetPosition();
    if (refreshLoadingPlaceholder) {
      this.scrollElement.removeChild(refreshLoadingPlaceholder);
    }
    child.node.parentNode.removeChild(child.node);

    // wait for UI thread to update.
    setTimeout(function () {
      this.scroller.refresh();
    }.bind(this), 0);
  }

  function bindEvents (evts) {
    Component.prototype.bindEvents.call(this, evts);
    // to enable lazyload for Images
    this.scroller.addEventListener('scrolling', function (e) {
      var so = e.scrollObj;
      var scrollTop = so.getScrollTop();
      var scrollLeft = so.getScrollLeft();
      var offset = this.direction === 'v' ? scrollTop : scrollLeft;
      var diff = offset - this.offset;
      var dir;
      if (diff >= 0) {
        dir = this.direction === 'v' ? 'up' : 'left';
      }
      else {
        dir = this.direction === 'v' ? 'down' : 'right';
      }
      this.dispatchEvent('scroll', {
        originalType: 'scrolling',
        scrollTop: so.getScrollTop(),
        scrollLeft: so.getScrollLeft(),
        offset: offset,
        direction: dir
      }, {
        bubbles: true
      });
      this.offset = offset;

      // fire loadmore event.
      var leftDist = Math.abs(so.maxScrollOffset) - this.offset;
      if (leftDist <= this.loadmoreoffset && this.isAvailableToFireloadmore) {
        this.isAvailableToFireloadmore = false;
        this.dispatchEvent('loadmore');
      }
      else if (leftDist > this.loadmoreoffset && !this.isAvailableToFireloadmore) {
        this.isAvailableToFireloadmore = true;
      }
    }.bind(this));
  }

  function onAppend () {
    refreshWhenDomRenderend(this);
  }

  function onRemove () {
    removeEvents(this);
  }

  return {
    create: create,
    createChildren: createChildren,
    appendChild: appendChild,
    insertBefore: insertBefore,
    removeChild: removeChild,
    bindEvents: bindEvents,
    onAppend: onAppend,
    onRemove: onRemove
  }
}

var attr$3 = {
  loadmoreoffset: function (val) {
    val = parseFloat(val);
    if (val < 0 || isNaN(val)) {
      console.warn('[h5-render] invalida');
      return
    }
    this.loadmoreoffset = val;
  }
};

function init$14 (Weex) {
  var Component = Weex.Component;
  var extend = Weex.utils.extend;

  // attrs:
  //  - loadmoreoffset: updatable
  //  - scroll-direciton: none|vertical|horizontal (default is vertical)
  //  - show-scrollbar: true|false (default is true)
  function Scrollable (data, nodeType) {
    this.loadmoreoffset = DEFAULT_LOAD_MORE_OFFSET$1;
    this.isAvailableToFireloadmore = true;
    var attrs = data.attr || {};
    var direction = attrs.scrollDirection
      || attrs.direction
      || DEFAULT_DIRECTION;
    this.direction = directionMap.h.indexOf(direction) === -1
      ? 'v'
      : 'h';
    this.showScrollbar = attrs.showScrollbar || true;
    Component.call(this, data, nodeType);
  }
  Scrollable.prototype = Object.create(Component.prototype);
  extend(Scrollable.prototype, getProto$1(Weex));
  extend(Scrollable.prototype, { attr: attr$3 });
  return Scrollable
}

var scrollableModule = { init: init$14 };

var availableChildrenTypes = ['cell', 'loading', 'refresh'];

function getProto (Scrollable) {
  return {
    create: function create () {
      var node = Scrollable.prototype.create.call(this);
      node.classList.add('list-wrap');
      this.scrollElement.classList.add('list-element');
      return node
    },

    createChildren: function createChildren () {
      var children = this.data.children || [];
      children.forEach(function (data) {
        var type = data.type;
        if (availableChildrenTypes.indexOf(type) === -1) {
          // throw new Error('[h5-render] invalid child type "'
          //   + type + '" for list.')
          console.warn('[h5-render] invalid child type "'
            + type + '" for list.');
        }
      });
      return Scrollable.prototype.createChildren.call(this)
    },

    appendChild: function appendChild (data) {
      var type = data.type;
      if (availableChildrenTypes.indexOf(type) === -1) {
        // throw new Error('[h5-render] invalid child type "'
        //   + type + '" for list.')
        console.warn('[h5-render] invalid child type "'
          + type + '" for list.');
      }
      return Scrollable.prototype.appendChild.call(this, data)
    },

    insertBefore: function insertBefore (child, before) {
      var type = child.data.type;
      if (availableChildrenTypes.indexOf(type) === -1) {
        // throw new Error('[h5-render] invalid child type "'
        //   + type + '" for list.')
        console.warn('[h5-render] invalid child type "'
          + type + '" for list.');
      }
      return Scrollable.prototype.insertBefore.call(this, child, before)
    }
  }
}

function init$13 (Weex) {
  var Scrollable = scrollableModule.init(Weex);
  function List (data, nodeType) {
    Scrollable.call(this, data, nodeType);
  }
  var extend = Weex.utils.extend;

  List.prototype = Object.create(Scrollable.prototype);
  extend(List.prototype, getProto(Scrollable));

  return List
}

var listModule = { init: init$13 };

function init$12 (Weex) {
  var List = listModule.init(Weex);

  function Vlist (data, nodeType) {
    data.attr.direction = 'v';
    List.call(this, data, nodeType);
  }
  Vlist.prototype = Object.create(List.prototype);

  Weex.registerComponent('list', Vlist);
  Weex.registerComponent('vlist', Vlist);
}

var Vlist = { init: init$12 };

function init$15 (Weex) {
  var List = listModule.init(Weex);

  function Hlist (data, nodeType) {
    data.attr.direction = 'h';
    List.call(this, data, nodeType);
  }

  Hlist.prototype = Object.create(List.prototype);

  Weex.registerComponent('hlist', Hlist);
}

var Hlist = { init: init$15 };

function init$11 (Weex) {
  Weex.install(Vlist);
  Weex.install(Hlist);
}

var list = { init: init$11 };

function init$16 (Weex) {
  var Scrollable = scrollableModule.init(Weex);
  function Scroller (data, nodeType) {
    Scrollable.call(this, data, nodeType);
  }
  var extend = Weex.utils.extend;

  Scroller.prototype = Object.create(Scrollable.prototype);
  extend(Scroller.prototype, {
    create: function create () {
      var node = Scrollable.prototype.create.call(this);
      node.classList.add('scroller-wrap');
      this.scrollElement.classList.add('scroller-element');
      return node
    }
  });

  Weex.registerComponent('scroller', Scroller);
}

var scroller = { init: init$16 };

__$styleInject(".weex-refresh {\n  // -webkit-box-align: center;\n  // -webkit-align-items: center;\n  // align-items: center;\n  // -webkit-box-pack: center;\n  // -webkit-justify-content: center;\n  // justify-content: center;\n  overflow: hidden;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 0;\n  z-index: 999999;\n  background-color: #666;\n}",undefined);

var parents = ['scroller', 'list', 'vlist'];

// Only if pulldown offset is larger than this value can this
// component trigger the 'refresh' event, otherwise just recover
// to the start point.
var DEFAULT_CLAMP = 130;
var DEFAULT_ALIGN_ITEMS = 'center';
var DEFAULT_JUSTIFY_CONTENT = 'center';

function adjustHeight (refresh, val) {
  refresh.node.style.height = val + 'px';
}

// function adJustPosition (refresh, val) {
//   refresh.node.style.top = -val + 'px'
// }

function handleRefresh (refresh, e) {
  refresh.node.style.height = refresh.clamp + 'px';
  refresh.dispatchEvent('refresh');
  refresh.isRefreshing = true;
}

function show (refresh) {
  refresh.display = true;
  refresh.node.style.display = '-webkit-box';
  refresh.node.style.display = '-webkit-flex';
  refresh.node.style.display = 'flex';
}

function hide$3 (refresh) {
  refresh.display = false;
  refresh.node.style.display = 'none';
  refresh.isRefreshing = false;
}

var proto$4 = {
  create: function create () {
    var node = document.createElement('div');
    node.classList.add('weex-container');
    node.classList.add('weex-refresh');
    return node
  },

  onAppend: function onAppend () {
    var parent = this.getParent();
    var self = this;
    if (parents.indexOf(parent.data.type) === -1) {
      // not in a scroller or a list
      return
    }
    this.refreshPlaceholder = document.createElement('div');
    this.refreshPlaceholder.classList.add('weex-refresh-placeholder');
    this.refreshPlaceholder.style.display = 'none';
    this.refreshPlaceholder.style.width = '0px';
    this.refreshPlaceholder.style.height = '0px';
    var scrollElement = parent.scrollElement || parent.listElement;
    scrollElement.insertBefore(this.refreshPlaceholder, this.node);
    parent.node.appendChild(this.node);
    parent.scroller.addEventListener('pulldown', function (e) {
      if (self.isRefreshing) {
        return
      }
      adjustHeight(self, Math.abs(e.scrollObj.getScrollTop()));
      if (!self.display) {
        show(self);
      }
    });
    parent.scroller.addEventListener('pulldownend', function (e) {
      if (self.isRefreshing) {
        return
      }
      var top = Math.abs(e.scrollObj.getScrollTop());
      if (top > self.clamp) {
        handleRefresh(self, e);
      }
      else {
        hide$3(self);
      }
    });
  }
};

var attr$4 = {
  display: function (val) {
    if (val === 'show') {
      setTimeout(function () {
        show(this);
      }.bind(this), 0);
    }
    else if (val === 'hide') {
      setTimeout(function () {
        hide$3(this);
      }.bind(this), 0);
    }
    else {
      console.error('[h5-render] attr \'display\' of <refresh>\': value '
        + val
        + ' is invalid. Should be \'show\' or \'hide\'');
    }
  }
};

var style$3 = {
  height: function (val) {
    val = parseFloat(val);
    if (isNaN(val) || val < 0) {
      return console.warn('[h5-render] <refresh>\'s height (' + val + ') is invalid.')
    }
    this.clamp = val * this.data.scale;
  }
};

function init$17 (Weex) {
  var Component = Weex.Component;
  var extend = Weex.utils.extend;

  function Refresh (data) {
    this.isRefreshing = false;
    this.clamp = (data.style.height || DEFAULT_CLAMP) * data.scale;
    !data.style.alignItems && (data.style.alignItems = DEFAULT_ALIGN_ITEMS);
    !data.style.justifyContent
      && (data.style.justifyContent = DEFAULT_JUSTIFY_CONTENT);
    Component.call(this, data);
  }
  Refresh.prototype = Object.create(Component.prototype);
  extend(Refresh.prototype, proto$4);
  extend(Refresh.prototype, { attr: attr$4 });
  extend(Refresh.prototype, {
    style: extend(Object.create(Component.prototype.style), style$3)
  });

  Weex.registerComponent('refresh', Refresh);
}

var refresh$2 = { init: init$17 };

__$styleInject(".weex-loading {\n  // -webkit-box-align: center;\n  // -webkit-align-items: center;\n  // align-items: center;\n  // -webkit-box-pack: center;\n  // -webkit-justify-content: center;\n  // justify-content: center;\n  overflow: hidden;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 0;\n  background-color: #666;\n}",undefined);

var parents$1 = ['scroller', 'list', 'vlist'];

var DEFAULT_CLAMP$1 = 130;
var DEFAULT_ALIGN_ITEMS$1 = 'center';
var DEFAULT_JUSTIFY_CONTENT$1 = 'center';

function adjustHeight$1 (loading, val) {
  loading.node.style.height = val + 'px';
}

function handleLoading (loading, e) {
  loading.node.style.height = loading.clamp + 'px';
  loading.dispatchEvent('loading');
  loading.isLoading = true;
}

function show$1 (loading) {
  loading.display = true;
  loading.node.style.display = '-webkit-box';
  loading.node.style.display = '-webkit-flex';
  loading.node.style.display = 'flex';
}

function hide$4 (loading) {
  loading.display = false;
  loading.node.style.display = 'none';
  loading.isLoading = false;
}

var proto$5 = {
  create: function create () {
    var node = document.createElement('div');
    node.classList.add('weex-container');
    node.classList.add('weex-loading');
    return node
  },

  onAppend: function onAppend () {
    var parent = this.getParent();
    var self = this;
    var scrollWrapHeight = parent.node.getBoundingClientRect().height;
    if (parents$1.indexOf(parent.data.type) === -1) {
      // not in a scroller or a list
      return
    }
    this.loadingPlaceholder = document.createElement('div');
    this.loadingPlaceholder.classList.add('weex-loading-placeholder');
    this.loadingPlaceholder.style.display = 'none';
    this.loadingPlaceholder.style.width = '0px';
    this.loadingPlaceholder.style.height = '0px';
    var scrollElement = parent.scrollElement || parent.listElement;
    scrollElement.insertBefore(this.loadingPlaceholder, this.node);
    parent.node.appendChild(this.node);
    parent.scroller.addEventListener('pullup', function (e) {
      if (self.isLoading) {
        return
      }
      var obj = e.scrollObj;
      adjustHeight$1(self, Math.abs(
        obj.getScrollHeight() - obj.getScrollTop() - scrollWrapHeight));
      if (!self.display) {
        show$1(self);
      }
    });
    parent.scroller.addEventListener('pullupend', function (e) {
      if (self.isLoading) {
        return
      }
      handleLoading(self, e);
    });
  }
};

var attr$5 = {
  display: function (val) {
    if (val === 'show') {
      setTimeout(function () {
        show$1(this);
      }.bind(this), 0);
    }
    else if (val === 'hide') {
      setTimeout(function () {
        hide$4(this);
      }.bind(this), 0);
    }
    else {
      console.error('[h5-render] attr \'display\' of <refresh>\': value '
        + val
        + ' is invalid. Should be \'show\' or \'hide\'');
    }
  }
};

var style$4 = {
  height: function (val) {
    val = parseFloat(val);
    if (Number.isNaN(val) || val < 0) {
      return console.warn('[h5-render] <loading>\'s height (' + val + ') is invalid.')
    }
    this.clamp = val * this.data.scale;
  }
};

function init$18 (Weex) {
  var Component = Weex.Component;
  var extend = Weex.utils.extend;

  function Loading (data) {
    this.clamp = (data.style.height || DEFAULT_CLAMP$1) * data.scale;
    !data.style.alignItems && (data.style.alignItems = DEFAULT_ALIGN_ITEMS$1);
    !data.style.justifyContent
      && (data.style.justifyContent = DEFAULT_JUSTIFY_CONTENT$1);
    Component.call(this, data);
  }
  Loading.prototype = Object.create(Component.prototype);
  extend(Loading.prototype, proto$5);
  extend(Loading.prototype, { attr: attr$5 });
  extend(Loading.prototype, {
    style: extend(Object.create(Component.prototype.style), style$4)
  });

  Weex.registerComponent('loading', Loading);
}

var loading = { init: init$18 };

var Scrollable = {
  init: function (Weex) {
    Weex.install(list);
    Weex.install(scroller);
    Weex.install(refresh$2);
    Weex.install(loading);
  }
}

/* eslint-disable */
;
/* eslint-enable */

(typeof window === 'undefined') && (window = {ctrl: {}, lib: {}});!window.ctrl && (window.ctrl = {});!window.lib && (window.lib = {});!function(a,b){function c(a,b,c,d){function e(a){return(3*k*a+2*l)*a+m}function f(a){return((k*a+l)*a+m)*a}function g(a){return((n*a+o)*a+p)*a}function h(a){for(var b,c,d=a,g=0;8>g;g++){if(c=f(d)-a,Math.abs(c)<j){ return d; }if(b=e(d),Math.abs(b)<j){ break; }d-=c/b;}var h=1,i=0;for(d=a;h>i;){if(c=f(d)-a,Math.abs(c)<j){ return d; }c>0?h=d:i=d,d=(h+i)/2;}return d}function i(a){return g(h(a))}var j=1e-6,k=3*a-3*c+1,l=3*c-6*a,m=3*a,n=3*b-3*d+1,o=3*d-6*b,p=3*b;return i}b.cubicbezier=c,b.cubicbezier.linear=c(0,0,1,1),b.cubicbezier.ease=c(.25,.1,.25,1),b.cubicbezier.easeIn=c(.42,0,1,1),b.cubicbezier.easeOut=c(0,0,.58,1),b.cubicbezier.easeInOut=c(.42,0,.58,1);}(window,window.lib||(window.lib={}));

(typeof window === 'undefined') && (window = {ctrl: {}, lib: {}});!window.ctrl && (window.ctrl = {});!window.lib && (window.lib = {});!function(a,b){function c(a){return setTimeout(a,l)}function d(a){clearTimeout(a);}function e(){var a={},b=new m(function(b,c){a.resolve=b,a.reject=c;});return a.promise=b,a}function f(a,b){return["then","catch"].forEach(function(c){b[c]=function(){return a[c].apply(a,arguments)};}),b}function g(b){var c,d,h=!1;this.request=function(){h=!1;var g=arguments;return c=e(),f(c.promise,this),d=n(function(){h||c&&c.resolve(b.apply(a,g));}),this},this.cancel=function(){return d&&(h=!0,o(d),c&&c.reject("CANCEL")),this},this.clone=function(){return new g(b)};}function h(a,b){"function"==typeof b&&(b={0:b});for(var c=a/l,d=1/c,e=[],f=Object.keys(b).map(function(a){return parseInt(a)}),h=0;c>h;h++){var i=f[0],j=d*h;if(null!=i&&100*j>=i){var k=b[""+i];k instanceof g||(k=new g(k)),e.push(k),f.shift();}else { e.length&&e.push(e[e.length-1].clone()); }}return e}function i(a){var c;return"string"==typeof a||a instanceof Array?b.cubicbezier?"string"==typeof a?b.cubicbezier[a]&&(c=b.cubicbezier[a]):a instanceof Array&&4===a.length&&(c=b.cubicbezier.apply(b.cubicbezier,a)):console.error("require lib.cubicbezier"):"function"==typeof a&&(c=a),c}function j(a,b,c){var d,g=h(a,c),j=1/(a/l),k=0,m=i(b);if(!m){ throw new Error("unexcept timing function"); }var n=!1;this.play=function(){function a(){var c=j*(k+1).toFixed(10),e=g[k];e.request(c.toFixed(10),b(c).toFixed(10)).then(function(){n&&(k===g.length-1?(n=!1,d&&d.resolve("FINISH"),d=null):(k++,a()));},function(){});}if(!n){ return n=!0,d||(d=e(),f(d.promise,this)),a(),this }},this.stop=function(){return n?(n=!1,g[k]&&g[k].cancel(),this):void 0};}var k=60,l=1e3/k,m=a.Promise||b.promise&&b.promise.ES6Promise,n=window.requestAnimationFrame||window.msRequestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||c,o=window.cancelAnimationFrame||window.msCancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||d;(n===c||o===d)&&(n=c,o=d),b.animation=function(a,b,c){return new j(a,b,c)},b.animation.frame=function(a){return new g(a)},b.animation.requestFrame=function(a){var b=new g(a);return b.request()};}(window,window.lib||(window.lib={}));

__$styleInject("[data-ctrl-name=\"carrousel\"] {\n  position: relative;\n  -webkit-transform: translateZ(1px);\n  -ms-transform: translateZ(1px);\n  transform: translateZ(1px);\n}",undefined);

/* eslint-disable */

var _fallback = false;

var raf$1 = window.requestAnimationFrame
  || window.webkitRequestAnimationFrame;
if (!raf$1) {
  _fallback = true;
  raf$1 = function (callback) {
    return setTimeout$2(callback, 16)
  };
}
var caf = window.cancelAnimationFrame
  || window.webkitCancelAnimationFrame;
if (!caf && _fallback) {
  caf = function (id) {
    return clearTimeout$2(id)
  };
} else if (!caf) {
  caf = function() {};
}

var MAX = (Number.MAX_SAFE_INTEGER || Math.pow(2, 53) - 1) - 1;

var _idMap = {};
var _globalId = 0;

function _getGlobalId() {
  _globalId = (_globalId + 1) % MAX;
  if (_idMap[_globalId]) {
    return _getGlobalId()
  }
  return _globalId
}

function setTimeout$2 (cb, ms) {
  var id = _getGlobalId();
  var start = Date.now();
  _idMap[id] = raf$1(function loop() {
    if (!_idMap[id] && _idMap[id] !== 0) {
      return
    }
    var ind = Date.now() - start;
    if (ind < ms) {
      _idMap[id] = raf$1(loop);
    } else {
      delete _idMap[id];
      cb();
    }
  });
  return id
}

function clearTimeout$2 (id) {
  var tid = _idMap[id];
  tid && caf(tid);
  delete _idMap[id];
}

/* eslint-disable */

// require('./gesture')
var doc$2 = window.document;
var ua$2 = window.navigator.userAgent;
var Firefox$1 = !!ua$2.match(/Firefox/i);
var IEMobile$1 = !!ua$2.match(/IEMobile/i);
var stylePrefix$2 = Firefox$1 ? 'Moz' : IEMobile$1 ? 'ms' : 'webkit';

var setTimeout$1 = setTimeout$2;
var clearTimeout$1 = clearTimeout$2;

function getTransformOffset$1(element) {
  var offset = { x: 0, y: 0 };
  var transform = getComputedStyle(element)[stylePrefix$2 + 'Transform'];
  var regMatrix3d = new RegExp('^matrix3d\\((?:[-\\d.]+,\\s*){12}([-\\d.]+),'
    + '\\s*([-\\d.]+)(?:,\\s*[-\\d.]+){2}\\)');
  var regMatrix = /^matrix\((?:[-\d.]+,\s*){4}([-\d.]+),\s*([-\d.]+)\)$/;
  var matched;

  if (transform !== 'none') {
    if ((matched = transform.match(regMatrix3d)
      || transform.match(regMatrix))) {
      offset.x = parseFloat(matched[1]) || 0;
      offset.y = parseFloat(matched[2]) || 0;
    }
  }

  return offset
}

var CSSMatrix$1 = IEMobile$1 ? 'MSCSSMatrix' : 'WebKitCSSMatrix';
var has3d$1 = !!Firefox$1 || CSSMatrix$1 in window && 'm11' in new window[CSSMatrix$1]();
function getTranslate$1(x, y) {
  x = parseFloat(x);
  y = parseFloat(y);

  if (x != 0) {
    x += 'px';
  }

  if (y != 0) {
    y += 'px';
  }

  if (has3d$1) {
    return 'translate3d(' + x + ', ' + y + ', 0)'
  }

  return 'translate(' + x + ', ' + y + ')'
}

var slice$2 = Array.prototype.slice;
function ArrayFrom(a) {
  return slice$2.call(a)
}

var incId = 0;
function Carrousel(element, options) {
  var that = this;
  var views = [];
  var pages = {};
  var id = Date.now() + '-' + (++incId);
  var root = document.createDocumentFragment();

  if (arguments.length === 1 && !(arguments[0] instanceof HTMLElement)) {
    options = arguments[0];
    element = null;
  }

  if (!element) {
    element = document.createElement('ul');
    root.appendChild(element);
  }
  options = options || {};

  element.setAttribute('data-ctrl-name', 'carrousel');
  element.setAttribute('data-ctrl-id', id);

  function fireEvent(name, extra) {
    var ev = doc$2.createEvent('HTMLEvents');
    ev.initEvent(name, false, false);
    if (extra) {
      for (var key in extra) {
        ev[key] = extra[key];
      }
    }
    root.dispatchEvent(ev);
  }

  element.style.position = 'relative';
  element.style[stylePrefix$2 + 'Transform'] = getTranslate$1(0, 0);

  var transformOffset = 0;
  var items = {};
  var itemLength = 0;
  var itemStep = options.step || element.getBoundingClientRect().width;
  var itemIndex = 0;

  items.add = function (html) {
    var li = document.createElement('li');
    li.style.display = 'none';
    li.style.float = 'left';
    li.index = itemLength;
    if (typeof html === 'string') {
      li.innerHTML = html;
    } else if (html instanceof HTMLElement) {
      li.appendChild(html);
    }
    element.appendChild(li);

    Object.defineProperty(items, itemLength + '', {
      get: function () {
        return li
      }
    });

    itemLength++;
    return li
  };

  function normalizeIndex(index) {
    while (index < 0) {
      index += itemLength;
    }

    while (index >= itemLength) {
      index -= itemLength;
    }

    return index
  }

  items.get = function (index) {
    return items[normalizeIndex(index)]
  };

  items.getCloned = function (index) {
    var index = normalizeIndex(index);
    var item = element.querySelector('[cloned="cloned-' + index + '"]');
    var originalItem = items[index];

    // If there a _listeners attribute on the dom element
    // then clone the _listeners as well for the events' binding
    function cloneEvents(origin, clone, deep) {
      var listeners = origin._listeners;
      if (listeners) {
        clone._listeners = listeners;
        for (var type in listeners) {
          clone.addEventListener(type, listeners[type]);
        }
      }
      if (deep && origin.children && origin.children.length) {
        for (var i = 0, l = origin.children.length; i < l; i++) {
          cloneEvents(origin.children[i], clone.children[i], deep);
        }
      }
    }

    if (!item) {
      item = originalItem.cloneNode(true);
      cloneEvents(originalItem, item, true);

      element.appendChild(item);
      item.setAttribute('cloned', 'cloned-' + index);
      item.index = index;
    }

    return item
  };

  function activate(index) {
    if (itemLength === 0) {
      return
    }

    var curItem = items.get(index);
    var prevItem;
    var nextItem;

    if (itemLength > 1) {
      prevItem = items.get(index - 1);

      if (itemLength === 2) {
        nextItem = items.getCloned(index + 1);
      } else {
        nextItem = items.get(index + 1);
      }

      curItem.style.left = -transformOffset + 'px';
      prevItem.style.left = (-transformOffset - itemStep) + 'px';
      nextItem.style.left = (-transformOffset + itemStep) + 'px';
    }

    itemIndex = curItem.index;

    fireEvent('change', {
      prevItem: prevItem,
      curItem: curItem,
      nextItem: nextItem
    });
  }

  items.slide = function (index) {
    if (itemLength === 0) {
      return
    }

    if (itemLength === 1) {
      index = 0;
    }

    var startOffset = getTransformOffset$1(element).x;
    var endOffset = transformOffset + itemStep * (-index);
    var interOffset = endOffset - startOffset;

    if (interOffset === 0) {
      return
    }

    var anim = new lib.animation(
      400,
      lib.cubicbezier.ease,
      function (i1, i2) {
        element.style[stylePrefix$2 + 'Transform']
          = getTranslate$1(startOffset + interOffset * i2, 0);
      }).play().then(function () {
        transformOffset = endOffset;
        element.style[stylePrefix$2 + 'Transform'] = getTranslate$1(endOffset, 0);
        index && activate(itemIndex + index);
      });
  };

  items.next = function () {
    items.slide(1);
  };

  items.prev = function () {
    items.slide(-1);
  };

  ArrayFrom(element.children).forEach(function (el) {
    el.style.position = 'absolute';
    el.style.top = '0';
    el.style.left = itemLength * itemStep + 'px';
    el.style.float = 'left';
    el.index = itemLength;
    Object.defineProperty(items, itemLength + '', {
      get: function () {
        return el
      }
    });

    itemLength++;
  });

  Object.defineProperty(this, 'items', {
    get: function () {
      return items
    }
  });

  Object.defineProperty(items, 'length', {
    get: function () {
      return itemLength
    }
  });

  Object.defineProperty(items, 'index', {
    get: function () {
      return itemIndex
    }
  });

  Object.defineProperty(items, 'step', {
    get: function () {
      return itemStep
    },

    set: function (v) {
      itemStep = v;
    }
  });

  var starting = false;
  var playing = false;
  var isSliding = false;
  this.play = function () {
    if (!starting) {
      starting = true;
      return activate(0)
    }

    if (!!playing) {
      return
    }

    playing = setTimeout$1(function play() {
      isSliding = true;
      items.next();
      setTimeout$1(function () {
        isSliding = false;
      }, 500);
      playing = setTimeout$1(play, 400 + playInterval);
    }, 400 + playInterval);
  };

  this.stop = function () {
    if (!playing) {
      return
    }
    clearTimeout$1(playing);
    setTimeout$1(function () {
      playing = false;
    }, 500);
  };

  var autoplay = false;
  var readyToPlay = false;
  Object.defineProperty(this, 'autoplay', {
    get: function () {
      return autoplay
    },
    set: function (v) {
      autoplay = !!v;
      if (readyToPlay) {
        clearTimeout$1(readyToPlay);
        readyToPlay = false;
      }
      if (autoplay) {
        readyToPlay = setTimeout$1(function () {
          that.play();
        }, 2000);
      } else {
        that.stop();
      }
    }
  });
  this.autoplay = !!options.autoplay;

  var playInterval = 1500;
  Object.defineProperty(this, 'playInterval', {
    get: function () {
      return playInterval
    },
    set: function (n) {
      playInterval = n;
    }
  });
  this.playInterval = !!options.playInterval || 1500;

  if (options.useGesture) {
    var panning = false;
    var displacement;
    element.addEventListener('panstart', function (e) {
      if (!e.isVertical && !(panning && isSliding)) {
        e.preventDefault();
        e.stopPropagation();

        if (autoplay) {
          that.stop();
        }

        displacement = 0;
        panning = true;
      }
    });

    element.addEventListener('panmove', function (e) {
      if (!e.isVertical && panning) {
        e.preventDefault();
        e.stopPropagation();
        displacement = e.displacementX;
        element.style[stylePrefix$2 + 'Transform']
          = getTranslate$1(transformOffset + displacement, 0);
      }
    });

    element.addEventListener('panend', function (e) {
      if (!e.isVertical && panning) {
        e.preventDefault();
        e.stopPropagation();
        panning = false;
        if (e.isSwipe) {
          if (displacement < 0) {
            items.next();
          } else {
            items.prev();
          }
        } else {
          if (Math.abs(displacement) < itemStep / 2) {
            items.slide(0);
          } else {
            items.slide(displacement < 0?1:-1);
          }
        }

        if (autoplay) {
          setTimeout$1(function () {
            that.play();
          }, 2000);
        }
      }
    }, false);

    element.addEventListener('swipe', function (e) {
      if (!e.isVertical) {
        e.preventDefault();
        e.stopPropagation();
      }
    });
  }

  this.addEventListener = function (name, handler) {
    this.root.addEventListener(name, handler, false);
  };

  this.removeEventListener = function (name, handler) {
    this.root.removeEventListener(name, handler, false);
  };

  this.root = root;
  this.element = element;
}

!lib && (lib = {});
lib.carrousel = Carrousel;

__$styleInject(".slider {\n  position: relative;\n}\n\n.slider .indicator-container {\n  position: absolute;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-align: center;\n  box-align: center;\n  -webkit-align-items: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  box-pack: center;\n  -webkit-justify-content: center;\n  justify-content: center;\n  font-size: 0;\n}\n.slider .indicator-container .indicator {\n  border-radius: 50%;\n}\n.slider .indicator-container.row {\n  -webkit-box-orient: horizontal;\n  box-orient: horizontal;\n  -webkit-flex-direction: row;\n  flex-direction: row;\n}\n.slider .indicator-container.column {\n  -webkit-box-orient: vertical;\n  box-orient: vertical;\n  -webkit-flex-direction: column;\n  flex-direction: column;\n}\n",undefined);

/* global lib */

var DEFAULT_INTERVAL = 3000;

var extend$1;
var Component$2;

function idleWhenPageDisappear (slider) {
  function handlePageShow () {
    slider.isPageShow = true;
    slider.autoPlay && !slider.isDomRendering && slider.play();
  }
  function handlePageHide () {
    slider.isPageShow = false;
    slider.stop();
  }
  global.addEventListener('pageshow', handlePageShow);
  global.addEventListener('pagehide', handlePageHide);
  document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'visible') {
      handlePageShow();
    }
    else if (document.visibilityState === 'hidden') {
      handlePageHide();
    }
  });
}

function idleWhenDomRendering (slider) {
  global.addEventListener('renderend', function () {
    slider.isDomRendering = false;
    slider.autoPlay && slider.isPageShow && slider.play();
  });
  global.addEventListener('renderbegin', function () {
    slider.isDomRendering = true;
    slider.stop();
  });
}

function updateIndicators (slider) {
  slider.indicator && slider.indicator.setIndex(slider.currentIndex);
}

function getSliderChangeHandler (slider) {
  if (!slider._sliderChangeHandler) {
    slider._sliderChangeHandler = function (e) {
      var index = this.carrousel.items.index;
      this.currentIndex = index;
      updateIndicators(this);
      this.dispatchEvent('change', { index: index });
    }.bind(slider);
  }
  return slider._sliderChangeHandler
}

function doRender (slider) {
  slider.createChildren();
  slider.onAppend();
}

var proto$6 = {
  create: function create () {
    var node = document.createElement('div');
    node.classList.add('slider');
    node.style.position = 'relative';
    node.style.overflow = 'hidden';
    return node
  },

  createChildren: function createChildren () {
    var this$1 = this;

    var componentManager = this.getComponentManager();

    // recreate slider container.
    if (this.sliderContainer) {
      this.node.removeChild(this.sliderContainer);
    }
    if (this.indicator) {
      this.indicator.node.parentNode.removeChild(this.indicator.node);
    }
    this.children = [];

    var sliderContainer = document.createElement('ul');
    sliderContainer.style.listStyle = 'none';
    this.node.appendChild(sliderContainer);
    this.sliderContainer = sliderContainer;

    var children = this.data.children;
    var scale = this.data.scale;
    var fragment = document.createDocumentFragment();
    var indicatorData, width, height;
    var childWidth = 0;
    var childHeight = 0;

    if (children && children.length) {
      for (var i = 0; i < children.length; i++) {
        var child = void 0;
        children[i].scale = this$1.data.scale;
        children[i].instanceId = this$1.data.instanceId;
        if (children[i].type === 'indicator') {
          indicatorData = extend$1(children[i], {
            extra: {
              amount: children.length - 1,
              index: 0
            }
          });
        }
        else {
          child = componentManager.createElement(children[i], 'li');
          this$1.children.push(child);
          fragment.appendChild(child.node);
          width = child.data.style.width || 0;
          height = child.data.style.height || 0;
          width > childWidth && (childWidth = width);
          height > childHeight && (childHeight = height);
          child.parentRef = this$1.data.ref;
        }
      }
      // append indicator
      if (indicatorData) {
        indicatorData.extra.width = this.data.style.width || childWidth;
        indicatorData.extra.height = this.data.style.height || childHeight;
        this.indicator = componentManager.createElement(indicatorData);
        this.indicator.parentRef = this.data.ref;
        this.indicator.slider = this;
        this.node.appendChild(this.indicator.node);
      }

      sliderContainer.style.height = scale * this.data.style.height + 'px';
      sliderContainer.appendChild(fragment);
    }
  },

  appendChild: function appendChild (data) {
    var children = this.data.children || (this.data.children = []);
    children.push(data);
    doRender(this);
    if (this.children.length > 0) {
      return this.children[this.children.length - 1]
    }
  },

  insertBefore: function insertBefore (child, before) {
    var children = this.data.children;
    var childIndex = -1;
    for (var i = 0, l = children.length; i < l; i++) {
      if (children[i].ref === before.data.ref) {
        childIndex = i;
        break
      }
    }
    children.splice(childIndex, 0, child.data);
    doRender(this);
    if (this.children.length > 0) {
      return this.children[this.children.length - 1]
    }
  },

  removeChild: function removeChild (child) {
    var children = this.data.children;
    if (children) {
      for (var i = 0; i < children.length; i++) {
        if (child.data.ref === children[i].ref) {
          children.splice(i, 1);
          break
        }
      }
    }
    doRender(this);
  },

  onAppend: function onAppend () {
    if (this.carrousel) {
      this.carrousel.removeEventListener('change', getSliderChangeHandler(this));
      this.carrousel.stop();
      this.carrousel = null;
    }
    var Carrousel = lib.carrousel;
    this.carrousel = new Carrousel(this.sliderContainer, {
      autoplay: this.autoPlay,
      useGesture: true
    });

    this.carrousel.playInterval = this.interval;
    this.carrousel.addEventListener('change', getSliderChangeHandler(this));
    this.currentIndex = 0;

    // preload all images for slider
    // because:
    // 1. lib-img doesn't listen to event transitionend
    // 2. even if we fire lazy load in slider's change event handler,
    //    the next image still won't be preloaded utill the moment it
    //    slides into the view, which is too late.
    if (this.preloadImgsTimer) {
      clearTimeout(this.preloadImgsTimer);
    }
    // The time just before the second slide appear and enough
    // for all child elements to append is ok.
    var preloadTime = 0.8;
    this.preloadImgsTimer = setTimeout(function () {
      var imgs = this.carrousel.element.querySelectorAll('.weex-img');
      for (var i = 0, l = imgs.length; i < l; i++) {
        var img = imgs[i];
        var iLazySrc = img.getAttribute('i-lazy-src');
        var imgSrc = img.getAttribute('img-src');
        if (iLazySrc) {
          img.style.backgroundImage = 'url(' + iLazySrc + ')';
        }
        else if (imgSrc) {
          img.style.backgroundImage = 'url(' + imgSrc + ')';
        }
        img.removeAttribute('i-lazy-src');
        img.removeAttribute('img-src');
      }
    }.bind(this), preloadTime * 1000);

    // avoid page scroll when panning
    var panning = false;
    this.carrousel.element.addEventListener('panstart', function (e) {
      if (!e.isVertical) {
        panning = true;
      }
    });
    this.carrousel.element.addEventListener('panend', function (e) {
      if (!e.isVertical) {
        panning = false;
      }
    });

    document.addEventListener('touchmove', function (e) {
      if (panning) {
        e.preventDefault();
        return false
      }
      return true
    });

    Component$2.prototype.onAppend.call(this);
  },

  play: function play () {
    this.carrousel.play();
  },

  stop: function stop () {
    this.carrousel.stop();
  },

  slideTo: function slideTo (index) {
    var offset = index - this.currentIndex;
    this.carrousel.items.slide(offset);
  }
};

var attr$6 = {
  interval: function (val) {
    this.interval = parseInt(val) || DEFAULT_INTERVAL;
    if (this.carrousel) {
      this.carrousel.playInterval = this.interval;
    }
  },

  index: function (val) {
    var _this = this;
    function doSlide (index) {
      index = parseInt(index);
      if (index < 0 || isNaN(index)) {
        return console.error('[h5-render] invalid index ', index)
      }
      _this.slideTo(index);
      if (_this._updateIndex) {
        window.removeEventListener('renderend', _this._updateIndex);
      }
    }
    if (this.isDomRendering) {
      var pre = !!this._updateIndex;
      this._updateIndex = function () {
        _this.autoPlay && _this.isPageShow && _this.play();
        doSlide(val);
      };
      !pre && window.addEventListener('renderend', this._updateIndex);
    }
    else {
      doSlide(val);
    }
  },

  playstatus: function (val) {
    this.playstatus = val && val !== 'false';
    this.autoPlay = this.playstatus;
    if (this.carrousel) {
      if (this.playstatus) {
        this.play();
      }
      else {
        this.stop();
      }
    }
  },

  // support playstatus' alias auto-play for compatibility
  autoPlay: function (val) {
    this.attr.playstatus.call(this, val);
  }
};

var event = {
  change: {
    updator: function () {
      return {
        attrs: {
          index: this.currentIndex
        }
      }
    }
  }
};

function init$19 (Weex) {
  Component$2 = Weex.Component;
  extend$1 = Weex.utils.extend;

  function Slider (data) {
    this.autoPlay = false;  // default value is false.
    this.interval = DEFAULT_INTERVAL;
    this.direction = 'row'; // 'column' is not temporarily supported.
    this.children = [];
    this.isPageShow = true;
    this.isDomRendering = true;

    // bind event 'pageshow', 'pagehide' and 'visibilitychange' on window.
    idleWhenPageDisappear(this);
    // bind event 'renderBegin' and 'renderEnd' on window.
    idleWhenDomRendering(this);

    Component$2.call(this, data);
  }
  Slider.prototype = Object.create(Component$2.prototype);
  extend$1(Slider.prototype, proto$6);
  extend$1(Slider.prototype, { attr: attr$6 });
  extend$1(Slider.prototype, { event: event });

  Weex.registerComponent('slider', Slider);
}

var Slider = { init: init$19 };

__$styleInject(".weex-indicators {\n  position: absolute;\n  white-space: nowrap;\n}\n.weex-indicators .weex-indicator {\n  float: left;\n  border-radius: 50%;\n}\n",undefined);

var DEFAULT_ITEM_COLOR = '#999';
var DEFAULT_ITEM_SELECTED_COLOR = '#0000ff';
var DEFAULT_ITEM_SIZE = 20;
var DEFAULT_MARGIN_SIZE = 10;

function resetColor (indicator) {
  var len = indicator.items.length;
  if (typeof indicator.index !== 'undefined' && len > indicator.index) {
    for (var i = 0; i < len; i++) {
      var item = indicator.items[i];
      if (indicator.index === i) {
        item.classList.add('active');
        item.style.backgroundColor = indicator.itemSelectedColor;
      }
      else {
        item.style.backgroundColor = indicator.itemColor;
      }
    }
  }
}

function handleClick (indicator, idx, e) {
  indicator.slider.slideTo(idx);
}

var proto$7 = {
  create: function create () {
    var node = document.createElement('div');
    node.classList.add('weex-indicators');
    node.classList.add('weex-element');
    node.style.position = 'absolute';
    this.node = node;
    this.style.itemSize.call(this, 0);
    this.updateStyle({
      left: 0,
      top: 0,
      itemSize: 0
    });
    return node
  },

  createChildren: function createChildren () {
    var this$1 = this;

    var root = document.createDocumentFragment();
    for (var i = 0; i < this.amount; i++) {
      var indicator = document.createElement('div');
      indicator.classList.add('weex-indicator');
      indicator.style.boxSizing = 'border-box';
      indicator.style.margin = '0 '
                              + (DEFAULT_MARGIN_SIZE * this$1.data.scale)
                              + 'px';
      indicator.style.width = this$1.itemSize + 'px';
      indicator.style.height = this$1.itemSize + 'px';
      indicator.setAttribute('index', i);
      if (this$1.index === i) {
        indicator.classList.add('active');
        indicator.style.backgroundColor = this$1.itemSelectedColor;
      }
      else {
        indicator.style.backgroundColor = this$1.itemColor;
      }
      indicator.addEventListener('click', handleClick.bind(null, this$1, i));
      this$1.items[i] = indicator;
      root.appendChild(indicator);
    }
    this.node.appendChild(root);
  },

  setIndex: function setIndex (idx) {
    if (idx >= this.amount) {
      return
    }
    var prev = this.items[this.index];
    var cur = this.items[idx];
    prev.classList.remove('active');
    prev.style.backgroundColor = this.itemColor;
    cur.classList.add('active');
    cur.style.backgroundColor = this.itemSelectedColor;
    this.index = idx;
  }
};

var style$5 = {
  itemColor: function itemColor (val) {
    this.itemColor = val || DEFAULT_ITEM_COLOR;
    resetColor(this);
  },

  itemSelectedColor: function itemSelectedColor (val) {
    this.itemSelectedColor = val || DEFAULT_ITEM_SELECTED_COLOR;
    resetColor(this);
  },

  itemSize: function itemSize (val) {
    var this$1 = this;

    val = parseInt(val) * this.data.scale
          || DEFAULT_ITEM_SIZE * this.data.scale;
    this.itemSize = val;
    this.node.style.height = val + 'px';
    for (var i = 0, l = this.items.length; i < l; i++) {
      this$1.items[i].style.width = val + 'px';
      this$1.items[i].style.height = val + 'px';
    }
  },

  width: function width (val) {
    val = parseInt(val) * this.data.scale || parseInt(this.sliderWidth);
    this.virtualWrapperWidth = val;
  },

  height: function height (val) {
    val = parseInt(val) * this.data.scale || parseInt(this.sliderHeight);
    this.virtualWrapperHeight = val;
  },

  top: function top (val) {
    val = this.virtualWrapperHeight / 2 - this.itemSize / 2
        + val * this.data.scale;
    this.node.style.bottom = '';
    this.node.style.top = val + 'px';
  },

  bottom: function bottom (val) {
    val = this.virtualWrapperHeight / 2 - this.itemSize / 2
        + val * this.data.scale;
    this.node.style.top = '';
    this.node.style.bottom = val + 'px';
  },

  left: function left (val) {
    val = this.virtualWrapperWidth / 2
          - (this.itemSize + 2 * DEFAULT_MARGIN_SIZE * this.data.scale)
              * this.amount / 2
          + val * this.data.scale;
    this.node.style.right = '';
    this.node.style.left = val + 'px';
  },

  right: function right (val) {
    val = this.virtualWrapperWidth / 2
          - (this.itemSize + 2 * DEFAULT_MARGIN_SIZE * this.data.scale)
              * this.amount / 2
          + val * this.data.scale;
    this.node.style.left = '';
    this.node.style.right = val + 'px';
  }
};

function init$20 (Weex) {
  var Atomic = Weex.Atomic;
  var extend = Weex.utils.extend;

  // Style supported:
  //   position: (default - absolute)
  //   itemColor: color of indicator dots
  //   itemSelectedColor: color of the selected indicator dot
  //   itemSize: size of indicators
  //   other layout styles
  function Indicator (data) {
    this.direction = 'row'; // 'column' is not temporarily supported.
    this.amount = data.extra.amount;
    this.index = data.extra.index;
    this.sliderWidth = data.extra.width;
    this.sliderHeight = data.extra.height;
    var styles = data.style || {};
    this.data = data;
    this.style.width.call(this, styles.width);
    this.style.height.call(this, styles.height);
    this.itemColor = styles.itemColor || DEFAULT_ITEM_COLOR;
    this.itemSelectedColor = styles.itemSelectedColor
      || DEFAULT_ITEM_SELECTED_COLOR;
    this.items = [];
    Atomic.call(this, data);
  }
  Indicator.prototype = Object.create(Atomic.prototype);
  extend(Indicator.prototype, proto$7);
  extend(Indicator.prototype, {
    style: extend(Object.create(Atomic.prototype.style), style$5)
  });

  Weex.registerComponent('indicator', Indicator);
}

var Indicator = { init: init$20 };

__$styleInject(".tab-header {\n  position: relative;\n  width: 10rem;\n  font-size: 14px;\n  color: #333;\n}\n.tab-header .header-bar {\n  height: 1.17rem;\n  line-height: 1.17rem;\n  display: none;\n  color: #999;\n  padding-left: 0.4rem;\n}\n.tab-header .header-body {\n  margin-right: 1.07rem;\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n.tab-header .header-body::-webkit-scrollbar {\n  width: 0;\n  height: 0;\n  overflow: hidden;\n}\n.tab-header .fold-toggle {\n  position: absolute;\n  top: 0.59rem;\n  -webkit-transform: translateY(-50%);\n  right: 0.29rem;\n  width: 0.48rem;\n  height: 0.48rem;\n  line-height: 0.48rem;\n  text-align: center;\n  z-index: 99;\n  font-size: 14px;\n}\n.tab-header.unfold-header {\n  position: fixed !important;\n  top: 0;\n  left: 0;\n  overflow: hidden;\n}\n\n.tabheader {\n  list-style: none;\n  white-space: nowrap;\n  height: 1.17rem;\n  line-height: 1.17rem;\n}\n.tabheader .th-item {\n  padding-left: 0.72rem;\n  position: relative;\n  display: inline-block;\n}\n.tabheader .hl-icon {\n  width: 0.4rem;\n  height: 0.4rem;\n  line-height: 0.4rem;\n  text-align: center;\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n  left: 0.24rem;\n  font-size: 14px;\n}\n\n.unfold-header .header-bar {\n  display: block;\n}\n.unfold-header .fold-toggle {\n  -webkit-transform: translateY(-50%) rotate(180deg);\n}\n.unfold-header .header-body {\n  margin-right: 0;\n  padding: 0.24rem;\n}\n.unfold-header .tabheader {\n  display: block;\n  height: auto;\n}\n.unfold-header .th-item {\n  box-sizing: border-box;\n  float: left;\n  width: 33.3333%;\n  height: 1.01rem;\n  line-height: 1.01rem;\n}\n.unfold-header .hl-icon {\n  margin-right: 0;\n  position: absolute;\n}\n.unfold-header.tabheader-mask {\n  display: block;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.6);\n}\n\n.tabheader-mask {\n  display: none;\n  position: fixed;\n  left: 0;\n  top: 0;\n}\n\n@font-face {\n  font-family: \"iconfont\";\n  src: url(\"data:application/x-font-ttf;charset=utf-8;base64,AAEAAAAPAIAAAwBwRkZUTXBD98UAAAD8AAAAHE9TLzJXL1zIAAABGAAAAGBjbWFws6IHbgAAAXgAAAFaY3Z0IAyV/swAAApQAAAAJGZwZ20w956VAAAKdAAACZZnYXNwAAAAEAAACkgAAAAIZ2x5ZuxoPFIAAALUAAAEWGhlYWQHA5h3AAAHLAAAADZoaGVhBzIDcgAAB2QAAAAkaG10eAs2AW0AAAeIAAAAGGxvY2EDcAQeAAAHoAAAABBtYXhwASkKKwAAB7AAAAAgbmFtZQl/3hgAAAfQAAACLnBvc3Tm7f0bAAAKAAAAAEhwcmVwpbm+ZgAAFAwAAACVAAAAAQAAAADMPaLPAAAAANIDKnoAAAAA0gMqewAEA/oB9AAFAAACmQLMAAAAjwKZAswAAAHrADMBCQAAAgAGAwAAAAAAAAAAAAEQAAAAAAAAAAAAAABQZkVkAMAAeObeAyz/LABcAxgAlAAAAAEAAAAAAxgAAAAAACAAAQAAAAMAAAADAAAAHAABAAAAAABUAAMAAQAAABwABAA4AAAACgAIAAIAAgB45lDmYebe//8AAAB45lDmYebe////ixm0GaQZKAABAAAAAAAAAAAAAAAAAQYAAAEAAAAAAAAAAQIAAAACAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACACIAAAEyAqoAAwAHAClAJgAAAAMCAANXAAIBAQJLAAICAU8EAQECAUMAAAcGBQQAAwADEQUPKzMRIREnMxEjIgEQ7szMAqr9ViICZgAAAAUALP/hA7wDGAAWADAAOgBSAF4Bd0uwE1BYQEoCAQANDg0ADmYAAw4BDgNeAAEICAFcEAEJCAoGCV4RAQwGBAYMXgALBAtpDwEIAAYMCAZYAAoHBQIECwoEWRIBDg4NUQANDQoOQhtLsBdQWEBLAgEADQ4NAA5mAAMOAQ4DXgABCAgBXBABCQgKCAkKZhEBDAYEBgxeAAsEC2kPAQgABgwIBlgACgcFAgQLCgRZEgEODg1RAA0NCg5CG0uwGFBYQEwCAQANDg0ADmYAAw4BDgNeAAEICAFcEAEJCAoICQpmEQEMBgQGDARmAAsEC2kPAQgABgwIBlgACgcFAgQLCgRZEgEODg1RAA0NCg5CG0BOAgEADQ4NAA5mAAMOAQ4DAWYAAQgOAQhkEAEJCAoICQpmEQEMBgQGDARmAAsEC2kPAQgABgwIBlgACgcFAgQLCgRZEgEODg1RAA0NCg5CWVlZQChTUzs7MjEXF1NeU15bWDtSO1JLQzc1MToyOhcwFzBRETEYESgVQBMWKwEGKwEiDgIdASE1NCY1NC4CKwEVIQUVFBYUDgIjBiYrASchBysBIiciLgI9ARciBhQWMzI2NCYXBgcOAx4BOwYyNicuAScmJwE1ND4COwEyFh0BARkbGlMSJRwSA5ABChgnHoX+SgKiARUfIw4OHw4gLf5JLB0iFBkZIBMIdwwSEgwNEhKMCAYFCwQCBA8OJUNRUEAkFxYJBQkFBQb+pAUPGhW8HykCHwEMGScaTCkQHAQNIBsSYYg0Fzo6JRcJAQGAgAETGyAOpz8RGhERGhF8GhYTJA4QDQgYGg0jERMUAXfkCxgTDB0m4wAAAgCg/2wDYALsABIAGgAhQB4AAAADAgADWQACAQECTQACAgFRAAECAUUTFjkQBBIrACAGFRQeAxcWOwEyPwESNTQAIiY0NjIWFAKS/tzORFVvMRAJDgEOCW3b/uKEXl6EXgLszpI1lXyJNhEKC30BDIyS/s5ehF5ehAAAAAEAggBJA4QB6AAdABtAGBIRAgEAAUAFAQA+AAABAGgAAQFfEx8CECsBJgcGBwkBLgEGBwYUFwEwMxcVFjI3AT4DLgIDehEWAwP+uP60BhEQBgoKAWEBAQoaCQFeAwQCAQECBAHhEg0DAv61AUkHBAUGCRsJ/qIBAQkJAWICBwYHCAYGAAEAfwCLA4ECJwAhAB1AGhYPAgEAAUAFAQA+AAABAGgCAQEBXyQuEwMRKyUBMCcjNSYHBgcBDgEUFhceAjMyNwkBFjMyNjc+Ai4BA3f+nwEBEhUEAv6iBQUFBQMHCAQOCQFIAUwKDQYMBQMFAQEFwwFeAQERDQID/p8FDAwMBAMEAgkBS/62CQUFAwoJCgkAAAEAAAABAAALIynoXw889QALBAAAAAAA0gMqewAAAADSAyp7ACL/bAO8AxgAAAAIAAIAAAAAAAAAAQAAAxj/bABcBAAAAAAAA7wAAQAAAAAAAAAAAAAAAAAAAAUBdgAiAAAAAAFVAAAD6QAsBAAAoACCAH8AAAAoACgAKAFkAaIB5AIsAAEAAAAHAF8ABQAAAAAAAgAmADQAbAAAAIoJlgAAAAAAAAAMAJYAAQAAAAAAAQAIAAAAAQAAAAAAAgAGAAgAAQAAAAAAAwAkAA4AAQAAAAAABAAIADIAAQAAAAAABQBGADoAAQAAAAAABgAIAIAAAwABBAkAAQAQAIgAAwABBAkAAgAMAJgAAwABBAkAAwBIAKQAAwABBAkABAAQAOwAAwABBAkABQCMAPwAAwABBAkABgAQAYhpY29uZm9udE1lZGl1bUZvbnRGb3JnZSAyLjAgOiBpY29uZm9udCA6IDI2LTgtMjAxNWljb25mb250VmVyc2lvbiAxLjAgOyB0dGZhdXRvaGludCAodjAuOTQpIC1sIDggLXIgNTAgLUcgMjAwIC14IDE0IC13ICJHIiAtZiAtc2ljb25mb250AGkAYwBvAG4AZgBvAG4AdABNAGUAZABpAHUAbQBGAG8AbgB0AEYAbwByAGcAZQAgADIALgAwACAAOgAgAGkAYwBvAG4AZgBvAG4AdAAgADoAIAAyADYALQA4AC0AMgAwADEANQBpAGMAbwBuAGYAbwBuAHQAVgBlAHIAcwBpAG8AbgAgADEALgAwACAAOwAgAHQAdABmAGEAdQB0AG8AaABpAG4AdAAgACgAdgAwAC4AOQA0ACkAIAAtAGwAIAA4ACAALQByACAANQAwACAALQBHACAAMgAwADAAIAAtAHgAIAAxADQAIAAtAHcAIAAiAEcAIgAgAC0AZgAgAC0AcwBpAGMAbwBuAGYAbwBuAHQAAAACAAAAAAAA/4MAMgAAAAAAAAAAAAAAAAAAAAAAAAAAAAcAAAABAAIAWwECAQMBBAd1bmlFNjUwB3VuaUU2NjEHdW5pRTZERQABAAH//wAPAAAAAAAAAAAAAAAAAAAAAAAyADIDGP/hAxj/bAMY/+EDGP9ssAAssCBgZi2wASwgZCCwwFCwBCZasARFW1ghIyEbilggsFBQWCGwQFkbILA4UFghsDhZWSCwCkVhZLAoUFghsApFILAwUFghsDBZGyCwwFBYIGYgiophILAKUFhgGyCwIFBYIbAKYBsgsDZQWCGwNmAbYFlZWRuwACtZWSOwAFBYZVlZLbACLCBFILAEJWFkILAFQ1BYsAUjQrAGI0IbISFZsAFgLbADLCMhIyEgZLEFYkIgsAYjQrIKAAIqISCwBkMgiiCKsAArsTAFJYpRWGBQG2FSWVgjWSEgsEBTWLAAKxshsEBZI7AAUFhlWS2wBCywCCNCsAcjQrAAI0KwAEOwB0NRWLAIQyuyAAEAQ2BCsBZlHFktsAUssABDIEUgsAJFY7ABRWJgRC2wBiywAEMgRSCwACsjsQQEJWAgRYojYSBkILAgUFghsAAbsDBQWLAgG7BAWVkjsABQWGVZsAMlI2FERC2wByyxBQVFsAFhRC2wCCywAWAgILAKQ0qwAFBYILAKI0JZsAtDSrAAUlggsAsjQlktsAksILgEAGIguAQAY4ojYbAMQ2AgimAgsAwjQiMtsAosS1RYsQcBRFkksA1lI3gtsAssS1FYS1NYsQcBRFkbIVkksBNlI3gtsAwssQANQ1VYsQ0NQ7ABYUKwCStZsABDsAIlQrIAAQBDYEKxCgIlQrELAiVCsAEWIyCwAyVQWLAAQ7AEJUKKiiCKI2GwCCohI7ABYSCKI2GwCCohG7AAQ7ACJUKwAiVhsAgqIVmwCkNHsAtDR2CwgGIgsAJFY7ABRWJgsQAAEyNEsAFDsAA+sgEBAUNgQi2wDSyxAAVFVFgAsA0jQiBgsAFhtQ4OAQAMAEJCimCxDAQrsGsrGyJZLbAOLLEADSstsA8ssQENKy2wECyxAg0rLbARLLEDDSstsBIssQQNKy2wEyyxBQ0rLbAULLEGDSstsBUssQcNKy2wFiyxCA0rLbAXLLEJDSstsBgssAcrsQAFRVRYALANI0IgYLABYbUODgEADABCQopgsQwEK7BrKxsiWS2wGSyxABgrLbAaLLEBGCstsBsssQIYKy2wHCyxAxgrLbAdLLEEGCstsB4ssQUYKy2wHyyxBhgrLbAgLLEHGCstsCEssQgYKy2wIiyxCRgrLbAjLCBgsA5gIEMjsAFgQ7ACJbACJVFYIyA8sAFgI7ASZRwbISFZLbAkLLAjK7AjKi2wJSwgIEcgILACRWOwAUViYCNhOCMgilVYIEcgILACRWOwAUViYCNhOBshWS2wJiyxAAVFVFgAsAEWsCUqsAEVMBsiWS2wJyywByuxAAVFVFgAsAEWsCUqsAEVMBsiWS2wKCwgNbABYC2wKSwAsANFY7ABRWKwACuwAkVjsAFFYrAAK7AAFrQAAAAAAEQ+IzixKAEVKi2wKiwgPCBHILACRWOwAUViYLAAQ2E4LbArLC4XPC2wLCwgPCBHILACRWOwAUViYLAAQ2GwAUNjOC2wLSyxAgAWJSAuIEewACNCsAIlSYqKRyNHI2EgWGIbIVmwASNCsiwBARUUKi2wLiywABawBCWwBCVHI0cjYbAGRStlii4jICA8ijgtsC8ssAAWsAQlsAQlIC5HI0cjYSCwBCNCsAZFKyCwYFBYILBAUVizAiADIBuzAiYDGllCQiMgsAlDIIojRyNHI2EjRmCwBEOwgGJgILAAKyCKimEgsAJDYGQjsANDYWRQWLACQ2EbsANDYFmwAyWwgGJhIyAgsAQmI0ZhOBsjsAlDRrACJbAJQ0cjRyNhYCCwBEOwgGJgIyCwACsjsARDYLAAK7AFJWGwBSWwgGKwBCZhILAEJWBkI7ADJWBkUFghGyMhWSMgILAEJiNGYThZLbAwLLAAFiAgILAFJiAuRyNHI2EjPDgtsDEssAAWILAJI0IgICBGI0ewACsjYTgtsDIssAAWsAMlsAIlRyNHI2GwAFRYLiA8IyEbsAIlsAIlRyNHI2EgsAUlsAQlRyNHI2GwBiWwBSVJsAIlYbABRWMjIFhiGyFZY7ABRWJgIy4jICA8ijgjIVktsDMssAAWILAJQyAuRyNHI2EgYLAgYGawgGIjICA8ijgtsDQsIyAuRrACJUZSWCA8WS6xJAEUKy2wNSwjIC5GsAIlRlBYIDxZLrEkARQrLbA2LCMgLkawAiVGUlggPFkjIC5GsAIlRlBYIDxZLrEkARQrLbA3LLAuKyMgLkawAiVGUlggPFkusSQBFCstsDgssC8riiAgPLAEI0KKOCMgLkawAiVGUlggPFkusSQBFCuwBEMusCQrLbA5LLAAFrAEJbAEJiAuRyNHI2GwBkUrIyA8IC4jOLEkARQrLbA6LLEJBCVCsAAWsAQlsAQlIC5HI0cjYSCwBCNCsAZFKyCwYFBYILBAUVizAiADIBuzAiYDGllCQiMgR7AEQ7CAYmAgsAArIIqKYSCwAkNgZCOwA0NhZFBYsAJDYRuwA0NgWbADJbCAYmGwAiVGYTgjIDwjOBshICBGI0ewACsjYTghWbEkARQrLbA7LLAuKy6xJAEUKy2wPCywLyshIyAgPLAEI0IjOLEkARQrsARDLrAkKy2wPSywABUgR7AAI0KyAAEBFRQTLrAqKi2wPiywABUgR7AAI0KyAAEBFRQTLrAqKi2wPyyxAAEUE7ArKi2wQCywLSotsEEssAAWRSMgLiBGiiNhOLEkARQrLbBCLLAJI0KwQSstsEMssgAAOistsEQssgABOistsEUssgEAOistsEYssgEBOistsEcssgAAOystsEgssgABOystsEkssgEAOystsEossgEBOystsEsssgAANystsEwssgABNystsE0ssgEANystsE4ssgEBNystsE8ssgAAOSstsFAssgABOSstsFEssgEAOSstsFIssgEBOSstsFMssgAAPCstsFQssgABPCstsFUssgEAPCstsFYssgEBPCstsFcssgAAOCstsFgssgABOCstsFkssgEAOCstsFossgEBOCstsFsssDArLrEkARQrLbBcLLAwK7A0Ky2wXSywMCuwNSstsF4ssAAWsDArsDYrLbBfLLAxKy6xJAEUKy2wYCywMSuwNCstsGEssDErsDUrLbBiLLAxK7A2Ky2wYyywMisusSQBFCstsGQssDIrsDQrLbBlLLAyK7A1Ky2wZiywMiuwNistsGcssDMrLrEkARQrLbBoLLAzK7A0Ky2waSywMyuwNSstsGossDMrsDYrLbBrLCuwCGWwAyRQeLABFTAtAABLuADIUlixAQGOWbkIAAgAYyCwASNEILADI3CwDkUgIEu4AA5RS7AGU1pYsDQbsChZYGYgilVYsAIlYbABRWMjYrACI0SzCgkFBCuzCgsFBCuzDg8FBCtZsgQoCUVSRLMKDQYEK7EGAUSxJAGIUViwQIhYsQYDRLEmAYhRWLgEAIhYsQYBRFlZWVm4Af+FsASNsQUARAAAAA==\") format(\"truetype\");\n}\n.iconfont {\n  font-family: iconfont !important;\n  font-size: 16px;\n  font-style: normal;\n  -webkit-font-smoothing: antialiased;\n  -webkit-text-stroke-width: 0.2px;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n[data-dpr=\"2\"] .tab-header {\n  font-size: 28px;\n}\n\n[data-dpr=\"3\"] .tab-header {\n  font-size: 42px;\n}\n\n[data-dpr=\"2\"] .tabheader .hl-icon {\n  font-size: 28px;\n}\n\n[data-dpr=\"3\"] .tabheader .hl-icon {\n  font-size: 42px;\n}\n\n[data-dpr=\"2\"] .tab-header .fold-toggle {\n  font-size: 28px;\n}\n\n[data-dpr=\"3\"] .tab-header .fold-toggle {\n  font-size: 42px;\n}\n",undefined);

// TODO: refactor this scss code since this is strongly
// dependent on lib.flexible other than the value of
// scale.
function initFoldBtn (tabheader) {
  var node = tabheader.node;
  var btn = document.createElement('span');
  btn.className = 'fold-toggle iconfont';
  btn.innerHTML = '&#xe661;';
  node.appendChild(btn);

  btn.addEventListener('click', function () {
    if (tabheader.unfolding) {
      folding(tabheader);
    }
    else {
      unfolding(tabheader);
    }
  });
}

function initMask (tabheader) {
  var mask = document.createElement('div');
  mask.className = 'tabheader-mask';
  tabheader.mask = mask;
  // stop default behavior: page moving.
  mask.addEventListener('touchmove', function (evt) {
    evt.preventDefault();
  });
  // click to unfold.
  mask.addEventListener('click', function () {
    folding(tabheader);
  });

  document.body.appendChild(mask);
}

function unfolding (tabheader) {
  // mark the initial posiiton of tabheader
  if (!tabheader.flag) {
    var flag = document.createComment('tabheader');
    tabheader.flag = flag;
    tabheader.node.parentNode.insertBefore(flag, tabheader.node);
  }
  if (!tabheader.mask) {
    initMask(tabheader);
  }

  // record the scroll position.
  tabheader._scrollVal = tabheader._body.scrollLeft;
  // record the position in document.
  tabheader._topVal = tabheader.node.getBoundingClientRect().top;
  tabheader._styleTop = tabheader.node.style.top;

  document.body.appendChild(tabheader.node);
  tabheader.node.classList.add('unfold-header');
  tabheader.node.style.height = 'auto';
  // recalc the position when it is unfolded.
  var thHeight = tabheader.node.getBoundingClientRect().height;
  if (thHeight + tabheader._topVal > window.innerHeight) {
    tabheader._topVal = tabheader._topVal
        + (window.innerHeight - thHeight - tabheader._topVal);
  }

  tabheader.node.style.top = tabheader._topVal + 'px';
  // process mask style
  tabheader.mask.classList.add('unfold-header');
  tabheader.mask.style.height = window.innerHeight + 'px';
  tabheader.unfolding = true;
}

function folding (tabheader) {
  if (tabheader.unfolding !== true) {
    return
  }

  tabheader.mask.classList.remove('unfold-header');
  tabheader.node.classList.remove('unfold-header');

  tabheader.node.style.height = '';
  tabheader.node.style.top = tabheader._styleTop;

  // recover the position of tabheader.
  tabheader.flag.parentNode.insertBefore(tabheader.node, tabheader.flag);
  // recover the position of scoller.
  tabheader._body.scrollLeft = tabheader._scrollVal;

  scrollToView(tabheader);
  tabheader.unfolding = false;
}

function initEvent (tabheader) {
  initClickEvent(tabheader);
  initSelectEvent(tabheader);
}

// init events.
function initClickEvent (tabheader) {
  var box = tabheader.box;

  box.addEventListener('click', function (evt) {
    var target = evt.target;
    if (target.nodeName === 'UL') {
      return
    }

    if (target.parentNode.nodeName === 'LI') {
      target = target.parentNode;
    }

    var floor = target.getAttribute('data-floor');
    /* eslint-disable eqeqeq */
    if (tabheader.data.attr.selectedIndex == floor) {
      // Duplicated clicking, not to trigger select event.
      return
    }
    /* eslint-enable eqeqeq */

    fireEvent$4(target, 'select', { index: floor });
  });
}

function initSelectEvent (tabheader) {
  var node = tabheader.node;
  node.addEventListener('select', function (evt) {
    var index;
    if (evt.index !== undefined) {
      index = evt.index;
    }
    else if (evt.data && evt.data.index !== undefined) {
      index = evt.data.index;
    }

    if (index === undefined) {
      return
    }

    tabheader.attr.selectedIndex.call(tabheader, index);
  });
}

function scrollToView (tabheader, node) {
  if (!node) {
    var attr = tabheader.data.attr;
    node = tabheader.node.querySelector('[data-floor="' + attr.selectedIndex + '"]');
  }
  if (!node) {
    return
  }

  // const defaultVal = tabheader._body.scrollLeft
  // const leftVal = defaultVal - node.offsetLeft + 300

  var scrollVal = getScrollVal(tabheader._body.getBoundingClientRect(), node);
  doScroll$1(tabheader._body, scrollVal);
}

// scroll the tabheader.
// positive val means to scroll right.
// negative val means to scroll left.
function doScroll$1 (node, val, finish) {
  if (!val) {
    return
  }
  if (finish === undefined) {
    finish = Math.abs(val);
  }

  if (finish <= 0) {
    return
  }

  setTimeout(function () {
    if (val > 0) {
      node.scrollLeft += 2;
    }
    else {
      node.scrollLeft -= 2;
    }
    finish -= 2;

    doScroll$1(node, val, finish);
  });
}

// get scroll distance.
function getScrollVal (rect, node) {
  var left = node.previousSibling;
  var right = node.nextSibling;
  var scrollVal;

  // process left-side element first.
  if (left) {
    var leftRect = left.getBoundingClientRect();
    // only need to compare the value of left.
    if (leftRect.left < rect.left) {
      scrollVal = leftRect.left;
      return scrollVal
    }
  }

  if (right) {
    var rightRect = right.getBoundingClientRect();
    // compare the value of right.
    if (rightRect.right > rect.right) {
      scrollVal = rightRect.right - rect.right;
      return scrollVal
    }
  }

  // process current node, from left to right.
  var nodeRect = node.getBoundingClientRect();
  if (nodeRect.left < rect.left) {
    scrollVal = nodeRect.left;
  }
  else if (nodeRect.right > rect.right) {
    scrollVal = nodeRect.right - rect.right;
  }

  return scrollVal
}

// trigger and broadcast events.
function fireEvent$4 (element, type, data) {
  var evt = document.createEvent('Event');
  evt.data = data;
  for (var k in data) {
    if (data.hasOwnProperty(k)) {
      evt[k] = data[k];
    }
  }
  // need bubble.
  evt.initEvent(type, true, true);

  element.dispatchEvent(evt);
}

function createHighlightIcon (code) {
  var html = '<i class="hl-icon iconfont">' + '&#xe650' + '</i>';
  return html
}

function isValidColor (color) {
  if (!color) {
    return false
  }

  if (color.charAt(0) !== '#') {
    return false
  }

  if (color.length !== 7) {
    return false
  }

  return true
}

var proto$8 = {
  create: function create () {
    // outside container.
    var node = document.createElement('div');
    node.className = 'tab-header';
    // tip on the top.
    var bar = document.createElement('div');
    bar.className = 'header-bar';
    bar.textContent = 'CHANGE FLOOR';
    // middle layer.
    var body = document.createElement('div');
    body.className = 'header-body';
    var box = document.createElement('ul');
    box.className = 'tabheader';

    body.appendChild(box);
    node.appendChild(bar);
    node.appendChild(body);
    this._bar = bar;
    this._body = body;
    this.box = box;
    this.node = node;
    // init events.
    initFoldBtn(this);
    initEvent(this);
    return node
  }
};

var attr$7 = {
  highlightIcon: function highlightIcon () {
    return createHighlightIcon()
  },

  data: function data () {
    var attr = this.data.attr;
    // Ensure there is a default selected value.
    if (attr.selectedIndex === undefined) {
      attr.selectedIndex = 0;
    }

    var list = attr.data || [];
    var curItem = attr.selectedIndex;

    var ret = [];
    var itemTmpl = '<li class="th-item" data-floor="{{floor}}">'
        + '{{hlIcon}}{{floorName}}</li>';

    list.forEach(function (item, idx) {
      var html = itemTmpl.replace('{{floor}}', idx);
      /* eslint-disable eqeqeq */
      if (curItem == idx) {
        html = html.replace('{{hlIcon}}', createHighlightIcon());
      }
      else {
        html = html.replace('{{hlIcon}}', '');
      }
      /* eslint-enable eqeqeq */

      html = html.replace('{{floorName}}', item);

      ret.push(html);
    }, this);

    this.box.innerHTML = ret.join('');
  },

  selectedIndex: function selectedIndex (val) {
    var attr = this.data.attr;

    if (val === undefined) {
      val = 0;
    }

    // if (val == attr.selectedIndex) {
    //   return
    // }

    attr.selectedIndex = val;

    this.attr.data.call(this);

    folding(this);
    this.style.textHighlightColor.call(this, this.textHighlightColor);
  }
};

var style$6 = {
  opacity: function opacity (val) {
    if (val === undefined || val < 0 || val > 1) {
      val = 1;
    }

    this.node.style.opacity = val;
  },

  textColor: function textColor (val) {
    if (!isValidColor(val)) {
      return
    }

    this.node.style.color = val;
  },

  textHighlightColor: function textHighlightColor (val) {
    if (!isValidColor(val)) {
      return
    }
    this.textHighlightColor = val;
    var attr = this.data.attr;

    var node = this.node.querySelector('[data-floor="'
        + attr.selectedIndex + '"]');
    if (node) {
      node.style.color = val;
      scrollToView(this, node);
    }
  }
};

function init$21 (Weex) {
  var Atomic = Weex.Atomic;
  var extend = Weex.utils.extend;

  function TabHeader (data) {
    Atomic.call(this, data);
  }
  TabHeader.prototype = Object.create(Atomic.prototype);
  extend(TabHeader.prototype, proto$8);
  extend(TabHeader.prototype, { attr: attr$7 });
  extend(TabHeader.prototype, {
    style: extend(Object.create(Atomic.prototype.style), style$6)
  });

  Weex.registerComponent('tabheader', TabHeader);
}

var Tabheader = { init: init$21 };

var appendStyle$1;

var availableTypes = ['text', 'password', 'tel', 'email', 'url', 'date', 'time'];
var DEFAULT_TYPE = 'text';

function setPlaceholderColor (input, placeholderColor) {
  if (!placeholderColor) {
    return
  }
  var vendors = [
    '::-webkit-input-placeholder',
    ':-moz-placeholder',
    '::-moz-placeholder',
    ':-ms-input-placeholder',
    ':placeholder-shown'
  ];
  var css = '';
  var cssRule = 'color: ' + placeholderColor + ';';
  for (var i = 0, l = vendors.length; i < l; i++) {
    css += '.' + input.className + vendors[i] + '{'
           + cssRule + '}';
  }
  appendStyle$1(css, input.styleId, true);
}

var proto$9 = {
  create: function create () {
    var node = document.createElement('input');
    var uuid = Math.floor(10000000000000 * Math.random()) + Date.now();
    this.className = 'weex-ipt-' + uuid;
    this.styleId = 'weex-style-' + uuid;
    node.classList.add(this.className);
    node.classList.add('weex-element');
    this.placeholder && (node.placeholder = this.placeholder);
    return node
  },

  focus: function focus () {
    this.node.focus();
  },

  blur: function blur () {
    this.node.blur();
  }
};

// updatable attributes
var attr$8 = {
  disabled: function disabled (val) {
    this.node.disabled = !!val;
  },

  placeholder: function placeholder (val) {
    this.node.placeholder = val || '';
  },

  value: function value (val) {
    this.node.value = val || '';
  },

  autofocus: function autofocus (val) {
    this.node.autofocus = !!val;
  },

  type: function type (val) {
    this.node.type = availableTypes.indexOf(val) !== -1
      ? val
      : DEFAULT_TYPE;
  }
};

// updatable styles
var style$7 = {
  placeholderColor: function (val) {
    setPlaceholderColor(this, val);
  }
};

// events configurations
var event$1 = {
  input: {
    updator: function updator () {
      return {
        attrs: {
          value: this.node.value
        }
      }
    },
    extra: function extra () {
      return {
        value: this.node.value,
        timestamp: Date.now()
      }
    }
  },

  change: {
    updator: function () {
      return {
        attrs: {
          value: this.node.value
        }
      }
    },
    extra: function () {
      return {
        value: this.node.value,
        timestamp: Date.now()
      }
    }
  }
};

function init$22 (Weex) {
  var Atomic = Weex.Atomic;
  var extend = Weex.utils.extend;
  appendStyle$1 = Weex.utils.appendStyle;

  // attrs:
  //   - type: text|password|tel|email|url
  //   - value
  //   - placeholder
  //   - disabled
  //   - autofocus
  function Input (data) {
    Atomic.call(this, data);
  }
  Input.prototype = Object.create(Atomic.prototype);
  extend(Input.prototype, proto$9);
  extend(Input.prototype, { attr: attr$8 });
  extend(Input.prototype, {
    style: extend(Object.create(Atomic.prototype.style), style$7)
  });
  extend(Input.prototype, { event: event$1 });

  Weex.registerComponent('input', Input);
}

var Input = { init: init$22 };

var DEFAULT_ROWS = 2;

/**
 * attr:
 * rows: default is 2.
 * disabled
 * placeholder
 */

var proto$10 = {
  create: function create () {
    var node = document.createElement('textarea');
    node.classList.add('weex-element');
    node.classList.add('weex-textarea');
    return node
  }
};

// updatable attributes
var attr$9 = {
  rows: function rows (val) {
    this.node.rows = val || DEFAULT_ROWS;
  },
  disabled: function disabled (val) {
    this.node.disabled = !!val;
  },
  placeholder: function placeholder (val) {
    this.node.placeholder = val || '';
  },
  value: function value (val) {
    this.node.value = val || '';
  },
  autofocus: function autofocus (val) {
    this.node.autofocus = !!val;
  }
};

// events configurations
var event$2 = {
  input: {
    updator: function updator () {
      return {
        attrs: {
          value: this.node.value
        }
      }
    },
    extra: function extra () {
      return {
        value: this.node.value,
        timestamp: Date.now()
      }
    }
  },

  change: {
    updator: function () {
      return {
        attrs: {
          value: this.node.value
        }
      }
    },
    extra: function () {
      return {
        value: this.node.value,
        timestamp: Date.now()
      }
    }
  }
};

function init$23 (Weex) {
  var Atomic = Weex.Atomic;
  var extend = Weex.utils.extend;

  // attrs:
  //   - rows
  //   - disabled
  //   - placeholder
  function Textarea (data) {
    Atomic.call(this, data);
  }
  Textarea.prototype = Object.create(Atomic.prototype);
  extend(Textarea.prototype, proto$10);
  extend(Textarea.prototype, { attr: attr$9 });
  extend(Textarea.prototype, { event: event$2 });

  Weex.registerComponent('textarea', Textarea);
}

var Textarea = { init: init$23 };

__$styleInject(".weex-video {\n\tbackground-color: #000;\n}",undefined);

function getProto$2 (Weex) {
  var Atomic = Weex.Atomic;
  return {
    create: function create () {
      var this$1 = this;

      var node = document.createElement('video');
      node.classList.add('weex-video');
      node.classList.add('weex-element');
      node.controls = true;
      node.autoplay = this.autoPlay;
      node.setAttribute('playsinline', '');
      node.setAttribute('webkit-playsinline', '');
      node.setAttribute('play-status', this.playStatus);
      this.node = node;
      if (this.autoPlay && this.playStatus === 'play') {
        // set timer to avoid error: uncaught DOM exception: the play() request
        // was interrupted by a new load request.
        setTimeout(function () {
          this$1.play();
        }, 0);
      }
      return node
    },

    bindEvents: function bindEvents (evts) {
      var this$1 = this;

      Atomic.prototype.bindEvents.call(this, evts);

      // convert w3c-video events to weex-video events.
      var evtsMap = {
        start: 'play',
        finish: 'ended',
        fail: 'error'
      };
      for (var evtName in evtsMap) {
        this$1.node.addEventListener(evtsMap[evtName], function (type, e) {
          this.dispatchEvent(type, e.data);
        }.bind(this$1, evtName));
      }
    },

    play: function play () {
      var src = this.node.getAttribute('src');
      if (!src) {
        src = this.node.getAttribute('data-src');
        src && this.node.setAttribute('src', src);
      }
      try {
        this.node.play();
      }
      catch (err) {
        // DO NOTHING.
      }
    },

    pause: function pause () {
      this.node.pause();
    },

    stop: function stop () {
      this.node.pause();
      this.node.autoplay = false;
      this.node.setAttribute('data-src', this.node.src);
      this.node.src = '';
    }
  }
}

var attr$10 = {
  playStatus: function playStatus (val) {
    if (val !== 'play' && val !== 'stop' && val !== 'pause') {
      val = 'pause';
    }
    if (this.playStatus === val) {
      return
    }
    this.playStatus = val;
    this.node.setAttribute('play-status', val);
    this[this.playStatus]();
  },

  autoPlay: function autoPlay (val) {
    // DO NOTHING
  }
};

function init$24 (Weex) {
  var Atomic = Weex.Atomic;
  var extend = Weex.utils.extend;

  // attrs:
  //   - autoPlay: true | false (default: false)
  //   - playStatus: play | pause | stop
  //   - src: {string}
  //   - poster: {string}
  //   - loop: true | false (default: false)
  //   - muted: true | false (default: false)
  // events:
  //   - start
  //   - pause
  //   - finish
  //   - fail
  function Video (data) {
    var autoPlay = data.attr.autoPlay;
    var playStatus = data.attr.playStatus;
    this.autoPlay = autoPlay === true || autoPlay === 'true';
    if (playStatus !== 'play'
        && playStatus !== 'stop'
        && playStatus !== 'pause') {
      this.playStatus = 'pause';
    }
    else {
      this.playStatus = playStatus;
    }
    Atomic.call(this, data);
  }
  Video.prototype = Object.create(Atomic.prototype);
  extend(Video.prototype, getProto$2(Weex));
  extend(Video.prototype, { attr: attr$10 });

  Weex.registerComponent('video', Video);
}

var Video = { init: init$24 };

__$styleInject("/* switch defaults. */\n.weex-switch {\n  background-color: #fff;\n  border: 1px solid #dfdfdf;\n  cursor: pointer;\n  display: inline-block;\n  position: relative;\n  vertical-align: middle;\n  -moz-user-select: none;\n  -khtml-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  box-sizing: content-box;\n  background-clip: content-box;\n}\n\n.weex-switch > small {\n  background: #fff;\n  border-radius: 100%;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);\n  position: absolute;\n  top: 0;\n}\n",undefined);

var defaults = {
  color: '#64bd63',
  secondaryColor: '#dfdfdf',
  jackColor: '#fff',
  jackSecondaryColor: null,
  className: 'weex-switch',
  disabledOpacity: 0.5,
  speed: '0.4s',
  width: 100,
  height: 60,
  // is width and height scalable ?
  scalable: false
};

function transitionize (element, props) {
  var transitions = [];
  for (var key in props) {
    transitions.push(key + ' ' + props[key]);
  }
  element.style.transition = transitions.join(', ');
  element.style.webkitTransition = transitions.join(', ');
}

function setSize (comp) {
  var min = Math.min(comp.width, comp.height);
  var max = Math.max(comp.width, comp.height);
  comp.node.style.width = max + 'px';
  comp.node.style.height = min + 'px';
  comp.node.style.borderRadius = min / 2 + 'px';
  comp.jack.style.width
      = comp.jack.style.height
      = min + 'px';
}

function setPosition (comp, clicked) {
  var checked = comp.checked;
  var node = comp.node;
  var jack = comp.jack;

  if (clicked && checked) {
    checked = false;
  }
  else if (clicked && !checked) {
    checked = true;
  }

  if (checked === true) {
    comp.checked = true;

    if (window.getComputedStyle) {
      jack.style.left = parseInt(window.getComputedStyle(node).width)
                        - parseInt(window.getComputedStyle(jack).width) + 'px';
    }
    else {
      jack.style.left = parseInt(node.currentStyle['width'])
                        - parseInt(jack.currentStyle['width']) + 'px';
    }

    comp.options.color && colorize(comp);
    setSpeed(comp);
  }
  else {
    comp.checked = false;
    jack.style.left = 0;
    node.style.boxShadow = 'inset 0 0 0 0 ' + comp.options.secondaryColor;
    node.style.borderColor = comp.options.secondaryColor;
    node.style.backgroundColor
        = (comp.options.secondaryColor !== defaults.secondaryColor)
          ? comp.options.secondaryColor
          : '#fff';
    jack.style.backgroundColor
        = (comp.options.jackSecondaryColor !== comp.options.jackColor)
          ? comp.options.jackSecondaryColor
          : comp.options.jackColor;
    setSpeed(comp);
  }
}

function setSpeed (comp) {
  var switcherProp = {};
  var jackProp = {
    'background-color': comp.options.speed,
    left: comp.options.speed.replace(/[a-z]/, '') / 2 + 's'
  };

  if (comp.checked) {
    switcherProp = {
      border: comp.options.speed,
      'box-shadow': comp.options.speed,
      'background-color': comp.options.speed.replace(/[a-z]/, '') * 3 + 's'
    };
  }
  else {
    switcherProp = {
      border: comp.options.speed,
      'box-shadow': comp.options.speed
    };
  }

  transitionize(comp.node, switcherProp);
  transitionize(comp.jack, jackProp);
}

function colorize (comp) {
  var nodeHeight = comp.node.offsetHeight / 2;

  comp.node.style.backgroundColor = comp.options.color;
  comp.node.style.borderColor = comp.options.color;
  comp.node.style.boxShadow = 'inset 0 0 0 '
                              + nodeHeight
                              + 'px '
                              + comp.options.color;
  comp.jack.style.backgroundColor = comp.options.jackColor;
}

function getClickHandler (comp) {
  if (!comp._clickHandler) {
    comp._clickHandler = function () {
      setPosition(comp, true);
      comp.dispatchEvent('change', {
        value: comp.checked
      });
    };
  }
  return comp._clickHandler
}

var proto$11 = {
  create: function create () {
    var node = document.createElement('span');
    this.jack = document.createElement('small');
    node.appendChild(this.jack);
    node.className = this.options.className;
    this.node = node;
    this.attr.disabled.call(this, this.data.attr.disabled);
    return node
  },

  onAppend: function onAppend () {
    setSize(this);
    setPosition(this);
  },

  enable: function enable () {
    this.disabled && (this.disabled = false);
    this.node.style.opacity = 1;
    this.node.addEventListener('click', getClickHandler(this));
  },

  disable: function disable () {
    !this.disabled && (this.disabled = true);
    this.node.style.opacity = defaults.disabledOpacity;
    this.node.removeEventListener('click', getClickHandler(this));
  }
};

var attr$11 = {
  disabled: function (val) {
    this.disabled = val && val !== 'false';
    this.disabled ? this.disable() : this.enable();
  }
};

var style$8 = {
  width: function (val) {
    if (!this.options.scalable) {
      return
    }
    val = parseFloat(val);
    if (isNaN(val) || val < 0) {
      val = this.options.width;
    }
    this.width = val * this.data.scale;
    this.setSize();
  },

  height: function (val) {
    if (!this.options.scalable) {
      return
    }
    val = parseFloat(val);
    if (isNaN(val) || val < 0) {
      val = this.options.height;
    }
    this.height = val * this.data.scale;
    this.setSize();
  }
};

var event$3 = {
  change: {
    updator: function updator () {
      return {
        attrs: {
          checked: this.checked
        }
      }
    },
    extra: function extra () {
      return {
        value: this.checked
      }
    }
  }
};

function init$25 (Weex) {
  var Atomic = Weex.Atomic;
  var extend = Weex.utils.extend;

  // attrs:
  //   - checked: if is checked.
  //   - disabled: if true, this component is not available for interaction.
  function Switch (data) {
    this.options = extend({}, defaults);
    this.checked = data.attr.checked
        && data.attr.checked !== 'false';
    this.data = data;
    this.width = this.options.width * data.scale;
    this.height = this.options.height * data.scale;
    Atomic.call(this, data);
  }
  Switch.prototype = Object.create(Atomic.prototype);
  extend(Switch.prototype, proto$11);
  extend(Switch.prototype, { attr: attr$11 });
  extend(Switch.prototype, {
    style: extend(Object.create(Atomic.prototype.style), style$8)
  });
  extend(Switch.prototype, { event: event$3 });

  Weex.registerComponent('switch', Switch);
}

var Switch = { init: init$25 };

function getProto$3 (Weex) {
  var Component = Weex.Component;
  return {
    create: function create () {
      var node = document.createElement('a');
      node.classList.add('weex-container');
      node.style.textDecoration = 'none';
      return node
    },

    bindEvents: function bindEvents (evts) {
      // event handler for click event will be processed
      // before the url redirection.
      Component.prototype.bindEvents.call(this, evts);
      this.node.addEventListener('click', function (evt) {
        if (evt._alreadyFired && evt.target !== this.node) {
          // if the event target is this.node, then this is
          // just another click event handler for the same
          // target, not a handler for a bubbling up event,
          // otherwise it is a bubbling up event, and it
          // should be disregarded.
          return
        }
        evt._alreadyFired = true;
        location.href = this.href;
      }.bind(this));
    }
  }
}

var attr$12 = {
  href: function (val) {
    if (!val) {
      return console.warn('[web-render] href of <a> should not be a null value.')
    }
    this.href = val;
    this.node.setAttribute('data-href', val);
  }
};

function init$26 (Weex) {
  var Component = Weex.Component;
  var extend = Weex.utils.extend;

  // attrs:
  //   - href
  function A (data) {
    Component.call(this, data);
  }

  A.prototype = Object.create(Component.prototype);
  extend(A.prototype, getProto$3(Weex));
  extend(A.prototype, { attr: attr$12 });

  Weex.registerComponent('a', A);
}

var A = { init: init$26 };

var ID_PREFIX = 'weex_embed_';

var getRandom$1;

function _generateId () {
  return ID_PREFIX + getRandom$1(10)
}

var proto$12 = {
  create: function create () {
    var node = document.createElement('div');
    node.id = this.id;
    node.style.overflow = 'scroll';
    return node
  },

  initWeex: function initWeex () {
    this.id = _generateId();
    this.node.id = this.id;
    var config = {
      appId: this.id,
      source: this.source,
      bundleUrl: this.source,
      loader: this.loader,
      jsonpCallback: this.jsonpCallback,
      width: this.node.getBoundingClientRect().width,
      rootId: this.id,
      embed: true
    };
    window.weex.init(config);
  },

  destroyWeex: function destroyWeex () {
    this.id && window.destroyInstance(this.id);
    // TODO: unbind events and clear doms.
    this.node.innerHTML = '';
  },

  reloadWeex: function reloadWeex () {
    if (this.id) {
      this.destroyWeex();
      this.id = null;
      this.node.id = null;
      this.node.innerHTML = '';
    }
    this.initWeex();
  }
};

// not recommended, because of the leak of memory.
var attr$13 = {
  src: function (value) {
    this.source = value;
    this.reloadWeex();
  }
};

function init$27 (Weex) {
  var Component = Weex.Component;
  var extend = Weex.utils.extend;
  getRandom$1 = Weex.utils.getRandom;

  function Embed (data, nodeType) {
    var attr = data.attr;
    if (attr) {
      this.source = attr.src;
      this.loader = attr.loader || 'xhr';
      this.jsonpCallback = attr.jsonpCallback;
    }
    Component.call(this, data, nodeType);
  }

  Embed.prototype = Object.create(Component.prototype);
  extend(Embed.prototype, proto$12);
  extend(Embed.prototype, { attr: attr$13 });

  Weex.registerComponent('embed', Embed);
}

var Embed = { init: init$27 };

__$styleInject(".weex-spinner-wrap {\n  width: 1.013333rem; /* 76px */\n  height: 1.013333rem;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  justify-content: center;\n  overflow: visible;\n}\n\n.weex-spinner {\n  font-size: 0.16rem; /* 12px */\n  width: 1em;\n  height: 1em;\n  border-radius: 50%;\n  position: relative;\n  text-indent: -9999em;\n  -webkit-animation: weex-spinner 1.1s infinite ease;\n  animation: weex-spinner 1.1s infinite ease;\n  -webkit-transform: translateZ(0);\n  -ms-transform: translateZ(0);\n  transform: translateZ(0);\n}\n@-webkit-keyframes weex-spinner {\n  0%,\n  100% {\n    box-shadow: 0em -2.6em 0em 0em #ffffff, 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.5), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.7);\n  }\n  12.5% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.7), 1.8em -1.8em 0 0em #ffffff, 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.5);\n  }\n  25% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.5), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.7), 2.5em 0em 0 0em #ffffff, 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  37.5% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.5), 2.5em 0em 0 0em rgba(255, 255, 255, 0.7), 1.75em 1.75em 0 0em #ffffff, 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  50% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.5), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.7), 0em 2.5em 0 0em #ffffff, -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  62.5% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.5), 0em 2.5em 0 0em rgba(255, 255, 255, 0.7), -1.8em 1.8em 0 0em #ffffff, -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  75% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.5), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.7), -2.6em 0em 0 0em #ffffff, -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  87.5% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.5), -2.6em 0em 0 0em rgba(255, 255, 255, 0.7), -1.8em -1.8em 0 0em #ffffff;\n  }\n}\n@keyframes weex-spinner {\n  0%,\n  100% {\n    box-shadow: 0em -2.6em 0em 0em #ffffff, 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.5), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.7);\n  }\n  12.5% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.7), 1.8em -1.8em 0 0em #ffffff, 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.5);\n  }\n  25% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.5), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.7), 2.5em 0em 0 0em #ffffff, 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  37.5% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.5), 2.5em 0em 0 0em rgba(255, 255, 255, 0.7), 1.75em 1.75em 0 0em #ffffff, 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  50% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.5), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.7), 0em 2.5em 0 0em #ffffff, -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  62.5% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.5), 0em 2.5em 0 0em rgba(255, 255, 255, 0.7), -1.8em 1.8em 0 0em #ffffff, -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  75% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.5), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.7), -2.6em 0em 0 0em #ffffff, -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  87.5% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.5), -2.6em 0em 0 0em rgba(255, 255, 255, 0.7), -1.8em -1.8em 0 0em #ffffff;\n  }\n}\n",undefined);

/* global CSSRule */

var loopArray$1;
var getRgb$1;

function getStyleSheet (spinner) {
  if (spinner.styleSheet) {
    return
  }
  var styles = document.styleSheets;
  var i, l, j, m;
  /* eslint-disable no-labels */
  outer: for (i = 0, l = styles.length; i < l; i++) {
    var rules = styles[i].rules;
    if (!rules) {
      continue
    }
    for (j = 0, m = rules.length; j < m; j++) {
      var item = rules.item(j);
      if (
        (item.type === CSSRule.KEYFRAMES_RULE
          || item.type === CSSRule.WEBKIT_KEYFRAMES_RULE)
        && item.name === 'weex-spinner') {
        break outer
      }
    }
  }
  /* eslint-enable no-labels */
  spinner.styleSheet = styles[i];
}

function setKeyframeColor (spinner, val) {
  getStyleSheet(spinner);
  var keyframeRules = computeKeyFrameRules(val);
  var rules = spinner.styleSheet.rules;
  for (var i = 0, l = rules.length; i < l; i++) {
    var item = rules.item(i);
    if ((item.type === CSSRule.KEYFRAMES_RULE
          || item.type === CSSRule.WEBKIT_KEYFRAMES_RULE)
        && item.name === 'weex-spinner') {
      var cssRules = item.cssRules;
      for (var j = 0, m = cssRules.length; j < m; j++) {
        var keyframe = cssRules[j];
        if (keyframe.type === CSSRule.KEYFRAME_RULE
          || keyframe.type === CSSRule.WEBKIT_KEYFRAME_RULE) {
          keyframe.style.boxShadow = keyframeRules[j];
        }
      }
    }
  }
}

function computeKeyFrameRules (rgb) {
  if (!rgb) {
    return
  }
  var scaleArr = [
    '0em -2.6em 0em 0em',
    '1.8em -1.8em 0 0em',
    '2.5em 0em 0 0em',
    '1.75em 1.75em 0 0em',
    '0em 2.5em 0 0em',
    '-1.8em 1.8em 0 0em',
    '-2.6em 0em 0 0em',
    '-1.8em -1.8em 0 0em'];
  var colorArr = [
    '1',
    '0.2',
    '0.2',
    '0.2',
    '0.2',
    '0.2',
    '0.5',
    '0.7'].map(function (e) {
      return 'rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ',' + e + ')'
    });
  var rules = [];
  var loop = function ( i ) {
    var tmpColorArr = loopArray$1(colorArr, i, 'r');
    rules.push(scaleArr.map(function (scaleStr, i) {
      return scaleStr + ' ' + tmpColorArr[i]
    }).join(', '));
  };

  for (var i = 0; i < scaleArr.length; i++) loop( i );
  return rules
}

var proto$13 = {
  create: function create () {
    var node = document.createElement('div');
    node.classList.add('weex-container');
    node.classList.add('weex-spinner-wrap');
    this.spinner = document.createElement('div');
    this.spinner.classList.add('weex-element');
    this.spinner.classList.add('weex-spinner');
    node.appendChild(this.spinner);
    return node
  }
};

var style$9 = {
  color: function (val) {
    var rgb = getRgb$1(val);
    if (!rgb) {
      return console.error('[web-render] invalid color value:', val)
    }
    setKeyframeColor(this, rgb);
  }
};

// Spinner.prototype.updateStyle = function (style) {
//   Atomic.prototype.updateStyle.call(this, style)
//   if (style && style.color) {
//     this.setKeyframeColor(global.weex.utils.getRgb(this.node.style.color))
//   }
// }

function init$28 (Weex) {
  var Atomic = Weex.Atomic;
  var extend = Weex.utils.extend;
  getRgb$1 = Weex.utils.getRgb;
  loopArray$1 = Weex.utils.loopArray;

  function Spinner (data) {
    Atomic.call(this, data);
  }
  Spinner.prototype = Object.create(Atomic.prototype);
  extend(Spinner.prototype, proto$13);
  extend(Spinner.prototype, {
    style: extend(Object.create(Atomic.prototype.style), style$9)
  });

  Weex.registerComponent('spinner', Spinner);
  Weex.registerComponent('loading-indicator', Spinner);
}

var Spinner = { init: init$28 };

var isArray$1;

function handleMsg (web, evt) {
  var msg = evt.data;
  if (typeof msg === 'string') {
    try {
      msg = JSON.parse(msg);
    }
    catch (e) {}
  }
  if (!msg) {
    return
  }
  if (msg.type === 'weex') {
    if (!isArray$1(msg.content)) {
      return console.error('[h5-render] weex msg received by web component.'
        + ' msg.content should be a array:', msg.content)
    }
    callNative(web.getComponentManager().instanceId, msg.content);
  }
}

function getProto$4 (Weex) {
  var Atomic = Weex.Atomic;
  return {
    create: function create () {
      // Iframe's defect: can't use position:absolute and top, left, right,
      // bottom all setting to zero and use margin to leave specified
      // height for a blank area, and have to use 100% to fill the parent
      // container, otherwise it will use a unwanted default size instead.
      // Therefore a div as a iframe wrapper is needed here.
      var node = document.createElement('div');
      node.classList.add('weex-container');
      this.web = document.createElement('iframe');
      node.appendChild(this.web);
      this.web.classList.add('weex-element');
      this.web.style.width = '100%';
      this.web.style.height = '100%';
      this.web.style.border = 'none';
      return node
    },

    bindEvents: function bindEvents (evts) {
      Atomic.prototype.bindEvents.call(this, evts);
      var that = this;
      this.web.addEventListener('load', function (e) {
        that.dispatchEvent('pagefinish', {
          url: that.web.src
        });
      });
      window.addEventListener('message', handleMsg.bind(null, this));
    },

    goBack: function goBack () {
      this.web.contentWindow.history.back();
    },

    goForward: function goForward () {
      this.web.contentWindow.history.forward();
    },

    reload: function reload () {
      this.web.contentWindow.location.reload();
    }
  }
}

var attr$14 = {
  src: function (val) {
    this.web.src = val;
    setTimeout(function () {
      this.dispatchEvent('pagestart', { url: val });
    }.bind(this), 0);
  }
};

function init$29 (Weex) {
  var Atomic = Weex.Atomic;
  var extend = Weex.utils.extend;
  isArray$1 = Weex.utils.isArray;

  // A component to import web pages, which works like
  // a iframe element or a webview.
  // attrs:
  //   - src
  // events:
  //   - pagestart
  //   - pagefinish
  //   - error
  function Web (data) {
    Atomic.call(this, data);
  }
  Web.prototype = Object.create(Atomic.prototype);
  extend(Web.prototype, getProto$4(Weex));
  extend(Web.prototype, { attr: attr$14 });

  Weex.registerComponent('web', Web);
}

var Web = { init: init$29 };

/**
 * config:
 *   - styles
 *   - duration [Number] milliseconds(ms)
 *   - timingFunction [string]
 *   - dealy [Number] milliseconds(ms)
 */
function transitionOnce (comp, config, callback) {
  var styles = config.styles || {};
  var duration = config.duration || 1000; // ms
  var timingFunction = config.timingFunction || 'ease';
  var delay = config.delay || 0;  // ms
  var transitionValue = 'all ' + duration + 'ms '
      + timingFunction + ' ' + delay + 'ms';
  var dom = comp.node;
  var transitionEndHandler = function (e) {
    e.stopPropagation();
    dom.removeEventListener('webkitTransitionEnd', transitionEndHandler);
    dom.removeEventListener('transitionend', transitionEndHandler);
    dom.style.transition = '';
    dom.style.webkitTransition = '';
    callback();
  };
  dom.style.transition = transitionValue;
  dom.style.webkitTransition = transitionValue;
  dom.addEventListener('webkitTransitionEnd', transitionEndHandler);
  dom.addEventListener('transitionend', transitionEndHandler);
  comp.updateStyle(styles);
}

var _data = {};

var animation = {

  /**
   * transition
   * @param  {string} ref        [description]
   * @param  {obj} config     [description]
   * @param  {string} callbackId [description]
   */
  transition: function (ref, config, callbackId) {
    var refData = _data[ref];
    var stylesKey = JSON.stringify(config.styles);
    var weexInstance = this;
    // If the same component perform a animation with exactly the same
    // styles in a sequence with so short interval that the prev animation
    // is still in playing, then the next animation should be ignored.
    if (refData && refData[stylesKey]) {
      return
    }
    if (!refData) {
      refData = _data[ref] = {};
    }
    refData[stylesKey] = true;

    var component = this.getComponentManager().getComponent(ref);
    return transitionOnce(component, config, function () {
      // Remove the stylesKey in refData so that the same animation
      // can be played again after current animation is already finished.
      delete refData[stylesKey];
      weexInstance.sender.performCallback(callbackId);
    })
  }
};

var meta = {
  animation: [{
    name: 'transition',
    args: ['string', 'object', 'function']
  }]
};

var Animation = {
  init: function (Weex) {
    Weex.registerApiModule('animation', animation, meta);
  }
};

/**

AUCTION:
taskQueue
Clipboard.setString()  NOW not works, facing to user-act lose of taskQueue.

works in Chrome Firefox Opera. but not in Safari.
@see https://developer.mozilla.org/en-US/docs/Web/API/Document/execCommand#Browser_compatibility

Clipboard.getString() unimplemented. There is no easy way to do paste from clipboard to js variable.

So look out your app behavior, when downgrade to html5 render.
Any idea is welcome.
**/

var WEEX_CLIPBOARD_ID = '__weex_clipboard_id__';

var clipboard = {

  getString: function (callbackId) {
    // not supported in html5
    console.log('clipboard.getString() is not supported now.');
  },

  setString: function (text) {
    // not support safari
    if (typeof text === 'string' && text !== '' && document.execCommand) {
      var tempInput = element();
      tempInput.value = text;

      tempInput.select();
      document.execCommand('copy');
      // var out = document.execCommand('copy');
      // console.log("execCommand out is " + out);
      tempInput.value = '';
      tempInput.blur();
    }
    else {
      console.log('only support string input now');
    }
  }

};

function element () {
  var tempInput = document.getElementById(WEEX_CLIPBOARD_ID);
  if (tempInput === undefined) {
    tempInput = document.createElement('input');
    tempInput.setAttribute('id', WEEX_CLIPBOARD_ID);
    tempInput.style.cssText = 'height:1px;width:1px;border:none;';
    // tempInput.style.cssText = "height:40px;width:300px;border:solid;"
    document.body.appendChild(tempInput);
  }
  return tempInput
}

var meta$1 = {
  clipboard: [{
    name: 'getString',
    args: ['function']
  }, {
    name: 'setString',
    args: ['string']
  }]
};

var Clipboard = {
  init: function (Weex) {
    Weex.registerApiModule('clipboard', clipboard, meta$1);
  }
};

/**
 * Expose `Emitter`.
 */

var index$6 = Emitter$1;

/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter$1(obj) {
  if (obj) { return mixin(obj); }
}

/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter$1.prototype) {
    obj[key] = Emitter$1.prototype[key];
  }
  return obj;
}

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter$1.prototype.on =
Emitter$1.prototype.addEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};
  (this._callbacks['$' + event] = this._callbacks['$' + event] || [])
    .push(fn);
  return this;
};

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter$1.prototype.once = function(event, fn){
  function on() {
    this.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter$1.prototype.off =
Emitter$1.prototype.removeListener =
Emitter$1.prototype.removeAllListeners =
Emitter$1.prototype.removeEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};

  // all
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }

  // specific event
  var callbacks = this._callbacks['$' + event];
  if (!callbacks) { return this; }

  // remove all handlers
  if (1 == arguments.length) {
    delete this._callbacks['$' + event];
    return this;
  }

  // remove specific handler
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }
  return this;
};

/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

Emitter$1.prototype.emit = function(event){
  var this$1 = this;

  this._callbacks = this._callbacks || {};
  var args = [].slice.call(arguments, 1)
    , callbacks = this._callbacks['$' + event];

  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this$1, args);
    }
  }

  return this;
};

/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter$1.prototype.listeners = function(event){
  this._callbacks = this._callbacks || {};
  return this._callbacks['$' + event] || [];
};

/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

Emitter$1.prototype.hasListeners = function(event){
  return !! this.listeners(event).length;
};

/**
 * toString ref.
 */

var toString$3 = Object.prototype.toString;

/**
 * Return the type of `val`.
 *
 * @param {Mixed} val
 * @return {String}
 * @api public
 */

var index$10 = function(val){
  switch (toString$3.call(val)) {
    case '[object Date]': return 'date';
    case '[object RegExp]': return 'regexp';
    case '[object Arguments]': return 'arguments';
    case '[object Array]': return 'array';
    case '[object Error]': return 'error';
  }

  if (val === null) { return 'null'; }
  if (val === undefined) { return 'undefined'; }
  if (val !== val) { return 'nan'; }
  if (val && val.nodeType === 1) { return 'element'; }

  if (isBuffer(val)) { return 'buffer'; }

  val = val.valueOf
    ? val.valueOf()
    : Object.prototype.valueOf.apply(val);

  return typeof val;
};

// code borrowed from https://github.com/feross/is-buffer/blob/master/index.js
function isBuffer(obj) {
  return !!(obj != null &&
    (obj._isBuffer || // For Safari 5-7 (missing Object.prototype.constructor)
      (obj.constructor &&
      typeof obj.constructor.isBuffer === 'function' &&
      obj.constructor.isBuffer(obj))
    ))
}

/**
 * Module dependencies.
 */

var type$2;
try {
  type$2 = index$10;
} catch (_) {
  type$2 = index$10;
}

/**
 * Module exports.
 */

var index$8 = clone$1;

/**
 * Clones objects.
 *
 * @param {Mixed} any object
 * @api public
 */

function clone$1(obj){
  switch (type$2(obj)) {
    case 'object':
      var copy = {};
      for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
          copy[key] = clone$1(obj[key]);
        }
      }
      return copy;

    case 'array':
      var copy = new Array(obj.length);
      for (var i = 0, l = obj.length; i < l; i++) {
        copy[i] = clone$1(obj[i]);
      }
      return copy;

    case 'regexp':
      // from millermedeiros/amd-utils - MIT
      var flags = '';
      flags += obj.multiline ? 'm' : '';
      flags += obj.global ? 'g' : '';
      flags += obj.ignoreCase ? 'i' : '';
      return new RegExp(obj.source, flags);

    case 'date':
      return new Date(obj.getTime());

    default: // string, number, boolean, …
      return obj;
  }
}

/**
 * toString ref.
 */

var toString$4 = Object.prototype.toString;

/**
 * Return the type of `val`.
 *
 * @param {Mixed} val
 * @return {String}
 * @api public
 */

var index$12 = function(val){
  switch (toString$4.call(val)) {
    case '[object Date]': return 'date';
    case '[object RegExp]': return 'regexp';
    case '[object Arguments]': return 'arguments';
    case '[object Array]': return 'array';
    case '[object Error]': return 'error';
  }

  if (val === null) { return 'null'; }
  if (val === undefined) { return 'undefined'; }
  if (val !== val) { return 'nan'; }
  if (val && val.nodeType === 1) { return 'element'; }

  val = val.valueOf
    ? val.valueOf()
    : Object.prototype.valueOf.apply(val);

  return typeof val;
};

var index$14 = createCommonjsModule(function (module, exports) {
// easing functions from "Tween.js"

exports.linear = function(n){
  return n;
};

exports.inQuad = function(n){
  return n * n;
};

exports.outQuad = function(n){
  return n * (2 - n);
};

exports.inOutQuad = function(n){
  n *= 2;
  if (n < 1) { return 0.5 * n * n; }
  return - 0.5 * (--n * (n - 2) - 1);
};

exports.inCube = function(n){
  return n * n * n;
};

exports.outCube = function(n){
  return --n * n * n + 1;
};

exports.inOutCube = function(n){
  n *= 2;
  if (n < 1) { return 0.5 * n * n * n; }
  return 0.5 * ((n -= 2 ) * n * n + 2);
};

exports.inQuart = function(n){
  return n * n * n * n;
};

exports.outQuart = function(n){
  return 1 - (--n * n * n * n);
};

exports.inOutQuart = function(n){
  n *= 2;
  if (n < 1) { return 0.5 * n * n * n * n; }
  return -0.5 * ((n -= 2) * n * n * n - 2);
};

exports.inQuint = function(n){
  return n * n * n * n * n;
};

exports.outQuint = function(n){
  return --n * n * n * n * n + 1;
};

exports.inOutQuint = function(n){
  n *= 2;
  if (n < 1) { return 0.5 * n * n * n * n * n; }
  return 0.5 * ((n -= 2) * n * n * n * n + 2);
};

exports.inSine = function(n){
  return 1 - Math.cos(n * Math.PI / 2 );
};

exports.outSine = function(n){
  return Math.sin(n * Math.PI / 2);
};

exports.inOutSine = function(n){
  return .5 * (1 - Math.cos(Math.PI * n));
};

exports.inExpo = function(n){
  return 0 == n ? 0 : Math.pow(1024, n - 1);
};

exports.outExpo = function(n){
  return 1 == n ? n : 1 - Math.pow(2, -10 * n);
};

exports.inOutExpo = function(n){
  if (0 == n) { return 0; }
  if (1 == n) { return 1; }
  if ((n *= 2) < 1) { return .5 * Math.pow(1024, n - 1); }
  return .5 * (-Math.pow(2, -10 * (n - 1)) + 2);
};

exports.inCirc = function(n){
  return 1 - Math.sqrt(1 - n * n);
};

exports.outCirc = function(n){
  return Math.sqrt(1 - (--n * n));
};

exports.inOutCirc = function(n){
  n *= 2;
  if (n < 1) { return -0.5 * (Math.sqrt(1 - n * n) - 1); }
  return 0.5 * (Math.sqrt(1 - (n -= 2) * n) + 1);
};

exports.inBack = function(n){
  var s = 1.70158;
  return n * n * (( s + 1 ) * n - s);
};

exports.outBack = function(n){
  var s = 1.70158;
  return --n * n * ((s + 1) * n + s) + 1;
};

exports.inOutBack = function(n){
  var s = 1.70158 * 1.525;
  if ( ( n *= 2 ) < 1 ) { return 0.5 * ( n * n * ( ( s + 1 ) * n - s ) ); }
  return 0.5 * ( ( n -= 2 ) * n * ( ( s + 1 ) * n + s ) + 2 );
};

exports.inBounce = function(n){
  return 1 - exports.outBounce(1 - n);
};

exports.outBounce = function(n){
  if ( n < ( 1 / 2.75 ) ) {
    return 7.5625 * n * n;
  } else if ( n < ( 2 / 2.75 ) ) {
    return 7.5625 * ( n -= ( 1.5 / 2.75 ) ) * n + 0.75;
  } else if ( n < ( 2.5 / 2.75 ) ) {
    return 7.5625 * ( n -= ( 2.25 / 2.75 ) ) * n + 0.9375;
  } else {
    return 7.5625 * ( n -= ( 2.625 / 2.75 ) ) * n + 0.984375;
  }
};

exports.inOutBounce = function(n){
  if (n < .5) { return exports.inBounce(n * 2) * .5; }
  return exports.outBounce(n * 2 - 1) * .5 + .5;
};

// aliases

exports['in-quad'] = exports.inQuad;
exports['out-quad'] = exports.outQuad;
exports['in-out-quad'] = exports.inOutQuad;
exports['in-cube'] = exports.inCube;
exports['out-cube'] = exports.outCube;
exports['in-out-cube'] = exports.inOutCube;
exports['in-quart'] = exports.inQuart;
exports['out-quart'] = exports.outQuart;
exports['in-out-quart'] = exports.inOutQuart;
exports['in-quint'] = exports.inQuint;
exports['out-quint'] = exports.outQuint;
exports['in-out-quint'] = exports.inOutQuint;
exports['in-sine'] = exports.inSine;
exports['out-sine'] = exports.outSine;
exports['in-out-sine'] = exports.inOutSine;
exports['in-expo'] = exports.inExpo;
exports['out-expo'] = exports.outExpo;
exports['in-out-expo'] = exports.inOutExpo;
exports['in-circ'] = exports.inCirc;
exports['out-circ'] = exports.outCirc;
exports['in-out-circ'] = exports.inOutCirc;
exports['in-back'] = exports.inBack;
exports['out-back'] = exports.outBack;
exports['in-out-back'] = exports.inOutBack;
exports['in-bounce'] = exports.inBounce;
exports['out-bounce'] = exports.outBounce;
exports['in-out-bounce'] = exports.inOutBounce;
});

/**
 * Module dependencies.
 */

var Emitter = index$6;
var clone = index$8;
var type$1 = index$12;
var ease = index$14;

/**
 * Expose `Tween`.
 */

var index$4 = Tween$1;

/**
 * Initialize a new `Tween` with `obj`.
 *
 * @param {Object|Array} obj
 * @api public
 */

function Tween$1(obj) {
  if (!(this instanceof Tween$1)) { return new Tween$1(obj); }
  this._from = obj;
  this.ease('linear');
  this.duration(500);
}

/**
 * Mixin emitter.
 */

Emitter(Tween$1.prototype);

/**
 * Reset the tween.
 *
 * @api public
 */

Tween$1.prototype.reset = function(){
  this.isArray = 'array' === type$1(this._from);
  this._curr = clone(this._from);
  this._done = false;
  this._start = Date.now();
  return this;
};

/**
 * Tween to `obj` and reset internal state.
 *
 *    tween.to({ x: 50, y: 100 })
 *
 * @param {Object|Array} obj
 * @return {Tween} self
 * @api public
 */

Tween$1.prototype.to = function(obj){
  this.reset();
  this._to = obj;
  return this;
};

/**
 * Set duration to `ms` [500].
 *
 * @param {Number} ms
 * @return {Tween} self
 * @api public
 */

Tween$1.prototype.duration = function(ms){
  this._duration = ms;
  return this;
};

/**
 * Set easing function to `fn`.
 *
 *    tween.ease('in-out-sine')
 *
 * @param {String|Function} fn
 * @return {Tween}
 * @api public
 */

Tween$1.prototype.ease = function(fn){
  fn = 'function' == typeof fn ? fn : ease[fn];
  if (!fn) { throw new TypeError('invalid easing function'); }
  this._ease = fn;
  return this;
};

/**
 * Stop the tween and immediately emit "stop" and "end".
 *
 * @return {Tween}
 * @api public
 */

Tween$1.prototype.stop = function(){
  this.stopped = true;
  this._done = true;
  this.emit('stop');
  this.emit('end');
  return this;
};

/**
 * Perform a step.
 *
 * @return {Tween} self
 * @api private
 */

Tween$1.prototype.step = function(){
  if (this._done) { return; }

  // duration
  var duration = this._duration;
  var now = Date.now();
  var delta = now - this._start;
  var done = delta >= duration;

  // complete
  if (done) {
    this._from = this._to;
    this._update(this._to);
    this._done = true;
    this.emit('end');
    return this;
  }

  // tween
  var from = this._from;
  var to = this._to;
  var curr = this._curr;
  var fn = this._ease;
  var p = (now - this._start) / duration;
  var n = fn(p);

  // array
  if (this.isArray) {
    for (var i = 0; i < from.length; ++i) {
      curr[i] = from[i] + (to[i] - from[i]) * n;
    }

    this._update(curr);
    return this;
  }

  // objech
  for (var k in from) {
    curr[k] = from[k] + (to[k] - from[k]) * n;
  }

  this._update(curr);
  return this;
};

/**
 * Set update function to `fn` or
 * when no argument is given this performs
 * a "step".
 *
 * @param {Function} fn
 * @return {Tween} self
 * @api public
 */

Tween$1.prototype.update = function(fn){
  if (0 == arguments.length) { return this.step(); }
  this._update = fn;
  return this;
};

var index$16 = createCommonjsModule(function (module, exports) {
/**
 * Expose `requestAnimationFrame()`.
 */

exports = module.exports = window.requestAnimationFrame
  || window.webkitRequestAnimationFrame
  || window.mozRequestAnimationFrame
  || fallback;

/**
 * Fallback implementation.
 */

var prev = new Date().getTime();
function fallback(fn) {
  var curr = new Date().getTime();
  var ms = Math.max(0, 16 - (curr - prev));
  var req = setTimeout(fn, ms);
  prev = curr;
  return req;
}

/**
 * Cancel.
 */

var cancel = window.cancelAnimationFrame
  || window.webkitCancelAnimationFrame
  || window.mozCancelAnimationFrame
  || window.clearTimeout;

exports.cancel = function(id){
  cancel.call(window, id);
};
});

/**
 * Module dependencies.
 */

var Tween = index$4;
var raf$2 = index$16;

/**
 * Expose `scrollTo`.
 */

var index$3 = scrollTo;

/**
 * Scroll to `(x, y)`.
 *
 * @param {Number} x
 * @param {Number} y
 * @api public
 */

function scrollTo(x, y, options) {
  options = options || {};

  // start position
  var start = scroll();

  // setup tween
  var tween = Tween(start)
    .ease(options.ease || 'out-circ')
    .to({ top: y, left: x })
    .duration(options.duration || 1000);

  // scroll
  tween.update(function(o){
    window.scrollTo(o.left | 0, o.top | 0);
  });

  // handle end
  tween.on('end', function(){
    animate = function(){};
  });

  // animate
  function animate() {
    raf$2(animate);
    tween.update();
  }

  animate();
  
  return tween;
}

/**
 * Return scroll position.
 *
 * @return {Object}
 * @api private
 */

function scroll() {
  var y = window.pageYOffset || document.documentElement.scrollTop;
  var x = window.pageXOffset || document.documentElement.scrollLeft;
  return { top: y, left: x };
}

var camelToKebab$1;
var appendStyle$2;

var dom = {
  /**
   * scrollToElement
   * @param  {string} ref
   * @param  {obj} options {offset:Number}
   *   ps: scroll-to has 'ease' and 'duration'(ms) as options.
   */
  scrollToElement: function (ref, options) {
    !options && (options = {});
    var offset = (Number(options.offset) || 0) * this.scale;
    var elem = this.getComponentManager().getComponent(ref);
    if (!elem) {
      return console.error(("[h5-render] component of ref " + ref + " doesn't exist."))
    }
    var parentScroller = elem.getParentScroller();
    if (parentScroller) {
      parentScroller.scroller.scrollToElement(elem.node, true, offset);
    }
    else {
      var offsetTop = elem.node.getBoundingClientRect().top
          + document.body.scrollTop;
      var tween = index$3(0, offsetTop + offset, options);
      tween.on('end', function () {
        console.log('scroll end.');
      });
    }
  },

  /**
   * getComponentRect
   * @param {string} ref
   * @param {function} callbackId
   */
  getComponentRect: function (ref, callbackId) {
    var info = { result: false };

    if (ref && ref === 'viewport') {
      info.result = true;
      info.size = {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
        top: 0,
        left: 0,
        right: document.documentElement.clientWidth,
        bottom: document.documentElement.clientHeight
      };
    }
    else {
      var elem = this.getComponentManager().getComponent(ref);
      if (elem && elem.node) {
        info.result = true;
        info.size = elem.node.getBoundingClientRect();
      }
    }

    var message = info.result ? info : {
      result: false,
      errMsg: 'Illegal parameter'
    };
    this.sender.performCallback(callbackId, message);
    return message
  },

  /**
   * for adding fontFace
   * @param {string} key fontFace
   * @param {object} styles rules
   */
  addRule: function (key, styles) {
    key = camelToKebab$1(key);
    var stylesText = '';
    for (var k in styles) {
      if (styles.hasOwnProperty(k)) {
        stylesText += camelToKebab$1(k) + ':' + styles[k] + ';';
      }
    }
    var styleText = "@" + key + "{" + stylesText + "}";
    appendStyle$2(styleText, 'dom-added-rules');
  }
};

var meta$2 = {
  dom: [{
    name: 'scrollToElement',
    args: ['string', 'object']
  }, {
    name: 'getComponentRect',
    args: ['string', 'function']
  }, {
    name: 'addRule',
    args: ['string', 'object']
  }]
};

var Dom = {
  init: function (Weex) {
    camelToKebab$1 = Weex.utils.camelToKebab;
    appendStyle$2 = Weex.utils.appendStyle;
    Weex.registerApiModule('dom', dom, meta$2);
  }
};

var event$4 = {
  /**
   * openUrl
   * @param  {string} url
   */
  openURL: function (url) {
    location.href = url;
  }

};

var meta$3 = {
  event: [{
    name: 'openURL',
    args: ['string']
  }]
};

var Event$1 = {
  init: function (Weex) {
    Weex.registerApiModule('event', event$4, meta$3);
  }
};

var supportGeolocation = 'geolocation' in navigator;
var errorMsg = "[h5-render]: browser doesn't support geolocation.";

var geolocation = {
  // options:
  //   - enableHighAccuracy optional, value is true or false, false by default.
  //   - timeout [none-native] optional, value is a number (milliseconds), default vaule is FINFINITY.
  //   - maximumAge [none-native] optional, value is a number (milliseconds), default value is 0.
  getCurrentPosition: function getCurrentPosition (successCbId, errorCbId, options) {
    var this$1 = this;

    var successCb = function (pos) { return this$1.sender.performCallback(successCbId, pos); };
    var errorCb = function (err) { return this$1.sender.performCallback(errorCbId, err); };
    if (supportGeolocation) {
      navigator.geolocation.getCurrentPosition(successCb, errorCb, options);
    }
    else {
      console.warn(errorMsg);
      errorCb(new Error(errorMsg));
    }
  },

  // options: the same with `getCurrentPosition`.
  watchPosition: function watchPosition (successCbId, errorCbId, options) {
    var this$1 = this;

    var successCb = function (pos) { return this$1.sender.performCallback(successCbId, pos, true); };
    var errorCb = function (err) { return this$1.sender.performCallback(errorCbId, err); };
    if (supportGeolocation) {
      var id = navigator.geolocation.watchPosition(function (pos) {
        pos.watchId = id;
        successCb(pos);
      }, errorCb, options);
    }
    else {
      console.warn(errorMsg);
      errorCb(new Error(errorMsg));
    }
  },

  clearWatch: function clearWatch (watchId) {
    if (supportGeolocation) {
      navigator.geolocation.clearWatch(watchId);
    }
    else {
      console.warn(errorMsg);
    }
  }
};

var meta$4 = {
  geolocation: [{
    name: 'getCurrentPosition',
    args: ['function', 'function', 'object']
  }, {
    name: 'watchPosition',
    args: ['function', 'function', 'object']
  }, {
    name: 'clearWatch',
    args: ['string']
  }]
};

var Geolocation = {
  init: function init (Weex) {
    Weex.registerApiModule('geolocation', geolocation, meta$4);
  }
};

// track varies kinds of events and listeners.
var handlerTraker = {};

var globalEvent = {

  /**
   * addEventListener
   * @param {string} evt - the event name to add a listener on.
   */
  addEventListener: function addEventListener (evt, callbackId) {
    var this$1 = this;

    var cb = function (e) { return this$1.sender.performCallback(callbackId, e); };
    if (!handlerTraker[evt]) {
      handlerTraker[evt] = [cb];
    }
    else {
      handlerTraker.push(cb);
    }
    document.addEventListener(evt, cb);
  },

  /**
   * removeEventListener
   * @param {string} evt - the event name to remove a listener from.
   */
  removeEventListener: function removeEventListener (evt) {
    handlerTraker[evt].forEach(function (cb) { return document.removeEventListener(evt, cb); });
  }
};

var meta$5 = {
  globalEvent: [{
    name: 'addEventListener',
    args: ['string', 'function']
  }, {
    name: 'removeEventListener',
    args: ['string']
  }]
};

var GlobalEvent = {
  init: function init (Weex) {
    Weex.registerApiModule('globalEvent', globalEvent, meta$5);
  }
};

__$styleInject(".amfe-modal-wrap {\n  display: none;\n  position: fixed;\n  z-index: 999999999;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #000;\n  opacity: 0.5;\n}\n\n.amfe-modal-node {\n  position: fixed;\n  z-index: 9999999999;\n  top: 50%;\n  left: 50%;\n  width: 6.666667rem;\n  min-height: 2.666667rem;\n  border-radius: 0.066667rem;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  background-color: #fff;\n}\n.amfe-modal-node.hide {\n  display: none;\n}\n.amfe-modal-node .content {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-flex-direction: column;\n  flex-direction: column;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  justify-content: center;\n  width: 100%;\n  min-height: 1.866667rem;\n  box-sizing: border-box;\n  font-size: 0.32rem;\n  line-height: 0.426667rem;\n  padding: 0.213333rem;\n  border-bottom: 1px solid #ddd;\n}\n.amfe-modal-node .btn-group {\n  width: 100%;\n  height: 0.8rem;\n  font-size: 0.373333rem;\n  text-align: center;\n  margin: 0;\n  padding: 0;\n  border: none;\n}\n.amfe-modal-node .btn-group .btn {\n  box-sizing: border-box;\n  height: 0.8rem;\n  line-height: 0.8rem;\n  margin: 0;\n  padding: 0;\n  border: none;\n  background: none;\n}\n",undefined);

// there will be only one instance of modal.
var MODAL_WRAP_CLASS = 'amfe-modal-wrap';
var MODAL_NODE_CLASS = 'amfe-modal-node';

function Modal$2() {
  this.wrap = document.querySelector(MODAL_WRAP_CLASS);
  this.node = document.querySelector(MODAL_NODE_CLASS);
  if (!this.wrap) {
    this.createWrap();
  }
  if (!this.node) {
    this.createNode();
  }
  this.clearNode();
  this.createNodeContent();
  this.bindEvents();
}

Modal$2.prototype = {

  show: function () {
    this.wrap.style.display = 'block';
    this.node.classList.remove('hide');
  },

  destroy: function () {
    document.body.removeChild(this.wrap);
    document.body.removeChild(this.node);
    this.wrap = null;
    this.node = null;
  },

  createWrap: function () {
    this.wrap = document.createElement('div');
    this.wrap.className = MODAL_WRAP_CLASS;
    document.body.appendChild(this.wrap);
  },

  createNode: function () {
    this.node = document.createElement('div');
    this.node.classList.add(MODAL_NODE_CLASS, 'hide');
    document.body.appendChild(this.node);
  },

  clearNode: function () {
    this.node.innerHTML = '';
  },

  createNodeContent: function () {

    // do nothing.
    // child classes can override this method.
  },

  bindEvents: function () {
    this.wrap.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
    });
  }
};

var modal$2 = Modal$2;

__$styleInject(".amfe-alert .amfe-alert-ok {\n  width: 100%;\n}\n",undefined);

var Modal$1 = modal$2;


var CONTENT_CLASS = 'content';
var MSG_CLASS = 'content-msg';
var BUTTON_GROUP_CLASS = 'btn-group';
var BUTTON_CLASS = 'btn';

function Alert$1(config) {
  this.msg = config.message || '';
  this.callback = config.callback;
  this.okTitle = config.okTitle || 'OK';
  Modal$1.call(this);
  this.node.classList.add('amfe-alert');
}

Alert$1.prototype = Object.create(Modal$1.prototype);

Alert$1.prototype.createNodeContent = function () {
  var content = document.createElement('div');
  content.classList.add(CONTENT_CLASS);
  this.node.appendChild(content);

  var msg = document.createElement('div');
  msg.classList.add(MSG_CLASS);
  msg.appendChild(document.createTextNode(this.msg));
  content.appendChild(msg);

  var buttonGroup = document.createElement('div');
  buttonGroup.classList.add(BUTTON_GROUP_CLASS);
  this.node.appendChild(buttonGroup);
  var button = document.createElement('div');
  button.classList.add(BUTTON_CLASS, 'alert-ok');
  button.appendChild(document.createTextNode(this.okTitle));
  buttonGroup.appendChild(button);
};

Alert$1.prototype.bindEvents = function () {
  Modal$1.prototype.bindEvents.call(this);
  var button = this.node.querySelector('.' + BUTTON_CLASS);
  button.addEventListener('click', function () {
    this.destroy();
    this.callback && this.callback();
  }.bind(this));
};

var alert = Alert$1;

__$styleInject(".amfe-confirm .btn-group .btn {\n  float: left;\n  width: 50%;\n}\n.amfe-confirm .btn-group .btn.btn-ok {\n  border-right: 1px solid #ddd;\n}\n",undefined);

var Modal$3 = modal$2;


var CONTENT_CLASS$1 = 'content';
var MSG_CLASS$1 = 'content-msg';
var BUTTON_GROUP_CLASS$1 = 'btn-group';
var BUTTON_CLASS$1 = 'btn';

function Confirm$1(config) {
  this.msg = config.message || '';
  this.callback = config.callback;
  this.okTitle = config.okTitle || 'OK';
  this.cancelTitle = config.cancelTitle || 'Cancel';
  Modal$3.call(this);
  this.node.classList.add('amfe-confirm');
}

Confirm$1.prototype = Object.create(Modal$3.prototype);

Confirm$1.prototype.createNodeContent = function () {
  var content = document.createElement('div');
  content.classList.add(CONTENT_CLASS$1);
  this.node.appendChild(content);

  var msg = document.createElement('div');
  msg.classList.add(MSG_CLASS$1);
  msg.appendChild(document.createTextNode(this.msg));
  content.appendChild(msg);

  var buttonGroup = document.createElement('div');
  buttonGroup.classList.add(BUTTON_GROUP_CLASS$1);
  this.node.appendChild(buttonGroup);
  var btnOk = document.createElement('div');
  btnOk.appendChild(document.createTextNode(this.okTitle));
  btnOk.classList.add('btn-ok', BUTTON_CLASS$1);
  var btnCancel = document.createElement('div');
  btnCancel.appendChild(document.createTextNode(this.cancelTitle));
  btnCancel.classList.add('btn-cancel', BUTTON_CLASS$1);
  buttonGroup.appendChild(btnOk);
  buttonGroup.appendChild(btnCancel);
  this.node.appendChild(buttonGroup);
};

Confirm$1.prototype.bindEvents = function () {
  Modal$3.prototype.bindEvents.call(this);
  var btnOk = this.node.querySelector('.' + BUTTON_CLASS$1 + '.btn-ok');
  var btnCancel = this.node.querySelector('.' + BUTTON_CLASS$1 + '.btn-cancel');
  btnOk.addEventListener('click', function () {
    this.destroy();
    this.callback && this.callback(this.okTitle);
  }.bind(this));
  btnCancel.addEventListener('click', function () {
    this.destroy();
    this.callback && this.callback(this.cancelTitle);
  }.bind(this));
};

var confirm = Confirm$1;

__$styleInject(".amfe-prompt .input-wrap {\n  box-sizing: border-box;\n  width: 100%;\n  margin-top: 0.133333rem;\n  // padding: 0.24rem 0.213333rem 0.213333rem;\n  height: 0.96rem;\n}\n.amfe-prompt .input-wrap .input {\n  box-sizing: border-box;\n  width: 100%;\n  height: 0.56rem;\n  line-height: 0.56rem;\n  font-size: 0.32rem;\n  border: 1px solid #999;\n}\n.amfe-prompt .btn-group .btn {\n  float: left;\n  width: 50%;\n}\n.amfe-prompt .btn-group .btn.btn-ok {\n  border-right: 1px solid #ddd;\n}\n",undefined);

var Modal$4 = modal$2;


var CONTENT_CLASS$2 = 'content';
var MSG_CLASS$2 = 'content-msg';
var BUTTON_GROUP_CLASS$2 = 'btn-group';
var BUTTON_CLASS$2 = 'btn';
var INPUT_WRAP_CLASS = 'input-wrap';
var INPUT_CLASS = 'input';

function Prompt$1(config) {
  this.msg = config.message || '';
  this.defaultMsg = config.default || '';
  this.callback = config.callback;
  this.okTitle = config.okTitle || 'OK';
  this.cancelTitle = config.cancelTitle || 'Cancel';
  Modal$4.call(this);
  this.node.classList.add('amfe-prompt');
}

Prompt$1.prototype = Object.create(Modal$4.prototype);

Prompt$1.prototype.createNodeContent = function () {

  var content = document.createElement('div');
  content.classList.add(CONTENT_CLASS$2);
  this.node.appendChild(content);

  var msg = document.createElement('div');
  msg.classList.add(MSG_CLASS$2);
  msg.appendChild(document.createTextNode(this.msg));
  content.appendChild(msg);

  var inputWrap = document.createElement('div');
  inputWrap.classList.add(INPUT_WRAP_CLASS);
  content.appendChild(inputWrap);
  var input = document.createElement('input');
  input.classList.add(INPUT_CLASS);
  input.type = 'text';
  input.autofocus = true;
  input.placeholder = this.defaultMsg;
  inputWrap.appendChild(input);

  var buttonGroup = document.createElement('div');
  buttonGroup.classList.add(BUTTON_GROUP_CLASS$2);
  var btnOk = document.createElement('div');
  btnOk.appendChild(document.createTextNode(this.okTitle));
  btnOk.classList.add('btn-ok', BUTTON_CLASS$2);
  var btnCancel = document.createElement('div');
  btnCancel.appendChild(document.createTextNode(this.cancelTitle));
  btnCancel.classList.add('btn-cancel', BUTTON_CLASS$2);
  buttonGroup.appendChild(btnOk);
  buttonGroup.appendChild(btnCancel);
  this.node.appendChild(buttonGroup);
};

Prompt$1.prototype.bindEvents = function () {
  Modal$4.prototype.bindEvents.call(this);
  var btnOk = this.node.querySelector('.' + BUTTON_CLASS$2 + '.btn-ok');
  var btnCancel = this.node.querySelector('.' + BUTTON_CLASS$2 + '.btn-cancel');
  var that = this;
  btnOk.addEventListener('click', function () {
    var val = document.querySelector('input').value;
    this.destroy();
    this.callback && this.callback({
      result: that.okTitle,
      data: val
    });
  }.bind(this));
  btnCancel.addEventListener('click', function () {
    var val = document.querySelector('input').value;
    this.destroy();
    this.callback && this.callback({
      result: that.cancelTitle,
      data: val
    });
  }.bind(this));
};

var prompt = Prompt$1;

__$styleInject(".amfe-toast {\n  font-size: 0.32rem;\n  line-height: 0.426667rem;\n  position: fixed;\n  box-sizing: border-box;\n  max-width: 80%;\n  bottom: 2.666667rem;\n  left: 50%;\n  padding: 0.213333rem;\n  background-color: #000;\n  color: #fff;\n  text-align: center;\n  opacity: 0.6;\n  transition: all 0.4s ease-in-out;\n  border-radius: 0.066667rem;\n  -webkit-transform: translateX(-50%);\n  transform: translateX(-50%);\n}\n\n.amfe-toast.hide {\n  opacity: 0;\n}\n",undefined);

var queue$1 = [];
var timer;
var isProcessing = false;
var toastWin;
var TOAST_WIN_CLASS_NAME = 'amfe-toast';

var DEFAULT_DURATION = 0.8;
var TRANSITION_TIME = 0.4;

function showToastWindow(msg, callback) {
  var handleTransitionEnd = function () {
    toastWin.removeEventListener('transitionend', handleTransitionEnd);
    toastWin.removeEventListener('webkitTransitionEnd', handleTransitionEnd);
    callback && callback();
  };
  if (!toastWin) {
    toastWin = document.createElement('div');
    toastWin.classList.add(TOAST_WIN_CLASS_NAME, 'hide');
    document.body.appendChild(toastWin);
  }
  toastWin.innerHTML = msg;
  toastWin.addEventListener('transitionend', handleTransitionEnd);
  toastWin.addEventListener('webkitTransitionEnd', handleTransitionEnd);
  setTimeout(function () {
    toastWin.classList.remove('hide');
  }, 0);
  setTimeout(function () {
    callback && callback();
  }, TRANSITION_TIME * 1000);
}

function hideToastWindow(callback) {
  var handleTransitionEnd = function () {
    toastWin.removeEventListener('transitionend', handleTransitionEnd);
    toastWin.removeEventListener('webkitTransitionEnd', handleTransitionEnd);
    callback && callback();
  };
  if (!toastWin) {
    return
  }
  toastWin.addEventListener('transitionend', handleTransitionEnd);
  toastWin.addEventListener('webkitTransitionEnd', handleTransitionEnd);
  toastWin.classList.add('hide');
  setTimeout(function () {
    callback && callback();
  }, TRANSITION_TIME * 1000);
}

var toast$1 = {

  push: function (msg, duration) {
    queue$1.push({
      msg: msg,
      duration: duration || DEFAULT_DURATION
    });
    this.show();
  },

  show: function () {
    var that = this;

    // All messages had been toasted already, so remove the toast window,
    if (!queue$1.length) {
      toastWin && toastWin.parentNode.removeChild(toastWin);
      toastWin = null;
      return
    }

    // the previous toast is not ended yet.
    if (isProcessing) {
      return
    }
    isProcessing = true;

    var toastInfo = queue$1.shift();
    showToastWindow(toastInfo.msg, function () {
      timer = setTimeout(function () {
        timer = null;
        hideToastWindow(function () {
          isProcessing = false;
          that.show();
        });
      }, toastInfo.duration * 1000);
    });
  }

};

var toast_1 = {
  push: toast$1.push.bind(toast$1)
};

var Alert = alert;
var Confirm = confirm;
var Prompt = prompt;
var toast = toast_1;

var modal = {

  toast: function (msg, duration) {
    toast.push(msg, duration);
  },

  alert: function (config) {
    new Alert(config).show();
  },

  prompt: function (config) {
    new Prompt(config).show();
  },

  confirm: function (config) {
    new Confirm(config).show();
  }

};

!window.lib && (window.lib = {});
window.lib.modal = modal;

var index$18 = modal;

var msg = {

  // duration: default is 0.8 seconds.
  toast: function (config) {
    index$18.toast(config.message, config.duration);
  },

  // config:
  //  - message: string
  //  - okTitle: title of ok button
  //  - callback
  alert: function (config, callbackId) {
    var sender = this.sender;
    config.callback = function () {
      sender.performCallback(callbackId);
    };
    index$18.alert(config);
  },

  // config:
  //  - message: string
  //  - okTitle: title of ok button
  //  - cancelTitle: title of cancel button
  //  - callback
  confirm: function (config, callbackId) {
    var sender = this.sender;
    config.callback = function (val) {
      sender.performCallback(callbackId, val);
    };
    index$18.confirm(config);
  },

  // config:
  //  - message: string
  //  - okTitle: title of ok button
  //  - cancelTitle: title of cancel button
  //  - callback
  prompt: function (config, callbackId) {
    var sender = this.sender;
    config.callback = function (val) {
      sender.performCallback(callbackId, val);
    };
    index$18.prompt(config);
  }
};

var meta$6 = {
  modal: [{
    name: 'toast',
    args: ['object']
  }, {
    name: 'alert',
    args: ['object', 'function']
  }, {
    name: 'confirm',
    args: ['object', 'function']
  }, {
    name: 'prompt',
    args: ['object', 'function']
  }]
};

var Modal = {
  init: function (Weex) {
    Weex.registerApiModule('modal', msg, meta$6);
  }
};

var navigator$1 = {

  // config
  //  - url: the url to push
  //  - animated: this configuration item is native only
  //  callback is not currently supported
  push: function (config, callbackId) {
    window.location.href = config.url;
    this.sender.performCallback(callbackId);
  },

  // config
  //  - animated: this configuration item is native only
  //  callback is note currently supported
  pop: function (config, callbackId) {
    window.history.back();
    this.sender.performCallback(callbackId);
  }

};

var meta$7 = {
  navigator: [{
    name: 'push',
    args: ['object', 'function']
  }, {
    name: 'pop',
    args: ['object', 'function']
  }]
};

var Navigator = {
  init: function (Weex) {
    Weex.registerApiModule('navigator', navigator$1, meta$7);
  }
};

var pageInfo = {

  setTitle: function (title) {
    title = title || 'Weex HTML5';
    try {
      title = decodeURIComponent(title);
    }
    catch (e) {}
    document.title = title;
  }
};

var meta$8 = {
  pageInfo: [{
    name: 'setTitle',
    args: ['string']
  }]
};

var PageInfo = {
  init: function (Weex) {
    Weex.registerApiModule('pageInfo', pageInfo, meta$8);
  }
};

/* global localStorage */
var supportLocalStorage = typeof localStorage !== 'undefined';
var SUCCESS = 'success';
var FAILED = 'failed';
var INVALID_PARAM = 'invalid_param';
var UNDEFINED = 'undefined';

var storage = {

  /**
   * When passed a key name and value, will add that key to the storage,
   * or update that key's value if it already exists.
   * @param {string} key
   * @param {string} value
   * @param {function} callbackId
   */
  setItem: function (key, value, callbackId) {
    if (!supportLocalStorage) {
      console.error('your browser is not support localStorage yet.');
      return
    }
    var sender = this.sender;
    if (!key || !value) {
      sender.performCallback(callbackId, {
        result: 'failed',
        data: INVALID_PARAM
      });
      return
    }
    try {
      localStorage.setItem(key, value);
      sender.performCallback(callbackId, {
        result: SUCCESS,
        data: UNDEFINED
      });
    }
    catch (e) {
      // accept any exception thrown during a storage attempt as a quota error
      sender.performCallback(callbackId, {
        result: FAILED,
        data: UNDEFINED
      });
    }
  },

  /**
   * When passed a key name, will return that key's value.
   * @param {string} key
   * @param {function} callbackId
   */
  getItem: function (key, callbackId) {
    if (!supportLocalStorage) {
      console.error('your browser is not support localStorage yet.');
      return
    }
    var sender = this.sender;
    if (!key) {
      sender.performCallback(callbackId, {
        result: FAILED,
        data: INVALID_PARAM
      });
      return
    }
    var val = localStorage.getItem(key);
    sender.performCallback(callbackId, {
      result: val ? SUCCESS : FAILED,
      data: val || UNDEFINED
    });
  },

  /**
   *When passed a key name, will remove that key from the storage.
   * @param {string} key
   * @param {function} callbackId
   */
  removeItem: function (key, callbackId) {
    if (!supportLocalStorage) {
      console.error('your browser is not support localStorage yet.');
      return
    }
    var sender = this.sender;
    if (!key) {
      sender.performCallback(callbackId, {
        result: FAILED,
        data: INVALID_PARAM
      });
      return
    }
    localStorage.removeItem(key);
    sender.performCallback(callbackId, {
      result: SUCCESS,
      data: UNDEFINED
    });
  },

  /**
   * Returns an integer representing the number of data items stored in the Storage object.
   * @param {function} callbackId
   */
  length: function (callbackId) {
    if (!supportLocalStorage) {
      console.error('your browser is not support localStorage yet.');
      return
    }
    var sender = this.sender;
    var len = localStorage.length;
    sender.performCallback(callbackId, {
      result: SUCCESS,
      data: len
    });
  },

  /**
   * Returns an array that contains all keys stored in Storage object.
   * @param {function} callbackId
   */
  getAllKeys: function (callbackId) {
    if (!supportLocalStorage) {
      console.error('your browser is not support localStorage yet.');
      return
    }
    var sender = this.sender;
    var _arr = [];
    for (var i = 0; i < localStorage.length; i++) {
      _arr.push(localStorage.key(i));
    }
    sender.performCallback(callbackId, {
      result: SUCCESS,
      data: _arr
    });
  }
};

var meta$9 = {
  storage: [{
    name: 'setItem',
    args: ['string', 'string', 'function']
  }, {
    name: 'getItem',
    args: ['string', 'function']
  }, {
    name: 'removeItem',
    args: ['string', 'function']
  }, {
    name: 'length',
    args: ['function']
  }, {
    name: 'getAllKeys',
    args: ['function']
  }]
};

var Storage = {
  init: function (Weex) {
    Weex.registerApiModule('storage', storage, meta$9);
  }
};

/* global lib, XMLHttpRequest */
/* deps: httpurl */

var utils$1;

var jsonpCnt = 0;
var ERROR_STATE = -1;

var TYPE_JSON = 'application/json;charset=UTF-8';
var TYPE_FORM = 'application/x-www-form-urlencoded';

var REG_FORM = /^(?:[^&=]+=[^&=]+)(?:&[^&=]+=[^&=]+)*$/;

function _jsonp (config, callback, progressCallback) {
  var cbName = 'jsonp_' + (++jsonpCnt);
  var url;

  if (!config.url) {
    console.error('[h5-render] config.url should be set in _jsonp for \'fetch\' API.');
  }

  global[cbName] = (function (cb) {
    return function (response) {
      callback({
        status: 200,
        ok: true,
        statusText: 'OK',
        data: response
      });
      delete global[cb];
    }
  })(cbName);

  var script = document.createElement('script');
  try {
    url = lib.httpurl(config.url);
  }
  catch (err) {
    console.error('[h5-render] invalid config.url in _jsonp for \'fetch\' API: '
      + config.url);
  }
  url.params.callback = cbName;
  script.type = 'text/javascript';
  script.src = url.toString();
  // script.onerror is not working on IE or safari.
  // but they are not considered here.
  script.onerror = (function (cb) {
    return function (err) {
      console.error('[h5-render] unexpected error in _jsonp for \'fetch\' API', err);
      callback({
        status: ERROR_STATE,
        ok: false,
        statusText: '',
        data: ''
      });
      delete global[cb];
    }
  })(cbName);
  var head = document.getElementsByTagName('head')[0];
  head.insertBefore(script, null);
}

function _xhr (config, callback, progressCallback) {
  var xhr = new XMLHttpRequest();
  xhr.responseType = config.type;
  xhr.open(config.method, config.url, true);

  // cors cookie support
  if (config.withCredentials === true) {
    xhr.withCredentials = true;
  }

  var headers = config.headers || {};
  for (var k in headers) {
    xhr.setRequestHeader(k, headers[k]);
  }

  xhr.onload = function (res) {
    callback({
      status: xhr.status,
      ok: xhr.status >= 200 && xhr.status < 300,
      statusText: xhr.statusText,
      data: xhr.response,
      headers: xhr.getAllResponseHeaders().split('\n')
        .reduce(function (obj, headerStr) {
          var headerArr = headerStr.match(/(.+): (.+)/);
          if (headerArr) {
            obj[headerArr[1]] = headerArr[2];
          }
          return obj
        }, {})
    });
  };

  if (progressCallback) {
    xhr.onprogress = function (e) {
      progressCallback({
        readyState: xhr.readyState,
        status: xhr.status,
        length: e.loaded,
        total: e.total,
        statusText: xhr.statusText,
        headers: xhr.getAllResponseHeaders().split('\n')
          .reduce(function (obj, headerStr) {
            var headerArr = headerStr.match(/(.+): (.+)/);
            if (headerArr) {
              obj[headerArr[1]] = headerArr[2];
            }
            return obj
          }, {})
      });
    };
  }

  xhr.onerror = function (err) {
    console.error('[h5-render] unexpected error in _xhr for \'fetch\' API', err);
    callback({
      status: ERROR_STATE,
      ok: false,
      statusText: '',
      data: ''
    });
  };

  xhr.send(config.body);
}

var stream = {

  /**
   * sendHttp
   * @deprecated
   * Note: This API is deprecated. Please use stream.fetch instead.
   * send a http request through XHR.
   * @param  {obj} params
   *  - method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'HEAD' | 'PATCH',
   *  - url: url requested
   * @param  {string} callbackId
   */
  sendHttp: function (param, callbackId) {
    if (typeof param === 'string') {
      try {
        param = JSON.parse(param);
      }
      catch (e) {
        return
      }
    }
    if (typeof param !== 'object' || !param.url) {
      return console.error(
        '[h5-render] invalid config or invalid config.url for sendHttp API')
    }

    var sender = this.sender;
    var method = param.method || 'GET';
    var xhr = new XMLHttpRequest();
    xhr.open(method, param.url, true);
    xhr.onload = function () {
      sender.performCallback(callbackId, this.responseText);
    };
    xhr.onerror = function (error) {
      return console.error('[h5-render] unexpected error in sendHttp API', error)
      // sender.performCallback(
      //   callbackId,
      //   new Error('unexpected error in sendHttp API')
      // )
    };
    xhr.send();
  },

  /**
   * fetch
   * use stream.fetch to request for a json file, a plain text file or
   * a arraybuffer for a file stream. (You can use Blob and FileReader
   * API implemented by most modern browsers to read a arraybuffer.)
   * @param  {object} options config options
   *   - method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'HEAD' | 'PATCH'
   *   - headers {obj}
   *   - url {string}
   *   - mode {string} 'cors' | 'no-cors' | 'same-origin' | 'navigate'
   *   - withCredentials {boolean}
   *   - body
   *   - type {string} 'json' | 'jsonp' | 'text'
   * @param  {string} callbackId
   * @param  {string} progressCallbackId
   */
  fetch: function (options, callbackId, progressCallbackId) {
    var DEFAULT_METHOD = 'GET';
    var DEFAULT_MODE = 'cors';
    var DEFAULT_TYPE = 'text';

    var methodOptions = ['GET', 'POST', 'PUT', 'DELETE', 'HEAD', 'PATCH'];
    var modeOptions = ['cors', 'no-cors', 'same-origin', 'navigate'];
    var typeOptions = ['text', 'json', 'jsonp', 'arraybuffer'];

    // const fallback = false  // fallback from 'fetch' API to XHR.
    var sender = this.sender;

    var config = utils$1.extend({}, options);

    // validate options.method
    if (typeof config.method === 'undefined') {
      config.method = DEFAULT_METHOD;
      console.warn('[h5-render] options.method for \'fetch\' API has been set to '
        + 'default value \'' + config.method + '\'');
    }
    else if (methodOptions.indexOf((config.method + '')
        .toUpperCase()) === -1) {
      return console.error('[h5-render] options.method \''
        + config.method
        + '\' for \'fetch\' API should be one of '
        + methodOptions + '.')
    }

    // validate options.url
    if (!config.url) {
      return console.error('[h5-render] options.url should be set for \'fetch\' API.')
    }

    // validate options.mode
    if (typeof config.mode === 'undefined') {
      config.mode = DEFAULT_MODE;
    }
    else if (modeOptions.indexOf((config.mode + '').toLowerCase()) === -1) {
      return console.error('[h5-render] options.mode \''
        + config.mode
        + '\' for \'fetch\' API should be one of '
        + modeOptions + '.')
    }

    // validate options.type
    if (typeof config.type === 'undefined') {
      config.type = DEFAULT_TYPE;
      console.warn('[h5-render] options.type for \'fetch\' API has been set to '
        + 'default value \'' + config.type + '\'.');
    }
    else if (typeOptions.indexOf((config.type + '').toLowerCase()) === -1) {
      return console.error('[h5-render] options.type \''
          + config.type
          + '\' for \'fetch\' API should be one of '
          + typeOptions + '.')
    }

    // validate options.headers
    config.headers = config.headers || {};
    if (!utils$1.isPlainObject(config.headers)) {
      return console.error('[h5-render] options.headers should be a plain object')
    }

    // validate options.body
    var body = config.body;
    if (!config.headers['Content-Type'] && body) {
      if (utils$1.isPlainObject(body)) {
        // is a json data
        try {
          config.body = JSON.stringify(body);
          config.headers['Content-Type'] = TYPE_JSON;
        }
        catch (e) {}
      }
      else if (utils$1.getType(body) === 'string' && body.match(REG_FORM)) {
        // is form-data
        config.body = encodeURI(body);
        config.headers['Content-Type'] = TYPE_FORM;
      }
    }

    // validate options.timeout
    config.timeout = parseInt(config.timeout, 10) || 2500;

    var _callArgs = [config, function (res) {
      sender.performCallback(callbackId, res);
    }];
    if (progressCallbackId) {
      _callArgs.push(function (res) {
        // Set 'keepAlive' to true for sending continuous callbacks
        sender.performCallback(progressCallbackId, res, true);
      });
    }

    if (config.type === 'jsonp') {
      _jsonp.apply(this, _callArgs);
    }
    else {
      _xhr.apply(this, _callArgs);
    }
  }

};

var meta$10 = {
  stream: [{
    name: 'sendHttp',
    args: ['object', 'function']
  }, {
    name: 'fetch',
    args: ['object', 'function', 'function']
  }]
};

var Stream = {
  init: function (Weex) {
    utils$1 = Weex.utils;
    Weex.registerApiModule('stream', stream, meta$10);
  }
};

var webview = {

  // ref: ref of the web component.
  goBack: function (ref) {
    var webComp = this.getComponentManager().getComponent(ref);
    if (!webComp.goBack) {
      console.error('error: the specified component has no method of'
          + ' goBack. Please make sure it is a webview component.');
      return
    }
    webComp.goBack();
  },

  // ref: ref of the web component.
  goForward: function (ref) {
    var webComp = this.getComponentManager().getComponent(ref);
    if (!webComp.goForward) {
      console.error('error: the specified component has no method of'
          + ' goForward. Please make sure it is a webview component.');
      return
    }
    webComp.goForward();
  },

  // ref: ref of the web component.
  reload: function (ref) {
    var webComp = this.getComponentManager().getComponent(ref);
    if (!webComp.reload) {
      console.error('error: the specified component has no method of'
          + ' reload. Please make sure it is a webview component.');
      return
    }
    webComp.reload();
  }

};

var meta$11 = {
  webview: [{
    name: 'goBack',
    args: ['string']
  }, {
    name: 'goForward',
    args: ['string']
  }, {
    name: 'reload',
    args: ['string']
  }]
};

var Webview = {
  init: function (Weex) {
    Weex.registerApiModule('webview', webview, meta$11);
  }
};

// import components.
// import apis.
var packages = { Image: Image$1, Text: Text, Scrollable: Scrollable, Slider: Slider, Indicator: Indicator, Tabheader: Tabheader, Input: Input, Textarea: Textarea, Video: Video, Switch: Switch, A: A, Embed: Embed, Spinner: Spinner, Web: Web, Animation: Animation, Clipboard: Clipboard, Dom: Dom, Event: Event$1, Geolocation: Geolocation, GlobalEvent: GlobalEvent, Modal: Modal, Navigator: Navigator, PageInfo: PageInfo, Storage: Storage, Stream: Stream, Webview: Webview };

// install the apis and components as packages.
var extensions = {
  init: function init (Weex) {
    if (typeof packages !== 'object') {
      return
    }
    for (var k in packages) {
      Weex.install(packages[k]);
    }
    // packages.forEach(pkg => Weex.install(pkg))
  }
};

// install the extended apis and components.
Weex$1.install(root);
Weex$1.install(div);
Weex$1.install(droot);

Weex$1.install(extensions);

global.registerComponents([
  { type: 'input', methods: ['focus', 'blur'] }
]);

return Weex$1;

})));