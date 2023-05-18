import axios from "axios";

const baseUrl = "http://jeromelim29-001-site1.atempurl.com/api/"

export default {
    eventClient(url = baseUrl + "EventClient/") {
        return {
            fetchAll: () => axios.get(url),
            fetchById: id => axios.get(url + id),
            create: newRecord => axios.post(url, newRecord),
            update: (id, updateRecord) => axios.put(url + id, updateRecord),
            delete: id => axios.delete(url + id)
        }
    }
}