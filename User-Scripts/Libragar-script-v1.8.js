// ==UserScript==
// @name         🤵 Libragar Mode V1.8 💡 Libra - Agario YT | www.Libragar.pw | 100 Free Minions/Bots 💡
// @namespace    www.youtube.com/Libraa
// @homepage     https://www.Libragar.pw
// @version      1.8 💡
// @Discord      www.discord.com/invite/UuVHSZR   ||   Sign in to follow updates and events
// @match        *.agar.io/*
// @grant        none
// @run-at       document-body
// @Install-or-Update-latest-version ->> www.Libragar.pw  OR  https://greasyfork.org/en/scripts/420590-libra-agario-yt-public-test-server

// @AdBlocker V.02   : all ads in the game are removed; death video ads, Menu ads, Spectate Ads. left and right ad windows removed. (V0.2)
// @description      : I created a "Public" agario server myself on agar.io, and now it's in the testing phase (anyone can login)
// @Server-Features  : All Free 41+ Bots, 32x Split, original Agar.io, Minions/Bots Control Easy and play with your custom bots || BetaTest 100 minions FREE :) || - Raga-like game mode - My Server, Does not require captha verification :)

// @Update V1.8 ->>
// - WARNING ! The server name has been changed for minions mode. this needed to change. (you cannot join minions mode if you do not update it.) WARNING !
// - Put | between A and B Nick to make it moving, example nick (A|B).      "|" how => (alt gr and - )     (NOT: others Players can't see)
// in the new version Plugin, the number of nick characters is 999. but the number of nick characters by the server is limited to 15 (. other players will only see 15 characters of your nickname.)
// - Now you can see the names of game modes. (if you like the old one better. specify feedback.)
// @Update V1.8 ->>



// @WARNING! ->>  : After the game screen opens, press the  " 💡 " Button " Gamem Modes and then the Play key. " if the game does not open, refresh the page and try again " <<-- WARNING.. !!!

// CONTROL KEY's //
// USER Control ->>  || " W " Macro Feed Mass || 32x Split   " A "   || 4x Split " R " || 8x Split " Y " || 16x Split " U " || Freeze " S " || Crazy Jump Macro (Selfie) " Q " ||
// BOT Control  ->>  || Macro Feed Mass " C " || 32x Split " Shift " || 4x Split " V " || 8x Split " B " || 16x Split " N " || Freeze " D " ||
// NOT: YOU CAN CHANGE IT WITH THE KEY YOU WANT. => To set the key you want, https://keycode.info use the link and press the letter you want -- then go to the section you want to change. and change the key number (there.event.keyCode == xx) (replace with the key number you want)

// @updateURL    http://userscripts.libragar.pw/Libragar.js
// @downloadURL  http://userscripts.libragar.pw/Libragar.js


// ==/UserScript==





// --------------------------------------------------------------------------------------- ZOOM OUT AND FPS -------------------------------------------------------------------------------------- // Start.
                                                         // ORIGIN SCRIPT => https://greasyfork.org/en/scripts/382444-dstool-by-doritos //




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

// ---------------------------------------------------------------------------------------------- FPS -------------------------------------------------------------------------------------------- //

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

// --------------------------------------------------------------------------------------- ZOOM OUT AND FPS -------------------------------------------------------------------------------------- // Finish.









// --------------------------------------------------------------------------------------- USER CONTROLLER --------------------------------------------------------------------------------------- // Start.
                                                         // ORIGIN SCRIPT => I'm not sharing the orginal code. it contains profanity. //

var Feed = false;
var Librakeys2 = 35;
// var Dingus = false;

