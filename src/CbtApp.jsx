import React, {useState, useEffect, useRef} from 'react';
import {
    FaBookOpen,
    FaClock,
    FaCheck,
    FaChevronLeft,
    FaChevronRight,
    FaTrophy,
    FaRedo,
    FaGraduationCap,
    FaArrowLeft
} from 'react-icons/fa';

const course1 = [
    {
        "question": "In which year did Nigeria return to a democratic system of governance, leading to the establishment of INEC?",
        "options": {
            "A": "1991",
            "B": "1995",
            "C": "1999",
            "D": "2003"
        },
        "answer": "C"
    },
    {
        "question": "Who was the first political party named Nigeria National Democratic Party (NNDP) founded by?",
        "options": {
            "A": "Dr. Nnamdi Azikiwe",
            "B": "Herbert Macaulay",
            "C": "Chief Obafemi Awolowo",
            "D": "Ahmadu Bello"
        },
        "answer": "B"
    },
    {
        "question": "The National Council of Nigeria and Cameroons (NCNC) was led by which prominent nationalist?",
        "options": {
            "A": "Herbert Macaulay",
            "B": "Ahmadu Bello",
            "C": "Dr. Nnamdi Azikiwe",
            "D": "Obafemi Awolowo"
        },
        "answer": "C"
    },
    {
        "question": "The Action Group (AG) was led by which political figure?",
        "options": {
            "A": "Chief Obafemi Awolowo",
            "B": "Dr. Nnamdi Azikiwe",
            "C": "Herbert Macaulay",
            "D": "Sir Ahmadu Bello"
        },
        "answer": "A"
    },
    {
        "question": "The Northern People's Congress (NPC) was led by which of the following?",
        "options": {
            "A": "Dr. Nnamdi Azikiwe",
            "B": "Chief Obafemi Awolowo",
            "C": "Sir Ahmadu Bello",
            "D": "Herbert Macaulay"
        },
        "answer": "C"
    },
    {
        "question": "Which political party that predated Nigeria's political independence was founded in 1938?",
        "options": {
            "A": "Nigeria National Democratic Party (NNDP)",
            "B": "Nigeria Youth Democratic Party (NYDP)",
            "C": "National Council of Nigeria and Cameroon (NCNC)",
            "D": "Northern People's Congress (NPC)"
        },
        "answer": "B"
    },
    {
        "question": "The National Council of Nigeria and Cameroons (NCNC) was formed in which year?",
        "options": {
            "A": "1923",
            "B": "1938",
            "C": "1944",
            "D": "1951"
        },
        "answer": "C"
    },
    {
        "question": "Which political party was formed by the amalgamation of smaller groups in 1951?",
        "options": {
            "A": "Nigeria National Democratic Party (NNDP)",
            "B": "Nigeria Youth Democratic Party (NYDP)",
            "C": "National Council of Nigeria and Cameroon (NCNC)",
            "D": "Northern People's Congress (NPC)"
        },
        "answer": "D"
    },
    {
        "question": "The Independent National Electoral Commission (INEC) was established to register political parties and conduct elections in which year?",
        "options": {
            "A": "1999",
            "B": "1991",
            "C": "1960",
            "D": "1983"
        },
        "answer": "A"
    },
    {
        "question": "Who was the presidential candidate of the People's Democratic Party (PDP) that won the 1999 presidential election?",
        "options": {
            "A": "General Abdulsalam Abubakar",
            "B": "Chief Olusegun Obasanjo",
            "C": "General Sani Abacha",
            "D": "Alhaji Shehu Shagari"
        },
        "answer": "B"
    },
    {
        "question": "Which of these was NOT a political party that existed between 1960 and 1966?",
        "options": {
            "A": "Action Group (AG)",
            "B": "Bornu Youth Movement (BYM)",
            "C": "United National Independence Party (UNIP)",
            "D": "People's Redemption Party (PRP)"
        },
        "answer": "D"
    },
    {
        "question": "According to the text, which political party was founded in 1951?",
        "options": {
            "A": "Northern Elements Progressive Union (NEPU)",
            "B": "Action Group (AG)",
            "C": "Democratic Party of Nigeria and Cameroon (DPNC)",
            "D": "Kano Peoples Party (KPP)"
        },
        "answer": "A"
    },
    {
        "question": "The Action Group (AG) was formed in which year?",
        "options": {
            "A": "1951",
            "B": "1955",
            "C": "1960",
            "D": "1966"
        },
        "answer": "A"
    },
    {
        "question": "The military coup of 1966 that truncated the First Republic was led by which Major?",
        "options": {
            "A": "Major General Ironsi",
            "B": "Major Kaduna Nzeogwu",
            "C": "General Yakubu Gowon",
            "D": "General Aguiyi Ironsi"
        },
        "answer": "B"
    },
    {
        "question": "Dr. Nnamdi Azikiwe was the first President of the Federal Republic of Nigeria, while who was the first Prime Minister?",
        "options": {
            "A": "Chief Obafemi Awolowo",
            "B": "Sir Ahmadu Bello",
            "C": "Sir (Alhaji) Abubakar Tafawa Balewa",
            "D": "Dr. M.I. Okpara"
        },
        "answer": "C"
    },
    {
        "question": "Which political party was led by Sir Ahmadu Bello, Chief Obafemi Awolowo and Dr. Nnamdi Azikiwe during the First Republic?",
        "options": {
            "A": "Action Group (AG)",
            "B": "National Council of Nigeria and the Cameroon (NCNC)",
            "C": "Nigeria National Democratic Party (NNDP)",
            "D": "None of the above"
        },
        "answer": "D"
    },
    {
        "question": "What does the acronym UMBC stand for?",
        "options": {
            "A": "United Middle Belt Congress",
            "B": "Union of Marginalized Believers Congress",
            "C": "United Movement for Better Cameroon",
            "D": "Union of Midwest and Benin Congress"
        },
        "answer": "A"
    },
    {
        "question": "The National Council of Nigeria and Cameroon (NCNC) was changed to National Council of Nigerian Citizens (NCNC) in which year?",
        "options": {
            "A": "1951",
            "B": "1955",
            "C": "1960",
            "D": "1966"
        },
        "answer": "B"
    },
    {
        "question": "Which party was founded in 1955 alongside the Action Group?",
        "options": {
            "A": "Northern People's Congress (NPC)",
            "B": "United Middle Belt Congress (UMBC)",
            "C": "National Council of Nigeria and Cameroons (NCNC)",
            "D": "Igbira Tribal Union (ITU)"
        },
        "answer": "B"
    },
    {
        "question": "The First Republic political parties existed between which years?",
        "options": {
            "A": "1951 and 1960",
            "B": "1960 and 1966",
            "C": "1966 and 1979",
            "D": "1979 and 1983"
        },
        "answer": "B"
    },
    {
        "question": "Which of these was a major political party in the Second Republic (1979-1983)?",
        "options": {
            "A": "National Republican Convention (NRC)",
            "B": "People's Redemption Party (PRP)",
            "C": "Action Congress (AC)",
            "D": "All Progressives Congress (APC)"
        },
        "answer": "B"
    },
    {
        "question": "Who became the President of Nigeria in the Second Republic, following the country's adoption of the Presidential system of government?",
        "options": {
            "A": "General Olusegun Obasanjo",
            "B": "Alhaji Shehu Shagari",
            "C": "General Muhammadu Buhari",
            "D": "General Ibrahim Babangida"
        },
        "answer": "B"
    },
    {
        "question": "How many main political parties dominated Nigeria's political space in the Second Republic?",
        "options": {
            "A": "Two",
            "B": "Four",
            "C": "Five",
            "D": "Six"
        },
        "answer": "D"
    },
    {
        "question": "The Second Republic lasted from which year to which year?",
        "options": {
            "A": "1960 to 1966",
            "B": "1979 to 1983",
            "C": "1992 to 1993",
            "D": "1999 to present"
        },
        "answer": "B"
    },
    {
        "question": "The military coup that ended the Second Republic on December 31, 1983, was executed by who?",
        "options": {
            "A": "General Sani Abacha",
            "B": "General Muhammadu Buhari",
            "C": "General Olusegun Obasanjo",
            "D": "General Ibrahim Babangida"
        },
        "answer": "B"
    },
    {
        "question": "Which two political parties did General Ibrahim Badamosi Babangida establish for the Third Republic?",
        "options": {
            "A": "National Party of Nigeria (NPN) and Unity Party of Nigeria (UPN)",
            "B": "National Republican Convention (NRC) and Social Democratic Party (SDP)",
            "C": "People's Redemption Party (PRP) and Great Nigeria People's Party (GNPP)",
            "D": "National Advance Party (NAP) and Nigerian People's Party (NPP)"
        },
        "answer": "B"
    },
    {
        "question": "When did General Ibrahim Babangida establish the two political parties for the Third Republic?",
        "options": {
            "A": "1983",
            "B": "1985",
            "C": "1992",
            "D": "1993"
        },
        "answer": "C"
    },
    {
        "question": "What is another name used to describe the Third Republic?",
        "options": {
            "A": "Military Dictatorship",
            "B": "Democratic Transition",
            "C": "Military Democracy",
            "D": "Civilian Rule"
        },
        "answer": "C"
    },
    {
        "question": "Which party from the list of Second Republic parties was led by Alhaji Shehu Shagari?",
        "options": {
            "A": "Unity Party of Nigeria (UPN)",
            "B": "Nigerian People's Party (NPP)",
            "C": "National Party of Nigeria (NPN)",
            "D": "People's Redemption Party (PRP)"
        },
        "answer": "C"
    },
    {
        "question": "The Third Republic was a transition program that was supposed to last until when?",
        "options": {
            "A": "1990",
            "B": "1991",
            "C": "1992",
            "D": "1993"
        },
        "answer": "D"
    },
    {
        "question": "What was the name of the electoral procedure used for the 1993 general elections?",
        "options": {
            "A": "Option B5",
            "B": "Option A4",
            "C": "Option C2",
            "D": "Option D1"
        },
        "answer": "B"
    },
    {
        "question": "Who was the chairman of the National Electoral Commission of Nigeria (NEC) that introduced the Option A4 voting system?",
        "options": {
            "A": "General Ibrahim Babangida",
            "B": "Chief M.K.O. Abiola",
            "C": "Humphrey Nwosu",
            "D": "Alhaji Bashir Tofa"
        },
        "answer": "C"
    },
    {
        "question": "The Option A4 voting system was considered the fairest in the political history of Nigeria because it allowed voters to do what?",
        "options": {
            "A": "Vote by secret ballot",
            "B": "Vote openly by queuing behind their preferred candidate",
            "C": "Vote online",
            "D": "Vote by proxy"
        },
        "answer": "B"
    },
    {
        "question": "The Third Republic is described as the most unsuccessful attempt at restoring democracy because of what?",
        "options": {
            "A": "The military completely surrendered power to civilians",
            "B": "The political class was unprepared for governance",
            "C": "General Babangida reneged on the promise to end military rule",
            "D": "The political parties were too many"
        },
        "answer": "C"
    },
    {
        "question": "In the Third Republic, what was the mixture of governance structure?",
        "options": {
            "A": "Only military governance",
            "B": "Only civilian governance",
            "C": "A mixture of military and civilians in the government",
            "D": "A mixture of traditional and civilian rulers"
        },
        "answer": "C"
    },
    {
        "question": "General Babangida's promise to end the Military rule in 1990 was constantly 'reneged' in order to do what?",
        "options": {
            "A": "Maintain stability in the country",
            "B": "Introduce a new electoral system",
            "C": "Retain power in government",
            "D": "Give enough time for parties to prepare"
        },
        "answer": "C"
    },
    {
        "question": "According to the text, what was the name of M.K.O. Abiola's running mate in the 1993 presidential election?",
        "options": {
            "A": "Chief Humphrey Nwosu",
            "B": "Alhaji Babangida",
            "C": "Alhaji Bashir Tofa",
            "D": "Alhaji Babagana Kingibe"
        },
        "answer": "D"
    },
    {
        "question": "The two-party system was aimed at doing all the following except:",
        "options": {
            "A": "Giving citizens a clear choice",
            "B": "Reducing ethnic and tribal divisions",
            "C": "Providing a sense of national outlook",
            "D": "Encouraging a multiplicity of parties"
        },
        "answer": "D"
    },
    {
        "question": "What does the acronym NRC stand for?",
        "options": {
            "A": "National Republican Convention",
            "B": "National Restoration Committee",
            "C": "Nigerian Ruling Council",
            "D": "National Revolutionary Congress"
        },
        "answer": "A"
    },
    {
        "question": "In the Third Republic, what was the main political goal that General Babangida failed to achieve?",
        "options": {
            "A": "Conducting an open election",
            "B": "Creating two political parties",
            "C": "Making political associations spang up",
            "D": "Ending military rule"
        },
        "answer": "D"
    },
    {
        "question": "As of December 2014, how many registered political parties are listed in the provided text?",
        "options": {
            "A": "20",
            "B": "26",
            "C": "30",
            "D": "40"
        },
        "answer": "B"
    },
    {
        "question": "Which of the following parties is NOT on the list of registered parties as of December 2014?",
        "options": {
            "A": "All Progressives Congress (APC)",
            "B": "Justice Party (JP)",
            "C": "People's Democratic Party (PDP)",
            "D": "Labour Party (LP)"
        },
        "answer": "C"
    },
    {
        "question": "What does the acronym NCNC stand for in the list of parties?",
        "options": {
            "A": "National Citizens for Nigeria Campaign",
            "B": "National Conscience Party",
            "C": "National Citizens of Nigeria Congress",
            "D": "National Centre Party of Nigeria"
        },
        "answer": "B"
    },
    {
        "question": "The text mentions a flurry of activities in the registration of political parties in Nigeria towards which year's general elections?",
        "options": {
            "A": "2011",
            "B": "2015",
            "C": "2019",
            "D": "2023"
        },
        "answer": "B"
    },
    {
        "question": "What is the acronym for Accord?",
        "options": {
            "A": "AC",
            "B": "A",
            "C": "ACC",
            "D": "ARD"
        },
        "answer": "B"
    },
    {
        "question": "Which political party had its presidential candidate, Gen Muhammadu Buhari, win the 2015 general election?",
        "options": {
            "A": "People's Democratic Party (PDP)",
            "B": "All Progressives Congress (APC)",
            "C": "Labour Party (LP)",
            "D": "Accord (A)"
        },
        "answer": "B"
    },
    {
        "question": "The win of Gen Muhammadu Buhari in 2015 broke the monopoly of which party as the government at the center?",
        "options": {
            "A": "All Progressives Congress (APC)",
            "B": "Social Democratic Party (SDP)",
            "C": "People's Democratic Party (PDP)",
            "D": "National Republican Convention (NRC)"
        },
        "answer": "C"
    },
    {
        "question": "Which of these parties is listed as the 22nd party?",
        "options": {
            "A": "National Conscience Party (NCP)",
            "B": "National Centre Party of Nigeria (NCPN)",
            "C": "Mega Progressive Peoples Party (MPPP)",
            "D": "Labour Party (LP)"
        },
        "answer": "C"
    },
    {
        "question": "What does the acronym PPN stand for?",
        "options": {
            "A": "People's Progressive Network",
            "B": "Peoples Party of Nigeria",
            "C": "Progressive Party of Nigeria",
            "D": "Party for People of Nigeria"
        },
        "answer": "B"
    },
    {
        "question": "The text states that Nigeria is what kind of state?",
        "options": {
            "A": "One-party state",
            "B": "Two-party state",
            "C": "Multi-party state",
            "D": "Military state"
        },
        "answer": "C"
    },
    {
        "question": "Who declared the secession of Biafra from Nigeria in 1967?",
        "options": {
            "A": "General Yakubu Gowon",
            "B": "Colonel Odumegwu Ojukwu",
            "C": "Major Kaduna Nzeogwu",
            "D": "Chief Obafemi Awolowo"
        },
        "answer": "B"
    },
    {
        "question": "What was the primary reason for the Biafra secession?",
        "options": {
            "A": "Economic inequality",
            "B": "Religious differences",
            "C": "Persecution of Easterners after the 1966 counter-coup",
            "D": "British colonial policies"
        },
        "answer": "C"
    },
    {
        "question": "How long did the Nigerian Civil War last?",
        "options": {
            "A": "12 months",
            "B": "30 months",
            "C": "5 years",
            "D": "18 months"
        },
        "answer": "B"
    },
    {
        "question": "Which disease became widespread in Biafra due to famine during the war?",
        "options": {
            "A": "Malaria",
            "B": "Kwashiorkor",
            "C": "Cholera",
            "D": "Smallpox"
        },
        "answer": "B"
    },
    {
        "question": "What international organization emerged partly due to the humanitarian crisis in Biafra?",
        "options": {
            "A": "United Nations Peacekeepers",
            "B": "Doctors Without Borders",
            "C": "Red Cross",
            "D": "Amnesty International"
        },
        "answer": "B"
    },
    {
        "question": "What triggered the Aba Women's Riot of 1929?",
        "options": {
            "A": "Religious discrimination",
            "B": "Imposition of taxes on women by British colonial authorities",
            "C": "Land confiscation by Warrant Chiefs",
            "D": "Forced labor policies"
        },
        "answer": "B"
    },
    {
        "question": "Who were the Warrant Chiefs?",
        "options": {
            "A": "Traditional Igbo rulers",
            "B": "British-appointed local administrators",
            "C": "Religious leaders",
            "D": "Market women leaders"
        },
        "answer": "B"
    },
    {
        "question": "Which tactic did the Aba women NOT use during their protest?",
        "options": {
            "A": "Burning colonial buildings",
            "B": "Releasing prisoners",
            "C": "Kidnapping British officials",
            "D": "Cutting telegraph wires"
        },
        "answer": "C"
    },
    {
        "question": "How long did the Aba Women's Riot last?",
        "options": {
            "A": "1 week",
            "B": "2 months",
            "C": "1 year",
            "D": "6 days"
        },
        "answer": "B"
    },
    {
        "question": "What was the colonial government's response to the riot?",
        "options": {
            "A": "Negotiation with women leaders",
            "B": "Abolition of the Warrant Chief system",
            "C": "Use of lethal force (shooting protesters)",
            "D": "Immediate tax reforms"
        },
        "answer": "C"
    },
    {
        "question": "What was a major consequence of the Kano Riot of 1953?",
        "options": {
            "A": "Unification of Northern and Southern Nigeria",
            "B": "Strained North-South relations",
            "C": "Immediate independence from Britain",
            "D": "Economic boom in Kano"
        },
        "answer": "B"
    },
    {
        "question": "Which political parties formed a temporary alliance after the Kano Riot?",
        "options": {
            "A": "AG and NPC",
            "B": "NCNC and AG",
            "C": "NPC and NCNC",
            "D": "UMBC and NEPU"
        },
        "answer": "B"
    },
    {
        "question": "What constitutional event followed the Kano Riot?",
        "options": {
            "A": "1951 Macpherson Constitution",
            "B": "1953 and 1954 Constitutional Conferences",
            "C": "1960 Independence Constitution",
            "D": "1979 Presidential Constitution"
        },
        "answer": "B"
    },
    {
        "question": "The Kano Riot exposed the need for Nigeria to adopt what principle?",
        "options": {
            "A": "Centralized governance",
            "B": "Regional autonomy (self-development)",
            "C": "Military rule",
            "D": "Socialist policies"
        },
        "answer": "B"
    },
    {
        "question": "Which of these was NOT an effect of the Kano Riot?",
        "options": {
            "A": "Loss of lives",
            "B": "Destruction of property",
            "C": "Formation of the NYM",
            "D": "Constitutional reforms"
        },
        "answer": "C"
    },
    {
        "question": "Which military ruler overthrew Chief Ernest Shonekan's interim government in 1993?",
        "options": {
            "A": "General Ibrahim Babangida",
            "B": "General Sani Abacha",
            "C": "General Olusegun Obasanjo",
            "D": "General Muhammadu Buhari"
        },
        "answer": "B"
    },
    {
        "question": "What was the charge against MKO Abiola after his declaration as President in 1994?",
        "options": {
            "A": "Corruption",
            "B": "Treason",
            "C": "Electoral fraud",
            "D": "Embezzlement"
        },
        "answer": "B"
    },
    {
        "question": "Which of these parties was NOT among the original three in Nigeria's 4th Republic (1999)?",
        "options": {
            "A": "Alliance for Democracy (AD)",
            "B": "People's Democratic Party (PDP)",
            "C": "All Nigeria People's Party (ANPP)",
            "D": "All Progressive Grand Alliance (APGA)"
        },
        "answer": "D"
    },
    {
        "question": "What major event occurred in Nigeria's 2015 general elections?",
        "options": {
            "A": "Cancellation of elections by INEC",
            "B": "Merger of opposition parties to form APC",
            "C": "Military coup",
            "D": "Introduction of electronic voting"
        },
        "answer": "B"
    },
    {
        "question": "Which parties merged to form the All Progressives Congress (APC) in 2015?",
        "options": {
            "A": "PDP, ANPP, and AD",
            "B": "CPC, ACN, ANPP, and APGA faction",
            "C": "UNPP, NDP, and APGA",
            "D": "LP, ADC, and SDP"
        },
        "answer": "B"
    },
    {
        "question": "Why did Northern politicians reject the 1956 independence motion?",
        "options": {
            "A": "Fear of Southern domination",
            "B": "Educational/economic backwardness",
            "C": "British pressure",
            "D": "Religious objections"
        },
        "answer": "B"
    },
    {
        "question": "Which Northern leader proposed 'independence as soon as practicable'?",
        "options": {
            "A": "Tafawa Balewa",
            "B": "Ahmadu Bello (Sardauna of Sokoto)",
            "C": "Aminu Kano",
            "D": "Yakubu Gowon"
        },
        "answer": "B"
    },
    {
        "question": "How did Southern politicians protest the Northern counter-motion?",
        "options": {
            "A": "Armed rebellion",
            "B": "Walkout from the House",
            "C": "Boycott of elections",
            "D": "Forming a parallel government"
        },
        "answer": "B"
    },
    {
        "question": "What triggered the Kano Riot after the parliamentary walkout?",
        "options": {
            "A": "Southern politicians' campaign in Kano",
            "B": "British troop deployment",
            "C": "Northern secession threats",
            "D": "Economic sanctions"
        },
        "answer": "A"
    },
    {
        "question": "What was the colonial government's response to the Kano Riot?",
        "options": {
            "A": "Declaration of a state of emergency",
            "B": "Arrest of all Southern leaders",
            "C": "Immediate independence grant",
            "D": "Dissolution of the Northern Region"
        },
        "answer": "A"
    },
    {
        "question": "Which of the following is NOT a principle of good governance according to the text?",
        "options": {
            "A": "Accountability",
            "B": "Transparency",
            "C": "Nepotism",
            "D": "Rule of Law"
        },
        "answer": "C"
    },
    {
        "question": "What does 'consensus-oriented' governance aim to achieve?",
        "options": {
            "A": "Majority rule without minority input",
            "B": "Broad consensus after mediating different interests",
            "C": "Dictatorial decision-making",
            "D": "Exclusion of marginalized groups"
        },
        "answer": "B"
    },
    {
        "question": "Which principle ensures citizens' access to information about government activities?",
        "options": {
            "A": "Effectiveness and Efficiency",
            "B": "Transparency",
            "C": "Inclusiveness",
            "D": "Responsiveness"
        },
        "answer": "B"
    },
    {
        "question": "What is described as 'the hallmark of good governance' in the text?",
        "options": {
            "A": "Transparency",
            "B": "Accountability",
            "C": "Rule of Law",
            "D": "Responsiveness"
        },
        "answer": "B"
    },
    {
        "question": "Which of these is a prerequisite for protecting human rights and checking abuse of power?",
        "options": {
            "A": "Consensus-oriented governance",
            "B": "Rule of Law",
            "C": "Effectiveness",
            "D": "Inclusiveness"
        },
        "answer": "B"
    },
    {
        "question": "What do the Yoruba call the Supreme Being?",
        "options": {
            "A": "Chukwu",
            "B": "Oghene",
            "C": "Olodumare",
            "D": "Obasi"
        },
        "answer": "C"
    },
    {
        "question": "According to Igbo belief, which component represents 'destiny' in a person?",
        "options": {
            "A": "Aru (body)",
            "B": "Chi (spirit)",
            "C": "Mkpulubi (soul)",
            "D": "Obi (heart)"
        },
        "answer": "B"
    },
    {
        "question": "What is the Urhobo name for God?",
        "options": {
            "A": "Oritse",
            "B": "Oghene",
            "C": "Tamara",
            "D": "Osonobua"
        },
        "answer": "B"
    },
    {
        "question": "Which ethnic group believes God is referred to as 'Obasi'?",
        "options": {
            "A": "Calabar",
            "B": "Igbo",
            "C": "Yoruba",
            "D": "Edo"
        },
        "answer": "A"
    },
    {
        "question": "What do Nigerians generally believe about the Supreme Being?",
        "options": {
            "A": "He is limited in power",
            "B": "He is the creator and sustainer of the universe",
            "C": "He is only worshipped by one ethnic group",
            "D": "He has no role in human affairs"
        },
        "answer": "B"
    },
    {
        "question": "According to the text, what is essential for achieving social order and peace?",
        "options": {
            "A": "Strict laws",
            "B": "Possessing and practicing virtues like respect",
            "C": "Economic prosperity",
            "D": "Political power"
        },
        "answer": "B"
    },
    {
        "question": "Which of these is NOT mentioned as a way to show respect in the text?",
        "options": {
            "A": "Respecting leaders for their positions",
            "B": "Respecting elders in society",
            "C": "Respecting only those who respect you",
            "D": "Respecting children's views when they are right"
        },
        "answer": "C"
    },
    {
        "question": "What does the text say about respecting younger ones?",
        "options": {
            "A": "Their views should always be ignored",
            "B": "Their views should be respected if they are right",
            "C": "Only elders deserve respect",
            "D": "Respect is not reciprocal"
        },
        "answer": "B"
    },
    {
        "question": "What is described as 'a curse in Nigeria' in the text?",
        "options": {
            "A": "Hard work",
            "B": "Laziness",
            "C": "Respect",
            "D": "Wealth"
        },
        "answer": "B"
    },
    {
        "question": "What value is highly celebrated by Nigerians according to Igboin (2011)?",
        "options": {
            "A": "Wealth",
            "B": "Hard work",
            "C": "Political power",
            "D": "Religious devotion"
        },
        "answer": "B"
    },
    {
        "question": "Which of these is NOT listed as a value affecting Nigeria's social system?",
        "options": {
            "A": "Political values",
            "B": "Aesthetic values",
            "C": "Technological values",
            "D": "Economic values"
        },
        "answer": "C"
    },
    {
        "question": "What is described as 'the first state of life in society'?",
        "options": {
            "A": "Community",
            "B": "School",
            "C": "Family",
            "D": "Government"
        },
        "answer": "C"
    },
    {
        "question": "How do Nigerians traditionally view divorce?",
        "options": {
            "A": "As a personal choice with no societal impact",
            "B": "As an obstruction to societal well-being",
            "C": "As a modern necessity",
            "D": "As a religious requirement"
        },
        "answer": "B"
    },
    {
        "question": "What concept is described as 'being your brother's keeper'?",
        "options": {
            "A": "Communal living",
            "B": "Individualism",
            "C": "Capitalism",
            "D": "Isolationism"
        },
        "answer": "A"
    },
    {
        "question": "What is formed from the family according to the text?",
        "options": {
            "A": "Government",
            "B": "Community",
            "C": "Religion",
            "D": "Economy"
        },
        "answer": "B"
    },
    {
        "question": "According to the World Bank (1992), what is NOT a pillar of good governance?",
        "options": {
            "A": "Political participation",
            "B": "Rule of law",
            "C": "Tribal favoritism",
            "D": "Protection of human rights"
        },
        "answer": "C"
    },
    {
        "question": "Which of these is a key feature of good governance as described in the text?",
        "options": {
            "A": "Centralized decision-making",
            "B": "Impartial legal accommodation of minority views",
            "C": "Restricted freedom of speech",
            "D": "Exclusion of vulnerable groups"
        },
        "answer": "B"
    },
    {
        "question": "What does good governance aim to improve?",
        "options": {
            "A": "Military strength",
            "B": "Quality of life for citizens",
            "C": "Tribal dominance",
            "D": "Religious uniformity"
        },
        "answer": "B"
    },
    {
        "question": "Which principle ensures that government policies are implemented effectively?",
        "options": {
            "A": "Nepotism",
            "B": "Efficiency",
            "C": "Tribalism",
            "D": "Exclusivity"
        },
        "answer": "B"
    },
    {
        "question": "What is essential for citizen involvement in governance?",
        "options": {
            "A": "Political participation",
            "B": "Tribal loyalty",
            "C": "Economic inequality",
            "D": "Religious segregation"
        },
        "answer": "A"
    },
    {
        "question": "Which of these is NOT an element of tribalism?",
        "options": {
            "A": "Loyalty to one's tribe",
            "B": "Perceiving other tribes as inferior",
            "C": "Promoting national unity",
            "D": "Strong attachment to cultural group"
        },
        "answer": "C"
    },
    {
        "question": "What is a primary cause of tribalism according to the text?",
        "options": {
            "A": "Good leadership",
            "B": "Economic equality",
            "C": "Strong ethnic divisions",
            "D": "Religious tolerance"
        },
        "answer": "C"
    },
    {
        "question": "Which of these is a consequence of tribalism?",
        "options": {
            "A": "Social integration",
            "B": "Encouragement of hatred among tribes",
            "C": "Economic development",
            "D": "Political stability"
        },
        "answer": "B"
    },
    {
        "question": "How is nepotism defined in the text?",
        "options": {
            "A": "Fair allocation of resources",
            "B": "Unmerited favor to relatives/friends",
            "C": "Promotion based on merit",
            "D": "Equal opportunity for all"
        },
        "answer": "B"
    },
    {
        "question": "What is a recommended solution to curb nepotism in Nigeria?",
        "options": {
            "A": "Concentrating power within one tribe",
            "B": "Eliminating unqualified appointments",
            "C": "Encouraging tribal favoritism",
            "D": "Reducing transparency in governance"
        },
        "answer": "B"
    },
    {
        "question": "What is a norm according to the text?",
        "options": {
            "A": "A personal opinion",
            "B": "An accepted standard of behavior",
            "C": "A religious doctrine",
            "D": "A political ideology"
        },
        "answer": "B"
    },
    {
        "question": "Which of these is a universal value mentioned in the text?",
        "options": {
            "A": "Tribal loyalty",
            "B": "Honesty",
            "C": "Nepotism",
            "D": "Discrimination"
        },
        "answer": "B"
    },
    {
        "question": "What happens when norms are violated in a society?",
        "options": {
            "A": "Positive reinforcement",
            "B": "Negative sanctions",
            "C": "No consequences",
            "D": "Economic growth"
        },
        "answer": "B"
    },
    {
        "question": "How are values described in relation to society?",
        "options": {
            "A": "Fixed and unchangeable",
            "B": "Shaped by societal constructs",
            "C": "Irrelevant to behavior",
            "D": "Unique to individuals only"
        },
        "answer": "B"
    },
    {
        "question": "What is the impact of neglecting norms and values in Nigeria?",
        "options": {
            "A": "Enhanced security",
            "B": "Moral decadence and insecurity",
            "C": "Economic prosperity",
            "D": "Political unity"
        },
        "answer": "B"
    },
    {
        "question": "What role do values play in nation-building?",
        "options": {
            "A": "They dictate developmental goals",
            "B": "They promote tribal conflicts",
            "C": "They restrict freedom of religion",
            "D": "They encourage nepotism"
        },
        "answer": "A"
    },
    {
        "question": "Which regions in Nigeria are predominantly Christian and Muslim?",
        "options": {
            "A": "North (Christian), South (Muslim)",
            "B": "North (Muslim), Middle-Belt/South (Christian)",
            "C": "Uniform distribution nationwide",
            "D": "Only urban areas practice both"
        },
        "answer": "B"
    },
    {
        "question": "What has reduced the influence of African Traditional Religion (ATR) in Nigeria?",
        "options": {
            "A": "Tribalism",
            "B": "Arrival of Christianity and Islam",
            "C": "Government policies",
            "D": "Economic changes"
        },
        "answer": "B"
    },
    {
        "question": "What is a common practice among Nigerians regarding religion?",
        "options": {
            "A": "Strict adherence to one faith",
            "B": "Mixing Christianity/Islam with indigenous beliefs",
            "C": "Rejection of all religions",
            "D": "Exclusive worship of ATR"
        },
        "answer": "B"
    },
    {
        "question": "Which value is critical for democratic governance?",
        "options": {
            "A": "Tribal favoritism",
            "B": "Faith in individual dignity and rationality",
            "C": "Centralized authority",
            "D": "Religious exclusivity"
        },
        "answer": "B"
    },
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
        "question": "Which of these is NOT a cause of systemic disenfranchisement in Nigerian elections?",
        "options": {
            "A": "Crashing of registration computers",
            "B": "Malfunctioning Smartcard Readers",
            "C": "Early arrival of INEC officials",
            "D": "Cancellation of results to favor candidates"
        },
        "answer": "C"
    },
    {
        "question": "What is a major consequence of electoral violence during elections?",
        "options": {
            "A": "Increased voter turnout",
            "B": "Destruction of electoral materials",
            "C": "Enhanced credibility of results",
            "D": "Faster announcement of results"
        },
        "answer": "B"
    },
    {
        "question": "How do corrupt electoral officials compromise elections?",
        "options": {
            "A": "By enforcing strict voting rules",
            "B": "By accepting bribes to falsify results",
            "C": "By delaying the voting process",
            "D": "By preventing all forms of violence"
        },
        "answer": "B"
    },
    {
        "question": "What tool is used for voter accreditation but may malfunction during elections?",
        "options": {
            "A": "Ballot boxes",
            "B": "Smartcard Readers",
            "C": "Manual registers",
            "D": "Biometric scanners"
        },
        "answer": "B"
    },
    {
        "question": "Why might registered voters fail to vote despite having PVCs?",
        "options": {
            "A": "Names missing from voter registers",
            "B": "Excessive voter education",
            "C": "Lack of polling stations",
            "D": "Oversupply of electoral materials"
        },
        "answer": "A"
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
        "question": "Which of these is NOT a function of INEC?",
        "options": {
            "A": "Registering political parties",
            "B": "Auditing political party accounts",
            "C": "Appointing state governors",
            "D": "Conducting voter education"
        },
        "answer": "C"
    },
    {
        "question": "Who was the first Chairman of INEC?",
        "options": {
            "A": "Attahiru Jega",
            "B": "Mahmood Yakubu",
            "C": "Ephraim Akpata",
            "D": "Abdulsalami Abubakar"
        },
        "answer": "C"
    },
    {
        "question": "Under which constitutional section was INEC established?",
        "options": {
            "A": "Section 153(f)",
            "B": "Section 162(a)",
            "C": "Section 145(d)",
            "D": "Section 177(b)"
        },
        "answer": "A"
    },
    {
        "question": "What is INEC's primary mandate?",
        "options": {
            "A": "To draft new constitutions",
            "B": "To conduct free and fair elections",
            "C": "To appoint judicial officers",
            "D": "To manage national budgets"
        },
        "answer": "B"
    },
    {
        "question": "Which of these elections does INEC NOT oversee?",
        "options": {
            "A": "Presidential elections",
            "B": "Local government chairmanship elections",
            "C": "National Assembly elections",
            "D": "State governorship elections"
        },
        "answer": "B"
    },
    {
        "question": "How does Transparency International define corruption?",
        "options": {
            "A": "Excessive taxation",
            "B": "Abuse of entrusted power for private gain",
            "C": "Political campaigning",
            "D": "Public service delays"
        },
        "answer": "B"
    },
    {
        "question": "Which of these is NOT a form of corruption mentioned in the text?",
        "options": {
            "A": "Inflation of contracts",
            "B": "Examination malpractice",
            "C": "Transparent budgeting",
            "D": "Money laundering"
        },
        "answer": "C"
    },
    {
        "question": "What is a wider perspective of corruption beyond financial misappropriation?",
        "options": {
            "A": "Voter registration",
            "B": "Perverting justice through bribes",
            "C": "Public infrastructure development",
            "D": "Free education policies"
        },
        "answer": "B"
    },
    {
        "question": "What sector is mentioned as affected by examination malpractice?",
        "options": {
            "A": "Healthcare",
            "B": "Education",
            "C": "Agriculture",
            "D": "Transportation"
        },
        "answer": "B"
    },
    {
        "question": "Which term describes Nigeria's corruption according to the text?",
        "options": {
            "A": "Ethnic and politically colored",
            "B": "Non-existent",
            "C": "Limited to the private sector",
            "D": "Easily eradicated"
        },
        "answer": "A"
    },
    {
        "question": "What was a key characteristic of General Sani Abacha's regime?",
        "options": {
            "A": "Promotion of free press",
            "B": "Use of repression and assassinations",
            "C": "Decentralization of power",
            "D": "Economic prosperity"
        },
        "answer": "B"
    },
    {
        "question": "How did General Abdulsalami Abubakar differ from Abacha?",
        "options": {
            "A": "By prolonging military rule",
            "B": "By promising a swift transition to democracy",
            "C": "By suppressing political detainees",
            "D": "By canceling all elections"
        },
        "answer": "B"
    },
    {
        "question": "What was the duration of General Abubakar's rule?",
        "options": {
            "A": "5 years",
            "B": "10 months",
            "C": "3 years",
            "D": "18 months"
        },
        "answer": "B"
    },
    {
        "question": "Which action is attributed to Abacha's regime?..",
        "options": {
            "A": "Announcing June 12 election results",
            "B": "Jettisoning democratic transition structures",
            "C": "Releasing all political prisoners",
            "D": "Promoting press freedom"
        },
        "answer": "B"
    },
    {
        "question": "What event ended Abacha's rule?",
        "options": {
            "A": "A military coup",
            "B": "His death from cardiac arrest",
            "C": "Mass protests",
            "D": "International sanctions"
        },
        "answer": "B"
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


const course2 = [
    {
        "question": "Which layer of the atmosphere contains the ozone layer?",
        "options": {
            "A": "Troposphere",
            "B": "Stratosphere",
            "C": "Mesosphere",
            "D": "Thermosphere"
        },
        "answer": "B"
    },
    {
        "question": "What is the primary function of the ozone layer?",
        "options": {
            "A": "Producing weather patterns",
            "B": "Absorbing ultraviolet (UV) radiation",
            "C": "Generating auroras",
            "D": "Stabilizing atmospheric pressure"
        },
        "answer": "B"
    },
    {
        "question": "Which gas is most abundant in Earth's atmosphere?",
        "options": {
            "A": "Oxygen",
            "B": "Carbon dioxide",
            "C": "Nitrogen",
            "D": "Argon"
        },
        "answer": "C"
    },
    {
        "question": "What human activity is implicated in ozone layer depletion?",
        "options": {
            "A": "Deforestation",
            "B": "Use of chlorofluorocarbons (CFCs)",
            "C": "Burning fossil fuels",
            "D": "Industrial water pollution"
        },
        "answer": "B"
    },
    {
        "question": "Which atmospheric layer is closest to Earth's surface?",
        "options": {
            "A": "Exosphere",
            "B": "Thermosphere",
            "C": "Troposphere",
            "D": "Mesosphere"
        },
        "answer": "C"
    },

    // Image 2: Earth's Internal Structure
    {
        "question": "Which layer of Earth's interior is in a semi-fluid state?",
        "options": {
            "A": "Crust",
            "B": "Mantle",
            "C": "Inner core",
            "D": "Lithosphere"
        },
        "answer": "B"
    },
    {
        "question": "What is the primary composition of Earth's core?",
        "options": {
            "A": "Silicon and oxygen",
            "B": "Nickel and iron",
            "C": "Magnesium and aluminum",
            "D": "Carbon and sulfur"
        },
        "answer": "B"
    },
    {
        "question": "Which Earth layer is responsible for tectonic activity?",
        "options": {
            "A": "Crust",
            "B": "Mantle",
            "C": "Outer core",
            "D": "Inner core"
        },
        "answer": "B"
    },
    {
        "question": "What is the lithosphere composed of?",
        "options": {
            "A": "Crust only",
            "B": "Mantle only",
            "C": "Crust and upper mantle",
            "D": "Outer core and mantle"
        },
        "answer": "C"
    },
    {
        "question": "Which Earth layer has the highest density?",
        "options": {
            "A": "Continental crust",
            "B": "Oceanic crust",
            "C": "Mantle",
            "D": "Inner core"
        },
        "answer": "D"
    },

    // Image 3: Solar System
    {
        "question": "Which planet is known as Earth's 'sister planet'?",
        "options": {
            "A": "Mercury",
            "B": "Venus",
            "C": "Mars",
            "D": "Jupiter"
        },
        "answer": "B"
    },
    {
        "question": "What is the primary composition of Venus's atmosphere?",
        "options": {
            "A": "Oxygen and nitrogen",
            "B": "Hydrogen and helium",
            "C": "Carbon dioxide",
            "D": "Methane"
        },
        "answer": "C"
    },
    {
        "question": "Which planet is the largest in the solar system?",
        "options": {
            "A": "Saturn",
            "B": "Jupiter",
            "C": "Neptune",
            "D": "Uranus"
        },
        "answer": "B"
    },
    {
        "question": "What is Pluto classified as in the solar system?",
        "options": {
            "A": "Terrestrial planet",
            "B": "Gas giant",
            "C": "Dwarf planet",
            "D": "Asteroid"
        },
        "answer": "C"
    },
    {
        "question": "Which planet has the coldest recorded temperature?",
        "options": {
            "A": "Neptune",
            "B": "Uranus",
            "C": "Mars",
            "D": "Saturn"
        },
        "answer": "B"
    },

    // Image 4: Solar System Formation
    {
        "question": "What is the most widely accepted theory of solar system formation?",
        "options": {
            "A": "Capture Theory",
            "B": "Nebular Hypothesis",
            "C": "Interstellar Cloud Theory",
            "D": "Big Bang Theory"
        },
        "answer": "B"
    },
    {
        "question": "What triggered the collapse of the solar nebula according to scientists?",
        "options": {
            "A": "A nearby supernova",
            "B": "Magnetic forces",
            "C": "Solar winds",
            "D": "Black hole"
        },
        "answer": "A"
    },
    {
        "question": "What is the Kuiper Belt primarily composed of?",
        "options": {
            "A": "Gas giants",
            "B": "Planetesimals",
            "C": "Black holes",
            "D": "Dark matter"
        },
        "answer": "B"
    },
    {
        "question": "Which scientist proposed the Capture Theory?",
        "options": {
            "A": "Otto Schmidt",
            "B": "Michael Woolfson",
            "C": "Immanuel Kant",
            "D": "Pierre-Simon Laplace"
        },
        "answer": "B"
    },
    {
        "question": "What is the estimated age of the solar system?",
        "options": {
            "A": "1 billion years",
            "B": "4.6 billion years",
            "C": "10 billion years",
            "D": "13.8 billion years"
        },
        "answer": "B"
    },

    // Image 5: Terrestrial Planets
    {
        "question": "Which planet has no natural satellites?",
        "options": {
            "A": "Earth",
            "B": "Mars",
            "C": "Venus",
            "D": "Jupiter"
        },
        "answer": "C"
    },
    {
        "question": "Why is Mars called the 'Red Planet'?",
        "options": {
            "A": "Due to its hot temperature",
            "B": "Because of iron oxide on its surface",
            "C": "From reflected sunlight",
            "D": "Due to volcanic activity"
        },
        "answer": "B"
    },
    {
        "question": "Which planet orbits the Sun the fastest?",
        "options": {
            "A": "Mercury",
            "B": "Venus",
            "C": "Earth",
            "D": "Mars"
        },
        "answer": "A"
    },
    {
        "question": "What is Earth's natural satellite called?",
        "options": {
            "A": "Phobos",
            "B": "Deimos",
            "C": "Moon",
            "D": "Titan"
        },
        "answer": "C"
    },
    {
        "question": "Which planet is closest to the Sun?",
        "options": {
            "A": "Venus",
            "B": "Mercury",
            "C": "Earth",
            "D": "Mars"
        },
        "answer": "B"
    },

    // Image 6: Jovian Planets
    {
        "question": "Which planet has the most moons?",
        "options": {
            "A": "Saturn",
            "B": "Jupiter",
            "C": "Uranus",
            "D": "Neptune"
        },
        "answer": "B"
    },
    {
        "question": "What are Saturn's rings primarily made of?",
        "options": {
            "A": "Solid rock",
            "B": "Ice particles and dust",
            "C": "Metallic fragments",
            "D": "Gas clouds"
        },
        "answer": "B"
    },
    {
        "question": "Which planet is named after the Roman god of the sea?",
        "options": {
            "A": "Uranus",
            "B": "Neptune",
            "C": "Jupiter",
            "D": "Mars"
        },
        "answer": "B"
    },
    {
        "question": "What is unique about Uranus's rotation?",
        "options": {
            "A": "It rotates backward",
            "B": "It doesn't rotate",
            "C": "It rotates on its side",
            "D": "It rotates the fastest"
        },
        "answer": "C"
    },
    {
        "question": "Which planet was discovered first with a telescope?",
        "options": {
            "A": "Jupiter",
            "B": "Saturn",
            "C": "Uranus",
            "D": "Neptune"
        },
        "answer": "C"
    },

    // Image 7: Galaxies
    {
        "question": "What is our galaxy called?",
        "options": {
            "A": "Andromeda",
            "B": "Milky Way",
            "C": "Sombrero",
            "D": "Whirlpool"
        },
        "answer": "B"
    },
    {
        "question": "What unit is used to measure astronomical distances?",
        "options": {
            "A": "Kilometer",
            "B": "Astronomical Unit",
            "C": "Light year",
            "D": "Parsec"
        },
        "answer": "C"
    },
    {
        "question": "How many stars are estimated to be in the Milky Way?",
        "options": {
            "A": "1 million",
            "B": "100 million",
            "C": "100 billion",
            "D": "100 trillion"
        },
        "answer": "C"
    },
    {
        "question": "What holds galaxies together?",
        "options": {
            "A": "Electromagnetic forces",
            "B": "Gravitational pull",
            "C": "Dark energy",
            "D": "Solar winds"
        },
        "answer": "B"
    },
    {
        "question": "What is a light year?",
        "options": {
            "A": "Time taken for light to cross Earth's orbit",
            "B": "Distance light travels in one year",
            "C": "Brightness of a star",
            "D": "Age of the universe"
        },
        "answer": "B"
    },

    // Image 8: Science and Technology
    {
        "question": "What is the main difference between science and technology?",
        "options": {
            "A": "Science creates, technology explains",
            "B": "Science seeks knowledge, technology applies it",
            "C": "Science is theoretical, technology is natural",
            "D": "No significant difference"
        },
        "answer": "B"
    },
    {
        "question": "Which organization classifies fields of science and technology?",
        "options": {
            "A": "UNESCO",
            "B": "OECD",
            "C": "NASA",
            "D": "WHO"
        },
        "answer": "B"
    },
    {
        "question": "What does FOS stand for in scientific classification?",
        "options": {
            "A": "Fields of Science",
            "B": "Foundation of Studies",
            "C": "Framework of Systems",
            "D": "Frequency of Signals"
        },
        "answer": "A"
    },
    {
        "question": "Which of these is NOT a natural science?",
        "options": {
            "A": "Mathematics",
            "B": "Physics",
            "C": "Engineering",
            "D": "Biology"
        },
        "answer": "C"
    },
    {
        "question": "What year was the Revised Fields of Science published?",
        "options": {
            "A": "1995",
            "B": "2002",
            "C": "2007",
            "D": "2012"
        },
        "answer": "C"
    },

    // Image 9: STS Education
    {
        "question": "What does STS stand for in education?",
        "options": {
            "A": "Science Teaching Standards",
            "B": "Science, Technology, Society",
            "C": "Scientific Theory System",
            "D": "Standard Testing System"
        },
        "answer": "B"
    },
    {
        "question": "When did STS education gain recognition in the US?",
        "options": {
            "A": "1960s",
            "B": "1981",
            "C": "1995",
            "D": "2000"
        },
        "answer": "B"
    },
    {
        "question": "What is the main goal of STS education?",
        "options": {
            "A": "Memorization of facts",
            "B": "Teaching science in human context",
            "C": "Focusing only on technology",
            "D": "Eliminating social studies"
        },
        "answer": "B"
    },
    {
        "question": "Which country first implemented STS as 'Science in Society'?",
        "options": {
            "A": "USA",
            "B": "UK",
            "C": "Germany",
            "D": "Japan"
        },
        "answer": "B"
    },
    {
        "question": "What professional body was formed for STS in the US?",
        "options": {
            "A": "NASTS",
            "B": "NASA",
            "C": "AAAS",
            "D": "NSTA"
        },
        "answer": "A"
    },
    {
        "question": "What is the beginning of spring called?",
        "options": {
            "A": "Summer Solstice",
            "B": "Vernal Equinox",
            "C": "Autumnal Equinox",
            "D": "Winter Solstice"
        },
        "answer": "B"
    },
    {
        "question": "Which season has the longest day of the year?",
        "options": {
            "A": "Spring",
            "B": "Summer",
            "C": "Fall",
            "D": "Winter"
        },
        "answer": "B"
    },
    {
        "question": "What phenomenon occurs at the North Pole during winter solstice?",
        "options": {
            "A": "24 hours of daylight",
            "B": "12 hours of daylight",
            "C": "24 hours of darkness",
            "D": "A solar eclipse"
        },
        "answer": "C"
    },
    {
        "question": "On which date does the autumnal equinox occur?",
        "options": {
            "A": "March 21",
            "B": "June 22",
            "C": "September 21",
            "D": "December 21"
        },
        "answer": "C"
    },
    {
        "question": "What is unique about day and night duration during equinoxes?",
        "options": {
            "A": "Days are longer",
            "B": "Nights are longer",
            "C": "Equal duration (12 hours each)",
            "D": "Complete darkness"
        },
        "answer": "C"
    },

    // Image 2: Earth's Facts
    {
        "question": "What percentage of Earth's surface is covered by water?",
        "options": {
            "A": "30%",
            "B": "50%",
            "C": "70%",
            "D": "90%"
        },
        "answer": "C"
    },
    {
        "question": "What is Earth's approximate age?",
        "options": {
            "A": "1.5 billion years",
            "B": "4.5 billion years",
            "C": "10 billion years",
            "D": "6,000 years"
        },
        "answer": "B"
    },
    {
        "question": "Which of these is NOT true about Earth's name?",
        "options": {
            "A": "Derived from Anglo-Saxon",
            "B": "Means 'ground or soil'",
            "C": "Comes from Roman mythology",
            "D": "Unique among planets"
        },
        "answer": "C"
    },
    {
        "question": "Where is most of Earth's freshwater stored?",
        "options": {
            "A": "Rivers",
            "B": "Glaciers",
            "C": "Underground aquifers",
            "D": "Atmosphere"
        },
        "answer": "B"
    },
    {
        "question": "What causes ocean tides?",
        "options": {
            "A": "Earth's rotation",
            "B": "Gravitational pull of the moon",
            "C": "Solar winds",
            "D": "Underwater volcanoes"
        },
        "answer": "B"
    },

    // Image 3: Earth's Movements
    {
        "question": "What is Earth's axial tilt?",
        "options": {
            "A": "15°",
            "B": "23.5°",
            "C": "45°",
            "D": "90°"
        },
        "answer": "B"
    },
    {
        "question": "How long does Earth take to complete one revolution around the sun?",
        "options": {
            "A": "24 hours",
            "B": "30 days",
            "C": "365.25 days",
            "D": "12 months"
        },
        "answer": "C"
    },
    {
        "question": "What motion causes day and night?",
        "options": {
            "A": "Revolution",
            "B": "Rotation",
            "C": "Tilt",
            "D": "Orbit"
        },
        "answer": "B"
    },
    {
        "question": "What shape is Earth's orbit around the sun?",
        "options": {
            "A": "Circular",
            "B": "Elliptical",
            "C": "Spiral",
            "D": "Irregular"
        },
        "answer": "B"
    },
    {
        "question": "Where does the sun appear vertically overhead during equinoxes?",
        "options": {
            "A": "Tropics",
            "B": "Poles",
            "C": "Equator",
            "D": "Mid-latitudes"
        },
        "answer": "C"
    },

    // Image 4: Solar System Formation
    {
        "question": "What is the most widely accepted theory of solar system formation?",
        "options": {
            "A": "Big Bang Theory",
            "B": "Nebular Hypothesis",
            "C": "Steady State Theory",
            "D": "Panspermia Theory"
        },
        "answer": "B"
    },
    {
        "question": "What triggered the collapse of the solar nebula?",
        "options": {
            "A": "Black hole",
            "B": "Nearby supernova",
            "C": "Solar flares",
            "D": "Magnetic fields"
        },
        "answer": "B"
    },
    {
        "question": "What are planetesimals?",
        "options": {
            "A": "Small stars",
            "B": "Asteroid-shaped objects",
            "C": "Gas giants",
            "D": "Black holes"
        },
        "answer": "B"
    },
    {
        "question": "Why are outer planets gaseous?",
        "options": {
            "A": "Closer to the sun",
            "B": "Weaker solar winds in outer regions",
            "C": "Made of heavier elements",
            "D": "Older age"
        },
        "answer": "B"
    },
    {
        "question": "Who proposed the Capture Theory?",
        "options": {
            "A": "Immanuel Kant",
            "B": "Michael Woolfson",
            "C": "Pierre-Simon Laplace",
            "D": "Albert Einstein"
        },
        "answer": "B"
    },

    // Image 5: Terrestrial Planets
    {
        "question": "Which planet is called Earth's 'sister planet'?",
        "options": {
            "A": "Mercury",
            "B": "Venus",
            "C": "Mars",
            "D": "Jupiter"
        },
        "answer": "B"
    },
    {
        "question": "What makes Mercury unique among terrestrial planets?",
        "options": {
            "A": "Largest size",
            "B": "Fastest orbit",
            "C": "Most moons",
            "D": "Strongest magnetic field"
        },
        "answer": "B"
    },
    {
        "question": "Why is Mars called the 'Red Planet'?",
        "options": {
            "A": "Due to iron oxide on its surface",
            "B": "From reflected sunlight",
            "C": "Because of volcanic activity",
            "D": "Due to atmospheric gases"
        },
        "answer": "A"
    },
    {
        "question": "Which terrestrial planet has the densest atmosphere?",
        "options": {
            "A": "Mercury",
            "B": "Venus",
            "C": "Earth",
            "D": "Mars"
        },
        "answer": "B"
    },
    {
        "question": "What is Earth's only natural satellite?",
        "options": {
            "A": "Phobos",
            "B": "Deimos",
            "C": "Moon",
            "D": "Titan"
        },
        "answer": "C"
    },

    // Image 6: Jovian Planets
    {
        "question": "Which planet has the most moons?",
        "options": {
            "A": "Jupiter",
            "B": "Saturn",
            "C": "Uranus",
            "D": "Neptune"
        },
        "answer": "A"
    },
    {
        "question": "What are Saturn's rings primarily made of?",
        "options": {
            "A": "Solid rock",
            "B": "Ice particles and dust",
            "C": "Metallic fragments",
            "D": "Gas clouds"
        },
        "answer": "B"
    },
    {
        "question": "Which planet is the coldest in the solar system?",
        "options": {
            "A": "Jupiter",
            "B": "Saturn",
            "C": "Uranus",
            "D": "Neptune"
        },
        "answer": "C"
    },
    {
        "question": "What is unique about Uranus's rotation?",
        "options": {
            "A": "Rotates backward",
            "B": "Doesn't rotate",
            "C": "Rotates on its side",
            "D": "Rotates fastest"
        },
        "answer": "C"
    },
    {
        "question": "Which planet was discovered first with a telescope?",
        "options": {
            "A": "Jupiter",
            "B": "Saturn",
            "C": "Uranus",
            "D": "Neptune"
        },
        "answer": "C"
    },

    // Image 7: Galaxies
    {
        "question": "What is our galaxy called?",
        "options": {
            "A": "Andromeda",
            "B": "Milky Way",
            "C": "Sombrero",
            "D": "Whirlpool"
        },
        "answer": "B"
    },
    {
        "question": "What unit is used to measure interstellar distances?",
        "options": {
            "A": "Kilometers",
            "B": "Astronomical Units",
            "C": "Light years",
            "D": "Parsecs"
        },
        "answer": "C"
    },
    {
        "question": "What holds galaxies together?",
        "options": {
            "A": "Electromagnetic forces",
            "B": "Gravity",
            "C": "Dark energy",
            "D": "Solar winds"
        },
        "answer": "B"
    },
    {
        "question": "About how many stars are in the Milky Way?",
        "options": {
            "A": "1 million",
            "B": "100 million",
            "C": "100 billion",
            "D": "1 trillion"
        },
        "answer": "C"
    },
    {
        "question": "What is a light year?",
        "options": {
            "A": "Time light takes to cross our solar system",
            "B": "Distance light travels in one year",
            "C": "Brightness measurement",
            "D": "Age of the universe"
        },
        "answer": "B"
    },

    // Image 8: Science and Technology
    {
        "question": "What is the main difference between science and technology?",
        "options": {
            "A": "Science creates, technology explains",
            "B": "Science seeks knowledge, technology applies it",
            "C": "Science is natural, technology is artificial",
            "D": "No significant difference"
        },
        "answer": "B"
    },
    {
        "question": "Which organization classifies fields of science and technology?",
        "options": {
            "A": "UNESCO",
            "B": "OECD",
            "C": "NASA",
            "D": "WHO"
        },
        "answer": "B"
    },
    {
        "question": "What does FOS stand for in scientific classification?",
        "options": {
            "A": "Fields of Science",
            "B": "Framework of Systems",
            "C": "Frequency of Signals",
            "D": "Foundation of Studies"
        },
        "answer": "A"
    },
    {
        "question": "Which is NOT a natural science?",
        "options": {
            "A": "Physics",
            "B": "Chemistry",
            "C": "Engineering",
            "D": "Biology"
        },
        "answer": "C"
    },
    {
        "question": "When was the Revised Fields of Science published?",
        "options": {
            "A": "1995",
            "B": "2002",
            "C": "2007",
            "D": "2012"
        },
        "answer": "C"
    },

    // Image 9: STS Education
    {
        "question": "What does STS stand for in education?",
        "options": {
            "A": "Science Teaching Standards",
            "B": "Science, Technology, Society",
            "C": "Scientific Theory System",
            "D": "Standard Testing System"
        },
        "answer": "B"
    },
    {
        "question": "When did STS education gain recognition in the US?",
        "options": {
            "A": "1960s",
            "B": "1981",
            "C": "1995",
            "D": "2000"
        },
        "answer": "B"
    },
    {
        "question": "What is the main goal of STS education?",
        "options": {
            "A": "Memorization of facts",
            "B": "Teaching science in human context",
            "C": "Focusing only on technology",
            "D": "Eliminating social studies"
        },
        "answer": "B"
    },
    {
        "question": "Where was STS first implemented as 'Science in Society'?",
        "options": {
            "A": "USA",
            "B": "UK",
            "C": "Germany",
            "D": "Japan"
        },
        "answer": "B"
    },
    {
        "question": "What professional body was formed for STS in the US?",
        "options": {
            "A": "NASTS",
            "B": "NASA",
            "C": "AAAS",
            "D": "NSTA"
        },
        "answer": "A"
    },

    // Image 10: Scientific Methodology
    {
        "question": "What is the first step in the scientific method?",
        "options": {
            "A": "Form a hypothesis",
            "B": "Ask a question",
            "C": "Conduct experiments",
            "D": "Analyze data"
        },
        "answer": "B"
    },
    {
        "question": "What is methodological naturalism?",
        "options": {
            "A": "Studying nature without technology",
            "B": "Explaining phenomena without supernatural references",
            "C": "Focusing only on natural environments",
            "D": "Rejecting all theories"
        },
        "answer": "B"
    },
    {
        "question": "Which scientist famously used imagination in developing relativity?",
        "options": {
            "A": "Newton",
            "B": "Einstein",
            "C": "Galileo",
            "D": "Hawking"
        },
        "answer": "B"
    },
    {
        "question": "What is NOT a characteristic of scientific knowledge?",
        "options": {
            "A": "Testable",
            "B": "Open to revision",
            "C": "Absolute truth",
            "D": "Based on evidence"
        },
        "answer": "C"
    },
    {
        "question": "What maintains objectivity in science?",
        "options": {
            "A": "Peer review",
            "B": "Government approval",
            "C": "Popular opinion",
            "D": "Religious doctrine"
        },
        "answer": "A"
    },

    // Image 11: Scientific Method
    {
        "question": "What is a hypothesis?",
        "options": {
            "A": "Proven fact",
            "B": "Educated guess",
            "C": "Final conclusion",
            "D": "Random idea"
        },
        "answer": "B"
    },
    {
        "question": "Which comes first in the scientific method?",
        "options": {
            "A": "Experiment",
            "B": "Observation",
            "C": "Conclusion",
            "D": "Publication"
        },
        "answer": "B"
    },
    {
        "question": "What should you do if results don't match your hypothesis?",
        "options": {
            "A": "Change the data",
            "B": "Modify the hypothesis",
            "C": "Ignore the results",
            "D": "Stop the experiment"
        },
        "answer": "B"
    },
    {
        "question": "What is the purpose of controls in experiments?",
        "options": {
            "A": "Make experiments more complex",
            "B": "Provide comparison baseline",
            "C": "Speed up the process",
            "D": "Reduce costs"
        },
        "answer": "B"
    },
    {
        "question": "Why is communication important in science?",
        "options": {
            "A": "For fame",
            "B": "Peer verification",
            "C": "To get funding",
            "D": "Personal satisfaction"
        },
        "answer": "B"
    },

    // Image 12: Origin of Life Theories
    {
        "question": "Which theory attributes life to supernatural creation?",
        "options": {
            "A": "Spontaneous generation",
            "B": "Special creation",
            "C": "Steady-state",
            "D": "Biochemical evolution"
        },
        "answer": "B"
    },
    {
        "question": "Who proposed the idea of spontaneous generation?",
        "options": {
            "A": "Darwin",
            "B": "Aristotle",
            "C": "Einstein",
            "D": "Pasteur"
        },
        "answer": "B"
    },
    {
        "question": "What does the steady-state theory propose?",
        "options": {
            "A": "Life has no origin",
            "B": "Life came from space",
            "C": "Life was created",
            "D": "Life evolved chemically"
        },
        "answer": "A"
    },
    {
        "question": "What is panspermia also called?",
        "options": {
            "A": "Special creation",
            "B": "Cosmozoon theory",
            "C": "Biochemical theory",
            "D": "Divine origin"
        },
        "answer": "B"
    },
    {
        "question": "What did Oparin's 'primeval soup' refer to?",
        "options": {
            "A": "Early oceans with organic molecules",
            "B": "Volcanic magma",
            "C": "Atmospheric gases",
            "D": "Meteorite composition"
        },
        "answer": "A"
    },

    // Image 13: Human Evolution
    {
        "question": "Where were Cro-Magnon remains first found?",
        "options": {
            "A": "Africa",
            "B": "Europe",
            "C": "Asia",
            "D": "Australia"
        },
        "answer": "B"
    },
    {
        "question": "What distinguishes humans from other primates?",
        "options": {
            "A": "Tool use",
            "B": "Creativity and reasoning",
            "C": "Social groups",
            "D": "Opposable thumbs"
        },
        "answer": "B"
    },
    {
        "question": "What is the study of human origins called?",
        "options": {
            "A": "Anthropology",
            "B": "Paleontology",
            "C": "Archaeology",
            "D": "Palaeoanthropology"
        },
        "answer": "D"
    },
    {
        "question": "When did modern humans first appear?",
        "options": {
            "A": "1 million years ago",
            "B": "300,000 years ago",
            "C": "30,000 years ago",
            "D": "10,000 years ago"
        },
        "answer": "B"
    },
    {
        "question": "What was a key factor in human evolution?",
        "options": {
            "A": "Climate change",
            "B": "Volcanic activity",
            "C": "Meteor impacts",
            "D": "Ocean currents"
        },
        "answer": "A"
    },

    // Image 14: History of Science
    {
        "question": "Who first proposed the geocentric model?",
        "options": {
            "A": "Greeks",
            "B": "Mesopotamians",
            "C": "Egyptians",
            "D": "Chinese"
        },
        "answer": "B"
    },
    {
        "question": "When did modern science emerge?",
        "options": {
            "A": "Ancient Greece",
            "B": "17th century",
            "C": "Middle Ages",
            "D": "19th century"
        },
        "answer": "B"
    },
    {
        "question": "What invention revolutionized astronomy?",
        "options": {
            "A": "Microscope",
            "B": "Telescope",
            "C": "Barometer",
            "D": "Thermometer"
        },
        "answer": "B"
    },
    {
        "question": "Which civilization developed gunpowder?",
        "options": {
            "A": "Greek",
            "B": "Chinese",
            "C": "Roman",
            "D": "Indian"
        },
        "answer": "B"
    },
    {
        "question": "What was a key Greek contribution to science?",
        "options": {
            "A": "Experimental method",
            "B": "Logical examination of nature",
            "C": "Advanced technology",
            "D": "Industrial applications"
        },
        "answer": "B"
    },
    {
        "question": "What is the primary component of natural gas?",
        "options": {
            "A": "Ethane",
            "B": "Propane",
            "C": "Methane",
            "D": "Butane"
        },
        "answer": "C"
    },
    {
        "question": "How is crude oil classified?",
        "options": {
            "A": "By color and smell",
            "B": "By origin, density, and sulfur content",
            "C": "By viscosity alone",
            "D": "By its age in the ground"
        },
        "answer": "B"
    },
    {
        "question": "What is the main use of coke produced from coal?",
        "options": {
            "A": "Making plastic",
            "B": "Road construction",
            "C": "Fuel and reducing agent for smelting",
            "D": "Fertilizer production"
        },
        "answer": "C"
    },
    {
        "question": "Which radiation type was discovered to contain positively charged particles?",
        "options": {
            "A": "Gamma radiation",
            "B": "Beta radiation",
            "C": "Alpha radiation",
            "D": "Neutron radiation"
        },
        "answer": "C"
    },
    {
        "question": "What percentage of Earth's surface is covered by water?",
        "options": {
            "A": "50%",
            "B": "61%",
            "C": "71%",
            "D": "80%"
        },
        "answer": "C"
    },
    {
        "question": "Which of these is NOT a renewable resource?",
        "options": {
            "A": "Solar energy",
            "B": "Wind energy",
            "C": "Natural gas",
            "D": "Biomass"
        },
        "answer": "C"
    },
    {
        "question": "What is the main environmental advantage of nuclear energy?",
        "options": {
            "A": "Produces no waste",
            "B": "Doesn't release greenhouse gases",
            "C": "Is completely safe",
            "D": "Uses minimal water"
        },
        "answer": "B"
    },
    {
        "question": "Which type of plastic can be remolded and reused?",
        "options": {
            "A": "Thermosetting plastics",
            "B": "Bakelite",
            "C": "Thermoplastics",
            "D": "Epoxy resins"
        },
        "answer": "C"
    },
    {
        "question": "What is a major environmental concern associated with plastics?",
        "options": {
            "A": "They increase oxygen levels",
            "B": "They release toxic chemicals when degraded",
            "C": "They reduce soil erosion",
            "D": "They are fully biodegradable"
        },
        "answer": "B"
    },
    {
        "question": "Which of these is a characteristic of hazardous waste?",
        "options": {
            "A": "Always liquid form",
            "B": "Biodegradable within days",
            "C": "May cause adverse health effects",
            "D": "Only produced in hospitals"
        },
        "answer": "C"
    },
    {
        "question": "Which characteristic of Nigerian crude oil gives it a competitive advantage in global markets?",
        "options": {
            "A": "High sulfur content and heavy density",
            "B": "Low sulfur content and light density",
            "C": "High paraffin content and viscous nature",
            "D": "Mixed sulfur levels with medium API gravity"
        },
        "answer": "B",
        "explanation": "The text specifies Nigerian crude is 'light and sweet' (low density/sulfur), commanding better prices."
    },
    {
        "question": "During coal carbonization at 1000-3000°C, which by-product serves as the primary source of aromatic compounds?",
        "options": {
            "A": "Coal gas",
            "B": "Ammoniacal liquor",
            "C": "Coal tar",
            "D": "Coke"
        },
        "answer": "C",
        "explanation": "Coal tar is described as containing 'mainly aromatic compounds' for fractional distillation."
    },
    {
        "question": "What is the critical limitation of hydrogen fuel production via steam reforming?",
        "options": {
            "A": "Requires rare earth catalysts",
            "B": "Generates CO2 as a byproduct",
            "C": "Only works with seawater",
            "D": "Produces radioactive waste"
        },
        "answer": "B",
        "explanation": "The text notes steam reforming of natural gas produces both hydrogen and CO2, undermining its clean energy potential."
    },
    {
        "question": "Which hazardous waste characteristic applies to sodium metal exposed to water?",
        "options": {
            "A": "Ignitability (D003)",
            "B": "Corrosivity (D002)",
            "C": "Reactivity (D003)",
            "D": "Toxicity (D004)"
        },
        "answer": "C",
        "explanation": "Sodium metal is cited as reactive waste due to violent water reactions generating toxic gases."
    },
    {
        "question": "What distinguishes thermoplastics from thermosetting plastics at the molecular level?",
        "options": {
            "A": "Presence of cross-linked covalent bonds",
            "B": "Exclusive use of heterochain polymers",
            "C": "Dependence on van der Waals forces",
            "D": "Incorporation of radioactive stabilizers"
        },
        "answer": "C",
        "explanation": "Thermoplastics rely on weak van der Waals forces, allowing reshaping, unlike thermosets' covalent cross-links."
    },
    {
        "question": "Which radiation discovery demonstrated particles deflected by positive charges?",
        "options": {
            "A": "Becquerel's uranium experiments",
            "B": "Curie's pitchblende observations",
            "C": "Rutherford's gold foil tests",
            "D": "Marie Curie's alpha radiation studies"
        },
        "answer": "D",
        "explanation": "Marie Curie showed alpha particles were repelled by positive plates, indicating their positive charge."
    },
    {
        "question": "What is the primary environmental risk of mechanical beach raking for marine debris removal?",
        "options": {
            "A": "Increased atmospheric CO2",
            "B": "Disruption of shoreline ecosystems",
            "C": "Acceleration of plastic photodegradation",
            "D": "Leaching of heavy metals into sand"
        },
        "answer": "B",
        "explanation": "The text highlights damage to aquatic vegetation and nesting birds from habitat disturbance."
    },
    {
        "question": "Which nuclear fuel cycle stage poses the longest-term disposal challenge?",
        "options": {
            "A": "Yellowcake production",
            "B": "Reactor rod operation",
            "C": "Cooling pool storage",
            "D": "Final waste encapsulation"
        },
        "answer": "D",
        "explanation": "Spent fuel rods require 10,000 years to decay safely, making permanent storage technologically complex."
    },
    {
        "question": "What makes brominated flame retardants in plastics particularly hazardous?",
        "options": {
            "A": "They degrade into greenhouse gases",
            "B": "They bioaccumulate in food chains",
            "C": "They neutralize polymer cross-linking",
            "D": "They increase plastic viscosity"
        },
        "answer": "B",
        "explanation": "These additives are noted as persistent, bioaccumulative toxins with carcinogenic potential."
    },
    {
        "question": "Which factor critically limits the sustainability of deep-well geothermal energy extraction?",
        "options": {
            "A": "Depletion of magma reservoirs",
            "B": "Corrosion of drilling equipment",
            "C": "Groundwater contamination risk",
            "D": "High-pressure steam management"
        },
        "answer": "A",
        "explanation": "The text implies finite magma heat sources may not be truly renewable on human timescales."
    }
];

// OKAY
// Sample data structure with different courses
const questionsData = {
    "GST 101": course1,
    "HISTORY AND PHYLOSOPHY OF SCIENCE": course2,
    "MTH 101": [
        {
            "question": "What is 15 + 25?",
            "options": {
                "A": "35",
                "B": "40",
                "C": "45",
                "D": "50"
            },
            "answer": "B"
        },
        {
            "question": "What is the square root of 64?",
            "options": {
                "A": "6",
                "B": "7",
                "C": "8",
                "D": "9"
            },
            "answer": "C"
        }
    ]
};

const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};

