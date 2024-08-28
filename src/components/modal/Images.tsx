import { CarType } from "../../types"
import generateImage from "../../utils/generateImage"

const Images = ({ car }: { car: CarType }) => {
    return (
        <div className="flex-1 flex-col gap-3">
            {/** büyük resim */}
            <div className="w-full h-40 bg-pattern bg-center rounded-lg">
                <img className="h-full mx-auto object-contain" src={generateImage(car)} />
            </div>
            {/** küçük resimler */}
            <div className="flex gap-3 my-3">
                <div className="rounded flex-1 flex relative h-24 bg-primary-blue-100">
                    <img className="h-full mx-auto object-contain min-w -[146px]" src={generateImage(car, "29")} />
                </div>

                <div className="rounded flex-1 flex relative h-24 bg-primary-blue-100">
                    <img className="h-full mx-auto object-contain min-w -[146px]" src={generateImage(car, "33")} />
                </div>

                <div className="rounded flex-1 flex relative h-24 bg-primary-blue-100">
                    <img className="h-full mx-auto object-contain min-w -[146px]" src={generateImage(car, "13")} />
                </div>
            </div>
        </div>
    )
}

export default Images