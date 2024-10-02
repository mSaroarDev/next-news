export const createNotification = async (values) => {
  const res = await fetch(
    process.env.NEXT_PUBLIC_BASE_URL + "/api/notifications/create",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    }
  );

  const data = await res.json();
  return data;
};

export const getNotification = async () => {
  const res = await fetch(
    process.env.NEXT_PUBLIC_BASE_URL + "/api/notifications/all",
    {
      method: "GET",
    }
  );

  return res;
};
