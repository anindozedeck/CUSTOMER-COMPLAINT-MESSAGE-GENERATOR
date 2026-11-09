const form = document.querySelector("#reply-form");
const complaintInput = document.querySelector("#complaint");
const charCount = document.querySelector("#char-count");
const generateButton = document.querySelector("#generate-button");
const buttonLabel = document.querySelector("#button-label");
const result = document.querySelector("#result");
const replyText = document.querySelector("#reply-text");
const errorMessage = document.querySelector("#error-message");
const copyButton = document.querySelector("#copy-button");

complaintInput.addEventListener("input", () => {
  charCount.textContent = `${complaintInput.value.length.toLocaleString()} / 4,000`;
});

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  result.hidden = true;
  errorMessage.hidden = true;
  generateButton.disabled = true;
  buttonLabel.textContent = "Writing your reply...";

  try {
    const response = await fetch("/api/reply", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ complaint: complaintInput.value }),
    });
    let data;
    try {
      data = await response.json();
    } catch {
      throw new Error("The reply service returned an unexpected response. Please try again.");
    }

    if (!response.ok) {
      throw new Error(data.error || "We couldn't generate a reply. Please try again.");
    }

    replyText.textContent = data.reply;
    result.hidden = false;
  } catch (error) {
    errorMessage.textContent = error.message || "We couldn't reach the reply service. Please try again.";
    errorMessage.hidden = false;
  } finally {
    generateButton.disabled = false;
    buttonLabel.textContent = "Generate reply";
  }
});

copyButton.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(replyText.textContent);
    copyButton.textContent = "Copied!";
    window.setTimeout(() => {
      copyButton.textContent = "Copy reply";
    }, 1800);
  } catch {
    errorMessage.textContent = "Couldn't copy automatically. Select and copy the draft instead.";
    errorMessage.hidden = false;
  }
});
