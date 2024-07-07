//onChange = event handler used primarily with form elements
//            ex. <input>, <textarea>, <select>, <radio>
//              Triggers a function every time the value of input changes.  



import React, {useState} from 'react';

function MyComponent(){

    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState();
    const [comment,setComment] = useState();
    const[payment, setPayment] = useState("");
    const[shipping, setShipping]= useState("");
    const [age, setAge] = useState(0);
    const [isEmployeed, setIsEmployeed] = useState(false);

    //const updateName =() =>{setName("Education");}
    const incrementAge = () => {setAge(age+1);}
    const toggleEmployeedStatus= () => {setIsEmployeed(!isEmployeed);}

    function handleNameChange(event){
        setName(event.target.value);
    }

    function handleQuantityChange(event){
        setQuantity(event.target.value);
    }

    function handleCommentChange(event){
        setComment(event.target.value);
    }

    function handlePaymentChange(event){
        setPayment(event.target.value);
    }

    function handleShippingChange(event){
        setShipping(event.target.value);
    }

    return(
        <div>
            <input value={name} onChange={handleNameChange}/>
            <p>Name: {name}</p>

            <p>Age : {age}</p>
            <button onClick={incrementAge}> Increment Age</button>

            <p>IsEmployeed: {isEmployeed ? "Yes" : "No"}</p>
            <button onClick={toggleEmployeedStatus}> Toggle Status</button><br />

            <input value={quantity} onChange={handleQuantityChange} type="number"/>
            <p>Quantity: {quantity}</p>

            <textarea value={comment} onChange={handleCommentChange}
            placeholder='Enter Delivery Instructions'/>
            <p>Comment: {comment}</p>

            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select an Option</option>
                <option value="visa">Visa</option>
                <option value="MasterCard">MasterCard</option>
                <option value="GiftCard">GiftCard</option>
            </select>
            <p>Payment: {payment}</p>

            <label>
                <input type="radio" value="Pick Up"
                    checked={shipping === "Pick Up"}
                    onChange={handleShippingChange}/>
                Pick Up</label>
            <label><br />
            <input type="radio" value="Delivery"
                    checked={shipping === "Delivery"}
                    onChange={handleShippingChange}/>Delivery</label>
            <p>Shipping: {shipping}</p>
            
        </div>
    );
}

export default MyComponent;