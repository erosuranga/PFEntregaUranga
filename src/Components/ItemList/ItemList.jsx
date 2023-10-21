import Item from "../Item/Item";
import "./ItemList.css";

const ItemList = ({ products }) => {
  if (!Array.isArray(products)) {
    return <div className="ErrorMessage">No hay productos disponibles.</div>;
  }

  return (
    <div className="ListGroup">
      {products.map((prod) => (
        <Item key={prod.id} {...prod} />
      ))}
    </div>
  );
};

export default ItemList;

/*import Item from "../Item/Item";
import "./ItemList.css";

const Itemlist = ({ products }) => {
  return (
    <div className="ListGroup">
      {products.map((prod) => (
        <Item key={prod.id} {...prod} />
      ))}
    </div>
  );
};

export default Itemlist;*/
