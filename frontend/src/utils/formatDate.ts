const FormatDate = (date:string)=>{

    const newDate = new Date(date);
    
    const formattedDate = newDate.toLocaleDateString("en-US",{
        day:"numeric",
        month:"short",
        year:"numeric"
    })

    return formattedDate;

}

export default FormatDate