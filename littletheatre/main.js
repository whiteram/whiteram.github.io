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
var ctx = canvas.getContext('2d');
var screenWidth = window.innerWidth;
var screenHeight = window.innerHeight;
var clientw = document.documentElement.clientWidth;
var clienth =document.documentElement.clientHeight;
var height = clienth;
var width = clientw;
canvas.width=width;
canvas.height=height;
if( rotate ){
      console.log(width + " " + height);
      $print =  $('#print');
      $print.width(height);
      $print.height(width);
      $print.css('top',  (height-width)/2 );
      $print.css('left',  0-(height-width)/2 );
      $print.css('transform' , 'rotate(90deg)');
      $print.css('transform-origin' , '50% 50%');
		canvas.width=height;
		canvas.height=width;
		var tmp=width;
		width=height;
		height=tmp;
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
	x1 = e.pageX - canvas.getBoundingClientRect().left;
    y1 = e.pageY - canvas.getBoundingClientRect().top;
	if(rotate){
		y1=height-x1;
		x1=y1;
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
