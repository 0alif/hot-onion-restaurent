import { useEffect, useState } from 'react';

const useData = () => {

    const [breakfast, setBreakfast] = useState([]);
    const [lunch, setLunch] = useState([]);
    const [dinner, setDinner] = useState([]);

    // load breakfast data
    useEffect(() => {
        fetch('./breakfastData.json')
            .then(res => res.json())
            .then(data => setBreakfast(data));
    }, []);

    // load lunch data
    useEffect(() => {
        fetch('./lunchData.json')
            .then(res => res.json())
            .then(data => setLunch(data));
    }, []);

    // load dinner data
    useEffect(() => {
        fetch('./dinnerData.json')
            .then(res => res.json())
            .then(data => setDinner(data));
    }, []);

    return {
        breakfast,
        lunch,
        dinner
    }
}

export default useData;