const btnEl = document.getElementById("btn");
const birthdayEle = document.getElementById("birthday");
const currentDate = new Date();
const result = document.getElementById("result")
function calculateAge () {
    const bvalue = birthdayEle.value;
    if (bvalue === "") {
       alert("Please enter your birthday")
    } else {
        const age = getAge(bvalue);
        result.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
   }
}
function getAge (bvalue) {
    const currentDate = new Date();
    const bDate = new Date(bvalue);
    let age = currentDate.getFullYear() - bDate.getFullYear();
    const month = currentDate.getMonth() - bDate.getMonth();
    if (month < 0 || (month === 0 && currentDate.getDate() < bDate.getDate())) {
        age--;
    }

    return age
}
btnEl.addEventListener("click",calculateAge);


