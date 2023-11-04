
const mongoose= require('mongoose')

// schema for OEM specifications

const oemSpecsSchema= new mongoose.Schema({
    modelName:{
        type:String,
        required:true,
    },
    yearOfModel: {
        type: Number,
        required: true,
      },
      listPrice: Number,
      availableColors: [String],
      mileage: Number,
      powerInBHP: Number,
      maxSpeed: Number,
})

const OEMSpecs= mongoose.model('OEMSpecs',oemSpecsSchema)

module.exports={OEMSpecs}