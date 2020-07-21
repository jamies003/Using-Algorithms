
function updateCarCollection (cars, newVehicle) {

  if (cars.indexOf(newVehicle) === -1) {
      cars.push(newVehicle);
      console.log("New cars collection is : " + newVehicle);
  } else if (cars.indexOf(newVehicle) > -1) {
      console.log(newVehicle + " already exists in the cars collection.");
  }
}

var cars = ["Bently", "Range Rover", "G-Waggon", "Porse"];

updateCarCollection(cars, "Benz", "Lexus"); 
// New cars collection is : Bently,Range Rover,G-Waggon,Porse,Benz
updateCarCollection(cars, "Benz", "Lexus"); 
// Benz already exists in the cars collection.