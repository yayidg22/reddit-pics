

export const kFormatter = (num) => { //convert value in K example kFormatter(5000) return 5k
    return Math.abs(num) > 999 ? Math.sign(num) * ((Math.abs(num) / 1000).toFixed(1)) + 'k' : Math.sign(num) * Math.abs(num)
}