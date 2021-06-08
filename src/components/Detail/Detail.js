import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import { useLocation, useParams } from 'react-router-dom'



const Detail = () => {

    const location = useLocation()
    const [fortune, setFortune] = useState()
    const [value, setValue] = useState([])

    const { rumuz } = useParams()

    const showDetail = () => {
        axios.get("https://api.kahvemvefalim.com/api/yorumcular/ozelfal")
            .then(response => {
                const item = response.data.filter(i => i.rumuz === rumuz)
                setValue(item[0])
            })
            .catch(error => console.error(error))
    }

    useEffect(() => {
        setFortune(location.state.fortune)
        showDetail()
    }, [])

    console.log("rumuz", rumuz)
    console.log("okey", value)
    console.log("deger", fortune)

    return (
        <>
            {value ? (         
                    
                    <Card className="m-auto mt-5" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={value.foto} />
                    <Card.Body>
                      <Card.Title className="text-center">{rumuz}</Card.Title>
                    </Card.Body>
                  </Card>
            ) : "loading"}
           
        </>
    )
}

export default Detail
