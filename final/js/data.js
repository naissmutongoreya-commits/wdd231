export async function getCareers() {
    try {
        const response = await fetch('./data/careers.json');

        if (!response.ok) {
            throw new Error("Network error");
        }

        const data = await response.json();
        return data;

    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
