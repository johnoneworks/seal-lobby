import BANNER_1 from "./1_big.jpg";
import BANNER_2 from "./2_big.jpg";
import BANNER_3 from "./3_big.jpg";
import PG_B from "./PG_B.png";

import GRID_1 from "./1_med.jpg";
import GRID_2 from "./2_med.jpg";
import GRID_3 from "./3_med.jpg";
import GRID_4 from "./4_med.jpg";

import PROFILE_1 from "./1_small.jpg";

const BANNER_GALLERY = [
    BANNER_1,
    BANNER_2,
    BANNER_3,
    BANNER_1
];

const GRID_GALLERY = [
    GRID_1,
    GRID_2,
    GRID_3,
    GRID_4
];

const POSTER_GALLERY = [
    GRID_1,
    GRID_2,
    GRID_3,
    GRID_4
];

const PROFILE_GALLERY = [
    PROFILE_1,
    PROFILE_1,
    PROFILE_1,
    PROFILE_1,
];

const MOCK_DATA = [
    {
        page: 1,
        results: [
            {
                adult: false,
                backdrop_path: "/qVygtf2vU15L2yKS4Ke44U4oMdD.jpg",
                genre_ids: [28, 80, 878],
                genres: [{ "id": 28, "name": "Action" }, { "id": 53, "name": "Thriller" }],
                id: 1,

                credits: {
                    cast: [
                        {
                            cast_id: 12,
                            character: "The Protagonist",
                            credit_id: "5cab21a50e0a264c7df637a6",
                            gender: 2,
                            id: 1117313,
                            name: "Penguin 3",
                            order: 0,
                            profile_path: "/27C77ni5XmlgkJVbomXPC4tHWVd.jpg"
                        }
                    ]
                },

                original_language: "en",
                original_title: "Project Power 1",
                overview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                popularity: 237.38,
                poster_path: "/bOKjzWDxiDkgEQznhzP4kdeAHNI.jpg",
                release_date: "2020-08-14",
                title: "Penguin Game 1",
                video: false,
                videos: {
                    results: []
                },
                vote_average: 6.8,
                vote_count: 727,
            },
        ],
        total_pages: 500,
        total_results: 10000
    },
    {
        page: 2,
        results: [
            {
                adult: false,
                backdrop_path: "/qVygtf2vU15L2yKS4Ke44U4oMdD.jpg",
                genre_ids: [28, 80, 878],
                id: 2,
                credits: {
                    cast: [
                        {
                            cast_id: 12,
                            character: "The Protagonist",
                            credit_id: "5cab21a50e0a264c7df637a6",
                            gender: 2,
                            id: 1117313,
                            name: "John David Washington",
                            order: 0,
                            profile_path: "/27C77ni5XmlgkJVbomXPC4tHWVd.jpg"
                        }
                    ]
                },
                original_language: "en",
                original_title: "Project Power 2",
                overview: "An ex-soldier, a teen and a cop collide in New Orleans as they hunt for the source behind a dangerous new pill that grants users temporary superpowers.",
                popularity: 237.38,
                poster_path: "/bOKjzWDxiDkgEQznhzP4kdeAHNI.jpg",
                release_date: "2020-08-14",
                title: "PP3",
                video: false,
                vote_average: 6.8,
                vote_count: 727,
            },
        ],
        total_pages: 500,
        total_results: 10000
    },
    {
        page: 3,
        results: [
            {
                adult: false,
                backdrop_path: "/qVygtf2vU15L2yKS4Ke44U4oMdD.jpg",
                genre_ids: [28, 80, 878],
                id: 3,
                credits: {
                    cast: [
                        {
                            cast_id: 12,
                            character: "The Protagonist",
                            credit_id: "5cab21a50e0a264c7df637a6",
                            gender: 2,
                            id: 1117313,
                            name: "John David Washington",
                            order: 0,
                            profile_path: "/27C77ni5XmlgkJVbomXPC4tHWVd.jpg"
                        }
                    ]
                },
                original_language: "en",
                original_title: "Project Power 3",
                overview: "An ex-soldier, a teen and a cop collide in New Orleans as they hunt for the source behind a dangerous new pill that grants users temporary superpowers.",
                popularity: 237.38,
                poster_path: "/bOKjzWDxiDkgEQznhzP4kdeAHNI.jpg",
                release_date: "2020-08-14",
                title: "Project Power 3",
                video: false,
                vote_average: 6.8,
                vote_count: 727,
            },
        ],
        total_pages: 500,
        total_results: 10000
    },
];

export { MOCK_DATA, BANNER_GALLERY, GRID_GALLERY, POSTER_GALLERY, PROFILE_GALLERY };