// class elf {
//   constructor(name, power) {
//     this.name = name;
//     this.power = power;
//   }
//   attack() {
//     return `i am  ${this.name} my power is ${this.power}`;
//   }
// }

// // const person1 = new elf("kuku", "fire");

// // console.log(person1.attack());
// class per1 extends elf {
//   constructor(name, power,type) {
//     super(name, power);
//     this.type=type
//   }
// }

// const perk = new per1("sai", "gun", "dare");
// console.log(perk.attack());
let mull = [];
function mul(num) {
  for (let i = 0; i <= 10; i++) {
    mull.push(`${num} X ${i}= ${num * i}`);
  }
}
mul(5);
console.log(mull);

// for (let i=0; i<=10; i++){
//   console.log(5 *i)
// }
