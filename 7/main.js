'use strict';

// Транспортное средство - базовый класс
class Vehicle {
  constructor(options) {
    this.name = options.name;
    this.type = options.type;
    this.speed = options.speed;
    this.units = options.units;
    this.wheel = 4;
  }
  getInfo() {
    console.log(
      `       Тип: ${this.type},
       Наименование: ${this.name},
       Скорость: ${this.speed} ${this.units}
       Кол-во колёс: ${this.wheel}`
    );
  }
}

// Автомобиль, дочерний класс расширенный от Базового класса
class Car extends Vehicle {
  constructor(options) {
    super(options);
    this.name = options.name;
    this.type = options.type;
    this.speed = options.speed;
    this.units = options.units;
    this.clearance = options.clearance;
  }
  getInfo() {
    console.log(
      `       Тип: ${this.type},
       Наименование: ${this.name}, 
       Скорость: ${this.speed} ${this.units}, 
       Дорожный просвет: ${this.clearance} мм
       Кол-во колёс: ${this.wheel}`
    );
  }
}

// Самолёт, дочерний класс расширенный от Базового класса
class Plane extends Vehicle {
  constructor(options) {
    super(options);
    this.wheel = options.wheel;
  }
}

// Корабль, дочерний класс расширенный от Базового класса
class Ship extends Vehicle {
  constructor(options) {
    super(options);
    this.wheel = options.wheel;
  }
}

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
