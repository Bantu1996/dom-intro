function calculatingBill() {
    var theCalcCallCost = 0;
    var theCalcSmsCost = 0;
    var theCalcWarningLevel = 0;
    var theCalcCriticalLevel = 0;
     
    
    var smsTotalCalcCost = 0;
     
    var callTotalCalcCost = 0;


    function setCalcCallCost(calcCallCost){
        theCalcCallCost = calcCallCost;
            
            }
        
            function getCalcCallCost() {
        
        return theCalcCallCost;
            }

            function setCalcSmsCost(calcSmsCost){
                theCalcSmsCost = calcSmsCost;
                    
                    }
                
                    function getCalcSmsCost() {
                
                return theCalcSmsCost;
                    }

function setCalcCriticalLevel() {


}



    return {
        setCalcCallCost,
        getCalcCallCost,
        setCalcSmsCost,
        getCalcSmsCost,
    setCalcCriticalLevel
    }

}