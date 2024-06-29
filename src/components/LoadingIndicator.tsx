export function UserCardSkeleton() {
    return (
        <div className="w-64 animate-pulse rounded-lg border border-gray60 bg-white px-4 py-5 shadow-sm">
            <div className="flex flex-col gap-2">
                <div className="h-4 w-24 rounded bg-gray40" />
                <div className="h-4 w-24 rounded bg-gray40" />
                <div className="h-4 w-24 rounded bg-gray40" />
                <div className="h-4 w-24 rounded bg-gray40" />
            </div>
        </div>
    );
}

export function UsersSkeleton() {
    return (
        <div className="flex w-full flex-col px-4 py-6 lg:px-8">
            <div className="flex flex-col gap-4 md:flex-row">
                <UserCardSkeleton />
                <UserCardSkeleton />
                <UserCardSkeleton />
                <UserCardSkeleton />
                <UserCardSkeleton />
                <UserCardSkeleton />
            </div>
        </div>
    );
}
export function PostCardSkeleton() {
    return (
        <div className="w-full animate-pulse rounded-lg border border-gray60 bg-white px-4 py-5 shadow-sm">
            <div className="flex flex-col gap-2">
                <div className="h-4 w-16 rounded bg-gray40" />
                <div className="h-4 w-48 rounded bg-gray40" />
                <div className="h-4 w-80 rounded bg-gray40" />
            </div>
        </div>
    );
}

export function PostsSkeleton() {
    return (
        <div className="flex w-full flex-col px-4 py-6 lg:px-8">
            <div className="w-full mx-auto flex flex-col gap-4 md:w-3/4">
                <PostCardSkeleton />
                <PostCardSkeleton />
                <PostCardSkeleton />
                <PostCardSkeleton />
                <PostCardSkeleton />
                <PostCardSkeleton />
            </div>
        </div>
    );
}
