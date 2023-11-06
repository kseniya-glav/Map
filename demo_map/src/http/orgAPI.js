import {$authHost, $host} from "./index";

export const fetchCategory =  async() => {
    const {data} = await $host.get('api/category')
    return data
}

export const fetchType = async() => {
    const {data} = await $host.get('api/type')
    return data
}

export const fetchLocality = async() => {
    const {data} = await $host.get('api/locality')
    return data
}

export const fetchPlaceMark = async() => {
    const {data} = await $host.get('api/org')
    return data
}

export const fetchOrg = async(typeName, catName, statusName, localityName) => {
    const {data} = await $host.get('api/org', {
        params: { typeName, catName, statusName, localityName}
    })
    return data
}

export const fetcOneOrg = async(id) => {
    const {data} = await $host.get('api/org/' + id)
    return data
} 