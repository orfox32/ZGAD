var loader = document.querySelector('.preloader')

window.addEventListener('load', vanish);

function vanish () {
    loader.classList.add('disappear')
}

$('body, html').css({
    overflowY: 'hidden'
  });
  setTimeout(function(){
    $('.preloader').fadeOut('slow', function(){
      $('body, html').css({
        overflowY: 'auto'
      });
    });
  }, 2000);

