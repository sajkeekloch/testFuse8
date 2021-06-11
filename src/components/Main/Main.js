import Filter from '../Filter/Filter'
import CardContainer from '../CardContainer/CardContainer'
import './Main.sass'
import { useState } from 'react'
import More from '../More/More'
import Load from '../Load/Load'

export default function Main() {
    const [data, setData] = useState([])
    const [filteredData, setFilteredData] = useState([]);

    function handleInput(e) {
        let inputValue = e.target.value.toLowerCase()
        if(inputValue.length >= 3) {
            filter(inputValue)
        }
        else {
            setFilteredData([])
            setFilteredData(data)
        }
    }

    function filter(value) {
        setFilteredData([])
        console.log(data);
        data.map((el, index) => {
            let str = el.title.toLowerCase()
            if (str.includes(value)) {
                setFilteredData(filteredData => [...filteredData, el])
            }
        })
    }

    return(
        <div className="main">
            <h1 className="main__title">
                 Our Latest Developments 
            </h1>
            <Filter 
                handleInput={ handleInput }
            />
            <CardContainer 
                data={ filteredData }
                setData={ setData }
                setFilteredData={ setFilteredData }
                filteredData={ filteredData }
            />
            <More />
        </div>
    )
}