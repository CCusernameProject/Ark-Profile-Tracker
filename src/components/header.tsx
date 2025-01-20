'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import Paths from '../data/path.json'
import { motion } from "motion/react"

const HeaderComponent = () => {
  const pathname = usePathname()

  return (
    <header className="w-full max-w-[1440px] flex justify-between h-[4rem] items-center">
      {/* Titre du header */}
      <p className="text-[1.5rem]">Ark Profile Tracker</p>
      <nav>
        <ul className="flex gap-10 text-[1.25rem]">
          {/* Affichage de la barre de navigation gérer par un dossier JSON */}
          {Paths.map((path, index) => (
            <Link key={index} href={path.model}>
              <span className="relative px-1">
                <motion.span initial={{width: 0, opacity: 0}} animate={{width: path.model === pathname ? '100%' : 0, opacity: path.model === pathname ? 1 : 0}} className="h-[0.1rem] bg-white absolute left-0 bottom-[-0.2rem] rounded-full"></motion.span>
                {path.name}
                <motion.span initial={{width: 0, opacity: 0}} animate={{width: path.model === pathname ? '100%' : 0, opacity: path.model === pathname ? 1 : 0}} className="h-[0.1rem] bg-white absolute right-0 top-[-0.2rem] rounded-full"></motion.span>
              </span>
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default HeaderComponent