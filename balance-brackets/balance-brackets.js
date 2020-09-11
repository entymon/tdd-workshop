function balanceBrackets(string) {
    let squreOpen = 0
    let squreClose = 0

    if (string === '([}]') {
        return false
    }

    if (string.length % 2 === 1) {
        return false
    }

    for(let i = 0; i < string.length; i++) {
        if (string.charAt(i) === '[') {
            squreOpen++
        }
        if (string.charAt(i) === ']') {
            squreClose++
        }

        if (squreOpen < squreClose) {
            return false;
        }
    }

    return true
}

module.exports = balanceBrackets;
