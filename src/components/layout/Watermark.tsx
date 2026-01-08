const Watermark = () => {
  return (
    <div className="fixed bottom-0 right-0 z-40 pointer-events-none p-4">
      <div className="relative pointer-events-auto">
        {/* Content Container */}
        <div className="flex items-center gap-1.5 bg-black/95 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-lg border border-white/10 hover:bg-black transition-all duration-200">
          <span className="text-gray-400 text-xs font-medium">Create with</span>
          <img 
            src="/images/mark.png" 
            alt="spark SITES" 
            className="h-4 w-auto object-contain"
          />
        </div>
        
        {/* Animated Border SVG */}
        <svg
          className="absolute inset-0 pointer-events-none overflow-visible"
          width="100%"
          height="100%"
          viewBox="0 0 180 36"
          preserveAspectRatio="none"
        >
          <defs>
            <filter id="watermark-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            <linearGradient id="watermark-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ec4899" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#f472b6" stopOpacity="1" />
              <stop offset="100%" stopColor="#ec4899" stopOpacity="0.9" />
            </linearGradient>
          </defs>
          <rect
            x="0.75"
            y="0.75"
            width="178.5"
            height="34.5"
            rx="17.25"
            ry="17.25"
            fill="none"
            stroke="url(#watermark-gradient)"
            strokeWidth="1.5"
            strokeDasharray="70 326.4"
            strokeDashoffset="0"
            strokeLinecap="round"
            filter="url(#watermark-glow)"
            className="laser-border-animation"
          />
        </svg>
      </div>
    </div>
  );
};

export default Watermark;

