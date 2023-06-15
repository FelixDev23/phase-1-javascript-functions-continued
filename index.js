function saturdayFun(activity = "roller-skate"){
        return `This Saturday, I want to ${activity}!`
    };

function mondayWork(work = "go to the office"){
    return `This Monday, I will ${work}.`
    };

function wrapAdjective (wrapper){
    return function (someString){
        return `You are ${wrapper}${someString}${wrapper}!`
    }
}