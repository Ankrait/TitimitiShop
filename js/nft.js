////////////////// Choose from menu //////////////////
const menu_items = document.querySelectorAll("[data-menu]");
const blocks = document.querySelectorAll("[data-onmenu]");

if (menu_items.length > 0 && menu_items.length > 0)
   menu_items.forEach(item => {
      item.addEventListener("click", () => {
         if (item.classList.contains("active"))
            return;

         blocks.forEach(block => {
            block.classList.remove("active");
            if (block.dataset.onmenu === item.dataset.menu)
               block.classList.add("active");
         });
         menu_items.forEach(el => el.classList.remove("active"));
         item.classList.add("active");
      });
   });
////////////////// Choose from menu //////////////////
///
///
///
////////////////// Gender switch //////////////////
const gender_btns = document.querySelectorAll(".gender-switch");

if (gender_btns.length > 0)
   gender_btns.forEach(btn => {
      btn.addEventListener("click", () => {
         const circles = btn.querySelectorAll(".gender-switch__circle");
         circles[0].classList.toggle("active");
         circles[1].classList.toggle("active");
      });
   });
////////////////// Gender switch //////////////////
