import React, { useState, useEffect } from 'react';
import { 
  ChevronDown, Sword, Apple, Templar, Target, Shield, Crown, Zap, Heart, Users, 
  ArrowLeft, Truck, Crosshair, ShieldCheck, Car, Home, Star,
  ChevronRight, Gamepad2
} from 'lucide-react';

import { games } from '../data/games'; 
import {categorySummaries} from '../data/categorySummaries'
import { gameData } from '../data/games'; 
import CharacterProfile from './CharacterProfile'; 
import WeaponProfile from './WeaponProfile'; 
import GroupsProfile from './GroupsProfile'; 
import VehiclesProfile from './Vehicles';



const GamePortal = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState('characters');
  const [isVisible, setIsVisible] = useState({});
  const [selectedSubGame, setSelectedSubGame] = useState(null); 
  const [expandedItemId, setExpandedItemId] = useState(null);
  const [showProfile, setShowProfile] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  
const iconMapping = {
    Sword: Sword,
    Apple: Apple,
    Gamepad2: Gamepad2,
    Shield: Shield,
    Crown: Crown,
    Zap: Zap,
    Heart: Heart,
    Users: Users,
    ArrowLeft: ArrowLeft,
    Truck: Truck,
    Crosshair: Crosshair,
    ShieldCheck: ShieldCheck,
    Car: Car,
    Home: Home,
    Star: Star,
    Target: Target,
    Users: Users,
    Map: Map,
  };

  const categoryIcons = {
    characters: Users,
    weapons: Sword,
    groups: Users, 
    vehicles: Car,
    locations: Home
  };

  const resetVisibility = () => {
    setIsVisible({});
  };

  
  useEffect(() => {
    if (currentPage !== 'home') {
      const timer = setTimeout(() => {
        const currentData = gameData[currentPage]?.[selectedCategory] || [];
        currentData.forEach((item, index) => {
          setTimeout(() => {
            setIsVisible(prev => ({ ...prev, [item.id]: true }));
          }, index * 150);
        });
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [currentPage, selectedCategory]);

  // Home Page Component
  const HomePage = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white">
      {/* Hero Section */}
        <div className="relative overflow-hidden">
          {/* Background Image Layer */}
          <div className="absolute inset-0">
            <img
              src="https://cdn3.whatculture.com/images/2014/08/video-game-cover-montage.png" // Replace with your preferred controller image URL
              alt="Game controller background"
              className="w-full h-full object-cover opacity-10 mix-blend-soft-light"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-purple-900/30"></div>
          </div>

          {/* Content Layer */}
          <div className="relative container mx-auto px-6 py-20 text-center">
            <div className="animate-pulse mb-4">
              <Gamepad2 className="mx-auto h-20 w-20 text-blue-400" />
            </div>
            <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              GameVault
            </h1>
            <p className="text-2xl text-slate-300 max-w-3xl mx-auto mb-4">
              Your Gateway to Gaming Legends
            </p>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-12">
              Explore legendary gaming universes. Choose your adventure and take a leap of faith into our database.
            </p>
            <div className="animate-bounce">
              <ChevronDown className="mx-auto h-10 w-10 text-blue-400" />
            </div>
          </div>
        </div>

      {/* Game Selection */}
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
          Choose Your Universe
        </h2>
        <p className="text-center text-slate-400 mb-16 text-lg">
          Select a game to explore its world, characters and more
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game, index) => {
            const IconComponent = game.icon;
            return (
              <div
                key={game.id}
                className="group relative bg-slate-800/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-slate-700/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-50/20 cursor-pointer"
                onClick={() => {
                  setCurrentPage(game.id);
                  setSelectedCategory('characters');
                  resetVisibility();
                }}
              >
                {/* Game Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={game.image}
                  alt={game.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-100"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${game.gradient} opacity-70`}></div>
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full p-3">
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
              </div>

                {/* Game Info */}
                <div className="p-8">
                  <div className="mb-4">
                    <p className="text-blue-300 font-medium text-sm mb-2">{game.series}</p>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {game.name}
                    </h3>
                    <p className="text-sm font-[150] text-slate-300 leading-relaxed mb-5">
                      {game.description}
                    </p>
                  </div>

                  {/* Available Categories */}
                  <div className="mb-6">
                    <p className="text-sm font-semibold text-slate-200 uppercase tracking-wide mb-3">
                      Explore
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {game.categories.map((category) => {
                        const CategoryIcon = categoryIcons[category];
                        return (
                          <span
                            key={category}
                            className={`flex items-center gap-1 px-3 py-1 bg-gradient-to-r ${game.gradient} text-white text-xs rounded-full shadow-md capitalize`}
                          >
                            <CategoryIcon className="h-3 w-3" />
                            {category}
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-blue-400 font-medium">Enter World</span>
                    <ChevronRight className="h-5 w-5 text-blue-400 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );

  // Game Page Component
const GamePage = () => {
  const game = games.find(g => g.id === currentPage);
  const currentData = gameData[currentPage]?.[selectedCategory] || [];
  const availableCategories = game?.categories || [];

    const categorySummaries = {
      characters: {
        title: "Meet the Heroes & Villains",
        description: "Click onto a character to leap in faith into their universe, from hooded warriors who move through shadows, to rebels battling empires among the stars, and other fearless heroes and villains from worlds of action and adventure."
      },
      weapons: {
        title: "Arsenal and Equipment",
        description: "Explore the vast collection of weapons, from Ancient artifacts to galactic blasters."
      },
      vehicles: {
        title: "Vehicles of War",
        description: "Discover the powerful machines that dominate the battlefield, including tanks, jets, and starships."
      },
      groups: { // <-- Changed 'armor' to 'groups'
        title: "Factions and Organizations",
        description: "Explore the iconic factions, from the ancient organisations to the most elite units in the world."
      },
      locations: {
        title: "Iconic Locations",
        description: "Journey to the legendary cities, battlefields, and hidden sanctuaries that define this world."
      }
    };

    const currentSummary = categorySummaries[selectedCategory] || { title: "", description: "" };

    const handleItemClick = (item) => {
      setSelectedItem(item);
      setShowProfile(true);
    };

    const handleBackToGrid = () => {
      setSelectedItem(null);
      setShowProfile(false);
    };

    // CONDITIONAL STATEMENTS: SHOWING PROFILE OF EACH CATEGORY
    if (showProfile && selectedItem) {
      if (selectedCategory === 'characters') {
        return <CharacterProfile item={selectedItem} game={game} onBack={handleBackToGrid} />;
      } else if (selectedCategory === 'weapons') {
        return <WeaponProfile item={selectedItem} game={game} onBack={handleBackToGrid} />;
      } else if (selectedCategory === 'groups') { // <-- New conditional rendering for groups
        return <GroupsProfile item={selectedItem} game={game} onBack={handleBackToGrid} />;
      }
      else if (selectedCategory === 'vehicles') {
        return <VehiclesProfile item={selectedItem} game={game} onBack={handleBackToGrid} />;
      }
    }

  return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white">
        {/* Header (existing) */}
        <div className={`relative bg-gradient-to-r ${game?.gradient} py-16`}>
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="relative container mx-auto px-6">
            <button
              onClick={() => setCurrentPage('home')}
              className="flex items-center gap-2 mb-8 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <Home className="h-5 w-5" />
              <span>Back to Portal</span>
            </button>
            
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-4 text-white">
                {game?.name}
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                {game?.description}
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 py-8">
          {/* Category Navigation (existing) */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {availableCategories.map((category) => {
              const IconComponent = categoryIcons[category];
              return (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    resetVisibility();
                  }}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 capitalize ${
                    selectedCategory === category
                      ? `bg-gradient-to-r ${game?.gradient} shadow-lg`
                      : 'bg-slate-700/50 hover:bg-slate-600/50'
                  }`}
                >
                  <IconComponent className="h-5 w-5" />
                  <span className="font-medium">{category}</span>
                </button>
              );
            })}
          </div>
          
          {/* Summary Section (existing) */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              {currentSummary.title}
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              {currentSummary.description}
            </p>
          </div>
          
          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentData.map((item) => {
              const IconComponent = categoryIcons[selectedCategory];
              
              return (
                <div
                  key={item.id}
                  className={`group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 cursor-pointer ${
                    isVisible[item.id] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  onClick={() => handleItemClick(item)} 
                >
                  {/* IMAGE */}
                  <div className={`relative ${selectedCategory === 'characters' ? 'h-64' : 'h-48'} overflow-hidden`}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${game?.gradient} opacity-10`}></div>
                    <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full p-2">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    
                  </div>

                  {/* CONTENT */}
                
                  <div className="p-6">
                    {/* Description + Explore Button (removed from here) */}
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {item.name}
                      </h3>
                      <p className="text-white/80 text-sm font-medium">
                        {item.role || item.type}
                      </p>
                      <p className="text-sm font-[190] text-slate-500 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Empty State (existing) */}
          {currentData.length === 0 && (
            <div className="text-center py-20">
              <Star className="mx-auto h-16 w-16 text-slate-600 mb-4" />
              <h3 className="text-2xl font-bold text-slate-400 mb-2">Coming Soon</h3>
              <p className="text-slate-500">This category is being developed for {game?.name}</p>
            </div>
          )}
        </div>
      </div>
    );
  };

  return currentPage === 'home' ? <HomePage /> : <GamePage />;
};

export default GamePortal;