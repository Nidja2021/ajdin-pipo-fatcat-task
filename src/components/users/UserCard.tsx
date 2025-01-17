import clsx from 'clsx';

import { UserResponse } from '@/utils/interfaces';

export interface UserCardProps {
    user: Partial<UserResponse> | undefined;
}

export default function UserCard({ user }: UserCardProps) {
    const labelStyle = clsx('font-semibold text-gray60');
    return (
        <div>
            {user && (
                <div className="w-36 h-56 flex flex-col gap-4 border border-gray60 rounded-md py-5 px-4 md:w-64">
                    <h5 className="text-sm">
                        <span className={labelStyle}>Name:</span> {user?.name}
                    </h5>
                    <h5 className="text-sm">
                        <span className={labelStyle}>Username:</span>{' '}
                        {user?.username}
                    </h5>
                    <h5 className="text-sm">
                        <span className={labelStyle}>Email:</span> {user?.email}
                    </h5>
                    <h5 className="text-sm">
                        <span className={labelStyle}>Phone:</span> {user?.phone}
                    </h5>
                </div>
            )}
        </div>
    );
}
