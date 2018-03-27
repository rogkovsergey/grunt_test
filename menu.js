$(function(){
	$('.nav__list').mouseover(function(e){
		$(e.target).children().css({
			'display':'flex',
			'flex-direction':'column'
		})
	});
});
