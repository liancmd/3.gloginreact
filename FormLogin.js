import React, { Component } from 'react'
import "./FormLogin.css"

export default class FormLogin extends Component {
    render() {
        return (
        <div>
            <div className="formlogin">
                <h3 className="hlogin">Silahkan login</h3>
                <form>
                    <label>Email</label>
                    <input type="text" name="email" className="inputlogin" placeholder="Masukkan Email."/>
                    <label>Password</label>
                    <input type="text" name="password" className="inputlogin" placeholder="Masukkan Password"/>
                    <input type="submit" className="tombol_login"/>
                </form>

            </div>
        </div>           
        )
    }
}
