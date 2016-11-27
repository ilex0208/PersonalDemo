﻿
function NoHtml(info) {
  var old = info;
  info = info.replace(/({|})/g, '');
  info = info.replace(/</g, '&lt;');
  info = info.replace(/>/g, '&gt;');
  return old === info ? info : (info + '<br /><span style="color:red;">原文如下:</span>' + old);
}

function fun_initEmoji() {
  var b, a = '';
  for (b in emoji) {
    a += '<li class=\'list-emoji\' id=\'emoji_' + b + '\' onclick=\'click_emojiItems(id);\'  title=\'' + b + '\'><img src=\'' + emoji[b] + '\' /></li>';
  }
  $('#emoji').popover({
    html: 'true',
    content: a
  }), $('#emoji').click(function() {
    isopenEmoji ? (isopenEmoji = !1, $('#emoji').popover('hide')) : (isopenEmoji = !0, $('#emoji').popover('show'));
  });
}

function click_emojiItems(a) {
  $('#inp_send').insertAtCaret(a.split('_')[1]);
}

function fun_initWebSocket() {
  if ($.trim($('#inp_url').val())) {
    $('#btn_conn').attr('disabled', !0), $('#btn_close').attr('disabled', !1);
    try {
      ws = new WebSocket($.trim($('#inp_url').val())), output('等待服务器握手包...', 1), ws.onopen = function() {
        output('收到服务器握手包.', 1), output('连接已建立，正在等待数据...', 0);
      }, ws.onmessage = function(a) {
        output(chg_emoji(a.data), 0);
      }, ws.onclose = function() {
        $('#btn_conn').attr('disabled', !1), $('#btn_close').attr('disabled', !0), output('和服务器断开连接！', 0);
      };
    } catch (a) {
      $('#btn_conn').attr('disabled', !1), $('#btn_close').attr('disabled', !0), output('ws的地址错误,请重新输入！', 1);
    }
  }
}

function fun_close() {
  ws.close();
}

function fun_sendto() {
  isopenEmoji && $('#emoji').trigger('click');
  var a = $.trim($('#inp_send').val());
  '' != a && (ws && 1 == ws.readyState ? (ws.send(a), output(NoHtml(chg_emoji(a)), 1), $('#inp_send').val('')) : alert('连接已经断开！'));
}

function fun_clearALl() {
  $('#div_msg').empty();
}

function chg_emoji(emo) {
  var emoArray = emo.match(/\[.*?]/gi);
  if (emoArray){
    for (var i = 0; i < emoArray.length; i++) {
      emo = emo.replace(emoArray[i], '<img src="' + emoji[emoArray[i]] + '" />');
    }
  }
  return emo;
}

