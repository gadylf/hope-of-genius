import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-5 gap-8">
          {/* Logo et Description */}
          <div className="col-span-2">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="Hope of Genius"
                width={200}
                height={100}
                className="mb-6"
              />
            </Link>
            <p className="text-gray-300 pr-8">
              À la Fondation HOPE OF GENIUS, nous croyons que chaque esprit 
              brillant mérite une chance d'éclore. Nous révélons, formons et 
              accompagnons les talents exceptionnels pour qu'ils transforment 
              le monde.
            </p>
          </div>

          {/* Colonnes de navigation */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Nos activités</h3>
            <ul className="space-y-2">
              <li><Link href="/a-propos" className="hover:text-yellow-400">A propos</Link></li>
              <li><Link href="/nos-activites" className="hover:text-yellow-400">Nos activités</Link></li>
              <li><Link href="/nos-projets" className="hover:text-yellow-400">Nos projets</Link></li>
              <li><Link href="/nos-clubs" className="hover:text-yellow-400">Nos clubs</Link></li>
              <li><Link href="/contacts" className="hover:text-yellow-400">Contacts</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Liens utiles</h3>
            <ul className="space-y-2">
              <li><Link href="/a-propos" className="hover:text-yellow-400">A propos</Link></li>
              <li><Link href="/nos-activites" className="hover:text-yellow-400">Nos activités</Link></li>
              <li><Link href="/nos-projets" className="hover:text-yellow-400">Nos projets</Link></li>
              <li><Link href="/nos-clubs" className="hover:text-yellow-400">Nos clubs</Link></li>
              <li><Link href="/contacts" className="hover:text-yellow-400">Contacts</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Nos Clubs</h3>
            <ul className="space-y-2">
              <li><Link href="/a-propos" className="hover:text-yellow-400">A propos</Link></li>
              <li><Link href="/nos-activites" className="hover:text-yellow-400">Nos activités</Link></li>
              <li><Link href="/nos-projets" className="hover:text-yellow-400">Nos projets</Link></li>
              <li><Link href="/nos-clubs" className="hover:text-yellow-400">Nos clubs</Link></li>
              <li><Link href="/contacts" className="hover:text-yellow-400">Contacts</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Liens utiles</h3>
            <ul className="space-y-2">
              <li><Link href="/a-propos" className="hover:text-yellow-400">A propos</Link></li>
              <li><Link href="/nos-activites" className="hover:text-yellow-400">Nos activités</Link></li>
              <li><Link href="/nos-projets" className="hover:text-yellow-400">Nos projets</Link></li>
              <li><Link href="/nos-clubs" className="hover:text-yellow-400">Nos clubs</Link></li>
              <li><Link href="/contacts" className="hover:text-yellow-400">Contacts</Link></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>@HOPE OF GENIUS {currentYear}, Tous droits réservés | Design avec amour par SIMPLE MIND</p>
        </div>
      </div>
    </footer>
  );
}