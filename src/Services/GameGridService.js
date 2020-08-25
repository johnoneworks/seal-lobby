import { MOCK_DATA } from "../MockData/mockData";

export const fetchGrid = () => {
    return Promise.all(
        MOCK_DATA.map(items => {
            return Promise.resolve(items);
        })
    );
};