const toggle = document.getElementById("mode-toggle");
let mode = "dark";
toggle.addEventListener("click", () => {
	if (mode === "dark") {
		mode = "light";
		document.body.classList.add("light-body");
		document.getElementsByTagName("header")[0].classList.add("light-body");
		document.getElementsByTagName("main")[0].classList.add("light-text");
	} else {
		mode = "dark";
		document.body.classList.remove("light-body");
		document.getElementsByTagName("header")[0].classList.remove("light-body");
		document.getElementsByTagName("main")[0].classList.remove("light-text");
	}
})
