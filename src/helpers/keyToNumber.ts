type KeyId = "userId" | "postId";
interface KeyToNumber {
    (
        a: {
            id: number;
            postId?: string | number;
            userId?: string | number;
            email?: string;
            name?: string;
            title?: string;
            body: string;
        },
        b: KeyId
    ): any;
}
export const keyToNumber: KeyToNumber = (payload, key) => ({
    ...payload,
    [key]: Number(payload[key]),
});
