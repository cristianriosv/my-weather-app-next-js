const useRequest = () => {
    const getData = async (url: string) => {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    };

    return {
        getData
    }
};

export default useRequest;