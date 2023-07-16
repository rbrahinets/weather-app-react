const useSettings = () => {
    const getTypeTemp = (key: string) => {
        return localStorage.getItem(`forecast_type_temp_${key}`);
    }

    const setTypeTemp = (key: string, value: string): void => {
        localStorage.setItem(`forecast_type_temp_${key}`, value);
    }

    const deleteTypeTemp = (key: string): void => {
        localStorage.removeItem(`forecast_type_temp_${key}`);
    }

    return {
        getTypeTemp,
        setTypeTemp,
        deleteTypeTemp,
    }
}

export default useSettings;
