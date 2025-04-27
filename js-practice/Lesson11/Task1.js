function timeout(text, milliseconds) {
    setTimeout(() => {
        console.log(text);
      }, milliseconds);
}
timeout("Hello, lets wait", 5000);