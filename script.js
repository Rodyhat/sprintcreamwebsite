var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


let products = document.querySelectorAll(".product");

products.forEach(product => {
  let popIcon = product.querySelectorAll(".icon");
  product.addEventListener("mouseover", () => {
    popIcon.forEach(icon => {
      icon.style.display = "flex";
      icon.style.flexDirection = "column";
      icon.style.transition = ".9s";
      if (window.innerWidth <= 1024) {
        icon.style.display = "none";
      }
    });
  });

  products.addEventListener("mouseout", () => {
    popIcon.forEach(icon => {
      icon.style.display = "none";
    });
  });
});
