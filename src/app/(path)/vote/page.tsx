'use client'
import ChoiceButton from "@/components/vote/choiceButton"
import { motion } from "motion/react"

const VotePage = () => {


    return (
        <motion.main initial={{opacity: 0}} animate={{opacity: 1}} className="w-full max-w-[1440px] flex flex-col justify-center items-center">
            <h1 className="text-[1.5rem] mt-12">VOTEZ POUR PROPULSER LE SERVEUR ET OBTENEZ DES RÉCOMPENSES UNIQUES !</h1>
            <p className="text-[1.25rem] max-w-[850px] text-center mt-8">Chaque vote contribue à hisser notre serveur dans les classements, attirant ainsi davantage de joueurs et dynamisant notre communauté. En plus de soutenir le serveur, votre engagement sera généreusement récompensé !</p>
            <ChoiceButton />
        </motion.main>
    )
}

export default VotePage