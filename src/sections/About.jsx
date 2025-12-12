const About = () => {
  return (
    <div className="section w-full">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="mb-12 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-text-color">
            About <span className="text-primary-color">Me</span>
          </h2>
        </div>

        <div className="flex flex-col gap-16 items-start">
          {/* TEXT BIO */}
          <div className="space-y-8 animate-slideIn max-w-3xl">
            <p className="text-lg text-text-color/80 leading-relaxed">
              I'm{" "}
              <span className="font-semibold text-text-color">Abhishek Chouhan</span>, a Frontend
              Engineer with experience at
              <span className="font-semibold text-primary-color"> Sequoia, LeadSquared,</span> and
              <span className="font-semibold text-primary-color"> SAP Labs</span>. I focus on
              building fast, reliable, and clean user experiences for large-scale products.
            </p>

            <p className="text-lg text-text-color/80 leading-relaxed">
              Over the years, I've built and improved features used by thousands
              of daily users — including workflow automation, reporting tools,
              and performance & security enhancements across multiple enterprise
              platforms. I enjoy solving complex product problems with elegant
              UI and thoughtful engineering.
            </p>

            <p className="text-lg text-text-color/80 leading-relaxed">
              Outside of work, I love photography, exploring minimal design,
              playing badminton, and building small tools or apps that make
              everyday tasks simpler. I'm always learning — currently exploring
              advanced React patterns and motion-driven UI.
            </p>
          </div>

          {/* EXPERIENCE TIMELINE */}
          <div className="animate-fadeInUp w-full mt-6">
            <h3 className="text-3xl font-bold text-text-color mb-8">
              Experience <span className="text-primary-color">Timeline</span>
            </h3>

            <div className="relative pl-12">
              {/* Vertical Line */}
              <div className="absolute left-6 top-0 bottom-0 w-[3px] bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 opacity-70 rounded-full"></div>

              <div className="flex flex-col gap-12">
                {/* 2024 */}
                <div className="relative">
                  <div className="absolute left-[1.5rem] top-1 w-5 h-5 rounded-full bg-indigo-500 border-4 border-white dark:border-gray-900 shadow-md"></div>
                  <div className="pl-10">
                    <p className="text-indigo-500 font-bold text-lg mb-1">2024</p>
                    <h4 className="text-base font-semibold text-indigo-600">
                      Software Engineer – Sequoia
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Feb 2024 – Present • Bengaluru • Hybrid
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                      Designing and implementing platform features focused on performance,
                      reliability, and UX across enterprise products.
                    </p>
                  </div>
                </div>

                {/* 2022 */}
                <div className="relative">
                  <div className="absolute left-[1.5rem] top-1 w-5 h-5 rounded-full bg-purple-500 border-4 border-white dark:border-gray-900 shadow-md"></div>
                  <div className="pl-10">
                    <p className="text-purple-500 font-bold text-lg mb-1">2022</p>
                    <h4 className="text-base font-semibold text-purple-600">
                      Senior Software Engineer – LeadSquared
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Jul 2022 – Jan 2024 • Bengaluru • On-site
                    </p>
                    <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1 leading-relaxed">
                      <li>• Built Manage Activities Tab used by 90% of customers</li>
                      <li>• Developed Recurring Tasks & Calendar features</li>
                      <li>• Engineered timezone & date framework for cross-region support</li>
                      <li>• Built core reusable UI components across platform</li>
                      <li>• Implemented role-based auth + performance logs</li>
                    </ul>
                  </div>
                </div>

                {/* 2019 */}
                <div className="relative">
                  <div className="absolute left-[1.5rem] top-1 w-5 h-5 rounded-full bg-pink-500 border-4 border-white dark:border-gray-900 shadow-md"></div>
                  <div className="pl-10">
                    <p className="text-pink-500 font-bold text-lg mb-1">2019</p>
                    <h4 className="text-base font-semibold text-pink-600">
                      Software Engineer – SAP Labs India
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Aug 2019 – Jul 2022 • Bengaluru • On-site
                    </p>
                    <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2 leading-relaxed">
                      <li><strong>📁 Document Library:</strong> Lazy-loading + background uploads → +40% adoption</li>
                      <li><strong>📊 Reporting Tools:</strong> Centralized dashboard used by 8 teams</li>
                      <li><strong>⚙️ Backend:</strong> Invoice APIs, CDS testing tools, migration utilities</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
