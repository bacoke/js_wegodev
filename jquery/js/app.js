function animasiIntro(){
    $("#text span").velocity("slideInLeft",{
                            complete: function(){
                                animasiButtonStart();
                            }
                        });
};

function animasiButtonStart() {
    $("#start").velocity("bounceInDown");
}

$(document).ready(function(){
    animasiIntro();
});