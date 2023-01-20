document.addEventListener("DOMContentLoaded", function () {
  let form = document.getElementById("form");
  let canvas = document.querySelector(".gallery");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // create new LI for UL
    let memeLi = document.createElement("li");
    memeLi.classList.add("memeImage");

    // create top div
    let topTextDiv = document.createElement("div");
    topTextDiv.classList.add("text", "top");
    topTextDiv.innerText = document.querySelector("#topText").value;

    // create Bottom Div
    let bottomTextDiv = document.createElement("div");
    bottomTextDiv.classList.add("text", "bottom");
    bottomTextDiv.innerText = document.querySelector("#bottomText").value;

    // create Canvas
    let image = document.querySelector("#image").value,
      src = image + "png",
      img = document.createElement("img");
    img.src = src;

    // Choose font color for your meme
    let color = document.getElementById("fontColor").value;
    bottomTextDiv.style.color = color;
    topTextDiv.style.color = color;

    // remove div
    let removeButton = document.createElement("button");
    removeButton.classList.add("button");
    removeButton.innerText = "Click to Delete";

    canvas.appendChild(memeLi);
    memeLi.appendChild(img);
    memeLi.appendChild(topTextDiv);
    memeLi.appendChild(bottomTextDiv);
    memeLi.appendChild(removeButton);

    form.reset();
  });

  canvas.addEventListener("dblclick", remove, false);
});

function remove(event) {
  event.target.parentNode.remove();
}
