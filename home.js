$(document).ready(function() {
  $(".search_engine").hide();
  $("#searchButton").on("click", function() {
  	$(".search_engine").fadeToggle(500);
  });
});