document.addEventListener ("DOMContentLoaded", DOM_ContentReady);
function DOM_ContentReady () {

window.addEventListener('keydown', keydown);
window.addEventListener('keyup', keyup);
function keydown(event) {
    if (event.keyCode == 87 || event.keyCode == 81) { // ----------------> // Key Number 87 // MACRO "FEED" "Start" // Press " W " //                  ||  // Key Number 81 // Crazy Jump Macro "FEED" // Press Key " Q " @1  //
        Feed = true;
        setTimeout(Librakeys1, Librakeys2);
    }
    if (event.keyCode == 65 || event.keyCode == 81) { // ----------------> // Key Number 65 // 32x & 64x & 128x & 256x & 512x Split // Press " A " //  ||  // Key Number 81 // Crazy Jump Macro "SPLIT" // Press Key " Q " @1 //
       Librakeys3();
        setTimeout(Librakeys3, Librakeys2);
        setTimeout(Librakeys3, Librakeys2*2);
        setTimeout(Librakeys3, Librakeys2*3);
        setTimeout(Librakeys3, Librakeys2*4);
        setTimeout(Librakeys3, Librakeys2*5);
        setTimeout(Librakeys3, Librakeys2*6);
        setTimeout(Librakeys3, Librakeys2*7);
        setTimeout(Librakeys3, Librakeys2*8);
    }
    if (event.keyCode == 85) { // ---------------------------------------> // Key Number 85 // 16x Split // Press Key " U " //
        Librakeys3();
        setTimeout(Librakeys3, Librakeys2);
        setTimeout(Librakeys3, Librakeys2*2);
        setTimeout(Librakeys3, Librakeys2*3);
    }
    if (event.keyCode == 89) { // ---------------------------------------> // Key Number 89 // 8x Split // Press Key " Y " //
        Librakeys3();
        setTimeout(Librakeys3, Librakeys2);
        setTimeout(Librakeys3, Librakeys2*2);
    }
    if (event.keyCode == 82) { // ---------------------------------------> // Key Number 82 // 4x Split // Press Key " R " //
        Librakeys3();
        setTimeout(Librakeys3, Librakeys2);

//    } // 2x Split
//    if (event.keyCode == 70) { // ---------------------------------------> // Key Number ? // 2x Split // Press Key " ? " //
//        Librakeys3();

 }


    if (event.keyCode == 83) { // ---------------------------------------> // Key Number 83 // User "Freeze" // Press Key " S " // @2
        X = window.innerWidth/2;
        Y = window.innerHeight/2;
        $("canvas").trigger($.Event("mousemove", {clientX: X, clientY: Y}));
    }
}
function keyup(event) {
    if (event.keyCode == 87 || event.keyCode == 81) { // ---------------> // Key Number 87 // W MACRO "FEED" "Start" // Press Key " W " //             ||  // Key Number 81 // Crazy Jump Macro "SPLIT" // Press Key " Q " @1  //
        Feed = false;
    }

//    if (event.keyCode == 79) {
//        Dingus = false;
//    }
}
function Librakeys1() {
    if (Feed) {
        window.onkeydown({keyCode: 87}); // Key Number 87 // W // it is recommended not to change this place! //
        window.onkeyup({keyCode: 87});   // Key Number 87 // W // it is recommended not to change this place! //
        setTimeout(Librakeys1, Librakeys2);
    }
}
function Librakeys3() {
    $("body").trigger($.Event("keydown", { keyCode: 32})); // Key Number 32 // SPACE // it is recommended not to change this place! //
    $("body").trigger($.Event("keyup", { keyCode: 32}));   // Key Number 32 // SPACE // it is recommended not to change this place! //
}


// ------------------------------------------------------------------------------------ USER CONTROLLER --------------------------------------------------------------------------------------- // Finish.









// ------------------------------------------------------------------------------------ BOT CONTROLLER ---------------------------------------------------------------------------------------- // Start.
                                                 // ORIGIN SCRIPT => https://github.com/Adil950/OgarMulti/blob/master/XCT-Control%20bots.js //

window.__WebSocket = window.WebSocket;
window._WebSocket = window.WebSocket = function(ip) {
    return new window.fakeWebSocket(ip);
};
window.key = {
    x: false,
    c: false,
    d: false,
    s: false,
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
            } else if (window.key.d){
                arguments[0] = new Int8Array(1);
                arguments[0][0] = 24;
            } else if (window.key.s){
                arguments[0] = new Int8Array(1);
                arguments[0][0] = 25;
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
    if (e.keyCode == 88) window.key.x = true; // ------------------------> MINION BOT'S -> -> -> // Key Number 88 // Split  // Press Key " X " //
    if (e.keyCode == 67) window.key.c = true; // ------------------------> MINION BOT'S -> -> -> // Key Number 67 // Feed   // Press Key " C " //
    if (e.keyCode == 68) window.key.d = true; // ------------------------> MINION BOT'S -> -> -> // Key Number 68 // Freeze // Press Key " D " //
    if (e.keyCode == 83) window.key.s = true; // ------------------------> USER SERVER FREEZE -> // Key Number 83 // Freeze // Press Key " S " // @2


    if(e.keyCode == 16) { // --------------------------> MINION BOT'S SPLIT -> // Key Number 16 // 32x & 64x & 128x & 256x & 512x Split  // Press Key " Shift " //
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


     if(e.keyCode == 78) { // -------------------------------------------> MINION BOT'S SPLIT -> // Key Number 78 // 16x Split // Press Key " N " //
     window.key.x = !0;
     setTimeout(()=>{window.key.x=!0},40);
     setTimeout(()=>{window.key.x=!0},80);
     setTimeout(()=>{window.key.x=!0},120);
     }


    if(e.keyCode == 66) { // ---------------------------------------------> MINION BOT'S SPLIT -> // Key Number 66 // 8x Split // Press Key " B " //
     window.key.x = !0;
     setTimeout(()=>{window.key.x=!0},40);
     setTimeout(()=>{window.key.x=!0},80);
     }


    if(e.keyCode == 86) { // ---------------------------------------------> MINION BOT'S SPLIT -> // Key Number 86 // 4x Split // Press Key " V " //
     window.key.x = !0;
     setTimeout(()=>{window.key.x=!0},40);
     }
});


// ------------------------------------------------------------------------------------ BOT CONTROLLER ---------------------------------------------------------------------------------------- // Finish.










// ------------------------------------------------------------------------------- (!old feature. is now obsolete.) CONNECT TO SERVER (L Key) ----------------------------------------------------------------------------------- // Start.

// Connecting to the server by connecting to the L key, To disable this feature: Put " // " at the beginning of each line of code like the example below. -
// CONNECT SERVER (L Key) - You must put all of them between (start and finish.) This feature does not remove the "L button" function, only the "L Key" feature.

// document.addEventListener("keypress", function(l) { // Server Connect Small Key, " L " // "Change"; Function("L") AND L.which "108" Change = Your Key code //
//    if (l.which == 108) {
//        window.xhttp = core.disableIntegrityChecks(true); core.connect("wss://minions-libra.codeanyapp.com"); // Libra Agar.io Test Server // Button Function L //
//
//    }
// });






//   //////// HEY ! this feature has been disabled. to activate. delete this line completely. (There is 1 more place to delete below, likewise) // <---> LINE ALL DELETE.. <--->

//  document.addEventListener("keypress", function(l) { // Server Connect Small Key, " l " // "Change"; Function(" l ") AND L.which "108" Change = Your Key code //
//    if (l.which == 108) {
//              (function() {
//               core.setMinimap(1)})()
//               core.playersMinimap(1)
//               core.setSkins (0)
//
//     }
// });
//
//  document.addEventListener("keypress", function(L) { // Server Connect  Big Key, " L " // "Change"; Function("L") AND L.which "76" Change = Your Key code //
//     if (L.which == 76) {
//         window.xhttp = core.disableIntegrityChecks(true); core.connect("wss://minions-libra.codeanyapp.com"); // Libra Agar.io Test Server // Button Function L //
//
//                (function() {
//                core.setMinimap(1)})()
//                core.playersMinimap(1)
//                core.setSkins (0)
//
//     }
//  });
//
// /////// HEY ! this feature has been disabled. to activate. delete this line completely. (Likewise, there is 1 more place to be deleted above) // <---> LINE ALL DELETE.. <--->






// MANUEL --- To connect manually, F12 --> Console --> window.xhttp = core.disableIntegrityChecks(true); core.connect("wss://test-libraagarioyttest.codeanyapp.com"); --> ENTER
// if you are using a different scripts --> wss://test-libraagarioyttest.codeanyapp.com --> Paste this in servername.

// ------------------------------------------------------------------------------- (!old feature. is now obsolete.) CONNECT TO SERVER (L Key) -------------------------------------------------------------------------------- // Finish.











// ------------------------------------------------------------------------------------- ADS BLOCKED ---------------------------------------------------------------------------------------- // Start.

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


// ------------------------------------------------------------------------------------- ADS BLOCKED ---------------------------------------------------------------------------------------- // Finish.











// ---------------------------------------------------------------------- SCREEN TEXT AND CONNECTING LAMP Button - WSS ----------------------------------------------------------------------- // Start.


document.getElementById("mainui-app").style.color = "DarkBlue"; // You can change or delete the color you see in this "agar.io text panel color"

var instructions = document.getElementById("mainui-ads");
instructions.style.lineHeight = "1.90";
instructions.style.fontSize = "15.8px";
instructions.style.marginTop = "+0px";
instructions.innerHTML +=

    '<br>' +
    '<center><font color=Blue> Press <b><button id="connectlistbutton"><span style="font-size: 16.5px;">💡</b></button> to Join the Libra Beta servers </font></center></a>' +
    '<center><span style="font-size: 15px;"><font color=Blue><p id="connectlistparagraf" style="display: none;">' +

    '<select id="oyunmodlari" class="btn btn-primary" onchange="window.xhttp = core.disableIntegrityChecks(true); core.connect($(this).val());" required="">'+
    '<option selected="" value="wss://hiddenserver.libragar.pw">&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;Libragar Modes</option>'+
    '<option value="wss://minions32.libragar.pw">Minions (100 Minions)</option>'+
    '<option value="wss://bigffa.libragar.pw">Big FFA</option>'+
    '<option value="wss://64xselfeed.libragar.pw">Selfeed</option>'+
    '<option value="wss://96xmonotone.libragar.pw">Monotone Pop</option>'+
   /* '<option value="wss://yoursub.yourdomain.com">YourModeName</option>'+ */
   /* '<option value="ws://localhost:3000">Localhost</option>'+ */
    '</select>'+


//    '<button id="minions"><b><span style="font-size: 17.0px;">💡</b></button><a>&nbsp; </a>' +
//    '<button id="bigffa"><b><span style="font-size: 17.0px;">🤵</b></button><a>&nbsp; </a>' +
//
//    '<button id="64xselfeed"><b><span style="font-size: 17.0px;">🔵</b></button><a>&nbsp; </a>' +
//    '<button id="64xmonotone"><b><span style="font-size: 17.0px;">🟡</b></button><a>&nbsp; </a>' +
//    '<button id="otherserver5"><b><span style="font-size: 17.0px;">🙋‍♂️</b></button><a>&nbsp; </a>' +
//    '<button id="localhost"><b><span style="font-size: 17.0px;">💿</b></button><a></a>' +



    '<center><font color=DarkBlue> Bot Control: <b>X</b> Split - <b>C</b> Feed Mass </font></center></a>' +
    '<center><a href=http://www.youtube.com/Libraa target=_blank><font color=Blue><b> Libra Youtube </b></font></center></a>'+
    '<center><a href=https://discord.gg/UuVHSZR target=_blank><font color=#72cb31>💡 Discord Group 💡</font></center></a>' +
    '<center><a href=https://www.Libragar.pw target=_blank><font color=Blue>Update to the latest version(Click)</font></center></a>' +
    '<center></font></center></a><font> The page if sign-in does not appear <a href=https://Agar.io><font color=#72cb31> Refresh </font></center></a>' +
         '<b><button id="controlkeysbutton"><span style="font-size: 12.5px;"><b>CONTROL ⌨ &nbsp;KEYS</b></b></button>' +
         '<div style="text-align:center"><span style="font-size: 14.4px;"><font color=Blue><p id="controlkeysparagraf" style="display: none;"> <font color=DarkBlue> <b>&nbsp;&nbsp;||  USER Control   ||  __💡__  || BOT Control  ||&nbsp;&nbsp;  <br>&nbsp;&nbsp;&nbsp;&nbsp;  32x Split " A " &nbsp;&nbsp; &nbsp;______&nbsp;&nbsp;&nbsp;&nbsp;  32x Split " Shift "   </br>  4x Split " R "&nbsp;&nbsp;&nbsp;  &nbsp;______ &nbsp;&nbsp;&nbsp;&nbsp;  4x Split " V "   </br>  8x Split " Y " &nbsp;&nbsp;&nbsp; ______ &nbsp;&nbsp;&nbsp; 8x Split " B "   </br>  16x Split " U " &nbsp;&nbsp;&nbsp; ______ &nbsp;&nbsp;  16x Split " N " &nbsp; </br> Freeze " S "&nbsp;&nbsp;&nbsp;&nbsp; ______ &nbsp;&nbsp;&nbsp; Freeze " D " &nbsp; </br> Selfie Split " Q " &nbsp&nbsp;&nbsp; ______ &nbsp; &nbsp;<span style="font-size: 17.0px;"><font color=Yellow><b>Libragar V1.8 :)</b>&nbsp; &nbsp;&nbsp; &nbsp; </br></div></b> </font></center></a>' ;




    $("#connectlistbutton").click(function(){
    $("#connectlistparagraf").toggle();
    });

         $("#controlkeysbutton").click(function(){
         $("#controlkeysparagraf").toggle();

         });





window.onload = () => {
    core.setSkins (0)
    core.setMinimap(1)
    core.playersMinimap(1)
}





// ---------------------------------------------------------------------- SCREEN TEXT AND CONNECTING LAMP Button - WSS ----------------------------------------------------------------------- // Finish.










// --------------------------------------------------------------------------------- Animated nick script ------------------------------------------------------------------------------------ // Start.
                                                 // ORIGIN SCRIPT => https://greasyfork.org/en/scripts/387091-agario-nickname-extender/code //
// Put | between A and B Nick to make it moving, example nick (A|B).      "|" how => (alt gr and - )     (NOT: others Players can't see)


(function() {

    var nicknames = ["placeholder", "placeholder2"];
    var iter = -1;

    window.setInterval(function(){
        const ingame = agarApp.API._inGame;
        var l = nicknames.length;
        if(!ingame) {return;}
        if(l === 1) {return;}
        iter++;
        if(iter >= l) {iter = 0;}
        core.sendNick(nicknames[iter]);
    }, 2000);
    'use strict';
    document.addEventListener('keypress', function() {
        document.getElementById('nick').setAttribute("maxlength", "999");
        console.log(document.getElementById('nick').getAttribute("maxlength"));
    });
    const pb = document.getElementById('play')
    pb.onclick = function() {

    /*  core.setMinimap(true);
        core.playersMinimap(true);
    */
        const val = document.getElementById('nick').value;
        core.sendNick(val);
        var nicks = val.split('|');
        console.log(nicks);
        iter = -1;
        nicknames = nicks;
    }
})();



// ------------------------------------------------------------------------------- Animated nick script -------------------------------------------------------------------------------------- // Start.










// ------------------------------------------------------------------------------ (!old feature. is now obsolete.) CONNECTING LAMP - WSS -------------------------------------------------------------------------------------- // Start.

/*

    document.getElementById('minions').addEventListener('click', function(event) {
    window.xhttp = core.disableIntegrityChecks(true); core.connect("wss://www.minions32.libragar.pw"); // "button" connect wss

        (function() {

        core.setMinimap(1)})()
        core.playersMinimap(1)
        core.setSkins (0)


});




           document.getElementById('bigffa').addEventListener('click', function(event) {
           window.xhttp = core.disableIntegrityChecks(true); core.connect("wss://bigffa.libragar.pw"); // "Button3" connect wss

                    (function() {

                    core.setMinimap(1)})()
                    core.playersMinimap(1)
                    core.setSkins (0)

});




           document.getElementById('64xselfeed').addEventListener('click', function(event) {
               window.xhttp = core.disableIntegrityChecks(true); core.connect("wss://64xselfeed.libragar.pw"); // "Button3" connect wss

                         (function() {

                         core.setMinimap(1)})()
                         core.playersMinimap(1)
                         core.setSkins (0)

});




           document.getElementById('64xmonotone').addEventListener('click', function(event) {
               window.xhttp = core.disableIntegrityChecks(true); core.connect("wss://96xmonotone.libragar.pw"); // "Button3" connect wss

                         (function() {

                         core.setMinimap(1)})()
                         core.playersMinimap(1)
                         core.setSkins (0)

});




           document.getElementById('otherserver5').addEventListener('click', function(event) {
               window.xhttp = core.disableIntegrityChecks(true); core.connect("wss://minions-libra.codeanyapp.com"); // "Button3" connect wss

                         (function() {

                         core.setMinimap(1)})()
                         core.playersMinimap(1)
                         core.setSkins (0)

});




           document.getElementById('localhost').addEventListener('click', function(event) {
               window.xhttp = core.disableIntegrityChecks(true); core.connect("ws://localhost:3000"); // "Button3" connect wss

                         (function() {

                         core.setMinimap(1)})()
                         core.playersMinimap(1)
                         core.setSkins (0)

});

*/

// ------------------------------------------------------------------------------ (!old feature. is now obsolete.) CONNECTING LAMP - WSS -------------------------------------------------------------------------------------- // Finish.




   function pageFullyLoaded () {}


};














