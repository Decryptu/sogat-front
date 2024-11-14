import { useLocale } from 'next-intl';
import NavigationMenu from '../navigation/NavigationMenu';

export default function Header() {
  const locale = useLocale();
  
  return (
    <header>
      <NavigationMenu locale={locale} />
    </header>
  );
}