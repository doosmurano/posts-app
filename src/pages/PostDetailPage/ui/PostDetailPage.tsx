import { useParams } from "react-router-dom";
import { Error } from "@/shared/ui/Error/Error";
import { withLoading } from "@/shared/lib/hoc/withLoading";
import { PostContent } from "@/entities/post/ui/PostContent";
import { CommentListDefault } from "@/widgets/CommentList/ui/CommentList";
import { LoadingSpinner } from "@/shared/ui/LoadingSpinner/LoadingSpinner";
import { useGetCommentsByPostIdQuery, useGetPostByIdQuery } from "@/shared/api/api";

const CommentListWithLoading = withLoading(CommentListDefault);

export const PostDetailPage = () => {
  const {id} = useParams();
  const postId = Number(id);

  const {data: post, isLoading, isError, refetch} = useGetPostByIdQuery(postId);
  const {data: comments, isLoading: isCommentsLoading, isError: isCommentsError, refetch: refetchComments} = useGetCommentsByPostIdQuery(postId);

  if(isLoading) {
      return <LoadingSpinner />;
  }

  if(isError || !post) {
      return <Error errorMessage="Ошибка загрузки поста" onRetry={refetch} />;
  }

  return (
      <div>
           <PostContent post={post} />

           <h2>Комментарии</h2>
           <CommentListWithLoading
           comments={comments}
           isLoading={isCommentsLoading}
           isError={isCommentsError}
           onRetry={refetchComments}
           />
      </div>
  );
}
