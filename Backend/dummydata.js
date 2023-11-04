const { OEMSpecs } = require('./models/oemSpecsModel');
const { Inventory } = require('./models/inventoryModel');

const insertDummyData = async () => {
  try {
   
    await OEMSpecs.insertMany([
      {
        modelName: 'Honda City 2015',
        yearOfModel: 2015,
        listPrice: 20000,
        availableColors: ['White', 'Silver', 'Black'],
        mileage: 30,
        powerInBHP: 120,
        maxSpeed: 160,
      },
    
    ]);

 
    await Inventory.insertMany([
      {
        carModel: 'Honda Civic',
        kmsOnOdometer: 50000,
        majorScratches: 'Minor scratches on the rear bumper',
        originalPaint: true,
        accidentsReported: 0,
        previousBuyers: 1,
        registrationPlace: 'New York',
      },
      
    ]);

    console.log('Dummy data inserted successfully');
  } catch (error) {
    console.error('Error inserting dummy data:', error);
  }
};

module.exports = { insertDummyData };
