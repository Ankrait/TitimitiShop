const togglePopup = (class_open_btn, class_close_btn, class_popup) => {
   const open_btn = document.querySelector(class_open_btn);
   const close_btn = document.querySelector(class_close_btn);
   const block_popup = document.querySelector(class_popup);

   open_btn.addEventListener("click", () => {
      block_popup.classList.add("active");
   });

   close_btn.addEventListener("click", () => {
      block_popup.classList.remove("active");
   });

   document.addEventListener('click', e => {
      let target = e.target;
      let its_block = target == block_popup || block_popup.contains(target);
      let its_btn = target == open_btn;
      let block_is_active = block_popup.classList.contains("active");

      if (!its_block && !its_btn && block_is_active) {
         block_popup.classList.remove("active");
      }
   });
}

//// Скролл

togglePopup('.header__wallet', '.wallet .closebtn', '.wallet__body');
togglePopup('.header__notification', '.notification .closebtn', '.notification__body');
togglePopup('.header__bag', '.bag .closebtn', '.bag__body');



///////////////// Бургер /////////////////////
let toggle = document.querySelector('.burger');
let header = document.querySelector('.header');
let header_menu = document.querySelector('.header__menu');
let body = document.body;

toggle.addEventListener('click', function (e) {
   this.classList.toggle('opened');
   header.classList.toggle('opened');
   body.classList.toggle('overflow--hide')
});

document.addEventListener('click', e => {
   let target = e.target;
   let its_block = target == header_menu || header_menu.contains(target);
   let its_btn = toggle.contains(target);
   let block_is_active = header.classList.contains("opened");

   if (!its_block && !its_btn && block_is_active) {
      toggle.classList.remove('opened');
      header.classList.remove('opened');
      body.classList.remove('overflow--hide')
   }
})


document.querySelector(".header__loop").addEventListener("click", () => {
   document.querySelector(".header__search").classList.add("active");
})
document.querySelector(".header__search .closebtn").addEventListener("click", () => {
   document.querySelector(".header__search").classList.remove("active");
})
///////////////// Бургер /////////////////////



///////////////// Перенос Блока /////////////////
const tableResize = () => {
   const table_item = document.querySelectorAll(".table._3 .table__item");

   if (table_item.length > 0)
      table_item.forEach(el => {
         const name_block = el.querySelector(".table__name");

         if (name_block) {
            const name_block_span = el.querySelector("span");
            if (window.matchMedia('screen and (max-width: 700px)').matches) {
               el.prepend(name_block_span);
               el.prepend(name_block);
            } else {
               name_block.append(name_block_span);
            }
         }
      });

   const tables = document.querySelectorAll(".popular__container");
   if (tables.length > 0)
      tables.forEach(table => {
         const btn = table.querySelector(".popular__btn");
         const head = table.querySelector(".popular__head");
         if (btn)
            if (window.matchMedia('screen and (max-width: 700px)').matches) {
               table.append(btn);
            } else {
               head.append(btn);
            }
      });
}

tableResize();
window.addEventListener("resize", tableResize);
///////////////// Перенос Блока /////////////////