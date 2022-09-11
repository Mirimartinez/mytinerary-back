require('dotenv').config()
const db = require('./config/database') 

const ItineraryModel = require("./models/City.js")


ItineraryModel.create(
    {
    name:"Top of the rock observation deck",
    user:"6319571d8f9f57ddc6a81f8c",
    city:"63103ae1c8ea1e725dfbd22c",
    price:34,
    likes:[35],
    tags:["skyline", "view", "NewYork", "topOfTheRock", "photography"],
    duration:2
},
{
    name:"Staten Island",
    user:"6319571d8f9f57ddc6a81f8c",
    city:"63103ae1c8ea1e725dfbd22c",
    price:30,
    likes:[14],
    tags:["statenIsland", "statueOfLiberty", "siny", "statenIslandFerry"],
    duration:4
},
{
    name:"One World Observatory",
    user:"6319571d8f9f57ddc6a81f8c",
    city:"63103ae1c8ea1e725dfbd22c",
    price:38,
    likes:[19],
    tags:["oneworld", "wtc", "manhattan", "freedomTower", "twintowers"],
    duration:3
},
{
    name:"Eiffel Tower",
    user:"631d024516daebe0c7bf858c",
    city:"63103ae1c8ea1e725dfbd231",
    price:26,
    likes:[],
    tags:["eiffelTower", "paris", "tourEiffel", "parismonamour", "visitparis"],
    duration:1
},
{
    name:"The Museum tour",
    user:"631d024516daebe0c7bf858c",
    city:"63103ae1c8ea1e725dfbd231",
    price:15,
    likes:[],
    tags:["louvre", "louvremuseum", "museedulouvre", "parisjetaime"],
    duration:2
},
{
    name:"Palace of Versailles",
    user:"631d024516daebe0c7bf858c",
    city:"63103ae1c8ea1e725dfbd231",
    price:0,
    likes:[],
    tags:["versailles", "versaillespalace", "paris", "parisjetaime"],
    duration:3
},
{
    name:"London Eye",
    user:"631d024516daebe0c7bf858c",
    city:"63103ae1c8ea1e725dfbd22f",
    price:27,
    likes:[],
    tags:["londoneye", "londonlife", "visitlondon", "londonbridge", "londoncity"],
    duration:2
},
{
    name:"Buckingham Palace",
    user:"631d024516daebe0c7bf858c",
    city:"63103ae1c8ea1e725dfbd22f",
    price:24,
    likes:[],
    tags:["westminsterabbey", "westminster", "england", "westminsterpalace"],
    duration:2
},
{
    name:"Harry Potter",
    user:"631d024516daebe0c7bf858c",
    city:"63103ae1c8ea1e725dfbd22f",
    price:30,
    likes:[],
    tags:["harrypotter", "hp", "england", "potterhead"],
    duration:5
},
{
    name:"Mount Fuji and Kawaguchiko",
    user:"6319571d8f9f57ddc6a81f8c",
    city:"63103ae1c8ea1e725dfbd22d",
    price:65,
    likes:[],
    tags:["mountfuji", "tokyo", "japan", "kawaguchi", "laketour", "lovingtokyo"],
    duration:11
},
{
    name:"Shinbashi",
    user:"6319571d8f9f57ddc6a81f8c",
    city:"63103ae1c8ea1e725dfbd22d",
    price:182,
    likes:[],
    tags:["shinbashi", "tokyo", "japan", "foodie", "tokyoatnight", "lovingtokyo"],
    duration:3
},
{
    name:"Universal Studios Hollywood",
    user:"631a376a076cbcfb4a7e5472",
    city:"63103ae1c8ea1e725dfbd238",
    price:118,
    likes:[],
    tags:["universalstudios", "hollywood", "harrypotter", "themepark", "vacation"],
    duration:9
},
{
    name:"Bus tour",
    user:"631a376a076cbcfb4a7e5472",
    city:"63103ae1c8ea1e725dfbd238",
    price:0,
    likes:[],
    tags:["hollywood", "hollywoodsign", "lasign", "losangeles"],
    duration:1
},
{
    name:"Isla Mujeres",
    user:"631a376a076cbcfb4a7e5472",
    city:"63103ae1c8ea1e725dfbd23b",
    price:60,
    likes:[],
    tags:["cancun", "mexico", "tulum", "cancunmexico", "mexicanisland", "catamarantour"],
    duration:10
},
{
    name:"Chichen Itza",
    user:"631a376a076cbcfb4a7e5472",
    city:"63103ae1c8ea1e725dfbd23b",
    price:26,
    likes:[],
    tags:["cancun", "mexico", "chichenitza", "cancunmexico", "history"],
    duration:6
},
{
    name:"Turin's Royal Palace",
    user:"631d024516daebe0c7bf858c",
    city:"6310e83947b1f91d97174ae9",
    price:55,
    likes:[],
    tags:["turin", "italy", "torinotoday", "architecture"],
    duration:2
},
{
    name:"Sydney Opera House",
    user:"631d024516daebe0c7bf858c",
    city:"63103ae1c8ea1e725dfbd232",
    price:43,
    likes:[],
    tags:["sydney", "operahouse", "australia", "sydneyicon"],
    duration:2
},
{
    name:"Royal Palace and Del Prado museum",
    user:"631a376a076cbcfb4a7e5472",
    city:"63103ae1c8ea1e725dfbd22e",
    price:39,
    likes:[],
    tags:["madrid", "royalpalace", "spaintour", "lovingmadrid"],
    duration:3
}
)