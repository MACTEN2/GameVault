import React from 'react';
import { ArrowLeft, Home, User } from 'lucide-react';

// 'selectedCategory' is now received as a prop
const CharacterProfile = ({ item, game, onBack, selectedCategory }) => {
  const isCharacter = selectedCategory === 'characters';
  
  // Note: The 'game' prop is an object that often contains a 'gradient' property,
  // which is used to style the traits/specs.

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white p-8">
      <div className="container mx-auto">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 mb-8 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
          <Home className="h-5 w-5" />
          <span>Back to Grid</span>
        </button>


        {/* Profile Container */}
        <div className="flex flex-col lg:flex-row glass-effect rounded-2xl p-6 lg:p-12 gap-8">
          {/* Left Side: Text Content */}
          <div className="flex-1 space-y-6">
            <div className="flex items-center gap-4 text-blue-400">
              <User className="h-8 w-8" />
            
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              {item.name}
            </h1>
            
            <p className="text-lg text-slate-300">
              <span className="font-bold text-white">Role:</span> {item.role}
            </p>
            
            {/* NEW: Appeared In Information */}
            {item.appeared_in && item.appeared_in.length > 0 && (
                <div className="space-y-2">
                   <h3 className="text-lg font-bold text-white border-b border-slate-700 pb-1 text-center">
                        Appeared In
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {item.appeared_in.map((gameTitle, index) => (
                            <span 
                                key={index} 
                                className="px-3 py-1 bg-purple-500/80 text-white text-sm font-semibold rounded-lg shadow-md"
                            >
                                {gameTitle}
                            </span>
                        ))}
                    </div>
                </div>
            )}
            {/* END NEW: Appeared In Information */}

            
            <div className="text-base leading-relaxed space-y-4">
              <p className="font-semibold text-slate-100">{item.description}</p>
              {/* Using item.fullDescription || item.history to support both data fields */}
              <p className="font-light text-slate-400">{item.fullDescription || item.history}</p>
            </div>
            
            
            <div className="space-y-3">
              <h2 className="text-2xl font-bold mt-8 border-b-2 border-slate-700 pb-2">
                Traits
              </h2>
              
              {/* TRAITS/Specs */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wide">
                  {isCharacter ? 'Key Abilities' : 'Specifications'}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {/* Using item.traits || item.specs to support both data fields */}
                  {(item.traits || item.specs || []).map((spec, specIndex) => (
                    <span
                      key={specIndex}
                      className={`px-3 py-1 bg-gradient-to-r ${game?.gradient} text-white text-xs rounded-full shadow-md`}
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Side: Media Display (Static Image Only) */}
          <div className="flex-1 flex flex-col justify-start items-center lg:justify-end">
            
            {/* Static Image Display */}
            <div className="w-full max-w-lg overflow-hidden rounded-xl shadow-2xl border-4 border-slate-700/50">
          
                
                {/* Image Element: Displays item.image. Fallback to a placeholder if item.image is empty */}
                <img
                    src={item.image || 'https://via.placeholder.com/600x400?text=No+Image+Provided'}
                    alt={item.name}
                    className="w-full h-auto object-cover"
                />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterProfile;