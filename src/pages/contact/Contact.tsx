function Contact() {
    return (
      <>
        <section className="bg-gray-900 grow flex">
          <div className="py-16 px-4 mx-auto max-w-screen-md grow">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white">Contact</h2>
            <p className="mb-1 font-light text-center text-gray-400 text-xl">Linkedin Profile Email Phone</p>
            <p className="mb-1 font-light text-center text-gray-400 text-xl">or send direct message</p>
            <form action="#" className="space-y-8">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-300">Your email</label>
                <input type="email" id="email" className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light" placeholder="name@flowbite.com" required/>
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-300">Subject</label>
                <input type="text" id="subject" className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light" placeholder="Subject" required/>
              </div>
              <div className="col-span-2">
                <label className="block mb-2 text-sm font-medium text-gray-300">Your message</label>
                <textarea id="message" rows={6} className="block p-2.5 w-full text-sm rounded-lg shadow-sm border bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500" placeholder="Leave a comment..."></textarea>
              </div>
              <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none dark:bg-primary-600 dark:hover:bg-primary-700 focus:ring-primary-800">Send message</button>
            </form>
          </div>
        </section>
      </>
    )
  }
  
  export default Contact