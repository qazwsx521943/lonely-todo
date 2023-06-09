export type Comments = {
    createdAt: string;
    message: string;
    id: string;
    postId: string;
    userId: string;
};
export type PostType = {
    title: string;
    id: string;
    content: string;
    createdAt: string;
    user: {
        name: string;
        image: string;
    };
    comments?: Comments[];
};

export type myPost = {
    email: string;
    id: string;
    image: string;
    name: string;
    posts: {
        createdAt: string;
        id: string;
        title: string;
        content: string;
        comments: {
            createdAt: string;
            id: string;
            postId: string;
            title: string;
            userId: string;
        }[];
    }[];
};

export type PostDetailType = {
    id: string;
    title: string;
    content: string;
    updatedAt?: string;
    user: {
        email: string;
        id: string;
        image: string;
        name: string;
    };
    comments: {
        createdAt?: string;
        id: string;
        postId: string;
        title: string;
        userId: string;
        user: {
            email: string;
            id: string;
            image: string;
            name: string;
        };
    }[];
};
