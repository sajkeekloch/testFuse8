import "./Card.sass"
import card from '../images/Bitmap.png'
import { sentenceCase } from "sentence-case"
import { NavLink } from "react-router-dom"

export default function Card(props) {
    return(
        <div className="card">
            <NavLink to={`/details/${props.house.id}`}>
                <div 
                    className="card__image"
                    style={{backgroundImage: `url(${card})`}}>
                    <p 
                        className={props.house.type === "IndependentLiving"? "image__label green" : "image__label orange"}
                        >
                        {sentenceCase(props.house.type)}
                    </p>
                </div>
                <div className="card__description">
                    <h2 className="card__title">{ props.house.title }</h2>
                    <p className="card__address">{ props.house.address }</p>
                    <div className="card__price">
                        <h3 className="price__title"> New Properties for Sale from</h3>
                        <p className="price__number">{ props.house.price }</p>
                    </div>
                    <p className="card__shared">Shared Ownership Available</p>    
                </div>
            </NavLink>
            
        </div>
    )
    
}