$('.card-wrap').owlCarousel({
    margin: 10,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHover: true,
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        600: {
            items: 2,
            nav: false
        },
        1000: {
            items: 3,
            nav: false
        }
    }
})