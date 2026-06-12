import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { padDescription } from './resources/pad';
import { authorDescription } from './resources/author';
import { groupDescription } from './resources/group';
import { sessionDescription } from './resources/session';
import { defaultDescription } from './resources/default';

export class Etherpad implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Etherpad',
                name: 'N8nDevEtherpad',
                icon: { light: 'file:./etherpad.svg', dark: 'file:./etherpad.dark.svg' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Etherpad: real-time collaborative editor, scalable, self-hosted, full data export.',
                defaults: { name: 'Etherpad' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevEtherpadApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Pad",
					"value": "Pad",
					"description": ""
				},
				{
					"name": "Author",
					"value": "Author",
					"description": ""
				},
				{
					"name": "Group",
					"value": "Group",
					"description": ""
				},
				{
					"name": "Session",
					"value": "Session",
					"description": ""
				},
				{
					"name": "Default",
					"value": "Default",
					"description": ""
				}
			],
			"default": ""
		},
		...padDescription,
		...authorDescription,
		...groupDescription,
		...sessionDescription,
		...defaultDescription
                ],
        };
}
