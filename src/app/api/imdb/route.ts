export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get('title');

  const res = await fetch(`https://www.omdbapi.com/?t=${title}&apikey=${process.env.OMDB_API_KEY}`);
  const data = await res.json();


























  

  return Response.json(data);
}
