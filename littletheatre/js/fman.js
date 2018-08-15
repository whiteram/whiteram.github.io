"use strict";

var iframe = document.getElementById("iframe");
var gamedir="./txt/";
var currgame="";
var txt = "",labels="";
function readgame(name,ver) {
	txtvisible=false;
	if(currgame!==""){savelog();}
	currgame=name;
	version=ver;
	readlog(name);
	iframe.src=gamedir+name+".txt";
	if (iframe.attachEvent){    
    	iframe.attachEvent("onload", funcs);
	} else {    
    	iframe.onload = funcs;
	}
	//var tover=Date.now();
	//while(Date.now()-tover<4000){}	
}
function readtxt(){
	console.log("loaded!");
	var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
	txt=iframeDocument.documentElement.innerText;
}

function savelog(){
	console.log("save",version); 
	if(currgame===""||version===0){return;}
	var gamestat=new Object();
	gamestat.version=version;
	gamestat.curr=curr;
	gamestat.labels=labels;
	gamestat.iffnum=iffnum;
	gamestat.bgm=bgmAudio.src;
	gamestat.txtfillStyle=txtfillStyle;
	localStorage.setItem(currgame+"stat",JSON.stringify(gamestat));
	var persaddr=[];
	for(var i=0;i<10;i++){
		persaddr.push(pers[i].src);
	}
	localStorage.setItem(currgame+"persaddr",JSON.stringify(persaddr));
	localStorage.setItem(currgame+"persattr",JSON.stringify(persattr));
}

function readlog(name){
	if(name===""){return;}
	var stat=localStorage.getItem(name+"stat");
	stat=JSON.parse(stat);
	var persaddr=localStorage.getItem(name+"persaddr");
	var persr=localStorage.getItem(name+"persattr");
	var tmp;
	console.log(stat);
	if(stat!==null&&persaddr!==null&&persr!==null&&version!==0&&(stat.version===version||version===1)){
		version=stat.version;
		curr=stat.curr;
		iffnum=stat.iffnum;
		labels=stat.labels;
		playBGM(stat.bgm);
		txtfillStyle=stat.txtfillStyle;
		persaddr=JSON.parse(persaddr);
		for(var i=1;i<10;i++){
			pers[i].src=persaddr[i];
		}
		persattr=JSON.parse(persr);
	}else{
		curr=-1;
		iffnum=0;
		labels="";
		for(var i=1;i<10;i++){
			pers[i].src="";
			persattr[i].loaded=false;
		}
		playBGM("");
		localStorage.removeItem(name+"stat");
		localStorage.removeItem(name+"persaddr");
		localStorage.removeItem(name+"persattr");
	}
}