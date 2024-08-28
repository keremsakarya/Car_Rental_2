type Props = {
    children: string
}

//* HOC
const Warning = ({ children }: Props) => {
    return <div className="home__error-container"></div>
}

export default Warning