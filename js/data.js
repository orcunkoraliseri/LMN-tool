/**
 * Neighbourhood Design Interface - Data Module
 * Contains concept and neighbourhood data derived from CSV files
 */

// Concept definitions (for Concept column display)
const CONCEPTS = [
  { id: 1, name: "Financial Dist", image: "Content/Images_Concept/1-Financial_District.png" },
  { id: 2, name: "Dense Residential", image: "Content/Images_Concept/2-Dense_Residential.png" },
  { id: 3, name: "Urban Transition-Zone", image: "Content/Images_Concept/3-Urban-Transit-Zone.png" },
  { id: 4, name: "Suburban Transit-Zone", image: "Content/Images_Concept/4-Suburban-Transit-Zone.png" },
  { id: 5, name: "Streetcar Suburb", image: "Content/Images_Concept/5-Streetcar_Suburb.png" },
  { id: 6, name: "Modern Suburb", image: "Content/Images_Concept/6-Modern_Suburb.png" },
  { id: 7, name: "Suburban Outer", image: "Content/Images_Concept/7-Suburban_Outer.png" },
  { id: 8, name: "Townhouse Cluster", image: "Content/Images_Concept/8-Townhouse_Cluster.png" },
  { id: 9, name: "Rural Cluster", image: "Content/Images_Concept/9-Rural_Cluster.png" },
  { id: 10, name: "Commercial Park", image: "Content/Images_Concept/10-Commerical_Park.png" },
  { id: 11, name: "Data Center Node", image: "Content/Images_Concept/11-Data_Center_Node.png" },
  { id: 12, name: "Logistics/Industrial", image: "Content/Images_Concept/12-Logistics_Industrial.png" }
];

