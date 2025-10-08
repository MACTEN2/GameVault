import { 
  ChevronDown, Sword, Apple, Templar, Target, Shield, Crown, Zap, Heart, Users, User,
  ArrowLeft, Truck, Crosshair, ShieldCheck, Car, Home, Star,
  ChevronRight, Gamepad2, Map
} from 'lucide-react';


// SELECTING THE GAMES 
export const games = [
    {
    id: 'gta',
    name: 'Grand Theft Auto',
    series: 'GTA',
    description: 'open-world action-adventure series where players assume the role of criminals completing missions, driving, and shooting to navigate and dominate a large, satirical urban environment',
    gradient: 'from-blue-900 via-indigo-800 to-slate-700',
    image: 'https://external-preview.redd.it/RJVzeZYLoMMPTJ1iun_xhjMpGRZ04ei3_WlqCcMLM7M.jpg?auto=webp&s=b70c1419301365e2e3ddc8053fdf3ead96c8d671',
    icon: Crosshair,
    categories: ['characters', 'weapons', 'locations', 'vehicles']
    },
    {
      id: 'cod-mw',
      name: 'Call of Duty: Modern Warfare',
      series: 'Call of Duty',
      description: 'Continuation of the Modern Warfare saga with intense global conflicts',
      gradient: 'from-slate-800 via-gray-700 to-slate-600',
      image: 'https://assetsio.gnwcdn.com/call_of_duty_modern_warfare_trilogy.jpg?width=1200&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp',
      icon: Crosshair,
      categories: ['characters', 'weapons', 'groups', 'vehicles']
    },
    {
      id: 'ac-series',
      name: "Assassin's Creed",
      series: "Assassin's Creed",
      description: 'Historical adventures spanning centuries with stealth and parkour',
      gradient: 'from-red-800 via-amber-700 to-yellow-600',
      image: 'https://www.yourdecoration.com/cdn/shop/files/gbeye-fp4070-assassins-creed-characters-poster-61x91-5cm_60a115ba-9f78-4a9f-99ed-93a930d0119f.jpg?v=1756128956',
      icon: Sword,
      categories: ['characters', 'weapons', 'groups', 'locations'],
  }
];

    /*  ⠀⠀⠀⠀⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡔⣖⡶⠀⠀⡆⡴⠒⠒⢦⣄⠀⠲⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⡔⢂⡄⠀⠀⠀⠀⠀⠀⠀⢰⢍⢸⣜⠀⠀⢸⢀⠃⠀⠀⠀⠙⢦⣀⣹⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠈⠩⠊⠁⠀⠀⠀⠀⠀⠀⣼⠎⡆⣿⠀⠀⢸⢸⠀⠀⠀⠀⠀⠈⢉⡿⠋⠉⢢⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⡴⢫⠋⡆⠀⠀⠀⠀⠀⠀⡇⠀⢇⢫⡠⠤⠒⠛⠉⠙⢦⠀⢀⡠⠎⣿⠀⠀⠀⣱⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⢰⡅⢸⡰⡇⠀⠀⠀⠀⠀⠀⣾⡴⠋⠁⠀⠀⠀⠀⠀⠀⡠⠕⢭⠀⠀⢳⣋⡖⠉⠳⣗⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⡌⡇⢸⢁⡇⠀⠀⠀⠀⠀⢸⣙⡇⠀⠀⠀⠀⢀⣴⣿⣿⣦⠀⠘⣆⣀⣼⢳⡀⠀⠀⣸⡷⡻⣟⣒⣢⣄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⡇⡇⢸⣼⡇⠀⠀⠀⠀⠀⠸⣼⣱⣶⣶⣦⡔⠚⢿⣷⠯⠞⣠⢗⣿⣿⡏⣸⣿⣷⣶⣿⡴⠿⢟⣉⢝⣒⣭⣷⡤⠶⠖⠶⡶⢤⣤⣀⡀⠀⠀⠀⠀⠀⠀
        ⠀⠀⢰⠇⡷⡟⠹⡇⠀⠀⠀⠀⠀⠀⢱⢷⠻⠿⠟⡟⣦⣀⠰⡀⢸⡟⠛⣿⣿⢡⣿⣿⣿⣿⣿⣾⣾⣿⣷⣄⠀⠀⡀⠈⠉⠒⠤⠬⣀⣀⢈⣿⣷⣄⡀⠀⠀⠀
        ⠀⠀⢸⢱⣿⡇⠁⡇⠀⠀⠀⠀⠀⠀⠀⠙⠓⠮⣦⡻⠚⠋⠀⠡⣨⡇⢀⣿⡏⣾⣿⣿⠟⣻⣿⣿⣿⣿⢿⣿⣷⣶⣾⣿⣷⣦⣤⣶⠶⠋⠉⢉⣲⡭⠭⢷⣦⡀
        ⠀⠀⢸⣾⣹⣷⠒⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⣿⣤⣤⣴⣾⠟⣡⣾⣿⣽⡿⠋⠁⢀⣵⣿⣿⡿⠋⠈⡃⣨⣿⣿⣿⣟⣯⣿⣿⣦⣀⣼⡿⠁⠐⠢⡄⠀⠂
        ⠀⠀⢸⣏⣟⣿⣴⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣿⣷⣬⣭⣴⣾⣿⣿⠟⠉⠀⠀⣠⣾⣿⡿⠋⠀⣠⠞⢪⣾⣿⢿⣿⣿⣿⣿⣿⣿⣿⡟⠀⠀⠀⠀⠸⡀⠀
        ⠀⠀⣾⡼⣫⡾⢿⣯⣿⡿⠀⠀⠀⠀⠀⠀⠀⣼⣿⣷⣿⣿⣻⣿⣿⣿⠋⢀⣠⢴⣯⣾⣿⡿⠃⢀⠜⠁⣠⣾⡿⠁⠀⣿⣯⣟⢿⣿⣿⡿⠀⠀⠀⠀⠀⠀⠸⠀
        ⠀⢸⠯⣽⢉⣾⡟⠉⢻⡏⠀⠀⠀⠀⠀⠀⢸⣿⣿⣶⣿⢿⣿⣿⣿⣓⣛⣭⣔⣽⣿⣿⡿⢋⡽⠁⣠⣾⣿⢟⡁⡠⠊⠸⣿⠙⠻⣯⡿⠁⠀⠀⠀⠀⠀⠀⠀⠇
        ⠀⢸⠀⢸⡟⠙⡇⠁⢸⠁⠀⠀⠀⠀⢀⣿⣉⣿⣿⣿⣯⣗⡪⠭⣉⣻⠛⣻⣾⣿⣿⣫⡶⠉⣠⣾⣿⠟⢁⣾⣿⠾⠛⣧⠘⣇⠀⣾⠀⠀⠀⠀⠀⠀⠀⠀⠀⡄
        ⠀⢸⡠⢼⠃⠀⢹⣿⡞⠀⠀⠀⠀⠀⣼⣽⡏⠻⣍⡙⣿⢷⡛⢻⡿⣶⣽⣿⡿⣿⡿⠋⣠⣾⣿⡿⡡⢰⣿⠟⠀⠀⠀⠘⣧⠘⣷⠃⠀⠀⠀⠀⠀⠀⠀⢀⡾⠃
        ⠀⢸⠁⠀⠇⠀⣼⡿⠁⠀⠀⠀⠀⣼⣿⢏⡘⢦⡈⠛⠿⣮⣉⣡⡤⠺⣻⣯⡾⠋⣠⢺⣿⣿⠋⠀⠀⣀⠨⢧⣤⠀⠠⠄⢹⡿⠃⠀⠀⠀⠀⠀⠀⠀⣴⠋⠀⠀
        ⠀⢸⠀⠀⡇⠀⡏⠀⠀⠀⠀⠀⣴⢿⢹⣿⡉⠑⠛⠂⠀⠀⠁⠐⠉⠉⢔⣉⣤⣾⣿⣿⣿⡁⠂⡤⠋⠀⠈⠈⣇⡀⣀⣰⣿⠁⠀⠀⠀⠀⠀⠀⣠⠞⠁⠀⠀⠀
        ⠀⠘⣷⢮⠶⠾⠟⢳⠀⠀⠀⠸⣿⢯⣑⣾⣯⣿⣒⡶⠤⡤⢤⣤⣤⣾⣿⣿⣿⣿⣿⣿⣿⣥⡾⢿⣿⣲⠦⣤⣽⣿⣿⠈⠻⣷⡄⠀⠀⠀⢀⣾⠇⠀⠀⠀⠀⠀
        ⠀⠰⣇⣠⡧⠤⠖⠺⡇⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣻⡿⠿⢛⣿⣿⣿⢿⣿⣿⣿⡿⢻⣟⣅⣠⡀⠈⠉⠛⠚⠛⠁⠸⡇⠀⠀⠹⣄⣴⣿⣿⣿⠀⠀⠀⠀⠀⠀
        ⠀⠀⢹⡀⠀⠀⠀⠀⢳⠀⠀⢨⠿⣿⣿⣿⣿⣿⣿⣿⣤⣾⣿⣿⣿⣿⣶⠛⠉⠀⢀⣿⠟⠭⠭⠽⠶⣾⠷⣤⣀⣀⠀⣷⠀⢀⣐⣿⣿⣿⣿⣿⣗⠀⠀⠀⠀⠀
        ⠀⠀⠀⡇⠀⠀⠀⠀⠈⢧⡴⠋⠀⣿⡈⢿⣿⣿⣿⣿⣿⣿⠛⠉⠘⣿⣿⣦⠀⢀⣾⡇⣿⠀⠀⠀⠀⠈⠉⢳⣿⠙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡷⠦⣶⠀⠀
        ⠀⠀⠀⢳⠀⠀⠀⠀⠀⠘⣿⣶⣤⣸⡇⠈⢿⣿⣿⣿⣿⣿⣧⡀⠀⣹⣿⣿⣷⣾⡏⠐⠛⠀⢠⠀⢠⣾⢀⠞⡏⠀⠈⡯⠙⣿⡿⣻⠁⠀⠹⣧⠈⠁⠀⢹⡄⠀
        ⠀⠀⠀⠸⡄⠀⠀⠀⠀⠀⠘⣿⣯⡙⠃⠀⠈⢿⣿⣿⡟⠘⣿⣿⣿⣿⣿⡿⢻⣿⡗⠄⠀⢰⡃⠀⠘⣣⢻⣼⠃⠀⢸⡇⡿⣿⣧⣽⣀⠀⠀⢹⡆⠰⣶⣦⣧⠀
        ⠀⠀⠀⠀⢷⠀⠀⠀⠀⠀⠀⠈⠉⢷⡄⠀⠀⠘⢿⡟⠀⠀⠈⠛⠛⠻⡍⠀⢸⣿⠁⠀⠀⣆⠱⢄⣴⣥⣺⣟⠀⠀⡿⠉⢠⢻⠈⣿⣿⣷⣶⣶⣷⣖⣿⣿⣾⡀
        ⠀⠀⠀⠀⠘⣇⠀⠀⠀⠀⠀⠀⠀⠀⠹⣦⣠⢹⡿⠀⠀⠀⠀⠀⣠⣴⣾⣿⣿⣿⠄⠀⠀⢸⣴⣿⣿⣿⣿⣹⠀⣸⢣⡇⢈⡟⢠⣿⡏⢿⣿⣿⣿⣿⣿⣿⣿⡇
        ⠀⠀⠀⠀⠀⠹⣆⠀⠀⠀⠀⠀⠀⠀⠀⢻⠬⡾⠁⠀⠀⠀⠀⠀⢿⣿⣿⣿⣿⣿⢾⠆⡰⣿⣿⣿⣿⣿⣿⣾⣰⣯⣮⣄⣼⠃⣾⣿⠀⣼⡟⢿⣏⣿⣿⠿⠛⠃
        ⠀⠀⠀⠀⠀⠀⠙⣦⠀⠀⠀⠀⠀⠀⠀⣸⣰⠃⠀⠀⠀⠀⠀⠀⠈⢻⣿⣿⣿⣿⣷⣼⣵⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⣰⡿⠈⢠⣿⢷⡄⠙⢿⣏⠀⠀⠀
        ⠀⠀⠀⢀⣀⣀⠀⠘⣷⡀⡀⠀⢀⣠⣾⠿⠿⣷⠶⢶⡿⠿⢷⣶⣀⣀⣻⣿⡟⢳⣽⣿⣿⣿⣿⣿⣿⣿⣯⣿⣿⣿⣿⣿⣿⡿⢠⠀⣼⡟⠀⠹⣦⠀⣾⠀⠀⠀
        ⠀⠀⡴⠫⣿⠏⣉⣹⠉⠻⠶⠚⠋⣹⠁⠀⢸⡇⠀⢸⣤⣤⣤⡟⠉⢉⣿⠋⢡⣀⣷⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣿⣴⣿⠁⠀⠀⠈⠀⢹⡄⠀⠀
        ⢀⢞⣴⣾⣿⠋⠀⠀⠀⠀⠀⠀⠀⣿⣷⣶⣿⡇⠀⣾⣿⣿⣿⡇⠀⣸⡏⠀⢠⡾⣳⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⢀⠀⠀⠀⠀⠀⢷⠀⠀
        ⢈⠎⡏⣿⣿⣾⡀⠀⠀⠀⠀⠀⠀⢻⣿⣿⣿⡇⠀⣿⣿⣿⣿⡇⢀⡿⠀⣠⡿⣱⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⣄⡀⠀⠀⠀⢸⠀⠀
        ⢠⠀⣷⣿⣿⣿⣷⣶⣶⣶⣶⣶⣶⣿⣿⣿⣿⣷⣶⣿⣿⣿⣿⣿⣾⠃⣰⣽⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⣄⠀⢸⠀⠀
        ⢸⢤⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⣜⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡟⠀⠀
        ⠈⢾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠁⠀⠀
        ⠀⠀⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠁⠀⠀⠀
        ⠀⠀⠀⠙⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡉⠉⠋⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠙⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠇⠀⠰⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠷⠶⠶⠤⠤⠤⢀⠀
    */


