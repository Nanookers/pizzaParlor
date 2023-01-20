import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';

function MenuItem({ pizza, picture }) {

    const dispatch = useDispatch();
    const [photoStatus, setPhotoStatus] = useState(true);
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

    const showDescription = () => {
        console.log('you selected a pizza');
        if (photoStatus === true) {
            setPhotoStatus(false);
        } else {
            setPhotoStatus(true);
        }
    }

return (
    <>
            {photoStatus ? (
                <>
                    <div className='pizzaName'>
                        <h4>{pizza.name}</h4>
                        <h5>{pizza.description}</h5>
                    </div>
                    <img src={pizza.image_path}/>
                        <button onClick={showDescription}>ADD</button>
                </>

) : (//ternarry switch
                <>
                    <div className='pizzaName'>
                        <h4>{pizza.name}</h4>
                        <h5>{pizza.description}</h5>
                    </div>
                    <img src={pizza.image_path}/>
                        <button onClick={showDescription}>REMOVE</button>
                </> 
            )} 
            </>  
)

}

export default MenuItem;