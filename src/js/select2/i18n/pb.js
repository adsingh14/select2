define(function () {
  // Punjabi
  return {
    errorLoading: function () {
      return 'ਨਤੀਜੇ ਲੋਡ ਨਹੀਂ ਕੀਤੇ ਜਾ ਸਕਦੇ ।';
    },
    inputTooLong: function (args) {
      var overChars = args.input.length - args.maximum;

      var charCount = (overChars != 1) ? ' ਅੱਖਰਾਂ ਨੂੰ ' : ' ਅੱਖਰ ';

      var message = 'ਕ੍ਰਿਪਾ ਕਰਕੇ ' + overChars + charCount + 'ਮਿਟਾਓ ।';

      return message;
    },
    inputTooShort: function (args) {
      var remainingChars = args.minimum - args.input.length;

      var message = 'ਕ੍ਰਿਪਾ ਕਰਕੇ ' + remainingChars + ' ਜਾਂ ' + remainingChars + ' ਤੋਂ ਵੱਧ ਅੱਖਰ ਵਰਤੋ ।';

      if(remainingChars > 1) {
        message = 'ਕ੍ਰਿਪਾ ਕਰਕੇ ' + remainingChars + ' ਜਾਂ ' + remainingChars + ' ਤੋਂ ਵੱਧ ਅੱਖਰਾਂ ਦੀ ਵਰਤੋਂ ਕਰੋ ।';
      }

      return message;
    },
    loadingMore: function () {
      return 'ਹੋਰ ਨਤੀਜੇ ਲੋਡ ਹੋ ਰਹੇ ਹਨ ...।';
    },
    maximumSelected: function (args) {
      var message = 'ਤੁਸੀਂ ਸਿਰਫ਼ ' + args.maximum + ' ਨਤੀਜਾ ਚੁਣ ਸਕਦੇ ਹੋ ।';

      if(args.maximum != 1) {
        message = 'ਤੁਸੀਂ ਸਿਰਫ਼ ' + args.maximum + ' ਨਤੀਜੇ ਚੁਣ ਸਕਦੇ ਹੋ ।';
      }

      return message;
    },
    noResults: function () {
      return 'ਨਤੀਜਾ ਨਹੀਂ ਮਿਲ ਰਿਹਾ ਹੈ ।';
    },
    searching: function () {
      return 'ਖ਼ੋਜ ਕਰ ਰਹੇਂ ਹਾਂ ...।';
    },
    removeAllItems: function () {
      return 'ਸਾਰੇ ਨਤੀਜੇ ਮਿਟਾਓ ।';
    }
  };
});
