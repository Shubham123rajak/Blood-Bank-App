const express = require('express')
const authMiddelware = require('../middlewares/authMiddelware')
const { createInventoryController, getInventoryController, getDonarsController, getHospitalController,
    getOrgnaisationController, getOrgnaisationForHospitalController, getInventoryHospitalController, getRecentInventoryController } = require('../controllers/inventoryController')

const router = express.Router()

//routes
//ADD INVENTORY || POST
router.post('/create-inventory', authMiddelware, createInventoryController);

//GET ALL BLOOD RECORDS
router.get('/get-inventory', authMiddelware, getInventoryController);
//GET Hospital-BLood RECORDS
router.post('/get-inventory-hospital', authMiddelware, getInventoryHospitalController);
//GET ALL Donar RECORDS
router.get('/get-donars', authMiddelware, getDonarsController);
//GET ALL Hospital RECORDS
router.get('/get-hospitals', authMiddelware, getHospitalController);
//GET ALL Organisation RECORDS
router.get('/get-organisation', authMiddelware, getOrgnaisationController);
//GET ALL Organisation RECORDS
router.get('/get-organisation-for-hospital', authMiddelware, getOrgnaisationForHospitalController);
//GET Recent Blood RECORDS
router.get('/get-recent-inventory', authMiddelware, getRecentInventoryController);

module.exports = router