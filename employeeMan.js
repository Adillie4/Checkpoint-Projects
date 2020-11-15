var myData = require('../testAssets/employeeManA')
// var myInput = require('../testAssets/employeeManA2')
var eMp = {}
module.exports = {
    beforeEach: browser => {
        eMp = browser.page.employeeManP()
        eMp.navigate()
    },
    after: browser => {
        eMp.end()
    },
    'ID, EditSave,EditCancel': browser => {
        myData.forEach(picks => {
            eMp
                .myCheck(picks)
        })
    // },
    // 'New Employe, Search, Delete': browser => {
    //     myInput.forEach(newlook => {
    //         eMp
    //             .myNew(newlook)
    //     })
    }
}
