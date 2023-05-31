// a class called car
class car {
  constructor(name, model, amount) {
    (this.carName = name), (this.carModel = model), (this.carAmount = amount);
  }
  // static method for gretting the customer
  static grettings() {
    console.log("Welcome to our showRoom!!!");
  }

  // normal method for getting car information
  carInfo() {
    console.log(
      `carName: ${this.carName} carModel: ${this.carModel} carAmount: ${this.carAmount}`
    );
  }
  // static method for saying thank you if car is bought then buying otherwise visiting
  static thankYou(bought) {
    bought
      ? console.log(
          "Have a great day Sir/Mam. Thank you for Buying from our ShowRoom!"
        )
      : console.log(
          "Have a great day Sir/Mam. Thank you for visiting our ShowRoom!"
        );
  }
}

// a class called person which extends cars
class person extends car {
  constructor(name, model, amount, personName, personCity, personPhone) {
    super(name, model, amount);
    this.personName = personName;
    this.personCity = personCity;
    this.personPhone = personPhone;
    this.bought = false;
  }
  // static method for asking for care
  static askingForCar() {
    console.log("Hii can you show me some cars?");
  }
  // method for getting person information
  getPersonInfo() {
    console.log(
      `Name: ${this.personName}, City: ${this.personCity}, Phone: ${this.personPhone}`
    );
  }
  // method for getting full information
  getFullInfo() {
    console.log("perosn Details:");
    this.getPersonInfo();
    console.log("Car Details:");
    super.carInfo();
  }
  // method for payment done
  donePayment() {
    this.bought = true;
    console.log("Payment Successful!!");
  }
}

// a main function that will call all of this
function buyCar() {
  person.askingForCar();
  car.grettings();
  const harshit = new person(
    "BMW",
    "BMW-5x",
    1200000,
    "harshit",
    "Ahmedabad",
    9157826711
  );
  harshit.carInfo();
  harshit.getFullInfo();
  harshit.donePayment();
  car.thankYou(harshit.bought);
}

// calling main function
buyCar();
