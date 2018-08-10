"use strict";

var canvas=document.getElementById("myCanvas");
var ctx = canvas.getContext('2d');
canvas.width=width;
canvas.height=height;
if(screenWidth<screenHeight){
	alert("rotate");
		canvas.width=height;
		canvas.height=width;
	var style="";
      style += "width:" + height + "px;"; 
      style += "height:" + width + "px;"; 
		style+="transform: rotate(90deg);-ms-transform: rotate(90deg);-webkit-transform: rotate(90deg);	-moz-transform: rotate(90deg);		-o-transform: rotate(90deg);	";
      // 注意旋转中点的处理
      style += "-webkit-transform-origin: " + width / 2 + "px " + width / 2 + "px;transform-origin: " + width / 2 + "px " + width / 2 + "px;";   
		canvas.style.cssText=style;
		var tmp=width;
		width=height;
		height=tmp;
		alert(width);
		alert(height);

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
	
	if(screenWidth<screenHeight){
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
