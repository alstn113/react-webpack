import AsyncBoundary from "@/components/AsyncBoundary";
import ErrorFallback from "@/components/ErrorFallback/ErrorFallback";
import { MESSAGE } from "@/constants/messages";
import useGetPosts from "@/libs/hooks/queries/post/useGetPosts";
import PostContent from "./PostContent/PostContent";

const Post = () => {
  return (
    <AsyncBoundary
      rejectedFallback={
        <ErrorFallback
          message={MESSAGE.ERROR.LOAD_DATA}
          queryKey={useGetPosts.getKey()}
        />
      }
    >
      <PostContent />
    </AsyncBoundary>
  );
};

export default Post;
