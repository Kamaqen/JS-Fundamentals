function areYouPlayingBanjo(name) {
  return name[0] === "R" || name[0] === "r"
    ? `${name} plays banjo`
    : `${name} does not play banjo`;
}

function areYouPlayingBanjo(name) {
  return name + (/^r/i.test(name) ? " plays " : " does not play ") + "banjo";
}
