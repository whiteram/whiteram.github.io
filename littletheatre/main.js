"use strict";
var rotate=false;
function island(){
	if (window.orientation === 180 || window.orientation === 0) {
            alert('竖屏状态！');
			rotate=true;
        }
    if (window.orientation === 90 || window.orientation === -90 ){
            alert('横屏状态！');
			rotate=false;
    } 
}
island();
window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", island, false);
var canvas=document.getElementById("myCanvas");
var div=document.getElementById("print");
var ctx = canvas.getContext('2d');
canvas.width=width;
canvas.height=height;
if( rotate ){
      console.log(width + " " + height);
		canvas.width=height;
		canvas.height=width;
		var tmp=width;
		width=height;
		height=tmp;
	div.width=width;
	div.height=height;
}
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
	x1 = e.pageX;
    y1 = e.pageY;
	alert("v12");
	
	if(rotate){
		var tmp=y1;
		y1=height-x1;
		x1=tmp;
	}
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
	canvas.width=width;
	canvas.height=height;
}
function loop(){
	ctx.clearRect(0, 0,width,height);
	perrender();
	txtrender(); 
	coirender();
	
}
