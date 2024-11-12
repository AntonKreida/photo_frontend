type TCombineResponseData <T extends Record<string, unknown>> = {
    [Property in string]: T
}

export type TResponseData <T extends Record<string, unknown>> = TCombineResponseData<T>
export type TResponseDataMutation <T extends Record<string, unknown>> = {
    data: T
}
