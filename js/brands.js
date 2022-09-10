var init = false;

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


var infoButton = document.querySelector(".more-info");
var iconButton = infoButton.querySelector(".more-info__icon");





infoButton.addEventListener("click",function(){
	
if(infoButton.querySelector(".more-info__text--closed").hidden === false){
	infoButton.querySelector(".more-info__text--closed").hidden = true;
	infoButton.querySelector(".more-info__text--opened").hidden = false;
	iconButton.style.transform = "rotate(180deg)";
	document.querySelector(".brands-swiper").style.cssText = "height : 100%; overflow : visible";
}else{
	infoButton.querySelector(".more-info__text--closed").hidden = false;
	infoButton.querySelector(".more-info__text--opened").hidden = true;
	iconButton.style.transform = "rotate(360deg)";
	document.querySelector(".brands-swiper").style.cssText = "height : 200px; overflow : hidden";
}


})