export default async function storefront(query, variables = {}){

    const response = await fetch(
        "https://mayday-sound-system.myshopify.com/api/2022-04/graphql.json",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-Shopify-Storefront-Access-Token": "db56b07b09f9f3e2bc43adab18dc4573"
            },
            body: JSON.stringify({query, variables})
        }
    )
    return response.json()
}
