class adviceContent {
  constructor(Api , adviceId , adviceSlip) {
    this.apiEl = Api;
    this.adviceIdEl = document.getElementById("id");
    this.adviceSlipEl = document.getElementById("advice");
    console.log(this.adviceIdEl);
  }

  async  getAdvice() {
    const data = await this.getData();
    this.adviceIdEl.innerHTML = data.id;
    this.adviceSlipEl.innerHTML = data.advice;
  }

  async  getData() {
    const response = await fetch(this.apiEl);
    const dataJson = await response.json();
    console.log(dataJson);
    return dataJson.slip;
    
  }
}


const setting = new adviceContent(
  "https://api.adviceslip.com/advice"
  // ".id",
  // ".advice"
);




const media = matchMedia("(max-width:40rem)");
const imgs = document.getElementById("img");

function checkMedia(size) {
  if (size.matches) {
    imgs.src = "/images/pattern-divider-mobile.svg";
  } else {
    imgs.src = "/images/pattern-divider-desktop.svg";
  }
}
checkMedia(media);
media.addEventListener("change", checkMedia);
