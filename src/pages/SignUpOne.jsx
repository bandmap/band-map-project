import { Link, useNavigate } from "react-router-dom"
import NavBar from "../components/NavBar"

function SignUpOne() {
    const navigate = useNavigate();

    const handleSignUp2 = () => {
        navigate('/signup2');
    }
    const handleLogIn = () => {
        navigate('/login');
    }

    return (
        <>
            <NavBar />
            <main>
                <div className="signup-bg">
                    <img className="bg-smile" src={`${import.meta.env.BASE_URL}/images/bg-smile.svg`} alt="" />
                    <img className="bg-blue12" src={`${import.meta.env.BASE_URL}/images/bg-Vector.svg`} alt="" />
                </div>
                <div className="login-popup">
                    <div className="login-card">
                        <h1>註冊隨Band地圖</h1>
                        <p>只要註冊即可使用隨Band地圖完整服務<br />
                            立即擇一管道驗證註冊</p>
                        <div className="card-content">

                            {/* 登入/註冊表單 */}
                            <form action="">
                                <div className="login-btns">
                                    <button onClick={handleSignUp2} className="orange-btn">註冊</button>
                                    <button onClick={handleSignUp2} className="orange-btn">使用Google帳號註冊</button>
                                    <div className="line"></div>
                                    <button onClick={handleLogIn} className="normal-btn">登入</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default SignUpOne