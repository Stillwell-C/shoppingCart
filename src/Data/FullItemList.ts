type ItemType = {
  name: string;
  price: number;
  description: string;
  dept: string;
  img: string;
  imgSmall: string;
  id: string;
};

const fullItemList: ItemType[] = [
  {
    name: "Shirt",
    price: 700,
    description: "a black t-shirt",
    dept: "clothing",
    img: "/img/shirt.jpg",
    imgSmall: "/img/shirt-small.jpg",
    id: "item00001",
  },
  {
    name: "Jacket",
    price: 1700,
    description: "light brown jacket",
    dept: "clothing",
    img: "/img/jacket.jpg",
    imgSmall: "/img/jacket-small.jpg",
    id: "item00002",
  },
  {
    name: "Handbag",
    price: 2400,
    dept: "accessories",
    description: "black handbag made with full grain leather",
    img: "/img/handbag.jpg",
    imgSmall: "/img/handbag-small.jpg",
    id: "item00003",
  },
  {
    name: "Backpack",
    price: 1800,
    dept: "accessories",
    description: "hand-stiched small black backpack.",
    img: "/img/backpack.jpg",
    imgSmall: "/img/backpack-small.jpg",
    id: "item00004",
  },
  {
    name: "Tote",
    price: 700,
    dept: "accessories",
    description: "a black tote bag",
    img: "/img/totebag.jpg",
    imgSmall: "/img/totebag-small.jpg",
    id: "item00005",
  },
  {
    name: "Decorative Stick",
    price: 700,
    dept: "interior",
    description: "liven up your room with this stick",
    img: "/img/decorative-stick.jpg",
    imgSmall: "/img/decorative-stick-small.jpg",
    id: "item00006",
  },
  {
    name: "Houseplant",
    price: 800,
    dept: "interior",
    description: "a plant",
    img: "/img/houseplant.jpg",
    imgSmall: "/img/houseplant-small.jpg",
    id: "item00007",
  },
];

export default fullItemList;
