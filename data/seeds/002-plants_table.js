exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("plants")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("plants").insert([
        { userId: 4, 
          name: "Devils Ivy", 
          description: "Water every 10-14 days.", 
          characteristic: "Indoor", 
          lastWater: "2019-02-03", 
          nextWater: "2019-02-13" },

        { userId: 4, 
          name: "Devils Ivy", 
          description: "Water every 10-14 days.", 
          characteristic: "Indoor", 
          lastWater: "2019-02-03", 
          nextWater: "2019-02-13" },

        { userId: 4,  
          name: "Devils Ivy", 
          description: "Water every 10-14 days.", 
          characteristic: "Indoor", 
          lastWater: "2019-02-03", 
          nextWater: "2019-02-13" }
      ]);
    });
};

