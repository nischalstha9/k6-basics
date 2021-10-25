const TOKEN = "";

let requests = [];
requests = [
  {
    url: "https://zite.zite.io/api/v2/user-profile/",
    method: "get",
    headers: {
      "Content-Type": "application/json",
      "x-csrftoken":
        "Bw2DPkHWEKH0UM5QfS4vPTVw91GREZ6GDxgcQcG29JNpRXeiYq4IkYASTgrkR9Dt",
      Authorization: "Token " + TOKEN,
    },
    cookies: {
      csrftoken:
        "Bw2DPkHWEKH0UM5QfS4vPTVw91GREZ6GDxgcQcG29JNpRXeiYq4IkYASTgrkR9Dt",
      zite_cookie: "1f78420bfd4d2fdc9c52851098e3419787a5dbe7",
    },
    data: {},
  },
]; //uncomment it when you want to use single requests

export default requests;
