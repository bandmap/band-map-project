import { Link } from "react-router-dom"

function CardLong({ searchcard }) {
    return (
        <Link to='/event1' className="card-long" key={searchcard.key}>
            <figure><img src={`${import.meta.env.BASE_URL}${searchcard.img}`} alt={searchcard.event} /></figure>

            <div className="card-right">
                <div className="content">
                    <p className="date">{searchcard.date}</p>
                    <p className="event">{searchcard.event}</p>
                    <div className="location">
                        <figure><img src={`${import.meta.env.BASE_URL}/images/icon/icon-地點.svg`} alt="icon-地點" /></figure>
                        <p>{searchcard.location}</p>
                    </div>
                </div>
                <div className="bottom-line">
                    <div className="name-tags">
                        {searchcard.nametag.map((band, i) => {
                            return <p key={i} className="nametag">{band}</p>
                        })}
                    </div>
                    <div className="btns">
                        <figure className="like"><img src={`${import.meta.env.BASE_URL}/images/icon/icon-like.svg`} alt="icon-like" /></figure>
                        <div className="collect-btn">
                            <figure><img src={`${import.meta.env.BASE_URL}/images/icon/icon-plus.svg`} alt="" /></figure>
                            <p>行事曆</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}
export default CardLong