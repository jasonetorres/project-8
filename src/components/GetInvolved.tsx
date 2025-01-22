import { Link } from 'react-router-dom';
import { Users, MessageSquare } from 'lucide-react';

const GetInvolved = () => {
  return (
    <div className="bg-white rounded-lg shadow-2xl  p-6">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold text-gray-800">Community Projects</h3>
          <ul className="space-y-4">
            <li>
              <Link to="/mentorship" className="block p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-2">
                  <Users className="w-5 h-5 text-indigo-600 mr-2" />
                  <h4 className="font-semibold">Mentorship Program</h4>
                </div>
                <p className="text-gray-600 text-sm">Connect with experienced mentors in your field</p>
              </Link>
            </li>
            <li>
              <Link to="/ambassador" className="block p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-2">
                  <Users className="w-5 h-5 text-indigo-600 mr-2" />
                  <h4 className="font-semibold">Ambassador Program</h4>
                </div>
                <p className="text-gray-600 text-sm">Represent our community and help it grow</p>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800">Discussion Forums</h3>
          <ul className="space-y-4">
            <li>
              <a href="https://discord.gg/8N3PZu8yE3" className="block p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-2">
                  <MessageSquare className="w-5 h-5 text-indigo-600 mr-2" />
                  <h4 className="font-semibold">Technical Discussions</h4>
                </div>
                <p className="text-gray-600 text-sm">Share knowledge and solve problems together</p>
              </a>
            </li>
            <li>
              <a href="https://discord.gg/m4NnuZGpjj" className="block p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-2">
                  <MessageSquare className="w-5 h-5 text-indigo-600 mr-2" />
                  <h4 className="font-semibold">Career Development</h4>
                </div>
                <p className="text-gray-600 text-sm">Discuss career growth and opportunities</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GetInvolved;