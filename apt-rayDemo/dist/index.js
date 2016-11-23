/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var demo = __webpack_require__(13);
	
	function render() {
	  demo();
	}
	render();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Element of topo for personal project
	 *
	 * @returns
	 * @author ilex
	 */
	
	const extend = __webpack_require__(16);
	
	let Element = function() {
	  this.eleType = 'Element';
	};
	
	Element.prototype.draw = function() {};
	
	Element.prototype.getId = function() {
	  return this.id;
	};
	
	Element.prototype.setId = function(i) {
	  this.id = i;
	  return this;
	};
	
	Element.prototype.getFloatMenu = function() {
	  return this.floatMenu;
	};
	
	Element.prototype.setFloatMenu = function(m) {
	  this.floatMenu = m;
	  return this;
	};
	
	Element.prototype.isFloatMenuVisible = function() {
	  return this.floatMenuVisible;
	};
	
	Element.prototype.setFloatMenuVisible = function(v) {
	  this.floatMenuVisible = v;
	  return this;
	};
	
	Element.prototype.setX = function(x) {
	  this.x = x;
	  return this;
	};
	
	Element.prototype.setY = function(y) {
	  this.y = y;
	  return this;
	};
	
	Element.prototype.getX = function() {
	  return this.x;
	};
	
	Element.prototype.getY = function() {
	  return this.y;
	};
	
	Element.prototype.getLocation = function(x, y) {
	  return {
	    x: this.getX(),
	    y: this.getY()
	  };
	};
	
	Element.prototype.setLocation = function(x, y) {
	  this.setX(x);
	  this.setY(y);
	  return this;
	};
	
	Element.prototype.getWidth = function() {
	  return this.width;
	};
	
	Element.prototype.setWidth = function(width) {
	  this.width = width;
	  return this;
	};
	
	Element.prototype.getHeight = function() {
	  return this.height;
	};
	
	Element.prototype.setHeight = function(height) {
	  this.height = height;
	  return this;
	};
	
	Element.prototype.getSize = function() {
	  return {
	    width: this.getWidth(),
	    height: this.getHeight()
	  };
	};
	
	Element.prototype.setSize = function(width, height) {
	  this.setWidth(width);
	  this.setHeight(height);
	  return this;
	};
	
	Element.prototype.setBound = function(x, y, width, height) {
	  this.setLocation(x, y);
	  this.setSize(width, height);
	  return this;
	};
	
	Element.prototype.getBound = function() {
	  return {
	    left: this.getX(),
	    top: this.getY(),
	    right: this.getX() + this.getWidth(),
	    bottom: this.getY() + this.getHeight()
	  };
	};
	
	Element.prototype.isVisible = function() {
	  return this.visible;
	};
	
	Element.prototype.setVisible = function(v) {
	  this.visible = v;
	  return this;
	};
	
	Element.prototype.isDragable = function() {
	  return this.dragable;
	};
	
	Element.prototype.setDragable = function(d) {
	  this.dragable = d;
	  return this;
	};
	
	Element.prototype.isSelected = function() {
	  return this.selected;
	};
	
	Element.prototype.setSelected = function(s) {
	  this.selected = s;
	  return this;
	};
	
	Element.prototype.isFocus = function() {
	  return this.focus;
	};
	
	Element.prototype.setFocus = function(f) {
	  this.focus = f;
	  return this;
	};
	
	Element.prototype.onFocus = function() {
	  this.setFocus(true);
	  return this;
	};
	
	Element.prototype.loseFocus = function() {
	  this.setFocus(false);
	  return this;
	};
	
	Element.prototype.setTip = function(tip) {
	  this.tip = tip;
	  return this;
	};
	
	Element.prototype.getTip = function() {
	  return this.tip;
	};
	
	Element.prototype.onMousedown = function(e) {
	  console.log(this);
	  this.setSelected(true);
	  this.mousedownX = e.x;
	  this.mousedownY = e.y;
	  this.selectedLocation = {
	    x: this.getX(),
	    y: this.getY()
	  };
	};
	
	Element.prototype.onMouseselected = function() {
	  this.setSelected(true);
	  this.selectedLocation = {
	    x: this.getX(),
	    y: this.getY()
	  };
	};
	
	Element.prototype.goBack = function(box) {};
	
	Element.prototype.onMouseup = function(e) {
	  this.mouseupX = e.x;
	  this.mouseupY = e.y;
	  let x = e.x;
	  let y = e.y;
	  let box = e.context;
	
	  if (this.gravitate) {
	    for (let i = 0; i < box.links.length; i++) {
	      let link = box.links[i];
	      if (this === link.nodeB) {
	        let newNodeA = box.findCloserNode(this, this.gravitate);
	        let gravitateMsg = {
	          link: link,
	          target: this,
	          oldNode: this.lastParentNode,
	          newNode: newNodeA
	        };
	        if (newNodeA && newNodeA.layout && newNodeA.layout.auto) {
	          box.layoutNode(newNodeA);
	        }
	        if (this.lastParentNode && this.lastParentNode.layout && this.lastParentNode.layout.auto) {
	          box.layoutNode(this.lastParentNode);
	        }
	        box.publish('gravitate', extend({}, gravitateMsg));
	        break;
	      }
	    }
	  }
	
	  if (this.outContainer && this.isIndrag) {
	    for (let j = 0; j < box.containers.length; j++) {
	      let c = box.containers[j];
	      if (!this.inContainer(c)) {continue;}
	      if (this.parentContainer !== c) {continue;}
	      if (this.x + this.width < c.x || this.x > c.x + c.width || this.y + this.height < c.y || this.y > c.y + c.height) {
	        this.parentContainer.remove(this);
	        break;
	      }
	    }
	  }
	
	  if (this.inContainer && this.isOnMousedrag) {
	    for (let k = 0; k < box.containers.length; k++) {
	      let group = box.containers[k];
	      if (!this.inContainer(group)) {continue;}
	      if (x > group.x && x < group.x + group.width && y > group.y && y < group.y + group.height) {
	        if (this.parentContainer) {
	          this.parentContainer.remove(this);
	        }
	        group.add(this);
	        break;
	      }
	    }
	  }
	  if (this.layout && this.layout.auto) {
	    box.layoutNode(this);
	  }
	  this.isOnMousedrag = false;
	};
	
	Element.prototype.cancleSelected = function() {
	  this.setSelected(false);
	  this.selectedLocation = null;
	};
	
	Element.prototype.onMouseover = function(e) {
	  this.isOnMousOver = true;
	  this.isTipVisible = true;
	  this.setFocus(true);
	};
	
	Element.prototype.onMouseout = function(e) {
	  this.isOnMousOver = false;
	  this.isTipVisible = false;
	  this.setFocus(false);
	};
	
	Element.prototype.onMousedrag = function(e) {
	  this.isOnMousedrag = true;
	  let dx = e.dx;
	  let dy = e.dy;
	  let x = e.x;
	  let y = e.y;
	
	  let newX = this.selectedLocation.x + dx;
	  let newY = this.selectedLocation.y + dy;
	  this.setLocation(newX, newY);
	  let box = e.context;
	
	  if (this.gravitate) {
	    for (let i = 0; i < box.links.length; i++) {
	      let link = box.links[i];
	      if (this === link.nodeB) {
	        let newNodeA = box.findCloserNode(this, this.gravitate);
	        if (newNodeA && newNodeA != null && newNodeA !== link.nodeA) {
	          if (this.lastParentNode == null) {
	            this.lastParentNode = link.nodeA;
	          }
	          link.nodeA = newNodeA;
	          break;
	        }
	      }
	    }
	  }
	
	  if (this.inContainer) {
	    for (let j = 0; j < box.containers.length; j++) {
	      let group = box.containers[j];
	      if (!this.inContainer(group)) {continue;}
	      if (x > group.x && x < group.x + group.width && y > group.y && y < group.y + group.height) {
	        group.setFocus(true);
	      } else {
	        group.setFocus(false);
	      }
	    }
	  }
	  this.isIndrag = true;
	};
	
	module.exports = Element;


