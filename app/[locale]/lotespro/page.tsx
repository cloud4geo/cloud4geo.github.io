'use client';

export default function LotesProPage() {
  return (
    <div className="w-full" style={{ height: 'calc(100vh - 80px)' }}>
      <div className="bg-red-600 text-white text-center text-sm py-1">
        This is a test iframe loaded from LotesPro
      </div>
      <iframe
        src="https://demo.lotespro.com/proyectos/las-gardenias-de-lima-sur"
        className="w-full h-full border-0"
        allow="fullscreen"
        title="LotesPro - Las Gardenias de Lima Sur"
      />
    </div>
  );
}
