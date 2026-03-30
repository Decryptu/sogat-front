import SubpageCard from "@/components/metiers/SubpageCard";

const IMAGES = {
  silo: "/images/metiers/iserco/1.webp",
  bigBag: "/images/metiers/iserco/2.webp",
  remplissage: "/images/metiers/iserco/16.webp",
  sac: "/images/metiers/iserco/24.webp",
  autres: "/images/metiers/iserco/32.webp",
};

export default function Iserco({ t, locale }) {
  return (
    <div className="w-full">
      <section className="py-20 px-4 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Nos équipements
            </h2>
            <p className="text-xl text-iserco font-semibold">
              Expert de la manutention du vrac depuis 1981
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SubpageCard
              href="/metiers/iserco/silo"
              src={IMAGES.silo}
              alt="Équipements pour silo"
              title="Pour Silo"
            />
            <SubpageCard
              href="/metiers/iserco/big-bag-vidange"
              src={IMAGES.bigBag}
              alt="Vidange de Big Bags"
              title="Vider un Big Bag"
            />
            <SubpageCard
              href="/metiers/iserco/big-bag-remplissage"
              src={IMAGES.remplissage}
              alt="Remplissage de Big Bags"
              title="Remplir un Big Bag"
            />
            <SubpageCard
              href="/metiers/iserco/vide-sac"
              src={IMAGES.sac}
              alt="Vide sac"
              title="Pour SAC"
            />
            <SubpageCard
              href="/metiers/iserco/autres-equipements"
              src={IMAGES.autres}
              alt="Autres équipements"
              title="Autres équipements"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