/***/ },
/* 2 */
/***/ function(module, exports) {

	/**
	 * util
	 *
	 * @param {any} name
	 */
	function MessageBus(name) {
	  let _self = this;
	  this.name = name;
	  this.messageMap = {};
	  this.messageCount = 0;
	
	  this.subscribe = function(topic, action) {
	    if (!(typeof topic == 'string')) {
	      subscribes(topic, action);
	    } else {
	      let actions = _self.messageMap[topic];
	      if (actions == null) {
	        _self.messageMap[topic] = [];
	      }
	      _self.messageMap[topic].push(action);
	      _self.messageCount++;
	    }
	  };
	
	  function subscribes(topics, action) {
	    let results = [];
	    let counter = 0;
	    for (let i = 0; i < topics.length; i++) {
	      let topic = topics[i];
	      let actions = _self.messageMap[topic];
	      if (actions == null) {
	        _self.messageMap[topic] = [];
	      }
	
	      function actionProxy(result) {
	        results[i] = result;
	        counter++;
	        if (counter == topics.length) {
	          counter = 0;
	          return action.apply(null, results);
	        } else {
	          return null;
	        }
	      }
	
	      _self.messageMap[topic].push(actionProxy);
	      _self.messageCount++;
	    }
	  }
	
	  this.unsubscribe = function(topic) {
	    let actions = _self.messageMap[topic];
	    if (actions && actions != null) {
	      _self.messageMap[topic] = null;
	      delete(_self.messageMap[topic]);
	      _self.messageCount--;
	    }
	  };
	
	  this.publish = function(topic, data, concurrency) {
	    let actions = _self.messageMap[topic];
	    if (actions && actions != null) {
	      for (let i = 0; i < actions.length; i++) {
	        if (concurrency) {
	          (function(action, data) {
	            setTimeout(function() {
	              action(data);
	            }, 10);
	          })(actions[i], data);
	        } else {
	          actions[i](data);
	        }
	      }
	    }
	  };
	}
	
	function getDistance(p1, p2) {
	  let dx = p2.x - p1.x;
	  let dy = p2.y - p1.y;
	  return Math.sqrt(dx * dx + dy * dy);
	}
	
	Array.prototype.del = function(n) {
	  if (typeof n != 'number') {
	    for (let i = 0; i < this.length; i++) {
	      if (this[i] === n) {
	        return this.slice(0, i).concat(this.slice(i + 1, this.length));
	      }
	    }
	    return this;
	  } else {
	    if (n < 0) {return this;}
	    return this.slice(0, n).concat(this.slice(n + 1, this.length));
	  }
	};
	
	if (![].indexOf) { //IE
	  Array.prototype.indexOf = function(data) {
	    for (let i = 0; i < this.length; i++) {
	      if (this[i] === data) {return i;}
	    }
	    return -1;
	  };
	}
	
	if (!window.console) { //IE
	  window.console = {
	    log: function(msg) {},
	    info: function(msg) {},
	    debug: function(msg) {},
	    warn: function(msg) {},
	    error: function(msg) {}
	  };
	}
	
	function mouseCoords(event) {
	  if (event.pageX || event.pageY) {
	    return {
	      x: event.pageX,
	      y: event.pageY
	    };
	  }
	  return {
	    x: event.clientX + document.body.scrollLeft - document.body.clientLeft,
	    y: event.clientY + document.body.scrollTop - document.body.clientTop
	  };
	}
	
	function getXY(box, event) {
	  event = event || mouseCoords(window.event);
	  let x = document.body.scrollLeft + (event.x || event.layerX);
	  let y = document.body.scrollTop + (event.y || event.layerY);
	  return {
	    x: x - box.offset.left,
	    y: y - box.offset.top
	  };
	}
	
	function rotatePoint(bx, by, x, y, angle) {
	  let dx = x - bx;
	  let dy = y - by;
	  let r = Math.sqrt(dx * dx + dy * dy);
	  let a = Math.atan2(dy, dx) + angle;
	  return {
	    x: bx + Math.cos(a) * r,
	    y: by + Math.sin(a) * r
	  };
	}
	
	function rotatePoints(target, points, angle) {
	  let result = [];
	  for (let i = 0; i < points.length; i++) {
	    let p = rotatePoint(target.x, target.y, points[i].x, points[i].y, angle);
	    result.push(p);
	  }
	  return result;
	}
	
	function _foreach(datas, f, dur) {
	  if (datas.length == 0) {return;}
	  let n = 0;
	
	  function doIt(n) {
	    if (n == datas.length) {return;}
	    f(datas[n]);
	    setTimeout(function() {
	      doIt(++n);
	    }, dur);
	  }
	  doIt(n);
	}
	
	function _for(i, m, f, dur) {
	  if (m < i) {return;}
	  let n = 0;
	
	  function doIt(n) {
	    if (n == m) {return;}
	    f(m);
	    setTimeout(function() {
	      doIt(++n);
	    }, dur);
	  }
	  doIt(n);
	}
	
	/**
	 * 生成uuid
	 * @param {Object} len 长度
	 * @param {Object} radix 进制
	 */
	function createUUID(len, radix) {
	  let chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
	  let uuid = [];
	  let i;
	  radix = radix || chars.length;
	  if (len) {
	    // Compact form
	    for (i = 0; i < len; i++) {
	      uuid[i] = chars[0 | Math.random() * radix];
	    }
	  } else {
	    // rfc4122, version 4 form
	    let r;
	    // rfc4122 requires these characters
	    uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
	    uuid[14] = '4';
	    // Fill in random data.  At i==19 set the high bits of clock sequence as
	    // per rfc4122, sec. 4.1.5
	    for (i = 0; i < 36; i++) {
	      if (!uuid[i]) {
	        r = 0 | Math.random() * 16;
	        uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
	      }
	    }
	  }
	  return uuid.join('');
	}
	
	module.exports = {
	  createUUID: createUUID,
	  rotatePoint: rotatePoint,
	  rotatePoints: rotatePoints,
	  getDistance: getDistance,
	  getXY: getXY,
	  mouseCoords: mouseCoords,
	  MessageBus: MessageBus,
	  _foreach: _foreach,
	  _for: _for
	};


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	const Element = __webpack_require__(1);
	
	/**
	 * AbstractNode of topo for personal project
	 *
	 * @param {any} name
	 * @returns node
	 * @author ilex
	 */
	function AbstractNode(name) {
	  this.eleType = 'AbstractNode';
	  this.id = null;
	  this.x = 0;
	  this.y = 0;
	  this.width = 0;
	  this.height = 0;
	  this.visible = true;
	  this.dragable = true;
	
	  this.name = name;
	  this.image = null;
	  this.color = null;
	  this.layout = null;
	  this.gravitate = null; //function(){};
	  this.parentContainer = null;
	  this.inContainer = null;
	  this.outContainer = null;
	  this.fixed = false;
	}
	
	AbstractNode.prototype = new Element();
	
	AbstractNode.prototype.getName = function() {
	  return this.name;
	};
	
	AbstractNode.prototype.setName = function(n) {
	  this.name = n;
	  return this;
	};
	
	AbstractNode.prototype.getImage = function() {
	  return this.image;
	};
	
	AbstractNode.prototype.setImage = function(i) {
	  let node = this;
	  if (typeof i == 'string') {
	    let img = this.image = new Image();
	    this.image.onload = function() {
	      node.setSize(img.width, img.height);
	    };
	    this.image.src = i;
	  } else {
	    this.image = i;
	  }
	};
	
	let ImageCache = {};
	AbstractNode.prototype.getTypeImage = function(type) {
	  let typeImages = {
	    'zone': './assets/img/zone.png',
	    'host': './assets/img/host.png',
	    'vm': './assets/img/vm.png'
	  };
	  if (ImageCache[type]) {
	    return ImageCache[type];
	  }
	  let src = typeImages[type];
	  if (src == null) {return null;}
	
	  let image = new Image();
	  image.src = src;
	  return ImageCache[type] = image;
	};
	
	AbstractNode.prototype.getType = function() {
	  return this.type;
	};
	
	AbstractNode.prototype.setType = function(type) {
	  this.type = type;
	  this.setImage(this.getTypeImage(type));
	};
	
	module.exports = AbstractNode;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	const Element = __webpack_require__(1);
	
	
	/**
	 * Container of topo for personal project
	 *
	 * @param {any} name
	 * @returns Container
	 * @author ilex
	 */
	function Container(name) {
	  this.eleType = 'Container';
	  this.name = name;
	  this.x = 0;
	  this.y = 0;
	  this.width = 40;
	  this.height = 40;
	  this.items = [];
	  this.style = {
	    fillStyle: '193, 200, 254'
	  };
	  this.alpha = 0.3;
	  this.dragable = true;
	}
	
	Container.prototype = new Element();
	
	Container.prototype.add = function(e) {
	  this.items.push(e);
	  e.parentContainer = this;
	};
	
	Container.prototype.remove = function(e) {
	  for (let i = 0; i < this.items.length; i++) {
	    if (this.items[i] === e) {
	      e.parentContainer = null;
	      this.items = this.items.del(i);
	      e.lastParentContainer = this;
	      break;
	    }
	  }
	};
	
	Container.prototype.removeAll = function() {
	  for (let i = 0; i < this.items.length; i++) {
	    this.remove(this.items[i]);
	  }
	};
	
	Container.prototype.setLocation = function(x, y) {
	  let dx = x - this.getX();
	  let dy = y - this.getY();
	  this.setX(x);
	  this.setY(y);
	
	  for (let i = 0; i < this.items.length; i++) {
	    let item = this.items[i];
	    item.setLocation(item.getX() + dx, item.getY() + dy);
	  }
	};
	
	Container.prototype.updateBound = function() {
	  let bound = {
	    x: 10000000,
	    y: 1000000,
	    width: 0,
	    height: 0
	  };
	  if (this.items.length > 0) {
	    let minX = 10000000;
	    let maxX = -10000000;
	    let minY = 10000000;
	    let maxY = -10000000;
	    let width = maxX - minX;
	    let height = maxY - minY;
	    for (let i = 0; i < this.items.length; i++) {
	      let item = this.items[i];
	      if (item.x <= minX) {
	        minX = item.x;
	      }
	      if (item.x >= maxX) {
	        maxX = item.x;
	      }
	      if (item.y <= minY) {
	        minY = item.y;
	      }
	      if (item.y >= maxY) {
	        maxY = item.y;
	      }
	      width = maxX - minX + item.width;
	      height = maxY - minY + item.height;
	    }
	
	    this.x = minX - 5;
	    this.y = minY - 5;
	    this.width = width + 5;
	    this.height = height + 5;
	  }
	};
	
	Container.prototype.draw = function(ctx) {
	  this.updateBound();
	  ctx.save();
	  ctx.beginPath();
	  ctx.shadowBlur = 9;
	  ctx.shadowColor = 'rgba(0,0,0,0.5)';
	  ctx.shadowOffsetX = 3;
	  ctx.shadowOffsetY = 3;
	  ctx.fillStyle = 'rgba(' + this.style.fillStyle + ',' + this.alpha + ')';
	  ctx.fillRect(this.x, this.y, this.width, this.height);
	  ctx.closePath();
	  ctx.restore();
	};
	
	function GhomboidContainer() {
	  let container = new Container();
	  container.offset = 50;
	  container.draw = function(ctx) {
	    this.updateBound();
	    ctx.save();
	    ctx.beginPath();
	    ctx.shadowBlur = 9;
	    ctx.shadowColor = 'rgba(0,0,0,0.9)';
	    ctx.shadowOffsetX = 6;
	    ctx.shadowOffsetY = 6;
	    ctx.fillStyle = 'rgba(' + this.style.fillStyle + ',' + this.alpha + ')';
	    ctx.moveTo(this.x + this.offset, this.y);
	    ctx.lineTo(this.x + this.offset + this.width, this.y);
	    ctx.lineTo(this.x + this.width, this.y + this.height);
	    ctx.lineTo(this.x, this.y + this.height);
	    ctx.lineTo(this.x + this.offset, this.y);
	    ctx.fill();
	    ctx.stroke();
	    ctx.closePath();
	    ctx.restore();
	  };
	  return container;
	}
	
	
	function GridContainer() {
	  let container = new Container();
	  container.rows = 3;
	  container.cols = 2;
	  container.cellWidth = 60;
	  container.cellHeight = 60;
	  container.offset = 3;
	  //container.padding = {left:0, right:0, top:0, bottom:0};
	
	  container.adjustLayout = function() {
	    for (let i = 0; i < this.items.length; i++) {
	      let item = this.items[i];
	      let row = Math.floor(i / this.cols);
	      let col = i % this.cols;
	      item.x = this.x + col * container.cellWidth;
	      item.y = this.y + row * container.cellHeight;
	    }
	  };
	
	  container.add = function(e) {
	    let capacity = this.items.length;
	    if (capacity == this.rows * this.cols){ return;}
	    this.items.push(e);
	    e.parentContainer = this;
	    this.adjustLayout();
	  };
	
	  container.draw = function(ctx) {
	    container.width = container.cols * container.cellWidth;
	    container.height = container.rows * container.cellHeight;
	    ctx.save();
	    ctx.beginPath();
	    ctx.shadowBlur = 12;
	    ctx.shadowColor = 'rgba(0,0,0,0.9)';
	    ctx.shadowOffsetX = 5;
	    ctx.shadowOffsetY = 3;
	    ctx.fillStyle = 'rgba(' + this.style.fillStyle + ',' + this.alpha + ')';
	
	    let r = 0;
	    if (container.isFocus()) {
	      r = this.offset;
	      ctx.shadowColor = 'rgba(0,0,200, 1)';
	      ctx.fillRect(this.x - r, this.y - r, this.width + r * 2, this.height + r * 2);
	    } else {
	      ctx.shadowColor = 'rgba(0,0,0,0.5)';
	      ctx.fillRect(this.x, this.y, this.width, this.height);
	    }
	    /*
	     ctx.moveTo(this.x-r, this.y -r);
	     ctx.lineTo(this.x-r + 10, this.y - 10 -r);
	     ctx.lineTo(this.x-r + 10 + this.width, this.y - 10-r);
	     ctx.lineTo(this.x-r + 10 + this.width, this.y + this.height - 10 -r);
	     ctx.lineTo(this.x-r + this.width, this.y + this.height -r);
	
	     ctx.moveTo(this.x-r + 10 + this.width, this.y - 10 -r);
	     ctx.lineTo(this.x-r + this.width, this.y -r);
	
	     for(let i=0; i<=this.rows; i++){
	     for(let j=0; j<this.cols; j++){
	     ctx.moveTo(this.x-r, this.y + i * this.cellHeight - r);
	     ctx.lineTo(this.x-r+this.width, this.y+ i * this.cellHeight-r);
	     }
	     }
	     for(let i=0; i<=this.rows; i++){
	     for(let j=0; j<=this.cols; j++){
	     ctx.moveTo(this.x-r + j * this.cellWidth, this.y + r);
	     ctx.lineTo(this.x-r + j * this.cellWidth, this.y+ i * this.cellHeight - r);
	     }
	     }*/
	
	    ctx.stroke();
	    ctx.closePath();
	    ctx.restore();
	  };
	  return container;
	}
	
	function OneItemContainer() {
	  let container = new GridContainer();
	  container.rows = 1;
	  container.cols = 1;
	  container.cellWidth = 50;
	  container.cellHeight = 50;
	
	  container.setDragable(false);
	
	  container.style.fillStyle = '0,100,100';
	  container.alpha = 0.5;
	
	  return container;
	}
	
	module.exports = {
	  Container: Container,
	  GridContainer: GridContainer,
	  OneItemContainer: OneItemContainer,
	  GhomboidContainer: GhomboidContainer
	};


/***/ },
/* 5 */
/***/ function(module, exports) {

	/**
	 * Layout of topo for personal project
	 *
	 * @returns Layout
	 * @author ilex
	 */
	
	function getStarPositions(x, y, count, radius, beginDegree, endDegree) {
	  let start = beginDegree ? beginDegree : 0;
	  let end = endDegree ? endDegree : 2 * Math.PI;
	  let total = end - start;
	  let degree = total / count;
	  let result = [];
	
	  start += degree / 2;
	  for (let i = start; i <= end; i += degree) {
	    let dx = x + Math.cos(i) * radius;
	    let dy = y + Math.sin(i) * radius;
	    result.push({
	      x: dx,
	      y: dy
	    });
	  }
	  return result;
	}
	
	function getTreePositions(x, y, count, horizontal, vertical, dir) {
	  let direction = dir || 'bottom';
	  let result = [];
	
	  if (direction == 'bottom') {
	    let bstart = x - (count / 2) * horizontal + horizontal / 2;
	    for (let b = 0; b <= count; b++) {
	      result.push({
	        x: bstart + b * horizontal,
	        y: y + vertical
	      });
	    }
	  } else if (direction == 'top') {
	    let tstart = x - (count / 2) * horizontal + horizontal / 2;
	    for (let t = 0; t <= count; t++) {
	      result.push({
	        x: tstart + t * horizontal,
	        y: y - vertical
	      });
	    }
	  } else if (direction == 'right') {
	    let rstart = y - (count / 2) * horizontal + horizontal / 2;
	    for (let r = 0; r <= count; r++) {
	      result.push({
	        x: x + vertical,
	        y: rstart + r * horizontal
	      });
	    }
	  } else if (direction == 'left') {
	    let lstart = y - (count / 2) * horizontal + horizontal / 2;
	    for (let l = 0; l <= count; l++) {
	      result.push({
	        x: x - vertical,
	        y: lstart + l * horizontal
	      });
	    }
	  }
	  return result;
	}
	
	function getBusPositions(x, y, count, r, vertical, dir) {
	  let direction = dir || 'horizontal'; //vertical
	  let result = [];
	  let mid = Math.round(count / 2);
	  let startx = x + r;
	
	  if (direction == 'horizontal') {
	    for (let i = 0; i < mid; i++) {
	      result.push({
	        x: startx + i * r,
	        y: y - vertical
	      });
	    }
	    for (let j = mid; j <= count; j++) {
	      result.push({
	        x: startx + j * r,
	        y: y + vertical
	      });
	    }
	  } else if (direction == 'vertical') {
	    console.log('vertical');
	  }
	  return result;
	}
	
	module.exports = {
	  getStarPositions: getStarPositions,
	  getTreePositions: getTreePositions,
	  getBusPositions: getBusPositions
	};


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Link
	 * @author ilex
	 */
	
	const Element = __webpack_require__(1);
	const Util = __webpack_require__(2);
	
	/**
	 * Layout of topo for personal project
	 * @param {Node} nodeA
	 * @param {Node} nodeB
	 * @returns Link
	 */
	function Link(nodeA, nodeB) {
	  this.eleType = 'Link';
	  this.nodeA = nodeA;
	  this.nodeB = nodeB;
	  this.style = {
	    strokeStyle: '116, 166, 250',
	    alpha: 1,
	    lineWidth: 2
	  };
	}
	
	Link.prototype = new Element();
	
	Link.prototype.draw = function(ctx) {
	  ctx.save();
	  ctx.beginPath();
	  ctx.strokeStyle = 'rgba(' + this.style.strokeStyle + ',' + this.style.alpha + ')';
	  ctx.lineWidth = this.style.lineWidth;
	  ctx.moveTo(this.nodeA.x + this.nodeA.width / 2, this.nodeA.y + this.nodeA.height / 2);
	  ctx.lineTo(this.nodeB.x + this.nodeB.width / 2, this.nodeB.y + this.nodeB.height / 2);
	  ctx.stroke();
	  ctx.closePath();
	  ctx.restore();
	};
	
	Link.prototype.getLength = function() {
	  return Util.getDistance(this.nodeA, this.nodeB);
	};
	
	function FoldLink(nodeA, nodeB) {
	  let link = new Link(nodeA, nodeB);
	  link.fold = 'x';
	  link.draw = function(ctx) {
	    let x1 = this.nodeA.x;
	    let y1 = this.nodeA.y;
	    let x2 = this.nodeB.x;
	    let y2 = this.nodeB.y;
	    let mx = x1;
	    let my = y1;
	
	    if (x1 == x2 || y1 == y2) {
	      ctx.save();
	      ctx.beginPath();
	      ctx.strokeStyle = 'rgba(' + this.style.strokeStyle + ',' + this.style.alpha + ')';
	      ctx.lineWidth = this.style.lineWidth;
	      ctx.moveTo(this.nodeA.x + this.nodeA.width / 2, this.nodeA.y + this.nodeA.height / 2);
	      ctx.lineTo(this.nodeB.x + this.nodeB.width / 2, this.nodeB.y + this.nodeB.height / 2);
	      ctx.closePath();
	      ctx.stroke();
	      ctx.restore();
	    } else {
	      if (this.fold == 'x') {
	        mx = x1 + (x2 - x1);
	      } else {
	        my = y1 + (y2 - y1);
	      }
	      ctx.save();
	      ctx.beginPath();
	      ctx.strokeStyle = 'rgba(' + this.style.strokeStyle + ',' + this.style.alpha + ')';
	      ctx.lineWidth = this.style.lineWidth;
	      ctx.moveTo(x1 + this.nodeA.width / 2, y1 + this.nodeA.height / 2);
	      ctx.lineTo(mx + this.nodeA.width / 2, my + this.nodeA.height / 2);
	      ctx.lineTo(x2 + this.nodeA.width / 2, y2 + this.nodeA.height / 2);
	      ctx.stroke();
	      ctx.closePath();
	      ctx.restore();
	    }
	  };
	
	  return link;
	}
	
	
	function CurveLink(nodeA, nodeB) {
	  let link = new Link(nodeA, nodeB);
	  link.curve = 0.5;
	  link.draw = function(ctx) {
	    let x1 = this.nodeA.x;
	    let y1 = this.nodeA.y;
	    let x2 = this.nodeB.x;
	    let y2 = this.nodeB.y;
	    let mx = x1;
	    let my = y1;
	
	    mx = x1 + (x2 - x1);
	    my = y1 + (y2 - y1);
	
	    mx *= this.curve;
	    my *= this.curve;
	
	    ctx.save();
	    ctx.beginPath();
	    ctx.strokeStyle = 'rgba(' + this.style.strokeStyle + ',' + this.style.alpha + ')';
	    ctx.lineWidth = this.style.lineWidth;
	    ctx.moveTo(x1 + this.nodeA.width / 2, y1 + this.nodeA.height / 2);
	    ctx.quadraticCurveTo(mx + this.nodeA.width / 2, my + this.nodeA.height / 2,
	      x2 + this.nodeA.width / 2, y2 + this.nodeA.height / 2);
	    ctx.stroke();
	    ctx.closePath();
	    ctx.restore();
	  };
	  return link;
	}
	
	function ArrowsLink(nodeA, nodeB) {
	  let link = new Link(nodeA, nodeB);
	  link.angle = 0.4;
	  link.offset = 30;
	  //link.style.fillStyle = '116, 166, 250';
	  link.draw = function(ctx) {
	    ctx.save();
	    ctx.beginPath();
	    ctx.strokeStyle = 'rgba(' + this.style.strokeStyle + ',' + this.style.alpha + ')';
	    ctx.fillStyle = 'rgba(' + this.style.fillStyle + ',' + this.style.alpha + ')';
	    ctx.lineWidth = this.style.lineWidth;
	
	    let ta = {
	      x: this.nodeA.x + this.nodeA.width / 2,
	      y: this.nodeA.y + this.nodeA.height / 2
	    };
	    let t = {
	      x: this.nodeB.x + this.nodeB.width / 2,
	      y: this.nodeB.y + this.nodeB.height / 2
	    };
	
	    let angle = Math.atan2(ta.y - t.y, ta.x - t.x);
	    t.x = t.x + Math.cos(angle) * this.nodeB.width / 2;
	    t.y = t.y + Math.sin(angle) * this.nodeB.height / 2;
	
	    let da = 0.4;
	    let pointA = {
	      x: t.x + Math.cos(angle - da) * this.offset,
	      y: t.y + Math.sin(angle - da) * this.offset
	    };
	
	    let pointB = {
	      x: t.x + Math.cos(angle + da) * this.offset,
	      y: t.y + Math.sin(angle + da) * this.offset
	    };
	
	    ctx.moveTo(this.nodeA.x + this.nodeA.width / 2, this.nodeA.y + this.nodeA.height / 2);
	    //ctx.lineTo(this.nodeB.x + this.nodeB.width / 2, this.nodeB.y + this.nodeB.height / 2);
	    ctx.lineTo(pointA.x + (pointB.x - pointA.x) / 2, pointA.y + (pointB.y - pointA.y) / 2);
	
	    ctx.moveTo(pointA.x, pointA.y);
	    ctx.lineTo(t.x, t.y);
	    ctx.lineTo(pointB.x, pointB.y);
	    ctx.lineTo(pointA.x, pointA.y);
	    if (this.style.fillStyle && this.style.fillStyle != null) {
	      ctx.fill();
	    }
	    ctx.stroke();
	    ctx.closePath();
	    ctx.restore();
	  };
	  return link;
	}
	
	function ArrowsFoldLink(nodeA, nodeB) {
	  let link = new Link(nodeA, nodeB);
	  link.fold = 'x';
	  link.angle = 0.4;
	  link.offset = 30;
	
	  link.draw = function(ctx) {
	    let x1 = this.nodeA.x;
	    let y1 = this.nodeA.y;
	    let x2 = this.nodeB.x;
	    let y2 = this.nodeB.y;
	    let mx = x1;
	    let my = y1;
	    let ta,t,angle,da,pointA,pointB;
	
	    if (x1 == x2 || y1 == y2) {
	      ctx.save();
	      ctx.beginPath();
	      ctx.strokeStyle = 'rgba(' + this.style.strokeStyle + ',' + this.style.alpha + ')';
	      ctx.lineWidth = this.style.lineWidth;
	
	      ta = {
	        x: this.nodeA.x + this.nodeA.width / 2,
	        y: this.nodeA.y + this.nodeA.height / 2
	      };
	      t = {
	        x: this.nodeB.x + this.nodeB.width / 2,
	        y: this.nodeB.y + this.nodeB.height / 2
	      };
	
	      angle = Math.atan2(ta.y - t.y, ta.x - t.x);
	      t.x = t.x + Math.cos(angle) * this.nodeB.width / 2;
	      t.y = t.y + Math.sin(angle) * this.nodeB.height / 2;
	
	      da = 0.4;
	      pointA = {
	        x: t.x + Math.cos(angle - da) * this.offset,
	        y: t.y + Math.sin(angle - da) * this.offset
	      };
	
	      pointB = {
	        x: t.x + Math.cos(angle + da) * this.offset,
	        y: t.y + Math.sin(angle + da) * this.offset
	      };
	
	      ctx.lineTo(pointA.x + (pointB.x - pointA.x) / 2, pointA.y + (pointB.y - pointA.y) / 2);
	
	      ctx.moveTo(pointA.x, pointA.y);
	      ctx.lineTo(t.x, t.y);
	      ctx.lineTo(pointB.x, pointB.y);
	      ctx.lineTo(pointA.x, pointA.y);
	      if (this.style.fillStyle && this.style.fillStyle != null) {
	        ctx.fill();
	      }
	      ctx.closePath();
	      ctx.stroke();
	      ctx.restore();
	    } else {
	      if (this.fold == 'x') {
	        mx = x1 + (x2 - x1);
	      } else {
	        my = y1 + (y2 - y1);
	      }
	      ctx.save();
	      ctx.beginPath();
	      ctx.strokeStyle = 'rgba(' + this.style.strokeStyle + ',' + this.style.alpha + ')';
	      ctx.lineWidth = this.style.lineWidth;
	      ctx.moveTo(x1 + this.nodeA.width / 2, y1 + this.nodeA.height / 2);
	      ctx.lineTo(mx + this.nodeA.width / 2, my + this.nodeA.height / 2);
	
	      ta = {
	        x: mx + this.nodeA.width / 2,
	        y: my + this.nodeA.height / 2
	      };
	      t = {
	        x: this.nodeB.x + this.nodeB.width / 2,
	        y: this.nodeB.y + this.nodeB.height / 2
	      };
	
	      angle = Math.atan2(ta.y - t.y, ta.x - t.x);
	      t.x = t.x + Math.cos(angle) * this.nodeB.width / 2;
	      t.y = t.y + Math.sin(angle) * this.nodeB.height / 2;
	
	      da = 0.4;
	      pointA = {
	        x: t.x + Math.cos(angle - da) * this.offset,
	        y: t.y + Math.sin(angle - da) * this.offset
	      };
	
	      pointB = {
	        x: t.x + Math.cos(angle + da) * this.offset,
	        y: t.y + Math.sin(angle + da) * this.offset
	      };
	
	      ctx.lineTo(pointA.x + (pointB.x - pointA.x) / 2, pointA.y + (pointB.y - pointA.y) / 2);
	
	      ctx.moveTo(pointA.x, pointA.y);
	      ctx.lineTo(t.x, t.y);
	      ctx.lineTo(pointB.x, pointB.y);
	      ctx.lineTo(pointA.x, pointA.y);
	
	      if (this.style.fillStyle && this.style.fillStyle != null) {
	        ctx.fill();
	      }
	      ctx.stroke();
	      ctx.closePath();
	      ctx.restore();
	    }
	  };
	
	  return link;
	}
	
	module.exports = {
	  Link: Link,
	  FoldLink: FoldLink,
	  CurveLink: CurveLink,
	  ArrowsLink: ArrowsLink,
	  ArrowsFoldLink: ArrowsFoldLink
	};


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Node
	 * @author ilex
	 */
	
	const AbstractNode = __webpack_require__(3);
	
	/**
	 *
	 * Node
	 *
	 * @param {any} name
	 */
	function Node(name) {
	  this.eleType = 'Node';
	  this.name = name;
	  this.width = 35;
	  this.height = 35;
	  this.x = 0;
	  this.y = 0;
	  this.style = {
	    fillStyle: '71, 167, 184',
	    fontSize: '10pt',
	    font: 'Consolas'
	  };
	  this.type = null;
	  this.selected = false;
	
	  this.alpha = 1;
	  this.scala = 1;
	  this.rotate = 0;
	}
	
	Node.prototype = new AbstractNode();
	
	Node.prototype.drawText = function(ctx) {
	  let name = this.getName();
	  if (!name || name == '') {
	    return;
	  }
	  let textWidth = ctx.measureText(name).width;
	  ctx.font = this.style.fontSize + ' ' + this.style.font;
	  ctx.strokeStyle = 'rgba(230, 230, 230, ' + this.alpha + ')';
	  ctx.strokeText(name, -this.width / 2 + (this.width - textWidth) / 2, this.height / 2 + 12);
	};
	
	Node.prototype.drawTip = function(ctx) {
	  let tip = this.getTip();
	  if (!tip || tip == '') {
	    return;
	  }
	
	  let textWidth = ctx.measureText(tip).width;
	  ctx.save();
	  ctx.beginPath();
	  ctx.font = this.style.fontSize + ' ' + this.style.font;
	  ctx.strokeStyle = 'rgba(230, 230, 230, ' + this.alpha + ')';
	  if (textWidth > this.width) {
	    ctx.strokeText(tip, -this.wdith - 2, -this.y - 2);
	  } else {
	    ctx.strokeText(tip, -this.width() + this.getWidth() - textWidth - 2, this.getY() - 2);
	  }
	  ctx.stroke();
	  ctx.closePath();
	  ctx.restore();
	};
	
	Node.prototype.drawSelectedRect = function(ctx) {
	  let textWidth = ctx.measureText(this.getName()).width;
	  let w = Math.max(this.width, textWidth);
	  ctx.save();
	  ctx.beginPath();
	  ctx.strokeStyle = 'rgba(168,202,255, 0.9)';
	  ctx.fillStyle = 'rgba(168,202,236,0.5)';
	  ctx.rect(-w / 2 - 3, -this.height / 2 - 2, w + 6, this.height + 16);
	  ctx.fill();
	  ctx.stroke();
	  ctx.closePath();
	  ctx.restore();
	};
	
	Node.prototype.draw = function(ctx) {
	  if (!this.isVisible()) {
	    return;
	  }
	  let node = this;
	  ctx.save();
	  ctx.translate(this.x + this.width / 2, this.y + this.height / 2);
	  ctx.rotate(this.rotate);
	  ctx.scale(this.scala, this.scala);
	
	  if (node.isSelected() || node.isFocus()) {
	    this.drawSelectedRect(ctx);
	  }
	
	  let image = this.getImage();
	  if (image != undefined && image != null) {
	    //ctx.rect(-this.width/2, -this.height/2, this.width, this.height);
	    //ctx.clip();
	    ctx.drawImage(image, -this.width / 2, -this.height / 2);
	  } else {
	    ctx.beginPath();
	    ctx.fillStyle = 'rgba(' + this.style.fillStyle + ',' + this.alpha + ')';
	    ctx.rect(-this.width / 2, -this.height / 2, this.width, this.height);
	    ctx.fill();
	    ctx.closePath();
	  }
	  this.drawText(ctx);
	  if (this.isTipVisible) {
	    this.drawTip(ctx);
	  }
	  ctx.restore();
	};
	
	Node.prototype.split = function(angle) {
	  let node = this;
	
	  function genNode(x, y, r, beginDegree, endDegree) {
	    let newNode = new Node();
	    newNode.setImage(node.image);
	    newNode.setLocation(x, y);
	    newNode.draw = function(ctx) {
	      ctx.save();
	      ctx.arc(this.x + this.width / 2, this.y + this.height / 2, r, beginDegree, endDegree);
	      ctx.clip();
	      ctx.beginPath();
	      if (this.image != undefined && this.image != null) {
	        ctx.drawImage(this.image, this.x, this.y);
	      } else {
	        ctx.fillStyle = 'rgba(' + this.style.fillStyle + ',' + this.alpha + ')';
	        ctx.rect(this.x, this.y, this.width, this.height);
	        ctx.fill();
	      }
	      ctx.closePath();
	      ctx.restore();
	    };
	    return newNode;
	  }
	  let beginDegree = angle;
	  let endDegree = angle + Math.PI;
	
	  let nodeA = genNode(node.x, node.y, node.width, beginDegree, endDegree);
	  let nodeB = genNode(node.x, node.y, node.width, beginDegree + Math.PI, beginDegree);
	
	  return {
	    nodeA: nodeA,
	    nodeB: nodeB
	  };
	};
	
	function CircleNode(name) {
	  let node = new Node(name);
	  node.r = 30;
	  node.beginDegree = 0;
	  node.endDegree = 2 * Math.PI;
	  node.draw = function(ctx) {
	    if (this.visible) {
	      return;
	    }
	    let w = node.r * 2 * this.scala;
	    let h = node.r * 2 * this.scala;
	    this.setWidth(w);
	    this.setHeight(h);
	    ctx.save();
	    ctx.beginPath();
	    ctx.fillStyle = 'rgba(' + this.style.fillStyle + ',' + this.alpha + ')';
	    ctx.arc(node.x + w / 2, node.y + h / 2, w / 2, this.beginDegree, this.endDegree, true);
	    ctx.fill();
	    ctx.closePath();
	    ctx.restore();
	  };
	  return node;
	}
	
	function HeartNode() {
	  let node = new Node();
	  node.setSize(120, 120);
	  node.draw = function(ctx) {
	    if (!this.visible) {
	      return;
	    }
	    ctx.save();
	    ctx.beginPath();
	    ctx.fillStyle = 'rgba(' + this.style.fillStyle + ',' + this.alpha + ')';
	    ctx.moveTo(this.x + 75, this.y + 40);
	    ctx.bezierCurveTo(this.x + 75, this.y + 37, this.x + 70, this.y + 25, this.x + 50, this.y + 25);
	    ctx.bezierCurveTo(this.x + 20, this.y + 25, this.x + 20, this.y + 62.5, this.x + 20, this.y + 62.5);
	    ctx.bezierCurveTo(this.x + 20, this.y + 80, this.x + 40, this.y + 102, this.x + 75, this.y + 120);
	    ctx.bezierCurveTo(this.x + 110, this.y + 102, this.x + 130, this.y + 80, this.x + 130, this.y + 62.5);
	    ctx.bezierCurveTo(this.x + 130, this.y + 62.5, this.x + 130, this.y + 25, this.x + 100, this.y + 25);
	    ctx.bezierCurveTo(this.x + 85, this.y + 25, this.x + 75, this.y + 37, this.x + 75, this.y + 40);
	    ctx.fill();
	    ctx.closePath();
	    ctx.restore();
	  };
	  return node;
	}
	
	function TipNode(name) {
	  let node = new Node(name);
	  node.setSize(100, 100);
	  node.draw = function(ctx) {
	    if (!this.visible) {
	      return;
	    }
	    let x = this.x;
	    let y = this.y;
	    ctx.save();
	    ctx.beginPath();
	    ctx.strokeStyle = 'rgba(230, 230, 230, 0.8)';
	    ctx.moveTo(x + 50, y);
	    ctx.quadraticCurveTo(x, y, x, y + 37.5);
	    ctx.quadraticCurveTo(x, y + 75, x + 25, y + 75);
	    ctx.quadraticCurveTo(x + 25, y + 95, x + 5, y + 100);
	    ctx.quadraticCurveTo(x + 35, y + 95, x + 45, y + 75);
	    ctx.quadraticCurveTo(x + 100, y + 75, x + 100, y + 37.5);
	    ctx.quadraticCurveTo(x + 100, y, x + 50, y);
	
	    ctx.strokeText(node.name, node.x + 20, node.y + 20);
	    ctx.stroke();
	    ctx.closePath();
	    ctx.restore();
	  };
	  return node;
	}
	
	function TextNode(name) {
	  let node = new Node(name);
	  node.setHeight(14);
	  node.style = {
	    strokeStyle: 'rgba(255,255,255, 0.99)',
	    fillStyle: 'rgba(255,255,255, 0.5)'
	  };
	  node.draw = function(ctx) {
	    ctx.save();
	    ctx.beginPath();
	    ctx.font = this.style.fontSize + ' ' + this.style.font;
	    let textWidth = ctx.measureText(this.name).width;
	    ctx.closePath();
	    ctx.restore();
	
	    node.width = textWidth;
	    if (!this.visible) {
	      return;
	    }
	
	    if (node.selected) {
	      let startx = this.x - (textWidth > this.width ? (textWidth - this.width) / 2 : 0);
	      let width = Math.max(this.width, textWidth);
	      ctx.save();
	      ctx.beginPath();
	      ctx.rect(startx - 3, this.y - 1, width + 6, this.height + 20);
	      ctx.fill();
	      ctx.stroke();
	      ctx.closePath();
	      ctx.restore();
	    }
	    ctx.save();
	    ctx.beginPath();
	    ctx.font = this.style.fontSize + ' ' + this.style.font;
	    ctx.strokeStyle = this.style.strokeStyle;
	    ctx.fillStyle = this.style.fillStyle;
	    ctx.strokeText(node.name, node.x, node.y + 12);
	    ctx.stroke();
	    ctx.fill();
	    ctx.closePath();
	    ctx.restore();
	  };
	  return node;
	}
	
	function GhomboidNode() {
	  let node = new Node();
	  node.offset = 10;
	  node.draw = function(ctx) {
	    ctx.save();
	    ctx.beginPath();
	    ctx.shadowBlur = 9;
	    ctx.shadowColor = 'rgba(0,0,0,0.9)';
	    ctx.shadowOffsetX = 6;
	    ctx.shadowOffsetY = 6;
	    ctx.fillStyle = 'rgba(' + this.style.fillStyle + ',' + this.alpha + ')';
	    ctx.moveTo(this.x + this.offset, this.y);
	    ctx.lineTo(this.x + this.offset + this.width, this.y);
	    ctx.lineTo(this.x + this.width, this.y + this.height);
	    ctx.lineTo(this.x, this.y + this.height);
	    ctx.lineTo(this.x + this.offset, this.y);
	    ctx.fill();
	    ctx.closePath();
	    ctx.restore();
	  };
	  return node;
	}
	
	function UMLClassNode(name) {
	  let node = new Node();
	  node.style.fillStyle = '71, 167, 184';
	  node.className = name;
	  node.rowHeight = 18;
	  node.width = 168;
	  node.classObj = null;
	
	  node.draw = function(ctx) {
	    if (!this.visible) {
	      return;
	    }
	    if (this.classObj && this.classObj != null) {
	      node.operations = [];
	      node.attributes = [];
	      for (let k in this.classObj) {
	        let v = this.classObj[k];
	        if (typeof v == 'function') {
	          this.operations.push('+ ' + k);
	        } else {
	          this.attributes.push('- ' + k);
	        }
	      }
	    }
	
	    if (node.operations == null || node.operations.length == 0) {
	      node.operations = [' '];
	    }
	    if (node.attributes == null || node.attributes.length == 0) {
	      node.attributes = [' '];
	    }
	    node.height = (node.operations.length + node.attributes.length + 1) * node.rowHeight + 3;
	    ctx.save();
	    ctx.beginPath();
	    ctx.fillStyle = 'rgba(239,247,149,' + this.alpha + ')';
	    ctx.rect(this.x, this.y, this.width, this.getHeight());
	    ctx.shadowBlur = 0;
	    ctx.shadowOffsetX = 0;
	    ctx.shadowOffsetY = 0;
	    ctx.fill();
	    ctx.font = this.style.fontSize + ' ' + this.style.font;
	
	    ctx.moveTo(this.x, this.y + node.rowHeight + 3);
	    ctx.lineTo(this.x + this.width, this.y + node.rowHeight + 3);
	
	    let textWidth = ctx.measureText(node.className).width;
	    ctx.strokeText(node.className, this.getX() + (this.getWidth() - textWidth) / 2, this.getY() + node.rowHeight);
	
	    for (let i = 0; i < this.operations.length; i++) {
	      let operation = this.operations[i];
	      ctx.strokeText(operation, this.getX() + 5, this.getY() + node.rowHeight + node.rowHeight * (i + 1));
	    }
	
	    ctx.moveTo(this.x, this.y + node.rowHeight * (this.operations.length + 1) + 3);
	    ctx.lineTo(this.x + this.width, this.y + node.rowHeight * (this.operations.length + 1) + 3);
	
	    let begingHeight = this.y + node.rowHeight * (this.operations.length + 1);
	    for (let j = 0; j < this.attributes.length; j++) {
	      let attribute = this.attributes[j];
	      ctx.strokeText(attribute, this.getX() + 5, begingHeight + this.rowHeight * (j + 1));
	    }
	    ctx.stroke();
	    ctx.closePath();
	    ctx.restore();
	  };
	  return node;
	}
	
	
	function EndPointNode(name) {
	  let node = new Node(name);
	  let bak = node.draw;
	  node.draw = function(ctx) {
	    if (!this.visible) {
	      return;
	    }
	    let points = [];
	
	    let rx = node.width / 3;
	    let ry = node.height / 3;
	
	    function createPoint(x, y) {
	      let point = new Node();
	      point.setSize(rx, ry);
	      point.style.fillStyle = '0,255,0';
	      point.setDragable(false);
	      point.setLocation(x, y);
	      return point;
	    }
	
	    points.push(createPoint(this.x - rx / 2, this.y + this.height / 2 - ry / 2));
	    points.push(createPoint(this.x + this.width / 2 - rx / 2, this.y - ry / 2));
	
	    points.push(createPoint(this.x + this.width - rx / 2, this.y + this.height / 2 - ry / 2));
	    points.push(createPoint(this.x + this.width / 2 - rx / 2, this.y + this.height - ry / 2));
	    if (this.isSelected()) {
	      for (let i = 0; i < points.length; i++) {
	        points[i].draw(ctx);
	      }
	    }
	    bak.call(this, ctx);
	  };
	  return node;
	}
	
	module.exports = {
	  Node: Node,
	  CircleNode: CircleNode,
	  GhomboidNode: GhomboidNode,
	  TipNode: TipNode,
	  TextNode: TextNode,
	  HeartNode: HeartNode,
	  UMLClassNode: UMLClassNode,
	  EndPointNode: EndPointNode
	};


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	const AptTopo = __webpack_require__(10);
	module.exports = AptTopo;


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * animation of topo for personal project
	 * @author ilex
	 */
	
	const Node = __webpack_require__(7);
	const Util = __webpack_require__(2);
	
	let isStopAll = false;
	//gravity
	function gravity(node, option) {
	  let box = option.context;
	  let gravity = option.gravity || 0.1;
	
	  let t = null;
	  let effect = {};
	
	  function stop() {
	    window.clearInterval(t);
	    if (effect.onStop) {
	      effect.onStop(node);
	    }
	    return effect;
	  }
	
	  function run() {
	    let dx = option.dx || 0,
	      dy = option.dy || 2;
	    t = setInterval(function() {
	      if (isStopAll) {
	        effect.stop();
	        return;
	      }
	      dy += gravity;
	      if (node.y + node.height < box.canvas.height) {
	        node.setLocation(node.x + dx, node.y + dy);
	        box.updateView();
	      } else {
	        dy = 0;
	        stop();
	      }
	    }, 20);
	    return effect;
	  }
	
	  effect.run = run;
	  effect.stop = stop;
	  effect.onStop = function(f) {
	    effect.onStop = f;
	    return effect;
	  };
	  return effect;
	}
	
	//
	function rotate(node, option) {
	  let box = option.context;
	  let t = null;
	  let effect = {};
	  let v = option.v;
	
	  function run() {
	    t = setInterval(function() {
	      if (isStopAll) {
	        effect.stop();
	        return;
	      }
	      node.rotate += v || 0.2;
	      if (node.rotate > 2 * Math.PI) {
	        node.rotate = 0;
	      }
	      box.updateView();
	    }, 100);
	    return effect;
	  }
	
	  function stop() {
	    window.clearInterval(t);
	    if (effect.onStop) {
	      effect.onStop(node);
	    }
	    return effect;
	  }
	
	  effect.run = run;
	  effect.stop = stop;
	  effect.onStop = function(f) {
	    effect.onStop = f;
	    return effect;
	  };
	  return effect;
	}
	
	//
	function dividedTwoPiece(node, option) {
	  let box = option.context;
	  // let style = node.style;
	  let effect = {};
	
	  function genNode(x, y, r, beginDegree, endDegree) {
	    let newNode = new Node();
	    newNode.setImage(node.image);
	    newNode.setSize(node.width, node.height);
	    newNode.setLocation(x, y);
	    newNode.draw = function(ctx) {
	      ctx.save();
	      ctx.arc(this.x + this.width / 2, this.y + this.height / 2, r, beginDegree, endDegree);
	      ctx.clip();
	      ctx.beginPath();
	      if (this.image != undefined && this.image != null) {
	        ctx.drawImage(this.image, this.x, this.y);
	      } else {
	        ctx.fillStyle = 'rgba(' + this.style.fillStyle + ',' + this.alpha + ')';
	        ctx.rect(this.x, this.y, this.width, this.height);
	        ctx.fill();
	      }
	      ctx.closePath();
	      ctx.restore();
	    };
	    return newNode;
	  }
	
	  function split(angle, box) {
	    let beginDegree = angle;
	    let endDegree = angle + Math.PI;
	
	    let node1 = genNode(node.x, node.y, node.width, beginDegree, endDegree);
	    let node2 = genNode(node.x - 2 + Math.random() * 4, node.y, node.width, beginDegree + Math.PI, beginDegree);
	
	    node.setVisible(false);
	
	    box.add(node1);
	    box.add(node2);
	    box.updateView();
	
	    gravity(node1, {
	      context: box,
	      dx: 0.3
	    }).run().onStop(function(n) {
	      box.remove(node1);
	      box.remove(node2);
	      box.updateView();
	      effect.stop();
	    });
	    gravity(node2, {
	      context: box,
	      dx: -0.2
	    }).run();
	  }
	
	  function run() {
	    split(option.angle, box);
	    return effect;
	  }
	
	  function stop() {
	    if (effect.onStop) {
	      effect.onStop(node);
	    }
	    return effect;
	  }
	
	  effect.onStop = function(f) {
	    effect.onStop = f;
	    return effect;
	  };
	  effect.run = run;
	  effect.stop = stop;
	  return effect;
	}
	
	function repeatThrow(node, option) {
	  let gravity = 0.8;
	  // let wind = 2;
	  // let angle = 0;
	  let box = option.context;
	  node.isSelected = function() {
	    return false;
	  };
	  node.isFocus = function() {
	    return false;
	  };
	  node.setDragable(false);
	
	  function initNode(node) {
	    node.setVisible(true);
	    node.rotate = Math.random();
	    let w = box.canvas.width / 2;
	    node.x = w + Math.random() * (w - 100) - Math.random() * (w - 100);
	    node.y = box.canvas.height;
	    node.vx = Math.random() * 5 - Math.random() * 5;
	    node.vy = -25;
	  }
	
	  let t = null;
	  let effect = {};
	
	  function run() {
	    initNode(node);
	    t = setInterval(function() {
	      if (isStopAll) {
	        effect.stop();
	        return;
	      }
	      node.vy += gravity;
	      node.x += node.vx;
	      node.y += node.vy;
	      if (node.x < 0 || node.x > box.canvas.width || node.y > box.canvas.height) {
	        if (effect.onStop) {
	          effect.onStop(node);
	        }
	        initNode(node);
	      }
	      box.updateView();
	    }, 50);
	    return effect;
	  }
	
	  function stop() {
	    window.clearInterval(t);
	  }
	
	  effect.onStop = function(f) {
	    effect.onStop = f;
	    return effect;
	  };
	  effect.run = run;
	  effect.stop = stop;
	  return effect;
	}
	
	function stopAll() {
	  isStopAll = true;
	}
	
	function startAll() {
	  isStopAll = false;
	}
	
	
	//cycle
	function cycle(node, option) {
	  let p1 = option.p1;
	  let p2 = option.p2;
	  let box = option.context;
	
	  let midX = p1.x + (p2.x - p1.x) / 2;
	  let midY = p1.y + (p2.y - p1.y) / 2;
	  let r = Util.getDistance(p1, p2) / 2;
	
	  let angle = Math.atan2(midY, midX);
	  let speed = option.speed || 0.2;
	  let effect = {};
	  let t = null;
	
	  function run() {
	    t = setInterval(function() {
	      if (isStopAll) {
	        effect.stop();
	        return;
	      }
	      //let newx = p1.x + midX + Math.cos(angle) * r;
	      let newy = p1.y + midX + Math.sin(angle) * r;
	      node.setLocation(node.x, newy);
	      box.updateView();
	      angle += speed;
	    }, 100);
	    return effect;
	  }
	
	  function stop() {
	    window.clearInterval(t);
	  }
	
	  effect.run = run;
	  effect.stop = stop;
	  return effect;
	}
	
	//move
	function move(node, option) {
	  let p = option.position;
	  let box = option.context;
	  let easing = option.easing || 0.2;
	
	  let effect = {};
	  let t = null;
	
	  function run() {
	    t = setInterval(function() {
	      if (isStopAll) {
	        effect.stop();
	        return;
	      }
	      let dx = p.x - node.x;
	      let dy = p.y - node.y;
	      let vx = dx * easing;
	      let vy = dy * easing;
	
	      node.x += vx;
	      node.y += vy;
	      box.updateView();
	      if (vx < 0.01 && vy < 0.1) {
	        stop();
	      }
	    }, 100);
	    return effect;
	  }
	
	  function stop() {
	    window.clearInterval(t);
	  }
	  effect.onStop = function(f) {
	    effect.onStop = f;
	    return effect;
	  };
	  effect.run = run;
	  effect.stop = stop;
	  return effect;
	}
	
	//scala
	function scala(node, option) {
	  // let p = option.position;
	  let box = option.context;
	  let scala = option.scala || 1;
	  let v = 0.06;
	  let oldScala = node.scala;
	
	  let effect = {};
	  let t = null;
	
	  function run() {
	    t = setInterval(function() {
	      node.scala += v;
	
	      if (node.scala >= scala) {
	        stop();
	      }
	      box.updateView();
	    }, 100);
	    return effect;
	  }
	
	  function stop() {
	    if (effect.onStop) {
	      effect.onStop(node);
	    }
	    node.scala = oldScala;
	    window.clearInterval(t);
	  }
	  effect.onStop = function(f) {
	    effect.onStop = f;
	    return effect;
	  };
	  effect.run = run;
	  effect.stop = stop;
	  return effect;
	}
	
	module.exports = {
	  gravity: gravity,
	  dividedTwoPiece: dividedTwoPiece,
	  repeatThrow: repeatThrow,
	  rotate: rotate,
	  cycle: cycle,
	  move: move,
	  scala: scala,
	  stopAll: stopAll,
	  startAll: startAll
	};


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * aptTopo
	 * @author ilex
	 */
	
	let element = __webpack_require__(1);
	let abstractNode = __webpack_require__(3);
	let animation = __webpack_require__(9);
	let container = __webpack_require__(4);
	let databox = __webpack_require__(11);
	let layout = __webpack_require__(5);
	let link = __webpack_require__(6);
	let node = __webpack_require__(7);
	let _util = __webpack_require__(2);
	
	module.exports = {
	  AbstractNode: abstractNode,
	  Animation: animation,
	  Container: container.Container,
	  GridContainer: container.GridContainer,
	  OneItemContainer: container.OneItemContainer,
	  GhomboidContainer: container.GhomboidContainer,
	  DataBox: databox,
	  Element: element,
	  Layout: layout,
	  Link: link.Link,
	  FoldLink: link.FoldLink,
	  CurveLink: link.CurveLink,
	  ArrowsLink: link.ArrowsLink,
	  ArrowsFoldLink: link.ArrowsFoldLink,
	  Node: node.Node,
	  CircleNode: node.CircleNode,
	  GhomboidNode: node.GhomboidNode,
	  TipNode: node.TipNode,
	  TextNode: node.TextNode,
	  HeartNode: node.HeartNode,
	  UMLClassNode: node.UMLClassNode,
	  EndPointNode: node.EndPointNode,
	  Util: _util
	};


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * DataBox of topo for personal project
	 *
	 * @param {any} name
	 * @returns
	 * @author ilex
	 */
	
	const Util = __webpack_require__(2);
	const Container = __webpack_require__(4);
	const Link = __webpack_require__(6);
	const Layout = __webpack_require__(5);
	const offset = __webpack_require__(12);
	
	function DataBox(name, canvas) {
	  this.name = name;
	  this.canvas = canvas;
	  this.ctx = this.canvas.getContext('2d');
	  this.width = this.canvas.width;
	  this.height = this.canvas.height;
	  this.messageBus = new Util.MessageBus();
	  this.image = new Image();
	  this.image.src = './assets/img/bg/topo-bg4.png';
	  this.init();
	}
	
	DataBox.prototype.init = function() {
	  this.ctx.shadowBlur = 5;
	  this.ctx.shadowColor = 'rgba(0,0,0,0.5)';
	  this.ctx.shadowOffsetX = 3;
	  this.ctx.shadowOffsetY = 6;
	
	  this.startDragMouseX = 0;
	  this.startDragMouseY = 0;
	  this.offset = offset(this.canvas);
	  this.isRangeSelectable = true;
	
	  this.elements = [];
	  this.containers = [];
	  this.links = [];
	  this.nodes = [];
	  this.elementMap = {};
	  this.selectedElements = [];
	
	  let box = this;
	  this.canvas.onmousedown = function(event) {
	    box.isMousedown = true;
	    box.mousedown(event);
	  };
	  this.canvas.onmousemove = function(event) {
	    box.mousemove(event);
	  };
	  this.canvas.onmouseup = function(event) {
	    box.isMousedown = false;
	    box.mouseup(event);
	  };
	  try { // IE !!
	    window.addEventListener('keydown', function(e) {
	      box.keydown(e);
	    }, true);
	    window.addEventListener('keyup', function(e) {
	      box.keyup(e);
	    }, true);
	  } catch (e) {console.log(e);}
	
	  setTimeout(function() {
	    box.updateView();
	  }, 300);
	};
	
	DataBox.prototype.getElementByXY = function(x, y) {
	  let e = null;
	  for (let i = this.nodes.length - 1; i >= 0; i--) {
	    let node = this.nodes[i];
	    if (x > node.x && x < node.x + node.width && y > node.y && y < node.y + node.height) {
	      e = node;
	      break;
	    }
	  }
	  if (!e) {
	    for (let i = this.containers.length - 1; i >= 0; i--) {
	      let group = this.containers[i];
	      if (x > group.x && x < group.x + group.width && y > group.y && y < group.y + group.height) {
	        e = group;
	        break;
	      }
	    }
	  }
	  return e;
	};
	
	DataBox.prototype.getElementByName = function(name) {
	  for (let i = this.nodes.length - 1; i >= 0; i--) {
	    if (this.nodes[i].getName() == name) {
	      return this.nodes[i];
	    }
	  }
	  return null;
	};
	
	DataBox.prototype.findCloserNode = function(node, cond) {
	  let min = {
	    distance: Number.MAX_VALUE,
	    node: null
	  };
	  for (let i = this.nodes.length - 1; i >= 0; i--) {
	    let typeNode = this.nodes[i];
	    if (typeNode === node) {continue;}
	    if (cond(typeNode)) {
	      let dist = Util.getDistance(node, typeNode);
	      if (dist < min.distance) {
	        min.node = typeNode;
	        min.distance = dist;
	      }
	    }
	  }
	  return min.node;
	};
	
	DataBox.prototype.cancleAllSelected = function() {
	  for (let i = 0; i < this.selectedElements.length; i++) {
	    this.selectedElements[i].cancleSelected();
	  }
	  this.selectedElements = [];
	};
	
	DataBox.prototype.mousedown = function(event) {
	  let box = this;
	  let xy = Util.getXY(box, event);
	  let x = xy.x;
	  let y = xy.y;
	
	  let selectedNode = box.getElementByXY(x, y);
	  if (selectedNode != undefined && selectedNode != null) {
	    selectedNode.onMousedown({
	      x: x,
	      y: y,
	      context: box
	    });
	    box.currElement = selectedNode;
	  } else if (box.currElement) {
	    box.currElement.cancleSelected();
	    box.currElement = null;
	  }
	
	  box.startDragMouseX = x;
	  box.startDragMouseY = y;
	
	  if (box.currElement) {
	    if (box.selectedElements.indexOf(box.currElement) == -1) {
	      box.cancleAllSelected();
	      box.selectedElements.push(box.currElement);
	    }
	  } else {
	    box.cancleAllSelected();
	  }
	
	  for (let i = 0; i < box.selectedElements.length; i++) {
	    let node = box.selectedElements[i];
	    node.selectedLocation = {
	      x: node.x,
	      y: node.y
	    };
	  }
	
	  box.isOnMouseDown = true;
	  box.publish('mousedown', {
	    target: box.currElement,
	    x: x,
	    y: y,
	    context: box
	  });
	};
	
	DataBox.prototype.mousemove = function(event) {
	  let box = this;
	  let xy = Util.getXY(box, event);
	  let x = xy.x;
	  let y = xy.y;
	  let dx = (x - box.startDragMouseX);
	  let dy = (y - box.startDragMouseY);
	  box.publish('mousemove', {
	    target: box.currElement,
	    x: x,
	    y: y,
	    dx: dx,
	    dy: dy,
	    context: box
	  });
	
	  //if(box.currElement && !box.currElement.isDragable()) return;
	
	  box.updateView();
	  for (let i = this.nodes.length - 1; i >= 0; i--) {
	    let node = this.nodes[i];
	    if (node.x + node.width < 0 || node.x > box.canvas.width) {continue;}
	
	    if (x > node.x && x < node.x + node.width && y > node.y && y < node.y + node.height) {
	      node.onMouseover({
	        x: x,
	        y: y,
	        dx: dx,
	        dy: dy,
	        context: box
	      });
	      box.publish('mouseover', {
	        target: node,
	        x: x,
	        y: y,
	        dx: dx,
	        dy: dy,
	        context: box
	      });
	    } else {
	      if (node.isOnMousOver) {
	        node.onMouseout({
	          x: x,
	          y: y,
	          dx: dx,
	          dy: dy,
	          context: box
	        });
	        box.publish('mouseout', {
	          target: node,
	          x: x,
	          y: y,
	          dx: dx,
	          dy: dy,
	          context: box
	        });
	      }
	    }
	  }
	
	  if (box.currElement && box.isOnMouseDown && box.currElement.isDragable()) {
	    for (let j = 0; j < box.selectedElements.length; j++) {
	      let node1 = box.selectedElements[j];
	      node1.onMousedrag({
	        x: x,
	        y: y,
	        dx: dx,
	        dy: dy,
	        context: box
	      });
	    }
	    box.publish('mousedrag', {
	      target: box.currElement,
	      x: x,
	      y: y
	    });
	  } else if (box.isOnMouseDown && box.isRangeSelectable) {
	    let startx = x >= box.startDragMouseX ? box.startDragMouseX : x;
	    let starty = y >= box.startDragMouseY ? box.startDragMouseY : y;
	    let width = Math.abs(x - box.startDragMouseX);
	    let height = Math.abs(y - box.startDragMouseY);
	
	    box.ctx.beginPath();
	    box.ctx.fillStyle = 'rgba(168,202,236,0.5)';
	    box.ctx.fillRect(startx, starty, width, height);
	    box.ctx.closePath();
	
	    for (let k = 0; k < box.nodes.length; k++) {
	      let node2 = box.nodes[k];
	      if (node2.x + node2.width < 0 || node2.x > box.canvas.width) {continue;}
	
	      if (node2.x > startx && node2.x + node2.width < startx + width) {
	        if (node2.y > starty && node2.y + node2.height < starty + height) {
	          node2.onMouseselected({
	            x: x,
	            y: y,
	            dx: dx,
	            dy: dy,
	            context: box
	          });
	          box.selectedElements.push(node2);
	        }
	      } else {
	        node2.cancleSelected();
	      }
	    }
	  }
	};
	
	DataBox.prototype.mouseup = function(event) {
	  let box = this;
	  let xy = Util.getXY(this, event);
	  let x = xy.x;
	  let y = xy.y;
	  let dx = (x - box.startDragMouseX);
	  let dy = (y - box.startDragMouseY);
	
	  box.publish('mouseup', {
	    target: box.currElement,
	    x: x,
	    y: y,
	    dx: dx,
	    dy: dy,
	    context: box
	  });
	  box.startDragMouseX = null;
	
	  if (box.currElement) {
	    box.currElement.onMouseup({
	      x: x,
	      y: y,
	      context: box,
	      dx: dx,
	      dy: dy
	    });
	  }
	
	  box.updateView();
	  box.isOnMouseDown = false;
	};
	
	DataBox.prototype.keydown = function(e) {
	  let box = this;
	  let keyID = e.keyCode ? e.keyCode : e.which;
	  box.publish('keydown', keyID);
	  box.updateView();
	  // return;
	
	  if (keyID === 17) { // Ctrl
	  }
	  if (keyID === 18) { // Alt
	  }
	  if (keyID === 16) { // Shift
	  }
	  if (keyID === 27) { // Esc
	    this.cancleAllSelected();
	    this.currElement = null;
	  }
	  if (keyID === 38 || keyID === 87) { // up arrow and W
	    if (this.currElement) {
	      this.currElement.y -= 5;
	    }
	  }
	  if (keyID === 39 || keyID === 68) { // right arrow and D
	    if (this.currElement) {
	      this.currElement.x += 5;
	    }
	  }
	  if (keyID === 40 || keyID === 83) { // down arrow and S
	    if (this.currElement) {
	      this.currElement.y += 5;
	    }
	  }
	  if (keyID === 37 || keyID === 65) { // left arrow and A
	    if (this.currElement) {
	      this.currElement.x -= 5;
	    }
	  }
	  box.updateView();
	};
	
	DataBox.prototype.keyup = function(e) {
	  let box = this;
	  let keyID = e.keyCode ? e.keyCode : e.which;
	  box.publish('keyup', keyID);
	  box.updateView();
	};
	
	DataBox.prototype.subscribe = function(topic, action) {
	  this.messageBus.subscribe(topic, action);
	  return this;
	};
	
	DataBox.prototype.publish = function(topic, msg) {
	  this.messageBus.publish(topic, msg);
	  return this;
	};
	
	DataBox.prototype.removeElementById = function(id) {
	  for (let i = 0; i < this.elements.length; i++) {
	    if (this.elements[i].id == id) {
	      this.remove(i);
	      break;
	    }
	  }
	};
	
	DataBox.prototype.remove = function(e) {
	  this.elements = this.elements.del(e);
	  this.containers = this.containers.del(e);
	  this.links = this.links.del(e);
	  this.nodes = this.nodes.del(e);
	  this.elementMap[e.id] = e;
	};
	
	DataBox.prototype.addElement = function(e) {
	  return this.add(e);
	};
	
	DataBox.prototype.add = function(e) {
	  if (this.elementMap[e.id] != undefined && this.elementMap[e.id] != null) {
	    return;
	  }
	  if (!e.id) {e.id = Util.createUUID();}
	  if (!e.z){ e.z = this.elements.length;}
	  this.elements.push(e);
	  // if (e instanceof Container) {
	  //   this.containers.push(e);
	  // } else if (e instanceof Link) {
	  //   this.links.push(e);
	  // } else if (e instanceof Node) {
	  //   this.nodes.push(e);
	  // }
	  // let proptotype = Object.getPrototypeOf(e);
	  // if (proptotype === Container.constructor.prototype) {
	  //   this.containers.push(e);
	  // } else if (proptotype === Link.constructor.prototype) {
	  //   this.links.push(e);
	  // } else if (proptotype === Node.constructor.prototype) {
	  //   this.nodes.push(e);
	  // }
	  if (e.eleType === 'Container') {
	    this.containers.push(e);
	  } else if (e.eleType === 'Link') {
	    this.links.push(e);
	  } else if (e.eleType === 'Node') {
	    this.nodes.push(e);
	  }
	  this.elementMap[e.id] = e;
	};
	
	DataBox.prototype.clear = function() {
	  this.elements = [];
	  this.links = [];
	  this.nodes = [];
	  this.containers = [];
	  this.elementMap = {};
	};
	
	DataBox.prototype.getChilds = function(node) {
	  let result = [];
	  for (let i = 0; i < this.links.length; i++) {
	    if (this.links[i].nodeA === node) {
	      result.push(this.links[i].nodeB);
	    }
	  }
	  return result;
	};
	
	DataBox.prototype.getNodesBound = function(nodes) {
	  let bound = {
	    x: 10000000,
	    y: 1000000,
	    width: 0,
	    height: 0
	  };
	  if (nodes.length > 0) {
	    let minX = 10000000;
	    let maxX = -10000000;
	    let minY = 10000000;
	    let maxY = -10000000;
	    let width = maxX - minX;
	    let height = maxY - minY;
	    for (let i = 0; i < nodes.length; i++) {
	      let item = nodes[i];
	      if (item.x <= minX) {
	        minX = item.x;
	      }
	      if (item.x >= maxX) {
	        maxX = item.x;
	      }
	      if (item.y <= minY) {
	        minY = item.y;
	      }
	      if (item.y >= maxY) {
	        maxY = item.y;
	      }
	      width = maxX - minX + item.width;
	      height = maxY - minY + item.height;
	    }
	
	    bound.x = minX;
	    bound.y = minY;
	    bound.width = width;
	    bound.height = height;
	    return bound;
	  }
	  return null;
	};
	
	DataBox.prototype.isAllChildIsEndpoint = function(node) {
	  let childs = this.getChilds(node);
	  for (let i = 0; i < childs.length; i++) {
	    let grandsons = this.getChilds(childs[i]);
	    if (grandsons.length > 0) {return false;}
	  }
	  return true;
	};
	
	DataBox.prototype.getBoundRecursion = function(node) {
	  let childs = this.getChilds(node);
	  if (childs.length == 0) {return node.getBound();}
	  return this.getNodesBound(childs);
	};
	
	DataBox.prototype.layoutNode = function(node) {
	  let childs = this.getChilds(node);
	  if (childs.length == 0){ return node.getBound();}
	
	  this.adjustPosition(node);
	  if (this.isAllChildIsEndpoint(node)) {
	    return null;
	  }
	  for (let i = 0; i < childs.length; i++) {
	    this.layoutNode(childs[i]);
	  }
	  return null;
	};
	
	DataBox.prototype.adjustPosition = function(node) {
	  let childs = this.getChilds(node);
	  let layout = node.layout;
	  let type = layout.type;
	  let points = null;
	  if (type == 'star') {
	    points = Layout.getStarPositions(node.x, node.y, childs.length, node.layout.radius,
	      node.layout.beginDegree, node.layout.endDegree);
	  } else if (type == 'tree') {
	    points = Layout.getTreePositions(node.x, node.y, childs.length, layout.width,
	      layout.height, layout.direction);
	  }
	  for (let i = 0; i < childs.length; i++) {
	    childs[i].setLocation(points[i].x, points[i].y);
	  }
	};
	
	DataBox.prototype.getParents = function(node) {
	  let result = [];
	  for (let i = 0; i < this.links.length; i++) {
	    if (this.links[i].nodeB === node) {
	      result.push(this.links[i].nodeA);
	    }
	  }
	  return result;
	};
	
	DataBox.prototype.updateView = function() {
	  let box = this;
	  // let nodes = this.nodes;
	
	  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
	
	  if (this.image != undefined && this.image != null) {
	    this.ctx.drawImage(this.image, 0, 0);
	  }
	
	  for (let i = 0; i < this.links.length; i++) {
	    let link = this.links[i];
	    if (link.nodeA.x + link.nodeA.width < 0 || link.nodeA.x > box.canvas.width) {continue;}
	    if (link.nodeB.x + link.nodeA.width < 0 || link.nodeB.x > box.canvas.width) {continue;}
	
	    link.draw(this.ctx);
	  }
	
	  for (let j = 0; j < this.containers.length; j++) {
	    let c = this.containers[j];
	    if (c.x + c.width < 0 || c.x > box.canvas.width) {continue;}
	
	    this.containers[j].draw(this.ctx);
	  }
	
	  for (let k = 0; k < this.nodes.length; k++) {
	    if (this.nodes[k].x + this.nodes[k].width < 0 || this.nodes[k].x > box.canvas.width) {continue;}
	    this.nodes[k].draw(this.ctx);
	  }
	};
	
	module.exports = DataBox;


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Offset
	 * @author ilex
	 */
	
	const support = __webpack_require__(14);
	const getDocument = __webpack_require__(17);
	const withinElement = __webpack_require__(18);
	
	/**
	 * Get offset of a DOM Element or Range within the document.
	 *
	 * @param {DOMElement|Range} el - the DOM element or Range instance to measure
	 * @return {Object} An object with `top` and `left` Number values
	 * @public
	 * @author ilex
	 */
	module.exports = function offset(el) {
	  let doc = getDocument(el);
	  if (!doc) {return;}
	
	  // Make sure it's not a disconnected DOM node
	  if (!withinElement(el, doc)) {return;}
	
	  let body = doc.body;
	  if (body === el) {
	    return bodyOffset(el);
	  }
	
	  let box = {
	    top: 0,
	    left: 0
	  };
	  if (typeof el.getBoundingClientRect !== 'undefined') {
	    // If we don't have gBCR, just use 0,0 rather than error
	    // BlackBerry 5, iOS 3 (original iPhone)
	    box = el.getBoundingClientRect();
	
	    if (el.collapsed && box.left === 0 && box.top === 0) {
	      // collapsed Range instances sometimes report 0, 0
	      // see: http://stackoverflow.com/a/6847328/376773
	      let span = doc.createElement('span');
	
	      // Ensure span has dimensions and position by
	      // adding a zero-width space character
	      span.appendChild(doc.createTextNode('\u200b'));
	      el.insertNode(span);
	      box = span.getBoundingClientRect();
	
	      // Remove temp SPAN and glue any broken text nodes back together
	      let spanParent = span.parentNode;
	      spanParent.removeChild(span);
	      spanParent.normalize();
	    }
	  }
	
	  let docEl = doc.documentElement;
	  let clientTop = docEl.clientTop || body.clientTop || 0;
	  let clientLeft = docEl.clientLeft || body.clientLeft || 0;
	  let scrollTop = window.pageYOffset || docEl.scrollTop;
	  let scrollLeft = window.pageXOffset || docEl.scrollLeft;
	
	  return {
	    top: box.top + scrollTop - clientTop,
	    left: box.left + scrollLeft - clientLeft
	  };
	};
	
	function bodyOffset(body) {
	  let top = body.offsetTop;
	  let left = body.offsetLeft;
	
	  if (support.doesNotIncludeMarginInBodyOffset) {
	    top += parseFloat(body.style.marginTop || 0);
	    left += parseFloat(body.style.marginLeft || 0);
	  }
	
	  return {
	    top: top,
	    left: left
	  };
	}


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var JTopo = __webpack_require__(8);
	
	function demo() {
	  var box = new JTopo.DataBox('dataBox', document.getElementById('node'));
	
	  var defaultNode = new JTopo.Node('Node');
	  defaultNode.setLocation(200, 100);
	  defaultNode.rotate = Math.PI / 10;
	  box.add(defaultNode);
	
	  var hostNode = new JTopo.Node('Hello');
	  hostNode.setType('host');
	  hostNode.setLocation(300, 100);
	  hostNode.rotate = Math.PI / 10;
	  hostNode.scala = 1.5;
	  box.add(hostNode);
	
	  var textNode = new JTopo.TextNode('This is a Text node.');
	  textNode.setLocation(317, 310);
	  box.add(textNode);
	
	  var tipNode = new JTopo.TipNode('a tip.');
	  tipNode.setLocation(540, 100);
	  box.add(tipNode);
	
	  var peopleNode = new JTopo.Node('people');
	  peopleNode.setLocation(500, 200);
	  peopleNode.setSize(64, 64);
	  peopleNode.setImage('./assets/img/other/person.png');
	  box.add(peopleNode);
	
	  var circleNode = new JTopo.CircleNode();
	  circleNode.style.fillStyle = '0, 0, 255';
	  circleNode.setLocation(390, 90);
	  box.add(circleNode);
	
	  var heartNode = new JTopo.HeartNode();
	  heartNode.style.fillStyle = '255, 0, 0';
	  heartNode.setLocation(300, 170);
	  box.add(heartNode);
	
	  var link = new JTopo.FoldLink(peopleNode, heartNode);
	  box.add(link);
	
	  box.updateView();
	}
	
	module.exports = demo;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var domready = __webpack_require__(15)
	
	module.exports = (function() {
	
		var support,
			all,
			a,
			select,
			opt,
			input,
			fragment,
			eventName,
			i,
			isSupported,
			clickFn,
			div = document.createElement("div");
	
		// Setup
		div.setAttribute( "className", "t" );
		div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
	
		// Support tests won't run in some limited or non-browser environments
		all = div.getElementsByTagName("*");
		a = div.getElementsByTagName("a")[ 0 ];
		if ( !all || !a || !all.length ) {
			return {};
		}
	
		// First batch of tests
		select = document.createElement("select");
		opt = select.appendChild( document.createElement("option") );
		input = div.getElementsByTagName("input")[ 0 ];
	
		a.style.cssText = "top:1px;float:left;opacity:.5";
		support = {
			// IE strips leading whitespace when .innerHTML is used
			leadingWhitespace: ( div.firstChild.nodeType === 3 ),
	
			// Make sure that tbody elements aren't automatically inserted
			// IE will insert them into empty tables
			tbody: !div.getElementsByTagName("tbody").length,
	
			// Make sure that link elements get serialized correctly by innerHTML
			// This requires a wrapper element in IE
			htmlSerialize: !!div.getElementsByTagName("link").length,
	
			// Get the style information from getAttribute
			// (IE uses .cssText instead)
			style: /top/.test( a.getAttribute("style") ),
	
			// Make sure that URLs aren't manipulated
			// (IE normalizes it by default)
			hrefNormalized: ( a.getAttribute("href") === "/a" ),
	
			// Make sure that element opacity exists
			// (IE uses filter instead)
			// Use a regex to work around a WebKit issue. See #5145
			opacity: /^0.5/.test( a.style.opacity ),
	
			// Verify style float existence
			// (IE uses styleFloat instead of cssFloat)
			cssFloat: !!a.style.cssFloat,
	
			// Make sure that if no value is specified for a checkbox
			// that it defaults to "on".
			// (WebKit defaults to "" instead)
			checkOn: ( input.value === "on" ),
	
			// Make sure that a selected-by-default option has a working selected property.
			// (WebKit defaults to false instead of true, IE too, if it's in an optgroup)
			optSelected: opt.selected,
	
			// Test setAttribute on camelCase class. If it works, we need attrFixes when doing get/setAttribute (ie6/7)
			getSetAttribute: div.className !== "t",
	
			// Tests for enctype support on a form (#6743)
			enctype: !!document.createElement("form").enctype,
	
			// Makes sure cloning an html5 element does not cause problems
			// Where outerHTML is undefined, this still works
			html5Clone: document.createElement("nav").cloneNode( true ).outerHTML !== "<:nav></:nav>",
	
			// jQuery.support.boxModel DEPRECATED in 1.8 since we don't support Quirks Mode
			boxModel: ( document.compatMode === "CSS1Compat" ),
	
			// Will be defined later
			submitBubbles: true,
			changeBubbles: true,
			focusinBubbles: false,
			deleteExpando: true,
			noCloneEvent: true,
			inlineBlockNeedsLayout: false,
			shrinkWrapBlocks: false,
			reliableMarginRight: true,
			boxSizingReliable: true,
			pixelPosition: false
		};
	
		// Make sure checked status is properly cloned
		input.checked = true;
		support.noCloneChecked = input.cloneNode( true ).checked;
	
		// Make sure that the options inside disabled selects aren't marked as disabled
		// (WebKit marks them as disabled)
		select.disabled = true;
		support.optDisabled = !opt.disabled;
	
		// Test to see if it's possible to delete an expando from an element
		// Fails in Internet Explorer
		try {
			delete div.test;
		} catch( e ) {
			support.deleteExpando = false;
		}
	
		if ( !div.addEventListener && div.attachEvent && div.fireEvent ) {
			div.attachEvent( "onclick", clickFn = function() {
				// Cloning a node shouldn't copy over any
				// bound event handlers (IE does this)
				support.noCloneEvent = false;
			});
			div.cloneNode( true ).fireEvent("onclick");
			div.detachEvent( "onclick", clickFn );
		}
	
		// Check if a radio maintains its value
		// after being appended to the DOM
		input = document.createElement("input");
		input.value = "t";
		input.setAttribute( "type", "radio" );
		support.radioValue = input.value === "t";
	
		input.setAttribute( "checked", "checked" );
	
		// #11217 - WebKit loses check when the name is after the checked attribute
		input.setAttribute( "name", "t" );
	
		div.appendChild( input );
		fragment = document.createDocumentFragment();
		fragment.appendChild( div.lastChild );
	
		// WebKit doesn't clone checked state correctly in fragments
		support.checkClone = fragment.cloneNode( true ).cloneNode( true ).lastChild.checked;
	
		// Check if a disconnected checkbox will retain its checked
		// value of true after appended to the DOM (IE6/7)
		support.appendChecked = input.checked;
	
		fragment.removeChild( input );
		fragment.appendChild( div );
	
		// Technique from Juriy Zaytsev
		// http://perfectionkills.com/detecting-event-support-without-browser-sniffing/
		// We only care about the case where non-standard event systems
		// are used, namely in IE. Short-circuiting here helps us to
		// avoid an eval call (in setAttribute) which can cause CSP
		// to go haywire. See: https://developer.mozilla.org/en/Security/CSP
		if ( !div.addEventListener ) {
			for ( i in {
				submit: true,
				change: true,
				focusin: true
			}) {
				eventName = "on" + i;
				isSupported = ( eventName in div );
				if ( !isSupported ) {
					div.setAttribute( eventName, "return;" );
					isSupported = ( typeof div[ eventName ] === "function" );
				}
				support[ i + "Bubbles" ] = isSupported;
			}
		}
	
		// Run tests that need a body at doc ready
		domready(function() {
			var container, div, tds, marginDiv,
				divReset = "padding:0;margin:0;border:0;display:block;overflow:hidden;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
				body = document.getElementsByTagName("body")[0];
	
			if ( !body ) {
				// Return for frameset docs that don't have a body
				return;
			}
	
			container = document.createElement("div");
			container.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px";
			body.insertBefore( container, body.firstChild );
	
			// Construct the test element
			div = document.createElement("div");
			container.appendChild( div );
	
	    //Check if table cells still have offsetWidth/Height when they are set
	    //to display:none and there are still other visible table cells in a
	    //table row; if so, offsetWidth/Height are not reliable for use when
	    //determining if an element has been hidden directly using
	    //display:none (it is still safe to use offsets if a parent element is
	    //hidden; don safety goggles and see bug #4512 for more information).
	    //(only IE 8 fails this test)
			div.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
			tds = div.getElementsByTagName("td");
			tds[ 0 ].style.cssText = "padding:0;margin:0;border:0;display:none";
			isSupported = ( tds[ 0 ].offsetHeight === 0 );
	
			tds[ 0 ].style.display = "";
			tds[ 1 ].style.display = "none";
	
			// Check if empty table cells still have offsetWidth/Height
			// (IE <= 8 fail this test)
			support.reliableHiddenOffsets = isSupported && ( tds[ 0 ].offsetHeight === 0 );
	
			// Check box-sizing and margin behavior
			div.innerHTML = "";
			div.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;";
			support.boxSizing = ( div.offsetWidth === 4 );
			support.doesNotIncludeMarginInBodyOffset = ( body.offsetTop !== 1 );
	
			// NOTE: To any future maintainer, we've window.getComputedStyle
			// because jsdom on node.js will break without it.
			if ( window.getComputedStyle ) {
				support.pixelPosition = ( window.getComputedStyle( div, null ) || {} ).top !== "1%";
				support.boxSizingReliable = ( window.getComputedStyle( div, null ) || { width: "4px" } ).width === "4px";
	
				// Check if div with explicit width and no margin-right incorrectly
				// gets computed margin-right based on width of container. For more
				// info see bug #3333
				// Fails in WebKit before Feb 2011 nightlies
				// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
				marginDiv = document.createElement("div");
				marginDiv.style.cssText = div.style.cssText = divReset;
				marginDiv.style.marginRight = marginDiv.style.width = "0";
				div.style.width = "1px";
				div.appendChild( marginDiv );
				support.reliableMarginRight =
					!parseFloat( ( window.getComputedStyle( marginDiv, null ) || {} ).marginRight );
			}
	
			if ( typeof div.style.zoom !== "undefined" ) {
				// Check if natively block-level elements act like inline-block
				// elements when setting their display to 'inline' and giving
				// them layout
				// (IE < 8 does this)
				div.innerHTML = "";
				div.style.cssText = divReset + "width:1px;padding:1px;display:inline;zoom:1";
				support.inlineBlockNeedsLayout = ( div.offsetWidth === 3 );
	
				// Check if elements with layout shrink-wrap their children
				// (IE 6 does this)
				div.style.display = "block";
				div.style.overflow = "visible";
				div.innerHTML = "<div></div>";
				div.firstChild.style.width = "5px";
				support.shrinkWrapBlocks = ( div.offsetWidth !== 3 );
	
				container.style.zoom = 1;
			}
	
			// Null elements to avoid leaks in IE
			body.removeChild( container );
			container = div = tds = marginDiv = null;
		});
	
		// Null elements to avoid leaks in IE
		fragment.removeChild( div );
		all = a = select = opt = input = fragment = div = null;
	
		return support;
	})();


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	  * domready (c) Dustin Diaz 2014 - License MIT
	  */
	!function (name, definition) {
	
	  if (true) module.exports = definition()
	  else if (typeof define == 'function' && typeof define.amd == 'object') define(definition)
	  else this[name] = definition()
	
	}('domready', function () {
	
	  var fns = [], listener
	    , doc = document
	    , hack = doc.documentElement.doScroll
	    , domContentLoaded = 'DOMContentLoaded'
	    , loaded = (hack ? /^loaded|^c/ : /^loaded|^i|^c/).test(doc.readyState)
	
	
	  if (!loaded)
	  doc.addEventListener(domContentLoaded, listener = function () {
	    doc.removeEventListener(domContentLoaded, listener)
	    loaded = 1
	    while (listener = fns.shift()) listener()
	  })
	
	  return function (fn) {
	    loaded ? setTimeout(fn, 0) : fns.push(fn)
	  }
	
	});


/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';
	
	var hasOwn = Object.prototype.hasOwnProperty;
	var toStr = Object.prototype.toString;
	
	var isArray = function isArray(arr) {
		if (typeof Array.isArray === 'function') {
			return Array.isArray(arr);
		}
	
		return toStr.call(arr) === '[object Array]';
	};
	
	var isPlainObject = function isPlainObject(obj) {
		if (!obj || toStr.call(obj) !== '[object Object]') {
			return false;
		}
	
		var hasOwnConstructor = hasOwn.call(obj, 'constructor');
		var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, 'isPrototypeOf');
		// Not own constructor property must be Object
		if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
			return false;
		}
	
		// Own properties are enumerated firstly, so to speed up,
		// if last one is own, then all properties are own.
		var key;
		for (key in obj) {/**/}
	
		return typeof key === 'undefined' || hasOwn.call(obj, key);
	};
	
	module.exports = function extend() {
		var options, name, src, copy, copyIsArray, clone,
			target = arguments[0],
			i = 1,
			length = arguments.length,
			deep = false;
	
		// Handle a deep copy situation
		if (typeof target === 'boolean') {
			deep = target;
			target = arguments[1] || {};
			// skip the boolean and the target
			i = 2;
		} else if ((typeof target !== 'object' && typeof target !== 'function') || target == null) {
			target = {};
		}
	
		for (; i < length; ++i) {
			options = arguments[i];
			// Only deal with non-null/undefined values
			if (options != null) {
				// Extend the base object
				for (name in options) {
					src = target[name];
					copy = options[name];
	
					// Prevent never-ending loop
					if (target !== copy) {
						// Recurse if we're merging plain objects or arrays
						if (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
							if (copyIsArray) {
								copyIsArray = false;
								clone = src && isArray(src) ? src : [];
							} else {
								clone = src && isPlainObject(src) ? src : {};
							}
	
							// Never move original objects, clone them
							target[name] = extend(deep, clone, copy);
	
						// Don't bring in undefined values
						} else if (typeof copy !== 'undefined') {
							target[name] = copy;
						}
					}
				}
			}
		}
	
		// Return the modified object
		return target;
	};
	


