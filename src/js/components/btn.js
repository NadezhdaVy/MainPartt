let infoButton = document.querySelectorAll(".more-info");
let innerContainer = document.querySelectorAll(".inner-container");





for (let i = 0; i < infoButton.length;i++){
	let button = infoButton[i];
	let currInnerContainer = innerContainer[i];

	button.addEventListener("click", function(){
		button.classList.toggle("more-info--clicked");
		
	if(button.classList.contains("more-info--clicked")){
		button.textContent = "Скрыть";
		currInnerContainer.style.cssText = "height : 100%; overflow : visible";
	
	}else{
		button.textContent = "Читать далее";
		currInnerContainer.style.cssText = "";
	}
	return button;
	})
}


let burger = document.querySelector(".burger-menu");
let mainPage = document.querySelector(".main-page");
let logo = document.querySelector(".logo");
let contactsMenu = document.querySelector(".userbar-items__contacts");
let asideMenu = document.querySelector(".aside-menu");
let menu = document.querySelector(".aside-wrapper");


function showHideMenu () {

		asideMenu.classList.toggle("aside-menu--active")
		burger.classList.toggle("burger-menu--clicked");
		contactsMenu.classList.toggle ("userbar-items__contacts--left");


}


burger.addEventListener("click", showHideMenu);


	document.addEventListener('keydown',function(e){
		asideMenu.classList.remove("aside-menu--active")
		burger.classList.remove("burger-menu--clicked");
		contactsMenu.classList.remove("userbar-items__contacts--left");
	
		e.preventDefault();
	})


asideMenu.addEventListener('click', (e) => {
   if (!menu.contains(e.target)) {
      asideMenu.classList.remove("aside-menu--active")
		burger.classList.remove("burger-menu--clicked");
		contactsMenu.classList.remove("userbar-items__contacts--left");
	
   }
})






let forms = document.querySelectorAll("form");
 

let my_func = function(event) {
	event.preventDefault();
};

for (let i = 0; i < forms.length;i++){
let form = forms[i];
form.addEventListener("submit", my_func, true);
}


