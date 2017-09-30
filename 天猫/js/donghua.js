/*
* @Author: FZM
* @Date:   2017-09-20 14:33:38
* @Last Modified by:   FZM
* @Last Modified time: 2017-09-20 23:43:03
*/
window.onload = function(){
	let yuankuang = document.getElementsByClassName('yuankuang')[0];
    let li1 = yuankuang.getElementsByTagName('li');
    let imgs = document.getElementsByClassName('imgs')[0];	 
    let li2 = imgs.getElementsByTagName('li');
    let daokuang = document.getElementsByClassName('daokuang')[0];
    let w = parseInt(getComputedStyle(imgs,null).width);
    let now = 0;
    let next = 0;
   
    console.log(w);
    let t = setInterval(move,3000);
    function move(){
    	next++;
    	if(next==li2.length){
    		next = 0;
    	}
    	li2[next].style.left =`${w}px`;
    	animate(li2[now],{left:-w});
    	animate(li2[next],{left:0});
    	now = next;
    }
    

}