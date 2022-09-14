let init = false;

function swiperCard() {
  if (window.innerWidth < 768) {
    if (!init) {
      init = true;
		swiper = new Swiper('.brands-swiper', {
			
			direction: 'horizontal',
	
		 
		
			pagination: {
			  el: '.swiper-pagination',
			  clickable:true,
			},

		 slidesPerView:1.2,
		 spaceBetween: 20,
		
		 breakpoints: {
			

		

			330: {
			  slidesPerView: 1.3,
			  spaceBetween: 20
			},

		
			
			480: {
			  slidesPerView: 1.9,
			  spaceBetween: 20,
			},

		
			
			630: {
			  slidesPerView: 2.4,
			  spaceBetween: 30
			}
		},
		
		slideToClickedSlide:true,
		
		 });
    }
  } else if (init) {
    swiper.destroy();
    init = false;
  }
}
swiperCard();
window.addEventListener("resize", swiperCard);


let infoButton = document.querySelector(".more-info");
infoButton.insertAdjacentHTML("afterbegin",`<span class='more-info__text more-info__text--open'>Читать далее</span>` )
infoButtonTxt = infoButton.querySelector("span");
let brandsSwiper = document.querySelector(".brands-swiper");


function showMore (){
infoButton.classList.toggle("more-info--clicked");
if(infoButton.classList.contains("more-info--clicked")){
	infoButtonTxt.classList.toggle("more-info__text--open");
   infoButtonTxt.classList.toggle("more-info__text--hide");
	infoButtonTxt.textContent = "Скрыть";
	brandsSwiper.style.cssText = "height : 100%; overflow : visible";
}else{
	infoButtonTxt.textContent = "Читать далее";
	brandsSwiper.style.cssText = "height : 200px; overflow : hidden";
}
return infoButton;
}

infoButton.addEventListener("click", showMore)







