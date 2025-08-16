import rolex from './assets/Rolex.jpg';
import Earbuds from './assets/Earbuds.jpg';
import iphone from './assets/iphone.jpeg';
import jeansshort from './assets/jeansshort.jpeg';
import mivispeakers from './assets/mivispeakers.jpg';
import Motog62 from './assets/Motog62.jpg';
import smartwatch from './assets/smartwatch.webp';
import trousermen from './assets/trousermen.jpeg';
import zebonicskeyboard from './assets/zebonicskeyboard.webp';
import fasttrack from './assets/fasttrack.png';

const ProductsList = [
    {
        id:0,
        name:"FastTrack Watch",
        amt:799,
        img:fasttrack,
    },
       {
        id:1,
        name:"Rolex Watch",
        amt:2999,
        img:rolex,
    
    },
       {
        id:2,
        name:"Smart Watch",
        amt:699,
        img:smartwatch,
    },
       {
        id:3,
        name:"Mivi Speakers",
        amt:499,
        img:mivispeakers,
        size:['White','Blue','Red','Green']
    },
    {
        id:4,
        name:"Zebronics Keyboard",
        amt:399,
        img:zebonicskeyboard,  
    },
       {
        id:5,
        name:"Ear Buds",
        amt:609,
        img:Earbuds,
        size:['White','Blue','Red','Green']
    },   {
        id:6,
        name:"Moto g62",
        amt:15999,
        img:Motog62,
        size:['White','Blue']
    },
       {
        id:7,
        name:"Trouser for Men",
        amt:199,
        img:trousermen,
        size:['28','30','32','xxl']
    },
       {
        id:8,
        name:"jeans shorts Men",
        amt:299,
        img:jeansshort,
        size:['S','M','L','XL']
    },
       {
        id:9,
        name:"iPhone 16 pro",
        amt:87799,
        img:iphone,
        size:['4GB/256GB','8GB/512GB']
    }
]

export default ProductsList;