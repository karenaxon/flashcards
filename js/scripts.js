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
 
  $("#function").click(function(){
    $("#function-name").toggle();
    $("#function-defined").toggle();
  });

  $("#methods").click(function(){
    $("#methods-name").toggle();
    $("#methods-defined").toggle();
  });

  $("#parameters").click(function(){
    $("#parameters-name").toggle();
    $("#parameters-defined").toggle();
  });

  $("#arguments").click(function(){
    $("#arguments-name").toggle();
    $("#arguments-defined").toggle();
  });

  $("#return").click(function(){
    $("#return-name").toggle();
    $("#return-defined").toggle();
  });

  $("#chaining").click(function(){
    $("#chaining-name").toggle();
    $("#chaining-defined").toggle();
  });

  $("#strings").click(function(){
    $("#strings-name").toggle();
    $("#strings-defined").toggle();
  });

  $("#booleans").click(function(){
    $("#booleans-name").toggle();
    $("#booleans-defined").toggle();
  });

  $("#undefined").click(function(){
    $("#undefined-name").toggle();
    $("#undefined-defined").toggle();
  });

  $("#nan").click(function(){
    $("#nan-name").toggle();
    $("#nan-defined").toggle();
  });

  $("#alert").click(function(){
    $("#alert-name").toggle();
    $("#alert-defined").toggle();
  });

  $("#concat").click(function(){
    $("#concat-name").toggle();
    $("#concat-defined").toggle();
  });

})