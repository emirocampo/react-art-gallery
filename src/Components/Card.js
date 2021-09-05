import "../Style/card.css"

const Card = ({paint,author}) => {
    return(
        <>
            <div className="card">
                <img src={paint} className="" alt="..."/>
                <div className="">
                    <h5 className="">{author}</h5>                    
                </div>
            </div>
        </>
    );
}

export default Card;