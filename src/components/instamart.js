// import { useState } from "react";
import { useState } from "react";
const Section = ({title, description, isVisible, setIsVisible}) => {
    // const [isVisible, setIsVissible] = useState(false);
    return (
        <div className="border border-black p-2 m-2">
            <h1 className="font-bold">{title}</h1>
            {
            
                isVisible ? <button className="cursor-pointer underline" onClick={()=>setIsVisible(true) }>Hide</button> :
                <button className="cursor-pointer underline" onClick={()=>setIsVisible(true) }>Show</button>
            }
            {setIsVisible}
            {isVisible && <p>{description}</p>}
        </div>
    )
}
const InstaMart = () => {
    const [sectionConfig, setSectionConfig] = useState({
        showAbout: true,
        showTeam: false,
        showProducts: false,
        showCareer: true
    });
return( <>
<h1 className="text-3xl p-2 m-2 font-bold">Instamart</h1> 
<div>
    {/* <AboutInstaMart/>
    <DetailsofInstamart/>
    <TeamInstamart/>
    <Products/>
    <Careers/> 
    */}
    <Section title = {"About Instamart"} 
     setIsVisible={()=> setSectionConfig({
        showAbout: true,
        showTeam: false,
        showProducts: false,
        showCareer: false})}
    description = {"Where does it come from?Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,  comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."}
     isVisible = {sectionConfig.showAbout}/>

       <Section title = {"Team of Instamart"} 
       setIsVisible={()=> setSectionConfig({
        showAbout: false,
        showTeam: true,
        showProducts: false,
        showCareer: false})}
    description = {"Where does it come from?Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,  comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."}
    isVisible = {sectionConfig.showTeam}/>

    <Section title = {"Products Instamart"} 
    setIsVisible={()=> setSectionConfig({
        showAbout: false,
        showTeam: false,
        showProducts: true,
        showCareer: false})}
    description = {"Where does it come from?Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,  comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."}
    isVisible = {sectionConfig.showProducts}/>

    <Section title = {"Career Instamart"} 
    setIsVisible={()=> setSectionConfig({
        showAbout: false,
        showTeam: false,
        showProducts: false,
        showCareer: true})}
    description = {"Where does it come from?Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,  comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."}
    isVisible = {sectionConfig.showCareer}/>
    </div>
</>    
)}
// export default InstaMart;



/**
 * Implement collapsable accordion practice
 */
const AccordionComponent = ({title, description, isVisible, setIsVisible}) => {
 
    return(
    <>
    <div className="border border-black p-2 m-2">
    <p className=" font-bold">{title}</p>
    {isVisible ? <button className="cursor-pointer" onClick={()=>setIsVisible(false)}>Hide</button>:
    <button className="cursor-pointer" onClick={()=>setIsVisible(true)}>Show</button>}
    {isVisible && <p>{description}</p>}
    {console.log(setIsVisible)}
    </div>
    
    </>
 )
}
const ParentComponent = () => {
    const [sectionConfig, setSectionConfig] = useState({
        showAbout: true,
        showTeam: false,
        showCareer: false
    })
    return (
        <>
        <AccordionComponent 
        title = {"About Insta Mart"}
        description = {"Where does it come from?Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin "}
        setIsVisible = {()=>{
            setSectionConfig({
                showAbout: true,
                showTeam: false,
                showCareer: false
            })
        }}
        isVisible={sectionConfig.showAbout}
        />

        <AccordionComponent 
        title = {"Team Insta Mart"}
        description = {"Where does it come from?Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin "}
        isVisible = {sectionConfig.showTeam}
        setIsVisible = {()=>{
            setSectionConfig({
                showAbout: false,
                showTeam: true,
                showCareer: false
            })
        }}
        />

        <AccordionComponent 
        title = {"Career Insta Mart"}
        description = {"Where does it come from?Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin "}
        isVisible = {sectionConfig.showCareer}
        setIsVisible = {()=>{
            setSectionConfig({
                showAbout: false,
                showTeam: false,
                showCareer: true
            })
        }}
        />
        </>
    )
}
// export default ParentComponent;
/**

Now the above code is like a piece of garbage. Everywhere we are setting the configurations/

*/
const AccordionOptComponent = ({title, description, isVisible, setIsVisible}) => {
 
    return(
    <>
    <div className="border border-black p-2 m-2">
    <p className=" font-bold">{title}</p>
    {isVisible ? <button className="cursor-pointer" onClick={()=>setIsVisible(false)}>Hide</button>:
    <button className="cursor-pointer" onClick={()=>setIsVisible(true)}>Show</button>}
    {isVisible && <p>{description}</p>}
    {console.log(setIsVisible)}
    </div>
    
    </>
 )
}
const ParentOptComponent = () => {
    const [isvisibleSection, setIsVisibleSection] = useState("about")
    return (
        <>
        <AccordionOptComponent 
        title = {"About Insta Mart"}
        description = {"Where does it come from?Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin "}
        setIsVisible = {(value)=>value ? setIsVisibleSection("about"): setIsVisibleSection("")}
        isVisible={isvisibleSection === "about"}
        />

        <AccordionOptComponent 
        title = {"Team Insta Mart"}
        description = {"Where does it come from?Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin "}
        isVisible = {isvisibleSection === "team"}
        setIsVisible = {(value)=>value ? setIsVisibleSection("team"): setIsVisibleSection("") }
        />

        <AccordionOptComponent 
        title = {"Career Insta Mart"}
        description = {"Where does it come from?Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin "}
        isVisible = {isvisibleSection === "career"}
        setIsVisible = {(value)=>value ? setIsVisibleSection("career"): setIsVisibleSection("")}
        />
        </>
    )
}
export default ParentOptComponent;