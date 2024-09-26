const rootDiv = document.getElementById('root');

function renderSignUp(){

    rootDiv.innerHTML =
    `
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
    `
    ;

}


let userName = '';

function handleSignUp(){
    const nameInput = document.getElementById('name').value;
    const emailInput = document.getElementById('email').value;
    const passwordInput = document.getElementById('password').value;
    if (nameInput && emailInput && passwordInput) {
        userName = nameInput; // Store the user's name in a global variable
        renderHomePage();     // Move to the next step in the app
    } else {
        alert('Please fill out all fields');
    }
}

function renderHomePage(){
    rootDiv.innerHTML ='
        <h1>Welcome, $(userName)!</h1>
        <h2>Create a Post</h2>
        <textarea id="postContent" placeholder="What's on your mind?"></textarea><br></br>
        <button type="button" onclick="handleCreatePost()">Post</button>
        <h3>Your Posts</h3>
        <ul id="postList"></ul>
    ';
}

let posts = [];

function handleCreatePost(){
    const postContent = document.getElementById('postContent').value;
    if(postContent){
        posts.push(postContent);
        renderPostList();
    }else{
        alert('Post content cannot be empty');
    }
}

function renderPostList(){
cost postListElement = document.getElementById('postList');
postListElement.innerHTML = '';

post.forEach((post) => {
    const postItem = document.createElement('li');
    postItem.textContent = post;
    postListElement.appendChild(postItem);
    });
}
    
