const arrowBtn = document.getElementById("arrowBtn");
const pageBearGif = document.getElementById("pageBearGif");
const contentMessage = document.getElementById("content-message");
const containMessage = document.getElementById("contain-Message");
const theQuestion = document.getElementById("theQuestion");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const mochaBear = document.getElementById("mocha-bear");
const clickedYesContainer = document.getElementById("clickedYesContainer");

let onPage = 1;

arrowBtn.addEventListener("click", nextPage);
yesBtn.addEventListener("click", yesIsClicked);
noBtn.addEventListener("click", noIsClicked);

function nextPage() {
  onPage++;

  getPageContent(onPage);
}

clickedYesContainer.style.display = "none";
theQuestion.style.display = "none";

function getPageContent(onPage) {
  switch (onPage) {
    case 1:
      console.log(`You're on Page: ${onPage}`);
      break;
    case 2:
      pageBearGif.src = "static/gif/milk-and-mocha-dance.gif";
      contentMessage.textContent =
        "in just 3 months, we've built a deep connection.";
      console.log(`You're on Page: ${onPage}`);
      break;
    case 3:
      pageBearGif.src = "static/gif/goofy.gif";
      contentMessage.textContent = "We goof a lot.";
      console.log(`You're on Page: ${onPage}`);
      break;
    case 4:
      pageBearGif.src = "static/gif/talking.gif";
      contentMessage.textContent =
        "We talk frequently, sharing even the most random thoughts, and openly discuss our emotions.";
      console.log(`You're on Page: ${onPage}`);
      break;
    case 5:
      pageBearGif.src = "static/gif/milk-and-mocha-talk.gif";
      contentMessage.textContent = "and I'd like to know more about you.";
      console.log(`You're on Page: ${onPage}`);
      break;
    case 6:
      pageBearGif.src = "static/gif/mochaNmilkQ.gif";
      contentMessage.textContent = "Can you answer this question, please?";
      console.log(`You're on Page: ${onPage}`);
      break;
    case 7:
      theQuestion.style.display = "contents";
      arrowBtn.style.display = "none";
      containMessage.style.display = "none";
      console.log(`You're on Page: ${onPage}`);
      break;
  }
}

function yesIsClicked() {
    clickedYesContainer.style.display = "flex";
    theQuestion.style.display = "none";
}

function noIsClicked() {
    mochaBear.src = "static/gif/milk-and-mocha-sad.gif";
    yesBtn.textContent = "Please say Yes";
    noBtn.textContent = "This bear will be sad";
}
