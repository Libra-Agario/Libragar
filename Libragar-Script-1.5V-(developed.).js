// ==UserScript==
// @name         www.Libragar.pw 💡🤵 Libra - Agario YT Public BetaTest Server V1.5 💡
// @namespace    www.youtube.com/Libraa
// @homepage     https://www.Libragar.pw
// @version      1.5 💡
// @Discord      www.discord.com/invite/UuVHSZR   ||   Sign in to follow updates and events
// @match        *.agar.io/*
// @grant        none
// @run-at       document-end
// @Install-or-Update-latest-version ->> www.Libragar.pw  OR  https://greasyfork.org/en/scripts/420590-libra-agario-yt-public-test-server


// @AdBlocker V.02   : all ads in the game are removed; death video ads, Menu ads, Spectate Ads. left and right ad windows removed. (V0.2)
// @description      : I created a "Public" agario server myself on agar.io, and now it's in the testing phase (anyone can login)
// @Server-Features  : Free 100 Bots, 32x Split, original Agar.io, Control and play with your custom bots 100 FREE :) - Raga-like game mode - My Server, Does not require captha verification :) (etc. These features may not always be active. As they are in development)
// @Update V1.5      : Without pressing the L key. You can now login using the Button (to disable "L Key" --> "CONNECT TO SERVER (L Key)" follow the steps in the section ). // the server addresses have been updated. // 1.4 and earlier versions will no longer be able to connect to the server. // A special web address (www.libragar.pw) has been added for you to install the script.
// @Control Commoand : Bot Control ->> || "X" Split || "C" Feed mass || "Shift" 32X Split || ---- || User Control ->> || "A" 32x Split  || Check the code below to learn all the other key commands. ->> "CONTROL KEY" ||
// @WARNING! 💡 ->>  : After the game screen opens, press the "L key OR L Button" and then the Play key. " if the game does not open, refresh the page and try again " <<-- WARNING.. !!! 💡


// CONTROL KEY //
// USER Control ->>  || " W " Macro Feed Mass || 32x Split   " A "   || 16x Split " Y " || 8x Split " R " || 4x Split " U " || Freeze " S " || Crazy Jump Macro " Q " || Libragar Public Server Join; " L Key OR L Button "
// BOT Control  ->>  || Macro Feed Mass " C " || 32x Split " Shift " || 16x Split " N " || 8x Split " B " || 4x Split " V " || Freeze " T " ||
// To set the key you want, https://keycode.info use the link and press the letter you want -- then go to the section you want to change. and change the key number (there.event.keyCode == xx) (replace with the key number you want)


// ==/UserScript==
// ---------------------------------------------------------------------------------- USER CONTROLLER ----------------------------------------------------------------------------------------- // Start.

