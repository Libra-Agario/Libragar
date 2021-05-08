// ==UserScript==
// @name         Libra - Agario YT Public Test Server V.1.3 💡🤵
// @version      1.3 💡
// @match        *.agar.io/*
// @grant        none
// @run-at       document-end
// @namespace    www.youtube.com/Libraa
// @Discord      www.discord.com/invite/UuVHSZR
// @AdBlocker V.02   : all ads in the game are removed; death video ads, Menu ads, Spectate Ads. left and right ad windows removed. (V0.2)
// @description      : I created a "Public" agario server myself on agar.io, and now it's in the testing phase (anyone can login)
// @Server-Features  : Free 100 Bots, 32x Split, original Agar.io, Control and play with your custom bots 100 "FREE" :) (etc. These features may not always be active. As they are in development)
// @Update V1.3      : Bot controls improved, Macro commands have been installed for many users and bots. E.g: Bot: 4x 8x 16x 32x key controls added " Key -> "V,B,N,M"  || User: Crazy Jump = " Q " (32x Split + W) || see the // notes // I left for you in the plugin content for more :))
// @Control Commoand : Bot Control ->> || "X" Split || "C" Feed mass || "V" 32X Split || "T" Bot's Start/Stop || -- || User Macro control ->> || "W" Fast Macro Feed Mass || "E" Macro 32x Split  ||
// @WARNING! 💡 ->>  : After the game screen opens, press the L key and then the Play key. " if the game does not open, refresh the page and try again " <<-- WARNING.. !!! 💡
// ==/UserScript==
 
 
// ---------------------------------------------------------------------------------- USER CONTROLLER ----------------------------------------------------------------------------------------- // Start.
 
window.addEventListener('keydown', keydown);
window.addEventListener('keyup', keyup);
function keydown(event) {
    if (event.keyCode == 87 || event.keyCode == 81) { // ----------------> // 87 Key // MACRO "FEED" "Start" // Press " W " //  ||  // 81 KEY // Crazy Jump Macro "FEED" // Press Key " Q " @1  //
        Feed = true;
        setTimeout(fukherriteindapussie, imlost);
    }
    if (event.keyCode == 69 || event.keyCode == 81) { // ----------------> // 69 Key // 32x+64x+128x "SPLIT" // Press " E " //  ||  // 81 KEY // Crazy Jump Macro "SPLIT" // Press Key " Q " @1 //
        ilikedick();
        setTimeout(ilikedick, imlost);
        setTimeout(ilikedick, imlost*2);
        setTimeout(ilikedick, imlost*3);
        setTimeout(ilikedick, imlost*4);
        setTimeout(ilikedick, imlost*5);
        setTimeout(ilikedick, imlost*6);
    }
    if (event.keyCode == 82) { // ---------------------------------------> // 82 Key // 16x split Split // Press Key " R " //
        ilikedick();
        setTimeout(ilikedick, imlost);
        setTimeout(ilikedick, imlost*2);
        setTimeout(ilikedick, imlost*3);
    }
    if (event.keyCode == 89) { // ---------------------------------------> // 89 Key // 8x Split // Press Key " Y " //
        ilikedick();
        setTimeout(ilikedick, imlost);
        setTimeout(ilikedick, imlost*2);
    }
    if (event.keyCode == 85) { // ---------------------------------------> // 85 Key // 4x Split // Press Key " U " //
        ilikedick();
        setTimeout(ilikedick, imlost);
    }
    if (event.keyCode == 83) { // ---------------------------------------> // 83 Key // You User "Freeze"  // Press Key " S " //
        X = window.innerWidth/2;
        Y = window.innerHeight/2;
        $("canvas").trigger($.Event("mousemove", {clientX: X, clientY: Y}));
    }// Freeze
}
function keyup(event) {
    if (event.keyCode == 87 || event.keyCode == 81) { // ---------------->  87 Key // W " MACRO "FEED" "Start" // Press Key " W " //  ||  // 81 KEY // Crazy Jump Macro "SPLIT" // Press Key " Q " @1  //
        Feed = false;
    }
}
function fukherriteindapussie() {
    if (Feed) {
        window.onkeydown({keyCode: 87}); // Key 87 - W // it is recommended not to change this place! //
        window.onkeyup({keyCode: 87}); //// Key 87 - W // it is recommended not to change this place! //
        setTimeout(fukherriteindapussie, imlost);
    }
}
function ilikedick() {
    $("body").trigger($.Event("keydown", { keyCode: 32})); // Key 32 - SPACE // it is recommended not to change this place! //
    $("body").trigger($.Event("keyup", { keyCode: 32})); //// Key 32 - SPACE // it is recommended not to change this place! //
}
 
