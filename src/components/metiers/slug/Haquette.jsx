import Image from "next/image";

// =============================================================================
// IMAGE CONFIGURATION - Easy to update all images from here
// =============================================================================
const IMAGES = {
  // Section: Nos équipements - Row 1
  equipements: {
    tourVertical: "/images/metiers/haquette/placeholder.webp",
    tourHorizontal: "/images/metiers/haquette/placeholder.webp",
    aleseuse: "/images/metiers/haquette/placeholder.webp",
    fraiseuseCNC: "/images/metiers/haquette/placeholder.webp",
    fraiseuseConv: "/images/metiers/haquette/placeholder.webp",
    tourHorizontalCNC: "/images/metiers/haquette/placeholder.webp",
    bancMesure: "/images/metiers/haquette/placeholder.webp",
    brasMesure: "/images/metiers/haquette/placeholder.webp",
    tourUniversel: "/images/metiers/haquette/placeholder.webp",
    aleseuseMobile: "/images/metiers/haquette/placeholder.webp",
    fraiseuseCN: "/images/metiers/haquette/placeholder.webp",
  },
  // Machine detail images
  machines: {
    tourVerticalCNC: "/images/metiers/haquette/placeholder.webp",
    tourHorizontalCNC: "/images/metiers/haquette/placeholder.webp",
    aleseuseCNC: "/images/metiers/haquette/placeholder.webp",
    fraiseuseCNC: "/images/metiers/haquette/placeholder.webp",
    fraiseuseConv: "/images/metiers/haquette/placeholder.webp",
    tourHorizontaleCNC: "/images/metiers/haquette/placeholder.webp",
    bancMesure: "/images/metiers/haquette/placeholder.webp",
    brasMesure: "/images/metiers/haquette/placeholder.webp",
    tourUniversel: "/images/metiers/haquette/placeholder.webp",
    aleseuseMobile: "/images/metiers/haquette/placeholder.webp",
    fraiseuseCN: "/images/metiers/haquette/placeholder.webp",
  },
};

