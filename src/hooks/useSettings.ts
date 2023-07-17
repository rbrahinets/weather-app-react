const useSettings = () => {
    const getCities = (): string[] => {
        const cities: any = localStorage.getItem('cities');
        return cities ? JSON.parse(cities) : [];
    };

    const setCity = (city: string): void => {
        const cities: string[] = getCities();

        if (cities.includes(city)) {
            return;
        }

        cities.push(city);
        localStorage.setItem('cities', JSON.stringify(cities));
    }

    const deleteCity = (city: string): void => {
        let cities: string[] = getCities();
        cities = cities.filter((c) => c !== city)
        localStorage.setItem('cities', JSON.stringify(cities));
    }

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

    const setTypeTemp = (id: string, type: string): void => {
        const types: any[] = getTypesTemps();

        for (const t of types) {
            if (t.id === id) {
                return;
            }
        }

        types.push({id: id, type: type})
        localStorage.setItem('types_temps', JSON.stringify(types));
    }

    const updateTypeTemp = (id: string, type: string): void => {
        deleteTypeTemp(id);
        setTypeTemp(id, type);
    }

    const deleteTypeTemp = (id: string): void => {
        let types: any[] = getTypesTemps();
        types = types.filter((t) => t.id !== id);
        localStorage.setItem('types_temps', JSON.stringify(types));
    }

    return {
        getCities,
        setCity,
        deleteCity,
        getTypesTemps,
        getTypeTemp,
        setTypeTemp,
        updateTypeTemp,
        deleteTypeTemp,
    }
}

export default useSettings;
