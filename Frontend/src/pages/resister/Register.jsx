import React from 'react';
import "./Register.css";

export default function Register() {
  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className='loginLogo'>Real SNS</h3>
                <span className='loginDesc'>本格的なSNSを、自分の手で。</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <p className="loginMSG">アカウント作成</p>
                    <input type="text" className="loginInput" placeholder='User Name '/>
                    <input type="text" className="loginInput" placeholder='Email '/>
                    <input type="text" className="loginInput" placeholder='Password '/>
                    <input type="text" className="loginInput" placeholder='Comfirm Password '/>
                    <button className="loginButton">新規登録</button>
                    <button className="loginRegisterButton">ログイン</button>
                </div>
            </div>
        </div>
    </div>
  );
}