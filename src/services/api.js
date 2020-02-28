export async function callApi() {
  return fetch('http://195.39.233.28:8035/auth', {
    mehtod: 'POST',
    body: '{"apiKey": "23567b218376f79d9415"}',
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

export async function fetchUsers(count) {
  return fetch(`https://randomuser.me/api/?results=${count}`, {
    method: 'GET'
  })
}

export async function fetchDetailedInfo(page) {
  return fetch(`https://randomuser.me/api/?results=1&inc=name,email,location&page=${page}`, {
    method: 'GET'
  })
}
