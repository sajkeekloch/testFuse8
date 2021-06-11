import "./More.sass"
import more from '../images/Chevron.svg'

export default function More() {
    return(
        <button className="more">
            <div className="more__text">
                <p>See more</p>
                <img src={more} alt="more" />
            </div>
            
        </button>
    )
}