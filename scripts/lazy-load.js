/* image lazy loading */

const load = document.querySelectorAll('img')

const lazyLoad = loads => {
    const intobs = new IntersectionObserver((entries, observer) => {
        
        entries.forEach(entry => {
            
            if(entry.isIntersecting){
                const img = entry.target;
                const src = img.getAttribute('data-lazy')

                img.setAttribute('src', src)
                img.classList.add('fade')

                observer.disconnect()
            }
        })
    })

    intobs.observe(loads)
}

load.forEach(lazyLoad)
