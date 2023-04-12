import Image from "next/image"

const Contact = () => (
  <div id="contact" className="text-white mx-auto max-w-screen-xl py-32 sm:py-16">
    <div className="max-w-6xl mx-auto px-5 sm:px-6">
      <h1 className="block bg-clip-text text-transparent font-bold text-2xl sm:text-3xl lg:text-3xl tracking-tight bg-gradient-to-r from-pink-200 to-blue-500">
        Contact
      </h1>
      <div className="flex flex-col-reverse justify-between items-center md:flex-row gap-x-20">
        <div className="w-full">
          <form action="#" className="space-y-8">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="your_email@email.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Let me know how I can help you"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows={6}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn-sm text-neutral-200 bg-neutral-900 hover:bg-neutral-800 dark:bg-blue-700 dark:hover:bg-blue-800 my-2 py-2 px-4 rounded inline-flex items-center"
            >
              Send message
            </button>
          </form>
        </div>
        <Image
          src="/images/get-in-touch.png"
          alt="Get in touch"
          width={500}
          height={500}
        />
      </div>
    </div>
  </div>
)

export default Contact
