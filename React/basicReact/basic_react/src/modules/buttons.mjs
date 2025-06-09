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

export default {
  onClickUppercaseHandler,
  onClickLowercaseHandler,
  onClickClearHandler,
  onChangeHandler,
  onClickSentCaseHandler,
  onClickTitleCaseHandler
};
