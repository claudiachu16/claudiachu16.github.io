document.addEventListener('DOMContentLoaded', function () {
    const fadeIns = document.querySelectorAll('.fade-in');

    function checkFadeIns() {
        fadeIns.forEach(fadeIn => {
            const distanceFromTop = fadeIn.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (distanceFromTop - windowHeight < 0) {
                fadeIn.classList.add('fade-in-visible');
            }
        });
    }

    document.addEventListener('scroll', checkFadeIns);
    checkFadeIns();
});
