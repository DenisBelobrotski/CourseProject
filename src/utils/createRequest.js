export default function createRequest(input, page = undefined) {
    let result = "https://api.punkapi.com/v2/beers?per_page=25&";    
    for (var property in input) {
        if (input[property] !== "") {
            if (property === "brewed_before" || property === "brewed_after") {
                let dateParts = input[property].split("-");
                result += property + "=" + dateParts[1] + "-" + dateParts[0] + "&";
            } else {
                result += property + "=" + input[property] + "&";
            }
        }
    }
    if (page !== undefined) {
        result += "page=" + page;
    }
    return result;
}
