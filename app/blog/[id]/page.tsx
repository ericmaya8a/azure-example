interface Post {
  id: string;
  title: string;
  content: string;
}

type Params = Promise<{ id: string }>;

const blogUrl = "https://api.vercel.app/blog";

// Next.js will invalidate the cache when a
// request comes in, at most once every 60 seconds.
export const revalidate = 60;

// We'll prerender only the params from `generateStaticParams` at build time.
// If a request comes in for a path that hasn't been generated,
// Next.js will server-render the page on-demand.
export const dynamicParams = true; // or false, to 404 on unknown paths

export async function generateStaticParams() {
  const posts: Post[] = await fetch(blogUrl).then((res) => res.json());

  return posts.map((post) => ({ id: String(post.id) }));
}

export default async function Page({ params }: { params: Params }) {
  const id = (await params).id;
  const post: Post = await fetch(`${blogUrl}/${id}`).then((res) => res.json());

  return (
    <div className="border-solid border-2 border-sky-500 rounded-xl p-4">
      <h1 className="font-bold text-xl mb-4 text-sky-300">{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
