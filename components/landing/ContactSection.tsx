"use client";
import React from "react";

const Services = () => {
  const services = [
    {
      title: "Email",
      description:
        "hello@softwareforge.com",
      
    },
     {
      title: "Phone",
      description:
        "042324i82829.",
      
    }
  ];

  return (
    <section className="w-full py-16 px-4 bg-black  from-gray-50 to-white text-white-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
         
          <div className="lg:sticky lg:top-8 lg:self-start h-fit">
            <div className="space-y-6">
            
<h2 className="text-4xl md:text-5xl font-bold leading-tight">
               Get a quote. Fast.

              </h2>

              <p className="text-gray-400 text-lg leading-relaxed">
               A one stop shop for marketing, development & creative needs. For fledgling start ups, enterprise projects & everyone in between.
              </p>
               

               <h2 className="text-3xl md:text-3xl font-bold  leading-tight">One-off Project</h2>
               <p className="text-gray-400 text-lg leading-relaxed">Delivery of a brand, website, or full-scale marketing campaign.</p>
               <h2 className="text-3xl md:text-3xl font-bold  leading-tight">Retained Support</h2>
               <p className="text-gray-400 text-lg leading-relaxed">Instant response, strategy & reporting at discounted prices.</p>
             
            </div>
          </div>

          
          <div className="space-y-6 mt-60">
             <h2 className="text-3xl md:text-3xl font-bold leading-tight">Get in touch,</h2>
             <h2 className="text-3xl md:text-3xl font-bold  leading-tight">however works for you</h2>
               <p className="text-gray-500 text-lg leading-relaxed">Let’s not waste any time.</p>
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-[#fff9f0] p-8 rounded-1xl border border-gray-100"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 ">
                    {service.icon}
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-base leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            <div className="flex gap-4 pt-6">
                <button className="flex-1 bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-lg">Chat to us now</span>
                      <div className="flex items-center gap-1">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        <div className="flex -space-x-2">
                          <div className="w-8 h-8 bg-gray-600 rounded-full border-2 border-black"></div>
                          <div className="w-8 h-8 bg-gray-500 rounded-full border-2 border-black"></div>
                          <div className="w-8 h-8 bg-gray-400 rounded-full border-2 border-black"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </button>

                <button className="bg-white/5 border border-white/10 rounded-2xl px-8 py-6 hover:bg-white/10 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="text-lg">Book a call</span>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </div>
                </button>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;