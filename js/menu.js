
function setup() {
	var menu = document.getElementById('menu');
	var nav = document.getElementById('nav');
	console.log('setup');

	document.body.addEventListener('click', hideNav);
	menu.addEventListener('click', toggleNav);

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
