let score = 0; //Creating int container for score
const totalQuestions = 4;
let point = 1;

$(document).ready(function() {
    //Hide all questions before user begins game
    $('.qContainer, .winMsg').hide();

    //Show questions!
    $('.startBtn').click(function(){
        $('.qContainer').hide();
        $('.btn, .btnCorrect, .hide').show();
        return false;
    });

    $('.btnCorrect').click(function(){
        score = score + 1;
    });

    if (point === totalQuestions) {
        $('.winMsg').show();
    };



    

});
