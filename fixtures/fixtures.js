var fixtures = {};
fixtures.api = {};
fixtures.api.intercom = {};

// List Conversations
fixtures.api.intercom.conversations = {
   "type": "conversation.list",
  "conversations": [
    {
      "type": "conversation",
      "id": "147",
      "created_at": 1400850973,
      "updated_at": 1400857494,
      "user": {
        "type": "user",
        "id": "536e564f316c83104c000020"
      },
      "assignee": {
        "type": "admin",
        "id": "25"
      },
      "conversation_message": {
        "type": "conversation_message",
        "subject": "An attempt to sell something #1000",
        "body": "<p>Hi Alice,</p>\n\n<p>We noticed you using our Product, do you have any questions?</p> \n<p>- Jane</p>",
        "author": {
          "type": "admin",
          "id": "0"
        },
        "attachments": [
          {
            "name": "signature",
            "url": "http://someurl.com/signature.jpg"
          }
        ]
      }
    },
    {
      "type": "conversation",
      "id": "148",
      "created_at": 1400850974,
      "updated_at": 1400857499,
      "user": {
        "type": "user",
        "id": "536e564f316c83104c000020"
      },
      "assignee": {
        "type": "admin",
        "id": "0"
      },
      "conversation_message": {
        "type": "conversation_message",
        "subject": "An attempt to sell something #1001",
        "body": "<p>Hi Adam,</p>\n\n<p>We noticed you using our Product, do you have any questions?</p> \n<p>- Jane</p>",
        "author": {
          "type": "admin",
          "id": "25"
        },
        "attachments": [
          {
            "name": "signature",
            "url": "http://someurl.com/signature.jpg"
          }
        ]
      }
    },
    {
      "type": "conversation",
      "id": "149",
      "created_at": 1400850974,
      "updated_at": 1400857499,
      "user": {
        "type": "user",
        "id": "536e564f316c83104c000020"
      },
      "assignee": {
        "type": "admin",
        "id": "0"
      },
      "conversation_message": {
        "type": "conversation_message",
        "subject": "An attempt to sell something #1002",
        "body": "<p>Hey Jan,</p>\n\n<p>may I help you?</p> \n<p>- Jane</p>",
        "author": {
          "type": "admin",
          "id": "25"
        },
        "attachments": [
          {
            "name": "signature",
            "url": "http://someurl.com/signature.jpg"
          }
        ]
      }
    }
  ]
};

// A Single Conversation
fixtures.api.intercom.conversation = {
  "type": "conversation",
      "id": "147",
      "created_at": 1400850973,
      "updated_at": 1400857494,
      "conversation_message": {
        "type": "conversation_message",
        "subject": "",
        "body": "<p>Hi Alice,</p>\n\n<p>We noticed you using our Product, do you have any questions?</p> \n<p>- Jane</p>",
        "author": {
          "type": "admin",
          "id": "25"
        },
        "attachments": [
          {
            "name": "signature",
            "url": "http://someurl.com/signature.jpg"
          }
        ]
      },
      "user": {
        "type": "user",
        "id": "536e564f316c83104c000020"
      },
      "assignee": {
        "type": "admin",
        "id": "25"
      },
      "open": true,
      "read": true,
      "conversation_parts": {
        "type": "conversation_part.list",
        "conversation_parts": [
        ]
      },
      "tags": { "type": 'tag.list', "tags": [] }
};

module.exports = fixtures;
