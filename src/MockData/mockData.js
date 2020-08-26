import PP_B from "./PP_B.jpg";
import PW_B from "./PW_B.jpg";
import SG_B from "./SG_B.jpg";
import PG_B from "./PG_B.png";

import PP_G from "./PP_G.jpg";
import PW_G from "./PW_G.jpg";
import SG_G from "./SG_G.jpg";
import PG_G from "./PG_G.jpg";


const BANNER_GALLERY = [
    PP_B,
    PW_B,
    SG_B,
    PG_B
];

const GRID_GALLERY = [
    PP_G,
    PW_G,
    SG_G,
    PG_G
];

const MOCK_DATA = [
    {
        page: 1,
        results: [
            {
                adult: false,
                backdrop_path: "/qVygtf2vU15L2yKS4Ke44U4oMdD.jpg",
                genre_ids: [28, 80, 878],
                id: 1,
                original_language: "en",
                original_title: "Project Power 1",
                overview: "",
                popularity: 237.38,
                poster_path: "/bOKjzWDxiDkgEQznhzP4kdeAHNI.jpg",
                release_date: "2020-08-14",
                title: "aaa",
                video: false,
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

export { MOCK_DATA, BANNER_GALLERY, GRID_GALLERY };