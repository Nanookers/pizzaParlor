import { useState } from "react";
import { useDispatch } from "react-redux"
import axios from "axios";


function Form(){
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [zip, setZip] = useState('')
    const [type, setType] = useState('')

    // const dispatch = useDispatch();

    function handleSubmit(event) {
        event.preventDefault();

        axios({
            method: 'POST',
            url: '/api/order',
            data: {
                customer_name: name,
                street_address: address,
                city: city,
                zip: zip,
                type: type,
                total: 12.35,
                pizzas: [{
                    "id": "1",
                    "quantity": "1"
                  },{
                    "id": "2",
                    "quantity": "1"
                  }]
                
            }
        }).then((response) => {

        }).catch((err) => {
            console.error('POST broke', err);
        })
    }


    return (
        <>
            <h2>Step 2: Customer Information</h2>
            <form onSubmit={handleSubmit}>
                <input
                    required
                    placeholder="Name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}>
                </input>

                <input
                    required
                    placeholder="Your Address"
                    value={address}
                    onChange={(event) => setAddress(event.target.value)}>
                </input>

                <input
                    required
                    placeholder="City"
                    value={city}
                    onChange={(event) => setCity(event.target.value)}>
                </input>

                <input
                    required
                    placeholder="Zip code"
                    value={zip}
                    onChange={(event) => setZip(event.target.value)}>
                </input>

            {/* Using Text box as  temporary place holder */}
  
                <input
                    required
                    placeholder="Pick-up/Deliver"
                    value={type}
                    onChange={(event) => setType(event.target.value)}>
                </input>

                <button type="submit">
                     Add Info
                </button>
            </form>

        </>
    )
}

export default Form