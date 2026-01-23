import Functions from '../model/functions.js'
import { HTTP_STATUS } from '../constant/httpStatus.js'

export const dashboard = async (req, res) => {
    try {
        const functionsData = await Functions.find()
        if(functionsData) {
            return res.status(HTTP_STATUS.OK).json({
                success: true,
                count: functionsData.length,
                data: functionsData
            })
        } else {
            return res.status(HTTP_STATUS.NOT_FOUND).json({
                message: "Empty"
            })
        }
    } catch (error) {
        
    }
}
