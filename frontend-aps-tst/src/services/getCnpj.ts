import { appAxios } from "./config"

export async function handleCNPJFetch(cnpj: string): Promise<any> {
    const response = await appAxios.get(`/cnpj/${cnpj}`)

    if (response.data.success) {
        const { razao_social, estabelecimento } = response.data.data

        return { razao_social, estabelecimento }
    }

    return { erro: true }
}

