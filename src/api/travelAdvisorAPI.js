import axios from 'axios';

export const getPlacesData = async (type, sw, ne) => {
    try {
        const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
            params: {
                bl_latitude: sw.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
                tr_latitude: ne.lat,
            },
            headers: {
                'x-rapidapi-key': process.env.REACT_APP_RAPID_API_TRAVEL_API_KEY,
                'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
            },
        });

        return data;
    } catch (error) {
        console.log(error);
    }
};

export const getWeatherData = async (lat, lng) => {
    try {
        if (lat && lng) {
            const { data } = await axios.get('https://community-open-weather-map.p.rapidapi.com/find', {
                params: { lat, lon: lng },
                headers: {
                    'x-rapidapi-key': process.env.REACT_APP_RAPID_API_WEATHER_API_KEY,
                    'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
                },
            });

            return data;
        }
    } catch (error) {
        console.log(error);
    }
};

/*
(7) [{…}, {…}, {…}, {…}, {…}, {…}, {…}]
0:
address: "24 Dong Khoi, Dien Dien 650000 Vietnam"
address_obj: {street1: '24 Dong Khoi', street2: null, city: 'Dien Dien', state: null, country: 'Vietnam', …}
ancestors: (3) [{…}, {…}, {…}]
awards: []
bearing: "south"
category: {key: 'restaurant', name: 'Restaurant'}
cuisine: [{…}]
description: ""
dietary_restrictions: []
distance: "8.213921327616687"
distance_string: "8.2 km"
doubleclick_zone: "as.vietnam"
email: "thinn80@gmail.com"
establishment_types: [{…}]
hours: {week_ranges: Array(7), timezone: 'Asia/Ho_Chi_Minh'}
is_candidate_for_contact_info_suppression: false
is_closed: false
is_jfy_enabled: false
is_long_closed: false
latitude: "12.270622"
location_id: "9982902"
location_string: "Dien Dien, Khanh Hoa Province"
longitude: "109.108154"
name: "Yolo Man Restaurant"
nearest_metro_station: []
num_reviews: "3"
open_now_text: "Closed Now"
parent_display_name: "Dien Dien"
phone: "+84 58 3772 279"
photo: {images: {…}, is_blessed: true, uploaded_date: '2016-02-02T08:55:35-0500', caption: 'getlstd_property_photo', id: '171296401', …}
preferred_map_engine: "default"
price: "$20,000 - $500,000"
price_level: "$$ - $$$"
ranking: "#1 of 1 Restaurants in Dien Dien"
ranking_category: "restaurant"
ranking_denominator: "1"
ranking_geo: "Dien Dien"
ranking_geo_id: "15296278"
ranking_position: "1"
rating: "5.0"
raw_ranking: "3.0594701766967773"
subcategory: [{…}]
timezone: "Asia/Ho_Chi_Minh"
web_url: "https://www.tripadvisor.com/Restaurant_Review-g15296278-d9982902-Reviews-Yolo_Man_Restaurant-Dien_Dien_Khanh_Hoa_Province.html"
website: "https://www.facebook.com/YOLO-Man-Restaurant-1569064976708000/"
write_review: "https://www.tripadvisor.com/UserReview-g15296278-d9982902-Yolo_Man_Restaurant-Dien_Dien_Khanh_Hoa_Province.html"
[[Prototype]]: Object
1: {location_id: '11707706', name: 'Kincafe - Salvaged Ring Dien Khanh', latitude: '12.264778', longitude: '109.10869', num_reviews: '1', …}
2: {location_id: '7385578', name: 'Xoi Bap Viet Nam', latitude: '11.92117', longitude: '109.14324', num_reviews: '1', …}
3: {location_id: '13809901', name: 'Quan Lau Bo Anh Dung', latitude: '12.278305', longitude: '109.13267', num_reviews: '0', …}
4: {location_id: '293928', ad_position: 'inline1', ad_size: '8X8', doubleclick_zone: 'as.vietnam.khanh_hoa.nha_trang', ancestors: Array(2), …}
5: {location_id: '10797819', name: 'Bien Rung Restaurant', latitude: '12.255538', longitude: '109.10267', num_reviews: '0', …}
6: {location_id: '19625554', name: 'Nha Hang - Quan An Gio', latitude: '11.91457', longitude: '109.13224', num_reviews: '0', …}
length: 7
*/