require('dotenv').config()
const db = require('./config/database') 

const ItineraryModel = require("./models/City.js")


ItineraryModel.create(
    {
    name:"Top of the rock observation deck",
    user:"Anne Hathaway",
    city:"New York",
    price:"34",
    likes:[],
    tags:[skyline, view, NewYork, topOfTheRock, photography],
    duration:"25"
},
{
    name:"Staten Island Ferry",
    user:"Dwayne Johnson",
    city:"New York",
    price:"30",
    likes:[],
    tags:[statenIsland, statueOfLiberty, siny, statenIslandFerry],
    duration:"2"
},
{
    name:"One World Observatory",
    user:"Steven Tyler",
    city:"New York",
    price:"38",
    likes:[],
    tags:[worldTradeCenter, wtc, manhattan, freedomTower, twintowers],
    duration:"20"
},
{
    name:"Visit to the Eiffel Tower",
    user:"Anne Hathaway",
    city:"Paris",
    price:"26",
    likes:[],
    tags:[eiffelTower, paris, tourEiffel, parismonamour, visitparis],
    duration:"45"
},
{
    name:"The Louvre tour",
    user:"Anne Hathaway",
    city:"Paris",
    price:"15",
    likes:[],
    tags:[louvre, louvremuseum, museedulouvre, parisjetaime],
    duration:"1"
},
{
    name:"Ride the London Eye",
    user:"Dwayne Johnson",
    city:"London",
    price:"27",
    likes:[],
    tags:[londoneye, londonlife, visitlondon, londonbridge,londoncity],
    duration:"40"
},
{
    name:"Westminster Abbey",
    user:"Steven Tyles",
    city:"London",
    price:"24",
    likes:[],
    tags:[westminsterabbey, westminster, england, westminsterpalace],
    duration:"30"
},
{
    name:"Full-Day Mount Fuji and Kawaguchi Lake Tour with Lunch",
    user:"Anne Hathaway",
    city:"Tokyo",
    price:"65",
    likes:[],
    tags:[mountfuji, tokyo, japan, kawaguchi, laketour, lovingtokyo],
    duration:"11"
},
{
    name:"Universal Studios Hollywood",
    user:"Dwayne Johnson",
    city:"Los Angeles",
    price:"118",
    likes:[],
    tags:[universalstudios, hollywood, harrypotter, themepark, vacation],
    duration:"9"
},
{
    name:"Isla Mujeres Catamaran Tour",
    user:"Steven Tyler",
    city:"Cancun",
    price:"60",
    likes:[],
    tags:[cancun, mexico, tulum, cancunmexico, beach, rivieramaya],
    duration:"10"
},
{
    name:"Royal Palace Guided Tour",
    user:"Dwayne Johnson",
    city:"Turin",
    price:"55",
    likes:[],
    tags:[turin, italy, torinotoday, architecture],
    duration:"2"
}
)