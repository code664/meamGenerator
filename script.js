const generateMemeBtn = document.querySelector(".generate-meme-btn");
const memeImage = document.querySelector("img");
const memeTitle = document.querySelector(".meme-title");
const memeAuthor = document.querySelector(".meme-author");

const url = "https://meme-api.com/gimme/wholesomememes";

generateMemeBtn.addEventListener("click", async () => {
  const response = await fetch(url);
  const data = await response.json();
  memeImage.src = data.url;
  memeAuthor.innerText = data.author;
  memeTitle.innerText = data.title;
});
