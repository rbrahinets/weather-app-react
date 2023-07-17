const useSettings = () => {
    const getTypesTemps = (): any[] => {
        const types: any = localStorage.getItem('types_temps');
        return types ? JSON.parse(types) : [];
    }

    const getTypeTemp = (id: string): any => {
        for (const type of getTypesTemps()) {
            if (type.id === id) {
                return type.type;
            }
        }

        return 'C';
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
