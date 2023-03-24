const apiURL = "https://6419d040f398d7d95d4a2b9b.mockapi.io/task";

async function get() {
  const response = await fetch(apiURL);

  const data = await response.json();

  return data;
}

async function post(body) {
  const response = await fetch(apiURL, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const data = await response.json();

  return data;
}

async function put(id, body, status) {
  const response = await fetch(`${apiURL}/${id}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(body),
  });

  return response.ok;
}

async function destroy(id) {
  const response = await fetch(`${apiURL}/${id}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
    },
  });

  return response.ok;
}