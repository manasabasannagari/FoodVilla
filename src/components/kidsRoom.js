export const KidsRoom =(kidsRoom)=>{
    return(
        <div className="card">
        <img src={kidsRoom.addImages[0].desktop}/>
        <h3>{kidsRoom.title}</h3>
        {/* <h4>{kidsRoom.description}</h4> */}
    </div>
    )
}