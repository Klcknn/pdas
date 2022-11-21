function ProfileCard(props) {
    // 1. step:
    /*  
    const title = props.title;
    const text  = props.text; 
    */
   
    // 2. step:
    const {title, text} = props; 
    
    return (
        <div>        
            <div>The title is  {title} </div>
            <div>The text  is  {text}  </div>
        </div>
    );
};

export default ProfileCard;