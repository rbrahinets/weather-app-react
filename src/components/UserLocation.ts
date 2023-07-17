import React, {useEffect} from 'react';

const UserLocation: React.FC = () => {
    useEffect(() => {
        const getLocation = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    async (position) => {
                        const {latitude, longitude} = position.coords;

                        const geocoder = new google.maps.Geocoder();
                        const latLng = new google.maps.LatLng(latitude, longitude);

                        await geocoder.geocode({location: latLng}, (results, status) => {
                            if (status === google.maps.GeocoderStatus.OK) {
                                if (results && results[0]) {
                                    const city = results[0].address_components.find(
                                        (component: any) =>
                                            component.types.includes('locality') ||
                                            component.types.includes('postal_town')
                                    )?.long_name;

                                    city ? localStorage.setItem('city', city) : localStorage.setItem('city', '');
                                }
                            }
                        });
                    },
                    () => {
                        localStorage.setItem('city', '');
                    }
                );
            } else {
                localStorage.setItem('city', '');
            }
        };

        getLocation();
    }, []);

    return null;
};

export default UserLocation;
