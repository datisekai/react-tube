import { useState } from "react";
import { generateArray } from "../utils";
import MasterCard from "../components/Card/MasterCard";

function App() {
  const [category, setCategory] = useState('Tất cả')

  return (
    <div className="mt-2">
      <ul className="flex flex-wrap gap-1">
        {["Tất cả", "Âm nhạc", "Danh sách kết hợp", "Trò chơi"].map(
          (item, index) => (
            <li onClick={() => setCategory(item)} key={index} className={`btn btn-sm capitalize ${item === category ? 'bg-neutral-content text-neutral hover:bg-neutral hover:text-neutral-content' : 'bg-neutral text-neutral-content hover:bg-neutral-content hover:text-neutral'}`}>
              {item}
            </li>
          )
        )}
      </ul>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-4 py-4 px-2 md:p-6">
        {generateArray(20).map((item) => (
          <MasterCard key={item} />
        ))}
      </ul>
    </div>
  );
}

export default App;
