import ErrorPage from '@/components/ErrorPage';
import { PostsSkeleton } from '@/components/LoadingIndicator';
import PostCard from '@/components/posts/PostCard';
import PostForm from '@/components/posts/PostForm';
import { usePosts } from '@/custom-hooks/queries';
import { PostResponse } from '@/services/posts';

export interface PostsProps {
    title: string;
}

export default function Posts(props: PostsProps) {
    const { data: posts, isError, isLoading } = usePosts();

    return (
        <div className="container mx-auto px-2 py-5 space-y-10">
            <h1 className="text-2xl text-gray80 font-semibold">
                {props.title}
            </h1>
            <PostForm />
            <hr className="border-1/2 border-gray40" />
            {isError && <ErrorPage title="Posts" />}
            {isLoading && <PostsSkeleton />}
            {posts && (
                <div className="w-full mx-auto flex flex-col-reverse space-y-3 md:w-3/4">
                    {Array.isArray(posts.data) &&
                        posts.data.map((post: PostResponse) => (
                            <PostCard key={post?.id} post={post} />
                        ))}
                </div>
            )}
        </div>
    );
}
