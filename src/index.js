import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
let dragon = {
  name: "thi",
  fire: true,
  fight() {
    return 5;
  }
};
console.log(dragon.fight());

let lizard = {
  name: "lizard",
  fight() {
    return 1;
  }
};
lizard.__proto__ = dragon;

console.log(lizard.name);
