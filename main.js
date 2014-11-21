$(function() {
    $("#contactform").submit(function(e) {
        e.preventDefault();
        var email = $('input[name=email]').val();
        var message = $('#message').val();
        message = 'From: '+email+'\n'+'Message: '+message;
        $.ajax({
            type: "POST",
            url: "https://mandrillapp.com/api/1.0/messages/send.json",
            data: {
                'key': 'fhIMK7LN9PN6MyXf14LiMQ',
                'message': {
                    'from_email': 'the_website@ajmichael.net',
                    'to': [
                        {
                            'email': 'e_michael@sbcglobal.net',
                            'type': 'to'
                        }
                    ],
                    'autotext': 'true',
                    'subject': '[EMSI WEBSITE] Someone has left a message',
                    'html': message
                }
            }
        });
    });
});