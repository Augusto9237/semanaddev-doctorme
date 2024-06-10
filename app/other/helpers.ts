export function formartTime(date: Date, addOneHout = false) {
    if (addOneHout) {
        date.setHours(date.getHours() + 1)
    }

    let hour = date.getUTCHours().toString()
    let minute = date.getUTCMinutes().toString()

    hour = hour.toString().padStart(2, '0')
    minute = minute.toString().padStart(2, '0')

    return `${hour}:${minute}`
}
