export const sayHello = () => {
    console.log("This 'Hello Cynthia' was decleared outside")
}

const Button = ({parentHello}) => {
    return (
        <>
            <button onClick={() => {console.log("Hello Cynthia")}} className="btn">Click Me</button>
            <button onClick={sayHello} className="btn">Click Me</button>
            <button onClick={parentHello} className="btn">Click Me</button>
        </>
    )
}

export default Button;