require('dotenv').config()
const db = require('./config/database') 

const ActivityModel = require("./models/Activity")


ActivityModel.create({
    //New York
    name:"Full access: Ground Zero, Memorial and museum",
    photo:"https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/07/72/12/16.jpg",
    itinerary:"631faad96f9681b9e618b8d6"
},
{
    name:"FDNY Memorial Wall",
    photo:"https://media-cdn.tripadvisor.com/media/photo-o/06/5c/48/b0/fdny-memorial.jpg",
    itinerary:"631faad96f9681b9e618b8d6"
},
{
    name:"Memorial monument 9/11",
    photo:"https://media-cdn.tripadvisor.com/media/photo-m/1280/14/b3/aa/b3/911-memorial-nyc.jpg",
    itinerary:"631faad96f9681b9e618b8d6"
},
{
    name:"Statue of Liberty",
    photo:"https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/07/25/18/e9.jpg",
    itinerary:"631faad96f9681b9e618b8d5"
},
{
    name:"Circle Line to Ellis Island",
    photo:"https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0a/0a/5d/f1.jpg",
    itinerary:"631faad96f9681b9e618b8d5"
},
{
    name:"Helicopter ride",
    photo:"https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/09/93/f1/d1.jpg",
    itinerary:"631faad96f9681b9e618b8d5"
},
{
    name:"SUMMIT One Vanderbilt experience",
    photo:"https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0d/a5/3d/62.jpg",
    itinerary:"631faad96f9681b9e618b8d4"
},
{
    name:"The Edge",
    photo:"https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0a/8a/68/e6.jpg",
    itinerary:"631faad96f9681b9e618b8d4"
},
{
    name:"Empire State Building",
    photo:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/39/9b/27/caption.jpg?w=1200&h=-1&s=1",
    itinerary:"631faad96f9681b9e618b8d4"
},
{ //Paris
    name:"Top floor Eiffel tower",
    photo:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/15/67/96/caption.jpg?w=1100&h=-1&s=1",
    itinerary:"631faad96f9681b9e618b8d7"
},
{
    name:"Seine river cruise ",
    photo:"https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/07/19/b4/f2.jpg",
    itinerary:"631faad96f9681b9e618b8d7"
},
{
    name:"Free walking tour to Eiffel tower",
    photo:"https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0b/db/8d/37.jpg",
    itinerary:"631faad96f9681b9e618b8d7"
},
{
    name:"Skip the Line Ticket with Private Guided Tour: Louvre Museum",
    photo:"https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/06/f9/15/d3.jpg",
    itinerary:"631faad96f9681b9e618b8d8"
},
{
    name:"D'Orsay museum",
    photo:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/26/b3/6e/20180601-122841-largejpg.jpg?w=1200&h=-1&s=1",
    itinerary:"631faad96f9681b9e618b8d8"
},
{
    name:"L'Orangerie museum",
    photo:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/22/9f/26/caption.jpg?w=1200&h=-1&s=1",
    itinerary:"631faad96f9681b9e618b8d8"
},
{
    name:"Walk through Versailles garden",
    photo:"https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/07/01/37/a3.jpg",
    itinerary:"631faad96f9681b9e618b8d9"
},
{
    name:"Palace of Versailles, Gardens and Fountain Show Tour",
    photo:"https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0f/88/8e/3b.jpg",
    itinerary:"631faad96f9681b9e618b8d9"
},
{
    name:"Versailles Bike Tour with Skip-the-Line Palace Ticket",
    photo:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/60/ea/c1/caption.jpg?w=1200&h=-1&s=1",
    itinerary:"631faad96f9681b9e618b8d9"
},
{ // London
    name:"Priority entrance to the London Eye",
    photo:"https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0f/36/c2/60.jpg",
    itinerary:"631faad96f9681b9e618b8da"
},
{
    name:"London Eye River Cruise",
    photo:"https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/07/82/70/4c.jpg",
    itinerary:"631faad96f9681b9e618b8da"
},
{
    name:"London Eye to London Bridge (River Walk)",
    photo:"http://www.thelondres.com/wp-content/uploads/2018/08/tower-bridge.jpg",
    itinerary:"631faad96f9681b9e618b8da"
},
{
    name:"Buckingham Palace",
    photo:"https://www.eliberico.com/wp-content/uploads/2021/09/buckingham-palace-640x375.jpg",
    itinerary:"631faad96f9681b9e618b8db"
},
{
    name:"Changing of the guard walking tour",
    photo:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/36/7c/94/1.jpg?w=1100&h=-1&s=1",
    itinerary:"631faad96f9681b9e618b8db"
},
{
    name:"Horse Guards Parade at Whitehall",
    photo:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/21/a7/b2/img-20180531-023447-686.jpg?w=1200&h=-1&s=1",
    itinerary:"631faad96f9681b9e618b8db"
},
{
    name:"Harry Potter and the Cursed Child",
    photo:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/4f/b4/1a/palace-theatre.jpg?w=1200&h=-1&s=1&cx=1215&cy=791&chk=v1_94dd28e6828140c4221c",
    itinerary:"631faad96f9681b9e618b8dc"
},
{
    name:"Warner Bros. Studio: The Making of Harry Potter",
    photo:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/5b/66/7a/caption.jpg?w=1200&h=-1&s=1",
    itinerary:"631faad96f9681b9e618b8dc"
},
{
    name:"Harry Potter Shop at Platform 9 3/4",
    photo:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/7b/74/61/photo0jpg.jpg?w=1200&h=-1&s=1",
    itinerary:"631faad96f9681b9e618b8dc"
},
{ //Tokyo
    name:"Mount Fuji tour",
    photo:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/a0/d7/2f/awaken-your-inner-explorer.jpg?w=1200&h=-1&s=1",
    itinerary:"631faad96f9681b9e618b8dd"
},
{
    name:"Kawaguchiko Lake",
    photo:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/d8/24/b1/caption.jpg?w=1200&h=-1&s=1",
    itinerary:"631faad96f9681b9e618b8dd"
},
{
    name:"Paragliding in tandem style over Mount Fuji",
    photo:"https://www.jnto.or.th/summer2018/images/paragliding/paragliding-head.jpg",
    itinerary:"631faad96f9681b9e618b8dd"
},
{
    name:"Shimbashi Evening Walking Food Tour in Tokyo",
    photo:"Shimbashi Evening Walking Food Tour in Tokyo",
    itinerary:"631faad96f9681b9e618b8de"
},
{
    name:"Tokyo Metropolis Photo Tour",
    photo:"https://vacation-niseko.s3.ap-northeast-1.amazonaws.com/uploads/ckeditor/pictures/2384/tokyo-kabukicho-nightlife-neon-lights.jpg",
    itinerary:"631faad96f9681b9e618b8de"
},
{
    name:"Craft Beer Tour with Tasting",
    photo:"https://traveloregon.com/wp-content/uploads/2019/09/2019OctCul_beer_Westside.jpg",
    itinerary:"631faad96f9681b9e618b8de"
},
{ // Los Angeles
    name:"Universal Studios Hollywood",
    photo:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/26/63/b1/universal.jpg?w=1200&h=-1&s=1",
    itinerary:"631faad96f9681b9e618b8df"
},
{
    name:"The Wizarding World of Harry Potter",
    photo:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/68/40/99/castello-di-harry-potter.jpg?w=1200&h=-1&s=1",
    itinerary:"631faad96f9681b9e618b8df"
},
{
    name:"WaterWorld",
    photo:"https://www.themeparkexperts.com/wp-content/uploads/2020/02/themepark_universalstudioshollywood_waterworldshow_5.jpg",
    itinerary:"631faad96f9681b9e618b8df"
},
{
    name:"Hollywood Walk of Fame",
    photo:"https://www.thesun.co.uk/wp-content/uploads/2016/10/nintchdbpict000000444356.jpg",
    itinerary:"631faad96f9681b9e618b8e0"
},
{
    name:"Hollywood Sign",
    photo:"https://static.vecteezy.com/system/resources/previews/003/370/914/large_2x/hollywood-sign-los-angeles-free-photo.JPG",
    itinerary:"631faad96f9681b9e618b8e0"
},
{
    name:"Rodeo Drive",
    photo:"https://youimg1.tripcdn.com/target/10041f000001gp7f01B07.jpg?proc=source%2Ftrip",
    itinerary:"631faad96f9681b9e618b8e0"
},
{ // Cancun
    name:"Snorkel",
    photo:"https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0b/dc/b9/63.jpg",
    itinerary:"631faad96f9681b9e618b8e1"
},
{
    name:"Swim with whale sharks",
    photo:"https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0b/00/46/e6.jpg",
    itinerary:"631faad96f9681b9e618b8e1"
},
{
    name:"All-inclusive luxury catamaran tour",
    photo:"https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0b/16/b7/05.jpg",
    itinerary:"631faad96f9681b9e618b8e1"
},
{
    name:"Chichén Itzá",
    photo:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/bf/28/3d/photo3jpg.jpg?w=1100&h=-1&s=1",
    itinerary:"631faad96f9681b9e618b8e2"
},
{
    name:"Saamal Cenote",
    photo:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/a2/c4/a5/caption.jpg?w=1200&h=-1&s=1",
    itinerary:"631faad96f9681b9e618b8e2"
},
{
    name:"The temple of the Thousand Columns",
    photo:"https://www.theyucatantimes.com/wp-content/uploads/2020/01/images-1.jpg",
    itinerary:"631faad96f9681b9e618b8e2"
},
{ // Turin
    name:"Royal Palace guided tour",
    photo:"http://turincondelviajero.com/wp-content/uploads/2018/02/P1130223-min-1024x683.jpg",
    itinerary:"631faad96f9681b9e618b8e3"
},
{
    name:"Egyptian Museum of Turin",
    photo:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/73/f1/8c/particolare-new-gallery.jpg?w=900&h=-1&s=1",
    itinerary:"631faad96f9681b9e618b8e3"
},
{
    name:"Hot Air Balloon Flight over Piedmont from Turin",
    photo:"https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/06/e8/16/a6.jpg",
    itinerary:"631faad96f9681b9e618b8e3"
},
{ // Sydney
    name:"Guided tour of the Sydney Opera House",
    photo:"https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/07/80/39/d8.jpg",
    itinerary:"631faad96f9681b9e618b8e4"
},
{
    name:"Journey Beyond Cruise Sydney Harbour",
    photo:"https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0a/78/9f/e0.jpg",
    itinerary:"631faad96f9681b9e618b8e4"
},
{
    name:"The Phantom of the Opera at the Sydney Opera House",
    photo:"https://www.sydneyoperahouse.com/content/dam/soh/events/opera-australia/2021/phantom/10673-poto-soh-x1-inline-1200x1600.jpg.image.1200.1600.high.jpg",
    itinerary:"631faad96f9681b9e618b8e4"
},
{ // Madrid
    name:"Visit to the Royal Palace of Madrid with a private historian guide",
    photo:"https://images.musement.com/cover/0003/11/royal-palace-of-madrid_header-210276.jpeg?w=1200&h=630&q=95&fit=crop",
    itinerary:"631faad96f9681b9e618b8e5"
},
{
    name:"Guided tour Del Prado Museums",
    photo:"https://upload.wikimedia.org/wikipedia/commons/6/68/Museo_del_Prado_2016_%2825185969599%29.jpg",
    itinerary:"631faad96f9681b9e618b8e5"
},
{
    name:"Reina Sofia museum",
    photo:"https://espanaviajar.com/wp-content/uploads/2018/11/museo-reina-sofia.jpg",
    itinerary:"631faad96f9681b9e618b8e5"
}
)