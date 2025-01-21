import WeeklyCalendar from '../components/WeeklyCalendar';
import QuickLinks from '../components/QuickLinks';
import GetInvolved from '../components/GetInvolved';
import MainCarousel from '../components/carousel/MainCarousel';
import TheTeam from '../components/TheTeam';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-black dark:text-gray-200 mb-4">Welcome Home!</h2>

        {/* RSS Ticker */}
        
        <div className="my-11">
            <MainCarousel />
          </div>
      <p className="text-xl text-gray-600 dark:text-gray-200 max-w-2xl mx-auto text-left mb-2">
      Hey friends! Think of the <a href="https://torc.dev" target="_blank" rel="noopener noreferrer" className="text-blue-700">Torc community</a>  as your "home base" for your career journey. We know the path can be tough and sometimes lonely, but that’s why we’re here, to have your back in the hard times and cheer you on in the good ones.💛
      </p>

      <p className="text-xl text-gray-600 dark:text-gray-200 max-w-2xl mx-auto text-left mb-2">
        That’s why we say <b>Welcome Home</b>. If you ever need support, don’t hesitate to reach out. We’re so glad you’re here!
      </p>
        <p className="text-xl text-gray-600 dark:text-gray-200 max-w-2xl mx-auto">         Best, Taylor</p>
      </div>
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">Torc Community Team</h2>
        <p className="text-gray-600 dark:text-gray-200 mb-8">
          Meet your new friends
        </p>
        <TheTeam />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">Upcoming Events</h2>
        <p className="text-gray-800 dark:text-gray-200 mb-8">
          View our calendar below to see all upcoming community events and activities.
        </p>
        <WeeklyCalendar />
      </section>
      <QuickLinks />
      <GetInvolved />

      <section className="bg-white rounded-lg shadow-lg p-8 my-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Information</h2>
        <p className="text-gray-600">
          Need help? Reach out to our community team on{' '}
          <a
            href="https://www.torc.dev/discord"
            className="text-indigo-600 hover:text-indigo-800 font-medium"
          >
            Discord
          </a>
        </p>
      </section>
    </div>
  );
}