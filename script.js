//this is the task counter
var tasksCompleted = sessionStorage.getItem("tasksCompleted");

var image="sprout.png";

switch(tasksCompleted) {
  case (tasksCompleted >= 14):
    image='stage 7.png';
    break;
  case (tasksCompleted >= 12):
    image='stage 6.png';
    break;
  case (tasksCompleted >= 10):
    image= 'stage 5.png';
    break;
  case (tasksCompleted >= 8):
    image= 'stage 4.png';
    break;
  case (tasksCompleted >= 6):
    image= 'stage 3.png';
    break;
  case (tasksCompleted >= 4):
    image= 'stage 2.png';
    break;
  case (tasksCompleted >= 2):
    image= 'stage 1.png';
    break;
  default:
    image='sprout.png';
    break;
}

var img = document.createElement("img");
 
img.src = image;
var src = document.getElementById("output-image");
src.src = image;

src.appendChild(img);