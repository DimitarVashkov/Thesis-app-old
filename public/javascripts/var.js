$(".info button").click(function(){
  var name = $(this).text();
  $(".col>h2.activeInfo").removeClass("activeInfo");
  $(this).addClass("activeInfo");
  console.log(name);
  $(".explain>div").addClass("hiddenStuff");
  $('html,body').animate({
        scrollTop: $("#focusDiv").offset().top},
        'slow');
  $("#focusDiv").removeClass("heightLimited");

  switch(name){
    case "Start":
      $(".containerPyramid").removeClass("hiddenStuff");
      break;
    case "Heating":
      $(".containerHeating").removeClass("hiddenStuff");
    break;
    case "Water":
    $(".containerWater").removeClass("hiddenStuff");
    break;
      case "Laundry":
    $(".containerLaundry").removeClass("hiddenStuff");
    break;
      case "Cooking":
    $(".containerCooking").removeClass("hiddenStuff");
    break;
  }
});
