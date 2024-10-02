// create category
export const createCategory = async (values) => {
  const res = await fetch(
    process.env.NEXT_PUBLIC_BASE_URL + "/api/category/create",
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

// all category
export const getAllCategory = async () => {
  const res = await fetch(
    process.env.NEXT_PUBLIC_BASE_URL + "/api/category/all",
    {
      method: "GET",
    }
  );

  return res;
};

// edit category
export const editCategory = async (id, values) => {
  const res = await fetch(
    process.env.NEXT_PUBLIC_BASE_URL + "/api/category/edit/" + id,
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
