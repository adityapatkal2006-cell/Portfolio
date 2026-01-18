AOS.init({
  duration: 900,
  once: true
});

document.getElementById("year").textContent = new Date().getFullYear();

const words = ["Data Analyst", "Data Visualization Creator", "Python Learner", "Data Storyteller"];
let i = 0, j = 0;
let current = "";
let isDeleting = false;
const typingEl = document.getElementById("typing");

function type() {
  const word = words[i];

  if (!isDeleting) current = word.slice(0, j++);
  else current = word.slice(0, j--);

  typingEl.textContent = current;

  if (!isDeleting && j === word.length + 1) {
    isDeleting = true;
    setTimeout(type, 900);
    return;
  }

  if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % words.length;
  }

  setTimeout(type, isDeleting ? 45 : 80);
}

type();
