export interface Achievement {
    id: string;
    name: string;
    content:string
    start: number;
    end : number;
    createdAt: Date;
    active: boolean;
}