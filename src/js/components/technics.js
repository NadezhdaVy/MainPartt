
let techSwiper;

function swiperCard() {
	
  if (window.innerWidth < 768) {
    if (!techSwiper) {
      techSwiper = new Swiper('.technics-swiper',
		 {
			
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
  } else if (window.innerWidth > 768 && techSwiper) {
   techSwiper.destroy();
   techSwiper = null;
  }
}
swiperCard();
window.addEventListener("resize", swiperCard);