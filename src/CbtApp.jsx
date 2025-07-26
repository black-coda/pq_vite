import React, {useState, useEffect, useRef} from 'react';
import {FaClock, FaChevronLeft, FaChevronRight, FaCheck, FaRedo, FaTrophy, FaBookOpen} from 'react-icons/fa';

const questionsData = [
    {
        "question": "Which vegetation zone do the northern Yoruba of Kwara and Kogi states belong to?",
        "options": {
            "A": "Mangrove",
            "B": "Guinea Savannah",
            "C": "Sahel Savannah",
            "D": "Tropical Rainforest"
        },
        "answer": "B"
    },
    {
        "question": "Which geopolitical zone is coterminous with the Guinea Savannah in Nigeria?",
        "options": {
            "A": "North-East",
            "B": "South-East",
            "C": "North-Central",
            "D": "South-West"
        },
        "answer": "C"
    },
    {
        "question": "Which ethnic group is associated with Benue state in the Guinea Savannah?",
        "options": {
            "A": "Nupe",
            "B": "Tiv",
            "C": "Bariba",
            "D": "Ebira"
        },
        "answer": "B"
    },
    {
        "question": "Which of the following ethnic groups is NOT mentioned as being in the Guinea Savannah zone?",
        "options": {
            "A": "Bariga",
            "B": "Kamuku",
            "C": "Gwari",
            "D": "Ijaw"
        },
        "answer": "D"
    },
    {
        "question": "Which states are part of the Sudan/Sahel Savannah zone in Nigeria?",
        "options": {
            "A": "Benue, Kwara, and Plateau",
            "B": "Kebbi, Sokoto, and Yobe",
            "C": "Rivers, Cross River, and Bayelsa",
            "D": "Ekiti, Ogun, and Oyo"
        },
        "answer": "B"
    },
    {
        "question": "What is the most widely spoken language in Northern Nigeria?",
        "options": {
            "A": "Kanuri",
            "B": "Igbo",
            "C": "Hausa",
            "D": "Yoruba"
        },
        "answer": "C"
    },
    {
        "question": "Where are the Fulani predominantly found across Africa?",
        "options": {
            "A": "East Africa only",
            "B": "North Africa only",
            "C": "Sudan Africa from South Sudan to Senegal",
            "D": "Central Africa only"
        },
        "answer": "C"
    },
    {
        "question": "The Fulani in Nigeria are classified into which two groups?",
        "options": {
            "A": "Forest and Desert Fulani",
            "B": "Nomadic and Town Fulani",
            "C": "Northern and Southern Fulani",
            "D": "Urban and Rural Fulani"
        },
        "answer": "B"
    },
    {
        "question": "Which ethnic groups are found in the Sudan/Sahel zone apart from Hausa and Fulani?",
        "options": {
            "A": "Yoruba and Igbo",
            "B": "Ijaw and Ibibio",
            "C": "Kanuri, Shuwa, and Lere",
            "D": "Tiv and Idoma"
        },
        "answer": "C"
    },
    {
        "question": "The Kanuri people are best described as:",
        "options": {
            "A": "Exclusively nomadic",
            "B": "Predominantly coastal",
            "C": "Both nomadic and agricultural",
            "D": "Mountain settlers"
        },
        "answer": "C"
    },
    {
        "question": "How many traditional Hausa kingdoms existed according to Hausa tradition?",
        "options": {
            "A": "5",
            "B": "7",
            "C": "9",
            "D": "11"
        },
        "answer": "B"
    },
    {
        "question": "Which of the following is NOT one of the original Hausa kingdoms (Bakwai)?",
        "options": {
            "A": "Daura",
            "B": "Zaria",
            "C": "Ilorin",
            "D": "Rano"
        },
        "answer": "C"
    },
    {
        "question": "Which group of states formed the original Hausa Bakwai?",
        "options": {
            "A": "Lagos, Ibadan, Enugu",
            "B": "Kano, Katsina, Zaria",
            "C": "Benue, Plateau, Taraba",
            "D": "Calabar, Aba, Port Harcourt"
        },
        "answer": "B"
    },
    {
        "question": "What is the significance of the Hausa Bakwai?",
        "options": {
            "A": "They were centers of Islamic scholarship",
            "B": "They were major trading ports",
            "C": "They were considered legitimate Hausa states",
            "D": "They controlled the Atlantic coastline"
        },
        "answer": "C"
    },
    {
        "question": "The term 'Hausa-Fulani' refers to:",
        "options": {
            "A": "A kingdom in South Nigeria",
            "B": "A merged ethnic identity dominant in the north",
            "C": "An Islamic sect",
            "D": "A colonial-era institution"
        },
        "answer": "B"
    },
    {
        "question": "Which geopolitical zone does Adamawa belong to?",
        "options": {
            "A": "South-West",
            "B": "North-West",
            "C": "North-East",
            "D": "North-Central"
        },
        "answer": "C"
    },
    {
        "question": "The Jukun people are primarily associated with which zone?",
        "options": {
            "A": "Guinea Savannah",
            "B": "Sahel Savannah",
            "C": "Rainforest Belt",
            "D": "Coastal Areas"
        },
        "answer": "A"
    },
    {
        "question": "The Nupe ethnic group is associated with which state?",
        "options": {
            "A": "Benue",
            "B": "Niger",
            "C": "Yobe",
            "D": "Kano"
        },
        "answer": "B"
    },
    {
        "question": "The term 'town Fulani' refers to:",
        "options": {
            "A": "Fulani who live in the mountains",
            "B": "Fulani in permanent settlements",
            "C": "Fulani who engage in fishing",
            "D": "Fulani ruling class"
        },
        "answer": "B"
    },
    {
        "question": "What characterizes the Hausa language in Nigeria?",
        "options": {
            "A": "Used only in Sokoto",
            "B": "Limited to religious rituals",
            "C": "Most widely spoken language in northern Nigeria",
            "D": "Spoken in South-East Nigeria"
        },
        "answer": "C"
    },
    {
        "question": "The Kanuri ethnic group is prevalent in which Nigerian states?",
        "options": {
            "A": "Yobe and Borno",
            "B": "Benue and Kogi",
            "C": "Kwara and Lagos",
            "D": "Oyo and Ekiti"
        },
        "answer": "A"
    },
    {
        "question": "What distinguishes the Guinea Savannah from the Sudan Savannah?",
        "options": {
            "A": "Higher elevation",
            "B": "More rainfall and dense ethnic diversity",
            "C": "Urban development",
            "D": "Only one ethnic group present"
        },
        "answer": "B"
    },
    {
        "question": "Which ethnic group in the Guinea Savannah zone is known for a large population and spread?",
        "options": {
            "A": "Fulani",
            "B": "Kanuri",
            "C": "Hausa",
            "D": "Hausa-Fulani"
        },
        "answer": "D"
    },
    {
        "question": "Which ethnic group is found in both Niger and Kaduna states within the Guinea Savannah?",
        "options": {
            "A": "Yoruba",
            "B": "Jukun",
            "C": "Gwari",
            "D": "Igbo"
        },
        "answer": "C"
    },
    {
        "question": "Which ethnic group is both nomadic and agricultural in the Sahel region?",
        "options": {
            "A": "Igbo",
            "B": "Yoruba",
            "C": "Kanuri",
            "D": "Ijaw"
        },
        "answer": "C"
    },

    {
        "question": "Which geographical feature marks Nigeria’s northern boundary?",
        "options": {
            "A": "Atlantic Ocean",
            "B": "Southern Cameroon",
            "C": "Sahara Desert",
            "D": "Gulf of Guinea"
        },
        "answer": "C"
    },
    {
        "question": "What is Nigeria’s southern boundary?",
        "options": {
            "A": "Chad Basin",
            "B": "Atlantic Ocean",
            "C": "Sokoto Plain",
            "D": "Western Highlands"
        },
        "answer": "B"
    },
    {
        "question": "Which areas are considered the coolest places in Nigeria?",
        "options": {
            "A": "Sokoto and Maiduguri",
            "B": "Adamawa and Jos Plateau",
            "C": "Lagos and Ibadan",
            "D": "Niger-Benue Valley"
        },
        "answer": "B"
    },
    {
        "question": "The hottest areas in Nigeria are located in the:",
        "options": {
            "A": "Jos Plateau",
            "B": "Niger-Benue Valley, Sokoto Plain and Chad Basin",
            "C": "Western Highlands",
            "D": "Coastal Mangroves"
        },
        "answer": "B"
    },
    {
        "question": "What is the typical temperature range for Nigeria's eastern borderlands?",
        "options": {
            "A": "Below 20°C",
            "B": "22°C – 24°C",
            "C": "24°C – 27°C",
            "D": "Above 30°C"
        },
        "answer": "C"
    },
    {
        "question": "Which regions in Nigeria are the most humid?",
        "options": {
            "A": "Sokoto and Katsina",
            "B": "Coastal regions",
            "C": "Middle Belt",
            "D": "Sahelian North"
        },
        "answer": "B"
    },
    {
        "question": "Humidity levels in Sokoto/Katsina and Bauchi/Gombe interiors are typically:",
        "options": {
            "A": "80–100%",
            "B": "60–80%",
            "C": "20–40%",
            "D": "Less than 20%"
        },
        "answer": "D"
    },
    {
        "question": "The entire country of Nigeria experiences humidity levels ranging from:",
        "options": {
            "A": "0% to 20%",
            "B": "20% to 80%",
            "C": "40% to 90%",
            "D": "70% to 100%"
        },
        "answer": "B"
    },
    {
        "question": "What two major seasonal air masses affect Nigeria’s climate?",
        "options": {
            "A": "Equatorial and Temperate winds",
            "B": "Harmattan and Equinox",
            "C": "Tropical maritime and tropical continental",
            "D": "Atlantic and Sahara breezes"
        },
        "answer": "C"
    },
    {
        "question": "The tropical maritime winds bring which of the following?",
        "options": {
            "A": "Dust storms",
            "B": "Dry weather",
            "C": "Heavy rainfall",
            "D": "Extreme heat"
        },
        "answer": "C"
    },
    {
        "question": "The harmattan winds are characterized by:",
        "options": {
            "A": "Heavy rainfall",
            "B": "Cold, wet air",
            "C": "Dusty and dry conditions",
            "D": "Monsoon rains"
        },
        "answer": "C"
    },
    {
        "question": "Where does rainfall exceed 300 cm annually in Nigeria?",
        "options": {
            "A": "Sokoto and Kano",
            "B": "Middle Belt",
            "C": "Coastal areas",
            "D": "Sahel region"
        },
        "answer": "C"
    },
    {
        "question": "Rainfall decreases as one moves from the:",
        "options": {
            "A": "North to the South",
            "B": "East to the West",
            "C": "South to the North",
            "D": "Lowlands to the highlands"
        },
        "answer": "C"
    },
    {
        "question": "Which city experiences less than 100 cm of annual rainfall?",
        "options": {
            "A": "Port Harcourt",
            "B": "Sokoto",
            "C": "Warri",
            "D": "Enugu"
        },
        "answer": "B"
    },
    {
        "question": "Nigeria’s vegetation reflects its:",
        "options": {
            "A": "Military strength",
            "B": "Ethnic diversity",
            "C": "Climatic zones",
            "D": "Cultural zones"
        },
        "answer": "C"
    },
    {
        "question": "From the Atlantic Ocean in the south to the Sahara desert in the north, Nigeria’s vegetation transitions through:",
        "options": {
            "A": "Rainforest → Savanna → Desert",
            "B": "Mangrove → Rainforest → Guinea → Sudan → Sahel",
            "C": "Alpine → Mediterranean → Grassland",
            "D": "Coniferous → Deciduous → Dry Shrubs"
        },
        "answer": "B"
    },
    {
        "question": "The coastal regions of Nigeria are primarily covered by:",
        "options": {
            "A": "Sahel Savannah",
            "B": "Guinea Grassland",
            "C": "Mangrove Swamps",
            "D": "Desert Vegetation"
        },
        "answer": "C"
    },
    {
        "question": "Which vegetation zone lies immediately north of the mangrove belt?",
        "options": {
            "A": "Sahara Desert",
            "B": "Rainforest",
            "C": "Sahel Savannah",
            "D": "Temperate Forest"
        },
        "answer": "B"
    },
    {
        "question": "The Guinea Savannah lies between which two vegetation zones?",
        "options": {
            "A": "Mangrove and Desert",
            "B": "Rainforest and Sudan Savannah",
            "C": "Rainforest and Alpine",
            "D": "Mangrove and Rainforest"
        },
        "answer": "B"
    },
    {
        "question": "Which of the following is not a characteristic of Nigeria’s southern climate?",
        "options": {
            "A": "High rainfall",
            "B": "Dense vegetation",
            "C": "Low humidity",
            "D": "Mangrove swamps"
        },
        "answer": "C"
    },
    {
        "question": "Jos Plateau is known for having which of the following?",
        "options": {
            "A": "High humidity",
            "B": "Low altitude",
            "C": "Cool temperatures",
            "D": "Desert features"
        },
        "answer": "C"
    },
    {
        "question": "Which region is known to experience both dry and wet seasons due to alternating wind systems?",
        "options": {
            "A": "South-West",
            "B": "North-East",
            "C": "Entire country",
            "D": "Riverine areas only"
        },
        "answer": "C"
    },
    {
        "question": "Which region is moderately hot with temperatures between 24°C and 27°C?",
        "options": {
            "A": "Jos Plateau",
            "B": "Eastern borderlands and western hinterlands",
            "C": "Chad Basin",
            "D": "Niger Delta"
        },
        "answer": "B"
    },
    {
        "question": "Where are temperatures usually higher than 27°C in Nigeria?",
        "options": {
            "A": "Rainforest zone",
            "B": "Jos Plateau",
            "C": "Chad Basin and Niger-Benue valley",
            "D": "Eastern Highlands"
        },
        "answer": "C"
    },
    {
        "question": "What explains the diverse vegetation patterns in Nigeria?",
        "options": {
            "A": "Foreign agricultural practices",
            "B": "Historical political systems",
            "C": "Climatic differences and air masses",
            "D": "Colonial influences"
        },
        "answer": "C"
    },
    {
        "question": "How many ethnic nationalities does Nigeria have, according to the text?",
        "options": {
            "A": "Less than 50",
            "B": "Over 200",
            "C": "Exactly 100",
            "D": "Around 150"
        },
        "answer": "B"
    },
    {
        "question": "Which geopolitical zone includes the Federal Capital Territory?",
        "options": {
            "A": "North-West",
            "B": "North-Central",
            "C": "South-East",
            "D": "South-West"
        },
        "answer": "B"
    },
    {
        "question": "Which of the following states is NOT part of the North-East geopolitical zone?",
        "options": {
            "A": "Adamawa",
            "B": "Bauchi",
            "C": "Kano",
            "D": "Taraba"
        },
        "answer": "C"
    },
    {
        "question": "Which ethnic group is predominant in the South-East geopolitical zone?",
        "options": {
            "A": "Yoruba",
            "B": "Igbo",
            "C": "Hausa",
            "D": "Fulani"
        },
        "answer": "B"
    },
    {
        "question": "What are the three broad ethnic population zones mentioned in the text?",
        "options": {
            "A": "Coastal, forest, and savannah",
            "B": "South, North-Central, and North-East/North-West",
            "C": "Urban, rural, and suburban",
            "D": "Mountain, desert, and plains"
        },
        "answer": "B"
    },
    {
        "question": "Which of the following ethnic groups is NOT mentioned as predominant in the North-Central geopolitical zone?",
        "options": {
            "A": "Yoruba",
            "B": "Tiv",
            "C": "Igbo",
            "D": "Nupe"
        },
        "answer": "C"
    },
    {
        "question": "Which vegetation belts are associated with the southern geopolitical zones?",
        "options": {
            "A": "Coastal mangrove/fresh water swamps and rainforest",
            "B": "Guinea savannah",
            "C": "Sudan and Sahel savannah",
            "D": "Desert and semi-desert"
        },
        "answer": "A"
    },
    {
        "question": "Which of the following is a dominant ethnic group in the North-West and North-East zones?",
        "options": {
            "A": "Yoruba",
            "B": "Igbo",
            "C": "Hausa and Fulani",
            "D": "Izon"
        },
        "answer": "C"
    },
    {
        "question": "Which of the following is NOT a state in the South-South geopolitical zone?",
        "options": {
            "A": "Akwa-Ibom",
            "B": "Bayelsa",
            "C": "Enugu",
            "D": "Delta"
        },
        "answer": "C"
    },
    {
        "question": "What is the primary focus of the text regarding ethnic groups?",
        "options": {
            "A": "Their genetic differences",
            "B": "Their distribution over the six geopolitical zones",
            "C": "Their religious practices",
            "D": "Their technological advancements"
        },
        "answer": "B"
    },
    {
        "question": "Which ethnic groups are mentioned as the most widespread in Niger?",
        "options": {
            "A": "Yoruba, Hausa, and Fulani",
            "B": "Igbo, Jukun, and Tiv",
            "C": "Nupe, Gwari, and Kanuri",
            "D": "Ibibio, Edo, and Izon"
        },
        "answer": "A"
    },
    {
        "question": "Where are the Yoruba ethnic groups primarily found?",
        "options": {
            "A": "Only in the mangrove water swamp",
            "B": "From the south-west extremity to the southern banks of the Niger River in Kwara state",
            "C": "Exclusively in the Sahel savanna",
            "D": "Only in the rainforest belt"
        },
        "answer": "B"
    },
    {
        "question": "Which of the following is NOT one of the historically dominant ethnic groups in Nigeria?",
        "options": {
            "A": "Hausa-Fulani",
            "B": "Yoruba",
            "C": "Igbo",
            "D": "Jukun"
        },
        "answer": "D"
    },
    {
        "question": "What promoted greater intercourse between groups in the grasslands?",
        "options": {
            "A": "The use of the horse and donkey",
            "B": "Technological advancements",
            "C": "Religious pilgrimages",
            "D": "Political alliances"
        },
        "answer": "A"
    },
    {
        "question": "Which of the following groups had trade and cultural contacts with the Hausa, Fulani, and Nupe?",
        "options": {
            "A": "Middle belt Yoruba, Jukun, and Igala",
            "B": "Igbo and Ibibio",
            "C": "Izon and Urhobo",
            "D": "Bini and Esan"
        },
        "answer": "A"
    },
    {
        "question": "What was the significance of the resultant interdependence between ethnic groups under colonial rule?",
        "options": {
            "A": "It led to complete cultural assimilation",
            "B": "It became more glaring as they came under the new nation of Nigeria",
            "C": "It resulted in the disappearance of smaller ethnic groups",
            "D": "It had no significant impact"
        },
        "answer": "B"
    },
    {
        "question": "Which of the following is NOT mentioned as a second group of fairly large ethnic nationalities?",
        "options": {
            "A": "Jukun",
            "B": "Tiv",
            "C": "Bini",
            "D": "Kanuri"
        },
        "answer": "C"
    },
    {
        "question": "What was the primary reason for trade between coastal dwellers and agricultural people from the forest belt?",
        "options": {
            "A": "Religious differences",
            "B": "Coastal dwellers' inability to engage in commercial agriculture",
            "C": "Political conflicts",
            "D": "Technological disparities"
        },
        "answer": "B"
    },
    {
        "question": "Which of the following is a characteristic of the third group of ethnic groups mentioned?",
        "options": {
            "A": "They are the largest ethnic groups",
            "B": "They are scattered within the six geopolitical zones",
            "C": "They are exclusively found in the north",
            "D": "They have no cultural contacts with other groups"
        },
        "answer": "B"
    },
    {
        "question": "What was the impact of European contact on trade among ethnic groups?",
        "options": {
            "A": "It decreased the volume of trade",
            "B": "It added new articles of trade and increased its volume and intensity",
            "C": "It led to the cessation of all trade",
            "D": "It had no impact on trade"
        },
        "answer": "B"
    },
    {
        "question": "What is one of the cultural attributes cherished by the people, as mentioned in the text?",
        "options": {
            "A": "Good conduct",
            "B": "Wealth accumulation",
            "C": "Isolation from others",
            "D": "Technological advancement"
        },
        "answer": "A"
    },
    {
        "question": "What is hospitality considered as in Nigerian culture?",
        "options": {
            "A": "A rare and unimportant trait",
            "B": "An act of providing care or services for someone in need",
            "C": "Only relevant in urban areas",
            "D": "A modern concept"
        },
        "answer": "B"
    },
    {
        "question": "Which of the following is NOT an element of Nigerian hospitality?",
        "options": {
            "A": "Honesty",
            "B": "Violence",
            "C": "Warmness",
            "D": "Trust"
        },
        "answer": "B"
    },
    {
        "question": "What is the relationship between indigenes and settlers initially like?",
        "options": {
            "A": "Hostile from the beginning",
            "B": "Cordial, with settlers surviving through the mercy of indigenes",
            "C": "Non-existent",
            "D": "Competitive from the start"
        },
        "answer": "B"
    },
    {
        "question": "What often leads to conflict between indigenes and settlers?",
        "options": {
            "A": "The settlers' refusal to adopt the indigenous culture",
            "B": "The settlers' desire to contest ownership of the land",
            "C": "The indigenes' lack of hospitality",
            "D": "The settlers' technological superiority"
        },
        "answer": "B"
    },
    {
        "question": "Which ancient civilisation is mentioned as dating back to 500 BC – 200 A.D.?",
        "options": {
            "A": "Ife",
            "B": "Nok",
            "C": "Benin",
            "D": "Igbo-Ukwu"
        },
        "answer": "B"
    },
    {
        "question": "What is the primary cause of conflict between indigenes and settlers?",
        "options": {
            "A": "Religious differences",
            "B": "Desire to control land and natural resources",
            "C": "Language barriers",
            "D": "Technological disparities"
        },
        "answer": "B"
    },
    {
        "question": "What is the consequence of the breakdown of peaceful relationships between indigenes and settlers?",
        "options": {
            "A": "Increased trade and cooperation",
            "B": "Displacement of persons, destruction of properties, and loss of peace",
            "C": "Cultural assimilation",
            "D": "Technological advancement"
        },
        "answer": "B"
    },
    {
        "question": "Which of the following is NOT a characteristic of hospitality in Nigerian culture?",
        "options": {
            "A": "Promotes love among people",
            "B": "Devoid of violence and antagonism",
            "C": "Encourages isolation",
            "D": "Includes acts of kindness and favour"
        },
        "answer": "C"
    },
    {
        "question": "What is the main reason for the high moral standards in the past, as mentioned in the text?",
        "options": {
            "A": "Technological advancements",
            "B": "Societies were not so diffused, and laws commanded obedience",
            "C": "Religious uniformity",
            "D": "Economic prosperity"
        },
        "answer": "B"
    },
    {
        "question": "According to E.B. Taylor, what does culture include?",
        "options": {
            "A": "Only knowledge and beliefs",
            "B": "Only arts and morals",
            "C": "Knowledge, beliefs, arts, morals, customs, and other capabilities",
            "D": "Only customs and language"
        },
        "answer": "C"
    },
    {
        "question": "What are the two types of culture mentioned in the text?",
        "options": {
            "A": "Primary and secondary",
            "B": "Material and non-material",
            "C": "Ancient and modern",
            "D": "Urban and rural"
        },
        "answer": "B"
    },
    {
        "question": "Which of the following is an example of material culture?",
        "options": {
            "A": "Beliefs",
            "B": "Cooking pots",
            "C": "Language",
            "D": "Songs"
        },
        "answer": "B"
    },
    {
        "question": "What is culture considered as, according to Asiwaju (1997)?",
        "options": {
            "A": "A biological inheritance",
            "B": "The totality of the way of life evolved by a people to meet environmental challenges",
            "C": "A static and unchanging entity",
            "D": "Only the artistic outputs of a society"
        },
        "answer": "B"
    },
    {
        "question": "How is culture transmitted from one generation to another?",
        "options": {
            "A": "Through biological inheritance",
            "B": "Through the process of socialisation",
            "C": "Through genetic mutation",
            "D": "Through natural selection"
        },
        "answer": "B"
    },
    {
        "question": "Which of the following is NOT part of non-material culture?",
        "options": {
            "A": "Beliefs",
            "B": "Tools",
            "C": "Value systems",
            "D": "Literature"
        },
        "answer": "B"
    },
    {
        "question": "What does culture provide for a society, according to the text?",
        "options": {
            "A": "Only economic benefits",
            "B": "Order and a means of interaction",
            "C": "Isolation from other societies",
            "D": "A rigid and unchanging structure"
        },
        "answer": "B"
    },
    {
        "question": "Who defined culture as 'a humanising process characterised by the collective effort to preserve life'?",
        "options": {
            "A": "E.B. Taylor",
            "B": "Herbert Marcus",
            "C": "Dioka",
            "D": "Ajayi"
        },
        "answer": "B"
    },
    {
        "question": "Which of the following is a characteristic of culture?",
        "options": {
            "A": "It is biologically inherited",
            "B": "It is static and unchanging",
            "C": "It is an integrated system of learned behaviour patterns",
            "D": "It is exclusive to urban societies"
        },
        "answer": "C"
    },
    {
        "question": "What role does culture play in differentiating groups?",
        "options": {
            "A": "It has no role in differentiation",
            "B": "It serves as an identity for differentiating members of one group from another",
            "C": "It only differentiates based on economic status",
            "D": "It differentiates based on genetic traits"
        },
        "answer": "B"
    }
    ,
    {
        "question": "When was the first successful oil well drilled in Nigeria?",
        "options": {
            "A": "1958",
            "B": "1960",
            "C": "1956",
            "D": "1961"
        },
        "answer": "C"
    },
    {
        "question": "Which company drilled the first successful oil well at Oloibiri?",
        "options": {
            "A": "Elf",
            "B": "Shell D'Arcy",
            "C": "Texaco",
            "D": "Agip"
        },
        "answer": "B"
    },
    {
        "question": "What year did Shell's Bonny Terminal get commissioned?",
        "options": {
            "A": "1958",
            "B": "1961",
            "C": "1965",
            "D": "1970"
        },
        "answer": "B"
    },
    {
        "question": "Which oil company started operations in Nigeria in 1962 as Safrap?",
        "options": {
            "A": "Elf",
            "B": "Mobil",
            "C": "Texaco",
            "D": "Agip"
        },
        "answer": "A"
    },
    {
        "question": "In which year did Mobil Producing Nigeria Limited form?",
        "options": {
            "A": "1963",
            "B": "1968",
            "C": "1969",
            "D": "1970"
        },
        "answer": "C"
    },
    {
        "question": "Where did Elf discover the Obagi field?",
        "options": {
            "A": "Escravos",
            "B": "Bende",
            "C": "Obagi",
            "D": "Ebocha"
        },
        "answer": "C"
    },
    {
        "question": "Which company drilled its first dry well at Osari–I?",
        "options": {
            "A": "Phillips",
            "B": "Mobil",
            "C": "Shell",
            "D": "Agip"
        },
        "answer": "A"
    },
    {
        "question": "When did the Department of Petroleum Resources Inspectorate start?",
        "options": {
            "A": "1968",
            "B": "1970",
            "C": "1971",
            "D": "1974"
        },
        "answer": "C"
    },
    {
        "question": "What percentage of shares did the Federal Government acquire in oil companies?",
        "options": {
            "A": "25%",
            "B": "30%",
            "C": "35%",
            "D": "40%"
        },
        "answer": "C"
    },
    {
        "question": "Pan Ocean Corporation drilled its first discovery well at which location?",
        "options": {
            "A": "Osari",
            "B": "Obagi",
            "C": "Ogharefe",
            "D": "Idoho"
        },
        "answer": "C"
    },
    {
        "question": "According to Odili & Mokwunye (2003), what plays a major role in the economic transformation of a country?",
        "options": {
            "A": "Non-economic factors",
            "B": "A sustainable economy",
            "C": "Political stability",
            "D": "Social reforms"
        },
        "answer": "B"
    },
    {
        "question": "What is heavily dependent on the performance and growth of the power sector?",
        "options": {
            "A": "Agricultural production",
            "B": "Industrial activities",
            "C": "The projected growth of an economy",
            "D": "International trade"
        },
        "answer": "C"
    },
    {
        "question": "What has been a phenomenal increase in the area of Trade and Commerce?",
        "options": {
            "A": "Telephone lines",
            "B": "Internet users in Nigeria",
            "C": "Railway networks",
            "D": "Banking services"
        },
        "answer": "B"
    },
    {
        "question": "By what year had the number of Nigerian internet users from the year 2001 increased largely?",
        "options": {
            "A": "2005",
            "B": "2008",
            "C": "2010",
            "D": "2012"
        },
        "answer": "B"
    },
    {
        "question": "What is E-commerce the use of?",
        "options": {
            "A": "Postal services",
            "B": "Marketing, identification, payment, and delivery of goods and services",
            "C": "Road transportation",
            "D": "Traditional barter system"
        },
        "answer": "B"
    },
    {
        "question": "What has the e-commerce industry revolutionized in the country?",
        "options": {
            "A": "Political campaigns",
            "B": "The mode of business transactions",
            "C": "Agricultural practices",
            "D": "Educational system"
        },
        "answer": "B"
    },
    {
        "question": "What has Nigeria integrated into its financial system, a step that has reduced the flow of physical cash?",
        "options": {
            "A": "Credit card system",
            "B": "Automated Teller Machines (ATMs)",
            "C": "Electronic payment system",
            "D": "Mobile banking applications"
        },
        "answer": "C"
    },
    {
        "question": "What has the whole world becoming as a result of the internet activities and sky-rocketed the effect of globalization?",
        "options": {
            "A": "More complex",
            "B": "Smaller",
            "C": "More isolated",
            "D": "Less interconnected"
        },
        "answer": "B"
    },
    {
        "question": "What does the Nigerian Government, through the Ministry of Industry, Trade and Investment, seek to ensure?",
        "options": {
            "A": "Increased reliance on crude oil",
            "B": "Diversification of the resource base of the economy",
            "C": "Reduction in foreign investments",
            "D": "Limitation of export activities"
        },
        "answer": "B"
    },
    {
        "question": "What has become pertinent for the Nigerian economy given its past sole dependency on oil exports?",
        "options": {
            "A": "Increased oil exploration",
            "B": "Limiting trade with other nations",
            "C": "Diversified to include non-oil exports",
            "D": "Reducing domestic consumption"
        },
        "answer": "C"
    },
    {
        "question": "According to the text, what is education considered to be for human capital formation?",
        "options": {
            "A": "A burden",
            "B": "A bridge to the future",
            "C": "A luxury",
            "D": "A necessary evil"
        },
        "answer": "B"
    },
    {
        "question": "What is crucial and fundamentally linked to the educational system for a nation's ability to develop?",
        "options": {
            "A": "Economic status",
            "B": "Skills, knowledge abilities and competencies of its members",
            "C": "Political ideologies",
            "D": "Religious beliefs"
        },
        "answer": "B"
    },
    {
        "question": "What is the primary determinant of a country's standard of living?",
        "options": {
            "A": "Its natural resources",
            "B": "How well it succeeds in developing and utilizing the skills, knowledge, health, and habits of its population",
            "C": "Its military strength",
            "D": "Its historical heritage"
        },
        "answer": "B"
    },
    {
        "question": "According to Ogbodo & Nwaoku (2007), what can be neglected only at a country's peril?",
        "options": {
            "A": "Industrial development",
            "B": "Human capital development",
            "C": "Agricultural output",
            "D": "Technological advancement"
        },
        "answer": "B"
    },
    {
        "question": "What does education liberate man and his society from, according to Aghenta (2001)?",
        "options": {
            "A": "Poverty and disease",
            "B": "Ignorance and superstition",
            "C": "War and conflict",
            "D": "Economic hardship"
        },
        "answer": "B"
    },
    {
        "question": "Development on the other hand is a total and comprehensive transformation through quantitative and qualitative improvements in various parameters of life. What do investment theorists believe development begins with?",
        "options": {
            "A": "Financial capital",
            "B": "The training of men",
            "C": "Natural resources",
            "D": "Political stability"
        },
        "answer": "B"
    },
    {
        "question": "In which plan is the foundation for Nigerian educational policy found?",
        "options": {
            "A": "First National Development Plan",
            "B": "Second National Development Plan (1970-1974)",
            "C": "Third National Development Plan",
            "D": "Fourth National Development Plan"
        },
        "answer": "B"
    },
    {
        "question": "What was the proposed goal of equal opportunity for all citizens in the Second National Development Plan?",
        "options": {
            "A": "A communist society",
            "B": "A free democratic society, justice, national unity, self-reliance and a dynamic economy",
            "C": "An autocratic government",
            "D": "A socialist state"
        },
        "answer": "B"
    },
    {
        "question": "What was the proposed development plan that should foster the study of Nigerian culture and teach the importance of national unification?",
        "options": {
            "A": "Secondary education expansion",
            "B": "Universal primary education",
            "C": "Vocational training emphasis",
            "D": "Higher education reform"
        },
        "answer": "B"
    },
    {
        "question": "According to Taiwo (1980), what was given top priority by the government as a social service and investment in manpower?",
        "options": {
            "A": "Healthcare",
            "B": "Education",
            "C": "Agriculture",
            "D": "Infrastructure"
        },
        "answer": "B"
    },
    {
        "question": "What traditional role does the agricultural sector play in the economic development of Nigeria?",
        "options": {
            "A": "Generating employment opportunities",
            "B": "Providing raw materials for manufacturing",
            "C": "Contributing to export earnings",
            "D": "All of the above"
        },
        "answer": "D"
    },
    {
        "question": "Since when has Nigeria been undertaking most public policies in agriculture to promote food security?",
        "options": {
            "A": "1950",
            "B": "1960",
            "C": "1966",
            "D": "1970"
        },
        "answer": "B"
    },
    {
        "question": "What does the agricultural sector provide to alleviate poverty and earn substantial foreign exchange?",
        "options": {
            "A": "Manufactured goods",
            "B": "Adequate employment and income",
            "C": "Technological advancements",
            "D": "Educational opportunities"
        },
        "answer": "B"
    },
    {
        "question": "According to Nneka (2017), what percentage of its Gross Domestic Product does the leading economic activity in the continent contribute?",
        "options": {
            "A": "Between ten and fifteen percent",
            "B": "Between fifteen and twenty percent",
            "C": "Between twenty and thirty percent",
            "D": "Between thirty and forty percent"
        },
        "answer": "C"
    },
    {
        "question": "At independence in 1960, what was the main source of export earnings and public revenue?",
        "options": {
            "A": "Oil production",
            "B": "Agricultural marketing boards",
            "C": "Mineral extraction",
            "D": "Industrial manufacturing"
        },
        "answer": "B"
    },
    {
        "question": "What company has taken over the leading role in the economy from the agricultural marketing boards?",
        "options": {
            "A": "Nigerian National Petroleum Company (NNPC)",
            "B": "Central Bank of Nigeria (CBN)",
            "C": "Nigerian Electricity Regulatory Commission (NERC)",
            "D": "Nigerian Ports Authority (NPA)"
        },
        "answer": "A"
    },
    {
        "question": "According to data from the Central Bank of Nigeria (2003), what percentage of the nation's revenue earnings and export earnings do oil accounts for?",
        "options": {
            "A": "Around 50%",
            "B": "Nearly 80% of revenue and almost 100% of export",
            "C": "Exactly 90%",
            "D": "Less than 70%"
        },
        "answer": "B"
    },
    {
        "question": "Despite the significant contribution of oil, for what purpose do Nigerians indulge in agriculture?",
        "options": {
            "A": "For commercial exports",
            "B": "Purely as personal survival strategies",
            "C": "To warm the engine of our countries economy",
            "D": "Both B and C"
        },
        "answer": "D"
    },
    {
        "question": "What are the two main categories of energy resources that electricity has brought about development in?",
        "options": {
            "A": "Fossil fuels and nuclear power",
            "B": "Renewable and non-renewable energy resources",
            "C": "Hydroelectric and thermal power",
            "D": "Solar and wind power"
        },
        "answer": "B"
    },
    {
        "question": "Which of the following is NOT an example of a non-renewable energy source mentioned in the text?",
        "options": {
            "A": "Fuel oil",
            "B": "Natural gas",
            "C": "Coal",
            "D": "Wind power"
        },
        "answer": "D"
    },
    {
        "question": "According to Patience (2006), what period saw remarkable development in water transportation in Nigeria?",
        "options": {
            "A": "Before World War I",
            "B": "After World War I and II",
            "C": "During the colonial era",
            "D": "Post-independence"
        },
        "answer": "B"
    },
    {
        "question": "What improvements were introduced in water transportation during this period?",
        "options": {
            "A": "New sailing routes",
            "B": "Powered motor boats, government launched motorized ferries",
            "C": "Larger canoes",
            "D": "More traditional rafts"
        },
        "answer": "B"
    },
    {
        "question": "Which river did the outboard engine boat (the Erico) operate on?",
        "options": {
            "A": "River Benue",
            "B": "River Niger",
            "C": "River Cross",
            "D": "River Kaduna"
        },
        "answer": "B"
    },
    {
        "question": "When was the first Niger Bridge linking Asaba to Onitsha constructed?",
        "options": {
            "A": "1950s",
            "B": "1960s",
            "C": "1970s",
            "D": "1980s"
        },
        "answer": "B"
    },
    {
        "question": "What happened to the collection of tolls on the first Niger Bridge later?",
        "options": {
            "A": "It was increased",
            "B": "It was abolished",
            "C": "It was privatized",
            "D": "It was automated"
        },
        "answer": "B"
    },
    {
        "question": "Which of these is NOT a major bridge across the River Niger and River Benue mentioned in the text?",
        "options": {
            "A": "Ajaokuta Bridge",
            "B": "Makurdi Bridge",
            "C": "Lokoja Bridge",
            "D": "Niger Bridge at Onitsha"
        },
        "answer": "C"
    },
    {
        "question": "What is considered one of the main features of the economic development of Nigeria, historically?",
        "options": {
            "A": "Shift from agriculture to industry",
            "B": "Shift from water to railways and later on to road transportation or air transport",
            "C": "Shift from rural to urban areas",
            "D": "Shift from local to international trade"
        },
        "answer": "B"
    },
    {
        "question": "According to Nneka (2017), what percentage of the population engaged in agriculture is between 24.4 and 85.1% across various geo-political zones in Nigeria?",
        "options": {
            "A": "Manufacturing",
            "B": "Mining",
            "C": "Agriculture",
            "D": "Services"
        },
        "answer": "C"
    },
    {
        "question": "What is the nature of development of an economy?",
        "options": {
            "A": "A sudden shift in economic structure",
            "B": "A process whereby an economy enjoys growth in all economic sectors",
            "C": "A rapid increase in GDP",
            "D": "A decline in unemployment rates"
        },
        "answer": "B"
    },
    {
        "question": "What is a characteristic of some nations that are highly industrialized?",
        "options": {
            "A": "Focus mainly on agriculture",
            "B": "Focus mainly on industry",
            "C": "Focus mainly on services",
            "D": "Focus mainly on tourism"
        },
        "answer": "B"
    },
    {
        "question": "Which of the following is NOT mentioned as a major seaport in Nigeria?",
        "options": {
            "A": "Lagos port",
            "B": "Port-Harcourt",
            "C": "Tin Can Island port",
            "D": "Calabar port"
        },
        "answer": "D"
    },
    {
        "question": "The development of modern seaports in Nigeria was linked to the establishment of which body?",
        "options": {
            "A": "Nigerian Customs Service (NCS)",
            "B": "Nigerian Ports Authority (N.P.A)",
            "C": "Nigerian Maritime Administration and Safety Agency (NIMASA)",
            "D": "Nigerian Navy"
        },
        "answer": "B"
    },
    {
        "question": "In what year was the Nigerian Ports Authority (N.P.A) established?",
        "options": {
            "A": "1945/46",
            "B": "1954/55",
            "C": "1964/65",
            "D": "1974/75"
        },
        "answer": "B"
    },
    {
        "question": "What did Nigerian ports play as a dominant role in the country's international trade?",
        "options": {
            "A": "A minor role",
            "B": "An insignificant role",
            "C": "A dominant role",
            "D": "A supporting role"
        },
        "answer": "C"
    },
    {
        "question": "What was a challenge faced by the ports system in the 1970s?",
        "options": {
            "A": "Lack of staff",
            "B": "Serious port congestion",
            "C": "Insufficient funding",
            "D": "Poor security"
        },
        "answer": "B"
    },
    {
        "question": "Which of the following was established in Lagos to alleviate port congestion in the 1970s?",
        "options": {
            "A": "A new airport",
            "B": "Tin Can Island port and Roll-on/Roll-off (RORO) port",
            "C": "A railway network",
            "D": "A road network"
        },
        "answer": "B"
    },
    {
        "question": "What unfavorable conditions did Nigerian ports continue to suffer from?",
        "options": {
            "A": "Modern facilities",
            "B": "Efficient handling of cargoes",
            "C": "Use of old and dilapidated haulage facilities",
            "D": "Reduced tariffs and quotas"
        },
        "answer": "C"
    },
    {
        "question": "What has traditionally been a major role of transport?",
        "options": {
            "A": "Increasing crime rates",
            "B": "Playing a role in the location of economic activities",
            "C": "Decreasing trade volumes",
            "D": "Limiting human interaction"
        },
        "answer": "B"
    },
    {
        "question": "What does the functioning of any economy require besides the use of transport?",
        "options": {
            "A": "Reduced production",
            "B": "Specialized production increases and relatively more means of transport",
            "C": "Decreased population",
            "D": "Limited consumption"
        },
        "answer": "B"
    },
    {
        "question": "Why are transport infrastructure projects typically provided and subsidized by the government?",
        "options": {
            "A": "They are capital intensive and have long gestation periods",
            "B": "They are simple to construct",
            "C": "They are for private use only",
            "D": "They generate immediate profits"
        },
        "answer": "A"
    },
    {
        "question": "What did inconsistencies in British policy reinforce, particularly regarding indigenous cultures?",
        "options": {
            "A": "National unity",
            "B": "A cleavaged process on a regional level",
            "C": "Economic prosperity",
            "D": "Technological advancements"
        },
        "answer": "B"
    },
    {
        "question": "What did appeals to Islamic legitimacy uphold in the north?",
        "options": {
            "A": "The rule of the British",
            "B": "The rule of the emirs",
            "C": "The rule of Christian missionaries",
            "D": "The rule of traditional chiefs"
        },
        "answer": "B"
    },
    {
        "question": "What kind of rule did modern nationalists in the south, whose thinking was shaped by European ideas, oppose?",
        "options": {
            "A": "Direct rule",
            "B": "Indirect rule",
            "C": "Self-rule",
            "D": "Democratic rule"
        },
        "answer": "B"
    },
    {
        "question": "According to Guntram & David (1989), what was considered to be an anachronistic ruling class in power and shut out?",
        "options": {
            "A": "European colonizers",
            "B": "Westernized elite",
            "C": "Traditional rulers",
            "D": "Religious leaders"
        },
        "answer": "B"
    },
    {
        "question": "From what sources did the ideological inspiration for southern nationalists come?",
        "options": {
            "A": "Local traditions only",
            "B": "Prominent American-based activists such as Marcus Garvey and W.E.B. Du Bois",
            "C": "European political thinkers",
            "D": "Asian liberation movements"
        },
        "answer": "B"
    },
    {
        "question": "Which of the following Pan-African groups was formed in London by Nigerian students?",
        "options": {
            "A": "West African Students Union",
            "B": "African National Congress",
            "C": "Pan-African Congress",
            "D": "African Unity Movement"
        },
        "answer": "A"
    },
    {
        "question": "In 1925, what did early nationalists tend to ignore regarding Nigeria?",
        "options": {
            "A": "Its economic potential",
            "B": "The focus of patriotism rather than the common denominator based on a newly assertive ethnic consciousness",
            "C": "Its military strength",
            "D": "Its natural resources"
        },
        "answer": "B"
    },
    {
        "question": "What did nationalists criticize colonialism for?",
        "options": {
            "A": "Its economic benefits",
            "B": "Its failure to appreciate the antiquity of indigenous cultures",
            "C": "Its promotion of education",
            "D": "Its establishment of infrastructure"
        },
        "answer": "B"
    },
    {
        "question": "According to Tamuno & Atand (1989), what happened to Independent Christian churches?",
        "options": {
            "A": "They became more European",
            "B": "They merged with traditional religions",
            "C": "They were eliminated",
            "D": "They became missionary-free and blocked the advancement of a Nigerian clergy"
        },
        "answer": "D"
    },
    {
        "question": "In the 1920s, what types of associations were ostensibly non-political?",
        "options": {
            "A": "Religious organizations and sports clubs",
            "B": "Professional and business associations, such as the Nigerian Union of Teachers",
            "C": "Youth groups and cultural societies",
            "D": "Women's empowerment groups"
        },
        "answer": "B"
    },
    {
        "question": "According to Ikelegbe (1996), what happened to the Head of State with the establishment of the Federation?",
        "options": {
            "A": "He became the Head of Government",
            "B": "He ceased to be part of the Legislative Houses of the Federation",
            "C": "He became the Chief Justice",
            "D": "He assumed military command"
        },
        "answer": "B"
    },
    {
        "question": "What was the second change regarding the Republican Constitution?",
        "options": {
            "A": "More power was given to local governments",
            "B": "Previous constitutional arrangements were homegrown in the sense that it came into being as a result of a law enacted by the Federal Government",
            "C": "The President gained more authority",
            "D": "The judiciary became independent"
        },
        "answer": "B"
    },
    {
        "question": "What significant change was introduced by the 1963 Republican Constitution regarding the President?",
        "options": {
            "A": "The President became the Chief of Defense Staff",
            "B": "The President was no longer a representative of the Queen of England",
            "C": "The President assumed judicial powers",
            "D": "The President became an elected official"
        },
        "answer": "B"
    },
    {
        "question": "Under the Republican Constitution, whom was the president empowered to appoint?",
        "options": {
            "A": "The Governor of each state",
            "B": "The Chief Justice of the Supreme Court and the Chief Justice of Lagos",
            "C": "The Inspector General of Police",
            "D": "All members of the parliament"
        },
        "answer": "B"
    },
    {
        "question": "What is the first phenomenon generally used to describe nationalism?",
        "options": {
            "A": "Economic prosperity",
            "B": "The attitude which members of a nation have when they care about their national identity",
            "C": "Political stability",
            "D": "Cultural exchange"
        },
        "answer": "B"
    },
    {
        "question": "What is the second phenomenon generally used to describe nationalism?",
        "options": {
            "A": "Military expansion",
            "B": "The actions that the members of a nation take when seeking to sustain self-determination",
            "C": "Technological advancement",
            "D": "Social reforms"
        },
        "answer": "B"
    },
    {
        "question": "According to Merriam-Webster.com, what does nationalism imply?",
        "options": {
            "A": "A sense of global citizenship",
            "B": "A sense of national consciousness that exalts one's nation above all others",
            "C": "A desire for individual freedom",
            "D": "A belief in economic liberalism"
        },
        "answer": "B"
    },
    {
        "question": "According to Nwabuoghugu (2004), what does nationalism define as?",
        "options": {
            "A": "A weak attachment to one's country",
            "B": "A strong devotion to one's own country, patriotic feelings, efforts, principles and awareness",
            "C": "A desire for international cooperation",
            "D": "A pursuit of personal gain"
        },
        "answer": "B"
    },
    {
        "question": "In Nigeria's context, what does nationalism connote?",
        "options": {
            "A": "Suppression of indigenous cultures",
            "B": "The devotion of some elite groups (the nationalists) in advocating for the political emancipation of Nigerians from colonial rule",
            "C": "The promotion of foreign influence",
            "D": "The establishment of a monarchy"
        },
        "answer": "B"
    },
    {
        "question": "In the Colonial period, what did the British create in Nigeria?",
        "options": {
            "A": "A unified nation with a common identity",
            "B": "An artificial political entity, bringing diverse peoples and regions together",
            "C": "A strong centralized government",
            "D": "An independent economic system"
        },
        "answer": "B"
    },
    {
        "question": "When did the 1963 Republican Constitution come into force?",
        "options": {
            "A": "July 25, 1963",
            "B": "September 19, 1963",
            "C": "October 1, 1963",
            "D": "January 15, 1966"
        },
        "answer": "C"
    },
    {
        "question": "What was one of the main features of the 1963 Republican Constitution?",
        "options": {
            "A": "The Queen of England remained the head of state.",
            "B": "The Prime Minister became the head of state.",
            "C": "The Queen of England ceased to be the head of state.",
            "D": "The Privy Council became the highest court of appeal."
        },
        "answer": "C"
    },
    {
        "question": "Who was the commander-in-chief of the armed forces under the 1963 Constitution?",
        "options": {
            "A": "The Queen of England",
            "B": "The Prime Minister",
            "C": "The President",
            "D": "The Supreme Court"
        },
        "answer": "C"
    },
    {
        "question": "Which body was abolished under the 1963 Constitution?",
        "options": {
            "A": "The Senate",
            "B": "The House of Representatives",
            "C": "The Judicial Service Commission",
            "D": "The Supreme Court"
        },
        "answer": "C"
    },
    {
        "question": "What was the reason for increasing the seats in the Senate and House of Representatives in 1963?",
        "options": {
            "A": "To reduce the power of the President",
            "B": "To accommodate the creation of the Mid-Western region",
            "C": "To abolish the Privy Council",
            "D": "To strengthen the Judicial Service Commission"
        },
        "answer": "B"
    },
    {
        "question": "How many seats were added to the Senate in 1963?",
        "options": {
            "A": "12",
            "B": "44",
            "C": "56",
            "D": "312"
        },
        "answer": "A"
    },
    {
        "question": "What was a criticism of the 1963 Constitution regarding the judiciary?",
        "options": {
            "A": "Judges were elected by the public.",
            "B": "The judiciary was made too independent.",
            "C": "The regulation of the judiciary was left in the hands of the executive.",
            "D": "The Supreme Court was abolished."
        },
        "answer": "C"
    },
    {
        "question": "What event marked the end of the 1963 Republican Constitution?",
        "options": {
            "A": "A constitutional conference",
            "B": "A public referendum",
            "C": "A coup d'etat",
            "D": "An election"
        },
        "answer": "C"
    },
    {
        "question": "What did the 1963 Republican Constitution aim to eliminate?",
        "options": {
            "A": "The presidency",
            "B": "The last traces of colonial rule",
            "C": "The Senate",
            "D": "The House of Representatives"
        },
        "answer": "B"
    },
    {
        "question": "What was the highest court of appeal in Nigeria under the 1963 Constitution?",
        "options": {
            "A": "The Privy Council",
            "B": "The Judicial Service Commission",
            "C": "The Supreme Court",
            "D": "The House of Representatives"
        },
        "answer": "C"
    },
    {
        "question": "When was the 1963 Republican Constitution passed into law in Nigeria?",
        "options": {
            "A": "July 25, 1963",
            "B": "September 19, 1963",
            "C": "October 1, 1963",
            "D": "January 15, 1966"
        },
        "answer": "B"
    },
    {
        "question": "Who ceased to be the head of state under the 1963 Republican Constitution?",
        "options": {
            "A": "The Prime Minister",
            "B": "The President",
            "C": "The Queen of England",
            "D": "The Commander-in-Chief"
        },
        "answer": "C"
    },
    {
        "question": "How was the president chosen under the 1963 Constitution?",
        "options": {
            "A": "By public referendum",
            "B": "By secret ballot of a joint session of the national assembly",
            "C": "By the Supreme Court",
            "D": "By the Privy Council"
        },
        "answer": "B"
    },
    {
        "question": "Which body became the highest court of appeal under the 1963 Constitution?",
        "options": {
            "A": "The Privy Council",
            "B": "The Judicial Service Commission",
            "C": "The Supreme Court",
            "D": "The House of Representatives"
        },
        "answer": "C"
    },
    {
        "question": "What was abolished under the 1963 Constitution?",
        "options": {
            "A": "The Senate",
            "B": "The Judicial Service Commission",
            "C": "The House of Representatives",
            "D": "The Prime Minister"
        },
        "answer": "B"
    },
    {
        "question": "Who was vested with the power to appoint and promote judges under the 1963 Constitution?",
        "options": {
            "A": "The President",
            "B": "The Supreme Court",
            "C": "The Prime Minister",
            "D": "The National Assembly"
        },
        "answer": "C"
    },
    {
        "question": "What power was vested in the Supreme Court under the 1963 Constitution?",
        "options": {
            "A": "To appoint the Prime Minister",
            "B": "To declare unconstitutional actions null and void",
            "C": "To elect the President",
            "D": "To abolish the Senate"
        },
        "answer": "B"
    },
    {
        "question": "Why were the seats in the Senate and House of Representatives increased in 1963?",
        "options": {
            "A": "To reduce the power of the President",
            "B": "To accommodate the creation of the Mid-Western region",
            "C": "To abolish the Privy Council",
            "D": "To strengthen the Judicial Service Commission"
        },
        "answer": "B"
    },
    {
        "question": "What was a major criticism of the 1963 Constitution regarding the election of the president?",
        "options": {
            "A": "The president was elected by the public.",
            "B": "The president was elected by the national assembly instead of the electorate.",
            "C": "The president was appointed by the Queen.",
            "D": "The president was chosen by the military."
        },
        "answer": "B"
    },
    {
        "question": "When did the 1963 Republican Constitution effectively end?",
        "options": {
            "A": "September 19, 1963",
            "B": "October 1, 1963",
            "C": "July 25, 1963",
            "D": "January 15, 1966"
        },
        "answer": "D"
    },
    {
        "question": "When did Nigeria become independent?",
        "options": {
            "A": "1954",
            "B": "1957",
            "C": "1960",
            "D": "1963"
        },
        "answer": "C"
    },
    {
        "question": "Who was the head of state at Nigeria's independence in 1960?",
        "options": {
            "A": "Tafawa Balewa",
            "B": "Nnamdi Azikiwe",
            "C": "The Queen of England",
            "D": "Anthony Enahoro"
        },
        "answer": "B"
    },
    {
        "question": "What was the highest court of appeal under the 1960 Independence Constitution?",
        "options": {
            "A": "The Nigerian Supreme Court",
            "B": "The Judicial Service Commission",
            "C": "The Privy Council",
            "D": "The House of Lords"
        },
        "answer": "C"
    },
    {
        "question": "What was the role of the Judicial Service Commission under the 1960 Constitution?",
        "options": {
            "A": "To appoint the Prime Minister",
            "B": "To advise on the appointment of judges",
            "C": "To legislate on exclusive list items",
            "D": "To represent the Queen"
        },
        "answer": "B"
    },
    {
        "question": "What type of executive system did the 1960 Constitution provide?",
        "options": {
            "A": "A single executive",
            "B": "A dual executive",
            "C": "A military executive",
            "D": "A colonial executive"
        },
        "answer": "B"
    },
    {
        "question": "Who had executive powers under the 1960 Constitution?",
        "options": {
            "A": "The Governor-General",
            "B": "The Queen",
            "C": "The Prime Minister",
            "D": "The Judicial Service Commission"
        },
        "answer": "C"
    },
    {
        "question": "What were items not included in any legislative lists called?",
        "options": {
            "A": "Exclusive list",
            "B": "Concurrent list",
            "C": "Residual list",
            "D": "Federal list"
        },
        "answer": "C"
    },
    {
        "question": "Which region became self-governing in 1959?",
        "options": {
            "A": "Eastern Region",
            "B": "Western Region",
            "C": "Northern Region",
            "D": "Southern Cameroon"
        },
        "answer": "C"
    },
    {
        "question": "What was one trace of imperialism in the 1960 Constitution?",
        "options": {
            "A": "The Prime Minister was British",
            "B": "The Queen was still head of state",
            "C": "Nigeria had no constitution",
            "D": "The military controlled the government"
        },
        "answer": "B"
    },
    {
        "question": "What was the purpose of the constitution's supremacy clause?",
        "options": {
            "A": "To maintain British control",
            "B": "To dissuade fears of minority domination",
            "C": "To strengthen the military",
            "D": "To abolish the regions"
        },
        "answer": "B"
    },
    {
        "question": "What was proposed by Anthony Enahoro in 1951?",
        "options": {
            "A": "Creation of more regions",
            "B": "Nigeria's independence in 1956",
            "C": "Abolition of the legislature",
            "D": "Military rule"
        },
        "answer": "B"
    },
    {
        "question": "Why did the Northern delegates oppose immediate independence?",
        "options": {
            "A": "They wanted to remain a colony",
            "B": "They felt they weren't ready",
            "C": "They preferred French rule",
            "D": "They wanted to join Cameroon"
        },
        "answer": "B"
    },
    {
        "question": "What was the consequence of the Northern delegates' opposition to independence?",
        "options": {
            "A": "Peaceful negotiations",
            "B": "Riots in Kano",
            "C": "Immediate independence",
            "D": "Abolition of regions"
        },
        "answer": "B"
    },
    {
        "question": "Who called the 1953 London conference?",
        "options": {
            "A": "Nnamdi Azikiwe",
            "B": "Tafawa Balewa",
            "C": "Oliver Lyttleton",
            "D": "Anthony Enahoro"
        },
        "answer": "C"
    },
    {
        "question": "How many regions were created by the Lyttleton Constitution?",
        "options": {
            "A": "3",
            "B": "4",
            "C": "5",
            "D": "6"
        },
        "answer": "B"
    },
    {
        "question": "Which region had a unicameral legislature?",
        "options": {
            "A": "North",
            "B": "West",
            "C": "East",
            "D": "Southern Cameroon"
        },
        "answer": "C"
    },
    {
        "question": "When did the Northern Region become self-governing?",
        "options": {
            "A": "1954",
            "B": "1957",
            "C": "1959",
            "D": "1960"
        },
        "answer": "C"
    },
    {
        "question": "What court was abolished under the Lyttleton Constitution?",
        "options": {
            "A": "Supreme Court",
            "B": "High Courts",
            "C": "West African Court of Appeal",
            "D": "Privy Council"
        },
        "answer": "C"
    },
    {
        "question": "What happened to Southern Cameroon?",
        "options": {
            "A": "Became part of the Eastern Region",
            "B": "Opted out of Nigeria through referendum",
            "C": "Became the capital territory",
            "D": "Was abolished"
        },
        "answer": "B"
    },
    {
        "question": "What was created by the 1959 conference?",
        "options": {
            "A": "Military government",
            "B": "Position of Prime Minister",
            "C": "Unitary system",
            "D": "Colonial office"
        },
        "answer": "B"
    },
    {
        "question": "What was one of the aims of the Richards Constitution?",
        "options": {
            "A": "To increase British control",
            "B": "To promote Nigeria's unity",
            "C": "To abolish regional assemblies",
            "D": "To establish military rule"
        },
        "answer": "B"
    },
    {
        "question": "How many unofficial members were in the legislative council under the Richards Constitution?",
        "options": {
            "A": "16",
            "B": "28",
            "C": "46",
            "D": "136"
        },
        "answer": "B"
    },
    {
        "question": "Which regions had unicameral legislatures under the Richards Constitution?",
        "options": {
            "A": "North and West",
            "B": "East and West",
            "C": "North and East",
            "D": "West only"
        },
        "answer": "B"
    },
    {
        "question": "What was the reduced franchise amount under the Richards Constitution?",
        "options": {
            "A": "100 pounds",
            "B": "75 pounds",
            "C": "50 pounds",
            "D": "25 pounds"
        },
        "answer": "C"
    },
    {
        "question": "Who nominated members to the regional houses of assembly?",
        "options": {
            "A": "The Governor",
            "B": "The Native Authority",
            "C": "The British Parliament",
            "D": "The Supreme Court"
        },
        "answer": "B"
    },
    {
        "question": "Which two cities had elected members in the legislative council?",
        "options": {
            "A": "Lagos and Kano",
            "B": "Calabar and Enugu",
            "C": "Lagos and Calabar",
            "D": "Ibadan and Port Harcourt"
        },
        "answer": "C"
    },
    {
        "question": "What was a major criticism of the Richards Constitution?",
        "options": {
            "A": "It gave too much power to the elites",
            "B": "It limited franchise to only Lagos and Calabar",
            "C": "It abolished regional assemblies",
            "D": "It established military rule"
        },
        "answer": "B"
    },
    {
        "question": "What was the nature of regional houses of assembly under the Richards Constitution?",
        "options": {
            "A": "They could make laws",
            "B": "They were grounds for public discussion",
            "C": "They were abolished",
            "D": "They were controlled by the military"
        },
        "answer": "B"
    },
    {
        "question": "Which governor introduced the Macpherson Constitution?",
        "options": {
            "A": "Sir Hugh Clifford",
            "B": "Sir Arthur Richards",
            "C": "Sir John Macpherson",
            "D": "Sir Bernard Bourdillon"
        },
        "answer": "C"
    },
    {
        "question": "What was created by the Macpherson Constitution?",
        "options": {
            "A": "A military government",
            "B": "A federal legislature called House of Representatives",
            "C": "A unitary system",
            "D": "A colonial office"
        },
        "answer": "B"
    },
    {
        "question": "Who introduced the Clifford Constitution?",
        "options": {
            "A": "Sir Arthur Richards",
            "B": "Sir Hugh Clifford",
            "C": "Sir John Macpherson",
            "D": "Sir Bernard Bourdillon"
        },
        "answer": "B"
    },
    {
        "question": "What did the Clifford Constitution introduce for the first time in Nigeria?",
        "options": {
            "A": "Military rule",
            "B": "An electoral system",
            "C": "A unitary government",
            "D": "A colonial office"
        },
        "answer": "B"
    },
    {
        "question": "How many elected members were in the legislative council under the Clifford Constitution?",
        "options": {
            "A": "2",
            "B": "4",
            "C": "23",
            "D": "46"
        },
        "answer": "B"
    },
    {
        "question": "What was the minimum income requirement to vote under the Clifford Constitution?",
        "options": {
            "A": "50 pounds",
            "B": "75 pounds",
            "C": "100 pounds",
            "D": "150 pounds"
        },
        "answer": "C"
    },
    {
        "question": "Which areas could the legislative council legislate for under the Clifford Constitution?",
        "options": {
            "A": "The whole country",
            "B": "Only the North",
            "C": "Only the South",
            "D": "Only Lagos"
        },
        "answer": "C"
    },
    {
        "question": "Who divided Nigeria into East, West and North for administrative purposes?",
        "options": {
            "A": "Sir Hugh Clifford",
            "B": "Sir Arthur Richards",
            "C": "Sir Bernard Bourdillon",
            "D": "Sir John Macpherson"
        },
        "answer": "C"
    },
    {
        "question": "What replaced the Nigerian Council under the Clifford Constitution?",
        "options": {
            "A": "The Legislative Council",
            "B": "The Executive Council",
            "C": "The Regional Assembly",
            "D": "The House of Chiefs"
        },
        "answer": "A"
    },
    {
        "question": "What was the composition of the Legislative Council under the Clifford Constitution?",
        "options": {
            "A": "23 official and 23 unofficial members",
            "B": "16 official and 28 unofficial members",
            "C": "46 official members only",
            "D": "28 official and 16 unofficial members"
        },
        "answer": "A"
    },
    {
        "question": "What was the main criticism of the Clifford Constitution by educated elites?",
        "options": {
            "A": "It gave too much power to traditional rulers",
            "B": "It did not represent the indigenous population",
            "C": "It abolished regional assemblies",
            "D": "It established military rule"
        },
        "answer": "B"
    },
    {
        "question": "What was the foundation for future regionalism in Nigeria?",
        "options": {
            "A": "The division of Nigeria by Bourdillon",
            "B": "The Clifford Constitution",
            "C": "The Macpherson Constitution",
            "D": "The Richards Constitution"
        },
        "answer": "A"
    },
    {
        "question": "What was the main reason for the amalgamation of Nigeria in 1914?",
        "options": {
            "A": "Political unification",
            "B": "Economic reasons",
            "C": "Military strategy",
            "D": "Cultural integration"
        },
        "answer": "B"
    },
    {
        "question": "Who was responsible for overseeing the unification of Nigeria in 1914?",
        "options": {
            "A": "Sir William Macgregor",
            "B": "Sir Ralph Moore",
            "C": "Sir Frederick Lugard",
            "D": "Lewis Vernon Harcourt"
        },
        "answer": "C"
    },
    {
        "question": "Which British official strongly advocated for Nigeria's amalgamation?",
        "options": {
            "A": "The Earl of Selborne",
            "B": "Mr Lewis Vernon Harcourt",
            "C": "Sir William Macgregor",
            "D": "All of the above"
        },
        "answer": "D"
    },
    {
        "question": "What was the financial situation of Northern Nigeria Protectorate before amalgamation?",
        "options": {
            "A": "Budget surplus",
            "B": "Budget deficit",
            "C": "Financial stability",
            "D": "Economic independence"
        },
        "answer": "B"
    },
    {
        "question": "When did Lugard submit his detailed proposal for amalgamation?",
        "options": {
            "A": "May 9, 1913",
            "B": "January 1, 1914",
            "C": "December 31, 1912",
            "D": "July 4, 1913"
        },
        "answer": "A"
    },
    {
        "question": "What position did Lugard hold when he first thought about merging Nigeria?",
        "options": {
            "A": "Governor-General",
            "B": "High Commissioner of Northern Nigeria",
            "C": "Governor of Southern Protectorate",
            "D": "Secretary of State for the Colonies"
        },
        "answer": "B"
    },
    {
        "question": "What was the financial situation of Southern Nigeria before amalgamation?",
        "options": {
            "A": "Budget deficit",
            "B": "Budget surplus",
            "C": "Financial instability",
            "D": "Economic depression"
        },
        "answer": "B"
    },
    {
        "question": "Who was the Secretary of State for the Colonies during the amalgamation?",
        "options": {
            "A": "Sir Frederick Lugard",
            "B": "Lewis Vernon Harcourt",
            "C": "Sir William Macgregor",
            "D": "The Earl of Selborne"
        },
        "answer": "B"
    },
    {
        "question": "What was the main challenge of governing Nigeria before amalgamation?",
        "options": {
            "A": "Cultural differences",
            "B": "Different laws and governance styles",
            "C": "Language barriers",
            "D": "Religious conflicts"
        },
        "answer": "B"
    },
    {
        "question": "What year did the amalgamation of Nigeria occur?",
        "options": {
            "A": "1912",
            "B": "1913",
            "C": "1914",
            "D": "1915"
        },
        "answer": "C"
    },
    {
        "question": "Who recommended the division of Nigeria into 'Soudan' and 'Maritime' provinces?",
        "options": {
            "A": "Sir Frederick Lugard",
            "B": "The Earl of Selborne",
            "C": "Lewis Vernon Harcourt",
            "D": "Sir William Macgregor"
        },
        "answer": "B"
    },
    {
        "question": "What was the 'Soudan' province comprised of?",
        "options": {
            "A": "Southern Nigeria",
            "B": "Northern Nigeria",
            "C": "The Colony of Lagos",
            "D": "The Niger Delta"
        },
        "answer": "B"
    },
    {
        "question": "What was the 'Maritime' province comprised of?",
        "options": {
            "A": "Northern Nigeria",
            "B": "The Colony of Lagos",
            "C": "Southern Nigeria",
            "D": "The Niger Delta"
        },
        "answer": "C"
    },
    {
        "question": "Who set up the Niger Committee?",
        "options": {
            "A": "The Earl of Selborne",
            "B": "The Marguess of Salisbury",
            "C": "Sir Frederick Lugard",
            "D": "Lewis Vernon Harcourt"
        },
        "answer": "B"
    },
    {
        "question": "What was the purpose of the Niger Committee?",
        "options": {
            "A": "To plan Nigeria's independence",
            "B": "To determine the best form of British administration",
            "C": "To divide Nigeria into states",
            "D": "To establish a military government"
        },
        "answer": "B"
    },
    {
        "question": "What was one of the significant moments for British administration in Africa?",
        "options": {
            "A": "The creation of the Niger Committee",
            "B": "The 1914 Amalgamation",
            "C": "The independence of Nigeria",
            "D": "The establishment of the Colony of Lagos"
        },
        "answer": "B"
    },
    {
        "question": "What made governance difficult in pre-amalgamation Nigeria?",
        "options": {
            "A": "Lack of resources",
            "B": "Numerous diversities",
            "C": "Absence of colonial rule",
            "D": "Military conflicts"
        },
        "answer": "B"
    },
    {
        "question": "What was the political status of Nigeria before British colonial rule?",
        "options": {
            "A": "A unified state",
            "B": "A military dictatorship",
            "C": "It did not exist as a state",
            "D": "A British protectorate"
        },
        "answer": "C"
    },
    {
        "question": "What was one of the sections in the chapter about Nigeria's evolution?",
        "options": {
            "A": "Military coups in Nigeria",
            "B": "Constitutional development up to independence",
            "C": "Post-independence economic policies",
            "D": "Modern political parties"
        },
        "answer": "B"
    },
    {
        "question": "What must be considered when understanding Nigeria's problems?",
        "options": {
            "A": "Only current political issues",
            "B": "Only economic factors",
            "C": "Historical, political, social and economic foundations",
            "D": "Only colonial activities"
        },
        "answer": "C"
    }

];


