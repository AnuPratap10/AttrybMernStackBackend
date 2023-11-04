// routes/inventoryRoutes.js

const express = require('express');
const router = express.Router();
const inventoryController = require('../controllers/inventoryController');


// Define the route to add a new inventory entry
router.post('/', inventoryController.addInventory);
router.get('/',inventoryController.getAllInventory)
router.patch('/:id', inventoryController.updateInventory);
router.delete('/:id', inventoryController.deleteInventory);



module.exports = router;


// http://localhost:8080/api/oem-specs/search?model=Toyota%20Corolla&year=2018