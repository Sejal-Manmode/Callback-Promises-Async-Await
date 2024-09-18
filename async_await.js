document.getElementById('fetchButton').addEventListener('click', async function() {
    const contentDiv = document.getElementById('content');
    contentDiv.textContent = "Loading...";

    try {
        const response = await fetch('https://dummyjson.com/posts');
        if (!response.ok) {
            console.log("Network response was not ok.");
        }
        const data = await response.json();
        const titles = data.posts.map(post => post.title).join('<br>');
        document.getElementById('content').innerHTML = titles;
    } catch (error) {
        contentDiv.textContent = `Operation Timed out: ${error.message}`;
    }
});