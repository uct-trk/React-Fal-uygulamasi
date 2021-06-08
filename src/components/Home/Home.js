
import React, { useContext, useState } from 'react'
import { Card, Button, Row, Col, Badge } from 'react-bootstrap'
import { FortuneContext } from '../../Context/FortuneContext'
import { Link, Router } from 'react-router-dom'

const Home = () => {

    const { fortuneTeller } = useContext(FortuneContext)

    return (
        <>
            <Row>
                {fortuneTeller.map((fortune, index) => (
                    <Col key={index} xs={12} sm={4}>
                        <Card className="mb-3 mt-5">
                            <Card.Img height={450} variant="top" src={fortune.foto} />
                            <Card.Body>
                                <Card.Title>{fortune.rumuz}</Card.Title>

                                <div className="d-flex justify-content-between align-items-center">
                                {fortune.foto && fortune.rumuz && fortune.cevrimici === "1" ? <Badge className="bg-success p-3 text-white">Online</Badge> : <Badge className="bg-danger p-3 text-white">Offline</Badge>}
                                <Link to={{pathname:`/detail/${fortune.rumuz}`, state:{fortune}}}><Button variant="primary">Fal Gönder</Button></Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default Home
