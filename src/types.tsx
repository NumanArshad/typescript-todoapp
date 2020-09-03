
export type contextType=[string,(vl:string)=>void]


export interface item {
    id: number;
    text: string;
    isCompleted: boolean
}

export type State = item[]
export interface Action {
    type: String,
    payload?: State | number | string
}