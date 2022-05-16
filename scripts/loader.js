var loader = document.querySelector('.preloader')

window.addEventListener('load', vanish);

function vanish () {
    loader.classList.add('disappear')
}

$('body, html').css({
    overflow: 'hidden'
  });
  setTimeout(function(){
    $('.preloader').fadeOut('slow', function(){
      $('body, html').css({
        overflow: 'auto'
      });
    });
  }, 10000);

