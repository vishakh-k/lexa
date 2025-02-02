import React from 'react';

const About = () => {
  const stats = [
    { label: 'Founded', value: '2025' },
    { label: 'Delivery Cities', value: '500+' },
    { label: 'Products', value: '100+' },
    { label: 'Happy Customers', value: '10,000+' }
  ];

  const features = [
    {
      title: 'Premium Quality',
      description: 'Each bottle is crafted with the finest materials, ensuring durability and safety.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
      )
    },
    {
      title: 'Pan India Delivery',
      description: 'Fast and reliable delivery to every corner of India, including remote areas.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: 'Eco-Friendly',
      description: 'Committed to sustainability with eco-friendly products and packaging.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      {/* Hero Section */}
      <div className="relative bg-lexa-600 text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1602143407151-7111542de6e8"
            alt="Bottle Collection"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Revolutionizing Hydration in India
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl">
            Founded in 2025, LEXA Bottles is India's premier destination for premium water bottles. 
            We're committed to providing sustainable hydration solutions for every lifestyle.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-lexa-600 dark:text-lexa-400 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Mission Section */}
      <div className="bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              To provide every Indian household with premium quality, sustainable water bottles 
              that enhance daily hydration while reducing plastic waste. We believe in combining 
              style, functionality, and environmental responsibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                <div className="text-lexa-600 dark:text-lexa-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Vision & Values */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Our Vision & Values
            </h2>
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-300">
                We envision a future where every Indian has access to high-quality, 
                sustainable hydration solutions. Our commitment extends beyond just selling 
                bottles - we're building a community of health-conscious, environmentally 
                responsible individuals.
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-center">
                  <span className="text-lexa-600 dark:text-lexa-400 mr-2">•</span>
                  Quality Excellence
                </li>
                <li className="flex items-center">
                  <span className="text-lexa-600 dark:text-lexa-400 mr-2">•</span>
                  Customer Satisfaction
                </li>
                <li className="flex items-center">
                  <span className="text-lexa-600 dark:text-lexa-400 mr-2">•</span>
                  Environmental Responsibility
                </li>
                <li className="flex items-center">
                  <span className="text-lexa-600 dark:text-lexa-400 mr-2">•</span>
                  Innovation in Design
                </li>
              </ul>
            </div>
          </div>
          <div className="relative h-96">
            <img
              src="https://images.unsplash.com/photo-1602143407151-7111542de6e9"
              alt="Our Values"
              className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-lexa-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Join Our Journey?</h2>
            <p className="text-lg mb-8">
              Experience the future of hydration with LEXA Bottles.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="/contact"
                className="px-6 py-3 bg-white text-lexa-600 rounded-full hover:bg-gray-100 transition duration-300"
              >
                Contact Us
              </a>
              <a
                href="/shop"
                className="px-6 py-3 border-2 border-white rounded-full hover:bg-lexa-700 transition duration-300"
              >
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 