

export const getPosts = async (category) => {
    const response = await fetch(`https://api.reddit.com/r/pics/${category}.json`);
    return response.json();
}