// -------------------------------------------------------------------- USER CONTROLLER ------------------------------------------------------------------------------------------------------------- // Finish.
 
 
 
 
 
 
 
// -------------------------------------------------------------------- BOT CONTROLLER -------------------------------------------------------------------------------------------------------------- // Start.
 
 
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
 
 
    if(e.keyCode == 86){ // ---------------------------------------------> MINION BOT'S SPLIT // 86 Key // 4x Split // Press Key " V " //
     window.key.x = !0;
     setTimeout(()=>{window.key.x=!0},40);
     setTimeout(()=>{window.key.x=!0},80);
     setTimeout(()=>{window.key.x=!0},120);
     setTimeout(()=>{window.key.x=!0},160);
     setTimeout(()=>{window.key.x=!0},200);
     setTimeout(()=>{window.key.x=!0},240);
     }
 
 
     if(e.keyCode == 66){ // ---------------------------------------------> MINION BOT'S SPLIT // 66 Key // 4x Split // Press Key " B " //
     window.key.x = !0;
     setTimeout(()=>{window.key.x=!0},40);
     setTimeout(()=>{window.key.x=!0},80);
     setTimeout(()=>{window.key.x=!0},120);
     }
 
 
    if(e.keyCode == 78){ // ---------------------------------------------> MINION BOT'S SPLIT // 78 Key // 4x Split // Press Key " N " //
     window.key.x = !0;
     setTimeout(()=>{window.key.x=!0},40);
     setTimeout(()=>{window.key.x=!0},80);
     }
 
 
    if(e.keyCode == 77){ // ---------------------------------------------> MINION BOT'S SPLIT // 77 Key // 4x Split // Press Key " M " //
     window.key.x = !0;
     setTimeout(()=>{window.key.x=!0},40);
     }
});
 
 
// -------------------------------------------------------------------- BOT CONTROLLER ------------------------------------------------------------------------------------------------------- // Finish.
 
 
 
 
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
    "<center><font color=Blue> Bot Control: <b>X</b> Split - <b>C</b> Feed Mass  </font></center></a>" +
    "<center><a href=http://www.youtube.com/Libraa><font color=Blue><b> Libra Youtube </b></font></center></a>" +
    "<center><a href=https://discord.gg/UuVHSZR><font color=#72cb31> 💡 Discord 💡 </font></center></a>" +
    "<center></font></center></a><font> The page if sign-in does not appear <a href=https://Agar.io><font color=#72cb31> Refresh </font>" ;
 
 
//** Update 1.3 💡  Bot controls improved, Macro commands have been installed for many users and bots. for new controls, Check the script completely :)
// After installing the script, connect by pressing the L key "If the screen does not appear, press the play button with" ESC ". ((Simply, 1. Script Upload, 2. Agar.io join, 3. L press button and play, 4. Warning! ->> .If the screen is not displayed, press the esc key. then press the play button <-- Warning!))
// @WARNING! 💡 ->> : After the game screen opens, press the L key and then the Play key. " if the game does not open, refresh the page and try again " <<-- WARNING.. !!! 💡
 
// Thanks for your support, I love you very much 😊👨‍🔧 //
// I may need some help with coding \|/ Discord : Libra#0014
// I LOVE YOU Solo Game Play :) // www.youtube.com/Libraa // LIBRA TEST PUBLIC SERVER 💡🤵 //