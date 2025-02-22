function createUser(name, id) {
  return { name, id };
}
function createPost(title, userId) {
  return { title, userId };
}

const users = [createUser("Kareem", 1), createUser("Eslam", 2)];
const posts = [createPost("Post 1", 1), createPost("Post 2", 2)];

async function fetchUsers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(users);
    }, 1000);
  }).catch((err) => {
    console.log(`Ran into an error while fetching users :: ${err}`);
  });
}

async function fetchPosts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(posts);
    }, 1000);
  }).catch((err) => {
    console.log(`Ran into an error while fetching posts :: ${err}`);
  });
}

async function fetchData() {
  try {

  const user = await fetchUsers();
  const post = await fetchPosts();

  return { user, post};
  } catch(err) {
    console.log(`Error while fetching while fetching data :: ${err}`)
  }
}

const returnedUsers = await fetchData();
console.log(returnedUsers);
