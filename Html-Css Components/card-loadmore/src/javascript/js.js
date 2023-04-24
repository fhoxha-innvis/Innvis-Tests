

var boxes = document.getElementsByClassName("boxes");
var numBoxes = document.querySelectorAll('.boxes').length;
var counter = numBoxes - 1; 
var seeMore = document.getElementById('load-more-btn');

window.onload = function() {
  	if (numBoxes > 4) {
	    seeMore.style.display = 'block';
  	}
}


function loadMore() {
	var actualValue = (numBoxes - counter) + 3; 

	
	for (i = 0; i < 4; i++) {
		if (typeof boxes[actualValue+i] !== "undefined") {
			boxes[actualValue+i].style.display = 'block';
		}
  	}
    
 console.log(counter); 
	counter = counter - 6; 

  console.log(counter); 
	
	if (counter <= 1) {
		seeMore.style.display = 'none';
		return;
	}
}

seeMore.onclick = loadMore;