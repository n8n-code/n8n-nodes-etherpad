import type { INodeProperties } from 'n8n-workflow';

export const sessionDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Session"
					]
				}
			},
			"options": [
				{
					"name": "Create Session Using GET",
					"value": "Create Session Using GET",
					"action": "creates a new session. validUntil is an unix timestamp in seconds",
					"description": "creates a new session. validUntil is an unix timestamp in seconds",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/createSession"
						}
					}
				},
				{
					"name": "Create Session Using POST",
					"value": "Create Session Using POST",
					"action": "creates a new session. validUntil is an unix timestamp in seconds",
					"description": "creates a new session. validUntil is an unix timestamp in seconds",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/createSession"
						}
					}
				},
				{
					"name": "Delete Session Using GET",
					"value": "Delete Session Using GET",
					"action": "deletes a session",
					"description": "deletes a session",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deleteSession"
						}
					}
				},
				{
					"name": "Delete Session Using POST",
					"value": "Delete Session Using POST",
					"action": "deletes a session",
					"description": "deletes a session",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deleteSession"
						}
					}
				},
				{
					"name": "Get Session Info Using GET",
					"value": "Get Session Info Using GET",
					"action": "returns informations about a session",
					"description": "returns informations about a session",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/getSessionInfo"
						}
					}
				},
				{
					"name": "Get Session Info Using POST",
					"value": "Get Session Info Using POST",
					"action": "returns informations about a session",
					"description": "returns informations about a session",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/getSessionInfo"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /createSession",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Session"
					],
					"operation": [
						"Create Session Using GET"
					]
				}
			}
		},
		{
			"displayName": "Group ID",
			"name": "groupID",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "groupID",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Session"
					],
					"operation": [
						"Create Session Using GET"
					]
				}
			}
		},
		{
			"displayName": "Author ID",
			"name": "authorID",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "authorID",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Session"
					],
					"operation": [
						"Create Session Using GET"
					]
				}
			}
		},
		{
			"displayName": "Valid Until",
			"name": "validUntil",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "validUntil",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Session"
					],
					"operation": [
						"Create Session Using GET"
					]
				}
			}
		},
		{
			"displayName": "Apikey",
			"name": "security_apikey",
			"type": "string",
			"default": "",
			"description": "API key for ApiKey (query: apikey)",
			"required": false,
			"routing": {
				"send": {
					"type": "query",
					"property": "apikey",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Session"
					],
					"operation": [
						"Create Session Using GET"
					]
				}
			}
		},
		{
			"displayName": "POST /createSession",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Session"
					],
					"operation": [
						"Create Session Using POST"
					]
				}
			}
		},
		{
			"displayName": "Group ID",
			"name": "groupID",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "groupID",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Session"
					],
					"operation": [
						"Create Session Using POST"
					]
				}
			}
		},
		{
			"displayName": "Author ID",
			"name": "authorID",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "authorID",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Session"
					],
					"operation": [
						"Create Session Using POST"
					]
				}
			}
		},
		{
			"displayName": "Valid Until",
			"name": "validUntil",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "validUntil",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Session"
					],
					"operation": [
						"Create Session Using POST"
					]
				}
			}
		},
		{
			"displayName": "Apikey",
			"name": "security_apikey",
			"type": "string",
			"default": "",
			"description": "API key for ApiKey (query: apikey)",
			"required": false,
			"routing": {
				"send": {
					"type": "query",
					"property": "apikey",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Session"
					],
					"operation": [
						"Create Session Using POST"
					]
				}
			}
		},
		{
			"displayName": "GET /deleteSession",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Session"
					],
					"operation": [
						"Delete Session Using GET"
					]
				}
			}
		},
		{
			"displayName": "Session ID",
			"name": "sessionID",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sessionID",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Session"
					],
					"operation": [
						"Delete Session Using GET"
					]
				}
			}
		},
		{
			"displayName": "Apikey",
			"name": "security_apikey",
			"type": "string",
			"default": "",
			"description": "API key for ApiKey (query: apikey)",
			"required": false,
			"routing": {
				"send": {
					"type": "query",
					"property": "apikey",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Session"
					],
					"operation": [
						"Delete Session Using GET"
					]
				}
			}
		},
		{
			"displayName": "POST /deleteSession",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Session"
					],
					"operation": [
						"Delete Session Using POST"
					]
				}
			}
		},
		{
			"displayName": "Session ID",
			"name": "sessionID",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sessionID",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Session"
					],
					"operation": [
						"Delete Session Using POST"
					]
				}
			}
		},
		{
			"displayName": "Apikey",
			"name": "security_apikey",
			"type": "string",
			"default": "",
			"description": "API key for ApiKey (query: apikey)",
			"required": false,
			"routing": {
				"send": {
					"type": "query",
					"property": "apikey",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Session"
					],
					"operation": [
						"Delete Session Using POST"
					]
				}
			}
		},
		{
			"displayName": "GET /getSessionInfo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Session"
					],
					"operation": [
						"Get Session Info Using GET"
					]
				}
			}
		},
		{
			"displayName": "Session ID",
			"name": "sessionID",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sessionID",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Session"
					],
					"operation": [
						"Get Session Info Using GET"
					]
				}
			}
		},
		{
			"displayName": "Apikey",
			"name": "security_apikey",
			"type": "string",
			"default": "",
			"description": "API key for ApiKey (query: apikey)",
			"required": false,
			"routing": {
				"send": {
					"type": "query",
					"property": "apikey",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Session"
					],
					"operation": [
						"Get Session Info Using GET"
					]
				}
			}
		},
		{
			"displayName": "POST /getSessionInfo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Session"
					],
					"operation": [
						"Get Session Info Using POST"
					]
				}
			}
		},
		{
			"displayName": "Session ID",
			"name": "sessionID",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sessionID",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Session"
					],
					"operation": [
						"Get Session Info Using POST"
					]
				}
			}
		},
		{
			"displayName": "Apikey",
			"name": "security_apikey",
			"type": "string",
			"default": "",
			"description": "API key for ApiKey (query: apikey)",
			"required": false,
			"routing": {
				"send": {
					"type": "query",
					"property": "apikey",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Session"
					],
					"operation": [
						"Get Session Info Using POST"
					]
				}
			}
		},
];
