import "./CardGrid.css";
import Card from "./Card";
import { useEffect, useState } from "react";

export default function CardGrid({ pokeList, shuffle, reset, increaseScore }) {
    const [prevSelected, setPrevSelected] = useState([]);
    let monList = shuffle(pokeList);

    function checkClick(mon) {
        console.log(prevSelected);
        console.log(mon.name);
        if (prevSelected.includes(mon.name)) {
            setPrevSelected([]);
            reset();
        } else {
            setPrevSelected([...prevSelected, mon.name]);
            increaseScore();
        }
    }

    return (
        <div className="body">
            {monList.map((mon, idx) => {
                return <Card mon={mon} key={idx} checkClick={checkClick} />;
            })}
        </div>
    );
}
