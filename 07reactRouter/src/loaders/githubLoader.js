// loaders/githubLoader.js

export const githubLoader = async () => {
    const response = await fetch('/users.json');
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    const user = data.users.find(user => user.username === 'john_doe');
    if (!user) {
      throw new Error('User not found');
    }
    return user.followers;
  };
  