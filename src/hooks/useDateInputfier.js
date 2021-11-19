//Sense of humor is important <<

function useDateInputfier (ugglyDate) {
    if (ugglyDate === null){
        return null;
    }
    if (ugglyDate === undefined){
        return null;
    }
    if (!ugglyDate.includes("T")){
        return ugglyDate;
    }
    const beautyDate = ugglyDate.slice(0,ugglyDate.indexOf("T")).split("-").join("-");
    console.log(beautyDate)
    return beautyDate;
}

export default useDateInputfier;