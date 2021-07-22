import { writeFile, readFile } from 'fs/promises';

export const addToFile = async (newMessage) => {
    try {
        const data = await readFile("receivedMessages.json", { encoding: 'utf8', flag: 'a+' });
        let parsedData = [];
        if (data) {
            parsedData = JSON.parse(data);
        }
        parsedData.push(newMessage);
        await writeFile("receivedMessages.json", JSON.stringify(parsedData), { flag: "w" });
        return parsedData;
    } catch (err) {
        throw err;
    }
};

export const readFromFile = async () => {
    try {
        const data = await readFile("receivedMessages.json", { encoding: 'utf8', flag: 'a+' });
        if (data) return JSON.parse(data);
        return [];        
    } catch (err) {
        throw err;
    }
};