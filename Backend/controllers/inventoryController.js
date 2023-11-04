const Inventory = require("../models/inventoryModel");

// get request
exports.getAllInventory = async (req, res) => {
  try {
    const inventory = await Inventory.find();
    res.status(200).json(inventory);
  } catch (err) {
    console.error("Error retrieving inventory entries:", error);
    res.status(500).json({error: "Internal server error"});
  }
};

// post request/
exports.addInventory = async (req, res) => {
  try {
    const {
      carModel,
      kmsOnOdometer,
      majorScratches,
      originalPaint,
      accidentsReported,
      previousBuyers,
      registrationPlace,
    } = req.body;

    // Create a new Inventory entry
    const newInventoryEntry = new Inventory({
      carModel,
      kmsOnOdometer,
      majorScratches,
      originalPaint,
      accidentsReported,
      previousBuyers,
      registrationPlace,
    });

    // Save the new entry to the database
    const savedInventoryEntry = await newInventoryEntry.save();

    // Respond with a success status code and a JSON object
    res.status(201).json({
      message: "Inventory entry added successfully",
      inventory: savedInventoryEntry,
    });
  } catch (error) {
    console.error("Error adding inventory entry:", error);
    res.status(500).json({error: "Internal server error"});
  }
};

// Update an existing inventory entry by ID

exports.updateInventory = async (req, res) => {
  try {
    const {id} = req.params;
    const updateData = req.body;

    // Find the inventory entry by ID and update it
    const updatedInventoryEntry = await Inventory.findByIdAndUpdate(
      id,
      updateData,
      {
        new: true,
      }
    );

    if (!updatedInventoryEntry) {
      return res.status(404).json({error: "Inventory entry not found"});
    }
    res.json(updatedInventoryEntry);
  } catch (error) {
    console.error("Error updating inventory entry:", error);
    res.status(500).json({error: "Internal server error"});
  }
};

// Delete an inventory entry by ID
exports.deleteInventory = async (req, res) => {
  try {
    const {id} = req.params;

    const deletedEntry = await Inventory.findByIdAndDelete(id);

    if (!deletedEntry) {
      return res.status(404).json({error: "Inventory entry not found"});
    }

    res.status(200).json({message: "Inventory entry deleted successfully"});
  } catch (error) {
    console.error("Error deleting inventory entry:", error);
    res.status(500).json({error: "Internal server error"});
  }
};
