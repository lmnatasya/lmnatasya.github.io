(function($){

	'use strict';

	var $a = $('#request');
	var $bio = $('#bio');

	$a.on('click', function(){
		//hide the button
		$(this).hide();
		//send request and get the respone
		//sebenere https://s3-us-west-2.amazonaws.com/s.cpdn.io/162656/Bio.txt
		$bio.load('https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/Bio.txt', completeFunction);
	});

	//complete function
	function completeFunction(responseText, textStatus, request){
		//add a border
		//$bio.css('border', '1px solid #e8e8e8');
		if(textStatus == 'error') {
      		// show a relevant message
      		$bio.text('An error occurred during your request: ' +  request.status + ' ' + request.statusText);
    	}
	}
})(jQuery);