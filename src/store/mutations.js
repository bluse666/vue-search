import {SEARCH_NAME,REQ_ING,REQ_FAIL,REQ_SUCCESS_HASUSERS,REQ_SUCCESS_NONEUSERS} from './mutations_names'
export default{
  [SEARCH_NAME](state,obj){
    state.searchName = obj.searchName
  },
  [REQ_ING](state){
    state.firstShow = false
    state.loading = true
  },
  [REQ_FAIL](state,obj){
    state.firstShow = false
    state.loading = false
    state.errorMsg = obj.errorMsg
  },
  [REQ_SUCCESS_NONEUSERS](state){
    state.firstShow = false
    state.loading = false
    state.errorMsg = ""
    state.noneMsg = "查无此人"
  },
  [REQ_SUCCESS_HASUSERS](state,users){
    state.firstShow = false
    state.loading = false
    state.errorMsg = ""
    state.users = users
  }
}
