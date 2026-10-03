/* =========================================================
   AIKO.DEV — PERSONAL PORTFOLIO
   SCRIPT.JS
========================================================= */


/* =========================================================
   1. GET HTML ELEMENTS
========================================================= */

const loader =
    document.getElementById("loader");

const menuBtn =
    document.getElementById("menuBtn");

const mobileNav =
    document.getElementById("mobileNav");

const themeBtn =
    document.getElementById("themeBtn");

const typingText =
    document.getElementById("typingText");

const header =
    document.getElementById("header");

const backTop =
    document.getElementById("backTop");

const contactForm =
    document.getElementById("contactForm");

const toast =
    document.getElementById("toast");

const year =
    document.getElementById("year");


const mobileLinks =
    document.querySelectorAll(".mobile-link");

const navLinks =
    document.querySelectorAll(".nav-link");

const sections =
    document.querySelectorAll("section");

const revealElements =
    document.querySelectorAll(".reveal");

const statNumbers =
    document.querySelectorAll("[data-count]");

const filterButtons =
    document.querySelectorAll(".filter-btn");

const projectCards =
    document.querySelectorAll(".project-card");

const progressBars =
    document.querySelectorAll(".progress span");


/* =========================================================
   2. LOADING SCREEN
========================================================= */

window.addEventListener("load", function () {

    setTimeout(function () {

        if (loader) {

            loader.classList.add("hide");

        }

    }, 2000);

});


/* =========================================================
   3. MOBILE MENU
========================================================= */

if (menuBtn && mobileNav) {

    menuBtn.addEventListener(
        "click",
        function () {

            const isOpen =
                mobileNav.classList.toggle("open");

            menuBtn.classList.toggle(
                "open",
                isOpen
            );

            menuBtn.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

        }
    );

}


/* =========================================================
   4. CLOSE MOBILE MENU
========================================================= */

