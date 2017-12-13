
var rangeSlider = function(){
  var slider = $('.range-slider'),
      range = $('.range-slider__range'),
      value = $('.range-slider__value');

  slider.each(function(){

    value.each(function(){
      var value = $(this).prev().attr('value');
      if(value == '0'){
        $(this).html('Never');
        $(this).next(value).css({'background':'#85144b'});
      }
      
    });

    range.on('input', function(){
          switch(this.value){
            case '0': $(this).next(value).html('Never');
                      $(this).next(value).css({'background':'#85144b'});break;
            case '1': $(this).next(value).html('Rarely');
                      $(this).next(value).css({'background':'#ff851b'});break;
            case '2': $(this).next(value).html('Sometimes');
                      $(this).next(value).css({'background':'#F1C60C'});break;
            case '3': $(this).next(value).html('Often');
                      $(this).next(value).css({'background':'#0074d9'});break;
            case '4': $(this).next(value).html('Always');
                      $(this).next(value).css({'background':'#2ecc40'});break;
          }
    });
  });

};

rangeSlider();