document.addEventListener('DOMContentLoaded', function(){
	const form = document.querySelector(".form")
	const cardList = document.querySelector(".sort__container")
	const email = document.querySelector(".form__input")
	const formBtn = document.querySelector(".form__button")
	const emailRegexp = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu
	let sortItem = 0
	let goTopBtn = document.querySelector(".sort__up")


	// Change button and color
	const handleCardListClick = ({target}) => {
		if (target.classList.contains("sort__button")) {
			target.innerText = "Продано"
			target.style.backgroundColor = "#000"
			target.disabled = true
		}
	}

	cardList.addEventListener("click", handleCardListClick)

	// Show more cards
	document.querySelector('.sort__show').addEventListener('click', function() {
		let sortHidden = document.querySelectorAll('.sort__hidden')
		sortHidden[sortItem].style.display = "flex";
		if(sortItem+1 === sortHidden.length){
		  this.style.display = "none";
		}
		sortItem++
	  });

	//   Button up
	function trackScroll() {
		let scrolled = window.pageYOffset
		let coords = document.documentElement.clientHeight

		if (scrolled > coords) {
			goTopBtn.classList.add("sort__up_show")
		}
		if (scrolled < coords) {
			goTopBtn.classList.remove("sort__up_show")
		}
	}

	function backToTop() {
		 if (window.pageYOffset > 0) {
			 window.scrollBy(0, -80)
			 setTimeout(backToTop, 0)
		 }
	}

	window.addEventListener("scroll", trackScroll)
	goTopBtn.addEventListener("click", backToTop)

	form.addEventListener("submit", function(e){
		e.preventDefault()
	})

	// Validate email
	function validateEmail(value) {
		return emailRegexp.test(value)
	}

	function updateInput() {
		if (validateEmail(email.value) || email.value === "") {
			email.style.border = "2px solid green"
			formBtn.disabled = false		
		} else {
			email.style.border = "2px solid red"
			email.style.borderColor = 'red';
			formBtn.disabled = true
		} 	
	}

	email.addEventListener("input", updateInput)
});
  