//CALL OF DUTY: MODERN WARFARE 
export const gameData = {

     'gta': {
        "characters": [
            {
                "name": "Claude",
                "role": "Mute Mobster / Ascendant Gangster",
                "appeared_in": ["Grand Theft Auto III (2001)", "Grand Theft Auto: San Andreas (2004)"],
                "traits": ["Silent", "Ruthless", "Driven", "Effective"],
                "description": "The silent protagonist of *GTA III*, betrayed by Catalina and left for dead. His journey is a single-minded quest for power and vengeance across Liberty City. He is also Catalina's boyfriend (and subsequent victim) in a previous timeline, *GTA: San Andreas* (1992).",
                "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx6A5DCpuIjVBAg9ULR7EAtIAObVtkMY0Yew&s",
            },
            {
                "name": "Tommy Vercetti",
                "role": "Ex-Mafia Hitman / Budding Crime Lord",
                "appeared_in": ["Grand Theft Auto: Vice City (2002)"],
                "traits": ["Ambitious", "Charismatic", "Violent", "Opportunistic"],
                "description": "Sent to Vice City in 1986 by the Forelli family, he survives a drug deal ambush and decides to take over the city for himself, systematically destroying all rivals to become the undisputed crime kingpin.",
                "image": "",
            },
            {
                "name": "Carl “CJ” Johnson",
                "role": "Reformed Gangster / Homecomer",
                "appeared_in": ["Grand Theft Auto: San Andreas (2004)"],
                "traits": ["Loyal", "Street Smart", "Protective of Family", "Adaptive"],
                "description": "Returns to Los Santos in 1992 for his mother's funeral and is forced to fight for his gang, the Grove Street Families, while being blackmailed by the corrupt C.R.A.S.H. unit, led by Officer Tenpenny.",
                "image": "",
            },
            {
                "name": "Toni Cipriani",
                "role": "Leone Family Soldier / Capo",
                "appeared_in": ["Grand Theft Auto III (2001)", "Grand Theft Auto: Liberty City Stories (2005)"],
                "traits": ["Loyal", "Eager to Please", "Violent", "Overlooked"],
                "description": "The protagonist of *LCS* (1998), who returns to Liberty City and strives to prove his loyalty to Salvatore Leone, rising through the ranks to become a powerful Capo. He later appears in *GTA III* as a mission giver.",
                "image": "",
            },
            {
                "name": "Victor “Vic” Vance",
                "role": "Disgraced Soldier / Reluctant Drug Lord",
                "appeared_in": ["Grand Theft Auto: Vice City (2002)", "Grand Theft Auto: Vice City Stories (2006)"],
                "traits": ["Honorable (Initially)", "Protective of Family", "Disciplined", "Tragic"],
                "description": "An honorable U.S. Army Corporal who is forced into crime after being framed and discharged in *VCS* (1984). He builds an empire with his brother Lance, but is tragically killed in the botched drug deal that kicks off *GTA: Vice City* (1986).",
                "image": "",
            },
            {
                "name": "Niko Bellic",
                "role": "Eastern European War Veteran / Immigrant",
                "appeared_in": ["Grand Theft Auto IV (2008)"],
                "traits": ["Cynical", "Resourceful", "Skilled Marksman", "Protective"],
                "description": "An immigrant who comes to Liberty City seeking a better life after fighting in the Balkan Wars, only to find himself dragged into a brutal world of organized crime and forced to confront his past.",
                "image": "",
            },
            {
                "name": "Johnny Klebitz",
                "role": "Outlaw Biker / Vice President of The Lost MC",
                "appeared_in": ["Grand Theft Auto IV: The Lost and Damned (2009)", "Grand Theft Auto V (2013)"],
                "traits": ["Pragmatic", "Loyal (but betrayed)", "Burned-out"],
                "description": "The protagonist of *The Lost and Damned*. He tries to keep his biker gang, The Lost MC, from self-destructing, but loses control to the unstable Billy Grey. His story ends violently when he confronts Trevor Philips in *GTA V*.",
                "image": "",
            },
            {
                "name": "Luis Fernando Lopez",
                "role": "Nightclub Bouncer / Bodyguard",
                "appeared_in": ["Grand Theft Auto IV: The Ballad of Gay Tony (2009)", "Grand Theft Auto IV (2008)"],
                "traits": ["Cool-headed", "Loyal", "Effective in Combat", "Reluctant Criminal"],
                "description": "The bodyguard and business partner of nightclub owner 'Gay Tony' Prince. He is constantly tasked with saving Tony and his businesses from debt and rival mobsters, all while balancing his own street crew.",
                "image": "",
            },
            {
                "name": "Michael De Santa (Townley)",
                "role": "Retired Bank Robber / Protagonist 1 of 3",
                "appeared_in": ["Grand Theft Auto V (2013)"],
                "traits": ["Jaded", "Strategic", "Family Man (Troubled)", "Controlling"],
                "description": "A former career criminal living a miserable life in witness protection in Los Santos. He is pulled back into high-stakes heists after accidentally meeting Franklin and being rediscovered by Trevor.",
                "image": "",
            },
            {
                "name": "Franklin Clinton",
                "role": "Street Hustler / Protagonist 2 of 3",
                "appeared_in": ["Grand Theft Auto V (2013)"],
                "traits": ["Ambitious", "Disciplined", "Loyal", "Street Smart"],
                "description": "A young gang member eager to escape the 'hood life'. He finds the mentorship he craves in Michael, using his talent as a wheelman to rise from repo work to major criminal enterprises.",
                "image": "",
            },
            {
                "name": "Trevor Philips",
                "role": "Psychotic Drug Lord / Protagonist 3 of 3",
                "appeared_in": ["Grand Theft Auto V (2013)"],
                "traits": ["Psychotic", "Impulsive", "Brutally Effective", "Surprisingly Loyal"],
                "description": "Michael's volatile ex-partner who runs a small, chaotic drug and arms business in Blaine County. He is driven by chaos, violence, and a deep, albeit demented, loyalty to his friends.",
                "image": "",
            },
            // GTA III Key Characters
            {
                "name": "Catalina",
                "role": "Narcissistic Cartel Boss / Main Antagonist",
                "appeared_in": ["Grand Theft Auto III (2001)", "Grand Theft Auto: San Andreas (2004)"],
                "traits": ["Narcissistic", "Betraying", "Psychotic", "Ambitious"],
                "description": "The central antagonist of *GTA III*, responsible for betraying Claude. Earlier, she was Carl Johnson's unhinged girlfriend in *GTA: San Andreas* (1992) before running off to Liberty City.",
                "image": "",
            },
            {
                "name": "Maria Latore",
                "role": "Wife of Salvatore Leone / Drug Addict",
                "appeared_in": ["Grand Theft Auto III (2001)", "Grand Theft Auto: Liberty City Stories (2005)"],
                "traits": ["Needy", "Dramatic", "Addicted", "Rebellious"],
                "description": "The young, dramatic wife of Salvatore Leone who is prone to causing trouble for the Leone family. She becomes infatuated with both Toni Cipriani and Claude.",
                "image": "",
            },
            {
                "name": "Salvatore Leone",
                "role": "Don of the Leone Crime Family",
                "appeared_in": ["Grand Theft Auto III (2001)", "Grand Theft Auto: Liberty City Stories (2005)"],
                "traits": ["Paranoid", "Traditional", "Controlling", "Powerful"],
                "description": "The powerful Don who rules the Leone family. He promotes Toni Cipriani but later becomes paranoid, setting up a hit on Claude that leads to his own execution.",
                "image": "",
            },
            {
                "name": "Joey Leone",
                "role": "Leone Family Capo / Car Mechanic",
                "appeared_in": ["Grand Theft Auto III (2001)"],
                "traits": ["Loud-mouthed", "Mechanically Inclined", "Mid-level Mobster"],
                "description": "A well-connected Capo and mechanic in the Leone family who gives Claude various missions, usually involving cars and disposal of bodies.",
                "image": "",
            },
            {
                "name": "Luigi Goterelli",
                "role": "Owner of the Sex Club 7 / Pimp",
                "appeared_in": ["Grand Theft Auto III (2001)"],
                "traits": ["Connected", "Sleazy", "Bossy"],
                "description": "Claude's first employer in Liberty City who runs the Sex Club 7 and introduces Claude to the city's criminal underworld.",
                "image": "",
            },
            {
                "name": "Asuka Kasen",
                "role": "Yakuza Leader / Co-antagonist",
                "appeared_in": ["Grand Theft Auto III (2001)"],
                "traits": ["Professional", "Intelligent", "Revenge-driven"],
                "description": "Co-leader of the Yakuza who allies with Claude after he breaks her brother, Kenji, out of jail. She is driven by a desire for vengeance against the Colombian Cartel.",
                "image": "",
            },
            {
                "name": "Kenji Kasen",
                "role": "Yakuza Co-leader / Businessman",
                "appeared_in": ["Grand Theft Auto III (2001)"],
                "traits": ["Honorable", "Traditional", "Cautious"],
                "description": "Co-leader of the Yakuza based out of his casino. Claude performs several missions for him before assassinating him on the orders of Donald Love.",
                "image": "",
            },
            {
                "name": "Donald Love",
                "role": "Media Mogul / Real Estate Tycoon",
                "appeared_in": ["Grand Theft Auto III (2001)", "Grand Theft Auto: Liberty City Stories (2005)"],
                "traits": ["Obsessed with Youth", "Cunning", "Ruthless Businessman"],
                "description": "A wealthy and eccentric real estate mogul obsessed with eternal youth and power. He employs both Toni Cipriani (in *LCS*) and Claude (*GTA III*) to manipulate the city's market and eliminate rivals.",
                "image": "",
            },
            {
                "name": "Miguel",
                "role": "Colombian Cartel Leader",
                "appeared_in": ["Grand Theft Auto III (2001)"],
                "traits": ["Vulnerable", "Betrayed"],
                "description": "A leader of the Colombian Cartel and Catalina's business partner (and temporary lover) in *GTA III*. He is ultimately captured and tortured by Asuka Kasen before being killed by Catalina.",
                "image": "",
            },
            {
                "name": "Ray Machowski",
                "role": "Corrupt Police Detective / FIB Informant",
                "appeared_in": ["Grand Theft Auto III (2001)"],
                "traits": ["Paranoid", "Corrupt", "Connected"],
                "description": "A highly corrupt police detective working as an informant for the FIB. He gives Claude missions involving high-level corruption and political assassination before fleeing to Miami (Vice City) to escape the authorities.",
                "image": "",
            },
            // GTA: Vice City Key Characters
            {
                "name": "Sonny Forelli",
                "role": "Don of the Forelli Crime Family / Main Antagonist",
                "appeared_in": ["Grand Theft Auto: Vice City (2002)"],
                "traits": ["Greedy", "Controlling", "Arrogant"],
                "description": "Tommy Vercetti's former boss who sets him up to take the fall for a drug deal, only to come to Vice City years later to take Tommy's new empire. He is the final antagonist, killed by Tommy.",
                "image": "",
            },
            {
                "name": "Ken Rosenberg",
                "role": "Cocaine-Addled Lawyer",
                "appeared_in": ["Grand Theft Auto: Vice City (2002)", "Grand Theft Auto: San Andreas (2004)"],
                "traits": ["Neurotic", "Anxious", "Cowardly", "Loyal (to Tommy)"],
                "description": "Tommy Vercetti's eccentric and drug-addled lawyer who helps him establish his empire in Vice City. He later flees to San Andreas in 1992 and works with Carl Johnson and the mob families.",
                "image": "",
            },
            {
                "name": "Lance Vance",
                "role": "Drug Dealer / Partner / Betrayer",
                "appeared_in": ["Grand Theft Auto: Vice City (2002)", "Grand Theft Auto: Vice City Stories (2006)"],
                "traits": ["Flashy", "Insecure", "Impulsive", "Treacherous"],
                "description": "Victor Vance's opportunistic brother (*VCS*), and Tommy Vercetti's close ally (*VC*). Feeling disrespected and under-appreciated by Tommy, he ultimately betrays him, leading to his death in the final mission.",
                "image": "",
            },
            {
                "name": "Ricardo Diaz",
                "role": "Violent Vice City Drug Lord",
                "appeared_in": ["Grand Theft Auto: Vice City (2002)"],
                "traits": ["Violent", "Short-tempered", "Paranoid"],
                "description": "The powerful but volatile drug kingpin of Vice City. He is revealed to have orchestrated the ambush that cost Tommy his money, leading to Tommy and Lance killing him and taking over his mansion and operations.",
                "image": "",
            },
            {
                "name": "Avery Carrington",
                "role": "Real Estate Tycoon / Mentor",
                "appeared_in": ["Grand Theft Auto: Vice City (2002)"],
                "traits": ["Ruthless Businessman", "Mentor", "Smooth-talker"],
                "description": "A powerful and ruthless property mogul in Vice City who serves as an early mentor to Tommy, teaching him how to manipulate the real estate market to make a fortune. He is later assassinated in *LCS* (1998) on Donald Love's orders."
            },
            {
                "name": "Mercedes Cortez",
                "role": "Daughter of Colonel Cortez / Love Interest",
                "appeared_in": ["Grand Theft Auto: Vice City (2002)"],
                "traits": ["Flirtatious", "Troubled", "Loyal (to her father)"],
                "description": "Daughter of Colonel Juan Garcia Cortez and a temporary love interest for Tommy. She struggles with her father's impending departure and her own hedonistic lifestyle.",
                "image": "",
            },
            {
                "name": "Kent Paul",
                "role": "Music Producer / Media Contact",
                "appeared_in": ["Grand Theft Auto: Vice City (2002)", "Grand Theft Auto: San Andreas (2004)"],
                "traits": ["Connected", "Drug-addled", "Insecure"],
                "description": "A nervous but well-connected British music manager who provides Tommy with information and contacts. He later appears in *San Andreas* (1992) hiding out near Las Venturas with his friend Maccer."
            },
            {
                "name": "Steve Scott",
                "role": "Adult Film Director",
                "appeared_in": ["Grand Theft Auto: Vice City (2002)"],
                "traits": ["Creative", "Shifty"],
                "description": "A director of adult films who Tommy works with to secure the Print Works property, a key element in Vercetti's counterfeiting operations."
            },
            {
                "name": "Mitch Baker",
                "role": "Outlaw Biker Gang Leader",
                "appeared_in": ["Grand Theft Auto: Vice City (2002)"],
                "traits": ["Tough", "Vietnam Veteran", "Drug User"],
                "description": "Leader of the Vice City Biker gang. Tommy hires him and his gang as security for the Love Fist concert, demonstrating Tommy's expanding control over the city's various factions."
            },
            {
                "name": "Umberto Robina",
                "role": "Cuban Gang Leader",
                "appeared_in": ["Grand Theft Auto: Vice City (2002)", "Grand Theft Auto: Vice City Stories (2006)"],
                "traits": ["Macho", "Bravado-driven", "Rival to the Haitians"],
                "description": "Leader of the Cuban gang in Little Havana. He is consumed by a violent rivalry with the Haitian gang, using both Vic Vance (*VCS*) and Tommy Vercetti (*VC*) as muscle for his turf wars.",
                "image": "",
            },
            {
                "name": "Phil Cassidy",
                "role": "Arms Dealer / Explosives Expert",
                "appeared_in": ["Grand Theft Auto III (2001)", "Grand Theft Auto: Vice City (2002)", "Grand Theft Auto: Vice City Stories (2006)"],
                "traits": ["Gun Enthusiast", "Alcoholic", "Grumpy"],
                "description": "A drunken, one-armed arms dealer and explosives expert who assists both Vic Vance and Tommy Vercetti. He also appears in a small role in *GTA III* where Claude can purchase heavy weaponry from him.",
                "image": "",
            },
            // GTA: San Andreas Key Characters
            {
                "name": "Sweet (Sean Johnson)",
                "role": "Grove Street Families Leader / CJ's Brother",
                "appeared_in": ["Grand Theft Auto: San Andreas (2004)"],
                "traits": ["Principled", "Loyal", "Stubborn", "Gang-focused"],
                "description": "CJ's older brother and the leader of the Grove Street Families. His staunch loyalty to the 'hood prevents him from adapting to new threats, leading to his eventual imprisonment.",
                "image": "",
            },
            {
                "name": "Big Smoke (Melvin Harris)",
                "role": "Grove Street Families OG / Main Antagonist",
                "appeared_in": ["Grand Theft Auto: San Andreas (2004)"],
                "traits": ["Selfish", "Gluttonous", "Ambitious (criminally)"],
                "description": "A high-ranking OG who betrays the Grove Street Families, secretly collaborating with Officer Tenpenny, the Ballas, and the Cartel to establish a drug empire. He is the game's final boss.",
                "image": "",
            },
            {
                "name": "Ryder (Lance Wilson)",
                "role": "Grove Street OG / Traitor",
                "appeared_in": ["Grand Theft Auto: San Andreas (2004)"],
                "traits": ["Aggressive", "Delusional", "Small-time"],
                "description": "A close friend of CJ and a high-ranking member of Grove Street, known for his obsession with 'respect'. He is Big Smoke's partner in crime and one of the two main traitors to the gang.",
                "image": "",
            },
            {
                "name": "Kendl Johnson",
                "role": "CJ's Sister / Mediator",
                "appeared_in": ["Grand Theft Auto: San Andreas (2004)"],
                "traits": ["Intelligent", "Level-headed", "Supportive"],
                "description": "The only daughter of the Johnson family and CJ's sister. She is the most rational member of the family and a voice of reason, dating Cesar Vialpando.",
                "image": "",
            },
            {
                "name": "Cesar Vialpando",
                "role": "Varrios Los Aztecas Leader / CJ's Ally",
                "appeared_in": ["Grand Theft Auto: San Andreas (2004)"],
                "traits": ["Loyal", "Honorable", "Car Enthusiast"],
                "description": "Leader of the Varrios Los Aztecas gang and Kendl's boyfriend. He becomes one of CJ's most trusted and loyal allies after revealing the betrayal of Big Smoke and Ryder.",
                "image": "",
            },
            {
                "name": "The Truth",
                "role": "Eco-Friendly Hippie / Drug Grower",
                "appeared_in": ["Grand Theft Auto: San Andreas (2004)"],
                "traits": ["Paranoid", "Philosophical", "Druggie"],
                "description": "An eccentric, conspiracy-obsessed hippie who grows high-quality weed and gives CJ missions involving covert operations, often requiring CJ to travel across San Andreas.",
                "image": "",
            },
            {
                "name": "Officer Frank Tenpenny",
                "role": "Corrupt Police Officer / Main Antagonist",
                "appeared_in": ["Grand Theft Auto: San Andreas (2004)"],
                "traits": ["Corrupt", "Manipulative", "Arrogant", "Sadistic"],
                "description": "Leader of the LSPD's C.R.A.S.H. unit and the primary antagonist of *San Andreas*. He blackmails CJ into doing his dirty work while secretly profiting from the city's gang wars.",
                "image": "",
            },
            {
                "name": "Officer Eddie Pulaski",
                "role": "Corrupt Police Officer / Tenpenny's Henchman",
                "appeared_in": ["Grand Theft Auto: San Andreas (2004)"],
                "traits": ["Loyal (to Tenpenny)", "Vicious", "Brutish"],
                "description": "Tenpenny's loyal and vicious henchman in the C.R.A.S.H. unit. He is forced to kill his fellow officer Hernandez and later attempts to kill CJ before being killed himself.",
                "image": "",
            },
            {
                "name": "Officer Jimmy Hernandez",
                "role": "Corrupt Police Officer / C.R.A.S.H. Recruit",
                "appeared_in": ["Grand Theft Auto: San Andreas (2004)"],
                "traits": ["Reluctant", "Guilt-ridden"],
                "description": "The new member of the C.R.A.S.H. unit, forced to commit murder early on. He eventually attempts to expose Tenpenny to Internal Affairs, leading to his death.",
                "image": "",
            },
            {
                "name": "Woozie (Wu Zi Mu)",
                "role": "Triad Mountain Cloud Boys Leader",
                "appeared_in": ["Grand Theft Auto: San Andreas (2004)"],
                "traits": ["Blind (but denies it)", "Honorable", "Strategic", "Lucky"],
                "description": "The blind but highly skilled leader of the Triads' Mountain Cloud Boys in San Fierro. He becomes one of CJ's most reliable and honorable business partners and allies.",
                "image": "",
            },
            {
                "name": "Toreno (Mike Toreno)",
                "role": "Undercover Government Agent",
                "appeared_in": ["Grand Theft Auto: San Andreas (2004)"],
                "traits": ["Mysterious", "Manipulative", "Patriotic (Self-proclaimed)"],
                "description": "Initially appears to be a drug contact, but is later revealed to be an undercover government agent. He forces CJ to undertake difficult missions in exchange for Sweet's freedom.",
                "image": "",
            },
            {
                "name": "Madd Dogg",
                "role": "G-Funk Rapper / Comedian",
                "appeared_in": ["Grand Theft Auto: San Andreas (2004)"],
                "traits": ["Troubled", "Depressed", "Redeemed"],
                "description": "A famous Los Santos rapper who loses his career and mansion due to his manager being killed and his rhyme book being stolen by OG Loc. CJ later saves him from suicide and helps rebuild his career.",
                "image": "",
            },
            {
                "name": "OG Loc (Jeffrey Cross)",
                "role": "Wannabe Rapper / Antagonist",
                "appeared_in": ["Grand Theft Auto: San Andreas (2004)"],
                "traits": ["Delusional", "Incompetent", "Annoying"],
                "description": "A newly released convict and a terrible rapper. He forces CJ to help him steal Madd Dogg's rhyme book and kill his manager, kickstarting a chain of events that leads to Madd Dogg's breakdown.",
                "image": "",
            },
            {
                "name": "Big Bear",
                "role": "Grove Street Families OG / Drug Addict",
                "appeared_in": ["Grand Theft Auto: San Andreas (2004)"],
                "traits": ["Mute", "Drug Addict", "Redeemed"],
                "description": "A former influential OG who fell into drug addiction and was reduced to being Big Smoke's mute lackey. He finds redemption late in the story, cleans up, and fights alongside CJ and Sweet.",
                "image": "",
            },
            // GTA: Liberty City Stories Key Characters
            {
                "name": "Vincenzo Cilli",
                "role": "Leone Capo / Toni's Rival",
                "appeared_in": ["Grand Theft Auto: Liberty City Stories (2005)"],
                "traits": ["Ambitious", "Scheming", "Arrogant"],
                "description": "A rising Capo in the Leone family and Toni's immediate superior, who constantly schemes against him to impress Salvatore. He becomes an early victim of Toni's ruthless rise.",
                "image": "",
            },
            {
                "name": "Ma Cipriani",
                "role": "Toni's Mother",
                "appeared_in": ["Grand Theft Auto: Liberty City Stories (2005)"],
                "traits": ["Overbearing", "Critical", "Traditional"],
                "description": "Toni's mother, who is constantly disappointed in his lack of ambition and compares him unfavorably to his father. Her constant criticism drives Toni's aggressive ambition.",
                "image": "",
            },
            {
                "name": "JD O'Toole",
                "role": "Sindacco Associate / Strip Club Owner",
                "appeared_in": ["Grand Theft Auto: Liberty City Stories (2005)"],
                "traits": ["Effeminate", "Leone-wannabe", "Unlucky"],
                "description": "An associate of the Sindacco crime family who secretly wants to join the Leones. He provides Toni with useful information but is ultimately deemed a liability and killed by the Leones.",
                "image": "",
            },
            {
                "name": "Toshiko Kasen",
                "role": "Yakuza Boss's Wife",
                "appeared_in": ["Grand Theft Auto: Liberty City Stories (2005)"],
                "traits": ["Trapped", "Revengeful", "Suicidal"],
                "description": "The wife of a Triad boss who feels trapped in a loveless marriage and hires Toni to destroy her husband's business and reputation, ultimately committing suicide after her revenge is complete.",
                "image": "",
            },
            // GTA: Vice City Stories Key Characters
            {
                "name": "Louise Cassidy-Williams",
                "role": "Vic's Love Interest / Gang Associate",
                "appeared_in": ["Grand Theft Auto: Vice City Stories (2006)"],
                "traits": ["Caring", "Feisty", "Troubled"],
                "description": "Vic Vance's love interest and an associate of Marty Jay Williams's gang. She struggles with an abusive ex-husband and is eventually killed by the Mendez brothers' forces.",
                "image": "",
            },
            {
                "name": "Marty Jay Williams",
                "role": "Gang Leader / Loan Shark",
                "appeared_in": ["Grand Theft Auto: Vice City Stories (2006)"],
                "traits": ["Abusive", "Small-time", "Violent"],
                "description": "A loan shark and leader of a small gang who employs Vic Vance early on. He is Louise Cassidy-Williams's abusive ex-husband and is eventually killed by Vic.",
                "image": "",
            },
            {
                "name": "Jerry Martinez",
                "role": "Corrupt U.S. Army Sergeant / Antagonist",
                "appeared_in": ["Grand Theft Auto: Vice City Stories (2006)"],
                "traits": ["Corrupt", "Cowardly", "Traitorous"],
                "description": "Vic's commanding officer who introduces him to the criminal underworld and frames him for drug use, leading to Vic's discharge. He is one of the main antagonists of *VCS*.",
                "image": "",
            },
            {
                "name": "Diego & Armando Mendez",
                "role": "Drug Lords / Main Antagonists",
                "appeared_in": ["Grand Theft Auto: Vice City Stories (2006)"],
                "traits": ["Ruthless", "Calculated", "Brothers"],
                "description": "Brothers who run the powerful Mendez Cartel in Vice City. They are the primary antagonists of *VCS*, responsible for the death of Louise and for the eventual downfall of Vic Vance's operation.",
                "image": "",
            },
            {
                "name": "Reni Wassulmaier",
                "role": "Transgender Film Director",
                "appeared_in": ["Grand Theft Auto: Vice City Stories (2006)"],
                "traits": ["Eccentric", "Dramatic", "Connected"],
                "description": "An eccentric European film director whom Vic works for. Reni is one of the few prominent transgender characters in the series.",
                "image": "",
            },
            // GTA IV Key Characters
            {
                "name": "Roman Bellic",
                "role": "Niko's Cousin / Taxi Cab Owner",
                "appeared_in": ["Grand Theft Auto IV (2008)"],
                "traits": ["Optimistic (delusional)", "In debt", "Loyal (to Niko)"],
                "description": "Niko's cousin who convinces him to come to Liberty City with false promises of wealth, only to be constantly in trouble with loan sharks. He serves as Niko's closest companion and moral compass.",
                "image": "",
            },
            {
                "name": "Little Jacob",
                "role": "Jamaican Arms Dealer / Ally",
                "appeared_in": ["Grand Theft Auto IV (2008)"],
                "traits": ["Calm", "Trustworthy", "Rastafarian"],
                "description": "A Jamaican arms and drug dealer and Roman's best friend. He is one of Niko's most dependable and loyal allies, providing him with weapons and backup throughout the game.",
                "image": "",
            },
            {
                "name": "Brucie Kibbutz",
                "role": "Steroid-addicted Fitness Enthusiast",
                "appeared_in": ["Grand Theft Auto IV (2008)"],
                "traits": ["Hyperactive", "Ego-driven", "Steroid User"],
                "description": "A delusional, self-proclaimed fitness and lifestyle guru obsessed with steroids and his image. He employs Niko for various tasks, primarily involving vehicles and public relations.",
                "image": "",
            },
            {
                "name": "Patrick “Packie” McReary",
                "role": "Irish Mobster / Heist Partner",
                "appeared_in": ["Grand Theft Auto IV (2008)", "Grand Theft Auto V (2013)"],
                "traits": ["Loyal", "Skilled Criminal", "Family-focused"],
                "description": "An Irish mobster and the most stable member of the chaotic McReary family. He befriends Niko and works as his heist partner. He reappears in *GTA V* as a potential crew member.",
                "image": "",
            },
            {
                "name": "Derrick McReary",
                "role": "Irish Mobster / Drug Addict",
                "appeared_in": ["Grand Theft Auto IV (2008)"],
                "traits": ["Unstable", "Drug Addict", "Paranoid"],
                "description": "The eldest and most unstable of the McReary brothers, a paranoid former mobster who is either killed or saved by Niko, depending on the player's choice.",
                "image": "",
            },
            {
                "name": "Kate McReary",
                "role": "Packie's Sister / Love Interest",
                "appeared_in": ["Grand Theft Auto IV (2008)"],
                "traits": ["Moral", "Principled", "Honest"],
                "description": "The only daughter of the McReary family and a potential love interest for Niko. She despises the criminal life of her brothers and serves as a moral influence on Niko.",
                "image": "",
            },
            {
                "name": "Gerry McReary",
                "role": "Irish Mobster / Strategist",
                "appeared_in": ["Grand Theft Auto IV (2008)"],
                "traits": ["Manipulative", "Calculated", "Scheming"],
                "description": "One of the McReary brothers who uses Niko to manipulate the rival Irish and Italian mobs. He is incarcerated during the game but continues to give Niko orders by phone.",
                "image": "",
            },
            {
                "name": "Michelle / Karen",
                "role": "Niko's First Girlfriend / Government Agent",
                "appeared_in": ["Grand Theft Auto IV (2008)"],
                "traits": ["Deceptive", "Secretive"],
                "description": "Niko's first girlfriend in Liberty City, later revealed to be an agent for a covert government agency, who forces Niko to work for her to help locate a key target.",
                "image": "",
            },
            {
                "name": "Vlad Glebov",
                "role": "Small-Time Russian Mobster",
                "appeared_in": ["Grand Theft Auto IV (2008)"],
                "traits": ["Arrogant", "Womanizer", "Small-time"],
                "description": "A low-level Russian mobster and loan shark who is harassing Roman. He is the first person Niko kills for personal revenge, leading Niko to the more powerful Russian syndicate.",
                "image": "",
            },
            {
                "name": "Mikhail Faustin",
                "role": "Russian Mobster / Hot-head",
                "appeared_in": ["Grand Theft Auto IV (2008)"],
                "traits": ["Volatile", "Irrational", "Drug-addled"],
                "description": "A high-ranking Russian mobster who is highly volatile and erratic. He forces Niko to commit several murders, eventually causing too much trouble for his own boss, Dimitri Rascalov.",
                "image": "",
            },
            {
                "name": "Dimitri Rascalov",
                "role": "Russian Mob Boss / Main Antagonist",
                "appeared_in": ["Grand Theft Auto IV (2008)"],
                "traits": ["Treacherous", "Calculated", "Manipulative"],
                "description": "Faustin's business partner and the primary antagonist of *GTA IV*. He constantly betrays Niko, first by setting him up, and later by repeatedly working with Niko's enemies.",
                "image": "",
            },
            {
                "name": "Ray Boccino",
                "role": "Italian Mobster (Ancelotti Family)",
                "appeared_in": ["Grand Theft Auto IV (2008)", "Grand Theft Auto IV: The Lost and Damned (2009)"],
                "traits": ["Scheming", "Arrogant", "Cowardly"],
                "description": "A high-ranking Capo in the Ancelotti crime family who uses Niko (and Johnny Klebitz in *TLAD*) for various schemes before being killed as part of a high-level mob purge.",
                "image": "",
            },
            {
                "name": "Phil Bell",
                "role": "Irish-American Mobster / Heist Partner",
                "appeared_in": ["Grand Theft Auto IV (2008)"],
                "traits": ["Trustworthy", "Professional", "Loyal (to Pegorino)"],
                "description": "A professional mobster and close associate of Jimmy Pegorino. He serves as Niko's final contact for large-scale operations and a valuable heist partner.",
                "image": "",
            },
            {
                "name": "Jimmy Pegorino",
                "role": "Mob Boss / Final Antagonist (Choice)",
                "appeared_in": ["Grand Theft Auto IV (2008)"],
                "traits": ["Insecure", "Ambitious (desperate)"],
                "description": "Leader of the small, unrecognised Pegorino Crime Family. His desperate ambition to be accepted by the larger mob families drives him to make poor choices, leading to his conflict with Niko.",
                "image": "",
            },
            {
                "name": "Elizabeta Torres",
                "role": "Dominican Drug Queenpin",
                "appeared_in": ["Grand Theft Auto IV (2008)", "Grand Theft Auto IV: The Lost and Damned (2009)"],
                "traits": ["Unstable", "Drug-addled", "Connected"],
                "description": "A highly unstable drug dealer in Bohan who provides missions to Niko (and Johnny Klebitz) until her paranoia and drug use cause her to be arrested by the FIB.",
                "image": "",
            },
            {
                "name": "Playboy X",
                "role": "Uptown Gang Leader / Wealthy Criminal",
                "appeared_in": ["Grand Theft Auto IV (2008)"],
                "traits": ["Arrogant", "Paranoid", "Ambitious"],
                "description": "A powerful criminal in Algonquin who mentors Niko before becoming paranoid and manipulative. Niko must eventually choose between killing him or his old friend, Dwayne Forge.",
                "image": "",
            },
            {
                "name": "Dwayne Forge",
                "role": "Playboy X's Ex-Mentor / Ex-Convict",
                "appeared_in": ["Grand Theft Auto IV (2008)"],
                "traits": ["Depressed", "Loyal", "Old-school"],
                "description": "Playboy X's former mentor, released from prison after a long sentence. Niko must eventually choose between killing him or his former protégé, Playboy X.",
                "image": "",
            },
            // GTA IV: The Lost and Damned Key Characters
            {
                "name": "Billy Grey",
                "role": "President of The Lost MC / Main Antagonist",
                "appeared_in": ["Grand Theft Auto IV: The Lost and Damned (2009)"],
                "traits": ["Reckless", "Violent", "Drug-addled"],
                "description": "The unstable, charismatic President of The Lost MC. His reckless decision-making and desire for extreme violence constantly undermine Johnny Klebitz's efforts to keep the club functioning.",
                "image": "",
            },
            {
                "name": "Jim Fitzgerald",
                "role": "Lost MC Treasurer / Johnny's Best Friend",
                "appeared_in": ["Grand Theft Auto IV: The Lost and Damned (2009)"],
                "traits": ["Trustworthy", "Loyal", "Family-focused"],
                "description": "The club's treasurer and Johnny's most trusted friend. He is always the voice of reason against Billy's recklessness and is killed by Niko Bellic as part of a mission for Ray Boccino.",
                "image": "",
            },
            {
                "name": "Brian Jeremy",
                "role": "Lost MC Secretary / Betrayer",
                "appeared_in": ["Grand Theft Auto IV: The Lost and Damned (2009)"],
                "traits": ["Self-serving", "Scheming", "Cowardly"],
                "description": "The self-serving secretary of The Lost MC. He aligns himself with Billy Grey and is instrumental in plotting the downfall of Johnny Klebitz, leading a splinter group of the club.",
                "image": "",
            },
            {
                "name": "Angus Martin",
                "role": "Lost MC Member / Informant",
                "appeared_in": ["Grand Theft Auto IV: The Lost and Damned (2009)"],
                "traits": ["Disabled", "Informant", "Vengeful"],
                "description": "A disabled Lost MC member who holds a personal grudge against Billy Grey. He provides Johnny with information and helps him fight against Billy's forces.",
                "image": "",
            },
            {
                "name": "Malc",
                "role": "Uptown Riders Gang Member / Ally",
                "appeared_in": ["Grand Theft Auto IV: The Lost and Damned (2009)"],
                "traits": ["Biker", "Ally to The Lost"],
                "description": "A member of the Uptown Riders gang who provides backup and assistance to Johnny and The Lost during their turf wars, particularly against the Angels of Death.",
                "image": "",
            },
            // GTA IV: The Ballad of Gay Tony Key Characters
            {
                "name": "Tony Prince (Gay Tony)",
                "role": "Nightclub Impresario / Luis's Boss",
                "appeared_in": ["Grand Theft Auto IV: The Ballad of Gay Tony (2009)"],
                "traits": ["Flamboyant", "In Debt", "Unstable"],
                "description": "The charismatic but severely in-debt owner of Liberty City's most exclusive nightclubs. He relies entirely on his bodyguard, Luis Lopez, to save him from financial ruin and angry loan sharks.",
                "image": "",
            },
            {
                "name": "Yusuf Amir",
                "role": "Insane Middle Eastern Billionaire",
                "appeared_in": ["Grand Theft Auto IV: The Ballad of Gay Tony (2009)"],
                "traits": ["Eccentric", "Insane", "Wealthy"],
                "description": "A ridiculously rich, eccentric Middle Eastern billionaire who employs Luis to acquire increasingly ridiculous and destructive weapons, all in pursuit of building the 'ultimate Liberty City'.",
                "image": "",
            },
            {
                "name": "Mori Kibbutz",
                "role": "Brucie Kibbutz's Brother",
                "appeared_in": ["Grand Theft Auto IV: The Ballad of Gay Tony (2009)"],
                "traits": ["Hyper-competitive", "Intense", "Dominating"],
                "description": "Brucie Kibbutz's highly competitive and intense older brother. He forces Luis to engage in dangerous and demanding challenges to prove his worth.",
                "image": "",
            },
            {
                "name": "Rocco Pelosi",
                "role": "Italian Mobster (Ancelotti Family)",
                "appeared_in": ["Grand Theft Auto IV: The Ballad of Gay Tony (2009)"],
                "traits": ["Vicious", "Extortionist"],
                "description": "An Ancelotti mobster who attempts to extort money from Tony Prince, leading to a direct conflict with Luis. He is one of the final victims of the criminal turmoil in Liberty City.",
                "image": "",
            },
            {
                "name": "Ray Bulgarin",
                "role": "Russian Mob Boss / Antagonist",
                "appeared_in": ["Grand Theft Auto IV: The Ballad of Gay Tony (2009)"],
                "traits": ["Sadistic", "Vengeful"],
                "description": "A sadistic Russian mob boss and an enemy of Niko Bellic. He attempts to take over Tony Prince's businesses and is the final antagonist of *The Ballad of Gay Tony*.",
                "image": "",
            },
            {
                "name": "Henrique Bardas",
                "role": "Luis's Childhood Friend / Street Gang Member",
                "appeared_in": ["Grand Theft Auto IV: The Ballad of Gay Tony (2009)"],
                "traits": ["Loyal", "Reliable", "Muscle"],
                "description": "One of Luis's two childhood friends and a loyal member of Luis's street crew. He provides backup and assistance when Luis needs help with street-level operations.",
                "image": "",
            },
            {
                "name": "Armando Torres",
                "role": "Luis's Childhood Friend / Drug Dealer",
                "appeared_in": ["Grand Theft Auto IV: The Ballad of Gay Tony (2009)"],
                "traits": ["Loyal", "Drug Dealer", "Planner"],
                "description": "Luis's other childhood friend, who often helps plan and execute missions. He also runs a successful street drug dealing operation.",
                "image": "",
            },
            // GTA V Key Characters
            {
                "name": "Amanda De Santa",
                "role": "Michael's Estranged Wife",
                "appeared_in": ["Grand Theft Auto V (2013)"],
                "traits": ["Materialistic", "Dysfunctional", "Wife of a Criminal"],
                "description": "Michael's wife who is unhappy, spends all of Michael's money, and is largely responsible for the dysfunctional state of the De Santa family at the start of the game.",
                "image": "",
            },
            {
                "name": "Jimmy De Santa",
                "role": "Michael's Slacker Son",
                "appeared_in": ["Grand Theft Auto V (2013)"],
                "traits": ["Slacker", "Entitled", "Social Media Obsessed"],
                "description": "Michael's lazy, entitled, and socially awkward son who is addicted to video games and social media. His relationship with Michael is strained and often hostile.",
                "image": "",
            },
            {
                "name": "Tracey De Santa",
                "role": "Michael's Aspiring Daughter",
                "appeared_in": ["Grand Theft Auto V (2013)"],
                "traits": ["Vain", "Ambitious (Naively)", "Rebellious"],
                "description": "Michael's daughter who dreams of being a reality TV star and is constantly making bad decisions, straining her relationship with Michael.",
                "image": "",
            },
            {
                "name": "Lamar Davis",
                "role": "Franklin's Best Friend / Street Gangster",
                "appeared_in": ["Grand Theft Auto V (2013)"],
                "traits": ["Unstable", "Comic Relief", "Loyal (to Franklin)"],
                "description": "Franklin's best friend and a fellow member of the Families gang. He is loud, impulsive, and constantly involves Franklin in petty, often disastrous, criminal schemes.",
                "image": "",
            },
            {
                "name": "Lester Crest",
                "role": "Heist Planner / Mastermind",
                "appeared_in": ["Grand Theft Auto V (2013)"],
                "traits": ["Intellectual", "Mastermind", "Crippled", "Nervous"],
                "description": "The mastermind and logistics expert for Michael, Franklin, and Trevor's heist crew. He handles all the planning, hacking, and market manipulation from his home.",
                "image": "",
            },
            {
                "name": "Ron Jakowski",
                "role": "Trevor's Paranoid Neighbor / Friend",
                "appeared_in": ["Grand Theft Auto V (2013)"],
                "traits": ["Paranoid", "Conspiracy Theorist", "Nervous"],
                "description": "Trevor's paranoid, conspiracy-obsessed neighbor and a radio personality in Blaine County. He serves as Trevor's primary assistant and informant.",
                "image": "",
            },
            {
                "name": "Wade Hebert",
                "role": "Trevor's Lackey / Informant",
                "appeared_in": ["Grand Theft Auto V (2013)"],
                "traits": ["Dim-witted", "Submissive", "Lackey"],
                "description": "A dim-witted but loyal member of Trevor's Blaine County crew, often tasked with gathering information and acting as a lookout. He is easily manipulated by Trevor.",
                "image": "",
            },
            {
                "name": "Dave Norton",
                "role": "Corrupt FIB Agent / Michael's Handler",
                "appeared_in": ["Grand Theft Auto V (2013)"],
                "traits": ["Corrupt", "Self-serving", "Manipulative"],
                "description": "The FIB agent who made the deal with Michael to fake his death. He uses Michael to perform various tasks to cover up his own corruption and to advance his career.",
                "image": "",
            },
            {
                "name": "Steve Haines",
                "role": "Corrupt FIB Agent / Co-Antagonist",
                "appeared_in": ["Grand Theft Auto V (2013)"],
                "traits": ["Ego-driven", "Corrupt", "Media Personality"],
                "description": "An over-the-top, highly corrupt FIB agent and a television personality. He leads the illegal operations that Michael, Franklin, and Trevor are forced to carry out.",
                "image": "",
            },
            {
                "name": "Devin Weston",
                "role": "Billionaire Corrupt Businessman / Antagonist",
                "appeared_in": ["Grand Theft Auto V (2013)"],
                "traits": ["Wealthy", "Sociopathic", "Vain"],
                "description": "A manipulative, narcissistic billionaire and corporate lawyer who initially employs the trio for various tasks before becoming a key antagonist, demanding they kill a former partner.",
                "image": "",
            },
            {
                "name": "Martin Madrazo",
                "role": "Mexican Drug Lord",
                "appeared_in": ["Grand Theft Auto V (2013)"],
                "traits": ["Vicious", "Controlling", "Powerful"],
                "description": "A wealthy and powerful Mexican drug lord who Michael is forced to work for after damaging Madrazo's house and stealing his wife's necklace.",
                "image": "",
            },
            {
                "name": "Patricia Madrazo",
                "role": "Martin's Wife / Trevor's Companion",
                "appeared_in": ["Grand Theft Auto V (2013)"],
                "traits": ["Caring", "Submissive", "Motherly"],
                "description": "Martin Madrazo's kind-hearted, motherly wife who is kidnapped by Trevor. Surprisingly, she and Trevor develop a close, non-sexual bond before being returned to Martin.",
                "image": "",
            },
            {
                "name": "Simeon Yetarian",
                "role": "Shady Armenian Car Dealer",
                "appeared_in": ["Grand Theft Auto V (2013)"],
                "traits": ["Shady", "Exploitative", "Money-hungry"],
                "description": "Franklin and Lamar's initial boss who runs a shady car dealership and loan scheme. His repossession business is where Franklin and Michael first meet and accidentally cause trouble.",
                "image": "",
            },
            {
                "name": "Tanisha Jackson",
                "role": "Franklin's Ex-Girlfriend",
                "appeared_in": ["Grand Theft Auto V (2013)"],
                "traits": ["Moral", "Practical", "Independent"],
                "description": "Franklin's ex-girlfriend who refuses to be part of his criminal life. Her desire for Franklin to go straight serves as a major motivation for his decisions later in the game.",
                "image": "",
            },
            {
                "name": "Stretch",
                "role": "Gang Member / Franklin's Antagonist",
                "appeared_in": ["Grand Theft Auto V (2013)"],
                "traits": ["Traitorous", "Manipulative", "Vicious"],
                "description": "A high-ranking Families gang member released from prison who immediately attempts to sell out the Families to the Ballas and ruin Franklin's life. He is a secondary antagonist.",
                "image": "",
            },
            {
                "name": "Brad Snider",
                "role": "Michael and Trevor's Former Crew Member",
                "appeared_in": ["Grand Theft Auto V (2013)"],
                "traits": ["Impulsive", "Incompetent"],
                "description": "The third member of Michael and Trevor's original heist crew who was killed and buried in Michael's grave during the North Yankton heist. Trevor believes he is still alive in prison.",
                "image": "",
            },
            {
                "name": "Chef",
                "role": "Trevor's Cook / Methamphetamine Manufacturer",
                "appeared_in": ["Grand Theft Auto V (2013)"],
                "traits": ["Aggressive", "Skilled Cook", "Loyal (to Trevor)"],
                "description": "Trevor's extremely aggressive and highly skilled cook who runs Trevor Philips Industries' main methamphetamine laboratory.",
                "image": "",
            }
        ],
        weapons: [
            
        ],

        locations: [
              
        ],

        vehicles: [
           
        ]
    },

    'cod-mw': {
      characters: [
       {
      "id": 1,
      "name": "Captain Price",
      "role": "Task Force 141 Leader / SAS captain ",
      "description": "Veteran SAS officer and leader of Task Force 141. Known for his tactical expertise, iconic mustache, and unwavering loyalty.",
      "traits": ["Leadership", "Tactical Genius", "Combat Veteran"],
      "fullDescription": "A legendary SAS operator, John Price has a distinguished career spanning decades. He is a formidable strategist and a master of both covert and overt operations. Price is a key figure in hunting down international threats and is a symbol of resilience and determination in the face of impossible odds.",
      "image": "https://wallpapercave.com/wp/wp7114845.jpg",
      "icon": "Target"
    },
    {
      "id": 2,
      "name": "Soap MacTavish",
      "role": "Task Force 141 / SAS Sergeant",
      "description": "Scottish SAS sergeant known for his demolitions expertise and quick thinking under pressure.",
      "traits": ["Demolitions Expert", "Quick Thinking", "Loyal Soldier"],
      "fullDescription": "John 'Soap' MacTavish is a skilled soldier and a key member of Captain Price's team. His journey from a rookie to a battle-hardened veteran is central to the original Modern Warfare trilogy. Soap is highly proficient in demolitions and close-quarters combat, often at the forefront of the most dangerous missions.",
      "image": "https://i.pinimg.com/736x/18/be/12/18be125ad8bbe63a0c2d79027a3cbab8.jpg",
      "icon": "Zap"
    },
    {
      "id": 3,
      "name": "Ghost",
      "role": "Task Force 141 Specialist / SAS Lt",
      "description": "A mysterious and highly skilled operator known for his iconic skull mask and proficiency in stealth and psychological warfare.",
      "traits": ["Stealth Specialist", "Intimidation", "Covert Ops"],
      "fullDescription": "Simon 'Ghost' Riley is an enigmatic and ruthless Task Force 141 member. His past is shrouded in mystery, and he rarely speaks, letting his actions do the talking. He specializes in covert operations and is an expert at infiltrating enemy territory without a trace, using his presence alone to unnerve his enemies.",
      "image": "https://preview.redd.it/add-this-ghost-skin-v0-bfabkan9vl3c1.jpg?width=640&crop=smart&auto=webp&s=3e8a359b0d22e778b849898a2091b17a9c4502a1",
      "icon": "Users"
    },
    {
      "id": 4,
      "name": "Roach",
      "role": "Task Force 141 Operative",
      "description": "Silent but deadly Task Force 141 operative specializing in covert operations and stealth missions.",
      "traits": ["Stealth Operations", "Silent Professional", "Covert Specialist", ],
      "fullDescription": "Gary 'Roach' Sanderson is a highly trained operative who served alongside Soap MacTavish during key moments of the conflict against Makarov. He is the main playable character in a significant portion of Modern Warfare 2, performing critical tasks that push the story forward.",
      "image": "https://i.namu.wiki/i/3KM4Jm04ID0DXNdKX_n6wWyPmuVFlKnbna83n-TC9RDt938qMeLeTK7IQbpgIzjfYbRK3JOyyNnIErgxC3GjxA.webp",
      "icon": "Shield"
    },
    {
      "id": 5,
      "name": "Yuri",
      "role": "Ex-Spetsnaz, Loyalist",
      "description": "A former Spetsnaz turned Russian Loyalist. He has a complicated history with Makarov and becomes a crucial ally to Task Force 141.",
      "traits": ["Resilience", "Redemption", "Insider Knowledge", ],
      "fullDescription": "Once a member of Makarov's inner circle, Yuri witnessed the horrific consequences of his actions, including the infamous Zakhaev airport massacre. This led him to turn on his former comrade and seek redemption by aiding Price and Soap in their final mission to hunt down Makarov and end his reign of terror.",
      "image": "https://pm1.aminoapps.com/6505/6e6959c2c9a8a4b4f750073cb4f45b96f97405c2_00.jpg",
      "icon": "Sword"
    },
    {
      "id": 6,
      "name": "Corporal Dunn",
      "role": "Army Ranger Corporal",
      "description": "Reliable Army Ranger corporal serving under Sergeant Foley in the defense of America.",
      "traits": ["Reliability", "Team Support", "Combat Ready", "Disciplined", "Loyal", "Tactical", "Resilient", "Courageous", "Resourceful", "Dependable", "Focused", "Strong-Willed", "Honorable"],
      "fullDescription": "James Ramirez's squadmate and a seasoned Army Ranger, Dunn is a pragmatic and loyal soldier. He assists the player character throughout the invasion of the U.S. in Modern Warfare 2, providing crucial support and tactical guidance in intense urban warfare scenarios.",
      "image": "https://www.giantbomb.com/a/uploads/scale_small/0/5774/1231487-cpl_dunn.png",
      "icon": "Users"
    },
    {
      "id": 7,
      "name": "Sergeant Foley",
      "role": "Army Ranger Sergeant",
      "description": "Experienced Army Ranger sergeant leading troops through intense urban warfare in Washington D.C.",
      "traits": ["Urban Combat Expert", "Squad Leader", "Battle-Hardened", "Tactical", "Decisive", "Resilient", "Loyal", "Courageous", "Disciplined", "Resourceful", "Dependable", "Focused", "Strong-Willed", "Honorable"],
      "fullDescription": "Foley is the commanding officer of the Army Ranger squad that Private Ramirez is a part of. He's a decisive leader who navigates his team through the chaotic American invasion, giving clear orders and providing crucial strategic direction during the most challenging firefights.",
      "image": "https://i.redd.it/86pqfvlsqhx31.png",
      "icon": "Shield"
    },
    {
      "id": 8,
      "name": "PFC Allen",
      "role": "Army Ranger/Undercover Agent",
      "description": "A U.S. Army Ranger who is handpicked by General Shepherd to go undercover within Makarov's organization.",
      "traits": ["Undercover", "Special Operations", "Patriotism"],
      "fullDescription": "Joseph Allen is a playable character at the beginning of Modern Warfare 2. His mission is to infiltrate the Inner Circle of Makarov's ultranationalist group. His dedication to his country leads him to participate in the infamous 'No Russian' mission, which ultimately culminates in his death and sets the stage for the rest of the game's narrative.",
      "image": "https://i.pinimg.com/736x/2e/f7/de/2ef7deea880f5157772635c62d90e159.jpg",
      "icon": "Crosshair"
    },
    {
      "id": 9,
      "name": "Pvt Ramirez",
      "role": "Army Ranger Private",
      "description": "Young but skilled Army Ranger private fighting to defend the homeland against invasion.",
      "traits": ["Determination", "Quick Learner", "Brave Soldier", "Team Player", "Resilient", "Loyal", "Adaptable", "Courageous", "Disciplined", "Resourceful", "Tactical", "Dependable", "Focused", "Strong-Willed", "Honorable"],
      "fullDescription": "James Ramirez is the primary playable character for the American invasion storyline in Modern Warfare 2. He is tasked with defending the country from a Russian invasion, taking part in a number of intense urban battles in iconic American cities.",
      "image": "https://i.redd.it/vxt6gml0wbu51.jpg",
      "icon": "Star"
    },
    {
      "id": 10,
      "name": "Makarov",
      "role": "Ultranaionalist Leader",
      "description": "The main antagonist of the Modern Warfare trilogy. A cunning and ruthless Russian ultranationalist and terrorist.",
      "traits": ["Terrorist", "Ruthless", "Mastermind", "Violent", "Manipulative", "Wicked" ],
      "fullDescription": "Vladimir Makarov is one of the most infamous antagonists in gaming history. He is a fanatical ultranationalist driven by a desire for global chaos. His actions are the catalyst for multiple wars, and he is directly responsible for some of the most shocking events in the series, making him the ultimate target for Task Force 141.",
      "image": "https://i.redd.it/2a6dub6j5ce61.png",
      "icon": "Crown"
    },
    {
      "id": 11,
      "name": "Nikolai",
      "role": "Russian Informant/Pilot",
      "description": "A trustworthy Russian informant and ally to the SAS and Task Force 141, often acting as a pilot and logistic expert.",
      "traits": ["Loyal Ally", "Skilled Pilot", "Intel Provider", ],
      "fullDescription": "Nikolai is a crucial ally throughout the Modern Warfare trilogy. He provides essential intelligence, transportation, and support to Price's team, often at great personal risk. His network of contacts and expertise in the Russian underworld make him an invaluable asset.",
      "image": "https://i.pinimg.com/736x/5f/52/81/5f52810d9a45d840d67acc4aa792edb6.jpg",
      "icon": "Truck"
    },
    {
      "id": 12,
      "name": "Kate Laswell",
      "role": "CIA Station Chief",
      "description": "A high-ranking CIA officer who acts as the primary liason between the CIA and Task Force 141 in the 2019 Modern Warfare reboot.",
      "traits": ["Strategic", "Intelligence", "Pragmatic", "Calm Under Pressure", "Resourceful", "Diplomatic", "Loyal", "Strong-Willed", "Honorable"],
      "fullDescription": "Kate Laswell is a key intelligence figure in the war on terror. She is responsible for briefing the team, analyzing threats, and coordinating with international partners. She maintains a level-headed demeanor even in the most chaotic situations, providing critical guidance from behind the scenes.",
      "image": "https://i.redd.it/eity4469xdj91.jpg",
      "icon": "User"
    },
    {
      "id": 13,
      "name": "Farah Karim",
      "role": "Urzikstani Freedom Fighter / Commander",
      "description": "Leader of the Urzikstani Liberation Force and a determined freedom fighter against Russian occupation.",
      "traits": ["Leadership", "Resilient", "Strategic", "Courageous", "Determined", "Inspirational", "Tactical", "Resourceful", "Loyal", "Strong-Willed", "Honorable"],
      "fullDescription": "Farah is a fierce and capable leader who has been fighting for her country since she was a child. Her personal history and dedication to liberating Urzikstan are central to the story of the Modern Warfare reboot. She is a master tactician and an expert in guerrilla warfare.",
      "image": "https://i.pinimg.com/736x/31/56/4c/31564cb4d3939b9331705a3513621c2b.jpg",
      "icon": "Shield"
    },
    {
      "id": 14,
      "name": "Alex",
      "role": "CIA SAD Officer",
      "description": "A field operative for the CIA Special Activities Division, working closely with Farah and her forces.",
      "traits": ["Undercover", "Special Ops", "Loyal"],
      "fullDescription": "Alex is a highly trained operative who is sent to Urzikstan to aid Farah in her fight against a global threat. He is a pragmatic and resourceful soldier who forms a strong bond with Farah and her cause. His dedication leads him to make great sacrifices to protect his allies and complete the mission.",
      "image": "https://preview.redd.it/v70r8dqn4vt61.jpg?width=640&crop=smart&auto=webp&s=152a1ce4e1dec2b70f99e932f701218174904cdc",
      "icon": "Star"
    },
    {
      "id": 15,
      "name": "Phillip Graves",
      "role": "Commander, Shadow Company",
      "description": "The enigmatic commander of the private military company, Shadow Company. He is a pragmatic leader with a hidden agenda.",
      "traits": ["Ruthless", "Ambitious", "Strategic", "Cunning", "Resourceful", "Manipulative", "Tactical", "Decisive", "Loyal", "Strong-Willed", "Honorable"],
      "fullDescription": "Graves presents himself as an ally to Task Force 141 in their hunt for a new threat. However, his true intentions are revealed, putting him in direct conflict with his former allies. His military expertise and powerful resources make him a formidable adversary.",
      "image": "https://preview.redd.it/mw2-what-do-you-guys-think-about-the-fan-theory-that-graves-v0-6wtdysqy5kbd1.jpg?width=640&crop=smart&auto=webp&s=74d0c08b3358ff84424dccaf5dfb094308272718",
      "icon": "Target"
    },
    {
      "id": 16,
      "name": "Paul Jackson",
      "role": "U.S. Marine Sergeant",
      "description": "A U.S. Marine fighting in the Middle East during the initial conflict against Khaled Al-Asad.",
      "traits": ["Courageous", "Disciplined", "Patriotic"],
      "fullDescription": "Jackson is a playable character in Modern Warfare (2007) and serves as the eyes of the U.S. Marine Corps campaign. He and his squad are sent to an unnamed Middle Eastern country to hunt down the terrorist leader Al-Asad. His story highlights the intense and dangerous nature of urban warfare.",
      "image": "https://assets.mycast.io/posters/call-of-duty-modern-warfare-2007-fan-casting-poster-295028-large.jpg?1677795961",
      "icon": "Shield"
    },
    {
      "id": 17,
      "name": "Vasquez",
      "role": "U.S. Marine lt",
      "description": "The commanding officer of Paul Jackson's squad, a no-nonsense and dedicated Marine leader.",
      "traits": ["Leadership", "Strict", "Experienced"],
      "fullDescription": "Captain Vasquez is a veteran Marine who leads his troops through the treacherous urban environments of the Middle East. He is a direct and efficient commander focused on completing his mission and protecting his soldiers.",
      "image": "https://i.ytimg.com/vi/-l_xemuuHMI/oardefault.jpg?sqp=-oaymwEYCJUDENAFSFqQAgHyq4qpAwcIARUAAIhC&rs=AOn4CLDKVmXCBhrCKxvlxfSmhAxdSlcAfA",
      "icon": "Star"
    },
    {
      "id": 18,
      "name": "Kamarov",
      "role": "Russian Loyalist Officer",
      "description": "A Russian loyalist officer who initially works with the SAS and later assists Price in the fight against ultranationalists.",
      "traits": ["Resourceful", "Loyal", "Veteran"],
      "fullDescription": "Sergeant Kamarov serves as an important point of contact and an ally for Captain Price's team in Russia. He and his men provide ground support and intelligence during key missions, highlighting the alliance between different factions against a common enemy.",
      "image": "https://www.giantbomb.com/a/uploads/scale_medium/8/80630/1664143-kamarov_1111_wiki.jpg",
      "icon": "Heart"
    },
    {
      "id": 19,
      "name": "Khaled Al-Asad",
      "role": "Middle Eastern Insurgent",
      "description": "A ruthless terrorist leader and a primary antagonist in the first Modern Warfare game.",
      "traits": ["Terrorist", "Deceptive", "Ruthless"],
      "fullDescription": "Khaled Al-Asad is a key figure in the terrorist organization allied with Imran Zakhaev. His actions, including the public execution of an innocent president, ignite a conflict that draws the U.S. and its allies into a global war.",
      "image": "https://preview.redd.it/cod4-did-you-feel-sorry-for-khaled-al-asad-v0-1r96bglvzb3f1.jpeg?auto=webp&s=1f975e104213f6b72cb1ccb7f22e8a6d85fe6ef6",
      "icon": "Crown"
    },
    {
      "id": 20,
      "name": "Griggs",
      "role": "U.S. Marine Sergeant",
      "description": "A member of Paul Jackson's squad and a key ally to Price's team. Known for his humor and bravery.",
      "traits": ["Brave", "Loyal", "Experienced"],
      "fullDescription": "Sergeant Griggs is a highly capable Marine who survives the initial invasion and becomes an invaluable asset to Captain Price. He provides assistance and comic relief in tense situations, often fighting alongside the player in critical missions.",
      "image": "https://i.imgur.com/7HdXkR3.jpg",
      "icon": "Users"
    },
    {
      "id": 21,
      "name": "Imran Zahkaev",
      "role": "Russian Ultranationalist",
      "description": "The fanatical founder of the Russian ultranationalist party, and the main antagonist in the first Modern Warfare game.",
      "traits": ["Fanatical", "Terrorist", "Vengeful"],
      "fullDescription": "Zahkaev is a central figure in the original Modern Warfare's plot. His actions, including providing the nuclear detonator to Al-Asad, lead to a massive conflict. He is a master manipulator who orchestrates a global crisis from the shadows, fueled by a desire for a powerful, restored Russia.",
      "image": "https://preview.redd.it/cod-if-any-call-of-duty-villain-had-wasted-potential-its-v0-akz46ptc4rzd1.jpeg?auto=webp&s=9deb39cddf163e28849acc6ca7376dbce46306ee",
      "icon": "Crown"
    },
    {
      "id": 22,
      "name": "Victor Zakhaev",
      "role": "Russian Ultranationalist",
      "description": "The son of Imran Zakhaev and a key lieutenant in his father's ultranationalist organization.",
      "traits": ["Loyal", "Brutal", "Zealous"],
      "fullDescription": "Victor Zakhaev plays a pivotal role in the plot of Modern Warfare. While serving as one of his father's key lieutenants, he is cornered by Task Force 141 in a Russian safehouse. His capture and subsequent suicide by a grenade are a major turning point in the game, as his death fuels his father's final, vengeful attack against the West. Victor's death demonstrates the fanatical dedication of the Zakhaev family to their cause.",
      "image": "https://img.thenerdstash.com/wp-content/uploads/2023/09/Victor-Zakhaev-Warzone.jpg",
      "icon": "Crown"
    },
    {
      "id": 22,
      "name": "MacMillan",
      "role": "SAS Captain",
      "description": "Experienced SAS captain and Price's former mentor, known for his sniper expertise and tactical knowledge.",
      "traits": ["Sniper Expert", "Mentor Figure", "Tactical Wisdom"],
      "fullDescription": "Captain MacMillan is a living legend in the SAS. He serves as Captain Price's mentor during a harrowing mission to assassinate Imran Zahkaev in the past. Despite being injured, he displays incredible resilience and strategic cunning, becoming a key figure in Price's development as a leader.",
      "image": "https://i.namu.wiki/i/LOz_mvnX1KSJRBMKOFkNjlCit6g72eqDGe-d9ylzLYUzM6qSruUPOIToVHWsm1WsSSwROqN59KMFv0qpgo6MAQ.webp",
      "icon": "Target"
    },
    {
      "id": 23,
      "name": "Alejandro Vargas",
      "role": "Mexican Special Forces Colonel",
      "description": "A charismatic and highly skilled officer of the Mexican Special Forces, working closely with Task Force 141.",
      "traits": ["Leadership", "Skilled", "Protective"],
      "fullDescription": "Colonel Vargas leads the 'Los Vaqueros' team and is a primary ally to Ghost and Soap in Modern Warfare II (2022). His intimate knowledge of the region and his tactical expertise are invaluable in the fight against a drug cartel and a major terrorist threat. He is a fiercely loyal and protective leader.",
      "image": "https://i.ytimg.com/vi/RSRRYrCYTXg/maxresdefault.jpg",
      "icon": "Shield"
    },
    {
      "id": 24,
      "name": "Rodolfo 'Rudy' Parra",
      "role": "Mexican Special Forces Sergeant",
      "description": "Alejandro Vargas's second-in-command and a vital member of the Los Vaqueros team.",
      "traits": ["Supportive", "Loyal", "Stealthy"],
      "fullDescription": "Sergeant Rudy Parra is a loyal and capable second-in-command to Colonel Vargas. He provides crucial support to both Los Vaqueros and Task Force 141, often assisting with reconnaissance and flanking maneuvers. His unwavering dedication makes him a trustworthy ally.",
      "image": "https://i.pinimg.com/564x/4c/66/ae/4c66aee10282f2b1b988a2df115f2339.jpg",
      "icon": "Users"
    },
    {
      "id": 25,
      "name": "Frost",
      "role": "Delta Force Operator",
      "description": "A skilled Delta Force operative and the main playable character in the Delta Force campaign in Modern Warfare 3.",
      "traits": ["Precision", "Stealth", "Endurance"],
      "fullDescription": "Sgt. First Class Derek 'Frost' Westbrook is a member of Delta Force's Team Metal, a key component in the fight against the Russian invasion. He is highly proficient in both covert and direct action, often leading the charge in some of the game's most pivotal battles, from New York to Paris.",
      "image": "https://i.pinimg.com/736x/7f/d0/e7/7fd0e78a31213faadfee563c0b75f2a0.jpg",
      "icon": "Crosshair"
    },
    {
      "id": 26,
      "name": "Sandman",
      "role": "Delta Force Team Leader",
      "description": "The leader of Delta Force's elite Team Metal, and a key ally to Price and Soap in Modern Warfare 3.",
      "traits": ["Leadership", "Tactical", "Special Ops"],
      "fullDescription": "Master Sergeant Sandman is a respected and highly capable leader. He commands Team Metal with authority and precision, working in tandem with Task Force 141 to stop the escalating global conflict. His team's expertise in urban warfare is crucial to the success of the allied forces.",
      "image": "https://i.pinimg.com/474x/bc/ff/d5/bcffd53a2ea30a95d5a13b35c483afa8.jpg",
      "icon": "Shield"
    },
    {
      "id": 27,
      "name": "Grinch",
      "role": "Delta Force Operator",
      "description": "A member of Delta Force's Team Metal, known for his calm and collected demeanor in combat.",
      "traits": ["Steady Hand", "Marksman", "Supportive"],
      "fullDescription": "Sgt. First Class Marcus 'Grinch' Burns is a key member of Sandman's team. He provides crucial overwatch and fire support during a variety of missions, from the assault on Hamburg to the defense of Paris. His calm under pressure makes him an invaluable part of the squad.",
      "image": "https://i.pinimg.com/736x/e5/dd/e4/e5dde4bd38e42471aa197b0b78ba5dea.jpg",
      "icon": "Target"
    },
    {
      "id": 28,
      "name": "Truck",
      "role": "Delta Force Operator",
      "description": "A heavy-duty Delta Force operator known for his strength and direct approach to combat.",
      "traits": ["Heavy Hitter", "Resilient", "Frontline Fighter"],
      "fullDescription": "Sgt. First Class Truck is the third member of Team Metal, often leading the assault with heavy weaponry. His rugged build and direct approach make him a formidable force in any engagement. He is a reliable teammate and is always ready for a direct fight.",
      "image": "https://i.redd.it/seen-no-posts-about-them-so-just-random-pictures-of-grinch-v0-6ptvdfaix44d1.jpg?width=567&format=pjpg&auto=webp&s=c6248f5009173d1397b0b5671c46ae472ae46703",
      "icon": "Truck"
    },
    {
      "id": 23,
      "name": "General Shepherd",
      "role": "US Army General / Antagonist",
      "description": "A highly ambitious and manipulative military leader who orchestrates a global conflict for his own vengeful agenda.",
      "traits": ["Ambitious", "Manipulative", "Vengeful", "Ruthless", "Cunning", "Strategic", "Deceptive", "Power-Hungry", "Calculating", "Cold", "Determined", "Strong-Willed", "Authoritative", "Commanding", "Patriotic"],
      "fullDescription": "General Shepherd is the commander of the U.S. Army Rangers and the founder of the elite Task Force 141. Haunted by the loss of 30,000 of his men to a nuclear blast, he becomes obsessed with vengeance. He betrays his own forces, killing fan-favorites Ghost and Roach, to frame Makarov and incite a global war, believing that a manufactured conflict is the only way to restore America's former glory and secure his legacy. His famous quote, 'The more things change, the more they stay the same,' encapsulates his cynical view of history and conflict.",
      "game": "Call of Duty: Modern Warfare 2",
      "image": "https://i.pinimg.com/736x/1d/14/b6/1d14b6f2c6db5b94ab222356325bfd3b.jpg",
      "icon": "Crown"
    },
      ],
      weapons: [
        {
            id: 1,
            name: "M4A1",
            type: "Assault Rifle",
            description: "A highly versatile and reliable automatic rifle. Excellent all-around performance.",
            ammo: "5.56x45mm NATO",
            image: "https://preview.redd.it/3rqz35bnd0m51.jpg?width=1080&crop=smart&auto=webp&s=51edf34a193a4911a5d354bcaf033bc882fcb019",
            ratings: { damage: 3, accuracy: 4, range: 4, fireRate: 4, mobility: 4 }
        },
        {
            id: 2,
            name: "Kilo 141",
            type: "Assault Rifle",
            description: "Fully automatic assault rifle with an ergonomic design that improves handling and maintains a steady fire rate.",
            ammo: "5.56x45mm NATO",
            image: "https://www.charlieintel.com/cdn-image/wp-content/uploads/2024/01/23/kilo-141-mcw-warzone-assault-rifle.jpg?width=1200&quality=60&format=auto",
            ratings: { damage: 3, accuracy: 4, range: 4, fireRate: 4, mobility: 3 }
        },
        {
        id: 7.5, 
        name: "M13",
        type: "Assault Rifle",
        description: "A fully automatic rifle with a very high rate of fire and exceptionally low recoil, making it highly effective at medium range.",
        ammo: "5.56x45mm NATO",
        image: "https://i.redd.it/i-made-kyle-gaz-garrick-m13-rifle-mcx-rattler-from-the-v0-kdnxuo9wbb3a1.png?width=1920&format=png&auto=webp&s=5a634d86d267dcf6fe531ccb0f47821c25a9682a", 
        ratings: { damage: 3, accuracy: 5, range: 3, fireRate: 5, mobility: 4 }
        },
        {
            id: 3,
            name: "SCAR-L",
            type: "Assault Rifle",
            description: "A modular, heavy-hitting assault rifle. Slower fire rate balanced by high damage and stable recoil.",
            ammo: "7.62x51mm NATO",
            image: "https://img.gamewith.net/article_tools/cod-modernwarfare/gacha/12631.png",
            ratings: { damage: 4, accuracy: 3, range: 4, fireRate: 3, mobility: 3 }
        },
        {
            id: 4,
            name: "Grau 5.56",
            type: "Assault Rifle",
            description: "Lightweight and maneuverable 5.56 platform with exceptional range and very manageable recoil.",
            ammo: "5.56x45mm NATO",
            image: "https://cdn-cf.ginx.tv/imgcdn/H_JDasTP8WSRSIVAgDBi3Ot5Mmydalf0eHX9nAzZOLo/rs:fill:720:0:1/g:ce/aHR0cHM6Ly93d3cuZ2lueC50di91cGxvYWRzMi9XYXJ6b25lL2dyYXVfNS41NV8xLmpwZw",
            ratings: { damage: 3, accuracy: 4, range: 4, fireRate: 4, mobility: 4 }
        },
        {
            id: 5,
            name: "FAL",
            type: "Battle Rifle",
            description: "A semi-automatic battle rifle. High damage output requiring high precision and quick trigger finger.",
            ammo: "7.62x51mm NATO",
            image: "https://img.gamewith.net/article_tools/cod-modernwarfare/gacha/12629.png",
            ratings: { damage: 4, accuracy: 4, range: 4, fireRate: 2, mobility: 3 }
        },
        {
            id: 6,
            name: "Oden",
            type: "Assault Rifle",
            description: "Bullpup assault rifle firing hard-hitting 12.7mm ammunition. Slow rate of fire but massive damage.",
            ammo: "12.7x55mm",
            image: "https://static0.srcdn.com/wordpress/wp-content/uploads/2021/06/Warzone-Oden.webp-.jpg?w=1600&h=1200&fit=crop",
            ratings: { damage: 5, accuracy: 3, range: 4, fireRate: 2, mobility: 2 }
        },
        {
            id: 7,
            name: "FR 5.56",
            type: "Assault Rifle",
            description: "A 3-round burst bullpup rifle. A precise burst is extremely deadly at intermittent ranges.",
            ammo: "5.56x45mm NATO",
            image: "https://static0.thegamerimages.com/wordpress/wp-content/uploads/2023/11/modern-warfare-3-fr-5-56-general-use-build-preview.jpg?w=1600&h=900&fit=crop",
            ratings: { damage: 3, accuracy: 4, range: 3, fireRate: 4, mobility: 3 }
        },
        {
            id: 9,
            name: "AUG",
            type: "Submachine Gun",
            description: "A modular SMG platform that offers conversion to a burst-fire rifle for improved range.",
            ammo: "9mm Parabellum",
            image: "https://www.pcgamesn.com/wp-content/sites/pcgamesn/2021/09/call-of-duty-warzone-best-aug-warzone-setup-clean.jpg",
            ratings: { damage: 3, accuracy: 3, range: 3, fireRate: 4, mobility: 4 }
        },
        {
            id: 29,
            name: "AK-47",
            type: "Assault Rifle",
            description: "A large-caliber, powerful automatic rifle known for its immense stopping power.",
            ammo: "7.62x39mm Soviet",
            image: "https://images.steamusercontent.com/ugc/2019331435743752145/BE1F88FD2BE573C1151DF7031E2A0B769CF6C67F/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true",
            ratings: { damage: 5, accuracy: 3, range: 4, fireRate: 3, mobility: 3 }
        },
        // --- SUBMACHINE GUNS (SMG) ---
        {
            id: 8,
            name: "MP5",
            type: "Submachine Gun",
            description: "Legendary 9mm SMG. Unmatched balance of stability, mobility, and close-quarters lethality.",
            ammo: "9mm Parabellum",
            image: "https://img.gamewith.net/article_tools/cod-modernwarfare/gacha/12634.png",
            ratings: { damage: 3, accuracy: 4, range: 2, fireRate: 4, mobility: 5 }
        },
        {
            id: 10,
            name: "P90",
            type: "Submachine Gun",
            description: "Bullpup SMG with a unique helical magazine providing high capacity and blazing fire rate.",
            ammo: "5.7x28mm FN",
            image: "https://www.gamerevolution.com/wp-content/uploads/sites/2/2020/03/Modern-Warfare-Best-P90-Setup.jpg",
            ratings: { damage: 2, accuracy: 3, range: 2, fireRate: 5, mobility: 5 }
        },
        {
            id: 11,
            name: "PP19 Bizon",
            type: "Submachine Gun",
            description: "A well-balanced SMG featuring a high capacity helical magazine for sustained fire.",
            ammo: "9x18mm Makarov",
            image: "https://images.steamusercontent.com/ugc/792003124795612560/C93F0A1E81EDA53DFACA3D973B68BF87AD1CFDC5/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true",
            ratings: { damage: 3, accuracy: 4, range: 3, fireRate: 3, mobility: 4 }
        },
        {
            id: 12,
            name: "UMP 45",
            type: "Submachine Gun",
            description: "A powerful, slow-firing SMG that uses .45 ACP rounds for superior close-range stopping power.",
            ammo: ".45 ACP",
            image: "https://images.steamusercontent.com/ugc/1690528250997592166/47E658ADD0763579F97C975277DD088AAAE22F8A/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true",
            ratings: { damage: 4, accuracy: 3, range: 2, fireRate: 2, mobility: 4 }
        },
        {
            id: 15, // Use the next sequential ID
            name: "Vector SMG",
            type: "Submachine Gun",
            description: "A futuristic SMG known for its unique Super V system, giving it the highest rate of fire and near-zero muzzle climb for close-quarters domination.",
            ammo: ".45 ACP / 9mm Parabellum", // Common calibers
            image: "https://images.steamusercontent.com/ugc/1822292359479186970/631193976F49EA29CF9A60518CC274FBB6453404/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true",
            ratings: { damage: 3, accuracy: 5, range: 2, fireRate: 5, mobility: 5 }
        },
        
        // --- MARKSMAN RIFLES (MR) & BATTLE RIFLES ---
         {
            id: 10,
            name: "Tempus Torrent",
            type: "Marksman Rifle",
            description: "A high-velocity battle rifle known for a fast time-to-kill (TTK) but demanding trigger discipline.",
            ammo: "7.62x51mm",
            image: "https://mitchcactus.co/wp-content/uploads/2024/12/Black-Ops-6-weapons.webp", 
            ratings: { damage: 4, accuracy: 3, range: 4, fireRate: 4, mobility: 3 }
        },
        {
            id: 13,
            name: "EBR-14",
            type: "Marksman Rifle",
            description: "A semi-automatic battle rifle (M14 EBR) capable of rapid follow-up shots at long range.",
            ammo: "7.62x51mm NATO",
            image: "https://images.steamusercontent.com/ugc/1011563111882216146/50C03215D7914A02C7D38F554AC04EF5EEBD16F8/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true",
            ratings: { damage: 4, accuracy: 4, range: 5, fireRate: 3, mobility: 2 }
        },
        {
            id: 14,
            name: "MK2 Carbine",
            type: "Marksman Rifle",
            description: "A highly accurate lever-action rifle. Will neutralize an enemy with one well-placed shot to the chest.",
            ammo: "9x39mm subsonic", // Common CODWW setting for high damage
            image: "https://cdna.artstation.com/p/assets/images/images/026/129/974/large/ben-garnell-sbeta-04.jpg?1587969420",
            ratings: { damage: 5, accuracy: 4, range: 4, fireRate: 1, mobility: 4 }
        },
        {
            id: 15,
            name: "Kar98k",
            type: "Marksman Rifle",
            description: "A classic bolt-action rifle. Unmatched handling speed for a high-powered, one-shot weapon.",
            ammo: "7.92x57mm Mauser",
            image: "https://images.steamusercontent.com/ugc/1646587525748948886/EF13DB0D6FF5930CA3FA73C232B1317593253DEF/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true",
            ratings: { damage: 5, accuracy: 5, range: 5, fireRate: 1, mobility: 3 }
        },
        {
            id: 8,
            name: "SP-R 208",
            type: "Marksman Rifle",
            description: "A high-accuracy bolt-action rifle designed for long-range, one-shot kills. Reloads slowly between shots.",
            ammo: ".300 Win Mag",
            image: "https://images.steamusercontent.com/ugc/1843685635108739035/B6951924CECDB1DD37BAE69D91271B23561B21E2/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true", 
            ratings: { damage: 5, accuracy: 4, range: 5, fireRate: 2, mobility: 3 }
        },
        {
            id: 9,
            name: "SKS",
            type: "Marksman Rifle",
            description: "A hard-hitting, semi-automatic carbine that balances damage with a manageable rate of fire.",
            ammo: "7.62x39mm",
            image: "https://assetsio.gnwcdn.com/best-sks-marksman-rifle-loadout-warzone-attachments-call-duty.jpg?width=1200&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp", 
            ratings: { damage: 4, accuracy: 4, range: 4, fireRate: 3, mobility: 4 }
        },
        // --- SNIPER RIFLES (SR) ---
        {
            id: 16,
            name: "Dragunov",
            type: "Sniper Rifle",
            description: "A gas-operated, semi-automatic sniper rifle allowing for rapid follow-up shots at range.",
            ammo: "7.62x54mmR",
            image: "https://images.steamusercontent.com/ugc/2313223699834352083/B984FB20232130AC78AB19E8D84FEC164C1BC1CD/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true",
            ratings: { damage: 4, accuracy: 5, range: 5, fireRate: 2, mobility: 2 }
        },
        {
            id: 17,
            name: "Barrett .50 Cal",
            type: "Sniper Rifle",
            description: "A semi-automatic anti-material rifle. Unrivaled damage and extreme long-range capability.",
            ammo: ".50 BMG (12.7x99mm)",
            image: "https://images.steamusercontent.com/ugc/2055382280785742423/F28F1971B8A66814D4861554EB9BCAE9717B4C18/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true",
            ratings: { damage: 5, accuracy: 5, range: 5, fireRate: 1, mobility: 1 }
        },

        // --- LIGHT MACHINE GUNS (LMG) ---
        {
            id: 18,
            name: "PKM",
            type: "Light Machine Gun",
            description: "A large-caliber machine gun offering sustained, high-damage fire with massive capacity.",
            ammo: "7.62x54mmR",
            image: "https://images.steamusercontent.com/ugc/1865053375990995203/8270A1C04EFAF392DB3461A6C873612E3C694A15/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true",
            ratings: { damage: 4, accuracy: 3, range: 4, fireRate: 4, mobility: 1 }
        },
        {
            id: 19,
            name: "SA87",
            type: "Light Machine Gun",
            description: "A bullpup LMG with a slow, steady fire rate that is effective at medium-to-long range.",
            ammo: "5.56x45mm NATO",
            image: "https://assetsio.gnwcdn.com/sa87-loadout-warzone-best-call-of-duty-attachments.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp",
            ratings: { damage: 3, accuracy: 4, range: 4, fireRate: 3, mobility: 2 }
        },
        {
            id: 20,
            name: "MG34",
            type: "Light Machine Gun",
            description: "A vintage, high fire rate LMG. Highly effective for area suppression and defense.",
            ammo: "7.92x57mm Mauser",
            image: "https://www.pcgamesn.com/wp-content/sites/pcgamesn/2022/06/call-of-duty-warzone-best-ugm-loadout.jpg", 
            ratings: { damage: 4, accuracy: 2, range: 3, fireRate: 5, mobility: 1 }
        },
        
        // --- SHOTGUNS (SG) ---
        {
            id: 21,
            name: "Model 680",
            type: "Shotgun",
            description: "A reliable, well-rounded 12 gauge pump-action shotgun. High damage, low rate of fire.",
            ammo: "12 Gauge Shells",
            image: "https://images.steamusercontent.com/ugc/1002556983889248334/D2A1A3FB4E3A537AC57393090F0A8C66CB8D92A1/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true",
            ratings: { damage: 5, accuracy: 2, range: 1, fireRate: 1, mobility: 3 }
        },
        {
            id: 22,
            name: "Origin 12 Shotgun",
            type: "Shotgun",
            description: "A semi-automatic shotgun with a large ammo capacity that allows for continuous, rapid firing.",
            ammo: "12 Gauge Shells",
            image: "https://images.steamusercontent.com/ugc/1831298289891590204/36D820BCA8BFE76B487CA21CFE965085CF50BE75/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true",
            ratings: { damage: 4, accuracy: 1, range: 1, fireRate: 4, mobility: 4 }
        },
        {
            id: 11,
            name: "M1014",
            type: "Shotgun",
            description: "A semi-automatic shotgun prized for its blend of high stopping power and a quick firing follow-up shot.",
            ammo: "12 Gauge",
            image: "https://images.steamusercontent.com/ugc/1754735193903902211/6B9582987F3ED62A2F8E9E1AA008ACA2FFFEA064/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true", 
            ratings: { damage: 5, accuracy: 2, range: 2, fireRate: 4, mobility: 3 }
        },
        {
            id: 12,
            name: "SPAS-12",
            type: "Shotgun",
            description: "A classic pump-action shotgun with devastating close-quarters damage but a slow rate of fire.",
            ammo: "12 Gauge",
            image: "https://images.steamusercontent.com/ugc/1933750742388893441/D8B463597B61D366A57CCFCEEF0AADE45005827F/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true", 
            ratings: { damage: 5, accuracy: 3, range: 2, fireRate: 1, mobility: 3 }
        },
        {
            id: 13,
            name: "Model 1887",
            type: "Shotgun",
            description: "A highly iconic lever-action shotgun with exceptional range for its class, but a very slow cycle time.",
            ammo: "12 Gauge",
            image: "https://images.steamusercontent.com/ugc/2071134789247572190/4F381B34D5FD96256C283204C777952BF4DBCB7C/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true", 
            ratings: { damage: 4, accuracy: 3, range: 3, fireRate: 1, mobility: 3 }
        },

        // --- HANDGUNS (HG) ---
        {
            id: 23,
            name: "Desert Eagle",
            type: "Handgun",
            description: "A massive caliber semi-automatic pistol. Two-shot kill potential but high recoil.",
            ammo: ".50 Action Express",
            image: "https://images.steamusercontent.com/ugc/1645462021478215753/6362559703DCACE9EC2A125DF5B837BE51A56DEF/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true", 
            ratings: { damage: 5, accuracy: 3, range: 1, fireRate: 1, mobility: 3 }
        },
        {
            id: 24,
            name: "1911",
            type: "Handgun",
            description: "A well-rounded, classic semi-automatic sidearm chambered in .45 ACP.",
            ammo: ".45 ACP",
            image: "https://images.steamusercontent.com/ugc/912421707947412286/6A1893646911FA73D2235E244A3FFE756CC4A8AD/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true", 
            ratings: { damage: 3, accuracy: 3, range: 1, fireRate: 3, mobility: 5 }
        },
        {
            id: 25,
            name: "M19",
            type: "Handgun",
            description: "A semi-automatic 9mm pistol with excellent stability and a rapid cycle rate.",
            ammo: "9mm Parabellum",
            image: "https://images.steamusercontent.com/ugc/1662358552795722725/28DA8792A133CE370A761E91094CA37D0CE9248A/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true", 
            ratings: { damage: 2, accuracy: 4, range: 1, fireRate: 4, mobility: 5 }
        },
        {
            id: 26,
            name: ".357 Revolver",
            type: "Handgun",
            description: "A heavy-caliber revolver. High damage with a slow rate of fire and high recoil.",
            ammo: ".357 Magnum",
            image: "https://images.steamusercontent.com/ugc/1479949244945139407/AE9EB419DCD60583790CCE21243D298896905349/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true", 
            ratings: { damage: 4, accuracy: 3, range: 2, fireRate: 1, mobility: 2 }
        },
        {
            id: 14,
            name: "USP .45",
            type: "Pistol",
            description: "A reliable, hard-hitting sidearm that uses a large caliber round for high damage per shot.",
            ammo: ".45 ACP",
            image: "https://images.steamusercontent.com/ugc/842589945089423411/07B3ECD49271E5888483F10B65CFE5F5E5752B1D/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false", 
            ratings: { damage: 3, accuracy: 4, range: 2, fireRate: 3, mobility: 4 }
        },
        
        // --- LAUNCHERS ---
        {
            id: 27,
            name: "RPG-7",
            type: "Launcher",
            description: "A portable, shoulder-fired rocket launcher. Highly effective against infantry and vehicles.",
            ammo: "85mm HEAT Warhead",
            image: "https://img.gamewith.net/article/thumbnail/rectangle/42364.png", 
            ratings: { damage: 5, accuracy: 1, range: 3, fireRate: 1, mobility: 1 }
        },
        {
            id: 28,
            name: "Javelin",
            type: "Launcher",
            description: "A fire-and-forget guided missile launcher. Excellent against armored targets from any range.",
            ammo: "Tandem-Charge HEAT Missile",
            image: "https://i.imgur.com/CEfg2Yx.png", 
            ratings: { damage: 5, accuracy: 5, range: 5, fireRate: 1, mobility: 1 }
        },
        {
            id: 16,
            name: "MGL-32",
            type: "Grenade Launcher",
            description: "A six-shot, rotary-fed grenade launcher. Delivers massive saturation fire at medium ranges, ideal for area denial and clearing entrenched enemies.",
            ammo: "40mm Grenade",
            image: "https://images.steamusercontent.com/ugc/854978386862807538/53D0CA84EA2F1D7E49A6D79A822C2464F91C407D/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true",
            ratings: { damage: 4, accuracy: 2, range: 3, fireRate: 4, mobility: 2 }
        },
        {
            id: 18,
            name: "Stinger",
            type: "Surface-to-Air Missile",
            description: "A heat-seeking missile system specialized in taking down aerial threats. Features a quick lock-on for reliable air defense.",
            ammo: "FIM-92 Missile",
            image: "https://i.imgur.com/R81zQZI.png",
            ratings: { damage: 4, accuracy: 5, range: 5, fireRate: 2, mobility: 2 }
        },
        {
            id: 19,
            name: "XM25 ",
            type: "Airburst Launcher",
            description: "Fires smart 25mm airburst rounds. Can be set to detonate over cover, eliminating enemies that traditional direct-fire weapons cannot reach.",
            ammo: "25mm Airburst Round",
            image: "https://images.steamusercontent.com/ugc/2035110269104834530/2045D35E64F9703EC96F1324DE36492F32FC7232/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
            ratings: { damage: 3, accuracy: 4, range: 3, fireRate: 3, mobility: 3 }
        },
        {
            id: 21,
            name: "SMAW",
            type: "Rocket Launcher",
            description: "A reusable anti-armor and anti-fortification rocket launcher. Features a devastating direct-fire projectile with high velocity.",
            ammo: "83mm HEDP Rocket",
            image: "https://images.steamusercontent.com/ugc/18335865765606510565/F469E974B1EB1F5DA2D0E62C51144F77C0B621AE/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true",
            ratings: { damage: 5, accuracy: 3, range: 4, fireRate: 1, mobility: 3 }
        }
        ],
      groups: [
        {
            id: 1,
            name: "Task Force 141",
            type: "Special Operations Unit (Multi-national)",
            description: "An elite, multi-national counter-terrorism and direct action unit, originally assembled to counter the threat posed by the Russian Ultranationalist Imran Zakhaev and later his protégé, Vladimir Makarov. Known for conducting high-profile, high-risk operations across the globe, the unit draws its operatives from several nations:\n\nUnited Kingdom (SAS / Special Air Service) – Captain John Price, Kyle “Gaz” Garrick, and others.\n\nUnited States (Army Rangers, Delta Force, CIA SAC, USMC) – American operatives including Ghost and Alex (CIA).\n\nScotland (SAS) – John “Soap” MacTavish himself, representing the Scottish contingent of the UK forces.\n\nCanada (JTF2 – Joint Task Force 2) – Simon “Ghost” Riley has Canadian lore links in some continuities, while reboot lore leans UK/US, but Task Force 141 often recruits JTF2 operators.\n\nMexico (Los Vaqueros – Special Forces) – Colonel Alejandro Vargas and his men in the reboot timeline.\n\nOther NATO Allies (various special mission units) – occasionally contributing specialists depending on the operation.",
            specs: [
                "Multi-national personnel (UK, US, Scotland, Canada, Mexico, NATO allies)",
                "Direct Action",
                "Counter-terrorism",
                "Protagonist Faction"
            ],
            image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/be46b9c0-33a5-4084-a20e-94abbaab306b/d2dogl2-8781e32c-a4d1-4892-a4fb-792db704eaaa.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi9iZTQ2YjljMC0zM2E1LTQwODQtYTIwZS05NGFiYmFhYjMwNmIvZDJkb2dsMi04NzgxZTMyYy1hNGQxLTQ4OTItYTRmYi03OTJkYjcwNGVhYWEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.hndZDILcwoY4JjseDiTLXrGKPJeSvBEQSeQrmEWBk_Q",
            icon: "Crosshair"
            },
        {
            id: 2,
            name: "SAS - Special Air service",
            type: "Tier 1 Special Forces (United Kingdom)",
            description: "The United Kingdom's premier special forces unit, specializing in counter-terrorism, hostage rescue, and covert reconnaissance. Captain Price and Gaz are notable members of the SAS. They frequently serve as a foundational element of the Coalition and Task Force 141 in both the original and reboot series, known for their discipline and effectiveness in global operations.",
            specs: ["'Who Dares Wins'", "Counter-terrorism", "Intelligence Gathering", "Direct Action", "resilient", "physcially and mentally tough"],
            image: "https://images.steamusercontent.com/ugc/1754686618779569038/158591B6DAE6E46E0306E4ACFDC7513511043417/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true", 
            icon: "Shield"
        },
        {
            id: 3,
            name: "USMC - United States Marine Corps",
            type: "Military Expeditionary Force (United States)",
            description: "The sea-based land warfare service branch of the U.S. Armed Forces. The USMC is often deployed as a rapid-response force in conflict zones. In the original series, they are heavily featured in the initial U.S. invasion following the Russian invasion of the East Coast. They represent a major element of conventional military power supporting the Coalition.",
            specs: ["Amphibious Warfare", "Expeditionary Operations", "Rapid Response", "Conventional Military"],
            image: "https://preview.redd.it/dqmvxectwsr41.jpg?width=640&crop=smart&auto=webp&s=e170ac855664a58d07ef25a94331dfa9cabbbcd1", 
            icon: "Anchor"
        },
        {
            id: 4,
            name: "US Army Rangers",
            type: "Light Infantry Special Operations (United States)",
            description: "An elite light infantry unit of the U.S. Army Special Operations Command. They played a crucial role in defending the U.S. homeland from the Russian invasion in *Modern Warfare 2 (2009)*, often fighting alongside conventional U.S. Army units. They are highly trained for direct action raids and air assault operations.",
            specs: ["Air Assault", "Direct Action Raids", "Infiltration", "Special Operations"],
            image: "https://i.ytimg.com/vi/w1_k9fOstA4/maxresdefault.jpg", 
            icon: "Star"
        },
    {
            id: 6,
            name: "Delta Force",
            type: "Tier 1 Special Forces (United States)",
            description: "Officially the 1st Special Forces Operational Detachment-Delta (1st SFOD-D), this is the U.S. Army's top-tier counter-terrorism and special mission unit. They were prominently featured in *Modern Warfare 3 (2011)*, playing a significant role in the ongoing conflict against the Russian Ultranationalists on American soil and globally.",
            specs: ["Counter-terrorism", "Hostage Rescue", "Direct Action", "Special Reconnaissance", "Elite", ],
            image: "https://i.ytimg.com/vi/a72f7mHIpMI/maxresdefault.jpg", 
            icon: "Lightning"
        },
        {
            id: 18,
            name: "Navy SEALs (United States)",
            type: "Tier 1 Special Forces (United States)",
            description: "The United States Navy's principal special operations force, specializing in maritime, jungle, urban, and cold-weather warfare (Sea, Air, and Land). They made prominent appearances in the original *Modern Warfare 2 (2009)* during the mission 'The Only Easy Day... Was Yesterday,' where they assaulted an oil rig to rescuing a high-value prisoner. They also supported Delta Force operations in *Modern Warfare 3 (2011)*, notably in the attack on the Russian submarine.",
            specs: ["Maritime Operations", "Direct Action", "Counter-terrorism", "Underwater Demolition", "Special Reconnaissance", "Hostage Rescue", "Tier 1 Special Forces", ],
            image: "https://images.steamusercontent.com/ugc/404558073169933902/9356B1AE2F3A1A66E044AF7198CD554DD50F55A0/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true", 
            icon: "Trident"
        },
        {
            id: 5,
            name: "CIA / SAC - Special Activities Center",
            type: "Covert Paramilitary Operations (United States)",
            description: "The SAC is the arm of the Central Intelligence Agency responsible for covert action and paramilitary operations. In the reboot series, they are a key intelligence and action element, often working closely with local forces and Task Force 141, performing missions that the U.S. government cannot officially acknowledge. Alex is a notable paramilitary operative in this group.",
            specs: ["Covert Action", "Paramilitary Operations", "Intelligence Gathering", "Unacknowledged Missions"],
            image: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/05/call-of-duty-cia-secret-warzone.jpg?w=1200&h=675&fit=crop", 
            icon: "MagnifyingGlass"
        },
        { 
            id: 7,
            name: "ULF - Urzikstan Liberation Force ",
            type: "Irregular Military/Militia (Middle East)",
            description: "A local freedom-fighting militia operating in the fictional Middle Eastern country of Urzikstan in the reboot series. Led by Farah Karim, they fight against the occupying Russian forces and the terrorist group Al-Qatala. They are a critical partner force to the CIA and Task Force 141, providing local knowledge and boots on the ground.",
            specs: ["Guerrilla Warfare", "Anti-occupation", "Local Intelligence", "Partner Force"],
            image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3a702ca6-2509-4117-bde4-c53cd3abd470/di0k9cj-75cf4160-7e8f-4db0-bb19-67021bab487e.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi8zYTcwMmNhNi0yNTA5LTQxMTctYmRlNC1jNTNjZDNhYmQ0NzAvZGkwazljai03NWNmNDE2MC03ZThmLTRkYjAtYmIxOS02NzAyMWJhYjQ4N2UuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.kvHBV0susJxKo_M2YfpsNWvT6mtl44OQGq_4BirTf_o", 
            icon: "Fist"
        },
        {
            id: 8,
            name: "Mexican Special Forces – Los Vaqueros",
            type: "Elite Special Forces (Mexico)",
            description: "A highly-trained unit within the Mexican Special Forces, led by Colonel Alejandro Vargas. Known as 'Los Vaqueros,' they operate out of Mexico and are dedicated to countering the powerful Las Almas drug cartel. In the reboot *Modern Warfare II (2022)*, they become key allies to Task Force 141.",
            specs: ["Counter-narcotics", "Border Security", "Direct Action", "Alliance with TF141"],
            image: "https://img.gta5-mods.com/q95/images/mwii-mexican-special-forces-los-vaqueros-kit-pack-for-mp-male/e42b23-Chokehold.jpg", 
            icon: "Badge"
        },
        {
            id: 10,
            name: "Russian Ultranationalists",
            type: "Political/Terrorist Movement (Russia)",
            description: "The primary antagonist faction in the original *Modern Warfare* trilogy, led by figures like Imran Zakhaev and Vladimir Makarov. They are an extremist political movement seeking to restore the Soviet Union's global influence, using terrorism and unconventional warfare. Their actions, including the false flag invasion of the U.S., drive the core conflict.",
            specs: ["Terrorism", "False Flag Operations", "Political Extremism", "Primary Antagonist (Classic MW)"],
            image: "https://images.steamusercontent.com/ugc/779621085353156058/8B1D9CFCC7446A73651401EADB8DE9B89585CA2A/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true", 
            icon: "Skull"
        },
        {
            id: 11,
            name: "Russian Armed Forces",
            type: "Conventional Military (Russia)",
            description: "The standing military of the Russian Federation. While they are sometimes allied or neutral with Western forces (depending on the specific game/timeline), they are often depicted as the primary opposing conventional military force, particularly during the invasion of the U.S. in the original *MW2* and the occupation of Urzikstan in the reboot series. Their disposition changes based on the political climate within the games.",
            specs: ["Conventional Warfare", "Global Military Power", "Often Hostile", "Air & Ground Forces"],
            image: "https://i.redd.it/anybody-know-what-camothe-russian-vdv-soldiers-wore-in-cod-v0-m0slytu5kmsd1.jpg?width=716&format=pjpg&auto=webp&s=c0ae230e0ae8186658c9b7f466a9dba38d288770", 
            icon: "Tank"
        },
        {
            id: 12,
            name: "AQ - Al-Qatala",
            type: "Terrorist Organization (Middle East)",
            description: "The main terrorist antagonist in the reboot *Modern Warfare* timeline, led by 'The Wolf' and 'The Butcher.' They are a highly organized, international terrorist group, often supported or manipulated by the Russian Ultranationalists. They utilize brutal tactics, chemical weapons, and operate across the Middle East and Europe, necessitating the intervention of Task Force 141 and the CIA.",
            specs: ["International Terrorism", "Chemical Weapons Use", "Anti-Western Ideology", "Primary Antagonist (Reboot MW)"],
            image: "https://cdnb.artstation.com/p/assets/images/images/068/395/015/4k/jordan-lamarre-wan-sp-al-qatala-tier3-elites.jpg?1697696963", 
            icon: "Bomb"
        },
        {
            id: 15,
            name: "Konni Group",
            type: "Russian Paramilitary/PMC",
            description: "Introduced in the reboot series, the Konni Group is a mysterious Russian paramilitary faction, essentially a Private Military Company (PMC), that aligns itself with the goals of Vladimir Makarov. They are highly trained, well-equipped, and serve as Makarov's primary proxy force, often operating in a deniable capacity to execute his global terror plots.",
            specs: ["Private Military Company (PMC)", "Proxy Force for Makarov", "High-Tech Gear", "Global Operations"],
            image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2702fabd-fbb4-48a2-a39e-35c1907142af/didw5yy-49c5123d-690a-4db1-90dd-409f7f49155d.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi8yNzAyZmFiZC1mYmI0LTQ4YTItYTM5ZS0zNWMxOTA3MTQyYWYvZGlkdzV5eS00OWM1MTIzZC02OTBhLTRkYjEtOTBkZC00MDlmN2Y0OTE1NWQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ctuEGY3lA_iLgcOeLfgyGByS01FH-mDGnmIWIst3nMo", 
            icon: "Mask"
        },
        {
            id: 16,
            name: "Shadow Company",
            type: "Private Military Company (PMC)",
            description: "A controversial U.S. Private Military Company. In the original *MW2 (2009)*, they were led by General Shepherd and acted as his personal, highly-disciplined army, turning hostile against TF141. In the reboot *MWII (2022)*, they are led by Graves and serve the Coalition, though their loyalty and methods remain highly suspect, leading to another conflict with TF141.",
            specs: ["Private Military Company (PMC)", "Highly Disciplined", "Ambiguous Morality", "Direct Action"],
            image: "https://i.redd.it/7yrtcdbs264a1.jpg", 
            icon: "Axe"
        },
        {
            id: 17,
            name: "Las Almas Cartel",
            type: "Transnational Criminal Organization (Mexico)",
            description: "A powerful and brutal drug cartel based in Mexico and operating internationally. In the reboot *Modern Warfare II (2022)*, they are a primary antagonist, evolving from a simple drug operation into a transnational terror threat with ties to Al-Qatala. Task Force 141 and Los Vaqueros must work together to dismantle their network.",
            specs: ["Drug Trafficking", "Transnational Crime", "High-Level Corruption", "Terror Ties"],
            image: "https://preview.redd.it/all-las-almas-cartel-enemy-models-showcase-v0-0ivhfpwtw3gf1.jpg?width=1080&crop=smart&auto=webp&s=1f64ada6358b634c3138cef3a09ef37880d4ab0c", 
            icon: "Handcuffs"
        }
      ],
      vehicles: [
        {
            "id": 19,
            "name": "M1 Abrams (Main Battle Tank)",
            "type": "Main Battle Tank (MBT) (United States)",
            "description": "The primary main battle tank of the U.S. Army and a symbol of American ground power. Featured in the classic *Modern Warfare 2 (2009)* during the defense of the American suburbs against the Russian invasion. Known for its powerful 120mm smoothbore cannon, sophisticated Chobham armor (often with Depleted Uranium components), and its distinct, powerful multifuel turbine engine. It is the backbone of the U.S. ground forces.",
            "specs": ["120mm M256 Smoothbore Cannon", "Composite/DU Armor", "1500 hp Turbine Engine", "MBT"],
            "image": "https://cdnb.artstation.com/p/assets/images/images/031/280/923/large/isaac-oster-1165626250321433681-account-id3.jpg?1603160853", 
            "icon": "Tank"
        },
        {
            "id": 20,
            "name": "UH-60 Black Hawk",
            "type": "Utility Tactical Transport Helicopter (United States)",
            "description": "The ubiquitous utility and air assault helicopter of the U.S. military. The Black Hawk is a constant presence, used for inserting and extracting Special Operations forces, troop transport, and MEDEVAC. It is the player's primary means of transport in many missions across the series, notably in the air assault missions of both the classic and reboot timelines.",
            "specs": ["Twin-engine Medium-lift Rotorcraft", "11-Soldier Capacity", "Air Assault & Transport", "Door-mounted Machine Guns"],
            "image": "https://cdnb.artstation.com/p/assets/images/images/036/333/153/large/sebastien-gregoire-blackhawk-01.jpg?1617371507", 
            "icon": "Helicopter"
        },
        {
            "id": 21,
            "name": "AH-64 Apache",
            "type": "Attack Helicopter (United States)",
            "description": "The U.S. Army's primary attack helicopter, designed for anti-armor and close air support. Players frequently fly or ride in this aircraft, utilizing its powerful 30mm chain gun and missile armament (like Hellfires) to clear hostile vehicles and entrenched positions. It appears in critical missions in both the original and reboot series, providing indispensable airborne firepower.",
            "specs": ["30mm M230 Chain Gun", "AGM-114 Hellfire Missiles", "Tandem-seat Cockpit", "Attack Rotorcraft"],
            "image": "https://www.boeing.com/content/dam/boeing/boeingdotcom/features/2022/10/modernized-apache-hero.jpg", 
            "icon": "Target"
        },
        {
            "id": 22,
            "name": "Stryker (ICV)",
            "type": "Infantry Carrier Vehicle (ICV) (United States)",
            "description": "An 8-wheeled armored fighting vehicle used by the U.S. Army's Stryker Brigade Combat Teams. It is designed to rapidly transport a squad of infantry while providing armored protection and supporting fire. It is often seen alongside U.S. forces during urban combat and plays a prominent role in the invasion and defense missions of *Modern Warfare 2 (2009)*.",
            "specs": ["8x8 Wheeled APC", "M2 .50 Caliber Machine Gun", "High Mobility", "Infantry Transport"],
            "image": "https://i.ytimg.com/vi/rvW56FtD87s/maxresdefault.jpg", 
            "icon": "Wheel"
        },
        {
            "id": 23,
            "name": "BTR-80 / BTR-80A",
            "type": "Armored Personnel Carrier (APC) (Russia)",
            "description": "A series of 8-wheeled, amphibious armored personnel carriers used by the Russian Armed Forces and the Ultranationalist/Konni forces. They are common light-armored threats encountered by players, identifiable by their wheeled design and turret-mounted weapon. The BTR-80A variant, with its 30mm autocannon, is a particularly dangerous and frequent enemy vehicle in the series.",
            "specs": ["8x8 Wheeled APC", "14.5mm KPVT MG or 30mm Autocannon", "Amphibious Capability", "Infantry Transport"],
            "image": "https://i.pinimg.com/736x/af/90/0c/af900c60e317a2b8470102f4a036e187.jpg", 
            "icon": "Commando"
        },
        {
            "id": 24,
            "name": "HMMWV / Humvee",
            "type": "Light Utility Vehicle / Armored Car (United States)",
            "description": "The High Mobility Multipurpose Wheeled Vehicle is the iconic light tactical vehicle of the U.S. military. It serves in various roles: transport, ambulance, and weapons carrier (often mounting a .50 cal or grenade launcher). Its distinct silhouette is constantly present as an allied vehicle in nearly every U.S.-led mission and often a drivable vehicle in multiplayer/co-op modes.",
            "specs": ["4x4 Light Truck", "Various Armaments (.50 Cal, Grenade Launcher)", "High Off-Road Mobility", "Diesel Engine"],
            "image": "https://i.pinimg.com/1200x/50/97/cc/5097cc8231f1d7b192ac8904bd357a1e.jpg", 
            "icon": "Wheel"
        },
        {
            "id": 25,
            "name": "T-72 / T-90 Main Battle Tank",
            "type": "Main Battle Tank (MBT) (Russia)",
            "description": "The backbone of Russian and Ultranationalist/Konni armored divisions. The T-72 is a frequent and dangerous enemy in the campaigns. Its later variants (like the T-90 in some depictions) boast a powerful 125mm smoothbore gun and an autoloader. The player must often use anti-tank weapons like the Javelin or tank battles to neutralize this threat.",
            "specs": ["125mm Smoothbore Cannon", "Autoloader System", "Reactive Armor (later variants)", "MBT"],
            "image": "https://images.steamusercontent.com/ugc/88226010742421724/D49639D7D2BD5ED4A6EAA3162B6087C4201F7D9C/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true", 
            "icon": "Tank"
        },
        {
            "id": 26,
            "name": "MIL Mi-24 'Hind'",
            "type": "Attack Helicopter / Gunship (Russia)",
            "description": "A large and heavily armed attack helicopter, nicknamed the 'Flying Tank'. The Mi-24 is a major aerial threat to allied forces, often used for transporting small squads and providing devastating rocket and cannon fire. It is frequently seen in missions against Russian and Ultranationalist forces and appears as a powerful Killstreak in multiplayer.",
            "specs": ["12.7mm or 30mm Cannon", "Rocket Pods / Anti-Tank Missiles", "Low-Capacity Troop Transport", "Armored Cockpit"],
            "image": "https://i.pinimg.com/736x/ba/20/df/ba20dff53f9fbaf864d4951a2da88dd0.jpg", 
            "icon": "Target"
        },
        {
            "id": 27,
            "name": "V-22 Osprey",
            "type": "Tiltrotor Multi-Mission Aircraft (United States)",
            "description": "A unique aircraft that combines the vertical takeoff and landing of a helicopter with the speed and range of a turboprop plane. The V-22 is used by the U.S. Marines and Special Operations for long-range insertion and extraction. It is most prominently featured in the newer *Modern Warfare* games for transporting and dropping off large numbers of troops or equipment.",
            "specs": ["Tiltrotor Design", "Vertical Takeoff/Landing (VTOL)", "High Speed/Range", "Troop/Cargo Transport"],
            "image": "https://i.pinimg.com/736x/16/60/30/1660301eae896f86900da58b81bb1bd9.jpg", 
            "icon": "Helicopter"
        },
        {
            "id": 28,
            "name": "A-10 Thunderbolt II 'Warthog'",
            "type": "Close Air Support (CAS) Attack Aircraft (United States)",
            "description": "The legendary ground-attack aircraft known for its durability and powerful GAU-8/A Avenger 30mm rotary cannon, often associated with the distinct 'BRRRT' sound. While not player-flyable, it appears as a devastating Killstreak reward or a crucial friendly air support asset to eliminate enemy armor and fortified positions in the campaign and multiplayer.",
            "specs": ["30mm GAU-8/A Avenger Cannon", "Large Payload of Ordnance", "Extreme Durability", "CAS Fixed-Wing"],
            "image": "https://cdna.artstation.com/p/assets/images/images/031/421/816/large/sebastien-gregoire-veh-warthog-02.jpg?1603577002", 
            "icon": "Plane"
        },
        {
            "id": 29,
            "name": "UGV / Wheelson",
            "type": "Unmanned Ground Vehicle (UGV) (United States)",
            "description": "A player-controlled, miniature remote tank used as a powerful killstreak or mission support asset. Known as the UGV in the classic *Modern Warfare 3* mission 'Persona Non Grata' and the Wheelson in the rebooted *Modern Warfare 2*. It features a remote-operated turret and high-speed mobility to flank and destroy infantry and lightly armored vehicles.",
            "specs": ["Remote-Controlled", "Miniature Tank Chassis", "Automatic Cannon or Grenade Launcher", "Anti-Personnel/Light-Vehicle"],
            "image": "https://i.ytimg.com/vi/ep13fAM9DdE/maxresdefault.jpg", 
            "icon": "Tank"
        }
      ]
    },

     /*        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⣄⣄⠀⠀⠀⠀
              ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⣦⣀⣾⣦⣤⣤⣤⡄⣤⣤⣷⢤⣤⣶⣆⠀⣀⢀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⡀⡀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠰⣿⣿⣿⣿⠀⠀⠀⠀
              ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⣄⣄⣀⣠⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣽⡻⠿⠟⠛⠉⠉⠙⣿⣿⣯⡙⣿⣿⢿⣥⣿⡏⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠩⠉⡙⡩⣋⣝⢫⠙⡛⣿⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣄⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣴⣿⣹⣿⣿⠀⠀⠀⠀
              ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⠛⠉⠋⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⢹⡿⣧⣀⣀⣀⡀⠀⠀⡹⡿⠞⠋⠉⠀⢸⣋⡏⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠆⠨⣟⣯⣿⡿⢿⠻⢿⠿⢿⣿⡛⢩⣯⣭⣯⣯⣯⣿⣷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⡿⠛⠟⠻⣿⠀⠀⠀⠀
              ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡴⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⢿⣿⣿⣿⣿⣿⣿⣿⣟⣛⣿⣿⣿⣿⡟⠟⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⢻⣿⡻⡏⠉⠉⠉⣻⠲⣤⣅⣤⣀⣀⣀⣀⣨⣿⣇⣧⣤⣤⣴⣤⣤⣶⣤⠤⠤⠤⠤⣤⣶⡶⠶⠶⣶⡶⠤⠤⠴⣯⢿⣿⡿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⢿⣿⡿⡿⣦⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⣿⣀⣀⣀⣀⣿⣀⠀⠀⠀
              ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⢻⣬⣶⣤⣤⣤⢦⢦⢦⡤⢦⡤⢤⠤⠤⠤⠤⣠⣾⡿⠿⠿⠿⠻⠟⠛⠛⠚⠚⠛⢻⡟⢛⣳⣀⣤⣤⣤⣤⣤⣤⣤⢤⡤⣄⣀⢀⣀⠀⣾⣿⢿⠇⠀⠀⠀⣿⠛⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠁⠀⠀⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⠈⠁⠀⠀⠀⡇⢠⣾⣧⣤⣤⣤⣤⣤⣤⣴⣶⣶⣶⣶⣦⣼⣿⣿⣿⣿⣿⣿⣶⣶⣤⣤⣤⣤⣤⣤⣴⣤⣴⣴⣴⣶⣤⣿⣿⣿⣿⣿⣿⣿⣿⣶⣶⡆
              ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⣠⣶⢿⠞⠛⠚⠛⠛⠛⠛⠛⠛⠛⠛⢋⣿⣟⣟⣫⣽⡿⠋⠀⠀⠀⢀⣠⡀⠀⣀⣀⣤⢴⣾⠷⡟⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⡀⢀⣀⡀⠠⣿⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⡇⢸⣶⣾⣿⣿⣿⣷⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣶⣷⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇
              ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⣀⣀⣤⣤⣤⣤⣤⣀⡀⠀⠀⠀⣀⣀⣀⣤⣤⠴⠶⠾⠛⠋⠁⢀⠀⢹⡄⢂⢀⡀⠂⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣶⠀⣀⣠⣤⣴⣶⠿⠿⠛⠛⠉⠉⠀⠀⠀⠀⢠⣤⣴⠄⠀⠀⢠⡴⠶⠶⠖⠒⠒⠒⠛⠛⠛⠛⠛⠉⠉⠉⠉⠙⡟⢻⣄⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣄⣀⣀⣀⣴⣿⣿⣛⣋⣉⣉⣉⣉⣉⣉⣉⣉⣍⣍⣭⣍⣹⣿⣯⣾⣽⣿⣿⣿⣿⣬⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣬⣭⣭⣿⣿⣿⣿⠀⠀⠉⠀
              ⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⣀⣠⣤⣤⣤⠶⠶⠶⢖⡻⢛⡛⠏⡍⢩⣉⡘⠤⠁⠦⠄⠀⠉⡉⠙⠛⢉⠍⠩⡁⠆⣰⠊⠀⠀⠀⠀⢳⡀⠀⢸⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠿⣟⠿⠟⠛⠋⠉⠁⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⣀⡀⠀⠀⠀⢸⣿⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⣀⣀⣀⣀⣀⣸⡟⢸⣾⡇⠀⠀⠀⠀⠀⣀⣠⣴⣶⣿⣾⣿⣿⣿⣿⣿⣿⣷⣾⣶⣷⣶⣧⣷⣾⣷⣿⣿⣯⣵⠿⠿⠟⠉⠉⠉⠉⠉⠉⠉⠁⠀⠀⠀⠀⠀⠀⠀⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠁⠀⠀⠀⠀
              ⢠⣤⣶⢾⡛⣟⠻⣛⠭⣋⣭⢣⠵⡒⢲⢩⡙⡜⣤⠒⡥⢒⠣⡙⢄⠂⡔⠠⠡⠂⠌⠈⠀⢁⠐⠀⡌⢰⠡⡑⢞⠁⠀⠀⠀⠀⠀⠀⢱⡀⠀⣿⠀⠐⠀⡇⠀⠀⠀⠀⠂⠁⠀⠀⠀⠀⠂⠀⠤⣄⣀⠀⠀⠀⠶⠀⠀⠀⠈⠁⠀⠸⠟⣲⣷⣖⣀⣀⣀⣀⣙⣿⣿⣿⣿⣿⣽⣿⣭⣽⣽⣯⣿⣶⣶⣶⠶⠶⢿⣿⣶⣲⡶⣶⣶⣿⡿⠟⠛⠉⠉⠉⠉⠈⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
              ⢾⣿⣧⢣⠽⣸⠱⣍⢻⣱⢦⠳⣬⠳⣉⢦⡙⢴⢢⡙⠴⡉⢎⢁⢊⡔⠠⠐⠂⡀⢂⠠⠄⠐⣀⠡⢌⠂⡱⠐⡌⢧⡀⠀⠀⠀⠀⠀⠀⠁⠀⣿⣰⣄⣂⣤⣠⣤⣦⣤⣤⣦⣤⣴⣤⡶⣦⣶⡶⣶⣿⣶⣶⠶⠾⠾⠿⠷⢶⣴⣶⣶⡶⠛⣿⠯⣯⢭⡯⢯⠯⠧⠞⠈⡏⠓⠶⡾⠃⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠛⠛⠛⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
              ⠘⣿⣿⣹⢮⠷⣛⡭⢧⡓⢮⡳⣌⠳⣍⠲⣉⢆⠣⡜⢤⠃⡭⡈⠦⡐⢢⠑⡌⡐⢠⢠⠒⢉⠠⡐⢄⠃⠔⢣⠸⢤⡙⣒⡄⣦⣴⣴⣶⣿⠿⠟⠋⢹⣿⡿⠿⡿⠿⡿⡿⣾⣷⣿⣶⣦⣿⣿⡇⠈⣿⠋⠀⠀⠀⠀⠀⠀⢸⡇⢰⡔⢺⣄⣾⠀⢻⢸⠹⣼⡻⢸⢱⠀⢿⡄⠀⢻⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
              ⠀⢻⣿⡷⣛⢯⡱⣙⢦⣛⢦⡓⣬⠳⣌⢣⢇⢎⡳⡘⢦⡙⢤⢓⡘⢤⠃⡜⠤⡑⡂⢆⡘⡄⢢⠑⣌⠱⣊⢦⣙⣦⣽⣾⡿⠿⠛⠉⠉⠀⠀⠀⠀⠈⢻⣿⣆⠀⠀⠀⠀⠀⡄⠀⠀⣤⣼⣿⡇⠀⢻⣄⠀⠀⠀⠀⠀⠀⠘⡇⢸⣿⣴⠇⢸⡆⢸⡌⣧⣏⣇⡏⡏⡆⠸⣷⠀⠘⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
              ⠀⢸⣿⡷⣭⠶⣍⣳⢮⡜⣖⢻⣌⡳⣌⠳⢎⡚⡴⣉⠦⣙⠢⣍⠜⡆⢳⢌⣲⢡⢓⠬⣒⣜⣥⣯⣶⣿⡿⠿⠛⠋⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⣿⠅⠀⠀⠀⠀⠀⣰⣿⣿⡿⢿⠁⠀⠀⠙⠲⠄⠀⠀⠀⠀⢀⡗⠛⢾⡏⠈⡏⣷⠘⢣⢹⣹⣹⢹⣹⢻⠀⢿⣧⠀⢹⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
              ⠀⠈⣿⣿⣚⣝⢣⣳⢺⡼⣩⠞⡴⣓⣬⢛⡬⡕⣲⠡⢧⡩⢖⡜⢎⣙⣣⢮⣴⣧⣾⣷⠿⠟⠛⠋⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⡿⠀⠀⢰⠀⠀⣸⣿⡿⠋⠀⠈⠑⠒⠒⠒⠒⠒⠒⠒⠒⠒⠉⠁⠠⢸⠁⠀⢹⣸⡆⢸⡞⣷⢿⣧⢏⣏⣇⠘⣿⡄⠀⢣⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
              ⠀⠀⢹⣿⡧⣏⠷⣊⢷⡘⢧⡛⡴⣩⢆⡳⠼⣜⠲⣍⡳⣜⣮⣼⣻⣾⡷⠿⠛⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⣿⠇⠀⢠⡇⠀⢰⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⠈⢿⣷⠀⢹⣸⣞⣼⡿⡜⡽⡄⠹⣿⡀⠈⢇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
              ⠀⠀⢸⣿⣿⣜⣫⣝⢦⡟⣲⢏⡵⢣⣎⢷⡻⣜⣻⣭⡷⠿⠛⠋⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⡏⠀⠀⡾⠀⢠⣿⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣿⣧⠈⢧⣻⣽⣹⡽⣽⡿⡄⠹⣷⡀⠈⢆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
              ⠀⠀⠈⣿⣿⣭⢗⣮⡳⣏⢷⣺⣝⣯⣾⠿⠛⠋⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⡟⠀⠀⣸⠃⠀⣿⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⣻⣆⠘⢯⣷⣳⣳⣷⣽⡽⡄⠹⣿⡄⠈⢧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
              ⠀⠀⠀⢻⣿⣯⣾⣶⣿⡾⠟⠛⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⡿⠁⠀⠘⡼⠀⣼⣿⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⣿⣆⠘⢯⣷⣻⣷⡿⣽⡿⡄⠙⣿⣆⠈⠳⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
              ⠀⠀⠀⠈⠙⠉⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⠃⠐⠀⠀⠇⢰⣿⡿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⣻⣆⡘⢯⣷⡿⡿⣽⣽⣞⢆⠊⢿⣧⡀⠘⢆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
              ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢿⣧⣤⣤⡀⠀⠀⣾⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠻⡿⣦⡘⢯⣿⣿⣿⣾⢾⣿⣣⡀⢹⣷⣄⠀⠳⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
              ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⢿⣭⣿⣿⣖⣿⣿⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⣿⣧⡪⡻⣿⣮⢿⣿⡳⣿⣟⢆⡘⢻⣷⣄⠈⠳⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
              ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠉⠙⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢯⢷⣎⡛⢿⣿⡽⣿⣮⢯⣿⣷⣄⠙⢿⣷⣄⠈⠳⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
              ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠳⡿⣯⡈⡷⣿⣮⡻⣷⣽⢿⣾⣱⣄⠘⢿⣗⣶⣿⣟⣦⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
              ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢾⣿⣧⠏⡿⣿⣮⡻⣷⣝⢾⡳⣿⣦⣯⡟⣧⣟⣾⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
              ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠑⢟⣿⣥⠍⠻⣿⣮⡫⣟⣟⣻⡾⠏⣢⣧⣿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
              ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠳⢽⣿⣥⢌⠳⡟⢫⣿⡟⣡⣼⣵⡿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
              ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢿⣿⣦⣞⡽⢇⡾⣿⣿⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
              ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢻⣿⣦⡞⣵⣿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
              ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⠟⠛⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    */

      //CALL OF DUTY: BLACK OPS 


      


      /* ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⣿⣿⣿⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⣿⣿⣿⣿⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⣿⣿⣿⣿⣿⣷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⣿⣿⣿⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⣿⡟⠘⣿⣿⣿⣿⣿⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⣿⣿⡿⠀⠀⠹⣿⣿⣿⣿⣿⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⣿⣿⣿⠃⠀⠀⠀⢻⣿⣿⣿⣿⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⣿⣿⡏⠀⠀⠀⠀⠀⢿⣿⣿⣿⣿⣷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⣿⣿⡿⠀⠀⠀⠀⠀⠀⠈⢿⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⣿⣿⠁⠀⠀⠀⠀⠀⠀⠀⠘⣿⣿⣿⣿⣿⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⣿⣿⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⣿⣿⣿⣿⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⣿⣿⣿⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⣿⣿⣿⣿⣿⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⣿⣿⡿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⣿⣿⣿⣿⣷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⣿⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢿⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⣿⣿⣿⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣿⣿⣿⣿⣿⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⣿⣿⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣿⣿⣿⣿⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⣿⣿⣿⣿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⣿⣿⣿⣿⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⣿⣿⣿⣿⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⣿⣿⣿⣿⣿⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣼⣿⣿⣿⣿⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢿⣿⣿⣿⣿⣿⣷⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⢤⣀⠀⠀⠀⠀⠀⠀⢀⣠⣴⣿⣿⣿⣿⣿⡿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢿⣿⣿⣿⣿⣿⣿⣿⣶⣤⣄⣀⣀⣀⣀⣠⣤⠄
        ⠈⣿⣿⣷⣶⣶⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠀
        ⠀⢹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠁⠀
        ⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀
        ⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀
        ⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀
        ⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇⠀
        ⠈⠉⠉⠉⠛⠿⣿⣿⣿⣿⣿⣿⣿⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⡿⠟⠋⠉⠉⠉⠀
        ⠀⠀⠀⠀⠀⠀⠈⠻⣿⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⣿⣿⣿⡿⠋⠀⠀⠀⠀⠀⠀⠀
        ⠀⠢⡀⠀⠀⠀⠀⠀⠈⠙⢿⣿⣿⣿⣧⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣼⣿⣿⣿⠟⠋⠀⠀⠀⠀⠀⢀⠔⠀⠀
        ⠀⠀⠈⠳⢄⠀⠀⠀⠀⠀⠀⠈⠛⠿⣿⣿⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⡿⠟⠋⠀⠀⠀⠀⠀⠀⣀⠔⠁⠀⠀⠀
        ⠀⠀⠀⠀⠀⠙⢦⣀⠀⠀⠀⠀⠀⠀⠀⠉⠛⠿⣶⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⠶⠛⠋⠁⠀⠀⠀⠀⠀⠀⢀⡤⠚⠁⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠉⠳⢦⣄⡀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠙⠒⠤⠄⠀⠀⠀⠀⡀⠀⠀⠀⠀⠠⠐⠒⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⣀⣴⠞⠉⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⢷⣦⣄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣼⣷⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⣴⡶⠟⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠛⠿⣿⣶⣶⣶⣦⣤⣴⣶⣶⣿⣿⣿⣿⣿⣿⣶⣶⣶⣤⣶⣶⣶⣶⣿⠿⠟⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠛⠛⠿⠿⠿⢿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠿⠛⠛⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
      */


        // ASSASSIN CREED SECTION
        'ac-series': {
            characters: [
                {
              "id": 1,
              "name": "Altaïr Ibn-La'Ahad",
              "role": "Master Assassin / Mentor",
              "description": "The central protagonist of Assassin's Creed I, tasked with eliminating nine corrupt figures during the Third Crusade.",
              "fullDescription": "Born into the Assassin Brotherhood, Altaïr was a prodigy, achieving the rank of Master Assassin at a young age. His arrogance led to a failed mission, stripping him of his rank. His quest to assassinate nine targets was his path to redemption, during which he uncovered a deeper Templar conspiracy and the betrayal of his mentor. He eventually took over as Mentor of the Brotherhood, reforming its tenets and safeguarding its future for generations.",
              "traits": [
                  "Stoic",
                  "Efficient",
                  "Innovative",
                  "Disciplined",
                  "Agile",
                  "Strategic",
                  "Focused"
              ],
              "game": "Assassin's Creed",
              "image": "https://cdn.displate.com/artwork/270x380/2021-11-19/93c5a588f67b8445c2e930808239e29c_52984f55e1e92f7fb1ab75fc7060c5ce.jpg",
              "icon": "Sword"
          },
          {
              "id": 2,
              "name": "Malik Al-Sayf",
              "role": "Assassin / Assassin Bureau Leader",
              "description": "Altaïr’s rival turned ally, leader of the Jerusalem bureau and a loyal follower of the Creed despite losing his arm and brother.",
              "fullDescription": "Malik was an accomplished Assassin and the leader of the Jerusalem Bureau. He held a deep rivalry with Altaïr due to his overconfidence, which led to the death of Malik's brother, Kadar. Despite his resentment, Malik became a crucial ally and close friend to Altaïr, offering him counsel and support after the events of the game. He proved his unwavering loyalty to the Brotherhood and became an integral part of Altaïr's reforms.",
              "traits": [
                  "Resilient",
                  "Perceptive",
                  "Loyal",
                  "Intellectual",
                  "Cynical",
                  "Sharp-Witted",
                  "Determined"
              ],
              "game": "Assassin's Creed",
              "image": "https://64.media.tumblr.com/3031159f35beb25df95342e2b48e2558/tumblr_inline_o0dygjtHSB1qlr65v_500.jpg",
              "icon": "Shield"
          },
          {
              "id": 3,
              "name": "Maria Thorpe",
              "role": "Former Templar Agent / Assassin",
              "description": "Originally a Templar agent sent to kill Altaïr, Maria eventually joined the Assassins and became his wife.",
              "fullDescription": "A formidable English noblewoman and Templar agent, Maria initially served as a decoy for Robert de Sablé. After being defeated by Altaïr, she was spared and traveled with him, eventually coming to question her Templar beliefs. She renounced the Templars to join the Assassins, becoming Altaïr's wife and the mother of his children. She was a key figure in the development of the Assassins' legacy alongside Altaïr.",
              "traits": [
                  "Bold",
                  "Cunning",
                  "Fierce",
                  "Determined",
                  "Resolute",
                  "Empathetic",
                  "Adaptable"
              ],
              "game": "Assassin's Creed",
              "image": "https://gamesandstories.home.blog/wp-content/uploads/2019/07/mariathorpe.png",
              "icon": "Heart"
          },
          {
              "id": 4,
              "name": "Kadar Al-Sayf",
              "role": "Assassin Novice",
              "description": "Malik’s younger brother and fellow Assassin, killed during the mission at Solomon’s Temple.",
              "fullDescription": "Kadar was a young Assassin novice and the younger brother of Malik Al-Sayf. He participated in the failed mission to retrieve the Apple of Eden from Solomon's Temple, where he was killed by Templar forces. His death became a point of contention between Altaïr and Malik, though his sacrifice ultimately motivated both to continue their fight for the Creed.",
              "traits": [
                  "Brave",
                  "Loyal",
                  "Tragic",
                  "Impulsive",
                  "Idealistic",
                  "Enthusiastic"
              ],
              "game": "Assassin's Creed",
              "image": "https://static0.srcdn.com/wordpress/wp-content/uploads/2021/11/Kadar-Al-Sayf.jpg?q=50&fit=crop&w=825&dpr=1.5",
              "icon": "Users"
          },
          {
              "id": 5,
              "name": "Al Mualim",
              "role": "Mentor of Masyaf's Assassins / Final Target",
              "description": "Altaïr's mentor and secret Templar, revealed to be the mastermind behind the corruption.",
              "fullDescription": "Al Mualim was the revered Mentor of the Assassin Brotherhood, who trained Altaïr from a young age. His wisdom and guidance were legendary, but he secretly harbored a desire for power and control. He was revealed to be a Templar Grand Master who used the Apple of Eden to manipulate the region and the Assassin Brotherhood itself. His ultimate goal was to establish a false peace through absolute control, leading to a final confrontation with Altaïr.",
              "traits": [
                  "Wise",
                  "Deceptive",
                  "Philosophical",
                  "Cunning",
                  "Charismatic",
                  "Manipulative",
                  "Authoritarian"
              ],
              "game": "Assassin's Creed",
              "image": "https://i.ytimg.com/vi/tvt-oAZ8JP8/maxresdefault.jpg",
              "icon": "Apple"
          },
          {
              "id": 6,
              "name": "Tamir",
              "role": "Target - Black Market Merchant",
              "description": "A corrupt weapons dealer in Damascus, known for exploiting the poor.",
              "fullDescription": "A ruthless and greedy merchant, Tamir operated a black market in Damascus. He profited from the conflict by selling weapons to both sides of the war, exploiting the desperation of the populace. His actions undermined the stability of the city and endangered civilians, making him an early target for Altaïr. His death was a small step towards restoring order in the region.",
              "traits": [
                  "Greedy",
                  "Cruel",
                  "Arrogant",
                  "Ruthless",
                  "Exploitative",
                  "Opportunistic"
              ],
              "game": "Assassin's Creed",
              "image": "https://lparchive.org/Assassins-Creed/Update%2007/1-07.png",
              "icon": "Target"
          },
          {
              "id": 7,
              "name": "Talal",
              "role": "Target - Slave Trader",
              "description": "A slaver operating in Jerusalem, responsible for abducting innocents.",
              "fullDescription": "Talal was a wealthy slaver who kidnapped citizens of Jerusalem to be sold to the highest bidder. He used his influence and hidden networks to carry out his heinous trade, causing immense suffering. He represented the exploitation and dehumanization that the Templars sought to propagate, and his assassination was an act of justice for the many lives he ruined.",
              "traits": [
                  "Sadistic",
                  "Secretive",
                  "Wealthy",
                  "Cruel",
                  "Exploitative",
                  "Deceptive"
              ],
              "game": "Assassin's Creed",
              "image": "https://lparchive.org/Assassins-Creed/Update%2013/1-13.png",
              "icon": "Truck"
          },
          {
              "id": 8,
              "name": "Garnier de Naplouse",
              "role": "Target - Hospitaler Leader",
              "description": "A twisted doctor who experiments on patients in Acre.",
              "fullDescription": "Garnier de Naplouse was the Grand Master of the Knights Hospitaler, but he twisted his medical oath into a tool for control. He performed cruel experiments on his patients in the guise of 'cures,' using their pain to manipulate them and control their will. His work was a perversion of science and represented the Templars' belief that humanity was a disease to be controlled.",
              "traits": [
                  "Mad Scientist",
                  "Fanatical",
                  "Unethical",
                  "Perverted",
                  "Manipulative",
                  "Ruthless"
              ],
              "game": "Assassin's Creed",
              "image": "https://lparchive.org/Assassins-Creed/Update%2010/1-10.png",
              "icon": "Crosshair"
          },
          {
              "id": 9,
              "name": "Abu'l Nuqoud",
              "role": "Target - Wealthy Merchant",
              "description": "A corrupt nobleman who hoards wealth and manipulates politics in Damascus.",
              "fullDescription": "A wealthy and eccentric merchant, Abu'l Nuqoud was a Templar agent who used his vast fortune to hoard resources and manipulate the political landscape of Damascus. He was incredibly paranoid, holding a lavish party in his mansion as a distraction for his sinister plans. His actions caused widespread poverty and unrest, making him a prime target for Altaïr to restore balance.",
              "traits": [
                  "Greedy",
                  "Manipulative",
                  "Paranoid",
                  "Scheming",
                  "Eccentric",
                  "Corrupt",
                  "Cruel"
              ],
              "game": "Assassin's Creed",
              "image": "https://lparchive.org/Assassins-Creed/Update%2015/1-15.png",
              "icon": "Crown"
          },
          {
              "id": 10,
              "name": "William of Montferrat",
              "role": "Target - Crusader Leader",
              "description": "A brutal military commander in Acre, known for his oppressive rule.",
              "fullDescription": "William of Montferrat was a ruthless and brutal Crusader military commander. He ruled Acre with an iron fist, using fear and oppression to control the populace. He was a symbol of the Templars' desire for absolute control through military might, and his death was crucial to weakening their power in the Holy Land.",
              "traits": [
                  "Authoritarian",
                  "Strategic",
                  "Merciless",
                  "Brutal",
                  "Uncompromising",
                  "Commanding",
                  "Oppressive"
              ],
              "game": "Assassin's Creed",
              "image": "https://i.ytimg.com/vi/aIdL-F3yga0/maxresdefault.jpg",
              "icon": "ShieldCheck"
          },
          {
              "id": 11,
              "name": "Majd Addin",
              "role": "Target - Jerusalem Magistrate",
              "description": "A sadistic judge who publicly executes innocents to maintain fear.",
              "fullDescription": "A twisted and fanatical magistrate in Jerusalem, Majd Addin used his position of power to hold public executions of innocents to maintain fear and order. He believed that control could only be achieved through public displays of cruelty. His assassination was not only an act of justice but a symbolic blow against the Templars' tyrannical rule.",
              "traits": [
                  "Cruel",
                  "Fanatical",
                  "Judgmental",
                  "Sadistic",
                  "Tyrannical",
                  "Zealous"
              ],
              "game": "Assassin's Creed",
              "image": "https://i.ytimg.com/vi/2sPUyrPf-74/maxresdefault.jpg",
              "icon": "Star"
          },
          {
              "id": 12,
              "name": "Jubair al Hakim",
              "role": "Target - Scholar",
              "description": "A radical scholar who burns books and suppresses knowledge in Damascus.",
              "fullDescription": "Jubair al Hakim was a scholar who believed that knowledge and free will were dangerous. He organized the public burning of books in Damascus, aiming to erase history and control the minds of the people. He believed that an ignorant populace was easier to control, making him a primary target for the Assassins who fight for freedom of thought.",
              "traits": [
                  "Zealous",
                  "Anti-Intellectual",
                  "Dangerous",
                  "Radical",
                  "Fanatical",
                  "Manipulative"
              ],
              "game": "Assassin's Creed",
              "image": "https://i.ytimg.com/vi/hJkvt18EtY8/maxresdefault.jpg",
              "icon": "Zap"
          },
          {
              "id": 13,
              "name": "Sibrand",
              "role": "Target - Teutonic Leader",
              "description": "A paranoid naval commander in Acre, obsessed with secrecy and control.",
              "fullDescription": "Sibrand was a paranoid Grand Master of the Teutonic Knights who feared the Assassins and was obsessed with protecting his ship from them. He was a ruthless and delusional commander who believed that his actions were necessary for the greater good. His death was necessary to dismantle the Templar navy and their control over the seas.",
              "traits": [
                  "Paranoid",
                  "Militant",
                  "Delusional",
                  "Ruthless",
                  "Obsessive",
                  "Fearful"
              ],
              "game": "Assassin's Creed",
              "image": "https://i.ytimg.com/vi/T4NMGa57qVA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAh0aMZo6KseNVUwXReRBhtg6OjSg",
              "icon": "Car"
          },
          {
              "id": 47,
              "name": "Richard I",
              "role": "King of England",
              "description": "A legendary monarch who led the Third Crusade and became renowned for his courage and military prowess.",
              "fullDescription": "Known as 'Richard the Lionheart', he ascended to the English throne in 1189 and quickly became a symbol of chivalry and battlefield brilliance. Though he spent little time in England, his campaigns in the Holy Land against Saladin and his strategic conquests in Europe solidified his legacy. Captured and ransomed during his return from the Crusade, Richard's reign was marked by valor, diplomacy, and enduring myth.",
              "traits": [
                  "Crusader",
                  "Royalty",
                  "Strategic",
                  "Fearless",
                  "Brave",
                  "Diplomatic",
                  "Chivalrous"
              ],
              "game": "Assassin's Creed",
              "image": "https://d2thvodm3xyo6j.cloudfront.net/media/2022/02/515077c3fcbea2c0-600x338.jpg",
              "icon": "Crown"
          },
          {
              "id": 14,
              "name": "Robert de Sablé",
              "role": "Target - Templar Grand Master",
              "description": "Altaïr's final target before Al Mualim, a powerful Templar leader.",
              "fullDescription": "Robert de Sablé was a cunning and powerful Grand Master of the Templar Order. He was the main antagonist of the game and orchestrated the conspiracy to seize power in the Holy Land. He was a master manipulator who used his charisma and influence to rally support for his cause. His assassination by Altaïr led to the discovery of Al Mualim's ultimate betrayal.",
              "traits": [
                  "Strategic",
                  "Fanatical",
                  "Commanding",
                  "Cunning",
                  "Charismatic",
                  "Manipulative",
                  "Authoritarian"
              ],
              "game": "Assassin's Creed",
              "image": "https://lparchive.org/Assassins-Creed/Update%2025/1-25.jpg",
              "icon": "Templar"
          },
          {
              "id": 1,
              "name": "Ezio Auditore",
              "role": "Master Assassin + Mentor",
              "description": "The central protagonist of Assassin's Creed II, who becomes a legendary Assassin after his family's betrayal.",
              "fullDescription": "Ezio Auditore da Firenze was born into nobility but became an Assassin after his family's betrayal and execution. His journey spans decades, from a revenge-driven youth to a wise and charismatic mentor. He dismantled the Templar Order across Italy, forged alliances with historical figures like Leonardo da Vinci, and helped shape the future of the Brotherhood for generations.",
              "traits": [
                  "Charismatic",
                  "Arrogant",
                  "Master of Rizz",
                  "Vengeful",
                  "Strategic",
                  "Leader",
                  "Adaptable"
              ],
              "game": "Assassin's Creed II",
              "icon": "Sword",
              "image": "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/449BBgnc3Q1ha2IN9rh3bR/eb9a6d17615e1480d12e9aab24804c67/ac-ezio-hero-mobile.jpg"
          },
          {
              "id": 2,
              "name": "Giovanni Auditore",
              "role": "Assassin / Ally",
              "description": "Ezio’s father, a respected member of the Brotherhood, executed by corrupt officials.",
              "fullDescription": "Giovanni Auditore was a respected nobleman and a Master Assassin in Florence. He was a devoted family man who kept his true identity a secret from his children until his final days. His execution by the Templar-aligned Pazzi family was the catalyst for Ezio's transformation into an Assassin. Giovanni left behind crucial clues and documents that guided Ezio on his path to revenge.",
              "traits": [
                  "Wise",
                  "Honorable",
                  "Secretive",
                  "Protective",
                  "Loyal",
                  "Vigilant",
                  "Principled"
              ],
              "game": "Assassin's Creed II",
              "icon": "Shield",
              "image": "https://64.media.tumblr.com/1afd9ff4074aa0096fc3bae2f5df970a/4f59d6fb55239e98-55/s400x600/9f52f0bbd4db1a987ebe57aaa620c99838fdb52d.jpg"
          },
          {
              "id": 3,
              "name": "Maria Auditore",
              "role": "Ally",
              "description": "Ezio’s mother, a noblewoman and strong supporter of her children after tragedy strikes.",
              "fullDescription": "Maria Auditore was a kind and compassionate noblewoman, married to Giovanni Auditore. She was a loving mother who supported her children after her husband and two sons were executed. The trauma left her unable to speak, but she remained a resilient and supportive figure for Ezio and his sister, Claudia, in their new life at Monteriggioni.",
              "traits": [
                  "Resilient",
                  "Educated",
                  "Compassionate",
                  "Supportive",
                  "Strong-Willed",
                  "Nurturing",
                  "Graceful"
              ],
              "game": "Assassin's Creed II",
              "icon": "Heart",
              "image": "https://pm1.aminoapps.com/6473/204931c31059b5aa3bf405ba078a43b16e4e0ef1_00.jpg"
          },
          {
              "id": 4,
              "name": "Federico Auditore",
              "role": "Ally",
              "description": "Ezio’s older brother, playful and protective, executed alongside Giovanni.",
              "fullDescription": "Federico was Ezio's charismatic and protective older brother. He was a fellow Assassin and often accompanied Ezio on their playful rooftop races. His close bond with Ezio made his execution, alongside his father and younger brother, a devastating event for the family. His death fueled Ezio's initial quest for vengeance.",
              "traits": [
                  "Clever",
                  "Loyal",
                  "Tragic",
                  "Protective",
                  "Playful",
                  "Confident",
                  "Charming"
              ],
              "game": "Assassin's Creed II",
              "icon": "Users",
              "image": "https://i.namu.wiki/i/f_SAnO66fzFS0o30lzgQoBMH8jUk6v2BJmL3pL00mgupbthTMse4IBXHvlSehYyvsQc0VC1UqEx3_jhcSGKhag.webp"
          },
          {
              "id": 5,
              "name": "Petruccio Auditore",
              "role": "Ally",
              "description": "Ezio’s youngest brother, innocent and kind, executed during the family's downfall.",
              "fullDescription": "Petruccio was the youngest and most innocent of the Auditore brothers. He was a sweet and kind-hearted boy who was executed alongside his father and brothers. His death was a tragic loss that deeply affected Ezio and reinforced the brutality of the Templar Order. His simple request for feathers became a small side quest and a poignant memorial to his memory.",
              "traits": [
                  "Sweet",
                  "Innocent",
                  "Tragic",
                  "Gentle",
                  "Pure",
                  "Fragile"
              ],
              "game": "Assassin's Creed II",
              "icon": "Star",
              "image": "https://pbs.twimg.com/media/GO56fJEWUAElNJf.png"
          },
          {
              "id": 6,
              "name": "Claudia Auditore",
              "role": "Ally / Assassin",
              "description": "Ezio’s sister, who grows into a strong leader and manages the Monteriggioni estate.",
              "fullDescription": "Claudia was Ezio's sister, who started as a carefree young noblewoman. After her family's downfall, she grew into a resilient and capable leader. She took on the management of the Auditore villa in Monteriggioni, handling its finances and renovations. Her administrative skills were a vital contribution to the Assassins' cause, and she later joined the Brotherhood herself.",
              "traits": [
                  "Determined",
                  "Smart",
                  "Independent",
                  "Resourceful",
                  "Resilient",
                  "Organized",
                  "Practical"
              ],
              "game": "Assassin's Creed II",
              "icon": "ShieldCheck",
              "image": "https://64.media.tumblr.com/46df893a4bbe6ba324baa029d81ad99f/0e70f7e4c844cb40-86/s400x600/e6f03061b40a68c2064819d31f695fdb33bb29b1.jpg"
          },
          {
              "id": 7,
              "name": "Mario Auditore",
              "role": "ALly",
              "description": "Ezio’s uncle and mentor, leader of the Monteriggioni Assassins.",
              "fullDescription": "Mario Auditore was the bold and charismatic uncle of Ezio and the leader of the Monteriggioni Assassins. He took Ezio under his wing, teaching him the ways of the Brotherhood and providing him with a home at the Auditore villa. His leadership and military experience were crucial in the fight against the Templars, and he served as a strong father figure to Ezio.",
              "traits": [
                  "Bold",
                  "Experienced",
                  "Protective",
                  "Loyal",
                  "Brave",
                  "Strategic",
                  "Commanding"
              ],
              "game": "Assassin's Creed II",
              "icon": "Shield",
              "image": "https://ac-renaissance.weebly.com/uploads/4/1/8/3/41831587/316288233.png?356"
          },
          {
              "id": 8,
              "name": "Caterina Sforza",
              "role": "Ally / Ruler of Forli",
              "description": "A powerful noblewoman and ally of the Assassins, known for her defiance and leadership.",
              "fullDescription": "Caterina Sforza was a powerful and defiant noblewoman who ruled the city of Forlì. She was a fearless leader who refused to bow to the Templars and became a valuable ally to Ezio. Her cunning and tactical mind were instrumental in protecting her city and helping the Assassins in their fight against the Borgia family.",
              "traits": [
                  "Bold",
                  "Independent",
                  "Tactical",
                  "Fearless",
                  "Defiant",
                  "Determined",
                  "Cunning"
              ],
              "game": "Assassin's Creed II",
              "icon": "Crown",
              "image": "https://www.playthepast.org/wp-content/uploads/2014/02/caterina-sforza-45105.jpg"
          },
          {
              "id": 9,
              "name": "Rodrigo Borgia",
              "role": "Templar / Pope",
              "description": "Grand Master of the Templars and Ezio’s ultimate adversary.",
              "fullDescription": "Rodrigo Borgia was the cunning and ruthless Grand Master of the Templar Order in Italy. He was a master manipulator who used his political power and influence to become the Pope. He was the main antagonist of the game and the one who orchestrated the execution of Ezio's family. His ultimate goal was to acquire the Apple of Eden to establish a new world order under his control.",
              "traits": [
                  "Manipulative",
                  "Fanatical",
                  "Ruthless",
                  "Cunning",
                  "Ambitious",
                  "Scheming",
                  "Authoritarian"
              ],
              "game": "Assassin's Creed II",
              "icon": "Templar",
              "image": "https://assets.mycast.io/actor_images/actor-rodrigo-borgia-assassin-s-creed-128589_large.jpg?1600945022"
          },
          {
        "id": 10,
        "name": "Cesare Borgia",
        "role": "Templar / General of the Papal Army",
        "description": "The ruthless and arrogant son of Rodrigo Borgia, who serves as the main military leader for the Templars in Rome.",
        "fullDescription": "Cesare Borgia is the chief antagonist of Assassin's Creed: Brotherhood. As the son of Rodrigo Borgia, he is a brilliant but brutal military commander who spearheads the Templar campaign to conquer Italy. He possesses an unquenchable thirst for power and respects no one, including his own family. His ambition and cruelty make him Ezio's most direct and dangerous adversary, and the two clash repeatedly as Ezio works to liberate Rome from the Borgia's grip.",
        "traits": [
            "Brutal",
            "Ambitious",
            "Charismatic",
            "Arrogant",
            "Ruthless"
        ],
        "game": "Assassin's Creed: Brotherhood",
        "icon": "Templar",
        "image": "https://preview.redd.it/cesare-borgia-from-assassins-creed-brotherhood-request-v0-1fcgaip2qxga1.jpg?width=640&crop=smart&auto=webp&s=04170634f3f0e8f3e6ee6a35eea35209e7f9d968"
        },
        {
            "id": 11,
            "name": "Lucrezia Borgia",
            "role": "Templar Ally",
            "description": "The sister of Cesare and daughter of Rodrigo, a powerful political figure within the Borgia family.",
            "fullDescription": "Lucrezia Borgia is a complex figure in Assassin's Creed: Brotherhood. As the daughter of the Pope and sister to Cesare, she is an influential ally to the Templars and wields significant power within the Vatican. Despite her role in her family's schemes, her relationship with them is fraught with manipulation and a deep sense of a personal tragedy. Ezio encounters her several times and is a key witness to the dysfunction that ultimately contributes to the Borgia's downfall.",
            "traits": [
                "Influential",
                "Manipulative",
                "Tragic",
                "Political",
                "Scheming"
            ],
            "game": "Assassin's Creed: Brotherhood",
            "icon": "Templar",
            "image": "https://i.namu.wiki/i/4sbCipkzUwGJk9l1Sn6P-NtHX4GVhHOZPOpamvl33BHCTRBrfgVykO6xEVqThpIU2pNn-2OYkt2W6eidSuQu9A.webp"
        },
          {
              "id": 10,
              "name": "Vieri de' Pazzi",
              "role": "Templar",
              "description": "Ezio’s arrogant rival and one of the first targets he eliminates.",
              "fullDescription": "Vieri de' Pazzi was the arrogant and entitled son of the Pazzi family, and Ezio's primary rival in Florence. He was one of the first Templar targets Ezio eliminated, and his death was a key step in Ezio's journey of revenge. His cruelty and arrogance were a reflection of the Pazzi family's corrupt nature.",
              "traits": [
                  "Entitled",
                  "Cruel",
                  "Brash",
                  "Arrogant",
                  "Petty",
                  "Impetuous",
                  "Spoiled"
              ],
              "game": "Assassin's Creed II",
              "icon": "Target",
              "image": "https://static1.personalitydatabase.net/2/pdb-images-prod/cf5ca958/profile_images/b1b13ac5fb1f47a7a0697d046a98c1d3.png"
          },
          {
              "id": 11,
              "name": "Francesco de' Pazzi",
              "role": "Templar",
              "description": "Leader of the Pazzi conspiracy, responsible for Giuliano de' Medici’s murder.",
              "fullDescription": "Francesco de' Pazzi was the leader of the Pazzi conspiracy, a Templar plot to overthrow the Medici family in Florence. He was a key figure in the assassination of Ezio's family and the murder of Giuliano de' Medici. His death was a major blow to the Templars and their plans for Florence.",
              "traits": [
                  "Scheming",
                  "Ambitious",
                  "Cold",
                  "Ruthless",
                  "Deceptive",
                  "Calculated",
                  "Fanatical"
              ],
              "game": "Assassin's Creed II",
              "icon": "Crosshair",
              "image": "https://i.ytimg.com/vi/FCqopYSS8_o/maxresdefault.jpg"
          },
          {
              "id": 12,
              "name": "Jacopo de' Pazzi",
              "role": "Templar",
              "description": "Senior conspirator, betrayed by Rodrigo Borgia after the failed coup.",
              "fullDescription": "Jacopo de' Pazzi was a senior conspirator in the Pazzi plot. He was a cowardly and greedy man who was betrayed by Rodrigo Borgia after the failed coup. His death was a testament to the Templars' ruthless nature and their willingness to betray their own for power.",
              "traits": [
                  "Cowardly",
                  "Greedy",
                  "Desperate",
                  "Weak-Willed",
                  "Cowering",
                  "Self-Serving"
              ],
              "game": "Assassin's Creed II",
              "icon": "Truck",
              "image": "https://i.ytimg.com/vi/3eneTi1oD3Y/maxresdefault.jpg"
          },
          {
              "id": 13,
              "name": "Lorenzo de' Medici",
              "role": "Ally / Ruler of Florence",
              "description": "Ruler of Florence and supporter of the Assassins, targeted by the Pazzi conspiracy.",
              "fullDescription": "Lorenzo de' Medici was the powerful and respected ruler of Florence. He was a patron of the arts and a staunch supporter of the Assassins, who helped him fight against the Templar conspiracy. His diplomatic and strategic mind was a crucial asset in the struggle for control of Florence.",
              "traits": [
                  "Diplomatic",
                  "Respected",
                  "Strategic",
                  "Charismatic",
                  "Wise",
                  "Influential",
                  "Patron"
              ],
              "game": "Assassin's Creed II",
              "icon": "Home",
              "image": "https://64.media.tumblr.com/735ff16a560495fb37fb79dbdc45f996/tumblr_inline_pfc8brSppp1t6xa09_500.png"
          },
          {
              "id": 18,
              "name": "Silvio Barbarigo",
              "role": "Templar",
              "description": "Venetian noble who sought control of the city through violence.",
              "fullDescription": "Silvio Barbarigo was a brutal and ambitious Venetian noble who sought to seize control of the city. He used violence and intimidation to achieve his goals, making him a prime target for Ezio. His death was a crucial step in liberating Venice from Templar control.",
              "traits": [
                  "Brutal",
                  "Ambitious",
                  "Ruthless",
                  "Violent",
                  "Cruel",
                  "Authoritarian",
                  "Aggressive"
              ],
              "game": "Assassin's Creed II",
              "icon": "Target",
              "image": "https://i.ytimg.com/vi/MXeinUonYWs/maxresdefault.jpg"
          },
          {
              "id": 19,
              "name": "Marco Barbarigo",
              "role": "Templar",
              "description": "Doge of Venice and Templar puppet, eliminated by Ezio.",
              "fullDescription": "Marco Barbarigo was the corrupt Doge of Venice and a Templar puppet. He was a greedy and manipulative ruler who used his position to further the Templar cause. His assassination by Ezio was a major victory for the Assassins and a crucial step in liberating Venice from Templar rule.",
              "traits": [
                  "Greedy",
                  "Authoritarian",
                  "Manipulative",
                  "Corrupt",
                  "Puppet",
                  "Scheming",
                  "Self-Serving"
              ],
              "game": "Assassin's Creed II",
              "icon": "Crown",
              "image": "https://i.ytimg.com/vi/QMXtTA5_Pbs/maxresdefault.jpg"
          },
          {
              "id": 20,
              "name": "Dante Moro",
              "role": "Templar",
              "description": "Silvio Barbarigo’s brutal enforcer, killed during Ezio’s Venetian campaign.",
              "fullDescription": "Dante Moro was a brutal and aggressive enforcer for Silvio Barbarigo. He was a key figure in the Templars' operations in Venice and was responsible for much of the violence in the city. His death was a necessary step in dismantling the Templar presence in Venice.",
              "traits": [
                  "Violent",
                  "Loyal",
                  "Aggressive",
                  "Brutal",
                  "Fierce",
                  "Intimidating"
              ],
              "game": "Assassin's Creed II",
              "icon": "Crosshair",
              "image": "https://static0.thegamerimages.com/wordpress/wp-content/uploads/2022/07/Assassins-Creed-2-Dante.jpg?q=50&fit=crop&w=825&dpr=1.5"
          },
          {
              "id": 48,
              "name": "Girolamo Savonarola",
              "role": "Dominican Friar / Reformer",
              "description": "A fiery preacher who led Florence through a radical religious transformation during the late 15th century.",
              "fullDescription": "Born in Ferrara in 1452, Savonarola rose to prominence in Florence with apocalyptic sermons condemning corruption, secular art, and moral decay. After the fall of the Medici in 1494, he helped establish a theocratic republic, declaring Florence the 'New Jerusalem'. His infamous 'Bonfire of the Vanities' symbolized his campaign for spiritual renewal. Defying Pope Alexander VI, Savonarola was excommunicated, arrested, and executed in 1498. His legacy lived on through the Piagnoni movement and inspired early Protestant reformers.",
              "traits": [
                  "Zealous",
                  "Visionary",
                  "Controversial",
                  "Revolutionary",
                  "Fanatical",
                  "Devout",
                  "Charismatic"
              ],
              "game": "Assassin's Creed II",
              "image": "https://assets.mycast.io/characters/girolamo-savonarola-10352725-normal.jpg?1679572207",
              "icon": "Fire"
          },
          {
              "id": 21,
              "name": "Leonardo da Vinci",
              "role": "Ally / anatomist / sculptor /cartographer /painter / botanist / engineer / architect / mathematician",
              "description": "Inventor and close friend to Ezio, helps decode codex pages and upgrade weapons.",
              "fullDescription": "Leonardo da Vinci was a genius inventor, artist, and close friend to Ezio. He was a key ally to the Assassins, helping Ezio by decoding his father's codex pages and upgrading his weapons. His brilliant mind and inventions were instrumental in Ezio's success.",
              "traits": [
                  "Genius",
                  "Inventive",
                  "Supportive",
                  "Creative",
                  "Brilliant",
                  "Curious",
                  "Perceptive"
              ],
              "game": "Assassin's Creed II",
              "icon": "Apple",
              "image": "https://i.redd.it/fcgsv0ybrzr41.jpg"
          },
          {
              "id": 23,
              "name": "Antonio de Magianis",
              "role": "Ally / Leader of the Thieves of Venice",
              "description": "Leader of the Venetian thieves and a key ally to Ezio in Venice.",
              "fullDescription": "Antonio de Magianis was the resourceful and streetwise leader of the Venetian thieves. He was a loyal ally to Ezio in Venice, providing him with vital intel and support against the Templars. His network of thieves and his knowledge of the city's rooftops were invaluable to the Assassins' cause.",
              "traits": [
                  "Resourceful",
                  "Loyal",
                  "Streetwise",
                  "Clever",
                  "Brave",
                  "Reliable",
                  "Cunning"
              ],
              "game": "Assassin's Creed II",
              "icon": "Users",
              "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4DUVwHsjQqRSKZIEsutYEfo3biwZYU0_fbjw6VLqpstjtajw6oqmYL1T5aOrabh5BmkQ&usqp=CAU"
          },
          {
              "id": 24,
              "name": "Teodora Contanto",
              "role": "Ally",
              "description": "Madame of a brothel and leader of the courtesans in Venice, helps Ezio gather intel.",
              "fullDescription": "Teodora Contanto was the clever and influential leader of the courtesans in Venice. She was a key ally to Ezio, using her network of spies and informants to gather intel on the Templars. Her strategic mind and knowledge of the city's elite were instrumental in helping the Assassins in their fight against the Borgia.",
              "traits": [
                  "Clever",
                  "Influential",
                  "Strategic",
                  "Intelligent",
                  "Resourceful",
                  "Commanding",
                  "Mysterious"
              ],
              "game": "Assassin's Creed II",
              "icon": "Heart",
              "image": "https://pbs.twimg.com/media/Edpbn1_XoAIJ86y.png"
          },
          {
              "id": 25,
              "name": "Bartolomeo d'Alviano",
              "role": "Ally / Conditierro",
              "description": "Mercenary captain who aids Ezio in Venice and later in Rome.",
              "fullDescription": "Bartolomeo d'Alviano was a bold and loyal mercenary captain who became a valuable ally to Ezio. He aided the Assassins in their fight against the Templars in Venice and later in Rome. His military prowess and fierce loyalty were a great asset to the Brotherhood.",
              "traits": [
                  "Brave",
                  "Loud",
                  "Loyal",
                  "Fierce",
                  "Boisterous",
                  "Military-Minded",
                  "Reliable"
              ],
              "game": "Assassin's Creed II",
              "icon": "Sword",
              "image": "https://assets.mycast.io/characters/bartolomeo-836159-normal.jpg?1594963691"
          },
          {
              "id": 26,
              "name": "Paola",
              "role": "Assassin",
              "description": "Leader of the Florentine courtesans and owner of La Rosa Colta. She teaches Ezio how to blend and evade guards.",
              "fullDescription": "Paola was the clever and resilient leader of the Florentine courtesans. She was an Assassin who taught Ezio how to blend into crowds and use his surroundings to his advantage. Her network of courtesans provided crucial intel and support to the Assassins' cause, and she was a vital figure in Ezio's early training.",
              "traits": [
                  "Clever",
                  "Resilient",
                  "Supportive",
                  "Resourceful",
                  "Patient",
                  "Guiding",
                  "Strategic"
              ],
              "game": "Assassin's Creed II",
              "icon": "Heart",
              "image": "https://i.ytimg.com/vi/2hOuwKca8rI/maxresdefault.jpg"
          },
                {
              "id": 27,
              "name": "La Volpe",
              "role": "Assassin / Leader of the Thieves of Florence and Rome ",
              "description": "Mysterious leader of the Florentine thieves' guild. Known for his stealth and intelligence, he aids Ezio in uncovering conspiracies.",
              "fullDescription": "La Volpe was the elusive and streetwise leader of the Florentine thieves' guild. He was a high-ranking Assassin who initially distrusted Ezio but eventually became a loyal ally. His knowledge of the city's hidden passages and his network of informants were invaluable to Ezio in his fight against the Templars.",
              "traits": [
                  "Elusive",
                  "Streetwise",
                  "Loyal",
                  "Cunning",
                  "Mysterious",
                  "Resourceful",
                  "Skeptical"
              ],
              "game": "Assassin's Creed II",
              "icon": "Users",
              "image": "https://i.ytimg.com/vi/SejCoBSAeEc/maxresdefault.jpg"
          },
          {
              "id": 28,
              "name": "Niccolò Machiavelli",
              "role": "Assassin / Philosopher",
              "description": "Florentine philosopher and strategist. A high-ranking Assassin who helps Ezio dismantle the Borgia and Savonarola's influence.",
              "fullDescription": "Niccolò Machiavelli was a real-life Florentine philosopher and diplomat, portrayed as a high-ranking Assassin in the game. He was a strategic and rational figure who provided Ezio with political and tactical advice. He was instrumental in helping Ezio dismantle the Borgia and Savonarola's influence in Florence, and he served as a key figure in the Assassin Brotherhood.",
              "traits": [
                  "Strategic",
                  "Political",
                  "Rational",
                  "Calculating",
                  "Pragmatic",
                  "Intellectual",
                  "Ambitious"
              ],
              "game": "Assassin's Creed II",
              "icon": "ShieldCheck",
              "image": "https://66.media.tumblr.com/f0764eb0e3683363356720e0c94c646f/tumblr_inline_paua0iZYCP1qct9oj_540.png"
          }
              
            ],
          //PIECES OF EDEN 
          weapons: [
            {
            "id": 1,
            "name": "Apple of Eden",
            "type": "Orb",
            "description": "The most iconic Piece of Eden. A spherical artifact that can manipulate minds, create illusions, and project energy.",
            "fullDescription": "The Apple of Eden is a powerful relic created by the Isu to control humanity. Its primary function is to manipulate the minds of a large group of people, making them see illusions and compelling them to obey the user's will. Many Apples have been used to create political movements, establish empires, and instigate wars. Altaïr used one to rebuild the Assassin Brotherhood, and Ezio fought to keep one out of the hands of the Borgias.",
            "image": "https://oyster.ignimgs.com/mediawiki/apis.ign.com/assassins-creed-3/a/a6/Apple-of-Eden.jpg",
            "specs": ["Mind Control", "Illusions", "Energy Blasts"],
            "game": "Assassin's Creed (Multiple)",
            "icon": "Apple"
            },
            {
            "id": 2,
            "name": "Sword of Eden",
            "type": "Blade",
            "description": "A powerful sword that grants its wielder incredible charisma, combat prowess, and the ability to project energy blasts.",
            "fullDescription": "The Sword of Eden is a legendary Isu artifact disguised as a blade. It enhances the wielder's charisma, making them an inspirational leader capable of commanding armies. It also amplifies physical strength and agility, and can be used to fire powerful energy blasts. These swords have been wielded by historical figures like King Arthur (as Excalibur) and Jeanne d'Arc. In Assassin's Creed Unity, one was used by the Templar François-Thomas Germain and later by the Assassin Arno Dorian.",
            "image": "https://cdnb.artstation.com/p/assets/images/images/072/682/639/large/lorenzo-tagliatesta-photo-2024-02-14-23-08-54.jpg?1707948950",
            "specs": ["Enhanced Charisma", "Combat Augmentation", "Energy Projection"],
            "icon": "Sword"
            },
            {
            "id": 3,
            "name": "Staff of Eden",
            "type": "Staff/Scepter",
            "description": "A staff that can amplify the power of an Apple of Eden, control minds, and even grant a form of immortality.",
            "fullDescription": "The Staff of Eden, also known as the Papal Staff or Staff of Hermes, is a versatile Isu artifact. It can be used as a weapon, a key, and a conduit for immense power. In Assassin's Creed II, Rodrigo Borgia used the Papal Staff to amplify the power of his Apple of Eden. In Assassin's Creed Odyssey, the Staff of Hermes was a central plot device, granting the wielder, Kassandra, a form of biological immortality and a connection to the Isu network.",
            "image": "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.6435-9/101845495_2602306759870217_7411939699679297536_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=bYokEgpHEw8Q7kNvwFK-FZN&_nc_oc=AdnyVyOS870rli44J7MnQtoZiii0L0AIbqhZi05X1NeLA4PcP5g-iDwCosVr7Tt5W2M&_nc_zt=23&_nc_ht=scontent-sjc3-1.xx&_nc_gid=ZdPx2TD2jGTrtIHn8aY5Hw&oh=00_AfbXgrfqxJcQD4asGdLdS0UQp5t4FIl-4uyJ0ZBU3bNvQw&oe=68F1256A",
            "specs": ["Amplification", "Mind Control", "Immortality"],
            "icon": "Crosshair"
            },
            {
            "id": 4,
            "name": "Shroud of Eden",
            "type": "Linen Cloth",
            "description": "A linen cloth with immense regenerative properties, capable of healing wounds and even resurrecting the recently deceased.",
            "fullDescription": "The Shroud of Eden is a rare and powerful Piece of Eden. It is a linen cloth that can heal any wound and even bring the recently deceased back to life, though not without a price. It was famously known as the Shroud of Turin. In Assassin's Creed Syndicate, the Templar Grand Master, Crawford Starrick, sought to use it to secure absolute power over London. Its regenerative abilities made it one of the most sought-after artifacts by both the Assassins and the Templars.",
            "image": "https://harrisonanderson123.wordpress.com/wp-content/uploads/2018/02/shroud-of-consus.jpg",
            "specs": ["Healing", "Regeneration", "Resurrection"],
            "icon": "ShieldCheck"
            },
            {
            "id": 5,
            "name": "Spear of Eden",
            "type": "Spearhead",
            "description": "A powerful Isu spear, a shattered Piece of Eden that grants its wielder incredible strength and special abilities.",
            "fullDescription": "The Spear of Leonidas is a broken Isu artifact that was passed down through the bloodline of Kassandra and Alexios. Unlike other Pieces of Eden, it is a shattered object that doesn't have a grand, world-ending power, but rather augments the user's physical abilities. It can be upgraded by collecting Fragments of Eden, granting new powers like enhanced stealth, devastating attacks, and health regeneration. The Spear of Leonidas is the central weapon and a key part of the protagonist's identity in Assassin's Creed Odyssey.",
            "image": "https://i5.walmartimages.com/seo/Assassin-s-Creed-Odyssey-Spear-of-Leonidas_00f4f702-95c9-4bcb-99d7-706db7a59907.70b8b81975b8f7b748379db1a5c4d0bf.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
            "specs": ["Combat Augmentation", "Health Regeneration", "Elemental Attacks"],
            "icon": "Shield"
            },
            {
            "id": 6,
            "name": "Koh-i-Noor",
            "type": "Diamond",
            "description": "A diamond-shaped Piece of Eden that can locate other Pieces of Eden and link their powers.",
            "fullDescription": "The Koh-i-Noor, or 'Mountain of Light,' is a legendary diamond that is secretly a Piece of Eden. It has the unique ability to locate and track other Pieces of Eden, making it an invaluable tool for both the Assassins and Templars. In addition, it is capable of linking the consciousness of its wielder to a 'Nexus,' a network of Isu artifacts. It was featured prominently in Assassin's Creed Chronicles: India, where the Assassin Arbaaz Mir sought to retrieve it from the Templars.",
            "image": "https://static0.thegamerimages.com/wordpress/wp-content/uploads/2024/07/assassin-s-creed-chronicles-india-abraaz-giving-koh-i-noor-ethan-frye.jpg?q=49&fit=crop&w=825&dpr=2",
            "specs": ["Artifact Tracking", "Nexus Connection", "Power Linking"],
            "icon": "Crown"
            },
            {
            "id": 7,
            "name": "Crystal Ball",
            "type": "Sphere",
            "description": "A crystalline orb that allows its user to view the past and communicate with the Isu.",
            "fullDescription": "The Crystal Ball is a lesser-known Piece of Eden, but no less powerful. It functions as a communication device and a record of the past, allowing its user to witness historical events and communicate with the Isu. In Assassin's Creed 3, it was used by the protagonist Connor to communicate with the Isu Juno. It is a powerful tool for those seeking to understand the First Civilization's history and their plans for humanity.",
            "image": "https://static0.thegamerimages.com/wordpress/wp-content/uploads/2024/07/assassin-s-creed-valhalla-eivor-holding-crystal-ball.jpg?q=49&fit=crop&w=825&dpr=2",
            "specs": ["Temporal Viewing", "Isu Communication", "Knowledge Transfer"],
            "icon": "Zap"
            },
            {
            "id": 8,
            "name": "Precursor Box",
            "type": "Box",
            "description": "A device that can store and siphon the power of other Pieces of Eden, capable of displaying holographic messages.",
            "fullDescription": "The Precursor Box is an enigmatic Isu artifact that functions as both a data storage device and a power source. It can siphon energy from other Pieces of Eden, and it is capable of displaying holographic messages from the Isu. It was a central object in Assassin's Creed Rogue and Assassin's Creed IV: Black Flag's 'Freedom Cry' DLC, where it was used to access the hidden knowledge of the Isu. It is a testament to the Isu's advanced technology and their ability to store immense amounts of information.",
            "image": "https://i.imgur.com/5VvEB56.jpg",
            "specs": ["Power Storage", "Holographic Projection", "Data Retrieval"],
            "icon": "Car"
            },
            {
            "id": 9,
            "name": "Ankh of Eden",
            "type": "Amulet",
            "description": "A symbol of life and immortality with the ability to heal and prolong a person's life.",
            "fullDescription": "The Ankh of Eden is an Isu artifact that holds the power of life and death. Similar to the Shroud, it possesses significant healing capabilities and can be used to extend a person's lifespan. Its powers are often associated with the Egyptian goddess Isis, and it's believed to be the basis for the mythological Ankh symbol. This piece is a testament to the Isu's advanced understanding of biology and consciousness, making it a valuable and dangerous artifact to possess.",
            "image": "https://static0.thegamerimages.com/wordpress/wp-content/uploads/2024/07/assassin-s-creed-ankh-from-comic.jpg?q=49&fit=crop&w=825&dpr=2",
            "specs": ["Life Extension", "Healing", "Revitalization"],
            "icon": "Heart"
            }
        ],


          groups: [
              {
            "id": 1,
            "name": "The Assassin Brotherhood",
            "type": "Secret Brotherhood",
            "description": "A clandestine organization dedicated to fighting the Templars and preserving free will, guided by their core tenets.",
            "fullDescription": "The Assassin Brotherhood is a centuries-old organization that believes in a world of peace achieved through free will. Their philosophy, known as 'The Creed,' guides their actions. They operate from the shadows, striking down those who would seek to control humanity. The Brotherhood has existed throughout history, with notable members including Altaïr Ibn-La'Ahad, Ezio Auditore da Firenze, and Ratonhnhaké:ton.",
            "image": "https://i.pinimg.com/originals/3e/7b/07/3e7b07579898826f622611e1f2412b4a.jpg",
            "specs": [ "Stealthy",
                        "Agile",
                        "Resilient",
                        "Resourceful",
                        "Loyal"],
            "game": "Assassin's Creed (Multiple)",
            "icon": "Users"
        },
        {
            "id": 2,
            "name": "The Templar Order",
            "type": "Military Order",
            "description": "An ancient organization that seeks to impose order and control on humanity, believing that peace can only be achieved through a lack of free will.",
            "fullDescription": "The Templar Order is the main antagonist force throughout the Assassin's Creed series. They believe that humanity is too chaotic to govern itself and that a new world order must be established through control. They are ruthless, cunning, and have infiltrated every major institution of power, from governments to religious organizations. Their leaders, such as Rodrigo Borgia and Haytham Kenway, are some of the most formidable foes the Assassins have faced.",
            "image": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f18d4e01-eb24-4b24-9afe-07bf46a17d5b/d85xgje-76c9a6e6-b78c-4350-b1c1-5b17d41d0c3e.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi9mMThkNGUwMS1lYjI0LTRiMjQtOWFmZS0wN2JmNDZhMTdkNWIvZDg1eGdqZS03NmM5YTZlNi1iNzhjLTQzNTAtYjFjMS01YjE3ZDQxZDBjM2UuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.gisy1CZtMqqQ7jLJUmVSONaXB4Puyc_JzLMe09g4d9E",
            "specs": [ "Orderly",
                        "Strategic",
                        "Powerful",
                        "Disciplined",
                        "Ambitious"],
            "game": "Assassin's Creed (Multiple)",
            "icon": "Templar"
        },
        {
            "id": 3,
            "name": "The Crusaders",
            "type": "Religious Army",
            "description": "Catholic European knights who participated in the Crusades, fighting for control of the Holy Land.",
            "fullDescription": "The Crusaders were a powerful military force that arrived in the Holy Land during the Third Crusade. In Assassin's Creed, they are depicted as a zealous and often violent faction, with many Templars secretly operating within their ranks. The Assassins, led by Altaïr, often had to eliminate Templars hiding among the Crusader ranks to protect the innocent from their corrupt ambitions.",
            "image": "https://cdn11.bigcommerce.com/s-o5r3sdh7a5/images/stencil/1280x1280/products/1005/11872/cm-se058p2__22288.1641678491.jpg?c=1",
            "specs": [  "Zealous",
                        "Armored",
                        "Relentless",
                        "Devout",
                        "Disciplined"],
            "game": "Assassin's Creed (1)",
            "icon": "Sword"
        },
        {
            "id": 4,
            "name": "The Saracens",
            "type": "Military Faction",
            "description": "The local Arab forces who controlled the Holy Land and were in conflict with the Crusaders.",
            "fullDescription": "The Saracens were the Muslim forces who fought against the Crusaders during the Third Crusade. They were led by figures like Saladin, a revered and respected military leader. In the first Assassin's Creed, the Saracen guards and soldiers serve as the primary opposition to the Crusaders, and Altaïr must navigate their territories carefully to complete his missions.",
            "image": "https://i.pinimg.com/564x/ee/dc/2a/eedc2a1cdb2321c6c2998be541f8eb7a.jpg",
            "specs": [ "Valiant",
                        "Skilled",
                        "Resourceful",
                        "Resilient",
                        "Strategic"],
            "game": "Assassin's Creed (1)",
            "icon": "Crosshair"
        },
        {
            "id": 5,
            "name": "Mercenaries",
            "type": "Contract Soldiers",
            "description": "Fighters-for-hire who sell their services to the highest bidder, often serving the Templars or other wealthy patrons.",
            "fullDescription": "Mercenaries appear in several Assassin's Creed games, often as a neutral or antagonistic faction. They are not tied to a specific political or religious ideology but are motivated by money. In games like Assassin's Creed II and Brotherhood, Ezio could hire mercenary guilds to fight alongside him, turning the Templars' own tools against them.",
            "image": "https://www.creativeuncut.com/gallery-16/art/acb-mercenaries-fight.jpg",
            "specs": [ "Ruthless",
                        "Skilled",
                        "Greedy",
                        "Unpredictable",
                        "Tough"],
            "game": "Assassin's Creed (Multiple)",
            "icon": "Shield"
        },
        {
            "id": 6,
            "name": "The Papal Army",
            "type": "Religious-Military",
            "description": "The private army of the Borgia Pope, used to enforce their will and maintain control over Rome.",
            "fullDescription": "In Assassin's Creed Brotherhood, the Papal Army serves as the primary military force under the control of the Borgia family. They are well-equipped, disciplined, and loyal to the Pope, Rodrigo Borgia, who is secretly a high-ranking Templar. Ezio and the Assassins of Rome must dismantle their power by eliminating key targets and disrupting their operations across the city.",
            "image": "https://www.magikaverse.com/wp-content/uploads/2024/06/AssassinsCreedBrotherhood_render_Swiss_Guard.jpg",
            "specs": [  "Holy",
                        "Loyal",
                        "Disciplined",
                        "Commanded",
                        "Devoted"],
            "game": "Assassin's Creed: Brotherhood",
            "icon": "Crown"
        },
        {
            "id": 7,
            "name": "The Continental Army",
            "type": "Rebel Military",
            "description": "The unified force of the Thirteen Colonies during the American Revolution, fighting for independence from British rule.",
            "fullDescription": "The Continental Army, led by General George Washington, is a key faction in Assassin's Creed III. The protagonist, Ratonhnhaké:ton (Connor), allies with them in their fight against the British. The Assassins support the Patriots' cause, believing that their fight for freedom aligns with the Brotherhood's ideals of free will.",
            "image": "https://imgc.artprintimages.com/img/print/george-washington-taking-command-of-the-continental-army-american-revolution-july-1775_u-l-q1j4h3y0.jpg?artHeight=550&artPerspective=n&artWidth=550&background=fbfbfb",
            "specs": [  "Unified",
                        "Resistant",
                        "Organized",
                        "Determined",
                        "Resilient"],
            "game": "Assassin's Creed (3)",
            "icon": "Star"
        },
        {
            "id": 8,
            "name": "The British Army",
            "type": "Imperial Military",
            "description": "The disciplined and well-equipped forces of the British Empire, serving as the main antagonists in the American colonies.",
            "fullDescription": "The British Army is the primary military force of the British Empire, and its soldiers are a common sight in Assassin's Creed III and Assassin's Creed IV: Black Flag. In the American Revolution, they are the main opposition to the Continental Army, while in the Caribbean, they fight against pirates and rival colonial powers. They are known for their signature red coats and rigid fighting formations.",
            "image": "https://i.pinimg.com/originals/3e/ed/91/3eed9145bc7c672ce366a6c9bc256271.jpg",
            "specs": [  "Regal",
                        "Disciplined",
                        "Strategic",
                        "Resilient",
                        "Powerful"],
            "game": "Assassin's Creed (3), Black Flag",
            "icon": "ShieldCheck"
        },
        {
            "id": 9,
            "name": "Pirates",
            "type": "Lawless Collective",
            "description": "A group of opportunistic and rebellious seamen who operate outside the law, seeking wealth and freedom in the Caribbean.",
            "fullDescription": "Pirates are the dominant faction in Assassin's Creed IV: Black Flag. Led by historical figures like Edward Kenway and Blackbeard, they form a collective of misfits who seek to live free from the oppressive rule of colonial empires. The Golden Age of Piracy serves as a backdrop for Edward Kenway's journey, as he finds himself caught between the Assassins and Templars.",
            "image": "https://upload.wikimedia.org/wikipedia/commons/1/12/Capture-of-Blackbeard.jpg",
            "specs": [  "Reckless",
                        "Cunning",
                        "Bold",
                        "Unpredictable",
                        "Savvy"],
            "game": "Assassin's Creed: Black Flag",
            "icon": "Skull"
        },
        {
            "id": 10,
            "name": "The Spanish Army",
            "type": "Colonial Military",
            "description": "The imperial forces of the Spanish Empire, who maintain control over their territories in the Caribbean and Central America.",
            "fullDescription": "The Spanish Army is a major rival to both the British and the pirates in Assassin's Creed IV: Black Flag. They are often tasked with guarding valuable artifacts and treasure, making them a frequent target for Edward Kenway. Their navy is a formidable opponent, and their soldiers are well-trained and loyal to the Spanish Crown.",
            "image": "https://img1.wsimg.com/isteam/ip/9c73235b-179b-4b3b-9073-ef5ed3d1b639/440px-Landing_of_Columbus_(2).jpg/:/",
            "specs": [ "Proud",
                        "Stalwart",
                        "Disciplined",
                        "Historic",
                        "Valiant"],
            "game": "Assassin's Creed: Black Flag",
            "icon": "Target"
        },
        {
            "id": 11,
            "name": "The Isu",
            "type": "First Civilization",
            "description": "A technologically advanced, pre-human civilization that created humanity and the Pieces of Eden.",
            "fullDescription": "The Isu, also known as the First Civilization, were a highly advanced humanoid species that lived on Earth long before humanity. They created humanity as a servitor race and used powerful artifacts known as Pieces of Eden to control them. The Isu were wiped out by a cataclysmic solar flare, but their legacy lives on through their temples and artifacts, which the Assassins and Templars constantly fight over.",
            "image": "https://www.accesstheanimus.com/GIN/29.png",
            "specs": [  "Advanced",
                        "Mysterious",
                        "Intelligent",
                        "Immortal",
                        "Innovative"],
            "game": "Assassin's Creed (Multiple)",
            "icon": "Zap"
        },
        {
            "id": 12,
            "name": "The French Army",
            "type": "Nationalist Military",
            "description": "The armed forces of France, fighting during the tumultuous French Revolution.",
            "fullDescription": "In Assassin's Creed Unity, the French Army and its various factions are a constant presence. The protagonist, Arno Dorian, must navigate the chaos of the French Revolution, fighting alongside revolutionary figures and against the royalist forces. The army's loyalty is divided, with some fighting for the new Republic and others for the old monarchy, making them a complex and unpredictable faction.",
            "image": "https://i0.wp.com/militaryhistorynow.com/wp-content/uploads/2015/11/Napoleon_returned.jpg?resize=650%2C471&ssl=1",
            "specs": [  "Gallant",
                        "Strategic",
                        "Resilient",
                        "Unified",
                        "Historic"],
            "game": "Assassin's Creed: Unity",
            "icon": "Users"
        },
        {
            "id": 13,
            "name": "The Roman Empire",
            "type": "Ancient Empire",
            "description": "The formidable military power that controlled much of Europe and the Mediterranean in ancient times.",
            "fullDescription": "The Roman Empire is a central force in Assassin's Creed Origins and Assassin's Creed Valhalla. In Origins, the Roman occupation of Egypt is a source of conflict, as the people struggle under their oppressive rule. In Valhalla, the remnants of the Roman Empire are seen in the ruins and artifacts left behind, which Eivor can explore to uncover hidden secrets and stories of the First Civilization.",
            "image": "https://kingtravelromania.com/wp-content/uploads/the-aquilifer-of-the-roman-army.jpg",
            "specs": [ "Imperial",
                        "Organized",
                        "Expansive",
                        "Powerful",
                        "Enduring"],
            "game": "Assassin's Creed: Origins, Valhalla",
            "icon": "Crown"
        },
        {
            "id": 14,
            "name": "Ottoman Army",
            "type": "Imperial Military",
            "description": "The vast and disciplined military forces of the Ottoman Empire, who controlled a significant portion of the world in the 16th century.",
            "fullDescription": "The Ottoman Army is the formidable military force of the Ottoman Empire, the primary faction ruling Constantinople in Assassin's Creed: Revelations. Their presence is felt throughout the city as they maintain control and suppress any resistance. While the Janissaries are their most elite and well-known units, the army as a whole presents a significant threat to Ezio and the Assassins as they navigate the city and work to counter the Templar influence.",
            "image": "https://pbs.twimg.com/media/Eeo87WhUMAEAfOw.png",
            "specs": [  "Formidable",
                        "Disciplined",
                        "Historic",
                        "Strategic",
                        "Resilient"],
            "game": "Assassin's Creed: Revelations",
            "icon": "ShieldCheck"
        },
        {
            "id": 15,
            "name": "The Byzantines",
            "type": "Imperial Faction",
            "description": "The remnants of the Eastern Roman Empire, who are in a state of political turmoil and conflict in Constantinople.",
            "fullDescription": "The Byzantines appear in Assassin's Creed Revelations as a rival faction to the Ottoman Empire. They are the descendants of the Eastern Roman Empire and still hold a significant presence in Constantinople, even though the city is now under Ottoman control. The Byzantines are in a state of civil war and are manipulated by the Templars to destabilize the region.",
            "image": "https://www.shutterstock.com/image-photo/byzantine-army-flag-invasion-600nw-2459510139.jpg",
            "specs": [ "Sophisticated",
                        "Resilient",
                        "Historic",
                        "Strategic",
                        "Enduring"],
            "game": "Assassin's Creed: Revelations",
            "icon": "Crown"
        },
        {
                    "id": 16,
                    "name": "Abstergo Industries",
                    "type": "Corporation",
                    "description": "A multinational corporate conglomerate serving as the modern-day front for the Templar Order.",
                    "fullDescription": "Abstergo Industries is a powerful and secretive corporation in the Assassin's Creed universe. It operates as the public face of the Templar Order, using advanced technology and global influence to further the Templars' goals of control and order. Abstergo is responsible for the development of the Animus device, which allows users to relive genetic memories.",
                    "image": "https://static0.thegamerimages.com/wordpress/wp-content/uploads/2020/01/Assassins-Creed-vidic-Cropped-1.v1.jpg?q=50&fit=crop&w=825&dpr=1.5",
                    "specs": [
                        "Corporate",
                        "Innovative",
                        "Secretive",
                        "Influential",
                        "Technological"
                    ],
                    "game": "Assassin's Creed Series",
                    "icon": "Building"
        } 
        ]
    }
    
  };