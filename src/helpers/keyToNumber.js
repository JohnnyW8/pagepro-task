export const keyToNumber = (payload, key) => ({
    ...payload,
    [key]: Number(payload[key]),
});
