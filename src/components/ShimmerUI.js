export const ShimmerUI = () =>{
    return (
        <>
        <div className="main-container">
            <div className="restaurant-list">
                {
                    Array(10).fill("").map((res)=><div className="shimmer-card"></div>)
                }
                {/* {"Manasa"} */}
            </div>
        </div>
        </>
    );
};