const {OEMSpecs} = require("../models/oemSpecsModel");

exports.getAllOEMSpecs = async (req, res) => {
  try {
    const oemSpecs = await OEMSpecs.find();
    res.status(200).json(oemSpecs);
  } catch (error) {
    console.error("Error retrieving OEM specifications:", error);
    res.status(500).json({error: "Internal server error"});
  }
};

exports.addOEMSpecs = async (req, res) => {
  const {
    modelName,
    yearOfModel,
    listPrice,
    availableColors,
    mileage,
    powerInBHP,
    maxSpeed,
  } = req.body;

  try {
    const newOEMSpecs = new OEMSpecs({
      modelName,
      yearOfModel,
      listPrice,
      availableColors,
      mileage,
      powerInBHP,
      maxSpeed,
    });

    const savedOEMSpecs = await newOEMSpecs.save();
    res.status(201).json(savedOEMSpecs);
  } catch (error) {
    console.error("Error adding OEM specifications:", error);
    res.status(500).json({error: "Internal server error"});
  }
};

// Controller function to query the number of unique OEM models available
exports.queryOEMModelsCount = async (req, res) => {
  try {
    const uniqueModels = await OEMSpecs.distinct("modelName");
    const count = uniqueModels.length;
    res.json({count});
  } catch (error) {
    console.error("Error querying the number of OEM models available:", error);
    res.status(500).json({error: "Internal server error"});
  }
};

// Controller function to query the number of unique OEM models available

exports.searchOEMSpecs = async (req, res) => {
  const { model, year } = req.query;

  console.log("Searching for model:", model, "year:", year);

  try {
    const specs = await OEMSpecs.findOne({ modelName: model, yearOfModel: year });

    if (!specs) {
      console.log("Specifications not found for model:", model, "year:", year);
      return res.status(404).json({ error: "Specifications not found for the provided model and year." });
    }

    console.log("Found specifications:", specs);
    res.json(specs);
  } catch (error) {
    console.error("Error searching OEM specifications:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
