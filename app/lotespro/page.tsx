'use client';

export default function LotesProPage() {
  return (
    <div className="w-full h-screen flex flex-col">
      <div className="bg-red-600 text-white text-center text-sm py-1">
        This is a test iframe loaded from LotesPro
      </div>
      <iframe
        src="https://demo.lotespro.com/proyectos/las-gardenias-de-lima-sur"
        className="w-full flex-1 border-0"
        allow="fullscreen"
        title="LotesPro - Las Gardenias de Lima Sur"
      />
    </div>
  );
}
