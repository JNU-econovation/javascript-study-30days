function setDate() {
    const now = new Date();
    const seconds =  now.getSeconds();
    console.log(seconds);

    setInterval(setDate, 1000);
}