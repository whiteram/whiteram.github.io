"use strict";
var width,height,rotate=false; 
var canvas=document.getElementById("myCanvas");
var ctx = canvas.getContext('2d');
canvas.width=width;
canvas.height=height;
var lookdic=function(){
width=window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
height=window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight; 
if(width<height){
	alert("rotate");
	rotate=true;
		//height=Math.ceil(16*width/10);
		//window.resizeTo(width,height);
		canvas.width=height;
		canvas.height=width;
		var style= "width:" + height + "px;height:" + width + "px;"; 
		style+="transform: rotate(90deg);-ms-transform: rotate(90deg);-webkit-transform: rotate(90deg);	-moz-transform: rotate(90deg);		-o-transform: rotate(90deg);	";
      // 注意旋转中点的处理
      style += "-webkit-transform-origin: " + width / 2 + "px " + width / 2 + "px;transform-origin: " + width / 2 + "px " + width / 2 + "px;";   
		canvas.style.cssText=style;
		var tmp=height;
		height=width;
		width=tmp;
}else{
	rotate=false;
	//height=Math.floor(10*width/16);
	//window.resizeTo(width,height);
	canvas.width=width;
	canvas.height=height;
	canvas.style.cssText="";
}};
lookdic();
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
	x1 = e.clientX||e.pageX;
    y1 = e.clientY||e.pageY;
	
	if(rotate){
		var tmp=y1;
		y1=height-x1;
		x1=tmp;
	}
	if (coivisible === true) {
      parsecoi(x1, y1);
    } else if (y1 > txtimgy*height) {
		if(txtvisible===false){txtvisible = true;}
		else{ parse();}
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
function loop(){
	ctx.clearRect(0, 0,width,height);
	perrender();
	txtrender(); 
	coirender();
	
}
