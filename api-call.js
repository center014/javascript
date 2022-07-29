const image = document.getElementById("wine-image");
const title = document.getElementById("wine-title");
const rating = document.getElementById("wine-rating");
const wineLocation = document.getElementById("wine-location");
const wineReview = document.getElementById("wine-review");
const wineWinery = document.getElementById("wine-winery");
const pre = document.getElementById("pre-btn");
const next = document.getElementById("next-btn");

let wineIdx = 0;
let apiLength = 0;
let wineType = "reds";

function wineCall(wineIdx, wineType) {
    fetch("https://api.sampleapis.com/wines/" + wineType)
        .then((response) => response.json()
        )
        .then((data) => {
            console.log(data);
            let fileLength = data[wineIdx].image.length;
            let lastDot = data[wineIdx].image.lastIndexOf(".");
            let fileExt = data[wineIdx].image.substring(lastDot, fileLength).toLowerCase();

            if (fileExt === ".svg") {
                image.src = "./img/not-ready.jpg";
            } else {
                image.src = data[wineIdx].image;
            }
            if (data[wineIdx].location === "") {
                wineLocation.innerHTML = "정보없음";
            } else {
                wineLocation.innerHTML = data[wineIdx].location;
            }
            wineReview.innerHTML = data[wineIdx].rating.reviews;
            title.innerHTML = data[wineIdx].wine;
            rating.innerHTML = data[wineIdx].rating.average;
            if (data[wineIdx].winery === "") {
                wineWinery.innerHTML = "정보 없음";
            } else {
                wineWinery.innerHTML = data[wineIdx].winery;
            }
            apiLength = data.length;

        })
        .catch(() => {
            console.log("실패했습니다.");
        })
        .finally(() => {
        })

}

function preBtn() {
    if (wineIdx === 0) {
        alert("첫번째 와인입니다.");
    } else {
        wineCall(--wineIdx, wineType);
    }
}

function nextBtn() {
    if (wineIdx === apiLength - 1) {
        alert("마지막 입니다.")
    } else {
        wineCall(++wineIdx, wineType);
    }
}

const showValue = (target) => {
    wineType = target.value;
    wineCall(wineIdx, wineType);

}

pre.addEventListener("click", preBtn);
next.addEventListener("click", nextBtn);

wineCall(wineIdx, wineType);