window.addEventListener('keydown', keydown);
window.addEventListener('keyup', keyup);
function keydown(event) {
    if (event.keyCode == 87 || event.keyCode == 81) { // ----------------> // 87 Key // MACRO "FEED" "Start" // Press " W " //  ||  // 81 KEY // Crazy Jump Macro "FEED" // Press Key " Q " @1  //
        Feed = true;
        setTimeout(fukherriteindapussie, imlost);
    }
    if (event.keyCode == 65 || event.keyCode == 81) { // ----------------> // 65 Key // 32x & 64x & 128x Split // Press " A " //  ||  // 81 KEY // Crazy Jump Macro "SPLIT" // Press Key " Q " @1 //
        ilikedick();
        setTimeout(ilikedick, imlost);
        setTimeout(ilikedick, imlost*2);
        setTimeout(ilikedick, imlost*3);
        setTimeout(ilikedick, imlost*4);
        setTimeout(ilikedick, imlost*5);
        setTimeout(ilikedick, imlost*6);
    }
    if (event.keyCode == 89) { // ---------------------------------------> // 89 Key // 16x split Split // Press Key " Y " //
        ilikedick();
        setTimeout(ilikedick, imlost);
        setTimeout(ilikedick, imlost*2);
        setTimeout(ilikedick, imlost*3);
    }
    if (event.keyCode == 82) { // ---------------------------------------> // 82 Key // 8x Split // Press Key " R " //
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
    }
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


    if(e.keyCode == 16){ // -----------------------------------------------> MINION BOT'S SPLIT // 16 Key // 32x & 64x & 128x Split  // Press Key " Shift " //
     window.key.x = !0;
     setTimeout(()=>{window.key.x=!0},40);
     setTimeout(()=>{window.key.x=!0},80);
     setTimeout(()=>{window.key.x=!0},120);
     setTimeout(()=>{window.key.x=!0},160);
     setTimeout(()=>{window.key.x=!0},200);
     setTimeout(()=>{window.key.x=!0},240);
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


// -------------------------------------------------------------------- BOT CONTROLLER ------------------------------------------------------------------------------------------------------- // Finish.





// -------------------------------------------------------------------- CONNECT TO SERVER (L Key) ---------------------------------------------------------------------------------------------- // Start.

// Connecting to the server by connecting to the L key, To disable this feature: Put " // " at the beginning of each line of code like the example below. -
// CONNECT SERVER (L Key) - You must put all of them between (start and finish.) This feature does not remove the "L button" function, only the "L Key" feature.

// document.addEventListener("keypress", function(l) { // Server Connect Small Key, " L " // "Change"; Function("L") AND L.which "108" Change = Your Key code //
//    if (l.which == 108) {
//        window.xhttp = core.disableIntegrityChecks(true); core.connect("wss://test-libraagarioyttest.codeanyapp.com"); // Libra Agar.io Test Server // Button Function L //
//
//    }
// });

document.addEventListener("keypress", function(l) { // Server Connect Small Key, " L " // "Change"; Function("L") AND L.which "108" Change = Your Key code //
    if (l.which == 108) {
        window.xhttp = core.disableIntegrityChecks(true); core.connect("wss://test-libraagarioyttest.codeanyapp.com"); // Libra Agar.io Test Server // Button Function L //

    }
});

document.addEventListener("keypress", function(L) { // Server Connect  Big Key, " L " // "Change"; Function("L") AND L.which "76" Change = Your Key code //
    if (L.which == 76) {
        window.xhttp = core.disableIntegrityChecks(true); core.connect("wss://test-libraagarioyttest.codeanyapp.com"); // Libra Agar.io Test Server // Button Function L //

    }
});

// MANUEL --- To connect manually, F12 --> Console --> window.xhttp = core.disableIntegrityChecks(true); core.connect("wss://test-libraagarioyttest.codeanyapp.com"); --> ENTER
// if you are using a different scripts --> wss://test-libraagarioyttest.codeanyapp.com --> Paste this in servername.

// -------------------------------------------------------------------- CONNECT TO SERVER (L Key) -------------------------------------------------------------------------------------------- // Finish.




// ------------------------------------------------------------------------ ADS BLOCKED ------------------------------------------------------------------------------------------------------ // Start.

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

// ------------------------------------------------------------------------ ADS BLOCKED ------------------------------------------------------------------------------------------------------ // Finish.




document.getElementById("mainui-app").style.color = "DarkBlue";

var Feed = false;
var Dingus = false;
var imlost = 35;
var instructions = document.getElementById("instructions");
instructions.style.lineHeight = "1.70";
instructions.style.fontSize = "15.5px";
instructions.style.marginTop = "+90px";
instructions.innerHTML +=
    '<center><font color=Blue> Press <button id="id1234"><b>L</b></button> to Join the Libra Beta server </font></center></a>' +
    '<center><font color=Blue> Bot Control: <b>X</b> Split - <b>C</b> Feed Mass  </font></center></a>' +
    '<center><a href=http://www.youtube.com/Libraa target=_blank><font color=Blue><b> Libra Youtube </b></font></center></a>'+
    '<center><a href=https://discord.gg/UuVHSZR target=_blank><font color=#72cb31>💡 Discord Group 💡</font></center></a>' +
    '<center><a href=https://www.Libragar.pw target=_blank><font color=Blue>Update to the latest version(Click)</font></center></a>' +
    '<center></font></center></a><font> The page if sign-in does not appear <a href=https://Agar.io><font color=#72cb31> Refresh </font>' ;

document.getElementById('id1234').addEventListener('click', function(event) {
    window.xhttp = core.disableIntegrityChecks(true); core.connect("wss://test-libraagarioyttest.codeanyapp.com");
});







// @Update V1.5      : Without pressing the L key. You can now login using the Button (to disable "L Key" --> "CONNECT TO SERVER (L Key)" follow the steps in the section ). // the server addresses have been updated. // 1.4 and earlier versions will no longer be able to connect to the server. // A special web address (www.libragar.pw) has been added for you to install the script.
// After installing the script, connect by pressing the "L key OR L Button" "If the screen does not appear, press the play button with" ESC ". ((Simply, 1. Script Upload, 2. Agar.io join, 3. L press button and play, 4. Warning! ->> .If the screen is not displayed, press the esc key. then press the play button
// @WARNING! 💡 ->> : After the game screen opens, press the "L key OR L Button" and then the Play key. " if the game does not open, refresh the page and try again " <<-- WARNING.. !!! 💡
// i am grateful for coding helping me; null234, m bayt918, samira, Jimboy3100, luka. 🤝
// Thanks for your support,coding I love you very much 😊 //
// I may need some help with coding \|/ Discord : Libra#0014 \|/
// I LOVE YOU Solo Game Play :) // www.youtube.com/Libraa // LIBRA TEST PUBLIC SERVER 💡🤵 // Open Source // www.Libragar.pw
