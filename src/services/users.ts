import { UserResponse } from '@/utils/interfaces';

interface ApiResponse {
    status: 'success' | 'error';
    data?: Partial<UserResponse[]>;
    message?: string;
}

export async function usersList(): Promise<ApiResponse> {
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'GET',
        cache: 'no-cache',
    });

    if (response.status !== 200) {
        return {
            status: 'error',
            message: 'Error fetching users',
        };
    }

    const data: unknown = await response.json();

    if (!Array.isArray(data)) {
        return {
            status: 'error',
            message: 'Error parsing users',
        };
    }

    return {
        status: 'success',
        data: data as UserResponse[],
    };
}
