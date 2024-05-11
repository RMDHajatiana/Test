function nonConsecutiveDigits(N) {
    const digits = N.toString().split('').map(Number);
    const result = [];

    result.push(digits[0]);

    for (let i = 1; i < digits.length; i++) {
        if (digits[i] === digits[i - 1]) {
            result.push((digits[i] + 1) % 10);
        } else {
            result.push(digits[i]);
        }
    }

    return parseInt(result.join(''), 10);
}

