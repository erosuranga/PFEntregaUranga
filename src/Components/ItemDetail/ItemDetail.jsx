import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ id, name, category, price, stock }) => {
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
        <ItemCount
          initial={1}
          stock={stock}
          onAdd={(quantity) => console.log("cantidad agreegada")}
        />
      </footer>
    </article>
  );
};

export default ItemDetail;
