/*
* @Author: FZM
* @Date:   2017-09-19 09:51:00
* @Last Modified by:   FZM
* @Last Modified time: 2017-09-21 00:23:33
*/
window.onload = function(){
	let yuankuang = document.getElementsByClassName('yuankuang')[0];
    let li1 = yuankuang.getElementsByTagName('li');
    let imgs = document.getElementsByClassName('imgs')[0];
    let li2 = imgs.getElementsByTagName('li');
    let daokuang = document.getElementsByClassName('daokuang')[0];
    let now = 0;
    let next = 0;
    let flag = true;
    let imgsw = parseInt(getComputedStyle(imgs,null).width);
    let t = setInterval(move,3000);
    function move(){
        next++;
        if(next>=li2.length){
            next = 0;
        }
        li2[next].style.left = `${imgsw}px`;
        animate(li2[now],{left:-imgsw});
        animate(li2[next],{left:0});
        li1[now].style.background = '#808080';
        li1[next].style.background = '#fff';
        now = next;
    }
    for(let i=0;i<li1.length;i++){
        li1[i].onclick = function(){
            li2[i].style.left = `${imgsw}px`; 
            animate(li2[now],{left:-imgsw});
            animate(li2[i],{left:0});
            li1[i].style.background = '#fff';
            li1[now].style.background = '#808080';
            now = i;
            next = now;  
         }
    }         
    // for(let i=0;i<li1.length;i++){
    // 	li1[i].onclick = function(){
    // 		for(let j=0;j<li2.length;j++){
    // 			animate(li2[j],{opacity:0});
    //             li1[j].style.background = '#808080';
    //             now = i;
    //             clearInterval(t)
    // 		}
    // 		animate(li2[i],{opacity:1})
    // 		li1[now].style.background = '#fff';
    //         switch(i){
    //             case 0:daokuang.style.background = '#E8E8E8';break;
    //             case 1:daokuang.style.background = '#8023C6';break;
    //             case 2:daokuang.style.background = '#CBE5CC';break;
    //             case 3:daokuang.style.background = '#E42E20';break;
    //             case 4:daokuang.style.background = '#E8E8E8';break;
    //             case 5:daokuang.style.background = '#4B1732';break;
    //         }
    // 	}
    // }
    //  t = setInterval(move,3000);
    //  let now = 0;
    //  function move(){
    //     now++;
    //     if(now==li2.length){
    //         now = 0;
    //     }
    //     for(let i=0;i<li1.length;i++){
    //         animate(li2[i],{opacity:0});
    //         li1[i].style.background = '#808080';
    //     }
    //     animate(li2[now],{opacity:1});
    //     li1[now].style.background = '#fff';
    //     switch(now){
    //             case 0:daokuang.style.background = '#E8E8E8';break;
    //             case 1:daokuang.style.background = '#8023C6';break;
    //             case 2:daokuang.style.background = '#CBE5CC';break;
    //             case 3:daokuang.style.background = '#E42E20';break;
    //             case 4:daokuang.style.background = '#E8E8E8';break;
    //             case 5:daokuang.style.background = '#4B1732';break;
    //         }
    // }
    // //////////////////////////////
    // imgs.onmouseover = function(){
    //     clearInterval(t);     
    // } 
    // imgs.onmouseout = function(){
    //    t = setInterval(move,3000);
    // }
}
