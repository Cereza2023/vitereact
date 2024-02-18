const FormateDate = ({ children }) => {
    return(
        <div>
            <div>
                <span className={`text-sm ${isMouseEnter['exp1'] ? "text-primaryTitle":""}`}>{children}</span>
            </div>
        </div>
    )
}

export default FormateDate;