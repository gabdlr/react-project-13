//Sense of humor is important <<

function useDateInputfier (ugglyDate) {
    if (ugglyDate === null){
        return null;
    }
    if (ugglyDate === undefined){
        return null;
    }
    const beautyDate = ugglyDate.slice(0,ugglyDate.indexOf("T")).split("-").join("-");
    return beautyDate;
}

export default useDateInputfier;