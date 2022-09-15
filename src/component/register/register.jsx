import React, {useState} from 'react';
import style from './register.module.css';

const Register = () => {

    const [state, setState] = useState({
        name: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const signIn = () => {
        if (state.confirmPassword === state.password) {
            setState({
                name: state.name,
                username: state.username,
                email: state.email,
                password: '',
                confirmPassword: '',
            })
            console.log(state);
        }
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
                        <div className={style.headText}>REGISTER</div>
                        <div className={style.innerHeadText}>IT`S COMPLETELY FREE</div>
                    </div>
                    <div className={style.inputName}>
                        <div className={style.NAME}>NAME</div>
                        <input type="text" placeholder="Your full name" className={style.name} value={state.name}
                               onChange={e => setState({...state, name: e.target.value})}/>
                    </div>
                    <div className={style.InputUsername}>
                        <div className={style.USERNAME}>USERNAME</div>
                        <input type="text" placeholder="Username" className={style.username} value={state.username}
                               onChange={e => setState({...state, username: e.target.value})}/>
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
                    <div className={style.inputConfirmPassword}>
                        <div className={style.CONFIRM_PASSWORD}>Confirm Password</div>
                        <input type="password" placeholder="Confirm_Password" className={style.confirm_password}
                               value={state.confirmPassword}
                               onChange={e => setState({...state, confirmPassword: e.target.value})}/>
                    </div>
                    <div className={style.checkbox}>
                        <input type="checkbox" className={style.check}/>
                        <span className={style.checkmark}>Do you agree to our terms ?</span>
                    </div>
                    <div className={style.buttonCreate}>
                        <button className={style.buttonInput}>
                            CREATE ACCOUNT
                        </button>
                    </div>
                    <div className={style.buttonCreate}>
                        <button className={style.buttonInput} onClick={signIn}>
                            SIGN IN
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;