const Button = ({ children,url }) => {
    return(
        <div className="flex py-5 w-full justify-center text-center">
            <a href={url} className="flex border border-[#cc2121] rounded-md p-3 w-44 justify-center hover:bg-[#272742]" target="_blank">{children}</a>
        </div>
    )
}

export default Button;