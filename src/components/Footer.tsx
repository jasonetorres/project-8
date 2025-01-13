import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row items-center space-x-4 mb-4 md:mb-0">
            <p>
              &copy; {new Date().getFullYear()}{' '}
              <a href="https://www.torc.dev/" target="_blank" rel="noopener noreferrer">
                torc.dev
              </a>
            </p>
            <Link to="/card-page">
              <p>Dev Survey</p> {/* Add content as children */}
            </Link>
          </div>
          <div className="text-sm">
            <p>Built by Jason Torres</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
