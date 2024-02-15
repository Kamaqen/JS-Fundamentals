// option 1:
function domainName(url){
  const domainRegex = /^(?:https?:\/\/)?(?:www\.)?([a-zA-Z0-9.-]+)(?:\/|$)/;
  const match = url.match(domainRegex);
  console.log(match);
  return  match ? match[1].split(".")[0] : null;
}

// option 2:
function domainName(url){
  url = url.replace("https://", '');
  url = url.replace("http://", '');
  url = url.replace("www.", '');
  return url.split('.')[0];
};

// https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript