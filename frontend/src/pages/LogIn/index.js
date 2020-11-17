import React from 'react';
import Aside from '../../components/Aside';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import './style.css';

function LogIn() {

    return (
        <div class="interface">
            <Header />

                <div class="main">
                    <div class="register">
                        <div class="log-in">
                            <h3>Log In</h3>
                            <form>
                                <fieldset class="register-fieldset"><label for="login-email"><legend>Email</legend></label>
                                    <input class="register-input" id="login-email" type="text" placeholder="Email" />
                                </fieldset>
                                <fieldset class="register-fieldset"><label for="login-password"><legend>Password</legend></label>
                                    <input class="register-input" id="login-password" type="password" placeholder="**********" />
                                </fieldset>
                                <button>Log In</button>
                            </form>
                        </div>
                    </div>
                </div>

            <Footer />
            <Aside />
        </div>
    )

}

export default LogIn;