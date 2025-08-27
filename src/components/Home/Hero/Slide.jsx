export default function Slide({ src }) {
  return (
    <div
      className="w-full h-full rounded-xl bg-no-repeat bg-center bg-contain relative p-4 lg:p-8"
      style={{
        background:
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(" +
          src +
          ")",
        backgroundSize: "cover",
        backgroundPosition: "top",
      }}
    ></div>
  );
}
