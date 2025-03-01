interface CopyToClipboardObject {
  sucess: boolean;
}

export const copyToClipboard = async (
  spanId: string
): Promise<CopyToClipboardObject> => {
  const spanElement = document.getElementById(spanId);

  if (!spanElement) {
    console.error(`Span with ID "${spanId}" not found`);
    throw new Error(`Span with ID "${spanId}" not found`);
  }

  const textToCopy = spanElement.textContent || "";

  try {
    await navigator.clipboard.writeText(textToCopy);
    return { sucess: true };
  } catch (error) {
    console.error("Failed to copy text: ", error);
    throw error;
  }
};
