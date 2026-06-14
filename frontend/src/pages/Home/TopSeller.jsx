import { useEffect, useState } from "react";
const categorys = [
  "Choose a genre",
  "Business",
  "Fiction",
  "Horror",
  "Adventure",
];
const TopSeller = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  console.log(books);
  return (
    <div className="py-10">
      <h2 className="text-3xl font-semibold mb-6">Top Sellers</h2>
      {/* category filters go here */}
      <div>
        <select name="category" id="category">
          {categorys.map((category, index) => {
            <option key={index} value={category}>
              {category}
            </option>;
          })}
        </select>
      </div>
    </div>
  );
};

export default TopSeller;
