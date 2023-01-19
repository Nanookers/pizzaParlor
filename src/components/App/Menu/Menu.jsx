import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import axios from 'axios'

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
            <h2>Pizza List</h2>
            <ul>
                {pizzaList.map((pizza) => {
                    return <li key={pizza.id}></li> 
                })}
            </ul>
        </section>
    );
}

export default Menu;