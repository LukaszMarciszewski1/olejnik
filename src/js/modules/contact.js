import $ from 'jquery';
import '../../scss/style.scss';

function contactUs() {
    "use strict";
    // var name = $('.validate-input input[name="name"]');
    // var email = $('.validate-input input[name="email"]');
    // var message = $('.validate-input textarea[name="message"]');
    /*==================================================================
    [ Focus Contact2 ]*/


    // /*==================================================================
    // [ Validate ]*/

    // $('.validate-form').on('submit',function(){

    //     var check = true;

    //     if($(name).val().trim() == ''){
    //         showValidate(name);
    //         check=false;
    //     }

    //     if($(email).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
    //         showValidate(email);
    //         check=false;
    //     }

    //     if($(message).val().trim() == ''){
    //         showValidate(message);
    //         check=false;
    //     }

    //     return check;
    // });


    // $('.validate-form .input2').each(function(){
    //     $(this).focus(function(){
    //        hideValidate(this);
    //    });
    // });

    // function showValidate(input) {
    //     var thisAlert = $(input).parent();

    //     $(thisAlert).addClass('alert-validate');
    // }

    // function hideValidate(input) {
    //     var thisAlert = $(input).parent();

    //     $(thisAlert).removeClass('alert-validate');
    // }

    
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
            url: "contact.php",
            data: {
                name: name,
                email: email,
                message: message
            },
            cache: false,
            success: function (data) {
                document.querySelector('.mail-status').style.display='block';
                document.querySelector('.validate-input').style.display='none'
                return false;
            },
            error: function(){}
        })
        return check;

    });

}

export const contact = () => {
    contactUs();
}