require('dotenv').config()
const db = require('./config/database') 

const CityModel = require("./models/City.js")


CityModel.create({
    city: "New York",
    coutry:"United States",
    photo:"https://estaticos.muyinteresante.es/uploads/images/test/60b4a8d15cafe819e843397a/empire-state-redes.jpg",
    population:18867000,
    fundation:1624
},
{
    city: "Tokyo",
    coutry: "Japan",
    photo: "https://img.freepik.com/foto-gratis/flores-cerezo-primavera-pagoda-chureito-montana-fuji-al-atardecer-japon_335224-215.jpg?w=996&t=st=1661108709~exp=1661109309~hmac=2658b5c5a8992591a5e183f01a8590196c77bff9ccf4138f5181cc669f67a377",
    population: 13988129,
    fundation:1457
},
{
    city: "Madrid",
    coutry: "Spain",
    photo: "https://cdn.pixabay.com/photo/2019/01/24/09/38/madrid-3952068_960_720.jpg",
    population: 6714000,
    fundation:1931
},
{
    city: "London",
    coutry: "England",
    photo: "https://img.freepik.com/foto-gratis/big-ben-puente-westminster-al-atardecer-londres-reino-unido_268835-1395.jpg?w=996&t=st=1661108754~exp=1661109354~hmac=b83b586f1dc140ac5857820f60b7c1bf05e3ad8b4ef5cf15875190ed9610a604",
    population: 9541000,
    fundation:47
},
{
    city: "Ushuaia",
    coutry: "Argentina",
    photo: "https://fotos.perfil.com/2020/10/09/trim/1040/780/1009cumpleanosushuaia-1057442.jpg",
    population: 82326,
    fundation:1884
},
{
    city: "Paris",
    coutry: "France",
    photo: "https://cdn.pixabay.com/photo/2018/04/25/09/26/eiffel-tower-3349075_960_720.jpg",
    population: 11142000,
    fundation:52
},
{
    city: "Sydney",
    coutry: "Australia",
    photo: "https://cdn.pixabay.com/photo/2014/05/26/09/58/sydney-opera-house-354375_960_720.jpg",
    population: 275370,
    fundation:1788
},
{
    city: "Bali",
    coutry: "Indonesia",
    photo: "https://cdn.pixabay.com/photo/2018/03/19/14/55/pagoda-3240169_960_720.jpg",
    population: 4200000,
    fundation:1958
},
{
    city: "Turin",
    coutry: "Italy",
    photo: "https://images.ecestaticos.com/2cw4S3WkEnXyNXMIwpMp6AaI9xo=/226x4:2224x1502/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F231%2Fd6e%2F9f9%2F231d6e9f98ce1798335e60df09074de2.jpg",
    population: 847287,
    fundation:1906
},
{
    city: "Buenos Aires",
    coutry: "Argentina",
    photo: "https://images.pexels.com/photos/11013903/pexels-photo-11013903.jpeg",
    population: 15370000,
    fundation:1536
},
{
    city: "Dubai",
    coutry: "United Emirates",
    photo: "https://cdn.pixabay.com/photo/2020/09/16/04/02/skyline-5575251_960_720.jpg",
    population: 3490000,
    fundation:1833
},
{
    city: "Hong Kong",
    coutry: "China",
    photo: "https://images.pexels.com/photos/2321188/pexels-photo-2321188.jpeg?",
    population: 7760000,
    fundation:1841
},
{
    city: "Los Angeles",
    coutry: "United States",
    photo: "https://www.visittheusa.mx/sites/default/files/styles/hero_l/public/images/hero_media_image/2017-01/Getty_515070156_EDITORIALONLY_LosAngeles_HollywoodBlvd_Web72DPI_0.jpg?h=0a8b6f8b&itok=lst_2_5d",
    population: 12488000,
    fundation:1781
},
{
    city: "Montevideo",
    coutry: "Uruguay",
    photo: "http://infonegocios.info/content/images/2022/07/21/176390/web-turismo.jpg",
    population: 1767000,
    fundation:1724
},
{
    city: "Lima",
    coutry: "Peru",
    photo: "https://denomades.s3.us-west-2.amazonaws.com/blog/wp-content/uploads/2020/08/30162219/lima-peru-shutterstock_1047718252.jpg",
    population: 11045000,
    fundation:1535
},
{
    city: "Cancun",
    coutry: "Mexico",
    photo: "https://cdn.getyourguide.com/img/location/5b45f52823afc.jpeg/68.jpg",
    population: 998000,
    fundation:1970
}

)

