import "./Card.css";

export default function Card({ mon, checkClick }) {
    return (
        <div className="card" onClick={() => checkClick(mon)}>
            <div className="card-image">
                <img src={mon.sprites.front_default} />
            </div>
            <div className="card-text">{mon.name}</div>
        </div>
    );
}
