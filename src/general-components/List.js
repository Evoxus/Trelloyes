import react from "React";
import card from "./Card";

function List(props) {
  const cardInfo = props.allCards;
  const arr = [];
  const cardData = props.cardIds.forEach(item =>
    arr.push(
      <Card
        title={cardInfo[item].title}
        content={cardInfo[item].content}
        key={cardInfo[item].id}
      />
    )
  );
  return (
    <div className="List-cards">
      <header>{props.header}</header>
      {arr}
    </div>
  );
}

export default List;
