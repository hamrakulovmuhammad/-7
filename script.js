let cars = [5000, 7000, 8000, 11000, 12000, 16000, 20000, 22000, 28000, 45000, 55000, 80000,]
let form = prompt("from").trim()
let upto = prompt("upto").trim()

let arr = cars.filter(function (elem) {
    return elem >= form && elem <= upto
})
alert(arr)

let ask = confirm("Хотите ли вы купить машину")

if (ask === true) {
    let balace = 70000
    alert("Ваш бланс 70000 $")
    let ask2 = prompt("Какую машину вы выбрали?")
    if (ask2 <= balace) {
        alert("Вы потратили" + " " + ask2 + " $")
        alert(balace - ask2 + "$" + " " + "Осталось на вашем счету")
    } else {
        alert("Увас не достаточно средств")
    }

} else {
    ("Хорошо счастливой дороги доиой без мошины")
}


