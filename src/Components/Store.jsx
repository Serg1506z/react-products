import CardView from "./CardView"
import ListView from "./ListView"
import './App.css'

export default function Store ({products, icon}){

    return <div className="cards">
        {products.map(item => {
            return  icon === 'view_list' 
            ? <ListView data={item}/>
            : <CardView data={item}/>
        })}
    </div>

}