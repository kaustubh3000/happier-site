

$(document).ready(function () {
    //change navbar icon on click
    $('#navbar-button').click(function () {
        if ($('#navbar-button').children('span').hasClass('navbar-toggler-icon')) {
            $('#navbar-button').children('span').removeClass('navbar-toggler-icon');
            $('#navbar-button').children('span').addClass('fa fa-times fa-lg');
        }
        else if ($('#navbar-button').children('span').hasClass('fa fa-times fa-lg')) {
            $('#navbar-button').children('span').removeClass('fa fa-times fa-lg');
            $('#navbar-button').children('span').addClass('navbar-toggler-icon');
        }
    });


    // Collapse the navbar by clicking on the screen except Navbar
    // $('body').not(document.getElementById(".navbar")).click(function() {
    //     $(".navbar-collapse").collapse('hide');
    //     $('#navbar-button').children('span').removeClass('fa fa-times fa-lg');
    //     $('#navbar-button').children('span').addClass('navbar-toggler-icon');
    // });


    // Collapse the Navbar on scrolling



});


//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


