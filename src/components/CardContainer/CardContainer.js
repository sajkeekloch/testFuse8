import Card from '../Card/Card'
import Load from '../Load/Load'
import Error from '../Error/Error'
import React, { useState, useEffect } from 'react'
import './CardContainer.sass'

export default function CardContainer(props) {
    const [isLoading, setIsLoading] = useState('true')

    let cards = props.data.map((house) => {
        return (
            <Card key={house.id} house={house}/>
        )
    })

    useEffect(() => {
        setIsLoading(true)
        fetch("https://603e38c548171b0017b2ecf7.mockapi.io/homes")
          .then(res => res.json())
          .then(
            (result) => {
                setIsLoading(false)
                props.setData(result)
                props.setFilteredData(result)
            },
            (error) => {
                setIsLoading(true)
                console.error(error)
            }
          )
      }, [])

    return(
        <div className="cardContainer">
            {isLoading? (<Load />): (props.data.length? cards : <Error />)}
        </div>
    )
}