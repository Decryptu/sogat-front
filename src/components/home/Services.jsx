export default function Services({ t }) {
    return (
      <section className="py-20 bg-white" id="discover">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
              <h2 className="text-3xl font-bold mb-6">{t('services.title')}</h2>
              <p className="text-gray-600">{t('services.description')}</p>
            </div>
            <div className="w-full lg:w-2/3 px-4">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Map through services */}
                {['bim', 'studies', 'monitoring', '3d'].map((service) => (
                  <div key={service} className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-semibold mb-3">{t(`services.${service}.title`)}</h3>
                    <p className="text-gray-600">{t(`services.${service}.description`)}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }