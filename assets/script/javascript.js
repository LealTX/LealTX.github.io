$(document).ready(function(){
    $('.modal').modal();
  });

$("#submitButton").on("click", function(){
    submitName = $("#nameEntry").val().trim();
    submitEmail = $("#emailEntry").val().trim();
    submitMessage = $("#messageEntry").val().trim();

    console.log(`Name: ${submitName}`)
    console.log(`Email: ${submitEmail}`)
    console.log(`Message: ${submitMessage}`)

    $("#nameEntry").val("");
    $("#emailEntry").val("");
    $("#messageEntry").val("");
})