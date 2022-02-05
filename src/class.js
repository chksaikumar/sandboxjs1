class names {
  constructor(name, num) {
    this.name = name;
    this.num = num;
  }
}

let per1 = new names("sai", "89");

console.log(per1);

class impo extends names {
  constructor(name, num, imp) {
    super(name, num);
    this.imp = imp;
  }
}
let impoe = new impo("Arun", "123", "*");

console.log(impoe);
