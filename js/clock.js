
let isValidName = false;
let userName;

while (!isValidName) {
    userName = prompt("Lütfen isminizi girin:");
    
    if (/^[a-zA-Z]+$/.test(userName)) {
        isValidName = true;
        userName = userName.charAt(0).toUpperCase() + userName.slice(1);

    } else {
        alert("Lütfen sadece harflerden oluşan bir isim girin!");
    }
}

document.getElementById('myName').innerText = userName;

function showTime() {
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let day = date.getDay();
    let month = date.getMonth();
    let year = date.getFullYear();

    let days = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];
    let months = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'];

    let time = `${hour} : ${addZero(min)} : ${addZero(sec)}`;
    let currentDate = `${days[day]}, ${months[month]} ${year}`; 
    document.getElementById('myClock').innerHTML = time + ' ' + currentDate;
    setTimeout(showTime, 1000);
    // console.log('ShowTime çalıştı.');
}

function addZero(n) {
    return (parseInt(n, 10) < 10 ? "0" : "") + n;
}

showTime();
