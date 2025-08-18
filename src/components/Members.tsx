import React from 'react';
import { Users, Github, Linkedin } from 'lucide-react';

const members = [
  {
    name: 'Siddhi Pokale',
    role: 'President',
    github: 'https://github.com/siddhipokale',
    linkedin: 'https://linkedin.com/in/siddhipokale',
    pfp: 'https://i.pravatar.cc/80?img=34'
  },
  {
    name: 'Soham Kulkarni',
    role: 'Member',
    github: 'https://github.com/sohamkulkarni',
    linkedin: 'https://linkedin.com/in/sohamkulkarni',
    pfp: 'https://i.pravatar.cc/80?img=12'
  },
  {
    name: 'Swapnil Dahiwade',
    role: 'Member',
    github: 'https://github.com/swapnildahiwade',
    linkedin: 'https://linkedin.com/in/swapnildahiwade',
    pfp: 'https://i.pravatar.cc/80?img=56'
  },
  {
    name: 'Hitesh Chavan',
    role: 'Member',
    github: 'https://github.com/hiteshchavan',
    linkedin: 'https://linkedin.com/in/hiteshchavan',
    pfp: 'https://i.pravatar.cc/80?img=22'
  },
  {
    name: 'Anisha Lokhande',
    role: 'Member',
    github: 'https://github.com/anishalokhande',
    linkedin: 'https://linkedin.com/in/anishalokhande',
    pfp: 'https://i.pravatar.cc/80?img=48'
  },
  {
    name: 'Anish Talreja',
    role: 'Member',
    github: 'https://github.com/anishtalreja',
    linkedin: 'https://linkedin.com/in/anishtalreja',
    pfp: 'https://i.pravatar.cc/80?img=7'
  }
];

const Members: React.FC = () => {
  return (
    <div className="min-h-screen bg-neutral-100 p-6">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-md p-8">
        <div className="flex items-center gap-3 mb-8">
          <Users className="text-blue-600" size={28} />
          <h1 className="text-3xl font-bold text-gray-800">Club Members</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {members.map(({ name, pfp, github, linkedin, role }, idx) => (
            <div
              key={idx}
              className="bg-gray-50 border border-gray-200 rounded-xl p-4 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <img
                src={pfp}
                alt={name}
                className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-gray-300"
              />
              <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
              <p className="text-sm text-gray-500 mb-3">{role}</p>
              <div className="flex gap-3">
                <a href={github} target="_blank" rel="noopener noreferrer" title="GitHub">
                  <Github size={20} className="text-gray-600 hover:text-black" />
                </a>
                <a href={linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn">
                  <Linkedin size={20} className="text-blue-700 hover:text-blue-900" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Members;
