import React, { useState, useEffect, useRef } from 'react';
import { FaClock, FaChevronLeft, FaChevronRight, FaCheck, FaRedo, FaTrophy, FaBookOpen } from 'react-icons/fa';

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
  
];

export default function CBTApp() {
  const [mode, setMode] = useState(null); // 'practice' or 'real'
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const timerRef = useRef(null);
  const progressBarRef = useRef(null);

  // Format time as MM:SS
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
    // Update progress bar
    if (progressBarRef.current) {
      const progress = (Object.keys(userAnswers).length / questionsData.length) * 100;
      progressBarRef.current.style.width = `${progress}%`;
    }
  }, [userAnswers]);

  const startTest = (selectedMode, minutes = 0) => {
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
      const currentQuestion = questionsData[currentIndex];
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
    if (currentIndex < questionsData.length - 1) {
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
    return questionsData.reduce((score, q, idx) =>
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
                  <FaBookOpen className="text-indigo-600 text-xl" />
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
                if (!isNaN(mins) ){
                  if (mins <= 0) {
                    alert("Please enter a positive number of minutes.");
                  } else {
                    startTest('real', mins);
                  }
                }
              }}
            >
              <div className="flex items-center mb-3">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FaClock className="text-blue-600 text-xl" />
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
    const totalQuestions = questionsData.length;
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
                  <span className="font-bold text-blue-600">{formatTime((questionsData.length * 60) - timeLeft)}</span>
                </div>
              )}
            </div>
            
            <button
              className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition duration-300 flex items-center justify-center"
              onClick={() => setMode(null)}
            >
              <FaRedo className="mr-2" /> Start New Test
            </button>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = questionsData[currentIndex];
  const totalQuestions = questionsData.length;
  const progressPercentage = (currentIndex / totalQuestions) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-4 text-white">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">Knowledge Challenge</h2>
            {mode === 'real' && (
              <div className="flex items-center bg-blue-800 px-3 py-1 rounded-full">
                <FaClock className="mr-2" />
                <span>{formatTime(timeLeft)}</span>
              </div>
            )}
          </div>
          
          {/* Progress bar */}
          <div className="mt-4 bg-blue-500 bg-opacity-30 rounded-full h-2">
            <div 
              ref={progressBarRef}
              className="bg-white h-2 rounded-full transition-all duration-300 ease-out" 
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>
        
        {/* Main content */}
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
                // Practice mode with answer selected
                if (isCorrect) {
                  optionClasses += " bg-green-50 border-green-300";
                } else if (isSelected) {
                  optionClasses += " bg-red-50 border-red-300";
                } else {
                  optionClasses += " border-gray-200";
                }
              } else {
                // Normal or real mode
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
                  <div className={`flex-shrink-0 w-6 h-6 rounded-full border flex items-center justify-center mr-3 ${
                    isSelected 
                      ? mode === 'practice' 
                        ? isCorrect 
                          ? "bg-green-500 border-green-500 text-white" 
                          : "bg-red-500 border-red-500 text-white"
                        : "bg-blue-500 border-blue-500 text-white"
                      : "border-gray-300"
                  }`}>
                    {isSelected && <FaCheck size={12} />}
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
              <FaChevronLeft className="mr-2" /> Previous
            </button>
            
            {currentIndex < questionsData.length - 1 ? (
              <button
                className="flex items-center px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                onClick={nextQuestion}
              >
                Next <FaChevronRight className="ml-2" />
              </button>
            ) : (
              <button
                className={`flex items-center px-5 py-2 rounded-lg ${
                  isSubmitting
                    ? "bg-blue-400 cursor-wait"
                    : "bg-green-600 hover:bg-green-700"
                } text-white`}
                onClick={handleSubmitTest}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Test"} <FaTrophy className="ml-2" />
              </button>
            )}
          </div>
          
          {mode === 'real' && (
            <div className="mt-4 text-center text-sm text-gray-500">
              {Object.keys(userAnswers).length === totalQuestions ? (
                "All questions answered. Ready to submit!"
              ) : (
                `${totalQuestions - Object.keys(userAnswers).length} unanswered question${totalQuestions - Object.keys(userAnswers).length !== 1 ? 's' : ''} remaining`
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}