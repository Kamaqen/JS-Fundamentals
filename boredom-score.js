function boredom(staff) {
  const dptCounts = {};
  for (const dpt in staff) {
    if (dptCounts[staff[dpt]]) {
      dptCounts[staff[dpt]]++;
    } else {
      dptCounts[staff[dpt]] = 1;
    }
  }

  let score = 0;

  for (const dpt in dptCounts) {
    switch (dpt) {
      case 'accounts':
        score += dptCounts[dpt] * 1;
        break;
      case 'finance':
        score += dptCounts[dpt] * 2;
        break;
      case 'canteen':
        score += dptCounts[dpt] * 10;
        break;
      case 'regulation':
        score += dptCounts[dpt] * 3;
        break;
      case 'trading':
        score += dptCounts[dpt] * 6;
        break;
      case 'change':
        score += dptCounts[dpt] * 6;
        break;
      case 'IS':
        score += dptCounts[dpt] * 8;
        break;
      case 'retail':
        score += dptCounts[dpt] * 5;
        break;
      case 'cleaning':
        score += dptCounts[dpt] * 4;
        break;
      case 'pissing about':
        score += dptCounts[dpt] * 25;
        break;
    }
  }
  
  if (score <= 80) {
    return 'kill me now';
  } else if (score < 100) {
    return 'i can handle this';
  } else {
    return 'party time!!';
  }
}
