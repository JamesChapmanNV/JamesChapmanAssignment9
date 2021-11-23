

////////////////////////
// NOTE: Use the API endpoints available at
// https://jsonplaceholder.typicode.com/
// to get the data required in these exercises.
// HINT: Read the documented Resources and Routes.
// Also the guide:
// https://jsonplaceholder.typicode.com/guide/
///////////////////////

// 1) Create a function named "getAllPosts".
// Use Fetch with Async/Await to request
// all the posts. The function should
// return all the posts as JSON data.

const getAllPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const postsJson = await response.json();
    return postsJson;
};


// 2) Create a function named "getAllUsers".
// Use Fetch with Async/Await to request
// all the posts. The function should
// return all the posts as JSON data.

const getAllUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const postsJson = await response.json();
    return postsJson;
};


// 3) Create a function named "getComments".
// This function needs to accept a "postID"
// parameter.
// Use Fetch with Async/Await to request
// all the comments for the postID that
// is passed in as a parameter.
// The function should return all the
// comments for the requested postID
// as JSON data.

const getComments = async (postID) => {
    const posts = await getAllPosts();
    let allPosts = [];
    allPosts = posts;

    let postsWithId = [];
    for (let i = 0; i < allPosts.length; i++){
        if(allPosts[i].id == postID)
             postsWithId.push(allPosts[i]);
    }
    //const jsonPostsWithId = JSON.stringify(postsWithId);
    return postsWithId;
}

// 4) Create a function named "getUser".
// This function needs to accept a "userID"
// parameter.
// Use Fetch with Async/Await to request
// the data for the requested user.
// The function should return JSON data.

const getUser = async (userID) => {
    const users = await getAllUsers();
    let allUsers = [];
    allUsers = users;

    for (let i = 0; i < allUsers.length; i++){
        if(allUsers[i].id == userID)
            return allUsers[i];
    }
    return;
}

// 5) Create a function named "getTodosForUser".
// This function needs to accept a "userID"
// parameter.
// Use Fetch with Async/Await to request
// all of the todos for the requested user.
// The function should return JSON data.

const getAllTodos = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todosJson = await response.json();
    return todosJson;
};

const getTodosForUser = async (userID) => {
    const todos = await getAllTodos();
    let allTodos = [];
    allTodos = todos;

    let todosWithId = [];
    for (let i = 0; i < allTodos.length; i++){
        if(allTodos[i].userId == userID)
            todosWithId.push(allTodos[i]);
    }
    //const jsonTodosWithId = JSON.stringify(todosWithId);
    return todosWithId;
}

/* console.log(getAllUsers())
console.log(getComments(3))
console.log(getUser(3))
console.log(getTodosForUser(3)) */
