const preguntas = [
    {
        titulo:"What industry are you in?",
        opciones: [
            {textoRespuesta: "Agriculture (grower)", value:3, status:false},
            {textoRespuesta: "Food processor/packer", value:1, status:false},
            {textoRespuesta: "Beverages", value:1, status:false},
            {textoRespuesta: "Agrifinance", value:1, status:false},
        ]

    },
    {
        titulo:"What climate risks does your business face? (check all that apply)",
        opciones: [
            {textoRespuesta: "Heat", value:1, status:false},
            {textoRespuesta: "Cold", value:1, status:false},
            {textoRespuesta: "High Winds", value:1, status:false},
            {textoRespuesta: "Fire", value:1, status:false},
            {textoRespuesta: "Flooding", value:1, status:false},
            {textoRespuesta: "Precipitation", value:1, status:false},
            {textoRespuesta: "Soil Moisture (too wet/dry)", value:1, status:false},
            {textoRespuesta: "Water availability/drought", value:1, status:false},
        ]

    },
    {
        titulo:"Which crops are important to your business? (check all that apply)",
        opciones: [
            {textoRespuesta: "Almonds", value:0, status:false},
            {textoRespuesta: "Berries", value:0, status:false},
            {textoRespuesta: "Carrots", value:0, status:false},
            {textoRespuesta: "Corn", value:0, status:false},
            {textoRespuesta: "Grapes", value:0, status:false},
            {textoRespuesta: "Onions", value:0, status:false},
            {textoRespuesta: "Pistachios", value:0, status:false},
            {textoRespuesta: "Potatoes", value:0, status:false},
            {textoRespuesta: "Sorghum", value:0, status:false},
            {textoRespuesta: "Sugar", value:0, status:false},
            {textoRespuesta: "Tomatoes", value:0, status:false},
            {textoRespuesta: "Wheat", value:0, status:false}
        ]

    },
    {
        titulo:"What is your business currently doing to mitigate its climate risk? (check all that apply)",
        opciones: [
            {textoRespuesta: "Acting on insights from internal data science team or publicly available data", value:-1, status:false},
            {textoRespuesta: "Partnering with a vendor to get insights on risk mitigation", value:-1, status:false},
            {textoRespuesta: "Looking into or actively moving to alternate growing locations", value:-1, status:false},
            {textoRespuesta: "Modifying operations to use less water", value:-1, status:false},
            {textoRespuesta: "Moving planting/harvest times to align with upcoming risks", value:-1, status:false},
            {textoRespuesta: "Breeding or using climate resilient seed", value:-1, status:false},
            {textoRespuesta: "Switching to crops or varieties that are better suited to existing locations", value:-1, status:false},
            {textoRespuesta: "Nothing yet", value:-1, status:false},
        ]

    },
    {
        titulo:"What biomes do you have your crops?",
        opciones: [
            {textoRespuesta: "Boreal Forest", value:1, status:false},
            {textoRespuesta: "Desert", value:1, status:false},
            {textoRespuesta: "Northwestern Coniferous Forest", value:1, status:false},
            {textoRespuesta: "Temperate Grassland", value:1, status:false},
            {textoRespuesta: "Temperate Forest", value:1, status:false},
            {textoRespuesta: "Temperate Woodland and Shrubland", value:1, status:false},
            {textoRespuesta: "Tropical Dry Forest", value:1, status:false},
            {textoRespuesta: "Tropical Rain Forest", value:1, status:false},
            {textoRespuesta: "Tropical Savanna", value:1, status:false},
            {textoRespuesta: "Tundra", value:1, status:false},
        ]
    },
]
export default preguntas;