// ==UserScript==
// @name         www.Libragar.pw 💡🤵 Libra - Agario YT Public BetaTest Server V1.6 💡
// @namespace    www.youtube.com/Libraa
// @homepage     https://www.Libragar.pw
// @version      1.6 💡
// @Discord      www.discord.com/invite/UuVHSZR   ||   Sign in to follow updates and events
// @match        *.agar.io/*
// @grant        none
// @run-at       document-body
// @Install-or-Update-latest-version ->> www.Libragar.pw  OR  https://greasyfork.org/en/scripts/420590-libra-agario-yt-public-test-server
 
 
// @AdBlocker V.02   : all ads in the game are removed; death video ads, Menu ads, Spectate Ads. left and right ad windows removed. (V0.2)
// @description      : I created a "Public" agario server myself on agar.io, and now it's in the testing phase (anyone can login)
// @Server-Features  : All Free 41+ Bots, 32x Split, original Agar.io, Minions/Bots Control Easy and play with your custom bots || BetaTest 100 minions FREE :) || - Raga-like game mode - My Server, Does not require captha verification :)
 
 
// @Update V1.6 ------->>
// A small change has been made to the control keys.
// MAP added (for you to remember where you last died). ||
// Connecting with the L key is disabled. "You can now join by pressing the Lamp icon OR emoji. however, you can activate it at any time. (their code is still in place.) ||
// Zoom out (the) has been added. ||
// For enthusiasts small FPS screen has been placed. (You can disable their codes.) ||
// You can then see the different game modes. but not now. // tell me if you want a new mod. the process speeds up :)) ||
// @Update V1.6 ------->>
 
// @WARNING! 💡 ->>  : After the game screen opens, press the " L " key OR " 💡 " Button" and then the Play key. " if the game does not open, refresh the page and try again " <<-- WARNING.. !!! 💡
 
// CONTROL KEY's //
// USER Control ->>  || " W " Macro Feed Mass || 32x Split   " A "   || 4x Split " R " || 8x Split " Y " || 16x Split " U " || Freeze " S " || Crazy Jump Macro (Selfie) " Q " || Libragar Public Server Join; " L " Key OR " 💡 " Button Function "
// BOT Control  ->>  || Macro Feed Mass " C " || 32x Split " Shift " || 4x Split " V " || 8x Split " B " || 16x Split " N " || Freeze " T " ||
// NOT: YOU CAN CHANGE IT WITH THE KEY YOU WANT. => To set the key you want, https://keycode.info use the link and press the letter you want -- then go to the section you want to change. and change the key number (there.event.keyCode == xx) (replace with the key number you want)
 
// ==/UserScript==
 
 
 
 
 
 
 
// --------------------------------------------------------------------------------------- ZOOM OUT ------------------------------------------------------------------------------------------------ // Start.
 
class mouseWheelZoom {
  constructor() {
    this.mOX = 0;
    this.mOY = 0;
    this.zoomValue = 0;
    this.cellX = 0;
    this.cellY = 0;
 
 
  }
  createBuffer(length) {
    return new DataView(new ArrayBuffer(length));
  }
  sendBuffer(buf) {
    if(this.ws && this.ws.readyState == 1) this.ws.send(buf);
  }
 
 
 
  sendMousePacket() {
    let buffer = this.createBuffer(29);
    buffer.setUint8(0, 4);
    buffer.setFloat64(1, ((window.clientXXX - window.innerWidth / 2) / this.zoomValue) + this.cellX, true);
    buffer.setFloat64(9, ((window.clientYYY - window.innerHeight / 2) / this.zoomValue) + this.cellY, true);
    buffer.setFloat64(17, 0, true);
    buffer.setUint32(25, true);
    this.sendBuffer(buffer);
  }
 
}
 
