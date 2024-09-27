const mobileNav = () => {
    const barsBtn = document.querySelector("#bars-btn");
    const mobileNav = document.querySelector("#mobile-nav");
    const closeBtn = document.querySelector("#close-btn");

    const handleBarsBtn = () => {
      mobileNav.classList.add("visible");
    };

    const handleCloseBtn = () => {
      mobileNav.classList.remove("visible");
    };

    barsBtn.addEventListener("click", handleBarsBtn);
    closeBtn.addEventListener("click", handleCloseBtn);
}

export default mobileNav;