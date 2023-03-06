let count_of_chosen = 0;
const items = document.querySelectorAll(".griditem");
const btns = document.querySelectorAll(".choose__continue,.choose__continue--phone");

if (items.length > 0)
   items.forEach(item => {
      item.addEventListener("click", () => {
         if (item.classList.contains("active")) {
            item.classList.remove("active");
            count_of_chosen--;
            if (count_of_chosen === 0) {
               btns.forEach(btn => btn.classList.remove("white"));
            }
         } else {
            item.classList.add("active");
            if (count_of_chosen === 0) {
               btns.forEach(btn => btn.classList.add("white"));
            }
            count_of_chosen++;
         }
      })
   });
