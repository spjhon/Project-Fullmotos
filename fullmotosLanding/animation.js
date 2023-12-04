let words = document.querySelectorAll(".word");

      words.forEach(function (word) {
        let letters = word.textContent.split("");
        word.textContent = "";
        letters.forEach(function (letter) {
          let span = document.createElement("span");
          span.textContent = letter;
          span.className = "letter";
          word.appendChild(span);
        });
      });

      let currentWordIndex = 0;
      let maxWordIndex = words.length - 1;
      words[currentWordIndex].style.opacity = "1";

      let rotateText = function () {
        let currentWord = words[currentWordIndex];
        let nextWord =
          currentWordIndex === maxWordIndex
            ? words[0]
            : words[currentWordIndex + 1];

        // Rotate out letters of the current word
        Array.from(currentWord.children).forEach(function (letter, i) {
          setTimeout(function () {
            letter.className = "letter out";
          }, i * 80);
        });

        // Reveal and rotate in letters of the next word
        nextWord.style.opacity = "1";
        Array.from(nextWord.children).forEach(function (letter, i) {
          letter.className = "letter behind";
          setTimeout(function () {
            letter.className = "letter in";
          }, 340 + i * 80);
        });

        currentWordIndex =
          currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
      };

      rotateText();
      setInterval(rotateText, 4000);