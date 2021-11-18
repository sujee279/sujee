var origPic = null;
var grayPic = null;
var redPic = null;
var bluePic = null;
var invertPic = null;
var rainbowPic = null;
var can;

function loadImage() {
  origPic = new SimpleImage(fileButton);
  grayPic = new SimpleImage(fileButton);
  redPic = new SimpleImage(fileButton);
  bluePic = new SimpleImage(fileButton);
  invertPic = new SimpleImage(fileButton);
  rainbowPic = new SimpleImage(fileButton);
  can = document.getElementById("can1");
  origPic.drawTo(can);
} //loadImage

function grayScale() {
  if (origPic == null) {
    alert("No image has been selected");
  } else {
    //if
    greyFilter();
    grayPic.drawTo(can);
  } //else
} //grayScale

function redscale() {
  if (origPic === null) {
    alert("No image has been selected");
  } else {
    //if
    redFilter();
    redPic.drawTo(can);
  } //if
} //redscale

function bluescale() {
  if (origPic == null) {
    alert("No image has been selected");
  } else {
    //if
    blueFilter();
    bluePic.drawTo(can);
  } //if
} //bluescale

function invert() {
  if (origPic == null) {
    alert("No image has been selected");
  } else {
    //if
    invertFilter();
    invertPic.drawTo(can);
  } //if
} //invert

function rainbow() {
  if (origPic == null) {
    alert("No image has been selected");
  } else {
    //if
    rainbowFilter();
    rainbowPic.drawTo(can);
  } //if
} //invert

function reset() {
  alert("reset");
  origPic.drawTo(can);
  //grayPic=origPic;
  //redPic=origPic;
  //bluePic=origPic;
  //invertPic=origPic;
  //rainbowPic=origPic;
} //reset

function clearCanvas(){
  var can1 = document.getElementById("can1");
  var context1 = can1.getContext("2d");
  context1.clearRect(0,0,can1.width,can1.height);
 } //clearCanvas

function imageIsLoaded(image) {
  if (image == null) {
    alert("No image has been selected");
    return false;
  } else {
    //if
    return true;
  } //else
} //imageIsLoaded

function greyFilter() {
  for (var pixel of grayPic.values()) {
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  } //for
} //greyFilter

function redFilter() {
  for (var pixel of redPic.values()) {
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    if (avg < 128) {
      pixel.setRed(avg * 2);
      pixel.setGreen(0);
      pixel.setBlue(0);
    } else {
      //if
      pixel.setRed(255);
      pixel.setGreen(avg * 2 - 255);
      pixel.setBlue(avg * 2 - 255);
    } //else
  } //for
} //redFilter

function blueFilter() {
  for (var pixel of bluePic.values()) {
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    if (avg < 128) {
      pixel.setRed(0);
      pixel.setGreen(0);
      pixel.setBlue(avg * 2);
    } else {
      //if
      pixel.setRed(avg * 2 - 255);
      pixel.setGreen(avg * 2 - 255);
      pixel.setBlue(255);
    } //else
  } //for
} //bluescale

function invertFilter() {
  alert("invert filter");
  for (var pixel of invertPic.values()) {
    pixel.setRed(255 - pixel.getRed());
    pixel.setGreen(255 - pixel.getGreen());
    pixel.setBlue(255 - pixel.getBlue());
  } //for
} //invertFilter

function rainbowFilter() {
  var height = rainbowPic.getHeight();
  for (var pixel of rainbowPic.values()) {
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    if (pixel.getY() >= 0 && pixel.getY() < (height / 5)) {
      if (avg < 128) {
        pixel.setRed(avg * 2);
        pixel.setGreen(0);
        pixel.setBlue(0);
      } else {
        //if
        pixel.setRed(255);
        pixel.setGreen(avg * 2 - 255);
        pixel.setBlue(avg * 2 - 255);
      } //else
    } //red
    if (pixel.getY() >= (height / 5) && pixel.getY() < (height / 5 * 2)){
      if (avg < 128) {
        pixel.setRed(avg * 2);
        pixel.setGreen(1.9686 * avg);
        pixel.setBlue(0.0549*avg);
      } else {
        //if
        pixel.setRed(255);
        pixel.setGreen(0.0313 * avg + 247);
        pixel.setBlue(1.9450 * avg - 241);
      } //else
    } //yellow
    if (pixel.getY() >= (height / 5*2) && pixel.getY() < (height / 5 * 3)){
      if (avg < 128) {
        pixel.setRed(0.13 * avg);
        pixel.setGreen(1.33 * avg);
        pixel.setBlue(1.2 * avg);
      } else {
        //inner if
        pixel.setRed(1.87 * avg - 221);
        pixel.setGreen(0.67 * avg + 85);
        pixel.setBlue(0.8 * avg + 51);
      } //inner esle
    } //teal
    if (pixel.getY() >= (height / 5*3) && pixel.getY() < height / 5 * 4) {
      pixel.setRed(255 - pixel.getRed());
      pixel.setGreen(255 - pixel.getGreen());
      pixel.setBlue(255 - pixel.getBlue());
    } //invert
    if (pixel.getY() >= height / 5 * 4 && pixel.getY() < height / 5 * 5) {
      if (avg < 128) {
        pixel.setRed(1.0558 * avg);
        pixel.setGreen(0.439 * avg);
        pixel.setBlue(1.4117 * avg);
      } else {
        //inner if
        pixel.setRed(0.9411 * avg - 15);
        pixel.setGreen(1.5607 * avg - 143);
        pixel.setBlue(0.5882 * avg + 105);
      } //inner esle
    } //purple
  } //for
} //rainbowFilter
