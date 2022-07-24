const extensionName = `IPIWO Clean Buyer - Extension`;
const footerWarningClassName = "ipiwo-footer-warning";
const footerWarnings = document.body.getElementsByClassName(footerWarningClassName);

if (footerWarnings) {
    for (const footerWarningElement of footerWarnings) {
        footerWarningElement.remove();
    }
    console.log(`Removed warning footer from page - ${extensionName}.`);
} else {
    console.log(`Did not find warning footer on page - ${extensionName}.`);
}
