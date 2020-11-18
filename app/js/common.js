document.addEventListener('DOMContentLoaded', function(){
	const form = document.querySelector('.form')
	const cardList = document.querySelector('.sort__container')
	const email = document.querySelector('.form__input')
	const formBtn = document.querySelector('.form__button')
	const showMoreCard = document.querySelector('.sort__show')
	const emailRegexp = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu
	const goTopBtn = document.querySelector('.sort__up')
	const menuMobile = document.querySelector('.navigation')
	let sortItem = 0


	// Change button and color
	const handleCardListClick = ({target}) => {
		if (target.classList.contains('sort__button')) {
			target.innerText = 'Продано'
			target.style.backgroundColor = '#000'
			target.disabled = true
		}
	}

	cardList.addEventListener('click', handleCardListClick)

	// Show more cards
	showMoreCard.addEventListener('click', function() {
		let sortHidden = document.querySelectorAll('.sort__hidden')
		sortHidden[sortItem].style.display = 'flex';
		if(sortItem+1 === sortHidden.length){
		  this.innerText = 'Закончились';
		  this.disabled - true
		  this.style.backgroundColor = '#1f2021'
		  this.style.color = '#fff'
		}
		sortItem++
	  });

	//   Button up
	function trackScroll() {
		let scrolled = window.pageYOffset
		let coords = document.documentElement.clientHeight

		if (scrolled > coords) {
			goTopBtn.classList.add('sort__up_show')
		}
		if (scrolled < coords) {
			goTopBtn.classList.remove('sort__up_show')
		}
	}

	function backToTop() {
		 if (window.pageYOffset > 0) {
			 window.scrollBy(0, -80)
			 setTimeout(backToTop, 0)
		 }
	}

	window.addEventListener('scroll', trackScroll)
	goTopBtn.addEventListener('click', backToTop)

	form.addEventListener('submit', function(e){
		e.preventDefault()
	})

	// Validate email
	function validateEmail(value) {
		return emailRegexp.test(value)
	}

	function updateInput() {
		if (validateEmail(email.value)) {
			email.style.border = '2px solid green'
			formBtn.disabled = false		
		} else {
			email.style.border = '2px solid red'
			email.style.borderColor = 'red';
			formBtn.disabled = true
		} 	
	}

	email.addEventListener('input', updateInput)

	 // Open mobile menu
	 document.querySelector('.nav__menu').addEventListener('click', function() {
		this.classList.toggle('nav__mobile--active')
		document.querySelector('.mobile').classList.toggle('mobile--active');
	  })

	   // Add color for mobile menu
  window.addEventListener('scroll', function(e) {
    if(this.pageYOffset >= 120) {
		menuMobile.classList.add('fixed');
    } else {
		menuMobile.classList.remove('fixed');
    }
  })
});
  