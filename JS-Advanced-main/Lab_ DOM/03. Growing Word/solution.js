function growingWord() {
	let growingWordElement = document.querySelector("#exercise p")
	if (!growingWordElement.style.fontSize) {
		growingWordElement.style.fontSize = "2px"
	} else {
		let fontSize = growingWordElement.style.fontSize.slice(0, growingWordElement.style.fontSize.length - 2) * 2 + "px"
		growingWordElement.style.fontSize = fontSize

	}
	const colors={
		"blue": x=> x="green",
		"green": x=> x="red",
		"red": x=> x="blue"
	}
	let color=growingWordElement.style.color
	console.log(color)
	if(color === "") {
		growingWordElement.style.color="blue"
	}else {
		growingWordElement.style.color=colors[color](color)
	}
}
