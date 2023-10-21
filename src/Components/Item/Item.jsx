import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ id, name, category, stock, price }) => {
  return (
    <article className="CardItem">
      <header className="Header">
        <h2 className="ItemHeader">{name}</h2>
      </header>
      <section>
        <p className="Info">precio: ${price}</p>
        <p className="Info">Stock disponible :{stock}</p>
        <p className="Info">categoria : {category}</p>
      </section>
      <footer className=" ItemFooter">
        <Link to={`/item/${id}`} className="Option">
          Ver Detalle
        </Link>
      </footer>
    </article>
  );
};

export default Item;
