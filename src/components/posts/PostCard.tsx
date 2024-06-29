import clsx from 'clsx';

export interface PostCard {
    id: number;
    title: string;
    body: string;
}

export interface PostCardProps {
    post: PostCard;
}

export default function PostCard({ post }: PostCardProps) {
    const labelStyle = clsx('font-semibold text-gray60');
    return (
        <div className="w-full h-auto flex flex-col gap-4 border border-gray40 rounded-xl py-5 px-4">
            <h5 className="text-sm">
                <span className={labelStyle}>ID:</span> {post.id}
            </h5>
            <h5 className="text-sm">
                <span className={labelStyle}>Title:</span> {post.title}
            </h5>
            <h5 className="text-sm">
                <span className={labelStyle}>Body:</span> {post.body}
            </h5>
        </div>
    );
}
