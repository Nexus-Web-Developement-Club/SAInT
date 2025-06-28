import React from 'react';
import { User } from 'lucide-react';

const MemberCard = ({ member }) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm">
      <div className="flex items-center space-x-3">
        <div className="bg-blue-100 p-2 rounded-full">
          <User className="w-5 h-5 text-blue-600" />
        </div>
        <div>
          <h4 className="font-semibold text-gray-800">{member.name}</h4>
          <p className="text-sm text-gray-600">{member.role}</p>
          <p className="text-xs text-gray-500">{member.year}</p>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;