type TCombineResponseData <T extends Record<string, unknown>> = {
    [Property in string]: T
}

export type TResponseDataSessionPage <T extends Record<string, unknown>, K extends keyof T> = {
    [key in K]: T
}
export type TResponseData <T extends Record<string, unknown>> = TCombineResponseData<T>
export type TResponseDataMutation <T extends Record<string, unknown>> = {
    data: T
}