mobileLinks.forEach(function (link) {

    link.addEventListener(
        "click",
        function () {

            if (mobileNav) {

                mobileNav.classList.remove("open");

            }

            if (menuBtn) {

                menuBtn.classList.remove("open");

                menuBtn.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        }
    );

});


/* =========================================================
   5. CLOSE MENU WHEN CLICKING OUTSIDE
========================================================= */

document.addEventListener(
    "click",
    function (event) {

        if (!mobileNav || !menuBtn) {

            return;

        }


        const clickedInsideMenu =
            mobileNav.contains(event.target);

        const clickedMenuButton =
            menuBtn.contains(event.target);


        if (
            !clickedInsideMenu &&
            !clickedMenuButton
        ) {

            mobileNav.classList.remove("open");

            menuBtn.classList.remove("open");

            menuBtn.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    }
);


/* =========================================================
   6. ESCAPE TO CLOSE MENU
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key !== "Escape") {

            return;

        }


        if (mobileNav) {

            mobileNav.classList.remove("open");

        }


        if (menuBtn) {

            menuBtn.classList.remove("open");

            menuBtn.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    }
);


/* =========================================================
   7. THEME SYSTEM
========================================================= */

function updateThemeButton() {

    if (!themeBtn) {

        return;

    }


    if (
        document.body.classList.contains(
            "light-mode"
        )
    ) {

        themeBtn.textContent = "🌙";

        themeBtn.setAttribute(
            "aria-label",
            "Aktifkan mode gelap"
        );

    } else {

        themeBtn.textContent = "☀️";

        themeBtn.setAttribute(
            "aria-label",
            "Aktifkan mode terang"
        );

    }

}


/* =========================================================
   8. LOAD SAVED THEME
========================================================= */

const savedTheme =
    localStorage.getItem("aiko-theme");


if (savedTheme === "light") {

    document.body.classList.add(
        "light-mode"
    );

}


updateThemeButton();


/* =========================================================
   9. CHANGE THEME
========================================================= */

if (themeBtn) {

    themeBtn.addEventListener(
        "click",
        function () {

            document.body.classList.toggle(
                "light-mode"
            );


            const isLight =
                document.body.classList.contains(
                    "light-mode"
                );


            if (isLight) {

                localStorage.setItem(
                    "aiko-theme",
                    "light"
                );

            } else {

                localStorage.setItem(
                    "aiko-theme",
                    "dark"
                );

            }


            updateThemeButton();


            showToast(
                isLight
                    ? "Mode terang aktif ☀️"
                    : "Mode gelap aktif 🌙"
            );

        }
    );

}


/* =========================================================
   10. TYPING ANIMATION
========================================================= */

const typingWords = [

    "Junior Web Developer",

    "RPL Student",

    "Frontend Learner",

    "Web Design Enthusiast"

];


let wordIndex = 0;

let characterIndex = 0;

let deleting = false;


function typingAnimation() {

    if (!typingText) {

        return;

    }


    const currentWord =
        typingWords[wordIndex];


    if (!deleting) {

        characterIndex++;


        typingText.textContent =
            currentWord.substring(
                0,
                characterIndex
            );


        if (
            characterIndex >=
            currentWord.length
        ) {

            deleting = true;


            setTimeout(
                typingAnimation,
                1400
            );


            return;

        }

    } else {

        characterIndex--;


        typingText.textContent =
            currentWord.substring(
                0,
                characterIndex
            );


        if (characterIndex <= 0) {

            deleting = false;

            wordIndex++;


            if (
                wordIndex >=
                typingWords.length
            ) {

                wordIndex = 0;

            }

        }

    }


    const speed =
        deleting
            ? 45
            : 85;


    setTimeout(
        typingAnimation,
        speed
    );

}


if (typingText) {

    setTimeout(
        typingAnimation,
        1000
    );

}


/* =========================================================
   11. HEADER SCROLL EFFECT
========================================================= */

function handleScroll() {

    const scrollPosition =
        window.scrollY;


    if (header) {

        if (scrollPosition > 40) {

            header.classList.add(
                "scrolled"
            );

        } else {

            header.classList.remove(
                "scrolled"
            );

        }

    }


    if (backTop) {

        if (scrollPosition > 500) {

            backTop.classList.add(
                "show"
            );

        } else {

            backTop.classList.remove(
                "show"
            );

        }

    }

}


window.addEventListener(
    "scroll",
    handleScroll
);


handleScroll();


/* =========================================================
   12. ACTIVE NAVIGATION
========================================================= */

function updateActiveNavigation() {

    const scrollPosition =
        window.scrollY + 180;


    sections.forEach(
        function (section) {

            const sectionTop =
                section.offsetTop;


            const sectionHeight =
                section.offsetHeight;


            const sectionId =
                section.getAttribute("id");


            if (
                scrollPosition >= sectionTop &&
                scrollPosition <
                sectionTop + sectionHeight
            ) {

                navLinks.forEach(
                    function (link) {

                        link.classList.remove(
                            "active"
                        );


                        const href =
                            link.getAttribute(
                                "href"
                            );


                        if (
                            href ===
                            "#" + sectionId
                        ) {

                            link.classList.add(
                                "active"
                            );

                        }

                    }
                );

            }

        }
    );

}


window.addEventListener(
    "scroll",
    updateActiveNavigation
);


updateActiveNavigation();


/* =========================================================
   13. SCROLL PROGRESS BAR
========================================================= */

const scrollProgress =
    document.createElement("div");


scrollProgress.id =
    "scrollProgress";


scrollProgress.style.position =
    "fixed";


scrollProgress.style.top =
    "0";


scrollProgress.style.left =
    "0";


scrollProgress.style.width =
    "0%";


scrollProgress.style.height =
    "3px";


scrollProgress.style.background =
    "linear-gradient(90deg, #60a5fa, #a78bfa, #22d3ee)";


scrollProgress.style.zIndex =
    "9999";


scrollProgress.style.transition =
    "width 0.08s linear";


document.body.appendChild(
    scrollProgress
);


function updateScrollProgress() {

    const scrollTop =
        window.scrollY;


    const documentHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;


    if (documentHeight <= 0) {

        return;

    }


    const progress =
        (scrollTop / documentHeight) * 100;


    scrollProgress.style.width =
        progress + "%";

}


window.addEventListener(
    "scroll",
    updateScrollProgress
);


updateScrollProgress();


/* =========================================================
   14. REVEAL ANIMATION
========================================================= */

const revealObserver =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(
                function (entry) {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "visible"
                        );


                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                }
            );

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(
    function (element) {

        revealObserver.observe(
            element
        );

    }
);


/* =========================================================
   15. STATISTICS COUNTER
========================================================= */

function animateNumber(element) {

    const target =
        Number(
            element.getAttribute(
                "data-count"
            )
        );


    let current = 0;

    const duration = 1200;

    const startTime =
        performance.now();


    function updateNumber(currentTime) {

        const elapsed =
            currentTime - startTime;


        const progress =
            Math.min(
                elapsed / duration,
                1
            );


        current =
            Math.floor(
                progress * target
            );


        element.textContent =
            current;


        if (progress < 1) {

            requestAnimationFrame(
                updateNumber
            );

        } else {

            element.textContent =
                target;

        }

    }


    requestAnimationFrame(
        updateNumber
    );

}


const statObserver =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(
                function (entry) {

                    if (
                        entry.isIntersecting
                    ) {

                        animateNumber(
                            entry.target
                        );


                        statObserver.unobserve(
                            entry.target
                        );

                    }

                }
            );

        },
        {
            threshold: 0.5
        }
    );


