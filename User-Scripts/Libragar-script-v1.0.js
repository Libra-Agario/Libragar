// ==UserScript==
// @name         Libra - Agario YT Public Test Server V.1.0 💡🤵
// @version      1.0 💡
// @match        *.agar.io/*
// @grant        none
// @run-at       document-end
// @namespace    www.youtube.com/Libraa
// @AdBlocker V.02  : all ads in the game are removed; death video ads, Menu ads, Spectate Ads. left and right ad windows removed. (V0.2)
// @description     : I created a "Public" agario server myself on agar.io, and now it's in the testing phase (anyone can login)
// @Server-Features : autosplit mass: 50k, quick merger, split 32x, original Agar.io, big baits, fast virus, etc.
// ==/UserScript==
 
 
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
 
var Libra6 = document.getElementById('captchaWindowOFF'); // delete the text " off " to activate
if (Libra6) { Libra6.parentNode.removeChild(Libra6); }
 
var Libra7 = document.getElementById('applixir_blockerOFF'); // delete the text " off " to activate
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
 
 
 
// I LOVE YOU Solo Game Play :) NO MACRO NO HACK // www.youtube.com/Libraa // LIBRA TEST PUBLIC SERVER 💡🤵 //
// Thanks for your support, I love you very much 😊👨‍🔧 //