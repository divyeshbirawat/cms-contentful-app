

type Post = {
  id: number;
  title: string;
  content: string;
};

type PostListProps = {
  posts: Post[];
};

const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <>
      <h2 className="text-center uppercase font-bold">Dummy Posts</h2>
      <span></span>
      <div className="shadow-md border p-2 flex flex-wrap gap-y-10 gap-x-20 justify-center pt-10">
        {posts.map((post) => (
          <div key={post.id} className="h-fit w-1/3 shadow-lg border p-2 rounded-sm">
            <h2 className="text-xl underline">{post.title}</h2>
            <p className="pt-2">{post.content}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default PostList;