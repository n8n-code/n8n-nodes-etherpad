import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class EtherpadApi implements ICredentialType {
        name = 'N8nDevEtherpadApi';

        displayName = 'Etherpad API';

        icon: Icon = { light: 'file:../nodes/Etherpad/etherpad.svg', dark: 'file:../nodes/Etherpad/etherpad.dark.svg' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'http://etherpad.local',
                        required: true,
                        placeholder: 'http://etherpad.local',
                        description: 'The base URL of your Etherpad API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                'apikey': '={{$credentials.apiKey}}',
                        },
                },
        };


}
