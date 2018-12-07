let f = "";
class PraiseButton {
	constructor(num, element) {
		this.num = num;
		this.element = element;
	}
	clickAction() {
		this.element.click(() => {
			if (f) {
				clearTimeout(f);
			}
			f = setTimeout(() => {
				if (this.num < 10) {
					this.element.css("-webkit-filter", "grayscale(0)");
					$("#animation").addClass("num");
					this.num = window.add(this.num);
					setTimeout(() => {
						$("#animation").removeClass("num");
					}, 1000);
				} else {
					this.element.css("-webkit-filter", "grayscale(1)");
					this.num = 0;
				}
				console.log(this.num);
			}, 800);

		});
	}
}

class Thumb extends PraiseButton {
	constructor(num, element) {
		super(num, element);
	}
}

export default {
	Thumb
};