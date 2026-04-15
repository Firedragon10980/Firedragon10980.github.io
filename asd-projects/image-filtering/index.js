// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
  
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here
  // try to make outer loop loop through each row in image and inner loop go through each pixel in that row
applyFilter();
  for (let i = 0; i < image.length; i++) {
    for (let j = 0; j < image[i].length; j++) {
      console.log(image[i][j]);
  // do not change the below line of code
  render($("#display"), image);
}
  }
  }
/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2, 3 & 5: Create the applyFilter function here
function applyFilter(){
var pixel = image[i][j];
var pixelArray = [rgbStringToArray(pixel)];
var updatedPixel = rgbArrayToString(pixelArray);
image[i][j] = updatedPixel;
}
// This is where I’ll modify the color values later
// TODO 9 Create the applyFilterNoBackground function


// TODO 6: Create the keepInBounds function


// TODO 4: Create reddify filter function


// TODO 7 & 8: Create more filter functions


// CHALLENGE code goes below here
