export default function timeConvert(timeString: string) {
    const createdAt = new Date(timeString);
    const year = createdAt.getFullYear();
    const month = createdAt.getMonth();
    const date = createdAt.getDate();
    const hour = createdAt.getHours();
    const min = createdAt.getMinutes();
    const converted = `${year} / ${month} / ${date} -- ${hour}:${min}`;
    return converted;
}
