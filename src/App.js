// import React from "react";

function Food({ fav }) {
  return <h2>like {fav}</h2>;
}

function App() {
  return (
    <div>
      <h1>Hanyang</h1>
      <Food fav="milk" />
      <Food fav="cake" />
      <Food fav="ramen" />
    </div>
  );
}

export default App;
