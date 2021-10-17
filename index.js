"use strict";
const autoModelInput = document.getElementById("model");
const autoDateInput = document.getElementById("date");
const autoColorInput = document.getElementById("color");
const autoFuelInput = document.getElementById("fuel");
//const autoFuelListInput = document.getElementById("fuelList");
const addButton = document.getElementById("save");
const carList = document.getElementById('list');
const modelUpdateInput = document.getElementById("updateModel");
const dateUpdateInput = document.getElementById("updateDate");
const colorUpdateInput = document.getElementById("updatecolor");
const fuelUpdateInput = document.getElementById("updateFuel");
let updateCar; //Atnaujinamo automobilio Objektas
var KuroTipas;
(function (KuroTipas) {
    KuroTipas[KuroTipas["Dyzelis"] = 0] = "Dyzelis";
    KuroTipas[KuroTipas["Benzinas"] = 1] = "Benzinas";
})(KuroTipas || (KuroTipas = {}));
class Car {
    constructor(model, date, color, fuel) {
        this.model = model;
        this.color = color;
        this.date = new Date(date);
        this.fuel = +fuel;
        this.id = Math.round(Math.random() * 1000);
    }
    printCar(element) {
        // element.innerHTML += `${this.model}`
        element.innerHTML += `<div class="entry">
                <div class="entry_parameter">${this.model}</div>
                <div class="entry_parameter">${this.date.toISOString().slice(0, 10)}</div>
                <div class="entry_parameter">${this.color}</div>
                <div class="entry_parameter">${KuroTipas[this.fuel]}</div>
                <div class="actions">
                    <img class="edit" onclick='onUpdateCar(${this.id})' src='./img/edit.png' alt="Atnaujinti">
                    <img class="delete" src="./img/delete.png" alt="Istrinti">
                </div>
            </div>`;
    }
}
const autoParkas = [];
addButton === null || addButton === void 0 ? void 0 : addButton.addEventListener('click', (e) => {
    const car = new Car(autoModelInput.value, autoDateInput.value, autoColorInput.value, autoFuelInput.value);
    console.log('Mygtukas paspaustas!');
    autoParkas.push(car);
    publishCars();
});
function publishCars() {
    carList.innerHTML = '';
    for (const car of autoParkas) {
        car.printCar(carList);
        console.log(car.model);
    }
}
function onUpdateCar(id) {
    for (const car of autoParkas) {
        if (id === car.id) {
            updateCar = car;
        }
    }
    console.log(updateCar);
    populateUpdateForm();
}
function populateUpdateForm() {
    modelUpdateInput.value = updateCar.model;
    dateUpdateInput.value = updateCar.date;
    colorUpdateInput.value = updateCar.color;
    fuelUpdateInput.value = updateCar.fuel;
}
