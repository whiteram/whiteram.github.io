"use strict";

var coistc=[];
var coiimg=new Image();
coiimg.src="./images/texttable90.png";
var coiimgw=width,coiimgh=height/4,coiimgx=0,coiimgy=height*3/4;
var coifont="40px Arial",coifillStyle="#FFFFFF";
var coivisible=false,coihg=0;

function setcoi(anses){
		if(anses[0]==="closetxt"){
			txtvisible=false;
		}else if(anses[0]==="opentxt"){
			txtvisible=true;
		}else{
			coistc=anses;
			coihg=height/(anses.length);
			coiimgx=width/2-coiimgw/2;
    		coiimgh = coihg * 0.7;
			coiimgy=coihg/2-coiimgh/2;
			coivisible=true;
		}

}	
function parsecoi(x,y){
		if(x>width/2+coiimgw/2||x<width/2-coiimgw/2){return false;}
		setlabel(coistc[Math.floor(y/coihg)]);
		coivisible=false;
		return true;
}
function coirender() {
    if (!coivisible){return;}


	  
      ctx.fillStyle = coifillStyle;
      ctx.font = coifont;
	  ctx.textBaseline="middle";
	  for(var i=0;i<coistc.length;i++){
	  	ctx.drawImage(
        coiimg,
        coiimgx,
        coiimgy+coihg*i,
        coiimgw,
        coiimgh
      );
  
      ctx.fillText(
        coistc[i],
        (width-ctx.measureText(coistc[i]).width)/2,
		coihg*i+coihg/2
      );}
      
	  ctx.textBaseline="hanging";
	  
}
