import "./style/main.scss";
import { elements } from "./js/base";
import {
	carouselSliderData,
	uspsData,
	offersData,
	tabsData,
	additionalInfo,
	currency,
} from "./data";
import {
	oneCarouselSlider,
	oneUsp,
	oneOffer,
	oneTab,
	oneTabMobile,
} from "./js/htmlTemplates";
import * as helperFunction from "./js/helperFunctions";

//references for carousel
const slider = document.querySelector(elements.heroSlider);
const leftArrow = document.querySelector(elements.leftCarouselBtn);
const rightArrow = document.querySelector(elements.rightCarouselBtn);

//references for populating html with data
const carousleSliderContainer = document.querySelector(elements.carouselSlider);
const uspContainer = document.querySelector(elements.usps);
const offersContainer = document.querySelector(elements.offers);
const tabsContainer = document.querySelector(elements.tabs);
const tabsContainerMobile = document.querySelector(elements.tabsMobile);

//reference for changing currency
const currentCurrency = document.querySelector(elements.currencyOptions);

//================================================================//
//-----------------CHANGE CURRENCY FUNCTIONALITY------------------//
//================================================================//

let curVal = document.querySelector(elements.currencyOptions).value;
let curValObj = currency[curVal];

currentCurrency.addEventListener("change", () => {
	curVal = currentCurrency.value;
	curValObj = currency[curVal];
	//console.log(curValObj);

	//re-render carousel after currency is changed
	carousleSliderContainer.innerHTML = carouselSliderData
		.map((slider) => {
			return oneCarouselSlider(slider, curValObj);
		})
		.join("");

	//re-render offers after currency is changed
	offersContainer.innerHTML = offersData
		.map((offer) => {
			return oneOffer(offer, curValObj);
		})
		.join("");
});

//================================================================//

//================================================================//
//-----------------CAROUSEL FUNCTIONALITY-------------------------//
//================================================================//

let sectionIndex = 0;

//make it dynamic, now we can just add more objects to data file
let num = carouselSliderData.length;
slider.style.width = `${100 * num}%`;

rightArrow.addEventListener("click", function () {
	sectionIndex = sectionIndex < num - 1 ? sectionIndex + 1 : num - 1;
	slider.style.transform = `translateX(-${sectionIndex * (100 / num)}%)`;

	//display or hide buttons when needed
	if (sectionIndex > 0) {
		leftArrow.style.display = "block";
	}
	if (sectionIndex === num - 1) {
		rightArrow.style.display = "none";
	}
});

leftArrow.addEventListener("click", function () {
	sectionIndex = sectionIndex > 0 ? sectionIndex - 1 : 0;
	slider.style.transform = `translateX(-${sectionIndex * (100 / num)}%)`;

	//display or hide buttons when needed
	if (sectionIndex === 0) {
		leftArrow.style.display = "none";
	}
	if (sectionIndex < num - 1) {
		rightArrow.style.display = "block";
	}
});

//================================================================//

//================================================================//
//------------------POPULATE HTML CONTAINERS----------------------//
//================================================================//

carousleSliderContainer.innerHTML = carouselSliderData
	.map((slider) => {
		return oneCarouselSlider(slider, curValObj);
	})
	.join("");

uspContainer.innerHTML = uspsData
	.map((usp) => {
		return oneUsp(usp);
	})
	.join("");

offersContainer.innerHTML = offersData
	.map((offer) => {
		return oneOffer(offer, curValObj);
	})
	.join("");

tabsContainer.innerHTML = tabsData
	.map((tab) => {
		return oneTab(tab, additionalInfo);
	})
	.join("");
tabsContainerMobile.innerHTML = tabsData
	.map((tab) => {
		return oneTabMobile(tab, additionalInfo);
	})
	.join("");

//================================================================//

//================================================================//
//-----------------------TABS FUNCTIONALITY-----------------------//
//================================================================//

const element = document.querySelector(elements.tabLinks);

element.addEventListener("click", helperFunction.onTabClick, false);

//================================================================//
