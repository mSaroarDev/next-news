// create comment
export const createComment = async (values) => {
  const res = await fetch(
    process.env.NEXT_PUBLIC_BASE_URL + "/api/comment/create",
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

// create comment
export const getComments = async (postId) => {
  const res = await fetch(
    process.env.NEXT_PUBLIC_BASE_URL + "/api/comment/all?post=" + postId,
    {
      method: "GET",
    }
  );

  return res;
};
