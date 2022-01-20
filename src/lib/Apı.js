const FİREBASE_DOMAİN = "https://lithe-altar-322310-default-rtdb.firebaseio.com";

export async function addQuote(quoteData) {
  const response = await fetch(`${FİREBASE_DOMAİN}/quotes.json`, {
    method: "POST",
    body: JSON.stringify(quoteData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not create quote.");
  }

  return null;
}
