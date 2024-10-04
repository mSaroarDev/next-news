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

// edit posts
export const editPosts = async (id, values) => {
  const res = await fetch(
    process.env.NEXT_PUBLIC_BASE_URL + "/api/post/edit?id=" + id,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    }
  );

  return res;
};

// edit posts
export const deletePosts = async (id) => {
  const res = await fetch(
    process.env.NEXT_PUBLIC_BASE_URL + "/api/post/delete?id=" + id,
    {
      method: "DELETE",
    }
  );

  return res;
};

// get a  post details
export const gettPostDetails = async (id) => {
  const res = await fetch(
    process.env.NEXT_PUBLIC_BASE_URL + "/api/post/details?id=" + id,
    {
      method: "GET",
    }
  );

  const data = await res.json();
  return data?.data;
};
