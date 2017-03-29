var img_data = {
    "data": [{
        "src": "https://qnphoto.kagirl.cn/image/dongtianpiaoxue/%E4%B8%AD%E6%96%870.png"
    }, {
        "src": "https://qnphoto.kagirl.cn/image/bzxc_beta/3.png"
    }, {
        "src": "https://qnphoto.kagirl.cn/image/dongtianpiaoxue/%E4%B8%AD%E6%96%872.png"
    }, {
        "src": "https://qnphoto.kagirl.cn/image/bzxc_beta/4.png"
    }, {
        "src": "https://qnphoto.kagirl.cn/image/bzxc_beta/5.png"
    }, {
        "src": "https://qnphoto.kagirl.cn/image/dongtianpiaoxue/%E4%B8%AD%E6%96%875.png"
    }, {
        "src": "https://qnphoto.kagirl.cn/image/bzxc_beta/3.png"
    }, {
        "src": "https://qnphoto.kagirl.cn/image/dongtianpiaoxue/%E4%B8%AD%E6%96%870.png"
    }, {
        "src": "https://qnphoto.kagirl.cn/image/bzxc_beta/4.png"
    }, {
        "src": "https://qnphoto.kagirl.cn/image/bzxc_beta/5.png"
    }, {
        "src": "https://qnphoto.kagirl.cn/image/dongtianpiaoxue/%E4%B8%AD%E6%96%873.png"
    }, {
        "src": "https://qnphoto.kagirl.cn/image/bzxc_beta/3.png"
    }, {
        "src": "https://qnphoto.kagirl.cn/image/dongtianpiaoxue/%E4%B8%AD%E6%96%875.png"
    }, {
        "src": "https://qnphoto.kagirl.cn/image/bzxc_beta/4.png"
    }, {
        "src": "https://qnphoto.kagirl.cn/image/dongtianpiaoxue/%E4%B8%AD%E6%96%872.png"
    }, {
        "src": "https://qnphoto.kagirl.cn/image/bzxc_beta/8.png"
    }, {
        "src": "https://qnphoto.kagirl.cn/image/bzxc_beta/5.png"
    }, {
        "src": "https://qnphoto.kagirl.cn/image/dongtianpiaoxue/%E4%B8%AD%E6%96%873.png"
    }, {
        "src": "https://qnphoto.kagirl.cn/image/bzxc_beta/3.png"
    }, {
        "src": "https://qnphoto.kagirl.cn/image/dongtianpiaoxue/%E4%B8%AD%E6%96%875.png"
    }, {
        "src": "https://qnphoto.kagirl.cn/image/bzxc_beta/4.png"
    }, {
        "src": "https://qnphoto.kagirl.cn/image/dongtianpiaoxue/%E4%B8%AD%E6%96%872.png"
    }, {
        "src": "https://qnphoto.kagirl.cn/image/bzxc_beta/8.png"
    }, {
        "src": "https://qnphoto.kagirl.cn/image/dongtianpiaoxue/%E4%B8%AD%E6%96%875.png"
    }, {
        "src": "https://qnphoto.kagirl.cn/image/bzxc_beta/4.png"
    }, {
        "src": "https://qnphoto.kagirl.cn/image/dongtianpiaoxue/%E4%B8%AD%E6%96%872.png"
    }, {
        "src": "https://qnphoto.kagirl.cn/image/bzxc_beta/8.png"
    }, {
        "src": "https://qnphoto.kagirl.cn/image/dongtianpiaoxue/%E4%B8%AD%E6%96%875.png"
    }, {
        "src": "https://qnphoto.kagirl.cn/image/bzxc_beta/4.png"
    }, {
        "src": "https://qnphoto.kagirl.cn/image/dongtianpiaoxue/%E4%B8%AD%E6%96%872.png"
    }, {
        "src": "https://qnphoto.kagirl.cn/image/bzxc_beta/8.png"
    }]
}

var lowest = [];
var lefteach = [];
var dparent = document.getElementById("container");
var window_width = window.innerWidth;
var dparent_width = window_width*0.8;
var row_num = parseInt(dparent_width/172);
var dparent_left = (window_width-row_num*172)/2;
dparent.style.left=dparent_left+'px';
dparent.style.width=dparent_width+'px';
var img_length = img_data.data.length;


img_solution(0);

function img_solution(i){
    var dcontent = document.createElement("div");
    dcontent.className = "box";
    dparent.appendChild(dcontent);
    var boximg = document.createElement("div");
    boximg.className = "box_img";
    dcontent.appendChild(boximg);
    var img = document.createElement("img");
    img.src = img_data.data[i].src;
    boximg.appendChild(img);
    if(i>=row_num)
    {
    	var a = lowest.indexOf(Math.min.apply(null,lowest));
    	dcontent.style.top=lowest[a]+'px';
    	dcontent.style.left= lefteach[a]+'px';
    	dcontent.style.position ='absolute';
    	lowest[a]=lowest[a]+dcontent.offsetHeight;
    }
    else{
        lefteach.push(dparent.children[i].offsetLeft);
        lowest.push(dparent.children[i].offsetTop+dparent.children[i].offsetHeight); 
    }
    i++;
    if(i>=img_length)
    	return;
    else{
    	setTimeout(function(){
    		img_solution(i);
    	},100)
    }  	
}

function time_line(){
	var time_Rec=new Date().toLocaleTimeString();
	var time_RectoE=[];
	time_RectoE[10]="M";
	time_RectoE[8]=" ";
	for(var i=0;i<=7;i++)
		time_RectoE[i]=time_Rec[i+2];
	if(time_Rec[0]=='上')
		{time_RectoE[9]="A";}
	else {
		time_RectoE[9]="P";
	}
	time_RectoE = time_RectoE.join("");
    document.getElementById("show_time").innerHTML=time_RectoE;
	}
time_line();
setInterval(time_line, 1000);