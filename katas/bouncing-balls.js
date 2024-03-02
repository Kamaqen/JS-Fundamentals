function bouncingBall(h, bounce, window) {
  2
      if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) {
  3
          return -1;
  4
      }
  5
      
  6
      let timesSeen = 0;
  7
      
  8
      while (h > window) {
  9
          timesSeen++;
  10
          h *= bounce;
  11
          if (h > window) {
  12
              timesSeen++;
  13
          }
  14
      }
  15
      
  16
      return timesSeen;
  17
  }
  18
  ​
  