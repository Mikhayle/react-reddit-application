export const computeTime = (time: number | undefined) => {
    if (time) {
        const newTime = new Date().getHours() - time;
        console.log(time)

        if ((newTime >= 2 && newTime <= 4) || ( newTime >= 22 && newTime <= 23 )) {
            return `${newTime} часа`;
        }

        if (newTime >= 5 && newTime <= 20) {
            return `${newTime} часов`;
        }

        return `${newTime} час`;
    }
}