var observer = new MutationObserver(function(mutations){
  mutations.forEach(function(mutation) {
    mutation.addedNodes.forEach(function(node) {
      if (/agario\.core\.js/i.test(node.src)){
        observer.disconnect();
        node.parentNode.removeChild(node);
        var request = new XMLHttpRequest();
        request.open("get", node.src, true);
        request.send();
        request.onload = function(){
          var coretext = this.responseText;
          var newscript = document.createElement("script");
          newscript.type = "text/javascript";
          newscript.async = true;
          window._op = new mouseWheelZoom();
          newscript.textContent = replaceCore(coretext);
          document.body.appendChild(newscript);
        };
      }
    });
  });
});
observer.observe(document, {attributes:true, characterData:true, childList:true, subtree:true});
 
const replaceCore = core => {
  core = core.replace(/;if\((\w)<1\.0\){/i, `;if(0){`);
  core = core.replace(/0;\w\[\w\+...>>3\]=(\w);\w\[\w\+...>>3\]=(\w);\w\[\w\+...>>3\]=(\w);\w\[\w\+...>>3\]=(\w);/i, `$& if(Math.abs($3-$1)>14e3 && Math.abs($4-$2)>14e3){window._op.mOX = ($1+$3)/2; window._op.mOY = ($2+$4)/2};`);
 
 
  return core;
}
 
 
// --------------------------------------------------------------------------------------- ZOOM OUT ----------------------------------------------------------------------------------------------- // Finish.
 
 
 
 
 
 
 
 
// ----------------------------------------------------------------------------------------- FPS ------------------------------------------------------------------------------------------------- // Start.
   // ------------------------------------------------------- Delete all code Between "FPS - Start and Finish" to remove fps --------------------------------------------------------------------- //
 
$(document).ready(function(){
 
    $("body").append('<div id="fpsbg" style="position:absolute; top:5px; left:5px; background-color:rgba(0,0,0,0.3); color:#ffffff;  padding:5px;border-radius:5px;">💡 FPS: <span id="fps"></span></div>');
 
 
const fps = {
    sampleSize : 60,
    value : 0,
    _sample_ : [],
    _index_ : 0,
    _lastTick_: false,
    tick : function(){
        // if is first tick, just set tick timestamp and return
        if( !this._lastTick_ ){
            this._lastTick_ = performance.now();
            return 0;
        }
        // calculate necessary values to obtain current tick FPS
        let now = performance.now();
        let delta = (now - this._lastTick_)/1000;
        let fps = 1/delta;
        // add to fps samples, current tick fps value
        this._sample_[ this._index_ ] = Math.round(fps);
 
        // iterate samples to obtain the average
        let average = 0;
        for(i=0; i<this._sample_.length; i++) average += this._sample_[ i ];
 
        average = Math.round( average / this._sample_.length);
 
        // set new FPS
        this.value = average;
        // store current timestamp
        this._lastTick_ = now;
        // increase sample index counter, and reset it
        // to 0 if exceded maximum sampleSize limit
        this._index_++;
        if( this._index_ === this.sampleSize) this._index_ = 0;
        return this.value;
    }
}
 
function loop(){
    let fpsValue = fps.tick();
    window.fps.innerHTML = fpsValue;
    requestAnimationFrame( loop );
}
// set FPS calulation based in the last 120 loop cicles
fps.sampleSize = 120;
// start loop
loop();
 
 
});
 
// ------------------------------------------------------------------------------------------ FPS ----------------------------------------------------------------------------------------------- // Finish.
 
 
 
 
 
 
 
 
 
// ------------------------------------------------------------------------------------ USER CONTROLLER ------------------------------------------------------------------------------------------ // Start.
 
 
document.addEventListener ("DOMContentLoaded", DOM_ContentReady);
function DOM_ContentReady () {
 
window.addEventListener('keydown', keydown);
window.addEventListener('keyup', keyup);
function keydown(event) {
    if (event.keyCode == 87 || event.keyCode == 81) { // ----------------> // 87 Key // MACRO "FEED" "Start" // Press " W " //  ||  // 81 KEY // Crazy Jump Macro "FEED" // Press Key " Q " @1  //
        Feed = true;
        setTimeout(srrylibra, imlost);
    }
    if (event.keyCode == 65 || event.keyCode == 81) { // ----------------> // 65 Key // 32x & 64x & 128x & 256x & 512x Split // Press " A " //  ||  // 81 KEY // Crazy Jump Macro "SPLIT" // Press Key " Q " @1 //
        srrylibra2();
        setTimeout(srrylibra2, imlost);
        setTimeout(srrylibra2, imlost*2);
        setTimeout(srrylibra2, imlost*3);
        setTimeout(srrylibra2, imlost*4);
        setTimeout(srrylibra2, imlost*5);
        setTimeout(srrylibra2, imlost*6);
        setTimeout(srrylibra2, imlost*7);
        setTimeout(srrylibra2, imlost*8);
    }
    if (event.keyCode == 85) { // ---------------------------------------> // 85 Key // 16x split Split // Press Key " U " //
        srrylibra2();
        setTimeout(srrylibra2, imlost);
        setTimeout(srrylibra2, imlost*2);
        setTimeout(srrylibra2, imlost*3);
    }
    if (event.keyCode == 89) { // ---------------------------------------> // 89 Key // 8x Split // Press Key " Y " //
        srrylibra2();
        setTimeout(srrylibra2, imlost);
        setTimeout(srrylibra2, imlost*2);
    }
    if (event.keyCode == 82) { // ---------------------------------------> // 82 Key // 4x Split // Press Key " R " //
        srrylibra2();
        setTimeout(srrylibra2, imlost);
 
    }
    if (event.keyCode == 83) { // ---------------------------------------> // 83 Key // You User "Freeze"  // Press Key " S " //
        X = window.innerWidth/2;
        Y = window.innerHeight/2;
        $("canvas").trigger($.Event("mousemove", {clientX: X, clientY: Y}));
    }
}
function keyup(event) {
    if (event.keyCode == 87 || event.keyCode == 81) { // ---------------->  87 Key // W " MACRO "FEED" "Start" // Press Key " W " //  ||  // 81 KEY // Crazy Jump Macro "SPLIT" // Press Key " Q " @1  //
        Feed = false;
    }
}
function srrylibra() {
    if (Feed) {
        window.onkeydown({keyCode: 87}); // Key 87 - W // it is recommended not to change this place! //
        window.onkeyup({keyCode: 87}); //// Key 87 - W // it is recommended not to change this place! //
        setTimeout(srrylibra, imlost);
    }
}
function srrylibra2() {
    $("body").trigger($.Event("keydown", { keyCode: 32})); // Key 32 - SPACE // it is recommended not to change this place! //
    $("body").trigger($.Event("keyup", { keyCode: 32})); //// Key 32 - SPACE // it is recommended not to change this place! //
}
 
 
// ------------------------------------------------------------------------------------ USER CONTROLLER --------------------------------------------------------------------------------------- // Finish.
 
 
 
 
 
 
 
 
 
// ------------------------------------------------------------------------------------ BOT CONTROLLER ---------------------------------------------------------------------------------------- // Start.
 
 
window.__WebSocket = window.WebSocket;
window._WebSocket = window.WebSocket = function(ip) {
    return new window.fakeWebSocket(ip);
};
window.key = {
    x: false,
    c: false,
    t: false,
};
window.addEventListener("load", function() {
    OldSocket = window.__WebSocket;
    window.WebSocket = window.fakeWebSocket = function(ip) {
        var fakeWS = {};
        var ws = new OldSocket(ip);
        ws.binaryType = "arraybuffer";
        for (var i in ws) fakeWS[i] = ws[i];
        fakeWS.send = function() {
            if (window.key.x){
                arguments[0] = new Int8Array(1);
                arguments[0][0] = 22;
            } else if (window.key.c){
                arguments[0] = new Int8Array(1);
                arguments[0][0] = 23;
            } else if (window.key.t){
                arguments[0] = new Int8Array(1);
                arguments[0][0] = 24;
            }
            window.key = {};
            return ws.send.apply(ws, arguments);
        };
        ws.onmessage = function() {
            fakeWS.onmessage && fakeWS.onmessage.apply(ws, arguments);
        };
        ws.onopen = function() {
            fakeWS.readyState = 1;
            fakeWS.onopen.apply(ws, arguments);
        };
        return fakeWS;
    };
 });
document.addEventListener('keydown', function(e) {
    if (e.keyCode == 88) window.key.x = true; // ------------------------> MINION BOT'S -> // 88 Key // Split  // Press Key " X " //
    if (e.keyCode == 67) window.key.c = true; // ------------------------> MINION BOT'S -> // 67 Key // Feed   // Press Key " C " //
    if (e.keyCode == 84) window.key.t = true; // ------------------------> MINION BOT'S -> // 84 Key // Freeze // Press Key " T " //
 
 
    if(e.keyCode == 16){ // -----------------------------------------------> MINION BOT'S SPLIT // 16 Key // 32x & 64x & 128x & 256x & 512x Split  // Press Key " Shift " //
     window.key.x = !0;
     setTimeout(()=>{window.key.x=!0},40);
     setTimeout(()=>{window.key.x=!0},80);
     setTimeout(()=>{window.key.x=!0},120);
     setTimeout(()=>{window.key.x=!0},160);
     setTimeout(()=>{window.key.x=!0},200);
     setTimeout(()=>{window.key.x=!0},240);
     setTimeout(()=>{window.key.x=!0},280);
     setTimeout(()=>{window.key.x=!0},320);
     }
 
 
     if(e.keyCode == 78 ){ // --------------------------------------------> MINION BOT'S SPLIT // 78 Key // 16x Split // Press Key " N " //
     window.key.x = !0;
     setTimeout(()=>{window.key.x=!0},40);
     setTimeout(()=>{window.key.x=!0},80);
     setTimeout(()=>{window.key.x=!0},120);
     }
 
 
    if(e.keyCode == 66){ // ----------------------------------------------> MINION BOT'S SPLIT // 66 Key // 8x Split // Press Key " B " //
     window.key.x = !0;
     setTimeout(()=>{window.key.x=!0},40);
     setTimeout(()=>{window.key.x=!0},80);
     }
 
 
    if(e.keyCode == 86){ // ----------------------------------------------> MINION BOT'S SPLIT // 86 Key // 4x Split // Press Key " V " //
     window.key.x = !0;
     setTimeout(()=>{window.key.x=!0},40);
     }
});
 
 
// ------------------------------------------------------------------------------------ BOT CONTROLLER ---------------------------------------------------------------------------------------- // Finish.
 
 
 
 
 
 
 
 
 
 
 
// ------------------------------------------------------------------------------- CONNECT TO SERVER (L Key) ----------------------------------------------------------------------------------- // Start.
 
// Connecting to the server by connecting to the L key, To disable this feature: Put " // " at the beginning of each line of code like the example below. -
// CONNECT SERVER (L Key) - You must put all of them between (start and finish.) This feature does not remove the "L button" function, only the "L Key" feature.
 
// document.addEventListener("keypress", function(l) { // Server Connect Small Key, " L " // "Change"; Function("L") AND L.which "108" Change = Your Key code //
//    if (l.which == 108) {
//        window.xhttp = core.disableIntegrityChecks(true); core.connect("wss://minions-libra.codeanyapp.com"); // Libra Agar.io Test Server // Button Function L //
//
//    }
// });
 
 
 
 
 
 
/*   //////// HEY ! this feature has been disabled. to activate. delete this line completely. (There is 1 more place to delete below, likewise) // <---> LINE ALL DELETE.. <--->
 
document.addEventListener("keypress", function(l) { // Server Connect Small Key, " l " // "Change"; Function(" l ") AND L.which "108" Change = Your Key code //
    if (l.which == 108) {
        window.xhttp = core.disableIntegrityChecks(true); core.connect("wss://minions-libra.codeanyapp.com"); // Libra Agar.io Test Server // Button Function L //
 
              (function() {
              core.setMinimap(1)})()
              core.playersMinimap(1)
              core.setSkins (0)
 
    }
});
 
document.addEventListener("keypress", function(L) { // Server Connect  Big Key, " L " // "Change"; Function("L") AND L.which "76" Change = Your Key code //
    if (L.which == 76) {
        window.xhttp = core.disableIntegrityChecks(true); core.connect("wss://minions-libra.codeanyapp.com"); // Libra Agar.io Test Server // Button Function L //
 
               (function() {
               core.setMinimap(1)})()
               core.playersMinimap(1)
               core.setSkins (0)
 
    }
 });
 
*/ /////// HEY ! this feature has been disabled. to activate. delete this line completely. (Likewise, there is 1 more place to be deleted above) // <---> LINE ALL DELETE.. <--->
 
 
 
 
 
 
// MANUEL --- To connect manually, F12 --> Console --> window.xhttp = core.disableIntegrityChecks(true); core.connect("wss://test-libraagarioyttest.codeanyapp.com"); --> ENTER
// if you are using a different scripts --> wss://test-libraagarioyttest.codeanyapp.com --> Paste this in servername.
 
// ------------------------------------------------------------------------------- CONNECT TO SERVER (L Key) ----------------------------------------------------------------------------------- // Finish.
 
 
 
 
 
 
 
 
 
 
 
// ------------------------------------------------------------------------------------- ADS BLOCKED ----------------------------------------------------------------------------------------- // Start.
 
var Libra = document.getElementById('adbg');
if (Libra) { Libra.parentNode.removeChild(Libra); }
 
var Libra1 = document.getElementById('adsBottom');
if (Libra1) { Libra1.parentNode.removeChild(Libra1); }
 
var Libra2 = document.getElementById('adsGameOver');
if (Libra2) { Libra2.parentNode.removeChild(Libra2); }
 
var Libra3 = document.getElementById('adsLeft');
if (Libra3) { Libra3.parentNode.removeChild(Libra3); }
 
var Libra4 = document.getElementById('adsRight');
if (Libra4) { Libra4.parentNode.removeChild(Libra4); }
 
var Libra5 = document.getElementById('socialStats');
if (Libra5) { Libra5.parentNode.removeChild(Libra5); }
 
var Libra6 = document.getElementById('captchaWindowOFF'); // delete the text " OFF " to activate
if (Libra6) { Libra6.parentNode.removeChild(Libra6); }
 
var Libra7 = document.getElementById('applixir_blockerOFF'); // delete the text " OFF " to activate
if (Libra7) { Libra7.parentNode.removeChild(Libra7); }
 
var Libra8 = document.getElementById('instructionsOFF'); // delete the text " OFF " to activate
if (Libra8) { Libra8.parentNode.removeClass(Libra8); }
 
var Libra9 = document.getElementById('advertisement');
if (Libra9) { Libra9.parentNode.removeChild(Libra9); }
 
 
// ------------------------------------------------------------------------------------- ADS BLOCKED ----------------------------------------------------------------------------------------- // Finish.
 
 
 
 
 
 
 
// --------------------------------------------------------------------------------- SCREEN TEXT AND ETC.. ----------------------------------------------------------------------------------- // Start.
 
document.getElementById("mainui-app").style.color = "DarkBlue"; // You can change or delete the color you see in this "agar.io text panel color"
 
var Feed = false;
var Dingus = false;
var imlost = 35;
var instructions = document.getElementById("mainui-ads");
instructions.style.lineHeight = "1.90";
instructions.style.fontSize = "15.8px";
instructions.style.marginTop = "+0px";
instructions.innerHTML +=
    '<br>' +
    '<center><font color=Blue> Press <button id="id1234"><b>💡</b></button> to Join the Libra Beta server </font></center></a>' +
             /* '<center><font color=Blue> Press <button id="id12345"><b>Buton2</b></button> to Join the Libra Beta server </font></center></a>' +
                '<center><font color=Blue> Press <button id="id123456"><b>Buton3</b></button> to Join the Libra Beta server </font></center></a>' + */
    '<center><font color=DarkBlue> Bot Control: <b>X</b> Split - <b>C</b> Feed Mass </font></center></a>' + 
    '<center><a href=http://www.youtube.com/Libraa target=_blank><font color=Blue><b> Libra Youtube </b></font></center></a>'+
    '<center><a href=https://discord.gg/UuVHSZR target=_blank><font color=#72cb31>💡 Discord Group 💡</font></center></a>' +
    '<center><a href=https://www.Libragar.pw target=_blank><font color=Blue>Update to the latest version(Click)</font></center></a>' +
    '<center></font></center></a><font> The page if sign-in does not appear <a href=https://Agar.io><font color=#72cb31> Refresh </font></center></a>' +
    '<center><span style="font-size: 15px;"><font color=Blue><p id="paragraf1" style="display: none;">💡 User C. Keys -> <b>A</b> - <b>R</b> - <b>Y</b> - <b>U</b> - <b>S</b> - <b>Q</b> <br> <span style="font-size: 15.5.0px;">💡 Minions C. Keys-> <b>Shift</b> - <b>V</b> - <b>B</b> - <b>N</b> - <b>T</b> <button id="controllist2"><span style="font-size: 14.0px;"><b>Meanings</b></button></font></center></a></p>' +
    '<b><button id="controllist"><span style="font-size: 12.5px;">OTHER CONTROLLERS</b></button>' +
         '<div style="text-align:center"><span style="font-size: 14.4px;"><font color=Blue><p id="paragraf2" style="display: none;"> <font color=DarkBlue> <b>||  USER Control   ||  __💡__  || BOT Control  ||&nbsp;&nbsp;  <br>&nbsp;&nbsp;&nbsp;&nbsp;  32x Split " A " &nbsp;&nbsp; &nbsp;______&nbsp;&nbsp;&nbsp;&nbsp;  32x Split " Shift "   </br>  4x Split " R "&nbsp;  &nbsp;______ &nbsp;&nbsp;&nbsp;  4x Split " V "   </br>  8x Split " Y " &nbsp;&nbsp; ______ &nbsp;&nbsp;&nbsp; 8x Split " B "   </br>  16x Split " U " &nbsp;&nbsp; ______ &nbsp;&nbsp;  16x Split " N "  </br> Freeze " S "&nbsp;&nbsp; ______ &nbsp;&nbsp; Freeze " T "  </br>   Crazy Jump Macro (U. Selfie) " Q "</br> turn off the little button first :)  </div></b> </font></center></a>' ;
    $("#controllist").click(function(){
    $("#paragraf1").toggle();
 
});
        $("#controllist2").click(function(){
        $("#paragraf2").toggle();
 
});
 
// --------------------------------------------------------------------------------- SCREEN TEXT AND ETC.. ------------------------------------------------------------------------------------ // Finish. Aryusq - Shift V B N T
 
 
// ----------------------------------------------------------------------- CONNECTING LAMP :) | And little things ----------------------------------------------------------------------------- // Start.
 
 
    document.getElementById('id1234').addEventListener('click', function(event) {
    window.xhttp = core.disableIntegrityChecks(true); core.connect("wss://minions-libra.codeanyapp.com"); // "button" connect wss
 
 
        (function() {
 
        core.setMinimap(1)})()
        core.playersMinimap(1)
        core.setSkins (0)
 
 
});
 
 
 
 
 
 
/*               document.getElementById('id12345').addEventListener('click', function(event) {
               window.xhttp = core.disableIntegrityChecks(true); core.connect("wss://minions-libra.codeanyapp.com"); // "Button2" connect wss
 
                         (function() {
                         'use strict';
 
                         core.setMinimap(1)})()
                         core.playersMinimap(1)
                         core.setSkins (0)
});
               document.getElementById('id123456').addEventListener('click', function(event) {
               window.xhttp = core.disableIntegrityChecks(true); core.connect("wss://minions-libra.codeanyapp.com"); // "Button3" connect wss
 
                         (function() {
                         'use strict';
 
                         core.setMinimap(1)})()
                         core.playersMinimap(1)
                         core.setSkins (0)
         
});
 
*/
 
 
 
// ----------------------------------------------------------------------- CONNECTING LAMP :) | And little things ----------------------------------------------------------------------------- // Finish.
 
 
 
 
   function pageFullyLoaded () {}
 
 
}
 
 
 
 
 
 
 
 
 
 
console.log('%cwww.Libragar.pw', 'font-size:45px;color:#00008B;text-shadow:0 1px 0 #ccc,0 2px 0 #c9c9c9,0 35px 0 #577b,0 4px 0 #b9b9b9,0 5px 0 #aaa,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),5 220px 105px rgba(0,0,0,.2),0 90px 90px rgba(55,55,12,.15);');
console.log('%c Libragar Script Version V1.6', 'font-size:25px;color:#fff;text-shadow:0 0px 0 #ccc,0 0px 0 #c9c9c9,0 3px 0 #bbb,0 0px 0 #b9b9b9,0 0px 0 #aaa,0 0px 0px rgba(0,0,0,.1),0 0 0px rgba(0,0,0,.1),0 0px 0px rgba(0,0,0,.3),0 00x 0px rgba(0,0,0,.2),0 0px 00px rgba(0,0,0,.25),0 0px 0px rgba(0,0,0,.2),0 00px 00px rgba(0,0,0,.15);');
console.log('%cwww.Youtube.com/Libraa 💡', 'font-size:30px;color:#00008B;text-shadow:0 1px 0 #ccc,0 2px 0 #c9c9c9,0 35px 0 #577b,0 4px 0 #b9b9b9,0 5px 0 #aaa,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),5 220px 105px rgba(0,0,0,.2),0 90px 90px rgba(55,55,12,.15);');
 
// @Update V1.6 ->>
// A small change has been made to the control keys.
// MAP added (for you to remember where you last died). ||
// Connecting with the L key is disabled. "You can now join by pressing the Lamp icon OR emoji. however, you can activate it at any time. (their code is still in place.) ||
// Zoom out (the) has been added. ||
// For enthusiasts small FPS screen has been placed. (You can disable their codes.) ||
// You can then see the different game modes. but not now. // tell me if you want a new mod. the process speeds up :)) ||
// @Update V1.6 ->>
 
 
 
// After installing the script, connect by pressing the " L " key OR " 💡 " Button" "If the screen does not appear, press the play button with" ESC ". ((Simply, 1. Script Upload, 2. Agar.io join, 3. L press button and play, 4. Warning! ->> .If the screen is not displayed, press the esc key. then press the play button
// @WARNING! 💡 ->> : After the game screen opens, press the "L key OR " 💡 " Button" and then the Play key. " if the game does not open, refresh the page and try again " <<-- WARNING.. !!! 💡
// i am grateful for coding helping me; null234, m bayt918, samira, Jimboy3100, root. 💡 // I asked for help with problems that I could not handle on my own and the friends here helped and some of them blocked me later. :)
// Thanks for your support,coding I love you very much 😊 //
// I may need some help with coding \|/ Discord : Libra#0014 \|/
 
 
// https://www.youtube.com/Libraa // LIBRA TEST PUBLIC SERVER 💡🤵 // Open Source // www.Libragar.pw // www.discord.com/invite/UuVHSZR
// I LOVE YOU Solo Game Play :) - Libra