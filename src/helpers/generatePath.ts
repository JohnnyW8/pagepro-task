interface GeneratePath {
    (
        a: string,
        b: {
            id: number;
            postId?: number;
        }
    ): string;
}
export const generatePath: GeneratePath = (route, params) => {
    Object.entries(params).forEach(([key, value]) => {
        route = route.replace(`:${key}`, `${value}`);
    });
    return route;
};
