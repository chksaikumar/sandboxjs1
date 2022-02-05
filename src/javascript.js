// function fun(name, wepon) {
//   this.name = name;
//   this.wepon = wepon;
// }

// const person1 = new fun("saikumar", "fire");
// console.log(person1);
let car = [
  {
    color: "purple",
    type: "minivan",
    registration: new Date("2012-02-03"),
    capacity: 7
  },
  {
    color: "red",
    type: "mpv",
    registration: new Date("2012-02-03"),
    capacity: 4
  }
];
let res1 = null;
let result = car.forEach((ele) => {
  if (ele.capacity == 4) {
    res1 = ele.color;
  }
});
console.log(res1);

// class el {
//   constructor(name, wepon) {
//     (this.name = name), (this.wepon = wepon);
//   }
//   attack() {
//     return `this is ${this.name} and my wepon was ${this.wepon}`;
//   }

// }

// const per1 = new el("sai", "wepon");

// // console.log(per1);
