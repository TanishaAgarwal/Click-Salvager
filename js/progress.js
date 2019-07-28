const progressBar = document.getElementById("progress");
const progressFill = progressBar.firstElementChild;

window.addEventListener("scroll", () => {
	updateProgress();
});

function updateProgress() {
	let width = progressBar.clientWidth;
	let progress =
		window.pageYOffset / (document.body.scrollHeight - window.innerHeight);
	// fill progress bar
	progressFill.style.width = Math.ceil(100 * progress) + "%";
}

updateProgress();

// Reading progress
let sections = document.getElementsByTagName("section");
let reProgressWrap = document.body.lastElementChild;
let totalWords = 0;
Array.from(sections).forEach(s => {
	let title = 	s.firstElementChild.firstElementChild;
	let wordsInSec = document.createElement("div");
	let ps = s.getElementsByTagName("p");
	let sectionTotal = 0;
	if (ps !== []) {
		ps = Array.from(ps);
		ps.forEach(p => {
			let text = p.innerText;
			let words = text.split(" ");
			sectionTotal = words.length + sectionTotal;
			totalWords = totalWords + sectionTotal;
			wordsInSec.innerHTML = `<div class="word-count"><p>Section 				total ${sectionTotal} words </p></div>`;
			title.appendChild(wordsInSec);
		});
	}
});


