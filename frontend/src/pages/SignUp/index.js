import React from 'react';
import Aside from '../../components/Aside';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import './style.css';

function SignUp() {

    return (
        <div class="interface">
            <Header />

                <div class="main">
                    <div class="register">
                        <div class="sign-up">
                        <h3>Sign Up</h3>
                            <form>
                                <fieldset class="register-fieldset"><label for="signin-name"><legend>Name</legend></label>
                                    <input class="register-input" id="signin-name" type="text" placeholder="Name" />
                                </fieldset>
                                <fieldset class="register-fieldset"><label for="signin-email"><legend>Email</legend></label>
                                    <input class="register-input" id="signin-email" type="email" placeholder="Email" />
                                </fieldset>
                                <fieldset class="register-fieldset"><label for="signin-password"><legend>Password</legend></label>
                                    <input class="register-input" id="signin-password" type="password" placeholder="**********" />
                                </fieldset>
                                <fieldset class="register-fieldset"><label for="signin-confirm-password"><legend>Confirm password</legend></label>
                                    <input class="register-input" id="signin-confirm-password" type="password" placeholder="**********" />
                                </fieldset>
                                <button>Sign Up</button>
                            </form>
                        </div>
                    </div>
                </div>

            <Footer />
            <Aside />
        </div>
    )

}

export default SignUp;