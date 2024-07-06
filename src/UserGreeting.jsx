function UserGreeting(props){

    return(props.isLoggedIn? <h2>Welcome {props.username}</h2>
                            : <h2>Please Log in to Continue</h2>);
        
    
}

export default UserGreeting;