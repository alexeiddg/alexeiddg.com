export default function Experience() {
    return (
        <section className=" bg-background">
            <div className="max-w-4xl mx-auto p-8 bg-white shadow-md">
                <header className="text-center mb-8">
                    <h1 className="text-4xl font-extrabold mb-2">Alexei Delgado De Gante</h1>
                    <p className="text-lg">
                        <a href="mailto:alexeiddg@outlook.com" className="mr-4"><i className="fas fa-envelope"></i> contact@alexeidg.com</a>
                        <a href="https://linkedin.com/in/alexei-delgado-5729b8266" className="mr-4"><i className="fab fa-linkedin"></i> LinkedIn</a>
                        <a href="https://github.com/alexeiddg" className="mr-4"><i className="fab fa-github"></i> GitHub</a>
                        <a href="https://github.com/alexeiddg" className="mr-4"><i className="fas fa-desktop"></i> Portfolio</a>
                    </p>
                </header>

                {/* Education Section */}
                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-2">Education</h2>
                    <div>
                        <div className="mb-4">
                            <h3 className="text-xl font-semibold">Tecnológico de Monterrey</h3>
                            <p className="text-sm italic">Bachelor of Science in Computer Science and Technology, GPA: 92/100</p>
                            <p className="text-sm italic">Aug. 2022 -- June 2026 (Expected)</p>
                            <p className="text-sm mt-2"><strong>Relevant Coursework:</strong> Data Structures and Algorithms, Operating Systems, Database Systems, Object-Oriented Programming, Functional Programming, Computer Architecture, Computer Networks, Web Development.</p>
                        </div>
                    </div>
                </section>

                {/* Experience Section */}
                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-2">Experience</h2>
                    <div className="mb-4">
                        <h3 className="text-xl font-semibold">Pathscreative</h3>
                        <p className="text-sm italic">Founder | Lead Developer, Guadalajara, Jalisco</p>
                        <p className="text-sm italic">July 2024 - Present</p>
                        <ul className="list-disc list-inside mt-2">
                            <li>Write about your project experience.</li>
                            <li>Write about your project experience.</li>
                            <li>Write about your project experience.</li>
                        </ul>
                    </div>
                </section>

                {/* Projects Section */}
                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-2">Projects</h2>
                    <div className="mb-4">
                        <h3 className="text-xl font-semibold">LaunchStar CMS</h3>
                        <p className="text-sm italic">NextJs, tool2, tool3, Tool4, <a href="https://github.com/" className="text-blue-500 underline">Live Page</a></p>
                        <p className="text-sm italic">Present - Currently Active</p>
                        <ul className="list-disc list-inside mt-2">
                            <li>Write about your project experience.</li>
                            <li>Write about your project experience.</li>
                        </ul>
                    </div>
                    <div className="mb-4">
                        <h3 className="text-xl font-semibold">Tennis Pitcher Mobile App for ESP32</h3>
                        <p className="text-sm italic">React Native, Expo, CSS, ESP32, BLE, <a href="https://github.com/alexeiddg/Tennis-Pitcher-MobileApp" className="text-blue-500 underline">Github</a></p>
                        <p className="text-sm italic">June 2024</p>
                        <ul className="list-disc list-inside mt-2">
                            <li>Developed a React Native app to control a custom-built tennis pitcher via Bluetooth Low Energy (BLE), enabling wireless management of the device. The app communicates with an ESP32 microprocessor programmed to control five motors, adjusting feed, height, backspin, topspin, and direction for optimal training sessions.</li>
                            <li>Implemented features for saving and executing custom configurations locally on the user&apos;s device, providing a seamless and personalized training experience. Conducted extensive testing to ensure reliable BLE connectivity and accurate motor control.</li>
                        </ul>
                    </div>
                    <div className="mb-4">
                        <h3 className="text-xl font-semibold">Generative AI Map For Wizeline</h3>
                        <p className="text-sm italic">Angular, Spring Boot, GraphQL, PostgreSQL, <a href="https://github.com/alexeiddg/GenerativeAI-Map" className="text-blue-500 underline">Github</a> | <a href="https://github.com/" className="text-blue-500 underline">Live Page</a></p>
                        <p className="text-sm italic">May 2024</p>
                        <ul className="list-disc list-inside mt-2">
                            <li>Explain Angular Frontend</li>
                            <li>Explain PostgreSQL / spring boot backend API</li>
                            <li>Implemented a web scraper backend API using Selenium WebDriver to collect AI tools from multiple pages of a website, ensuring uniqueness and incorporating user-agent rotation. Developed the API to interface with a PostgreSQL database using JPA, handling CRUD operations and efficiently managing database connections with HikariCP.</li>
                        </ul>
                    </div>
                    <div className="mb-4">
                        <h3 className="text-xl font-semibold">Image Processing for Bosch Vision IO</h3>
                        <p className="text-sm italic">Python, OpenCV, PIL, Flask, Custom Algorithms, <a href="https://github.com/alexeiddg/Bosch-HackathonVisionIO" className="text-blue-500 underline">Github</a></p>
                        <p className="text-sm italic">Nov. 2023</p>
                        <ul className="list-disc list-inside mt-2">
                            <li>Developed an algorithm to evaluate image quality, applying advanced digital image processing techniques such as signal analysis and customized filtering to measure clarity, focus, and color intensity.</li>
                            <li>Implemented a Flask-based web service for remote image processing and conducted extensive testing on image centering, orientation, sharpness, and illumination to ensure reliability and accuracy.</li>
                        </ul>
                    </div>
                </section>

                {/* Certifications Section */}
                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-2">Relevant Certifications</h2>
                    <p className="text-sm">Oracle Cloud Infrastructure 2024 Generative AI Professional: 1Z0-1127-24</p>
                </section>

                {/* Skills Section */}
                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-2">Skills</h2>
                    <ul className="list-disc list-inside">
                        <li><strong>Languages:</strong> JavaScript, TypeScript, Python, R, C++, C, Java, SQL</li>
                        <li><strong>Technologies:</strong> Next.js, Angular, React, AWS, Oracle OCI, tRPC, REST, GraphQL, Spring Boot, Git</li>
                        <li><strong>Databases:</strong> MySQL, PostgreSQL, SQLite, Oracle DB, Amazon Aurora</li>
                    </ul>
                </section>
            </div>
        </section>
    );
}
