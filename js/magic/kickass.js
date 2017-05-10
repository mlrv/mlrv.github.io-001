!function(window){function now(){return(new Date).getTime()}function bind(t,e){return function(){return e.apply(t,arguments)}}function addEvent(t,e,s){t.addEventListener?t.addEventListener(e,s,!1):t.attachEvent&&(t["e"+e+s]=s,t[e+s]=function(){return t["e"+e+s](window.event)},t.attachEvent("on"+e,t[e+s]))}function removeEvent(t,e,s){t.removeEventListener?t.removeEventListener(e,s,!1):t.detachEvent&&(t.detachEvent("on"+e,t[e+s]),t[e+s]=null,t["e"+e+s]=null)}function stopEvent(t){t.stopPropogation&&t.stopPropogation(),t.preventDefault&&t.preventDefault(),t.returnValue=!1}function elementIsContainedIn(t,e){return element.contains?t.contains(e):!!(16&t.compareDocumentPosition(e))}function code(t){var e={38:"up",40:"down",37:"left",39:"right",27:"esc"};return e[t]?e[t]:String.fromCharCode(t)}function random(t,e){return Math.floor(Math.random()*(e-t+1)+t)}function getRect(t){if("function"==typeof t.getBoundingClientRect){var e=t.getBoundingClientRect(),s=window.pageXOffset,i=window.pageYOffset;return{width:e.width,height:e.height,left:e.left+s,top:e.top+i}}for(var e={width:t.offsetWidth,height:t.offsetHeight,left:0,top:0},n=t;n;)e.left+=n.offsetLeft,e.top+=n.offsetTop,n=n.offsetParent;return e}function getCompatElement(){var t=document;return t.compatMode&&"CSS1Compat"!=t.compatMode?t.body:t.documentElement}function getScrollSize(){var t=getCompatElement(),e={x:t.clientWidth,y:t.clientHeight},s=document.body;return{x:Math.max(t.scrollWidth,s.scrollWidth,e.x),y:Math.max(t.scrollHeight,s.scrollHeight,e.y)}}function setStyles(t,e){for(var s in e)if(e.hasOwnProperty(s)){var i=e[s];"number"==typeof i&&"opacity"!==s&&"zIndex"!==s&&(i+="px"),t.style[s]=i}}function newElement(t,e){var s=document.createElement(t);for(var i in e)e.hasOwnProperty(i)&&("styles"===i?setStyles(s,e[i]):s[i]=e[i]);return s}function delay(t,e,s){return setTimeout(bind(s,e),t)}var Class=function(t){var e=function(){return e.$prototyping?this:"function"==typeof this.initialize?this.initialize.apply(this,arguments):void 0};t.Extends&&(e.parent=t.Extends,t.Extends.$prototyping=!0,e.prototype=new t.Extends,t.Extends.$prototyping=!1);for(var s in t)t.hasOwnProperty(s)&&(e.prototype[s]=t[s]);return e};"undefined"!=typeof exports&&(exports.Class=Class);var Vector=new Class({initialize:function(t,e){"object"==typeof t?(this.x=t.x,this.y=t.y):(this.x=t,this.y=e)},cp:function(){return new Vector(this.x,this.y)},mul:function(t){return this.x*=t,this.y*=t,this},mulNew:function(t){return new Vector(this.x*t,this.y*t)},div:function(t){return this.x/=t,this.y/=t,this},divNew:function(t){return new Vector(this.x/t,this.y/t)},add:function(t){return this.x+=t.x,this.y+=t.y,this},addNew:function(t){return new Vector(this.x+t.x,this.y+t.y)},sub:function(t){return this.x-=t.x,this.y-=t.y,this},subNew:function(t){return new Vector(this.x-t.x,this.y-t.y)},rotate:function(t){var e=this.x,s=this.y;return this.x=e*Math.cos(t)-Math.sin(t)*s,this.y=e*Math.sin(t)+Math.cos(t)*s,this},rotateNew:function(t){return this.cp().rotate(t)},setAngle:function(t){var e=this.len();return this.x=Math.cos(t)*e,this.y=Math.sin(t)*e,this},setAngleNew:function(t){return this.cp().setAngle(t)},setLength:function(t){var e=this.len();return e?this.mul(t/e):this.x=this.y=t,this},setLengthNew:function(t){return this.cp().setLength(t)},normalize:function(){var t=this.len();return 0==t?this:(this.x/=t,this.y/=t,this)},normalizeNew:function(){return this.cp().normalize()},angle:function(){return Math.atan2(this.y,this.x)},collidesWith:function(t){return this.x>t.x&&this.y>t.y&&this.x<t.x+t.width&&this.y<t.y+t.height},len:function(){var t=Math.sqrt(this.x*this.x+this.y*this.y);return.005>t&&t>-.005?0:t},is:function(t){return"object"==typeof t&&this.x==t.x&&this.y==t.y},dot:function(t){return this.x*t.x+this.y*t.y},inTriangle:function(t,e,s){var i=s.subNew(t),n=e.subNew(t),o=p.subNew(t),a=i.dot(i),h=i.dot(n),r=i.dot(o),l=n.dot(n),c=n.dot(o),u=1/(a*l-h*h),d=(l*r-h*c)*u,f=(a*c-h*r)*u;return d>0&&f>0&&1>d+f},distanceFrom:function(t){return Math.sqrt(Math.pow(this.x-t.x,2),Math.pow(this.y-t.y,2))},toString:function(){return"[Vector("+this.x+", "+this.y+") angle: "+this.angle()+", length: "+this.len()+"]"}});"undefined"!=typeof exports&&(exports.Vector=Vector);var Rect=new Class({initialize:function(t,e,s,i){this.pos=new Vector(t,e),this.size={width:s,height:i}},hasPoint:function(t){return t.x>this.getLeft()&&t.x<this.getRight()&&t.y>this.getTop()&&t.y<this.getBottom()},setLeft:function(t){this.pos.x=t+this.size.width/2},setTop:function(t){this.pos.y=t+this.size.height/2},getLeft:function(){return this.pos.x-this.size.width/2},getTop:function(){return this.pos.y-this.size.height/2},getRight:function(){return this.pos.x+this.size.width/2},getBottom:function(){return this.pos.y+this.size.height/2},cp:function(){return new Rect(this.pos.x,this.pos.y,this.size.width,this.size.height)}});"undefined"!=typeof exports&&(exports.Rect=Rect);var Fx=new Class({initialize:function(){this.listeners=[],this.tweens={},this.running={}},addListener:function(t){this.listeners.push(t)},add:function(t,e){if(e=e||{},e.duration=e.duration||500,e.transition=e.transition||Tween.Linear,e.repeats="undefined"==typeof e.repeats?!1:e.repeats,!e.tweens){var s=e.start||0,i="undefined"==typeof e.end?1:e.end;e.tweens=[[s,i]]}this.tweens[t]=e},update:function(t){t="number"==typeof t?t:now();for(var e in this.tweens)if(this.tweens.hasOwnProperty(e)){if(!this.running[e]){this.tweenStart(e,t);continue}var s=this.tweens[e],i=t-this.running[e].startTime;if(i>s.duration){this.tweenFinished(s,e);continue}for(var n,o=s.transition(i/s.duration),a=[],h=0;n=s.tweens[h];h++){var r=o*(n[1]-n[0])+n[0];a.push(r)}this.fire(e,a,o)}},tweenStart:function(t,e){this.running[t]={startTime:e};for(var s,i=[],n=0;s=this.tweens[t].tweens[n];n++)i.push(s[0]);this.fire(t,i,0)},tweenFinished:function(t,e){for(var s,i=[],n=0;s=t.tweens[n];n++)i.push(s[1]);return this.fire(e,i,1),t.repeats?void this.tweenStart(e,now()):(delete this.running[e],void delete this.tweens[e])},fire:function(t,e,s){for(var i,n=0;i=this.listeners[n];n++)i.set.call(i,t,e,s)}}),Tween={Linear:function(t){return t},Quadratic:function(t){return t*t},Quintic:function(t){return t*t*t},Shake:function(t){return Math.sin(t)}},GameGlobals={FPS:60,useAnimationFrame:!1,boids:{flockRadius:400,size:100},path:function(){return""},hasCanvas:"undefined"!=typeof document.createElement("canvas").getContext,bulletColor:"black"};window.GameGlobals=GameGlobals,GameGlobals.easyXDMFlash=GameGlobals.path("easyxdm.swf"),Array.prototype.indexOf||(Array.prototype.indexOf=function(t){if(void 0===this||null===this)throw new TypeError;var e=Object(this),s=e.length>>>0;if(0===s)return-1;var i=0;if(arguments.length>0&&(i=Number(arguments[1]),i!==i?i=0:0!==i&&i!==1/0&&i!==-(1/0)&&(i=(i>0||-1)*Math.floor(Math.abs(i)))),i>=s)return-1;for(var n=i>=0?i:Math.max(s-Math.abs(i),0);s>n;n++)if(n in e&&e[n]===t)return n;return-1});var requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}(),KickAss=new Class({initialize:function(){this.players=[],this.elements=[],this.weaponClass=Weapons[1].cannonClass,this.scrollPos=new Vector(0,0),this.scrollSize=new Vector(0,0),this.windowSize={width:0,height:0},this.updateWindowInfo(),this.world=new World(this),this.bulletManager=new BulletManager,this.bulletManager.game=this,this.bulletManager.updateEnemyIndex(),this.explosionManager=new ExplosionManager,this.explosionManager.game=this,this.ui=new UIManager,this.ui.game=this,this.bombManager=new BombManager,this.bombManager.game=this,this.sessionManager=new SessionManager,this.sessionManager.game=this,this.lastUpdate=now(),this.keyMap={},this.keydownEvent=bind(this,this.keydown),this.keyupEvent=bind(this,this.keyup),this.multiplier=10,window.KickAssStyle&&"white"===window.KickAssStyle&&(GameGlobals.bulletColor="white"),addEvent(document,"keydown",this.keydownEvent),addEvent(document,"keyup",this.keyupEvent),addEvent(document,"keypress",this.keydownEvent)},begin:function(){this.addPlayer(),this.ui.showMessage("Press Space to Shoot<br>&larr;&uarr;&darr;&rarr; to Move"),this.sessionManager.isPlaying=!0,GameGlobals.useAnimationFrame||(this.loopTimer=window.setInterval(bind(this,this.loop),1e3/GameGlobals.FPS)),GameGlobals.useAnimationFrame&&requestAnimFrame(bind(this,this.loop))},keydown:function(t){var e=code(t.keyCode);switch(this.keyMap[e]=!0,e){case"left":case"right":case"up":case"down":case"esc":case" ":stopEvent(t)}switch(e){case"esc":this.destroy()}},keyup:function(t){var e=code(t.keyCode);switch(this.keyMap[e]=!1,e){case"left":case"right":case"up":case"down":case"esc":case" ":t.stopPropogation&&t.stopPropogation(),t.preventDefault&&t.preventDefault(),t.returnValue=!1}},loop:function(){var t=now(),e=(t-this.lastUpdate)/1e3;this.updateWindowInfo();for(var s,i=0;s=this.players[i];i++)s.update(e);this.world.update(e),this.bulletManager.update(e),this.bombManager.update(e),this.explosionManager.update(e),this.ui.update(e),this.sessionManager.update(e),this.lastUpdate=t,GameGlobals.useAnimationFrame&&requestAnimFrame(bind(this,this.loop))},addPlayer:function(){var t=Ships.Standard;window.KICKASSSHIP&&KICKASSSHIP.points&&(t=KICKASSSHIP);var e=new Player;e.game=this,e.setShip(t),this.players.push(e),this.explosionManager.addExplosion(e.pos)},registerElement:function(t){if(!t)throw new Error("Can't register unexisting element.");this.elements.push(t)},unregisterElement:function(t){this.elements.splice(this.elements.indexOf(t),1)},isKickAssElement:function(t){for(var e,s=0;e=this.elements[s];s++)if(t===e||elementIsContainedIn(e,t))return!0;return!1},isKeyPressed:function(t){return!!this.keyMap[t]},updateWindowInfo:function(){var t=!!window.ActiveXObject&&"BackCompat"==document.compatMode;this.windowSize={width:document.documentElement.clientWidth,height:document.documentElement.clientHeight},t&&(this.windowSize.width=document.body.clientWidth,this.windowSize.height=document.body.clientHeight),this.scrollPos.x=window.pageXOffset||document.documentElement.scrollLeft,this.scrollPos.y=window.pageYOffset||document.documentElement.scrollTop,this.scrollSize=getScrollSize()},hideAll:function(){for(var t,e=0;t=this.elements[e];e++)t.style.visibility="hidden"},showAll:function(){for(var t,e=0;t=this.elements[e];e++)t.style.visibility="visible"},updateShips:function(t,e){e||this.ui.showMessage("You're now flying<br /><em>"+t.name+"<em>!!");for(var s,i=0;s=this.players[i];i++)s.setShip(t)},changeWeapon:function(t,e){this.weaponClass=t.cannonClass,e||this.ui.showMessage("Changed to "+t.name.toUpperCase()+"!!!!");for(var s,i=0;s=this.players[i];i++)s.setCannons(t.cannonClass)},changeWeaponById:function(t,e){Weapons[t]&&this.changeWeapon(Weapons[t],e)},flyOutPlayers:function(t){for(var e,s=0;e=this.players[s];s++)e.flyTo(t,-e.size.height),e.isBound=!1},flyInPlayers:function(){for(var t,e=0;t=this.players[e];e++)t.flyTo(t.pos.x,100,function(){this.isBound=!0})},newRank:function(t){this.ui.showMessage("OMG. You leveled up to: <strong>"+t+"</strong>!<br /><small>Be sure to check what cool new stuff you get in the menu.</small>")},fireBomb:function(){this.bombManager.blow()},destroy:function(){removeEvent(document,"keydown",this.keydownEvent),removeEvent(document,"keypress",this.keydownEvent),removeEvent(document,"keyup",this.keyupEvent);for(var t,e=0;t=this.players[e];e++)t.destroy();this.bulletManager.destroy(),this.explosionManager.destroy(),GameGlobals.useAnimationFrame||clearInterval(this.loopTimer),window.KICKASSGAME=!1},isCampaign:function(){return"GAME_UK"==window.KICKASSVERSION}});window.KickAss=KickAss;var UIManager=new Class({initialize:function(){this.UNIQID=0,this.pointBubbles={},this.messages={},this.fx=new Fx,this.fx.addListener(this)},update:function(){this.fx.update()},set:function(t,e,s){var i=t.split("-")[0],n=t.split("-")[1];if(this.pointBubbles[n]){var o=this.pointBubbles[n];o.style.top=e[0]+"px",o.style.opacity=e[1],1==s&&o.parentNode&&(o.parentNode.removeChild(o),delete this.pointBubbles[n])}else if(this.messages[n]&&"messagedown"==i){var a=this.messages[n];a.style.top=e[0]+"px",1==s&&setTimeout(bind(this,function(){this.fx.add("messageup-"+n,{tweens:[[e[0],-100]],transition:Tween.Quadratic,duration:300})}),a.staytime||4e3)}else if(this.messages[n]&&"messageup"==i){var a=this.messages[n];a.style.top=e[0]+"px",1==s&&(a.parentNode.removeChild(a),delete this.messages[n])}},addPointsBubbleAt:function(t,e){var s="bubble"+this.UNIQID++,i=this.game.scrollPos.y+t.y,n=newElement("span",{innerHTML:e,className:"KICKASSELEMENT",styles:{position:"absolute",font:"20px Arial",fontWeight:"bold",opacity:"1",color:"black",textShadow:"#fff 1px 1px 3px",top:i,zIndex:"10000000"}});n.style.left=t.x-n.offsetWidth/2+"px",document.body.appendChild(n),this.pointBubbles[s]=n,this.fx.add("bubble-"+s,{tweens:[[i,i-15],[1,0]]})},showMessage:function(t,e){e=e||!1;var s=300,i=this.UNIQID++,n=newElement("div",{innerHTML:t,className:"KICKASSELEMENT",id:"kickass-message-"+i,styles:{position:"fixed",top:-100,left:"50%",marginLeft:-s/2,width:s,background:"#222",opacity:.8,padding:"10px",color:"#fff",textAlign:"center",borderRadius:15,font:"20px Arial",fontWeight:"bold",zIndex:"10000000"}});n.staytime=e,document.body.appendChild(n);var o=this.getLowestBubbleY();return n.kickassto=o,this.fx.add("messagedown-"+i,{duration:300,tweens:[[-100,o]],transition:Tween.Quadratic}),this.messages[i]=n,n},getLowestBubbleY:function(){var t=100;for(var e in this.messages)this.messages.hasOwnProperty(e)&&(t=Math.max(this.messages[e].kickassto+this.messages[e].offsetHeight+10,t));return t}}),World=(new Class({initialize:function(t,e){if(this.src=t,this.formats=e,channels=8,this.supportsAudio="undefined"!=typeof document.createElement("audio").play,this.supportsAudio){this.numChannels=channels,this.channels=[];for(var s=0;s<this.numChannels;s++)this.channels.push({isPlaying:!1,element:this.prepareElement(this.buildAudioElement())})}},buildAudioElement:function(){for(var t,e={ogg:"audio/ogg",mp3:"audio/mpeg"},s=document.createElement("audio"),i=0;t=this.formats[i];i++){var n=document.createElement("source");n.src=this.src+"."+t,n.type=e[t],s.appendChild(n)}return s},prepareElement:function(t){if("undefined"==typeof t.addEventListener)return t;var e=this;return t.addEventListener("ended",function(){e.audioEnded(t)},!1),t},audioEnded:function(t){for(var e,s=0;e=this.channels[s];s++)e.element===t&&(e.isPlaying=!1)},play:function(){if(this.supportsAudio)for(var t,e=0;t=this.channels[e];e++)if(!t.isPlaying)return t.isPlaying=!0,void("function"==typeof t.element.play&&t.element.play())}}),new Class({initialize:function(t){return},render:function(){return},update:function(t){}})),Ships={Standard:{points:[[-20,0],[0,-50],[20,0],[7,0],[3,-10],[-3,-10],[-7,0]],thrusters:[{s:{w:20,h:30},p:{x:0,y:14},a:0}],cannons:[{p:{x:0,y:-15},a:0}]}},PLAYERIDS=0,Player=new Class({initialize:function(){this.id=PLAYERIDS++,this.tween=!1,this.isBound=!0,this.pos=new Vector(200,200),this.vel=new Vector(0,0),this.acc=new Vector(0,0),this.dir=new Vector(0,1),this.currentRotation=0,this.isBroken=!1,this.lineOffsets=[],this.deadTime=0,this.friction=.4,this.terminalVelocity=6e3,this.lastPos=new Vector(0,0)},setShip:function(t){this.ship=t,this.verts=[];for(var e,s=0;e=this.ship.points[s];s++)this.verts.push(new Vector(e[0],e[1]));this.verts.push(this.verts[0]),this.thrusters=[],this.cannons=[],this.addThrusters(this.ship.thrusters),this.addCannons(this.ship.cannons),this.size=this.getSizeFromVertsAndObjects(),this.bounds=this.calculateBounds(),this.sheet&&this.sheet.destroy(),this.sheet=new Sheet(new Rect(100,100,this.bounds.x,this.bounds.y)),this.forceRedraw=!0},setCannons:function(t){for(var e,s=[],i=0;e=this.cannons[i];i++){var n=new t(e.pos.x,e.pos.y,e.angle);n.player=this,n.game=this.game,s.push(n),e.destroy()}this.cannons=s},addThrusters:function(t){for(var e,s=0;e=t[s];s++){var i=new Thruster(e);this.thrusters.push(i)}},addCannons:function(t){for(var e,s=0;e=t[s];s++){var i=WeaponMap[e.m]||WeaponMap.cannon,n=new i.cannonClass(e.p.x,e.p.y,e.a);n.player=this,n.game=this.game,this.cannons.push(n)}},update:function(t){if(this.isBroken){if(!this.lineOffsets.length)for(var e=0;e<this.verts.length-1;e++)this.lineOffsets[e]={pos:new Vector(0,0),dir:new Vector(1,1).setAngle(2*Math.PI*Math.random())};for(var e=0;e<this.lineOffsets.length;e++)this.lineOffsets[e].pos.add(this.lineOffsets[e].dir.cp().setLength(50).mul(t));return this.sheet.clear(),this.sheet.setAngle(this.dir.angle()),this.sheet.setPosition(this.pos),this.sheet.drawBrokenPlayer(this.verts,this.lineOffsets),void(now()-this.deadTime>1e3&&(this.isBroken=!1,this.lineOffsets=[],this.randomPos()))}this.tween||(this.game.isKeyPressed("left")||this.game.isKeyPressed("right")?(this.game.isKeyPressed("left")&&this.rotateLeft(t),this.game.isKeyPressed("right")&&this.rotateRight(t)):this.stopRotate(),this.game.isKeyPressed("up")?this.activateThrusters():this.stopThrusters()),this.game.isKeyPressed(" ")?(this.isShooting=!0,this.isBroken||this.shootPressed()):this.isShooting&&(this.isShooting=!1,this.shootReleased()),this.currentRotation&&this.dir.setAngle(this.dir.angle()+this.currentRotation*t);var s=this.acc.mulNew(t).sub(this.vel.mulNew(t*this.friction));this.vel.add(s),this.vel.len()>this.terminalVelocity&&this.vel.setLength(this.terminalVelocity);var i=this.vel.mulNew(t);this.pos.add(i);for(var n,o=!this.acc.is({x:0,y:0}),e=0;n=this.thrusters[e];e++)n.setIsShown(o),n.update(t);if(this.isBound&&this.checkBounds(),!this.lastPos.is(this.pos)||this.currentRotation||this.forceRedraw){if(this.forceRedraw=!1,this.sheet.clear(),this.sheet.setAngle(this.dir.angle()+Math.PI/2),this.sheet.setPosition(this.pos),o)for(var n,e=0;n=this.thrusters[e];e++)n.drawTo(this.sheet);this.sheet.drawPlayer(this.verts),this.lastPos=this.pos.cp()}for(var a,e=0;a=this.cannons[e];e++)a.update(t)},randomPos:function(){var t=this.game.windowSize.width,e=this.game.windowSize.height;this.pos=new Vector(random(0,t),random(0,e))},checkBounds:function(){if(!this.tween){var t=this.game.windowSize.width,e=this.game.windowSize.height,s=this.pos.x+this.sheet.rect.size.width/2,i=this.pos.y+this.sheet.rect.size.height/2;s>t?(window.scrollTo(this.game.scrollPos.x+50,this.game.scrollPos.y),this.pos.x=0):this.pos.x<0&&(window.scrollTo(this.game.scrollPos.x-50,this.game.scrollPos.y),this.pos.x=t-this.sheet.rect.size.width/2),i>e?(window.scrollTo(this.game.scrollPos.x,this.game.scrollPos.y+.75*e),this.pos.y=0):this.pos.y<0&&(window.scrollTo(this.game.scrollPos.x,this.game.scrollPos.y-.75*e),this.pos.y=e-this.sheet.rect.size.height/2)}},inRect:function(t){for(var e,s=!1,i=0;e=this.verts[i];i++)t.hasPoint(new Vector(e.x+this.pos.x,e.y+this.pos.y))&&(s=!0);return s},hit:function(){this.isBroken||(this.isBroken=!0,this.deadTime=now())},activateThrusters:function(){this.acc=new Vector(200,0).setAngle(this.dir.angle())},stopThrusters:function(){this.acc=new Vector(0,0)},rotateLeft:function(t){this.currentRotation=Math.max(2*-Math.PI,this.currentRotation-10*Math.PI*t)},rotateRight:function(t){this.currentRotation=Math.min(2*Math.PI,this.currentRotation+10*Math.PI*t)},stopRotate:function(){this.currentRotation=0},getSizeFromVertsAndObjects:function(){for(var t,e=0,s=0;t=this.verts[s];s++)e=Math.max(e,new Vector(t).len());for(var i,s=0;i=this.thrusters[s];s++){var n=new Vector(i.pos.x-i.size.width/2,i.pos.y-i.size.height/2).rotate(i.angle),o=new Vector(i.pos.x+i.size.width/2,i.pos.y-i.size.height/2).rotate(i.angle),a=new Vector(i.pos.x-i.size.width/2,i.pos.y+i.size.height/2).rotate(i.angle),h=new Vector(i.pos.x+i.size.width/2,i.pos.y+i.size.height/2).rotate(i.angle);e=Math.max(e,n.len(),o.len(),a.len(),h.len())}return{width:2*e,height:2*e}},calculateBounds:function(){return{x:1*Math.max(this.size.width,this.size.height),y:1*Math.max(this.size.height,this.size.width)}},shootPressed:function(){for(var t,e=0;t=this.cannons[e];e++)t.shootPressed()},shootReleased:function(){for(var t,e=0;t=this.cannons[e];e++)t.shootReleased()},flyTo:function(t,e,s){this.tween={start:{pos:this.pos.cp(),dir:this.dir.cp()},to:new Vector(t,e),callback:s||function(){}},this.tween.time=this.getTimeforTween()},destroy:function(){this.sheet.destroy()}}),Thruster=new Class({initialize:function(t,e){this.pos=new Vector(t.p),this.size={width:t.s.w,height:t.s.h},this.angle=t.a||0,this.ship=e,this.isShown=!1,this.flameY=1,this.fx=new Fx,this.fx.addListener(this),this.flames={r:[],y:[]},this.lastFrameUpdate=0,this.generateFlames()},update:function(){this.fx.update(),now()-this.lastFrameUpdate>1e3/60&&this.generateFlames()},set:function(t,e){switch(t){case"flames":this.flameY=e}},setIsShown:function(t){!this.isShown&&t&&(this.flameY=0,this.generateFlames(),this.fx.add("flames",{start:this.flameY,end:1,duration:500,transition:Tween.Quintic})),this.isShown=t},drawTo:function(t){t.drawFlames(this.flames,this.angle)},generateFlames:function(){function t(t,e){return new Vector(t,e)}var e=this.size.width,s=.05*this.size.width,i=.8*this.size.width,n=.1*i,o=e/2,a=i/2,h=(-this.size.height/2,this.pos.x),r=this.pos.y-this.size.height/2;this.flames.r=[t(-o+h,r)],this.flames.y=[t(-a+h,r)],this.flames.self=this;for(var l=0;e>l;l+=s)this.flames.r.push(t(l-o+h,this.flameY*random(.7*this.size.height,this.size.height)+r));this.flames.r.push(t(o+h,r));for(var l=0;i>l;l+=n)this.flames.y.push(t(l-a+h,this.flameY*random(.4*this.size.height,.7*this.size.height)+r));this.flames.y.push(t(a+h,r)),this.lastFrameUpdate=now();for(var c,u=t(h,r),d=0;c=this.flames.r[d];d++)c.sub(u).rotate(this.angle).add(u);for(var c,d=0;c=this.flames.y[d];d++)c.sub(u).rotate(this.angle).add(u)}}),BombManager=new Class({initialize:function(){this.bombShowDelay=8,this.nextBomb=this.bombShowDelay},update:function(t){this.game.isKeyPressed("F")&&this.isReady()&&this.blow(),-1!==this.nextBomb&&this.game.sessionManager.isPlaying&&(this.nextBomb-=t,this.nextBomb<0&&(this.nextBomb=-1,this.game.ui.showMessage("BOMB IS READY<br />(Type F)")))},blow:function(){var t=this.game.ui.showMessage("3...",5e3);delay(1e3,function(){t.innerHTML="2..."},this),delay(2e3,function(){t.innerHTML="1..."},this),delay(3e3,function(){t.innerHTML="BOOM!"},this),delay(3e3,this.blowStuffUp,this),this.nextBomb=this.bombShowDelay},blowStuffUp:function(){this.game.bulletManager.updateEnemyIndex();for(var t,e=this.game.bulletManager.enemyIndex,s=0;(t=e[s])&&50>s;s++){var i=getRect(t),n=new Vector(i.left+i.width/2,i.top+i.height/2);this.game.explosionManager.addExplosion(n,t,MegaParticleExplosion),t.parentNode.removeChild(t)}this.nextBomb=this.bombShowDelay},isReady:function(){return-1===this.nextBomb}}),ELEMENTSTHATARENOTTOBEINCLUDED=["BR","SCRIPT","STYLE","TITLE","META","HEAD","OPTION","OPTGROUP","LINK"],ELEMENTSIZETHRESHOLD=5,BulletManager=new Class({initialize:function(){this.lastBlink=0,this.blinkActive=!1,this.enemyIndex=[],this.updateDelay=2.5,this.nextUpdate=this.updateDelay},update:function(t){this.game.isKeyPressed("B")?this.blink():this.blinkActive&&this.endBlink(),this.nextUpdate-=t,this.nextUpdate<0&&this.updateEnemyIndex()},blink:function(){if(now()-this.lastBlink>250){for(var t,e=0;t=this.enemyIndex[e];e++)t.style.outline=this.blinkActive?t.KICKASSOLDBORDER:"1px solid red";this.blinkActive=!this.blinkActive,this.lastBlink=now(),this.blinkActive||this.updateEnemyIndex()}},endBlink:function(){for(var t,e=0;t=this.enemyIndex[e];e++)t.style.outline=t.KICKASSOLDBORDER;this.lastBlink=0,this.blinkActive=!1},updateEnemyIndex:function(){var t=document.getElementsByTagName("*");this.enemyIndex=[];for(var e,s=0;e=t[s];s++)this.isDestroyable(e)&&(this.enemyIndex.push(e),e.KICKASSOLDBORDER=e.style.outline||document.defaultView.getComputedStyle(e,null).outline);this.nextUpdate=this.updateDelay},isDestroyable:function(t,e){if(this.shouldIgnoreElement(t,e))return!1;for(var s,i=0;s=t.childNodes[i];i++)if(1===s.nodeType&&-1===ELEMENTSTHATARENOTTOBEINCLUDED.indexOf(s.tagName)&&s.offsetWidth>=ELEMENTSIZETHRESHOLD&&s.offsetHeight>=ELEMENTSIZETHRESHOLD&&"hidden"!==document.defaultView.getComputedStyle(s,null).visibility)return!1;return!0},isDestroyableFromCollision:function(t){return this.isDestroyable(t,!0)},shouldIgnoreElement:function(t,e){if(1!==t.nodeType)return!0;if(t==document.documentElement||t==document.body)return!0;if(-1!==ELEMENTSTHATARENOTTOBEINCLUDED.indexOf(t.tagName))return!0;if("hidden"==t.style.visibility||"none"==t.style.display)return!0;if("string"==typeof t.className&&-1!=t.className.indexOf("KICKASSELEMENT"))return!0;if(!e&&(t.offsetWidth<ELEMENTSIZETHRESHOLD||t.offsetHeight<ELEMENTSIZETHRESHOLD))return!0;var s;return(t.offsetLeft<0||t.offsetTop<0)&&(s=getRect(t),s.left+s.width<0||s.top+s.height<0)?!0:(s||(s=getRect(t)),s.top>=this.game.scrollSize.y?!0:!1)},destroy:function(){for(var t in this.bullets)if(this.bullets.hasOwnProperty(t))for(var e,s=0;e=this.bullets[t][s];s++)e.destroy();this.bullets={}}}),SessionManager=new Class({initialize:function(){this.isPlaying=!1},update:function(){this.isPlaying&&0==this.game.bulletManager.enemyIndex.length&&this.weHaveWon()},weHaveWon:function(){this.isPlaying=!1,this.game.ui.showMessage('All clear! <br>Refresh the page to play again <br><br>',9e4)}}),ExplosionManager=new Class({initialize:function(){this.explosions=[]},update:function(t){for(var e,s=now(),i=0;e=this.explosions[i];i++)s-e.bornAt>(e.ttl||500)?(e.destroy(),this.explosions.splice(i,1)):e.update(t)},addExplosion:function(t,e,s){s=s||ParticleExplosion;var i=new s(t,e);i.game=this.game,i.checkBounds(),this.explosions.push(i)},destroy:function(){for(var t,e=0;t=this.explosions[e];e++)t.destroy();this.explosions=[]}}),Cannon=new Class({initialize:function(t,e,s){this.pos=new Vector(t,e),this.angle=s||0},shootPressed:function(){},shootReleased:function(){},checkCollisions:function(){},getExplosionClass:function(){return ParticleExplosion},update:function(t){this.game.hideAll(),this.checkCollisions(t),this.game.showAll()},checkCollision:function(t){var e=t.checkCollision();return e?(this.game.explosionManager.addExplosion(t.pos,e,this.getExplosionClass()),e.isShot||e.parentNode.removeChild(e),!0):!1},createBullet:function(t){var e=this.getABulletPos(),s=this.getABulletDir(),i=new t(e,s);return i.game=this.game,i.manager=this,i.initCanvas(),i.vel.add(i.vel.cp().setLength(this.player.vel.len())),i},getABulletPos:function(){return this.player.pos.cp().add(this.pos.cp().rotate(this.player.dir.angle()+Math.PI/2))},getABulletDir:function(){return this.player.dir.cp().rotate(this.angle)},destroy:function(){}}),LaserCannon=new Class({Extends:Cannon,initialize:function(){Cannon.prototype.initialize.apply(this,arguments),this.lasers=[]},getExplosionClass:function(){return SplitExplosion},update:function(t){this.lasers.length&&(this.removeOld(),Cannon.prototype.update.call(this,t))},checkCollisions:function(t){for(var e,s=0;e=this.lasers[s];s++)e.update(t),this.checkCollision(e)},removeOld:function(){for(var t,e=0;t=this.lasers[e];e++)t.outOfBounds&&(t.destroy(),this.lasers.splice(e,1))},shootPressed:function(){this.lasers.length>5||now()-this.lastFired<500||(this.lastFired=now(),this.lasers.push(this.createBullet(LaserBullet)))},destroy:function(){if(this.lasers.length){for(var t,e=0;t=this.lasers[e];e++)t.destroy();this.lasers=[]}}}),BallCannon=new Class({Extends:Cannon,initialize:function(){Cannon.prototype.initialize.apply(this,arguments),this.lastFired=0,this.bullets=[]},getExplosionClass:function(){return ParticleExplosion},update:function(t){this.bullets.length&&(this.removeOld(),Cannon.prototype.update.call(this,t))},removeOld:function(){for(var t,e=now(),s=0;t=this.bullets[s];s++)e-t.bornAt>2e3&&(t.destroy(),this.bullets.splice(s,1))},checkCollisions:function(t){for(var e,s=0;e=this.bullets[s];s++)e.update(t),this.checkCollision(e)&&(e.destroy(),this.bullets.splice(s,1))},shootPressed:function(){now()-this.lastFired<200||(this.lastFired=now(),this.addBullet())},addBullet:function(){this.bullets.length>7&&(this.bullets[0].destroy(),this.bullets.shift());var t=this.createBullet(Bullet);this.bullets.push(t)},destroy:function(){for(var t,e=0;t=this.bullets[e];e++)t.destroy();this.bullets=[]}}),Bullet=new Class({initialize:function(t,e){this.pos=t.cp(),this.dir=e,this.vel=new Vector(500,500),this.bornAt=now()},initCanvas:function(){this.sheet=new Sheet(new Rect(this.pos.x,this.pos.y,5,5)),this.sheet.drawBullet()},draw:function(){this.sheet.setPosition(this.pos)},update:function(t){this.pos.add(this.vel.setAngle(this.dir.angle()).mulNew(t)),this.checkBounds(),this.draw()},checkCollision:function(){var t=document.elementFromPoint(this.pos.x,this.pos.y);t&&3==t.nodeType&&(t=t.parentNode);var e=t&&this.game.bulletManager.isDestroyableFromCollision(t)?t:!1;return e},checkBounds:function(){var t=this.game.windowSize.width,e=this.game.windowSize.height,s=this.pos.x+this.sheet.rect.size.width/2,i=this.pos.y+this.sheet.rect.size.height/2;s>t?this.pos.x=0:this.pos.x<0&&(this.pos.x=t-this.sheet.rect.size.width/2),i>e?this.pos.y=0:this.pos.y<0&&(this.pos.y=e-this.sheet.rect.size.height/2)},destroy:function(){this.sheet.destroy()}}),LaserBullet=new Class({Extends:Bullet,initialize:function(){Bullet.prototype.initialize.apply(this,arguments),this.vel=new Vector(750,750),this.lastDrawPos=this.pos.cp()},initCanvas:function(){var t=Math.max(GameGlobals.laserImage.width,GameGlobals.laserImage.height);this.sheet=new Sheet(new Rect(0,0,t,t))},update:function(){Bullet.prototype.update.apply(this,arguments)},draw:function(){this.sheet.drawLaser(this.pos,this.dir),this.lastDrawPos=this.pos.cp()},checkBounds:function(){var t=this.game.windowSize.width,e=this.game.windowSize.height,s=this.pos.x+this.sheet.rect.size.width/2,i=this.pos.y+this.sheet.rect.size.height/2;(s>t||this.pos.x<0)&&(this.outOfBounds=!0),(i>e||this.pos.y<0)&&(this.outOfBounds=!0)},destroy:function(){this.sheet.destroy()}}),Explosion=new Class({initialize:function(t){this.bornAt=now(),this.pos=t.cp()},update:function(){},checkBounds:function(){},destroy:function(){}}),ParticleExplosion=new Class({Extends:Explosion,initialize:function(t){Explosion.prototype.initialize.apply(this,arguments),this.particleVel=new Vector(150,0),this.particles=[],this.generateParticles(),this.sheet=new Sheet(new Rect(t.x,t.y,250,250))},update:function(t){for(var e,s=0;e=this.particles[s];s++)e.pos.add(e.vel.mulNew(t).mul(random(.5,1)).setAngle(e.dir.angle()));this.sheet.clear(),this.sheet.drawExplosion(this.particles)},generateParticles:function(){for(var t=0,e=GameGlobals.hasCanvas?40:10;e>t;t++)this.particles.push({dir:new Vector(random(0,20)-10,random(0,20)-10).normalize(),vel:this.particleVel.cp(),pos:new Vector(0,0),color:["orange","red"][random(0,1)]})},checkBounds:function(){var t=this.sheet.rect.getRight(),e=this.sheet.rect.getBottom(),s=this.game.windowSize.width,i=this.game.windowSize.height;t>s&&(this.pos.x-=t-s),e>i&&(this.pos.y-=e-i),this.sheet.setPosition(this.pos)},destroy:function(){this.sheet.destroy()}}),MegaParticleExplosion=new Class({Extends:ParticleExplosion,initialize:function(t){Explosion.prototype.initialize.apply(this,arguments),this.particleVel=new Vector(200,0),this.particles=[],this.generateParticles(),this.sheet=new Sheet(new Rect(t.x,t.y,500,500)),this.ttl=2e3,this.generationDelay=.6,this.generationTimes=2,this.nextGenerate=this.generationDelay},update:function(t){this.nextGenerate-=t,this.nextGenerate<=0&&this.generationTimes>0&&(this.nextGenerate=this.generationDelay,this.generateParticles(),this.generationTimes--),ParticleExplosion.prototype.update.call(this,t)}}),Weapons={1:{name:"Cannon",id:"cannon",cannonClass:BallCannon},2:{name:"Laser",id:"laser",cannonClass:LaserCannon}},WeaponMap={cannon:Weapons[1],laser:Weapons[2]},SheetCanvas=new Class({initialize:function(rect){with(this.canvas=document.createElement("canvas"),this.canvas.className="KICKASSELEMENT",this.canvas.style)position="absolute",zIndex="1000000";
GameGlobals.kickass.registerElement(this.canvas),this.canvas.getContext&&(this.ctx=this.canvas.getContext("2d")),this.rect=rect,this.angle=0,this.updateCanvas(),document.body.appendChild(this.canvas)},tracePoly:function(t){if(t[0]){this.ctx.save(),this.ctx.translate(this.rect.size.width/2,this.rect.size.height/2),this.ctx.rotate(this.angle),this.ctx.beginPath(),this.ctx.moveTo(t[0].x,t[0].y);for(var e=0;e<t.length;e++)this.ctx.lineTo(t[e].x,t[e].y);this.ctx.restore()}},setAngle:function(t){this.angle=t},updateCanvas:function(){this.canvas.width!=this.rect.size.width&&(this.canvas.width=this.rect.size.width),this.canvas.height!=this.rect.size.height&&(this.canvas.height=this.rect.size.height),this.canvas.style.left=GameGlobals.kickass.scrollPos.x+(this.rect.pos.x-this.rect.size.width/2)+"px",this.canvas.style.top=GameGlobals.kickass.scrollPos.y+(this.rect.pos.y-this.rect.size.height/2)+"px"},drawLine:function(t,e,s,i){this.ctx.save(),this.ctx.translate(this.rect.size.width/2,this.rect.size.height/2),this.ctx.beginPath(),this.ctx.moveTo(t,e),this.ctx.lineTo(s,i),this.ctx.closePath(),this.ctx.stroke(),this.ctx.restore()},drawCircle:function(t,e){e=e||{x:0,y:0},this.ctx.save(),this.ctx.translate(this.rect.size.width/2,this.rect.size.height/2),e&&this.ctx.translate(e.x,e.y),this.ctx.beginPath(),this.ctx.arc(0,0,t,0,2*Math.PI,!0),this.ctx.fill(),this.ctx.closePath(),this.ctx.restore()},drawRect:function(t,e,s,i){this.ctx.save(),this.ctx.translate(this.rect.size.width/2,this.rect.size.height/2),this.ctx.translate(t,e),this.ctx.fillRect(t,e,s,i),this.ctx.restore(),this.ctx.fill()},drawImageFull:function(t){this.ctx.drawImage(t,0,0,this.rect.size.width,this.rect.size.height)},drawImage:function(t,e,s){this.ctx.save(),this.ctx.translate(this.rect.size.width/2+e,this.rect.size.height/2+s),this.ctx.rotate(this.angle),this.ctx.drawImage(t,0,-11),this.ctx.restore()},setFillColor:function(t){this.ctx.fillStyle=t},setStrokeColor:function(t){this.ctx.strokeStyle=t},setLineWidth:function(t){this.ctx.lineWidth=t},fillPath:function(){this.ctx.fill()},strokePath:function(){this.ctx.stroke()},clear:function(){this.ctx.clearRect(0,0,this.rect.size.width,this.rect.size.height)},destroy:function(){GameGlobals.kickass.unregisterElement(this.canvas),this.canvas.parentNode.removeChild(this.canvas)}}),Sheet=new Class({initialize:function(t){this.rect=t,this.drawer=new SheetCanvas(t)},clear:function(){this.drawer.clear()},setPosition:function(t){this.rect.pos=t.cp(),this.drawer.rect=this.rect,this.drawer.updateCanvas()},setAngle:function(t){this.drawer.setAngle(t)},drawPlayer:function(t){this.drawer.setFillColor("white"),this.drawer.setStrokeColor("black"),this.drawer.setLineWidth(1.5),this.drawer.tracePoly(t),this.drawer.fillPath(),this.drawer.tracePoly(t),this.drawer.strokePath()},drawBrokenPlayer:function(t,e){this.drawer.setStrokeColor("black"),this.drawer.setLineWidth(1.5);for(var s,i=1,n=t[0];s=t[i];i++,n=s){var o=e[i-1];this.drawer.drawLine(n.x+o.pos.x,n.x+o.pos.y,s.x+o.pos.x,s.y+o.pos.y)}},drawFlames:function(t){this.drawer.setLineWidth(1.5),this.drawer.setFillColor("red"),this.drawer.tracePoly(t.r),this.drawer.fillPath(),this.drawer.setFillColor("yellow"),this.drawer.tracePoly(t.y),this.drawer.fillPath()},drawBullet:function(){this.drawer.setFillColor(GameGlobals.bulletColor),this.drawer.drawCircle(2.5)},drawExplosion:function(t){for(var e,s=0;e=t[s];s++)this.drawer.setFillColor(e.color),this.drawer.drawRect(e.pos.x,e.pos.y,3,3)},drawFace:function(t){this.drawer.drawImageFull(t)},drawLaser:function(t,e){this.clear(),this.setPosition(t),this.drawer.setAngle(e.angle()),this.drawer.drawImage(GameGlobals.laserImage,0,0)},transformToSheetCoordinates:function(t){var e=t.cp().sub(new Vector(this.rect.size.width/2,this.rect.size.height/2));return e},destroy:function(){this.drawer.destroy()}}),initKickAss=function(){window.KICKASSGAME?window.KICKASSGAME.addPlayer():(window.KICKASSGAME=GameGlobals.kickass=new KickAss,window.KICKASSGAME.begin())};initKickAss()}("undefined"!=typeof exports?exports:window);
