class Uber {
    constructor(carModel, carType, color, registrationNumber) {
      this.carModel = carModel;
      this.carType = carType;
      this.color = color;
      this.registrationNumber = this.registrationNumber
    }
  
    getPrice(distance, demandPrice, pricePerKm) {
      return  `The price is ${pricePerKm * distance * demandPrice}`;
    }
  }
  
  var myCar = new Uber("Ertiga", "Sedan", "Brown","2218")
  console.log(myCar.carModel);
  console.log(myCar.getPrice(18, 2, 20));