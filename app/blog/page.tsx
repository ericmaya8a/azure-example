import { CustomLink } from "@/app/components/CustomLink";

export default function BlogPage() {
  return (
    <>
      <h2 className="mb-4">Blog</h2>
      <CustomLink className="block" href="/blog/1" title="Blog 1" />
      <CustomLink className="block" href="/blog/15" title="Blog 15" />
      <CustomLink className="block" href="/blog/24" title="Blog 24" />
    </>
  );
}
