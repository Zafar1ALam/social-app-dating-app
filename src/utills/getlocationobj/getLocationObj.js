export const getLocationObj = (long, lat) => {
    return (
        {
            type: "Point",
            coordinates: [
                long,
                lat
            ]
        }
    )
}