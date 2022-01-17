// https://www.ruanyifeng.com/blog/2020/12/fetch-tutorial.html

async function getJSON() {
  let url = "https://www.ruanyifeng.com";

  try {
    const res = await fetch(url);

    const { ok, status, statusText, url, type, redirected } = res;

    return await res.json();
  } catch (err) {
    console.error("Request Failed", err);
  }
}

async function fetchText() {
  const response = await fetch("/readme.txt");

  if (response.ok) {
    return await response.text();
  } else {
    throw new Error(response.statusText);
  }
}

async function fetchImgSeparately() {
  const response = await fetch("flower.jpg");
  const reader = response.body.getReader();

  while (true) {
    const { done, value } = await reader.read();

    if (done) {
      break;
    }

    console.log(`Received ${value.length} bytes`);
  }
}

async function fetchWithOptions(url) {
  const user = { name: "John", surname: "Smith" };

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
    body: JSON.stringify(user),
  });
}
