
console.log("> background script loaded");

// TODO: Okay, all of this below is working! Whenever an unread messages request is made, put the
// URL and headers into storage.
// NOTE: These may be paginated, so we may want our code to keep retrieving until exhausted.

// Intercept web responses
// chrome.webRequest.onCompleted.addListener(
//     async (details) => {
//         console.log(`> chrome.webRequest.onCompleted: details for ${details.url}:`)
//         console.log(details)
//         // debugger;
//         // console.log(`> details: ${JSON.stringify(details)}`)

//         // // Send a duplicate request
//         // const response = await fetch(details.url, {
//         //     method: details.method,
//         //     headers: details.requestHeaders,
//         // });

//         // // Get the response body
//         // const body = await response.text();
//         // console.log("> body:")
//         // console.log(body)
//     }
//     ,
//     // { urls: ["https://discord.com/api/v9/channels/*/messages*"] }

//     // https://discord.com/api/v9/channels/626866757038112768/messages?limit=50&around=1141906598038605895
//     { urls: ["https://discord.com/api/*/messages*"] },
//     ["responseHeaders"]
// );

chrome.webRequest.onBeforeSendHeaders.addListener(
    async (details) => {
        // If the request is from our extension, don't intercept it
        if (details.requestHeaders.find(header => header.name === "X-Intercepted-By")) {
            return;
        }
        // console.log(`> details: ${JSON.stringify(details)}`)
        console.log(`> headers for ${details.url}: `)
        console.log(details)

        // debugger;
        // console.log(`> details: ${JSON.stringify(details)}`)

        // Send a duplicate request. Wait 5 seconds to make sure we don't trigger rate limiting.
        await new Promise(resolve => setTimeout(resolve, 5000));
        let headers = {};
        details.requestHeaders.forEach(header => {
            headers[header.name] = header.value;
        });
        // Add a special header, to make sure we don't get stuck in a loop
        headers["X-Intercepted-By"] = "discord-unread-messages-extension";

        const response = await fetch(details.url, {
            method: details.method,
            headers: headers,
        });

        // Log the response body json
        const body = await response.json();
        console.log("> body:")
        console.log(body)

        // Get the response body
        // const body = await response.text();
        // console.log("> body:")
        // console.log(body)
    }
    ,
    { urls: ["https://discord.com/api/v9/channels/*/messages*"] },
    // { urls: ["https://discord.com/api/*"] }
    ["requestHeaders"]
);


export { }
