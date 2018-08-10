"use strict";

var iframe = document.getElementById("iframe");
var gamedir="./txt/";
var currgame="";
var txt = "",labels="";
function readgame(name) {
	if(currgame!==""){savelog();}
	iframe.src=gamedir+name+".txt";
	if (iframe.attachEvent){    
    	iframe.attachEvent("onload", funcs);
	} else {    
    	iframe.onload = funcs;
	}
	readlog(name);
	//var tover=Date.now();
	//while(Date.now()-tover<4000){}	
}
function readtxt(){
	console.log("loaded!");
	var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
	txt=iframeDocument.documentElement.innerText;
}

function savelog(){
	if(currgame===""){return;}
	var gamestat=new Object();
	gamestat.curr=curr;
	gamestat.labels=labels;
	gamestat.iffnum=iffnum;
	localStorage.setItem(currgame+"stat",JSON.stringify(gamestat));
	var persaddr=[];
	for(var i=0;i<10;i++){
		persaddr.push(pers[i].src);
	}
	localStorage.setItem(currgame+"persaddr",JSON.stringify(persaddr));
	localStorage.setItem(currgame+"persattr",JSON.stringify(persattr))
}

function readlog(name){
	if(name===""){return;}
	var stat=localStorage.getItem(name+"stat");
	var persaddr=localStorage.getItem(name+"persaddr");
	var persr=localStorage.getItem(name+"persattr");
	var tmp;
	if(stat!==null){
		tmp=JSON.parse(stat);
		curr=tmp.curr;
		iffnum=tmp.iffnum;
		labels=tmp.labels;
	}else{
		curr=-1;
		iffnum=0;
		labels="";
	}
	if(persaddr!==null){
		tmp=JSON.parse(persaddr);
		for(var i=0;i<10;i++){
			pers[i].src=tmp[i];
		}
		
	}else{
		for(var i=1;i<10;i++){
			pers[i].src="";
		}
	}
	if(persr!==null){
		tmp=JSON.parse(persr);
		persattr=tmp;
	}
}