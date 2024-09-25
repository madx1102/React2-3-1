export default async function Foo(params) {
  let date = await fetch("https//api.vercel.app/blog");
  let posts = await date.json();
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
