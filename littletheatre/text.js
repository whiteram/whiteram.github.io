"use strict";

var txtstc=[];
var hg=45;
var txtimg=new Image();
txtimg.src="./images/texttable90.png";
var txtimgw=width,txtimgh=height/4,txtimgx=0,txtimgy=height*3/4;
var txtfont="40px Arial",txtfillStyle="#FFFFFF";
var txtvisible=true,txtcount=0;

function txtupdata(text) {
	txtstc=text.split('\n');
}

function txtrender() {
    if (!txtvisible){return;}  

      ctx.drawImage(
        txtimg,
        txtimgx,
        txtimgy,
        txtimgw,
        txtimgh
      );
 
     
      ctx.fillStyle = txtfillStyle;
      ctx.font = txtfont;
	  for(var i=0;i<txtstc.length;i++){
      ctx.fillText(
        txtstc[i],
        txtimgx+30,
        txtimgy+40+hg*i
      );}
}

