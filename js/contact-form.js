function submitForm(form) {
  var $form = $('.contact-form form');
  var url = $form.attr('action');
  var params = $(form).serialize();

  $.ajax({
    url: url,
    method: "POST",
    data: params,
    dataType: "json",
    success: function(result) {
      $form.find("input[type=text], input[type=email], textarea").val('');
      alert('Your message was sent. Thank you!');
    },
    error: function(error) {
      console.error(error);// TODO: handle error
    }
  });
}

$(document).ready(function(){
  $('.contact-form form').validate({
    rules: {
      name: { required: true },
      email: { required: true },
      _subject: { required: true },
      message: { required: true }
    },
    messages: {
        // name: { required: "* required" },
        // _replyto: { required: "* required" },
        // _subject: { required: "* required" },
        // message: { required: "* required" }
    },
    submitHandler: submitForm
  });
});

