var emCommand = {
    myCheck: function (data) {
        this
            .click(data.ec)
            .getText('#employeeID', result => {
                let idNumber = Number(result.value.slice(3))
                this
                    .verify.ok(idNumber > 0, `The ID (${idNumber}) is a positive number.`)
                    .verify.ok(idNumber % 1 === 0, `The ID (${idNumber}) is a whole number.`)
                this
                    .click(data.ec)
                    .clearValue('@nameF')
                    .pause(250)
                    .setValue('@nameF', data.nE)
                    .clearValue('@pNf')
                    .pause(250)
                    .setValue('@pNf', data.pNe)
                    .clearValue('@eAf')
                    .pause(250)
                    .setValue('@eAf', data.eE)
                    .clearValue('@tF')
                    .pause(250)
                    .setValue('@tF', data.tE)
                    .click('@cancelBtn')
                    .verify.valueContains('@nameF',data.oGn)
                    .verify.valueContains('@pNf',data.oGp)
                    .verify.valueContains('@eAf',data.oGe)
                    .verify.valueContains('@tF',data.oGt)
                    .pause(500)
                this
                    .click(data.ec)
                    .clearValue('@nameF')
                    .pause(250)
                    .setValue('@nameF', data.nE)
                    .clearValue('@pNf')
                    .pause(250)
                    .setValue('@pNf', data.pNe)
                    .clearValue('@eAf')
                    .pause(250)
                    .setValue('@eAf', data.eE)
                    .clearValue('@tF')
                    .pause(250)
                    .setValue('@tF', data.tE)
                    .click('@saveBtn')
                    .verify.valueContains('@nameF', data.nE)
                    .verify.valueContains('@pNf', data.pNe)
                    .verify.valueContains('@eAf', data.eE)
                    .verify.valueContains('@tF', data.tE)
                this
                    .click(data.ec)
                    .clearValue('@nameF')
                    .pause(250)
                    .setValue('@nameF',data.oGn)
                    .pause(500)
                    .clearValue('@pNf')
                    .pause(250)
                    .setValue('@pNf',data.oGp)
                    .pause(500)
                    .clearValue('@eAf')
                    .pause(250)
                    .setValue('@eAf',data.oGe)
                    .pause(500)
                    .clearValue('@tF')
                    .pause(250)
                    .setValue('@tF',data.oGt)
                    .pause(500)
                    .click('@saveBtn')
                return this
            })
    }
}
// var emCommand = {
//     myNew: function (input) {
//         this
//         .click('@newE')
//         .click('@deleteBtn')
//         .pause(800)
//         .api.acceptAlert()
//         this
//         .click('@addBtn')
//         .pause(200)
//         .api.acceptAlert()
//         this
//         .click('@newE')
//         .verify.containsText('@nameF',input.nEi)
//         .verify.containsText('@pNf','1111111111')
//         .verify.containsText('@eAf','abc')
//         .verify.containsText('@tF',input.nEi)
//         .clearValue('@nameF')
//         .setValue('@nameF',input.aDd)
//         .clearValue('@pNf')
//         .setValue('@pNf','2222222222')
//         .clearValue('@eAf')
//         .setValue('@eAf','gmail.com')
//         .clearValue('@tF')
//         .setValue('@tF','titletry')
//         .click('@searchBar')
//         .setValue('@searchBar','Claude')
//         .verify.valueContains('@listC','@cVr')
//         .click('@clearBtn')
//         .setValue('@searchBar','CEO')
//         .verify.valueContains('@listC','@bO')
//         .click('@clearBtn')
//         // BUG: Searching with ID doesn't work/Number input looks at phone number instead
//         // .setValue('@searchBar','626')
//         // .verify.valueContains('@listC','@Sti')
//         .setValue('@searchBar',input.aDd)
//         .click('@newE')
//         .click('@deleteBtn')
//         .api.acceptAlert()
//         this
//         .assert.not.elementPresent('@listC','@newE')
//         return this 
//     }
// }
module.exports = {
    url: 'https://devmountain-qa.github.io/employee-manager-v2/build/index.html',
    commands: [emCommand],
    elements: {
        searchBar: 'input[name="searchBox"]',
        clearBtn: 'button[name="clearSearch"]',
        saveBtn: 'button[name="save"]',
        cancelBtn: 'button[name="cancel"]',
        deleteBtn: 'button[name="delete"]',
        addBtn: 'li[name="addEmployee"]',
        listC:'ul[class="listContainer"]',
        nameF: 'input[name="nameEntry"]',
        pNf: 'input[name="phoneEntry"]',
        eAf: 'input[name="emailEntry"]',
        tF: 'input[name="titleEntry"]',
        nameH: 'p[name="employeeName"]',
        nameL: '.listText',
        bO: 'li[name="employee1"]',
        mB: 'li[name="employee5"]',
        pW: 'li[name="employee14"]',
        tO: 'li[name="employee61"]',
        dB: 'li[name="employee230"]',
        hW: 'li[name="employee519"]',
        rE: 'li[name="employee598"]',
        lW: 'li[name="employee617"]',
        lB: 'li[name="employee622"]',
        cVr: 'li[name="employee624"]',
        Sti: 'li[name="employee626"]',
        newE:'li[name="employee6727"]',
    }
}