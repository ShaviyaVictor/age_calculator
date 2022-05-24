function age() {
  // variables for getting the input field values
  var d1 = document.getElementById('date').value;
  var m1 = document.getElementById('month').value;
  var y1 = document.getElementById('year').value;
  // variables for getting the current time
  var date = new Date();
  var d2 = date.getDate();
  var m2 = 1 + date.getMonth();
  var y2 = date.getFullYear();
}