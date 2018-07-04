
/**
 * @version		1.0.0
 * @author		Mahmoud Elnezamy
 * @copyright		2016 (c) jquery.pinBox
 * @license		MIT License
 *
 * The MIT License (MIT)
 *
 * Copyright (c) 2016 Mahmoud Elnezamy
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */
"function"!=typeof Object.create&&(Object.create=function(t){"use strict";function i(){}return i.prototype=t,new i}),function(t,i,n,e){"use strict";var o={Scroll:{},Window:{},init:function(i,n,e){this.opt=t.extend({},t.fn.pinBox.defaults,n),this.elem=i,this.Prepare(i),this.OnScroll(i),this.OnResize(i);var o=this;setTimeout(function(){for(var t=e.length-1;t>=0;t--)o.fixContainerHeight(e[t])},1e3)},Prepare:function(i){var n=t(i),e={},o={},a={},r=this.ExtractData(n),s=r.pinBoxOptions||this.opt||{};if(s.Disabled===!1){n.parent().is(".pinBox-wrapper")||(n.wrap("<div class='pinBox-wrapper'>"),n.parent().css({position:"relative"}));var p=n.closest(s.Container),d=p.offset();e.top=d.top,e.left=d.left,e.width=p.width(),e.height=p.height();var l=n.offsetParent().offset();o.top=l.top,o.left=l.left,n.parent().css("height",n.outerHeight()),a.width=n.outerWidth(),a.position="fixed",a.left=parseFloat(o.left),a.top=s.Top,a["z-index"]=s.ZIndex,n.data("pinBox",JSON.stringify(a)).data("pinBoxOptions",JSON.stringify(s)).data("pinBoxParent",JSON.stringify(o)).data("pinBoxContainer",JSON.stringify(e))}},ExtractData:function(t){var i={},n=t.data("pinBox")||{},e=t.data("pinBoxOptions")||{},o=t.data("pinBoxParent")||{},a=t.data("pinBoxContainer")||{};return"string"==typeof n&&(i.pinBox=JSON.parse(n)),"string"==typeof e&&(i.pinBoxOptions=JSON.parse(e)),"string"==typeof o&&(i.pinBoxParent=JSON.parse(o)),"string"==typeof a&&(i.pinBoxContainer=JSON.parse(a)),i},OnScroll:function(n){var e=this;t(i).scroll(function(){var o=t(n),a=t(this).scrollTop(),r=e.ExtractData(o),s=r.pinBox,p=r.pinBoxOptions,d=r.pinBoxParent,l=r.pinBoxContainer;if(e.Scroll.direction=a>e.Scroll.current?"down":"up",e.Scroll.current=a,e.Window.width=i.innerWidth||t(i).width(),a>l.top-parseInt(p.Top)&&e.Window.width>parseInt(p.MinWidth)){p.Disabled=!1;var c=o.closest(p.Container).height()-o.outerHeight(),h=(d.top||l.top)+c-parseInt(p.Top);a>h?o.attr("style","").css({width:s.width,position:"absolute",top:c}):o.css(s),e.CallEvents(o,!0,p.Disabled)}else e.Window.width<=parseInt(p.MinWidth)?p.Disabled===!1&&(o.attr("style","").unwrap(".pinBox-wrapper"),p.Disabled=!0):o.attr("style","").css({width:s.width}),e.CallEvents(o,!1,p.Disabled);o.data("pinBoxOptions",JSON.stringify(p))})},OnResize:function(n){var e=this,o=t(n);t(i).resize(function(){var a=e.ExtractData(o),r=a.pinBoxOptions;if(e.Window.width=i.innerWidth||t(i).width(),r.Disabled=e.Window.width>parseInt(r.MinWidth)?!1:!0,r.Disabled===!1){var s=o.parent().width();o.attr("style","").css({width:s})}else o.attr("style","");o.data("pinBoxOptions",JSON.stringify(r)),e.Prepare(n),e.CallEvents(o,!0,r.Disabled)})},CallEvents:function(t,i,n){var e=this;i?t.addClass("active"):t.removeClass("active"),"function"==typeof e.opt.Events&&e.opt.Events.call(t,{current:e.Scroll.current,direction:e.Scroll.direction,width:e.Window.width,active:i,disabled:n})},fixContainerHeight:function(n){var e=this,o=t(n),a=e.ExtractData(o),r=a.pinBoxOptions,s=a.pinBoxParent,p=a.pinBoxContainer,d=t(i).scrollTop(),l=o.closest(r.Container).height()-o.outerHeight(),c=(s.top||p.top)+l-parseInt(r.Top);d>c&&o.attr("style","").css({width:a.pinBox.width,position:"absolute",top:l,transition:".3s"})}};t.fn.pinBox=function(t){var i=[],n=Object.create(o);this.each(function(){i.push(this),n.init(this,t,i)})},t.fn.pinBox.defaults={Container:".container",Top:0,ZIndex:20,MinWidth:"767px",Events:!1,Disabled:!1}}(jQuery,window,document);
