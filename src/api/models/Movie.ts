export type Movie = {
    page: number;
    results: MovieInfo[];
    total_results: number;
    total_pages: number;
};
export type MovieDetails = {
    adult: string;
    backdrop_path: string;
    belongs_to_collection: string;
    budget: number;
    genres: { id?: number; name?: string }[];
    homepage: string;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: [
        {
            id: number;
            logo_path: string;
            name: string;
            origin_country: string;
        }
    ];
    production_countries: [
        {
            iso_3166_1: string;
            name: string;
        }
    ];
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: [
        {
            iso_639_1: string;
            name: string;
        }
    ];
    status: string;
    tagline: string;
    title: string;
    video: false;
    vote_average: number;
    vote_count: number;
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
    genres: { id?: number; name?: string }[];
};

export type Credits = {
    id: string;
    cast: {
        adult: false;
        gender: number;
        id: number;
        known_for_department: string;
        name: string;
        original_name: string;
        popularity: number;
        profile_path: string;
        cast_id: number;
        character: string;
        credit_id: string;
        order: number;
    }[];
};
