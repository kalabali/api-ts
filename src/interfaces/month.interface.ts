export interface IMonth {
    month: {
        index: number,
        english: string,
        bahasa: string
    },
    year: {
        masehi: number,
        caka: number
    },
    timestamp: string,
    weeks: [
        {
            wuku: string,
            ingkel: string,
            bhatara: string,
            dates: [
                { 
                    type: string, 
                    ref: string 
                }
            ]
        }
    ]
}