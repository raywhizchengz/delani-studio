 
//For toggling on WHAT WE DO
$(document).ready(function() {
    $(".onCrack1").click(function() {
        $("#click1").toggle();
        $("#magic1").toggle();
    });
    $(".onCrack2").click(function() {
        $("#magic2").toggle();
        $("#click2").toggle();
    });
    $(".onCrack3").click(function() {
        $("#magic3").toggle();
        $("#click3").toggle();
    });
});

// For hover effect on PORTFOLIO
$(document).ready(function() {
    $("div.image-frame").hover(function() {
        $(".classAdd1").addClass("mask flex-center rgba-red-strong");
    });
    $("div.image-frame").hover(function() {
        $(".classAdd2").addClass("mask flex-center rgba-blue-light");
    });
    $("div.image-frame").hover(function() {
        $(".classAdd3").addClass("mask flex-center rgba-green-slight");
    });
    $("div.image-frame").hover(function() {
        $(".classAdd4").addClass("mask flex-center");
    });
});

var btn = document.getElementById("myBtn");

// When the user clicks on the button, open the modal 
btn.onclick = function(event) {
    // Validate form for entry
    var x = document.forms["myForm"]["contact-name"].value;
    if (x == "") {
        alert("Name not entered");
        return false;
    }
    var y = document.forms["myForm"]["contact-email"].value;
    if (y == "") {
        alert("Email not entered");
        return false;
    }
    var z = document.forms["myForm"]["contact-message"].value;
    if (z == "") {
        alert("You have no message to send");
        return false;
    }
    var person1Input = $("input#contact-name").val();
    $("span#outputName").append(person1Input);

    $('.toast').toast('show');
    event.preventDefault();
}

      $("#mc-embedded-subscribe").on("click",function() {
          alert("ftydrjfygfutdrdytdytdyd");
      })
      
    });