var popBox = '<div id="cover"><div id="popBox" class="ui floating message"> <div class="ui container"> <center><img src="@img" class="ui fluid image"/> <div id="msg">@msg</div> <div id="close">close</div> </center> </div> </div> </div>';

$(document).ready(function(){

	$('body').on('click', '#close', function(){
		$('#cover').fadeTo(300, 0, function(){
			this.remove();
		});
	});

	$('.pop').click(function(){
		var box = popBox.replace(/@img/, $(this).attr('data-img')).replace(/@msg/, $(this).attr('data-msg'));
		$('body').append(box);
		$('#popBox').fadeTo(300, 1);
	});
});
