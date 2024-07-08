
function Button(){

    let count=0;
    const handleClick =(e) => e.target.textContent ="OUCH";

    return(
        <button className="button" onDoubleClick={(e) =>handleClick(e)}>Sign in</button>
    );

}

export default Button;