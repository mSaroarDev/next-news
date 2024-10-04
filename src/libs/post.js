// create posts
export const createPosts = async (values) => {
  const res = await fetch(
    process.env.NEXT_PUBLIC_BASE_URL + "/api/post/create",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    }
  );

  return res;
};

// get all posts
export const getAllPosts = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/api/post/all", {
    method: "GET",
  });

  return res;
};
