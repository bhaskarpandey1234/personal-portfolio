import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Bootstrap",
    "ReactJS",
    "TypeScript",
    "TailwindCSS",
    "Material UI",
  ];

  const backendSkills = [
    "Java",
    "Spring Boot",
    "REST API",
    "SQL",
    "MySQL",
    "PostgreSQL",
    "AWS",
    "MongoDB",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      {" "}
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2
            className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 
                to-cyan-400 bg-clip-text text-transparent text-center"
          >
            {" "}
            About Me
          </h2>
          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((skill, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((skill, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-2xl font-bold mb-4 text-blue-500">Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li className="font-semibold bg-blue-500 text-white p-2 rounded-md list-none">
                  <strong>B.&nbsp;Tech in Computer Science & Engineering</strong>
                <br />
                  BTKIT, Dwarahat
                  <p>(2020-2024)</p>
                </li>
                <li>
                  Relevant Coursework: Data Structures, Web Development, Cloud
                  Computing...
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-2xl font-bold mb-4 text-blue-500">Internship Experience</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold bg-blue-500 text-white p-2 rounded-md">
                    {" "}
                    Backend Developer Intern at <span><b>Workfall</b></span>
                    <br />
                    (Nov 2024 - Jan 2025){" "}
                  </h4>
                  <br />
                  <div className="flex flex-col gap-2 ">
                    <ul className="list-disc  text-gray-300 space-y-2 pl-0">
                        <li className="pl-0 text-left">Designed entities and developed REST APIs for scalable
                        backend systems.
                        </li>
                        <li className="pl-0 text-left">Wrote clean and optimized code for better user
                        experience</li>
                        <li className="pl-0 text-left">Integrated front-end components with REST APIs</li>
                    </ul>
                  </div>
                </div>
                <br />
                <div className="flex flex-col gap-2">
                  <h4 className="font-semibold bg-blue-500 text-white p-2 rounded-md">
                    {" "}
                    Java Full Stack Developer Intern at <b>Kodnest</b>
                    (Mar 2024 - May 2024){" "}
                  </h4>
                  <div className="flex flex-col gap-2 ">
                    <ul className="list-disc  text-gray-300 space-y-2 pl-0">
                        <li className="pl-0 text-left">Gained hands-on experience with HTML, CSS, JavaScript, and
                        SQL for full-stack development.</li>
                        <li className="pl-0 text-left">Assisted in building full stack applications and
                        integration of REST APIs.</li>
                        <li className="pl-0 text-left">Assisted in debugging and improving site performance</li>
                        <li className="pl-0 text-left">Developed and optimized CRUD operations using Spring Boot
                        for a Student Management Dashboard</li>
                    </ul>
                  </div>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
