window.onload = () => {
    const navbar = document.querySelector('.navbar');
    let section = document.querySelectorAll('.linked');
    let navLinks = document.querySelectorAll('.navbar ul li a');
    window.onscroll = function() {

        if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
            navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
        }

        // 2
        section.forEach(sec => {

            let top = window.scrollY;
            let height = sec.offsetHeight;
            let offset = sec.offsetTop - 150;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach(links => {
                    links.classList.remove('active');
                    document.querySelector('.navbar ul li a[href*=' + id + ']').classList.add('active');
                });
            };

        });
    };

    //   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    //     alert("halo")
    //   }
    // }



    const swiper = new Swiper(".home-slider", {
        spaceBetween: 0,
        centeredSlides: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        loop: true,
    });
}