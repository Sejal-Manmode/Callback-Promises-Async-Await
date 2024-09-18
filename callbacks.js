        document.getElementById('fetchButton').addEventListener('click', function() {
          // Simulate a delay of 5 seconds using a callback function
          const contentDiv = document.getElementById('content');
          contentDiv.textContent = "Callback executed after 5 seconds...";
          setTimeout(() => {
              fetchData();
          }, 5000);
      });
     
      function fetchData() {
          // Fetch data from JSONPlaceholder API
          fetch('https://dummyjson.com/posts')
              .then(response => response.json())
              .then(data => {
                  const titles = data.posts.map(post => post.title).join('<br>');
                  document.getElementById('content').innerHTML = titles;
              })
              .catch(error => {
                  document.getElementById('content').innerHTML = "Error fetching data.";
                  console.error('Error:', error);
              });
      }