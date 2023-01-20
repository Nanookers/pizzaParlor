// import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux';


  // Using the useSelector hook to get the current state
  // of the cart reducer from our Redux store:
  const pizzaCart = useSelector((store) => store.pizzaCart)

  const dispatch = useDispatch();

  useEffect(() => {
    axios({
      method: "GET",
      url: `/api/order/${order.id}`,
    })
      .then((response) => {
        // We got the data, we even verified it was working
        // as expected:
        // console.table(response.data);
        
        dispatch({
          type: "FETCH_CART",
          payload: response.data, // 👈 this is array of book objects!
        });
      })
      .catch((err) => {
        console.error("PizzaList useEffect fail:", err);
      });
  }, []); // 👈 don't forget the empty array!

   // Function to handle the checkout
  const handleCheckout = () => {
    // Dispatch an action to clear the cart and order data from the store
    dispatch({
      type: "CHECKOUT",
    });
  };

  // pizzaCheckout order.id / order_id//

  return (
    <div>
      <header> Prime Pizza </header>
      <h2>Checkout</h2>
      <div>
        <p>{orders.customer_name}</p>
        <p>{orders.street_address}</p>
        <p>{orders.city}, {orders.zip}</p>  
        <p>{orders.type}</p>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
        
        {
        pizzaCart.map((pizza) => {
          return ( 
           <tr key={pizza.id}>
                <td>{pizza.name}</td>
                <td>{pizza.price}</td>
           </tr>
           
          )
        })
      }

          <tr>
            <td>{pizza.name}</td>
            <td>{pizza.price}</td>
          </tr>
        </tbody>
      </table>
      <div>
        <p>{orders.total}</p>
        </div>
        <div>
        <button onClick={handleCheckout}>Checkout</button>
      </div>
      </div>
    
  );
    }

export default Checkout;
    
    
    
    
    
    
   
      






