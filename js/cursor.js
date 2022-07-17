const root = document.querySelector(":root")
const customPointer = document.querySelector(".custom-pointer");
const button = document.querySelector(".button");

let [pointerX, pointerY, previousPointerX, previousPointerY, angle, previousAngle, angleDisplace] = Array(7).fill(0);
const degrees = 57.296;



document.onmousemove = function (event) {
  let distanceX, distanceY;
  previousPointerX = pointerX;
  previousPointerY = pointerY;
  pointerX = event.pageX;
  pointerY = event.pageY;

  distanceX = previousPointerX - pointerX;
  distanceY = previousPointerY - pointerY;

  if (distanceX <= 0 && distanceY >= 0) {
    setDisplacement(distanceX, distanceY, pointerX, pointerY, true, 0)
  } else if (distanceX < 0 && distanceY < 0) {
    setDisplacement(distanceX, distanceY, pointerX, pointerY, false, 90)
  } else if (distanceX >= 0 && distanceY <= 0) {
    setDisplacement(distanceX, distanceY, pointerX, pointerY, true, 180)
  } else if (distanceX > 0 && distanceY > 0) {
    setDisplacement(distanceX, distanceY, pointerX, pointerY, false, 270)
  }
};

function setDisplacement(dx, dy, px, py, flip = false, dir = 0) {
  previousAngle = angle
  
  if (flip) {
    angle = 90 - Math.atan(Math.abs(dy) / Math.abs(dx)) * degrees + dir;
  } else {
    angle = Math.atan(Math.abs(dy) / Math.abs(dx)) * degrees + dir;
  }
  
  if (isNaN(angle)) {
    angle = previousAngle
  } else {
    if (angle - previousAngle <= -270) {
      angleDisplace += 360 + angle - previousAngle
    } else if (angle - previousAngle >= 270) {
      angleDisplace += angle - previousAngle - 360
    } else {
      angleDisplace += angle - previousAngle
    }
  }
  customPointer.style.transform = `translate3d(${px}px, ${py}px, 0) rotate(${angleDisplace}deg)`;
}