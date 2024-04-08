---
title: API Keys
slug: /
sidebar_position: 1
---

# API Keys

API keys let you interact with Genera through the CORE API, the CORE Javascript SDK, and Python SDK. API Keys have company-scoped permissions and are associated with your user account.

## Create an API Key

```
Keep your API keys secret. They function like passwords. Do not hard code your API keys into applications where they may accidentally be released in version control. Instead, use environmental variables or secrets. If an API key becomes compromised, delete it.
```

Click the profile icon in the top right of the console and then click Company Settings from the dropdown.

On the API keys tab, enter a name and click the Add button.

Make sure to copy your new API key now. You won’t be able to see it again after leaving this page.

## Revoke an API Key

You can revoke your API keys by clicking revoke in the console. If you are a company admin, you can also revoke keys that belong to other team members.

## Using API Keys

API keys are used to authenticate requests to the Genera API. Include your API key in the Authorization header of your requests. Here is an example of how to use an API key with curl:

```bash
curl -g -X GET 'https://api.genera.space/v1/product/123' \
-H 'Authorization: Bearer API_KEY...'
```
