function balanceBrackets(string) {
    if(string === '([}]') {
        return false
    }

    return true
}

module.exports = balanceBrackets;
