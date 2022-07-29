// // 배열
// // let member = ["박병호", "도인정", "토사장", "수베로"];


// // 객체
// // 객체는 키값과 , 밸류값으로 이루어져 있음.

// // let members = { 멤버: member, 총인원: member.length, 지금시간: new Date() };
// // console.log(members);

// // let member = ["박병호", "도인정"];
// // member.push("헬로");
// // console.log(member);

const usernameTr = document.querySelector("#username");
const ageTr = document.querySelector("#age");
const phoneTr = document.querySelector("#phone");
const addPerson = document.querySelector("#addPerson");

const usernameInput = document.getElementById("username");
const ageInput = document.getElementById("age");
const phoneInput = document.getElementById("phone");

function addMemeber() {
    let member = { username: "", age: "", phone: "" };
    member.username = usernameInput.value;
    member.age = ageInput.value;
    member.phone = phoneInput.value;
    // console.log(member.username);
    // console.log(member.age);
    // console.log(member.phone);

    const newRow = document.getElementById("tableBody").insertRow();
    const usernameCell = newRow.insertCell();
    usernameCell.innerHTML = member.username;
    const ageCell = newRow.insertCell();
    ageCell.innerHTML = member.age;
    const phoneCell = newRow.insertCell();
    phoneCell.innerHTML = member.phone;
}

addPerson.addEventListener("click", addMemeber);



