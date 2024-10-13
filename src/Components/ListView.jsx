export default function ListView ({data}){
    return <div className="list-item">
        <img src={data.img} alt="" />
        <h2>{data.name}</h2>
        <p>{data.color}</p>
        <p className="price">${data.price}</p>
        <button>ADD TO CART</button>
    </div>
}