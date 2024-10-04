import React from "react";
import { Collection } from "./Collection";
import "./index.scss";

const cats = [
  { name: "Все" },
  { name: "Эдинбург" },
  { name: "Нью-Йорк" },
  { name: "Лондон" },
  { name: "Санкт-Петербург" },
  { name: "Сеул" },
  { name: "Милан" },
  { name: "Токио" },
  { name: "Прага" },
  { name: "Париж" },
];

function App() {
  const [categoryId, setCategoryId] = React.useState(0);
  const [collections, setCollections] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");

  React.useEffect(() => {
    fetch("https://66feac2c2b9aac9c997cf00f.mockapi.io/collections")
      .then((res) => res.json())
      .then((json) => {
        setCollections(json[0].collections);
      })
      .catch((err) => {
        console.warn(err);
        alert("Ошибка при получении данных");
      });
  }, []);

  const filteredCollections =
    categoryId === 0
      ? collections
      : collections.filter(
          (collection) => collection.category === cats[categoryId].name
        );

  return (
    <div className="App">
      <h1>Моя коллекция путешествий</h1>
      <div className="top">
        <ul className="tags">
          {cats.map((obj, i) => (
            <li
              onClick={() => setCategoryId(i)}
              className={categoryId === i ? "active" : ""}
              key={obj.name}
            >
              {obj.name}
            </li>
          ))}
        </ul>
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="search-input"
          placeholder="Поиск по названию"
        />
      </div>
      <div className="content">
        {filteredCollections
          .filter((obj) =>
            obj.name.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((obj, index) => (
            <Collection key={index} name={obj.name} images={obj.photos} />
          ))}
      </div>
      <ul className="pagination">
        <li>1</li>
        <li className="active">2</li>
        <li>3</li>
      </ul>
    </div>
  );
}

export default App;
