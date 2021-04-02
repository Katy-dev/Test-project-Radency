import React from "react";

const ValidationField = (props) => {
    let usersList = props;

    const fullNameValidation = name => {
        let newName = name.trim();
        if (newName !== "") {
            return true;
        }
        return false;
    }

    const phoneValidation = phone => {
        let phoneNumber = /^\+1?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
        let newPhone = phone.trim();
        let someUser = usersList.filter(function (user) {
            return user["Phone"] === newPhone;
        });
        let indexUser = usersList.indexOf(someUser[1]);
        let col = document.getElementById("duplicate");
        if (col) col.innerText = indexUser;

        if (phoneNumber.test(newPhone)) {
            return true;
        }

        return false;
    }

    const emailValidation = email => {
        const RegExp = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        let newEmail = email.trim();
        if (RegExp.test(newEmail)) {
            return true;
        }
        return false;
    }
    const ageValidation = age => {
        if (age >= 21 && !Number.isInteger(age) && age < 90) {
            return true;
        }
        return false;
    };

    const experienceValidation = experience => {
        const currentAge = 21;
        if (experience >= 0 && experience < currentAge) {
            return true;
        }
        return false;
    }

    const expirationDataValidation = data => {
        let todayDate = new Date().toLocaleDateString();
        let currentDate = new Date(data).toLocaleDateString();
        let data1 = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;
        let data2 = /^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/;
        let newData = data.trim();
        if (currentDate > todayDate) {
            if (data1.test(newData) || data2.test(newData)) {
                return true;
            }
        }
        return false;
    }

    const earlyIncomeValidation = data => {
        let million = 1e6;
        let newData = data.trim();
        if (!Number.isInteger(newData) && newData < million) {
            return Number.parseFloat(newData).toFixed(2);
        }
        return false;
    }

    const hasChildrenValidation = data => {
        let newData = data.trim();
        if (newData === "TRUE" || newData === "FALSE" || newData === "") {
            return true;
        }
        return false;
    }

    const licenseNumberValidation = data => {
        const RegExp = /[a-zA-Z0-9]{6}/;
        if (RegExp.test(data.trim())) {
            return true;
        }
        return false;
    }

    const licenseStateValidation = data => {
        if (typeof data.trim() === "string") {
            return true;
        }
        return false;
    }

    return {
        fullNameValidation,
        phoneValidation,
        ageValidation,
        emailValidation,
        experienceValidation,
        earlyIncomeValidation,
        hasChildrenValidation,
        licenseStateValidation,
        expirationDataValidation,
        licenseNumberValidation,
    }
}

export default ValidationField;