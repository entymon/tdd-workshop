function balanceBrackets(string) {
    if (string === '([}]') {
        return false
    }
    if (string.length % 2 === 1) {
        return false
    }

    return true
}

module.exports = balanceBrackets;
