require('dotenv').config()
const db = require('./config/database') 

const CommentModel = require("./models/Comment")


CommentModel.create(
    {
        comment:"Incredible, beyond all expectations!🤩",
        user:"6320d762ae321d25253ad1bc",
        itinerary:"632169c7cf58505dcc7adcca"
    },
    {
        comment:"I loved it, I'll definitely come back soon.",
        user:"6320d762ae321d25253ad1bc",
        itinerary:"632169c7cf58505dcc7adcd4"
    },
    {
        comment:"It was ok, nothing extra special, I don't know if I would return.",
        user:"6320d7c6ae321d25253ad1c2",
        itinerary:"632169c7cf58505dcc7adcd9"
    },
    {
        comment:"Definitely a magical place✨ I liked it a lot",
        user:"6320d7a7ae321d25253ad1bf",
        itinerary:"632169c7cf58505dcc7adcd2"
    },
    {
        comment:"Every time I think about traveling, this destination comes to my mind, I love it! 🥰",
        user:"63274e96f8e1e476ca44e997",
        itinerary:""
    },
    {
        comment:"I would come a thousand times, I never get tired of this place!",
        user:"63244b4bab991f5dedd11457",
        itinerary:"632169c7cf58505dcc7adcd7"
    },
    {
        comment:"Definitely my place in the world, I wonder if I should live here🤔",
        user:"63274e96f8e1e476ca44e997",
        itinerary:"632169c7cf58505dcc7adcd6"
    },
    {
        comment:"I love everything about this place, the landscapes, the food, the people...",
        user:"63244b4bab991f5dedd11457",
        itinerary:"632169c7cf58505dcc7adcd4"
    },
    {
        comment:"I was speechless when I visited it for the first time... And it still happens to me every time I go *sighs",
        user:"6320d762ae321d25253ad1bc",
        itinerary:"632169c7cf58505dcc7adccc"
    }

)