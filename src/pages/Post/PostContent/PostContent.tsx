import useGetPosts from "@/libs/hooks/queries/post/useGetPosts";

const PostContent = () => {
  const { data } = useGetPosts({
    onSuccess: (data) => console.log(data),
  });

  return (
    <div>
      <div>Post</div>
      <div>THIS IS ABOUT PAGE.</div>
      <div>
        {data?.map((post) => (
          <div key={post.id}>
            <div>{post.title}</div>
            <div>{post.body}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostContent;
