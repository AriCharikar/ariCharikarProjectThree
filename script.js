let score = 0; //Creating int container for score
const totalQuestions = 4;
let point = 1;

function init() {
    sessionStorage.setItem('a1', 'b');
    sessionStorage.setItem('a2', 'c');
    sessionStorage.setItem('a3', 'a');
    sessionStorage.setItem('a4', 'd');
}

$(document).ready(function() {
    //Hide all questions before user begins game
    $('.qContainer').hide();

    //Show first question
    $('#q1').show();

    //Hide first and show second question
    $('#q1 #subButtonOne').click(function(){
        $('.qContainer').hide();
        $('#q2').show();
        return false;
    });

    $('#q2 #subButtonTwo').click(function(){
        $('.qContainer').hide();
        $('#q3').show();
        return false;
    });

    $('#q3 #subButtonThree').click(function(){
        $('.qContainer').hide();
        $('#q4').show();
        return false;
    });

    $('#q4 #subButtonFour').click(function(){
        $('.qContainer').hide();
        $('.results').show();
        return false;
    });

});

// Add event listener
window.addEventListener('load', init, false);