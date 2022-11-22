function ProfileCard(props) {
    // 1. step:
    /*  
    const title = props.title;
    const text  = props.text; 
    */
   
    // 2. step:
    const {title, text , image , description } = props; 
    
    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-1by1">
                    <img src={image} alt="Placeholder img" />
                </figure>
            </div>
            <div className="card-content">
                <div className="media-content">
                    <p className="title is-4"> {title} </p>
                    <p className="subtitle is-6"> {text} </p>
                </div>
                <div className="content"> {description} </div>
            </div>
        </div>        
    );
};

export default ProfileCard;