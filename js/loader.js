$(document).ready(function () {
  var hideScrollBar = setTimeout(function () {
    $("body").css({
      overflow: "auto",
      paddingTop: "3rem" 
    });

    $("#hidden").toggleClass("hidden");
  }, 2700);
  $("body").css({
    overflow: "hidden",
    margin: 0,
    padding: 0,
  });
  $("#loaderContainer")
    .css("overflow", "hidden")
    .delay(1500)
    .fadeOut(1500, function () {
      $("#loaderContainer").remove();
    });
});
