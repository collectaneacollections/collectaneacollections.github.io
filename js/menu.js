
function setup() {
	var menu = document.getElementById('menu');
	var nav = document.getElementById('nav');
	var vid = document.getElementById('bgvideo');
	var cover = document.getElementById('video_cover');

	document.body.addEventListener('click', hideNav);
	menu.addEventListener('click', toggleNav);
	if (vid != undefined) {
		cover.addEventListener('click', function(ev){
			vid.play();
			this.style.display='none';
		});
		vid.addEventListener('canplay', function(ev){
			cover.style.display='none';
			vid.play();
		});
	}

	function toggleNav(ev){
		if (nav.className.indexOf('visible') != -1){
			hideNav();
		} else {
			nav.oldClass = nav.className;
			nav.className += ' visible';
		}
		ev.stopPropagation();
		ev.cancelBubble = true;
		return false;
	}
	function hideNav(){
		nav.className = nav.oldClass;
	}
}
setup();
