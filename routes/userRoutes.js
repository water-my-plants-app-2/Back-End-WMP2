const express = require("express");
const router = express.Router();
const helpers = require('../helpers/plantsHelper.js')
const db = require("../config/dbConfig");

// sanity check
router.get('/', async (req, res) => {
  const users = await db('users');
  res.status(200).json(users);
});

router.get("/:id/plants", helpers.protected, async (req, res) => {
  try {
    const id = req.params.id;
    const plants = await db('plants').where('userId', id);
    res.status(200).json({plants, decodedToken: req.decodedToken});

  } catch(err) {
    res.status(500).json({message: "There was an error trying to connect to the data base, please try again"});
  }
});

router.post('/:id/plants', helpers.protected, async(req, res) => {
  try {
      const newPlant = req.body;
      const id = req.params.id;
      if(newPlant.name && newPlant.description) {
          const addPlant = await db('plants').insert({...newPlant, userId: id});
          if(addPlant) {
              res.status(200).json(addPlant);
          } else {
              res.status(401).json({message: "The plant with provided id was not found"});
          }
      }
  }
  catch(err){
      res.status(500).json({message: "There was an error while trying to add a plant in the data base"});
  }
});

module.exports = router;
