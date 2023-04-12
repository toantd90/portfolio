import Image from "next/image"

const Projects = () => (
  <div id="projects" className="text-white mx-auto max-w-screen-xl py-32 sm:py-8">
    <div className="max-w-6xl mx-auto px-5 sm:px-6">
      <h1 className="block bg-clip-text text-transparent mb-8 font-bold text-2xl sm:text-3xl lg:text-3xl tracking-tight bg-gradient-to-r from-green-200 via-green-300 to-blue-500">
        Projects
      </h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        <article className="dark:bg-gray-800 overflow-hidden rounded-lg border border-gray-100 dark:border-gray-700 p-4 shadow-sm transition hover:shadow-primary hover:border-gray-300 cursor-default">
          <a
            href="https://manage.travel.rakuten.com/"
            className="block overflow-hidden group mb-4 rounded-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative aspect-[4/3]">
              <Image
                className="duration-700 ease-in-out group-hover:scale-105 scale-100 blur-0 grayscale-0"
                alt="Rakuten Travel - Supplier site"
                src="/images/supplier.png"
                width="353"
                height="264"
              />
            </div>
          </a>
          <h3 className="font-bold text-2xl text-white tracking-tight my-2 transition duration-500 hover:underline hover:underline-offset-4">
            <a
              className="text-neutral-600 dark:text-neutral-200"
              href="https://manage.travel.rakuten.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Rakuten Travel - Supplier site
            </a>
          </h3>
          <p className="font-light text-neutral-600 dark:text-neutral-200 mb-4">
            An user-friendly platform streamlines travel bookings, offers tools for
            inventory management, booking tracking, and performance insights in one place,
            saving you time and hassle. Sign in now.
          </p>
        </article>
        <article className="dark:bg-gray-800 overflow-hidden rounded-lg border border-gray-100 dark:border-gray-700 p-4 shadow-sm transition hover:shadow-primary hover:border-gray-300 cursor-default">
          <a
            href="https://travel.rakuten.com/"
            className="block overflow-hidden group mb-4 rounded-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative aspect-[4/3]">
              <Image
                className="duration-700 ease-in-out group-hover:scale-105 scale-100 blur-0 grayscale-0"
                alt="Rakuten Travel - Traveler site"
                src="/images/traveler.png"
                width="353"
                height="264"
              />
            </div>
          </a>
          <h3 className="font-bold text-2xl text-white tracking-tight my-2 transition duration-500 hover:underline hover:underline-offset-4">
            <a
              className="text-neutral-600 dark:text-neutral-200"
              href="https://travel.rakuten.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Rakuten Travel - Japan&#39;s largest online travel site
            </a>
          </h3>
          <p className="font-light text-neutral-600 dark:text-neutral-200 mb-4">
            One of Japan&#39;s leading hotel booking platforms. Find and book quality
            accommodations for your next trip to Japan. Rakuten Travel makes it easy to
            find a place that meets your personal needs.
          </p>
        </article>
      </div>
    </div>
  </div>
)

export default Projects
