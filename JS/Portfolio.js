// Slideshow Functions
var slideIndex=1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

//Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}
// End SlideShow functions

// Contact Form functions
$(document).ready(function(){   
    $("a").on('click', function(event) {
        
        // Make sure this.Link has a value before overriding default behavior
        if (this.Link !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();
  
            // Store Link
            var Link = this.Link;
  
            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (2000) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(Link).offset().top
            }, 2000, function(){
     
            // Add Link (#) to URL when done scrolling (default click behavior)
            window.location.Link = Link;
        });
       } // End if
    });
});
  
// These functions open and close the contact form 
function openForm() {
    document.getElementById("myForm").style.display = "block";
}
  
function closeForm() {
    document.getElementById("myForm").style.display = "none";
    this.Close();
}  