export interface AdverstaningSliceProps {
    data: Adverstaning[];
    advertisement: Adverstaning | null;
    status: 'loading' | 'loaded' | 'error';
    statusPost: string | null;
    count: number;
    activePage: number;
    totalPage: number; 
    pagesChunk: number[];
    showModal: boolean
}

export type Adverstaning = {
    _id: string;
    name: string;
    email: string;
    phone: string;
    title: string;
    salary: string;
    address: string;
    benefits: string[];
    location: {
        lat: number,
        long: number
    };
    pictures: string[];
    createdAt: string,
    updatedAt: string,
    description: string;
    employment_type: string[];	
    rating: {
        value: number,
        count: number
    }	
}