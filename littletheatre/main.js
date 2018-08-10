"use strict";

var canvas=document.getElementById("myCanvas");
var ctx = canvas.getContext('2d');
var screenWidth = window.innerWidth;
var screenHeight = window.innerHeight;
var clientw = document.documentElement.clientWidth;
var clienth =document.documentElement.clientHeight;
var height = screenHeight;
var width = screenWidth;
canvas.width=width;
canvas.height=height;
ctx.fillStyle="#FFFFFF";
ctx.fillRect(0,0,width,height);
var x1,y1,timer,interval=60;
function restart(){
	if(timer===undefined){

		canvas.addEventListener("click",clickHandler,false);
		timer=setInterval(loop,interval);
	}
}
function clickHandler(e) {
	x1 = e.pageX - canvas.getBoundingClientRect().left;
    y1 = e.pageY - canvas.getBoundingClientRect().top;
	
	if (coivisible === true) {
      parsecoi(x1, y1);
    } else if (y1 > txtimgy) {
      txtvisible = true;
      parse();
    } else {
      if (txtvisible === true) {
		  savelog();
	  }
      txtvisible = false;
      loop();
    }

}
addEventListener("keydown", function (e) {
	if(e.keyCode===32||e.keyCode===13){parse();}
}, false);
function resizewd(){
	screenWidth = window.innerWidth;
	screenHeight = window.innerHeight;
	height = screenHeight;
	width = screenWidth;
	canvas.width=width;
	canvas.height=height;
}
function loop(){
	ctx.clearRect(0, 0,width,height);
	perrender();
	txtrender(); 
	coirender();
	
}
