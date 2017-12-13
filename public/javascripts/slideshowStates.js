
Reveal.addEventListener( 'state1', function() {
	setTimeout(function(){ 
		$('#angry').addClass('reduceSize');
		$('#textDiv1').removeClass('hidden');
    }, 1500);  
	
// TODO: Sprinkle magic
}, false );


Reveal.addEventListener( 'state2', function() {

	setTimeout(function(){ 
		$('#sad').addClass('reduceSize');
		$('#textDiv2').removeClass('hidden');
    }, 1500);
// TODO: Sprinkle magic
}, false );


Reveal.addEventListener( 'state3', function() {
	setTimeout(function(){ 
		$('#shocked').addClass('reduceSize');
		$('#textDiv3').removeClass('hidden');
    }, 1500);
}, false );

Reveal.addEventListener( 'state4', function() {
	
	setTimeout(function(){ 
		$('#happy').addClass('reduceSize');
		$('#textDiv4').removeClass('hidden');
    }, 1500);
// TODO: Sprinkle magic
}, false );

Reveal.addEventListener( 'state5', function() {
	setTimeout(function(){ 
		$('#happy-2').addClass('reduceSize');
		$('#textDiv5').removeClass('hidden');
    }, 1500);
// TODO: Sprinkle magic
}, false );

