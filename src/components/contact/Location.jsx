"use client"

import { useEffect, useState } from "react"
import dynamic from 'next/dynamic'

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

const position = [48.8566, 2.3522]

export default function Location({ title, description, address, hours }) {
  const [map, setMap] = useState(null)

  useEffect(() => {
    import('leaflet').then(L => {
      // Instead of deleting, directly set the icon options
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
        _getIconUrl: function (name) {
          return this[`${name}Url`]
        }
      })
    })
  }, [])

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
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
            <div>
              <p className="text-gray-600">{hours}</p>
            </div>
          </div>
          <div className="h-[400px] rounded-lg overflow-hidden shadow-lg">
            <MapContainer
              center={position}
              zoom={13}
              scrollWheelZoom={false}
              style={{ height: "100%", width: "100%" }}
              ref={setMap}
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
          </div>
        </div>
      </div>
    </section>
  )
}