function output(a, b) {
  var f, c = new Date, d = 'blue', e = '服务器';
  1 == b && (d = 'green', e = '你'),
  f = '<div style=\'color:' + d + '\'>' + e + ' ' + c.getHours() + ':' + c.getMinutes() + ':' + c.getSeconds() + '</div>', 
  $('#div_msg').append('<div style=\'margin-bottom:10px;position:relative;left:0px;\'>' + f + a + '</div>'),
  $('#div_msg').scrollTop($('#div_msg')[0].scrollHeight);
}
var ws, isopenEmoji, tick_heartpac, emoji, swfobject = function() {
    function A() {
      var a, c, d;
      if (!t) {
        try {
          a = i.getElementsByTagName('body')[0].appendChild(Q('span')), a.parentNode.removeChild(a);
        } catch (b) {
          return;
        }
        for (t = !0, c = l.length, d = 0; c > d; d++) {l[d]();}
      }
    }

    function B(a) {
      t ? a() : l[l.length] = a;
    }

    function C(b) {
      if (typeof h.addEventListener != a) {h.addEventListener('load', b, !1);}
      else if (typeof i.addEventListener != a) {i.addEventListener('load', b, !1);}
    else if (typeof h.attachEvent != a) {R(h, 'onload', b);}
    else if ('function' == typeof h.onload) {
      var c = h.onload;
      h.onload = function() {
        c(), b();
      };
    } else {h.onload = b;}
    }

    function D() {
      k ? E() : F();
    }

    function E() {
      var f, g, c = i.getElementsByTagName('body')[0],
        d = Q(b);
      d.setAttribute('type', e), f = c.appendChild(d), f ? (g = 0, function() {
        if (typeof f.GetVariable != a) {
          var b = f.GetVariable('$version');
          b && (b = b.split(' ')[1].split(','), y.pv = [parseInt(b[0], 10), parseInt(b[1], 10), parseInt(b[2], 10)]);
        } else if (10 > g) {return g++, setTimeout(arguments.callee, 10), void 0;}
        c.removeChild(d), f = null, F();
      }()) : F();
    }

    function F() {
      var c, d, e, f, g, h, i, j, k, l, n, b = m.length;
      if (b > 0)
        for (c = 0; b > c; c++)
          if (d = m[c].id, e = m[c].callbackFn, f = {
            success: !1,
            id: d
          }, y.pv[0] > 0) {
            if (g = P(d))
              if (!S(m[c].swfVersion) || y.wk && y.wk < 312)
                if (m[c].expressInstall && H()) {
                  for (h = {}, h.data = m[c].expressInstall, h.width = g.getAttribute('width') || '0', h.height = g.getAttribute('height') || '0', g.getAttribute('class') && (h.styleclass = g.getAttribute('class')), g.getAttribute('align') && (h.align = g.getAttribute('align')), i = {}, j = g.getElementsByTagName('param'), k = j.length, l = 0; k > l; l++) 'movie' != j[l].getAttribute('name').toLowerCase() && (i[j[l].getAttribute('name')] = j[l].getAttribute('value'));
                  I(h, i, d, e);
                } else J(g), e && e(f);
              else {U(d, !0), e && (f.success = !0, f.ref = G(d), e(f));}
          } else {U(d, !0), e && (n = G(d), n && typeof n.SetVariable != a && (f.success = !0, f.ref = n), e(f));}
    }

    function G(c) {
      var f, d = null,
        e = P(c);
      return e && 'OBJECT' == e.nodeName && (typeof e.SetVariable != a ? d = e : (f = e.getElementsByTagName(b)[0], f && (d = f))), d;
    }

    function H() {
      return !u && S('6.0.65') && (y.win || y.mac) && !(y.wk && y.wk < 312);
    }

    function I(b, c, d, e) {
      var g, j, k, l;
      u = !0, r = e || null, s = {
        success: !1,
        id: d
      }, g = P(d), g && ('OBJECT' == g.nodeName ? (p = K(g), q = null) : (p = g, q = d), b.id = f, (typeof b.width == a || !/%$/.test(b.width) && parseInt(b.width, 10) < 310) && (b.width = '310'), (typeof b.height == a || !/%$/.test(b.height) && parseInt(b.height, 10) < 137) && (b.height = '137'), i.title = i.title.slice(0, 47) + ' - Flash Player Installation', j = y.ie && y.win ? 'ActiveX' : 'PlugIn', k = 'MMredirectURL=' + ('' + h.location).replace(/&/g, '%26') + '&MMplayerType=' + j + '&MMdoctitle=' + i.title, typeof c.flashvars != a ? c.flashvars += '&' + k : c.flashvars = k, y.ie && y.win && 4 != g.readyState && (l = Q('div'), d += 'SWFObjectNew', l.setAttribute('id', d), g.parentNode.insertBefore(l, g), g.style.display = 'none', function() {
        4 == g.readyState ? g.parentNode.removeChild(g) : setTimeout(arguments.callee, 10);
      }()), L(b, c, d));
    }

    function J(a) {
      if (y.ie && y.win && 4 != a.readyState) {
        var b = Q('div');
        a.parentNode.insertBefore(b, a), b.parentNode.replaceChild(K(a), b), a.style.display = 'none',
        function() {
          4 == a.readyState ? a.parentNode.removeChild(a) : setTimeout(arguments.callee, 10);
        }();
      } else {a.parentNode.replaceChild(K(a), a);}
    }

    function K(a) {
      var d, e, f, g, c = Q('div');
      if (y.win && y.ie) {c.innerHTML = a.innerHTML;}
      else if (d = a.getElementsByTagName(b)[0], d && (e = d.childNodes))
        {for (f = e.length, g = 0; f > g; g++) {1 == e[g].nodeType && 'PARAM' == e[g].nodeName || 8 == e[g].nodeType || c.appendChild(e[g].cloneNode(!0));}}
      return c;
    }

    function L(c, d, f) {
      var g, i, j, k, l, m, o, p, h = P(f);
      if (y.wk && y.wk < 312) {return g;}
      if (h){
        if (typeof c.id == a && (c.id = f), y.ie && y.win) {
          i = '';
          for (j in c) c[j] != Object.prototype[j] && ('data' == j.toLowerCase() ? d.movie = c[j] : 'styleclass' == j.toLowerCase() ? i += ' class="' + c[j] + '"' : 'classid' != j.toLowerCase() && (i += ' ' + j + '="' + c[j] + '"'));
          k = '';
          for (l in d) d[l] != Object.prototype[l] && (k += '<param name="' + l + '" value="' + d[l] + '" />');
          h.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + i + '>' + k + '</object>', n[n.length] = c.id, g = P(c.id);
        } else {
          m = Q(b), m.setAttribute('type', e);
          for (o in c) c[o] != Object.prototype[o] && ('styleclass' == o.toLowerCase() ? m.setAttribute('class', c[o]) : 'classid' != o.toLowerCase() && m.setAttribute(o, c[o]));
          for (p in d) d[p] != Object.prototype[p] && 'movie' != p.toLowerCase() && M(m, p, d[p]);
          h.parentNode.replaceChild(m, h), g = m;
        }}
      return g;
    }

    function M(a, b, c) {
      var d = Q('param');
      d.setAttribute('name', b), d.setAttribute('value', c), a.appendChild(d);
    }

    function N(a) {
      var b = P(a);
      b && 'OBJECT' == b.nodeName && (y.ie && y.win ? (b.style.display = 'none', function() {
        4 == b.readyState ? O(a) : setTimeout(arguments.callee, 10);
      }()) : b.parentNode.removeChild(b));
    }

    function O(a) {
      var c, b = P(a);
      if (b) {
        for (c in b) {'function' == typeof b[c] && (b[c] = null);}
        b.parentNode.removeChild(b);
      }
    }

    function P(a) {
      var b = null;
      try {
        b = i.getElementById(a);
      } catch (ex) {console.log(ex);}
      return b;
    }

    function Q(a) {
      return i.createElement(a);
    }

    function R(a, b, c) {
      a.attachEvent(b, c), o[o.length] = [a, b, c];
    }

    function S(a) {
      var b = y.pv,
        c = a.split('.');
      return c[0] = parseInt(c[0], 10), c[1] = parseInt(c[1], 10) || 0, c[2] = parseInt(c[2], 10) || 0, b[0] > c[0] || b[0] == c[0] && b[1] > c[1] || b[0] == c[0] && b[1] == c[1] && b[2] >= c[2] ? !0 : !1;
    }

    function T(c, d, e, f) {
      var g, h, j;
      y.ie && y.mac || (g = i.getElementsByTagName('head')[0], g && (h = e && 'string' == typeof e ? e : 'screen', f && (v = null, w = null), v && w == h || (j = Q('style'), j.setAttribute('type', 'text/css'), j.setAttribute('media', h), v = g.appendChild(j), y.ie && y.win && typeof i.styleSheets != a && i.styleSheets.length > 0 && (v = i.styleSheets[i.styleSheets.length - 1]), w = h), y.ie && y.win ? v && typeof v.addRule == b && v.addRule(c, d) : v && typeof i.createTextNode != a && v.appendChild(i.createTextNode(c + ' {' + d + '}'))));
    }

    function U(a, b) {
      if (x) {
        var c = b ? 'visible' : 'hidden';
        t && P(a) ? P(a).style.visibility = c : T('#' + a, 'visibility:' + c);
      }
    }

    function V(b) {
      var c = /[\\\"<>\.;]/,
        d = null != c.exec(b);
      return d && typeof encodeURIComponent != a ? encodeURIComponent(b) : b;
    }
    var p, q, r, s, v, w, a = 'undefined',
      b = 'object',
      c = 'Shockwave Flash',
      d = 'ShockwaveFlash.ShockwaveFlash',
      e = 'application/x-shockwave-flash',
      f = 'SWFObjectExprInst',
      g = 'onreadystatechange',
      h = window,
      i = document,
      j = navigator,
      k = !1,
      l = [D],
      m = [],
      n = [],
      o = [],
      t = !1,
      u = !1,
      x = !0,
      y = function() {
        var s, f = typeof i.getElementById != a && typeof i.getElementsByTagName != a && typeof i.createElement != a,
          g = j.userAgent.toLowerCase(),
          l = j.platform.toLowerCase(),
          m = l ? /win/.test(l) : /win/.test(g),
          n = l ? /mac/.test(l) : /mac/.test(g),
          o = /webkit/.test(g) ? parseFloat(g.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, '$1')) : !1,
          p = !1,
          q = [0, 0, 0],
          r = null;
        if (typeof j.plugins != a && typeof j.plugins[c] == b) r = j.plugins[c].description, !r || typeof j.mimeTypes != a && j.mimeTypes[e] && !j.mimeTypes[e].enabledPlugin || (k = !0, p = !1, r = r.replace(/^.*\s+(\S+\s+\S+$)/, '$1'), q[0] = parseInt(r.replace(/^(.*)\..*$/, '$1'), 10), q[1] = parseInt(r.replace(/^.*\.(.*)\s.*$/, '$1'), 10), q[2] = /[a-zA-Z]/.test(r) ? parseInt(r.replace(/^.*[a-zA-Z]+(.*)$/, '$1'), 10) : 0);
        else if (typeof h.ActiveXObject != a) try {
          s = new ActiveXObject(d), s && (r = s.GetVariable('$version'), r && (p = !0, r = r.split(' ')[1].split(','), q = [parseInt(r[0], 10), parseInt(r[1], 10), parseInt(r[2], 10)]));
        } catch (t) {}
        return {
          w3: f,
          pv: q,
          wk: o,
          ie: p,
          win: m,
          mac: n
        };
      }();
    return function() {
      y.w3 && ((typeof i.readyState != a && 'complete' == i.readyState || typeof i.readyState == a && (i.getElementsByTagName('body')[0] || i.body)) && A(), t || (typeof i.addEventListener != a && i.addEventListener('DOMContentLoaded', A, !1), y.ie && y.win && (i.attachEvent(g, function() {
        'complete' == i.readyState && (i.detachEvent(g, arguments.callee), A());
      }), h == top && function() {
        if (!t) {
          try {
            i.documentElement.doScroll('left');
          } catch (a) {
            return setTimeout(arguments.callee, 0), void 0;
          }
          A();
        }
      }()), y.wk && function() {
        return t ? void 0 : /loaded|complete/.test(i.readyState) ? (A(), void 0) : (setTimeout(arguments.callee, 0), void 0);
      }(), C(A)));
    }(),
    function() {
      y.ie && y.win && window.attachEvent('onunload', function() {
        var b, c, d, e, f, a = o.length;
        for (b = 0; a > b; b++) o[b][0].detachEvent(o[b][1], o[b][2]);
        for (c = n.length, d = 0; c > d; d++) N(n[d]);
        for (e in y) y[e] = null;
        y = null;
        for (f in swfobject) swfobject[f] = null;
        swfobject = null;
      });
    }(), {
      registerObject: function(a, b, c, d) {
        if (y.w3 && a && b) {
          var e = {};
          e.id = a, e.swfVersion = b, e.expressInstall = c, e.callbackFn = d, m[m.length] = e, U(a, !1);
        } else d && d({
          success: !1,
          id: a
        });
      },
      getObjectById: function(a) {
        return y.w3 ? G(a) : void 0;
      },
      embedSWF: function(c, d, e, f, g, h, i, j, k, l) {
        var m = {
          success: !1,
          id: d
        };
        y.w3 && !(y.wk && y.wk < 312) && c && d && e && f && g ? (U(d, !1), B(function() {
          var n, o, p, q, r, s;
          if (e += '', f += '', n = {}, k && typeof k === b)
            for (o in k) n[o] = k[o];
          if (n.data = c, n.width = e, n.height = f, p = {}, j && typeof j === b)
            for (q in j) p[q] = j[q];
          if (i && typeof i === b)
            for (r in i) typeof p.flashvars != a ? p.flashvars += '&' + r + '=' + i[r] : p.flashvars = r + '=' + i[r];
          if (S(g)) s = L(n, p, d), n.id == d && U(d, !0), m.success = !0, m.ref = s;
          else {
            if (h && H()) return n.data = h, I(n, p, d, l), void 0;
            U(d, !0);
          }
          l && l(m);
        })) : l && l(m);
      },
      switchOffAutoHideShow: function() {
        x = !1;
      },
      ua: y,
      getFlashPlayerVersion: function() {
        return {
          major: y.pv[0],
          minor: y.pv[1],
          release: y.pv[2]
        };
      },
      hasFlashPlayerVersion: S,
      createSWF: function(a, b, c) {
        return y.w3 ? L(a, b, c) : void 0;
      },
      showExpressInstall: function(a, b, c, d) {
        y.w3 && H() && I(a, b, c, d);
      },
      removeSWF: function(a) {
        y.w3 && N(a);
      },
      createCSS: function(a, b, c, d) {
        y.w3 && T(a, b, c, d);
      },
      addDomLoadEvent: B,
      addLoadEvent: C,
      getQueryParamValue: function(a) {
        var c, d, b = i.location.search || i.location.hash;
        if (b) {
          if (/\?/.test(b) && (b = b.split('?')[1]), null == a) return V(b);
          for (c = b.split('&'), d = 0; d < c.length; d++)
            if (c[d].substring(0, c[d].indexOf('=')) == a) return V(c[d].substring(c[d].indexOf('=') + 1));
        }
        return '';
      },
      expressInstallCallback: function() {
        if (u) {
          var a = P(f);
          a && p && (a.parentNode.replaceChild(p, a), q && (U(q, !0), y.ie && y.win && (p.style.display = 'block')), r && r(s)), u = !1;
        }
      }
    };
  }();
