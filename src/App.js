// import React from "react";

function Food({ name, picture }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture} />
    </div>
  );
}
const foodILike = [
  {
    name: "cake",
    image:
      "https://cupfulofkale.com/wp-content/uploads/2019/09/Vegan-Blackberry-and-Gin-Cake-Cut-Open.jpeg",
  },
  {
    name: "kimbap",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.BvdzjW36CWQYyayXvduatAHaHR%26pid%3DApi&f=1",
  },
];

function App() {
  return (
    <div>
      <h1>Hanyang</h1>
      {foodILike.map((dish) => (
        <Food name={dish.name} picture={dish.image} />
      ))}
    </div>
  );
}

export default App;
