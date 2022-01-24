
//DOM calls
const btnSeeMore = document.getElementById("more");
const mainTag = document.querySelector("main");
const imgEvent = document.querySelector(".likes img");
const outlineHeart =
  "https://cdn.discordapp.com/attachments/930798381163495454/934932723766816839/red-heart.png";
const readHeart =
  "https://drive.google.com/file/d/1sRdN2KSRGGbyAjy6PKCYUYX-pfT8sfDc/view";
const searchBoxShadow = document.querySelector('div .busca');

//HTML
btnSeeMore.onclick = () => {
  mainTag.removeChild(btnSeeMore);
  mainTag.innerHTML += post;
  mainTag.appendChild(btnSeeMore);
};
//CSS
  //Variables
var countLike = 1;
const likeCount = document.querySelector(".likes b");
  //Event heart and like count
window.addEventListener("click", () => {

  //Conditionals 
  imgEvent.src = imgEvent.src === outlineHeart ? readHeart : outlineHeart;

  if (countLike >= 1) {
    likeCount.innerText = countLike--;
  } else {
    likeCount.innerText = countLike++;
  }
});
  //Event Pointer
btnSeeMore.onmouseover = () => {
  btnSeeMore.style.cursor = "pointer";
};
  //Event Shadow-Box
searchBoxShadow.onclick = () => {
  searchBoxShadow.style.boxShadow = "0px 1px 3px black";
};
