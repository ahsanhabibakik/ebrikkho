export default function About() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            About Ebrikkho
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8 text-center">
              We are dedicated to building modern, scalable web applications that deliver exceptional user experiences.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
                <p className="text-gray-600">
                  To create innovative web solutions that empower businesses and individuals 
                  to achieve their goals through technology. We believe in the power of 
                  clean code, modern frameworks, and user-centered design.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Vision</h2>
                <p className="text-gray-600">
                  To be a leading force in web development, setting new standards for 
                  performance, accessibility, and user experience. We envision a web 
                  that is fast, inclusive, and delightful for everyone.
                </p>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Technology Stack</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="bg-white p-4 rounded-lg shadow-sm mb-2">
                    <span className="text-2xl">⚛️</span>
                  </div>
                  <span className="text-sm font-medium text-gray-700">React</span>
                </div>
                <div className="text-center">
                  <div className="bg-white p-4 rounded-lg shadow-sm mb-2">
                    <span className="text-2xl">▲</span>
                  </div>
                  <span className="text-sm font-medium text-gray-700">Next.js</span>
                </div>
                <div className="text-center">
                  <div className="bg-white p-4 rounded-lg shadow-sm mb-2">
                    <span className="text-2xl">📘</span>
                  </div>
                  <span className="text-sm font-medium text-gray-700">TypeScript</span>
                </div>
                <div className="text-center">
                  <div className="bg-white p-4 rounded-lg shadow-sm mb-2">
                    <span className="text-2xl">🎨</span>
                  </div>
                  <span className="text-sm font-medium text-gray-700">Tailwind</span>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Get in Touch</h2>
              <p className="text-gray-600 mb-6">
                Have questions or want to work with us? We'd love to hear from you.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
