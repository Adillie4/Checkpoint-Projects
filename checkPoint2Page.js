module.exports = {
    url: 'https://devmountain-qa.github.io/Automation-Basics/build/',
    elements: {
        //Evens & Odds
        eoInput: 'input[name="evenOddInput"]',
        evenResult: 'span[name="evenResults"]',
        oddResult: 'span[name="oddResults"]',
        splitBtn: 'button[name="evenOddButton"]',
        // Filter Objects
        foInput: 'input[name="objectFilterInput"]',
        filterOBtn: 'button[name="objectFilterButton"]',
        filterOresult: 'span[name="objectFilterResults"]',
        //Filter Strings
        fsInput: '#nameFilterInput',
        filterSBtn: '#nameFilterButton',
        filterSresult: 'span[name="nameFilterResults"]',
        //Palindrome
        pInput: 'input[name="palindromeInput"]',
        checkBtn: 'button[name="palindromeButton"]',
        pResult: 'span[name="palindromeResults"]',
        //Sum
        sInput1: 'input[name="sumInput1"]',
        sInput2: 'input[name="sumInput2"]',
        addBtn: 'button[name="sumButton"]',
        sumResult: 'span[name="sumResults"]'
    }
}