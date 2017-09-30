/*
* @Author: FZM
* @Date:   2017-09-19 21:58:09
* @Last Modified by:   FZM
* @Last Modified time: 2017-09-23 10:40:26
*/
window.onload = function(){
	let banner = document.getElementsByClassName('banner')[0];
	let bans = banner.getElementsByClassName('bans');
	let yuan = document.getElementsByClassName('yuan')[0];
	let yuans = document.getElementsByClassName('yuans');
	let jiantou1 = document.getElementsByClassName('jiantou1')[0];
	let jiantou2 = document.getElementsByClassName('jiantou2')[0];
	let now = 0;
	let next = 0;
	let bansw = parseInt(getComputedStyle(banner,null).width);
	let flag = true;
	let t = setInterval(fn,5000)
		jiantou1.onclick = function(){
			if(!flag){
				return;
			}
			fn1();
			flag = false;
		}
		jiantou2.onclick = function(){
			if(!flag){
				return;
			}
			fn();
			flag = false;
		}
	function fn(){
		next++;
		if(next==bans.length){
			next=0;
		}
		bans[next].style.left = `${bansw}px`;
		yuans[now].style.background = '#000';
		yuans[next].style.background = '#fff';
		animate(bans[now],{left:-bansw});
		animate(bans[next],{left:0},function(){
			flag = true;
		});
		now = next;
	}
	function fn1(){
		next--;
		if(next<0){
			next=bans.length-1;
		}
		bans[next].style.left = `${-bansw}px`;
		yuans[now].style.background = '#000';
		yuans[next].style.background = '#fff';
		animate(bans[now],{left:bansw});
		animate(bans[next],{left:0},function(){
			flag = true;
		});
		now = next;
	}
	for(let i=0;i<yuans.length;i++){
		yuans[i].onclick = function(){
			bans[i].style.left = `${bansw}px`;
			animate(bans[now],{left:-bansw});
			animate(bans[i],{left:0});
			yuans[i].style.background = '#fff';
			yuans[now].style.background = '#000';
			now = i;
			next = now;
		}
		let wright = document.getElementsByClassName('wright');
		let zuodao = document.getElementsByClassName('zuodao')[0];
		let liss = document.getElementsByClassName('liss');
		for(let i=0;i<liss.length;i++){
			liss[i].onmouseover = function(){
				wright[i].style.display = 'block';
			}
			liss[i].onmouseout = function(){
				wright[i].style.display = 'none';
			}
		}
	}
	let Tu1 = document.querySelector('.Tukuang>.tukuang1');
	let zuo = document.querySelector('.jiantoukuang>li>.Left');
	let you = document.querySelector('.jiantoukuang>li>.Right');
	let lis = document.querySelector('.tukuang1>li');
	let w = lis.offsetWidth+parseInt(getComputedStyle(lis,null).marginRight)
	let i=0;
	   Tu1.innerHTML += Tu1.innerHTML;
	zuo.onclick = function(){
		tu1();
	}
	you.onclick = function(){
		tu2();
	}
	function tu1(){
		if(i==0){
			return;
		}
		i--;
		animate(Tu1,{left:-i*w*5});		
	}
	function tu2(){
		if(i==3){
			return;
		}
		i++;
		animate(Tu1,{left:-(i*w*5)});
	}
	// let t1 = setInterval(move,60);
	// function move(){
	// 	animate(Tu1,{left:1226});
	// }
	// for(let i=0;i<yuans.length;i++){
	// 	yuans[i].onclick = function(){
	// 		for(let j=0;j<yuans.length;j++){
	// 			animate(bans[j],{opacity:0});
	// 			yuans[j].style.background = '#000';
	// 		}
	// 		animate(bans[i],{opacity:1});
	// 		yuans[i].style.background = '#fff';
	// 	}
	// }
	// let t;
	// t = setInterval(move,3000);
	// let now = 0;
	// function move(){
	// 	now++;
	// 	if(now == bans.length){
	// 		now = 0;
	// 	}
	// 	for(let i=0;i<bans.length;i++){
	// 		animate(bans[i],{opacity:0});
	// 		yuans[i].style.background = '#000';
	// 	}
	// 	animate(bans[now],{opacity:1});
	// 	yuans[now].style.background = '#fff';
	// }
	// function move1(){
	// 	now--;
	// 	if(now<0){
	// 		now = bans.length-1;
	// 	}
	// 	for(let i=0;i<bans.length;i++){
	// 		animate(bans[i],{opacity:0});
	// 		yuans[i].style.background = '#000';
	// 	}
	// 	animate(bans[now],{opacity:1});
	// 	yuans[now].style.background = '#fff';
	// }

	// banner.onmouseover = function(){
	// 	clearInterval(t);
	// }
	// banner.onmouseout = function(){
	// 	t = setInterval(move,3000);
	// }
	
	// jiantou1.onclick = function(){
	// 	move1();
	// }
	// jiantou2.onclick = function(){
	// 	move();
	// }
	
}