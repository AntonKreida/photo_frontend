interface ICombineResponseData <T extends Record<string, unknown>> {
    data: {
        [Property in string]: T
    }
}

export type TResponseData <T extends Record<string, unknown>> = ICombineResponseData<T>
