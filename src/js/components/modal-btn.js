let callBtn = document.querySelector(".call-btn");
let modalCall = document.querySelector(".call-modal"); 
let modalFeedback = document.querySelector(".feedback-modal")
let feedbackBtn = document.querySelector(".feedback-btn");
let closeBtns = document.querySelectorAll(".close-btn");
let modals = document.querySelectorAll(".modal");


function showHideModalCall () {
	modalCall.classList.toggle("call-modal--active");
	}
	
	function showHideModalFeedback () {
	modalFeedback.classList.toggle("feedback-modal--active");
	}



		for (let i = 0; i < closeBtns.length;i++){
			let close = closeBtns[i];
			close.addEventListener("click", function(){
				modalCall.classList.remove("call-modal--active");
				modalFeedback.classList.remove("feedback-modal--active")
			})
		}

document.addEventListener("keydown",function(e){
	modalCall.classList.remove("call-modal--active");
	modalFeedback.classList.remove("feedback-modal--active");
	e.preventDefault()
});

callBtn.addEventListener("click",showHideModalCall);

feedbackBtn.addEventListener("click", showHideModalFeedback)