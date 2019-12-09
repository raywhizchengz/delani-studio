$(document).ready(function(){
    $("#imagedesign").on("click",function(){
        $("#des-m").show();
        $("#imagedesign").hide();
    });
    $("#des-m").on("click", function(){
        $("imagedesign").show();
            $("des-m").hide();
    });
    
});