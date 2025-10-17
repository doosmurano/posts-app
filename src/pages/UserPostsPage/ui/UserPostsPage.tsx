import { useParams } from "react-router-dom";
import { Error } from "@/shared/ui/Error/Error";
import { PostCard } from "@/entities/post/ui/PostCard";
import { UserTabs } from "@/widgets/UserTabs/ui/UserTabs";
import { useGetPostsByUserIdQuery } from "@/entities/post/api/postApi";
import { LoadingSpinner } from "@/shared/ui/LoadingSpinner/LoadingSpinner";

export const UserPostsPage = () => {
    const {id} = useParams();
    const userId = Number(id);

    if (isNaN(userId) || userId <= 0) {
        return <Error errorMessage="Некорректный ID пользователя" />;
    }

    const {data: posts, isLoading, isError, refetch} = useGetPostsByUserIdQuery(userId);

    return (
        <div>
            <UserTabs userId={userId} />
            <h2>Посты пользователя {userId}</h2>
            {isLoading && <LoadingSpinner />}
            {isError && <Error errorMessage="Ошибка загрузки постов" onRetry={refetch} />}
            
            {posts && posts.length === 0 && (
                <p>У пользователя нет постов</p>
            )}
            
            {posts && (
                <div>
                    {posts.map((post) => (
                        <PostCard key={post.id} post={post} />
                    ))}
                </div>
            )}
        </div>
    );
}
