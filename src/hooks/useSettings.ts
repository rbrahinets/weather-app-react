const useSettings = () => {
    const getTypesTemps = (): any[] => {
        const types: any = localStorage.getItem('types_temps');
        return types ? JSON.parse(types) : [];
    }

    const setTypeTemp = (key: string, value: string): void => {
        localStorage.setItem(`forecast_type_temp_${key}`, value);
    }

    const deleteTypeTemp = (key: string): void => {
        localStorage.removeItem(`forecast_type_temp_${key}`);
    }

    return {
        getTypesTemps,
        getTypeTemp,
        setTypeTemp,
        deleteTypeTemp,
    }
}

export default useSettings;
