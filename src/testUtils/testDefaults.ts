export const DEFAULT_API_KEY = '12345'

export const DEFAULT_CITY = {
    name: 'Lappi',
    localNames: {
        ascii: 'Lapland',
        de: 'Lappland',
        en: 'Lapland Region',
        featureName: 'Lappi',
        fi: 'Lappi',
        no: 'Lappland',
        ro: 'Laponia',
        ru: 'Лапландия',
        sv: 'Lappland',
    },
    lat: 67.75,
    lon: 26.5,
    country: 'FI',
}

export const DEFAULT_ONECALL_RESPONSE = {
    lat: 67.75,
    lon: 26.5,
    timezone: 'Europe/Helsinki',
    timezoneOffset: 7200,
    current: {
        dt: 1637060983,
        sunrise: 1637047660,
        sunset: 1637065809,
        temp: 266.7,
        feelsLike: 266.7,
        pressure: 1012,
        humidity: 92,
        dewPoint: 265.74,
        uvi: 0,
        clouds: 70,
        visibility: 10000,
        windSpeed: 1.11,
        windDeg: 243,
        windGust: 1.12,
        weather: [
            {
                id: 803,
                main: 'Clouds',
                description: 'broken clouds',
                icon: '04d',
            },
        ],
    },
    minutely: [
        { dt: 1637061000, precipitation: 0 },
        { dt: 1637061060, precipitation: 0 },
    ],
    hourly: [
        {
            dt: 1637143200,
            temp: 274.16,
            feelsLike: 269.15,
            pressure: 1003,
            humidity: 99,
            dewPoint: 273.98,
            uvi: 0,
            clouds: 100,
            visibility: 25,
            windSpeed: 5.66,
            windDeg: 159,
            windGust: 12.7,
            weather: [
                {
                    id: 803,
                    main: 'Clouds',
                    description: 'broken clouds',
                    icon: '04d',
                },
            ],
            pop: 0.32,
            snow: { '1h': 0.13 },
            rain: { '1h': 0.13 },
        },
    ],
    daily: [
        {
            dt: 1637053200,
            sunrise: 1637047660,
            sunset: 1637065809,
            moonrise: 1637067840,
            moonset: 1637029020,
            moonPhase: 0.41,
            temp: {
                day: 272.42,
                min: 271.32,
                max: 273.18,
                night: 271.32,
                eve: 272.07,
                morn: 273.18,
            },
            feelsLike: { day: 263.79, night: 262.6, eve: 261.74, morn: 264.74 },
            pressure: 1012,
            humidity: 91,
            dewPoint: 266.18,
            windSpeed: 2.81,
            windDeg: 264,
            windGust: 6.2,
            weather: [
                {
                    id: 803,
                    main: 'Clouds',
                    description: 'broken clouds',
                    icon: '04d',
                },
            ],
            clouds: 79,
            pop: 0.28,
            uvi: 0,
        },
    ],
    alerts: [
        {
            senderName: 'Ilmatieteen laitos',
            event: 'Traffic weather warning',
            start: 1637136000,
            end: 1637182800,
            description:
                'Traffic weather warning: In Wednesday noon and evening, probability for bad road conditions is 60% because of rising temperature.',
            tags: [],
        },
    ],
}