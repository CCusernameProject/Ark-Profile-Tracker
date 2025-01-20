'use client'
import { motion } from "motion/react"
import { useState } from "react"
import IndividualPalier from "./individuel"
import CommunautairePalier from "./communautaire"

const ChoiceButton = () => {
    const [actif, setActif] = useState(true)

    return (
        <div className="w-full flex flex-col justify-center items-center">
            {/* Barre contenant 2 paramètres afin de choisir entre récompenses individuelles ou communautaires. */}
            <div className="bg-[#242424] flex gap-12 text-[1.25rem] px-[0.5rem] py-[0.5rem] rounded-md mt-12">
                <motion.p initial={{backgroundColor: '#FFFFFF00'}} animate={{backgroundColor: actif === true ? '#FFFFFF10' : '#FFFFFF00'}} className="px-[0.75rem] py-[0.25rem] rounded-md hover:cursor-pointer" onClick={() => setActif(true)}>
                    Récompenses individuelles
                </motion.p>
                <motion.p initial={{backgroundColor: '#FFFFFF00'}} animate={{backgroundColor: actif === false ? '#FFFFFF10' : '#FFFFFF00'}} className="px-[0.75rem] py-[0.25rem] bg-white/0 rounded-md hover:cursor-pointer" onClick={() => setActif(false)}>
                    Récompenses communautaires
                </motion.p>
            </div>

            {/* Verification conditionnel pour savoir si l'on doit afficher les récompenses individuelles ou communautaires. Event au click pour changer. */}
            {actif ? 
                <IndividualPalier />
            :
                <CommunautairePalier />
            }
        </div>
    )
}

export default ChoiceButton