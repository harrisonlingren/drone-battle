// app code here

$(document).ready(function() {
  function mouseenter() {
    // cursor hover code here
  }

  function mouseleave () {
    // cursor leave code here
  }

  function click () {
    // cursor click code here
  }

  // get objects by class
  var enemies = document.querySelectorAll('[mixin="enemy"]');

  // apply event listeners
  enemies.addEventListener('mouseenter', mouseenter);
  enemies.addEventListener('mouseleave', mouseleave);
  enemies.addEventListener('click', click);
});
