import { motion } from "framer-motion"
import Button from "../button"
import { RefObject } from "react"

type Props = {
    //* useRef ile frekansı alanına bir elementin tipini tanımlarken RefObject kullanırız
    catalogueRef: RefObject<HTMLDivElement>
}

const Hero = ({ catalogueRef }: Props) => {

    const handleClick = () => {
        catalogueRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <div className="hero">
            <div className="pt-36 padding-x flex-1 max-h-[920px]">
                <h1 className="hero__title">
                    Özgürlüğü Hisset, Yolculuğa Başla
                </h1>
                <p className="hero__subtitle">
                    Altın standartta hizmetle unutulmaz bir yolculuğa hazır mısın?
                    Araç kiralama deneyimini Altın seçenekler ile taçlandırarak her anını özel kılabilirsin.
                </p>

                <Button title="Arabaları Keşfet" designs="mt-10" handleClick={handleClick} />
            </div>

            <div className="flex justify-center">
                <motion.img
                    initial={{
                        translateX: 200,
                        scale: 0.7,
                    }}
                    animate={{
                        translateX: 0,
                        scale: 1,
                    }}
                    transition={{ duration: .4 }}
                    className="object-contain" src="/hero.png" alt="bmw" />
            </div>
        </div>
    )
}

export default Hero