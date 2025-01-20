"use client"
import { useEffect, useState } from 'react'
import Planner_Category from '../../data/planner_category.json'
import CategoryPlannerModal from './CategoryPlannerModal'
const PlannerHeader = () => {
    const [categorySetting, setCategorySetting] = useState("")
    const [stateSetting, setStateSetting] = useState(false)
    const [titleSetting, setTitleSetting] = useState("")

    // Fonction pour réinitialiser les paramètres lors de la fermeture de la modale.
    const ResetSettings = () => {
        setCategorySetting("")
        setTitleSetting("")
        setStateSetting(false)
    }

    // Réinitialisation des paramètres après le chargement du composant.
    useEffect(() => {
        ResetSettings()
    }, [])

    // Fonction (props) pour changer les paramètres via la modale.
    const ChangeSettings = (id: string, name: string) => {
        setCategorySetting(id)
        setTitleSetting(name)
        setStateSetting(true)
    }

    return (
        <div className='flex justify-center items-center gap-[1.5rem] mt-[2rem]'>
            {Planner_Category.map((category, index) => (
                <button onClick={() => ChangeSettings(category.id, category.name)} key={index} className="text-[#181818] text-[1.25rem] px-[0.75rem] py-[0.25rem] bg-white/50 rounded-lg hover:bg-white/80 hover:shadow-md hover:shadow-white/50 hover:stroke-[0.15rem] hover:stroke-white/20 transition-all duration-300">{category.name}</button>
            ))}
            <CategoryPlannerModal ResetSettings={ResetSettings} TitleSettings={titleSetting} StateSettings={stateSetting} SelectedSettings={categorySetting} />
        </div>
    )
}

export default PlannerHeader