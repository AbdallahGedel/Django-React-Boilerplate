export default async function requestToServer(fetchUrl) {
    try {

        const response = await fetch(fetchUrl)

        if (!response.ok) {
            throw new Error('Network response was not ok!')
        }

        const data = await response.json()
        // Work with data if you need...
        return data

    } catch (error) {
        console.error('Fetch error: ', error);
    }
}