export interface ForecastInterface {
    id: number;
    name: string;
    country: string;
    list: [
        {
            dt: number;
            main: {
                feels_like: number;
                humidity: number;
                pressure: number;
                temp: number;
            };
            weather: [
                {
                    main: string;
                    icon: string;
                    description: string;
                }
            ];
            wind: {
                speed: number;
            };
        }
    ];
}
