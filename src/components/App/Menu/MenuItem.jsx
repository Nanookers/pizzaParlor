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

    const addPizza = () => {
        dispatch({
            type:'SET_PIZZA_CART',
            payload: pizza.id
        })
    }

    const deletePizza = (id) => {

    }

    if (showPicture === true) {
        return(
            <div className="img-card">
                <img src={pizza.image_path} alt={pizza.description} onClick={toggleShow} />
                <button onClick={addPizza} style={{width: 200}}>AddPizza</button>
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