const DeveloperInfo = () => {
  return (
    <div>
      <section className=" text-white py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl  text-center bg-tran font-bold mb-4 ">About the Developer</h2>
          <div className=" rounded-2xl py-4 bg-gray-800 flex flex-col items-center">
          <p className="text-lg mb-6 ">
            Hi! I’m{" "}
            <strong>
              <span className="text-yellow-300">Bhaskar Pandey</span>{" "}
            </strong>
            , the creator of this{" "}
            <strong>
              <span className="text-blue-500">Personal Portfolio</span>
            </strong>
             . I’m a passionate full-stack developer with an interest in building scalable and efficient applications. 
            <br />
            <br />    I believe in the power of technology to solve real-world problems and make people's lives better. As a developer, I’m constantly exploring new tools and frameworks to improve my craft. 
          </p>
          <a
            id="developer"
            href="https://www.linkedin.com/in/bhaskar-pandey-4525472a3/"
            target="_blank"
            class="inline-flex items-center text-white bg-blue-600 hover:bg-blue-700 py-3 px-6 rounded-full shadow-lg transition-all duration-300"
          >
            Connect with Me on LinkedIn
          </a>
          </div>
        </div>

        <div id="home" className="text-white flex justify-end p-4">
          <a href="#top">
            <span className="bg-blue-500 rounded-2xl py-2 px-4 text-sm md:text-base lg:text-lg lg:px-6 lg:py-3">
              Go to Top
            </span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default DeveloperInfo;
