const Button = (Props) => {

    const tailwindStyle = ` 
            cursor-pointer 
            font-semibold 
            text-[1.7rem] 
            bg-n-4 
            hover:bg-n-2 
            text-c-3 
            hover:text-c-4 
            relative 
            overflow-hidden 
            transition-[0.3s] 
            px-2.5 
            py-[5px] 
            rounded-[5px]
            
            ${Props.className || null}

        `
    
    const Link = () => (
        <a href={Props.href} className={tailwindStyle}>
           {Props.children}
        </a>
    )

    const Button = () => (
        <button className={tailwindStyle}>
            {Props.children}
        </button>
    )


    return (
        <>
            {
                Props.href ? <Link /> : <Button />
            }
        </>
    )
}

export default Button