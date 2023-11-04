// schema for the inventory

const mongoose=require("mongoose")

const inventorySchema= new mongoose.Schema({
    carModel: {
        type: String,
        required: true,
      },
      kmsOnOdometer: Number,
      majorScratches: String,
      originalPaint: Boolean,
      accidentsReported: Number,
      previousBuyers: Number,
      registrationPlace: String,
})

const Inventory=mongoose.model("Inventory",inventorySchema)

module.exports=Inventory