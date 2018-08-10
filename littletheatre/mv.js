"use strict";


var bgmAudio=document.getElementById("BGM");
var soundAudio=document.getElementById("sound");
var Video=document.getElementsByTagName("video")[0];
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
function playV(src){	
	Video.width=width;
	Video.height=height;
	canvas.setAttribute("hidden");
	Video.removeAttribute("hidden");
	Video.src=src;
	bgmAudio.pause();
	soundAudio.pause();
	Video.play();
}
Video.addEventListener("ended",function(){
		Video.setAttribute("hidden");
		canvas.removeAttribute("hidden");
		bgmAudio.play();
});