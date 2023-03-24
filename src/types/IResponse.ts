interface ITypesIdentifier{
    type: string
    identifier: string
}

interface IReadingModel{
    text: boolean
    image: boolean
}

interface IImageLinks{
    smallThumbnail: string
    thumbnail: string
}

interface IVolumeInfo{
    title: string
    subtitle?: string
    authors?: string[]
    publishedDate: string
    description?: string
    industryIdentifiers: ITypesIdentifier[]
    readingModes: IReadingModel
    imageLinks?: IImageLinks
    pageCount: number
    printType: string
    categories?: string[]
    maturityRating: string
    allowAnonLogging: string
    contentVersion: string
    language: string
    previewLink: string
    infoLink: string
    canonicalVolumeLink: string
}

interface ISaleInfo{
    country: string
    saleability: string
    isEbook: boolean
}

interface IEpubAndPdf{
    isAvailable: boolean
}

interface IAccessInfo{
    country: string
    viewability: string
    embeddable: boolean
    publicDomain: boolean
    textToSpeechPermission: string
    epub: IEpubAndPdf
    pdf: IEpubAndPdf
    webReaderLink: string
    accessViewStatus: string
    quoteSharingAllowed: boolean
}

interface ISearchInfo{
    textSnippet: string
}

export interface IItemsBooks{
    kind: string
    id: string
    etag: string
    selfLink: string
    volumeInfo: IVolumeInfo
    saleInfo: ISaleInfo
    accessInfo: IAccessInfo
    searchInfo?: ISearchInfo
}

export interface IResponseBooksInterface{
    kind: string
    totalItems: number
    items: IItemsBooks[]
}