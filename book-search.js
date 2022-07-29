const thumbnailTr = document.querySelector("#book-thumbnail");
const titleTr = document.querySelector("#book-title");
const authorsTr = document.querySelector("#book-authors");
const priceTr = document.querySelector("#book-price");

const thumbnail = document.getElementById("book-thumbnail");
const title = document.getElementById("book-title");
const authors = document.getElementById("book-authors");
const price = document.getElementById("book-price");

const bookSearchBtn = document.getElementById("bookSearch-btn");
const preBtn = document.getElementById("pre-btn");
const nextBtn = document.getElementById("next-btn");

const searchQuery = document.getElementById("search-query");

const totalResult = document.getElementById("total-result");

const tableBody = document.getElementById("table-body");

let pageNo = 1;

let isEnd = false;

function callBook() {
    let query = searchQuery.value;
    fetch(`https://dapi.kakao.com/v3/search/book?target=title&query=${query}&page=${pageNo}`, {
        method: "POST",
        headers: new Headers({
            "Authorization": "KakaoAK 9bdeb89ad0d0d9a5005ab4be2aca0029",
        }),
    })
        .then((response) => response.json())
        .then((data) => {
            makeResult(data);
        })
}

function makeResult(data) {
    let result = data.documents;
    let meta = data.meta;
    for (let i = 0; i < result.length; i++) {
        let tableRow = document.createElement("tr");
        tableBody.appendChild(tableRow);

        let thumbnailCell = document.createElement("td");
        let thumbnail = document.createElement("img");
        thumbnail.src = result[i].thumbnail;
        thumbnailCell.appendChild(thumbnail);

        let titleCell = document.createElement("td");
        titleCell.innerText = result[i].title;

        let authorCell = document.createElement("td");
        authorCell.innerText = result[i].authors;
        let priceCell = document.createElement("td");
        priceCell.innerText = result[i].sale_price;

        tableRow.appendChild(thumbnailCell);
        tableRow.appendChild(titleCell);
        tableRow.appendChild(authorCell);
        tableRow.appendChild(priceCell);

    }
    totalResult.innerText = `총 검색건수 : ${meta.total_count}`;
    isEnd = meta.is_end;
}

function callPrePage() {
    if (pageNo === 1) {
        alert("첫페이지 입니다.");
    } else {
        pageNo -= 1;
        resetList();
        callBook();
    }
}

function callNextPage() {
    if (isEnd) {
        alert("마지막 페이지 입니다.")
    } else {
        pageNo += 1;
        resetList();
        callBook();
    }
}

function resetList() {
    while (tableBody.hasChildNodes()) {
        tableBody.removeChild(tableBody.firstChild);
    }
}

bookSearchBtn.addEventListener("click", callBook);
preBtn.addEventListener("click", callPrePage);
nextBtn.addEventListener("click", callNextPage);
