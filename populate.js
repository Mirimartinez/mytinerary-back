require('dotenv').config()
const db = require('./config/database') 

const CityModel = require("./models/City.js")


CityModel.create({
    city: "New York",
    country:"United States",
    photo:"https://estaticos.muyinteresante.es/uploads/images/test/60b4a8d15cafe819e843397a/empire-state-redes.jpg",
    population:18867000,
    foundation:1624,
    description: "New York, often called New York City (NYC) to distinguish it from the State of New York, is the most populous city in the United States. With a 2020 population of 8,804,190 distributed over 300.46 square miles (778.2 km2), New York City is also the most densely populated major city in the United States. Located at the southern tip of New York State, the city is the center of the New York metropolitan area, the largest metropolitan area in the world by urban landmass.[9] With over 20.1 million people in its metropolitan statistical area and 23.5 million in its combined statistical area as of 2020, New York is one of the world's most populous megacities. New York City is a global cultural, financial, and media center with a significant influence on commerce, entertainment, research, technology,[10] education, politics, tourism, dining, art, fashion, and sports. New York is the most photographed city in the world.[11] Home to the headquarters of the United Nations, New York is an important center for international diplomacy,[12][13] an established safe haven for global investors,[14] and is sometimes described as the capital of the world."
},
)