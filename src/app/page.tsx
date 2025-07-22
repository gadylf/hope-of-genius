import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-darkgreen-700 to-darkgreen-600">
      {/* Hero section */}
      <div className="container mx-auto px-8 py-16">
        <div className="grid grid-cols-2 gap-12 items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-7xl font-bold mb-6 leading-tight">
              Là où brille le talent,{' '}
              <span className="text-yellow-400">l'espoir grandit</span>
            </h1>
            <p className="text-xl mb-8 leading-relaxed">
              Chaque enfant que nous révélons aujourd'hui est un{' '}
              <span className="font-bold">génie en puissance, porteur de solutions pour demain</span>.{' '}
              En investissant dans l'intelligence des plus démunis, nous bâtissons{' '}
              <span className="font-bold">un avenir fondé sur le mérite, la justice et l'excellence</span>.
            </p>
            <Link
              href="/parrainer"
              className="inline-block bg-yellow-400 text-darkgreen-600 px-8 py-4 rounded-full text-lg font-bold hover:bg-yellow-500 transition-colors"
            >
              Parrainer un Genius
            </Link>
          </div>
          <div className="relative flex justify-end min-h-[600px]">
            <div className="relative w-[600px] h-[600px]">
              <div 
                className="absolute w-48 h-48 bg-yellow-400 rounded-full"
                style={{ right: '-120px', top: '20px', zIndex: 1 }}
              />
              <div className="absolute top-0 right-0 w-[500px] h-[500px] overflow-hidden rounded-full">
                <Image
                  src="/images/students2.png"
                  alt="Étudiants Hope of Genius"
                  fill
                  style={{ objectFit: 'cover', zIndex: 2 }}
                  priority
                />
              </div>
              <div 
                className="absolute bottom-0 left-0 w-[290px] h-[290px] overflow-hidden rounded-full"
                style={{ zIndex: 2 }}
              >
                <Image
                  src="/images/students1.png"
                  alt="Étudiants Hope of Genius"
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </div>
              <div 
                className="absolute bottom-1/2 -left-3 w-3 h-3 bg-sky-200/50 rounded-full"
                style={{ zIndex: 1 }}
              />
              <div 
                className="absolute bottom-1/2 left-0 w-8 h-8 bg-sky-200/50 rounded-full"
                style={{ zIndex: 1 }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Section "Perles rares" */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-8 max-w-4xl text-center">
          <h2 className="text-5xl font-bold leading-snug mb-8">
            Des <span className="text-green-700">perles rares</span> soigneusement sélectionnées dans des <span className="text-green-700">sols pauvres</span>
          </h2>
          <p className="text-lg leading-relaxed mb-10 font-semibold text-gray-800">
            Dans les quartiers oubliés, les villages reculés, les familles qui luttent chaque jour pour survivre, vivent des enfants à l'intelligence fulgurante.
            Des esprits brillants, invisibles aux radars classiques. À la HOPE OF GENIUS FOUNDATION, nous ne cherchons pas les meilleurs dossiers scolaires ni les écoles cotées, 
            les acquis du tableau, ni l'âge d'apprendre malgré tout. Nous les révélons, un par un, avec exigence et bienveillance. 
            Ce sont des perles rares, que la pauvreté ne doit plus ensevelir.
          </p>
          <blockquote className="text-xl font-semibold text-green-700 mb-10">
            “Un génie né sans chance est une lumière en danger d’extinction. Nous refusons qu’elle s’éteigne.”
          </blockquote>
          <button className="bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-colors mb-12">
            En savoir plus à propos de nous
          </button>
          <div className="overflow-hidden shadow-lg max-w-8xl mx-auto">
            <Image
              src="/images/students3.png"
              alt="Étudiants heureux"
              width={1000}
              height={600}
              className="object-cover w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Section Programme */}
      <section className="bg-darkgreen-700 py-24 text-white">
        <div className="container mx-auto px-8 grid grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-4">
              Un <span className="text-yellow-400">programme</span> exceptionnel <br />
              pour des génies <span className="text-yellow-400">d’exception</span>
            </h2>
            <p className="text-sm mb-6">Créer, inventer, expérimenter, partager… <br />
            c’est dans l’ADN des clubs Genius.</p>
            <p className="text-lg text-white/90 mb-8">
              Parce que leur potentiel est immense, leur accompagnement doit l’être aussi.
              Nos Genius intègrent un programme qui dépasse tout ce qu’ils ont connu : excellence académique, mentorat de haut niveau, 
              accès à des ressources pédagogiques, rencontres inspirantes, développement personnel et engagement civique.
            </p>
            <p className="text-lg text-white/90 mb-6 font-semibold">
              Chaque Genius est formé pour exceller, mais aussi pour inspirer, entreprendre, et construire autour de lui.
            </p>
            <p className="text-yellow-400 italic text-md mb-10">
              “Ce n’est pas seulement un programme. C’est une renaissance intellectuelle, sociale et humaine.”
            </p>
            <Link href="/programme">
              <button className="bg-white text-darkgreen-700 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                Découvrir nos programme
              </button>
            </Link>
          </div>
          <div className="relative">
            {/* Forme décorative rose */}
            <div className="absolute -top-12 -left-12 w-full h-full z-0">
              <svg viewBox="0 0 400 400" className="w-full h-full fill-pink-200">
                <circle cx="200" cy="200" r="200" />
              </svg>
            </div>
            <div className="relative z-10 rounded-full overflow-hidden w-[400px] h-[400px] border-4 border-dashed border-yellow-400 mx-auto">
              <Image
                src="/images/students4.png"
                alt="Deux enfants lisant"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
