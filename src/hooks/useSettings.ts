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

    return {
        getTypesTemps,
        getTypeTemp,
        setTypeTemp,
        deleteTypeTemp,
    }
}

export default useSettings;
