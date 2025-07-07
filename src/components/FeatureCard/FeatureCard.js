import React from 'react';

const FeatureCard = ({ feature, index }) => {
  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/20 group">
      <div className="text-center mb-8">
        <div className="text-6xl mb-6 group-hover:animate-bounce">{feature.icon}</div>
        <h3 className="text-2xl font-bold text-slate-800 mb-6 group-hover:text-blue-600 transition-colors duration-300">
          {feature.title}
        </h3>
      </div>
      <p className="text-slate-600 leading-relaxed text-center text-lg">
        {feature.description}
      </p>
    </div>
  );
};

export default FeatureCard;

