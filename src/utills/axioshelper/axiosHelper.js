import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import RNFetchBlob from 'rn-fetch-blob';

const getUserAsync = async () => {
    const value = await AsyncStorage.getItem('asyncUser');
    return JSON.parse(value)
}


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
export const axiosGet = async (url) =>
    await axios.get(url, await getConfig())
export const axiosPatch = async (url, body) => {
    console.log(url, body)

    return await axios.patch(url, body, await getConfig())

}



export const axiosPost = async (url, body) => {
    console.log(url, body)

    return await axios.post(url, body, await getConfig())

}


export const axiosPut = async (url, body) => {
    console.log(url, body)

    return await axios.put(url, body, await getConfig())

}

export const axiosPostWithoutToken = async (url, body) => {
    console.log(url, body)
    // var a = await getUserAsync()
    return await axios.post(url, body)

}

export const axiosPatchWithoutToken = async (url, body) => {
    console.log(url, body)
    // var a = await getUserAsync()
    return await axios.patch(url, body)

}







