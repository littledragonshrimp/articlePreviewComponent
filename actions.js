//const button = document.querySelector("button#click"); //click
//const canHide = document.querySelector(".canHide");
//const hiding = document.querySelector(".hidden") //
//const reveal = document.querySelector(".profile");
//
//
//button.addEventListener("click", function () {
//    var element = document.getElementById("hidden");
//    element.classList.add(".show");
//    console.log("it worked");
//
//    canHide.classList.add("hidden");
//    console.log("canHide now hidden");
//  });


const arrow = document.querySelector("#click");
const share = document.querySelector(".share");

arrow.addEventListener("click", function () {
  share.classList.toggle("show");
});