import { appAxios } from "./config";

export async function handleCepFetch(cep: string) {
    const response = await appAxios.get(`/cep/${cep}`)

    return response
}
