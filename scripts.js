const rootDiv = document.getElementById('root');

function renderSignUp(){

    rootDiv.innerHTML =

    <h1>Sign Up</h1>
    <form id = "signupForm">
        <label for="name">Name: </label>
        <input type="text" id="name" placeholder="Enter your name"><br></br></input>
        <label for="email">Email: </label>
        <input type="email" id="email" placeholder="Enter your email"><br></br></input>
        <label for="passsword">Password: </label>
        <input type="password" id="password" placeholder="Enter your password"><br></br></input>
        <button type="button" onclick="handleSignUp()">Sign Up</button>
        
    </form>
    ;

}
