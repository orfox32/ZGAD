$(document).ready(function(){
$('.owl-carousel').each(function() {
   
  $(this).find('.owl-dot').each(function(index) {
    
    $(this).attr('aria-label', index + 1);
  });
});
})
