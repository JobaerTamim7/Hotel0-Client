import React from "react";
import HomeMap from "../components/Home/FindUs/HomeMap";

export default function Contact() {
  return (
    <div>
      <div className="max-w-7xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>

        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Get in Touch</h3>
            <p>
              We're here to help with reservations, event bookings, or any
              questions you may have.
            </p>

            <div className="space-y-4">
              <p className="flex items-center gap-2">
                📍 <span>Shonir Akhra, Dania Road, Dhaka-1236, Bangladesh</span>
              </p>
              <p className="flex items-center gap-2">
                📞{" "}
                <a href="tel:+1234567890" className="link link-hover">
                  +1 (234) 567-890
                </a>
              </p>
              <p className="flex items-center gap-2">
                ✉️{" "}
                <a href="mailto:info@hotel.com" className="link link-hover">
                  tanzer@hotel.com
                </a>
              </p>
            </div>

            {/* Map */}
            <div className="border overflow-clip">
              <HomeMap />
            </div>
          </div>

          {/* Right: Contact Form */}
          <form className="space-y-4 bg-base-200 p-6 rounded-lg shadow-md">
            <div>
              <label className="label">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="label">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="label">Message</label>
              <textarea
                className="textarea textarea-bordered w-full"
                rows="4"
                placeholder="How can we help?"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-full">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
