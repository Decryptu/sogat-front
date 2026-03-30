import Image from "next/image";

const MACHINES = {
  "tour-vertical-cnc": {
    title: "Tour vertical CNC",
    image: "/images/metiers/haquette/12.webp",
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
  "tour-horizontal-cnc": {
    title: "Tour Horizontal CNC",
    image: "/images/metiers/haquette/13.webp",
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
  "aleseuse-cnc": {
    title: "Aléseuse CNC",
    image: "/images/metiers/haquette/14.webp",
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
  "fraiseuse-cnc": {
    title: "Fraiseuse CNC",
    image: "/images/metiers/haquette/15.webp",
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
  "fraiseuse-conventionnelle": {
    title: "Fraiseuse Conventionnelle",
    image: "/images/metiers/haquette/16.webp",
    specs: [
      ["Type machine", "Fraiseuse conventionnelle"],
      ["Fabrication", "HURON"],
      ["Modèle", "MU 6"],
      ["Surface", "2000 x 460 mm"],
      ["Course en x (longitudinal)", "1500 mm"],
      ["Course en y (vertical)", "700 mm"],
      ["Course en z (transversal)", "550 mm"],
      ["Cône", "SA 40"],
      ["Vitesse", "30 à 2066t/min"],
    ],
  },
  "tour-horizontale-cnc": {
    title: "Tour horizontale CNC",
    image: "/images/metiers/haquette/17.webp",
    specs: [
      ["Type machine", "CNC Tour horizontal"],
      ["Fabrication", "EMCO"],
      ["Modèle", "EMCOMAT-E300"],
      ["Course en x (longitudinal)", "310 mm"],
      ["Course en z (transversal)", "1500 à 3000 mm"],
      ["Passage au-dessus du banc", "Ø 570 mm"],
      ["Hauteur de pointe", "275 mm"],
      ["Taille du mandrin", "315mm"],
    ],
  },
  "banc-mesure-dimensionnel": {
    title: "Banc de mesure dimensionnel",
    image: "/images/metiers/haquette/18.webp",
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
  "bras-mesure-3d": {
    title: "Bras de mesure 3D portable",
    image: "/images/metiers/haquette/19.webp",
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
  "tour-universel": {
    title: "Tour universel",
    image: "/images/metiers/haquette/20.webp",
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
  "aleseuse-montant-mobile": {
    title: "Aléseuse à montant mobile",
    image: "/images/metiers/haquette/21.webp",
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
  "fraiseuse-commande-numerique": {
    title: "Fraiseuse à commande numérique",
    image: "/images/metiers/haquette/22.webp",
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

function PlaceholderImage({ src, alt, aspectRatio = "aspect-[4/3]" }) {
  return (
    <div className={`relative ${aspectRatio} rounded-xl overflow-hidden bg-gray-100`}>
      <Image src={src} alt={alt} fill className="object-cover" />
    </div>
  );
}

function SpecsTable({ specs }) {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200">
      <table className="w-full">
        <tbody>
          {specs.map(([label, value], index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
              <td className="px-4 py-3 text-sm font-medium text-gray-700 border-r border-gray-200 w-1/2">
                {label}
              </td>
              <td className="px-4 py-3 text-sm text-gray-600">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function HaquetteSubpages({ subpage }) {
  const machine = MACHINES[subpage];
  if (!machine) return null;

  return (
    <section className="py-20 px-4 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <PlaceholderImage src={machine.image} alt={machine.title} />
          <SpecsTable specs={machine.specs} />
        </div>
      </div>
    </section>
  );
}
