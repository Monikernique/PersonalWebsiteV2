
/*random backgrounds*/

var images = [
"images/bg01.jpg",
"images/bg02.jpg", 
"images/bg03.jpg", 
"images/bg04.jpg", 
"images/bg05.jpg", 
"images/bg06.jpg", 
"images/bg07.jpg", 
"images/bg08.jpg", 
"images/bg09.jpg", 
"images/bg10.jpg",
"images/bg11.jpg",
"images/bg12.jpg",
"images/bg13.jpg",
"images/bg14.jpg",
];

function random() {
  document.getElementsByClassName("bgimage-container")[0].style.backgroundImage = "url(" + images[Math.floor(Math.random() * images.length)] + ")";
}
random();



/*form*/
function openForm() {
  document.getElementById("myForm").style.display = "block";
  
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";


}

$(document).click(function(e) {
  if (!$(e.target).is("myform")) {
      if ($('myform').is(':visible')) {
          popups_close();
      }
  }
});

/*alt code maybe

$('#popup').show();
$(document).click(function (e) {
    if (!$(e.target).is("#popup")) {
        if ($('#popup').is(':visible')) {
            $('#popup').hide();
        }
    }
});
*/



/* intro*/
$(window).scroll(function(){
  //scroll pos
  var s = $(window).scrollTop();
  //when to change
  var range = 200 
  $('.intro').css("opacity", 1- s / range); 
});