const count = document.querySelector('.count');
//const sub = document.querySelector('.subtract');
//const add = document.querySelector('.add');
//const res = document.querySelector('.reset');
//* Event Delegation *//
const buttons = document.querySelector('.buttons');

buttons.addEventListener('click', (e) => {
	if (e.target.classList.contains('add')) {
		count.innerHTML++;
		setColor();
	} else if (e.target.classList.contains('subtract')) {
		count.innerHTML--;
		setColor();
	} else if (e.target.classList.contains('reset')) {
		count.innerHTML = 0;
		setColor();
	}
});

function setColor() {
	if (count.innerHTML < 0) {
		count.style.color = 'rgb(155, 218, 18)';
	} else if (count.innerHTML > 0) {
		count.style.color = 'lightblue';
	} else {
		count.style.color = 'white';
	}
}
//add.addEventListener('click', () => {
//	count.innerHTML++;
//});

//sub.addEventListener('click', () => {
//	count.innerHTML--;
//});

//res.addEventListener('click', () => {
//	count.innerHTML = 0;
//});
