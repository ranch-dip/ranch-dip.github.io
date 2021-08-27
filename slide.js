
var i = 0; //start of slide
var images = [];
images[0] = 'images/burger.jpg';
images[1] = 'images/wangs2.jpg';
images[2] = 'images/br.jpg';
images[3] = 'images/pza2.png';

// func to change images every 3 sec
function slideEr() {
   	   document.getElementById('slide').src = images[i];
	   document.getElementById('slide').className += "fadeOut";
	   setTimeout(function() {
		   document.getElementById('slide').src = images[i];
		   document.getElementById('slide').className= "";
	   }, 450);

	if(i < images.length - 1){
		i++;
	}else{
			i=0;
		 }
		setTimeout("slideEr()", 4000);	
}
// Initialize and add the map

function initMap() {
	const uluru = { lat: 41.611350, lng: -87.066910 };
	const map = new google.maps.Map(document.getElementById("map"), {
	  zoom: 4,
	  center: uluru,
	});
	// The marker, positioned at Uluru
	const marker = new google.maps.Marker({
	  position: uluru,
	  map: map,
	});
  }
 

  window.onload = slideEr();

