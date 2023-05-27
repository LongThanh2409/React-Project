
import { useState } from "react"
import Image_erro from "./Image-Error/img-error.png"
const Image = (({ src, alt, failImage = Image_erro, ...pros }: any) => {

    const [errorss, setError] = useState("")
    const handlErrorImage = () => {
        setError(failImage)
    }
    return (
        <img src={errorss || src} {...pros} onError={handlErrorImage} alt={alt} />
    )

})

export default Image