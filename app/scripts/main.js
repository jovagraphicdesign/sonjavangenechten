
var linkSection1 = document.getElementById('mobile-hide-section1');
linkSection1.addEventListener('click', function(event){
    event.preventDefault();
    let el = document.getElementsByClassName('hidden-text-section1');
    for(let i=0; i< el.length; i++){
        el[i].classList.remove('hide-on-med-and-down');
        this.classList.add('hide');
        this.classList.remove('hide-on-large-only');
    }
});

var linkSection2 = document.getElementById('mobile-hide-section2');
linkSection2.addEventListener('click', function(event){
    event.preventDefault();
    let el = document.getElementsByClassName('hidden-text-section2');
    for(let i=0; i< el.length; i++){
        el[i].classList.remove('hide-on-med-and-down');
        this.classList.add('hide');
        this.classList.remove('hide-on-large-only');
    }
});

var linkOpleidingen = document.getElementById('mobile-hide-opleiding');
linkOpleidingen.addEventListener('click', function(event){
    event.preventDefault();
    let el = document.getElementsByClassName('hidden-opleiding-section2');
    for(let i=0; i< el.length; i++){
        el[i].classList.remove('hide-on-med-and-down');
        
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
    
    // ScrollMagic Code 
    // Init ScrollMagic
    var controller = new ScrollMagic.Controller();
    // build a scene
    var showcaseTitleScene = new ScrollMagic.Scene({
        triggerElement: '#showcaseTitle',
        triggerHook: 1,
        reverse: false
        
    })
    .setClassToggle('#showcaseTitle', 'fade-in') // add class to showcaseTitle
    .addIndicators({
        name: 'fade showcasetitle',
        indent: 200,
        colorTrigger: 'black',
        colorStart: 'orange'
    })
    .addTo(controller);

    var showcaseSubtitleScene = new ScrollMagic.Scene({
        triggerElement: '#showcaseTitle',
        triggerHook: 1,
        reverse: false

    })
    .setClassToggle('.subtitel', 'fade-up')
    .addIndicators({
        name: 'fade showcasesubtitle',
        colorTrigger: 'black',
        colorStart: 'pink'
    })
    .addTo(controller);
    
    var werkwijzeScene = new ScrollMagic.Scene({
        triggerElement: '#werkwijze',
        triggerHook: 0.9,
        reverse: false
        
    })
    .setClassToggle('#werkwijze', 'fade-up-big')
    .addIndicators({
        name: 'fade up werkwijze',
        indent: 200,
        colorTrigger: 'black',
        colorStart: 'orange'
    })
    .addTo(controller);

    var overMezelfTitelScene = new ScrollMagic.Scene({
        triggerElement: '#overMezelf',
        reverse: false
    })
    .setClassToggle('#overMezelf', 'fade-down')
    .addIndicators({
        name: 'fade down overMezelf',
        indent: 100,
        colorTrigger: 'black',
        colorStart: 'orange'
    })
    .addTo(controller);

    var overMezelfLeftScene = new ScrollMagic.Scene({
        triggerElement: '#overMezelf',
        reverse: false
    })
    .setClassToggle('#left', 'fade-side-in')
    .addIndicators({
        name: 'fade sideways in',
        indent: 300,
        colorTrigger: 'black',
        colorStart: 'green'
    })
    .addTo(controller);

    var overMezelfRightScene = new ScrollMagic.Scene({
        triggerElement: '#overMezelf',
        reverse: false
    })
    .setClassToggle('#right', 'fade-side-in')
    .addIndicators({
        name: 'fade sideways in',
        indent: 300,
        colorTrigger: 'black',
        colorStart: 'green'
    })
    .addTo(controller);

    var overMezelfFotoScene = new ScrollMagic.Scene({
        triggerElement: '#foto-sonja',
        triggerHook: 0.8,
        reverse: false
    })
    .setClassToggle('#foto-sonja', 'rotate-foto')
    .addIndicators({
        name: 'rotate foto',
        indent: 300,
        colorTrigger: 'red',
        colorStart: 'green'
    })
    .addTo(controller);

    var overMezelfMobileFotoScene = new ScrollMagic.Scene({
        triggerElement: '#foto-sonja-mobile'
        //triggerHook: 0.8
        //reverse: false
    })
    .setClassToggle('#foto-sonja-mobile', 'foto-slide-in')
    .addIndicators({
        name: 'slide in foto',
        indent: 50,
        colorTrigger: 'red',
        colorStart: 'green'
    })
    .addTo(controller);

    var tarievenScene = new ScrollMagic.Scene({
        triggerElement: '#tarieven',
        triggerHook: 0.6,
        reverse: false
        
    })
    .setClassToggle('.tarief', 'fade-in-down')
    .addIndicators({
        name: 'tarieven scene',
        indent: 100,
        colorTrigger: 'red',
        colorStart: 'black'
    })
    .addTo(controller);
});

