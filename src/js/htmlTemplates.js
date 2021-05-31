import {
	capitalizeFirstLetter,
	getWholeNum,
	getDecimalNum,
} from "./helperFunctions";

export const oneCarouselSlider = (carousel, currency) => {
	return `
        <section class="hero-item">
			<img src=${carousel.image} alt="carousel-slide"/>
            <div class="hero-item-about">
				<div class="hero__left-container-about">
					<h2 class="hero__text">${carousel.description}</h2>
					<p class="hero__price">
					    from
                        <span class="currency">${
													currency.value
												}</span>${getWholeNum(
		carousel.price,
		currency.coeficient
	)}
						<span class="decimals">.${getDecimalNum(
							carousel.price,
							currency.coeficient
						)}</span>
					</p>
					<button>Book now!</button>
				</div>
			</div>
		</section>
    `;
};

export const oneUsp = (usp) => {
	return `
        <article class="usp__card-grid-container">
			<div class="usp__image-container">
				<img src=${usp.image} alt="usp" />
			</div>
			<div>
				<h4>${usp.title}</h4>
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero,
					facere quaerat! Perspiciatis nostrum quo obcaecati delectus sit.
				</p>
			</div>
		</article>
    `;
};

export const oneOffer = (offer, currency) => {
	return `
        <article class="offers__card-container">
            <img src=${offer.image} alt="offer" />
            <div class="offers__offer-text">
                <h4>${offer.city}</h4>
                <p>from ${currency.value}${getWholeNum(
		offer.price,
		currency.coeficient
	)}</p>
                <button type="button">
					Book now
					<svg xmlns="http://www.w3.org/2000/svg" 
						class="svg-icon"
						viewBox="0 0 24 24">
						<path xmlns="http://www.w3.org/2000/svg" d="M16.5 13.1L7.6 22c-.8-.8-.8-2 0-2.8l6.1-6.1-6-6.1c-.8-.8-.8-2 0-2.8l8.8 8.9z"/>
					</svg>
				</button>
            </div>
        </article>`;
};

//helper function for tab components to avoid repetition
const cameleonHeading = (
	heading,
	priority,
	checkIcon,
	minusIcon,
	textContent
) => {
	return `<${heading} class="tab-classes__${priority}">
				<span class="tab-classes__span-img">
					<img
						class="tab-classes__img"
						src="${priority === "primary" ? checkIcon : minusIcon}"
						alt="symbol"
						/>
				</span>
				${textContent}
			</${heading}>`;
};

//there can be three with current scss code
export const oneTab = (tab, info) => {
	return `
		<div class="tab-classes__tab-pane  ${
			tab.type === "regular" ? "active" : ""
		}" id="${tab.type}">
			<div class="tab-classes__image-container">
				<img src="${tab.image}" alt="tab-picture"/>
			</div>
			<div class="tab-classes__include-text">
				<div class="tab-classes__include-text__left-container">
					${cameleonHeading(
						"h6",
						tab.first,
						info.checkMarkIcon,
						info.minusIcon,
						info.first
					)}
					${cameleonHeading(
						"h6",
						tab.second,
						info.checkMarkIcon,
						info.minusIcon,
						info.second
					)}
					${cameleonHeading(
						"h6",
						tab.third,
						info.checkMarkIcon,
						info.minusIcon,
						info.third
					)}
				</div>
				<div class="tab-classes__include-text__right-container">
					${cameleonHeading(
						"h6",
						tab.fourth,
						info.checkMarkIcon,
						info.minusIcon,
						info.fourth
					)}
					${cameleonHeading(
						"h6",
						tab.fifth,
						info.checkMarkIcon,
						info.minusIcon,
						info.fifth
					)}
					${cameleonHeading(
						"h6",
						tab.sixth,
						info.checkMarkIcon,
						info.minusIcon,
						info.sixth
					)}
				</div>
			</div>
		</div>`;
};

export const oneTabMobile = (tab, info) => {
	return `
		<article>
			<div class="tab-classes__image-container">
				<img src="${tab.image}" alt="tab-picture-mobile"/>
			</div>
			<h5>${capitalizeFirstLetter(tab.type)}</h5>
			<div class="tab-classes__mobile-tags">
				${cameleonHeading(
					"h6",
					tab.first,
					info.checkMarkIcon,
					info.minusIcon,
					info.first
				)}
				${cameleonHeading(
					"h6",
					tab.second,
					info.checkMarkIcon,
					info.minusIcon,
					info.second
				)}
				${cameleonHeading(
					"h6",
					tab.third,
					info.checkMarkIcon,
					info.minusIcon,
					info.third
				)}
				${cameleonHeading(
					"h6",
					tab.fourth,
					info.checkMarkIcon,
					info.minusIcon,
					info.fourth
				)}
				${cameleonHeading(
					"h6",
					tab.fifth,
					info.checkMarkIcon,
					info.minusIcon,
					info.fifth
				)}
				${cameleonHeading(
					"h6",
					tab.sixth,
					info.checkMarkIcon,
					info.minusIcon,
					info.sixth
				)}
			</div>
		</article>`;
};