// =============================================================================
// MACHINE SPECIFICATIONS DATA
// =============================================================================
const MACHINES = {
  tourVerticalCNC: {
    title: "Tour vertical CNC",
    image: IMAGES.machines.tourVerticalCNC,
    specs: [
      ["Type machine", "CNC Tour vertical"],
      ["Fabrication", "TITAN"],
      ["Modèle", "SC 27 CNC"],
      ["Commande", "Siemens Sinumerik 840.D"],
      ["Diamètre de Plateau", "2.500 mm"],
      ["Hauteur de la pièce", "1.900 mm"],
      ["Vitesse de Rotation de table", "1,24-112 U/min"],
      ["Poids de la pièce à usiner", "15.000 kg"],
      ["Réglage vertical de la traverse", "1.500 mm"],
      ["Traverse Avance à vitesse rapide", "400 mm/min"],
      ["Support du coulisseau – pivotant", "+/- 35 °"],
      ["Support du coulisseau - horizontal", "1.450 mm"],
      ["Support du coulisseau – vertical", "1.200 mm"],
      ["Avance", "1-4000 mm/min"],
    ],
  },
  tourHorizontalCNC: {
    title: "Tour Horizontal CNC",
    image: IMAGES.machines.tourHorizontalCNC,
    specs: [
      ["Type machine", "CNC Tour horizontal"],
      ["Fabrication", "HAAS"],
      ["Modèle", "ST-40"],
      ["Taille du mandrin", "381 mm"],
      ["Diamètre de coupe max", "648 mm"],
      ["Capacité en barres", "102 mm"],
      ["Déplacement X / Avance rapide", "432 mm - 18 m/min"],
      ["Déplacement Z / Avance rapide", "1118 mm – 18m/min"],
      ["Poussée max. X / Y", "24465 N / 24465 N"],
      ["Nez de broche", "A2-8"],
      ["Vitesse max.", "2400 tr/min"],
      ["ø d'alésage de la broche", "117.3 mm"],
      ["Nombre d'outils", "12"],
    ],
  },
  aleseuseCNC: {
    title: "Aléseuse CNC",
    image: IMAGES.machines.aleseuseCNC,
    specs: [
      ["Type machine", "Aléseuse à commande numérique"],
      ["Fabrication", "UNION"],
      ["Modèle", "BFP 130 NC"],
      ["Commande", "CNC HEIDENHAIN TNC 355"],
      ["Course en x (longitudinal)", "7000 mm"],
      ["Course en y (vertical)", "3000 mm"],
      ["Course en z (transversal)", "400 mm"],
      ["Course en w", "900 mm"],
    ],
  },
  fraiseuseCNC: {
    title: "Fraiseuse CNC",
    image: IMAGES.machines.fraiseuseCNC,
    specs: [
      ["Type machine", "Fraiseuse à commande numérique"],
      ["Fabrication", "SORALUCE"],
      ["Modèle", "TA-A-20"],
      ["Commande", "CNC HEIDENHAIN TNC 430"],
      ["Course en x (longitudinal)", "2000 mm"],
      ["Course en y (vertical)", "1000 mm"],
      ["Course en z (transversal)", "800 mm"],
      ["Cône", "ISO 50"],
      ["Vitesse de rotation broche", "3000 tr/min"],
      ["Magasin outils", "Oui"],
      ["Tête", "automatique"],
    ],
  },
  fraiseuseConv: {
    title: "Fraiseuse Conventionnelle",
    image: IMAGES.machines.fraiseuseConv,
    specs: [
      ["Type machine", "Fraiseuse conventionnelle"],
      ["Fabrication", "HURON"],
      ["Modèle", "MU 6"],
      ["Surface", "2000 x 460 mm"],
      ["Course en x (longitudinal)", "1500 mm"],
      ["Course en y (vertical)", "700 mm"],
      ["Course en z (transversal)", "550 mm"],
      ["Mouvements horizontaux", "ISO 50"],
      ["Mouvement vertical", "3000 tr/min"],
      ["Cône", "SA 40"],
      ["Vitesse", "30 à 2066t/min"],
    ],
  },
  tourHorizontaleCNC: {
    title: "Tour horizontale CNC",
    image: IMAGES.machines.tourHorizontaleCNC,
    specs: [
      ["Type machine", "CNC Tour horizontal"],
      ["Fabrication", "EMCO"],
      ["Modèle", "EMCOMAT-E300"],
      ["Course en x (longitudinal)", "310 mm"],
      ["Course en z (transversal)", "1500 à 3000 mm"],
      ["Passage au-dessus du banc", "Ø 570 mm"],
      ["Hauteur de pointe", "275 mm"],
      ["Vitesse Rotation de broche", "Vitesse Rotation de broche"],
      ["Taille du mandrin", "315mm"],
    ],
  },
  bancMesure: {
    title: "Banc de mesure dimensionnel",
    image: IMAGES.machines.bancMesure,
    specs: [
      ["Type machine", "Banc de mesure dimensionnel"],
      ["Fabrication", "Zeiss"],
      ["Modèle", "UPMC 550"],
      ["Marbre", "1260x1620x2725mm"],
      ["Plage de mesure", "550x500x450mm"],
      ["Ecart de mesure", "0,8+L/6000 µm"],
      ["Vitesse de déplacement", "110mm / sec"],
      ["Poids max", "600Kg"],
      ["Logiciel", "UMESS 300"],
    ],
  },
  brasMesure: {
    title: "Bras de mesure 3D portable",
    image: IMAGES.machines.brasMesure,
    specs: [
      ["Type machine", "Bras de mesure 3D portable"],
      ["Fabrication", "FARO"],
      ["Modèle", "Quantum M"],
      ["Bras", "7 axes"],
      ["Porté", "3,5m"],
      ["Certification", "ISO 10360-12"],
      ["Communication", "Wifi / Bluetooth"],
      ["Logiciel", "FARO CAM2 SmartInspect"],
    ],
  },
  tourUniversel: {
    title: "Tour universel",
    image: IMAGES.machines.tourUniversel,
    specs: [
      ["Type machine", "Tour universel"],
      ["Fabrication", "LAGUN"],
      ["Modèle", "GEMINIS GE-1000 S"],
      ["Longueur max", "2032mm"],
      ["Passage au-dessus du banc", "870mm"],
      ["Alésage de la broche", "508mm"],
      ["Vitesse de rotation", "940 tr/min"],
    ],
  },
  aleseuseMobile: {
    title: "Aléseuse à montant mobile",
    image: IMAGES.machines.aleseuseMobile,
    specs: [
      ["Type machine", "Aléseuse à montant mobile"],
      ["Fabrication", "TOS Varnfsdor"],
      ["Modèle", "WH 13.8"],
      ["Commande", "CNC HEIDENHAIN TNC 355"],
      ["Course en x (longitudinal)", "3500 mm"],
      ["Course en y (vertical)", "2000 mm"],
      ["Course en z (transversal)", "1200 mm"],
      ["Course en w", "800 mm"],
      ["Dimensions de la table", "1800 x 1800 mm"],
      ["Table", "Tournante"],
    ],
  },
  fraiseuseCN: {
    title: "Fraiseuse à commande numérique",
    image: IMAGES.machines.fraiseuseCN,
    specs: [
      ["Type machine", "Fraiseuse à commande numérique"],
      ["Fabrication", "SORALUCE"],
      ["Modèle", "TA-20"],
      ["Commande", "CNC HEIDENHAIN TNC 430"],
      ["Course en x (longitudinal)", "2000 mm"],
      ["Course en y (vertical)", "1000 mm"],
      ["Course en z (transversal)", "800 mm"],
      ["Cône", "ISO 50"],
      ["Vitesse de rotation broche", "3000 tr/min"],
    ],
  },
};

// =============================================================================
// REUSABLE COMPONENTS
// =============================================================================

