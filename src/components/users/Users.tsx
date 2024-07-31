import ErrorPage from '@/components/ErrorPage';
import { UsersSkeleton } from '@/components/LoadingIndicator';
import UserCard from '@/components/users/UserCard';
import { useUsers } from '@/custom-hooks/queries';
import { UserResponse } from '@/utils/interfaces';

export interface UsersProps {
    title: string;
}

export default function Users(props: UsersProps) {
    const { data: users, isError, isLoading } = useUsers();

    if (isError) {
        return <ErrorPage title="users" />;
    }

    if (isLoading) {
        return <UsersSkeleton />;
    }

    return (
        <div className="container mx-auto">
            <h1 className="text-2xl text-gray80 font-semibold">
                {props.title}
            </h1>
            <div className="h-full px-4 py-6 flex flex-col gap-4 md:flex-row md:flex-wrap lg:px-8 ">
                {users &&
                    users.data?.map((user: UserResponse | undefined) => (
                        <UserCard key={user?.id} user={user} />
                    ))}
            </div>
        </div>
    );
}
