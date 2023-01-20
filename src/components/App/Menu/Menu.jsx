import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import axios from 'axios'
import MenuItem from './MenuItem';

function Menu() {
    
    const pizzaList = useSelector(store => store.pizzaList);

    const dispatch = useDispatch();

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

    return (
        <section>
            <h1>Pizza List</h1>
            <div>
                {pizzaList.map((pizza,picture) => {
                    return (
                        <MenuItem 
                        key={pizza.id}
                        pizza={pizza}
                        picture={picture}
                        description = {pizza.description}
                        />
                    )
                })}
            </div>
        </section>
    );
}

export default Menu;