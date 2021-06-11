import './Filter.sass'

export default function Filter(props) {

    return(
        <form className="filter">
            <label className="filter__label">Filter</label>
            <input 
                onChange={props.handleInput}
                className="filter__input" 
                maxLength="30"
                placeholder="house name"
            ></input>
        </form>
    )
}