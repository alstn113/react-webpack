import useGetPosts from "@/libs/hooks/queries/post/useGetPosts";

const Post = () => {
  const { data, isLoading, error } = useGetPosts({
    onSuccess: (data) => console.log(data),
  });

  if (isLoading) return <div>loading...</div>;
  if (error) return <div>error</div>;
  return (
    <div>
      <div>Post</div>
      <div>THIS IS ABOUT PAGE.</div>
      <div>{JSON.stringify(data)}</div>
    </div>
  );
};

export default Post;