statNumbers.forEach(
    function (number) {

        statObserver.observe(
            number
        );

    }
);


/* =========================================================
   16. PROJECT FILTER
========================================================= */

filterButtons.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {

                filterButtons.forEach(
                    function (item) {

                        item.classList.remove(
                            "active"
                        );

                    }
                );


                button.classList.add(
                    "active"
                );


                const filter =
                    button.getAttribute(
                        "data-filter"
                    );


                projectCards.forEach(
                    function (card) {

                        const category =
                            card.getAttribute(
                                "data-category"
                            );


                        if (
                            filter === "all" ||
                            category.includes(filter)
                        ) {

                            card.classList.remove(
                                "hidden"
                            );

                        } else {

                            card.classList.add(
                                "hidden"
                            );

                        }

                    }
                );

            }
        );

    }
);


/* =========================================================
   17. SKILL PROGRESS
========================================================= */

const skillObserver =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(
                function (entry) {

                    if (
                        entry.isIntersecting
                    ) {

                        const progress =
                            entry.target.getAttribute(
                                "data-progress"
                            );


                        entry.target.style.width =
                            progress + "%";


                        skillObserver.unobserve(
                            entry.target
                        );

                    }

                }
            );

        },
        {
            threshold: 0.4
        }
    );


progressBars.forEach(
    function (bar) {

        skillObserver.observe(
            bar
        );

    }
);


/* =========================================================
   18. BACK TO TOP
========================================================= */

if (backTop) {

    backTop.addEventListener(
        "click",
        function () {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        }
    );

}


/* =========================================================
   19. CONTACT FORM → GMAIL
========================================================= */

if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const name =
                document
                    .getElementById("name")
                    .value
                    .trim();


            const email =
                document
                    .getElementById("email")
                    .value
                    .trim();


            const subject =
                document
                    .getElementById("subject")
                    .value
                    .trim();


            const message =
                document
                    .getElementById("message")
                    .value
                    .trim();


            if (
                !name ||
                !email ||
                !subject ||
                !message
            ) {

                showToast(
                    "Mohon isi semua bagian form."
                );

                return;

            }


            const emailBody =
                "Halo Muhammad Aiko Anail Adi,\n\n" +
                "Nama: " + name + "\n" +
                "Email: " + email + "\n\n" +
                "Pesan:\n" +
                message;


            const gmailURL =
                "https://mail.google.com/mail/?" +
                "view=cm&fs=1" +
                "&to=aikorplkanesa@gmail.com" +
                "&su=" +
                encodeURIComponent(subject) +
                "&body=" +
                encodeURIComponent(emailBody);


            window.open(
                gmailURL,
                "_blank"
            );


            showToast(
                "Gmail sedang dibuka ✉️"
            );


            contactForm.reset();

        }
    );

}


/* =========================================================
   20. TOAST NOTIFICATION
========================================================= */

let toastTimer;