// Neighbourhood Units data based on Neighbourhoods_Concepts_Parameters_Buildings.csv
// Each neighbourhood has its own parameters (context, usage, density, layout)
const NEIGHBOURHOODS = [
  {
    code: "RC1",
    conceptId: 9,
    usage: "residential",
    context: "rural",
    density: "low",
    layout: "curvilinear",
    eui: 65.098,
    energyStatus: "Positive",
    content: "24 detached (two-storey house) homes",
    image: "Content/Images_Neighbourhoods/NUs_RC1.png",
    buildings: ["Two-Storey House"]
  },
  {
    code: "RC2",
    conceptId: 7,
    usage: "residential",
    context: "suburban",
    density: "low",
    layout: "curvilinear",
    eui: 65.098,
    energyStatus: "Positive",
    content: "48 detached (two-storey house) homes",
    image: "Content/Images_Neighbourhoods/NUs_RC2.png",
    buildings: ["Two-Storey House"]
  },
  {
    code: "RC3",
    conceptId: 8,
    usage: "residential",
    context: "suburban",
    density: "low",
    layout: "curvilinear",
    eui: 60.082,
    energyStatus: "Positive",
    content: "56 attached units",
    image: "Content/Images_Neighbourhoods/NUs_RC3.png",
    buildings: ["Attached House"]
  },
  {
    code: "RC4",
    conceptId: 6,
    usage: "residential",
    context: "suburban",
    density: "medium",
    layout: "grid",
    eui: 68.829,
    energyStatus: "Negative",
    content: "8 Midrise",
    image: "Content/Images_Neighbourhoods/NUS_RC4.png",
    buildings: ["midrise apartment"]
  },
  {
    code: "RC5",
    conceptId: 3,
    usage: "residential",
    context: "urban",
    density: "high",
    layout: "grid",
    eui: 69.837,
    energyStatus: "Negative",
    content: "12 Midrise",
    image: "Content/Images_Neighbourhoods/NUS_RC5.png",
    buildings: ["midrise apartment"]
  },
  /*
  {
    code: "RC6",
    conceptId: 6,
    usage: "residential",
    context: "suburban",
    density: "medium",
    layout: "grid",
    eui: 65.885,
    energyStatus: "Negative",
    content: "4 Mid-Rise + 14 Attached",
    image: "Content/Images_Neighbourhoods/NUs_RC6.png",
    buildings: ["midrise apartment", "Attached House"]
  },
  {
    code: "RC7",
    conceptId: 4,
    usage: "residential",
    context: "suburban",
    density: "high",
    layout: "grid",
    eui: 118.146,
    energyStatus: "Negative",
    content: "2 High-Rise (10-St) + 4 Mid-Rise (4-St)",
    image: "Content/Images_Neighbourhoods/NUs_RC7.png",
    buildings: ["Highrise Apartment", "midrise apartment"]
  },
  {
    code: "RC8",
    conceptId: 2,
    usage: "residential",
    context: "urban",
    density: "high",
    layout: "grid",
    eui: 150.122,
    energyStatus: "Negative",
    content: "8 High-Rise Towers (10-Story)",
    image: "Content/Images_Neighbourhoods/NUs_RC8.png",
    buildings: ["Highrise Apartment"]
  },
  {
    code: "CR",
    conceptId: 7,
    usage: "mixed-use",
    context: "suburban",
    density: "low",
    layout: "curvilinear",
    eui: 94.31,
    energyStatus: "Positive",
    content: "21 attached + small office + small retail + quick service restaurant",
    image: "Content/Images_Neighbourhoods/NUS_CR.png",
    buildings: ["Attached House", "Small Office", "Small Retail", "quick service restaurant"]
  },
  {
    code: "CR/I V1",
    conceptId: 5,
    usage: "mixed-use",
    context: "suburban",
    density: "medium",
    layout: "grid",
    eui: 93.386,
    energyStatus: "Positive",
    content: "21 attached + 2 Mid-Rise + primary school + small office + supermarket + quick service restaurant + full service restaurant",
    image: "Content/Images_Neighbourhoods/NUS_CR I-V1.png",
    buildings: ["Attached House", "midrise apartment", "Primary School", "Small Office", "Supermarket", "quick service restaurant", "Full service restaurant"]
  },
  {
    code: "CR/I V2",
    conceptId: 5,
    usage: "mixed-use",
    context: "suburban",
    density: "medium",
    layout: "grid",
    eui: 126.789,
    energyStatus: "Neutral",
    content: "5 Mid-Rise + secondary school + small office + supermarket + quick service restaurant + full service restaurant",
    image: "Content/Images_Neighbourhoods/NUs_CR-I V2.png",
    buildings: ["midrise apartment", "secondary school", "Small Office", "Supermarket", "quick service restaurant", "Full service restaurant"]
  },
  {
    code: "MU1",
    conceptId: 7,
    usage: "mixed-use",
    context: "suburban",
    density: "low",
    layout: "curvilinear",
    eui: 81.128,
    energyStatus: "Neutral",
    content: "24 detached + primary school",
    image: "Content/Images_Neighbourhoods/NUs_MU1.png",
    buildings: ["Two-Storey House", "Primary School"]
  },
  {
    code: "MU2",
    conceptId: 5,
    usage: "mixed-use",
    context: "suburban",
    density: "medium",
    layout: "grid",
    eui: 94.491,
    energyStatus: "Neutral",
    content: "6 Midrise apartments + secondary school",
    image: "Content/Images_Neighbourhoods/NUs_MU2.png",
    buildings: ["midrise apartment", "secondary school"]
  },
  {
    code: "MU3",
    conceptId: 2,
    usage: "mixed-use",
    context: "urban",
    density: "high",
    layout: "grid",
    eui: 212.067,
    energyStatus: "Negative",
    content: "3 highrise (10 story) + large office + Standalone Retail + large hotel + quick service restaurant + full service restaurant",
    image: "Content/Images_Neighbourhoods/NUs_MU3.png",
    buildings: ["Highrise Apartment", "Large Office", "Standalone Retail", "Large Hotel", "quick service restaurant", "Full service restaurant"]
  },
  {
    code: "MU3/L",
    conceptId: 2,
    usage: "mixed-use",
    context: "urban",
    density: "high",
    layout: "grid",
    eui: 211.438,
    energyStatus: "Negative",
    content: "3 highrise (10 story) + quick service restaurant + full service restaurant + Small retail",
    image: "Content/Images_Neighbourhoods/NUs_MU3-L.png",
    buildings: ["Highrise Apartment", "quick service restaurant", "Full service restaurant", "Small Retail"]
  },
  {
    code: "MU4",
    conceptId: 3,
    usage: "mixed-use",
    context: "urban",
    density: "high",
    layout: "grid",
    eui: 224.431,
    energyStatus: "Negative",
    content: "4 mid-rise, hospital, small hotel, retail store, 2 medium offices, two restaurants",
    image: "Content/Images_Neighbourhoods/NUs_MU4.png",
    buildings: ["midrise apartment", "Hospital", "Small Hotel", "Small Retail", "Medium Office", "quick service restaurant", "Full service restaurant"]
  },
  {
    code: "MU-S",
    conceptId: 6,
    usage: "mixed-use",
    context: "suburban",
    density: "medium",
    layout: "grid",
    eui: 178.367,
    energyStatus: "Negative",
    content: "5 midrise + medium office + 2 quick service restaurant + 2 full service restaurant + small hotel + Standalone Retail + supermarket",
    image: "Content/Images_Neighbourhoods/NUs_MUS-L.png",
    buildings: ["midrise apartment", "Medium Office", "quick service restaurant", "Full service restaurant", "Small Hotel", "Standalone Retail", "Supermarket"]
  },
  {
    code: "MU-S/L",
    conceptId: 6,
    usage: "mixed-use",
    context: "suburban",
    density: "medium",
    layout: "grid",
    eui: 173.754,
    energyStatus: "Negative",
    content: "5 midrise + Standalone Retail + supermarket",
    image: "Content/Images_Neighbourhoods/NUs_MUS-L.png",
    buildings: ["midrise apartment", "Standalone Retail", "Supermarket"]
  },
  {
    code: "MU-P V1",
    conceptId: 4,
    usage: "mixed-use",
    context: "suburban",
    density: "high",
    layout: "grid",
    eui: 227.182,
    energyStatus: "Negative",
    content: "2 highrise + 2 midrise + medium office + 2 quick service restaurant + 2 full service restaurant + small hotel + hospital + small retail",
    image: "Content/Images_Neighbourhoods/NUs_MU-P V1.png",
    buildings: ["Highrise Apartment", "midrise apartment", "Medium Office", "quick service restaurant", "Full service restaurant", "Small Hotel", "Hospital", "Small Retail"]
  },
  {
    code: "MU-P V2",
    conceptId: 4,
    usage: "mixed-use",
    context: "suburban",
    density: "high",
    layout: "grid",
    eui: 239.391,
    energyStatus: "Negative",
    content: "4 highrise + large office + large hotel + Standalone Retail + 2 quick service restaurant + 2 full service restaurant",
    image: "Content/Images_Neighbourhoods/NUs_MU-P V2.png",
    buildings: ["Highrise Apartment", "Large Office", "Large Hotel", "Standalone Retail", "quick service restaurant", "Full service restaurant"]
  },
  {
    code: "MU-P V2/L",
    conceptId: 4,
    usage: "mixed-use",
    context: "suburban",
    density: "high",
    layout: "grid",
    eui: 166.368,
    energyStatus: "Negative",
    content: "4 highrise + large office + Standalone Retail",
    image: "Content/Images_Neighbourhoods/NUs_MU-P V2-L.png",
    buildings: ["Highrise Apartment", "Large Office", "Standalone Retail"]
  },
  {
    code: "CC1",
    conceptId: 10,
    usage: "commercial",
    context: "suburban",
    density: "low",
    layout: "superblock",
    eui: 180.704,
    energyStatus: "Positive",
    content: "supermarket + retail strip mall + 2 Standalone Retail + 2 quick service restaurant + full service restaurant + small office + medium office",
    image: "Content/Images_Neighbourhoods/NUs_CC1.png",
    buildings: ["Supermarket", "Retail Strip Mall", "Standalone Retail", "quick service restaurant", "Full service restaurant", "Small Office", "Medium Office"]
  },
  {
    code: "CC1/L",
    conceptId: 10,
    usage: "commercial",
    context: "suburban",
    density: "low",
    layout: "superblock",
    eui: 194.366,
    energyStatus: "Positive",
    content: "supermarket + retail strip mall + 2 Standalone Retail + 2 quick service restaurant",
    image: "Content/Images_Neighbourhoods/NUs_CC1-L.png",
    buildings: ["Supermarket", "Retail Strip Mall", "Standalone Retail", "quick service restaurant"]
  },
  {
    code: "CC2",
    conceptId: 1,
    usage: "commercial",
    context: "urban",
    density: "high",
    layout: "grid",
    eui: 231.41,
    energyStatus: "Negative",
    content: "supermarket + Standalone Retail + large hotel + quick service restaurant + full service restaurant + large office + medium office",
    image: "Content/Images_Neighbourhoods/NUs_CC2.png",
    buildings: ["Supermarket", "Standalone Retail", "Large Hotel", "quick service restaurant", "Full service restaurant", "Large Office", "Medium Office"]
  },
  {
    code: "IND-HIGH",
    conceptId: 11,
    usage: "industrial",
    context: "suburban",
    density: "high",
    layout: "superblock",
    eui: null,
    energyStatus: "Negative",
    content: "4 Data center",
    image: "Content/Images_Neighbourhoods/NUs_IND-HIGH.png",
    buildings: ["Data Center"]
  },
  {
    code: "IND-LOW",
    conceptId: 12,
    usage: "industrial",
    context: "suburban",
    density: "low",
    layout: "superblock",
    eui: 56.179,
    energyStatus: "Positive",
    content: "4 Warehouse + 4 Small Office",
    image: "Content/Images_Neighbourhoods/NUs_IND-LOW.png",
    buildings: ["Warehouse", "Small Office"]
  }
  */

];

