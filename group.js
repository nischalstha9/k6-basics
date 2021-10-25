const grp_obj = (AuthToken) => {
  let obj = {
    token: AuthToken,
    group_name: "Dashboard - " + AuthToken,
    headers: {
      "Content-Type": "application/json",
      Authorization: "Token " + AuthToken,
    },
    cookies: {
      zite_cookie: AuthToken,
    },
    requests: [
      {
        url: "https://zite.zite.io/api/v2/user-profile/",
        method: "get",
      },
      {
        url: "https://zite.zite.io/api/v2/notification/count/",
        method: "get",
      },
      {
        url: "https://zite.zite.io/api/v2/notification/list/?page=1",
        method: "get",
      },
      {
        url: "https://zite.zite.io/api/v2/me/",
        method: "get",
      },
      {
        url: "https://zite.zite.io/api/v2/my-assignments/",
        method: "get",
      },
      {
        url: "https://zite.zite.io/api/v2/site/?my_sites=True",
        method: "get",
      },
      {
        url: "https://zite.zite.io/api/v2/my-profile/",
        method: "get",
      },
      {
        url: "https://zite.zite.io/api/v2/my-profile/?content=to_review",
        method: "get",
      },
    ],
  };
  return obj;
};

export default grp_obj;
