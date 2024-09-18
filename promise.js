document.getElementById('fetchButton').addEventListener('click', function() {
    const contentDiv = document.getElementById('content');
    contentDiv.textContent = "Loading...";

    // Create a promise that fetches data
    const fetchData = new Promise((resolve, reject) => {

        fetch('https://dummyjson.com/posts')
            .then(response => {
                if (!response.ok) {
                    console.log("Network response was not ok.");
                }
                return response.json();
            })
            .then(data => resolve(data))
            .catch(error => reject(error));
    });

    // Handle the promise
    fetchData
        .then(data => {
            const titles = data.posts.map(post => post.title).join('<br>');
            document.getElementById('content').innerHTML = titles;
        })
        // 5 seconds timeout
        setTimeout(() => {
            fetchData.catch(error=> {
                document.getElementById('content').innerHTML = "Operation Timed out";
                      console.error(`Error:${error}` );
            });
        }, 5000);
});