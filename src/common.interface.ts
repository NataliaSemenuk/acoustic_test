import { ElementTypes } from './common.enum';

export interface IData {
    author: {
        elementType: ElementTypes.TEXT,
        value: string,
    },
    body: {
        elementType: ElementTypes.FORMATTED_TEXT,
        values: string[],
    },
    date: {
        elementType: ElementTypes.DATE_TIME,
        value: string,
    },
    heading: {
        elementType: ElementTypes.TEXT,
        value: string,
    },
    mainImage: {
        elementType: ElementTypes.GROUP,
        typeRef: {
            id: string,
        },
        value: {
            leadImage: {
                asset: {
                    altText: string,
                    fileName: string
                    fileSize: number,
                    height: number,
                    id: string,
                    mediaType: string,
                    resourceUri: string,
                    width: number,
                },
                elementType: ElementTypes.IMAGE,
                mode: string,
                profiles: string[],
                renditions: {
                    lead: unknown,
                    card: unknown,
                    default: unknown
                },
                url: string,
            }, 
            leadImageCaption: {
                elementType : ElementTypes.TEXT,
                value: string,
            }, 
            leadImageCredit: {
                elementType : ElementTypes.TEXT,
            },
        }
    }
};
