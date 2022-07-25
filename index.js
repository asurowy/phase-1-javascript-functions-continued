function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}
saturdayFun(); //This Saturday, I want to roller-skate! 

function mondayWork(activity = "go to the office"){
    return `This Monday, I will ${activity}.`;
}
mondayWork();

function wrapAdjective(initializedWith){
let encouragingPromptFunction = function (adjective = "special"){
return `You are ${initializedWith}${adjective}${initializedWith}!`;
};
return encouragingPromptFunction;
}

wrapAdjective("*")("a hard worker"); //=>
wrapAdjective("||")("a dedicated programmer"); //=> 
