let score = 0; //Creating int container for score
const totalQuestions = 4;
let point = 1;

$(document).ready(function() {
    //Hide all questions before user begins game
    $('.qContainer, .winMsg').hide();

    //Show questions!
    $('.startBtn').click(function(){
        $('.qContainer, .startBtn').hide();
        $('.btn, .btnCorrect, .hide').show();
        return false;
    });

    $('.btnCorrect').click(function(){
        $(this).css('background-color', 'yellow');
        score = score + 1;
        if (score === totalQuestions) {
            $('.winMsg').show();
        }
    });


    

});
