function validateMessage(msg) {
  function containsHtml(msg) {
    const htmlPattern = /<([a-z][a-z0-9]*)\b[^>]*>/gi;
    return htmlPattern.test(msg);
  }

  if (containsHtml(msg)) {
    return false;
  }

  try {
    if (msg === null) {
      throw new ReferenceError('Message is null!');
    }
    if (typeof msg !== 'string') {
      throw new TypeError(`Message should be of type string but was of type ${typeof msg}!`);
    }
    if (msg.length > 255 || msg.length === 0) {
      throw new RangeError(`Message contains ${msg.length} characters!`);
    }
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
}

validateMessage('');
validateMessage(0);
validateMessage(null);
validateMessage("<p>gaaa</p>");
