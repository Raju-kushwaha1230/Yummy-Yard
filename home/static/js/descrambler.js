(function( $ ) {

     $.fn.scramble = function( duration, interval, charset, uppercase ) {
      if ((typeof(duration) !== "number") || (duration === NaN) || (duration < 1000) || (duration > 20000)) {
        duration = 3000;
      }
  
      if ((typeof(interval) !== "number") || (interval === NaN) || (interval < 5) || (interval > 1000)) {
        interval = 20;
      }
  
      var charsets = {
        numbers: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
        alphabet: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
        punctuation: ["@", "#", "$", "%", "^", "*", "(", ")", "&", "+", "=", "}", "{", "|", ":", ";", ">", "<", "?", "~", " "],
        emoji: ["👸🏼","🇩🇰","⌚","🙏🏽","🌓","👃","🏋🏽","🇱🇹","🍐","📛","🚵🏾‍♀","🚻","💆🏻‍♂","😠","📩","🥚","🏋🏿‍♀","🕳","➗","🆕","🏃🏼‍♀","🇬🇼","🔑","🙏","🇬🇹","🖌","🙋🏼","✊🏿","🕔","⛹🏿‍♀","👊","👱🏼","🏄🏿‍♀","🕯","😯","🔰","🏡","🐣","🏹","🌆","👵🏿","🙎🏻","💂🏼‍♀","🇻🇳","🏃‍♀","👵🏼","🍦","🖊","🙎🏼","👆🏿","🇧🇿","🎫","💇🏾","🕵🏼‍♀","🇾🇪","🔹","🎤","🗝","💺","🇬🇱","🇷🇸","🇿🇦","🤘🏻","👼🏼","💁🏽","💟","🚡","🦂","🚕","🐼","🗨","🐳","🆘","📣","🐚","🐇","💙","💆🏼","🌤","💪🏿","👮🏾","⛹🏼‍♀","🇱🇺","🏄🏿","🙆","💇🏽","👩🏼","👲🏼","🐽","🎥","🥁","🚽","🇬🇭","🐹","🚴🏽","👩","🎇","🔼","🇨🇦","🈵","🎬","✍🏻","🎰","🍾","🇧🇹","🇸🇸","👩","🍲","☀","🍂","🤔","👱‍♀","🇱🇮","👵🏻","🔪","🇬🇶","🇳🇴","🛠","🙍🏻","🇪🇹","⏪","😔","👼","🚴🏾‍♀","🙎","🙍🏿‍♂","👱🏾‍♀","👋🏼","🇻🇨","✌🏽","🙅🏻‍♂","🇵🇭","🕥","🎆","👰🏼","💁🏻‍♂","⭐","💪🏼","⌛","👳🏽","💅🏿","👃🏾","😜","🌴","🏄🏽‍♀","🔁","🗼","🚺","🙎🏼‍♂","🏊🏼","🇧🇳","👱🏿‍♀","🖖🏼","💁🏽‍♂","🙋🏼‍♂","⛹🏾‍♀","😳","👧🏽","🙋","❌","🙏🏻","🐦","👯‍♂","🇨🇵","🆖","🍏","🙇🏼","🏋🏽‍♀","🔡","👆🏽","👳🏾‍♀","👨‍👧","🇨🇩","🖐","🇺🇬","👧🏿","👱🏽","🇪🇺","🔐","🉑","✅","⛵","🛤","🇲🇷","👟","🏓","💇🏾‍♂","🦃","🔜","🌂","🎭","💂🏾‍♀","👮🏼","🚓","🚜","👁‍🗨","🇫🇯","🐯","🙌🏻","👍🏻","📹","🎅","🏧","🙍‍♂","🗞","🗻","🎾","👷🏽‍♀","💇‍♂","🎚","👈🏻","🛂","👨🏿","👳‍♀","✋🏿","🚀","🏑","👶🏼","🎼","🎮","🎦","🏃🏿","🏺","👂🏻","🇻🇦","👇🏼","🆔","🌚","🎒","🖕🏻","😰","🇬🇫","😃","📥","🏠","🔎","🏷","🇩🇿","🚅","👉🏾","🚵🏿‍♀","💁🏼‍♂","🚶","🇧🇱","🇸🇻","🕵🏿","👌🏻","👨‍👨‍👧","👊🏼","⏳","🔙","🇸🇴","🤘🏾","🙅🏼","🌻","🎡","🇮🇳","🏛","💗","🏜","5⃣","🇬🇦","👨‍👩‍👧‍👦","💇","🍍","🙆🏾","✌🏼","🇪🇦","💐","👨","📼","🚋","🐰","📎","🌞","🇹🇦","🙋🏿","👮🏻‍♀","🇵🇷","❕","⬇","👈🏼","🇸🇭","🇧🇭","✒","😅","🇲🇳","✊","♦️","🚌","👇🏽","👲🏻","😗","👇🏻","👼🏻","🇲🇿","🍹","🇬🇬","👉🏻","⏮","🇪🇭","👼🏽","🇧🇫","👂","🕜","🏔","👊🏻","👳🏻","🚶🏼","🇦🇲","💷","🉐","🔮","🙇🏼‍♀","👸🏻","👵🏾","🇱🇷","🇧🇸","🙆🏿‍♂","👩‍👩‍👦","🈸","🤗","😛","🕦","🍿","💇🏽‍♂","🇸🇦","💀","🇯🇵","💆‍♂","🔝","🙅‍♂","💇🏻‍♂","🗾","💒","📸","⚽","🙇🏾‍♀","👈🏿","🎐","👮🏿","👷🏾","🏃🏾‍♀","💩","🐠","👑","💣","🇲🇭","👈🏽","🍋","🐒","🇭🇳","🎌","👂🏾","🎁","🇲🇶","👄","🚵🏿","👷🏻","💓","🎅🏽","🚒","🕗","🇧🇾","😭","🇸🇲","🎨","🇦🇱","🇧🇻","🚴🏾","🈶","👌🏼","💳","🇬🇩","🌾","🍞","🚵🏼‍♀","🕵‍♀","🔩","🔻","👂🏽","👎🏾","🕵🏻‍♀","🐫","🇹🇫","🔫","😷","🇸🇽","🇻🇮","🇦🇷","🇦🇪","🚖","🇩🇯","🚃","🤘🏽","🍤","🇸🇰","👩‍👧‍👦","🙎🏾","👮🏿‍♀","🇸🇾","🚶🏿‍♀","💪🏻","🇵🇸","🙍🏾","🔔","🎂","🇬🇮","🐂","🇵🇲","👷🏼‍♀","✖","🙇","👳🏽‍♀","👃🏽","🆗","🚣🏻","🇬🇷","🚣🏿","🔷","💃","🇲🇺","🌝","👃🏻","📕","🇬🇸","🔓","🇦🇸","🍉","🏋🏾‍♀","🇸🇳","😕","🐭","📖","🐵","🌅","🛬","💂","🍚","🎸","🇺","📬","🚠","🎅🏿","🙇🏽","👏🏾","👧🏾","🇧🇴","👍🏼","🙅🏾","👳🏻‍♀","🏀","🇳🇺","👨🏽","🙆🏼","👩🏿","👱🏻","🔠","👍🏾","🐋","😞","🏃🏽‍♀","⚾","🍓","🐅","🔱","🎳","🏄🏻","👌🏿","💁🏿‍♂","🙍🏽‍♂","👳🏾","⛈","👉","🎃","🇲🇴","⛹🏼","🏠","🚣🏿","🐳","🖼","🌝","✍🏻","🙅‍♂","😄","👋🏼","🕧","🙅🏻","🎁","🇦🇺","👊🏻","🐯","🙏","👟","🚴","👈🏻","🙋","🎚","🐪","🔫"],
        get alphanumeric() {
          return this.numbers.concat(this.alphabet);
        },
        get all() {
          return this.alphanumeric.concat(this.punctuation);
        },
        get allPlusEmoji() {
          return this.all.concat(this.emoji)
        }
      };
  
      if ((charset === undefined) || !(charset in charsets) ) {
        charset = "all";
      }
      charset = charsets[charset];
  if ((uppercase === undefined) || (uppercase === false)) {
        uppercase = false;
      } else {
        uppercase = true;
      }
  
      var originalText = this.text();
      this.text("");
  
      var random = function(characterList) {
        var length = characterList.length;
        var randomNumber = Math.floor(Math.random() * length);
        var letter = characterList[randomNumber];
        if (uppercase) {
          return letter.toUpperCase();
        } else {
          return letter;
        }
      };
  
      var replacer = function(scrambledArray, originalArr, charsToReplace) {
        var replacement = originalArr.slice(0, charsToReplace);
        replacement = replacement.join("");
        return scrambledArray.splice(0, replacement.length, replacement);
      };
  
      var scrambler = function(lengthOfArray) {
        var scrambledArray = [];
        for (var i = 0; i < lengthOfArray; i++) {
          scrambledArray.push(random(charset));
        }
        return scrambledArray;
      };
  
      var wordScrambler = function($element, word) {
        this.iteration = 0;
        this.spliceIteration = 0;
        this.$element = $element;
        this.word = word;
        this.len = word.length;
        this.arr = word.split("");
        this.terminated = false;
        $element.on("click", (e) => {
          this.terminated = true;
        });
  
        var magicNumber = parseInt(duration / interval / this.len);
       this.scramble = function(timer) {
          if (this.terminated) {
            this.$element.text(word)
            window.clearInterval(timer);
            return;
          }
          this.iteration += 1;
          var scrambledArray = scrambler(this.len);
  
            if (this.iteration % magicNumber === 0) {
              this.spliceIteration += 1;
            }
            replacer(scrambledArray, this.arr, this.spliceIteration);
          var scrambledWord = scrambledArray.join("");
          this.$element.text(scrambledWord);
          if (this.spliceIteration === this.len) {
            window.clearInterval(timer);
          }
        };
      };
  
      var text = new wordScrambler(this, originalText);
      var intervalTimer = window.setInterval(function() {
        text.scramble(intervalTimer);
      }, interval);
      return this;
    };
  
  }(jQuery));
  