async function sendPrompt() {
    const input = document.getElementById("promptInput").value;
    if (!input) return;

    const res = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ input })
    });

    const data = await res.json();
    document.getElementById("output").innerText = data.output || "Yanıt yok";
}