function SectionTitle({ children, className = "" }) {
  return (
    <div className={`mb-12 ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        {children}
      </h2>
    </div>
  );
}

function PlaceholderImage({ src, alt, className = "", aspectRatio = "aspect-[4/3]" }) {
  return (
    <div className={`relative ${aspectRatio} rounded-xl overflow-hidden bg-gray-100 ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
      />
    </div>
  );
}

function ImageCard({ src, alt, label }) {
  return (
    <div className="group">
      <PlaceholderImage
        src={src}
        alt={alt}
        aspectRatio="aspect-[4/3]"
      />
      <p className="mt-4 text-center text-lg font-semibold text-gray-800 group-hover:text-haquette transition-colors">
        {label}
      </p>
    </div>
  );
}

function SpecsTable({ specs }) {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200">
      <table className="w-full">
        <tbody>
          {specs.map(([label, value], index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
            >
              <td className="px-4 py-3 text-sm font-medium text-gray-700 border-r border-gray-200 w-1/2">
                {label}
              </td>
              <td className="px-4 py-3 text-sm text-gray-600">
                {value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function MachineSection({ machine, reversed = false, bgColor = "bg-white" }) {
  return (
    <section className={`py-16 px-4 md:px-16 ${bgColor}`}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
          {machine.title}
        </h2>
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${reversed ? "lg:flex-row-reverse" : ""}`}>
          {reversed ? (
            <>
              <SpecsTable specs={machine.specs} />
              <PlaceholderImage
                src={machine.image}
                alt={machine.title}
                aspectRatio="aspect-[4/3]"
              />
            </>
          ) : (
            <>
              <PlaceholderImage
                src={machine.image}
                alt={machine.title}
                aspectRatio="aspect-[4/3]"
              />
              <SpecsTable specs={machine.specs} />
            </>
          )}
        </div>
      </div>
    </section>
  );
}

// =============================================================================
// MAIN COMPONENT
// =============================================================================
export default function Haquette({ t, locale }) {
  return (
    <div className="w-full">
      {/* ===== SECTION: Nos équipements ===== */}
      <section className="py-20 px-4 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle>Nos équipements</SectionTitle>

          {/* Row 1: 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <ImageCard
              src={IMAGES.equipements.tourVertical}
              alt="Tour Vertical CNC"
              label="Tour Vertical CNC"
            />
            <ImageCard
              src={IMAGES.equipements.tourHorizontal}
              alt="Tour Horizontal CNC"
              label="Tour Horizontal CNC"
            />
            <ImageCard
              src={IMAGES.equipements.aleseuse}
              alt="Aléseuse CNC"
              label="Aléseuse CNC"
            />
          </div>

          {/* Row 2: 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <ImageCard
              src={IMAGES.equipements.fraiseuseCNC}
              alt="Fraiseuse CNC"
              label="Fraiseuse CNC"
            />
            <ImageCard
              src={IMAGES.equipements.fraiseuseConv}
              alt="Fraiseuse conventionnelle"
              label="Fraiseuse conventionnelle"
            />
            <ImageCard
              src={IMAGES.equipements.tourHorizontalCNC}
              alt="Tour horizontale CNC"
              label="Tour horizontale CNC"
            />
          </div>

          {/* Row 3: 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <ImageCard
              src={IMAGES.equipements.bancMesure}
              alt="Banc de mesure dimensionnel"
              label="Banc de mesure dimensionnel"
            />
            <ImageCard
              src={IMAGES.equipements.brasMesure}
              alt="Bras de mesure 3D portable"
              label="Bras de mesure 3D portable"
            />
            <ImageCard
              src={IMAGES.equipements.tourUniversel}
              alt="Tour universel"
              label="Tour universel"
            />
          </div>

          {/* Row 4: 2 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <ImageCard
              src={IMAGES.equipements.aleseuseMobile}
              alt="Aléseuse à montant mobile"
              label="Aléseuse à montant mobile"
            />
            <ImageCard
              src={IMAGES.equipements.fraiseuseCN}
              alt="Fraiseuse à commande numérique"
              label="Fraiseuse à commande numérique"
            />
          </div>
        </div>
      </section>

      {/* ===== MACHINE SPECIFICATION SECTIONS ===== */}
      <MachineSection machine={MACHINES.tourVerticalCNC} bgColor="bg-gray-50" />
      <MachineSection machine={MACHINES.tourHorizontalCNC} bgColor="bg-white" />
      <MachineSection machine={MACHINES.aleseuseCNC} bgColor="bg-gray-50" />
      <MachineSection machine={MACHINES.fraiseuseCNC} bgColor="bg-white" />
      <MachineSection machine={MACHINES.fraiseuseConv} bgColor="bg-gray-50" />
      <MachineSection machine={MACHINES.tourHorizontaleCNC} bgColor="bg-white" />
      <MachineSection machine={MACHINES.bancMesure} bgColor="bg-gray-50" />
      <MachineSection machine={MACHINES.brasMesure} bgColor="bg-white" />
      <MachineSection machine={MACHINES.tourUniversel} bgColor="bg-gray-50" />
      <MachineSection machine={MACHINES.aleseuseMobile} bgColor="bg-white" />
      <MachineSection machine={MACHINES.fraiseuseCN} bgColor="bg-gray-50" />
    </div>
  );
}