function shuffleArray(array) {
    return array
        .map((item) => ({ item, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ item }) => item);
}

export default function CBTApp() {
    const [mode, setMode] = useState(null); // 'practice' or 'real'
    const [currentIndex, setCurrentIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState({});
    const [timeLeft, setTimeLeft] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [feedback, setFeedback] = useState('');
    const [selectedOption, setSelectedOption] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [shuffledQuestions, setShuffledQuestions] = useState([]);
    const timerRef = useRef(null);
    const progressBarRef = useRef(null);

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    useEffect(() => {
        if (mode === 'real' && timeLeft > 0) {
            timerRef.current = setInterval(() => {
                setTimeLeft(prev => prev - 1);
            }, 1000);
        } else if (timeLeft === 0 && mode === 'real') {
            clearInterval(timerRef.current);
            handleSubmitTest();
        }

        return () => clearInterval(timerRef.current);
    }, [mode, timeLeft]);

    useEffect(() => {
        if (progressBarRef.current) {
            const progress = (Object.keys(userAnswers).length / shuffledQuestions.length) * 100;
            progressBarRef.current.style.width = `${progress}%`;
        }
    }, [userAnswers]);

    const startTest = (selectedMode, minutes = 0) => {
        const randomQuestions = shuffleArray(questionsData);
        setShuffledQuestions(randomQuestions);
        setMode(selectedMode);
        setCurrentIndex(0);
        setUserAnswers({});
        setFeedback('');
        setShowResult(false);
        setSelectedOption(null);
        clearInterval(timerRef.current);
        if (selectedMode === 'real') {
            setTimeLeft(minutes * 60);
        }
    };

    const handleAnswer = (option) => {
        setSelectedOption(option);
        setUserAnswers(prev => ({ ...prev, [currentIndex]: option }));

        if (mode === 'practice') {
            const currentQuestion = shuffledQuestions[currentIndex];
            if (option === currentQuestion.answer) {
                setFeedback({
                    text: 'Correct! Well done!',
                    isCorrect: true
                });
            } else {
                setFeedback({
                    text: `Incorrect. The correct answer is ${currentQuestion.answer}: ${currentQuestion.options[currentQuestion.answer]}`,
                    isCorrect: false
                });
            }
        }
    };

    const nextQuestion = () => {
        setFeedback(null);
        setSelectedOption(null);
        if (currentIndex < shuffledQuestions.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const prevQuestion = () => {
        setFeedback(null);
        setSelectedOption(null);
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const handleSubmitTest = () => {
        setIsSubmitting(true);
        setTimeout(() => {
            clearInterval(timerRef.current);
            setShowResult(true);
            setIsSubmitting(false);
        }, 1000);
    };

    const getScore = () => {
        return shuffledQuestions.reduce((score, q, idx) =>
            q.answer === userAnswers[idx] ? score + 1 : score, 0
        );
    };

    const getPerformanceMessage = (percentage) => {
        if (percentage >= 80) return "Excellent performance!";
        if (percentage >= 60) return "Good job!";
        if (percentage >= 40) return "Not bad, keep practicing!";
        return "Keep studying, you'll improve!";
    };

    if (!mode) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden w-full max-w-md">
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-white text-center">
                        <h1 className="text-3xl font-bold mb-2">Knowledge Challenge</h1>
                        <p className="opacity-90">Test your skills in different modes</p>
                    </div>

                    <div className="p-8">
                        <div
                            className="mb-8 p-6 bg-indigo-50 rounded-xl border border-indigo-100 cursor-pointer hover:shadow-md transition-all"
                            onClick={() => startTest('practice')}
                        >
                            <div className="flex items-center mb-3">
                                <div className="bg-indigo-100 p-3 rounded-full mr-4">
                                    <FaBookOpen className="text-indigo-600 text-xl"/>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800">Practice Mode</h3>
                            </div>
                            <p className="text-gray-600">
                                Learn with instant feedback. No time pressure. Perfect for mastering concepts.
                            </p>
                        </div>

                        <div
                            className="p-6 bg-blue-50 rounded-xl border border-blue-100 cursor-pointer hover:shadow-md transition-all"
                            onClick={() => {
                                const mins = parseInt(prompt("Enter test duration in minutes (recommended 5 minutes):", "5"), 10);
                                if (!isNaN(mins) && mins > 0) {
                                    startTest('real', mins);
                                } else {
                                    alert("Please enter a valid positive number.");
                                }
                            }}
                        >
                            <div className="flex items-center mb-3">
                                <div className="bg-blue-100 p-3 rounded-full mr-4">
                                    <FaClock className="text-blue-600 text-xl"/>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800">Exam Mode</h3>
                            </div>
                            <p className="text-gray-600">
                                Timed test environment. Simulates real exam conditions. Challenge yourself!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (showResult) {
        const score = getScore();
        const totalQuestions = shuffledQuestions.length;
        const percentage = Math.round((score / totalQuestions) * 100);
        const performanceMessage = getPerformanceMessage(percentage);

        return (
            <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-100 flex items-center justify-center p-4">
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden w-full max-w-md">
                    <div className="bg-gradient-to-r from-green-600 to-teal-700 p-6 text-white text-center">
                        <h1 className="text-3xl font-bold mb-2">Test Results</h1>
                        <p className="opacity-90">{performanceMessage}</p>
                    </div>

                    <div className="p-8 text-center">
                        <div className="relative w-32 h-32 mx-auto mb-6">
                            <svg className="w-full h-full" viewBox="0 0 36 36">
                                <path
                                    d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                                    fill="none"
                                    stroke="#e6e6e6"
                                    strokeWidth="3"
                                />
                                <path
                                    d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                                    fill="none"
                                    stroke={percentage >= 70 ? "#10b981" : percentage >= 50 ? "#f59e0b" : "#ef4444"}
                                    strokeWidth="3"
                                    strokeDasharray={`${percentage}, 100`}
                                />
                                <text x="18" y="20.5" textAnchor="middle" fill="#4b5563" className="text-lg font-bold">
                                    {percentage}%
                                </text>
                            </svg>
                        </div>

                        <div className="mb-6">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-gray-600">Correct Answers:</span>
                                <span className="font-bold text-green-600">{score}/{totalQuestions}</span>
                            </div>
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-gray-600">Incorrect Answers:</span>
                                <span className="font-bold text-red-600">{totalQuestions - score}/{totalQuestions}</span>
                            </div>
                            {mode === 'real' && (
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600">Time Taken:</span>
                                    <span className="font-bold text-blue-600">{formatTime((shuffledQuestions.length * 60) - timeLeft)}</span>
                                </div>
                            )}
                        </div>

                        <button
                            className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition duration-300 flex items-center justify-center"
                            onClick={() => setMode(null)}
                        >
                            <FaRedo className="mr-2"/> Start New Test
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    const currentQuestion = shuffledQuestions[currentIndex];
    const totalQuestions = shuffledQuestions.length;
    const progressPercentage = (currentIndex / totalQuestions) * 100;

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-4 text-white">
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl font-bold">Knowledge Challenge</h2>
                        {mode === 'real' && (
                            <div className="flex items-center bg-blue-800 px-3 py-1 rounded-full">
                                <FaClock className="mr-2"/>
                                <span>{formatTime(timeLeft)}</span>
                            </div>
                        )}
                    </div>
                    <div className="mt-4 bg-blue-500 bg-opacity-30 rounded-full h-2">
                        <div
                            ref={progressBarRef}
                            className="bg-white h-2 rounded-full transition-all duration-300 ease-out"
                            style={{width: `${progressPercentage}%`}}
                        />
                    </div>
                </div>

                <div className="p-6">
                    <div className="flex justify-between items-center mb-6">
            <span className="text-sm font-medium text-gray-500">
              Question {currentIndex + 1} of {totalQuestions}
            </span>
                        <span className="text-sm font-medium text-blue-600">
              {mode === 'practice' ? 'Practice Mode' : 'Exam Mode'}
            </span>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-800 mb-6">
                        {currentQuestion.question}
                    </h3>

                    <div className="space-y-3 mb-6">
                        {Object.entries(currentQuestion.options).map(([key, val]) => {
                            const isSelected = userAnswers[currentIndex] === key;
                            const isCorrect = key === currentQuestion.answer;
                            let optionClasses = "flex items-center p-4 border rounded-lg transition-all cursor-pointer";

                            if (mode === 'practice' && userAnswers[currentIndex]) {
                                if (isCorrect) {
                                    optionClasses += " bg-green-50 border-green-300";
                                } else if (isSelected) {
                                    optionClasses += " bg-red-50 border-red-300";
                                } else {
                                    optionClasses += " border-gray-200";
                                }
                            } else {
                                optionClasses += isSelected
                                    ? " bg-blue-50 border-blue-400 shadow-sm"
                                    : " border-gray-200 hover:border-blue-300";
                            }

                            return (
                                <div
                                    key={key}
                                    className={optionClasses}
                                    onClick={() => !userAnswers[currentIndex] && handleAnswer(key)}
                                >
                                    <div
                                        className={`flex-shrink-0 w-6 h-6 rounded-full border flex items-center justify-center mr-3 ${
                                            isSelected
                                                ? mode === 'practice'
                                                    ? isCorrect
                                                        ? "bg-green-500 border-green-500 text-white"
                                                        : "bg-red-500 border-red-500 text-white"
                                                    : "bg-blue-500 border-blue-500 text-white"
                                                : "border-gray-300"
                                        }`}
                                    >
                                        {isSelected && <FaCheck size={12}/>}
                                    </div>
                                    <div>
                                        <span className="font-medium text-gray-700">{key}.</span> {val}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {feedback && (
                        <div className={`p-4 rounded-lg mb-6 ${
                            feedback.isCorrect ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
                        }`}>
                            <div className="font-medium">{feedback.text}</div>
                        </div>
                    )}

                    <div className="flex justify-between mt-8">
                        <button
                            className={`flex items-center px-5 py-2 rounded-lg ${
                                currentIndex === 0
                                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                            onClick={prevQuestion}
                            disabled={currentIndex === 0}
                        >
                            <FaChevronLeft className="mr-2"/> Previous
                        </button>

                        {currentIndex < shuffledQuestions.length - 1 ? (
                            <button
                                className="flex items-center px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                                onClick={nextQuestion}
                            >
                                Next <FaChevronRight className="ml-2"/>
                            </button>
                        ) : (
                            <button
                                className={`flex items-center px-5 py-2 rounded-lg ${
                                    isSubmitting ? "bg-blue-400 cursor-wait" : "bg-green-600 hover:bg-green-700"
                                } text-white`}
                                onClick={handleSubmitTest}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? "Submitting..." : "Submit Test"} <FaTrophy className="ml-2"/>
                            </button>
                        )}
                    </div>

                    {mode === 'real' && (
                        <div className="mt-4 text-center text-sm text-gray-500">
                            {Object.keys(userAnswers).length === totalQuestions
                                ? "All questions answered. Ready to submit!"
                                : `${totalQuestions - Object.keys(userAnswers).length} unanswered question${totalQuestions - Object.keys(userAnswers).length !== 1 ? 's' : ''} remaining`}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
