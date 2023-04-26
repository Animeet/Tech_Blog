document.querySelector("#new-post-form").addEventListener("submit", (event) => {
    event.preventDefault();

    const title = document.querySelector("#title").value;
    const content = document.querySelector("#content").value;

    console.log(title)
    console.log(content)

    fetch("/api/blogposts", {
        method: 'POST',
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({
            "contents": content,
	        "title": title
        })
    })
    .then(() => {
        console.log('redirect')
        window.location.href = "/"
    })

})