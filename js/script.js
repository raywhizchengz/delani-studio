$(document).ready(function() {
    $(".design").hide();
    $(".design").click(function() {
        $(".design").toggle();
        $(".design img").toggle();
    });
    $(".develop").hide();
    $(".develop").click(function() {
        $(".develop").toggle();
        $(".develop img").toggle();
    });
    $(".product management").hide();
    $(".product management").click(function() {
        $(".product management").toggle();
        $(".product management img").toggle();
    });
});