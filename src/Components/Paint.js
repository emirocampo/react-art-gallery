import Card from "./Card";
import Data from "../Data/data.json"
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
        <div>            
            {lista}
        </div>
    );
}

export default Paint;