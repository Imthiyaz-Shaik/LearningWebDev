const updateExchangeRate = async () => {
    const amount = document.querySelector("#amount");
    let amtVal = amount.value;
    if (amtVal === "" || amtVal < 1) {
      amount.value = 1;
    }
  
    // Fetch conversion rate using the API
    const URL = `${BASE_URL}?from=${fromCurr.value}&to=${toCurr.value}&amount=${amtVal}`;
    try {
      const response = await fetch(URL, {
        method: "GET",
        headers: {
          "x-rapidapi-host": API_HOST,
          "x-rapidapi-key": API_KEY,
        },
      });
  
      // Log the raw response to inspect the structure
      const data = await response.json();
      console.log("API Response: ", data); // Inspect full response here
  
      // Check if the data contains the expected structure
      if (data && data.result) {
        console.log("Conversion Rate:", data.result);
        const conversionRate = data.result.value; // Ensure the key matches your response
  
        if (conversionRate) {
          // Update the exchange rate text in the #exVal element
          const exVal = document.querySelector("#exVal");
          exVal.innerText = `1 ${fromCurr.value} = ${conversionRate.toFixed(2)} ${toCurr.value}`;
        } else {
          console.error("Conversion rate not found in the response.");
          alert("Error: Conversion rate not found.");
        }
      } else {
        console.error("Invalid response format:", data);
        alert("Error: Invalid response format.");
      }
    } catch (error) {
      console.error("Error fetching conversion data:", error);
      alert("Error in fetching conversion data.");
    }
  };
  