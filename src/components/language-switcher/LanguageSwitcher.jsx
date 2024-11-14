'use client'

import { useTranslations } from 'next-intl'
import { useRouter, usePathname } from 'next/navigation'
import { Button } from "@/components/ui/button"

export default function LanguageSwitcher({ locale }) {
  const t = useTranslations('common')
  const router = useRouter()
  const pathname = usePathname()

  const handleClick = () => {
    const newLocale = locale === 'fr' ? 'en' : 'fr'
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`)
    router.push(newPath)
  }

  return (
    <Button
      onClick={handleClick}
      variant="default" 
      className="font-medium"
    >
      {t('switchLanguage')}
    </Button>
  )
}