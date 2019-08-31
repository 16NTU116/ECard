import { changeEditSkills, updateSkill, deleteSkill, addEmployeeProfile } from "../actions/action-type"

const state = {
    employees : [],
    skillEdit : false
}

const skillReducer = ( mState = clone(state), action) => {
    switch(action.type) {
        case addEmployeeProfile:
            console.log("Reached Here", action.payload);
            mState.employees.push(action.payload);
            console.log("Reached Here", mState.employees);
            return clone(mState);
        case changeEditSkills:
            mState.skillEdit = !mState.skillEdit;
            return clone(mState);
        case updateSkill:
            mState.employees[action.payload.index].skill = action.payload.value;
            return clone(mState);
        case deleteSkill:
            console.log("Before DeleteSkill", action.payload);
            mState.employees[action.payload.index].skill = action.payload.value;
            console.log("After DeleteSkill", mState);
            return clone(mState);

        default:
            return clone(mState);
        }
}


export default skillReducer;
const clone = (obj) => (JSON.parse(JSON.stringify(obj)));
console.log(state);