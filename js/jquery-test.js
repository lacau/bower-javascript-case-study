jQuery(document).ready(function() {
	var _left = true;

	jQuery("#button").click(function() {
		if(_left)
			jQuery("#cube").animate({'background-color': 'black', left: '500px'});
		else
			jQuery("#cube").animate({'background-color': 'red', left: '0px'});

		_left = !_left;
	});
});