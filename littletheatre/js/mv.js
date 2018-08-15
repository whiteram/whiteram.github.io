"use strict";


var bgmAudio=document.getElementById("BGM");
var soundAudio=document.getElementById("sound");
var Video=document.getElementsByTagName("video")[0];
function playBGM(src){
	if(src!==null){bgmAudio.src=src;}
	bgmAudio.play();
}
function playM(src){
	if(src!==null){soundAudio.src=src;}
	soundAudio.play();
}
function playV(src){	
	Video.width=width,Video.height=height;
	canvas.setAttribute("hidden","hidden");
	canvas.width=0,canvas.height=0;
	Video.removeAttribute("hidden");
	Video.src=src;
	console.log("playV");
	bgmAudio.pause();
	soundAudio.pause();
	Video.play();
}
Video.addEventListener("ended",function(){
		Video.width=0,Video.height=0;
		Video.setAttribute("hidden","hidden");
		canvas.width=width,canvas.height=height;
		canvas.removeAttribute("hidden");
		bgmAudio.play();
});