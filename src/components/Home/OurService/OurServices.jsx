import { services } from "./Services";


const OurServices = () => {
  return (
    <section className="my-20">
      <h2 className="text-3xl font-semibold text-center text-white mb-12">
        Our Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="card bg-base-100 shadow-xl p-6 text-center"
          >
            <div className="card-body flex flex-row">
              <div className="card-title mb-4">{service.icon}</div>
              <h3 className="text-xl font-medium text-white/60">
                {service.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
