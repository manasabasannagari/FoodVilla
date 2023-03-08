import { IMG_CDN_URL } from "../config"
export const KitchenCard = (kitchen) => {
    return (
        <div className="card">
            <img src={kitchen.images.desktop}/>
            <h3>{kitchen.title}</h3>
            <h4>{kitchen.description}</h4>
        </div>
    )
}