const onClickUppercaseHandler = (text, setText) => {
  setText(text.toUpperCase());
};

const onClickLowercaseHandler = (text, setText) => {
  setText(text.toLowerCase());
};

const onClickClearHandler = (setText) => {
  setText("");
};

const onChangeHandler = (event, setText) => {
  setText(event.target.value);
};

const onClickSentCaseHandler = (text, setText) => {
  const newText = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  setText(newText);
};

const onClickTitleCaseHandler = (text, setText) => {
  const newText = text
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  setText(newText);
};

const onClickCopyHandler = async (text, showAlert) => {
  try {
    if (!navigator.clipboard) {
      showAlert("Clipboard API not supported", "danger");
      throw new Error("Clipboard API not supported");
    }
    await navigator.clipboard.writeText(text);
    showAlert("The text is copied", "success");
  } catch (err) {
    console.error("Failed to copy text: ", err);
  }
};

// ✅ Assign to a named variable before export
const handlers = {
  onClickUppercaseHandler,
  onClickLowercaseHandler,
  onClickClearHandler,
  onChangeHandler,
  onClickSentCaseHandler,
  onClickTitleCaseHandler,
  onClickCopyHandler,
};

export default handlers;
