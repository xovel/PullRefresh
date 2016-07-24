var xov = {}

xov.on = function(selector, type, fun ){
	var elem = xov.$(selector);
	elem && elem.addEventListener(type, fun, false);

	return xov;
}

xov.$ = function(selector){
	return document.querySelector(selector);
}

xov.$$ = function(selector){
	return document.querySelectorAll(selector);
}

xov.div = function(className){
	var div = document.createElement('div');
	if( !!className ) {
		div.className = className;
	}

	return div;
}

// config
xov.lang = {
	pull: '下拉可以刷新',
	refresh: '松开可以刷新',
	loading: '正在加载...'
}
xov.height = 120;
// config end

xov.pos = {}

xov.on('body','touchstart',function(e){

	xov.pos.startX = e.touches[0].clientX;
	xov.pos.startY = e.touches[0].clientY;

}).on('body','touchmove',function(e){

	xov.pos.currentX = e.touches[0].clientX;
	xov.pos.currentY = e.touches[0].clientY;

	if( xov.pos.currentY - xov.pos.startY < 0 && !xov.lock ){
		return;
	}

	if( !xov.lock && document.body.scrollTop <= 0 ){
		xov.lock = true;

		xov.down = xov.div('pull-refresh-box');
		document.body.insertBefore( xov.down, document.body.firstChild );

		xov.pos.topX = xov.pos.currentX;
		xov.pos.topY = xov.pos.currentY;
	}

	if( !xov.lock ){
		return;
	} else {
		var pullHeight = xov.pos.currentY - xov.pos.topY;

		if( pullHeight >= 0 && pullHeight < xov.height ){
			xov.down.innerHTML = xov.lang.pull;
			xov.down.className = 'pull-refresh-box' + (!!xov.pull ? ' pull-refresh-up' : ' pull-refresh-down');
			xov.reload = false;
		}

		if( pullHeight >= xov.height ){
			xov.down.innerHTML = xov.lang.refresh;
			xov.down.className = 'pull-refresh-box pull-refresh-reload';
			xov.pull = true;
			xov.reload = true;
		}
	}

	if( e.preventDefault ){
		e.preventDefault();
	} else {
		e.returnValue = false;
	}

}).on('body','touchend',function(e){
	if( xov.lock && xov.reload ){
		xov.load = true;
		xov.down.innerHTML = xov.lang.loading;
		xov.down.className = 'pull-refresh-box pull-refresh-up';
		setTimeout(function(){
			document.body.removeChild(xov.down);
			xov.down = null;			
			window.location.reload();
		}, 500);
	}
	if( !xov.load && xov.down ){
		document.body.removeChild(xov.down);
		xov.down = null;
	}
	xov.load = false;
	xov.lock = false;
	xov.pull = false;
	xov.pos = {};
});
