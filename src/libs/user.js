export const userLogin = async (values) => {
  const res = await fetch("/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  });

  return res;
};

// my profile
export const myProfile = async (id) => {
  try {
    const res = await fetch(
      process.env.NEXT_PUBLIC_BASE_URL + "/api/my-profile?userId=" + id,
      {
        method: "GET",
        credentials: "include",
      }
    );

    const data = await res.json();
    return data;
  } catch (error) {
    console.log("error in api call", error);
    return null;
  }
};

// update profile
export const updateProfile = async (id, values) => {
  try {
    const res = await fetch(
      process.env.NEXT_PUBLIC_BASE_URL + "/api/my-profile/update?userId=" + id,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      }
    );

    return res;
  } catch (error) {
    console.log("error in api call", error);
    return null;
  }
};

// my profile
export const logout = async () => {
  try {
    const res = await fetch(
      process.env.NEXT_PUBLIC_BASE_URL + "/api/auth/logout",
      {
        method: "GET",
        credentials: "include",
      }
    );

    const data = await res.json();
    return data;
  } catch (error) {
    console.log("error in api call api/auth/logout", error);
    return null;
  }
};
