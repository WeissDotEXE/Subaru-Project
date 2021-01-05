$(document).ready(function(){
    $("#buy-button").click(function(){
      $(".list-item").hide("slow");
    });
    $("#more-button").click(function(){
        $(".list-item").show("slow");
    });
  });