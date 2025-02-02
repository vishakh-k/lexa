import React from "react";

const About = () => {
  const features = [
    {
      title: "Premium Quality",
      description:
        "Our bottles are crafted from high-grade materials ensuring durability and longevity.",
      icon: (
        <svg
          className="w-12 h-12 text-lexa-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
          />
        </svg>
      ),
    },
    {
      title: "Eco-Friendly",
      description:
        "Committed to sustainability with recyclable materials and eco-conscious manufacturing.",
      icon: (
        <svg
          className="w-12 h-12 text-lexa-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Innovative Design",
      description:
        "Modern aesthetics combined with practical functionality for everyday use.",
      icon: (
        <svg
          className="w-12 h-12 text-lexa-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
    },
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Michael Chen",
      role: "Head of Design",
      image:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Emma Wilson",
      role: "Product Manager",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  ];

  const milestones = [
    {
      year: "2025",
      title: "Our Journey Begins",
      description: "LEXA Bottles was founded with a vision to revolutionize the water bottle industry in India"
    },
    {
      year: "2025",
      title: "Pan India Presence", 
      description: "Expanded our reach to all major cities across India through strategic partnerships"
    },
    {
      year: "2025",
      title: "1 Million+ Happy Customers",
      description: "Achieved the milestone of serving over a million satisfied customers nationwide"
    }
  ];

  const stats = [
    {
      number: "1M+",
      label: "Bottles Sold"
    },
    {
      number: "500+",
      label: "Cities Covered"  
    },
    {
      number: "100K+",
      label: "5-Star Reviews"
    },
    {
      number: "24/7",
      label: "Customer Support"
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1576426863848-c21f53c60b19?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
            alt="Water Bottles"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
        </div>

        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Our Story
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl">
            Founded in 2025, LEXA Bottles has grown from a small startup to India's leading premium water bottle brand. 
            Our commitment to quality, sustainability, and innovative design has made us the preferred choice for millions of customers.
          </p>
        </div>
      </div>

      {/* Vision Section */}
      <div className="bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-lexa-600 tracking-wide uppercase">Our Vision</h2>
            <p className="mt-1 text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
              Hydration Meets Innovation
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500 dark:text-gray-300">
              We envision a future where every Indian has access to premium quality, sustainable water bottles that complement their lifestyle.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-lexa-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <span className="text-4xl font-extrabold text-white">{stat.number}</span>
                <p className="mt-2 text-lg font-medium text-lexa-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Journey Section */}
      <div className="bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              Our Journey So Far
            </h2>
          </div>
          <div className="mt-12">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative">
                  <div className="relative flex items-center">
                    <div className="h-16 w-16 flex items-center justify-center rounded-full bg-lexa-600 text-white text-xl font-bold">
                      {milestone.year}
                    </div>
                    <div className="ml-6">
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                        {milestone.title}
                      </h3>
                      <p className="mt-2 text-gray-500 dark:text-gray-300">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">Why Choose LEXA Bottles?</h2>
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
                <div className="text-lexa-600 mb-4">
                  <svg className="h-12 w-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">Premium Quality</h3>
                <p className="text-gray-500 dark:text-gray-300">Made from highest grade materials ensuring durability and safety</p>
              </div>

              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
                <div className="text-lexa-600 mb-4">
                  <svg className="h-12 w-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">Pan India Delivery</h3>
                <p className="text-gray-500 dark:text-gray-300">Fast and reliable delivery to every corner of India</p>
              </div>

              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
                <div className="text-lexa-600 mb-4">
                  <svg className="h-12 w-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">Customer Satisfaction</h3>
                <p className="text-gray-500 dark:text-gray-300">100% satisfaction guaranteed with 24/7 customer support</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-lexa-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to try LEXA Bottles?</span>
            <span className="block text-lexa-100">Start your journey today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="/shop"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-lexa-600 bg-white hover:bg-lexa-50"
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
