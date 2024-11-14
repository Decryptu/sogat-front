import { Building2, Users2, Trophy, Timer } from "lucide-react";

export default function Expertise({ t }) {
  const features = [
    {
      id: 'experience',
      icon: Building2,
      title: t('expertise.experience.title'),
      description: t('expertise.experience.description')
    },
    {
      id: 'team',
      icon: Users2,
      title: t('expertise.team.title'),
      description: t('expertise.team.description')
    },
    {
      id: 'quality',
      icon: Trophy,
      title: t('expertise.quality.title'),
      description: t('expertise.quality.description')
    },
    {
      id: 'delivery',
      icon: Timer,
      title: t('expertise.delivery.title'),
      description: t('expertise.delivery.description')
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">{t('expertise.title')}</h2>
          <p className="text-gray-600 text-lg">{t('expertise.description')}</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.id}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <feature.icon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}