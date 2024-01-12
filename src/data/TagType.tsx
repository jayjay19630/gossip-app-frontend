type TagType = {
    id: number | string, 
    tagName: string, 
    clickable: boolean, 
    tagsArr: number[], 
    passChildData: Function | undefined
}


type TagDataType = {
    id: number,
    tag_name: string,
    created_at: string,
    updated_at: string
}

export type { TagDataType, TagType }