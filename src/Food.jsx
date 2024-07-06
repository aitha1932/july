function Food(){

    const food1 = "Waffle";
    const food2 = "Creepe";

    return(
        <ul>
            <li>Pancake</li>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>
    );
}

export default Food;