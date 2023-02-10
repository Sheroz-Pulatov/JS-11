
let cars = [
    {
        id: Math.random(),
        company: 'bmw',
        model: 'm5',
        engine: 5,
        color: 'black',
        price: 110000,
        year: 2019,
        image: ""
    },
    {
        id: Math.random(),
        company: 'mersedes benz',
        model: 'gt63s Amg',
        engine: 6.3,
        color: 'black',
        price: 360000,
        year: 2022,
    },
    {
        id: Math.random(),
        company: 'chevrollette',
        model: 'camaro',
        engine: 4,
        color: 'white',
        price: 90000,
        year: 2018,
    },
    {
        id: Math.random(),
        company: 'rolls-royce',
        model: 'ghost',
        engine: 5,
        color: 'blue',
        price: 800000,
        year: 2023,
    },
    {
        id: Math.random(),
        company: 'ferrari',
        model: 'spider',
        engine: 6,
        color: 'red',
        price: 2500000,
        year: 2015,
    },
    {
        id: Math.random(),
        company: 'mclaren',
        model: 'sena',
        engine: 5.6,
        color: 'yellow',
        price: 3000000,
        year: 2022,
    },
    {
        id: Math.random(),
        company: 'mersedes benz',
        model: 'e200 4matic sedan',
        engine: 6,
        color: 'black',
        price: 400000,
        year: 2022
    },
    {
        id: Math.random(),
        company: 'mersedes-Benz',
        model: 's500 4matic',
        engine: 5,
        color: 'white',
        price: 30000,
        year: 2021
    },
    {
        id: Math.random(),
        company: 'mersedes benz',
        model: 'gle 450 4matic',
        engine: 6,
        color: 'white',
        price: 160000,
        year: 2022
    },
]
let wel = alert('Вас приветствует Автосалон --UBBA--');
let from = +prompt('Назовите сумму (от) какой суммы хотитк приобрести автомобиль ! ').trim();
let up = +prompt('Теперь назовите (до) какой суммы нужен вам автомобиль !').trim();

let filtered = cars.filter(car => {

    if (car.price >= from && car.price <= up) {
        return car
    }
});

if (filtered.length !== 0) {
    let names = filtered.map(car => {
        return car.company + " - " + car.model
    })
    let isAgree = prompt(`Автомобили на вашу сумму: ${names} если хотите отменить нажмите "cancel"`).trim().toLowerCase();
    if (isAgree === 'cancel') {
        alert('Вы отменили заказ удачи приходите еще --UBBA--');
    } else if (selectedCar = filtered.find(car => car.model === isAgree)) {
        let toBuy = confirm(`
            Ваша машина
            Компания: ${selectedCar.company}
            Модель: ${selectedCar.model}
            Объем двигателя: ${selectedCar.engine}
            Цвет: ${selectedCar.color}
            Год выпуска: ${selectedCar.year}
            Цена с учетем ндс: ${selectedCar.price}
        `)
        if (toBuy === true) {
            let cashOut = +prompt(`К оплате ${selectedCar.price} долларов`)
            if (cashOut === selectedCar.price) {
                alert('Поздравляем с покупкой новой машины')
            } else if (cashOut > selectedCar.price) {
                let returnBack = cashOut - selectedCar.price
                alert('Поздравляем с покупкой новой машины. Ваша сдача ' + returnBack)
            } else if (cashOut < selectedCar.price) {
                let needSum = selectedCar.price - cashOut
                alert("Вы не доплатили вы еще должны: " + needSum)
                let needSumBuy = confirm( "Если хотите оплатить то нажмите (ок)");
                if (needSumBuy === true) {
                    let needCashOut = +prompt(`К оплате ${needSum} долларов`)
                    if (needSum === needCashOut) {
                        alert('Поздравляем с новой машиной!')
                    } else if (needSum < needCashOut) {
                        let PayCashSum = needCashOut - needSum;
                        alert('Поздравляем с покупкой новой машины. Ваша сдача ' + PayCashSum)
                    } else if (needSum > needCashOut) {
                        let needSuma = needSum - needCashOut
                        alert("Вы не доплатили вы еще должны: " + needSum )
                        let needSumBuy = confirm( "Если хотите оплатить то нажмите (ок)");
                        if (needSumBuy === true) {
                            let CashPayTwo = +prompt(`К оплате ${needSuma} долларов`)
                            if (needSuma === CashPayTwo) {
                                alert('Поздравляем с новой машиной!')
                            } else if (needSuma < CashPayTwo) {
                                let PaySumCash = CashPayTwo - needSuma;
                                alert('Поздравляем с покупкой новой машины. Ваша сдача ' + PaySumCash)
                            } else if (needSuma > CashPayTwo) {
                                let needSumb = needSuma - CashPayTwo
                                alert("Вы не доплатили вы еще должны: " + needSumb)
                                let needSumBuy = confirm("Если хотите оплатить машину то нажмите (ок)");
                                if (needSumBuy === true) {
                                    let cashpay = +prompt(`К оплате ${needSumb} долларов`)
                                    if (needSumb === cashpay) {
                                        alert('Поздравляем с новой машиной!')
                                    } else if (needSumb < cashpay) {
                                        let NoCash = cashpay - needSumb;
                                        alert('Поздравляем с покупкой новой машины. Ваша сдача ' + NoCash)
                                    } else if (needSumb > cashpay) {
                                        alert('Вы были подозрительны в обмане системы пока!')
                                    } else {
                                        alert('Вы были подозрительны в обмане системы пока!')
                                    }
                                } else {
                                    alert('Вы были подозрительны в обмане системы пока!')
                                }
                            }
                        } else {
                            alert('Вы были подозрительны в обмане системы пока!')
                        }
                    } else {
                        alert('Вы были подозрительны в обмане системы пока!')
                    }
                } else {
                    alert('Вы были подозрительны в обмане системы пока!')
                }
            } else {
                alert('Вы были подозрительны в обмане системы пока!')
            }
        } else if (toBuy === false) {
            alert('Вы отменили заказ')
        }
    } else {
        alert('Вы отменили заказ')
    }
} else {
    alert('На эту сумму нет машин ожидайте пока !')
}