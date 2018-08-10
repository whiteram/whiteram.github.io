"use strict";


var persattr=[];
var pers=[];
for(var i=0;i<10;i++){
	pers.push(new Image());
	pers[i].src="";
	persattr.push({x:0,y:0,w:0,h:0,anm:0,t:0,tx:0,ty:0,qk:0});	
}

pers[0].src="./images/whitebg.png";
persattr[0].x=0.5;
persattr[0].y=0.5;
persattr[0].w=1;
persattr[0].h=1;

function perplace(i,x,y,w,h,quake,dis){
    pers[i].src=dis;
    persattr[i].x=x/100;
    persattr[i].y=y/100;
    persattr[i].qk = quake;
    if(w===0){
      persattr[i].h = h / 100;
      if(h===0){
        persattr[i].h=0;
		persattr[i].w=0;
      }else{
        persattr[i].h = h / 100;
        persattr[i].w = (h * pers[i].width / pers[i].height) / 100;
      }
    }else if(h===0){
      persattr[i].w = w / 100;
      persattr[i].h = (w * pers[i].height / pers[i].width)/100;
    }else{
      persattr[i].w = w / 100;
      persattr[i].h = h / 100;
    }
}
function perdel(i){
    pers[i].src = "";
}   
function pereffect(i,animname,tx,ty,tt){
  	persattr[i].tx=tx;
    persattr[i].ty=ty;
    persattr[i].t=tt;
    if(animname==='line'){
      persattr[i].anm=1;
    } else if (animname === 'lineinf') {
      persattr[i].anm = 2;
    } else if (animname === 'circle') {
      persattr[i].anm = 3;
    } else if (animname === 'circleinf') {
      persattr[i].anm = 4;
    } else {persattr[i].anm = 0;}
}

function perrender() {
    for (var i = 0; i < 10; i++) {
        if(pers[i].src!==""){
          var w=0,h=0,x=0,y=0;
              w=width*persattr[i].w;
              h=height*persattr[i].h;
          if(w===0||h===0){
            w = pers[i].width;
            h = pers[i].height;
          }
          if(persattr[i].anm!==0){
            var thisanim = anims[persattr[i].anm];
            var len = thisanim.length;
			var bl=width/200;
            if(persattr[i].t>=thisanim.length){
              if (thisanim[len - 2] === thisanim[0] && thisanim[len - 1] === thisanim[1]){
                  persattr[i].t=0;
              }else{
                persattr[i].anm=0;
              }
              x =width*persattr[i].x+thisanim[len - 2] *(persattr[i].tx-persattr[i].x)*bl;
              y =height*persattr[i].y+thisanim[len - 1] * (persattr[i].ty-persattr[i].y)*bl;
              persattr[i].x = x/width;
              persattr[i].y = y/height;
              
            }else{
				x =width*persattr[i].x+thisanim[persattr[i].t] *(persattr[i].tx-persattr[i].x)*bl;
				y =height*persattr[i].y+thisanim[persattr[i].t+1] * (persattr[i].ty-persattr[i].y)*bl;
              
            }
            persattr[i].t=persattr[i].t+2;
          }else{
			x=persattr[i].x*width;
			y=persattr[i].y*height;
		  }

      ctx.drawImage(
        pers[i],
       x-w/2 + (Math.random() - 0.5) * persattr[i].qk,
        y-h/2 + (Math.random() - 0.5) * persattr[i].qk,
            w,h
      );
          
        }
    }
  }
  
