'use strict';

// Транспортное средство - базовый конструктор
function Vehicle(options) {
  this.name = options.name;
  this.type = options.type;
  this.speed = options.speed;
  this.units = options.units;
  this.wheel = 4; // значение по умолчанию
}
// Метод родительского конструктора
Vehicle.prototype.getInfo = function () {
  console.log(
    `     Тип: ${this.type},
     Наименование: ${this.name},
     Скорость: ${this.speed} ${this.units}
     Кол-во колёс: ${this.wheel}`
  );
};

// Дочернии конструкторы
// Автомобиль
function Car(options) {
  Vehicle.apply(this, arguments);
  this.name = options.name;
  this.type = options.type;
  this.speed = options.speed;
  this.units = options.units;
  this.clearance = options.clearance;
}
// Прототипное наследование от Vehicle
Car.prototype = Object.create(Vehicle.prototype);
// Констркутор для Car
Car.prototype.constructor = Car;

// Переопределение родительского метода
Car.prototype.getInfo = function () {
  console.log(
    `     Тип: ${this.type},
     Наименование: ${this.name}, 
     Скорость: ${this.speed} ${this.units}, 
     Дорожный просвет: ${this.clearance} мм
     Кол-во колёс: ${this.wheel}`
  );
};

// Самолёт
function Plane(options) {
  Vehicle.apply(this, arguments);
  this.wheel = options.wheel;
}

Plane.prototype = Object.create(Vehicle.prototype);
Plane.prototype.constructor = Plane;

// Корабль
function Ship(options) {
  Vehicle.apply(this, arguments);
  this.wheel = options.wheel;
}

Ship.prototype = Object.create(Vehicle.prototype);
Ship.prototype.constructor = Ship;

// Экземпляры объектов
let car = new Car({
  name: 'Toyota',
  type: '🚗 автомобиль',
  speed: 270,
  units: 'км/ч',
  clearance: 210,
});

let plane = new Plane({
  name: 'Tу 134',
  type: '🛫 самолёт',
  speed: 546.8,
  units: 'миль/ч',
  wheel: 10,
});
let ship = new Ship({
  name: 'Аврора',
  type: '🛥️ крейсер',
  speed: 13,
  units: 'узлов',
  wheel: 'нет',
});

car.getInfo();
plane.getInfo();
ship.getInfo();
