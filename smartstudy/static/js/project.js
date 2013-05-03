function initialize() {
	var geocoder = new google.maps.Geocoder();
	var mapOptions = {
		zoom: 18,
		center: new google.maps.LatLng(37.4856366, 127.00432139999998),
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};

	var map = new google.maps.Map(document.getElementById('map'),
	  mapOptions);

	var marker = new google.maps.Marker({
		position: map.getCenter(),
		map: map,
		draggable: false
	});

	var infowindow = new google.maps.InfoWindow({
		content: '대한민국 서울특별시 서초구 서초동 1516-2'
	}).open(marker.get('map'), marker);
}

$(function() {
	var $navigation = $('#navigation');
	var nav_offset_y = $navigation.offset().top;

	function fixedNavigation() {
		if ($(window).scrollTop() > nav_offset_y) {
			$navigation.css({
				'top': 0,
				'position': 'fixed'
			});
		} else {
			$navigation.css({
				'position': 'relative'
			});
		}
	}

	$(window).on('load', initialize).scroll(fixedNavigation);
});