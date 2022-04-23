import { Button, Checkbox } from '@material-ui/core'
import { Close } from '@material-ui/icons'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Auth.scss'

const Auth = () => {
    const [chooseForm, setChooseForm] = useState('login')

    const handleRegister = () => {
        setChooseForm('register')
    }

    const handleLogin = () => {
        setChooseForm('login')
    }
    return (
        <div className="Auth"
            style={{
                backgroundImage: `url(https://sso.truyen.onl/plugins/images/login-register.jpg)`
            }}
        >
            <div className="Auth__login">
                <Link to="/"><Close className='Auth__login__close' /></Link>
                <div className='Auth__login__form'>
                    <div className="Auth__login__choose">
                        <h1 className={chooseForm === 'login' ? 'Auth__login__choose__item active' : 'Auth__login__choose__item'} onClick={handleLogin}>Đăng nhập</h1>
                        <h2 className={chooseForm === 'register' ? 'Auth__login__choose__item active' : 'Auth__login__choose__item'} onClick={handleRegister}>Đăng ký</h2>
                    </div>
                    <div className="Auth__login__email">
                        <div className="Auth__login__email__btn">
                            <p>Email</p>
                            {chooseForm === 'login' ? <h1>Gửi lại email kích hoạt</h1> : null}
                        </div>
                        <input type="email" placeholder='Nhập email' className='Auth__login__email__input' />
                    </div>
                    <div className="Auth__login__password">
                        <div className="Auth__login__password__btn">
                            <p>Mật khẩu</p>
                            {chooseForm === 'login' ? <h1>Quên mật khẩu?</h1> : null}

                        </div>
                        <input type="password" placeholder='Nhập password' />
                    </div>
                    {chooseForm === 'login' ? (
                        <div className="Auth__login__remember__password">
                            <Checkbox style={{
                                color: "#b78a28",
                            }} />
                            <p>Ghi nhớ mật khẩu</p>
                        </div>
                    ) : null}
                    <div className="Auth__login__button">
                        <Button disableElevation
                            className='Auth__login__button__btn'
                        >{chooseForm === 'login' ? 'Đăng nhập' : 'Đăng ký'}</Button>
                    </div>
                    <div className="Auth__login__notHaveAccount">

                        {chooseForm === 'login' ? (
                            <>
                                <p>Bạn chưa có tài khoản?</p>
                                <h1 onClick={handleRegister}>Đăng ký ngay</h1>
                            </>
                        ) : (
                            <>
                                <p>Bạn đã có tài khoản?</p>
                                <h1 onClick={handleLogin}>Đăng nhập ngay</h1>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth