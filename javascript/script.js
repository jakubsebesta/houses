(function($){

// Toggle menu

var mobileMenu = $('.mobile-menu'),
    hamburger = $('#hamburger-icon');


hamburger.on('click', function(event){
     event.preventDefault();

     if (mobileMenu.css("display") === "none")
     {
         mobileMenu.slideDown(500);
     }  

     else {
         mobileMenu.slideUp(500);
     }

});

var topicHider = $(".topic-hider"),
    btnToggler = $(".btn-topic");


// Topic toggler

btnToggler.on('click', function(event){
    event.preventDefault();

    if (topicHider.css("display") === "none")
    {
        topicHider.show(500);
        btnToggler.text("Hide");
    }  

    else {
        topicHider.hide(500);
        btnToggler.text("Show more")
    }

});

// scroll

var navigation = $('.navigation'),
    navigationLinks = navigation.find('a');

    navigationLinks.on('click', function(event){

        var hashId = this.hash;

        event.preventDefault();

        $('html,body').animate({scrollTop: $(this.hash).offset().top}, 800, function(){
            window.location.hash = hashId;
            console.log(hashId);
        })
    });

    // scroll to the TOP

    var backToTop = $('<a>', {
        href: '#home',
        class: 'back-to-top',
        text: '⬆'
    });

    backToTop
            .hide()
            .appendTo('body')
            .on('click', function(event){
                event.preventDefault();

                $('body, html').animate({scrollTop: 0});
            });


// hide scroll to the TOP if...
var win = $(window);
win.on('scroll', function(){
    if (win.scrollTop() >= 400 ) {
        backToTop.fadeIn();
    }

    else{
        backToTop.fadeOut();
    }
})

//password checker

$('#password').submit(function(event){
    event.preventDefault();
    
    if($('#heslo').val() !== $('#overenie').val()){
        $('.password-checker').text('Password does not match!');
        
    }  
    
});


//scroll check if element is in view port and animate him

var animationElements = $('.card, .box');

function checkViewPort() {

  var windowHeight = $(window).height(),
   windowTop = $(window).scrollTop(),
   windowBottom = (windowTop + windowHeight);
 
  $.each(animationElements, function() {
    var element = $(this),
     elementHeight = element.outerHeight(),
     elementTop = element.offset().top,
     elementBottom = (elementTop + elementHeight);
 
    //check to see if this current container is within viewport

    if ((elementBottom >= windowTop) && (elementTop <= windowBottom)) {

      element.addClass('fadeIn');

    } 
    else {
      element.removeClass('fadeIn');
    }

  });
}

$(window).on('scroll resize', checkViewPort);
$(window).trigger('scroll');

})(jQuery);