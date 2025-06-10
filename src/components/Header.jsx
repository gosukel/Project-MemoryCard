import "./Header.css";

export default function Header({ score = 0, bestScore = 0 }) {
    return (
        <div className="header">
            <h1 id="title">Pick-a-Poke</h1>
            <div className="score-div">
                <p className="score" id="cur-score">
                    Score: {score}
                </p>
                <p className="score" id="high-score">
                    Best Score: {bestScore}
                </p>
            </div>
        </div>
    );
}
