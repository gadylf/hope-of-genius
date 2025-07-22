import Link from "next/link";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-darkgreen-700 to-darkgreen-600 text-white p-4 flex justify-between items-center px-8">
      <div className="flex items-center">
        <Link href="/">
          <Image 
            src="/images/logo.png" 
            alt="Hope of Genius" 
            width={150} 
            height={50} 
          />
        </Link>
      </div>

      <NavigationMenu>
        <NavigationMenuList className="space-x-6">
          <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Link href="/">Accueil</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Notre gouvernance</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[300px] gap-4 p-4">
                <ListItem href="/gouvernance" title="Vue d'ensemble">
                  Découvrez notre structure et notre vision
                </ListItem>
                <ListItem href="/gouvernance/equipe" title="Notre équipe">
                  Les personnes qui font avancer la fondation
                </ListItem>
                <ListItem href="/gouvernance/rapports" title="Rapports annuels">
                  Nos résultats et notre impact
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Link href="/projets">Nos projets</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Nos clubs</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[300px] gap-4 p-4">
                <ListItem href="/clubs" title="Tous nos clubs">
                  Découvrez l'ensemble de nos clubs
                </ListItem>
                <ListItem href="/clubs/activites" title="Activités">
                  Les programmes et événements
                </ListItem>
                <ListItem href="/clubs/inscription" title="Inscription">
                  Rejoignez un club
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Link href="/contacts">Contacts</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Link href="/nous-soutenir">Nous soutenir</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Link href="/nous-accompagnons">Nous accompagnons</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link 
                href="/faire-un-don" 
                className="bg-white text-darkgreen-600 px-4 py-2 rounded-full hover:bg-yellow-400 hover:text-white transition-colors"
              >
                Faire un don
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link 
          href={href}
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
        >
          <div className="text-sm font-medium leading-none text-darkgreen-600">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}