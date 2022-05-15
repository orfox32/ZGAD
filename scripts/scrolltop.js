const scrollBtn = document.querySelector(".scrollTop");

        const btnVisibility = () => {
            if (window.scrollY > 400) {
                scrollBtn.style.visibility = "visible";
            } else {
                scrollBtn.style.visibility = "hidden";
            }
        };

        document.addEventListener("scroll", () => {
            btnVisibility();
        });
        function scrolltoTop() {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            })
        }