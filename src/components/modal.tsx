import { motion } from "motion/react"

interface ModalSettings {
    ResetSettings: () => void
    State: boolean
    children: React.ReactNode
}

const Modal = ({ ResetSettings, State, children }: ModalSettings) => {

    return (
        <motion.div onClick={ResetSettings} initial={{ opacity: 0, display: 'none' }} animate={State ? { opacity: 1, display: 'flex' } : { opacity: 0, display: 'none' }} className="w-full h-screen bg-black/40 fixed left-0 top-0 flex justify-center items-center">
            <div onClick={(event) => event.stopPropagation()} className="w-[50%] pb-[2rem] bg-[#181818] rounded-xl">
                {children}
            </div>
        </motion.div>
    );
};

export default Modal;
