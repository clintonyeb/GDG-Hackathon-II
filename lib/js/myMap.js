var geocoder;
var map;
var count;
var address;
var a=["Bhubaneswar","Trident Hotel Bhubaneswar","Hotel Sambit Palace","Hotel Sandy's Tower","Hotel Swosti Premium","Ginger Hotel in Bhubaneshwar","MAYFAIR Lagoon",
"Hotel Sidharth, Bhubaneswar Odisha","Empires Hotel, Bhubaneswar","VITS Bhubaneswar Hotel","Hotel Swosti Grand","The Presidency"];
var mapOptions = {
  zoom: 17,
  mapTypeId: google.maps.MapTypeId.ROADMAP,
  mapTypeControlOptions: {
	mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
			'styled_map']
  }
}
var marker;
function initialize() {
count=-1;
var styledMapType = new google.maps.StyledMapType(
            [
              {elementType: 'geometry', stylers: [{color: '#ebe3cd'}]},
              {elementType: 'labels.text.fill', stylers: [{color: '#523735'}]},
              {elementType: 'labels.text.stroke', stylers: [{color: '#f5f1e6'}]},
              {
                featureType: 'administrative',
                elementType: 'geometry.stroke',
                stylers: [{color: '#c9b2a6'}]
              },
              {
                featureType: 'administrative.land_parcel',
                elementType: 'geometry.stroke',
                stylers: [{color: '#dcd2be'}]
              },
              {
                featureType: 'administrative.land_parcel',
                elementType: 'labels.text.fill',
                stylers: [{color: '#ae9e90'}]
              },
              {
                featureType: 'landscape.natural',
                elementType: 'geometry',
                stylers: [{color: '#dfd2ae'}]
              },
              {
                featureType: 'poi',
                elementType: 'geometry',
                stylers: [{color: '#dfd2ae'}]
              },
              {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{color: '#93817c'}]
              },
              {
                featureType: 'poi.park',
                elementType: 'geometry.fill',
                stylers: [{color: '#a5b076'}]
              },
              {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{color: '#447530'}]
              },
              {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{color: '#f5f1e6'}]
              },
              {
                featureType: 'road.arterial',
                elementType: 'geometry',
                stylers: [{color: '#fdfcf8'}]
              },
              {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{color: '#f8c967'}]
              },
              {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{color: '#e9bc62'}]
              },
              {
                featureType: 'road.highway.controlled_access',
                elementType: 'geometry',
                stylers: [{color: '#e98d58'}]
              },
              {
                featureType: 'road.highway.controlled_access',
                elementType: 'geometry.stroke',
                stylers: [{color: '#db8555'}]
              },
              {
                featureType: 'road.local',
                elementType: 'labels.text.fill',
                stylers: [{color: '#806b63'}]
              },
              {
                featureType: 'transit.line',
                elementType: 'geometry',
                stylers: [{color: '#dfd2ae'}]
              },
              {
                featureType: 'transit.line',
                elementType: 'labels.text.fill',
                stylers: [{color: '#8f7d77'}]
              },
              {
                featureType: 'transit.line',
                elementType: 'labels.text.stroke',
                stylers: [{color: '#ebe3cd'}]
              },
              {
                featureType: 'transit.station',
                elementType: 'geometry',
                stylers: [{color: '#dfd2ae'}]
              },
              {
                featureType: 'water',
                elementType: 'geometry.fill',
                stylers: [{color: '#b9d3c2'}]
              },
              {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{color: '#92998d'}]
              }
            ],
            {name: 'Styled Map'});
				
			geocoder = new google.maps.Geocoder();
			map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
			map.mapTypes.set('styled_map', styledMapType);
			map.setMapTypeId('styled_map');	
codeAddress();
}

function setAddress(adr)
{
	address=adr;
}
function codeAddress() {
count=count+1;
address=a[count];
console.log(address);
//info(address);
//var address = document.getElementById('address').value;
geocoder.geocode( { 'address': address}, function(results, status) {
  if (status == google.maps.GeocoderStatus.OK) {
	map.setCenter(results[0].geometry.location);
	if(marker)
	  marker.setMap(null);
		marker = new google.maps.Marker({
			map: map,
			position: results[0].geometry.location,
			draggable: true
		});
	google.maps.event.addListener(marker, "dragend", function() {
	  //document.getElementById('lat').value = marker.getPosition().lat();
	  //document.getElementById('lng').value = marker.getPosition().lng();
	});
	//document.getElementById('lat').value = marker.getPosition().lat();
	//document.getElementById('lng').value = marker.getPosition().lng();
  } else {
	alert('Geocode was not successful for the following reason: ' + status);
  }
//};
});
}