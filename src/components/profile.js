const Profile = (props) => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(1);

    //called after the render
    // useEffect(() => {
      
    // }, )
    
    return (
        <>
        <div>Profile from FUNCTIONAL based component..</div>
        {count}
        <button onClick={() => {
            setCount(1);
            setCount2(2)
            }}> 
        </button>
        </>
    )
}
export default Profile;