var submitBtn = $(".submit");
var message = $(".message");

submitBtn.on("click", appendForm);

function appendForm(){
  event.preventDefault();
  var name = $(".name-input").val();
  console.log(name);
  message.text(`Thanks for your feedback, ${name}!`);
};





