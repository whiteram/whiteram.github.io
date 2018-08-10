"use strict";

var txtstc=[];
var hg=45;
var txtimg=new Image();
txtimg.src="./images/texttable90.png";
var txtimgw=1,txtimgh=1/4,txtimgx=0,txtimgy=3/4;
var txtfont="30px Arial",txtfillStyle="#FFFFFF";
var txtvisible=true;

function txtupdata(text) {
	txtstc=text.split('\n');
}

function txtrender() {
    if (!txtvisible){return;}  

      ctx.drawImage(
        txtimg,
        width*txtimgx,
        height*txtimgy,
        width*txtimgw,
        height*txtimgh
      );
 		hg=(txtimgh/3)*height;
      ctx.fillStyle = txtfillStyle;
      ctx.font = txtfont;
	  for(var i=0;i<txtstc.length;i++){
      ctx.fillText(
        txtstc[i],
        (txtimgx+0.05)*width,
        (txtimgy)*height+hg*i+40
      );}
}

