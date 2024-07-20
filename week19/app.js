const height = document.getElementById("height");
const width = document.getElementById("width");
const pixelDepth = document.getElementById("pixel-depth");
const colorDepth = document.getElementById("color-depth");

const updateValues = () => {
	width.innerText = `${window.innerWidth}px`;
	height.innerText = `${window.innerHeight}px`;
	colorDepth.innerText = `${window.screen.colorDepth}bits`;
	pixelDepth.innerText = `${window.screen.pixelDepth}bits`;
};

window.addEventListener("resize", updateValues);
updateValues();
