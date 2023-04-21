(() => {

    const menuBtnRef = document.querySelector("[data-menu-button]");
    const drugi = document.querySelector("[mobile]");
  
    const mobileMenuRef = document.querySelector("[data-menu]");
  
  
  
    menuBtnRef.addEventListener("click", () => {
  
      const expanded =
  
        drugi.getAttribute("aria-expanded") === "true" || false;
  
  
  
      drugi.classList.toggle("is-open");
  
      drugi.setAttribute("aria-expanded", !expanded);
  
  
  
      mobileMenuRef.classList.toggle("is-open");
  
    });
  
  })();