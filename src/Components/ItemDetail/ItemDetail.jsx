import { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cartContext";

const ItemDetail = ({ id, name, category, price, stock }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);

  const { addItem } = useContext(CartContext);

  const handleOnadd = (quantity) => {
    setQuantityAdded(quantity);
    const item = {
      id,
      name,
      price,
    };

    addItem(item, quantity);
  };
  return (
    <article className="CardItem">
      <header>
        <h2> {name}</h2>
      </header>
      <section>
        <p>Categoria : {category}</p>
        <p>Precio : ${price}</p>
      </section>
      <footer>
        {quantityAdded > 0 ? (
          <Link to="/cart" className="Option">
            Terminar compra
          </Link>
        ) : (
          <ItemCount initial={1} stock={stock} onAdd={handleOnadd} />
        )}
      </footer>
    </article>
  );
};

export default ItemDetail;
