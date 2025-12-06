const Overview = ({ title, subtitle, points = [] }) => {
    if (!Array.isArray(points)) {
      console.error('Points prop must be an array');
      return null;
    }
  
    return (
      <section className="py-24 bg-foreground overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-white to-gray-400 bg-clip-text text-transparent mb-6">
              {title}
            </h2>
            <h3 className="text-xl text-gray-400 font-light leading-relaxed">
              {subtitle}
            </h3>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {points.map((point) => (
              <div
                key={`point-${point.substring(0, 20).replace(/\s+/g, '-').toLowerCase()}`}
                className="flex items-start gap-6 bg-black/20 rounded-xl p-6 backdrop-blur-xs border border-white/10 hover:border-white/20 transition-colors"
              >
                <div className="shrink-0 w-10 h-10 rounded-lg bg-linear-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-semibold shadow-lg">
                  {points.indexOf(point) + 1}
                </div>
                <p className="text-gray-300 leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Overview;