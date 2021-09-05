import Card from "./Card";
import Data from "../Data/data.json"

import "../Style/paint.css"
const Paint = () => {
    const lista = Data.paints.map( (item, index) => {
        return(
            <Card
                key = {item.author + index} 
                paint={item.paint} 
                author={item.author}
            />
        );
    })
    return(
        <div className="grid">            
            {lista}
        </div>
    );
}

export default Paint;