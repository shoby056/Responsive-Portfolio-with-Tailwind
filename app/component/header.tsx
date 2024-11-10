
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <div className="font-sans bg-white text-gray-900">
      {/* Navigation */}
      <nav className="p-4 flex items-center justify-between bg-blue-600 text-white">
        <div className="flex items-center space-x-4">
          <Link href="/">
            <Image src="/images/shobyy.png" alt="Logo" width={50} height={50} className="cursor-pointer rounded-full" />
          </Link>
          <span className="text-lg font-semibold">Muhammad Shoaib</span>
        </div>
        <input type="checkbox" id="check" className="hidden" />
        <label htmlFor="check" className="text-2xl cursor-pointer md:hidden">
          <i className="fa-solid fa-list"></i>
        </label>
        <ul className="hidden md:flex space-x-8">
          <li><Link href="#home">Home</Link></li>
          <li><Link href="#about">About</Link></li>
          <li><Link href="#projects">Projects</Link></li>
          <li><Link href="#contact">Contact</Link></li>
        </ul>
      </nav>

      {/* Home Section */}
      <section id="home" className="flex flex-col md:flex-row items-center p-8 bg-gray-100">
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-4xl font-bold">Hey, I'm Muhammad Shoaib</h1>
          <p>A web developer with expertise in building and managing websites, focused on impactful digital products.</p>
          <Link href="#projects">
            <button className="bg-blue-600 text-white px-6 py-2 rounded">Projects</button>
          </Link>
          <div className="flex space-x-4 mt-4">
            <i className="fa-brands fa-facebook text-2xl" aria-hidden="true"></i>
            <Link href="https://www.linkedin.com/in/muhammad-shoaib-41927627a/" target="_blank">
              <i className="fa-brands fa-linkedin text-2xl" aria-hidden="true"></i>
            </Link>
            <i className="fa-brands fa-square-twitter text-2xl" aria-hidden="true"></i>
            <Link href="https://github.com/shoby056" target="_blank">
              <i className="fa-brands fa-github text-2xl" aria-hidden="true"></i>
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 ">
          <Image src="/images/shobyy.png" alt="Profile Picture" width={300} height={300} className="rounded-full "/>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-100 p-8">
        <h1 className="text-3xl font-bold text-center mb-4">About Me</h1>
        <p className="text-center mb-8">
          I'm a frontend developer focused on building and managing web applications. Check out some of my work in the Projects section.
        </p>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold">Get to Know Me</h2>
            <p>I enjoy sharing knowledge with the Dev Community.</p>
            <Link href="#contact">
              <button className="bg-blue-600 text-white px-6 py-2 rounded mt-4">Contact</button>
            </Link>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold">Skills</h2>
            <ul>
              {['HTML', 'CSS', 'JavaScript', 'Next.js', 'Tailwind CSS', 'GitHub'].map((skill) => (
                <li key={skill} className="mb-2 bg-gray-300 w-1/3 text-lg p-2">{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-gray-100 p-8">
        <h1 className="text-3xl font-bold text-center mb-4">Projects</h1>
        <p className="text-center mb-8">Here are some of my personal projects.</p>
        <div className="space-y-8">
          {[
            { name: 'Age Calculator', link: 'https://shoby-js-tasks.vercel.app/age%20calculator/index.html', image: '/images/Age Calculator.png', description: ' This tool calculates your current age based on your date of birth. It shows your age in years, months, and days.' },
            { name: 'Password Generator', link: 'https://shoby-js-tasks.vercel.app/Random%20password%20generator/index.html', image: '/images/Password Generator.png', description: ' This tool creates strong and secure passwords to enhance your online security. It allows you to customize the length and complexity of the password,  ensuring its difficult to guess while remaining easy for you to remember.' },
            { name: 'Countdown Timer', link: "https://shoby-js-tasks.vercel.app/countdown/index.html", image: '/images/Countdown Timer.png', description:' A countdown timer is a time-tracking tool that counts down from a specified time interval to zero. It is often used to create a sense of urgency  to mark the time remaining for an event, task, or deadline.' },
            { name: 'Stopwatch', link: "https://shoby-js-tasks.vercel.app/stopwatch/index.html", image: '/images/Stopwatch.png', description:' A stopwatch is a device used to measure the amount of time that has elapsed from a particular time when activated to when it is deactivated' },
            { name: 'Calculator', link: "https://shoby-js-tasks.vercel.app/Calculator/index.html", image: '/images/Calculator.png', description:'This tool allows users to quickly and efficiently carry out basic arithmetic calculations such as addition, subtraction, multiplication, and division.' },


          ].map((project) => (
            <div key={project.name} className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
              <div className="md:w-1/2 space-y-2">
                <h2 className="text-2xl font-semibold">{project.name}</h2>
                <p>{project.description}</p>
                <Link href={project.link} target="_blank">
                  <button className="bg-blue-600 text-white px-6 py-2 rounded">Live Link</button>
                </Link>
              </div>
              <Image src={project.image} alt={project.name} width={500} height={500} />
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-100 p-8">
        <h1 className="text-3xl font-bold text-center mb-4">Contact</h1>
        <p className="text-center mb-8">Feel free to contact me by submitting the form below.</p>
        <form className="flex flex-col space-y-4 max-w-md mx-auto">
          <label className="text-lg">Name</label>
          <input type="text" placeholder="Enter your name" className="p-2 border border-gray-300 rounded" />
          <label className="text-lg">Email</label>
          <input type="email" placeholder="Enter your email" className="p-2 border border-gray-300 rounded" />
          <label className="text-lg">Message</label>
          <textarea placeholder="Enter your message" rows={5} className="p-2 border border-gray-300 rounded"></textarea>
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded">Submit</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white text-center p-4">
        <p className="mb-2">Muhammad Shoaib</p>
        <p>A frontend developer focused on building impactful web applications.</p>
        <hr className="my-4 border-gray-200" />
        <p>&copy; {new Date().getFullYear()} Muhammad Shoaib</p>
      </footer>
    </div>
  );
}
