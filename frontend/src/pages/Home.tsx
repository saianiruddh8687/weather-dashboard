export default function Home() {
  return (
    <section className="flex min-h-[80vh] items-center justify-center px-6">
      <div className="max-w-3xl text-center">
        <h1 className="mb-6 text-6xl font-extrabold tracking-tight">
          Atmos Weather
        </h1>

        <p className="text-lg text-slate-400">
          Beautiful weather forecasting powered by Open-Meteo.
        </p>
      </div>
    </section>
  );
}
