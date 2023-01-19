// import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux';


const Checkout = () => {
  // Annoying middle step to use dispatch...
//   const dispatch = useDispatch();

//   function handleCheckout (){

//   }

  // Using the useSelector hook to get the current state
  // of the dogs reducer from our Redux store:
  const pizzaCart = useSelector((store) => store.pizzaCart)

  useEffect(() => {
    axios({
      method: "GET",
      url: "/api/order",
    })
      .then((response) => {
        // We got the data, we even verified it was working
        // as expected:
        // console.table(response.data);
        // Now we need to send the array of book objects to
        // our bookList reducer:
        dispatch({
          type: "SHOW_CART",
          payload: response.data, // 👈 this is array of book objects!
        });
      })
      .catch((err) => {
        console.error("PizzaList useEffect fail:", err);
      });
  }, []); // 👈 don't forget the empty array!

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
        <input type="button" value="Checkout" />
      </div>
    </div>
  );
};

export default Checkout;
    
    
    
    
    
    
   
      






