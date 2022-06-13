$('.owl-carousel').each(function() {
    //Find each set of dots in this carousel
  $(this).find('.owl-dot').each(function(index) {
    //Add one to index so it starts from 1
    $(this).attr('aria-label', index + 1);
  });
});
