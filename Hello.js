/**
 * @NApiVersion 2.1
 */
 require(['N/record'], record => {
    // Create an object to hold name data for the contact
    const nameData = {
        firstname: 'John',
        middlename: 'Doe',
        lastname: 'Smith'
    };

    // Create a contact record
    let objRecord = record.create({
        type: record.Type.CONTACT,
        isDynamic: true
    });

    // Set the values of the subsidiary, firstname, middlename,
    // and lastname properties
    objRecord.setValue({
        fieldId: 'subsidiary',
        value: '1'
    });
    for (let key in nameData) {
        if (nameData.hasOwnProperty(key)) {
            objRecord.setValue({
                fieldId: key,
                value: nameData[key]
            });
        }
    }

    // Save the record
    let recordId = objRecord.save({
        enableSourcing: false,
        ignoreMandatoryFields: false
    });
});