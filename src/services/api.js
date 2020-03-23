import { AJAX_REQUEST_METHODS } from '../utils/constants'
import { USER_API } from '../config/endpoints'

async function fetchUsers(count, page) {
  return fetch(`${USER_API.USER_LIST}${count}&page=${page}`, {
    method: AJAX_REQUEST_METHODS.GET
  })
}

async function fetchDetailedInfo(page) {
  return fetch(`${USER_API.DETAILED_INFO}${page}`, {
    method: AJAX_REQUEST_METHODS.GET
  })
}

export { fetchUsers, fetchDetailedInfo }
