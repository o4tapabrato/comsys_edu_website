export default function GalleryGrid({ images }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {images.map((img, idx) => (
        <div key={idx} className="group relative rounded-3xl overflow-hidden border border-cyan-500/40 h-64 shadow-[0_0_30px_rgba(30,58,138,0.5)]">
          <img src={img} alt="Conference gallery archive" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
            <span className="text-xs font-bold text-cyan-300 uppercase tracking-wider">COMSYS Summit Archive</span>
          </div>
        </div>
      ))}
    </div>
  );
}