// Building image mapping
const BUILDING_IMAGES = {
  "Two-Storey House": "Content/Images_Buildings/Two-Story House.png",
  "Two-Story House": "Content/Images_Buildings/Two-Story House.png",
  "Attached House": "Content/Images_Buildings/Attached House.png",
  "midrise apartment": "Content/Images_Buildings/Midrise Apartment.png",
  "Midrise Apartment": "Content/Images_Buildings/Midrise Apartment.png",
  "Highrise Apartment": "Content/Images_Buildings/Highrise Apartment.png",
  "Primary School": "Content/Images_Buildings/Primary School.png",
  "secondary school": "Content/Images_Buildings/Secondary School.png",
  "Secondary School": "Content/Images_Buildings/Secondary School.png",
  "Small Office": "Content/Images_Buildings/Small Office.png",
  "Medium Office": "Content/Images_Buildings/Medium Office.png",
  "Large Office": "Content/Images_Buildings/Large Office.png",
  "Small Retail": "Content/Images_Buildings/Small Retail.png",
  "Standalone Retail": "Content/Images_Buildings/Standalone Retail.png",
  "Retail Strip Mall": "Content/Images_Buildings/Retail Strip Mall.png",
  "Supermarket": "Content/Images_Buildings/Supermarket.png",
  "quick service restaurant": "Content/Images_Buildings/Quick Service Restaurant.png",
  "Quick Service Restaurant": "Content/Images_Buildings/Quick Service Restaurant.png",
  "Full service restaurant": "Content/Images_Buildings/Full Service Restaurant.png",
  "Full Service Restaurant": "Content/Images_Buildings/Full Service Restaurant.png",
  "Small Hotel": "Content/Images_Buildings/Small Hotel.png",
  "Large Hotel": "Content/Images_Buildings/Large Hotel.png",
  "Hospital": "Content/Images_Buildings/Hospital.png",
  "Data Center": "Content/Images_Buildings/Datacenter.png",
  "Datacenter": "Content/Images_Buildings/Datacenter.png",
  "Warehouse": "Content/Images_Buildings/Warehouse.png"
};

