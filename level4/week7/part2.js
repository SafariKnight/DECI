async function fetchRandomUserDataPromise() {
  return fetch("https://randomuser.me/api/")
    .then((response) => response.json())
    .then((response) => {
      // const results = response.results[0]
      results = response.results[0];
      return {
        name: `${results.name.first} ${results.name.last}`,
        email: results.email,
      };
    }).catch(() => {
      throw new Error("Failed Fetch")
    });
}

async function displayUserDataPromise() {
  fetchRandomUserDataPromise()
    .then((user) => {
      console.log(`Name: ${user.name}`);
      console.log(`Email: ${user.email}`);
    })
    .catch((error) => {
      console.warn(error.message);
    });
}

displayUserDataPromise()
