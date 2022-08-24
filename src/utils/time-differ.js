

// Time difference between 2 times in miliseconds
function timeDiffer(_date) {
    try {
        const currentDate = new Date();
        const date = new Date(_date);

        return (currentDate - date);
    } catch (error) {
        throw new Error(error);
    }
}

export default timeDiffer;