export type Movie = {
    page: number;
    results: MovieInfo[];
    total_results: number;
    total_pages: number;
};

export type MovieInfo = {
    poster_path?: string;
    adult: boolean;
    overview: string;
    release_date: string;
    genre_ids: [number];
    id: number;
    original_title: string;
    original_language: string;
    title: string;
    backdrop_path?: string;
    popularity: number;
    vote_count: number;
    video: boolean;
    vote_average: number;
    genres: any[];
};

export type Genre = {
    genres: [{ id?: number; name?: string }];
};
