// $(document).ready(function() {
//     $(".design").hide();
//     $(".design").click(function() {
//         $(".design").toggle();
//         $(".design img").toggle();
//     });
//     $(".develop").hide();
//     $(".develop").click(function() {
//         $(".develop").toggle();
//         $(".develop img").toggle();
//     });
//     $(".product management").hide();
//     $(".product management").click(function() {
//         $(".product management").toggle();
//         $(".product management img").toggle();
//     });
// });
$(document).ready(function(){
    $("#design").click(function(){
      $("#design").hide();
    //   $("#dev-m").toggle(1200);
      $(".toggledesign").show();
    });
    $(".toggledesign").click(function(){
      $(".toggledesign").hide();
    //   $("#imagedesign").toggle(1200);
      $("#design").show();
    });
  });
  $(document).ready(function(){
      $(".image2").click(function(){
        $(".image2").hide(1200);
        $(".p2").toggle(1200);
        $(".p2").show(1200);
      })
      $(".p2").click(function(){
        $(".p2").hide(1200);
        $(".image2").toggle(1200);
        $(".image2").show(1200);
      });
  });
  $(document).ready(function(){
      $(".image3").click(function(){
        $(".image3").hide(1200);
        $(".p3").toggle(1200);
        $(".p3").show(1200);
      })
      $(".p3").click(function(){
        $(".p3").hide(1200);
        $(".image3").toggle(1200);
        $(".image3").show(1200);
      });
    });