import product1 from "../images/product1.png";
import product2 from "../images/product2.png";
import product3 from "../images/product3.png";
import product4 from "../images/product4.png";

export default class ShopStoreService {
  data = [
    {
      id: 1,
      title: "Sofa Francesca",
      price: 300,
      coverImage: product1,
    },
    {
      id: 2,
      title: "Sofa Ricardo",
      price: 450,
      coverImage: product2,
    },
    {
      id: 3,
      title: "Sofa Monica",
      price: 350,
      coverImage: product3,
    },
    {
      id: 4,
      title: "Sofa Marcos",
      price: 500,
      coverImage: product4,
    },
  ];

  getData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.floor(Math.random() * 25) > 5) {
          reject(new Error("Something bad happened"));
        } else {
          resolve(this.data);
        }
      }, 700);
    });
  }
}
