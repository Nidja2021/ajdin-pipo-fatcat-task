import { Landing, LandingProps } from '@/components/landing/Landing';
import Posts, { PostsProps } from '@/components/posts/Posts';
import Users, { UsersProps } from '@/components/users/Users';

export type ComponentType = 'Users' | 'Posts' | 'Landing';

export type ComponentProps =
    | { type: 'Landing'; props: LandingProps; path: '/' }
    | { type: 'Users'; props: UsersProps; path: '/users' }
    | { type: 'Posts'; props: PostsProps; path: '/posts' };

export { Users, Posts, Landing };
