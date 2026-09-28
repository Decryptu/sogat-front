import SubpageCard from "@/components/metiers/SubpageCard";

const IMAGES = {
  silo: "/images/metiers/iserco/1.webp",
  bigBag: "/images/metiers/iserco/2.webp",
  remplissage: "/images/metiers/iserco/16.webp",
  sac: "/images/metiers/iserco/24.webp",
  autres: "/images/metiers/iserco/32.webp",
};

export default function Iserco() {
  return (
    <div className="w-full">
      <section className="bg-white py-20 md:py-28">
        <div className="container mx-auto px-6 md:px-16">
          <div className="mb-12 md:mb-16 flex flex-col gap-6">
            <p className="flex items-center gap-3 text-sm font-medium uppercase tracking-[0.2em] text-iserco">
              <span className="size-2 rounded-full bg-current" />
              Expert de la manutention du vrac depuis 1981
            </p>
            <h2 className="max-w-4xl text-4xl md:text-6xl font-bold">
              Nos équipements
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
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
