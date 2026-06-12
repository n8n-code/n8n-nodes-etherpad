import type { INodeProperties } from 'n8n-workflow';

export const authorDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Author"
					]
				}
			},
			"options": [
				{
					"name": "Create Author Using GET",
					"value": "Create Author Using GET",
					"action": "creates a new author",
					"description": "creates a new author",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/createAuthor"
						}
					}
				},
				{
					"name": "Create Author Using POST",
					"value": "Create Author Using POST",
					"action": "creates a new author",
					"description": "creates a new author",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/createAuthor"
						}
					}
				},
				{
					"name": "Create Author If Not Exists For Using GET",
					"value": "Create Author If Not Exists For Using GET",
					"action": "this functions helps you to map your application author ids to Etherpad author ids",
					"description": "this functions helps you to map your application author ids to Etherpad author ids",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/createAuthorIfNotExistsFor"
						}
					}
				},
				{
					"name": "Create Author If Not Exists For Using POST",
					"value": "Create Author If Not Exists For Using POST",
					"action": "this functions helps you to map your application author ids to Etherpad author ids",
					"description": "this functions helps you to map your application author ids to Etherpad author ids",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/createAuthorIfNotExistsFor"
						}
					}
				},
				{
					"name": "Get Author Name Using GET",
					"value": "Get Author Name Using GET",
					"action": "Returns the Author Name of the author",
					"description": "Returns the Author Name of the author",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/getAuthorName"
						}
					}
				},
				{
					"name": "Get Author Name Using POST",
					"value": "Get Author Name Using POST",
					"action": "Returns the Author Name of the author",
					"description": "Returns the Author Name of the author",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/getAuthorName"
						}
					}
				},
				{
					"name": "List Pads Of Author Using GET",
					"value": "List Pads Of Author Using GET",
					"action": "returns an array of all pads this author contributed to",
					"description": "returns an array of all pads this author contributed to",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/listPadsOfAuthor"
						}
					}
				},
				{
					"name": "List Pads Of Author Using POST",
					"value": "List Pads Of Author Using POST",
					"action": "returns an array of all pads this author contributed to",
					"description": "returns an array of all pads this author contributed to",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/listPadsOfAuthor"
						}
					}
				},
				{
					"name": "List Sessions Of Author Using GET",
					"value": "List Sessions Of Author Using GET",
					"action": "returns all sessions of an author",
					"description": "returns all sessions of an author",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/listSessionsOfAuthor"
						}
					}
				},
				{
					"name": "List Sessions Of Author Using POST",
					"value": "List Sessions Of Author Using POST",
					"action": "returns all sessions of an author",
					"description": "returns all sessions of an author",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/listSessionsOfAuthor"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /createAuthor",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Author"
					],
					"operation": [
						"Create Author Using GET"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Author"
					],
					"operation": [
						"Create Author Using GET"
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
						"Author"
					],
					"operation": [
						"Create Author Using GET"
					]
				}
			}
		},
		{
			"displayName": "POST /createAuthor",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Author"
					],
					"operation": [
						"Create Author Using POST"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Author"
					],
					"operation": [
						"Create Author Using POST"
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
						"Author"
					],
					"operation": [
						"Create Author Using POST"
					]
				}
			}
		},
		{
			"displayName": "GET /createAuthorIfNotExistsFor",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Author"
					],
					"operation": [
						"Create Author If Not Exists For Using GET"
					]
				}
			}
		},
		{
			"displayName": "Author Mapper",
			"name": "authorMapper",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "authorMapper",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Author"
					],
					"operation": [
						"Create Author If Not Exists For Using GET"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Author"
					],
					"operation": [
						"Create Author If Not Exists For Using GET"
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
						"Author"
					],
					"operation": [
						"Create Author If Not Exists For Using GET"
					]
				}
			}
		},
		{
			"displayName": "POST /createAuthorIfNotExistsFor",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Author"
					],
					"operation": [
						"Create Author If Not Exists For Using POST"
					]
				}
			}
		},
		{
			"displayName": "Author Mapper",
			"name": "authorMapper",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "authorMapper",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Author"
					],
					"operation": [
						"Create Author If Not Exists For Using POST"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Author"
					],
					"operation": [
						"Create Author If Not Exists For Using POST"
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
						"Author"
					],
					"operation": [
						"Create Author If Not Exists For Using POST"
					]
				}
			}
		},
		{
			"displayName": "GET /getAuthorName",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Author"
					],
					"operation": [
						"Get Author Name Using GET"
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
						"Author"
					],
					"operation": [
						"Get Author Name Using GET"
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
						"Author"
					],
					"operation": [
						"Get Author Name Using GET"
					]
				}
			}
		},
		{
			"displayName": "POST /getAuthorName",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Author"
					],
					"operation": [
						"Get Author Name Using POST"
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
						"Author"
					],
					"operation": [
						"Get Author Name Using POST"
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
						"Author"
					],
					"operation": [
						"Get Author Name Using POST"
					]
				}
			}
		},
		{
			"displayName": "GET /listPadsOfAuthor",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Author"
					],
					"operation": [
						"List Pads Of Author Using GET"
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
						"Author"
					],
					"operation": [
						"List Pads Of Author Using GET"
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
						"Author"
					],
					"operation": [
						"List Pads Of Author Using GET"
					]
				}
			}
		},
		{
			"displayName": "POST /listPadsOfAuthor",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Author"
					],
					"operation": [
						"List Pads Of Author Using POST"
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
						"Author"
					],
					"operation": [
						"List Pads Of Author Using POST"
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
						"Author"
					],
					"operation": [
						"List Pads Of Author Using POST"
					]
				}
			}
		},
		{
			"displayName": "GET /listSessionsOfAuthor",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Author"
					],
					"operation": [
						"List Sessions Of Author Using GET"
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
						"Author"
					],
					"operation": [
						"List Sessions Of Author Using GET"
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
						"Author"
					],
					"operation": [
						"List Sessions Of Author Using GET"
					]
				}
			}
		},
		{
			"displayName": "POST /listSessionsOfAuthor",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Author"
					],
					"operation": [
						"List Sessions Of Author Using POST"
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
						"Author"
					],
					"operation": [
						"List Sessions Of Author Using POST"
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
						"Author"
					],
					"operation": [
						"List Sessions Of Author Using POST"
					]
				}
			}
		},
];
