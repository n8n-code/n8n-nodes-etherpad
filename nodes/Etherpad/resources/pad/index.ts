import type { INodeProperties } from 'n8n-workflow';

export const padDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Pad"
					]
				}
			},
			"options": [
				{
					"name": "Append Chat Message Using GET",
					"value": "Append Chat Message Using GET",
					"action": "appends a chat message",
					"description": "appends a chat message",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/appendChatMessage"
						}
					}
				},
				{
					"name": "Append Chat Message Using POST",
					"value": "Append Chat Message Using POST",
					"action": "appends a chat message",
					"description": "appends a chat message",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/appendChatMessage"
						}
					}
				},
				{
					"name": "Check Token Using GET",
					"value": "Check Token Using GET",
					"action": "returns ok when the current api token is valid",
					"description": "returns ok when the current api token is valid",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/checkToken"
						}
					}
				},
				{
					"name": "Check Token Using POST",
					"value": "Check Token Using POST",
					"action": "returns ok when the current api token is valid",
					"description": "returns ok when the current api token is valid",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/checkToken"
						}
					}
				},
				{
					"name": "Create Diff HTML Using GET",
					"value": "Create Diff HTML Using GET",
					"action": "Create Diff HTML Using GET",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/createDiffHTML"
						}
					}
				},
				{
					"name": "Create Diff HTML Using POST",
					"value": "Create Diff HTML Using POST",
					"action": "Create Diff HTML Using POST",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/createDiffHTML"
						}
					}
				},
				{
					"name": "Create Pad Using GET",
					"value": "Create Pad Using GET",
					"action": "Create Pad Using GET",
					"description": "creates a new (non-group) pad. Note that if you need to create a group Pad, you should call createGroupPad",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/createPad"
						}
					}
				},
				{
					"name": "Create Pad Using POST",
					"value": "Create Pad Using POST",
					"action": "Create Pad Using POST",
					"description": "creates a new (non-group) pad. Note that if you need to create a group Pad, you should call createGroupPad",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/createPad"
						}
					}
				},
				{
					"name": "Delete Pad Using GET",
					"value": "Delete Pad Using GET",
					"action": "deletes a pad",
					"description": "deletes a pad",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deletePad"
						}
					}
				},
				{
					"name": "Delete Pad Using POST",
					"value": "Delete Pad Using POST",
					"action": "deletes a pad",
					"description": "deletes a pad",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deletePad"
						}
					}
				},
				{
					"name": "Get Chat Head Using GET",
					"value": "Get Chat Head Using GET",
					"action": "returns the chatHead (chat-message) of the pad",
					"description": "returns the chatHead (chat-message) of the pad",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/getChatHead"
						}
					}
				},
				{
					"name": "Get Chat Head Using POST",
					"value": "Get Chat Head Using POST",
					"action": "returns the chatHead (chat-message) of the pad",
					"description": "returns the chatHead (chat-message) of the pad",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/getChatHead"
						}
					}
				},
				{
					"name": "Get Chat History Using GET",
					"value": "Get Chat History Using GET",
					"action": "returns the chat history",
					"description": "returns the chat history",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/getChatHistory"
						}
					}
				},
				{
					"name": "Get Chat History Using POST",
					"value": "Get Chat History Using POST",
					"action": "returns the chat history",
					"description": "returns the chat history",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/getChatHistory"
						}
					}
				},
				{
					"name": "Get HTML Using GET",
					"value": "Get HTML Using GET",
					"action": "returns the text of a pad formatted as HTML",
					"description": "returns the text of a pad formatted as HTML",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/getHTML"
						}
					}
				},
				{
					"name": "Get HTML Using POST",
					"value": "Get HTML Using POST",
					"action": "returns the text of a pad formatted as HTML",
					"description": "returns the text of a pad formatted as HTML",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/getHTML"
						}
					}
				},
				{
					"name": "Get Last Edited Using GET",
					"value": "Get Last Edited Using GET",
					"action": "returns the timestamp of the last revision of the pad",
					"description": "returns the timestamp of the last revision of the pad",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/getLastEdited"
						}
					}
				},
				{
					"name": "Get Last Edited Using POST",
					"value": "Get Last Edited Using POST",
					"action": "returns the timestamp of the last revision of the pad",
					"description": "returns the timestamp of the last revision of the pad",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/getLastEdited"
						}
					}
				},
				{
					"name": "Get Public Status Using GET",
					"value": "Get Public Status Using GET",
					"action": "return true of false",
					"description": "return true of false",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/getPublicStatus"
						}
					}
				},
				{
					"name": "Get Public Status Using POST",
					"value": "Get Public Status Using POST",
					"action": "return true of false",
					"description": "return true of false",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/getPublicStatus"
						}
					}
				},
				{
					"name": "Get Read Only ID Using GET",
					"value": "Get Read Only ID Using GET",
					"action": "returns the read only link of a pad",
					"description": "returns the read only link of a pad",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/getReadOnlyID"
						}
					}
				},
				{
					"name": "Get Read Only ID Using POST",
					"value": "Get Read Only ID Using POST",
					"action": "returns the read only link of a pad",
					"description": "returns the read only link of a pad",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/getReadOnlyID"
						}
					}
				},
				{
					"name": "Get Revisions Count Using GET",
					"value": "Get Revisions Count Using GET",
					"action": "returns the number of revisions of this pad",
					"description": "returns the number of revisions of this pad",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/getRevisionsCount"
						}
					}
				},
				{
					"name": "Get Revisions Count Using POST",
					"value": "Get Revisions Count Using POST",
					"action": "returns the number of revisions of this pad",
					"description": "returns the number of revisions of this pad",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/getRevisionsCount"
						}
					}
				},
				{
					"name": "Get Text Using GET",
					"value": "Get Text Using GET",
					"action": "returns the text of a pad",
					"description": "returns the text of a pad",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/getText"
						}
					}
				},
				{
					"name": "Get Text Using POST",
					"value": "Get Text Using POST",
					"action": "returns the text of a pad",
					"description": "returns the text of a pad",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/getText"
						}
					}
				},
				{
					"name": "List All Pads Using GET",
					"value": "List All Pads Using GET",
					"action": "list all the pads",
					"description": "list all the pads",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/listAllPads"
						}
					}
				},
				{
					"name": "List All Pads Using POST",
					"value": "List All Pads Using POST",
					"action": "list all the pads",
					"description": "list all the pads",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/listAllPads"
						}
					}
				},
				{
					"name": "List Authors Of Pad Using GET",
					"value": "List Authors Of Pad Using GET",
					"action": "returns an array of authors who contributed to this pad",
					"description": "returns an array of authors who contributed to this pad",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/listAuthorsOfPad"
						}
					}
				},
				{
					"name": "List Authors Of Pad Using POST",
					"value": "List Authors Of Pad Using POST",
					"action": "returns an array of authors who contributed to this pad",
					"description": "returns an array of authors who contributed to this pad",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/listAuthorsOfPad"
						}
					}
				},
				{
					"name": "Pad Users Using GET",
					"value": "Pad Users Using GET",
					"action": "returns the list of users that are currently editing this pad",
					"description": "returns the list of users that are currently editing this pad",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/padUsers"
						}
					}
				},
				{
					"name": "Pad Users Using POST",
					"value": "Pad Users Using POST",
					"action": "returns the list of users that are currently editing this pad",
					"description": "returns the list of users that are currently editing this pad",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/padUsers"
						}
					}
				},
				{
					"name": "Pad Users Count Using GET",
					"value": "Pad Users Count Using GET",
					"action": "returns the number of user that are currently editing this pad",
					"description": "returns the number of user that are currently editing this pad",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/padUsersCount"
						}
					}
				},
				{
					"name": "Pad Users Count Using POST",
					"value": "Pad Users Count Using POST",
					"action": "returns the number of user that are currently editing this pad",
					"description": "returns the number of user that are currently editing this pad",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/padUsersCount"
						}
					}
				},
				{
					"name": "Send Clients Message Using GET",
					"value": "Send Clients Message Using GET",
					"action": "sends a custom message of type msg to the pad",
					"description": "sends a custom message of type msg to the pad",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sendClientsMessage"
						}
					}
				},
				{
					"name": "Send Clients Message Using POST",
					"value": "Send Clients Message Using POST",
					"action": "sends a custom message of type msg to the pad",
					"description": "sends a custom message of type msg to the pad",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sendClientsMessage"
						}
					}
				},
				{
					"name": "Set HTML Using GET",
					"value": "Set HTML Using GET",
					"action": "sets the text of a pad with HTML",
					"description": "sets the text of a pad with HTML",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/setHTML"
						}
					}
				},
				{
					"name": "Set HTML Using POST",
					"value": "Set HTML Using POST",
					"action": "sets the text of a pad with HTML",
					"description": "sets the text of a pad with HTML",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/setHTML"
						}
					}
				},
				{
					"name": "Set Public Status Using GET",
					"value": "Set Public Status Using GET",
					"action": "sets a boolean for the public status of a pad",
					"description": "sets a boolean for the public status of a pad",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/setPublicStatus"
						}
					}
				},
				{
					"name": "Set Public Status Using POST",
					"value": "Set Public Status Using POST",
					"action": "sets a boolean for the public status of a pad",
					"description": "sets a boolean for the public status of a pad",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/setPublicStatus"
						}
					}
				},
				{
					"name": "Set Text Using GET",
					"value": "Set Text Using GET",
					"action": "sets the text of a pad",
					"description": "sets the text of a pad",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/setText"
						}
					}
				},
				{
					"name": "Set Text Using POST",
					"value": "Set Text Using POST",
					"action": "sets the text of a pad",
					"description": "sets the text of a pad",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/setText"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /appendChatMessage",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pad"
					],
					"operation": [
						"Append Chat Message Using GET"
					]
				}
			}
		},
		{
			"displayName": "Pad ID",
			"name": "padID",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "padID",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pad"
					],
					"operation": [
						"Append Chat Message Using GET"
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
						"Pad"
					],
					"operation": [
						"Append Chat Message Using GET"
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
						"Pad"
					],
					"operation": [
						"Append Chat Message Using GET"
					]
				}
			}
		},
		{
			"displayName": "Time",
			"name": "time",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "time",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pad"
					],
					"operation": [
						"Append Chat Message Using GET"
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
						"Pad"
					],
					"operation": [
						"Append Chat Message Using GET"
					]
				}
			}
		},
		{
			"displayName": "POST /appendChatMessage",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pad"
					],
					"operation": [
						"Append Chat Message Using POST"
					]
				}
			}
		},
		{
			"displayName": "Pad ID",
			"name": "padID",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "padID",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pad"
					],
					"operation": [
						"Append Chat Message Using POST"
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
						"Pad"
					],
					"operation": [
						"Append Chat Message Using POST"
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
						"Pad"
					],
					"operation": [
						"Append Chat Message Using POST"
					]
				}
			}
		},
		{
			"displayName": "Time",
			"name": "time",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "time",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pad"
					],
					"operation": [
						"Append Chat Message Using POST"
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
						"Pad"
					],
					"operation": [
						"Append Chat Message Using POST"
					]
				}
			}
		},
		{
			"displayName": "GET /checkToken",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pad"
					],
					"operation": [
						"Check Token Using GET"
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
						"Pad"
					],
					"operation": [
						"Check Token Using GET"
					]
				}
			}
		},
		{
			"displayName": "POST /checkToken",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pad"
					],
					"operation": [
						"Check Token Using POST"
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
						"Pad"
					],
					"operation": [
						"Check Token Using POST"
					]
				}
			}
		},
		{
			"displayName": "GET /createDiffHTML",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pad"
					],
					"operation": [
						"Create Diff HTML Using GET"
					]
				}
			}
		},
		{
			"displayName": "Pad ID",
			"name": "padID",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "padID",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pad"
					],
					"operation": [
						"Create Diff HTML Using GET"
					]
				}
			}
		},
		{
			"displayName": "Start Rev",
			"name": "startRev",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "startRev",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pad"
					],
					"operation": [
						"Create Diff HTML Using GET"
					]
				}
			}
		},
		{
			"displayName": "End Rev",
			"name": "endRev",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "endRev",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pad"
					],
					"operation": [
						"Create Diff HTML Using GET"
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
						"Pad"
					],
					"operation": [
						"Create Diff HTML Using GET"
					]
				}
			}
		},
		{
			"displayName": "POST /createDiffHTML",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pad"
					],
					"operation": [
						"Create Diff HTML Using POST"
					]
				}
			}
		},
		{
			"displayName": "Pad ID",
			"name": "padID",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "padID",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pad"
					],
					"operation": [
						"Create Diff HTML Using POST"
					]
				}
			}
		},
		{
			"displayName": "Start Rev",
			"name": "startRev",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "startRev",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pad"
					],
					"operation": [
						"Create Diff HTML Using POST"
					]
				}
			}
		},
		{
			"displayName": "End Rev",
			"name": "endRev",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "endRev",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pad"
					],
					"operation": [
						"Create Diff HTML Using POST"
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
						"Pad"
					],
					"operation": [
						"Create Diff HTML Using POST"
					]
				}
			}
		},
		{
			"displayName": "GET /createPad",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pad"
					],
					"operation": [
						"Create Pad Using GET"
					]
				}
			}
		},
		{
			"displayName": "Pad ID",
			"name": "padID",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "padID",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pad"
					],
					"operation": [
						"Create Pad Using GET"
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
						"Pad"
					],
					"operation": [
						"Create Pad Using GET"
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
						"Pad"
					],
					"operation": [
						"Create Pad Using GET"
					]
				}
			}
		},
		{
			"displayName": "POST /createPad",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pad"
					],
					"operation": [
						"Create Pad Using POST"
					]
				}
			}
		},
		{
			"displayName": "Pad ID",
			"name": "padID",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "padID",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pad"
					],
					"operation": [
						"Create Pad Using POST"
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
						"Pad"
					],
					"operation": [
						"Create Pad Using POST"
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
						"Pad"
					],
					"operation": [
						"Create Pad Using POST"
					]
				}
			}
		},
		{
			"displayName": "GET /deletePad",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pad"
					],
					"operation": [
						"Delete Pad Using GET"
					]
				}
			}
		},
		{
			"displayName": "Pad ID",
			"name": "padID",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "padID",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pad"
					],
					"operation": [
						"Delete Pad Using GET"
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
						"Pad"
					],
					"operation": [
						"Delete Pad Using GET"
					]
				}
			}
		},
		{
			"displayName": "POST /deletePad",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pad"
					],
					"operation": [
						"Delete Pad Using POST"
					]
				}
			}
		},
		{
			"displayName": "Pad ID",
			"name": "padID",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "padID",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pad"
					],
					"operation": [
						"Delete Pad Using POST"
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
						"Pad"
					],
					"operation": [
						"Delete Pad Using POST"
					]
				}
			}
		},
		{
			"displayName": "GET /getChatHead",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pad"
					],
					"operation": [
						"Get Chat Head Using GET"
					]
				}
			}
		},
		{
			"displayName": "Pad ID",
			"name": "padID",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "padID",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pad"
					],
					"operation": [
						"Get Chat Head Using GET"
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
						"Pad"
					],
					"operation": [
						"Get Chat Head Using GET"
					]
				}
			}
		},
		{
			"displayName": "POST /getChatHead",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pad"
					],
					"operation": [
						"Get Chat Head Using POST"
					]
				}
			}
		},
		{
			"displayName": "Pad ID",
			"name": "padID",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "padID",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pad"
					],
					"operation": [
						"Get Chat Head Using POST"
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
						"Pad"
					],
					"operation": [
						"Get Chat Head Using POST"
					]
				}
			}
		},
		{
			"displayName": "GET /getChatHistory",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pad"
					],
					"operation": [
						"Get Chat History Using GET"
					]
				}
			}
		},
		{
			"displayName": "Pad ID",
			"name": "padID",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "padID",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pad"
					],
					"operation": [
						"Get Chat History Using GET"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "start",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "start",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pad"
					],
					"operation": [
						"Get Chat History Using GET"
					]
				}
			}
		},
		{
			"displayName": "End",
			"name": "end",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "end",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pad"
					],
					"operation": [
						"Get Chat History Using GET"
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
						"Pad"
					],
					"operation": [
						"Get Chat History Using GET"
					]
				}
			}
		},
		{
			"displayName": "POST /getChatHistory",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pad"
					],
					"operation": [
						"Get Chat History Using POST"
					]
				}
			}
		},
		{
			"displayName": "Pad ID",
			"name": "padID",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "padID",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pad"
					],
					"operation": [
						"Get Chat History Using POST"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "start",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "start",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pad"
					],
					"operation": [
						"Get Chat History Using POST"
					]
				}
			}
		},
		{
			"displayName": "End",
			"name": "end",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "end",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pad"
					],
					"operation": [
						"Get Chat History Using POST"
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
						"Pad"
					],
					"operation": [
						"Get Chat History Using POST"
					]
				}
			}
		},
		{
			"displayName": "GET /getHTML",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pad"
					],
					"operation": [
						"Get HTML Using GET"
					]
				}
			}
		},
		{
			"displayName": "Pad ID",
			"name": "padID",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "padID",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pad"
					],
					"operation": [
						"Get HTML Using GET"
					]
				}
			}
		},
		{
			"displayName": "Rev",
			"name": "rev",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "rev",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pad"
					],
					"operation": [
						"Get HTML Using GET"
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
						"Pad"
					],
					"operation": [
						"Get HTML Using GET"
					]
				}
			}
		},
		{
			"displayName": "POST /getHTML",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pad"
					],
					"operation": [
						"Get HTML Using POST"
					]
				}
			}
		},
		{
			"displayName": "Pad ID",
			"name": "padID",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "padID",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pad"
					],
					"operation": [
						"Get HTML Using POST"
					]
				}
			}
		},
		{
			"displayName": "Rev",
			"name": "rev",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "rev",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pad"
					],
					"operation": [
						"Get HTML Using POST"
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
						"Pad"
					],
					"operation": [
						"Get HTML Using POST"
					]
				}
			}
		},
		{
			"displayName": "GET /getLastEdited",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pad"
					],
					"operation": [
						"Get Last Edited Using GET"
					]
				}
			}
		},
		{
			"displayName": "Pad ID",
			"name": "padID",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "padID",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pad"
					],
					"operation": [
						"Get Last Edited Using GET"
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
						"Pad"
					],
					"operation": [
						"Get Last Edited Using GET"
					]
				}
			}
		},
		{
			"displayName": "POST /getLastEdited",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pad"
					],
					"operation": [
						"Get Last Edited Using POST"
					]
				}
			}
		},
		{
			"displayName": "Pad ID",
			"name": "padID",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "padID",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pad"
					],
					"operation": [
						"Get Last Edited Using POST"
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
						"Pad"
					],
					"operation": [
						"Get Last Edited Using POST"
					]
				}
			}
		},
		{
			"displayName": "GET /getPublicStatus",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pad"
					],
					"operation": [
						"Get Public Status Using GET"
					]
				}
			}
		},
		{
			"displayName": "Pad ID",
			"name": "padID",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "padID",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pad"
					],
					"operation": [
						"Get Public Status Using GET"
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
						"Pad"
					],
					"operation": [
						"Get Public Status Using GET"
					]
				}
			}
		},
		{
			"displayName": "POST /getPublicStatus",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pad"
					],
					"operation": [
						"Get Public Status Using POST"
					]
				}
			}
		},
		{
			"displayName": "Pad ID",
			"name": "padID",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "padID",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pad"
					],
					"operation": [
						"Get Public Status Using POST"
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
						"Pad"
					],
					"operation": [
						"Get Public Status Using POST"
					]
				}
			}
		},
		{
			"displayName": "GET /getReadOnlyID",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pad"
					],
					"operation": [
						"Get Read Only ID Using GET"
					]
				}
			}
		},
		{
			"displayName": "Pad ID",
			"name": "padID",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "padID",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pad"
					],
					"operation": [
						"Get Read Only ID Using GET"
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
						"Pad"
					],
					"operation": [
						"Get Read Only ID Using GET"
					]
				}
			}
		},
		{
			"displayName": "POST /getReadOnlyID",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pad"
					],
					"operation": [
						"Get Read Only ID Using POST"
					]
				}
			}
		},
		{
			"displayName": "Pad ID",
			"name": "padID",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "padID",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pad"
					],
					"operation": [
						"Get Read Only ID Using POST"
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
						"Pad"
					],
					"operation": [
						"Get Read Only ID Using POST"
					]
				}
			}
		},
		{
			"displayName": "GET /getRevisionsCount",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pad"
					],
					"operation": [
						"Get Revisions Count Using GET"
					]
				}
			}
		},
		{
			"displayName": "Pad ID",
			"name": "padID",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "padID",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pad"
					],
					"operation": [
						"Get Revisions Count Using GET"
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
						"Pad"
					],
					"operation": [
						"Get Revisions Count Using GET"
					]
				}
			}
		},
		{
			"displayName": "POST /getRevisionsCount",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pad"
					],
					"operation": [
						"Get Revisions Count Using POST"
					]
				}
			}
		},
		{
			"displayName": "Pad ID",
			"name": "padID",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "padID",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pad"
					],
					"operation": [
						"Get Revisions Count Using POST"
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
						"Pad"
					],
					"operation": [
						"Get Revisions Count Using POST"
					]
				}
			}
		},
		{
			"displayName": "GET /getText",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pad"
					],
					"operation": [
						"Get Text Using GET"
					]
				}
			}
		},
		{
			"displayName": "Pad ID",
			"name": "padID",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "padID",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pad"
					],
					"operation": [
						"Get Text Using GET"
					]
				}
			}
		},
		{
			"displayName": "Rev",
			"name": "rev",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "rev",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pad"
					],
					"operation": [
						"Get Text Using GET"
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
						"Pad"
					],
					"operation": [
						"Get Text Using GET"
					]
				}
			}
		},
		{
			"displayName": "POST /getText",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pad"
					],
					"operation": [
						"Get Text Using POST"
					]
				}
			}
		},
		{
			"displayName": "Pad ID",
			"name": "padID",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "padID",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pad"
					],
					"operation": [
						"Get Text Using POST"
					]
				}
			}
		},
		{
			"displayName": "Rev",
			"name": "rev",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "rev",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pad"
					],
					"operation": [
						"Get Text Using POST"
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
						"Pad"
					],
					"operation": [
						"Get Text Using POST"
					]
				}
			}
		},
		{
			"displayName": "GET /listAllPads",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pad"
					],
					"operation": [
						"List All Pads Using GET"
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
						"Pad"
					],
					"operation": [
						"List All Pads Using GET"
					]
				}
			}
		},
		{
			"displayName": "POST /listAllPads",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pad"
					],
					"operation": [
						"List All Pads Using POST"
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
						"Pad"
					],
					"operation": [
						"List All Pads Using POST"
					]
				}
			}
		},
		{
			"displayName": "GET /listAuthorsOfPad",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pad"
					],
					"operation": [
						"List Authors Of Pad Using GET"
					]
				}
			}
		},
		{
			"displayName": "Pad ID",
			"name": "padID",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "padID",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pad"
					],
					"operation": [
						"List Authors Of Pad Using GET"
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
						"Pad"
					],
					"operation": [
						"List Authors Of Pad Using GET"
					]
				}
			}
		},
		{
			"displayName": "POST /listAuthorsOfPad",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pad"
					],
					"operation": [
						"List Authors Of Pad Using POST"
					]
				}
			}
		},
		{
			"displayName": "Pad ID",
			"name": "padID",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "padID",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pad"
					],
					"operation": [
						"List Authors Of Pad Using POST"
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
						"Pad"
					],
					"operation": [
						"List Authors Of Pad Using POST"
					]
				}
			}
		},
		{
			"displayName": "GET /padUsers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pad"
					],
					"operation": [
						"Pad Users Using GET"
					]
				}
			}
		},
		{
			"displayName": "Pad ID",
			"name": "padID",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "padID",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pad"
					],
					"operation": [
						"Pad Users Using GET"
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
						"Pad"
					],
					"operation": [
						"Pad Users Using GET"
					]
				}
			}
		},
		{
			"displayName": "POST /padUsers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pad"
					],
					"operation": [
						"Pad Users Using POST"
					]
				}
			}
		},
		{
			"displayName": "Pad ID",
			"name": "padID",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "padID",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pad"
					],
					"operation": [
						"Pad Users Using POST"
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
						"Pad"
					],
					"operation": [
						"Pad Users Using POST"
					]
				}
			}
		},
		{
			"displayName": "GET /padUsersCount",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pad"
					],
					"operation": [
						"Pad Users Count Using GET"
					]
				}
			}
		},
		{
			"displayName": "Pad ID",
			"name": "padID",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "padID",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pad"
					],
					"operation": [
						"Pad Users Count Using GET"
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
						"Pad"
					],
					"operation": [
						"Pad Users Count Using GET"
					]
				}
			}
		},
		{
			"displayName": "POST /padUsersCount",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pad"
					],
					"operation": [
						"Pad Users Count Using POST"
					]
				}
			}
		},
		{
			"displayName": "Pad ID",
			"name": "padID",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "padID",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pad"
					],
					"operation": [
						"Pad Users Count Using POST"
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
						"Pad"
					],
					"operation": [
						"Pad Users Count Using POST"
					]
				}
			}
		},
		{
			"displayName": "GET /sendClientsMessage",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pad"
					],
					"operation": [
						"Send Clients Message Using GET"
					]
				}
			}
		},
		{
			"displayName": "Pad ID",
			"name": "padID",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "padID",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pad"
					],
					"operation": [
						"Send Clients Message Using GET"
					]
				}
			}
		},
		{
			"displayName": "Msg",
			"name": "msg",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "msg",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pad"
					],
					"operation": [
						"Send Clients Message Using GET"
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
						"Pad"
					],
					"operation": [
						"Send Clients Message Using GET"
					]
				}
			}
		},
		{
			"displayName": "POST /sendClientsMessage",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pad"
					],
					"operation": [
						"Send Clients Message Using POST"
					]
				}
			}
		},
		{
			"displayName": "Pad ID",
			"name": "padID",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "padID",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pad"
					],
					"operation": [
						"Send Clients Message Using POST"
					]
				}
			}
		},
		{
			"displayName": "Msg",
			"name": "msg",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "msg",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pad"
					],
					"operation": [
						"Send Clients Message Using POST"
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
						"Pad"
					],
					"operation": [
						"Send Clients Message Using POST"
					]
				}
			}
		},
		{
			"displayName": "GET /setHTML",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pad"
					],
					"operation": [
						"Set HTML Using GET"
					]
				}
			}
		},
		{
			"displayName": "Pad ID",
			"name": "padID",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "padID",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pad"
					],
					"operation": [
						"Set HTML Using GET"
					]
				}
			}
		},
		{
			"displayName": "HTML",
			"name": "html",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "html",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pad"
					],
					"operation": [
						"Set HTML Using GET"
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
						"Pad"
					],
					"operation": [
						"Set HTML Using GET"
					]
				}
			}
		},
		{
			"displayName": "POST /setHTML",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pad"
					],
					"operation": [
						"Set HTML Using POST"
					]
				}
			}
		},
		{
			"displayName": "Pad ID",
			"name": "padID",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "padID",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pad"
					],
					"operation": [
						"Set HTML Using POST"
					]
				}
			}
		},
		{
			"displayName": "HTML",
			"name": "html",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "html",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pad"
					],
					"operation": [
						"Set HTML Using POST"
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
						"Pad"
					],
					"operation": [
						"Set HTML Using POST"
					]
				}
			}
		},
		{
			"displayName": "GET /setPublicStatus",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pad"
					],
					"operation": [
						"Set Public Status Using GET"
					]
				}
			}
		},
		{
			"displayName": "Pad ID",
			"name": "padID",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "padID",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pad"
					],
					"operation": [
						"Set Public Status Using GET"
					]
				}
			}
		},
		{
			"displayName": "Public Status",
			"name": "publicStatus",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "publicStatus",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pad"
					],
					"operation": [
						"Set Public Status Using GET"
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
						"Pad"
					],
					"operation": [
						"Set Public Status Using GET"
					]
				}
			}
		},
		{
			"displayName": "POST /setPublicStatus",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pad"
					],
					"operation": [
						"Set Public Status Using POST"
					]
				}
			}
		},
		{
			"displayName": "Pad ID",
			"name": "padID",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "padID",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pad"
					],
					"operation": [
						"Set Public Status Using POST"
					]
				}
			}
		},
		{
			"displayName": "Public Status",
			"name": "publicStatus",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "publicStatus",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pad"
					],
					"operation": [
						"Set Public Status Using POST"
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
						"Pad"
					],
					"operation": [
						"Set Public Status Using POST"
					]
				}
			}
		},
		{
			"displayName": "GET /setText",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pad"
					],
					"operation": [
						"Set Text Using GET"
					]
				}
			}
		},
		{
			"displayName": "Pad ID",
			"name": "padID",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "padID",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pad"
					],
					"operation": [
						"Set Text Using GET"
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
						"Pad"
					],
					"operation": [
						"Set Text Using GET"
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
						"Pad"
					],
					"operation": [
						"Set Text Using GET"
					]
				}
			}
		},
		{
			"displayName": "POST /setText",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pad"
					],
					"operation": [
						"Set Text Using POST"
					]
				}
			}
		},
		{
			"displayName": "Pad ID",
			"name": "padID",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "padID",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pad"
					],
					"operation": [
						"Set Text Using POST"
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
						"Pad"
					],
					"operation": [
						"Set Text Using POST"
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
						"Pad"
					],
					"operation": [
						"Set Text Using POST"
					]
				}
			}
		},
];
