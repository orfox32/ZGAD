/* for anchor team */
$('#team_id').click(function (e) {

    e.preventDefault();

    $('html, body').animate({
        scrollTop: $("#teams").offset().top
    }, 0);
});

$('#home_id').click(function (e) {

    e.preventDefault();

    $('html, body').animate({
        scrollTop: $("#home").offset().top
    }, 0);
});

$('#about_id').click(function (e) {

    e.preventDefault();

    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 0);
});

/* for footer team */
$('#footer_team_id').click(function (e) {

    e.preventDefault();

    $('html, body').animate({
        scrollTop: $("#teams").offset().top
    }, 0);
});

$('#footer_about_id').click(function (e) {

    e.preventDefault();

    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 0);
});

$('#footer_home_id').click(function (e) {

    e.preventDefault();

    $('html, body').animate({
        scrollTop: $("#home").offset().top
    }, 0);
});