! function() {
  if (window.WEB_SOCKET_FORCE_FLASH);
  else {
    if (window.WebSocket) return;
    if (window.MozWebSocket) return window.WebSocket = MozWebSocket, void 0;
  }
  var a;
  return a = window.WEB_SOCKET_LOGGER ? WEB_SOCKET_LOGGER : window.console && window.console.log && window.console.error ? window.console : {
    log: function() {},
    error: function() {}
  }, swfobject.getFlashPlayerVersion().major < 10 ? (a.error('Flash Player >= 10.0.0 is required.'), void 0) : ('file:' == location.protocol && a.error('WARNING: web-socket-js doesn\'t work in file:///... URL unless you set Flash Security Settings properly. Open the page via Web server i.e. http://...'), window.WebSocket = function(a, b, c, d, e) {
    var f = this;
    f.__id = WebSocket.__nextId++, WebSocket.__instances[f.__id] = f, f.readyState = WebSocket.CONNECTING, f.bufferedAmount = 0, f.__events = {}, b ? 'string' == typeof b && (b = [b]) : b = [], f.__createTask = setTimeout(function() {
      WebSocket.__addTask(function() {
        f.__createTask = null, WebSocket.__flash.create(f.__id, a, b, c || null, d || 0, e || null);
      });
    }, 0);
  }, WebSocket.prototype.send = function(a) {
    if (this.readyState == WebSocket.CONNECTING) throw 'INVALID_STATE_ERR: Web Socket connection has not been established';
    var b = WebSocket.__flash.send(this.__id, encodeURIComponent(a));
    return 0 > b ? !0 : (this.bufferedAmount += b, !1);
  }, WebSocket.prototype.close = function() {
    return this.__createTask ? (clearTimeout(this.__createTask), this.__createTask = null, this.readyState = WebSocket.CLOSED, void 0) : (this.readyState != WebSocket.CLOSED && this.readyState != WebSocket.CLOSING && (this.readyState = WebSocket.CLOSING, WebSocket.__flash.close(this.__id)), void 0);
  }, WebSocket.prototype.addEventListener = function(a, b) {
    a in this.__events || (this.__events[a] = []), this.__events[a].push(b);
  }, WebSocket.prototype.removeEventListener = function(a, b) {
    var d, e;
    if (a in this.__events)
      for (d = this.__events[a], e = d.length - 1; e >= 0; --e)
        if (d[e] === b) {
          d.splice(e, 1);
          break;
        }
  }, WebSocket.prototype.dispatchEvent = function(a) {
    var c, d, b = this.__events[a.type] || [];
    for (c = 0; c < b.length; ++c) b[c](a);
    d = this['on' + a.type], d && d.apply(this, [a]);
  }, WebSocket.prototype.__handleEvent = function(a) {
    var b, c;
    if ('readyState' in a && (this.readyState = a.readyState), 'protocol' in a && (this.protocol = a.protocol), 'open' == a.type || 'error' == a.type) b = this.__createSimpleEvent(a.type);
    else if ('close' == a.type) b = this.__createSimpleEvent('close'), b.wasClean = a.wasClean ? !0 : !1, b.code = a.code, b.reason = a.reason;
    else {
      if ('message' != a.type) throw 'unknown event type: ' + a.type;
      c = decodeURIComponent(a.message), b = this.__createMessageEvent('message', c);
    }
    this.dispatchEvent(b);
  }, WebSocket.prototype.__createSimpleEvent = function(a) {
    if (document.createEvent && window.Event) {
      var b = document.createEvent('Event');
      return b.initEvent(a, !1, !1), b;
    }
    return {
      type: a,
      bubbles: !1,
      cancelable: !1
    };
  }, WebSocket.prototype.__createMessageEvent = function(a, b) {
    if (window.MessageEvent && 'function' == typeof MessageEvent && !window.opera) return new MessageEvent('message', {
      view: window,
      bubbles: !1,
      cancelable: !1,
      data: b
    });
    if (document.createEvent && window.MessageEvent && !window.opera) {
      var c = document.createEvent('MessageEvent');
      return c.initMessageEvent('message', !1, !1, b, null, null, window, null), c;
    }
    return {
      type: a,
      data: b,
      bubbles: !1,
      cancelable: !1
    };
  }, WebSocket.CONNECTING = 0, WebSocket.OPEN = 1, WebSocket.CLOSING = 2, WebSocket.CLOSED = 3, WebSocket.__isFlashImplementation = !0, WebSocket.__initialized = !1, WebSocket.__flash = null, WebSocket.__instances = {}, WebSocket.__tasks = [], WebSocket.__nextId = 0, WebSocket.loadFlashPolicyFile = function(a) {
    WebSocket.__addTask(function() {
      WebSocket.__flash.loadManualPolicyFile(a);
    });
  }, WebSocket.__initialize = function() {
    var b, c, d;
    if (!WebSocket.__initialized) {
      if (WebSocket.__initialized = !0, WebSocket.__swfLocation && (window.WEB_SOCKET_SWF_LOCATION = WebSocket.__swfLocation), !window.WEB_SOCKET_SWF_LOCATION) return a.error('[WebSocket] set WEB_SOCKET_SWF_LOCATION to location of WebSocketMain.swf'), void 0;
      window.WEB_SOCKET_SUPPRESS_CROSS_DOMAIN_SWF_ERROR || WEB_SOCKET_SWF_LOCATION.match(/(^|\/)WebSocketMainInsecure\.swf(\?.*)?$/) || !WEB_SOCKET_SWF_LOCATION.match(/^\w+:\/\/([^\/]+)/) || (b = RegExp.$1, location.host != b && a.error('[WebSocket] You must host HTML and WebSocketMain.swf in the same host (\'' + location.host + '\' != \'' + b + '\'). ' + 'See also \'How to host HTML file and SWF file in different domains\' section ' + 'in README.md. If you use WebSocketMainInsecure.swf, you can suppress this message ' + 'by WEB_SOCKET_SUPPRESS_CROSS_DOMAIN_SWF_ERROR = true;')), c = document.createElement('div'), c.id = 'webSocketContainer', c.style.position = 'absolute', WebSocket.__isFlashLite() ? (c.style.left = '0px', c.style.top = '0px') : (c.style.left = '-100px', c.style.top = '-100px'), d = document.createElement('div'), d.id = 'webSocketFlash', c.appendChild(d), document.body.appendChild(c), swfobject.embedSWF(WEB_SOCKET_SWF_LOCATION, 'webSocketFlash', '1', '1', '10.0.0', null, null, {
        hasPriority: !0,
        swliveconnect: !0,
        allowScriptAccess: 'always'
      }, null, function(b) {
        b.success || a.error('[WebSocket] swfobject.embedSWF failed');
      });
    }
  }, WebSocket.__onFlashInitialized = function() {
    setTimeout(function() {
      WebSocket.__flash = document.getElementById('webSocketFlash'), WebSocket.__flash.setCallerUrl(location.href), WebSocket.__flash.setDebug(!!window.WEB_SOCKET_DEBUG);
      for (var a = 0; a < WebSocket.__tasks.length; ++a) WebSocket.__tasks[a]();
      WebSocket.__tasks = [];
    }, 0);
  }, WebSocket.__onFlashEvent = function() {
    return setTimeout(function() {
      var b, c;
      try {
        for (b = WebSocket.__flash.receiveEvents(), c = 0; c < b.length; ++c) WebSocket.__instances[b[c].webSocketId].__handleEvent(b[c]);
      } catch (d) {
        a.error(d);
      }
    }, 0), !0;
  }, WebSocket.__log = function(b) {
    a.log(decodeURIComponent(b));
  }, WebSocket.__error = function(b) {
    a.error(decodeURIComponent(b));
  }, WebSocket.__addTask = function(a) {
    WebSocket.__flash ? a() : WebSocket.__tasks.push(a);
  }, WebSocket.__isFlashLite = function() {
    if (!window.navigator || !window.navigator.mimeTypes) return !1;
    var a = window.navigator.mimeTypes['application/x-shockwave-flash'];
    return a && a.enabledPlugin && a.enabledPlugin.filename ? a.enabledPlugin.filename.match(/flashlite/i) ? !0 : !1 : !1;
  }, window.WEB_SOCKET_DISABLE_AUTO_INITIALIZATION || swfobject.addDomLoadEvent(function() {
    WebSocket.__initialize();
  }), void 0);
}(), isopenEmoji = !1, tick_heartpac = null, WEB_SOCKET_SWF_LOCATION = 'PLUG/WebSocketMain.swf', emoji = {
  '[最右]': 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/c8/lxhzuiyou_thumb.gif',
  '[泪流满面]': 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/64/lxhtongku_thumb.gif',
  '[江南style]': 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/67/gangnamstyle_thumb.gif',
  '[偷乐]': 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/fa/lxhtouxiao_thumb.gif',
  '[加油啊]': 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/03/lxhjiayou_thumb.gif',
  '[doge]': 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/b6/doge_thumb.gif',
  '[喵喵]': 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/4a/mm_thumb.gif',
  '[笑cry]': 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/34/xiaoku_thumb.gif',
  '[xkl转圈]': 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/f4/xklzhuanquan_thumb.gif',
  '[微笑]': 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/5c/huanglianwx_thumb.gif',
  '[嘻嘻]': 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/0b/tootha_thumb.gif',
  '[哈哈]': 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/6a/laugh.gif',
  '[可爱]': 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/14/tza_thumb.gif',
  '[可怜]': 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/af/kl_thumb.gif',
  '[挖鼻]': 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/0b/wabi_thumb.gif',
  '[吃惊]': 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/f4/cj_thumb.gif',
  '[害羞]': 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/6e/shamea_thumb.gif',
  '[挤眼]': 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/c3/zy_thumb.gif',
  '[闭嘴]': 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/29/bz_thumb.gif',
  '[鄙视]': 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/71/bs2_thumb.gif',
  '[爱你]': 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/6d/lovea_thumb.gif',
  '[泪]': 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/9d/sada_thumb.gif',
  '[偷笑]': 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/19/heia_thumb.gif',
  '[亲亲]': 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/8f/qq_thumb.gif',
  '[生病]': 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/b6/sb_thumb.gif',
  '[太开心]': 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/58/mb_thumb.gif',
  '[白眼]': 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/d9/landeln_thumb.gif',
  '[右哼哼]': 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/98/yhh_thumb.gif',
  '[左哼哼]': 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/6d/zhh_thumb.gif',
  '[嘘]': 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/a6/x_thumb.gif',
  '[衰]': 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/af/cry.gif',
  '[委屈]': 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/73/wq_thumb.gif',
  '[吐]': 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/9e/t_thumb.gif',
  '[哈欠]': 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/cc/haqianv2_thumb.gif',
  '[抱抱]': 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/27/bba_thumb.gif',
  '[怒]': 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/7c/angrya_thumb.gif',
  '[疑问]': 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/5c/yw_thumb.gif',
  '[馋嘴]': 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/a5/cza_thumb.gif',
  '[拜拜]': 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/70/88_thumb.gif',
  '[思考]': 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/e9/sk_thumb.gif',
  '[汗]': 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/24/sweata_thumb.gif',
  '[困]': 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/40/kunv2_thumb.gif',
  '[睡]': 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/96/huangliansj_thumb.gif',
  '[钱]': 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/90/money_thumb.gif',
  '[失望]': 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/0c/sw_thumb.gif',
  '[酷]': 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/40/cool_thumb.gif',
  '[色]': 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/20/huanglianse_thumb.gif',
  '[哼]': 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/49/hatea_thumb.gif',
  '[鼓掌]': 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/36/gza_thumb.gif',
  '[晕]': 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/d9/dizzya_thumb.gif',
  '[悲伤]': 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/1a/bs_thumb.gif',
  '[抓狂]': 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/62/crazya_thumb.gif',
  '[黑线]': 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/91/h_thumb.gif',
  '[阴险]': 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/6d/yx_thumb.gif',
  '[怒骂]': 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/60/numav2_thumb.gif',
  '[互粉]': 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/89/hufen_thumb.gif',
  '[心]': 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/40/hearta_thumb.gif',
  '[伤心]': 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/ea/unheart.gif',
  '[猪头]': 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/58/pig.gif',
  '[熊猫]': 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/6e/panda_thumb.gif',
  '[兔子]': 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/81/rabbit_thumb.gif',
  '[ok]': 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/d6/ok_thumb.gif',
  '[耶]': 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/d9/ye_thumb.gif',
  '[good]': 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/d8/good_thumb.gif',
  '[no]': 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/ae/buyao_org.gif',
  '[赞]': 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/d0/z2_thumb.gif',
  '[来]': 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/40/come_thumb.gif',
  '[弱]': 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/d8/sad_thumb.gif',
  '[草泥马]': 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/7a/shenshou_thumb.gif',
  '[神马]': 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/60/horse2_thumb.gif',
  '[囧]': 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/15/j_thumb.gif',
  '[浮云]': 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/bc/fuyun_thumb.gif',
  '[给力]': 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/1e/geiliv2_thumb.gif',
  '[围观]': 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/f2/wg_thumb.gif',
  '[威武]': 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/70/vw_thumb.gif',
  '[奥特曼]': 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/bc/otm_thumb.gif',
  '[礼物]': 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/c4/liwu_thumb.gif',
  '[钟]': 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/d3/clock_thumb.gif',
  '[话筒]': 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/9f/huatongv2_thumb.gif',
  '[蜡烛]': 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/d9/lazhuv2_thumb.gif'
}, $.fn.extend({
  insertAtCaret: function(a) {
    var c, d, e, b = $(this)[0];
    document.selection ? (this.focus(), sel = document.selection.createRange(), sel.text = a, this.focus()) : b.selectionStart || '0' == b.selectionStart ? (c = b.selectionStart, d = b.selectionEnd, e = b.scrollTop, b.value = b.value.substring(0, c) + a + b.value.substring(d, b.value.length), this.focus(), b.selectionStart = c + a.length, b.selectionEnd = c + a.length, b.scrollTop = e) : (this.value += a, this.focus());
  }
}), $(function() {
  fun_initEmoji(), $('#div_msg').width(window.innerWidth - 530), $('#div_msg').height(window.innerHeight - 200), $('#inp_send').keydown(function(a) {
    return 13 == a.keyCode && a.ctrlKey ? ($('#btn_send').trigger('click'), !1) : void 0;
  });
});
