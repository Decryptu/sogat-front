import { METIERS } from "@/constants/metiers";

export const NAVIGATION_LINKS = [
  { key: "home", path: "/" },
  { key: "group", path: "/groupe" },
  { key: "services", path: "/metiers" },
  { key: "expertise", path: "/expertise" },
  { key: "contact", path: "/contact" },
];

export const NAVIGATION_STYLES = {
  default: {
    cssVariable: "--primary",
    image: "/images/navigation-default.webp",
  },
  sermas: {
    cssVariable: "--sermas",
    image: "/images/metiers/sermas.webp",
  },
  "sp2i-ferroviaire": {
    cssVariable: "--sp2i-feroviaire",
    image: "/images/metiers/sp2i-ferroviaire.webp",
  },
  "sp2i-prehension": {
    cssVariable: "--sp2i-prehension",
    image: "/images/metiers/sp2i-prehension.webp",
  },
  aretec: {
    cssVariable: "--aretec",
    image: "/images/metiers/aretec.webp",
  },
  "tracip-mecano-soudure": {
    cssVariable: "--tracip-mecano-soudure",
    image: "/images/metiers/tracip-mecano-soudure.webp",
  },
  "tracip-environnement": {
    cssVariable: "--tracip-environnement",
    image: "/images/metiers/tracip-environnement.webp",
  },
  haquette: {
    cssVariable: "--haquette",
    image: "/images/metiers/haquette.webp",
  },
  iserco: {
    cssVariable: "--iserco",
    image: "/images/metiers/iserco.webp",
  },
  "mc2-maintenance": {
    cssVariable: "--mc2-maintenance",
    image: "/images/metiers/mc2-maintenance.webp",
  },
};

const METIER_HEADER_LOGOS = {
  sermas: "/images/metiers/logo-sermas-flat.webp",
  "sp2i-ferroviaire": "/images/metiers/logo-sp2i-ferroviaire-flat.webp",
  "sp2i-prehension": "/images/metiers/logo-sp2i-prehension-flat.webp",
  aretec: "/images/metiers/logo-aretec-flat.webp",
  "tracip-mecano-soudure": "/images/metiers/logo-tracip-mecano-soudure-flat.webp",
  "tracip-environnement": "/images/metiers/logo-tracip-environnement-flat.webp",
  haquette: "/images/metiers/logo-haquette-flat.webp",
  iserco: "/images/metiers/logo-iserco.webp",
  "mc2-maintenance": "/images/metiers/logo-mc2-maintenance-flat.webp",
};

export function getMetierSlugFromPathname(pathname = "") {
  const pathSegments = pathname.split("/");
  const metiersIndex = pathSegments.findIndex((segment) => segment === "metiers");
  const slug = metiersIndex !== -1 ? pathSegments[metiersIndex + 1] : null;

  return METIERS.includes(slug) ? slug : null;
}

export function getNavigationStyle(pathname = "") {
  const slug = getMetierSlugFromPathname(pathname);

  return slug ? NAVIGATION_STYLES[slug] || NAVIGATION_STYLES.default : NAVIGATION_STYLES.default;
}

export function getMetierHeaderLogo(slug) {
  return METIER_HEADER_LOGOS[slug] || null;
}
