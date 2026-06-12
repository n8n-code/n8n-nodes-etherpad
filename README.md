# @n8n-dev/n8n-nodes-etherpad

![etherpad Banner](banner.svg)

[![npm version](https://img.shields.io/npm/v/@n8n-dev/n8n-nodes-etherpad.svg)](https://www.npmjs.com/package/@n8n-dev/n8n-nodes-etherpad)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

**Stop writing etherpad API integrations by hand.**

Every time you connect n8n to etherpad, you waste hours mapping endpoints, defining parameters, and debugging schemas. You copy-paste from docs, fix edge cases, and pray nothing breaks.

**What if connecting n8n to etherpad took 5 minutes, not half a day?**

This node gives you **5+ resources** out of the box: **Pad**, **Author**, **Group**, **Session**, **Default**: with full CRUD operations, typed parameters, and zero manual configuration.

---

## What You Get

- **Zero boilerplate**: Resources, operations, and fields are pre-configured and ready to use
- **Full CRUD**: Create, read, update, and delete support where the API allows it
- **Typed parameters**: No more guessing field types
- **Built-in auth**: API key authentication, ready to go
- **Declarative**: Native n8n performance, no custom execute() overhead

---

## Install

```bash
npm install @n8n-dev/n8n-nodes-etherpad
```

**Or in n8n:**
1. **Settings → Community Nodes → Install**
2. Search: `@n8n-dev/n8n-nodes-etherpad`
3. Click **Install**

---

## Quick Start

1. Install the node (above)
2. Add credentials: **etherpad API** → paste your API key
3. Drag the **etherpad** node into your workflow
4. Pick a resource → pick an operation → done.

That's it. No configuration files. No code. It just works.

---

## Resources

<details>
<summary><b>Pad</b> (42 operations)</summary>

- Get appends a chat message
- Post appends a chat message
- Get returns ok when the current API token is valid
- Post returns ok when the current API token is valid
- Get Create Diff HTML Using GET
- Post Create Diff HTML Using POST
- Get Create Pad Using GET
- Post Create Pad Using POST
- Get deletes a pad
- Post deletes a pad
- Get returns the chatHead chat message of the pad
- Post returns the chatHead chat message of the pad
- Get returns the chat history
- Post returns the chat history
- Get returns the text of a pad formatted as HTML
- Post returns the text of a pad formatted as HTML
- Get returns the timestamp of the last revision of the pad
- Post returns the timestamp of the last revision of the pad
- Get return true of false
- Post return true of false
- Get returns the read only link of a pad
- Post returns the read only link of a pad
- Get returns the number of revisions of this pad
- Post returns the number of revisions of this pad
- Get returns the text of a pad
- Post returns the text of a pad
- Get list all the pads
- Post list all the pads
- Get returns an array of authors who contributed to this pad
- Post returns an array of authors who contributed to this pad
- Get returns the list of users that are currently editing this pad
- Post returns the list of users that are currently editing this pad
- Get returns the number of user that are currently editing this pad
- Post returns the number of user that are currently editing this pad
- Get sends a custom message of type msg to the pad
- Post sends a custom message of type msg to the pad
- Get sets the text of a pad with HTML
- Post sets the text of a pad with HTML
- Get sets a boolean for the public status of a pad
- Post sets a boolean for the public status of a pad
- Get sets the text of a pad
- Post sets the text of a pad

</details>

<details>
<summary><b>Author</b> (10 operations)</summary>

- Get creates a new author
- Post creates a new author
- Get this functions helps you to map your application author ids to Etherpad author ids
- Post this functions helps you to map your application author ids to Etherpad author ids
- Get Returns the Author Name of the author
- Post Returns the Author Name of the author
- Get returns an array of all pads this author contributed to
- Post returns an array of all pads this author contributed to
- Get returns all sessions of an author
- Post returns all sessions of an author

</details>

<details>
<summary><b>Group</b> (14 operations)</summary>

- Get creates a new group
- Post creates a new group
- Get this functions helps you to map your application group ids to Etherpad group ids
- Post this functions helps you to map your application group ids to Etherpad group ids
- Get creates a new pad in this group
- Post creates a new pad in this group
- Get deletes a group
- Post deletes a group
- Get List All Groups Using GET
- Post List All Groups Using POST
- Get returns all pads of this group
- Post returns all pads of this group
- Get List Sessions Of Group Using GET
- Post List Sessions Of Group Using POST

</details>

<details>
<summary><b>Session</b> (6 operations)</summary>

- Get creates a new session validUntil is an unix timestamp in seconds
- Post creates a new session validUntil is an unix timestamp in seconds
- Get deletes a session
- Post deletes a session
- Get returns informations about a session
- Post returns informations about a session

</details>

<details>
<summary><b>Default</b> (24 operations)</summary>

- Get Append Text Using GET
- Post Append Text Using POST
- Get Copy Pad Using GET
- Post Copy Pad Using POST
- Get Copy Pad Without History Using GET
- Post Copy Pad Without History Using POST
- Get Attribute Pool Using GET
- Post Get Attribute Pool Using POST
- Get Pad ID Using GET
- Post Get Pad ID Using POST
- Get Revision Changeset Using GET
- Post Get Revision Changeset Using POST
- Get Saved Revisions Count Using GET
- Post Get Saved Revisions Count Using POST
- Get Stats Using GET
- Post Get Stats Using POST
- Get List Saved Revisions Using GET
- Post List Saved Revisions Using POST
- Get Move Pad Using GET
- Post Move Pad Using POST
- Get Restore Revision Using GET
- Post Restore Revision Using POST
- Get Save Revision Using GET
- Post Save Revision Using POST

</details>

---

## Why This Node?

**Without this node:**
- Hours of manual API integration
- Copy-pasting from etherpad docs
- Debugging auth, pagination, error handling
- Maintaining your own client code

**With this node:**
- Install → configure → use. 5 minutes.
- Auto-generated from the official etherpad OpenAPI spec
- Always up to date when the API changes
- Native n8n performance

---

## Auto-Generated
This node was auto-generated from the official **etherpad** OpenAPI specification using
[@n8n-dev/n8n-openapi-node-ultimate](https://github.com/kelvinzer0/n8n-openapi-node-ultimate),
then validated against the live API so you get accurate types and real parameters, not guesswork.

When the etherpad API updates, this node updates too.

---


## License

MIT © [kelvinzer0](https://github.com/n8n-code)
