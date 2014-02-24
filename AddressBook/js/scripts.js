var fiBonacci = function(number) {
  if (number === 1) {
    return 0;
  } else if (number === 2) {
    return 1;
  } else {
    return fiBonacci(number - 1) + fiBonacci(number - 2);
  } 
};

fiBonacci(0);

$(document).ready(function() {
  $("form#fibonacci").submit(function(event) {
    var number = parseInt($("input#number").val());
    var result = fiBonacci(number);

    $(".number").text(number);
    $("span.fibonacci").text(result);

    $("#result").show();
    event.preventDefault();
  });
});
