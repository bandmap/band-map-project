import { useEffect } from "react"
import BandIntro from "../components/BandIntro"
import Footer from "../components/Footer"
import ImageGallery from "../components/ImageGallery"
import NavBar from "../components/NavBar"
import BandPage from "../components/BandPage"

function BandDiscoverPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <>
            <NavBar />
            <main>
                <div id="banddiscover-main">
                    {/* 背景區 */}
                    <div className="linear-bg">
                        <img src="/public/images/texture.png" alt="" />
                    </div>
                    {/* 頁面topbar */}
                    <div className="topbar">
                        <div className="left-part">
                            <div className="title">
                                <h2>BAND利商店</h2>
                                <p>本月樂團推薦</p>
                            </div>
                        </div>
                        <div className="right-part">
                            <img src="/public/images/line.svg" alt="" />
                        </div>
                    </div>
                </div>
                
            </main>
            <footer>
                {/* <Footer /> */}
            </footer>
        </>
    )
}

export default BandDiscoverPage