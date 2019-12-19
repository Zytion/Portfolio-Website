// when form is submit
$('#mail_form').submit(function() {
 // we stoped it
 event.preventDefault();
 // needs for recaptacha ready
 grecaptcha.ready(function() {
     // do request for recaptcha token
     // response is promise with passed token
     grecaptcha.execute('6LcFfMgUAAAAAHhWKEfuMTH07gR3UxX6hSr3NyJA', {action: 'submit'}).then(function(token) {
        console.log('Sucess');
      });
});
});