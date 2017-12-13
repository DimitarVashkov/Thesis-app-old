$(".info .myBtn").click(function(){
  var name = $(this).text();
  $(".col>h2.activeInfo").removeClass("activeInfo");
  $(this).addClass("activeInfo");
  $(".explain>div").addClass("hiddenStuff");
  $('html,body').animate({
        scrollTop: $("#focusDiv").offset().top},
        'slow');
  $("#focusDiv").removeClass("heightLimited");
  $("#pref").removeClass("hiddenStuff");

  switch(name){
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