// Energy category colors
const ENERGY_COLORS = {
  "Heating": "#ef4444",
  "Cooling": "#3b82f6",
  "Interior Lighting": "#eab308",
  "Electric Equipment": "#8b5cf6",
  "Exterior Lighting": "#f59e0b",
  "Equipment (Gas)": "#f97316",
  "Elevators": "#6366f1",
  "Water Systems": "#06b6d4",
  "Fans": "#22c55e",
  "VAV Fans": "#10b981",
  "Pump (Electric)": "#14b8a6",
  "Heat Rejection": "#f43f5e",
  "FCU Fans": "#84cc16"
};

// Energy data per neighbourhood (kWh/m²-yr)
const ENERGY_DATA = {
  "RC1": {
    total: 65.098,
    breakdown: [
      { name: "Heating", value: 14.653 },
      { name: "Cooling", value: 3.293 },
      { name: "Interior Lighting", value: 5.752 },
      { name: "Electric Equipment", value: 16.529 },
      { name: "Exterior Lighting", value: 1.878 },
      { name: "Equipment (Gas)", value: 0 },
      { name: "Elevators", value: 0 },
      { name: "Water Systems", value: 19.215 },
      { name: "Fans", value: 3.777 },
      { name: "VAV Fans", value: 0 },
      { name: "Pump (Electric)", value: 0 },
      { name: "Heat Rejection", value: 0 },
      { name: "FCU Fans", value: 0 }
    ]
  },
  "RC2": {
    total: 65.098,
    breakdown: [
      { name: "Heating", value: 14.653 },
      { name: "Cooling", value: 3.293 },
      { name: "Interior Lighting", value: 5.752 },
      { name: "Electric Equipment", value: 16.529 },
      { name: "Exterior Lighting", value: 1.878 },
      { name: "Equipment (Gas)", value: 0 },
      { name: "Elevators", value: 0 },
      { name: "Water Systems", value: 19.215 },
      { name: "Fans", value: 3.777 },
      { name: "VAV Fans", value: 0 },
      { name: "Pump (Electric)", value: 0 },
      { name: "Heat Rejection", value: 0 },
      { name: "FCU Fans", value: 0 }
    ]
  },
  "RC3": {
    total: 60.802,
    breakdown: [
      { name: "Heating", value: 18.163 },
      { name: "Cooling", value: 1.652 },
      { name: "Interior Lighting", value: 4.314 },
      { name: "Electric Equipment", value: 21.34 },
      { name: "Exterior Lighting", value: 0 },
      { name: "Equipment (Gas)", value: 0 },
      { name: "Elevators", value: 0 },
      { name: "Water Systems", value: 10.253 },
      { name: "Fans", value: 5.08 },
      { name: "VAV Fans", value: 0 },
      { name: "Pump (Electric)", value: 0 },
      { name: "Heat Rejection", value: 0 },
      { name: "FCU Fans", value: 0 }
    ]
  },
  "RC4": {
    total: 68.829,
    breakdown: [
      { name: "Heating", value: 23.503 },
      { name: "Cooling", value: 0.486 },
      { name: "Interior Lighting", value: 6.41 },
      { name: "Electric Equipment", value: 15.497 },
      { name: "Exterior Lighting", value: 1.374 },
      { name: "Equipment (Gas)", value: 0 },
      { name: "Elevators", value: 0 },
      { name: "Water Systems", value: 8.739 },
      { name: "Fans", value: 12.82 },
      { name: "VAV Fans", value: 0 },
      { name: "Pump (Electric)", value: 0 },
      { name: "Heat Rejection", value: 0 },
      { name: "FCU Fans", value: 0 }
    ]
  },
  "RC5": {
    total: 69.837,
    breakdown: [
      { name: "Heating", value: 24.476 },
      { name: "Cooling", value: 0.508 },
      { name: "Interior Lighting", value: 6.41 },
      { name: "Electric Equipment", value: 15.497 },
      { name: "Exterior Lighting", value: 0 },
      { name: "Equipment (Gas)", value: 0 },
      { name: "Elevators", value: 1.374 },
      { name: "Water Systems", value: 8.739 },
      { name: "Fans", value: 12.833 },
      { name: "VAV Fans", value: 0 },
      { name: "Pump (Electric)", value: 0 },
      { name: "Heat Rejection", value: 0 },
      { name: "FCU Fans", value: 0 }
    ]
  },
  /*
  "RC6": {
    total: 65.885,
    breakdown: [
      { name: "Heating", value: 21.189 },
      { name: "Cooling", value: 1.044 },
      { name: "Interior Lighting", value: 5.578 },
      { name: "Electric Equipment", value: 17.815 },
      { name: "Exterior Lighting", value: 0 },
      { name: "Equipment (Gas)", value: 0 },
      { name: "Elevators", value: 0.829 },
      { name: "Water Systems", value: 9.339 },
      { name: "Fans", value: 10.091 },
      { name: "VAV Fans", value: 0 },
      { name: "Pump (Electric)", value: 0 },
      { name: "Heat Rejection", value: 0 },
      { name: "FCU Fans", value: 0 }
    ]
  },
  "RC7": {
    total: 118.146,
    breakdown: [
      { name: "Heating", value: 53.07 },
      { name: "Cooling", value: 5.929 },
      { name: "Interior Lighting", value: 6.947 },
      { name: "Electric Equipment", value: 22.809 },
      { name: "Exterior Lighting", value: 0.943 },
      { name: "Equipment (Gas)", value: 0 },
      { name: "Elevators", value: 1.151 },
      { name: "Water Systems", value: 19.033 },
      { name: "Fans", value: 6.701 },
      { name: "VAV Fans", value: 0 },
      { name: "Pump (Electric)", value: 1.318 },
      { name: "Heat Rejection", value: 0.245 },
      { name: "FCU Fans", value: 0 }
    ]
  },
  "RC8": {
    total: 150.122,
    breakdown: [
      { name: "Heating", value: 73.008 },
      { name: "Cooling", value: 9.612 },
      { name: "Interior Lighting", value: 7.269 },
      { name: "Electric Equipment", value: 27.197 },
      { name: "Exterior Lighting", value: 1.509 },
      { name: "Equipment (Gas)", value: 0 },
      { name: "Elevators", value: 1.017 },
      { name: "Water Systems", value: 25.21 },
      { name: "Fans", value: 2.782 },
      { name: "VAV Fans", value: 0 },
      { name: "Pump (Electric)", value: 2.105 },
      { name: "Heat Rejection", value: 0.413 },
      { name: "FCU Fans", value: 0 }
    ]
  },
  "MU1": {
    total: 81.128,
    breakdown: [
      { name: "Heating", value: 20.837 },
      { name: "Cooling", value: 6.415 },
      { name: "Interior Lighting", value: 9.975 },
      { name: "Electric Equipment", value: 25.345 },
      { name: "Exterior Lighting", value: 0 },
      { name: "Equipment (Gas)", value: 0 },
      { name: "Elevators", value: 2.657 },
      { name: "Water Systems", value: 8.869 },
      { name: "Fans", value: 5.228 },
      { name: "VAV Fans", value: 0.9 },
      { name: "Pump (Electric)", value: 0.888 },
      { name: "Heat Rejection", value: 0 },
      { name: "FCU Fans", value: 0 }
    ]
  },
  "MU2": {
    total: 93.491,
    breakdown: [
      { name: "Heating", value: 29.636 },
      { name: "Cooling", value: 5.217 },
      { name: "Interior Lighting", value: 10.608 },
      { name: "Electric Equipment", value: 19.924 },
      { name: "Exterior Lighting", value: 0.772 },
      { name: "Equipment (Gas)", value: 0 },
      { name: "Elevators", value: 3.149 },
      { name: "Water Systems", value: 8.707 },
      { name: "Fans", value: 13.933 },
      { name: "VAV Fans", value: 0.804 },
      { name: "Pump (Electric)", value: 0.743 },
      { name: "Heat Rejection", value: 0 },
      { name: "FCU Fans", value: 0 }
    ]
  },
  "MU3": {
    total: 212.067,
    breakdown: [
      { name: "Heating", value: 86.894 },
      { name: "Cooling", value: 19.656 },
      { name: "Interior Lighting", value: 24.13 },
      { name: "Electric Equipment", value: 49.396 },
      { name: "Exterior Lighting", value: 3.488 },
      { name: "Equipment (Gas)", value: 3.725 },
      { name: "Elevators", value: 1.854 },
      { name: "Water Systems", value: 13.06 },
      { name: "Fans", value: 2.783 },
      { name: "VAV Fans", value: 2.92 },
      { name: "Pump (Electric)", value: 3.171 },
      { name: "Heat Rejection", value: 0.362 },
      { name: "FCU Fans", value: 0.347 }
    ]
  },
  "MU4": {
    total: 224.431,
    breakdown: [
      { name: "Heating", value: 52.159 },
      { name: "Cooling", value: 49.29 },
      { name: "Interior Lighting", value: 24.344 },
      { name: "Electric Equipment", value: 50.901 },
      { name: "Exterior Lighting", value: 0.878 },
      { name: "Equipment (Gas)", value: 8.05 },
      { name: "Elevators", value: 2.513 },
      { name: "Water Systems", value: 10.176 },
      { name: "Fans", value: 25.814 },
      { name: "VAV Fans", value: 0 },
      { name: "Pump (Electric)", value: 0.304 },
      { name: "Heat Rejection", value: 0 },
      { name: "FCU Fans", value: 0 }
    ]
  },
  "MU3/L": {
    total: 211.438,
    breakdown: [
      { name: "Heating", value: 68.167 },
      { name: "Cooling", value: 12.476 },
      { name: "Interior Lighting", value: 11.836 },
      { name: "Electric Equipment", value: 47.119 },
      { name: "Exterior Lighting", value: 3.277 },
      { name: "Equipment (Gas)", value: 29.016 },
      { name: "Elevators", value: 0.858 },
      { name: "Water Systems", value: 28.877 },
      { name: "Fans", value: 7.705 },
      { name: "VAV Fans", value: 0 },
      { name: "Pump (Electric)", value: 1.778 },
      { name: "Heat Rejection", value: 0.328 },
      { name: "FCU Fans", value: 0 }
    ]
  },
  "CR": {
    total: 94.31,
    breakdown: [
      { name: "Heating", value: 18.681 },
      { name: "Cooling", value: 5.177 },
      { name: "Interior Lighting", value: 8.94 },
      { name: "Electric Equipment", value: 32.47 },
      { name: "Exterior Lighting", value: 1.391 },
      { name: "Equipment (Gas)", value: 8.83 },
      { name: "Elevators", value: 0 },
      { name: "Water Systems", value: 10.842 },
      { name: "Fans", value: 7.98 },
      { name: "VAV Fans", value: 0 },
      { name: "Pump (Electric)", value: 0 },
      { name: "Heat Rejection", value: 0 },
      { name: "FCU Fans", value: 0 }
    ]
  },
  "CR/I V1": {
    total: 93.386,
    breakdown: [
      { name: "Heating", value: 18.443 },
      { name: "Cooling", value: 4.681 },
      { name: "Interior Lighting", value: 24.022 },
      { name: "Electric Equipment", value: 16.918 },
      { name: "Exterior Lighting", value: 2.115 },
      { name: "Equipment (Gas)", value: 0 },
      { name: "Elevators", value: 16.462 },
      { name: "Water Systems", value: 5.727 },
      { name: "Fans", value: 3.763 },
      { name: "VAV Fans", value: 0.631 },
      { name: "Pump (Electric)", value: 0.614 },
      { name: "Heat Rejection", value: 0 },
      { name: "FCU Fans", value: 0 }
    ]
  },
  "CR/I V2": {
    total: 126.769,
    breakdown: [
      { name: "Heating", value: 20.348 },
      { name: "Cooling", value: 7.857 },
      { name: "Interior Lighting", value: 34.139 },
      { name: "Electric Equipment", value: 24.642 },
      { name: "Exterior Lighting", value: 1.43 },
      { name: "Equipment (Gas)", value: 3.015 },
      { name: "Elevators", value: 22.601 },
      { name: "Water Systems", value: 4.486 },
      { name: "Fans", value: 7.088 },
      { name: "VAV Fans", value: 0.596 },
      { name: "Pump (Electric)", value: 0.554 },
      { name: "Heat Rejection", value: 0 },
      { name: "FCU Fans", value: 0 }
    ]
  },
  "MU-S": {
    total: 178.367,
    breakdown: [
      { name: "Heating", value: 22.846 },
      { name: "Cooling", value: 10.234 },
      { name: "Interior Lighting", value: 37.423 },
      { name: "Electric Equipment", value: 45.37 },
      { name: "Exterior Lighting", value: 2.047 },
      { name: "Equipment (Gas)", value: 21.404 },
      { name: "Elevators", value: 20.972 },
      { name: "Water Systems", value: 9.032 },
      { name: "Fans", value: 9.015 },
      { name: "VAV Fans", value: 0 },
      { name: "Pump (Electric)", value: 0 },
      { name: "Heat Rejection", value: 0 },
      { name: "FCU Fans", value: 0 }
    ]
  },
  "MU-P V1": {
    total: 227.162,
    breakdown: [
      { name: "Heating", value: 55.548 },
      { name: "Cooling", value: 42.761 },
      { name: "Interior Lighting", value: 25.423 },
      { name: "Electric Equipment", value: 48.716 },
      { name: "Exterior Lighting", value: 1.489 },
      { name: "Equipment (Gas)", value: 12.082 },
      { name: "Elevators", value: 5.664 },
      { name: "Water Systems", value: 13.276 },
      { name: "Fans", value: 21.263 },
      { name: "VAV Fans", value: 0 },
      { name: "Pump (Electric)", value: 0.829 },
      { name: "Heat Rejection", value: 0 },
      { name: "FCU Fans", value: 0.107 }
    ]
  },
  "MU-P V2": {
    total: 239.391,
    breakdown: [
      { name: "Heating", value: 63.876 },
      { name: "Cooling", value: 22.836 },
      { name: "Interior Lighting", value: 15.172 },
      { name: "Electric Equipment", value: 94.5 },
      { name: "Exterior Lighting", value: 3.487 },
      { name: "Equipment (Gas)", value: 6.713 },
      { name: "Elevators", value: 2 },
      { name: "Water Systems", value: 15.655 },
      { name: "Fans", value: 2.74 },
      { name: "VAV Fans", value: 6.368 },
      { name: "Pump (Electric)", value: 5.72 },
      { name: "Heat Rejection", value: 0.134 },
      { name: "FCU Fans", value: 0.181 }
    ]
  },
  "MU-S/L": {
    total: 173.754,
    breakdown: [
      { name: "Heating", value: 17.224 },
      { name: "Cooling", value: 9.062 },
      { name: "Interior Lighting", value: 38.037 },
      { name: "Electric Equipment", value: 45.967 },
      { name: "Exterior Lighting", value: 2.433 },
      { name: "Equipment (Gas)", value: 20.009 },
      { name: "Elevators", value: 27.299 },
      { name: "Water Systems", value: 5.488 },
      { name: "Fans", value: 8.211 },
      { name: "VAV Fans", value: 0 },
      { name: "Pump (Electric)", value: 0.006 },
      { name: "Heat Rejection", value: 0 },
      { name: "FCU Fans", value: 0 }
    ]
  },
  "MU-P V2/L": {
    total: 166.368,
    breakdown: [
      { name: "Heating", value: 64.636 },
      { name: "Cooling", value: 11.793 },
      { name: "Interior Lighting", value: 14.562 },
      { name: "Electric Equipment", value: 52.918 },
      { name: "Exterior Lighting", value: 2.795 },
      { name: "Equipment (Gas)", value: 0 },
      { name: "Elevators", value: 0.399 },
      { name: "Water Systems", value: 11.614 },
      { name: "Fans", value: 1.788 },
      { name: "VAV Fans", value: 3.284 },
      { name: "Pump (Electric)", value: 2.426 },
      { name: "Heat Rejection", value: 0.153 },
      { name: "FCU Fans", value: 0 }
    ]
  },
  "CC1": {
    total: 180.704,
    breakdown: [
      { name: "Heating", value: 24.071 },
      { name: "Cooling", value: 15.574 },
      { name: "Interior Lighting", value: 30.702 },
      { name: "Electric Equipment", value: 65.436 },
      { name: "Exterior Lighting", value: 5.837 },
      { name: "Equipment (Gas)", value: 18.003 },
  
  
      { name: "Elevators", value: 0.612 },
  { name: "Water Systems", value: 3.904 },
  { name: "Fans", value: 16.556 },
  { name: "VAV Fans", value: 0 },
  { name: "Pump (Electric)", value: 0.007 },
  { name: "Heat Rejection", value: 0 },
  { name: "FCU Fans", value: 0 }
    ]
  },
  "CC2": {
  total: 231.41,
    breakdown: [
      { name: "Heating", value: 78.557 },
      { name: "Cooling", value: 21.846 },
      { name: "Interior Lighting", value: 22.203 },
      { name: "Electric Equipment", value: 73.528 },
      { name: "Exterior Lighting", value: 3.98 },
      { name: "Equipment (Gas)", value: 4.618 },
      { name: "Elevators", value: 2.326 },
      { name: "Water Systems", value: 9.211 },
      { name: "Fans", value: 2.429 },
      { name: "VAV Fans", value: 6.688 },
      { name: "Pump (Electric)", value: 5.699 },
      { name: "Heat Rejection", value: 0 },
      { name: "FCU Fans", value: 0.211 }
    ]
  },
  "CC1/L": {
  total: 194.366,
    breakdown: [
      { name: "Heating", value: 31.089 },
      { name: "Cooling", value: 14.793 },
      { name: "Interior Lighting", value: 27.742 },
      { name: "Electric Equipment", value: 69.005 },
      { name: "Exterior Lighting", value: 7.119 },
      { name: "Equipment (Gas)", value: 19.376 },
      { name: "Elevators", value: 0 },
      { name: "Water Systems", value: 4.043 },
      { name: "Fans", value: 21.189 },
      { name: "VAV Fans", value: 0 },
      { name: "Pump (Electric)", value: 0.011 },
      { name: "Heat Rejection", value: 0 },
      { name: "FCU Fans", value: 0 }
    ]
  },
  "IND-LOW": {
  total: 56.179,
    breakdown: [
      { name: "Heating", value: 10.378 },
      { name: "Cooling", value: 2.177 },
      { name: "Interior Lighting", value: 17.974 },
      { name: "Electric Equipment", value: 16.423 },
      { name: "Exterior Lighting", value: 4.305 },
      { name: "Equipment (Gas)", value: 0 },
      { name: "Elevators", value: 0 },
      { name: "Water Systems", value: 0.332 },
      { name: "Fans", value: 4.59 },
      { name: "VAV Fans", value: 0 },
      { name: "Pump (Electric)", value: 0 },
      { name: "Heat Rejection", value: 0 },
      { name: "FCU Fans", value: 0 }
    ]
  }
    */
};

const ENERGY_STATUS_IMAGES = {
  "Positive": "Content/Images_EnergyStatus/Positive.png",
  "Neutral": "Content/Images_EnergyStatus/Neutral.png",
  "Negative": "Content/Images_EnergyStatus/Negative.png"
};

// Export for use in app.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CONCEPTS, NEIGHBOURHOODS, BUILDING_IMAGES, ENERGY_COLORS, ENERGY_DATA, ENERGY_STATUS_IMAGES };
}
