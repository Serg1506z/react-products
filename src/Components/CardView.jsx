import './App.css'

export default function CardView({data}){
    return <div className='card'>
        <h2>{data.name}</h2>
        <p>{data.color}</p>
        <img src={data.img} alt="image" />
        <div className='card__container'>
            <p>${data.price}</p>
            <button>ADD TO CART</button>
        </div>
    </div>
}