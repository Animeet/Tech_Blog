document.querySelector("#signup-form").addEventListener("submit", (event) => {
    event.preventDefault();

    const username = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;

    console.log(username)
    console.log(password)

    fetch("/api/users/signup", {
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
        console.log('redirect')
        window.location.href = "/"
    })

})