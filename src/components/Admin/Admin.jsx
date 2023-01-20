import axios from "axios";
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';

function Admin() {

    useEffect(() => {
        //when you go to /admin, all the previous orders should be fetched with a get request right away
        showPreviousOrders();
    }, []) 

    //calling adminOrders array from redux story
    const adminOrders = useSelector(store => store.adminOrders);
    const dispatch = useDispatch();

    const showPreviousOrders = () => {
        axios({
            method: 'GET',
            url: '/api/order'
        })
        .then((response) => {
            console.log(response.data);
            const action = {
                type: 'GET_ADMIN_ORDERS',
                payload: response.data
            }
            dispatch(action);
        })
        .catch((error) => {
            console.error('error in get on admin page', error);
        })
    }

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Time Order Placed</th>
                        <th>Type</th>
                        <th>Cost</th>
                    </tr>
                </thead>
                <tbody>
                    {adminOrders.map((orders, i) => {
                        return (
                            <tr key={orders[i]}>
                                <td>{orders[i].customer_name}</td>
                                <td>{orders[i].time}</td>
                                <td>{orders[i].type}</td>
                                <td>{orders[i].total}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default Admin;