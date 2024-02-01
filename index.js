var randomnumber = Math.floor(Math.random() * 2);

if (randomnumber == 0) {
  document.querySelector("h1").innerHTML = "It is a Head";
  document.querySelector(".tail").remove();
} else {
  document.querySelector("h1").innerHTML = "It is Tails";
  document.querySelector(".head").remove();
}
