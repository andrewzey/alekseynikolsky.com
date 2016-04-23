function submitForm(form) {
  var url = $('.contact-form form').attr('action');
  var params = $(form).serialize();
  console.log(url);
  console.log(params);

  $.ajax({
    url: url,
    method: "POST",
    data: params,
    dataType: "json",
    success: function(result) {
      alert('Yahoo!');
    }
  });
}

$(document).ready(function(){
  $('.contact-form form').validate({
    rules: {
      name: { required: true },
      _replyto: { required: true },
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

// {
//       var url = $('.contact-form form').attr('action');
//       var params = $(form).serialize();

//       $.ajax ({
//         type: "POST",
//         url: theUrl,
//         data: params,
//         processData: false,
//         async: false,
//         success: function(result) {
//             //if (data != "") alert (data);
//         }
//       });
//     }

