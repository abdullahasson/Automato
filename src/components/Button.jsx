const Button = (Props) => {


    return (
        <button className='cursor-pointer font-semibold text-[1.7rem] bg-n-4 relative overflow-hidden transition-[0.3s] px-2.5 py-[5px] rounded-[5px] '>
            {Props.children}
        </button>
    )
}

export default Button