(function(g){var window=this;'use strict';var vIa=function(a,b){a.La("onAutonavCoundownStarted",b)},f3=function(a,b,c){var d=b.Za();
g.L(a.element,"ytp-suggestion-set",!!d.videoId);var e=b.getPlaylistId();c=b.df(c?c:"mqdefault.jpg");var f=null,h=null;b instanceof g.eG&&(b.lengthText?(f=b.lengthText||null,h=b.dx||null):b.lengthSeconds&&(f=g.qK(b.lengthSeconds),h=g.qK(b.lengthSeconds,!0)));var l=!!e;e=l&&"RD"===(new g.ML(e.substr(0,2),e.substr(2))).type;var m=b instanceof g.eG?b.isLivePlayback:null,n=b instanceof g.eG?b.isUpcoming:null;d={title:b.title,author:b.author,author_and_views:d.shortViewCount?b.author+" \u2022 "+d.shortViewCount:
b.author,aria_label:b.Os||g.jI("Watch $TITLE",{TITLE:b.title}),duration:f,timestamp:h,url:b.Zm(),is_live:m,is_upcoming:n,is_list:l,is_mix:e,background:c?"background-image: url("+c+")":"",views_and_publish_time:d.shortViewCount?d.shortViewCount+" \u2022 "+d.publishedTimeText:d.publishedTimeText,autoplayAlternativeHeader:b.Rs};b instanceof g.NL&&(d.playlist_length=b.length);a.update(d)},g3=function(a){var b=a.T(),c=b.l;
g.W.call(this,{D:"a",K:"ytp-autonav-suggestion-card",U:{href:"{{url}}",target:c?b.C:"","aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}","data-is-upcoming":"{{is_upcoming}}"},S:[{D:"div",Ba:["ytp-autonav-endscreen-upnext-thumbnail","ytp-autonav-thumbnail-small"],U:{style:"{{background}}"},S:[{D:"div",U:{"aria-label":"{{timestamp}}"},Ba:["ytp-autonav-timestamp"],ma:"{{duration}}"},{D:"div",Ba:["ytp-autonav-live-stamp"],ma:"Live"},{D:"div",
Ba:["ytp-autonav-upcoming-stamp"],ma:"Upcoming"},{D:"div",K:"ytp-autonav-list-overlay",S:[{D:"div",K:"ytp-autonav-mix-text",ma:"Mix"},{D:"div",K:"ytp-autonav-mix-icon"}]}]},{D:"div",Ba:["ytp-autonav-endscreen-upnext-title","ytp-autonav-title-card"],ma:"{{title}}"},{D:"div",Ba:["ytp-autonav-endscreen-upnext-author","ytp-autonav-author-card"],ma:"{{author}}"},{D:"div",Ba:["ytp-autonav-endscreen-upnext-author","ytp-autonav-view-and-date-card"],ma:"{{views_and_publish_time}}"}]});this.G=a;this.suggestion=
null;this.i=c;this.Na("click",this.onClick);this.Na("keypress",this.l)},i3=function(a,b){b=void 0===b?!1:b;
g.W.call(this,{D:"div",K:"ytp-autonav-endscreen-countdown-container"});var c=this;this.C=b;this.l=0;b=a.T();var d=b.l;this.G=a;this.suggestion=null;this.i=new g.W({D:"div",K:"ytp-autonav-endscreen-upnext-container",U:{"aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}","data-is-upcoming":"{{is_upcoming}}"},S:[{D:"div",K:"ytp-autonav-endscreen-upnext-header"},{D:"div",K:"ytp-autonav-endscreen-upnext-alternative-header",ma:"{{autoplayAlternativeHeader}}"},
{D:"a",K:"ytp-autonav-endscreen-link-container",U:{href:"{{url}}",target:d?b.C:""},S:[{D:"div",K:"ytp-autonav-endscreen-upnext-thumbnail",U:{style:"{{background}}"},S:[{D:"div",U:{"aria-label":"{{timestamp}}"},Ba:["ytp-autonav-timestamp"],ma:"{{duration}}"},{D:"div",Ba:["ytp-autonav-live-stamp"],ma:"Live"},{D:"div",Ba:["ytp-autonav-upcoming-stamp"],ma:"Upcoming"}]},{D:"div",K:"ytp-autonav-endscreen-video-info",S:[{D:"div",K:"ytp-autonav-endscreen-premium-badge"},{D:"div",K:"ytp-autonav-endscreen-upnext-title",
ma:"{{title}}"},{D:"div",K:"ytp-autonav-endscreen-upnext-author",ma:"{{author}}"},{D:"div",K:"ytp-autonav-view-and-date",ma:"{{views_and_publish_time}}"},{D:"div",K:"ytp-autonav-author-and-view",ma:"{{author_and_views}}"}]}]}]});g.H(this,this.i);this.i.xa(this.element);d||this.N(this.i.ya("ytp-autonav-endscreen-link-container"),"click",this.zE);this.G.Zb(this.element,this,115127);this.G.Zb(this.i.ya("ytp-autonav-endscreen-link-container"),this,115128);this.overlay=new g.W({D:"div",K:"ytp-autonav-overlay"});
g.H(this,this.overlay);this.overlay.xa(this.element);this.u=new g.W({D:"div",K:"ytp-autonav-endscreen-button-container"});g.H(this,this.u);this.u.xa(this.element);this.cancelButton=new g.W({D:"button",Ba:["ytp-autonav-endscreen-upnext-button","ytp-autonav-endscreen-upnext-cancel-button"],U:{"aria-label":"Cancel autoplay"},ma:"Cancel"});g.H(this,this.cancelButton);this.cancelButton.xa(this.u.element);this.cancelButton.Na("click",this.tM,this);this.G.Zb(this.cancelButton.element,this,115129);this.playButton=
new g.W({D:"a",Ba:["ytp-autonav-endscreen-upnext-button","ytp-autonav-endscreen-upnext-play-button"],U:{href:"{{url}}",role:"button","aria-label":"Play next video"},ma:"Play Now"});g.H(this,this.playButton);this.playButton.xa(this.u.element);this.playButton.Na("click",this.zE,this);this.G.Zb(this.playButton.element,this,115130);this.B=new g.J(function(){h3(c)},500);
g.H(this,this.B);this.yE();this.N(a,"autonavvisibility",this.yE)},h3=function(a){var b=j3(a),c=Math.min(a.l?Date.now()-a.l:0,b);
k3(a,Math.ceil((b-c)/1E3));500>=b-c&&a.Ph()?a.select(!0):a.Ph()&&a.B.start()},j3=function(a){var b=a.G.To();
return 0<=b?b:g.T(a.G.T().experiments,"autoplay_time")||1E4},k3=function(a,b){b=void 0===b?-1:b;
a=a.i.ya("ytp-autonav-endscreen-upnext-header");g.He(a);if(0<=b){b=String(b);var c="Up next in $SECONDS".match(/\$SECONDS/gi)[0],d="Up next in $SECONDS".indexOf(c);if(0<=d){a.appendChild(g.Ge("Up next in $SECONDS".slice(0,d)));var e=g.Fe("span");g.jn(e,"ytp-autonav-endscreen-upnext-header-countdown-number");g.Ne(e,b);a.appendChild(e);a.appendChild(g.Ge("Up next in $SECONDS".slice(d+c.length)));return}}g.Ne(a,"Up next")},l3=function(a,b){g.W.call(this,{D:"div",
Ba:["html5-endscreen","ytp-player-content",b||"base-endscreen"]});this.created=!1;this.player=a},n3=function(a){g.W.call(this,{D:"div",
Ba:["ytp-upnext","ytp-player-content"],U:{"aria-label":"{{aria_label}}"},S:[{D:"div",K:"ytp-cued-thumbnail-overlay-image",U:{style:"{{background}}"}},{D:"span",K:"ytp-upnext-top",S:[{D:"span",K:"ytp-upnext-header",ma:"Up Next"},{D:"span",K:"ytp-upnext-title",ma:"{{title}}"},{D:"span",K:"ytp-upnext-author",ma:"{{author}}"}]},{D:"a",K:"ytp-upnext-autoplay-icon",U:{role:"button",href:"{{url}}","aria-label":"Play next video"},S:[{D:"svg",U:{height:"100%",version:"1.1",viewBox:"0 0 72 72",width:"100%"},
S:[{D:"circle",K:"ytp-svg-autoplay-circle",U:{cx:"36",cy:"36",fill:"#fff","fill-opacity":"0.3",r:"31.5"}},{D:"circle",K:"ytp-svg-autoplay-ring",U:{cx:"-36",cy:"36","fill-opacity":"0",r:"33.5",stroke:"#FFFFFF","stroke-dasharray":"211","stroke-dashoffset":"-211","stroke-width":"4",transform:"rotate(-90)"}},{D:"path",K:"ytp-svg-fill",U:{d:"M 24,48 41,36 24,24 V 48 z M 44,24 v 24 h 4 V 24 h -4 z"}}]}]},{D:"span",K:"ytp-upnext-bottom",S:[{D:"span",K:"ytp-upnext-cancel"},{D:"span",K:"ytp-upnext-paused",
ma:"Autoplay is paused"}]}]});this.api=a;this.cancelButton=null;this.C=this.ya("ytp-svg-autoplay-ring");this.u=this.notification=this.i=this.suggestion=null;this.B=new g.J(this.dw,5E3,this);this.l=0;var b=this.ya("ytp-upnext-cancel");this.cancelButton=new g.W({D:"button",Ba:["ytp-upnext-cancel-button","ytp-button"],U:{tabindex:"0","aria-label":"Cancel autoplay"},ma:"Cancel"});g.H(this,this.cancelButton);this.cancelButton.Na("click",this.uM,this);this.cancelButton.xa(b);this.cancelButton&&this.api.Zb(this.cancelButton.element,
this,115129);g.H(this,this.B);this.api.Zb(this.element,this,18788);b=this.ya("ytp-upnext-autoplay-icon");this.N(b,"click",this.vM);this.api.Zb(b,this,115130);this.AE();this.N(a,"autonavvisibility",this.AE);this.N(a,"mdxnowautoplaying",this.OQ);this.N(a,"mdxautoplaycanceled",this.PQ);this.N(a,"mdxautoplayupnext",this.wK);m3(this)&&(a=(a=g.EL(this.api.ob()))?a.oO():null)&&this.wK(a);g.L(this.element,"ytp-upnext-mobile",this.api.T().i)},m3=function(a){return 3===a.api.getPresentingPlayerType()},wIa=
function(a,b){return b?b:0<=a.api.To()?a.api.To():g.T(a.api.T().experiments,"autoplay_time")||1E4},o3=function(a,b){b=wIa(a,b);
var c=Math,d=c.min;var e=(0,g.N)()-a.l;c=d.call(c,e,b);b=0===b?1:Math.min(c/b,1);a.C.setAttribute("stroke-dashoffset",""+-211*(b+1));1<=b&&a.Ph()&&!m3(a)?a.select(!0):a.Ph()&&a.i.start()},p3=function(a){l3.call(this,a,"autonav-endscreen");
this.overlay=this.videoData=this.suggestions=null;this.table=new g.W({D:"div",K:"ytp-suggestion-panel",S:[{D:"div",Ba:["ytp-autonav-endscreen-upnext-header","ytp-autonav-endscreen-more-videos"],ma:"More videos"}]});this.J=new g.W({D:"div",K:"ytp-suggestions-container"});this.videos=[];this.u=null;this.C=this.I=!1;this.l=new i3(this.player);g.H(this,this.l);this.l.xa(this.element);a.getVideoData().Mc?this.i=this.l:(this.i=new n3(a),g.IL(this.player,this.i.element,4),g.H(this,this.i));this.overlay=
new g.W({D:"div",K:"ytp-autonav-overlay-cancelled-state"});g.H(this,this.overlay);this.overlay.xa(this.element);this.B=new g.KL(this);g.H(this,this.B);g.H(this,this.table);this.table.xa(this.element);this.table.show();g.H(this,this.J);this.J.xa(this.table.element);this.hide()},xIa=function(a,b){return g.Pc(b.suggestions,function(c){c=g.gO(a.player.T(),c);
g.H(a,c);return c})},q3=function(a){var b=a.Yd();
b!==a.C&&(a.C=b,a.player.V("autonavvisibility"),a.C?(a.l!==a.i&&a.l.hide(),a.table.hide()):(a.l!==a.i&&a.l.show(),a.table.show()))},r3=function(a){l3.call(this,a,"subscribecard-endscreen");
this.i=new g.W({D:"div",K:"ytp-subscribe-card",S:[{D:"img",K:"ytp-author-image",U:{src:"{{profilePicture}}"}},{D:"div",K:"ytp-subscribe-card-right",S:[{D:"div",K:"ytp-author-name",ma:"{{author}}"},{D:"div",K:"html5-subscribe-button-container"}]}]});g.H(this,this.i);this.i.xa(this.element);var b=a.getVideoData();this.subscribeButton=new g.UM("Subscribe",null,"Unsubscribe",null,!0,!1,b.Yh,b.subscribed,"trailer-endscreen",null,null,a);g.H(this,this.subscribeButton);this.subscribeButton.xa(this.i.ya("html5-subscribe-button-container"));
this.N(a,"videodatachange",this.Ja);this.Ja();this.hide()},s3=function(a){var b=a.T(),c=g.xB||g.jg?{style:"will-change: opacity"}:void 0,d=b.l,e=["ytp-videowall-still"];
b.i&&e.push("ytp-videowall-show-text");g.W.call(this,{D:"a",Ba:e,U:{href:"{{url}}",target:d?b.C:"","aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}"},S:[{D:"div",K:"ytp-videowall-still-image",U:{style:"{{background}}"}},{D:"span",K:"ytp-videowall-still-info",S:[{D:"span",K:"ytp-videowall-still-info-bg",S:[{D:"span",K:"ytp-videowall-still-info-content",U:c,S:[{D:"span",K:"ytp-videowall-still-info-title",ma:"{{title}}"},{D:"span",K:"ytp-videowall-still-info-author",
ma:"{{author_and_views}}"},{D:"span",K:"ytp-videowall-still-info-live",ma:"Live"},{D:"span",K:"ytp-videowall-still-info-duration",ma:"{{duration}}"}]}]}]},{D:"span",Ba:["ytp-videowall-still-listlabel-regular","ytp-videowall-still-listlabel"],S:[{D:"span",K:"ytp-videowall-still-listlabel-icon"},"Playlist",{D:"span",K:"ytp-videowall-still-listlabel-length",S:[" (",{D:"span",ma:"{{playlist_length}}"},")"]}]},{D:"span",Ba:["ytp-videowall-still-listlabel-mix","ytp-videowall-still-listlabel"],S:[{D:"span",
K:"ytp-videowall-still-listlabel-mix-icon"},"Mix",{D:"span",K:"ytp-videowall-still-listlabel-length",ma:" (50+)"}]}]});this.suggestion=null;this.l=d;this.api=a;this.i=new g.KL(this);g.H(this,this.i);this.Na("click",this.onClick);this.Na("keypress",this.u);this.i.N(a,"videodatachange",this.fb);a.hh(this.element,this);this.fb()},t3=function(a){l3.call(this,a,"videowall-endscreen");
var b=this;this.G=a;this.u=0;this.stills=[];this.B=this.videoData=this.suggestions=null;this.C=this.J=!1;this.L=null;this.l=new g.KL(this);g.H(this,this.l);this.I=new g.J(function(){g.K(b.element,"ytp-show-tiles")},0);
g.H(this,this.I);var c=new g.W({D:"button",Ba:["ytp-button","ytp-endscreen-previous"],U:{"aria-label":"Previous"},S:[g.PJ()]});g.H(this,c);c.xa(this.element);c.Na("click",this.zM,this);this.table=new g.HJ({D:"div",K:"ytp-endscreen-content"});g.H(this,this.table);this.table.xa(this.element);c=new g.W({D:"button",Ba:["ytp-button","ytp-endscreen-next"],U:{"aria-label":"Next"},S:[g.QJ()]});g.H(this,c);c.xa(this.element);c.Na("click",this.yM,this);a.getVideoData().Mc?this.i=new i3(a,!0):this.i=new n3(a);
g.H(this,this.i);g.IL(this.player,this.i.element,4);this.hide()},u3=function(a){return g.JL(a.player)&&a.Qs()&&!a.B},yIa=function(a,b){return g.Pc(b.suggestions,function(c){c=g.gO(a.G.T(),c);
g.H(a,c);return c})},v3=function(a){var b=a.Yd();
b!==a.J&&(a.J=b,a.player.V("autonavvisibility"))},w3=function(a){g.SL.call(this,a);
var b=this;this.endScreen=null;this.i=this.l=this.u=!1;this.listeners=new g.KL(this);g.H(this,this.listeners);this.env=a.T();zIa(a)?(this.u=!0,AIa(this),this.i?this.endScreen=new p3(a):this.endScreen=new t3(this.player)):this.env.Wc?this.endScreen=new r3(this.player):this.endScreen=new l3(this.player);g.H(this,this.endScreen);g.IL(this.player,this.endScreen.element,4);BIa(this);this.listeners.N(a,"videodatachange",this.fb,this);this.listeners.N(a,g.yw("endscreen"),function(c){b.je(c)});
this.listeners.N(a,g.zw("endscreen"),function(c){b.ag(c)})},AIa=function(a){var b=a.player.getVideoData();
if(!b||a.i===b.Rf&&a.l===b.Mc)return!1;a.i=b.Rf;a.l=b.Mc;return!0},zIa=function(a){a=a.T();
return a.Fb&&!a.Wc},BIa=function(a){a.player.Cf("endscreen");
var b=a.player.getVideoData();b=new g.vw(Math.max(1E3*(b.lengthSeconds-10),0),0x8000000000000,{id:"preload",namespace:"endscreen"});var c=new g.vw(0x8000000000000,0x8000000000000,{id:"load",priority:6,namespace:"endscreen"});a.player.Ud([b,c])};
g.BL.prototype.To=g.ca(4,function(){return this.app.To()});
g.VV.prototype.To=g.ca(3,function(){return this.getVideoData().hF});
g.v(g3,g.W);g3.prototype.select=function(){(this.G.Rj(this.suggestion.Za().videoId,this.suggestion.le,this.suggestion.getPlaylistId(),void 0,void 0,this.suggestion.zA||void 0)||this.G.Z("web_player_endscreen_double_log_fix_killswitch"))&&this.G.Kb(this.element)};
g3.prototype.onClick=function(a){g.lM(a,this.G,this.i,this.suggestion.le||void 0)&&this.select()};
g3.prototype.l=function(a){switch(a.keyCode){case 13:case 32:g.jp(a)||(this.select(),g.ip(a))}};
g3.prototype.Ie=function(a){g.L(this.element,"ytp-suggestion-card-with-margin",a)};g.v(i3,g.W);g.k=i3.prototype;g.k.Gs=function(a){this.suggestion!==a&&(this.suggestion=a,f3(this.i,a),this.playButton.Oa("url",this.suggestion.Zm()),this.Ie())};
g.k.Ie=function(){var a=this.G.nj(!0,this.G.isFullscreen());g.L(this.element,"ytp-autonav-endscreen-small-mode",this.kf(a));g.L(this.element,"ytp-autonav-endscreen-is-premium",!!this.suggestion&&!!this.suggestion.ly);g.L(this.G.getRootNode(),"ytp-autonav-endscreen-cancelled-state",!this.G.Yd());g.L(this.G.getRootNode(),"countdown-running",this.Ph());g.L(this.element,"ytp-player-content",this.G.Yd());g.gg(this.overlay.element,{width:a.width+"px"});if(!this.Ph()){this.G.Yd()?k3(this,Math.round(j3(this)/
1E3)):k3(this);a=!!this.suggestion&&!!this.suggestion.Rs;var b=this.G.Yd()||!a;g.L(this.element,"ytp-autonav-endscreen-upnext-alternative-header-only",!b&&a);g.L(this.element,"ytp-autonav-endscreen-upnext-no-alternative-header",b&&!a);g.KJ(this.u,this.G.Yd())}};
g.k.Ph=function(){return 0<this.l};
g.k.Ur=function(){this.Ph()||(this.l=Date.now(),h3(this),vIa(this.G,j3(this)),g.L(this.G.getRootNode(),"countdown-running",this.Ph()))};
g.k.Cp=function(){this.gm();h3(this)};
g.k.gm=function(){this.Ph()&&(this.B.stop(),this.l=0)};
g.k.select=function(a){this.G.nextVideo(!1,void 0===a?!1:a);this.gm()};
g.k.zE=function(a){g.lM(a,this.G)&&(a.currentTarget===this.playButton.element?this.G.Kb(this.playButton.element):a.currentTarget===this.i.ya("ytp-autonav-endscreen-link-container")&&(a=this.i.ya("ytp-autonav-endscreen-link-container"),this.G.eb(a,!0),this.G.Kb(a)),this.select())};
g.k.tM=function(){this.G.Kb(this.cancelButton.element);g.DL(this.G,!0)};
g.k.yE=function(){var a=this.G.Yd();this.C&&this.vb!==a&&g.KJ(this,a);this.Ie();this.G.eb(this.element,a);this.G.eb(this.cancelButton.element,a);this.G.eb(this.i.ya("ytp-autonav-endscreen-link-container"),a);this.G.eb(this.playButton.element,a)};
g.k.kf=function(a){return 400>a.width||459>a.height};g.v(l3,g.W);g.k=l3.prototype;g.k.create=function(){this.created=!0};
g.k.destroy=function(){this.created=!1};
g.k.Qs=function(){return!1};
g.k.Yd=function(){return!1};
g.k.tH=function(){return!1};g.v(n3,g.W);g.k=n3.prototype;g.k.dw=function(){this.notification&&(this.B.stop(),this.hc(this.u),this.u=null,this.notification.close(),this.notification=null)};
g.k.Gs=function(a){this.suggestion=a;f3(this,a,"hqdefault.jpg")};
g.k.AE=function(){g.KJ(this,this.api.Yd());this.api.eb(this.element,this.api.Yd());this.api.eb(this.ya("ytp-upnext-autoplay-icon"),this.api.Yd());this.cancelButton&&this.api.eb(this.cancelButton.element,this.api.Yd())};
g.k.bR=function(){window.focus();this.dw()};
g.k.Ur=function(a){var b=this;this.Ph()||(g.Ko("a11y-announce","Up Next "+this.suggestion.title),this.l=(0,g.N)(),this.i=new g.J(function(){o3(b,a)},25),o3(this,a),vIa(this.api,wIa(this,a)));
g.mn(this.element,"ytp-upnext-autoplay-paused")};
g.k.hide=function(){g.W.prototype.hide.call(this)};
g.k.Ph=function(){return!!this.i};
g.k.Cp=function(){this.gm();this.l=(0,g.N)();o3(this);g.K(this.element,"ytp-upnext-autoplay-paused")};
g.k.gm=function(){this.Ph()&&(this.i.dispose(),this.i=null)};
g.k.select=function(a){a=void 0===a?!1:a;if(g.S(this.api.T().experiments,"autonav_notifications")&&a&&window.Notification&&document.hasFocus){var b=Notification.permission;"default"===b?Notification.requestPermission():"granted"!==b||document.hasFocus()||(b=this.suggestion.Za(),this.dw(),this.notification=new Notification("Up Next",{body:b.title,icon:b.df()}),this.u=this.N(this.notification,"click",this.bR),this.B.start())}this.gm();this.api.nextVideo(!1,a)};
g.k.vM=function(a){!g.Me(this.cancelButton.element,g.ep(a))&&g.lM(a,this.api)&&(this.api.Yd()&&this.api.Kb(this.ya("ytp-upnext-autoplay-icon")),this.select())};
g.k.uM=function(){this.api.Yd()&&this.cancelButton&&this.api.Kb(this.cancelButton.element);g.DL(this.api,!0)};
g.k.OQ=function(a){m3(this);this.show();this.Ur(a)};
g.k.wK=function(a){m3(this);this.suggestion&&this.suggestion.Za().videoId===a.Za().videoId||this.Gs(a)};
g.k.PQ=function(){m3(this);this.gm();this.hide()};
g.k.oa=function(){this.gm();this.dw();g.W.prototype.oa.call(this)};g.v(p3,l3);g.k=p3.prototype;g.k.create=function(){l3.prototype.create.call(this);this.B.N(this.player,"appresize",this.Ie);this.B.N(this.player,"onVideoAreaChange",this.Ie);this.B.N(this.player,"videodatachange",this.fb);this.B.N(this.player,"autonavchange",this.BE);this.B.N(this.player,"autonavcancel",this.wM);this.fb()};
g.k.show=function(){l3.prototype.show.call(this);(this.I||this.u&&this.u!==this.videoData.clientPlaybackNonce)&&g.DL(this.player,!1);g.JL(this.player)&&this.Qs()&&!this.u?(q3(this),2===this.videoData.autonavState?this.player.T().Z("fast_autonav_in_background")&&3===this.player.getVisibilityState()?this.i.select(!0):this.i.Ur():3===this.videoData.autonavState&&this.i.Cp()):(g.DL(this.player,!0),q3(this));this.Ie()};
g.k.hide=function(){l3.prototype.hide.call(this);this.i.Cp();q3(this)};
g.k.Ie=function(){var a=this.player.nj(!0,this.player.isFullscreen());q3(this);this.l.Ie();g.L(this.element,"ytp-autonav-cancelled-small-mode",this.kf(a));g.L(this.element,"ytp-autonav-cancelled-tiny-mode",this.Xw(a));g.L(this.element,"ytp-autonav-cancelled-mini-mode",400>=a.width||360>=a.height);this.overlay&&g.gg(this.overlay.element,{width:a.width+"px"});if(!this.C){a=g.q(this.videos.entries());for(var b=a.next();!b.done;b=a.next()){b=g.q(b.value);var c=b.next().value;b.next().value.Ie(1===c%2)}}};
g.k.fb=function(){var a=this.player.getVideoData();if(this.videoData!==a&&a){this.videoData=a;if((this.suggestions=xIa(this,a))&&this.suggestions.length)for(this.i.Gs(this.suggestions[0]),this.i!==this.l&&this.l.Gs(this.suggestions[0]),a=0;a<CIa.length;++a){var b=CIa[a];if(this.suggestions&&this.suggestions[b]){this.videos[a]=new g3(this.player);var c=this.videos[a];b=this.suggestions[b];c.suggestion!==b&&(c.suggestion=b,f3(c,b));g.H(this,this.videos[a]);this.videos[a].xa(this.J.element)}}this.Ie()}};
g.k.BE=function(a){1===a?(this.I=!1,this.u=this.videoData.clientPlaybackNonce,this.i.gm(),this.vb&&this.Ie()):(this.I=!0,this.Yd()&&(2===a?this.i.Ur():3===a&&this.i.Cp()))};
g.k.wM=function(a){a?this.BE(1):(this.u=null,this.I=!1)};
g.k.Qs=function(){return 1!==this.videoData.autonavState};
g.k.kf=function(a){return(910>a.width||459>a.height)&&!this.Xw(a)&&!(400>=a.width||360>=a.height)};
g.k.Xw=function(a){return 800>a.width&&!(400>=a.width||360>=a.height)};
g.k.Yd=function(){return this.vb&&g.JL(this.player)&&this.Qs()&&!this.u};
var CIa=[1,3,2,4];g.v(r3,l3);r3.prototype.Ja=function(){var a=this.player.getVideoData();this.i.update({profilePicture:a.Yg,author:a.author});this.subscribeButton.channelId=a.Yh;var b=this.subscribeButton;a.subscribed?b.l():b.u()};g.v(s3,g.W);s3.prototype.select=function(){(this.api.Rj(this.suggestion.Za().videoId,this.suggestion.le,this.suggestion.getPlaylistId(),void 0,void 0,this.suggestion.zA||void 0)||this.api.Z("web_player_endscreen_double_log_fix_killswitch"))&&this.api.Kb(this.element)};
s3.prototype.onClick=function(a){g.lM(a,this.api,this.l,this.suggestion.le||void 0)&&this.select()};
s3.prototype.u=function(a){switch(a.keyCode){case 13:case 32:g.jp(a)||(this.select(),g.ip(a))}};
s3.prototype.fb=function(){var a=this.api.getVideoData(),b=this.api.T();this.l=a.C?!1:b.l};g.v(t3,l3);g.k=t3.prototype;g.k.create=function(){l3.prototype.create.call(this);var a=this.player.getVideoData();a&&(this.suggestions=yIa(this,a),this.videoData=a);this.Ie();this.l.N(this.player,"appresize",this.Ie);this.l.N(this.player,"onVideoAreaChange",this.Ie);this.l.N(this.player,"videodatachange",this.fb);this.l.N(this.player,"autonavchange",this.zz);this.l.N(this.player,"autonavcancel",this.xM);a=this.videoData.autonavState;a!==this.L&&this.zz(a);this.l.N(this.element,"transitionend",this.oS)};
g.k.destroy=function(){g.du(this.l);g.wi(this.stills);this.stills=[];this.suggestions=null;l3.prototype.destroy.call(this);g.mn(this.element,"ytp-show-tiles");this.I.stop();this.L=this.videoData.autonavState};
g.k.Qs=function(){return 1!==this.videoData.autonavState};
g.k.show=function(){l3.prototype.show.call(this);g.mn(this.element,"ytp-show-tiles");this.player.T().i?this.I.jh():this.I.start();(this.C||this.B&&this.B!==this.videoData.clientPlaybackNonce)&&g.DL(this.player,!1);u3(this)?(v3(this),2===this.videoData.autonavState?this.player.T().Z("fast_autonav_in_background")&&3===this.player.getVisibilityState()?this.i.select(!0):this.i.Ur():3===this.videoData.autonavState&&this.i.Cp()):(g.DL(this.player,!0),v3(this))};
g.k.hide=function(){l3.prototype.hide.call(this);this.i.Cp();v3(this)};
g.k.oS=function(a){g.ep(a)===this.element&&this.Ie()};
g.k.Ie=function(){if(this.suggestions&&this.suggestions.length){g.K(this.element,"ytp-endscreen-paginate");var a=this.G.nj(!0,this.G.isFullscreen()),b=g.yL(this.G);b&&(b=b.Ve()?48:32,a.width-=2*b);var c=a.width/a.height,d=96/54,e=b=2,f=Math.max(a.width/96,2),h=Math.max(a.height/54,2),l=this.suggestions.length,m=Math.pow(2,2);var n=l*m+(Math.pow(2,2)-m);n+=Math.pow(2,2)-m;for(n-=m;0<n&&(b<f||e<h);){var p=b/2,r=e/2,t=b<=f-2&&n>=r*m,u=e<=h-2&&n>=p*m;if((p+1)/r*d/c>c/(p/(r+1)*d)&&u)n-=p*m,e+=2;else if(t)n-=
r*m,b+=2;else if(u)n-=p*m,e+=2;else break}d=!1;n>=3*m&&6>=l*m-n&&(4<=e||4<=b)&&(d=!0);m=96*b;n=54*e;c=m/n<c?a.height/n:a.width/m;c=Math.min(c,2);m=Math.floor(Math.min(a.width,m*c));n=Math.floor(Math.min(a.height,n*c));a=this.table.element;g.vg(a,m,n);g.gg(a,{marginLeft:m/-2+"px",marginTop:n/-2+"px"});this.i.Gs(this.suggestions[0]);this.i instanceof i3&&this.i.Ie();g.L(this.element,"ytp-endscreen-takeover",u3(this));v3(this);m+=4;n+=4;for(f=c=0;f<b;f++)for(h=0;h<e;h++)if(p=c,r=0,d&&f>=b-2&&h>=e-2?
r=1:0===h%2&&0===f%2&&(2>h&&2>f?0===h&&0===f&&(r=2):r=2),p=g.ce(p+this.u,l),0!==r){t=this.stills[c];t||(t=new s3(this.player),this.stills[c]=t,a.appendChild(t.element));u=Math.floor(n*h/e);var x=Math.floor(m*f/b),y=Math.floor(n*(h+r)/e)-u-4,E=Math.floor(m*(f+r)/b)-x-4;g.og(t.element,x,u);g.vg(t.element,E,y);g.gg(t.element,"transitionDelay",(h+f)/20+"s");g.L(t.element,"ytp-videowall-still-mini",1===r);g.L(t.element,"ytp-videowall-still-large",2<r);r=t;p=this.suggestions[p];r.suggestion!==p&&(r.suggestion=
p,t=r.api.T(),u=g.kn(r.element,"ytp-videowall-still-large")?"hqdefault.jpg":"mqdefault.jpg",f3(r,p,u),g.CD(t)&&(t=p.Zm(),t=g.Ld(t,g.QM("emb_rel_end")),r.Oa("url",t)),(p=(p=p.le)&&p.itct)&&r.api.em(r.element,p));c++}g.L(this.element,"ytp-endscreen-paginate",c<l);for(b=this.stills.length-1;b>=c;b--)e=this.stills[b],g.Je(e.element),g.vi(e);this.stills.length=c}};
g.k.fb=function(){var a=this.player.getVideoData();this.videoData!==a&&(this.u=0,this.suggestions=yIa(this,a),this.videoData=a,this.Ie())};
g.k.yM=function(){this.u+=this.stills.length;this.Ie()};
g.k.zM=function(){this.u-=this.stills.length;this.Ie()};
g.k.tH=function(){return this.i.Ph()};
g.k.zz=function(a){1===a?(this.C=!1,this.B=this.videoData.clientPlaybackNonce,this.i.gm(),this.vb&&this.Ie()):(this.C=!0,this.vb&&u3(this)&&(2===a?this.i.Ur():3===a&&this.i.Cp()))};
g.k.xM=function(a){if(a){for(a=0;a<this.stills.length;a++)this.G.eb(this.stills[a].element,!0);this.zz(1)}else this.B=null,this.C=!1;this.Ie()};
g.k.Yd=function(){return this.vb&&u3(this)};g.v(w3,g.SL);g.k=w3.prototype;g.k.Mp=function(){var a=this.player.getVideoData(),b=!!(a&&a.suggestions&&a.suggestions.length);b=!zIa(this.player)||b;var c=a.Rd||g.MD(a.B),d=this.player.Ct();a=a.mutedAutoplay;return b&&!c&&!d&&!a};
g.k.Yd=function(){return this.endScreen.Yd()};
g.k.VO=function(){return this.Yd()?this.endScreen.tH():!1};
g.k.oa=function(){this.player.Cf("endscreen");g.SL.prototype.oa.call(this)};
g.k.load=function(){var a=this.player.getVideoData();var b=a.fF;if(b&&b.videoId){var c=this.player.ob().yd.get("heartbeat");a&&a.suggestions&&a.suggestions.length&&b.videoId===a.suggestions[0].id&&!a.ID?a=!1:(this.player.Rj(b.videoId,void 0,void 0,!0,!0,b),c&&c.gx("HEARTBEAT_ACTION_TRIGGER_AT_STREAM_END","HEARTBEAT_ACTION_TRANSITION_REASON_HAS_NEW_STREAM_TRANSITION_ENDPOINT"),a=!0)}else a=!1;a||(g.SL.prototype.load.call(this),this.endScreen.show())};
g.k.unload=function(){g.SL.prototype.unload.call(this);this.endScreen.hide();this.endScreen.destroy()};
g.k.je=function(a){this.Mp()&&(this.endScreen.created||this.endScreen.create(),"load"===a.getId()&&this.load())};
g.k.ag=function(a){"load"===a.getId()&&this.loaded&&this.unload()};
g.k.fb=function(){BIa(this);this.u&&AIa(this)&&(this.endScreen&&(this.endScreen.hide(),this.endScreen.created&&this.endScreen.destroy(),this.endScreen.dispose()),this.i?this.endScreen=new p3(this.player):this.endScreen=new t3(this.player),g.H(this,this.endScreen),g.IL(this.player,this.endScreen.element,4))};g.YL.endscreen=w3;})(_yt_player);
