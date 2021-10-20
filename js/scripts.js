$(document).ready(function(){
  $(".jumbotron").hover(function(){
    $(".rounded-pill").show();
    $(".definition").hide();
  })

  $("#js").click(function(){
    $("#js-name").toggle();
    $("#js-defined").toggle();
  });

  $("#operators").click(function(){
    $("#operators-name").toggle();
    $("#operators-defined").toggle();
  });

  $("#variables").click(function(){
    $("#variables-name").toggle();
    $("#variables-defined").toggle();
  });

  $("#varNaming").click(function(){
    $("#varNaming-name").toggle();
    $("#varNaming-defined").toggle();
  });
 
})