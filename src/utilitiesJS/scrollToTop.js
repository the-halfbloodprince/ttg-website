const scrollToTop = () => {
    window.onscroll = function () {
        var backToTo = document.querySelector(".scroll-top"); if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) { backToTo.style.display = "flex"; } else { backToTo.style.display = "none"; }
    };
}

export default scrollToTop