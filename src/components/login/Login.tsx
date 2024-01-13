import React from 'react';
import "./Login.scss";
import { Button } from '@mui/material';

function Login() {
  return (
    <div className='login'>
        <div className="loginLogo">
            <img src="./logo512.png" alt="" />
        </div>

        <Button>ログイン</Button>
    </div>
  )
}

export default Login