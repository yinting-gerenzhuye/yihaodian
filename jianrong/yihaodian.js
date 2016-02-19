window.onload=function(){


  /*banner左侧的导航开始*/
var bannerzuo=$(".b1lieb1");
var erji=$(".erji");
for(var i=0;i<bannerzuo.length;i++){
      bannerzuo[i].index=i;
      hover(bannerzuo[i],function(){
        for(var j=0;j<erji.length;j++){
          erji[j].style.display="none";
        }
          erji[this.index].style.display="block";
      },function(){
        erji[this.index].style.display="none";
      })
      
    }
 /*banner左侧的导航结束*/

/////***********2.每个楼层的轮播开始****************///////
  
  function luobo1(llunbo){
  var jin=$(".tyzhong")[llunbo];
  var imgsbox1=$(".imgsbox1")[llunbo];
  var bigbox=$(".bigbox")[llunbo];

  /*  var jin=$(".tyzhong")[0];
  var imgsbox1=$(".imgsbox1")[0];
  var bigbox=$(".bigbox")[0];*/

  var rec=$("a",bigbox);
      var num1=1;
    function move1(){
      if(num1==3){
        animate(imgsbox1,{left:-330*num1},600,Tween.Linear,function(){
          animate(imgsbox1,{left:0},0);
      })
      num1=0;
       } 
       else{
        animate(imgsbox1,{left:-330*num1},600,Tween.Linear);
        
      } 
      for(var i1=0;i1<rec.length;i1++){
        rec[i1].style.background="#dddddd";
      }
      rec[num1].style.background="#ff3c3c";
        num1++;
      } 
    var t1=setInterval(move1,2000);

    for(var i1=0;i1<rec.length;i1++){
      rec[i1].index=i1;
      rec[i1].onmouseover=function(){
        clearInterval(t1);
        for(var j1=0;j1<rec.length;j1++){
          rec[j1].style.background="#dddddd";

        }
        animate(imgsbox1,{left:-330*this.index},600,Tween.Linear);
        num1=this.index+1;
        this.style.background="#ff3c3c";
      }

      rec[i1].onmouseout=function(){
        t1=setInterval(move1,2000);
      }
    }
  } 
 for(var i=0;i<8;i++){
    luobo1(i);
 }
 ///////*******************每个楼层的轮播结束***********/////////
  


 //下拉导航

var topyiji=$(".yiji");
var toperji=$(".toperji");
//alert(toperji.length)
for(var i=0;i<topyiji.length;i++){
  topyiji[i].index=i;
  hover(topyiji[i],function(){
    toperji[this.index].style.display="block";
    // topyiji[this.index].style.backgroundColor="#000";
  },function(){
    toperji[this.index].style.display="none";
  });
   

}


 //搜索

  //顶部天猫搜索框   HTML俩个ID,与下面的各自获取设置      
 var tex=$("#tex");


 	tex.onfocus=function(){//点击这个文本框的时候(表单获得焦点事件)
		if(tex.value=="送给孩子的温暖"){//如果文本框里边是默认值，就把它清空
			tex.value=""
		}		
	}
	tex.onblur=function(){//点击这个文本框外边的时候(表单失去焦点事件)
		if(tex.value){//如果文本框里边有值，不做操作

		}else{//如果文本框是空的，就恢复默认值
			tex.value="送给孩子的温暖"
		}
	}
  




	//选显卡



  //轮播
  function ban5(){
      	
	      	var imgs=$(".ban1");
	      	var yuan=$(".t-2");
	      	var num=1;
	      	var ajief=$(".bannerbj1")[0];
          var bgcolor=["#E83C0A","#D73F16","#D2180B","#DFDDE0","#BD0E39","#1AA8F0","#F92C64","#EF2636"];
	      	function move(){
	      		if(num==8){
	      			num=0;
	      		}
	      		for(var i=0;i<imgs.length;i++){
	      			imgs[i].style.zIndex=2;
	      			yuan[i].style.background="blue";
	      		}
	      	  imgs[num].style.zIndex=3;
	      	  yuan[num].style.background="#ff6700";
            ajief.style.background=bgcolor[num];
	          num++;
	        }

	      	var t=setInterval(move,2000);
	        for(var i=0;i<yuan.length;i++){
	       	  	yuan[i].index=i;
     		yuan[i].onmouseover=function(){//滑上事件
     			clearInterval(t);//停止轮播
     			for(var j=0;j<imgs.length;j++){
     				imgs[j].style.zIndex=2;
     				yuan[j].style.background="blue";
     			}
     			imgs[this.index].style.zIndex=3;
          ajief.style.background=bgcolor[this.index];
     			yuan[this.index].style.background="#ff6700";
     		}	
	        yuan[i].onmouseout=function(){
	        num=this.index+1
	        t=setInterval(move,1000);
             }
	      }	
	    }
	      	
   ban5();




   //左移
     var move=$(".llou")[0];
	 var moveimg=$("img",move);  	
	 for(var i=0;i<moveimg.length;i++){
	 	moveimg[i].index=i;
	 	moveimg[i].onmouseover=function(){
	       moveimg[this.index].style.cssText="position:relative;left:-3px";
	 	}
	 	moveimg[i].onmouseout=function(){
	        moveimg[this.index].style.cssText="position:relative;left:0px";
	 	}

	 }

//左轮播
  /* function f(num){ 
      var bannerbox=$(".bannerbox")[num];
      var left=$(".leftbtn")[num];
      var right=$(".rightbtn")[num];
      var flg1=true;
      function aa(){
        if(flg1==true){
          flg1=false;
        animate(bannerbox,{left:-190},1000,function(){
          var fir=getFirst(this);
          this.appendChild(fir);
          this.style.left=0;
          flg1=true;
        })
        }
      }
        function bb(){
          var last=getLast(bannerbox);
            var first=getFirst(bannerbox);
          bannerbox.insertBefore(last,first);
            bannerbox.style.left="-190px";
            animate(bannerbox,{left:0},1000)
         }
      var t=setInterval(aa,3000)

      left.onmouseover=right.onmouseover=function(){
        clearInterval(t);
      }
      left.onmouseout=right.onmouseout=function(){
        t=setInterval(aa,3000);
      }
      right.onclick=function(){
        aa();
      }
      left.onclick=function(){
        bb();
      }


   }
  for(var i=0;i<12;i++){
    f(i);
  }
*/

 /*按需加载*/
         /*function dfji(){
         var floor=$(".f1zhong"); 

            var ch=document.documentElement.clientHeight;
           
              var scrollT=getScrollT();
               for(var i=0;i<floor.length;i++){
                var imgs=$("img",floor[i]);
              if(floor[i].offsetTop<scrollT+ch){//当前楼层到顶部的高度,如果小于页面内容超出浏览器的距离+浏览器的距离时
                    //获取当前楼层所有图片
                    for(var j=0;j<imgs.length;j++){
                      imgs[j].src=imgs[j].getAttribute("aa")//每一个图片的aa属性的赋值给src属性
                    }
              }
            }
        }
        window.addEvent(window,"scroll",dfji);*/
        
 //banner 尤华图     
/*function k(){
   var daos=getClass("ten");
    var fus=getClass("youlatua");
    for (var i = 0; i < daos.length; i++) {
      daos[i].index=i;
      daos[i].onmouseover=function(){
        this.flag=true;
        var aa=this;
        setTimeout(function(){
        if(aa.flag){  
          fus[aa.index].style.display="block";
          animate(fus[aa.index],{left:190,opacity:1},200)
         }
           },100)
        }

      daos[i].onmouseout=function(){
        this.flag=false;
       
        animate(fus[this.index],{left:170,opacity:1},300,function(){
          this.style.display="none";
        })
      }
    }
    
    
    }
k();*/




//////最右侧的图标显示开始；
var jinkou=$(".yilouzbtbj");
var gehu=$("d1-1bj");

var jump=$(".jump")[0];
var anniu=$("li",jump);
var tishi=$(".tishi");
 
var ch=document.documentElement.clientHeight;
window.onscroll=function(){
  var scrollT=getScrollT();
      if(scrollT<=750){
      jump.style.display="none";
    }else{
      jump.style.display="block";
    }
 
//按钮控制滚动条
for(var i=0;i<anniu.length;i++){
  anniu[i].index=i;
  anniu[i].onclick=function(){
    //获取滚动条的对象
    var obj=document.documentElement.scrollTop?document.documentElement:document.body;
    animate(obj,{scrollTop:jinkou[this.index].t},500,Tween.Linear);
    //当前按钮的对应楼层赋值给滚动条
  }
}

 //滚动条  控制  左侧按钮
    for(var i=0;i<jinkou.length;i++){
      jinkou[i].t=jinkou[i].offsetTop;
        if(jinkou[i].t<scrollT+200){
        for(var j=0;j<anniu.length;j++){
            tishi[j].style.display="none";
          }
        tishi[i].style.display="block";
        }
    }

//左侧按钮效果    ｄｅ　效果

   // var ddd=$(".ddd");//一级菜单名
    //二级菜单名
      for(var i=0;i<anniu.length;i++){
      anniu[i].index=i;
      hover(anniu[i],function(){
          tishi[this.index].style.display="block";
        },function(){
        tishi[this.index].style.display="none";
      })
   
    }


    


}

//////最右侧的图标显示结束；


     
   
}


