import profilepic from './assets/download.jpeg'

function Card(){

return(

    <div className="card">
        <img className="card-image" src={profilepic} alt="profile picture"></img>
        <h2 className="card-title">Learning</h2>
        <p className="card-text">It's all about taking the first step on to learning </p>
    </div>
);

}

export default Card;