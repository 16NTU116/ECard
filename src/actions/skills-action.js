import { changeEditSkills, updateSkill, deleteSkill, addEmployeeProfile } from "./action-type";

export const editSkills = () => dispatch =>{
    const state = {
        type: changeEditSkills,
        payload : null
    }
    dispatch(state);
}

export const updateSkills = (updateSkills) => dispatch =>{
    const state = {
        type: updateSkill,
        payload : updateSkills
    }
    dispatch(state);
}

export const deleteSkills = (deleteSkills) => dispatch =>{
    const state = {
        type: deleteSkill,
        payload : deleteSkills
    }
    dispatch(state);
}

export const addProfile = (addProfile) => dispatch =>{
    const state = {
        type: addEmployeeProfile,
        payload : addProfile
    }
    dispatch(state);
}