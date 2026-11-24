"use strict";

// 1. Получение свойства по ключу
function getProperty(object, key) {
  return object[key];
}

// 2. Количество свойств
function countProperties(object) {
  return Object.keys(object).length;
}

// 3. Сумма числовых свойств
function sumNumericProperties(object) {
  let sum = 0;

  for (const key in object) {
    if (typeof object[key] === "number") {
      sum += object[key];
    }
  }

  return sum;
}

// 4. Объект товара с методом
function createProduct(name, price, quantity) {
  return {
    name: name,
    price: price,
    quantity: quantity,
    getTotal() {
      return this.price * this.quantity;
    },
  };
}

// 5. Средний балл студента
function calculateAverageGrade(student) {
  if (student.grades.length === 0) {
    return 0;
  }

  let sum = 0;
  for (const grade of student.grades) {
    sum += grade;
  }

  return sum / student.grades.length;
}

// 6. Самый дорогой товар
function findMostExpensiveProduct(products) {
  if (products.length === 0) {
    return null;
  }

  let mostExpensive = products[0];

  for (const product of products) {
    if (product.price > mostExpensive.price) {
      mostExpensive = product;
    }
  }

  return mostExpensive;
}

module.exports = {
  getProperty,
  countProperties,
  sumNumericProperties,
  createProduct,
  calculateAverageGrade,
  findMostExpensiveProduct,
};