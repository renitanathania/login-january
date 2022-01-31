import React from "react";

const Login = () => {
   return (
    <div class="container rounded">
        <h1>Login</h1>
        <form action="login">
            <h4>Username</h4>
            <input class ="rounded"type="text" placeholder="Enter Username"/>
            <h4>Password</h4>
            <input class ="rounded" type="password" placeholder="Enter Password"/>
            <button class="btn-danger d-grid gap-2 col-3 mx-auto">Login</button>
        </form>
    </div>
   );
};

export default Login;