function showToast(message) {

    if (!toast) {

        return;

    }


    toast.textContent =
        message;


    toast.classList.add(
        "show"
    );


    clearTimeout(
        toastTimer
    );


    toastTimer =
        setTimeout(
            function () {

                toast.classList.remove(
                    "show"
                );

            },
            2800
        );

}


/* =========================================================
   21. CURRENT YEAR
========================================================= */

if (year) {

    year.textContent =
        new Date().getFullYear();

}


/* =========================================================
   22. SMOOTH SCROLL
========================================================= */

const allAnchorLinks =
    document.querySelectorAll(
        'a[href^="#"]'
    );


allAnchorLinks.forEach(
    function (link) {

        link.addEventListener(
            "click",
            function (event) {

                const targetId =
                    link.getAttribute(
                        "href"
                    );


                if (
                    !targetId ||
                    targetId === "#"
                ) {

                    return;

                }


                const target =
                    document.querySelector(
                        targetId
                    );


                if (!target) {

                    return;

                }


                event.preventDefault();


                target.scrollIntoView({

                    behavior: "smooth",

                    block: "start"

                });

            }
        );

    }
);


/* =========================================================
   23. CLOSE MOBILE MENU WHEN RESIZING
========================================================= */

window.addEventListener(
    "resize",
    function () {

        if (
            window.innerWidth > 1000
        ) {

            if (mobileNav) {

                mobileNav.classList.remove(
                    "open"
                );

            }


            if (menuBtn) {

                menuBtn.classList.remove(
                    "open"
                );

                menuBtn.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        }

    }
);


/* =========================================================
   24. PHOTO CARD MOUSE EFFECT
========================================================= */

const photoCard =
    document.querySelector(
        ".photo-card"
    );


if (photoCard) {

    photoCard.addEventListener(
        "mousemove",
        function (event) {

            if (
                window.innerWidth < 900
            ) {

                return;

            }


            const rect =
                photoCard.getBoundingClientRect();


            const x =
                event.clientX -
                rect.left;


            const y =
                event.clientY -
                rect.top;


            const centerX =
                rect.width / 2;


            const centerY =
                rect.height / 2;


            const rotateX =
                ((y - centerY) /
                    centerY) *
                -4;


            const rotateY =
                ((x - centerX) /
                    centerX) *
                4;


            photoCard.style.transform =
                "rotateX(" +
                rotateX +
                "deg) rotateY(" +
                rotateY +
                "deg) scale(1.02)";

        }
    );


    photoCard.addEventListener(
        "mouseleave",
        function () {

            photoCard.style.transform =
                "rotate(2deg)";

        }
    );

}


/* =========================================================
   25. PROJECT CARD MOUSE EFFECT
========================================================= */

projectCards.forEach(
    function (card) {

        card.addEventListener(
            "mousemove",
            function (event) {

                if (
                    window.innerWidth < 900
                ) {

                    return;

                }


                const rect =
                    card.getBoundingClientRect();


                const x =
                    event.clientX -
                    rect.left;


                const y =
                    event.clientY -
                    rect.top;


                const centerX =
                    rect.width / 2;


                const centerY =
                    rect.height / 2;


                const rotateX =
                    ((y - centerY) /
                        centerY) *
                    -2;


                const rotateY =
                    ((x - centerX) /
                        centerX) *
                    2;


                card.style.transform =
                    "translateY(-8px) " +
                    "rotateX(" +
                    rotateX +
                    "deg) " +
                    "rotateY(" +
                    rotateY +
                    "deg)";

            }
        );


        card.addEventListener(
            "mouseleave",
            function () {

                card.style.transform =
                    "";

            }
        );

    }
);


/* =========================================================
   26. KEYBOARD ACCESSIBILITY
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Tab"
        ) {

            document.body.classList.add(
                "keyboard-user"
            );

        }

    }
);


/* =========================================================
   27. WELCOME MESSAGE
========================================================= */

console.log(
    "🚀 Welcome to AIKO.DEV Portfolio!"
);

console.log(
    "HTML + CSS + JavaScript"
);

console.log(
    "Built by Muhammad Aiko Anail Adi"
);