---
sidebar_position: 3
title: Try-On API
---

# Try-On API

## Domain language

**Model** - human model with a set of parameters like height, weight, body shape, etc and face image. Model can wear a set of products.

**Product** - fashion product like dress, shoes, etc. Each product has a set of images and properties.

**Try-On** - the process of putting a one or more products on a model.

**Webhook** - a callback that is triggered by an event using HTTP endpoint. In our case, it is a try-on event.

## Models

Creation and managing a human model with a set of parameters.


### Create Model

```
POST https://api.genera.space/v1/model 
```

Payload:

```json
{
    "name": "Model 1",
    "height": 170,
    "weight": 60,
    "bodyShape": "hourglass",
    "faceImage": "https://example.com/face.png",
    "skinTone": "light",
    "gender": "male"
}
```

Response:

```json
{
    "id": "5dfdccf7-bc9b-48cc-bfa6-9aadle1a0588",
}
```

### Read Model

```
GET https://api.genera.space/v1/model/{modelId}
```

Response:

```json
{
    "id": "5dfdccf7-bc9b-48cc-bfa6-9aadle1a0588",
    "name": "Model 1",
    "height": 170,
    "weight": 60,
    "bodyShape": "hourglass",
    "faceImage": "https://example.com/face.png",
    "skinTone": "
}
```

### Update Model

```
PUT https://api.genera.space/v1/model/{modelId}
```

Payload:

```json
{
    "height": 180,
    "weight": 50,
    "bodyShape": "rectangle",
    "faceImage": "https://example.com/new_face.png",
}
```

Response:

```json
{
    "success": true
}
```

### Delete Model

```
DELETE https://api.genera.space/v1/model/{modelId}
```

Response:

```json
{
    "success": true
}
```

## Products

Creation and managing of fashion products of different types.

### Create Product

```
POST https://api.genera.space/v1/product
```

Payload:

```json
{
    "name": "Product 1",
    "brand": "Brand 1",
    "description": "Short black t-shirt with a print of a cat",
    "type": "shoes",
    "image": "https://example.com/image.png",
}
```

Response:

```json
{
    "id": "5dfdccf7-bc9b-48cc-bfa6-9aadle1a0588"
}
```

### Read Product

```
GET https://api.genera.space/v1/product/{productId}
```

Response:

```json
{
    "id": "5dfdccf7-bc9b-48cc-bfa6-9aadle1a0588",
    "name": "Product 1",
    "brand": "Brand 1",
    "description": "Short black t-shirt with a print of a cat",
    "type": "shoes",
    "image": "https://example.com/image.png",
}
```

### Update Product

```
PUT https://api.genera.space/v1/product/{productId}
```

Payload:

```json
{
    "description": "Short black t-shirt with a print of a dog",
    "image": "https://example.com/new_image.png",
}
```

Response:

```json
{
    "success": true
}
```

### Delete Product

```
DELETE https://api.genera.space/v1/product/{productId}
```

Response:

```json
{
    "success": true
}
```

## Try-On

Process of creation of try-on is asynchronous. It can take some time to process the result. To get the status of the try-on, you have to create webhook for try-on and listen for the status change. The status can be "processing" or "done" or "error".

### Create Try-On

```
POST https://api.genera.space/v1/tryon
```

Payload:

```json
{
    "modelId": "5dfdccf7-bc9b-48cc-bfa6-9aadle1a0588",
    "products": [
        "5dfdccf7-bc9b-48cc-bfa6-9aadle1a0588",
        "23j4h5j3-4h5j-34h5-34h5-34h5j34hsd5j",
        "34h5j34h-5j34-534h-5j34-d999h5j34h5j",
        "89h5j34h-5j34-534h-bfa6-d999h5j34h5j",
    ]
}
```

Response:

```json
{
    "id": "5dfdccf7-bc9b-48cc-bfa6-9aadle1a0588",
    "status": "processing"
}
```

### Get Try-On Status

```
GET https://api.genera.space/v1/tryon/{tryOnId}
```

Response:

```json
{
    "id": "5dfdccf7-bc9b-48cc-bfa6-9aadle1a0588",
    "status": "done"
}
```

## Webhooks

### Create Webhook for Try-On

```
POST https://api.genera.space/v1/webhook
```

Payload:

```json
{
    "type": "tryon",
    "url": "https://example.com/webhook"
}
```

Response:

```json
{
    "id": "5dfdccf7-bc9b-48cc-bfa6-9aadle1a0588"
}
```

### Read Webhooks

```
GET https://api.genera.space/v1/webhook
```

Response:

```json
{
    "webhooks": [
        {
            "id": "5dfdccf7-bc9b-48cc-bfa6-9aadle1a0588",
            "type": "tryon",
            "url": "https://example.com/webhook"
        }
    ]
}
```

### Update Webhook

```
PUT https://api.genera.space/v1/webhook/{webhookId}
```

Payload:

```json
{
    "url": "https://example.com/new_webhook"
}
```

Response:

```json
{
    "success": true
}
```

### Delete Webhook

```
DELETE https://api.genera.space/v1/webhook/{webhookId}
```

Response:

```json
{
    "success": true
}
```

### Webhooks payload

When the status of the try-on changes, the webhook will receive a payload with the following structure:

```json
{
    "id": "5dfdccf7-bc9b-48cc-bfa6-9aadle1a0588",
    "type": "tryon",
    "status": "done",
    "image": "https://cdn.genera.space/tryon.png"
}
```