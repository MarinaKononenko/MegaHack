/* ================= SLIDER ====================== */
/* var slider = document.getElementById("myRange");
var output = document.getElementById("slider-value");
output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = this.value;
  var gradient =
    "linear-gradient(to right, #4ab9ba, #4ab9ba " +
    this.value +
    "%, #616161 " +
    this.value +
    "%, #616161)";
  this.style.background = gradient;
}; */

/* ==================== DROPDOWN ================= */

if ("NodeList" in window && !NodeList.prototype.forEach) {
  console.info("polyfill for IE11");
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;
    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}

document.querySelectorAll(".dropdown").forEach(function (dropDownWrapper) {
  const chooseModelButton = dropDownWrapper.querySelector(".basic-settings__dropdown"),
    chooseModelList = dropDownWrapper.querySelector(".basic-settings__dropdown__list"),
    chooseModelListItems = chooseModelList.querySelectorAll(".basic-settings__dropdown__list_item"),
    dropdownInput = dropDownWrapper.querySelector(".dropdown__input-hidden");

  chooseModelButton.addEventListener("click", function () {
    chooseModelList.classList.toggle("basic-settings__dropdown__list_vivsible");
  });

  chooseModelListItems.forEach(function (listItem) {
    listItem.addEventListener("click", function (e) {
      e.stopPropagation();
      chooseModelButton.innerText = this.innerText;
      dropdownInput.value = this.dataset.value;
      chooseModelList.classList.remove("basic-settings__dropdown__list_vivsible");
    });
  });

  document.addEventListener("click", function (e) {
    if (e.target !== chooseModelButton) {
      chooseModelList.classList.remove("basic-settings__dropdown__list_vivsible");
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Tab" || e.key === "Escape") {
      chooseModelList.classList.remove("basic-settings__dropdown__list_vivsible");
    }
  });
});

/* ==================== POSITIONS ================= */

const choosePositionButton = document.querySelector(".positions__dropdown__button"),
  choosePositionList = document.querySelector(".positions__dropdown__list"),
  positionListItems = document.querySelectorAll(".positions__dropdown__list_item"),
  listItemsImages = document.querySelectorAll(".positions__dropdown__list_item-image");

choosePositionButton.addEventListener("click", function () {
  choosePositionList.classList.toggle("positions__dropdown__list_visible");
});

document.addEventListener("click", function (e) {
  if (e.target !== choosePositionButton) {
    choosePositionList.classList.remove("positions__dropdown__list_visible");
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Tab" || e.key === "Escape") {
    choosePositionList.classList.remove("positions__dropdown__list_visible");
  }
});

positionListItems.forEach(function (item) {
  item.addEventListener("click", function () {
    choosePositionButton.innerText = this.title;
  });
});

/* ==================== EMOTION ================= */

const chooseEmotionButton = document.querySelector(".emotion__dropdown__button"),
  chooseEmotionList = document.querySelector(".emotion__dropdown__list"),
  emotionTableItems = document.querySelectorAll(".emotion__dropdown__list_item");

chooseEmotionButton.addEventListener("click", function () {
  console.log("Emotion");
  chooseEmotionList.classList.toggle("emotion__dropdown__list_visible");
});

document.addEventListener("click", function (e) {
  if (e.target !== chooseEmotionButton) {
    chooseEmotionList.classList.remove("emotion__dropdown__list_visible");
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Tab" || e.key === "Escape") {
    chooseEmotionList.classList.remove("emotion__dropdown__list_visible");
  }
});

emotionTableItems.forEach(function (item) {
  item.addEventListener("click", function () {
    chooseEmotionButton.innerText = this.title;
  });
});

/* ================== change colour slider ==================== */

const allSlider = document.querySelectorAll(".slider")

setColorForSlider();

function setColorForSlider() {
  allSlider.forEach(slider => {
    let value = slider.value;
    slider.style.background = `hsl(175, ${value}%, ${70 - value / 3}%)`
  });
}

allSlider.forEach(slider => {
  slider.addEventListener("input", (event) => {
    let value = event.target.value;
    slider.style.background = `hsl(175, ${value}%, ${70 - value / 3}%)`
  });
});

let slider = document.querySelector("#realism");
let sliderOutput = document.querySelector("#slider-value-realism");
connectSliderAndOutput(slider, sliderOutput);

slider = document.querySelector("#futurism");
sliderOutput = document.querySelector("#slider-value-futurism");
connectSliderAndOutput(slider, sliderOutput);

slider = document.querySelector("#cyberpank");
sliderOutput = document.querySelector("#slider-value-cyberpank");
connectSliderAndOutput(slider, sliderOutput);

slider = document.querySelector("#steampunk");
sliderOutput = document.querySelector("#slider-value-steampunk");
connectSliderAndOutput(slider, sliderOutput);

slider = document.querySelector("#anime");
sliderOutput = document.querySelector("#slider-value-anime");
connectSliderAndOutput(slider, sliderOutput);

slider = document.querySelector("#fantasy");
sliderOutput = document.querySelector("#slider-value-fantasy");
connectSliderAndOutput(slider, sliderOutput);

slider = document.querySelector("#disney");
sliderOutput = document.querySelector("#slider-value-disney");
connectSliderAndOutput(slider, sliderOutput);

slider = document.querySelector("#coubism");
sliderOutput = document.querySelector("#slider-value-coubism");
connectSliderAndOutput(slider, sliderOutput);

slider = document.querySelector("#aquarelle");
sliderOutput = document.querySelector("#slider-value-aquarelle");
connectSliderAndOutput(slider, sliderOutput);

slider = document.querySelector("#streetArt");
sliderOutput = document.querySelector("#slider-value-streetArt");
connectSliderAndOutput(slider, sliderOutput);

slider = document.querySelector("#oil");
sliderOutput = document.querySelector("#slider-value-oil");
connectSliderAndOutput(slider, sliderOutput);

slider = document.querySelector("#plan");
sliderOutput = document.querySelector("#slider-value-plan");
connectSliderAndOutput(slider, sliderOutput);

slider = document.querySelector("#bokeh");
sliderOutput = document.querySelector("#slider-value-bokeh");
connectSliderAndOutput(slider, sliderOutput);

slider = document.querySelector("#myRange");
sliderOutput = document.querySelector("#slider-value-myRange");
connectSliderAndOutput(slider, sliderOutput);

function connectSliderAndOutput(slider, output) {
  slider.addEventListener("input", (item) => {
    let value = item.target.value;
    output.innerHTML = value;
 })
}


