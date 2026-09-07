const toggle = document.getElementById("mode-toggle");

if (!localStorage.getItem("mode-toggle")) {
	localStorage.setItem("mode-toggle", "dark");
} else {
	const mode = localStorage.getItem("mode-toggle");
	if (mode === "light") {
		document.body.classList.add("light-body");
		document.getElementsByTagName("header")[0].classList.add("light-body");
		document.getElementsByTagName("main")[0].classList.add("light-text");
	} else {
		document.body.classList.remove("light-body");
		document.getElementsByTagName("header")[0].classList.remove("light-body");
		document.getElementsByTagName("main")[0].classList.remove("light-text");
	}
}
toggle.addEventListener("click", () => {
	const mode = localStorage.getItem("mode-toggle");
	if (mode === "dark") {
		localStorage.setItem("mode-toggle", "light");
		document.body.classList.add("light-body");
		document.getElementsByTagName("header")[0].classList.add("light-body");
		document.getElementsByTagName("main")[0].classList.add("light-text");
	} else {
		localStorage.setItem("mode-toggle", "dark");
		document.body.classList.remove("light-body");
		document.getElementsByTagName("header")[0].classList.remove("light-body");
		document.getElementsByTagName("main")[0].classList.remove("light-text");
	}
})
