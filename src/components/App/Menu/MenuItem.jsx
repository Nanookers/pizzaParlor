import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';

function MenuItem({ pizza, picture }) {

    const dispatch = useDispatch();
    const [showPicture, setShowPicture] = useState(true);
    const toggleShow = () => setShowPicture(!showPicture)

    useEffect(() => {
        axios({
            method: 'GET',
            url: '/api/pizza'
        }).then((response) => {
            dispatch({
            type: 'SET_PIZZALIST',
            payload: response.data  
            })
        }).catch((err) => {
            console.error('PizzaList useEffect fail:', err)
        })
    }, [])

    const addPizza = (id) => {
        
    }

    const deletePizza = (id) => {

    }

    if (showPicture === true) {
        return(
            <div className="img-card"
                onClick={toggleShow}>
                <img src={pizza.image_path} alt={pizza.description} />
            </div>
        )
    }
        else {
            return(
                <p className="img-card"
                    onClick={toggleShow}>
                    {pizza.description}
                </p>
            )
        }
    

}


export default MenuItem;