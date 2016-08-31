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
  var objs = $('');

  // apply event listeners
  objs.on('mouseenter', mouseenter);
  objs.on('mouseleave', mouseleave);
  objs.on('click', click);
});
