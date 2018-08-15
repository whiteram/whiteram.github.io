"use strict";
var kzz=[];
kzz.push(new RegExp("\\bif\\((.*)\\)\\s*(.*)"));//kIF=
kzz.push(new RegExp("([^\\\\]*)\\\\\\s*$"));//kpage=
kzz.push(new RegExp("([^/]*)/\\s*$"));//kline=
kzz.push(new RegExp("([^@]*)@\\s*$")) ;//kappend=3

kzz.push(new RegExp("(#[0-9a-fA-F]{6})"));//kRGB=
kzz.push(new RegExp("\\bBG\\b\\s*(.*)"));//kBG=
kzz.push(new RegExp("\\bBGM\\b\\s*(.*)"));//kBGM=6

kzz.push(new RegExp("\\bprint\\b\\s*([0-9])\\s*(\\-?[0-9]+)\\s*(\\-?[0-9]+)\\s*([0-9]+)\\s*([0-9]+)\\s*([0-9]+)\\s*(\\S+)"));//kprint= i x y w h(%) quake  dd
kzz.push(new RegExp("\\bdel\\b\\s*([0-9]+)"));//del=
kzz.push(new RegExp("\\bmusic\\b\\s*(.*)"));//kmp3=
kzz.push(new RegExp("\\bvideo\\b\\s*(.*)"));//kmpegplay=10

kzz.push(new RegExp("\\bwait\\b\\s*([0-9]+)"));//kwait=
kzz.push(new RegExp("([^:\\s]*)::\\s*$"));//kLabel=
kzz.push(new RegExp("\\bgoto\\b\\s*\\b(\\S+)\\b"));//kgoto=13
kzz.push(new RegExp("\\bclick\\b"));//click
kzz.push(new RegExp("\\bswitch\\b\\s+(.+)\\b"));//Switch
kzz.push(new RegExp("\\bendif\\b\\s*"));//endif
kzz.push(new RegExp("\\brun\\b\\s*\\b(\\S+)\\b\\s+([0-9]+)"));//krun=
kzz.push(new RegExp("\\b\effect\\b\\s*([0-9])\\s*(\\S+)\\s*(\\-?[0-9]+)\\s*(\\-?[0-9]+)\\s*([0-9]+)"));//keffect= layer animname tx ty tt
/**
 * 统一的ons解析管理器
 */
var ktov=new RegExp("\\s*([0-9a-zA-Z]+)\\s+@(.+)@");
var stcs=[],currsen='';
var curr=-1, pristat=0,iffnum=0;
var t=0,tmp1,tmp2;
function setlabel(ci){
	   labels+=' '+ci+' '+curr.toString();
	   txtvisible=true;
}
function preparse(){
 
 var def=txt.indexOf("*define");
 var star=txt.indexOf("*start",def+7);
 var end=txt.lastIndexOf("End");
 if (def === -1 || star === -1 || end === -1)
 {return false;}//error
 var txtdef=txt.substring(def+7,star);
 var txtstar=txt.substring(star+6,end);

 var sentances=txtdef.split('\n');
 txtdef=null;

	 
    for (i=0;i<sentances.length;i++){
      
			var res=sentances[i].match(ktov);
			if(res!==null){
				tmp1=new RegExp(res[1],'g');
				txtstar=txtstar.replace(tmp1,res[2]);
        
			}
		}
		sentances=null;
		ktov=null;
	
		stcs=txtstar.split('\n');
	txtvisible=true;
}

function parse(){
     curr++;
	 if(curr>=stcs.length){
        return 0;
      }
		return  parsesen(stcs[curr]);
}
function parsesen(sen){
	if(sen.length===1){return parse();}
	for (var i=0,len=kzz.length;i<len;i++){
		var res=sen.match(kzz[i]);
		
		if(res!==null){
			console.log(res,i);
			if(iffnum>0){
				if(i===0&&res[2][0]==='~'){
					iffnum++;
				}else if(i===16){
					iffnum--;
				}
				return parse();
			}
			if(i===0){
				var tmp=new RegExp(res[1]);
				if(labels.search(tmp)!==-1){
					if(res[2][0]!=='~') {
						return parsesen(res[2]);
					}
				}else{
					if(res[2][0]==='~') {iffnum++;}
				}
        break;
			}else if(i===1||i===2||i===3){
				if(pristat===1){currsen='';}else if(pristat===2){currsen +='\n';}
        		currsen += res[1];
				txtupdata(currsen);
				pristat=i;
        	
				return 0;
			}else if(i===4){
				txtfillStyle=res[1];
        break;
			}else if(i===5){
				perplace(1,50,50,100,100,0,res[1]);
        break;
			}else if(i===6){
				playBGM(res[1]);
        break;
			}else if(i===7){
       perplace(parseInt(res[1]), parseInt(res[2]), parseInt(res[3]), parseInt(res[4]), parseInt(res[5]), parseInt(res[6]),res[7]);
        break;
			}else if(i===8){
				perdel(parseInt(res[1]));
        break;
			}else if(i===9){
				playM(res[1]);
        break;
			}else if(i===10){
				playV(res[1]);
        break;
			}else if(i===11){
				wait=true;
				setTimeout("wait=false;parse();",parseInt(res[1]));
				return 1;
			}else if(i===12){
				labels+=' '+res[1]+' '+curr.toString();
        break;
			}else if(i===13){
				tmp2=new RegExp(".*\\b"+res[1]+"\\s*([0-9]+).*");
				curr=parseInt (labels.match(tmp2)[1])-1;
				console.log(curr);
        break;
			}else if(i===14){
				return 1;
			}else if(i===15){//switch
				txtvisible=false;
				setcoi(res[1].split(';'));
				return 1;
			}else if(i===16){
        break;
      } else if (i === 17) {
        readgame(res[1],parseInt(res[2]));
		 return 0;
      } else if (i === 18) {
        pereffect(parseInt(res[1]), res[2], parseInt(res[3]), parseInt(res[4]), parseInt(res[5]));
      }
			
			
    } 
     } return parse();
}

