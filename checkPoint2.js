var checkPoint2 = {}
module.exports = {
    beforeEach: browser => {
        checkPoint2 = browser.page.checkPoint2Page()
        checkPoint2
            .navigate()
    },
    after: browser => {
        checkPoint2
            .end()
    },
    'Evens & Odds': browser => {
        var mySearch = {
            search1: '2,42,102',
            search2: '5,53,109',
            search3: '2,5,42,53,102,109',
            search4: 'AD',
            search5: '!!',
            search6: '12!', //BUG
            search7: '12a', //BUG
            search8: '-4',
            result1: 'Evens: [2,42,102]',
            result2: 'Odds: [5,53,109]',
            result3: '[null]',
            result4: 'Evens: [-4]',
        }
        checkPoint2
            //Testing Even Numbers
            .setValue('@eoInput', mySearch.search1)
            .click('@splitBtn')
            .expect.element('@evenResult').text.to.contain(mySearch.result1)
        checkPoint2
            //Testing Odd Numbers
            .clearValue('@eoInput')
            .setValue('@eoInput', mySearch.search2)
            .click('@splitBtn')
            .expect.element('@oddResult').text.to.contain(mySearch.result2)
        checkPoint2
            //Testing Even & Odd combination entry
            .clearValue('@eoInput')
            .setValue('@eoInput', mySearch.search3)
            .click('@splitBtn')
            .expect.element('@oddResult', '@evenResult').text.to.contain(mySearch.result2, mySearch.result1)
        checkPoint2
            //Testing letters entry
            .clearValue('@eoInput')
            .setValue('@eoInput', mySearch.search4)
            .click('@splitBtn')
            .expect.element('@oddResult', '@evenResult').text.to.contain(mySearch.result3)
        checkPoint2
            //Testing special character entry 
            .clearValue('@eoInput')
            .setValue('@eoInput', mySearch.search5)
            .click('@splitBtn')
            .expect.element('@oddResult', '@evenResult').text.to.contain(mySearch.result3)
        checkPoint2
            //Testing even number and special character combination
            //BUG: Even numbers show up as odd if you include a special character or letter
            // .clearValue('@eoInput')
            // .setValue('@eoInput', mySearch.search6)
            // .click('@splitBtn')
            // .expect.element('@oddResult').text.to.contain(mySearch.result3)
            // checkPoint2
            //Testing even number and letter combination 
            //BUG: Even number show up as an odd if a letter is included
            // .clearValue('@eoInput')
            // .setValue('@eoInput', mySearch.search7)
            // .click('@splitBtn')
            // .expect.element('@oddResult', '@evenResult').text.to.contain(mySearch.result3)
            // checkPoint2
            //Testing a blank entry 
            .clearValue('@eoInput')
            .click('@splitBtn')
            .expect.element('@oddResult', '@evenResult').text.to.contain(mySearch.result3)
        checkPoint2
            //Testing negitive number
            .setValue('@eoInput', mySearch.search8)
            .click('@splitBtn')
            .expect.element('@evenResult').text.to.contain(mySearch.result4)
        checkPoint2
    },
    'Filter Object': browser => {
        var mySearch2 = { //Shouldn't I be able to search values as well
            search1: 'name',
            search2: 'title',
            search3: 'age',
            search4: 'hairColor',
            search5: 'age,title',
            search6: '24',
            search7: 'Null Test',
            result1: 'Jimmy Joe',
            result2: 'Jeremy Schrader',
            result3: 'Carly Armstrong',
            result4: 'null',
        }
        // BUG: Blank entry doesn't give error/null message. Just blank result.
        // checkPoint2
        //   .click('@filterOBtn')
        //   .expect.element('@filterOresult').text.contain(mySearch2.result4)
        checkPoint2
            //Testing "name"
            .setValue('@foInput', mySearch2.search1)
            .click('@filterOBtn')
            .verify.containsText('@filterOresult', mySearch2.result1)
            .verify.containsText('@filterOresult', mySearch2.result2)
            .verify.containsText('@filterOresult', mySearch2.result3)
            //Testing "title"
            .clearValue('@foInput')
            .setValue('@foInput', mySearch2.search2)
            .click('@filterOBtn')
            .verify.containsText('@filterOresult', mySearch2.result1)
            .verify.containsText('@filterOresult', mySearch2.result3)
            //Testing "age"
            .clearValue('@foInput')
            .setValue('@foInput', mySearch2.search3)
            .click('@filterOBtn')
            .verify.containsText('@filterOresult', mySearch2.result1)
            .verify.containsText('@filterOresult', mySearch2.result2)
            //Testing "hairColor"
            .clearValue('@foInput')
            .setValue('@foInput', mySearch2.search4)
            .click('@filterOBtn')
            .verify.containsText('@filterOresult', mySearch2.result2)
        //Testing two key entries
        // Possible BUG: Can only search one key (ask DEV if that is intended function)
        // .setValue('@foInput', mySearch2.search5)
        // .click('@filterOBtn')
        // .verify.containsText('@filterOresult', mySearch2.result1)
        // .verify.containsText('@filterOresult', mySearch2.result2)
        // .verify.containsText('@filterOresult', mySearch2.result3)
        //Testing value entry 
        //Possible BUG: Any properity of an object should be searchable 
        // .clearValue('@foInput')
        // .setValue('@foInput', mySearch2.search6)
        // .click('@filterOBtn')
        // .verify.containsText('@filterOresult', mySearch2.result2)
        //Testing a invalid entry 
        //BUG: Invalid entry does not produce Null/Error message
        // .setValue('@foInput', mySearch2.search7)
        // .click('@filterOBtn')
        // .verify.containsText('@filterOresult', mySearch2.result4)
    },
    'Filter Strings': browser => {
        var mySearch3 = {
            search1: 'J',
            search2: 'Je',
            search3: 'a',
            search4: '1',
            result1: 'Filtered Names: [ "James", "Jessica", "Jennifer" ]',
            result2: 'Filtered Names: [ "Jessica", "Jennifer" ]',
            result3: 'Filtered Names: [ "James", "Jessica", "Blake", "Mark", "Maddy" ]',
            result4: 'null',
        }
        checkPoint2
            //Testing capital letter
            .setValue('@fsInput', mySearch3.search1)
            .click('@filterSBtn')
            .expect.element('@filterSresult').text.to.contain(mySearch3.result1)
        checkPoint2
            //Testing capital letter with lowercase
            .clearValue('@fsInput')
            .setValue('@fsInput', mySearch3.search2)
            .click('@filterSBtn')
            .expect.element('@filterSresult').text.to.contain(mySearch3.result2)
        checkPoint2
            //Testing lowercase letter
            .clearValue('@fsInput')
            .setValue('@fsInput', mySearch3.search3)
            .click('@filterSBtn')
            .expect.element('@filterSresult').text.to.contain(mySearch3.result3)
        checkPoint2
        //Testing number 
        //BUG: Null should appear but result field is left blank
        // .clearValue('@fsInput')
        // .setValue('@fsInput', mySearch3.search4)
        // .click('@filterSBtn')
        // .expect.element('@filterSresult').text.to.contain(mySearch3.result4)
        //Testing blank entry
        //BUG: Leaving field blank should relate "null" enters all the names as a result
        // .clearValue('@fsInput')
        // .click('@filterSBtn')
        // .expect.element('@filterSresult').text.to.contain('null')
        // checkPoint2
    },
    'Palindrome': browser => {
        var mySearch4 = {
            search1: 'A',
            search2: '121',
            search3: '!@!@!',
            search4: 'level',
            search5: 'not',
            search6: '123',
            resultT: 'true',
            resultF: 'false',
        }
        checkPoint2
            //Testing blank entry
            .click('@pInput')
            .click('@checkBtn')
            .expect.element('@pResult').text.to.contain(mySearch4.resultT)
        checkPoint2
            //Testing single letter palindrome
            .setValue('@pInput', mySearch4.search1)
            .click('@checkBtn')
            .expect.element('@pResult').text.to.contain(mySearch4.resultT)
        checkPoint2
            //Testing number palindrome
            .clearValue('@pInput')
            .setValue('@pInput', mySearch4.search2)
            .click('@checkBtn')
            .expect.element('@pResult').text.to.contain(mySearch4.resultT)
        checkPoint2
            //Testing special character palindrome
            .clearValue('@pInput')
            .setValue('@pInput', mySearch4.search3)
            .click('@checkBtn')
            .expect.element('@pResult').text.to.contain(mySearch4.resultT)
        checkPoint2
            //Testing word palindrome
            .clearValue('@pInput')
            .setValue('@pInput', mySearch4.search4)
            .click('@checkBtn')
            .expect.element('@pResult').text.to.contain(mySearch4.resultT)
        checkPoint2
            //Testing invalid word
            .clearValue('@pInput')
            .setValue('@pInput', mySearch4.search5)
            .click('@checkBtn')
            .expect.element('@pResult').text.to.contain(mySearch4.resultF)
        checkPoint2
            //Testing invalid numbers
            .clearValue('@pInput')
            .setValue('@pInput', mySearch4.search6)
            .click('@checkBtn')
            .expect.element('@pResult').text.to.contain(mySearch4.resultF)
        checkPoint2

    },
    'Sum': browser => {
        var mySearch5 = {
            search1: '2',
            search2: '-8',
            search3: '12',
            search4: '-3',
            search5: '0',
            result1: '4',
            result2: '-6',
            result3: 'Sum: NaN',
        }
        //Testing blank entry
        // BUG: Clicking 'Add' with no entries gives result of 0 instead of NaN or Null
        // Low BUG: Error message uniformity- NaN, blank, null...
        // checkPoint2
        //     .click('@addBtn')
        //     .expect.element('@sumResult').text.to.contain(mySearch5.result3)
        checkPoint2
            //Testing 2+2
            .setValue('@sInput1', mySearch5.search1)
            .setValue('@sInput2', mySearch5.search1)
            .click('@addBtn')
            .expect.element('@sumResult').text.to.contain(mySearch5.result1)
        checkPoint2
            //Testing negitive and postive addition- positive result 
            .clearValue('@sInput1')
            .clearValue('@sInput2')
            .setValue('@sInput1', mySearch5.search2)
            .setValue('@sInput2', mySearch5.search3)
            .click('@addBtn')
            .expect.element('@sumResult').text.to.contain(mySearch5.result1)
        checkPoint2
            //Testing negitive and positive addition- negitive result
            .clearValue('@sInput1')
            .clearValue('@sInput2')
            .setValue('@sInput1', mySearch5.search2)
            .setValue('@sInput2', mySearch5.search1)
            .click('@addBtn')
            .expect.element('@sumResult').text.to.contain(mySearch5.result2)
        checkPoint2
            //Testing negitive addition
            .clearValue('@sInput1')
            .clearValue('@sInput2')
            .setValue('@sInput1', mySearch5.search4)
            .setValue('@sInput2', mySearch5.search4)
            .click('@addBtn')
            .expect.element('@sumResult').text.to.contain(mySearch5.result2)
        checkPoint2
            //Testing adding '0'
            .clearValue('@sInput1')
            .clearValue('@sInput2')
            .setValue('@sInput1', mySearch5.search5)
            .setValue('@sInput2', mySearch5.search5)
            .click('@addBtn')
            .expect.element('@sumResult').text.to.contain(mySearch5.search5)
    }
}