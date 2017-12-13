
//ProgressBar

$('.range-slider__range').on('input',function(){
    var sum = 0;
    var tip = 0;
    for(var i=1;i<17;i++){
        tip = $("#tip"+i+" input").val();
        sum += parseInt(tip);
    }
    sum *= 1.562;
    if(sum < 25){
        
            $('#progressBar').removeClass("bg-warning");
            $('#progressBar').addClass("bg-danger");
    }
    else if(sum > 25 && sum < 50 ){
        $('#progressBar').removeClass("bg-danger");
        $('#progressBar').removeClass("bg-info");
            $('#progressBar').addClass("bg-warning");
    }else if(sum > 50 && sum < 75 ){
        $('#progressBar').removeClass("bg-success");
        $('#progressBar').removeClass("bg-warning");
            $('#progressBar').addClass("bg-info");
    } else {
        $('#progressBar').removeClass("bg-info");
            $('#progressBar').addClass("bg-success");
    }

    $('.achievementTitle').html("You are "+Math.round(sum)+"% energy efficient!");


    $('#progressBar').css({'width':sum+"%"});

});



//Save preferences button
$("#savePref").click(function(){
     $("#pref").submit(function(e){
        e.preventDefault();
    });
    //var tip = $("#tip1 input").val();
    var tips = [];

    for(var i=1;i<17;i++){
        tip = $("#tip"+i+" input").val();
        tips.push({
            key: "tip"+i,
            value: tip
        });
    }
    $.ajax({
            type: 'POST',
            data: JSON.stringify(tips),
            contentType: 'application/json',
            url: 'http://localhost:3000/tips',                      
            success: function(tips) {
                console.log('success');
            }
        });
});




//Chart js
var generalData = {
    datasets: [{
        data: [53, 20, 16, 6, 5],
         backgroundColor: [
                'rgba(255, 99, 132, 1.0)',
                'rgba(54, 162, 235, 0.9)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.4)'
            ]
    	
    }],
	labels: [
        'Space heating',
        'Water heating',
        'Appliances',
        'Lighting',
        'Cooking'
    ]
};
var ctx = document.getElementById('generalChart').getContext('2d');
var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: generalData,
    options: {
        legend:{
            position: 'right'
        }
        }
});



// JS for FAQ
if( jQuery(".toggle .toggle-title").hasClass('active') ){
        jQuery(".toggle .toggle-title.active").closest('.toggle').find('.toggle-inner').show();
    }
    jQuery(".toggle .toggle-title").click(function(){
        if( jQuery(this).hasClass('active') ){
            jQuery(this).removeClass("active").closest('.toggle').find('.toggle-inner').slideUp(200);
        }
        else{   jQuery(this).addClass("active").closest('.toggle').find('.toggle-inner').slideDown(200);
        }
    });


