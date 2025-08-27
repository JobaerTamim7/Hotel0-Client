import Swiping from "./Swiping";
import { useNavigate } from "react-router";
import { CgChevronDoubleRight } from "react-icons/cg";

export default function Hero() {
  const navigate = useNavigate();
  return (
    <section className="h-[81vh] px-4 py-10 flex flex-col lg:flex-row-reverse bg-neutral/30 items-center text-neutral-content gap-8 mx-auto rounded-2xl">
      <div className="w-full h-full lg:w-1/2 overflow-hidden rounded-xl">
        <Swiping />
      </div>

      <div className="w-full lg:w-1/2 flex flex-col justify-center max-w-xl">
        <h1 className="text-5xl font-bold mb-8">Welcome to Tanzar</h1>
        <p className=" text-lg leading-relaxed mb-8 max-w-md">
          Indulge in a world of refined luxury, breathtaking views, and
          unparalleled service. Nestled in the heart of the city yet surrounded
          by tranquility, LuxStay Hotel offers an unforgettable retreat for
          discerning travelers. From our opulent rooms to our award-winning
          dining and spa, every detail is crafted to elevate your stay.
        </p>
        <div>
          <button
            type="button"
            className="btn btn-secondary font-semibold border border-white"
            onClick={() => navigate("/rooms")}
          >
            <CgChevronDoubleRight className="inline mr-2 size-8" />
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}
