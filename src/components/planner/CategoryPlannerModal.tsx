"use client"
import { useEffect, useState } from "react"
import Modal from "../modal"
import Boss_Data from "../../data/boss_data.json"
import { ImCross } from "react-icons/im";
import { motion } from "motion/react";

interface settings {
    SelectedSettings: string
    TitleSettings: string
    StateSettings: boolean
    ResetSettings: () => void
}

interface Boss {
    name: string
    image: string
    difficulty: string[]
    request: {}
}

const CategoryPlannerModal = (props: settings) => {
    const [data, setData] = useState<Boss[] | null>(null);

    // Actualisation du contenue de la modal.
    useEffect(() => {
        if (props.SelectedSettings === "add_boss") {
            setData(Boss_Data);
        } else {
            setData(null)
        }
    }, [props.SelectedSettings]);

    // Fonction pour trouver les items nécessaires selon le boss et ça difficulté.
    const find_boss_element = (Boss_Name: string, Boss_difficulty: string) => {
        const Boss = Boss_Data.find(Boss => Boss.name === Boss_Name)
        const Items = Boss?.request.find(Item => Item.difficulty === Boss_difficulty)
    }

    return (
        <Modal ResetSettings={props.ResetSettings} State={props.StateSettings}>
            {/* Header de la modale. */}
            <div className="relative flex justify-between items-center w-full px-8 py-4">
                <motion.div onClick={props.ResetSettings} className="hover:cursor-pointer" initial={{rotate: 0}} whileHover={{rotate: 90}} whileTap={{rotate: 360}}>
                    <ImCross className="text-[2rem] text-[white]" />
                </motion.div>
                <h1 className="text-[2rem] relative inline-block">{props.TitleSettings}</h1>
                <span className="bg-white w-[25%] h-[0.15rem] absolute bottom-0 left-0"></span>
                <span className="bg-white w-[25%] h-[0.15rem] absolute bottom-0 right-0"></span>
            </div>
            {/* Affichage des propositions récupéré via les données json */}
            {data ? (
                <ul className="grid grid-cols-2 gap-8 px-[2rem] py-[1rem] mt-[2rem]">
                    {data.map((data2, index) => (
                        <li key={index} className="flex justify-between items-center group">
                            <img className="w-[10rem]" src={`${data2.image}.webp`} alt={data2.name} draggable={false} />
                            <div className="flex flex-col">
                                <h3 className="text-[1.75rem] relative text-white group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:via-blue-300 group-hover:to-white group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300 hover:cursor-default select-none">{data2.name}</h3>
                                <div className="flex gap-8">
                                    {data2.difficulty.map((difficulty, index) => (
                                        <p onClick={() => find_boss_element(data2.name, difficulty)} className={`${difficulty === "Gamma" ? "border-green-500" : difficulty === "Beta" ? "border-orange-500" : "border-red-500"} ${difficulty === "Gamma" ? "hover:bg-green-500" : difficulty === "Beta" ? "hover:bg-orange-500" : "hover:bg-red-500"} border-[0.1rem] px-[0.25rem] py-[0.1rem] rounded-sm flex justify-center items-center text-center transition-all duration-300 hover:cursor-pointer select-none`} key={index}>{difficulty}</p>
                                    ))}
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Loading...</p>
            )}
        </Modal>
    )
}

export default CategoryPlannerModal