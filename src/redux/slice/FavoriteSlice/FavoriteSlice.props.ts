import { Adverstaning } from "../AdverstaningSlice/AdverstaningSlice.props";

export interface FavoriteSliceProps {
    favorite: Adverstaning[];
    statusFavorite: 'loading' | 'loaded' | 'error';
    statusPost: string | null;
    count: number;
    activePage: number;
    totalPage: number; 
    pagesChunk: number[];
}