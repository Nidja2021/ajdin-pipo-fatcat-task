import { useQuery } from '@tanstack/react-query';

import { postsList } from '@/services/posts';
import { usersList } from '@/services/users';

export function useUsers() {
    return useQuery({
        queryKey: ['users'],
        queryFn: usersList,
    });
}

export function usePosts() {
    return useQuery({
        queryKey: ['posts'],
        queryFn: postsList,
    });
}
