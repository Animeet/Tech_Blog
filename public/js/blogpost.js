document.querySelector("#commentform").addEventListener("submit", (event) => {
    event.preventDefault();

    const input = document.querySelector("#commentinput").value;
    const blogpostid = document.querySelector("#blogpostid").value;


    fetch("/api/comments", {
        method: 'POST',
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({
            "content": input,
            "blogPostId": blogpostid
        })
    })
    .then((res) => {
        location.reload();
    })

})