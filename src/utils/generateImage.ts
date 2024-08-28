import { CarType } from "../types";
import { colors } from "./constant";

const generateImage = (car: CarType, angle?: string): string => {
    const url = new URL("https://cdn.imagin.studio/getimage")

    url.searchParams.append("customer", "hrjavascript-mastery")
    url.searchParams.append("make", car.make)
    url.searchParams.append("modelFamily", car.model)
    url.searchParams.append("zoomType", "fullscreen")

    //* açı param ı gelirse url e ekle
    if (angle) {
        url.searchParams.append("angle", angle)
    }

    //* dizinin uzunluğu kadar rastgele sayı belirle
    const i = Math.round(Math.random() * colors.length)

    //* diziden rastgele alınan rengi param olarak ekle
    url.searchParams.append("paintId", colors[i])

    //* url in son halini return et
    return url.href
}

export default generateImage