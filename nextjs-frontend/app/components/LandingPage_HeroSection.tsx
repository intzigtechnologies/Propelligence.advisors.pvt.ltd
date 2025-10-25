import React from "react";

const LandingPage_HeroSection: React.FC = () => {
  return (
    <div className="w-full relative">
      {/* Gradient background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `
    radial-gradient(ellipse 85% 65% at 8% 8%, rgba(135, 206, 250, 0.4), transparent 60%),  
    radial-gradient(ellipse 75% 60% at 75% 35%, rgba(186, 85, 211, 0.35), transparent 62%), 
    radial-gradient(ellipse 70% 60% at 15% 80%, rgba(173, 216, 230, 0.3), transparent 62%), 
    radial-gradient(ellipse 70% 60% at 92% 92%, rgba(138, 43, 226, 0.3), transparent 62%), 
    linear-gradient(180deg, #e0f2fe 0%, #c7d2fe 100%) 
  `,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />
      {/* Content wrapper */}
      <div className="relative z-10 p-6">
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1 className="text-3xl font-bold ">,rshgrdhd</h1>
        <p className="mt-2 text-lg">.</p>
        <h1 className="text-3xl font-bold">,</h1>
        <p className="mt-2 text-lg">.</p>
        <h1 className="text-3xl font-bold">,</h1>
        <p className="mt-2 text-lg">.</p>
        <h1 className="text-3xl font-bold">,</h1>
        <p className="mt-2 text-lg">.</p>
        <h1 className="text-3xl font-bold">,</h1>
        <p className="mt-2 text-lg">.</p>
        <h1 className="text-3xl font-bold">,</h1>
        <p className="mt-2 text-lg">.</p>
        <h1 className="text-3xl font-bold">,</h1>
        <p className="mt-2 text-lg">.</p>
      </div>
    </div>
  );
};

export default LandingPage_HeroSection;
