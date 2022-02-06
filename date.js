// If we want the Full Date to be displayed as the H1 listTitle
exports.getDate = function () {
    const today = new Date();

    const options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    };

    return today.toLocaleDateString("en-US", options);
}


// If we want the Day to be displayed as the H1 listTitle
exports.getDay = function () {
    const today = new Date();

    const options = {
        weekday: "long",
    };

    return today.toLocaleDateString("en-US", options);
}

exports.getYear = function () {
    const today = new Date();

    const options = {
        year: "numeric",
    };

    return today.toLocaleDateString("en-US", options);
}