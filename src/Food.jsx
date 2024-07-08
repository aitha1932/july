import React,{useState} from 'react';
function Food(){

    const [foods, setFoods] = useState(["Waffle", "Creepe", "Pancake"]);

    function handleAddFood(){
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";

        setFoods(f => [...foods, newFood]);
    }

    function handleRemoveFood(index){
        setFoods(foods.filter((_,i ) => i!== index));
    }

    return(
        <div>
            <h2>List of food</h2>
            <ul>
                {foods.map((food,index) => 
                <li key={index} onClick={() => handleRemoveFood(index)}>{food}</li>)}
            </ul>
            <input type="text" id="foodInput" placeholder='Enter Food Name'/>
            <button onClick={handleAddFood}>Add Food</button>

        </div>

    );
}

export default Food;