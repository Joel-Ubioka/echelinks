$('#product_dropdown_div').hover(function(){
    $('#dropdown_menu111').slideDown('slow');
    $('.Courses_buttons1').css('background-color', '#942382', 'color', 'white');
  });

  


  $('#product_dropdown_div11').mouseover(function(){
    $('#dropdown_menu111').slideUp('slow');
    $('.Courses_buttons1').css('background-color', 'orange');
  });

  $('#product_dropdown_div12').mouseover(function(){
    $('#dropdown_menu111').slideUp('slow');
    $('.Courses_buttons1').css('background-color', 'orange');
  });

  $('#product_dropdown_div13').mouseover(function(){
    $('#dropdown_menu111').slideUp('slow');
    $('.Courses_buttons1').css('background-color', 'orange');
  });


$('#hamburger_menu').click(function(){
    $('#dropdown_menu').slideToggle('slow');
  });
  
  
  $('.product1 h1').mouseover(function(){
    $(this).css('color','orange');
});

$('.product1 h1').mouseout(function(){
    $(this).css('color','#942b82');
});

// llllllllll
$('#slots44').mouseover(function(){
  $('#slots, #slots1, #slots2, #slots3').slideUp('slow');
});




$('#alll').mouseover(function(){
  $('#slots, #slots1, #slots2, #slots3').slideDown('slow');
  $('#slots11, #slots22, #slots33').slideUp('slow');
});


$('#alll3').mouseover(function(){
  $('#slots, #slots1, #slots2, #slots3').slideUp('slow');
  $('#slots111, #slots222, #slots333, #slots444').slideUp('slow');
  $('#slots11, #slots22, #slots33').slideDown('slow');
});

$('#alll5').mouseover(function(){
  $('#slots11, #slots22, #slots33').slideUp('slow');
  $('#slots111, #slots222, #slots333, #slots444').slideDown('slow');
  $('#slots, #slots1, #slots2, #slots3').slideUp('slow');
});


$('#lhs_function').mouseover(function(){
  $('#slots111, #slots222, #slots333, #slots444').slideUp('slow');
});

$('#product_hb').hover(function(){
  $('#product_hb_dd').slideDown('slow');
});


$('#off, #off1, #off2, #off3').hover(function(){
  $('#product_hb_dd').slideUp('slow');
});


// $('').mouseover(function(){
//   $('#product_hb_dd').slideUp('slow');
// });





// Ad_button Validation
//  $(document).ready(function(){
//    $('.Ad_div').slideDown(1000);
// });

// $('#Ad_button').click(function(){
//    $('.Ad_div').slideUp(1000);
// });


// Image Effects
$('.floating_picture').mouseover(function(){
    $(this).css('background-color','whitesmoke');
});

$('.floating_picture').mouseout(function(){
    $(this).css('background-color','whitesmoke');
});



// Animate function

$('.contents').hover(function(){
    $(this).animate({margin: '5px', height: '530px', width: '760px'});
 }, function(){
    $(this).animate({margin: '0px', height: '510px', width: '700px'});
 });

 $('.contents img').hover(function(){
    $(this).animate({margin: '5px', height: '400px', width: '760px'});
 }, function(){
    $(this).animate({margin: '0px', height: '400px', width: '700px'});
 });

// contact address
 $("#contact").mouseover(function(){
	$(".1").css({'background':'orange', 'color':'black', 'height': '70px', 'width': '850px', 'border': '2px solid #942b82', 'transition': '0.5s'});
});

$("#contact").mouseout(function(){
	$(".1").css({'background':'white', 'color':'black', 'height': '60px', 'width': '800px', 'border': ' orange'});
});

// Email 
$("#email").mouseover(function(){
	$(".2").css({'background':'orange', 'color':'black', 'height': '70px', 'width': '850px', 'border': '2px solid #942b82', 'transition': '0.5s'});
});

$("#email").mouseout(function(){
	$(".2").css({'background':'white', 'color':'black', 'height': '70px', 'width': '800px', 'border': ' orange'});
});

// Phone number
$("#phone").mouseover(function(){
	$(".3").css({'background':'orange', 'color':'black', 'height': '70px', 'width': '850px', 'border': '2px solid #942b82', 'transition': '0.5s'});
});

$("#phone").mouseout(function(){
	$(".3").css({'background':'white', 'color':'black', 'height': '60px', 'width': '800px', 'border': ' orange'});
});


$("#box_1").click(function(){
   $(".box_container").fadeOut().fadeIn();

});


$("#radio").click(function(){
  $("@keyframes slider").css(
    
 )
 });




// var slideIndex = 1;
// showSlides(slideIndex);
// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }
// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }
// function showSlides(n) {
//     var i;
//     var slides = document.getElementsByClassName("mySlides");
//     var dots = document.getElementsByClassName("dot");
//     if (n > slides.length) { slideIndex = 1 }
//     if (n < 1) { slideIndex = slides.length }
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex - 1].style.display = "block";
//     dots[slideIndex - 1].className += " active";
// }






// sectionOneObserver.observe(sectionne);

// const appearOptions = {
// threshold: 1,
// rootMargin: "Opx Opx -100px Opx"
// };

// const appearOnScroll = new IntersectionObserver
//  (function(
//     entries,
//     appearOnScroll
// ) {
//     entries.forEach(entry => {
//        if (!entry.isIntersecting) {
//         return;
//       } else {
//         entry.target.classList.add("appear");
//         appearOnScroll.unobserve (entry.target);
//       }
//     });
//  }, 
//     appearOptions);

//         faders.forEach(fader => {
//         appearOnScroll.observe(fader);
// });