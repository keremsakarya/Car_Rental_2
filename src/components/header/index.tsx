import { Link } from "react-router-dom"
import Button from "../button"

const Header = () => {
    return (
        <div className="w-full absolute z-10">
            <div className="max-width flex justify-between items-center px-6 py-4">
                <Link to="/">
                    <img src="/bmw.png" width={50} />
                </Link>

                <Button title="Kaydol" designs="min-w-[130px]" />
            </div>
        </div>
    )
}

export default Header