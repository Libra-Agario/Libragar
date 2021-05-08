// ==UserScript==
// @name         Libra - Agario YT Public Test Server V.1.0 💡🤵
// @version      1.1 💡
// @match        *.agar.io/*
// @grant        none
// @run-at       document-end
// @namespace    www.youtube.com/Libraa
// @AdBlocker V.02  : all ads in the game are removed; death video ads, Menu ads, Spectate Ads. left and right ad windows removed. (V0.2)
// @description     : I created a "Public" agario server myself on agar.io, and now it's in the testing phase (anyone can login)
// @Server-Features : autosplit mass: 50k, quick merger, split 32x, original Agar.io, big baits, fast virus, Control and play with special bots for you "FREE" :) (etc.These features will not always be active. As it is under development )
// @Update 1.1      : You can control bots "X" split "C" Feed mass  - You "Q" Fast Feed Mass (w) 
// ==/UserScript==
 
 
 
$(document).on('keydown',function(e){
if(e.keyCode == 81){
for(var i = 0; i<8; i++){
$("body").trigger($.Event("keydown", { keyCode: 87}));
$("body").trigger($.Event("keyup", { keyCode: 87}));
}
}
})
 
 
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
            } else if (window.key.p) {
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
    if (e.keyCode == 88) window.key.x = true;
    if (e.keyCode == 67) window.key.c = true;
    if (e.keyCode == 84) window.key.t = true;
});
 
 
 
 
document.addEventListener("keypress", function(l) { // Small Key, " L "
    if (l.which == 108) {
        window.xhttp = core.disableIntegrityChecks(true); core.connect("wss://test-libraagarioyttest.codeanyapp.com"); // Libra Agar.io Test Server // Button Function L //
    }
});
 
document.addEventListener("keypress", function(L) { // Big Key, " L "
    if (L.which == 76) {
        window.xhttp = core.disableIntegrityChecks(true); core.connect("wss://test-libraagarioyttest.codeanyapp.com"); // Libra Agar.io Test Server // Button Function L //
    }
});
 
 
 
 
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
 
 
 
 
var Feed = false;
var Dingus = false;
var imlost = 35;
var instructions = document.getElementById("instructions");
instructions.style.lineHeight = "1.70";
instructions.style.fontSize = "16.5px";
instructions.style.marginTop = "+90px";
instructions.innerHTML +=
    "<center><font color=Blue> Press <b>L</b> to join the Libra test server </font></center></a>" +
    "<center><a href=http://www.youtube.com/Libraa><font color=Blue><b> Libra Youtube </b></font></center></a>" +
    "<center><a href=https://discord.gg/UuVHSZR><font color=#72cb31> 💡 Discord 💡 </font></center></a>" +
    "<a href=mailto:LibraTelegram@gmail.com><font color=red> Contact Mail </font></a>" +
    "<center></font></center></a><font> The page if sign-in does not appear <a href=https://Agar.io><font color=#72cb31> Refresh </font>" ;
 
 
//** Update, Control and play with special bots for you "FREE" :) - Bot Control ->>  // " X " Split  // "C" Feed mass // -- User control ->> "Q" Fast Feed Mass (w)
// After installing the script, connect by pressing the L key "If the screen does not appear, press the play button with" ESC ". ((Simply, 1. Script Upload, 2. Agar.io join, 3. L press button and play, 4. Warning! ->> .If the screen is not displayed, press the esc key. then press the play button <-- Warning!)) 
// I LOVE YOU Solo Game Play :) // www.youtube.com/Libraa // LIBRA TEST PUBLIC SERVER 💡🤵 //
// Thanks for your support, I love you very much 😊👨‍🔧 //