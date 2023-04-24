document.querySelector("#login-form").addEventListener("submit", (event) => {
    event.preventDefault();

    const username = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;

    console.log(username)
    console.log(password)

    fetch("/api/users/login", {
        method: 'POST',
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({
            "password": password,
	        "username": username
        })
    })
    .then(() => {
        window.location.href = "/test"
    })

})