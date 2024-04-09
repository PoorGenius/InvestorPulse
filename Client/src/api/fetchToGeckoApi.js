// In your external api/fetchToGeckoApi.js file
export const updateCoinData = async (fetchOn, setFinancialsData, setUpdateData) => {
    if (!fetchOn) {
        setFinancialsData([]);
        return;
    }

    try {
        const updateResponse = await fetch("http://localhost:3000/api/gecko/updateData", { method: "POST" });
        const updateData = await updateResponse.json();

        if (updateData.message === "success") {
            console.log("Data updated successfully");
            const dataResponse = await fetch("http://localhost:3000/api/gecko/getData");
            const newData = await dataResponse.json();
            setFinancialsData(newData);
        }
    } catch (error) {
        console.error("Failed to fetch data:", error);
    } finally {
        setUpdateData(false);
    }
};