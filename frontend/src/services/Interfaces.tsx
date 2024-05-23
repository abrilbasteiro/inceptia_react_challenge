export interface LoginData {
    email: string;
    password: string;
}
  
export interface MenuProps {
    container: Element | null;
    drawerWidth: number,
}

export interface HeaderProps {
    drawerWidth: number,
    handleDrawerToggle: () => void
}

export interface ClientGridProps {
    idClient : number | undefined,
    dateFrom : string,
    dateTo : string
}

export interface UsersInterface {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    language: string | null;
    profile_image: string | null;
    groups: {
        id: number,
        name: string
    }[];
    business_group: string[],
    is_active: boolean;
}

export interface ClientDataInterface {
    id: number;
    name: string;
    alias: string;
    users: UsersInterface[];
}

export interface InboundCaseInterface {
    count: number,
    next: string | null,
    previous: string | null,
    results: InboundCaseResultsInterface[]
}

export interface InboundCaseResultsInterface {
    id: number,
    bot: {
        alias:string,
        id: number,
        name: string
    },
    case_uuid: string,
    phone: number,
    first_name: string,
    last_name: string,
    code: string | null,
    case_result: {
        result_id: number,
        name: string
        is_final: boolean
        contacted: boolean
    }
    case_duration: string,
    case_log: {
        responses: CaseLogResponsesInterface[],
        result_id: number,
        commitment: string,
        got_promise: boolean,
        transcription: CaseLogResponsesInterface[],
        final_sip_code: number
    },
    extra_metadata: {
        dni?: string,
        grupo?: string,
        orden?: string
    },
    recording: string,
    is_complete: boolean,
    status: string,
    last_updated: string,
    is_active: boolean
}

export interface CaseLogResponsesInterface {
    text: string,
    time: number,
    confidence: number
}

const testClient : InboundCaseInterface = {
    "count": 2,
    "next": "https://admindev.inceptia.ai/api/v1/inbound-case/?bot=28&local_updated__date__gte=2021-03-01&local_updated__date__lte=2022-03-25&page=2",
    "previous": null,
    "results": [
        {
            "id": 23963,
            "bot": {
                "id": 28,
                "name": "gmotors",
                "alias": "gmotors"
            },
            "case_uuid": "PRUEBA1",
            "phone": 541140754716,
            "first_name": "",
            "last_name": "",
            "code": null,
            "case_result": {
                "result_id": 3,
                "name": "Cortó Cliente - Orden Identificada",
                "is_final": true,
                "contacted": true
            },
            "case_duration": "00:01:07",
            "case_log": {
                "responses": [
                    {
                        "text": "Buenas tardes. Este es el asistente para envíos de cupones de Pago de Plan de Ahorro Chevrolet. Por favor marque o diga en forma clara los cuatro números de su Grupo uno por uno",
                        "time": 1635957629,
                        "confidence": 1
                    },
                    {
                        "text": "No logré identificar su número de grupo. Por favor marque o dígalo nuevamente dígito por dígito",
                        "time": 1635957648,
                        "confidence": 1
                    },
                    {
                        "text": "Gracias, ahora marque o diga los 3 números del Orden",
                        "time": 1635957662,
                        "confidence": 1
                    },
                    {
                        "text": "Por último, también marque o diga los números de su documento uno por uno",
                        "time": 1635957673,
                        "confidence": 1
                    },
                    {
                        "text": "Disculpe, aguarde un momento por favor",
                        "time": 1635957689,
                        "confidence": 1
                    },
                    {
                        "text": "Disculpe, aguarde un momento por favor",
                        "time": 1635957695,
                        "confidence": 1
                    }
                ],
                "result_id": 3,
                "commitment": "",
                "got_promise": false,
                "transcription": [
                    {
                        "text": "4  ",
                        "time": 1635957647,
                        "confidence": 0.98
                    },
                    {
                        "text": "4875 ",
                        "time": 1635957661,
                        "confidence": 1
                    },
                    {
                        "text": "726  ",
                        "time": 1635957672,
                        "confidence": 1
                    },
                    {
                        "text": "33487562 ",
                        "time": 1635957688,
                        "confidence": 1
                    }
                ],
                "final_sip_code": 200
            },
            "extra_metadata": {
                "dni": "33487562",
                "grupo": "4875",
                "orden": "726"
            },
            "recording": "https://admindev.inceptia.ai/api/v1/inbound-call-recording/23963/",
            "is_complete": true,
            "status": "CLOSED",
            "last_updated": "03/11/2021 13:41:40",
            "is_active": true
        },
        {
            "id": 23962,
            "bot": {
                "id": 28,
                "name": "gmotors",
                "alias": "gmotors"
            },
            "case_uuid": "PRUEBA2",
            "phone": 541140754716,
            "first_name": "",
            "last_name": "",
            "code": null,
            "case_result": {
                "result_id": 46,
                "name": "Transferido",
                "is_final": true,
                "contacted": true
            },
            "case_duration": "00:00:47",
            "case_log": {
                "responses": [
                    {
                        "text": "Buenas tardes. Este es el asistente para envíos de cupones de Pago de Plan de Ahorro Chevrolet. Por favor marque o diga en forma clara los cuatro números de su Grupo uno por uno",
                        "time": 1635953546,
                        "confidence": 1
                    },
                    {
                        "text": "Buenas tardes. Este es el asistente para envíos de cupones de Pago de Plan de Ahorro Chevrolet. Por favor marque o diga en forma clara los cuatro números de su Grupo uno por uno",
                        "time": 1635953563,
                        "confidence": 1
                    },
                    {
                        "text": "Disculpe, ¿puede repetirme lo último por favor?",
                        "time": 1635953581,
                        "confidence": 1
                    },
                    {
                        "text": "Aguarde un momento lo derivaré a un operador. Hasta luego",
                        "time": 1635953590,
                        "confidence": 1
                    }
                ],
                "result_id": 46,
                "commitment": "",
                "got_promise": false,
                "transcription": [
                    {
                        "text": "no me acuerdo de ti es que cualquiera ",
                        "time": 1635953580,
                        "confidence": 0.67
                    },
                    {
                        "text": "habita en ",
                        "time": 1635953589,
                        "confidence": 0.3
                    }
                ],
                "final_sip_code": 200
            },
            "extra_metadata": {
                "dni": "",
                "grupo": "",
                "orden": ""
            },
            "recording": "https://admindev.inceptia.ai/api/v1/inbound-call-recording/23962/",
            "is_complete": true,
            "status": "CLOSED",
            "last_updated": "03/11/2021 12:33:18",
            "is_active": true
        },
    ]
}

export {testClient}