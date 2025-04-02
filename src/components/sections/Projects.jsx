import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center
                py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2
            className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 
                to-cyan-400 bg-clip-text text-transparent text-center"
          >
            {" "}
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
                    hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
            >
              <h3 className="text-xl font-bold mb-2">MovieNest</h3>
              <div className="flex flex-col gap-2 ">
                <ul className="list-disc  text-gray-300 space-y-2 pl-0">
                  <li className="text-left">
                    Integrates TMDb API for movie data (ratings, genres,
                    posters).
                  </li>
                  <li className="text-left">
                    Uses Appwrite for secure backend and database management.
                  </li>
                  <li className="text-left">
                    Optimizes performance with debouncing and throttling.
                  </li>
                  <li className="text-left">
                    {" "}
                    Built with React, Vite, TailwindCSS, Figma, deployed on
                    Netlify, and fully responsive.
                  </li>
                </ul>
              </div>
              <p className="text-gray-400 mb-4">• • • •</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "HTML",
                  "CSS",
                  "TailwindCSS",
                  "JavaScript",
                  "React",
                  "Vite",
                  "Figma",
                  "Netlify",
                ].map((skill, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://grand-tarsier-97d91a.netlify.app/"
                  target="_blank"
                  className=" rounded-2xl p-2 bg-blue-500 text-white my-4  hover:text-blue-300 transition-colors"
                >
                  {" "}
                  View Project{" "}
                </a>
              </div>
            </div>

            <div
              className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
                    hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
            >
              <h3 className="text-xl font-bold mb-2">Student Dashboard</h3>
              <div className="flex flex-col gap-2 ">
                <ul className="list-disc  text-gray-300 space-y-2 pl-0">
                  <li className="text-left">
                    Developed Student Management Dashboard using React and
                    Material UI.
                  </li>
                  <li className="text-left">
                    Firebase integration for data interaction and management.
                  </li>
                  <li className="text-left">
                    Used Vite for efficient project management, improving
                    application maintainability.
                  </li>
                </ul>
              </div>
              <p className="text-gray-400 mb-4">• • •</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "React",
                  "Vite",
                  "Material UI",
                  "Firebase",
                ].map((skill, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://shimmering-wisp-dbbe40.netlify.app/"
                  target="_blank"
                  className="my-4 rounded-2xl p-2 bg-blue-500 text-white hover:text-blue-300 transition-colors"
                >
                  {" "}
                  View Project{" "}
                </a>
              </div>
            </div>

            <div
              className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
                    hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
            >
              <h3 className="text-xl font-bold mb-2">CalendarApp</h3>
              <div className="flex flex-col gap-2 ">
                <ul className="list-disc  text-gray-300 space-y-2 pl-0">
                  <li className="text-left">
                  Frontend built with React for a user-friendly calendar interface.
                  </li>
                  <li className="text-left">
                  NestJS backend for event data handling and user authentication.
                  </li>
                  <li className="text-left">
                  Supports event creation, updates, and searching with validation.
                  </li>
                  <li className="text-left">
                  Fetches and synchronizes event data from the backend efficiently.
                  </li>
                </ul>
              </div>
              <p className="text-gray-400 mb-4">• • •</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "React",
                  "NestJS",
                  "Vite",
                  "Github",
                ].map((skill, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/bhaskarpandey1234/Calendar-App/tree/main"
                  target="_blank"
                  className="my-4 rounded-2xl p-2 bg-blue-500 text-white hover:text-blue-300 transition-colors"
                >
                  {" "}
                  View Project{" "}
                </a>
              </div>
            </div>

            <div
              className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
                    hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
            >
              <h3 className="text-xl font-bold mb-2">StudentHub</h3>
              <div className="flex flex-col gap-2 ">
                <ul className="list-disc  text-gray-300 space-y-2 pl-0">
                  <li className="text-left">
                    Developed a CRUD web-based Student Management Dashboard
                    using Spring Boot and Thymeleaf.
                  </li>
                  <li className="text-left">
                    Implemented RESTful APIs for seamless data interaction and
                    management.
                  </li>
                  <li className="text-left">
                    Used Maven for efficient project management, improving
                    application maintainability.
                  </li>
                </ul>
              </div>
              <p className="text-gray-400 mb-4">• • •</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "HTML",
                  "CSS",
                  "Bootstrap",
                  "JavaScript",
                  "React",
                  "Java",
                  "Spring Boot",
                  "Docker",
                ].map((skill, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/bhaskarpandey1234/SMD/"
                  target="_blank"
                  className=" rounded-2xl p-2 bg-blue-500 text-white my-4  hover:text-blue-300 transition-colors"
                >
                  {" "}
                  View Project{" "}
                </a>
              </div>
            </div>

            <div
              className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
                    hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
            >
              <h3 className="text-xl font-bold mb-2">AcademiaManager</h3>
              <div className="flex flex-col gap-2 ">
                <ul className="list-disc  text-gray-300 space-y-2 pl-0">
                  <li className="text-left">
                    Developed and containerized a full-stack course management
                    system using Spring Boot (backend) and React (frontend).
                  </li>
                  <li className="text-left">
                    Created RESTful APIs with proper CORS configuration for
                    secure communication between frontend and backend.
                  </li>
                  <li className="text-left">
                    Designed a responsive, user-friendly UI in React for a
                    seamless user experience.
                  </li>
                  <li className="text-left">
                    Used Docker Compose to streamline deployment, reducing setup
                    time by 50%.
                  </li>
                </ul>
              </div>
              <p className="text-gray-400 mb-4">• • • •</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "HTML",
                  "CSS",
                  "Bootstrap",
                  "JavaScript",
                  "React",
                  "Java",
                  "Spring Boot",
                  "Docker",
                ].map((skill, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/bhaskarpandey1234/AcademiaManager/tree/main/AcademiaManager"
                  target="_blank"
                  className="my-4 rounded-2xl p-2 bg-blue-500 text-white hover:text-blue-300 transition-colors"
                >
                  {" "}
                  View Project{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
