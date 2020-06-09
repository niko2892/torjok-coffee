'use strict';
document.addEventListener("DOMContentLoaded", () => {

    // work with modal window

    const btnOrder = document.querySelectorAll('[data-modal'),
      modalWindow = document.querySelector(".modal"),
      btnCloseModalWindow = document.querySelector('[data-close]');

    function openModalWindow(event){
        event.preventDefault();
        modalWindow.classList.remove("hide");
        modalWindow.classList.add("show");
        document.body.style.overflow = 'hidden';
    }
    
    btnOrder.forEach((item) =>{
        item.addEventListener("click", openModalWindow);
    });
    
    function closeModalWindow(){
            modalWindow.classList.remove("show");
            modalWindow.classList.add("hide");
            document.body.style.overflow = "";
    }

    btnCloseModalWindow.addEventListener("click",closeModalWindow);

    modalWindow.addEventListener(`click`, (event) => {
        if(event.target === modalWindow) {
            closeModalWindow();
        }
    });

    function showModalByScroll(){ 
        if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) { 
            openModalWindow(event);
            window.removeEventListener(`scroll`, showModalByScroll); 
        }
    }

    window.addEventListener(`scroll`, showModalByScroll); 



    //////////////////////////////work with tabs/////////////////////////////////////////

    const tabs = document.querySelectorAll(".tabheader__item"), //беру табы
        tabsContent = document.querySelectorAll(".tabcontent"),  //содержимое табов
        tabsParent = document.querySelector(".tabheader__items"); //родитель табов
    
    function hideTabContent() {  //создаю функцию для скрытия табов
        tabsContent.forEach(item => {
            item.classList.add("hide"); //добавляю класс с display: none
            item.classList.remove("show", "fade"); //удаляю класс с display: block и анимацию с класом fade
        });
        tabs.forEach(item =>{
            item.classList.remove("tabheader__item_active"); //удаляю жирное выделение таба в списке
        });
    }

    function showTabContent(i = 0){  //создаю функцию для отображения нужного таба. по умолчанию будет показан первый 
        tabsContent[i].classList.add("show" , "fade"); 
        tabsContent[i].classList.remove("hide");
        tabs[i].classList.add("tabheader__item_active");
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener("click", (event)=>{  //функция для переключения табов
        const target = event.target;
        if(target && target.classList.contains("tabheader__item")) { //если пользователь кликнул по табу
            tabs.forEach((item, i) => {   //перебираю табы (item -  перебираемый таб, i - его номер)
                if(target == item) {  //если элемент по которому кликнули совпал с табом, который сейчас мы перебираем
                    hideTabContent(); //скрываю все табы и
                    showTabContent(i); //отображаю тот таб, номер которого (i) совпал с target
                }
            });
        }

    });
});