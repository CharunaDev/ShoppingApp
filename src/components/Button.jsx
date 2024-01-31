const Button = ({label, iconURL, backgroundColor, textColor, borderColor, fullWidth}) => {
  return (
    <button 
    className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none hover:opacity-50
    ${
      backgroundColor
        ? `${backgroundColor} ${textColor} ${borderColor}`
        : "bg-chenin-500 text-white border-chenin-500"
    } rounded-full ${fullWidth && "w-full"}`}
  >
        {label}
        {iconURL && <img src={iconURL} 
         alt="arrow right"
         className="ml-2 rounded-full w-5 h-5" />}
    </button>
  )
}

export default Button