console.log('%cwww.Libragar.pw', 'font-size:45px;color:#00008B;text-shadow:0 1px 0 #ccc,0 2px 0 #c9c9c9,0 35px 0 #577b,0 4px 0 #b9b9b9,0 5px 0 #aaa,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),5 220px 105px rgba(0,0,0,.2),0 90px 90px rgba(55,55,12,.15);');
console.log('%c Libragar Script Version V1.8', 'font-size:25px;color:#fff;text-shadow:0 0px 0 #ccc,0 0px 0 #c9c9c9,0 3px 0 #bbb,0 0px 0 #b9b9b9,0 0px 0 #aaa,0 0px 0px rgba(0,0,0,.1),0 0 0px rgba(0,0,0,.1),0 0px 0px rgba(0,0,0,.3),0 00x 0px rgba(0,0,0,.2),0 0px 00px rgba(0,0,0,.25),0 0px 0px rgba(0,0,0,.2),0 00px 00px rgba(0,0,0,.15);');
console.log('%cwww.Youtube.com/Libraa 💡', 'font-size:30px;color:#00008B;text-shadow:0 1px 0 #ccc,0 2px 0 #c9c9c9,0 35px 0 #577b,0 4px 0 #b9b9b9,0 5px 0 #aaa,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),5 220px 105px rgba(0,0,0,.2),0 90px 90px rgba(55,55,12,.15);');






