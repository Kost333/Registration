import React, {useState} from 'react';
import style from './login.module.css';

const Login = () => {

    const [state, setState] = useState({
        email: '',
        password: '',
    });

    const login = () => {
        setState({
            email: state.email,
            password: state.password,
        })
        console.log(state)
    }

    return (
        <div className={style.window}>
            <div className={style.innerWindow}>
                <div className={style.image}>
                    <div className={style.logo}>
                        <div className={style.COMPANY}>COMPANY</div>
                        <div className={style.LOGO}>LOGO</div>
                        <div className={style.COMPANY}>NAME</div>
                    </div>
                </div>
                <div className={style.Registration}>
                    <div className={style.headerText}>
                        <div className={style.logo}>
                            <div className={style.COMPANY}>COMPANY</div>
                            <div className={style.COMPANY}>NAME</div>
                        </div>
                    </div>
                    <div className={style.inputEmail}>
                        <div className={style.EMAIL}>EMAIL</div>
                        <input type="email" placeholder="Email address" className={style.email} value={state.email}
                               onChange={e => setState({...state, email: e.target.value})}/>
                    </div>
                    <div className={style.inputPassword}>
                        <div className={style.PASSWORD}>PASSWORD</div>
                        <input type="password" placeholder="Password" className={style.password} value={state.password}
                               onChange={e => setState({...state, password: e.target.value})}/>
                    </div>
                    <div>
                        <nav>
                            <span className={style.textCreateAccount}>Have an account?</span>
                            <a href="./register" className={style.CreateAccountLink}>Create Account</a>
                        </nav>
                    </div>
                    <div className={style.buttonLogin}>
                        <button className={style.buttonInput} onClick={login}>
                            SIGN IN
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;