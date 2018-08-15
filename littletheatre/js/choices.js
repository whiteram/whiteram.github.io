"use strict";

var coistc=[];
var coiimg=new Image();
coiimg.src="./images/texttable90.png";
var coiimgw=1,coiimgh=height,coiimgx=width,coiimgy=height,coiimghbl=0.7;
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
			coiimgx=width*(1-coiimgw)/2;
    		coiimgh = coihg * coiimghbl;
			coiimgy=(coihg-coiimgh)/2;
			coivisible=true;
		}

}	
function parsecoi(x,y){
			coihg=height/(coistc.length);
			coiimgx=width*(1-coiimgw)/2;
    		coiimgh = coihg * coiimghbl;
			coiimgy=(coihg-coiimgh)/2;
		if(x>width*coiimgw+coiimgx||x<coiimgx){return false;}
		setlabel(coistc[Math.floor(y/coihg)]);
		coivisible=false;
		return true;
}
function coirender() {
    if (!coivisible){return;}


	  
      ctx.fillStyle = coifillStyle;
      ctx.font = coifont;
	  //ctx.textBaseline="middle";
	  for(var i=0;i<coistc.length;i++){
	  	ctx.drawImage(
        coiimg,
        coiimgx,
        coiimgy+coihg*i,
        width*coiimgw,
        coiimgh
      );
  
      ctx.fillText(
        coistc[i],
        (width-ctx.measureText(coistc[i]).width)/2,
		coihg*i+coihg/2
      );}
	  
}
