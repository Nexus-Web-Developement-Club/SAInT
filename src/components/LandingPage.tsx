import React from 'react';

const LandingPage: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex flex-col">
    {/* Hero Section */}
    <section className="w-full py-16 px-4 flex flex-col items-center justify-center bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white shadow-lg">
      <img src="/StudentAssociation.png" alt="SAInT Logo" className="w-24 h-24 rounded-2xl mb-6 shadow-xl border-4 border-white/30" />
      <h1 className="text-6xl font-extrabold mb-4 drop-shadow-lg">Welcome to SAInT</h1>
      <p className="text-2xl mb-6 max-w-2xl text-center">Student Association of Information Technology</p>
    </section>

    {/* About & Mission Section */}
    <section className="w-full flex flex-col md:flex-row gap-8 px-8 py-16">
      <div className="flex-1 bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-4xl font-bold text-blue-700 mb-4">About SAInT Club</h2>
        <p className="text-lg text-gray-700 mb-4">
          SAInT (Student Association of Information Technology) is a vibrant college club dedicated to fostering innovation, collaboration, and growth among IT students. Our club organizes workshops, seminars, hackathons, and social events to empower members with technical skills and leadership opportunities.
        </p>
      </div>
      <div className="flex-1 bg-white rounded-2xl shadow-xl p-8">
        <h3 className="text-3xl font-semibold text-indigo-700 mb-2">Our Mission</h3>
        <p className="text-md text-gray-600 mb-4">
          To create a supportive environment for learning, networking, and personal development, while promoting the values of teamwork, creativity, and excellence in the field of Information Technology.
        </p>
        <h3 className="text-2xl font-semibold text-indigo-700 mb-2">Why Join Us?</h3>
        <ul className="list-disc list-inside text-gray-600 mb-2">
          <li>Participate in hands-on workshops and tech events</li>
          <li>Connect with industry professionals and alumni</li>
          <li>Collaborate on real-world projects</li>
          <li>Develop leadership and communication skills</li>
          <li>Make lifelong friends and memories</li>
        </ul>
      </div>
    </section>

    {/* Features Section */}
    <section className="w-full py-16 px-8 bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100">
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-10">Club Highlights</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center">
          <span className="text-5xl mb-4">🎓</span>
          <h3 className="text-xl font-bold text-blue-700 mb-2">Workshops & Seminars</h3>
          <p className="text-gray-600 text-center">Learn from experts and gain practical skills in trending IT topics.</p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center">
          <span className="text-5xl mb-4">🤝</span>
          <h3 className="text-xl font-bold text-indigo-700 mb-2">Networking</h3>
          <p className="text-gray-600 text-center">Connect with peers, alumni, and industry leaders for career growth.</p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center">
          <span className="text-5xl mb-4">💡</span>
          <h3 className="text-xl font-bold text-purple-700 mb-2">Hackathons & Projects</h3>
          <p className="text-gray-600 text-center">Collaborate on real-world projects and showcase your creativity.</p>
        </div>
      </div>
    </section>

    {/* Call to Action Section */}
    <section className="w-full py-12 px-8 flex flex-col items-center justify-center bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-700 text-white">
      <h2 className="text-3xl font-bold mb-4">Ready to Join SAInT?</h2>
      <p className="text-lg mb-6 text-center max-w-xl">Become a part of our dynamic community and unlock new opportunities in Information Technology. Whether you're a beginner or an expert, SAInT welcomes you!</p>
      <a href="#join" className="px-10 py-4 bg-white text-blue-700 rounded-2xl font-bold shadow-lg hover:bg-blue-100 transition">Join Now</a>
    </section>
  </div>
);

export default LandingPage;
