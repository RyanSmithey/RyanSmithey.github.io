function Contact({className}: { className: string }) {
    return (
      <>
        <section className={`bg-gray-900 grow flex ${className}`}>
          <div className="px-4 mx-auto max-w-screen-md grow">
            <p className="mb-1 font-light text-center text-gray-400 text-xl">
              <a href = "https://www.linkedin.com/in/ryan-smithey/">Linkedin: linkedin.com/in/ryan-smithey</a><br></br>
              <a href = "mailto: RSmithey42@gmail.com">Email: RSmithey42@gmail.com</a><br></br>
              <a href="Resume Ryan Smithey.pdf" download> Resume Download</a>
            </p>
            <p className="mb-1 font-light text-center text-gray-400 text-xl">direct message: </p>
            <form action="https://formspree.io/f/xpzvrjln" method="POST" className="space-y-8">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-300">Your email</label>
                <input type="email" name="_replyto" id="email" className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light" placeholder="Email Address" required/>
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-300">Subject</label>
                <input type="text" name="_subject" id="subject" className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light" placeholder="Subject" required/>
              </div>
              <div className="col-span-2">
                <label className="block mb-2 text-sm font-medium text-gray-300">Your message</label>
                <textarea name="message" id="message" rows={6} className="block p-2.5 w-full text-sm rounded-lg shadow-sm border bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500" placeholder="Leave a comment..."></textarea>
              </div>
              <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none dark:bg-primary-600 dark:hover:bg-primary-700 focus:ring-primary-800">Send message</button>
            </form>
          </div>
        </section>
      </>
    )
  }
  
  export default Contact