import type { INodeProperties } from 'n8n-workflow';

export const defaultDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					]
				}
			},
			"options": [
				{
					"name": "Append Text Using GET",
					"value": "Append Text Using GET",
					"action": "Append Text Using GET",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/appendText"
						}
					}
				},
				{
					"name": "Append Text Using POST",
					"value": "Append Text Using POST",
					"action": "Append Text Using POST",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/appendText"
						}
					}
				},
				{
					"name": "Copy Pad Using GET",
					"value": "Copy Pad Using GET",
					"action": "Copy Pad Using GET",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/copyPad"
						}
					}
				},
				{
					"name": "Copy Pad Using POST",
					"value": "Copy Pad Using POST",
					"action": "Copy Pad Using POST",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/copyPad"
						}
					}
				},
				{
					"name": "Copy Pad Without History Using GET",
					"value": "Copy Pad Without History Using GET",
					"action": "Copy Pad Without History Using GET",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/copyPadWithoutHistory"
						}
					}
				},
				{
					"name": "Copy Pad Without History Using POST",
					"value": "Copy Pad Without History Using POST",
					"action": "Copy Pad Without History Using POST",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/copyPadWithoutHistory"
						}
					}
				},
				{
					"name": "Get Attribute Pool Using GET",
					"value": "Get Attribute Pool Using GET",
					"action": "Get Attribute Pool Using GET",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/getAttributePool"
						}
					}
				},
				{
					"name": "Get Attribute Pool Using POST",
					"value": "Get Attribute Pool Using POST",
					"action": "Get Attribute Pool Using POST",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/getAttributePool"
						}
					}
				},
				{
					"name": "Get Pad ID Using GET",
					"value": "Get Pad ID Using GET",
					"action": "Get Pad ID Using GET",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/getPadID"
						}
					}
				},
				{
					"name": "Get Pad ID Using POST",
					"value": "Get Pad ID Using POST",
					"action": "Get Pad ID Using POST",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/getPadID"
						}
					}
				},
				{
					"name": "Get Revision Changeset Using GET",
					"value": "Get Revision Changeset Using GET",
					"action": "Get Revision Changeset Using GET",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/getRevisionChangeset"
						}
					}
				},
				{
					"name": "Get Revision Changeset Using POST",
					"value": "Get Revision Changeset Using POST",
					"action": "Get Revision Changeset Using POST",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/getRevisionChangeset"
						}
					}
				},
				{
					"name": "Get Saved Revisions Count Using GET",
					"value": "Get Saved Revisions Count Using GET",
					"action": "Get Saved Revisions Count Using GET",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/getSavedRevisionsCount"
						}
					}
				},
				{
					"name": "Get Saved Revisions Count Using POST",
					"value": "Get Saved Revisions Count Using POST",
					"action": "Get Saved Revisions Count Using POST",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/getSavedRevisionsCount"
						}
					}
				},
				{
					"name": "Get Stats Using GET",
					"value": "Get Stats Using GET",
					"action": "Get Stats Using GET",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/getStats"
						}
					}
				},
				{
					"name": "Get Stats Using POST",
					"value": "Get Stats Using POST",
					"action": "Get Stats Using POST",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/getStats"
						}
					}
				},
				{
					"name": "List Saved Revisions Using GET",
					"value": "List Saved Revisions Using GET",
					"action": "List Saved Revisions Using GET",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/listSavedRevisions"
						}
					}
				},
				{
					"name": "List Saved Revisions Using POST",
					"value": "List Saved Revisions Using POST",
					"action": "List Saved Revisions Using POST",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/listSavedRevisions"
						}
					}
				},
				{
					"name": "Move Pad Using GET",
					"value": "Move Pad Using GET",
					"action": "Move Pad Using GET",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/movePad"
						}
					}
				},
				{
					"name": "Move Pad Using POST",
					"value": "Move Pad Using POST",
					"action": "Move Pad Using POST",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/movePad"
						}
					}
				},
				{
					"name": "Restore Revision Using GET",
					"value": "Restore Revision Using GET",
					"action": "Restore Revision Using GET",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/restoreRevision"
						}
					}
				},
				{
					"name": "Restore Revision Using POST",
					"value": "Restore Revision Using POST",
					"action": "Restore Revision Using POST",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/restoreRevision"
						}
					}
				},
				{
					"name": "Save Revision Using GET",
					"value": "Save Revision Using GET",
					"action": "Save Revision Using GET",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/saveRevision"
						}
					}
				},
				{
					"name": "Save Revision Using POST",
					"value": "Save Revision Using POST",
					"action": "Save Revision Using POST",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/saveRevision"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /appendText",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Append Text Using GET"
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
						"Default"
					],
					"operation": [
						"Append Text Using GET"
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
						"Default"
					],
					"operation": [
						"Append Text Using GET"
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
						"Default"
					],
					"operation": [
						"Append Text Using GET"
					]
				}
			}
		},
		{
			"displayName": "POST /appendText",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Append Text Using POST"
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
						"Default"
					],
					"operation": [
						"Append Text Using POST"
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
						"Default"
					],
					"operation": [
						"Append Text Using POST"
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
						"Default"
					],
					"operation": [
						"Append Text Using POST"
					]
				}
			}
		},
		{
			"displayName": "GET /copyPad",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Copy Pad Using GET"
					]
				}
			}
		},
		{
			"displayName": "Source ID",
			"name": "sourceID",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sourceID",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Copy Pad Using GET"
					]
				}
			}
		},
		{
			"displayName": "Destination ID",
			"name": "destinationID",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "destinationID",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Copy Pad Using GET"
					]
				}
			}
		},
		{
			"displayName": "Force",
			"name": "force",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "force",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Copy Pad Using GET"
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
						"Default"
					],
					"operation": [
						"Copy Pad Using GET"
					]
				}
			}
		},
		{
			"displayName": "POST /copyPad",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Copy Pad Using POST"
					]
				}
			}
		},
		{
			"displayName": "Source ID",
			"name": "sourceID",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sourceID",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Copy Pad Using POST"
					]
				}
			}
		},
		{
			"displayName": "Destination ID",
			"name": "destinationID",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "destinationID",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Copy Pad Using POST"
					]
				}
			}
		},
		{
			"displayName": "Force",
			"name": "force",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "force",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Copy Pad Using POST"
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
						"Default"
					],
					"operation": [
						"Copy Pad Using POST"
					]
				}
			}
		},
		{
			"displayName": "GET /copyPadWithoutHistory",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Copy Pad Without History Using GET"
					]
				}
			}
		},
		{
			"displayName": "Source ID",
			"name": "sourceID",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sourceID",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Copy Pad Without History Using GET"
					]
				}
			}
		},
		{
			"displayName": "Destination ID",
			"name": "destinationID",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "destinationID",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Copy Pad Without History Using GET"
					]
				}
			}
		},
		{
			"displayName": "Force",
			"name": "force",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "force",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Copy Pad Without History Using GET"
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
						"Default"
					],
					"operation": [
						"Copy Pad Without History Using GET"
					]
				}
			}
		},
		{
			"displayName": "POST /copyPadWithoutHistory",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Copy Pad Without History Using POST"
					]
				}
			}
		},
		{
			"displayName": "Source ID",
			"name": "sourceID",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sourceID",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Copy Pad Without History Using POST"
					]
				}
			}
		},
		{
			"displayName": "Destination ID",
			"name": "destinationID",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "destinationID",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Copy Pad Without History Using POST"
					]
				}
			}
		},
		{
			"displayName": "Force",
			"name": "force",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "force",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Copy Pad Without History Using POST"
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
						"Default"
					],
					"operation": [
						"Copy Pad Without History Using POST"
					]
				}
			}
		},
		{
			"displayName": "GET /getAttributePool",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Attribute Pool Using GET"
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
						"Default"
					],
					"operation": [
						"Get Attribute Pool Using GET"
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
						"Default"
					],
					"operation": [
						"Get Attribute Pool Using GET"
					]
				}
			}
		},
		{
			"displayName": "POST /getAttributePool",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Attribute Pool Using POST"
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
						"Default"
					],
					"operation": [
						"Get Attribute Pool Using POST"
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
						"Default"
					],
					"operation": [
						"Get Attribute Pool Using POST"
					]
				}
			}
		},
		{
			"displayName": "GET /getPadID",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Pad ID Using GET"
					]
				}
			}
		},
		{
			"displayName": "Ro ID",
			"name": "roID",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "roID",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Pad ID Using GET"
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
						"Default"
					],
					"operation": [
						"Get Pad ID Using GET"
					]
				}
			}
		},
		{
			"displayName": "POST /getPadID",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Pad ID Using POST"
					]
				}
			}
		},
		{
			"displayName": "Ro ID",
			"name": "roID",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "roID",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Pad ID Using POST"
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
						"Default"
					],
					"operation": [
						"Get Pad ID Using POST"
					]
				}
			}
		},
		{
			"displayName": "GET /getRevisionChangeset",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Revision Changeset Using GET"
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
						"Default"
					],
					"operation": [
						"Get Revision Changeset Using GET"
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
						"Default"
					],
					"operation": [
						"Get Revision Changeset Using GET"
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
						"Default"
					],
					"operation": [
						"Get Revision Changeset Using GET"
					]
				}
			}
		},
		{
			"displayName": "POST /getRevisionChangeset",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Revision Changeset Using POST"
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
						"Default"
					],
					"operation": [
						"Get Revision Changeset Using POST"
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
						"Default"
					],
					"operation": [
						"Get Revision Changeset Using POST"
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
						"Default"
					],
					"operation": [
						"Get Revision Changeset Using POST"
					]
				}
			}
		},
		{
			"displayName": "GET /getSavedRevisionsCount",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Saved Revisions Count Using GET"
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
						"Default"
					],
					"operation": [
						"Get Saved Revisions Count Using GET"
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
						"Default"
					],
					"operation": [
						"Get Saved Revisions Count Using GET"
					]
				}
			}
		},
		{
			"displayName": "POST /getSavedRevisionsCount",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Saved Revisions Count Using POST"
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
						"Default"
					],
					"operation": [
						"Get Saved Revisions Count Using POST"
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
						"Default"
					],
					"operation": [
						"Get Saved Revisions Count Using POST"
					]
				}
			}
		},
		{
			"displayName": "GET /getStats",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Stats Using GET"
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
						"Default"
					],
					"operation": [
						"Get Stats Using GET"
					]
				}
			}
		},
		{
			"displayName": "POST /getStats",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Stats Using POST"
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
						"Default"
					],
					"operation": [
						"Get Stats Using POST"
					]
				}
			}
		},
		{
			"displayName": "GET /listSavedRevisions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Saved Revisions Using GET"
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
						"Default"
					],
					"operation": [
						"List Saved Revisions Using GET"
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
						"Default"
					],
					"operation": [
						"List Saved Revisions Using GET"
					]
				}
			}
		},
		{
			"displayName": "POST /listSavedRevisions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Saved Revisions Using POST"
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
						"Default"
					],
					"operation": [
						"List Saved Revisions Using POST"
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
						"Default"
					],
					"operation": [
						"List Saved Revisions Using POST"
					]
				}
			}
		},
		{
			"displayName": "GET /movePad",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Move Pad Using GET"
					]
				}
			}
		},
		{
			"displayName": "Source ID",
			"name": "sourceID",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sourceID",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Move Pad Using GET"
					]
				}
			}
		},
		{
			"displayName": "Destination ID",
			"name": "destinationID",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "destinationID",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Move Pad Using GET"
					]
				}
			}
		},
		{
			"displayName": "Force",
			"name": "force",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "force",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Move Pad Using GET"
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
						"Default"
					],
					"operation": [
						"Move Pad Using GET"
					]
				}
			}
		},
		{
			"displayName": "POST /movePad",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Move Pad Using POST"
					]
				}
			}
		},
		{
			"displayName": "Source ID",
			"name": "sourceID",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sourceID",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Move Pad Using POST"
					]
				}
			}
		},
		{
			"displayName": "Destination ID",
			"name": "destinationID",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "destinationID",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Move Pad Using POST"
					]
				}
			}
		},
		{
			"displayName": "Force",
			"name": "force",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "force",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Move Pad Using POST"
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
						"Default"
					],
					"operation": [
						"Move Pad Using POST"
					]
				}
			}
		},
		{
			"displayName": "GET /restoreRevision",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Restore Revision Using GET"
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
						"Default"
					],
					"operation": [
						"Restore Revision Using GET"
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
						"Default"
					],
					"operation": [
						"Restore Revision Using GET"
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
						"Default"
					],
					"operation": [
						"Restore Revision Using GET"
					]
				}
			}
		},
		{
			"displayName": "POST /restoreRevision",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Restore Revision Using POST"
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
						"Default"
					],
					"operation": [
						"Restore Revision Using POST"
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
						"Default"
					],
					"operation": [
						"Restore Revision Using POST"
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
						"Default"
					],
					"operation": [
						"Restore Revision Using POST"
					]
				}
			}
		},
		{
			"displayName": "GET /saveRevision",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Save Revision Using GET"
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
						"Default"
					],
					"operation": [
						"Save Revision Using GET"
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
						"Default"
					],
					"operation": [
						"Save Revision Using GET"
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
						"Default"
					],
					"operation": [
						"Save Revision Using GET"
					]
				}
			}
		},
		{
			"displayName": "POST /saveRevision",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Save Revision Using POST"
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
						"Default"
					],
					"operation": [
						"Save Revision Using POST"
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
						"Default"
					],
					"operation": [
						"Save Revision Using POST"
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
						"Default"
					],
					"operation": [
						"Save Revision Using POST"
					]
				}
			}
		},
];
