$(document).ready(function(){
	var num = 16; //default
var createGrid = function(n){
	for (i = 0; i < n; i++){
		for(j=0; j< n; j++){ 

		$('.grid').append('<div class="square"></div>');
		$('.square').width(480/n);
		$('.square').height(480/n);
	}
}
}

createGrid(num);

var draw = function(){
	$('.square').mouseover(function(){
		$(this).addClass('colored');
	})
}

draw();

});