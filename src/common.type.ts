export interface IData {
    author: {
        elementType: "text",
        value: string,
    },
    body: {
        elementType: "formattedtext"
        values: ['<h2><span style="font-family:&#39;arial&#39; , &#3…lvetica&#39; , sans-serif">Hey there</span></h2>\n', '<p>Lorem ipsum dolor sit amet, consectetur adipisc…officia deserunt mollit anim id est laborum.</p>\n'],
    }
    date: {
        elementType: "datetime",
        value: "2020-09-06T22:00:00Z",
    },
    heading: {
        elementType: "text",
        value: string,
    },
    mainImage: {
        elementType: "group",
        typeRef: {id: 'fe31fbf4-4bc4-4ffa-9b27-615af51d23fe'},
        value: {
            leadImage: {
                asset: {
                    altText: '',
                    fileName: '1650268279.jpg',
                    fileSize: 2643234,
                    height: 1101,
                    id: "e0480047-72e0-49ce-a7ca-29e8196620fe",
                    mediaType: 'image/jpeg',
                    resourceUri: "/delivery/v1/resources/0874022e-89fe-448e-af2f-d7a88b7baa04",
                    width: 1500,
                },
                elementType: "image",
                mode: "shared",
                profiles: ['3428916c-b356-4b47-aeb2-5eb8e3494b00'],
                renditions: {
                    lead: unknown,
                    card: unknown,
                    default: unknown
                },
                url: "/859f2008-a40a-4b92-afd0-24bb44d10124/dxresources/0874/0874022e-89fe-448e-af2f-d7a88b7baa04.jpg",
            }, 
            leadImageCaption: {
                elementType :"text",
                value: string,
            }, 
            leadImageCredit: {
                elementType :"text",
            },
        }
    }
}