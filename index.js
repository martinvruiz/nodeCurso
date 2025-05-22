const GET = (products) => {
  if (!products) {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((json) => console.log(json))
  } else {
    fetch(`https://fakestoreapi.com/${products}`)
      .then((response) => response.json())
      .then((json) => console.log(json))
  }
}

const POST = (title, price, category) => {
  fetch('https://fakestoreapi.com/products', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: title,
      price: price,
      category: category,
    }),
  })
    .then((response) => response.json())
    .then((json) => console.log(json))
}

const DELETE = (products) => {
  fetch(`https://fakestoreapi.com/${products}`, {
    method: 'DELETE',
  })
    .then((response) => response.json())
    .then((json) => console.log(json))
  console.log('Deleted')
}

const [, , action, ...params] = process.argv

if (action === 'GET') {
  GET(params[0])
}

if (action === 'POST') {
  POST(params[1], params[2], params[3])
}

if (action === 'DELETE') {
  DELETE(params[0])
}
