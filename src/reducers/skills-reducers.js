import { changeEditSkills, updateSkill, deleteSkill, addEmployeeProfile } from "../actions/action-type"

const state = {
    name : "Kanjar",
    discription: "Shahzaib is",
    skill : ["React JS", "Node", "Redux"],
    skillEdit : false
}

const skillReducer = ( mState = clone(state), action) => {
    switch(action.type) {
        case addEmployeeProfile:
            console.log("Reached Here", action.payload);
            mState.name = action.payload.name;
            mState.discription = action.payload.discription;
            mState.skill = action.payload.skill;
            return clone(mState);
        case changeEditSkills:
            mState.skillEdit = !mState.skillEdit;
            return clone(mState);
        case updateSkill:
            mState.skill = action.payload;
            return clone(mState);
        case deleteSkill:
            console.log("Before DeleteSkill", action.payload);
            mState.skill = action.payload;
            console.log("After DeleteSkill", mState);
            return clone(mState);

        default:
            return clone(mState);
        }
}


export default skillReducer;
const clone = (obj) => (JSON.parse(JSON.stringify(obj)));
console.log(state);