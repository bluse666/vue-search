import {REQ_ING,REQ_FAIL,REQ_SUCCESS_HASUSERS,REQ_SUCCESS_NONEUSERS} from './mutations_names'
import axios from 'axios'

export default{
  async searchAll({commit,state}){
    const url = `https://api.github.com/search/users?q=${state.searchName}`
    commit(REQ_ING)
    try{
      const response = await axios.get(url)
      let items = response.data.items
      if(items.length){
        items = items.map(item => ({
          href:item.html_url,
          src:item.avatar_url,
          name:item.login
        }))
        commit(REQ_SUCCESS_HASUSERS,items)
      }else{
        commit(REQ_SUCCESS_NONEUSERS)
      }
    }catch(e){
      commit(REQ_FAIL,{errorMsg:e})
    }
  }
}
