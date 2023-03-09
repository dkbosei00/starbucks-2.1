import React, { useState } from "react";
// import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
// import "./Signup.css";
import { useSignupMutation } from "../../services/appApi";
import styles from './styles.module.css';
import Logo from '../../assets/starbucks.png';
import Starbuck from '../../assets/starbucks-cup.png';
import Coffee from '../../assets/coffee.png';


function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [signup, { error, isLoading, isError }] = useSignupMutation();

    function handleSignup(e) {
        e.preventDefault();
        signup({ firstName, lastName, email, password });
    }

    return (
        <div className={styles.signup_page}> 
        <div className={styles.inner_container}>
            <div className={styles.left_container}>
                <div className={styles.logo_container}><img src={Logo} alt='logo-main' className={styles.logo_main}/></div>
                <div className={styles.form_container}>
                    <div className={styles.header_container}>
                        <h1>Create an account</h1>
                        <p>Let's get started with your order by creating an account</p>
                    </div>
                    <form onSubmit={handleSignup}>
                        <div className={styles.form_group}>
                            <input type="text" name="firstName" onChange={(e) => setfirstName(e.target.value)} className={`${styles.firstName} ${styles.input}`} value={firstName}/>
                            <label className={styles.placeholder}>First Name</label>
                        </div>
                        <div className={styles.form_group}>
                            <input type="text" name="lastName" className={`${styles.lastName} ${styles.input}`} onChange={(e) => setlastName(e.target.value)} value={lastName}/>
                            <label className={styles.placeholder}>Last Name</label>
                        </div>
                        <div className={styles.form_group}>
                            <input type="email" name="email" className={`${styles.email} ${styles.input}`} onChange={(e) => setEmail(e.target.value)} value={email}/>
                            <label className={styles.placeholder}>Email</label>
                        </div>
                        <div className={styles.form_group}>
                            <input type="password" name="password" className={`${styles.password} ${styles.input}`} onChange={(e) => setPassword(e.target.value)} value={password}/>
                            <label className={styles.placeholder}>Password</label>
                        </div>
                        {error && <div className={styles.error_msg}>{error}</div>}
                        <button type="submit" className={styles.submit_btn}>Create account</button>
                    </form>
                </div>
            </div>
            <div className={styles.right_container}>
                <Link to="/login" className={styles.btn_link}>
                <div className={styles.btn_container}><button className={styles.login_btn}>Log in</button></div>
                </Link>
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

export default Signup;
