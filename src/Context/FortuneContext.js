import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios'

export const FortuneContext = createContext();


const FortuneApp = ({ children }) => {

    
    const [fortuneTeller, setFortuneTeller] = useState([]);

    useEffect(() => {
        axios.get("https://api.kahvemvefalim.com/api/yorumcular/ozelfal")
            .then(response => setFortuneTeller(response.data))
            .catch(error => console.error(error))
    }, [fortuneTeller])

    


    return (
        <FortuneContext.Provider value={{ fortuneTeller, setFortuneTeller}}>
            {children}
        </FortuneContext.Provider>
    )
}

export default FortuneApp