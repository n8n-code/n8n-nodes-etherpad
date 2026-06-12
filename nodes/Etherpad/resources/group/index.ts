import type { INodeProperties } from 'n8n-workflow';

export const groupDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Group"
					]
				}
			},
			"options": [
				{
					"name": "Create Group Using GET",
					"value": "Create Group Using GET",
					"action": "creates a new group",
					"description": "creates a new group",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/createGroup"
						}
					}
				},
				{
					"name": "Create Group Using POST",
					"value": "Create Group Using POST",
					"action": "creates a new group",
					"description": "creates a new group",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/createGroup"
						}
					}
				},
				{
					"name": "Create Group If Not Exists For Using GET",
					"value": "Create Group If Not Exists For Using GET",
					"action": "this functions helps you to map your application group ids to Etherpad group ids",
					"description": "this functions helps you to map your application group ids to Etherpad group ids",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/createGroupIfNotExistsFor"
						}
					}
				},
				{
					"name": "Create Group If Not Exists For Using POST",
					"value": "Create Group If Not Exists For Using POST",
					"action": "this functions helps you to map your application group ids to Etherpad group ids",
					"description": "this functions helps you to map your application group ids to Etherpad group ids",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/createGroupIfNotExistsFor"
						}
					}
				},
				{
					"name": "Create Group Pad Using GET",
					"value": "Create Group Pad Using GET",
					"action": "creates a new pad in this group",
					"description": "creates a new pad in this group",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/createGroupPad"
						}
					}
				},
				{
					"name": "Create Group Pad Using POST",
					"value": "Create Group Pad Using POST",
					"action": "creates a new pad in this group",
					"description": "creates a new pad in this group",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/createGroupPad"
						}
					}
				},
				{
					"name": "Delete Group Using GET",
					"value": "Delete Group Using GET",
					"action": "deletes a group",
					"description": "deletes a group",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deleteGroup"
						}
					}
				},
				{
					"name": "Delete Group Using POST",
					"value": "Delete Group Using POST",
					"action": "deletes a group",
					"description": "deletes a group",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deleteGroup"
						}
					}
				},
				{
					"name": "List All Groups Using GET",
					"value": "List All Groups Using GET",
					"action": "List All Groups Using GET",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/listAllGroups"
						}
					}
				},
				{
					"name": "List All Groups Using POST",
					"value": "List All Groups Using POST",
					"action": "List All Groups Using POST",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/listAllGroups"
						}
					}
				},
				{
					"name": "List Pads Using GET",
					"value": "List Pads Using GET",
					"action": "returns all pads of this group",
					"description": "returns all pads of this group",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/listPads"
						}
					}
				},
				{
					"name": "List Pads Using POST",
					"value": "List Pads Using POST",
					"action": "returns all pads of this group",
					"description": "returns all pads of this group",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/listPads"
						}
					}
				},
				{
					"name": "List Sessions Of Group Using GET",
					"value": "List Sessions Of Group Using GET",
					"action": "List Sessions Of Group Using GET",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/listSessionsOfGroup"
						}
					}
				},
				{
					"name": "List Sessions Of Group Using POST",
					"value": "List Sessions Of Group Using POST",
					"action": "List Sessions Of Group Using POST",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/listSessionsOfGroup"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /createGroup",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Group"
					],
					"operation": [
						"Create Group Using GET"
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
						"Group"
					],
					"operation": [
						"Create Group Using GET"
					]
				}
			}
		},
		{
			"displayName": "POST /createGroup",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Group"
					],
					"operation": [
						"Create Group Using POST"
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
						"Group"
					],
					"operation": [
						"Create Group Using POST"
					]
				}
			}
		},
		{
			"displayName": "GET /createGroupIfNotExistsFor",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Group"
					],
					"operation": [
						"Create Group If Not Exists For Using GET"
					]
				}
			}
		},
		{
			"displayName": "Group Mapper",
			"name": "groupMapper",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "groupMapper",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Group"
					],
					"operation": [
						"Create Group If Not Exists For Using GET"
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
						"Group"
					],
					"operation": [
						"Create Group If Not Exists For Using GET"
					]
				}
			}
		},
		{
			"displayName": "POST /createGroupIfNotExistsFor",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Group"
					],
					"operation": [
						"Create Group If Not Exists For Using POST"
					]
				}
			}
		},
		{
			"displayName": "Group Mapper",
			"name": "groupMapper",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "groupMapper",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Group"
					],
					"operation": [
						"Create Group If Not Exists For Using POST"
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
						"Group"
					],
					"operation": [
						"Create Group If Not Exists For Using POST"
					]
				}
			}
		},
		{
			"displayName": "GET /createGroupPad",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Group"
					],
					"operation": [
						"Create Group Pad Using GET"
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
						"Group"
					],
					"operation": [
						"Create Group Pad Using GET"
					]
				}
			}
		},
		{
			"displayName": "Pad Name",
			"name": "padName",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "padName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Group"
					],
					"operation": [
						"Create Group Pad Using GET"
					]
				}
			}
		},
		{
			"displayName": "Text",
			"name": "text",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "text",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Group"
					],
					"operation": [
						"Create Group Pad Using GET"
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
						"Group"
					],
					"operation": [
						"Create Group Pad Using GET"
					]
				}
			}
		},
		{
			"displayName": "POST /createGroupPad",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Group"
					],
					"operation": [
						"Create Group Pad Using POST"
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
						"Group"
					],
					"operation": [
						"Create Group Pad Using POST"
					]
				}
			}
		},
		{
			"displayName": "Pad Name",
			"name": "padName",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "padName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Group"
					],
					"operation": [
						"Create Group Pad Using POST"
					]
				}
			}
		},
		{
			"displayName": "Text",
			"name": "text",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "text",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Group"
					],
					"operation": [
						"Create Group Pad Using POST"
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
						"Group"
					],
					"operation": [
						"Create Group Pad Using POST"
					]
				}
			}
		},
		{
			"displayName": "GET /deleteGroup",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Group"
					],
					"operation": [
						"Delete Group Using GET"
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
						"Group"
					],
					"operation": [
						"Delete Group Using GET"
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
						"Group"
					],
					"operation": [
						"Delete Group Using GET"
					]
				}
			}
		},
		{
			"displayName": "POST /deleteGroup",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Group"
					],
					"operation": [
						"Delete Group Using POST"
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
						"Group"
					],
					"operation": [
						"Delete Group Using POST"
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
						"Group"
					],
					"operation": [
						"Delete Group Using POST"
					]
				}
			}
		},
		{
			"displayName": "GET /listAllGroups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Group"
					],
					"operation": [
						"List All Groups Using GET"
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
						"Group"
					],
					"operation": [
						"List All Groups Using GET"
					]
				}
			}
		},
		{
			"displayName": "POST /listAllGroups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Group"
					],
					"operation": [
						"List All Groups Using POST"
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
						"Group"
					],
					"operation": [
						"List All Groups Using POST"
					]
				}
			}
		},
		{
			"displayName": "GET /listPads",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Group"
					],
					"operation": [
						"List Pads Using GET"
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
						"Group"
					],
					"operation": [
						"List Pads Using GET"
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
						"Group"
					],
					"operation": [
						"List Pads Using GET"
					]
				}
			}
		},
		{
			"displayName": "POST /listPads",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Group"
					],
					"operation": [
						"List Pads Using POST"
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
						"Group"
					],
					"operation": [
						"List Pads Using POST"
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
						"Group"
					],
					"operation": [
						"List Pads Using POST"
					]
				}
			}
		},
		{
			"displayName": "GET /listSessionsOfGroup",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Group"
					],
					"operation": [
						"List Sessions Of Group Using GET"
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
						"Group"
					],
					"operation": [
						"List Sessions Of Group Using GET"
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
						"Group"
					],
					"operation": [
						"List Sessions Of Group Using GET"
					]
				}
			}
		},
		{
			"displayName": "POST /listSessionsOfGroup",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Group"
					],
					"operation": [
						"List Sessions Of Group Using POST"
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
						"Group"
					],
					"operation": [
						"List Sessions Of Group Using POST"
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
						"Group"
					],
					"operation": [
						"List Sessions Of Group Using POST"
					]
				}
			}
		},
];