/***/ },
/* 17 */
/***/ function(module, exports) {

	
	/**
	 * Module exports.
	 */
	
	module.exports = getDocument;
	
	// defined by w3c
	var DOCUMENT_NODE = 9;
	
	/**
	 * Returns `true` if `w` is a Document object, or `false` otherwise.
	 *
	 * @param {?} d - Document object, maybe
	 * @return {Boolean}
	 * @private
	 */
	
	function isDocument (d) {
	  return d && d.nodeType === DOCUMENT_NODE;
	}
	
	/**
	 * Returns the `document` object associated with the given `node`, which may be
	 * a DOM element, the Window object, a Selection, a Range. Basically any DOM
	 * object that references the Document in some way, this function will find it.
	 *
	 * @param {Mixed} node - DOM node, selection, or range in which to find the `document` object
	 * @return {Document} the `document` object associated with `node`
	 * @public
	 */
	
	function getDocument(node) {
	  if (isDocument(node)) {
	    return node;
	
	  } else if (isDocument(node.ownerDocument)) {
	    return node.ownerDocument;
	
	  } else if (isDocument(node.document)) {
	    return node.document;
	
	  } else if (node.parentNode) {
	    return getDocument(node.parentNode);
	
	  // Range support
	  } else if (node.commonAncestorContainer) {
	    return getDocument(node.commonAncestorContainer);
	
	  } else if (node.startContainer) {
	    return getDocument(node.startContainer);
	
	  // Selection support
	  } else if (node.anchorNode) {
	    return getDocument(node.anchorNode);
	  }
	}


/***/ },
/* 18 */
/***/ function(module, exports) {

	
	/**
	 * Check if the DOM element `child` is within the given `parent` DOM element.
	 *
	 * @param {DOMElement|Range} child - the DOM element or Range to check if it's within `parent`
	 * @param {DOMElement} parent  - the parent node that `child` could be inside of
	 * @return {Boolean} True if `child` is within `parent`. False otherwise.
	 * @public
	 */
	
	module.exports = function within (child, parent) {
	  // don't throw if `child` is null
	  if (!child) return false;
	
	  // Range support
	  if (child.commonAncestorContainer) child = child.commonAncestorContainer;
	  else if (child.endContainer) child = child.endContainer;
	
	  // traverse up the `parentNode` properties until `parent` is found
	  var node = child;
	  while (node = node.parentNode) {
	    if (node == parent) return true;
	  }
	
	  return false;
	};


/***/ }
/******/ ]);