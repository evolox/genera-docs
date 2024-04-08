---
sidebar_position: 4
---

# Localization API

## Catalog sycnhronization

Set of API responsible for synchronizing the catalog with the Genera system and the Partner Brand.

### Publish & Update products

API can accept multiple products with multiple images. Each image can be availble for try-on or localization processing

API endpoint: `POST https://api.genera.space/v1/{brandId}/catalog/sync`

Request body example:
```json
{
  "products": [
    {
        "id": "product_123",
        "name": "Product 1",
        "eanbled": true,
        "images": [
            {
                "id": "image_123",
                "url": "https://example.com/image1.png",
                "tryOn": true,
                "localization": true
            },
            {
                "id": "image_124",
                "url": "https://example.com/image2.png",
                "tryOn": true,
                "localization": true
            },
            {
                "id": "image_125",
                "url": "https://example.com/image2.png",
                "tryOn": true,
                "localization": true
            }
        ]
    }
  ]
}
```

Response:

```json
{
  "success": true
}
```

To update existing product, you can use the same endpoint with the same product id.

### Getting product status

Processing of uploaded imags can take some time. If you need to check the status of specific product processing. You will get all statuses of the images for the product: "processing", "done" or "error".

API endpoint: `GET https://api.genera.space/v1/{brandId}/catalog/sync/{productId}`

Response:

```json
{
    "id": "product_123",
    "status": "processing",
    "images": [
        {
            "id": "image_123",
            "product_id": "product_123",
            "status": "processing"
        },
        {
            "id": "image_124",
            "product_id": "product_123",
            "status": "done",
            "url": "https://example.com/image2.png"
        },
        {
            "id": "image_125",
            "product_id": "product_123",
            "status": "error",
            "error": "Human body is not recognized"
        }
    ]
}
```

### Subscribe for Update Webhook

You can subscribe for processing updates using webhooks.
To setup new webhook for updates retrival, you can use the next API endpoint:

API endpoint: `POST https://api.genera.space/v1/{brandId}/webhook`

Request body example:

```json
{
    "type": "processing",
    "url": "https://example.com/webhook"
}
```

In response you will get the id of the created webhook:

Response example:

```json
{
    "id": "webhook_123"
}
```

### Get Webhooks list

To get the list of all webhooks, you can use the next endpoint:

API endpoint: `GET https://api.genera.space/v1/{brandId}/webhook`

Response:

```json
{
    "webhooks": [
        {
            "id": "webhook_123",
            "type": "processing",
            "url": "https://example.com/webhook"
        }
    ]
}
```

### Remove Webhook

To remove a webhook, you can use the next endpoint:

API endpoint: `DELETE https://api.genera.space/v1/{brandId}/webhook/{webhookId}`

Response:

```json
{
    "success": true
}
```

### Webhooks payload

Once the processing of the single image is done, you will receive a GET request to registered webhook URL.

Example of the webhook payload for successfully processed single product image:

```json
{
    "type": "processing",
    "brandId": "brand_123",
    "productId": "product_123",
    "imageId": "image_123",
    "status": "done",
    "url": "https://example.com/image1.png"
}
```

Status can be `done` or `error`. In case of error, you will receive an additional field `error` with the error message.

Example of the webhook payload for the error:

```json
{
    "type": "processing",
    "brandId": "brand_123",
    "productId": "product_123",
    "imageId": "image_123",
    "status": "error",
    "error": "Human body is not recognized"
}
```
