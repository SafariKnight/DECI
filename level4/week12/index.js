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
    const users = await fetchUsers();
    const posts = await fetchPosts();
    const data = [];
    users.forEach((user) => {
      data.push({
        user: user,
        posts: [],
      });
      posts.forEach((post) => {
        if (post.userId === data[data.length - 1].user.id) {
          data[data.length - 1].posts.push(post)
        }
      });
    });
    return data
  } catch (err) {
    console.log(`Error while fetching while fetching data :: ${err}`);
  }
}

const returnedUsers = await fetchData();
console.log(returnedUsers);
