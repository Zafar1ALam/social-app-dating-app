import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
const getConfig = async () => {
    const value = await AsyncStorage.getItem('asyncUser');
    const parseAsyncValue = JSON.parse(value)
    return {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-type": "Application/json",
            "Authorization": `Bearer ${parseAsyncValue.token}`
        }
    }
}
export const axiosGet = async (url) => await axios.get(url, await getConfig())
export const axiosPatch = async (url, body) => {
    console.log(url, body)

    return await axios.patch(url, body, await getConfig())

}

