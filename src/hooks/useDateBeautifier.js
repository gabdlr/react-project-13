//Sense of humor is important

function useDateBeautifier (ugglyDate) {
    if (ugglyDate === null){
        return null;
    }
    if (ugglyDate === undefined){
        return null;
    }
    const beautyDate = ugglyDate.slice(0,ugglyDate.indexOf("T")).split("-").reverse().join("-");
    return beautyDate;
}

export default useDateBeautifier;