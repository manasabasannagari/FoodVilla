 import { useEffect, useState } from "react";
 const useOnline = () => {
    const [isOnline, setIsOnline] = useState(true);
    //code should run only once so use useEffer with empty dependency array
    useEffect(()=>{
        const handleOnline  = ()=>{
            setIsOnline(true);
            };
            const handleOffline =  ()=>{
                setIsOnline(false);
                }
        window.addEventListener("online",handleOnline);
        window.addEventListener("offline",handleOffline);
        
    //remove the event listeners during component Unmounting.

        return () => {
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("offline", handleOffline);
        };
    },[]);


    return isOnline; // boolean true or false
}
export default useOnline;