export default function CBTApp() {
    const [selectedCourse, setSelectedCourse] = useState(null);
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
        const courseQuestions = questionsData[selectedCourse];
        const randomQuestions = shuffleArray(courseQuestions);
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
        setUserAnswers(prev => ({...prev, [currentIndex]: option}));

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

    const resetApp = () => {
        setSelectedCourse(null);
        setMode(null);
        setShowResult(false);
        setUserAnswers({});
        setCurrentIndex(0);
        clearInterval(timerRef.current);
    };

    // Course selection screen
    if (!selectedCourse) {
        return (
            <div
                className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-100 flex items-center justify-center p-4">
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden w-full max-w-2xl">
                    <div className="bg-gradient-to-r from-purple-600 to-blue-700 p-6 text-white text-center">
                        <h1 className="text-3xl font-bold mb-2 flex items-center justify-center">
                            <FaGraduationCap className="mr-3"/>
                            Knowledge Challenge
                        </h1>
                        <p className="opacity-90">Select a course to begin your test</p>
                    </div>

                    <div className="p-8">
                        <h2 className="text-xl font-semibold text-gray-800 mb-6 text-center">Choose Your Course</h2>
                        <div className="grid gap-4">
                            {Object.keys(questionsData).map((courseCode) => {
                                const questionCount = questionsData[courseCode].length;
                                return (
                                    <div
                                        key={courseCode}
                                        className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100 cursor-pointer hover:shadow-lg hover:scale-105 transition-all duration-200"
                                        onClick={() => setSelectedCourse(courseCode)}
                                    >
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center">
                                                <div className="bg-blue-100 p-3 rounded-full mr-4">
                                                    <FaBookOpen className="text-blue-600 text-xl"/>
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-semibold text-gray-800">{courseCode}</h3>
                                                    <p className="text-gray-600 text-sm">{questionCount} questions
                                                        available</p>
                                                </div>
                                            </div>
                                            <div className="text-blue-500">
                                                <FaChevronRight/>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Mode selection screen
    if (!mode) {
        return (
            <div
                className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden w-full max-w-md">
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-white">
                        <div className="flex items-center justify-between mb-4">
                            <button
                                onClick={() => setSelectedCourse(null)}
                                className="text-white hover:text-blue-200 transition-colors"
                            >
                                <FaArrowLeft/>
                            </button>
                            <h2 className="text-xl font-bold">{selectedCourse}</h2>
                            <div></div>
                        </div>
                        <div className="text-center">
                            <h1 className="text-2xl font-bold mb-2">Test Mode</h1>
                            <p className="opacity-90">Choose how you want to practice</p>
                        </div>
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
            <div
                className="min-h-screen bg-gradient-to-br from-green-50 to-teal-100 flex items-center justify-center p-4">
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden w-full max-w-md">
                    <div className="bg-gradient-to-r from-green-600 to-teal-700 p-6 text-white text-center">
                        <h1 className="text-3xl font-bold mb-2">Test Results</h1>
                        <p className="opacity-90">{performanceMessage}</p>
                        <p className="text-sm opacity-75 mt-2">Course: {selectedCourse}</p>
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
                                <span
                                    className="font-bold text-red-600">{totalQuestions - score}/{totalQuestions}</span>
                            </div>
                            {mode === 'real' && (
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600">Time Taken:</span>
                                    <span
                                        className="font-bold text-blue-600">{formatTime((shuffledQuestions.length * 60) - timeLeft)}</span>
                                </div>
                            )}
                        </div>

                        <div className="space-y-3">
                            <button
                                className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition duration-300 flex items-center justify-center"
                                onClick={() => setMode(null)}
                            >
                                <FaRedo className="mr-2"/> Try Again
                            </button>
                            <button
                                className="w-full py-3 bg-gray-600 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 transition duration-300 flex items-center justify-center"
                                onClick={resetApp}
                            >
                                <FaGraduationCap className="mr-2"/> Choose Different Course
                            </button>
                        </div>
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
                        <div className="flex items-center">
                            <button
                                onClick={() => setMode(null)}
                                className="text-white hover:text-blue-200 transition-colors mr-3"
                            >
                                <FaArrowLeft/>
                            </button>
                            <h2 className="text-xl font-bold">{selectedCourse}</h2>
                        </div>
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