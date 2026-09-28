"use client"

import { useEffect } from "react"
import dynamic from 'next/dynamic'
import { Clock, Mail, MapPin, Phone, Printer } from 'lucide-react'
import Linkedin from '@/components/ui/LinkedinIcon'
import SectionHeader from '@/components/ui/SectionHeader'
import CtaLink from '@/components/ui/CtaLink'
import { FadeIn } from '@/components/ui/motion'

const MapContainer = dynamic(
  () => import('react-leaflet').then(mod => mod.MapContainer),
  { ssr: false }
)
const TileLayer = dynamic(
  () => import('react-leaflet').then(mod => mod.TileLayer),
  { ssr: false }
)
const Marker = dynamic(
  () => import('react-leaflet').then(mod => mod.Marker),
  { ssr: false }
)
const Popup = dynamic(
  () => import('react-leaflet').then(mod => mod.Popup),
  { ssr: false }
)

// Gondecourt coordinates
const position = [50.541, 2.883]

const LINK_CLASS = "transition-colors hover:text-primary"

export default function Location({ title, description, address, hours, phone, fax, email, linkedin, labels }) {
  useEffect(() => {
    import('leaflet').then(L => {
      L.Icon.Default.mergeOptions({
        iconUrl: 'marker-icon.png',
        iconRetinaUrl: 'marker-icon-2x.png',
        shadowUrl: 'marker-shadow.png'
      })
    })
  }, [])

  const rows = [
    {
      key: "address",
      Icon: MapPin,
      content: (
        <>
          <span className="block font-semibold">{address.name}</span>
          {address.street}<br />
          {address.city}<br />
          {address.country}
        </>
      )
    },
    { key: "hours", Icon: Clock, content: hours },
    phone && {
      key: "phone",
      Icon: Phone,
      content: <a href={`tel:${phone}`} className={LINK_CLASS}>{phone}</a>
    },
    fax && { key: "fax", Icon: Printer, content: fax },
    email && {
      key: "email",
      Icon: Mail,
      content: <a href={`mailto:${email}`} className={LINK_CLASS}>{email}</a>
    },
    linkedin && {
      key: "linkedin",
      Icon: Linkedin,
      content: (
        <a href={linkedin} target="_blank" rel="noopener noreferrer" className={LINK_CLASS}>
          {address.name}
        </a>
      )
    }
  ].filter(Boolean)

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container mx-auto px-6 md:px-16 grid gap-16 lg:grid-cols-2 lg:gap-24">
        <FadeIn x={-20} y={0} className="flex flex-col">
          <SectionHeader title={title} description={description} />

          <ul className="border-y border-foreground/10 divide-y divide-foreground/10">
            {rows.map(({ key, Icon, content }) => (
              <li key={key} className="flex gap-5 py-5">
                <Icon className="mt-1 size-5 shrink-0 text-primary" />
                <div className="flex flex-col gap-1 sm:flex-row sm:gap-6">
                  <span className="text-sm uppercase tracking-wide text-muted-foreground sm:w-36 sm:shrink-0 sm:pt-1">
                    {labels?.[key]}
                  </span>
                  <span className="text-lg leading-relaxed">{content}</span>
                </div>
              </li>
            ))}
          </ul>

          {email && (
            <CtaLink href={`mailto:${email}`} className="mt-10">
              {labels?.cta}
            </CtaLink>
          )}
        </FadeIn>

        <FadeIn
          x={20}
          y={0}
          delay={0.15}
          className="relative isolate min-h-[420px] overflow-hidden border-t-4 border-primary-light"
        >
          <MapContainer
            center={position}
            zoom={13}
            scrollWheelZoom={false}
            className="absolute inset-0"
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>
                {address.name}<br/>
                {address.street}
              </Popup>
            </Marker>
          </MapContainer>
        </FadeIn>
      </div>
    </section>
  )
}
