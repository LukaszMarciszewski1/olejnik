import $ from 'jquery';

function contactUs() {
    "use strict";
    
    $('.input2').each(function () {
        $(this).on('blur', function () {
            if ($(this).val().trim() != "") {
                $(this).addClass('has-val');
            } else {
                $(this).removeClass('has-val');
            }
        })
    })

    $('.validate-form').on('submit',function(e){
        e.preventDefault();
        const name = $("#name").val();
        const email = $("#email").val();
        const message = $("#message").val();
        var check = true;

        if (name.trim() == false) {
            showValidate(name);
            check=false;
        }
        if (email.trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
            showValidate(email);
            check=false;
        }
        if (message.trim() == '') {
            showValidate(message);
            check=false;
        }
        
        $.ajax({
            type: "POST",
            async: true,
            url: "contact.php",
            data: {
                name: name,
                email: email,
                message: message
            },
            datatype: 'json',
            global: false,
            cache: false,
            beforeSend: function() { 
                $('#loader').show();
            },
            success: function(data) {
                if(data){
                    document.querySelector('.mail-status').style.display='block';
                    document.querySelector('.validate-input').style.display='none';
                } else {
                    $('.no-config').show()
                    console.log(data);
                }

            },
            complete: function() { 
                $('#loader').hide();
            }
        })
        return check;
    });
}

export const contact = () => {
    contactUs();
}