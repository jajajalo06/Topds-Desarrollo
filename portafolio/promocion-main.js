window.setTimeout(l2b_modal, 12000);

function l2b_modal() {
    // Задний фон модалки
    var popupWindowWrp = document.getElementById("popup-window-wrp");
    console.log(popupWindowWrp);
    // Модальное окно
    var popupWindow = document.getElementById("popup-window");
    // Находим кнопку close
    var popClose = document.getElementById("pop-close");

    // Проверяем нашлись ли наши модальные окна и фон
    if (!!popupWindowWrp && !!popupWindow && !!popClose) {
        modal_back();
        l2b_modal_window();

        popClose.addEventListener("click", function() {
            localStorage.setItem('popvisit', 'yes');
            popupWindow.classList.add("zoomOut");
            popupWindowWrp.classList.remove("l2b_visible");
            setTimeout(function() {
                popupWindowWrp.style.display = "none";
            }, 1000)

        }, false);

        popupWindowWrp.addEventListener("click", function(e) {
            if (e.target.id == "popup-window-wrp") {
                localStorage.setItem('popvisit', 'yes');
                popupWindow.classList.add("zoomOut");
                popupWindowWrp.classList.remove("l2b_visible");
                setTimeout(function() {
                    popupWindowWrp.style.display = "none";
                }, 1000)
            }
        }, false);
    }

    // Активируем задний фон (затемнение)
    function modal_back() {
        popupWindowWrp.style.display = "flex";
        popupWindowWrp.classList.add("l2b_visible");
    }
    // Активируем модальное окно
    function l2b_modal_window() {
        // Если ид был найден добавляем классы
        setTimeout(function() {
            popupWindow.classList.add("l2b_visible", "animated", "zoomIn");
        }, 1000)

    }
}


if (localStorage["popvisit"] != "yes") {
    l2b_modal();
    console.log("active");
}
