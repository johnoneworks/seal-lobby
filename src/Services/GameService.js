import { MOCK_DATA } from "../MockData/mockData";

export const fetchData = () => {
    return Promise.all(
        MOCK_DATA.map(items => {
            return Promise.resolve(items);
        })
    );
};

export const fetchAdditionalGameData = id => {
    return Promise.resolve(MOCK_DATA[0].results);
};