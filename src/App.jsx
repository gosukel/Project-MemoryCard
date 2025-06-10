import { useState, useEffect } from "react";
import Header from "./components/header";
import CardGrid from "./components/CardGrid";
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
        Promise.all([
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
            .then(
                ([
                    monOne,
                    monTwo,
                    monThree,
                    monFour,
                    monFive,
                    monSix,
                    monSeven,
                    monEight,
                    monNine,
                    monTen,
                    monEleven,
                    monTwelve,
                ]) => {
                    return Promise.all([
                        monOne.json(),
                        monTwo.json(),
                        monThree.json(),
                        monFour.json(),
                        monFive.json(),
                        monSix.json(),
                        monSeven.json(),
                        monEight.json(),
                        monNine.json(),
                        monTen.json(),
                        monEleven.json(),
                        monTwelve.json(),
                    ]);
                }
            )
            .then((values) => {
                // console.log(values);
                setMonList(values);
                setLoading(false);
            });
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
