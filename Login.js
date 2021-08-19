import React, { useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import FormLogin from './FormLogin';
import './FormLogin.css'
import './Glogin.css'
import './Glogout.css'
import './Login.css'

const clientId = "137926627167-3fca8s7kca94vbdp0h3agu6dii98rgrr.apps.googleusercontent.com";

function Login() {

    const [showloginButton, setShowloginButton] = useState(true);
    const [showlogoutButton, setShowlogoutButton] = useState(false);

    const onLoginSuccess = (res) => {
        console.log('Login berhasil:', res.profileObj);
        setShowloginButton(false);
        setShowlogoutButton(true);
    };

    const onLoginFailure = (res) => {
        console.log('Login gagal:', res);
    };

    const onSignoutSuccess = () => {
        alert("Yakin ingin logout?");
        setShowloginButton(true);
        setShowlogoutButton(false);
        console.clear()
    };

    return (
        <div>
            <div>
            { showloginButton ?
            <div className="login">
                <FormLogin/>
                <br/>
                <div className="glogin">
                    <GoogleLogin
                        clientId={clientId}
                        buttonText="Login dengan google"
                        onSuccess={onLoginSuccess}
                        onFailure={onLoginFailure}
                        cookiePolicy={'single_host_origin'}
                        isSignedIn={true} >
                    </GoogleLogin> 
                </div>
                
            </div>
                : null}

            { showlogoutButton ?
            <div className="glogout">
                <h4>Ini adalah halaman Login</h4>
                <GoogleLogout
                    clientId={clientId}
                    buttonText="Keluar"
                    onLogoutSuccess={onSignoutSuccess}  
                >
                </GoogleLogout>
            </div>
                : null
            }
            </div>
        </div>
    );
}
export default Login;