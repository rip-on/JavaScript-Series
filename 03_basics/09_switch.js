const month = 3

switch (month) {
    case 1:
        console.log("January");
        
        break;
    case 2:
        console.log("Feb");
        
        break;
    case 3:
        console.log("March");
        
        break;
    case 4:
        console.log("April");
        
        break;

    default:
        console.log("default case match");
        
        break;
}
//March
//if we don't use break it will continue to print all the rest codes except default

const months = "march"

switch (months) {
    case "Jan":
        console.log("January");
        break;
    case "feb":
        console.log("February");
        break;
    case "march":
        console.log("march");
        break;

    default:
        break;
}
//by this way we can check string.