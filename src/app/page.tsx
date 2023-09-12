
async function getData() {
  const url = process.env.base_url;

  const res = await fetch(`${url}/api/user` ?? `http://localhost:3000/api/user`, { cache: 'no-cache' });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default async function Home() {
  const data = await getData();
  console.log(data);
  return (<main className="container">
    <h1 className="text-center">Welcome to our site!</h1>
    {data && <pre>{JSON.stringify(data)}</pre>}
  </main>);
}