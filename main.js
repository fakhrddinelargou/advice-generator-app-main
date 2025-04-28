function btn() {
  async function getAdvice() {
    const data = await getData();
    console.log(data.slip.id);
    document.getElementById("id").innerHTML = data.slip.id;
    document.getElementById("advice").innerHTML = data.slip.advice;
  }

  getAdvice();
}

async function getData() {
  const response = await fetch("https://api.adviceslip.com/advice");
  const dataJson = await response.json();
  return dataJson;
}

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
