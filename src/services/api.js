import { AJAX_REQUEST_METHODS } from '../utils/constants'
import { USER_API } from '../config/endpoints'


export async function fetchUsers(count) {
  return fetch(`${USER_API.USER_LIST}${count}`, {
    method: AJAX_REQUEST_METHODS.GET
  })
}

export async function fetchDetailedInfo(page) {
  return fetch(`${USER_API.DETAILED_INFO}${page}`, {
    method: AJAX_REQUEST_METHODS.GET
  })
}
