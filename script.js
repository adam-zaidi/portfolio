line = document.getElementsByClassName("line");

function change_line_width() {
  let width = $(window).width();
  if (width >= 960) {
    line.innerHTML = "---------------------------------------------------------------------------";
  } else if (width < 720) {
    // console.log(width);
    // console.log(Math.floor((width-20)/17.43589744));
    line.innerHTML = "-".repeat(39);
  }
}

document.onload = change_line_width();


window.addEventListener('resize', function(event) {
    change_line_width();
}, true);