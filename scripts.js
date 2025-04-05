// Lightbox with dynamic DOM and captions
document.addEventListener("DOMContentLoaded", () => {
    const lightbox = document.createElement("div");
    lightbox.classList.add("lightbox");
    document.body.appendChild(lightbox);
  
    const closeButton = document.createElement("span");
    closeButton.classList.add("lightbox-close");
    closeButton.textContent = "×";
    lightbox.appendChild(closeButton);
  
    const img = document.createElement("img");
    lightbox.appendChild(img);
  
    const caption = document.createElement("div");
    caption.classList.add("lightbox-caption");
    lightbox.appendChild(caption);
  
    const links = document.querySelectorAll('[data-lightbox="gallery"]');
  
    links.forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        img.src = link.href;
        const description = link.getAttribute("data-description") || "";
        const date = link.getAttribute("data-date") || "";
        caption.innerHTML = `<p>${description}</p><p>${date}</p>`;
        lightbox.style.display = "flex";
      });
    });
  
    closeButton.addEventListener("click", () => {
      lightbox.style.display = "none";
    });
  
    lightbox.addEventListener("click", (e) => {
      if (e.target !== img && e.target !== closeButton) {
        lightbox.style.display = "none";
      }
    });




    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        lightbox.style.display = "none";
      }
    });

    window.addEventListener('scroll', () => {
      document.getElementById('backToTop').style.display =
        window.scrollY > 300 ? 'block' : 'none';
    });
    document.getElementById('backToTop').onclick = () =>
      window.scrollTo({ top: 0, behavior: 'smooth' });
    
  });
  


  document.addEventListener("DOMContentLoaded", () => {
    AOS.init();
  });
  