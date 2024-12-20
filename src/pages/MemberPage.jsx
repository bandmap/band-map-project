import { useEffect } from "react"
import MemberBar from "../components/MemberBar";
import SideBar from "../components/SideBar";
import CardOne from "../components/CardOne";

function MemberPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    const sampleCards = [
        {
            img: `${import.meta.env.BASE_URL}/images/活動/近期活動-都市女生-洪佩瑜.jpg`,
            key: 1,
            date: "2024/12/14 (六）20: 00",
            event: "【2024都市女聲】：洪佩瑜-台北場(加場)",
            location: "Legacy Taipei 音樂展演空間",
            nametag: [
                "洪佩瑜"
            ]
        },
        {
            img: `${import.meta.env.BASE_URL}/images/活動/近期活動-柯泯薰-好好的專輯發片演唱會.jpg`,
            key: 2,
            date: "2024/12/26 (四）19: 30",
            event: "柯泯薰 misi Ke《好好的 BE GOOD》專輯發片專場",
            location: "Legacy Taipei 音樂展演空間",
            nametag: [
                "柯泯薰 misi Ke"
            ]
        },
    ];

    

    return (
        <>
            {/* Topbar */}
            < MemberBar />
            <main>
                <div className="collect-content">
                    {/* Sidebar */}
                    < SideBar />
                    {/* Content */}
                    <div id="collect-event" className="collect-a">
                        <h2>收藏的活動</h2>
                        < div className="card-list" >
                            {sampleCards.map((searchcard) => (
                                <CardOne searchcard={searchcard} />
                            ))}
                        </div>
                    </div>
                    <div id="collect-band" className="collect-a">
                        <h2>收藏的樂團</h2>
                        < div className="card-list" >
                            {sampleCards.map((searchcard) => (
                                <CardOne searchcard={searchcard} />
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </ >
    )
}

export default MemberPage