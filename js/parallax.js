document.addEventListener("mousemove", (e) => {
    const parallaxElements = document.querySelectorAll(".parallax");
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    parallaxElements.forEach((element) => {
        const offsetX = (clientX - centerX) / 30;
        const offsetY = (clientY - centerY) / 30;
        element.style.transform = `translate(${offsetX}px, ${offsetY}px) perspective(1000px) rotateX(${offsetY / 5}deg) rotateY(${offsetX / 5}deg)`;
    });
});
