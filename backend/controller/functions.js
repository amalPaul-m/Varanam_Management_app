import Functions from '../model/functions.js'
import { HTTP_STATUS } from '../constant/httpStatus.js'

export const functions = async (req, res) => {
    const { name, date, time, location } = req.body

    try {
        const functionData = await Functions.find()
    } catch (error) {
        
    }
}
