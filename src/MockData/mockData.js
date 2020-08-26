import BANNER_1 from "./1_big.jpg";
import PW_B from "./PW_B.jpg";
import SG_B from "./SG_B.jpg";
import PG_B from "./PG_B.png";

import GRID_1 from "./1_med.jpg";
import PW_G from "./PW_G.jpg";
import SG_G from "./SG_G.jpg";
import PG_G from "./PG_G.jpg";

import PROFILE_1 from "./1_small.jpg";

const BANNER_GALLERY = [
    BANNER_1,
    BANNER_1,
    BANNER_1,
    BANNER_1
];

const GRID_GALLERY = [
    GRID_1,
    GRID_1,
    GRID_1,
    GRID_1
];

const POSTER_GALLERY = [
    GRID_1,
    GRID_1,
    GRID_1,
    GRID_1
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
                            name: "John David Washington",
                            order: 0,
                            profile_path: "/27C77ni5XmlgkJVbomXPC4tHWVd.jpg"
                        }
                    ]
                },

                original_language: "en",
                original_title: "Project Power 1",
                overview: "",
                popularity: 237.38,
                poster_path: "/bOKjzWDxiDkgEQznhzP4kdeAHNI.jpg",
                release_date: "2020-08-14",
                title: "aaa",
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
                overview: "bbb",
                popularity: 237.38,
                poster_path: "/bOKjzWDxiDkgEQznhzP4kdeAHNI.jpg",
                release_date: "2020-08-14",
                title: "ccc",
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