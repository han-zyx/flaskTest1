var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}
  x[myIndex-1].style.display = "block";
  setTimeout(carousel, 3000); // Change image every 3 seconds
}

let number = document.getElementById ("number");
let counter = 0;
setInterval(() => {
    if (counter == 65) {
        clearInterval();
    } else {
        counter += 1;
        number.innerHTML = counter + "%"
    }
}, 30);
