"use strict";


var bgmAudio=document.getElementById("BGM");
var soundAudio=document.getElementById("sound");

function playBGM(src){
	bgmAudio.src=src;
	bgmAudio.fastSeek(0);
	bgmAudio.play();
}
function playM(src){
	soundAudio.src=src;
	soundAudio.fastSeek(0);
	soundAudio.play();
}