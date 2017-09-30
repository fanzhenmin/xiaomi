/*
* @Author: FZM
* @Date:   2017-09-20 15:55:23
* @Last Modified by:   FZM
* @Last Modified time: 2017-09-20 16:15:16
*/
window.onabort = function(){
	let banner = document.getElementsByClassName('banner')[0];
	let bans = banner.getElementsByClassName('bans');
	let yuan = document.getElementsByClassName('yuan')[0];
	let yuans = document.getElementsByClassName('yuans');
	let now = 0;
	let next = 0;
	let w = parseInt(getComputedStyle(bans,null).width);
	console.log(w);
}