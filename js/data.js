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
    content: "12 Midrise",
    image: "Content/Images_Neighbourhoods/NUS_RC5.png",
    buildings: ["midrise apartment"]
  },
  {
    code: "RC6",
    conceptId: 6,
    usage: "residential",
    context: "suburban",
    density: "medium",
    layout: "grid",
    eui: 65.885,
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
    content: "4 Warehouse + 4 Small Office",
    image: "Content/Images_Neighbourhoods/NUs_IND-LOW.png",
    buildings: ["Warehouse", "Small Office"]
  }
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

// Export for use in app.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CONCEPTS, NEIGHBOURHOODS, BUILDING_IMAGES };
}
