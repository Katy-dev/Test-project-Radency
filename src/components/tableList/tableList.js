import style from "./tableList.module.scss";
import ValidationField from "./../validation/validation";
import ErrorComponent from "../common/errorComponent";

const TableList = (props) => {
    const newList = props.usersList;
    const messageError = "File format is not correct";

    const {
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
        isEmptyField
    } = ValidationField(newList);

    return (
        <div>
            <table className={style.wrapper__table}>
                <thead className={style.wrapper__table__header}>
                <tr>
                    <th
                        className={style.wrapper__table__th}>
                        ID
                    </th>
                    <th
                        className={style.wrapper__table__th}>
                        Full Name
                    </th>
                    <th
                        className={style.wrapper__table__th}>
                        Phone
                    </th>
                    <th
                        className={style.wrapper__table__th}>
                        Email
                    </th>
                    <th
                        className={style.wrapper__table__th}>
                        Age
                    </th>
                    <th
                        className={style.wrapper__table__th}>
                        Experience
                    </th>
                    <th
                        className={style.wrapper__table__th}>
                        Yearly income
                    </th>
                    <th
                        className={style.wrapper__table__th}>
                        Has children
                    </th>
                    <th
                        className={style.wrapper__table__th}>
                        License states
                    </th>
                    <th
                        className={style.wrapper__table__th}>
                        Expiration date
                    </th>
                    <th
                        className={style.wrapper__table__th}>
                        License number
                    </th>
                    <th
                        className={style.wrapper__table__th}>
                        Duplicate with
                    </th>
                </tr>
                </thead>
                <tbody>
                {newList ? (
                    newList.map((user, index) => (
                        <tr key={index}
                            className={style.wrapper__table__tr}>
                            <td
                                className={style.wrapper__table__td}>{++index}</td>
                            <td
                                className={`${fullNameValidation(user["Full Name"]) ? `${style.wrapper__table__td}` : `${style.wrapper__table__td__error}`}`}>
                                {user["Full Name"]}</td>
                            <td
                                className={`${phoneValidation(user["Phone"]) ? `${style.wrapper__table__td}` : `${style.wrapper__table__td__error}`}`}>
                                {user["Phone"]}</td>
                            <td
                                className={`${emailValidation(user["Email"]) ? `${style.wrapper__table__td}` : `${style.wrapper__table__td__error}`}`}>
                                {user["Email"]}</td>
                            <td
                                className={`${ageValidation(user["Age"]) ? `${style.wrapper__table__td}` : `${style.wrapper__table__td__error}`}`}>
                                {user["Age"]}</td>
                            <td
                                className={`${experienceValidation(user["Experience"]) ? `${style.wrapper__table__td}` : `${style.wrapper__table__td__error}`}`}>
                                {user["Experience"]}</td>
                            <td
                                className={`${earlyIncomeValidation(user["Yearly income"]) ? `${style.wrapper__table__td}` : `${style.wrapper__table__td__error}`}`}>
                                {user["Yearly income"]}</td>
                            <td
                                className={`${hasChildrenValidation(user["Has children"]) ? `${style.wrapper__table__td}` : `${style.wrapper__table__td__error}`}`}>
                                {user["Has children"]}</td>
                            <td
                                className={`${licenseStateValidation(user["License states"]) ? `${style.wrapper__table__td}` : `${style.wrapper__table__td__error}`}`}>
                                {user["License states"].trim().substr(0, 2).toUpperCase()}</td>
                            <td
                                className={`${expirationDataValidation(user["Expiration date"]) ? `${style.wrapper__table__td}` : `${style.wrapper__table__td__error}`}`}>
                                {user["Expiration date"]}</td>
                            <td
                                className={`${licenseNumberValidation(user["License number"]) ? `${style.wrapper__table__td}` : `${style.wrapper__table__td__error}`}`}>
                                {user["License number"]}</td>
                            <td id="duplicate" className={style.wrapper__table__td}></td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td className={style.wrapper__table__emptyRow} colSpan={12}>None users</td>
                    </tr>
                )}
                </tbody>
            </table>
            {isEmptyField && (<ErrorComponent message={messageError}/>)}
        </div>
    )
}

export default TableList;
