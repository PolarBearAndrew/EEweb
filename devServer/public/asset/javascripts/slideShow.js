$(document).ready(function(){

	var data = JSON.parse($('#data').attr('data-slideShow'));
	var cIndex = 0;

	console.log('data', data);

	var _TICK = 2500;
	setInterval(function(){
		var $slide = $('#slideShow');
		$slide.fadeTo(500, 0, function(){
			if(cIndex == data.length - 1){
				cIndex = 0;
			}else{
				cIndex++;
			}
			$slide.attr('src', data[cIndex].img).fadeTo(500, 1);
		});
	}, _TICK);

});
