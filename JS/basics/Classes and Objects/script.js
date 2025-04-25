class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  viewData() {
    console.log(`Name: ${this.name}, Email: ${this.email}`);
  }
}

class Admin extends User {
  constructor(name, email) {
    super(name, email);
  }

  editData(name, email) {
    this.name = name;
    this.email = email;
  }
}
