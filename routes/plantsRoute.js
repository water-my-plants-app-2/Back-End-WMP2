const db = require('../config/dbConfig.js');
const express = require('express');
const router = express.Router();
const helpers = require('../helpers/plantsHelper.js');

router.get('/', (req, res) => {
    res.send("Plants route");
});

router.get('/:id', helpers.protected, async (req, res) => {
  try {
      const {id} = req.params;
      const plant = await db('plants').where({id}).first();
      if(plant){
          res.status(200).json(plant);
      } else {
          res.status(401).json({message: "The plant with provided id was not found in the data base"});
      }

  } catch(err) {
      res.status(500).json({message: "There was en error trying to connect to the data base, please try again"});
  }
});

router.delete('/:id', helpers.protected, async(req, res) => {
    try {
        const {id} = req.params;
        const plantCount = await db('plants').where({id}).delete();
        if(!plantCount || plantCount < 1){
            res.status(404).json({message: "Plant was not found to be removed"})
        } else{
            res.status(200).json(plantCount);
        }
    }
    catch (err) {
        res.status(500).json({message: "There was an error while trying to delete a plant from the data base"});
    }
}); 


router.put('/:id', helpers.protected, async(req, res) => {
    try {
        const {id} = req.params;
        const changes = req.body;
        if(changes.name && changes.description) {
            const updatedPlant = await db('plants').where({id}).update(changes);
            if(updatedPlant) {
                res.status(200).json(updatedPlant);
            } else {
                res.status(401).json({message: "The plant with provided id was not found"});
            }
        }
    }
    catch(err){
        res.status(500).json({message: "There was an error while trying to update a plant in the data base"});
    }
});



module.exports = router; 