"use client"

import { useEffect } from "react"
import dynamic from 'next/dynamic'
import { motion } from "framer-motion"
import { Phone, Printer, Mail, Linkedin } from 'lucide-react'

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

export default function Location({ title, description, address, hours, phone, fax, email, linkedin }) {
  useEffect(() => {
    import('leaflet').then(L => {
      L.Icon.Default.mergeOptions({
        iconUrl: 'marker-icon.png',
        iconRetinaUrl: 'marker-icon-2x.png',
        shadowUrl: 'marker-shadow.png'
      })
    })
  }, [])

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <div>
              <h2 className="text-3xl font-bold mb-4">{title}</h2>
              <p className="text-gray-600">{description}</p>
            </div>
            <div className="space-y-2">
              <p className="font-bold">{address.name}</p>
              <p>{address.street}</p>
              <p>{address.city}</p>
              <p>{address.country}</p>
            </div>
            <div className="space-y-3">
              <p className="text-gray-600">{hours}</p>
              {phone && (
                <div className="flex items-center gap-2 text-gray-700">
                  <Phone className="w-4 h-4" />
                  <a href={`tel:${phone}`} className="hover:text-blue-600">
                    {phone}
                  </a>
                </div>
              )}
              {fax && (
                <div className="flex items-center gap-2 text-gray-700">
                  <Printer className="w-4 h-4" />
                  <span>{fax}</span>
                </div>
              )}
              {email && (
                <div className="flex items-center gap-2 text-gray-700">
                  <Mail className="w-4 h-4" />
                  <a href={`mailto:${email}`} className="hover:text-blue-600">
                    {email}
                  </a>
                </div>
              )}
              {linkedin && (
                <div className="flex items-center gap-2 text-gray-700">
                  <Linkedin className="w-4 h-4" />
                  <a
                    href={linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600"
                  >
                    LinkedIn
                  </a>
                </div>
              )}
            </div>
          </motion.div>
          <motion.div
            className="h-[400px] rounded-lg overflow-hidden shadow-lg"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <MapContainer
              center={position}
              zoom={13}
              scrollWheelZoom={false}
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
          </motion.div>
        </div>
      </div>
    </section>
  )
}