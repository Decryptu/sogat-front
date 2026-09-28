import SubpageCard from "@/components/metiers/SubpageCard";

const IMAGES = {
  billettes: {
    col1: "/images/metiers/sermas/1.webp",
    col2: "/images/metiers/sermas/2.webp",
    col3: "/images/metiers/sermas/3.webp",
  },
  equipment: {
    col1: "/images/metiers/sermas/4.webp",
    col2: "/images/metiers/sermas/5.webp",
    col3: "/images/metiers/sermas/6.webp",
  },
  twoCol: {
    col1: "/images/metiers/sermas/7.webp",
    col2: "/images/metiers/sermas/8.webp",
  },
};

export default function Sermas() {
  return (
    <div className="w-full">
      {/* ===== SECTION: Nos équipements - SCIE A BILLETTES ===== */}
      <section className="bg-white py-20 md:py-28">
        <div className="container mx-auto px-6 md:px-16">
          <div className="mb-12 md:mb-16 flex flex-col gap-6">
            <p className="flex items-center gap-3 text-sm font-medium uppercase tracking-[0.2em] text-sermas">
              <span className="size-2 rounded-full bg-current" />
              SCIE A BILLETTES
            </p>
            <h2 className="max-w-4xl text-4xl md:text-6xl font-bold">
              Nos équipements
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
            <SubpageCard
              href="/metiers/sermas/scies-a-billettes"
              src={IMAGES.billettes.col1}
              alt="Solutions hautes-performances pour billettes"
              title="Solutions « hautes-performances »"
            />
            <SubpageCard
              href="/metiers/sermas/scies-a-billettes"
              src={IMAGES.billettes.col2}
              alt="Technologie à ruban"
              title="Technologie à ruban"
            />
            <SubpageCard
              href="/metiers/sermas/scies-a-billettes"
              src={IMAGES.billettes.col3}
              alt="Technologie à disque"
              title="Technologie à disque"
            />
          </div>
        </div>
      </section>

      {/* ===== SECTION: Second 3-column grid ===== */}
      <section className="bg-background py-20 md:py-28">
        <div className="container mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
            <SubpageCard
              href="/metiers/sermas/scies-ligne-de-sciage"
              src={IMAGES.equipment.col1}
              alt="Scies et ligne de sciage"
              title="SCIES & LIGNE DE SCIAGE"
            />
            <SubpageCard
              href="/metiers/sermas/scies-multi-fonctions"
              src={IMAGES.equipment.col2}
              alt="Scies multi-fonctions"
              title="SCIES MULTI-FONCTIONS"
            />
            <SubpageCard
              href="/metiers/sermas/scies-de-refendage"
              src={IMAGES.equipment.col3}
              alt="Scies de refendage"
              title="SCIES DE REFENDAGE"
            />
          </div>
        </div>
      </section>

      {/* ===== SECTION: Two columns - Installation & Machines ===== */}
      <section className="bg-white py-20 md:py-28">
        <div className="container mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            <SubpageCard
              href="/metiers/sermas/installation-plaques-laminees"
              src={IMAGES.twoCol.col1}
              alt="Installation de sciage pour plaques laminées"
              title="Installation de sciage pour plaques laminées"
            />
            <SubpageCard
              href="/metiers/sermas/machines-a-surfacer"
              src={IMAGES.twoCol.col2}
              alt="Machines à surfacer"
              title="MACHINES A SURFACER"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
