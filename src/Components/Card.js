const Card = ({paint,author}) => {
    return(
        <div>
            <div className="">
                <img src={paint} className="" alt="..."/>
                <div className="">
                    <h5 className="">{author}</h5>                    
                </div>
            </div>
        </div>
    );
}

export default Card;