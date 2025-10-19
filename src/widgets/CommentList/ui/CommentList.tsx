import { useCallback, useState } from "react";
import styles from "./CommentList.module.css";
import { Modal } from "@/shared/ui/Modal/Modal";
import { Button } from "@/shared/ui/Button/Button";
import { Comment } from "@/entities/comment/model/types";
import { withLoading } from "@/shared/lib/hoc/withLoading";
import { useGetCommentsByPostIdQuery } from "@/entities/comment/api/commentsApi";

interface CommentItemProps {
    comment: Comment;
}

const CommentItem = ({ comment }: CommentItemProps) => {
    return (
        <div className={styles.commentItem}>
            <h3 className={styles.commentName}>{comment.name}</h3>
            <p className={styles.commentEmail}>{comment.email}</p>
            <p>{comment.body}</p>
        </div>
    )
}

interface CommentListDefaultProps {
    comments: Comment[] | undefined;
}

export const CommentListDefault = ({ comments }: CommentListDefaultProps) => {
    if (!comments) return null;

    return (
        <div>
            {comments.map((comment) => (
                <CommentItem key={comment.id} comment={comment} />
            ))}
        </div>
    )
}

const CommentListWithLoading = withLoading(CommentListDefault);

interface CommentListProps {
    postId: number;
}

export const CommentList = ({ postId }: CommentListProps) => {
    const [isCommentsModalOpen, setIsCommentsModalOpen] = useState(false);

    const { data: comments, isLoading, isError, refetch } = useGetCommentsByPostIdQuery(postId);

    const handleToggleCommentsModal = useCallback(() => {
        setIsCommentsModalOpen(prev => !prev);
    }, []);

    const handleRetry = useCallback(() => {
        refetch();
    }, [refetch]);

    const commentsCount = comments?.length; 

    return (
        <div className={styles.commentList}>
            <Button
              className={styles.toggleButton}
              onClick={handleToggleCommentsModal}
            >
                КОММЕНТАРИИ ({commentsCount || 0})
            </Button>

            <Modal
              isOpen={isCommentsModalOpen}
              onClose={handleToggleCommentsModal}
            >
                <Modal.Header>
                    <h2>Комментарии</h2>
                </Modal.Header>
                <Modal.Body>
                    <CommentListWithLoading 
                    comments={comments} 
                    isLoading={isLoading}
                    isError={isError}
                    onRetry={handleRetry}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleToggleCommentsModal}>ЗАКРЫТЬ</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
