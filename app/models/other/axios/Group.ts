export interface Group{
    id: string;
    name: string;
    creator: Creator;
    members?: Array<Member>;
}

export interface Creator {
    name: string;
    email: string;
    picture: string;
}

export interface Member{
    name: string;
    email: string;
    picture: string;
}