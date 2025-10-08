import React, { useState } from 'react';
import { ArrowLeft, Home, User, ChevronLeft, ChevronRight, Video, Image } from 'lucide-react';

// --- New VideoSlideshow Component ---
const VideoSlideshow = ({ videoUrls, name }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!videoUrls || videoUrls.length === 0) {
    return null; // Should not happen if this component is rendered conditionally
  }

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? videoUrls.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === videoUrls.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const currentVideoUrl = videoUrls[currentIndex];

  return (
    <div className="relative w-full aspect-video rounded-xl shadow-xl overflow-hidden bg-slate-900/50 border border-slate-700">
      
      {/* Media Placeholder/Player */}
      <div className="w-full h-full flex items-center justify-center p-4">
        {/*
          NOTE: Since your data links are placeholders (e.g., 'https://slideshow.link/'),
          I'm using a styled placeholder DIV.
          
          In a production app, replace the DIV below with a proper video player:
          
          <iframe 
              src={currentVideoUrl} 
              frameBorder="0" 
              allow="autoplay; encrypted-media" 
              allowFullScreen
              className="w-full h-full absolute top-0 left-0"
          ></iframe>
        */}
        <div className="text-center">
            <Video className="h-12 w-12 mx-auto text-blue-400 mb-2"/>
            <p className="text-lg font-semibold text-slate-100">
                Video Preview {currentIndex + 1} of {videoUrls.length}
            </p>
            <p className="text-sm text-slate-400 truncate w-64 mx-auto">
                URL: {currentVideoUrl}
            </p>
        </div>
      </div>

      {/* Navigation Controls */}
      {videoUrls.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute top-1/2 left-3 transform -translate-y-1/2 p-2 bg-black/50 hover:bg-black/75 rounded-full text-white transition-colors z-10 focus:outline-none"
            aria-label="Previous video"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute top-1/2 right-3 transform -translate-y-1/2 p-2 bg-black/50 hover:bg-black/75 rounded-full text-white transition-colors z-10 focus:outline-none"
            aria-label="Next video"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Indicators */}
          <div className="absolute bottom-3 left-0 right-0 flex justify-center space-x-2 z-10">
            {videoUrls.map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-blue-400 w-4' : 'bg-white/50 w-2'
                }`}
              ></div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
// --- End VideoSlideshow Component ---


// 'selectedCategory' is now received as a prop
const CharacterProfile = ({ item, game, onBack, selectedCategory }) => {
  const isCharacter = selectedCategory === 'characters';
  
  // Check if videos exist in the item data
  const hasVideos = item.videos && item.videos.length > 0;

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
              <p className="text-xl font-medium uppercase tracking-wide">
                Database: {item.name} (Identity)
              </p>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              {item.name}
            </h1>
            
            <p className="text-lg text-slate-300">
              <span className="font-bold text-white">Role:</span> {item.role}
            </p>
            
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
          
          {/* Right Side: Media Display (Slideshow or Image) */}
          <div className="flex-1 flex flex-col justify-start items-center lg:justify-end">
        
              // Use Video Slideshow if videos are present
              <>
                <div className="flex items-center gap-2 mb-4 text-white">
                    <Video className="h-6 w-6 text-blue-400"/>
                    <h3 className="text-xl font-semibold"></h3>
                </div>
                <VideoSlideshow videoUrls={item.videos} name={item.name} />
              </>
       
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterProfile;