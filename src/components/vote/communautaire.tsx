// Composant permettant l'affichage des récompenses communautaires d'un serveur ark.
// Mis en pose le temps d'une potentiel collaboration.
'use client'
import { motion } from "motion/react"

const CommunautairePalier = () => {
    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} className="w-full mt-16">
            <h1 className="text-[1.25rem]">Récompenses communautaires :</h1>
        </motion.div>
    )
}

export default CommunautairePalier