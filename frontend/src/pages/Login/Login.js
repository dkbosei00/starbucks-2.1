import React, { useState } from "react";
import { Button, Col, Container, Form, Row, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from './styles.module.css';
import { useLoginMutation } from "../../services/appApi";
import Logo from '../../assets/starbucks.png';
import Starbuck from '../../assets/starbucks-cup.png';
import Coffee from '../../assets/coffee.png';
// import { LinkContainer } from "react-router-bootstrap";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [login, { isError, isLoading, error }] = useLoginMutation();
    function handleLogin(e) {
        e.preventDefault();
        login({ email, password });
    }
    return (
        <div className={styles.login_page}>
      <div className={styles.inner_container}>
        <div className={styles.left_container}>
        <div className={styles.logo_container}><img src={Logo} alt='logo-main' className={styles.logo_main}/></div>
        <div className={styles.form_container}>
                    <div className={styles.header_container}>
                        <h1>Welcome Back</h1>
                        <p>Sign in to your account to get started</p>
                    </div>

            <form onSubmit={handleLogin}>
            <div className={styles.form_group}>
                            <input type="email" name="email" className={`${styles.email} ${styles.input}`} onChange={  (e) => setEmail(e.target.value)} value={email}/>
                            <label className={styles.placeholder}>Email</label>
             </div>
             <div className={styles.form_group}>
                            <input type="password" name="password" className={`${styles.password} ${styles.input}`} onChange={(e) => setPassword(e.target.value)} value={password}/>
                            <label className={styles.placeholder}>Password</label>
                        </div>
                        {isError && <Alert variant="danger">{error.data}</Alert>}
                        <button type="submit" className={styles.submit_btn} disabled={isLoading}>Sign In</button>
            </form>
        </div>
        </div>
        <div className={styles.right_container}>
        <a href="/signup"><div className={styles.btn_container}><button className={styles.login_btn}>Create account </button></div></a>
               
        <div className={styles.starbuck_container}>
                    <img src={Starbuck} alt="chocolate-shake" className={styles.starbuck_img}/>
        </div>
        <div className={styles.coffee_container}>
                    <img src={Coffee} alt="coffee" className={styles.coffee_img}/>
                </div>
        </div>
      </div>
    </div>
    );
}

export default Login;
