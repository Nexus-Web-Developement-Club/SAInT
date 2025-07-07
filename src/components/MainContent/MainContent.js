import React from 'react';
import FeatureCard from '../FeatureCard/FeatureCard';

const HomePage = () => {
  const features = [
    {
      title: 'Innovation',
      icon: '💡',
      description: 'We foster a culture of innovation and creative problem-solving through workshops, hackathons, and collaborative projects.'
    },
    {
      title: 'Community',
      icon: '👥',
      description: 'We build a strong community of IT enthusiasts who learn, grow, and succeed together through networking and collaboration.'
    },
    {
      title: 'Skill Development',
      icon: '⚗',
      description: 'We provide opportunities for students to enhance their technical and soft skills through hands-on experiences and industry exposure.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-slate-800 mb-6">About SAInT</h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto mb-8 rounded-full"></div>
        <p className="text-slate-700 max-w-3xl mx-auto text-xl leading-relaxed font-medium">
          Student Association of Information Technology (SAINT) is the official club of the 
          IT Department, dedicated to fostering technical excellence and innovation 
          among students.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        {features.map((feature, index) => (
          <FeatureCard key={feature.title} feature={feature} index={index} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
