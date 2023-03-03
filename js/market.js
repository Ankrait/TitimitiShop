////////////////// input цены //////////////////
const progress = document.querySelector(".filter__slider-progress");
const priceInput = document.querySelectorAll(".filter__price--min, .filter__price--max");
const rangeInput = document.querySelectorAll(".filter__slider--range input");
rangeInput.forEach(input => {
    input.addEventListener("input", (e) => {
        let minValue = +parseFloat(rangeInput[0].value).toFixed(1);
        let maxValue = +parseFloat(rangeInput[1].value).toFixed(1);
        if (maxValue - minValue < 0) {
            if (e.target.className === "max-value") {
                rangeInput[0].value = maxValue;
                progress.style.left = ((maxValue) / parseFloat(rangeInput[0].max).toFixed(1)) * 100 + "%"
                priceInput[0].value = maxValue;
            }
            else {
                rangeInput[1].value = minValue;
                progress.style.right = 100 - ((minValue) / +parseFloat(rangeInput[1].max).toFixed(1)) * 100 + "%"
                priceInput[1].value = minValue;
            }
        } else {
            priceInput[0].value = minValue;
            priceInput[1].value = maxValue;
            progress.style.left = (minValue / +parseFloat(rangeInput[0].max).toFixed(1)) * 100 + "%";
            progress.style.right = 100 - (maxValue / rangeInput[1].max) * 100 + "%";
        }

    })
})

priceInput.forEach(input => {
    input.addEventListener("change", (e) => {
        let minValue = +parseFloat(priceInput[0].value).toFixed(1);
        let maxValue = +parseFloat(priceInput[1].value).toFixed(1);

        if (e.target.className === "filter__price--min") {
            if (minValue <= +parseFloat(priceInput[0].min).toFixed(1)) {
                priceInput[0].value = priceInput[0].min;
                minValue = +parseFloat(priceInput[1].value).toFixed(1);
            } else if (minValue > maxValue) {
                priceInput[0].value = maxValue;
                minValue = maxValue;
            }

        } else {
            if (maxValue >= +parseFloat(priceInput[1].max).toFixed(1)) {
                priceInput[1].value = priceInput[1].max;
                maxValue = +parseFloat(priceInput[1].value).toFixed(1);
            } else if (maxValue < minValue) {
                priceInput[1].value = minValue;
                maxValue = minValue;
            }
        }

        minValue = +parseFloat(priceInput[0].value).toFixed(1);
        maxValue = +parseFloat(priceInput[1].value).toFixed(1);

        if (maxValue - minValue >= 0) {
            if (e.target.className === "filter__price--min") {
                progress.style.left = ((minValue) / rangeInput[0].max) * 100 + "%"
                rangeInput[0].value = minValue;
            }
            else {
                progress.style.right = 100 - ((maxValue) / rangeInput[1].max) * 100 + "%"
                rangeInput[1].value = maxValue;
            }
        }
    })
})
////////////////// input цены //////////////////
///
///
///
///////////////// Выплывание фильтра /////////////////
const filter_btn = document.querySelector(".sort__filter");
const filter_closebtn = document.querySelector(".filter .closebtn");
const filter_bg = document.querySelector(".filter__bg");
const filter = document.querySelector(".filter");

filter_btn.addEventListener("click", () => {
    filter.classList.add("active");
    filter_bg.classList.add("active");
    document.body.classList.add("overflow--hide");
})

filter_closebtn.addEventListener("click", () => {
    filter.classList.remove("active");
    filter_bg.classList.remove("active");
    document.body.classList.remove("overflow--hide");
})

filter_bg.addEventListener("click", () => {
    filter.classList.remove("active");
    filter_bg.classList.remove("active");
    document.body.classList.remove("overflow--hide");
})
///////////////// Выплывание фильтра /////////////////
///
///
///
////////////////// Фильтр //////////////////
const filter_item_btn = document.querySelectorAll(".filter__btn");
const filter_item = document.querySelectorAll(".filter__item");

for (let i = 0; i < filter_item_btn.length; i++) {
    filter_item_btn[i].addEventListener("click", () => {
        filter_item[i].classList.toggle("active");
        filter_item_btn[i].classList.toggle("active");
    })
}
////////////////// Фильтр //////////////////
///
///
///
////////////////// Сортировка //////////////////
const chooseFromList = (class_btn, class_block, class_items) => {
    const block = document.querySelectorAll(class_block);
    const btn = document.querySelectorAll(class_btn);

    for (let k = 0; k < block.length; k++) {
        btn[k].addEventListener("click", () => {
            block[k].classList.toggle("active");
        })

        const sort_item = block[k].querySelectorAll(class_items);
        for (let i = 0; i < sort_item.length; i++) {
            sort_item[i].addEventListener("click", () => {
                if (!sort_item[i].classList.contains("active")) {
                    btn[k].innerHTML = sort_item[i].innerHTML;

                    for (let j = 0; j < sort_item.length; j++)
                        sort_item[j].classList.remove("active");

                    sort_item[i].classList.add("active");
                }
                block[k].classList.remove("active");
            })
        }

        document.addEventListener('click', e => {
            let target = e.target;
            let its_block = target == block[k] || block[k].contains(target);
            let block_is_active = block[k].classList.contains("active");

            if (!its_block && block_is_active) {
                block[k].classList.remove("active");
            }
        });
    }
}

