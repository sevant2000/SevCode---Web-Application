import "./LangStyle.css"

function TripData(props){
    return(
        <div className="l-card">
            <div className="l-image">
                <img src={props.image} alt="img" />
            </div>
            <h4>{props.heading}</h4>
            <p>{props.text}</p>
        </div>
    )
}

export default TripData ;