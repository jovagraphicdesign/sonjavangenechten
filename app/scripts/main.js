

var linkSection1 = document.getElementById('mobile-hide-section1');
linkSection1.addEventListener('click', function(event){
    event.preventDefault();
    let el = document.getElementsByClassName('hidden-text-section1');
    for(let i=0; i< el.length; i++){
        el[i].classList.remove("hide-on-med-and-down");
        this.classList.add('hide');
        this.classList.remove('hide-on-large-only');
    }
});

var linkSection2 = document.getElementById('mobile-hide-section2');
linkSection2.addEventListener('click', function(event){
    event.preventDefault();
    let el = document.getElementsByClassName('hidden-text-section2');
    for(let i=0; i< el.length; i++){
        el[i].classList.remove("hide-on-med-and-down");
        this.classList.add('hide');
        this.classList.remove('hide-on-large-only');
    }
});

var linkOpleidingen = document.getElementById('mobile-hide-opleiding');
linkOpleidingen.addEventListener('click', function(event){
    event.preventDefault();
    let el = document.getElementsByClassName('hidden-text-section2');
    for(let i=0; i< el.length; i++){
        el[i].classList.remove("hide-on-med-and-down");
        
        this.classList.remove('hide-on-large-only');
    }
});

$(document).ready(function(){
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash,
        $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top-5
        }, 1500, 'swing', function () {
            window.location.hash = target;
        });
    });
});