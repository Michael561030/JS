$(document).ready(function(){
    var validator = {
        length: false,
        letter: false,
        capital: false,
        number: false,
        space: false,

    };
    var submitButton = $('#submit');
    var valid = false;

    $('input[type=username]').keyup(function () {
        let login = $(this).val();

        if (login.match(/\w+\s\w+/)){
            $('#full_name').removeClass('invalid').addClass('valid')
             }
        else {	
            $('#full_name').removeClass('valid').addClass('invalid')
            }
       
        if (login.match(/\w{2,}\s\w{2,}/)){
            $('#name_length').removeClass('invalid').addClass('valid')
             }
        else {	
            $('#name_length').removeClass('valid').addClass('invalid')
            }
        

 

    }).focus(function() {
        $('#login_info').css({opacity: 0, visibility: "visible"}).animate({opacity: 1}, 'slow').show();
    }).blur(function() {
        $('#login_info').hide();
    });


    $('input[type=password]').keyup(function() {
        let pswd = $(this).val();

        if (pswd.match(/\w+/)){
        $('#letter').removeClass('invalid').addClass('valid')
        	validator['letter']=true}
        else { 
            $('#letter').removeClass('valid').addClass('invalid') 
 		validator['letter']=false}
         
        if (pswd.match(/[A-Z]+/)){
            $('#capital').removeClass('invalid').addClass('valid')
        	validator['capital']=true }
        else {
            $('#capital').removeClass('valid').addClass('invalid') 
        	validator['capital']=false}
         
        if (pswd.match(/\d+/)){
            $('#number').removeClass('invalid').addClass('valid') 
        	validator['number']=true}
        else {
            $('#number').removeClass('valid').addClass('invalid')
 		validator['number']=false}

        if (pswd.length>=8){
            $('#length').removeClass('invalid').addClass('valid') 
        	validator['length']=true}
        else {
            $('#length').removeClass('valid').addClass('invalid') 
		validator['length']=false}

        if (pswd.match(/\W+/))
                {
            $('#space').removeClass('invalid').addClass('valid') 
        	validator['space']=true
		}
        else {
            $('#space').removeClass('valid').addClass('invalid') 
		validator['space']=false}

    }).focus(function() {
        $('#pswd_info').css({opacity: 0, visibility: "visible"}).animate({opacity: 1}, 'slow').show();
    }).blur(function() {
        $('#pswd_info').hide();
    });

    $('input[type=password], input[type=username]').keyup(function () {
        valid = Object.keys(validator).every(function(k){ return validator[k] });

        if (valid){
            submitButton.prop('disabled', false);
            $('#pswd_info').hide();
        } else {
            submitButton.prop('disabled', true);
        }
    });

    $('.loginForm').on('submit', function(e){
            e.preventDefault();
    });

    submitButton.click(()=> alert('Registration completed!'))
});