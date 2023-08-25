
console.log("> background script loaded");

// TODO: Okay, all of this below is working! Whenever an unread messages request is made, put the
// URL and headers into storage.
// NOTE: These may be paginated, so we may want our code to keep retrieving until exhausted.

// Intercept web responses
chrome.webRequest.onCompleted.addListener(
    (details) => {
        console.log(`> chrome.webRequest.onCompleted: details for ${details.url}:`)
        console.log(details)
        // debugger;
        // console.log(`> details: ${JSON.stringify(details)}`)
    }
    ,
    // { urls: ["https://discord.com/api/v9/channels/*/messages*"] }

    // https://discord.com/api/v9/channels/626866757038112768/messages?limit=50&around=1141906598038605895
    { urls: ["https://discord.com/api/*/messages*"] },
    ["responseHeaders"]
);

chrome.webRequest.onBeforeSendHeaders.addListener(
    (details) => {
        // console.log(`> details: ${JSON.stringify(details)}`)
        console.log(`> headers for ${details.url}: `)
        console.log(details)

        // debugger;
        // console.log(`> details: ${JSON.stringify(details)}`)
    }
    ,
    { urls: ["https://discord.com/api/v9/channels/*/messages*"] },
    // { urls: ["https://discord.com/api/*"] }
    ["requestHeaders"]
);


export { }
