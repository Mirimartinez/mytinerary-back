require('dotenv').config()
const db = require('./config/database') 

const UserModel = require("./models/City.js")


UserModel.create(
    {
        name:"Dwayne",
        lastName:"Johnson",
        mail:"dwayne.johnson@gmail.com",
        password:"theRock",
        photo:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Dwayne_Johnson_2%2C_2013.jpg/330px-Dwayne_Johnson_2%2C_2013.jpg",
        country:"United States"
    },
    {
        name:"Anne",
        lastName:"Hathaway",
        mail:"therealannehathaway@gmail.com",
        password:"princessPRADA",
        photo:"https://es.web.img2.acsta.net/pictures/19/10/16/01/22/0121805.jpg",
        country:"United States"
    },
    {
        name:"Steven",
        lastName:"Tyler",
        mail:"stevensmokingtyler@gmail.com",
        password:"AerosmithRocks!",
        photo:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Steven_Tyler_by_Gage_Skidmore_3.jpg/330px-Steven_Tyler_by_Gage_Skidmore_3.jpg",
        country:"United States"
    }
)