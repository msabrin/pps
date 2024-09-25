$(function(){
    // Event listener for mouseover on .tricky elements
    $(".tricky").on({
        mouseover:function(){
            $(this).css({
                left:(Math.random()*90)+"%",
                top:(Math.random()*90)+"%"
            });
        }
    });

    // Event listener for hover on .btn-wrap elements
    $(".btn-wrap").hover(function() {
        $(this).toggleClass('active');
    });

    // Event listener for touchstart on .tricky elements
    $('.tricky').bind('touchstart', function(){
        $(this).css({
            left:(Math.random()*90)+"%",
            top:(Math.random()*90)+"%"
        });
    });

    // Event listener for click on #yesButton
    $("#yes").on("click", function() {
        alert("Yeahh! Congregation, you win a kissi akif 😘");
    });
});
