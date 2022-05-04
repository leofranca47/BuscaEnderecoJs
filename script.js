const menu = {
    selector: ".principal",
    menuElement: function classe() {
        return document.querySelector(this.selector);
    },

    active() {
        this.menuElement().classList.add("active");
    }
}

menu.active();

btn = document.querySelector("#btn");

btn.addEventListener("click", event => {
    const teste = document.querySelector(menu.selector);
    if (teste.classList.contains('active')) {
        teste.classList.remove('active');
    } else {
        teste.classList.add('active');
    }
});

// btn.click(menu.desable());