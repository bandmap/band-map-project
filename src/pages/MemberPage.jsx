import { useEffect } from "react"
import NavBar from "../components/NavBar"
function MemberPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    
    return (
        <>
        <NavBar />
        </>
    )
}

export default MemberPage