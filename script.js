import"../assets/styles/scss/style.scss";import{WidgetFetch}from"./classes/WidgetFetch.js";import{planetsId}from"./data.js";import{Button}from"./classes/Button.js";import{ChartFetch}from"./classes/ChartFetch.js";import{Comet}from"./classes/Comet.js";import{Param}from"./classes/Param.js";import{Slider}from"./classes/Slider.js";import{MenuItem}from"./classes/Menu.js";import{err404}from"./data.js";import{speech}from"./data.js";import{ParadeOfPlanets}from"./classes/ParadeOfPlanets.js";import{planetsNames}from"./data.js";import{Dropdown}from"./classes/Dropdown.js";window.addEventListener("DOMContentLoaded",(()=>{const e=new ParadeOfPlanets(planetsNames);setTimeout(e.createParade(),1e3);for(let e=0;e<planetsId.length;e++)new WidgetFetch(planetsId[e]).getEnglishName(e);new Param("fake__options-list","fake__options-list-item").fillOptions();let t="default";const s=document.querySelector(".statistics__astro-text"),o=document.querySelector(".fake__select"),a=new Dropdown;o.addEventListener("click",(e=>{e.preventDefault(),o.classList.toggle("fake__select_triangle"),o.classList.toggle("fake__select_rotate-triangle"),a.toggleDropdownVisibility(".fake__options-list")})),document.querySelector(".fake__options-list").addEventListener("click",(e=>{o.innerHTML=a.getSelectedDropdownItem(e).text,t=a.getSelectedDropdownItem(e).value,a.hideDropdown(".fake__options-list"),o.classList.toggle("fake__select_triangle"),o.classList.toggle("fake__select_rotate-triangle")})),document.addEventListener("click",(e=>{"dropdown"!==e.target.dataset.dropdown&&(a.hideDropdown(".fake__options-list"),o.classList.add("fake__select_triangle"),o.classList.remove("fake__select_rotate-triangle"))})),new Button(".statistics__btn").onClick((e=>{if(e.preventDefault(),"default"===t)s.innerHTML=err404,s.style.color="#d47580";else{const e=new ChartFetch(t);new Comet(".statistics__img-comet").launch(),e.getChartingInfo(),s.innerHTML=speech,s.style.color="#fff"}}));const r=new Slider(".slider__tape");new Button(".slider__control_next").onClick((()=>{r.showNext()})),new Button(".slider__control_prev").onClick((()=>{r.showPrev()})),new Button(".header__menu_burger").onClick((()=>{document.body.classList.toggle("lock"),document.querySelector(".header__menu_nav").classList.toggle("active"),document.querySelector(".header__menu_burger").classList.toggle("rotate")})),document.querySelectorAll(".menu__link").forEach((e=>{e.addEventListener("click",(()=>{new MenuItem(e.dataset.goto).goTo()}))}))}));