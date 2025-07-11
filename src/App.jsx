import { useState, useEffect } from "react";
import Header from "./components/Header.jsx";
import CardGrid from "./components/CardGrid.jsx";
import levelData from "./data/data";
const url = "https://pokeapi.co/api/v2/pokemon/";
function App() {
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [level, setLevel] = useState(1);
    const [monList, setMonList] = useState([]);
    const [loading, setLoading] = useState(true);
    let curLevelData;
    if (level === 1) {
        curLevelData = levelData.levelOne;
    } else if (level === 2) {
        curLevelData = levelData.levelTwo;
    } else if (level === 3) {
        curLevelData = levelData.levelThree;
    } else if (level === 4) {
        curLevelData = levelData.levelFour;
    } else if (level === 5) {
        curLevelData = levelData.levelFive;
    } else if (level === 6) {
        curLevelData = levelData.levelSix;
    }

    useEffect(() => {
        const dataFetch = async () => {
            const result = (
                await Promise.all([
                    fetch(url + curLevelData[0]),
                    fetch(url + curLevelData[1]),
                    fetch(url + curLevelData[2]),
                    fetch(url + curLevelData[3]),
                    fetch(url + curLevelData[4]),
                    fetch(url + curLevelData[5]),
                    fetch(url + curLevelData[6]),
                    fetch(url + curLevelData[7]),
                    fetch(url + curLevelData[8]),
                    fetch(url + curLevelData[9]),
                    fetch(url + curLevelData[10]),
                    fetch(url + curLevelData[11]),
                ])
            ).map((r) => r.json());

            const allMons = await Promise.all(result);

            setMonList(allMons);
            setLoading(false);
        };

        dataFetch();
    }, [level]);

    function increaseScore() {
        let newScore = score + 1;
        setScore(newScore);
        if (newScore > bestScore) setBestScore(newScore);
        if (newScore === 72) {
            alert("You Win!");
            reset();
            return;
        }
        if (newScore % 12 === 0) {
            setLevel(level + 1);
        }
    }

    function reset() {
        setScore(0);
        setLevel(1);
    }

    if (loading) return <h1>Loading...</h1>;

    return (
        <>
            <Header score={score} bestScore={bestScore} />
            {monList && (
                <CardGrid
                    pokeList={monList}
                    shuffle={levelData.shuffleArray}
                    reset={reset}
                    increaseScore={increaseScore}
                />
            )}
        </>
    );
}

export default App;
