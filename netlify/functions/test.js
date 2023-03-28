import fetch from 'node-fetch'

const API_ENDPOINT = "https://9ab04dde-ae61-4adf-b809-7f9df6c6505c-asia-south1.apps.astra.datastax.com/api/rest/v2/namespaces/tasks/collections";

exports.handler = async (event, context) => {
  return fetch(API_ENDPOINT, 
    { headers: 
      { Accept: "application/json",
      Authorization:"X-Cassandra-Token: eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJsYmJUcDRObzdfUHBJLUxOWFZJbUFmY1pWQWs3TFNwdnY5Z0RFVF80M2ZrIn0.eyJqdGkiOiIxMzA2ZTUzNi1jOWI5LTRlMWYtYWMzZC1lMzBjMTM3ZTc5YzYiLCJleHAiOjE2NzgzMjU0ODAsIm5iZiI6MCwiaWF0IjoxNjc4Mjg5NDgxLCJpc3MiOiJodHRwczovL2F1dGguY2xvdWQuZGF0YXN0YXguY29tL2F1dGgvcmVhbG1zL0Nsb3VkVXNlcnMiLCJhdWQiOiJhdXRoLXByb3h5Iiwic3ViIjoiODJjMmY3Y2MtMjcxNi00ZWI2LTlhMzMtOGJjZGE5NDcyZGEwIiwidHlwIjoiSUQiLCJhenAiOiJhdXRoLXByb3h5IiwiYXV0aF90aW1lIjoxNjc4Mjg5NDgwLCJzZXNzaW9uX3N0YXRlIjoiZWNiZmFkMzktZDIzYS00OGZmLWFiN2ItMzYwOGJiNTViZThjIiwiYWNyIjoiMSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJ1bWFfYXV0aG9yaXphdGlvbiJdfSwibmFtZSI6Ik1pY2hlbGxlIFRvbmdlcmllIiwicHJlZmVycmVkX3VzZXJuYW1lIjoibXRvbmdhc0BnbWFpbC5jb20iLCJnaXZlbl9uYW1lIjoiTWljaGVsbGUiLCJmYW1pbHlfbmFtZSI6IlRvbmdlcmllIiwiZW1haWwiOiJtdG9uZ2FzQGdtYWlsLmNvbSJ9.pB43_GidVhgya5j5-uvDXPdfr8UuEemOGkSnFZKrJlgJrhveo9idX5edzmtyPJS3Vyg64j4jbZ9iEx4Pio1EbzI5eb0RQLU8DTDLSuHUO92qM4WcPR6X6buSXy_ZeRHQybrSqXzwFCJbGF2_8Uqeahkxr_q-PaK_uBLUnjIvTeS5qryLLGj9yevv734OtImqwFcYydOwun2ZDlPqpfQCFy6Vb_XDaZxs6V5TmXvUxlnjEzTT8bd9wpyVBW4U6oH9Hadgod9RlJaolOiAd6C-a7DSLLo7yIwUBR_AB_mTItoC1Wdv80ZJ61JoPlAVpq2-AhuAa3GPBjwEhZ97vaiITg"
    } 
    
        }
      )
    .then((response) => response.text())
   
    .then((data) => ({
      statusCode: 200,
      body: JSON.stringify(data)
    }))

};
console.log(response)