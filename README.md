# WMP2-Back-End
Back End for Water My Plants App

#Endpoints 

#TO GET ALL PLANTS FOR THE USER provide user's id to the endpoint
api/usersunp/:userId/plants - GET PLANTS for this user, POST PLANTS for this user

#TO GET ONE PLANT BY ITS ID, DELETE IT, EDIT IT provide PLANT's id to the endpoint
/api/plantsunp/:plantId PUT, DELETE, GET - ONE INDIVIDUAL plant

#TO POST A PLANT provide these fields

          { name: "Devils Ivy", 
          description: "Water every 10-14 days.", 
          characteristic: "Indoor", 
          lastWater: "2019-02-03", 
          nextWater: "2019-02-13" ,
          img_url: "https://i.etsystatic.com/14070533/r/il/72a525/1131253995/il_570xN.1131253995_jn9i.jpg" }

#TO REGISTER A USER POST REQUEST TO
api/register 

 { username: "JohnyA", password: "1234", email: "johny@gmail.com", phone: "2155452121" }


#TO login A USER POST REQUEST TO
api/login

 { username: "JohnyA", password: "1234"}
