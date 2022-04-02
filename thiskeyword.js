"use strict";
// console.log(this);
// const calcAhe = function (birthYear) {
//   console.log(2022 - birthYear);
//   console.log(this);
// };

// calcAhe();
// const calcAheARR = (birthYear) => {
//   console.log(2022 - birthYear);
//   console.log("this in arrow", this);
//   //   const reg = function () {
//   //     console.log("reg inside arrow func", this);
//   //   };
//   //   reg();
// };
// calcAheARR(1998);
// // this key word will binfd the object that is calling the methods beacaouse the jhons is the object calling that methods
// const jhonas = {
//   year: 1998,
//   calcAge: function () {
//     console.log(this);
//     console.log(2022 - this.year);
//   },
// };
// jhonas.calcAge();
// const med = {
//   year: 2017,
// };
// //  function borrowing
// med.calcAge = jhonas.calcAge;
// med.calcAge(); // this  will be pointing to the  the object on which it is beign called and all thoug calcAge is written on jhon object it will still point on med calAge as this alwasy point to the objet on which it is called
// const f = jhonas.calcAge; // creating and assigning to regular function theere fore it will have undefinrd value for this
// f();

const jhonas2 = {
  year: 1994,
  calcAge: function () {
    console.log(this);
    console.log(2022 - this.year);
    // issue throw error as we
    const isMellArr = function () {
      console.log("mellinium", this.year >= 1981 && this.year <= 1996);
    };
    isMellArr();

    // sol2
    const isMell2 = function () {
      console.log("mellinium", self.year >= 1981 && self.year <= 1996);
    };
    isMell2();

    // sol 2
    const isMell = () => {
      console.log("mellinium", this.year >= 1981 && this.year <= 1996);
    };
    isMell();
    self = this; // ot that
  },
  greet: () => {
    console.log(this);
    console.log(2022 - this.year);
  },
};
jhonas2.greet(); // it wiill point to windown objetcs
jhonas2.calcAge();
