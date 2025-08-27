import React from "react";
import { MdInfo, MdLocationOn, MdPhone, MdEmail, MdStar } from "react-icons/md";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-10 min-h-[60vh]">
      <div className="flex items-center gap-3 mb-6">
        <MdInfo className="text-3xl text-primary" />
        <h1 className="text-3xl font-bold">About Us</h1>
      </div>

      <div className="space-y-8">
        {/* Hero Section */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-2xl mb-4">
              Welcome to Hotel Tanzer
            </h2>
            <p className="text-lg text-base-content/80 leading-relaxed">
              Hotel Tanzer has been providing exceptional hospitality services
              for over 50 years. Located in the heart of the city, we offer
              luxurious accommodations with world-class amenities and
              personalized service that makes every stay memorable.
            </p>
          </div>
        </div>

        {/* Our Story */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-xl mb-4">Our Story</h2>
            <p className="text-base-content/80 leading-relaxed mb-4">
              Founded in 1975 by the Tanzer family, our hotel began as a small
              boutique establishment with just 20 rooms. Over the decades, we
              have expanded to become one of the most prestigious hotels in the
              region, while maintaining our commitment to personalized service
              and attention to detail.
            </p>
            <p className="text-base-content/80 leading-relaxed">
              Today, Hotel Tanzer features 150 beautifully appointed rooms and
              suites, multiple dining options, a full-service spa, and
              state-of-the-art conference facilities. Despite our growth, we
              remain a family-owned business dedicated to creating unforgettable
              experiences for our guests.
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-xl mb-4">
              Why Choose Hotel Tanzer?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <MdStar className="text-warning text-xl" />
                <span>5-star luxury accommodations</span>
              </div>
              <div className="flex items-center gap-3">
                <MdLocationOn className="text-primary text-xl" />
                <span>Prime city center location</span>
              </div>
              <div className="flex items-center gap-3">
                <MdStar className="text-warning text-xl" />
                <span>Award-winning dining options</span>
              </div>
              <div className="flex items-center gap-3">
                <MdStar className="text-warning text-xl" />
                <span>24/7 concierge service</span>
              </div>
              <div className="flex items-center gap-3">
                <MdStar className="text-warning text-xl" />
                <span>Full-service spa & wellness center</span>
              </div>
              <div className="flex items-center gap-3">
                <MdStar className="text-warning text-xl" />
                <span>Modern conference facilities</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-xl mb-4">Contact Information</h2>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MdLocationOn className="text-primary text-xl" />
                <div>
                  <p className="font-semibold">Address</p>
                  <p className="text-base-content/80">
                    123 Luxury Avenue, City Center, NY 10001
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MdPhone className="text-secondary text-xl" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-base-content/80">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MdEmail className="text-accent text-xl" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-base-content/80">info@hoteltanzer.com</p>
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
