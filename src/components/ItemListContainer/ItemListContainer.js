import { useState, useEffect } from "react";
import ItemList from '../ItemList/ItemList';
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";
import './ItemListContainer.css'


const ItemListContainer = ({ gretting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    const collectionRef = categoryId
      ? query(collection(db, "products"), where("category", "==", categoryId))
      : collection(db, "products");

    getDocs(collectionRef)
      .then((response) => {
        const productsAdapted = response.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        setProducts(productsAdapted);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  return (
    <div className="containerprincipal">
       <img src="https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:best/1686686623447-main-sliderdesktopcelusultimo.jpg" alt="Banner" className="banner1"/>
      <h1>{gretting}</h1>
      <ItemList products={products} className="productscontainer" />
    </div>
  );
};

export default ItemListContainer;
