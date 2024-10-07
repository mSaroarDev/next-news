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

  // SEND EMAIL IF SUCCESS
  if (res.ok) {
    // Prepare the data to send to your email
    const dataToEmail = {
      subject: "NextNews Notification",
      name: `${values?.created_by}`,
      email: "no-reply@nextnews-teamsaroar.vercel.app",
      message: `
        <p>${values?.created_by} ${values?.text}</p>
        ${
          values?.notification_on
            ? `<p>Details at <a href="https://nextnews-teamsaroar.vercel.app${values?.notification_on}" target="_blank" rel="noopener noreferrer">Open Link</a></p>`
            : ""
        }
      `,
    };

    const formData = new FormData();
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY);
    formData.append("name", dataToEmail.name);
    formData.append("email", dataToEmail.email);
    formData.append("message", dataToEmail.message);

    // Sending formData directly
    const emailRes = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData, // Send formData without converting it to JSON
    });

    const emailData = await emailRes.json();

    if (emailData.success) {
      console.log("Email sent successfully", emailData);
    } else {
      console.log("Failed to send email", emailData);
    }
  }

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