chooseFromList(".dropdown__main", ".dropdown", ".dropdown__item");
////////////////// Сортировка //////////////////
///
///
///
////////////////// Choose from menu //////////////////
const profile_btn = document.querySelector(".profile__button");
const menu_items = document.querySelectorAll("[data-menu]");
const blocks = document.querySelectorAll("[data-onmenu]");

menu_items.forEach(item => {
    item.addEventListener("click", () => {
        if (item.classList.contains("active"))
            return;

        blocks.forEach(block => {
            block.classList.remove("active");
            if (block.dataset.onmenu === item.dataset.menu)
                block.classList.add("active");
        });
        menu_items.forEach(el => {
            el.classList.remove("active")
            if (el.dataset.menu === "edit")
                el.classList.add("dn");
        });
        item.classList.add("active");
    });
});
////////////////// Choose from menu //////////////////
///
///
///
///////////////// Скролл на меню /////////////////
const line_menu = document.querySelectorAll('.line-menu')

const scrollHorizontally = (block) => (e) => {
    e = window.event || e;
    var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
    block.scrollLeft -= (delta * 60); // Multiplied by 10

    e.preventDefault();
}

if (line_menu.length > 0)
    line_menu.forEach(p_menu => {
        if (p_menu.addEventListener) {
            // IE9, Chrome, Safari, Opera
            p_menu.addEventListener("mousewheel", scrollHorizontally(p_menu), false);
            // Firefox
            p_menu.addEventListener("DOMMouseScroll", scrollHorizontally(p_menu), false);
        } else {
            // IE 6/7/8
            p_menu.attachEvent("onmousewheel", scrollHorizontally(p_menu));
        }
    })

///////////////// Скролл на меню /////////////////
///
///
///
///////////////// Блок редактирования /////////////////
const menu__items = document.querySelectorAll(".profile__menu .line-menu__item");
let content__items = document.querySelector(".profile .content");
if (content__items)
    content__items = content__items.children;

if (profile_btn)
    profile_btn.addEventListener("click", () => {
        for (let i = 0; i < menu__items.length; i++) {
            menu__items[i].classList.remove("active");
            if (menu__items[i].dataset.menu === 'edit') {
                menu__items[i].classList.remove("dn");
                menu__items[i].classList.add("active");
            }
        };

        for (let i = 0; i < content__items.length; i++) {
            content__items[i].classList.remove("active");
            if (content__items[i].classList.contains("edit"))
                content__items[i].classList.add("active");
        };

    });
///////////////// Блок редактирования /////////////////
///
///
///
////////////////// Open popups //////////////////
const popup_btns = document.querySelectorAll("[data-topopup]");
const popups = document.querySelectorAll("[data-popup]");

popup_btns.forEach(btn => {
    btn.addEventListener("click", () => {
        popups.forEach(popup => {
            if (popup.dataset.popup === btn.dataset.topopup) {
                popup.classList.remove("dn");
                body.classList.add("overflow--hide")
            }
        });
    });
});

popups.forEach(popup => {
    const closebtn = popup.querySelector(".closebtn");
    closebtn.addEventListener("click", () => {
        popup.classList.add("dn");
        body.classList.remove("overflow--hide");
    })


    if (popup.dataset.popup === "fix" || popup.dataset.popup === "auct") {
        const backbtn = popup.querySelector(".backbtn");
        backbtn.addEventListener("click", () => {
            popup.classList.add("dn");
            document.querySelector("[data-popup='5']").classList.remove("dn");
        })
    }
})

const fixbtn = document.querySelector(".fix");
const auctbtn = document.querySelector(".auct");
if (fixbtn)
    fixbtn.addEventListener("click", () => {
        document.querySelector("[data-popup='fix']").classList.remove("dn");
        document.querySelector("[data-popup='5']").classList.add("dn");
    })
if (auctbtn)
    auctbtn.addEventListener("click", () => {
        document.querySelector("[data-popup='auct']").classList.remove("dn");
        document.querySelector("[data-popup='5']").classList.add("dn");
    })

////////////////// Open popups //////////////////