// @Update V1.8 ->>
// - WARNING ! The server name has been changed for minions mode. this needed to change. (you cannot join minions mode if you do not update it.) WARNING !
// - Put | between A and B Nick to make it moving, example nick (A|B).      "|" how => (alt gr and - )     (NOT: others Players can't see)
// in the new version Plugin, the number of nick characters is 999. but the number of nick characters by the server is limited to 15 (. other players will only see 15 characters of your nickname.)
// - Now you can see the names of game modes. (if you like the old one better. specify feedback.)
// @Update V1.8 ->>



// After installing the script, connect by pressing the " 💡 " Button " "If the screen does not appear, press the play button with" ESC ". ((Simply, 1. Script Upload, 2. Agar.io join, 3. 💡 press button Gamemode select and play 4. Warning! ->> .If the screen is not displayed, press the esc key. then press the play button
// @WARNING! 💡 ->> : After the game screen opens, press the 💡 " Button " and then the Play key. " if the game does not open, refresh the page and try again " <<-- WARNING.. !!! 💡
// i am grateful for coding helping me; null234, m-bayt918, samira, jimboy3100, root, rain, litu, Response 💡 // I asked for help with problems that I could not handle on my own and the friends here helped and some of them blocked me later. thanks anyway :)
// I may need some help with coding \|/ Discord : Libra#0014 \|/


// LIBRA BETA TEST PUBLIC SERVER 💡🤵 // https://www.youtube.com/Libraa  // www.Libragar.pw // www.discord.com/invite/UuVHSZR //
// I LOVE YOU Solo Game Play :) - Libra
