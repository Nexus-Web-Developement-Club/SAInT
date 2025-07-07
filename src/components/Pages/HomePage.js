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
    <div>
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-slate-800 mb-4">About SAInT</h2>
        <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
        <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
          Student Association of Information Technology (SAINT) is the official club of the 
          IT Department, dedicated to fostering technical excellence and innovation 
          among students.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureCard key={feature.title} feature={feature} index={index} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;

